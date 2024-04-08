import Head from "next/head";
import ServicesSection from "@/components/layout/ServicesSection";
import StrategySection from "@/components/layout/StrategySection";
import Technologies from "@/components/layout/Technologies";
// import ProjectPage from "@/components/ProjectPage";
// import ProjectSection from "@/components/ProjectSection";
// import TestimonialsSection from "@/components/layout/TestimonialsSection";
// import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import { GET_APPROACH_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";

export default function Approach(props) {
    const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;

    console.log('CommanPageData', CommanPageData);


    return (
        <>
            <Head>
                <title>PROJECTS</title>
            </Head>

            {
                (CommanPageData != null && CommanPageData.strategyTitle != null && CommanPageData.strategySection != null) &&
                <StrategySection strategyTitle={CommanPageData?.strategyTitle} strategySection={CommanPageData?.strategySection} />
            }

            {
                (CommanPageData?.serviceTitle != null && CommanPageData?.selectService != null && CommanPageData?.sShortTitle != null && CommanPageData?.serviceDetailButtonTitle != null && CommanPageData?.marqueeContent != null) &&

                <ServicesSection serviceTitle={CommanPageData?.serviceTitle} services={CommanPageData?.selectService} shortTitle={CommanPageData?.sShortTitle} serviceDetailButtonTitle={CommanPageData?.serviceDetailButtonTitle} marqueeContent={CommanPageData?.marqueeContent} />

            }
            {
                (CommanPageData?.technologieTitle != null && CommanPageData?.technologieDescription != null && CommanPageData?.technologiesLogos != null) &&
                <Technologies technologieTitle={CommanPageData?.technologieTitle} technologieDescription={CommanPageData?.technologieDescription} technologiesLogos={CommanPageData?.technologiesLogos} />
            }
            {/* 
            {
                (CommanPageData?.testimonialsMeta != null) &&
                <TestimonialsSection testimonialsMeta={CommanPageData?.testimonialsMeta} />
            }
            {
                (CommanPageData?.testimonialsMeta != null) &&
                <TestiMonialsSlider testimonialsMeta={CommanPageData?.testimonialsMeta} />
            }

            {
                (CommanPageData?.pTitle != null && CommanPageData?.pButtonName != null && CommanPageData?.selectProject != null) &&
                <ProjectSection projectTitle={CommanPageData?.pTitle} projectButtonName={CommanPageData?.pButtonName} selectProject={CommanPageData?.selectProject} />
            } */}




        </>
    )
}


export const getStaticProps = async () => {
    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_APPROACH_PAGE_DATA, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.data.data).catch(error => error);
    return {
        props: {
            result,
        }
    }
};

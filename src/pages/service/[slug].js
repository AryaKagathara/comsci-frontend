import Head from "next/head";
import InnerBanner from "@/components/layout/InnerBanner";
import Process from "@/components/Process";
import StrategySection from "@/components/layout/StrategySection";
import ProjectSection from "@/components/ProjectSection";
import ServicesType from "@/components/ServicesType";
import { GET_SERVIDE_DETAIL_PAGE_DATA, GET_ALL_SERVICE_SLUG } from "@/queries/graphql_queries";
import axios from "axios";

export default function ServicesDetail(props) {
    // console.log("Service Detail page data", props)
    let serviceDetail = props?.result?.service;
    const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;
    // console.log('props:', serviceDetail?.serviceDetailOptions?.pTitle);

    console.log("Service Detail page data", serviceDetail?.flexibleContentSection?.flexibleContent)
    return (
        <>
            <Head>
                <title>SERVICES DETAIL</title>
            </Head>
            {
                (serviceDetail?.featuredImage != null) &&
                <InnerBanner bannerImage={serviceDetail?.featuredImage} />
            }
            {
                (serviceDetail?.tags != null && serviceDetail?.title != null && serviceDetail?.content != null) &&
                <Process tags={serviceDetail?.tags} serviceTitle={serviceDetail?.title} serviceDescription={serviceDetail?.content} />
            }

            {
                (serviceDetail?.serviceDetailOptions?.smDetails != null) &&
                <ServicesType serviceData={serviceDetail?.serviceDetailOptions?.smDetails} />
            }
            {
                (serviceDetail?.flexibleContentSection?.flexibleContent?.length > 0) &&

                serviceDetail?.flexibleContentSection?.flexibleContent.map(function (contentData, index) {
                    const { fieldGroupName } = contentData;
                    if (fieldGroupName == "Service_Flexiblecontentsection_FlexibleContent_StrategySection") {
                        return (
                            (contentData != null && contentData.ssTitle != null && contentData.strategySection != null) &&
                            <StrategySection strategyTitle={contentData?.ssTitle} strategySection={contentData?.strategySection} />
                        )
                    }
                })
            }
            {/* {
                (serviceDetail?.serviceDetailOptions?.pTitle != null && serviceDetail?.serviceDetailOptions?.pButtonName != null && serviceDetail?.serviceDetailOptions?.selectProject != null) &&
                <
                     projectTitle={serviceDetail?.serviceDetailOptions?.pTitle} projectButtonName={serviceDetail?.serviceDetailOptions?.pButtonName} selectProject={serviceDetail?.serviceDetailOptions?.selectProject} />
            } */}


        </>
    )
}

export async function getStaticPaths() {

    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_ALL_SERVICE_SLUG, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.data.data).catch(error => error);

    // Extract the slugs from the response data
    const slugs = result.services.nodes.map((service) => service.slug);

    // Map the slugs to an array of path objects
    const paths = slugs.map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,


    };
}



export const getStaticProps = async (context) => {

    let slug = context.params.slug;

    const result = await axios.post(
        process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
        {
            query: GET_SERVIDE_DETAIL_PAGE_DATA.query,
            variables: {
                id: slug,
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
        .then(res => res.data.data)
        .catch(error => error);


    return {
        props: {
            result,
        }
    }
};


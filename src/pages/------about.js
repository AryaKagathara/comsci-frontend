import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ResultSection from "@/components/ResultSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import { GET_ABOUT_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";

export default function About(props) {
    const AboutPageData = props?.result?.page?.aboutPageOptions;
    const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;

    return (
        <>
            <Head>
                <title>ABOUT US</title>
            </Head>
            {
                (AboutPageData?.apShortTitle != null && AboutPageData?.apTitle != null && AboutPageData?.apMeta != null) &&
                <AboutSection shortTitle={AboutPageData?.apShortTitle} title={AboutPageData?.apTitle} metaData={AboutPageData?.apMeta} />
            }
            {
                (AboutPageData?.otTitle != null && AboutPageData?.selectTeamMember != null) &&
                <TeamSection title={AboutPageData?.otTitle} teamMember={AboutPageData?.selectTeamMember} />
            }
            {
                (AboutPageData?.orTitle != null && AboutPageData?.orMeta != null) &&
                <ResultSection title={AboutPageData?.orTitle} metaData={AboutPageData?.orMeta} />
            }
            {
                (CommanPageData?.testimonialsMeta != null) &&
                <TestimonialsSection testimonialsMeta={CommanPageData?.testimonialsMeta} />
            }
            {
                (CommanPageData?.testimonialsMeta != null) &&
                <TestiMonialsSlider testimonialsMeta={CommanPageData?.testimonialsMeta} />
            }
        </>
    )
}

export const getStaticProps = async () => {
    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_ABOUT_PAGE_DATA, {
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

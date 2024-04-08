import Head from "next/head";
import Faqsection from "@/components/layout/Faqsection";
import { GET_APPROACH_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";

export default function Approach(props) {
    const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;
    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>

            {
                (CommanPageData != null && CommanPageData.faqContent != null && CommanPageData.faqTitle != null && CommanPageData.faqDescription != null) &&
                <Faqsection faqContent={CommanPageData?.faqContent} faqTitle={CommanPageData.faqTitle} faqDescription={CommanPageData?.faqDescription} />
            }
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

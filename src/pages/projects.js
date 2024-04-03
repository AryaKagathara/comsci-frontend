import Head from "next/head";
import ProjectPage from "@/components/ProjectPage";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import { GET_PROJECT_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";

export default function Projects(props) {
  console.log('props?.result?.page?.projectOptions?.pEnterTopText', props?.result);

  const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;

  return (
    <>
      <Head>
        <title>PROJECTS</title>
      </Head>

      {
        (props?.result?.projects != null && props?.result?.page?.projectOptions?.pEnterTopText != null) &&
        <ProjectPage projectDetails={props?.result?.projects} projectPageTitle={props?.result?.page?.projectOptions?.pEnterTopText} />
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
  const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_PROJECT_PAGE_DATA, {
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

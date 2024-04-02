import Head from "next/head";
import ProjectPage from "@/components/ProjectPage";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";

import { GET_PROJECT_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";

export default function Projects(props) {
  console.log('Project Page data:', props?.result?.page?.projectOptions?.testimonialsMeta);
  console.log('Project Page data:', props);

  return (
    <>
      <Head>
        <title>PROJECTS</title>
      </Head>
      <ProjectPage projectDetails={props?.result?.projects} projectPageTitle={props?.result?.page?.projectOptions?.pEnterTopText} />
      <TestimonialsSection testimonialsMeta={props?.result?.page?.projectOptions?.testimonialsMeta} />
      {/* <TestiMonialsSlider /> */}


      {(props?.result?.page?.projectOptions?.testimonialsMeta != null) && <TestiMonialsSlider testimonialsMeta={props?.result?.page?.projectOptions?.testimonialsMeta} />}


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

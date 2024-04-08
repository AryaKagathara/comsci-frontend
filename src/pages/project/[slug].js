// import Head from 'next/head';
// import ProjectDetailBanner from '@/components/ProjectDetailBanner';
// import ProjectDetailContent from '@/components/ProjectDetailContent';
// import ProjectDetailImage from '@/components/ProjectDetailImage';

// export default function demoproject() {
//   return (
//     <>
//       <Head>
//         <title>ProjectDemo</title>
//       </Head>
//       <ProjectDetailBanner />
//       <ProjectDetailContent />
//       <ProjectDetailImage />
//     </>
//   )
// }



import Head from "next/head";

import ProjectDetailBanner from '@/components/ProjectDetailBanner';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import ProjectDetailImage from '@/components/ProjectDetailImage';
import { GET_PROJECT_DETAIL_PAGE_DATA, GET_ALL_PROJECT_SLUG } from "@/queries/graphql_queries";
import axios from "axios";

export default function BlogDetail(props) {
  let projectDetails = props?.result?.project;
  return (
    <>
      <Head>
        <title>Project Detail</title>
      </Head>
      {
        (projectDetails?.featuredImage?.node?.sourceUrl != null) &&
        <ProjectDetailBanner bannerImage={projectDetails?.featuredImage?.node?.sourceUrl} bannerImageDetails={projectDetails?.featuredImage?.node?.mediaDetails} />
      }
      {
        (projectDetails?.content != null && projectDetails?.title != null) &&
        <ProjectDetailContent bannerContent={projectDetails?.content} projectTitle={projectDetails?.title} />
      }
      {
        (projectDetails?.projectDetailPageOptions?.projectDetailImages != null) &&
        <ProjectDetailImage projectImages={projectDetails?.projectDetailPageOptions?.projectDetailImages} />
      }

    </>
  )
}

export async function getStaticPaths() {

  const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_ALL_PROJECT_SLUG, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.data.data).catch(error => error);

  console.log('result.projects.nodes:', result.projects.nodes);

  // Extract the slugs from the response data
  const slugs = result.projects.nodes.map((projects) => projects.slug);

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
      query: GET_PROJECT_DETAIL_PAGE_DATA.query,
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


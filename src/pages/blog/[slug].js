// import Head from "next/head";
// import BlogDetailSection from "@/components/layout/BlogDetailSection";

// export default function BlogDetail(props) {
//     console.log('props:', props);

//     return (
//         <>
//             <Head>
//                 <title>BLOG DETAIL</title>
//             </Head>
//             <BlogDetailSection />
//         </>
//     )
// }













import Head from "next/head";

import BlogDetailSection from "@/components/layout/BlogDetailSection";
import { GET_POST_DETAIL_PAGE_DATA, GET_ALL_POST_SLUG } from "@/queries/graphql_queries";
import axios from "axios";

export default function BlogDetail(props) {
    let postDetails = props?.result?.post;

    return (
        <>
            <Head>
                <title>BLOG DETAIL</title>
            </Head>

            <BlogDetailSection postDetail={postDetails} />
        </>
    )
}

export async function getStaticPaths() {

    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_ALL_POST_SLUG, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.data.data).catch(error => error);

    // Extract the slugs from the response data
    const slugs = result.posts.nodes.map((post) => post.slug);

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
            query: GET_POST_DETAIL_PAGE_DATA.query,
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


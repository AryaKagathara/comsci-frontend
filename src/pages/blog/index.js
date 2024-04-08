import Head from "next/head";
import BlogpageSection from "@/components/BlogpageSection";
import { GET_ALL_POST } from "@/queries/graphql_queries";
import axios from "axios";

export default function Projects(props) {

    // const posts = props?.result?.posts;
    const categories = props?.result?.categories;

    const PostData = [];
    props?.result?.posts?.nodes?.map((item, i) => {

        const category = []
        item.categories.nodes.map((items) => {
            const dataObj = {
                name:items.name,
                id:items.databaseId
            }
            category.push(dataObj)
        })

        const dataObj = {
            value: i + 1,
            number: i + 1,
            title: item.title || '',
            featuredImage: item.featuredImage || '',
            catName: category[0].name || '',
            catID: category[0].id || '',
            date: item.date || '',
        }
        PostData.push(dataObj);
    });
// console.log('PostData',PostData);

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            {
                (PostData != null && categories != null) &&
                <BlogpageSection categortList={categories} postList={PostData} />
            }
        </>
    )
}


export const getStaticProps = async () => {
    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_ALL_POST, {
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

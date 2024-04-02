import Head from "next/head";
import InnerBanner from "@/components/layout/InnerBanner";
import Process from "@/components/Process";
import ProjectSection from "@/components/ProjectSection";
import ServicesType from "@/components/ServicesType";
import { GET_SERVIDE_DETAIL_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";


export default function ServicesDetail(props) {
	console.log('props"""""""""""""""""', props);

	return (
		<>
			<Head>
				<title>SERVICES DETAIL</title>
			</Head>
			<InnerBanner />
			<Process />
			<ServicesType />
			<ProjectSection />
		</>
	)
}




export const getStaticProps = async ({ params }) => {
	// Extract the slug from the params
	const { slug } = params;

	// Make the GraphQL query with the slug
	const result = await axios
		.post(
			process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
			{
				query: GET_SERVIDE_DETAIL_PAGE_DATA,
				variables: { slug },
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		.then((res) => res.data.data)
		.catch((error) => error);

	return {
		props: {
			result,
		},
	};
};
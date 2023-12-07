import Head from "next/head";
import InnerBanner from "@/components/layout/InnerBanner";
import Process from "@/components/Process";
import ProjectSection from "@/components/ProjectSection";






export default function Home() {
	return (
	  <>
		<Head>
		  <title>SERVICES DETAIL</title>
		</Head>
		<InnerBanner />
		<Process />
		<ProjectSection />
	  </>
	)
  }
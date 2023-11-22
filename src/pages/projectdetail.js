import Head from "next/head";
import InnerBanner from "@/components/layout/InnerBanner";
import TestimonialsSection from "@/components/layout/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROJECTS DETAILS</title>
      </Head>
	  <InnerBanner />
	  <TestimonialsSection />
    </>
  )
}
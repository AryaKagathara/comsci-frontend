import Head from "next/head";
import InnerBanner from "@/components/layout/InnerBanner";
import ModernBusiness from "@/components/ModernBusiness";
import HomeSiteImage from "@/components/HomeSiteImage";
import ImagesWrapper from "@/components/ImagesWrapper";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROJECTS DETAILS</title>
      </Head>
	  <InnerBanner />
    <ModernBusiness />
    <HomeSiteImage />
    <ImagesWrapper />
    <VideoSection />
	  <TestimonialsSection />
    </>
  )
}
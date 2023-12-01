import Head from "next/head";
import ProjectDetailTitle from "@/components/ProjectDetailTitle";
import ModernBusiness from "@/components/ModernBusiness";
import HomeSiteImage from "@/components/HomeSiteImage";
import ImagesWrapper from "@/components/ImagesWrapper";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROJECTS DETAILS</title>
      </Head>
      <ProjectDetailTitle />
      <ModernBusiness />
      <HomeSiteImage />
      <ImagesWrapper />
      <VideoSection />
    </>
  )
}
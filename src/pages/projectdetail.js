import Head from "next/head";
import ProjectDetailTitle from "@/components/ProjectDetailTitle";
import ModernBusiness from "@/components/ModernBusiness";
import HomeSiteImage from "@/components/HomeSiteImage";
import VideoSection from "@/components/VideoSection";

export default function ProjectDetail() {
  return (
    <>
      <Head>
        <title>PROJECTS DETAILS</title>
      </Head>
      <ProjectDetailTitle />
      <ModernBusiness />
      <HomeSiteImage />
      <VideoSection />
    </>
  )
}
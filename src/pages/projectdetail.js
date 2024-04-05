import Head from "next/head";
// import ProjectDetailTitle from "@/components/ProjectDetailTitle";
// import ModernBusiness from "@/components/ModernBusiness";
// import HomeSiteImage from "@/components/HomeSiteImage";
// import VideoSection from "@/components/VideoSection";

import ProjectDetailBanner from '@/components/ProjectDetailBanner';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import ProjectDetailImage from '@/components/ProjectDetailImage';

export default function ProjectDetail() {
  return (
    <>
      {/* <Head>
        <title>PROJECTS DETAILS</title>
      </Head>
      <ProjectDetailTitle />
      <ModernBusiness />
      <HomeSiteImage />
      <VideoSection /> */}
      <Head>
        <title>ProjectDemo</title>
        <meta name="description" content="Comsci - Unlock unparalleled design and development solutions for your business. Partner with us for award-winning services and agile processes. Explore our projects now!" key="desc" />
      </Head>
      <ProjectDetailBanner />
      <ProjectDetailContent />
      <ProjectDetailImage />
    </>
  )
}
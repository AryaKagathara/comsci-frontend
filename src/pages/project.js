import Head from "next/head";
import ProjectPage from "@/components/ProjectPage";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROJECTS</title>
      </Head>
      <ProjectPage />
      <TestimonialsSection />
      <TestiMonialsSlider />
    </>
  )
}
import Head from "next/head";
import ProjectPage from "@/components/ProjectPage";
import TestimonialsSection from "@/components/layout/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROJECTS</title>
      </Head>
      <ProjectPage />
      <TestimonialsSection />
    </>
  )
}
import Head from "next/head";
import Banner from "@/components/layout/HomeBanner";
import ServicesSection from "@/components/layout/ServicesSection";
import Awards from "@/components/Awards";
import JobpositionSection from "@/components/layout/JobpositionSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import Technologies from "@/components/layout/Technologies";
import Faqsection from "@/components/layout/Faqsection";
import StrategySection from "@/components/layout/StrategySection";
import BlogSection from "@/components/layout/BlogSection";
import ProjectSection from "@/components/layout/ProjectSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME PAGE</title>
      </Head>
      <Banner />
      <ServicesSection />
      <Awards />
      <ProjectSection />
      <TestimonialsSection />
      <JobpositionSection />
      <Technologies />
      <Faqsection />
      <StrategySection />
      <BlogSection />
    </>
  )
}

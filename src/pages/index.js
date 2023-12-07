import Head from "next/head";
import Banner from "@/components/layout/HomeBanner";
import ServicesSection from "@/components/layout/ServicesSection";
import Awards from "@/components/Awards";
import JobpositionSection from "@/components/JobpositionSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import Technologies from "@/components/layout/Technologies";
import Faqsection from "@/components/layout/Faqsection";
import StrategySection from "@/components/layout/StrategySection";
import BlogSection from "@/components/BlogSection";
import ProjectSection from "@/components/ProjectSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import AwardType from "@/components/AwardTypeSection";
import RendomLogo from "@/components/RendomLogo";
import LogoAnimation from "@/components/layout/LogoAnimation";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME PAGE</title>
      </Head>
      <Banner />
      <ServicesSection />
      <Awards />
      <AwardType />
      <RendomLogo />
      <TestiMonialsSlider />
      <StrategySection />
      <LogoAnimation />
      <Technologies />
      <ProjectSection />
      <TestimonialsSection />
      <Faqsection />
      <BlogSection />
      <JobpositionSection />
    </>
  )
}
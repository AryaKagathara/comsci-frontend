import Head from "next/head";
import Banner from "@/components/layout/HomeBanner";
import ServicesSection from "@/components/layout/ServicesSection";
import Awards from "@/components/Awards";
// import JobpositionSection from "@/components/JobpositionSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import Technologies from "@/components/layout/Technologies";
import Faqsection from "@/components/layout/Faqsection";
import StrategySection from "@/components/layout/StrategySection";
import BlogSection from "@/components/BlogSection";
import ProjectSection from "@/components/ProjectSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import AwardType from "@/components/AwardTypeSection";
import RendomLogo from "@/components/RendomLogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Comsci - Leading Design & Development Company | Elevate Your Business with Us</title>
        <meta name="description" content="Comsci - Unlock unparalleled design and development solutions for your business. Partner with us for award-winning services and agile processes. Explore our portfolio now!" key="desc" />
      </Head>
      <Banner />
      <ServicesSection />
      <Awards />
      <AwardType />
      <RendomLogo />
      <TestiMonialsSlider />
      <StrategySection />
      <Technologies />
      <ProjectSection />
      <TestimonialsSection />
      <Faqsection />
      <BlogSection />
      {/* <JobpositionSection /> */}
    </>
  )
}
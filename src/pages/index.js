'use client';
import { useEffect, useRef } from "react";
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
// import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
    <main>
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
      </main>
    </>
  )
}
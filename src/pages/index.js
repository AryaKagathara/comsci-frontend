import Head from "next/head";
import Banner from "@/components/layout/HomeBanner";
import ServicesSection from "@/components/layout/ServicesSection";
import Awards from "@/components/Awards";
import JobpositionSection from "@/components/layout/JobpositionSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import Technologies from "@/components/layout/Technologies";
import Faqsection from "@/components/layout/Faqsection";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME PAGE</title>
      </Head>
      <Banner />
      <ServicesSection />
      <Awards />
      <TestimonialsSection />
      <JobpositionSection />
      <Technologies />
      <Faqsection />
    </>
  )
}

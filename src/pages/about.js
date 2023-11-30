import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ResultSection from "@/components/ResultSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";



export default function Home() {
  return (
    <>
      <Head>
        <title>ABOUT US</title>
      </Head>
      <AboutSection />
      <TeamSection />
      <ResultSection />
      <TestimonialsSection />
      <TestiMonialsSlider />
    </>
  )
}
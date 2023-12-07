import Head from "next/head";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ResultSection from "@/components/ResultSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import Awards from "@/components/Awards";
import AwardType from "@/components/AwardTypeSection";
import RendomLogo from "@/components/RendomLogo";



export default function Home() {
  return (
    <>
      <Head>
        <title>ABOUT US</title>
      </Head>
      <AboutSection />
      <Awards />
      <AwardType />
      <RendomLogo />
      <TeamSection />
      <ResultSection />
      <TestimonialsSection />
      <TestiMonialsSlider />
    </>
  )
}
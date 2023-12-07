import Head from "next/head";
import ServicesSection from "@/components/layout/ServicesSection";
import StrategySection from "@/components/layout/StrategySection";
import Technologies from "@/components/layout/Technologies";
import ProjectSection from "@/components/ProjectSection";



export default function Home() {
  return (
    <>
      <Head>
        <title>APPROACH</title>
      </Head>
      <StrategySection />
      <ProjectSection />
      <ServicesSection />
      <Technologies />
    </>
  )
}
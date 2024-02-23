import Head from "next/head";
import Banner from "@/components/layout/HomeBanner";
import ServicesSection from "@/components/layout/ServicesSection";
import Awards from "@/components/Awards";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import Technologies from "@/components/layout/Technologies";
import Faqsection from "@/components/layout/Faqsection";
import StrategySection from "@/components/layout/StrategySection";
import BlogSection from "@/components/BlogSection";
import ProjectSection from "@/components/ProjectSection";
import TestiMonialsSlider from "@/components/layout/TestiMonialsSlider";
import RendomLogo from "@/components/RendomLogo";
import AwardType from "@/components/AwardTypeSection";
import { GET_HOME_PAGE_DATA, GET_THEME_GENERAL_DATA } from "@/queries/graphql_queries";
import axios from "axios";
export default function Home(props) {
  // console.log("result_theme : ", props.result_theme)
  return (
    <>

      <Head>
        <title>Comsci - Leading Design & Development Company | Elevate Your Business with Us</title>
        <meta name="description" content="Comsci - Unlock unparalleled design and development solutions for your business. Partner with us for award-winning services and agile processes. Explore our projects now!" key="desc" />
      </Head>
      <Banner bannerTitle={props?.result?.page?.homePageOptions?.bannerTitle} bannerSubTitle={props?.result?.page?.homePageOptions?.bannerShortTitle} bannerImage={props?.result?.page?.homePageOptions?.bannerImage} bannerButton={props?.result?.page?.homePageOptions?.bannerButton} />
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
    </>
  )
}


export const getStaticProps = async () => {
  const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_HOME_PAGE_DATA, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.data.data)
    .catch(error => error);

  // const result_theme = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_THEME_GENERAL_DATA, {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(res => res)
  //   .catch(error => error);
  return {
    props: {
      result,
    }
  }
};

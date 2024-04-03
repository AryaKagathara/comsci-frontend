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
import { GET_HOME_PAGE_DATA } from "@/queries/graphql_queries";
import axios from "axios";
export default function Home(props) {
  const HomePageData = props?.result?.page?.homePageOptions;
  const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;
  return (
    <>

      <Head>
        <title>Comsci - Leading Design & Development Company | Elevate Your Business with Us</title>
        <meta name="description" content="Comsci - Unlock unparalleled design and development solutions for your business. Partner with us for award-winning services and agile processes. Explore our projects now!" key="desc" />
      </Head>


      <Banner bannerTitle={HomePageData?.bannerTitle} bannerShortDescription={HomePageData?.bannerShortDescription} bannerSubTitle={HomePageData?.bannerShortTitle} bannerImage={HomePageData?.bannerImage} bannerButton={HomePageData?.bannerButton} />

      {
        (CommanPageData?.serviceTitle != null && CommanPageData?.selectService != null && CommanPageData?.sShortTitle != null && CommanPageData?.serviceDetailButtonTitle != null && CommanPageData?.marqueeContent != null) &&

        <ServicesSection serviceTitle={CommanPageData?.serviceTitle} services={CommanPageData?.selectService} shortTitle={CommanPageData?.sShortTitle} serviceDetailButtonTitle={CommanPageData?.serviceDetailButtonTitle} marqueeContent={CommanPageData?.marqueeContent} />

      }

      <Awards Heading={HomePageData?.awardText} awardsImage={HomePageData?.awardImage} />


      <AwardType logos={CommanPageData?.awardLogos} />


      <RendomLogo clientLogos={CommanPageData?.clientLogos} title={CommanPageData?.cTitle} shortDescription={CommanPageData?.shortDescription} />


      {
        (CommanPageData != null && CommanPageData.testimonialsMeta != null) &&
        <TestiMonialsSlider testimonialsMeta={CommanPageData?.testimonialsMeta} />
      }


      {
        (CommanPageData != null && CommanPageData.strategyTitle != null && CommanPageData.strategySection != null) &&
        <StrategySection strategyTitle={CommanPageData?.strategyTitle} strategySection={CommanPageData?.strategySection} />
      }

      {
        (CommanPageData?.technologieTitle != null && CommanPageData?.technologieDescription != null && CommanPageData?.technologiesLogos != null) &&
        <Technologies technologieTitle={CommanPageData?.technologieTitle} technologieDescription={CommanPageData?.technologieDescription} technologiesLogos={CommanPageData?.technologiesLogos} />
      }
      {
        (HomePageData?.pTitle != null && HomePageData?.pButtonName != null && HomePageData?.selectProject != null) &&
        < ProjectSection projectTitle={HomePageData?.pTitle} projectButtonName={HomePageData?.pButtonName} selectProject={HomePageData?.selectProject} />
      }

      {
        (CommanPageData?.testimonialsMeta != null) &&
        <TestimonialsSection testimonialsMeta={CommanPageData?.testimonialsMeta} />
      }

      {
        (CommanPageData != null && CommanPageData.faqContent != null && CommanPageData.faqTitle != null && CommanPageData.faqDescription != null) &&
        <Faqsection faqContent={CommanPageData?.faqContent} faqTitle={CommanPageData.faqTitle} faqDescription={CommanPageData?.faqDescription} />
      }

      {(HomePageData != null && HomePageData.bTitle != null && HomePageData.blogSectionButtonName != null && HomePageData.selectedBlogs != null) &&
        <BlogSection title={HomePageData?.bTitle} blogButtonName={HomePageData?.blogSectionButtonName} selectedBlogs={HomePageData?.selectedBlogs} />
      }

    </>
  )
}


export const getStaticProps = async () => {
  const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_HOME_PAGE_DATA, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.data.data).catch(error => error);

  return {
    props: {
      result,
    }
  }
};


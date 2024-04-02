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
  return (
    <>

      <Head>
        <title>Comsci - Leading Design & Development Company | Elevate Your Business with Us</title>
        <meta name="description" content="Comsci - Unlock unparalleled design and development solutions for your business. Partner with us for award-winning services and agile processes. Explore our projects now!" key="desc" />
      </Head>


      <Banner bannerTitle={HomePageData?.bannerTitle} bannerSubTitle={HomePageData?.bannerShortTitle} bannerImage={HomePageData?.bannerImage} bannerButton={HomePageData?.bannerButton} />


      <ServicesSection serviceTitle={HomePageData?.serviceTitle} services={HomePageData?.selectService} shortTitle={HomePageData?.sShortTitle} serviceDetailButtonTitle={HomePageData?.serviceDetailButtonTitle} marqueeContent={HomePageData?.marqueeContent} />


      <Awards Heading={HomePageData?.awardText} awardsImage={HomePageData?.awardImage} />


      <AwardType logos={HomePageData?.awardLogos} />


      <RendomLogo clientLogos={HomePageData?.clientLogos} title={HomePageData?.cTitle} shortDescription={HomePageData?.shortDescription} />


      {(HomePageData != null && HomePageData.testimonialsMeta != null) && <TestiMonialsSlider testimonialsMeta={HomePageData?.testimonialsMeta} />}


      {
        (HomePageData != null && HomePageData.strategyTitle != null && HomePageData.strategySection != null) &&
        <StrategySection strategyTitle={HomePageData?.strategyTitle} strategySection={HomePageData?.strategySection} />
      }

      {
        (HomePageData?.technologieTitle != null && HomePageData?.technologieDescription != null && HomePageData?.technologiesLogos != null) &&
        <Technologies technologieTitle={HomePageData?.technologieTitle} technologieDescription={HomePageData?.technologieDescription} technologiesLogos={HomePageData?.technologiesLogos} />
      }


      {
        (HomePageData?.pTitle != null && HomePageData?.pButtonName != null && HomePageData?.selectProject != null) &&
        < ProjectSection projectTitle={HomePageData?.pTitle} projectButtonName={HomePageData?.pButtonName} selectProject={HomePageData?.selectProject} />
      }

      {(HomePageData?.testimonialsMeta != null) && <TestimonialsSection testimonialsMeta={HomePageData?.testimonialsMeta} />}

      {
        (HomePageData != null && HomePageData.faqContent != null && HomePageData.faqTitle != null && HomePageData.faqDescription != null) &&
        <Faqsection faqContent={HomePageData?.faqContent} faqTitle={HomePageData.faqTitle} faqDescription={HomePageData?.faqDescription} />
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


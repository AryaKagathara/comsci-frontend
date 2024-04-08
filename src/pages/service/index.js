


  import Head from "next/head";
  import ServicesSection from "@/components/layout/ServicesSection";
  // import Technologies from "@/components/layout/Technologies";

  import { GET_SERVICE_PAGE_DATA } from "@/queries/graphql_queries";
  import axios from "axios";

  export default function Projects(props) {

    const CommanPageData = props?.result?.themeGeneralSettings?.commanComponentOption;
    // const servicePageData = props?.result?.page?.servicePageOption;
    return (
      <>
        <Head>
          <title>Services</title>
        </Head>


        {
          (CommanPageData?.serviceTitle != null && CommanPageData?.selectService != null && CommanPageData?.sShortTitle != null && CommanPageData?.serviceDetailButtonTitle != null && CommanPageData?.marqueeContent != null) &&

          <ServicesSection serviceTitle={CommanPageData?.serviceTitle} services={CommanPageData?.selectService} shortTitle={CommanPageData?.sShortTitle} serviceDetailButtonTitle={CommanPageData?.serviceDetailButtonTitle} marqueeContent={CommanPageData?.marqueeContent} />
        }



        {/* {
          (servicePageData?.serviceTitle != null && servicePageData?.selectService != null && servicePageData?.sShortTitle != null && servicePageData?.serviceDetailButtonTitle != null && servicePageData?.marqueeContent != null) &&
          <ServicesSection serviceTitle={servicePageData?.serviceTitle} services={servicePageData?.selectService} shortTitle={servicePageData?.sShortTitle} serviceDetailButtonTitle={servicePageData?.serviceDetailButtonTitle} marqueeContent={servicePageData?.marqueeContent} />
        } */}



        {/* <ServicesSection /> */}
        {/* <Technologies /> */}

      </>
    )
  }





  



  export const getStaticProps = async () => {
    const result = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, GET_SERVICE_PAGE_DATA, {
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

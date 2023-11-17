import Head from "next/head";
import Banner from "@/components/layout/HomeBanner";
import Services from "@/components/layout/Services";



export default function Home() {
  return (
    <>
      <Head>
        <title>HOME PAGE</title>
      </Head>
      <Banner />
      <Services />
    </>
  )
}

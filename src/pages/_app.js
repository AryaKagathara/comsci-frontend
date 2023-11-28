import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import '@/styles/globals.css';
import '@/styles/responsive.css';
import '@/styles/fonts.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect, useRef } from "react";

export default function App({ Component, pageProps }) {

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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main> 
    </>
  )
}

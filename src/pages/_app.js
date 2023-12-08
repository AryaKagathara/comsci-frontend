import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import '@/styles/globals.css';
import '@/styles/responsive.css';
import '@/styles/fonts.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const is404Page = router.isFallback || router.pathname == '/404';
  
  useEffect( () => {
    (

      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
      )()
      gsap.set(".fadeInUp", {y: "30%", opacity: 0,});
      ScrollTrigger.batch(".fadeInUp", {
        onEnter: batch => gsap.to(batch, {  opacity: 1, duration: .8, delay:0.5, stagger: 0.2, y:0}),
      });
  }, [])

  return (
    <>
      <main>
        {!is404Page && <Header />}
        <Component {...pageProps} />
        {!is404Page && <Footer />}
      </main> 
    </>
  )
}

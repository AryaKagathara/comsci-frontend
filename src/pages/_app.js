import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

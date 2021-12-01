import '../styles/globals.css'
import { Person } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import Navigation from '../components/navigation';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tree Stump Grinding</title>
        <meta name="description" content="We are professionals who are ready to quickly and completely remove tree stumps" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msvalidate.01" content="B8ACE33552C4541B4DEC70E874CE71D1" />
        <link
          rel="preload"
          href="/fonts/LuckiestGuy-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu-Light.ttf)"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu-Regular.ttf)"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ubuntu-Medium.ttf)"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script
        {...jsonLdScriptProps<Person>({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Stump “OFF” LLC Stump Grinding",
          alternateName: "Tree stump grinding",
          address: {
            "@type": "PostalAddress",
            streetAddress: "39 Sinclair St",
            addressLocality: "Windsor",
            addressRegion: "Connecticut",
            postalCode: "CT 06095"
          },
          telephone: "8606907268",
          knowsAbout: ["Stump removing", "Stump grinding"],
        })}
      />
      </Head>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  )
}

export default MyApp

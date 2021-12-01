import Contacts from './blocks/contacts'
import Head from 'next/head'
import Footer from './blocks/footer'

export default function ContactUs() {
    return (
        <div>
            <Head>
                <title>StumpOff LLC contacts</title>
                <meta name="description" content="we ready to answer all your questions in our work hours" />
                <link rel="canonical" href="https://stumpoff.com" key="canonical" />
            </Head>
            <Contacts />
            <Footer />
        </div>
    )
}
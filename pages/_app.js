import "../styles/index.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Tajul Arifin Sirajudin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

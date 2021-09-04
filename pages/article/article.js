import { useRouter } from "next/router";
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Article(props) {

  const {query} = useRouter();
  const history_url = "/banana/77/an-article-title"
  const router = useRouter();

  router.replace(history_url);


  return (
    <div className="container">
      <Head>
        <title>Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to a specific article!" />
        <p className="description">
          This is article {query.ref}.
        </p>
      </main>

      <Footer />
    </div>
  )
}

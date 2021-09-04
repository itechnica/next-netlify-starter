import { useRouter } from "next/router";
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Article(props) {

  const {query} = useRouter();
  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/article/77/fake-article', undefined, { shallow: true })
  }, [])

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

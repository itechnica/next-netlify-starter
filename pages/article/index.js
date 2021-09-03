import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Article() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to articles!" />
        <p className="description">
          Article home page</code>
        </p>
        <p>
          Added by Me!
        </p>
      </main>

      <Footer />
    </div>
  )
}

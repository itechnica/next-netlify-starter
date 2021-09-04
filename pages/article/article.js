import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Article() {
  return (
    <div className="container">
      <Head>
        <title>Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to a specific article!" />
        <p className="description">
          This is an article.
        </p>
      </main>

      <Footer />
    </div>
  )
}

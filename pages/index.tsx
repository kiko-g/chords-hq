import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content">
        <header>
          <h1 className="font-headings text-4xl font-extrabold tracking-tight sm:text-5xl">
            Chords HQ
          </h1>
          <p className="font-medium text-lg">Description text</p>
        </header>
      </main>
    </Layout>
  )
}

export default Home

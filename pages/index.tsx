import Head from 'next/head'
import Header from '@/components/Header'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Pandit | Portfolio</title>
      </Head>
      <Header />
      <About />
      {/* Add: <About />, <Skills />, <Portfolio />, etc. */}
    </>
  )
}

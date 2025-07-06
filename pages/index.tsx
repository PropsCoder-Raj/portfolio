import Head from 'next/head'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Pandit | Portfolio</title>
      </Head>
      <Header />
      <About />
      <Skills />
      {/* Add: <About />, <Skills />, <Portfolio />, etc. */}
    </>
  )
}

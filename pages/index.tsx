import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Pandit | Portfolio</title>
      </Head>
      <Header />
      {/* Add: <About />, <Skills />, <Portfolio />, etc. */}
    </>
  )
}

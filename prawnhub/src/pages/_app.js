import Navbar from '@/components/Navbar'
import Networkbar from '@/components/Networkbar'
import Tabs from '@/components/Tabs'
import '@/styles/globals.css'
import Head from 'next/head'
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Head>
      <title>PrawnHub</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo.webp" />
  </Head>
  <LoadingBar color='#ffa31a' progress={100}/>
  <Networkbar />
  <Navbar />
  <hr className='bg-black h-1 border-0'/>
  <Tabs />
  <Component {...pageProps} />
  </>
  )
}

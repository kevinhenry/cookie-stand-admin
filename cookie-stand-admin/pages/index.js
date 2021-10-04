import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
// import Footer from '../components/footer'
import { useState } from 'react'

export default function Home() {

  return (
    <div className='bg-green-30'>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/faviron.ico' />
      </Head>
      <Header />
      <Main />
    </div>
  )
}

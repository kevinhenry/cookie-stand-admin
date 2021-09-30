import Head from 'next/head'
// import Link from 'next/link'
// import { replies } from '../data'
import { useState } from 'react'

export default function Home() {
  // const [reply, setReply] = useState('Ask me anything');
  const [storeData, setStoreData] = useState('Waiting for data...')

  function storeCreate(event) {
    event.preventDefault();
    setStoreData(`{"location":"${event.target.location.value}","minCustomers": ${event.target.minimum.value},"maxCustomers": ${event.target.maximum.value},"avgCookies": ${event.target.average.value}}`)
  }

  return (
    <div className=''>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='flex items-center justify-between p-4 bg-green-500 text-black-100'>
        <h1 className='text-4xl'>Cookie Stand Admin</h1>
      </header>

      <main className='flex flex-col items-center justify-center flex-1 px-20 bg-green-50 text-center'>
        <div className='m-8 w-5/6 h-auto rounded-md bg-green-300'>
          <h2 className='text-center text-3xl m-4'>Create Cookie Stand</h2>
          <form onSubmit={storeCreate} className=''>
            <label className='mr-2.5'>Location</label>
            <input name='location' className='w-11/12 bg-gray-200'></input>
            <div className="grid grid-cols-4 place-items-center mt-4 mb-4">
              <section>
                <label className='block'>Minimum Customers per Hour</label>
                <input name='minimum' className='block w-56'></input>
              </section>
              <section>
                <label className='block'>Maximum Customers per Hour</label>
                <input name='maximum' className='block w-56'></input>
              </section>
              <section>
                <label className='block'>Average Cookies per Sale</label>
                <input name='average' className='block w-56'></input>
              </section>
              <button className='bg-green-500 w-56 h-14'>Create</button>
            </div>
          </form>
        </div>
        <h3 className=''>Report Table Coming Soon...</h3>
        <p className='m-8'>{storeData}</p>
      </main>

      <footer className='mb-30 p-4 bg-green-500'>
        &copy;2021</footer>
    </div>
  )
}

import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'
import { useAuth, AuthProvider } from '../contexts/auth'
// import Footer from '../components/footer'
// import { useState } from 'react'

export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div className='bg-green-30'>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel='icon' href='/faviron.ico' />
      </Head>

      <main className='p-4 space-y-8 text-center'>
        <h1 className='text-4xl'>Fetching Data from Authenticated API</h1>
        {user ? (
          <>
            <h2>Welcome {user.username}</h2>
            <button onClick={logout} className='p-2 text-white bg-gray-500 rounded'>Logout</button>
          </>
        ) : (
          <>
            <h2>Need to log in</h2>
            <button onClick={() => login(process.env.NEXT_PUBLIC_USERNAME, process.env.NEXT_PUBLIC_PASSWORD)} className='p-2 text-white bg-gray-500 rounded'>Login</button>
          </>
        )}
      </main>
    </div>
  )
}

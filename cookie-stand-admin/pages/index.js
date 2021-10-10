import Head from 'next/head'
import CookieStandAdmin from '../components/main'
import LoginForm from '../components/login'
import Header from '../components/header'
import Main from '../components/main'
// import Footer from '../components/footer'
import { useAuth, AuthProvider } from "../contexts/auth"
// import  { useState } from 'react'

export default function Home() {
  const { user, login, logout } = useAuth();

  return (
    <div className='bg-green-30'>
      <Head>
        <title>Cookie Stand Admin</title>
        {/* <h2 className="text-4xl">Cookie Stand Admin - {user.username}</h2> */}
        {/* <CookieStandAdmin /> */}
      </Head>
      <main className='p-4 space-y-8 text-center'>
        {user ? (
          <>
            <h2>Welcome {user.username}</h2>
            <button onClick={logout} className="p-2 text-white bg-gray-800 rounded">Logout</button>
            <h1 className='text-4xl'>Fetching Data from Authenticated API</h1>
            <CookieStandAdmin />
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </main>
    </div>
  )
}

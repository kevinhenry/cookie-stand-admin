import CreateForm from "./form"
import ReportTable from "./table"
import { hours } from "../assets/data"
import useResource from "../hooks/useResource"
import Footer from './footer'
import { useState } from 'react'
import Header from './header'

export default function Main(props) {

  const { resources, loading } = useResource();

  const [cookieData, setCookieData] = useState([]);

  function createCookieStand(e) {
    e.preventDefault();

    const locationData = {
      location: e.target.location.value,
      min: e.target.min.value,
      max: e.target.max.value,
      avg: e.target.avg.value,
      id: cookieData.length
    }

    setCookieData([...cookieData, locationData]);
  }

  return (
    <main className='flex flex-col items-center justify-center flex-1 px-20 bg-green -50 text-center'>
      <CreateForm create={createCookieStand} />
      {/* {cookieData.length > 0 ? <ReportTable data={cookieData} /> : <h2 className='pt-5 text-xl'>No Cookie Stands Available</h2>} */}
      <ReportTable hours={hours} sales={resources} />
      <Footer />
      {/* <Footer count={cookieData.length} /> */}
    </main>
  )
}

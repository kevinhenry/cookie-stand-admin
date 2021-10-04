import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Overview() {

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <Link href="/"><a>Return to Main page</a></Link>
            </div>
            <Footer />
        </div>
    )
}

import Link from 'next/link'

export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 bg-green-500 text-black-100">
            <h1 className="text-4xl">Cookie Stand Admin</h1>

            {props.user.isAuthenticated ?
                <nav className="mx-10">
                    <div className="flex float-right mx-3 mr-48 text-sm">
                        <button className="p-2 text-black bg-green-300 rounded-md">{props.user.username}</button>
                        <button className="w-20 mx-3 text-white bg-green-600 rounded-md">Logout</button>
                        <Link href="/overview"><a>Next</a></Link>
                    </div>
                </nav>
                :
                <h2>Please Log In</h2>}
        </header>
    )
}

import type {NextPage} from 'next'
import Head from 'next/head'
import Link from "next/link";
import {Sidebar} from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";


const Home: NextPage = () => {

    return (
        <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
            <Head >
                <title>Twitter by Amir.</title>
                <meta name="description" content="Twitter clone by Amir haghighi."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='grid grid-cols-9'>

                {/* SideBar */}
                <Sidebar/>

                {/* Feed */}
                <Feed />

                {/* Widgets */}
                <Widgets />
            </main>
        </div>
    )
}

export default Home

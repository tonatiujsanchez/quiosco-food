import Head from "next/head"
import { FC, ReactNode } from "react"
import { Siderbar } from "../shared"

interface Props {
    children: ReactNode
    namePage: string
}

export const LayoutMain:FC<Props> = ({ children, namePage }) => {
    return (
        <>
            <Head>
              <title>Café - { namePage }</title>
              <meta name="description" content="Cafetería" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="md:flex">
                <aside className="md:w-3/12 xl:w-1/4 2xl:1/5">
                    <Siderbar />
                </aside>
                <main className="md:w-7/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-auto">
                    { children }
                </main>
            </div>
        </>
    )
}

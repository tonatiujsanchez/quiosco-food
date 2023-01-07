import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { LayoutMain } from '../components/layouts'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <LayoutMain namePage="Inicio">
            
            <h1 className="text-2xl">Hola mundo</h1>

        </LayoutMain>
    )
}

import type { NextApiRequest, NextApiResponse } from 'next'

import { Category, Product } from './../../models'
import { seedData, db } from '../../database'



type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'Not authorized' })
    }

    try {
        await db.connect()
        // await Category.insertMany( seedData.categories )
        // await Product.insertMany( seedData.products )
        await db.disconnect()
        
        return res.status(200).json({ message: 'OK!' })
    } catch (error) {
        
        await db.disconnect()
        console.log(error)
        return res.status(500).json({ message: 'Algo salio mal, revisar la consola del servidor' })
    }

}


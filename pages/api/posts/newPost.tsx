import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '../../../prisma/client'

interface IPost {
    productImage: string
    description: string
    category: string
    coupon: string
    title: string
    price: number
    link: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST") {
        const session = await unstable_getServerSession(req, res, authOptions)
        
        if (!session)
            return res.status(401).json({message: "Por favor, faça o login para criar um post!"})
        
        const {title, category, link, price, coupon, description, productImage}: IPost = req.body.data
        
        const user = await prisma.user.findUnique({
            where: {email: session?.user?.email}
        })

        try {
            const result = await prisma.post.create({
                data: {
                    bookImageURL: "Não tem ainda",
                    description: description,
                    category: category,
                    coupon: coupon,
                    title: title,
                    price: price,
                    saleLink: link,
                    userId: user.id
                }
            })
            
            res.status(200).json(result)
        } catch(err) {
            res.status(403).json({err: "Erro ocorreu durante a criação do post"})
        }

    }
}
import prisma from '@/app/lib/prisma'
import { AxelsProduct } from '@prisma/client'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

    // AddNewProduct(
    //     {
    //         title: 'Nike Air Max 90',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam.',
    //         price: 100,
    //         image: 'https://images.unsplash.com/photo-1606784505340-9f3f9b5c5b7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //         category: 'shoes',
    //         tags: ['nike', 'airmax', 'shoes']
    //     }
    // )

    //  DeleteProduct('652d5db4746530e4bf97a636')
    
    // UpdateProduct('652d5db9746530e4bf97a637', {
    //     title: 'Nike Air Max 90',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam.',
    //     price: 100,
    //     image: 'https://images.unsplash.com/photo-1606784505340-9f3f9b5c5b7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //     category: 'shoes',
    //     tags: ['nike', 'airmax', 'shoes']
    // })
    
    //  const product = await GetProduct('652d5db9746530e4bf97a637')
    //     console.log(product)
    // const products = await prisma.axelsProduct.findMany({select: {title: true, description: true, price: true, id: true}})
    // console.table(products)

    //  const products = await SearchProduct('Lorem')
    //     console.table(products)
  return (
    <div>
        <h1>Admin</h1>
    </div>
  )
}
export default page

type CreateProduct = {
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    tags: string[]
}
const AddNewProduct = async (createProduct: CreateProduct) => {
    return await prisma.axelsProduct.create({
        data: createProduct
    })
}
const DeleteProduct = async (id: string) => {
    return await prisma.axelsProduct.delete({
        where: {
            id: id
        }
    })
}
const UpdateProduct = async (id: string, updateProduct: CreateProduct) => {
    return await prisma.axelsProduct.update({
        where: {
            id: id
        },
        data: updateProduct
    })
}
const GetProduct = async (id: string) => {
    return await prisma.axelsProduct.findUnique({
        where: {
            id: id
        }
    })
}
const SearchProduct = async (search: string) => {
    return await prisma.axelsProduct.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: search
                    }
                },
                {
                    description: {
                        contains: search
                    }
                },
                {
                    category: {
                        contains: search
                    }
                },
                {
                    tags: {
                        hasSome: [search]
                    }
                }
            ]
        },
        select: {
            title: true,
            description: true,
            price: true,
            id: true
        }
    })
}
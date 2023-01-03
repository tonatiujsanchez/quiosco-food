

export interface IProduct {

    _id?: string

    name : string
    price: number
    image: string
    category: string
    inStock: number
    
    active: boolean

    createdAt?: string
    updatedAt?: string 
}
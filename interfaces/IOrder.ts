
export interface IOrder {

    _id?: string
    name: string
    total: number
    orderProducts: OrderProduct[]
    
    delivered: boolean
    
    createdAt?: string
    updatedAt?: string 
}


export interface OrderProduct {
    _id  : string
    name : string
    price: number
    image: string
    quantity: number
}
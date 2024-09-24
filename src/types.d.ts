export interface Category {
    id: number
    category: string
    enable: boolean
}

export interface Products {
    id: number
    name: string
    description: string
    price: number
    referenceCode: string
    category: Category
}
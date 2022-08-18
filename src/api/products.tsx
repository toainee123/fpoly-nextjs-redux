import { typeProduct } from "@/type/productType";
import instance from "./instance";

export const getProducts = (id: typeProduct) => {
    return instance.get(`/products/${id}`)
}
export const addPrd = (product:typeProduct)=> {
    return instance.post ("/products" , product)
}
export const remove = (id:number) => {
    return instance.delete(`/products/${id}`)
}
export const update = (product: typeProduct) => {
    return instance.put('/products/' + product.id, product)
}
import { addPrd, remove, update, getProducts } from '@/api/products'

import { typeProduct } from '@/type/productType'
import React from 'react'
import useSWR from 'swr'

const useProduct = () => {
  const {data, error, mutate} = useSWR("/products")

    // create Products

    const getItem = async (id:number) => {
      const product = await getProducts(id)
      return product
    }

    const create = async (item:typeProduct)=> {
      const product = await addPrd(item) 
      mutate([...data, product])
    }

    const onRemove = async(id:number) => {
      await remove(id)
      const product = data.filter((item:any) => item.id !== id )
      mutate(product)
    }

    const updateItem = async (prd:typeProduct) => {
      const product =  await update(prd)
      mutate(data.map((item:any) => (item.id == data.id) ? prd : item))
  }
  return {
    data, 
    error, 
    create, 
    onRemove, 
    updateItem,
    getItem
  }

}

export default useProduct
import React, { useEffect } from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import { typeProduct } from '@/type/productType'
import useProduct from '@/hook/useProduct'
import { useRouter } from 'next/router'
const update = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const {getItem, updateItem} = useProduct()
    const router = useRouter()
    const {id}:any = router.query

    useEffect( () => {
        const getProduct = async () => {
            const data = await getItem(id)
            reset(data)
        }
        getProduct()
    }, [id])

    const onSubmit = async (data:any) => {
        await updateItem(data)
        alert('Ban da sua thanh cong')
        router.push('/products')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
          <input type="text" {...register('name', {required: true})}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>


        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Price</label>
          <input type="number" {...register('price', {required: true})}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>


        <div className="mb-6">
          <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your img</label>
          <input type="text" {...register('img',{required: true})}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>


        <div className="mb-6">
          <label htmlFor="Desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Desc</label>
          <input type="text" {...register('desc',{required: true})}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>


        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  )
}

export default update
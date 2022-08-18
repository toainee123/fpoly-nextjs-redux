import useProduct from '@/hook/useProduct'
import React from 'react'
import Link from 'next/link'
type Props = {}

const Products = (props: Props) => {
  const {data, error, onRemove} = useProduct()
  if(!data) return <div>...Loading</div> 
  if(error) return <div>Fail to load</div> 
  console.log(data);
  
  const del = (id:number) => {
    const confirm = window.confirm('Ban co muon xoa khong')
    if(confirm){
      onRemove(id)
      alert('Ban da xoa thanh cong')
    }
  } 

  return (
    <div>
          <div className="overflow-x-auto relative">
            <Link href={'/products/add'}>Add Products</Link>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                STT
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Img
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Desc
                            </th>
                            <th scope="col" className="py-3 px-6">
                                HANDLE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item:any, index:any) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">
                                    {index+1}
                                </td>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="py-4 px-6">
                                    <img src={item.img} alt="" width={200}/>
                                </td>
                                <td className="py-4 px-6">
                                    {item.price}$
                                </td>
                                <td className="py-4 px-6">
                                     {item.desc}
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={() => {del(item.id)}} >xóa</button>
                                </td>
                                <td>
                                    <Link href={`products/${item.id}/edit`}>Sửa</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Products
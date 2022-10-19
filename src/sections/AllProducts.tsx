import { FC } from 'react'

import Product from 'components/product/Product'

import { IProduct } from 'interfaces/IProduct'

import { useStore } from 'hooks/useStore'

const AllProducts: FC = (): JSX.Element => {
  const { store } = useStore()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-5">
      {store.productsFiltered.map((product: IProduct, index: number) => (
        <Product key={index} data={product} />
      ))}
    </div>
  )
}

export default AllProducts

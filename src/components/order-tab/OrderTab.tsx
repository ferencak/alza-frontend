import { sortProducts } from 'features/products-sort'
import { FC } from 'react'

import { IOrderTabItem } from 'interfaces/IOrderTabItem'

import { useStore } from 'hooks/useStore'

interface IOrderTabProps {
  tabs: IOrderTabItem[]
}

const OrderTab: FC<IOrderTabProps> = ({ tabs }): JSX.Element => {
  const { store, setStore } = useStore()
  return (
    <ul className="text-sm font-medium w-full md:w-1/2 text-center text-gray-500 rounded-lg gap-2 sm:flex select-none">
      {tabs.map((tab: IOrderTabItem, index: number) => (
        <li key={index} className="w-full my-2 md:my-0">
          <a
            className={`inline-block p-4 py-2 w-full ${
              store.application.productOrderActiveTab === tab.value
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-50 text-black hover:bg-gray-100'
            } rounded-lg space-x-10 focus:outline-none cursor-pointer duration-75`}
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault()
              const filteredProducts = sortProducts(store.products, tab.orderBy)
              console.log(filteredProducts, tab.orderBy)
              setStore({
                ...store,
                productsFiltered: filteredProducts,
                application: {
                  ...store.application,
                  productOrderActiveTab: tab.value,
                },
              })
            }}
          >
            {tab.value}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default OrderTab

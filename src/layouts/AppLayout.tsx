import { fetchProducts } from 'api/fetchProducts'
import { FC } from 'react'
import AllProducts from 'sections/AllProducts'
import Categories from 'sections/Categories'

import LoadingContainer from 'components/hoc/loading-container/LoadingContainer'
import OrderTab from 'components/order-tab/OrderTab'
import PageTitle from 'components/page-title/PageTitle'

import { IApiProps } from 'interfaces/IUseApi'

import useApi from 'hooks/useApi'
import { useStore } from 'hooks/useStore'

import BestSeller from '../sections/BestSeller'

const AppLayout: FC = (): JSX.Element => {
  const { store, setStore } = useStore()

  const { error, loading } = useApi({
    api: fetchProducts({ id: 18842920, page: 1 }) as IApiProps,
    options: {
      autoFetch: true,
      onSuccess: (res: any) =>
        setStore({
          ...store,
          products: res.data,
          productsFiltered: res.data,
        }),
    },
  })

  return (
    <LoadingContainer error={error} isLoading={loading}>
      <div className="flex flex-col gap-5 md:gap-10 w-full h-screen px-4 py-4 md:py-24 !pb-24 md:px-24 lg:px-64 xl:px-72">
        <PageTitle title="Notebooky" />
        <Categories />

        {/* Display only rated products for bestseller section */}
        <BestSeller data={store.products.filter((data) => data.rating > 4.5)} />

        <OrderTab
          tabs={[
            { value: 'TOP', orderBy: 'top-rated' },
            { value: 'Nejprodávanější', orderBy: 'best-seller' },
            { value: 'Nejlevnější', orderBy: 'price-lowest' },
            { value: 'Nejdražší', orderBy: 'price-highest' },
          ]}
        />
        <AllProducts />
      </div>
    </LoadingContainer>
  )
}

export default AppLayout

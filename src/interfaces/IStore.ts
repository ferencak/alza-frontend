import { IProduct } from './IProduct'

export interface IApplication {
  productOrderActiveTab: string
}

export interface IGlobalStore {
  products: IProduct[]
  productsFiltered: IProduct[]
  application: IApplication
}

export interface IStore {
  store: IGlobalStore
  setStore: (_store: IGlobalStore) => void
  resetStore: () => void
}

export interface IStoreProviderProps {
  children: React.ReactNode
}

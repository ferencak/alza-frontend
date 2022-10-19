import { IProduct } from 'interfaces/IProduct'

export const sortProducts = (products: IProduct[], order: string) => {
  let newProducts = [...products]
  switch (order) {
    case 'price-lowest':
      newProducts = newProducts.sort((a: any, b: any) => a.priceNoCurrency - b.priceNoCurrency)
      break
    case 'price-highest':
      newProducts = newProducts.sort((a: any, b: any) => b.priceNoCurrency - a.priceNoCurrency)
      break
    case 'top-rated':
      newProducts = newProducts.sort((a: any, b: any) => b.rating - a.rating)
      break
    case 'best-seller':
      newProducts = newProducts.sort((a: any, b: any) => b.sold - a.sold)
      break
    default:
      newProducts = newProducts.sort((a: any, b: any) => b.rating - a.rating)
      break
  }
  return newProducts
}

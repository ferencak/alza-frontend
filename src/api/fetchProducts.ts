interface IFetchProductsProps {
  id: number
  page: number
}
export const fetchProducts = ({ id, page }: IFetchProductsProps) => {
  return {
    url: '/products',
    method: 'POST',
    data: {
      filterParameters: {
        id: id,
        isInStockOnly: false,
        newsOnly: false,
        wearType: 0,
        orderBy: 0,
        page: page,
        params: [
          {
            tId: 0,
            v: [],
          },
        ],
        producers: [],
        sendPrices: true,
        type: 'action',
        typeId: '',
        branchId: '',
      },
    },
  }
}

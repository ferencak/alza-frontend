import { FC } from 'react'

import BestSellerCarousel from 'components/best-seller/BestSellerCarousel'
import BestSellerTitle from 'components/best-seller/BestSellerTitle'

import { IProduct } from 'interfaces/IProduct'

interface IBestSellerProps {
  data: IProduct[]
}

const BestSeller: FC<IBestSellerProps> = ({ data }): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 rounded-md p-4">
      <BestSellerTitle />
      <BestSellerCarousel data={data} />
    </div>
  )
}

export default BestSeller

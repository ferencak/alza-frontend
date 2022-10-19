import { FC } from 'react'

import Rating from 'components/rating/Rating'

import { IProduct } from 'interfaces/IProduct'

interface IBestSellerItemProps {
  data: IProduct
}

const BestSellerItem: FC<IBestSellerItemProps> = ({ data: { url, img, name, price, spec, rating } }): JSX.Element => (
  <div
    className="flex flex-col group w-3/4 gap-5 items-start select-none cursor-pointer"
    onClick={() => window.open(url, '_blank')}
  >
    <div className="flex w-full items-center justify-center">
      <img src={img} alt={name} draggable={false} className="w-32 h-32 select-none rounded-2xl" />
    </div>
    <div className="flex flex-col w-full justify-between group-hover:bg-gray-50 rounded-md duration-75 p-2">
      <div className="flex flex-col w-full">
        <p className="text-sm truncate w-full md:text-md text-ellipsis overflow-hidden">{name}</p>
        <div className="flex flex-row w-full">
          <Rating rating={rating} />
        </div>
        <span className="text-sm max-h-11 w-full text-black/50 overflow-hidden text-elipsis">{spec}</span>
      </div>
      <p className="text-md text-green-500">{price}</p>
    </div>
  </div>
)

export default BestSellerItem

import { FC } from 'react'
import { CgArrowsExchangeAltV, CgBolt, CgPlayListAdd } from 'react-icons/cg'
import { FaDog } from 'react-icons/fa'

import BuyButtonWithDropdown from 'components/button/BuyButtonWithDropdown'
import Rating from 'components/rating/Rating'

import { IProduct } from 'interfaces/IProduct'

interface IProductProps {
  data: IProduct
}

const Product: FC<IProductProps> = ({ data }): JSX.Element => (
  <div className="flex flex-col gap-3 items-start hover:bg-gray-50 rounded-md p-4 duration-75">
    <h2 className="block font-medium truncate w-full max-w-full text-ellipsis">{data.name}</h2>
    <span className="text-gray-400 text-xs max-h-12 text-ellipsis overflow-hidden">{data.spec}...</span>
    <div className="flex flex-col w-full">
      {data.icons.find((icon) => icon.text === 'Discount') && (
        <div className="absolute flex flex-row gap-2 items-start">
          <img src={data.icons.find((icon) => icon.text === 'Discount')?.image} alt="Discount" />
        </div>
      )}
      <img src={data.img} alt={data.name} className="rounded-2xl" draggable={false} />
    </div>
    <Rating rating={data.rating} />
    <div className="flex flex-col gap-5 xl:flex-row justify-between w-full items-center">
      <div className="flex flex-col h-11 xl:h-auto">
        <p className="text-green-500 text-lg font-medium">{data.price}</p>
        {data.priceInfo.comparePrice && (
          <p className="text-gray-400 text-sm line-through">{data.priceInfo.comparePrice} Kč</p>
        )}
      </div>
      <BuyButtonWithDropdown
        data={data}
        items={[
          { value: 'Koupit zrychleně', icon: <CgBolt /> },
          { value: 'Porovnat', icon: <CgArrowsExchangeAltV /> },
          { value: 'Hlídat', icon: <FaDog /> },
          { value: 'Přidat do seznamu', icon: <CgPlayListAdd /> },
        ]}
      />
    </div>
    <span className="text-center w-full text-gray-400">{data.avail}</span>
  </div>
)

export default Product

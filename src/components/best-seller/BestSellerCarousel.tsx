import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { IProduct } from 'interfaces/IProduct'

import BestSellerItem from './BestSellerItem'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

interface IBestSellerCarouselProps {
  data: IProduct[]
}

const BestSellerCarousel: FC<IBestSellerCarouselProps> = ({ data }): JSX.Element => {
  return (
    <Carousel className="flex flex-row gap-10" responsive={responsive} infinite={true} autoPlay={true}>
      {data.map((item, index) => (
        <BestSellerItem key={index} data={item} />
      ))}
    </Carousel>
  )
}

export default BestSellerCarousel

import { FC } from 'react'

interface IRatingProps {
  rating: number
}

const Rating: FC<IRatingProps> = ({ rating }): JSX.Element => (
  <div className="flex flex-row gap-1 items-center">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.62L12 2.5L8.55 8.62L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
        fill={rating >= 1 ? '#fbbf24' : '#e4e4e7'}
      ></path>
    </svg>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.62L12 2.5L8.55 8.62L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
        fill={rating >= 2 ? '#fbbf24' : '#e4e4e7'}
      ></path>
    </svg>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.62L12 2.5L8.55 8.62L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
        fill={rating >= 3 ? '#fbbf24' : '#e4e4e7'}
      ></path>
    </svg>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.62L12 2.5L8.55 8.62L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
        fill={rating >= 4 ? '#fbbf24' : '#e4e4e7'}
      ></path>
    </svg>
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.62L12 2.5L8.55 8.62L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
        fill={rating >= 5 ? '#fbbf24' : '#e4e4e7'}
      ></path>
    </svg>
  </div>
)

export default Rating

import { FC } from 'react'

interface ICategoryItemProps {
  children: string
}

const CategoryItem: FC<ICategoryItemProps> = ({ children }): JSX.Element => {
  return (
    <div className="flex flex-row py-4 px-4 bg-gray-100 hover:bg-blue-500 hover:text-white duration-75 rounded-md cursor-pointer items-center justify-start">
      {children}
    </div>
  )
}

export default CategoryItem

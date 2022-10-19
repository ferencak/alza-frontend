import { FC } from 'react'

interface ICategoryItemProps {
  children: JSX.Element | JSX.Element[]
}

const CategoryWrapper: FC<ICategoryItemProps> = ({ children }): JSX.Element => {
  return <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">{children}</div>
}

export default CategoryWrapper

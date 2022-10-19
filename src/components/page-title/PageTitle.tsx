import { FC } from 'react'

interface IPageTitleProps {
  title: string
}

const PageTitle: FC<IPageTitleProps> = ({ title }): JSX.Element => {
  return (
    <div className="flex flex-row w-full">
      <h1 className="text-blue-600 text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default PageTitle

import { FC } from 'react'

import CategoryItem from 'components/category/CategoryItem'
import CategoryWrapper from 'components/category/CategoryWrapper'

interface ICategoriesProps {
  categoryItems?: any
}

const Categories: FC<ICategoriesProps> = ({}): JSX.Element => (
  <CategoryWrapper>
    <CategoryItem>Macbook</CategoryItem>
    <CategoryItem>Herní</CategoryItem>
    <CategoryItem>Kancelářské</CategoryItem>
    <CategoryItem>Profesionální</CategoryItem>
    <CategoryItem>Stylové</CategoryItem>
    <CategoryItem>Základní</CategoryItem>
    <CategoryItem>Dotykové</CategoryItem>
    <CategoryItem>Na splátky</CategoryItem>
    <CategoryItem>VR Ready</CategoryItem>
    <CategoryItem>IRIS Graphics</CategoryItem>
    <CategoryItem>Brašny, batohy</CategoryItem>
    <CategoryItem>Příslušenství</CategoryItem>
  </CategoryWrapper>
)

export default Categories

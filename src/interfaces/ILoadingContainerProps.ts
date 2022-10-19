import { IError } from './IError'

export interface ILoadingContainerProps {
  isLoading: boolean
  error: IError
  children: JSX.Element
}

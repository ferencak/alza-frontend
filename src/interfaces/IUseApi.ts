export interface IApiProps {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  headers?: any
}
export interface IUseApiProps {
  api: IApiProps
  options: {
    onSuccess?: Function
    onError?: Function
    autoFetch?: boolean
    mock?: boolean
    withToken?: boolean
  }
}

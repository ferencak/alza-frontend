import axios from 'axios'
import { useEffect, useState } from 'react'

import { IUseApiProps } from 'interfaces/IUseApi'

import { config } from 'config/config'

const useApi = ({ api, options }: IUseApiProps) => {
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<any>(false)
  const [loading, setIsLoading] = useState<boolean>(false)

  const call = async (callData?: any) => {
    setIsLoading(true)
    const { url, method, headers, data } = api
    try {
      const res = await axios({
        url: `${config.restApi}${url}`,
        method,
        headers,
        data: callData || data,
      })
      setResponse(res)
      setIsLoading(false)
      if (options?.onSuccess) {
        options.onSuccess(res.data)
      }
    } catch (err: unknown) {
      setError(err)
      setIsLoading(false)
      if (options?.onError) {
        options.onError(err)
      }
    }
  }

  useEffect(() => {
    if (options.autoFetch) call()
  }, [])

  return {
    response,
    error,
    loading,
    call,
  }
}

export default useApi

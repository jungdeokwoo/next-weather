import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosResult, Climate } from '@type/Api'
import axios, { AxiosError, AxiosResponse } from 'axios'

export const getClimate = async (startDate: number): Promise<AxiosResult> => {
  const response: AxiosResponse = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}`,
    {
      params: {
        serviceKey: process.env.NEXT_PUBLIC_API_KEY,
        pageNo: 1,
        numOfRows: 10,
        dataType: 'JSON',
        dataCd: 'ASOS',
        dateCd: 'DAY',
        startDt: startDate,
        endDt: startDate + 6,
        stnIds: 108,
      },
    },
  )
  return response.data.response.body
}

export const useGetClimate = (
  date: number,
  options?: Omit<
    UseQueryOptions<AxiosResult, AxiosError<unknown, any>, Partial<Climate>[]>,
    'initialData' | 'queryFn' | 'queryKey'
  >,
) => {
  return useQuery(['climate', date], () => getClimate(date), options)
}

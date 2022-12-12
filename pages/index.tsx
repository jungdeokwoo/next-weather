import { useGetClimate } from 'hooks/useGetClimate'

export default function Home() {
  const { data, isLoading } = useGetClimate(20221201, {
    select: data =>
      data.items.item.map(item => {
        const { avgTa, maxTa, minTa, sumRn, tm, stnNm } = item
        const newData = { avgTa, maxTa, minTa, sumRn, tm, stnNm }
        return newData
      }),
  })

  console.log(data, '///////', isLoading)

  return <div>메인페이지°C</div>
}

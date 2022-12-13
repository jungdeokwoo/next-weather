import { useGetClimate } from 'hooks/useGetClimate'
import React, { useState } from 'react'
import styled from 'styled-components'
import { getWeeksFirstDate } from 'utils/getDate'

export default function Home() {
  const [selectDate, setSelectDate] = useState(20221211)
  const { data, isLoading } = useGetClimate(getWeeksFirstDate(selectDate), {
    select: data =>
      data.items.item.map(item => {
        const { avgTa, maxTa, minTa, sumRn, tm, stnNm } = item
        const newData = { avgTa, maxTa, minTa, sumRn, tm, stnNm }
        return newData
      }),
    enabled: String(selectDate).length === 8,
  })

  const DateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDate(parseInt(event.target.value))
  }

  return (
    <HomeContent>
      <DateInput type="text" onChange={DateHandler} value={selectDate | 0} />
      <ul>
        {data?.map(climate => (
          <li key={climate.tm}>
            <h1>날짜 : {climate.tm}</h1>
            <h2>평균온도 : {climate.avgTa}°C</h2>
          </li>
        ))}
      </ul>
    </HomeContent>
  )
}

const HomeContent = styled.main``

const DateInput = styled.input``

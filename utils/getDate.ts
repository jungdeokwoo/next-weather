const NumToDate = (number: number): Date => {
  const year = parseInt(String(number).slice(0, 4))
  const month = parseInt(String(number).slice(4, 6))
  const day = parseInt(String(number).slice(6))
  const date = new Date(year, month - 1, day)
  return date
}

const DateToNum = (date: Date): number => {
  return parseInt(
    String(date.getFullYear()) +
      String(date.getMonth() + 1).padStart(2, '0') +
      String(date.getDate()).padStart(2, '0'),
  )
}

export const getWeeksFirstDate = (date: number) => {
  if (String(date).length < 8) return 0
  const SelectedDate = NumToDate(date)
  const weeksFirstDay = new Date(
    SelectedDate.getFullYear(),
    SelectedDate.getMonth(),
    SelectedDate.getDate() - SelectedDate.getDay(),
  )
  return DateToNum(weeksFirstDay)
}

export const getWeeksLastDate = (date: number) => {
  if (String(date).length < 8) return 0
  const SelectedDate = NumToDate(date)
  const weeksLastDay = new Date(
    SelectedDate.getFullYear(),
    SelectedDate.getMonth(),
    SelectedDate.getDate() - SelectedDate.getDay() + 6,
  )
  return DateToNum(weeksLastDay)
}

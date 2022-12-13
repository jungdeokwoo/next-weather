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
  const selectedDate = NumToDate(date)
  selectedDate.setDate(selectedDate.getDate() - selectedDate.getDay())
  return DateToNum(selectedDate)
}

export const getWeeksLastDate = (date: number) => {
  if (String(date).length < 8) return 0
  const selectedDate = NumToDate(date)
  const lastDate = selectedDate.setDate(
    selectedDate.getDate() - selectedDate.getDay() + 6,
  )
  if (lastDate > Date.now()) {
    const today = new Date()
    today.setDate(today.getDate() - 1)
    return DateToNum(today)
  }
  return DateToNum(selectedDate)
}

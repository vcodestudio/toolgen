// 숫자를 두 자리로 만들어주는 함수
export const twoDigits = num => {
  return num < 10 ? `0${num}` : num
}

export function formatDateString(str = '20121123', format = 'YYYY.MM.DD') {
  const year = str.slice(0, 4)
  const month = str.slice(4, 6)
  const day = str.slice(6, 8)
  return format.replace(/YYYY/g, year).replace(/MM/g, month).replace(/DD/g, day)
}

// convert new Date to custom format
export function formatDate(date, format = 'YYYY.MM.DD') {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  // day, month must 2 digits
  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, month < 10 ? `0${month}` : month)
    .replace(/DD/g, day < 10 ? `0${day}` : day)
}

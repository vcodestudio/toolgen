// 숫자를 두 자리로 만들어주는 함수
export const twoDigits = num => {
  return num < 10 ? `0${num}` : num
}

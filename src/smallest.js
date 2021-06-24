const smallest = (n) => {
  const number = n.toString().split('')

  const lowestNum = Math.min(...number)

  const i = number.indexOf(lowestNum.toString())

  return [n, i]
}
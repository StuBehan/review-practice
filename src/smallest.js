const smallest = (n) => {
  const number = n.toString().split('')

  const lowestNum = Math.min(...number)

  const j = number.indexOf(lowestNum.toString())

  return [n, j]
}
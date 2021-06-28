const smallest = (n) => {
  const number = n.toString().split('')

  const indexOfLowest = (array) => {
    return array.indexOf(Math.min(...array).toString())
  }

  const lowIndex = indexOfLowest(number)
  
  const insertIndex = 0
  
  return [n, lowIndex, insertIndex]
}
const smallest = (n) => {
  const number = n.toString().split('')

  const indexOfLowest = (array) => {
    return array.indexOf(Math.min(...array).toString())
  }

  const lowIndex = indexOfLowest(number)

  let insertIndex = 0
  let result = number

  if (lowIndex > 0) {
    result.splice(insertIndex, 0, number[lowIndex])
    result.splice(lowIndex + 1, 1)
  }
  
  return [parseInt(result.join('')), lowIndex, insertIndex]
}
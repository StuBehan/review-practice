const smallest = (n) => {
  const number = n.toString().split('')

  const indexOfLowest = (array) => {
    return array.indexOf(Math.min(...array).toString())
  }

  const findLowestNumber = (array, lowest, insert) => {
    let result = array

    if (lowest > 0) {
      result.splice(insert, 0, array[lowest])
      result.splice(lowest + 1, 1)
    }

    return parseInt(result.join(''))
  }

  const lowestIndex = indexOfLowest(number)

  let insertIndex = 0

  const lowestNum = findLowestNumber(number, lowestIndex, insertIndex)
  
  return [lowestNum, lowestIndex, insertIndex]
}
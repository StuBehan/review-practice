const smallest = (n) => {
  const number = n.toString().split('')

  const indexOfLowest = (array) => {
    return array.indexOf(Math.min(...array).toString())
  }
  
  return [n, indexOfLowest(number)]
}
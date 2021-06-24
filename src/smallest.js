const smallest = (n) => {
  const number = n.toString().split('')

  const indexOfLowest = (array) => {
    return number.indexOf(Math.min(...array).toString())
  }
  
  return [n, indexOfLowest(number)]
}
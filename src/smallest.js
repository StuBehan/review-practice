const smallest = (n) => {
  const number = n.toString().split('')

  const indexOfLowest = (array) => {
    return array.indexOf(Math.min(...array).toString())
  }

  if (indexOfLowest(number) > 0) {
    
  }
  
  return [n, indexOfLowest(number)]
}
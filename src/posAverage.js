const posAverage = (string) => {
  let strings = string.split(", ")
  let positionMatches = 0
  
  strings.forEach((number, index) => {
    for (let i = index + 1; i < strings.length; i ++) {
      if (number === strings[i]) {
        positionMatches++ 
      }
    }
  })
  
  const combinations = (array) => {
    let numOfStrings = array.length
    return (numOfStrings * (numOfStrings-1)) / 2
  }

  const posAvg = (number, array) => {
    return (number / combinations(array)) * 100  
  }

  const toFloat = (number, array) => {
    return parseFloat(posAvg(number, array).toFixed(10))
  }

  return toFloat(positionMatches, strings)
}


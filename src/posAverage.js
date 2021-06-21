const posAverage = (string) => {

  const nestedArrays = (string) => {
    return string.split(", ").map(element => element.split(''))
  }

  let strings = nestedArrays(string)
  let positionMatches = 0
  
  strings.forEach((subArray, index) => {
    for (let j = 0; j < subArray.length; j++) {
      for (let i = index + 1; i < strings.length; i++) {
        if (subArray[j] === strings[i][j]) {
          positionMatches++ 
        }
      }
    }
  })

  const combinations = (array) => {
    return ((array.length * (array.length-1)) / 2) * array[0].length
  }

  const posAvg = (number, array) => {
    return (number / combinations(array)) * 100  
  }

  const toFloat = (number, array) => {
    return parseFloat(posAvg(number, array).toFixed(10))
  }

  return toFloat(positionMatches, strings)
}

const posAverage = (string) => {
  let strings = string.split(", ")
  let result = 0
  
  strings.forEach((number, index) => {
    for (let i = index + 1; i < strings.length; i ++) {
      if (number === strings[i]) {
        result++ 
      }
    }
  })
  
  let numOfStrings = strings.length
  let combinations = (numOfStrings * (numOfStrings-1)) / 2

  let posAvg = (result / combinations) * 100  

  return parseFloat(posAvg.toFixed(10))
}


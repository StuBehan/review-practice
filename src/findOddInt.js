const findOdd = (array) => {
  let result = 0
  
  array.forEach(element => {
    if(array.map(int => int === element).length % 2 !== 0) {
      result = element
    }
  })

  return result 
}
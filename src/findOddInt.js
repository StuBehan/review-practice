const findOdd = (array) => {
  let result = 0
  
  array.forEach(element => {
    let count = []

    array.forEach(int => {
      if(element === int){
        count.push(int)
      }
    })
    
    if(count.length % 2 !== 0) {
      result = element
    }
  })

  return result 
}
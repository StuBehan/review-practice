const highAndLow = (numbers) => {
  numbersArray = numbers.split(' ')
  
  return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`
}
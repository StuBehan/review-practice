class ChangeGenerator {

  convert(value) {
    let change = []
    let currentValue = value
    const denomonations = [50, 20, 10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]

    denomonations.forEach(number => {
      if (currentValue / number >= 1) {
        for (let i = 0; i <= currentValue / number; i++) {
          if (number >= 1) {
            change.push(`£${number}`)
          } else {
            change.push(`${number * 100}p`)
          }
          currentValue = (currentValue * 100 - number * 100) / 100
        }
      }
    })

    return change
  }
}

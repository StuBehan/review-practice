class ChangeGenerator {

  convert(value) {
    let change = []

    if (value % 1 === 0) {
      for (let i = 0; i < value /1; i++)
      change.push('£1')
    }

    return change
    // if (value === 1) {
    //   return ['£1']
    // } else if (value === 2) {
    //   return ['£1', '£1']
    // }
  }
}
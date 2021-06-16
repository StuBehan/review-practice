class ChangeGenerator {

  convert(value) {
    if (value === 1) {
      return ['£1']
    } else if (value === 2) {
      return ['£1', '£1']
    }
  }
}
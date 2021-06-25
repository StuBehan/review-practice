describe('findOdd', () => {
  it('when given an array containing one int returns that int', () => {
    expect(findOdd([10])).toEqual(10)
  })

  it('when passed an array only containing 5, returns 5', () => {
    expect(findOdd([5])).toEqual(5)
  })

  it('returns 2 when passed the array [1, 1, 2]', () => {
    expect(findOdd([1, 1, 2])).toEqual(2)
  })
})
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

  it('returns 5 when passed the array [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]', () => {
    expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toEqual(5)
  })

  it('returns -1 when passed the array [1,1,2,-2,5,2,4,4,-1,-2,5]', () => {
    expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toEqual(-1)
  })
})
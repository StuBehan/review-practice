describe('smallest', () => {
  it('returns a number within an array from the given number', () => {
    expect (smallest(13)[0]).toEqual(13)
  })

  it('returns the index of the lowest single digit in the number', () => {
    expect(smallest(13)).toEqual([13, 0])
  })
})
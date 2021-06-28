describe('smallest', () => {
  it('returns a number within an array from the given number', () => {
    expect (smallest(13)[0]).toEqual(13)
  })

  it('returns the index of the lowest single digit in the number', () => {
    expect(smallest(13)[1]).toEqual(0)
  })

  it('returns the index of the insertion point to make the number as small as possible', () => {
    expect(smallest(13)).toEqual([13, 0, 0])
  })

  it('returns [31, 1, 0] moving the number one to insert point zero', () => {
    expect(smallest(31)).toEqual([31, 1, 0])
  })
})
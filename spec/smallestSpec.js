describe('smallest', () => {
  it('returns an array', () => {
    expect(smallest()).toBeInstanceOf(Array)
  })

  it('returns a number within an array from the given number', () => {
    expect (smallest(13)).toEqual([13])
  })
})
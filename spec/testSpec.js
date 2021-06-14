describe('concat', () => {
  it('returns an array', () => {
    expect(concat([], [])).toBeInstanceOf(Array)
  })

  it('concatenates two arrays', () => {
    expect(concat([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
  })
})
describe('posAverage', () => {
  it('returns the int 100, when passed "1, 1"', () => {
    expect(posAverage('1, 1')).toEqual(100)
  })

  it('returns in value 0 when passed "1, 2"', () => {
    expect(posAverage('1, 2')).toEqual(0)
  })

  it('returns 33.3333333333 when passed "1, 1, 2"', () => {
    expect(posAverage('1, 1, 2')).toEqual(33.3333333333)
  })

  it('returns 33.3333333333 when passed "13, 15, 22"', () => {
    expect(posAverage('13, 15, 22')).toEqual(16.6666666667)
  })
})
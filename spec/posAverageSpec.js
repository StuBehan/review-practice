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

  it('using the given example string, returns 29.2592592593', () => {
    expect(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490")).toEqual(29.2592592593)
  })
})
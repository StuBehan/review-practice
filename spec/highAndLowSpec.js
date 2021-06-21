describe('highAndLow', () => {
  it('returns the string "3 1"', () => {
    expect(highAndLow('1 3')).toEqual('3 1')
  })

  it('returns "5 2" when passed the string "2 5"', () => {
    expect(highAndLow('2 5')).toEqual('5 2')
  })
})
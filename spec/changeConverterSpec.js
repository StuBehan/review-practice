describe('changeGenerator', () => {
  let changeGenerator 

  it('returns £1 when 1 is entered', () => {
    changeGenerator = new ChangeGenerator
    expect(changeGenerator.convert(1)).toEqual(['£1'])
  })
})
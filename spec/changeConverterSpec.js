describe('changeGenerator', () => {
  let changeGenerator 

  beforeEach(() => {
    changeGenerator = new ChangeGenerator
  })

  it('returns £1 when 1 is entered', () => {
    expect(changeGenerator.convert(1)).toEqual(['£1'])
  })

  it('returns ["£1", "£1"] when passed 2', () => {
    expect(changeGenerator.convert(2)).toEqual(['£1', '£1'])
  })

  it('returns ["£5", "20p", "5p"] when passed 5.25', () => {
    expect(changeGenerator.convert(5.25)).toEqual(['£5', '20p', '5p'])
  })
})

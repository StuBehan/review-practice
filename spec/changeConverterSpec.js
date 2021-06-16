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

  it('returns the correct response for the figure 76.81', () => {
    expect(changeGenerator.convert(76.81)).toEqual(["£50", "£20", "£5", "£1", "50p", "20p", "10p", "1p"])
  })
})

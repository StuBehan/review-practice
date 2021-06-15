describe('scrabble', () => {
  
  let scrabble

  it('returns a score of 1 for the letter a', () => {
    scrabble = new Scrabble('a')
    expect(scrabble.score).toEqual(1)
  })

  it('returns a score of 2 for the letter d', () => {
    scrabble = new Scrabble('d')
    expect(scrabble.score).toEqual(2)
  })
})
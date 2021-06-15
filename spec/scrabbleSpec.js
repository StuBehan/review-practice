describe('scrabble', () => {
  
  let scrabble

  it('returns a score of 1 for the letter a', () => {
    scrabble = new Scrabble('a')
    expect(scrabble.score).toEqual(1)
  })
})
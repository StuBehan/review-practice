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

  it('returns a scoore of 3 for the letter b', () => {
    scrabble = new Scrabble('b')
    expect(scrabble.score).toEqual(3)
  })

  it('returns the score of a given word', () => {
    scrabble = new Scrabble('cat')
    expect(scrabble.score).toEqual(5)
  })

  it('returns 0 when the input is invalid', () => {
    scrabble = new Scrabble('')
    expect(scrabble.score).toEqual(0)
  })

  it('returns 0 when an illegal character is entered', () => {
    scrabble = new Scrabble('#')
    expect(scrabble.score).toEqual(0)
  })
})
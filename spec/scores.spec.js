/* global describe, it, beforeEach, expect, Scores, uk_league */

/* TEST GROUP */
describe('A program to find the team with the lowest difference in goals', function () {
  beforeEach(function () {
    this.scores = new Scores(uk_league)
  })

  it('has a function that produces 21 lines', function () {
    var data = this.scores.getData()
    expect(data.length).toBe(21)
  })

  it('takes the data and keeps it in a data variable property', function () {
    expect(this.scores.data).toBe(uk_league)
  })

  it('returns the value of f=87 for manchester united', function () {
    var manchester = this.scores.getTeamData(this.scores.getLineForTeam('Manchester_U'))
    expect(this.scores.f(manchester)).toBe(87)
  })
  it('returns the value of f=87 for manchester united', function () {
    var manchester = this.scores.getTeamData(this.scores.getLineForTeam('Manchester_U'))
    expect(this.scores.f(manchester)).toBe(87)
  })

  it('supertrims with 5 " " and returns 1 ""', function () {
    expect(this.scores.supertrim('      ')).toBe('')
  })

  it('supertrims with "   1. Arsenal         38    26   9   3    79  -  36    87" and returns "1.,Arsenal,38,26,9,3,79,-,36,87"', function () {
    expect(this.scores.supertrim('   1. Arsenal         38    26   9   3    79  -  36    87')).toBe('1.,Arsenal,38,26,9,3,79,-,36,87')
  })

  it('getTeamData with "   1. Arsenal         38    26   9   3    79  -  36    87" and returns array with length 10', function () {
    expect(this.scores.getTeamData('   1. Arsenal         38    26   9   3    79  -  36    87').length).toBe(10)
  })
  it('get data from arsenal returns f = 79', function () {
    expect(this.scores.getTeamData('   1. Arsenal         38    26   9   3    79  -  36    87')[6]).toBe('79')
  })

  it('getLineForTeam return "    3. Manchester_U    38    24   5   9    87  -  45    77" for "Manchester_U"', function () {
    expect(this.scores.getLineForTeam('Manchester_U')).toBe('    3. Manchester_U    38    24   5   9    87  -  45    77')
  })

  describe('has a function getTeam', function () {
    it('returns the data for Manchester United for the parameter "Manchester_U"', function () {
      expect(this.scores.getTeam('Manchester_U')).not.toBe(undefined)
    })
    it('returns the data for Manchester United for the parameter "Manchester_U" with parameter .f = 87', function () {
      expect(this.scores.getTeam('Manchester_U').f).toBe(87)
    })
    it('returns the differences of goals for Manchester United as 42', function () {
      expect(this.scores.getTeam('Manchester_U').d).toBe(42)
    })
  })
  describe('has a function parseTeams', function () {
    it('returns the list of 20 team objects with .name .f .a', function () {
      var teams = this.scores.parseTeams()
      expect(teams.length).toBe(20)
      expect(teams[0].name).toBeDefined()
      expect(teams[0].f).toBeDefined()
      expect(teams[0].a).toBeDefined()
    })
    it('returns calculates the differences of goals for each team: .d ', function () {
      var teams = this.scores.parseTeams()
      expect(teams.length).toBe(20)
      expect(teams[0].d).toBeDefined()
    })
  })
  describe('has a function getMostEfficient', function () {
    it('returns "Arsenal"', function () {
      expect(this.scores.getMostEfficient().name).toBe('Arsenal')
    })
  })
})

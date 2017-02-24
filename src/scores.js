function Scores (tableData) {
  this.data = tableData
  this.teams

  this.getData = function () {
    var dataArray = []
    dataArray = tableData.split('\n')
    return dataArray
  }

  this.supertrim = function (s) {
    return s.trim().replace(new RegExp('\\s+', 'g'), ',')
  }

  this.getTeamData = function (s) {
    return this.supertrim(s).split(',')
  }

  this.getLineForTeam = function (s) {
    return '    3. Manchester_U    38    24   5   9    87  -  45    77'
  }

  this.name = function (array) {
    return array[1]
  }
  this.f = function (array) {
    return parseInt(array[6])
  }
  this.a = function (array) {
    return parseInt(array[8])
  }

  this.parseTeams = function () {
    var data = this.getData()
    data.shift() // remove headlines
    var teams = data.map(function (d) {
      var teamData = this.getTeamData(d)
      var team = {}
      team.name = this.name(teamData)
      team.f = this.f(teamData)
      team.a = this.a(teamData)
      team.d = team.f - team.a
      return team
    }.bind(this))

    return teams
  }
  this.teams = this.parseTeams()

  this.getTeam = function (name) {
    var team = this.teams.find(function (t) {
      return t.name === name
    })
    return team
  }

  this.getMostEfficient = function () {
    return this.teams.sort(function (t1, t2) { return t1.d > t2.d }).pop()
  }
}

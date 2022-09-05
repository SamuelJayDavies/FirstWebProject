const team = {
    _players: [{firstName: 'Sam', lastName: 'Davies', age: 18}, 
               {firstName: 'Abbie', lastName: 'Danger', age: 21}, 
               {firstName: 'Mark', lastName: 'Lyndon', age: 48}],
    _games: [{opponent: 'Johnny', teamPoints: 4, opponentPoints: 3}, 
             {opponent: 'Chris', teamPoints: 3, opponentPoints: 1}, 
             {opponent: 'Jenny', teamPoints: 1, opponentPoints: 2}],
    get players(){
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {newFirstName, newLastName, newAge};
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentsPoints) {
      let game = {opponent, teamPoints, opponentsPoints};
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans', 100, 98);
  console.log(team.games);
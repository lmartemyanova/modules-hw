const { Character } = require('./domain')

class Game {
    start() {
        console.log('game started');
    }
}
  
class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports = {
    Game: Game,
    GameSavingData: GameSavingData,
    readGameSaving: readGameSaving,
    writeGameSaving: writeGameSaving
}
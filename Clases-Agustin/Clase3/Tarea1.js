//Creo un array score // creo un array players // filtro los puntajes mayores a 7 con scores.filter // busco con outstandingScores.map((score, player) => players) dentro de un nuevo array llamado outstandingPlayers
const scores = [8, 9, 5, 6, 3] 
let players = ['Messi', 'Fideo', 'Paredes', 'Aguero', 'Otamendi']

const outstandingScores = scores.filter(score => score > 7);
const outstandingPlayers = outstandingScores.map((score, player) => players[player]);
// Creo un array regularScores y aplico un filter en score para obtener(score => !outstandingScores.includes)
const regularScores = scores.filter(score => !outstandingScores.includes(score));
const deleteRegularPlayers = players.splice(0, 2)
const regularPlayers = regularScores.map((score, player) => players[player]);

function evalPerformance(scores, players){
    
    const outstandingScores = scores.filter(score => 7);
    const outstandingPlayers = outstandingScores.map((score, player) => players[player]);
    const regularScores = scores.filter(score => !outstandingScores.includes(score));
    const regularPlayers = regularScores.map((score, player) => players[player]);

    return {
        outstandingScores,
        outstandingPlayers,
        regularScores,
        regularPlayers
    };

}

console.log(outstandingPlayers)
console.log(outstandingScores)
console.log(regularPlayers)
console.log(regularScores)
console.log(evalPerformance)
console.log(players)
console.log(scores)

//Metodos de arreglo: filter(4), maps(4), includes(2), splice(1)
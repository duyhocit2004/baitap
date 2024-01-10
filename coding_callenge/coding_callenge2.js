const game ={
    team1 : 'bayern Munich',
    team2 : 'Borrussia Dortmund',
    players :[
        [
            'neuer',
            'padvard',
            'martinez',
            'alaba',
            'kimich',
            'goretzka',
            'coman',
            'muller',
            'gnarby',
            'lewandowski',
        ],
        [
            'burki',
            'schulz',
            'hummels',
            'akanji',
            'hakimi',
            'weigl',
            'witsel',
            'hzard',
            'barndt',
            'gotze',
        ],
    ],
    sroce:'4:0',
    scored :['lewandoski','gnarby','lewandowski','hummels'],
    date:'nov 9th,2037',
    odd:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};

//1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
  }

//2
const odds = Object.values(game.players);
let average = 0;
for(const odd of Object.values(game.odd));
average /= odds.length;
console.log(average);

//3
for (const[team,odd] of Object.entries(game.odd)){
    const teamstr = team ==='x' ? 'draw' : `victory ${game.team}`;
    console.log(`odd of ${teamstr} ${odd}`);
}
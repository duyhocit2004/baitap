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
const [players1,players2] = game.players;
console.log(players1,players2);

//2
const[gk,...fieldplayers] = players1;
console.log(gk,fieldplayers);

//3
const allplayers = [...players1, ...players2];
console.log(allplayers);

//4
const players1Final =[...players1,'thiago'];
'coutinho','pecriscic';

//5
 const {odd:{ team1 , x : draw , team2 }} = game;
 console.log(team1,draw,team2);

//6
const printGoals = function (){
    console.log(game.players);
    console.log(`${game.players.length} goals were scored`);
}
printGoals('lewandoski','gnarby','lewandowski','hummels');
printGoals('davies','muller');


printGoals(...game.scored);

//7.
team1 < team2 && console.log("team 1 is more likely to win");


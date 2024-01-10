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


const gameEvents = new Map([
    [17,'⚽ GOAL'],
    [36,'🔁 substitution'],
    [17,'⚽ GOAL'],
    [17,'🔁 substitution'],
    [17,'🔶 yellow card'],
    [17,'🔴 red card'],
    [17,'🔁 substitution'],
    [17,'🔁 substitution'],
    [17,'⚽ GOAL'],
    [17,'⚽ GOAL'],
    [17,'🔶yellow card'],


]);

//1
const events =[...new Set(gameEvents.values())]
console.log(gameEvents.values);

//2 
gameEvents.delete(64);

//3
console.log(`an event happend , on average,every ${90/gameEvents.size} minitues`);
const time = [...gameEvents.keys()];
console.log(time);

//4
for(const [min,value] of gameEvents){
    const half = min <= 45 ? 'FIRT' : 'SECOND';
    console.log(`[${half} HALF ${min} : ${events}`);
}
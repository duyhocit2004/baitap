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
//1 tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý là không trùng nhau)

const events =  [
    [20,'⚽ GOALLLL'],
    [10,'🔶 red ball'],
    [15,'🔴 GOALL'],
    [16,'🔁 check var'],
    [29,'🔴 pen'],
    [40,'⚽ GOALLLL'],
    [65,'🔴 pen'],
    [90,'🕐 outime']

];
//2 Sau khi trò chơi kết thúc, phát hiện ra rằng thẻ vàng phút 64 là không đúng. Hãy xóa nó khỏi danh sách sự kiện trong trận đấu.
for(let i ; i < events.length ; i++){
    if(events[i][0] === 65 && events[i][1] === "pen"){
        events.splice(i,1);
        console.log(events);
        break;
    };
}

//3 In ra console theo định dang như sau:"1 sự kiện xảy ra, trung bình mỗi 9 phút". Lưu ý răng mỗi trận đấu có 90 phút.
const totalEvents = events.length;
const averagePerMinute = totalEvents / 90;
console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / totalEvents)} phút`);


//4  Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2,

for (const event of events) {
  const minute = event[0];
  const action = event[1];
  const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${minute}: ${action}`);
}
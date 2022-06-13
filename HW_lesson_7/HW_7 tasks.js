
// 1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик,
//  каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.


function shootDice(){

    const player_1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const player_2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(player_1, player_2);
    return [player_1, player_2];
}


function returnResult(){

    const [player_1_call_1, player_2_call_1] = shootDice();
    const [player_1_call_2, player_2_call_2] = shootDice();
    const [player_1_call_3, player_2_call_3] = shootDice();
    if ([player_1_call_1, player_1_call_2, player_1_call_3].reduce((el, num) => el + num) > [player_2_call_1, player_2_call_2, player_2_call_3].reduce((el, num) => el + num)){
        console.log('You win!');
    } else if ([player_1_call_1, player_1_call_2, player_1_call_3].reduce((el, num) => el + num) < [player_2_call_1, player_2_call_2, player_2_call_3].reduce((el, num) => el + num)){
        console.log('You lose!');
    } else {
        console.log('Draw!');
    }
}
returnResult();

/* 2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.*/


function GetFridayThirteen() {
    let fridayThirteen = 0;
    let today = new Date();
    let startDate = new Date('01/01/2000');
    if (today.valueOf() > startDate.valueOf()){
        do
        {
            if (startDate.getDay() === 5 && startDate.getDate() === 13){
                fridayThirteen++;
            }
            startDate.setDate(startDate.getDate() + 1);
        }
        while (today.valueOf() > startDate.valueOf())
    }
    return fridayThirteen;
}

console.log(GetFridayThirteen());




// 3) Напишите код который будет разбивать число на заданное количество
// рандомных чисел сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а) числа изначальное число целое, числа разбивки - целые (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

function getBreakNumber(n, iterations) {
    const parts = [];
    const parts1 = [];
    let remainder = n;
    let remainder1 = n;

    for (let i = 1; i <= iterations; i++) {
        if (i === iterations) {
            parts.push(remainder);
            parts1.push(remainder1);
            break;
        }

        const part = Math.round(Math.random() * (remainder1 - 1 + 1) + 1);
        const part1 = (Math.random() * (remainder1 - 1 + 1) + 1).toFixed(2);
        parts.push(part);
        parts1.push(part1);
        remainder -= part;
        remainder1 -= part1;
    }
    const total = totalFromParts(parts);
    const total1 = totalFromParts(parts1);

    console.log(parts.join());
    console.log('Total is ' + total);
    console.log(parts1.join());
    console.log('Total1 is ' + total1);

    function totalFromParts(parts) {
        return parts.reduce((sum, value) => +sum + +value);
    }
}
getBreakNumber(15, 2);

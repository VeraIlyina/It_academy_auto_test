// Решить используя промисы и async/await
//     Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
//     Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
//     С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.
//    1. Сделайте функцию getNum, которая возвращает промис, который с задержкой
//     в 3 секунды выведет случайное число от 1 до 5.
//    2. Создайте async функцию, которая с помощью await будетдожидаться результата
//     getNum, затем возводить его в квадрат и выводить на экран.
//    3. Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//     Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
//     Создайте async функцию, которая с помощью await будет дожидаться результата getNum1,
//     затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.


function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


function getPromiseMain(timeout, randomNum){
    return new Promise(function(resolve) {
        setTimeout(resolve, timeout, randomNum);
    });
};


function getPromiseRace() {
    let promise1 = getPromiseMain(getRandomNum(1, 6) * 1000, 1);
    let promise2 = getPromiseMain(getRandomNum(1, 6) * 1000, 2);
    let promise3 = getPromiseMain(getRandomNum(1, 6) * 1000, 3);
    Promise.race([promise1, promise2, promise3]).then(function (value) {
        console.log(value);
    });
}
getPromiseRace()


async function getAwait(){
    let result = await getPromiseMain(3000, getRandomNum(1, 6));;
    console.log(Math.pow(result, 2));
}
getAwait();


async function getSum(){
    let term1 = await getPromiseMain(3000, getRandomNum(1, 6));
    let term2 = await getPromiseMain(5000, getRandomNum(6, 11));
    console.log(`${term1} + ${term2} =`, term1 + term2);
}
getSum();
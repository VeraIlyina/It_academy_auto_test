// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function reverseArray(newArray){

    console.log(newArray.reverse());
}
reverseArray([1,2,3,4,5,6]);


// 2) найти максимальное значение числа в массиве ([3,67,15...])

function findMaxValue(newArray){
    newArray.sort((a, b) => b - a);
    console.log(`Максимальное значение числа в массиве равно ${newArray[0]}`);
}
findMaxValue([3,67,15,115, 2, 67, 10108]);

// 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M

function getFibonacci(N, M) {
    let fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (let i = 2; i <= N+M; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib.slice(N, N+M))
}
getFibonacci(8, 5);



 // 4) даны 2 4-хзначных числа с неповторяющимися цифрами,
 // надо определить сколько цифр в этих числах совпадают по значению и позиции и
 // сколько только по значению (3487 и 3794 ---> 1 и 2 )


 function digitMatch(num1, num2){
     let valueAndIndex = 0;
     let value = 0;
     let num1String = num1.toString();
     let num2String = num2.toString();
     for (let i = 0; i < num1String.length; i++){
         for (let j = 0; j < num2String.length; j++){
             if(i === j && num1String[i] === num2String[j]){
                 valueAndIndex ++;
             }
             if (num1String[i] === num2String[j]){
                 value ++;
             }
         }
     }
     console.log(valueAndIndex, value)
 }
 digitMatch(3487, 3794);



// 5) сортировка массива по возрастанию/убыванию


 function sortArrayAscDesc(newArray){
     console.log(newArray.sort((a, b) => a - b));
     console.log(newArray.sort((a, b) => b - a));
 }
 sortArrayAscDesc([3,67,15,115, 2, 67, 10108]);



// 6) удалить из массива все повторяющиеся элементы


 function delRepeatingElements(newArray){

     console.log(newArray.filter(el => newArray.indexOf(el) === newArray.lastIndexOf(el)));
 }
 delRepeatingElements([-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2]);

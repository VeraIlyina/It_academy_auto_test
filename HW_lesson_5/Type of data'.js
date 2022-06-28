//1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)


function homeworkLesson5(a, b){
    console.log(a + b);
    console.log(a * b);
    console.log(a / b);
    console.log('*****************')

}

homeworkLesson5('string ', 'string ');
homeworkLesson5('string ', true);
homeworkLesson5('string ',false);
homeworkLesson5('string ', 10);
homeworkLesson5('string ', NaN);
homeworkLesson5('string ', Infinity);
homeworkLesson5('string ', null);
homeworkLesson5('string ', undefined);
homeworkLesson5('string ', [1, 'text']);
homeworkLesson5('string ', {number : 10});
homeworkLesson5(10, true);
homeworkLesson5(10,false);
homeworkLesson5(10, 10);
homeworkLesson5(10, NaN);
homeworkLesson5(10, Infinity);
homeworkLesson5(10, null);
homeworkLesson5(10, undefined);
homeworkLesson5(10, [1, 'text']);
homeworkLesson5(10, {number : 10});
homeworkLesson5(true, true);
homeworkLesson5(true,false);
homeworkLesson5(true, NaN);
homeworkLesson5(true, Infinity);
homeworkLesson5(true, null);
homeworkLesson5(true, undefined);
homeworkLesson5(true, [1, 'text']);
homeworkLesson5(true, {number : 10});
homeworkLesson5(false,false);
homeworkLesson5(false, NaN);
homeworkLesson5(false, Infinity);
homeworkLesson5(false, null);
homeworkLesson5(false, undefined);
homeworkLesson5(false, [1, 'text']);
homeworkLesson5(false, {number : 10});
homeworkLesson5(NaN, NaN);
homeworkLesson5(NaN, Infinity);
homeworkLesson5(NaN, null);
homeworkLesson5(NaN, undefined);
homeworkLesson5(NaN, [1, 'text']);
homeworkLesson5(NaN, {number : 10});
homeworkLesson5(Infinity, Infinity);
homeworkLesson5(Infinity, null);
homeworkLesson5(Infinity, undefined);
homeworkLesson5(Infinity, [1, 'text']);
homeworkLesson5(Infinity, {number : 10});
homeworkLesson5(null, null);
homeworkLesson5(null, undefined);
homeworkLesson5(null, [1, 'text']);
homeworkLesson5(null, {number : 10});
homeworkLesson5(undefined, undefined);
homeworkLesson5(undefined, [1, 'text']);
homeworkLesson5(undefined, {number : 10});
homeworkLesson5([1, 'text'], [1, 'text']);
homeworkLesson5([1, 'text'], {number : 10});
homeworkLesson5({number : 10}, {number : 10});

//4) Выполнить явное преобразование(number, string, boolean)
function typeConversion(value){
    console.log('______________________');
    console.log(Number(value));
    console.log(String(value));
    console.log(Boolean(value));
}

typeConversion('text');
typeConversion(10);
typeConversion(true);
typeConversion(false);
typeConversion(NaN);
typeConversion(Infinity);
typeConversion(null);
typeConversion(undefined);
typeConversion([1, 'text']);
typeConversion({number : 10});






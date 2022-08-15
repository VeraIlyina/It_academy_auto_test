const Calculator = require('../calculator');
const {cases} = require("jasmine-parameterized");
const calculator = new Calculator();

let resultOfCalculating;
describe('Base add operation with positive and negative integer numbers', function (){
    beforeAll(async() => {
        console.log('Addition testing')
    });

    cases([
        [5, 15, 20],
        [-1, -3, -4],
        [-15, 5, -10],
        [1111111111, 1111111111, 2222222222]
    ])
        .it(`should be right result`, async ([num1, num2, equal]) => {
            resultOfCalculating = calculator.add(num1, num2)
            expect(resultOfCalculating).toEqual(equal);
        });
    it(`should be right type`, async () => {
        resultOfCalculating = calculator.add(2, 2)
        expect(typeof resultOfCalculating).toEqual('number');
    });

});

describe('Base subtraction operation with positive and negative integer numbers', function (){

    beforeAll(async() => {
        console.log('Subtraction testing')
    });

    cases([
        [15, 5, 10],
        [-1, -3, 2],
        [-15, 5, -20],
        [1111111111, 1111111111, 0]
    ]).it(`should be right result`, async ([num1, num2, equal]) => {
        resultOfCalculating = calculator.subtraction(num1, num2)
        expect(resultOfCalculating).toEqual(equal);
    });
    it(`should be right type`, async () => {
        resultOfCalculating = calculator.subtraction(2, 2)
        expect(typeof resultOfCalculating).toEqual('number');
    });
});

describe('Base multiply operation with positive and negative integer numbers', function (){
    beforeAll(async() => {
        console.log('Multiply testing')
    });

    cases([
        [5, 5, 25],
        [-1, -3, 3],
        [-5, 5, -25],
        [1111 , 1111 , 1234321],
        [0, 5, 0],
        [1, 0, 0]
    ])
    .it(`should be right result`, async ([num1, num2, equal]) => {
        let result = calculator.multiply(num1, num2)
        expect(result).toEqual(equal);
    });
    it(`should be right type`, async () => {
        resultOfCalculating = calculator.multiply(2, 2)
        expect(typeof resultOfCalculating).toEqual('number');
    });
});

describe('Base divide operation with positive and negative integer numbers', function (){

    beforeAll(async() => {
        console.log('Divide testing')
    });

    cases([
        [5, 5, 1],
        [-6, -3, 2],
        [-5, 5, -1],
        [11111111111 , 11111111111 , 1],
        [0, 5, 0],
        [1, 0, Infinity]
    ])
        .it(`should be right result`, async ([num1, num2, equal]) => {
            let result = calculator.divide(num1, num2)
            expect(result).toEqual(equal);
        });
    it(`should be right type`, async () => {
        resultOfCalculating = calculator.divide(2, 2)
        expect(typeof resultOfCalculating).toEqual('number');
    });
});

describe('Base exponentiation operation with positive and negative integer numbers', function (){

    beforeAll(async() => {
        console.log('Exponentiation testing')
    });

    cases([
        [5, 25],
        [-6, 36],
        [1111, 1234321],
        [0, 0],
    ])
        .it(`should be right result`, async ([num1, equal]) => {
            let result = calculator.exponentiation(num1)
            expect(result).toEqual(equal);
        });
    it(`should be right type`, async () => {
        resultOfCalculating = calculator.exponentiation(2)
        expect(typeof resultOfCalculating).toEqual('number');
    });
});
// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string,
    children?: number
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

function infoPerson(user: User) {

    console.log(` - name: ${user.name}, age: ${user.age}, occupation: ${user.occupation}, data: ${user.car || user.children}`);
}

console.log('Users:');
users.forEach(infoPerson);
console.log('-------------------------');

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person,
//     который будет соответствовать массиву

interface Person  {
    name: string,
    age: number,
    occupation1?: string,
    role?: string
};

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation1: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation1: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'Administrator'
    }
];
function isAdmin(person: Person) {
    return person.role === 'Administrator';
}
function isUser(person: Person) {
    return person.occupation1;
}
function logPerson(person: Person) {
    let additionalInformation : string | undefined = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation1;
    }
    console.log(` - Name: ${person.name}, age: ${person.age}, ${additionalInformation}`);
}
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);

// 3. Напишите анотации типов к этому классу.

export class ObjectManipulator {

    constructor(protected obj : { [key: string]: string | string[] }) {}

    public set(key : string, value: string | string[]): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string) {
        return this.obj[key];
    }

    public delete(key: string) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

//4. Обеспечьте правильную типизацию для указанных функций.

    /**
     * 2 arguments passed: returns a new array
     * which is a result of input being mapped using
     * the specified mapper.
     *
     * 1 argument passed: returns a function which accepts
     * an input and returns a new array which is a result
     * of input being mapped using original mapper.
     *
     * 0 arguments passed: returns itself.
     *
     * @param {Function} mapper
     * @param {Array} input
     * @return {Array | Function}
     */
    export function map(mapper: (el: string) => number, input: string[]): number[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: string[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer: (el: number) => boolean, input: number[]): number[] | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: number[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number): number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}

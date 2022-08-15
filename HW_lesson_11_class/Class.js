// // Подготовить игровую комнату для детей разных возрастных групп.
// // Игрушек должно быть фиксированное количество в пределах выделенной суммы денег.
// // Должны встречаться игрушки родственных групп, например: маленькие, средние и большие машины, куклы, мячи, кубики.
// //Провести сортировку игрушек в  комнате по одному из параметров.
// //Найти игрушки в комнате, соответствующие заданному диапазону параметров.
class Toys {
    constructor(name, params) {
        this.toys = [];
        this.name = name;
        this.params = params;
    }

    getAnyParamToy(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }

    push(budget) {
        let availableBudget = budget;

        while (availableBudget >= 0) {
            const { cost, ...toyParams } = this.getAnyParamToy(this.params);
            availableBudget = availableBudget - cost;

            if (availableBudget >= 0)
                this.toys.push({
                    ...toyParams,
                    cost,
                    name: this.name
                });
        }

        return this.toys.cost
    }

    sort(paramName) {
        this.toys.sort(({ [paramName]: paramNameA }, { [paramName]: paramNameB }) => {
            return paramNameA < paramNameB ? -1 : 1
        })

        return this.toys
    }

    list() {
        return this.toys;
    }
    findByParam(obj) {
        return this.toys.filter(toy => Object.keys(obj).every(key => obj[key] === toy[key]))
    }

}
class Car extends Toys {

    constructor(){
        const name = 'Car';
        const params = [
            {
                size: 'Little',
                cost: 1
            },
            {
                size:'Middle',
                cost: 2
            },
            {
                size: 'Large',
                cost: 3
            },
        ];
        super(name, params);
    }
}

class Chess extends Toys {
    constructor() {
    const name = 'Chess';
    const params = [
        {
            material: 'Wood',
            cost: 1
        },
        {
            material:'Plastic',
            cost: 2
        },
        {
            material: 'Iron',
            cost: 3
        },
    ];
    super(name, params);
}
}

class Doll extends Toys {
    constructor() {
        const name = 'Doll';
        const params = [
            {
                sex: 'Male',
                cost: 1
            },
            {
                sex:'Female',
                cost: 2
            }
        ];
        super(name, params);
    }
}


class Childroom {
    groups = [
        {
            group: 'Nursery',
            budget: 5
        },
        {
            group: 'Preschool age',
            budget: 10
        },
        {
            group: 'School age',
            budget: 15
        }

    ]

    constructor(inputGroup) {
        this.selectedGroup =  this.groups.find(({ group }) => group === inputGroup)

        if (!this.selectedGroup) throw new Error('This age group does not exist')

        this._prepareRoom();
    }

    _prepareRoom () {
        switch (this.selectedGroup.group) {
            case 'Nursery':
                this.toys =  new Car();
                this.toys.push(this.selectedGroup.budget);
                break;
            case 'Preschool age':
                this.toys =  new Doll();;
                this.toys.push(this.selectedGroup.budget);
                break;
            case 'School age':
                this.toys =  new Chess();
                this.toys.push(this.selectedGroup.budget);
                break;
        }
    }

    getRoomGroup () {
        return this.selectedGroup
    }
}

const childroom = new Childroom('School age');

console.log(childroom.toys.list())
console.log(childroom.toys.sort('cost'));
console.log(childroom.toys.findByParam({material : 'Iron'}))
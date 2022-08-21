class FirstContainerExampleFour {
    constructor() {

        this.clickAndDblClickText = "//*[@class = 'sc-dnqmqq fxWYjR'][contains(.,'.click() and .dblClick()')]";
        this.selectedItemValue = ".sc-htoDjs.jiqlbg span[data-cy= 'box-1-selected-name']";
        this.optionOne = '.sc-htoDjs.jiqlbg ul[data-cy="box-1-items-list"] :first-child';
        this.optionTwo = '.sc-htoDjs.jiqlbg ul[data-cy="box-1-items-list"] :nth-child(2)';
        this.optionThree = '.sc-htoDjs.jiqlbg ul[data-cy="box-1-items-list"] :nth-child(3)';

    };
};

module.exports = FirstContainerExampleFour;
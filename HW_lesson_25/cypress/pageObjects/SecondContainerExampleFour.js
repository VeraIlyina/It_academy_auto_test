class SecondContainerExampleFour{
    constructor() {

        this.checkAndUncheckHeader = "//*[@class = 'sc-dnqmqq fxWYjR'][contains(.,'.check() and .uncheck()')]";
        this.counterChexboxes = ".sc-htoDjs.jiqlbg span[data-cy= 'box-2-selected-count']";
        this.checkboxOptionOne = "//*[@class ='checkboxes'] //label[position() = 1]";
        this.checkboxOptionTwo = "//*[@class ='checkboxes'] //label[position() = 2]";
        this.checkboxOptionThree = "//*[@class ='checkboxes'] //label[position() = 3]";

    };
};

module.exports = SecondContainerExampleFour;

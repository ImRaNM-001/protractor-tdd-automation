class Internet_heroHomePage{

    // 1st fn
    get h3Header = () => $('h3');

    // 2nd fn pair
    getLink_Element(index){
        return $(`ul > li:nth-child( ${index} ) a`);               // used combination of both > and white space in a css selector
    }
    
    // above fn() can also be written ES6 way
    // getLink_Element = (index => $(`ul > li:nth-child( ${index} ) a`) ); 

    clickOnLink_Element(index){ 
        if(this.getLink_Element(index).isDisplayed().then(result => {
            if(result === true){
                this.getLink_Element(index).click();
                }
            } )
        );
    }

        
    // 3rd fn pair
    getCheckBox_Element(index){
        return $(`form#checkboxes>input:nth-child( ${index} )`);
    }
        
    clickOnCheckBox_Element(index){
        if(this.getCheckBox_Element(index).isDisplayed().then(result => {
            if(result === true){
                this.getCheckBox_Element(index).click();
                }
            } )
        );                                  // had to add ; for closing ( of if block
    }

}

module.exports = new Internet_heroHomePage();
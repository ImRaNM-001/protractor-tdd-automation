class Blazemeter_HomePage{

    // 1st fn pair: creating separate parent and childs    
    get parentElement(){ 
        return $('ul.list-nav-links'); 
    }   

    get childElements(){
        return this.parentElement.$$('li'); 
    }

    // get textForLi(){                                      // this will work for WDIO but not for protractor
    //         return this.childElements.filter( (element) => {
    //         element.getText().then( (elementsToPrint) => {
    //         console.log(elementsToPrint);            
    //     } );
    // } );
    
    get textForLi(){
        return this.childElements.getText().then(elementsToPrint => console.log(elementsToPrint) );
    }

    
    // 2nd fn pair: creating 1 single function to fetch the text of useCase elements instead of parent and child functions
    get useCasesElements(){
        // return $$ ('div#main_b_footer_second_block>ul>li');              // all 4 work fine but i prefer the last one, hence not commented
        // return (element.all(by.css('div#main_b_footer_second_block>ul>li')) );

        // return element(by.css('#main_b_footer_second_block')).$$('li') ;            // tested and works fine without () after return keyword
        return  $('#main_b_footer_second_block').$$('li');
    }

    get textOf_useCasesElements(){
        return this.useCasesElements.getText().then(elementsToPrint => console.log(elementsToPrint) );
    }

    // 3rd fn
    specificChildElement(elementIndex){        // not used get function here as we had to pass a parameter, get methods should not have any parameter
        return this.parentElement.$(` li:nth-child( ${elementIndex} )`);
    }

    
    // 4th fn: below function is called in it's respective spec file to understand isDisplayed() function which is used to check for an element is displayed or not
    get mainHeader(){
        return $('h2.home_title');
    }


    // 5th fn pair: creating a wrapper for isDisplayed() using if-statement
    get startTestingNow_Link(){
        // return $('a[href*="https://a.blazemeter."]');           // although correct csss but returns more than 1 webElement hence used xpath below
        return element(by.xpath('//a[text()="Start Testing Now"][@class="start-testing-btn"]') );        // returns 1 single webElement
    }

    clickon_startTestingNow_Link(){
        if(this.startTestingNow_Link.isDisplayed().then(result => {
            if(result === true){
                this.startTestingNow_Link.click();
                }
            } )
        );     
    }

    // Below code will also work as it's promise is resolved via async await [works fine in WDIO without need for promise resolution]
    // async clickon_startTestingNow_Link(){
    //     if(await this.startTestingNow_Link.isDisplayed() === true) this.startTestingNow_Link.click();
    // }

}

module.exports = new Blazemeter_HomePage();
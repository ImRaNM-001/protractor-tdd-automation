class Blazemeter_HomePage{

    // part1: creating separate parent and childs    
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
        return this.childElements.getText().then( (elementsToPrint) => {
        console.log(elementsToPrint);         
     } );
    }

    
    // part2: creating 1 single function to fetch the text of useCase elements
    get useCasesElements(){
        // return $$ ('div#main_b_footer_second_block>ul>li');              // all 4 work fine but i prefer the last one, hence not commented
        // return (element.all(by.css('div#main_b_footer_second_block>ul>li')) );
        
        // return element(by.css('#main_b_footer_second_block')).$$('li') ;            // tested and works fine without () after return keyword
        return  $('#main_b_footer_second_block').$$('li');
    }

    get textOf_useCasesElements(){
        return this.useCasesElements.getText().then( (elementsToPrint) => {
        console.log(elementsToPrint);
        } );
    }

    specificChildElement(elementIndex){        // not used get function here as we had to pass a parameter, get methods should not have any parameter
        return this.parentElement.$(` li:nth-child( ${elementIndex} )`);
    }

    
    // part3: using isDisplayed() function to check for an element
    get mainHeader(){
        return $('h2.home_title');
    }


    // part4: creating a wrapper for isDisplayed() using if-statement
    get startTestingNow_Link(){
        // return $('a[href*="https://a.blazemeter."]');           // although correct csss but returns more than 1 webElement hence used xpath below
        return element(by.xpath('//a[text()="Start Testing Now"][@class="start-testing-btn"]') );        // returns 1 single webElement
    }

    clickon_startTestingNow_Link(){
        if(this.startTestingNow_Link.isDisplayed().then( (result) => {
            if(result === true){
                this.startTestingNow_Link.click();
                }
            } )
        );     
    }

    // Below code will not work as it is not resolved in a promise
    // clickon_startTestingNow_Link(){
    //     if(this.startTestingNow_Link.isDisplayed() === true){
    //         this.startTestingNow_Link.click();
    //     }
    // }

}

module.exports = new Blazemeter_HomePage();
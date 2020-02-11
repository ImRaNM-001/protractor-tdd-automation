describe('check element exist & visible in page', () => {


    // TC1: check element exist in DOM
    it('check if element exists in a page', () =>{
        element.all(by.id("....element-id........")).count().then( (totalMatches) =>{
            if(totalMatches>0)console.log("element is present");
            else console.log("element is not present");            
        } );
    } );



// TC2: check element is visible in the page or not
it('check if element is visible in a page', () =>{
    element(by.id('......it\'s id.......') ).isDisplayed().then( (displayed) =>{
        if(displayed)console.log('the element is displayed');
        else console.log('the element is not displayed');
} );

} );

} );
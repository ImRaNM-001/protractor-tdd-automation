const internet_heroHomePage = require ('../pages/internet_heroHomePage');

    describe('handling checkboxes', () => {

        beforeAll( () =>{
            browser.waitForAngularEnabled(false);    
        } )

        // TC1
        it('should click checkbox link', () => {
            browser.get('https://the-internet.herokuapp.com');
            internet_heroHomePage.clickOnLink_Element(6);
            browser.sleep(3000);
        } );


        // TC2
        it('click checkbox and verify if it\'s clicked or not', () => {
            browser.get('https://the-internet.herokuapp.com');
            internet_heroHomePage.clickOnLink_Element(6);
            if(internet_heroHomePage.h3Header.isDisplayed().then(result => {
                if(result === true){
                    internet_heroHomePage.clickOnCheckBox_Element(1);
                    }
                } )
            ) 

            // expect(internet_heroHomePage.getCheckBox_Element(1) ).isSelected().then(result => {
            //     if(result === true){
            //         internet_heroHomePage.getCheckBox_Element(1).toEqual(true);
            //     }
            // } )

            expect(internet_heroHomePage.getCheckBox_Element(1) ).toBe(true);        // i couldn't find any result as true in console although a long massive response gets printed

            browser.sleep(3000);
        } );


        // TC3
        it('validate page url', () => {
            browser.get('https://the-internet.herokuapp.com');
            browser.getCurrentUrl().then(url => {
                expect(browser.getCurrentUrl() ).toEqual('https://the-internet.herokuapp.com');
                // expect(browser.getCurrentUrl() ).toEqual(`${browser.options.baseUrl}`);      // taken from Naveen's WDIO video: part-8
           } );
        } );
            

         // TC4
         it('validate checkbox page header', () => {
            browser.get('https://the-internet.herokuapp.com');
            internet_heroHomePage.clickOnLink_Element(6);
            if(internet_heroHomePage.h3Header.isDisplayed().then(result => {
                if(result === true){
                    const t1 = internet_heroHomePage.h3Header.getText();
                    t1.then(text => {
                        expect(t1.toEqual('Checkboxes') );
                    } )
                }
            } )
        );       
        } );


        // TC5
        fit('validate checkbox page url', () => {
            browser.get('https://the-internet.herokuapp.com');
            internet_heroHomePage.clickOnLink_Element(6);

            browser.getCurrentUrl().then(url => {
                expect(browser.getCurrentUrl() ).toEqual('https://the-internet.herokuapp.com/checkboxes');
                // expect(browser.getCurrentUrl() ).toEqual(`${browser.options.baseUrl}checkboxes`);      // taken from Naveen's WDIO video: part-8
           } );
        } );



        
    } );



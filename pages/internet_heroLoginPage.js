class Internet_heroLoginPage{

    // getting locator for username field
    get userName(){
        return $('#username');
    }

    // getting locator for password field
    get passWord(){
        return $('#password');
    }

    // getting locator for login button
    get loginButton(){
        // return element(by.buttonText('Login') );     // this locator doesn't work as <button type="submit" but there is no value="" in the page.
        
        // Or, use $ and tagName
        // return $('button');                 // below commented ones works only in WDIO
        return $('button.radius');
        // return $('button[type="submit"]');

        // return element(by.xpath('//button[@class="radius"]') );
    }

    // writing a function to clear text in username field and entering any username
    enterUserName(text){
        if(this.userName.isDisplayed().then(result => {
            if(result === true){
                // this.userName.clear();
                this.userName.sendKeys(text);   
                } 
            } )
        );             
    }

    // writing a function to clear text in password field and entering any password
    enterPassWord(text){
        if(this.passWord.isDisplayed().then(result => {
            if(result === true){
                // this.passWord.clear();
                this.passWord.sendKeys(text);    
                } 
            } )
        );            
    }


    // writing a function to click login button
    clickLoginButton(){
        // if(this.loginButton.isDisplayed().then(result => {
        //     if(result === true){
        //         this.loginButton.click();
        //         } 
        //     } )
        // ); 
        this.loginButton.click();
    }


}                               // closing class Internet_heroLoginPage here

module.exports = new Internet_heroLoginPage();
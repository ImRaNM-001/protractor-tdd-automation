/* describe('testing to hit a webPage', function(){
    it('open youtube homePage', function(){
        browser.get('http://www.youtube.com');
    });
}); */

// trying with fat arrow function
describe('test to open a webPage', ()=>{
    it('open youtube page', ()=>{
        browser.get('https://www.youtube.com');
        // browser.manage().window().maximize();        // added in conf.js inside onPrepare function ()  
    });
});
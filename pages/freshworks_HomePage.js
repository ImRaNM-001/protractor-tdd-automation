class Freshworks_HomePage{

    // 1st fn
    // get pageHeader(){
    //     return $('h1'); 
    // }

    // written directly with fat arrow fn() but it's actually not a good idea to write fat arrow fns() inside a class, use normal fn() notation instead, that is quick to write
    get pageHeader = () => $('h1'); 
    
    // 2nd fn
    get subHeader(){ 
        return $('div.banner-text-content>p.sub-text');     // hitting exact element by parentTagname.className>childTagName.className as oppose to only p.sub-text (note: white spaces before and after are allowed and doesn't matter but don't give as spaces are enemies of good programmers)
    }        

    // 3rd fn
    get supportLink(){ 
        return $('a[href*="/support"]');        // used combination of css and regex using contains * instead of xpath where we cannot use $ sign
    }                
}

module.exports = new Freshworks_HomePage();
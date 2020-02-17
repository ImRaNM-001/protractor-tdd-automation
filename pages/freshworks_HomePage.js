class Freshworks_HomePage{

    get pageHeader() { return $('h1'); }
    
    get subHeader(){ 
        return $('div.banner-text-content>p.sub-text');     // hitting exact element by parentTagname.className>childTagName.className as oppose to only p.sub-text (note: white spaces before and after are allowed and doesn't matter but don't give as spaces are enemies of good programmers)
    }        

    get supportLink(){ 
        return $('a[href*="/support"]');        // used combination of css and regex using contains * instead of xpath where we cannot use $ sign
    }                
}

module.exports = new Freshworks_HomePage();
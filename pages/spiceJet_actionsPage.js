class SpiceJet{

    // fetching locator for parent i.e, main menu Login/Signup link
    get loginSignUp(){
        return $('#ctl00_HyperLinkLogin');
    }

    // fetching locator for parent's child link i.e, SpiceClub Members link
    get spiceClubMem(){
        return $('=SpiceClub Members');            // alias for element(by.linkText('SpiceClub Members') );
    }

    // fetching locator for child1's child link i.e, Member Login link
    get memLogin(){
        return $('=Member Login');            // alias for element(by.linkText('SpiceClub Members') );
    }

    // writing fn to move to parent element
    // moveToElement(element){
    //      element = this.loginSignUp;
    // }




}

module.exports = new SpiceJet();
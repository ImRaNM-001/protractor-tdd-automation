// Trying various jasmine matchers (as per SDET video: 'Part-9: Jasmine Framework for Protractor | Expect with Matchers')
describe('Jasmine matchers with expect keyword', () => { 
    
    // TC 1: .toBe and .not.toBe
    it('.toBe and .not.toBe', () => { 
        const a = 10;
        expect(a).toBe(10);                 // passed
        expect(a).not.toBe(210);            // passed

        expect(a).not.toBe(10);             // fails and prints   Expected 10 not to be 10.

        // using array and checking deep equality
        let arr = [10, 20, 30];
        expect(arr).toBe([10, 20, 30]);       // fails and prints   Expected [ 10, 20, 30 ] to be [ 10, 20, 30 ]. , arr is an object in javascript and .toBe compares array object to it's elements which are nothing but primitive values and therefore fails.

        brr = arr;
        expect(arr).toBe(brr);                  // passed

        browser.get('https://cafetownsend-angular-rails.herokuapp.com/login');
        expect(browser.getTitle() ).toBe('CafeTownsend-AngularJS-Rails');                     // passed
    } );

    // TC 2: .toEqual and .not.toEqual
    it('.toEqual and .not.toEqual', () => { 
        const a = 10;
        expect(a).toEqual(10);                 // passed
        expect(a).not.toEqual(210);            // passed

        expect(a).not.toEqual(10);             // fails and prints  Expected 10 not to equal 10.

        // using array and checking deep equality
        const arr = [10, 20, 30];                      // Important note: array with same name (arr) from previous it block won't be recognized unless declared at describe block level
        expect(arr).toEqual([10, 20, 30]);      // passed
    } );

    
    // TC 3: .toContain and .not.toContain
    it('.toContain and .not.toContain', () => { 
        browser.get('https://cafetownsend-angular-rails.herokuapp.com/login');
        expect(browser.getTitle() ).toContain('AngularJS-Rai');                 // passed

        const arr = [60, 120, 900]; 
        expect(arr).toContain(120);                  // passed
        expect(arr).toContain(90);                  // fails and prints       Expected [ 60, 120, 900 ] to contain 90.
        expect(arr).not.toContain(90);              // passed

        const names = ['ron', 'jhon', 'shelly'];
        expect(names).toContain('ron');              // passed
        expect(names).not.toContain('ro');             // passed
    } );


    // TC 4: .toBeGreaterThan, .not.toBeGreaterThan and toBeLessThan, .not.toBeLessThan
    it('().toBeGreaterThan, .not.toBeGreaterThan) and (toBeLessThan, .not.toBeLessThan)', () => { 
        const val = 650;
        expect(val).toBeGreaterThan(700);               // fails and prints      Expected 650 to be greater than 700.   
        expect(val).not.toBeGreaterThan(15);            // fails and prints       Expected 650 not to be greater than 15.

        expect(val).toBeLessThan(20);                  // fails and prints       Expected 650 to be less than 20.
        expect(val).not.toBeLessThan(15);              // passed 
    } );


 // TC 5: .toNaN and .not.toNaN
    it('.toNaN and .not.toNaN', () => {
        const val = 100;
        expect(val/'asli dushman').toBeNaN();         // passed
        expect(val).toBeNaN();                        // fails and prints    Expected 100 to be NaN.
        expect(val).not.toBeNaN();                      // passed
    } );

    // TC 6: .toNull and .not.toNull
    it('.toNull and .not.toNull', () => {
        const val = 100;
        expect(val).toBeNull();                      // fails and prints      Expected 100 to be null.
        expect(val).not.toBeNull();                 // passed
    } );

} );                            // closed describe block











describe('trying to block execution of protractor annotations', () => { 

    xbeforeEach( () => { 
        console.log('i run before each it block\n');

    } );

    it('1st TestCase', () => { 
        console.log('1st it block');
    } );


    it('2nd TestCase', () => { 
        console.log('2nd it block');
    } );


    it('3rd TestCase', () => { 
        console.log('3rd it block');
    } );


    it('4th TestCase', () => { 
        console.log('4th it block');
    } );

} );
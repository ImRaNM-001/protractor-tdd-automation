describe('trying to block execution of annotations', () => { 

    xbeforeEach( () => { 
        console.log('i run everytime\n');

    } );

    it('1st tc', () => { 
        console.log('1st it block');
        

    } );


    it('2nd tc', () => { 
        console.log('2nd it block');
        

    } );


    it('3rd tc', () => { 
        console.log('3rd it block');
        

    } );


    it('4th tc', () => { 
        console.log('4th it block');
        

    } );

} );
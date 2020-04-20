describe('web table validations', () => { 

    beforeAll( () => { 
        browser.get('https://dassdevarajan.github.io/demo-app/');
    } );

    // TC 1
    it('view product details', async () => { 

        // storing data of Product View table (4th row from Product List table)
        const name = '1001 Activities Book',
        description = 'Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.',

        category = 'Books',
        quantity = 300,
        unitPrice = 4,
        supplier = 'ABC Publications',
        returnable = false;

        // identifying view button for last (4th row) of the Product List table
        const vwBtn_4thRow = $$('tr').last().$('#view');          // last() fn will hit the last row in the table, first() for first row
        
        // clicking on view button to land on Product View table
        vwBtn_4thRow.click();

        // validating with page header if landed on correct page
        expect($('h3').getText() ).toBe('Product View');

        // capturing table data of all 4 rows from Product View table
        const td_1stRow = $$('tr').first().$('td'),
        td_2ndRow = $$('tr').get(1).$('td'),
        td_3rdRow = $$('tr').get(2).$('td'),
        td_4thRow = $$('tr').get(3).$('td'),
        td_5thRow = $$('tr').get(4).$('td'),
        td_6thRow = $$('tr').get(5).$('td'),
        td_7thRow = $$('tr').last().$('td');

        // now validating each table data with previously stored data from Product List table
        expect(td_1stRow.getText() ).toBe(name);
        expect(td_2ndRow.getText() ).toBe(description);
        expect(td_3rdRow.getText() ).toBe(category);
        expect(td_4thRow.getText() ).toBe(quantity.toString() );
        expect(td_5thRow.getText() ).toContain(unitPrice);
        expect(td_6thRow.getText() ).toBe(supplier);
        expect(td_7thRow.getText() ).toBe(returnable.toString() );

        browser.sleep(1000);
    } );


    // TC 2
    it('navigate to product list table', async () => { 
        $('#list-menu').click();
        expect($('h3').getText() ).toBe('Product List');

        browser.sleep(1000);
    } );

    // TC 3
    it('delete a product', async () => { 
        // identifying delete button for 1st row of the Product List table
        const delBtn_1stRow = $$('tr').get(1).$('#delete');
        delBtn_1stRow.click();

        browser.sleep(1000);

        const td_1stRow = $$('tr').get(1).$$('td').first();    
        
        // now making sure this element isn't available, hence putting a negative assertion
        expect(td_1stRow.getText() ).not.toBe('Lenovo Ideapad 330S Laptop');
    } );

} );
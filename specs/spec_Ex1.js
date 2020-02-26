// 1st describe fn()
describe('angularjs homepage', () => {

  beforeEach( () => {
    browser.get('http://www.angularjs.org');
  } )  

  // 1st TC
  it('should greet the named user', () => {
    // browser.get('http://www.angularjs.org');
    element(by.model('yourName') ).sendKeys('Julie');

    browser.sleep(2000);
    const greeting = element(by.binding('yourName') );
    expect(greeting.getText() ).toEqual('Hello Julie!');
  } );                                                    // closing 1st it fn()


  // 2nd/child describe fn() inside 1st describe fn()
  describe('todo list', () => {
      let todoList;

      beforeEach( () => {
        // browser.get('http://www.angularjs.org');
        todoList = element.all(by.repeater('todo in todoList.todos') );
      } )                                               // closing beforeEach fn()

      // 2nd TC
      it('should list todos', () => {
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText() ).toEqual('build an AngularJS app');
      } );                                                   // closing 2nd it fn()


      // 3rd TC
      it('should add a todo', () => {
        const addTodo = element(by.model('todoList.todoText') );
        const addButton = element(by.css('[value="add"]') );

        addTodo.sendKeys('write a protractor test');
        addButton.click();
        browser.sleep(2000);

        expect(todoList.count() ).toEqual(3);
        expect(todoList.get(2).getText() ).toEqual('write a protractor test');
      } );                                                   // closing 3rd it fn()

    } );                                                    // closing 2nd/child describe fn()


} );                                                   // closing 1st/parent describe fn()

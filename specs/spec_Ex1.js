// 1st describe fn()
describe('angularjs homepage', function () {

  // 1st it fn()
  it('should greet the named user', function () {
    browser.get('http://www.angularjs.org');
    element(by.model('yourName') ).sendKeys('Julie');

    const greeting = element(by.binding('yourName') );
    expect(greeting.getText() ).toEqual('Hello Julie!');
  });                                                    // closing 1st it fn()


  // 2nd/child describe fn() inside 1st describe fn()
  describe('todo list', function () {
    let todoList;

    beforeEach(function () {
      browser.get('http://www.angularjs.org');
      todoList = element.all(by.repeater('todo in todoList.todos') );
    } );                                                   // closing beforeEach fn()


    // 2nd it fn()
    it('should list todos', function () {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    } );                                                   // closing 2nd it fn()


    // 3rd it fn()
    it('should add a todo', function () {
      const addTodo = element(by.model('todoList.todoText') );
      const addButton = element(by.css('[value="add"]') );

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count() ).toEqual(3);
      expect(todoList.get(2).getText() ).toEqual('write a protractor test');
    } );                                                   // closing 3rd it fn()
  } );                                                    // closing 2nd/child describe fn()
} );                                                   // closing 1st/parent describe fn()

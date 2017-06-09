/*jshint esversion: 6*/

const TodoApp = {
  rootElement: "#app",
  todos: [],
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
  //  this.addButton = this.root.querySelector('.add-button');
    this.createForm = this.root.querySelector('.create-form');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },
  bindEvents: function(){
    //this is so passe
  //  this.addButton.addEventListener('click', ()=> this.addToDo());
  this.createForm.addEventListener('submit', (event) => this.addToDo(event));

  },
  addToDo: function(event){
    event.preventDefault();
    //first: grab the task input value
    const taskValue = this.taskInput.value;
    // first-part-2: validate that taskValue is actually "something"
    if (!taskValue){

      return;
    }
    // second: build a todo obj with that value
    const todo = {
      task: taskValue,
      isComplete: false
    };
    //third: add that todo to the  todos array
    this.todos.push(todo);
    //fourth: rerender
    this.render();
    //fifth: clear the input
    this.taskInput.value = '';

  },

  cacheDeleteButtons: function(){
    this.deleteButtons = this.root.querySelectorAll('.delete');

  },
  bindDeleteEvents: function(){
    this.deleteButtons.forEach((button, index)=> {
      button.addEventListener('click', () => this.deleteTodo(index));
    });
  },
  deleteTodo: function(index){
    this.todos.splice(index, 1);
    this.render();
  },
  render: function(){
    const lis = this.todos
                      .map(todo => `<li>${todo.task}<button class='delete'>X</button></li>`)
                      .join('');
    this.todoList.innerHTML = lis;// be carefull can lead to security issues
    this.cacheDeleteButtons();
    this.bindDeleteEvents();
  //const lis = this.todos.map(function (todo, index){});
  },

};

TodoApp.start();

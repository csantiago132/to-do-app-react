import React, { Component } from 'react';
import ToDo from './components/ToDo/ToDo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }
  
  handleChange(e) {
    this.setState({ 
      newTodoDescription: e.target.value 
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!this.state.newTodoDescription) { return }
    
    const newTodo = { 
      description: this.state.newTodoDescription, 
      isCompleted: false 
    };
    
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      newTodoDescription: '' 
    });
    // for testing functionality
    console.log('handleSubmit called');
  }

  toggleComplete(index) {
    // making a copy to not mutate directly the state
    const todos = this.state.todos.slice();
    
    const todo = todos[index];
    
    todo.isCompleted = todo.isCompleted ? false : true;
    
    this.setState({ 
      todos: todos 
    });
    // to test functionality
    console.log('toggleComplete executed');
  }

  removeToDo(index) {
    // making a copy like toggleComplete method
    const todos = this.state.todos.slice();

    // saving new array here
    const todo = todos[index];

    this.setState({
        // filtering array from const todo
        // passing index as param in function
        // returns the new todo without the index
        // which we are using on the map function in the
        // render method
        todos: this.state.todos.filter(index => todo !== index)
    });
    // to test functionality
    console.log('removeToDo executed');
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo, i) => (
              <ToDo 
                key={i} 
                description={ todo.description } 
                isCompleted={ todo.isCompleted }
                toggleComplete={ () => this.toggleComplete(i) }
                removeToDo={ () => this.removeToDo(i) } 
              />
            )
          )}
        </ul>
        
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input 
            type="text" 
            value={ this.state.newTodoDescription }
            onChange={ (e) => this.handleChange(e) }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;

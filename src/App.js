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

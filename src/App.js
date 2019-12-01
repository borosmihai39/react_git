import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid' //random ids
import axios from 'axios';

class App extends Component {
 
  state = {                     //array of objects
    todos: [
      {
        id: uuid.v4(),
        title : 'Add react to miXin project',
        completed : false
      },
      {
        id: uuid.v4(),
        title : 'Go swimming',
        completed : false
      },
      {
        id: uuid.v4(),
        title : 'Do homework',
        completed : false
      },
    ],
  }

 
  //Toggle Complete on item
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id ){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  //Delete Todo
  delTodo = (id) => { //we return an array with ids that do not match the current id because we want to delete it
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
    
  }
  //Add Todo
  addTodo = (title,id) => { //use spread operator
    const newTodo = {
      id,
      title,
      complete: false
    }
    //if(<AddTodo title={this.props.title=""}></AddTodo>){
    //  this.setState({todos: [...this.state.todos, newTodo]})
      
    //} else {
    //  alert('Please add a suitable description!')
    //}
    this.setState({todos: [...this.state.todos, newTodo]})
    
  }
  render() {
  return (
    
    <div className="App">
      <div className="container">
      <Header/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
      <AddTodo addTodo={this.addTodo}/>
      </div>
    </div>
  )}
}

export default App;

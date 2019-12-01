import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'lightgray',
            padding: '10px',
            borderBottom: '5px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id,title,completed } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
                    {title}
                    <button onClick = {this.props.delTodo.bind(this, id)}style = {btnStyle}>Delete</button>
                </p>
            </div>
        )
    }
}

//const itemStyle = {
//    backgroundColor: 'lightgray'
//}
const btnStyle = {
    backgroundColor: 'red',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
}

//proptypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem

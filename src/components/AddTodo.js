import React, { Component } from 'react'
import axios from 'axios'
import uuid from 'uuid' //random ids

export class AddTodo extends Component {
    state = {
        title: '',
        id: uuid.v4()
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit = async (e) => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        e.preventDefault();
        this.props.addTodo(this.state.title,this.state.id);
        this.setState({ title: '', id:''})
        console.log(this.state.id)
        axios.post('http://localhost:3000/todo',{text: this.state.title, id: this.state.id}).then(res => {
            console.log(res);
            console.log(res.data);
        })
        await delay(5000);
        console.log('waited 5 seconds')
        const rootUrl = `http://localhost:3000`
        axios.delete(`${rootUrl}/todo/${this.state.id}`)
    }


    
   render() {
       return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type = "text" name = "title" placeholder="Add Todo" 
                style={{flex: '10', padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange}></input>
                
                <input type = "submit" value="Add" className="btn" style={{flex: '1'}}></input>
            </form>
        )
    }
}

export default AddTodo

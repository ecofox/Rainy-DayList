import React, { Component } from 'react';
import List from './List';
import Button from './Button';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      chores: ['dishes', 'laundry'],
      newItem: ''
    }

    this.addToChores = this.addToChores.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addToChores(item){
    this.setState({
      chores: this.state.chores.concat([item])
    })
  }

  handleChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Passing props to Components.</h1>
        </div>
        <br />
        <input className="input-chores" value={this.state.newItem} onChange={this.handleChange}/>

        <Button action={this.addToChores.bind(this, this.state.newItem)}>Add New Chores</Button>

        <List title="Chores" list={this.state.chores} />
      </div>
    );
  }
}

export default App;

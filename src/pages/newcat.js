import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class NewCat extends Component {

  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }


  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  // This is our call to parent addCat
  onSubmit(event){
    this.props.handleNewCat(this.state.form)



  }

  render() {
    return (

        <div>

        <header><h1>CAT TINDER</h1></header>

        <FormControl
          type="text"
          name="name"
          placeholder="Cat's Name"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.name}
        />

        <FormControl
          type="number"
          name="age"
          placeholder="Age:"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.age}
        />

        <FormControl
          type="text"
          name="enjoys"
          placeholder="Enjoys:"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.enjoys}
        />
        <button onClick={this.onSubmit.bind(this)}>Paw Here!</button>

        <footer><h3>Created by Sofia and Tiff Tiff</h3></footer>
        </div>
    );
  }
}

export default NewCat;

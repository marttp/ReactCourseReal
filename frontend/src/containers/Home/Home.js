import React, { Component } from 'react'

import { Jumbotron } from '../../components'
import { Label, Input } from 'reactstrap'

// Center of component

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      label: 'Test Input'
    }
  }

  onChangeText = (event) => {
    const { value } = event.target
    this.setState(prevState => {
      return {
        label: value
      }
    }, () => console.log(this.state.label))
  }


  render() {
    return (
      <div>
        <Jumbotron />
        <Label for="test">{this.state.label}</Label>
        <Input
          type="text"
          name="test"
          value={this.state.label}
          onChange={(event) => this.onChangeText(event)}
          placeholder="Test Input"
        />
      </div>
    );
  }
}

export default Home;

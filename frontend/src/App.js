import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import { Header } from './components'
import { Home, Post, PageNotFound } from './containers'
// Center of component
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/post" component={Post} />
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/App.css';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import { connect } from 'react-redux';
import { authorize } from '../actions';
import Home from './home';
import Chat from './chat';
import Nav from './nav';
import SignUp from './sign-up';
import SignIn from './sign-in';


class App extends Component {

  componentWillMount(){
    auth.onAuthStateChanged(user => {
      console.log('USER', user);
      this.props.authorize(user);
    })
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/chat" component={Chat}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signin" component={SignIn}/>
      </div>
    );
  }
}

export default withRouter(connect(null, {authorize})(App));

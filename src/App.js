import React , {Component} from 'react';
import './App.css';
import Index from './routes/index'
import Home from './pages/Home/Home'
import { connect } from 'react-redux'
import {Accordion,Card,Button  } from 'react-bootstrap'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Index/>
    </div>
  );
  }
}export default connect() (App);

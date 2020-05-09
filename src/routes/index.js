import React,{Component} from 'react';
import '../App.css';
import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom';
import Nav from '../components/Navigation'
import Home from '../pages/Home/Home'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import About from '../pages/About/About'
import { connect } from 'react-redux'
import Step1a from '../pages/doctorsAppointment/SectionA/Step1'
import Step2a from '../pages/doctorsAppointment/SectionA/Step2'
import Step3a from '../pages/doctorsAppointment/SectionA/Step3'
import Step4a from '../pages/doctorsAppointment/SectionA/Step4'
import Patient from '../pages/Patient/Home'

class Index extends Component{
  render(){
  return (
    <Router>
    <div >
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/step1a" component={Step1a} />
        <Route path="/step2a" component={Step2a} />
        <Route path="/step3a" component={Step3a} />
        <Route path="/step4a" component={Step4a} />
        <Route path="/patient" component={Patient} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
  }
}export default connect() (Index);

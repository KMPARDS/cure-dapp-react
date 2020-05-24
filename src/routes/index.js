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
import searchComponent from '../components/searchComponent';
import KycVerification from '../pages/KYCVerification/KycVerification';
import DoctorMain from '../pages/DoctorMain/DoctorMain';
import IdentityProof from '../pages/IdentityProof/IdentityProof';
import MedicalRegistration from '../pages/MedicalRegistration/MedicalRegistration';
import EstablishmentProof from '../pages/EstablishmentProof/EstablishmentProof';
import DoctorDetail from '../pages/DoctorDetail/DoctorDetail';
import MapLocation from '../pages/MapLocation/MapLocation';
import Account from '../pages/Account/Account';
import EstablishmentTiming from '../pages/EstablishmentTiming/EstablishmentTiming';

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
        <Route path="/search" component={searchComponent} />
        <Route path="/KycVerify" component={KycVerification} />
        <Route path="/DoctorMain" component={DoctorMain} />
        <Route path="/IdentityProof" component={IdentityProof} />
        <Route path="/MedicalRegistration" component={MedicalRegistration} />
        <Route path="/EstablishmentProof" component={EstablishmentProof} />
        <Route path="/DoctorDetail" component={DoctorDetail} />
        <Route path="/MapLocation" component={MapLocation} />
        <Route path="/account" component={Account} />
        <Route path="/timing" component={EstablishmentTiming} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
  }
}export default connect() (Index);

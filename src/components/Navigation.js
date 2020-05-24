import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../src/App.css'
import { connect } from 'react-redux'
import {  Nav,NavDropdown,Navbar,Media, Button } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'
import ethers from 'ethers-wallet'
// import Wallet from 'ethereumjs-wallet'
import { sessionService } from 'redux-react-session';
import axios from 'axios';
import Config from '../helpers/Config'
import {userActions} from '../actions'

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    // this.props.dispatch(userActions.logout());
  }

  connectToWallet = () => {
    let login = 'log30'
    const { dispatch } = this.props;
    window.open("https://eraswap.life", "", "width=1003,height=650");
    //PRODUCTION CODE
    //it will be loaded when opened from eraswap life
    window.onload = function () {
      window.opener.postMessage("loaded", "*")
    }
    window.addEventListener('message', function (e) {
      //SHOULD BE UNCOMMENTED BELOW FUNCTION IN PRODUCTION
      ProcessParentMessage_2(e.data);
    }, false);
    function ProcessParentMessage_2(message) {
      if (message.substring) {
        if (message.substring(0, 2) == "0x") {
        let  wallet = new ethers.Wallet(message);
          axios.get(Config.baseUrl + '/api/auth/getUniqueSessionId', {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(resp => {
            console.log('resp get unique :',resp);
            let token = resp.data.token;
            if (typeof token !== 'undefined') {
              let signature = wallet.signMessage(token);
              console.log('I am at the :',signature);
              console.log(' signature != null || signature != undefined :' ,  (signature != null || signature != undefined)  , signature != null , signature != undefined );
              
              if( signature != null || signature != undefined ){
              let  signature2 = signature , walletAddress = wallet.address 
              console.log('signature , walletAddress :',signature2 , walletAddress);
                dispatch(userActions.login(signature , walletAddress , token));
              }

            } else {
              console.log('UniqueSessionId Undefined');
            }
          }).catch(error => {

          })
        }
      }
    }
  }

  render(){
  return (
    <div className="App">
      <Navbar fixed="top" className="bgimg" expand="lg">
        <Navbar.Brand href="#">Cure-daap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/account">Home</Nav.Link>

            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Distributor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manufacturer</NavDropdown.Item>
              {/* <NavDropdown.Item href="/patient">Patient</NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.3">Pharmacy</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#">White Paper</Nav.Link>

          </Nav>
          <Button onClick={this.connectToWallet}>Connect to wallet</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
  }
}export default connect() (Navigation);
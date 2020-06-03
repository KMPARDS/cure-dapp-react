import React,{Component} from 'react'
import {connect} from 'react-redux'
import{ Media, Col, Row, Dropdown, InputGroup, FormControl,Container } from 'react-bootstrap'
import  '../App.css';
 

class searchComponent extends Component{
    render(){
        return(
            <div className="maindiv searchrow">
                {/* <header> */}
                    <Media>
                    <img className="navimg" src="images/woman-discussing-a-lesson-3758869.jpg" />
                    </Media>
                    <Row>
                        <Col xl lg="9">
                            Find and Book
                        </Col>
                        <Col xl lg="3">
                        <p>Location</p>
                        <select>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                        </select>
                        </Col>
                    </Row>
                    <Row>
                        <input type="text" placeholder="Search doctors, Specialities, Clinics, Hospitals"/ >
                            <label>
                                <h2>Search by Specialist</h2><br/>

                            </label>
                    </Row>
                    <Row className="boximg">
                        <Col>
                        <div>
                            <img src="images/ribbon.png" className="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/ribbon.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/ribbon.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <img src="images/ribbon.png" ClassName="mr-3 picon" />
                        </div>
                        </Col>
                    </Row>
            </div>

        )
    }
}

export default connect()(searchComponent);
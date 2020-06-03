import React, { Component } from 'react'
import { Container,Row, Col, Dropdown, Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import  '../../../App.css';

class Step3 extends Component{
    render(){
        return(
            <div className="stepdiv">
                <Container ClassName="stepcontainer">
                    <Row ClassName="steprow">
                        <Form>
                            <Form.Group>
                                <Form.Label><h2>Connect a practice</h2></Form.Label><br/>
                                <Form.Label>Please select any one of the following</Form.Label>
                            </Form.Group> 
                            <Form.Check 
                                type="radio"
                                // id={`default-${type}`}
                                label={"I own a estaiblishment"}
                            />

                            <Form.Check
                                type="radio"
                                label={"I visit a estaiblishment"}
                                // id={`disabled-default`}
                            />
                            <Form.Group>
                                <Form.Label>Note: You can add multiple estaiblishment one by one</Form.Label>
                            </Form.Group>

                            <Button style={{"marginLeft":"64%"}} ClassName="step3btn">
                                <a style={{"color":"white"}} href="/step4a">
                                Next
                                </a>
                                
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect()(Step3);
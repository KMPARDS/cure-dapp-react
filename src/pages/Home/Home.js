import React , {Component} from 'react';
import { connect } from 'react-redux'
import  '../../App.css';
import { Container,Col,Row,Media,Button,Card, InputGroup,FormControl,Accordion } from 'react-bootstrap'
import '../Home/style.css'

class Home extends Component {
  render(){
  return (
    <div className="maindiv">
      <header>
      <Media>
       <img className="navimg" src="images/woman-discussing-a-lesson-3758869.jpg" />
     </Media>
      </header>
      <section className="App-header">
        
        <Container>
        <h1>Vision</h1>
        <p>It is a long estaiblished fact that a reader will be distract</p><br/>
          <Row>
            <Col>
            {/* <img src="" ></img> */}
            <Media>
              <img
                // width={164}
                // height={164}
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
            <Col>
            <p className="content">Secured network for your medical records and report, easily accessible to doctors.</p>
            </Col>
          </Row>
          <Row>
            <Col>
             <p className="content" >Insuring delivery of authentic medicine'c to medical stores and patient without any inconsistencies</p>
            </Col>
            <Col>
            {/* <img src="" ></img> */}
            <Media>
              <img
                // width={164}
                // height={164}
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
          </Row>
          <Row>
            <Col>
            {/* <img src="" ></img> */}
            <Media>
              <img
                // width={164}
                // height={164}
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
            <Col>
            <p className="content">Rewarding environment to reward you gifts using a mobile application for your day to day healthy activities</p>
            </Col>
        
          </Row>
        </Container>
        <Container id="about">
          <h2>About CureDapp</h2><br/>
          <Row>
          <Col>
            <Media>
              <img
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
            <Col>
              <h5 className="abouth">Your fitness tracker powered on blockchain</h5>
              <p>CureDapp, keeps records of your daily miles you walked and step you took. Keeps you motivated by Global leader-board, and rewadrs you for Era Swap for task completions </p>
              <Button>Read more</Button>
            </Col>
            
          </Row>
          <Row>
          
            <Col>
              <h5 className="abouth">Your medical records secured on blockchain</h5>
              <p>CureDapp, is a central hub for medical data exhange between Hospitals, government agencies, pharmacies, fitness center, reasearch organization, and insaurance companies. So that relevant parties, assured by you can easily access yor medical data on single network </p>
              <Button>Read more</Button>
            </Col>
            <Col>
            <Media>
              <img
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3 className="text-center">Our Solutions</h3><br/>
            </Col>
          </Row>
          <h6 className="text-center">Key factor benefits of CureDapp</h6><br/>

          <Row>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>All Your fitness stats and medical recors in single app</p>
            </Col>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>All Your data stored to Secured & Decentralized network</p>
            </Col>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>Your data are easily accessible by your relevant third parties</p>
            </Col>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>No complication like centralized platforms, using P2P mode</p>
            </Col>
            
          </Row>
          <Row>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>Connecting Pharmacy, Hospitals, Govt Agencies and You</p>
            </Col>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>Compete on Global Leader-board & Stay Fit, Stay Healthy</p>
            </Col>
            <Col>
              <img
                width={164}
                height={164}
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>Blood Test by using specialists using special Blood testing devices</p>
            </Col>
            <Col>
              <img
                className="solimg"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              <p>Patients get the total control over their health information</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
            <Media>
              <img
                // width={164}
                // height={164}
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
            <Col>
            <h3>Your data will travel shouldn't your security </h3>
            <p>CureDapp uses a blockchain to create a user-focused electronic health record and maintain a
              single true version of the user's data.
            </p>
            <p>CureDapp by implementing blockchain will transform the healthcare big data ecosystem by enabling data flow in a secured and structured way, to create patient-centric health information, management, and utilization hub.</p>
            </Col>
        
          </Row><br/>
          <Row>
            <Col>
            <h3>Your data will travel shouldn't your security </h3>
            <p>To make the supply chain less complex and more efficient, CureDapp tracks the complete journey of the supply chain using IOT Devices. IOT tenderly connect all physical objects in the global internet-based infrastructure for the purpose of exchanging information and communication with IOT, CureDApp aims
               to support intelligent identification, location, tracking, monitoring and management. </p>
            </Col>
            <Col>
            <Media>
              <img
                // width={164}
                // height={164}
                className="mr-3"
                src="images/page.jpg"
                alt="Generic placeholder"
              />
              </Media>
            </Col>
          </Row><br/>
        </Container>
        <Container>
          <Row>
            <Col>
             <h2 id="blogs">Our blogs</h2>
             <p>Like "Our Clients" and "Our Blogs" also add "Our Decentralized Platforms" to promote other utility platforms</p><br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src="images/page.jpg" />
                <Card.Body>
                <Row>
                   <Col xs lg="3">
                     <Media>
                       <img 
                       width={40}
                       height={40}
                       src="images/page.jpg"
                       />
                     </Media>
                   </Col>
                   <Col xs lg="9">
                    <InputGroup>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                      </InputGroup.Prepend> */}
                      <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                   </Col>
                 </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src="images/page.jpg" />
                <Card.Body>
                 <Row>
                   <Col xs lg="3">
                     <Media>
                       <img 
                       width={40}
                       height={40}
                       src="images/page.jpg"
                       />
                     </Media>
                   </Col>
                   <Col xs lg="9">
                    <InputGroup>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                      </InputGroup.Prepend> */}
                      <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                   </Col>
                 </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src="images/page.jpg" />
                <Card.Body>
                <Row>
                   <Col xs lg="3">
                     <Media>
                       <img 
                       width={40}
                       height={40}
                       src="images/page.jpg"
                       />
                     </Media>
                   </Col>
                   <Col xs lg="9">
                    <InputGroup>
                      {/* <InputGroup.Prepend>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                      </InputGroup.Prepend> */}
                      <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                   </Col>
                 </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row><br/><br/>
        </Container>
      </section>
    </div>
  );
  }
}export default connect()(Home);
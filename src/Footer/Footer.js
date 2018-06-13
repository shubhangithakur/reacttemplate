import React, { Component } from 'react';
import { Jumbotron,Grid,Row,Col,Image,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from  './Footer.css';

class FooterComponent extends Component {
  constructor(props){
    super(props);

  }
  render(){

    return (
     <div className="app-footer">
     <Grid>
       <Row className="show-grid text-center ">
            <Col  md={4} className="footer">
                  <h4>About Company</h4>
                   <div className="textfooter">
                        <p>NeoSOFT Technologies is here at your quick and easy service for shooping .</p>
                        <h6>Contact information</h6>
                        <p>Email: contact@neosofttech.com</p>
                        <p>Phone: +91 0000000000</p>
                        <p>MUMBAI, INDIA</p>
                    </div>


            </Col>
            <Col  md={4} >
                <div className="footerlinks ">
                    <h4>Information</h4>
                    <ul >
                        <li >
                            <a  href="/info/terms-conditions">Terms &amp; Conditions</a>
                        </li>
                        <li >
                            <a  href="/info/guarantee-return-policy">Guarantee &amp; Return Policy</a>
                        </li>
                        <li >
                            <a  href="/info/contact-us">Contact us</a>
                        </li>
                        <li >
                            <a  href="/info/privacy-policy">Privacy Policy</a>
                        </li>
                        <li >
                            <a  href="/info/locate-us">Locate Us</a>
                        </li>
                    </ul>
                </div>
            </Col>
      <Col  md={4} >
      <div className="footerlinks">
          <h4 >Newsletter</h4>
            <form>
                <div className="footerlinks1">
                    <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
                    <div className="form-group">
                    <input  className="form-control" placeholder="your email..." type="text"/>
                    </div>
                    <button className="btn btn-default" tooltip="Coming Soon" type="button">Subscribe</button>
                </div>
            </form>
      </div>
       </Col>
        </Row>
        <p className="copywrite text-center">Copyright © 2017 NeoSOFT Technologies All rights reserved | Design by <a href="http://www.neosofttech.com/">NeoSOFT Technologies</a></p>
     </Grid>
     </div>
    );
  }
}

export default FooterComponent

import React,{Component} from "react";
import { Jumbotron,Grid,Row,Col,Image,Button } from 'react-bootstrap'
import './SliderComponent.css'
import Slider from "react-slick";

class SliderComponent extends Component {
  render() {
    var settings = {
      arrows:true,
      autoplay:true,
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="slidermid">
        <div>
          <Image src="assets/beds.jpg" className="sliderimg" /> 
        </div> 
        <div>
          <Image src="assets/familychair.png" className="sliderimg"/> 
        </div>
        <div>
          <Image src="assets/sofa.jpeg" className="sliderimg"/> 
        </div>
        <div>
          <Image src="assets/interior.jpg" className="sliderimg"/> 
        </div>
        <div>
          <Image src="assets/tables.jpg" className="sliderimg"/> 
        </div>
        
      </Slider>
    );
  }
}
export default SliderComponent
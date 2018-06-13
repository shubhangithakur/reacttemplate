import React, { Component } from 'react';
import { Jumbotron,Grid,Row,Col,Image,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import search from  './search.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class SearchComponent extends Component {
  constructor(props){
    super(props);

  }
  render(){

    return (

         <FormGroup>
              <InputGroup>
                <FormControl type="text" className="search-bar" />
                <span  className="input-group-btn">
              <button  className="btn btn-default" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </span>
              </InputGroup>
            </FormGroup>
    );
  }
}

export default SearchComponent

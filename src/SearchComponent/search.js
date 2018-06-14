import React, { Component } from 'react';
import  './search.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class SearchComponent extends Component {
 
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

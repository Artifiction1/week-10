import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Search extends Component{

    state= {
        city: 'Riga'
    }


render(){
    return(
        <div style={{width: '400px', marginLeft: 'auto', marginRight:'auto'}}>
        <InputGroup className="mb-3">
        <Link to={'/city'+this.state.city}><Button>search</Button></Link>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value = {this.state.city}
          onChange={(e)=>{this.setState({city: e.target.value})}}
        />
      </InputGroup></div>
    )
}}

export default Search
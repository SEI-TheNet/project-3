import React, { Component } from 'react';
import axios from 'axios';
import './Parks.css';
import Park from '../park/Park'
class Parks extends Component {
    state = { 
        parks:[]
     }
    componentDidMount() {
        // axios
axios.get(`https://disneyparksapi.firebaseio.com/.json`)
  .then(res => {
    let parks = res.data.orlando.parks;
    parks = parks.filter(par => parks.indexOf(par)<4);
    this.setState({ parks });
  })
}
    render() { 
 
    return ( <div>{this.state.parks.map(res => <Park name={res.name} lands={res.lands} /> )}</div> );
    }
}
 
export default Parks;
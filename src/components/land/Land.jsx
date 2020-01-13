import React, { Component } from 'react';
import './Land.css';
class Land extends Component {
    state = {  }
    render() { 
        let name =this.props.name
        let dining
        if(name==="Animation Courtyard"){dining=[]}
        else{dining=this.props.dining}
        
        return ( 
        <div> 
            <h2 color="red">{name}</h2>
            <p>{dining.map(res=><p>{res.name}</p>)}</p>
        </div> );
    }
}
export default Land;
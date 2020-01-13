import React, { Component } from 'react';
import Land from '../land/Land'
import './Park.css';
class Park extends Component {
    state = {  }
    render() { 
        let lands
    
        let name
        
        if(this.props.name==="EPCOT"){ lands = this.props.lands.filter(res => this.props.lands.indexOf(res)!==3)
        name= this.props.name

        }
        else {lands = this.props.lands
            name= this.props.name

        }
      
        return ( <div>

      < h1> {name}</h1>
      < h4> {lands.map(res=> <Land name={res.name} dining={res.dining} />)}</h4>

        </div> );
    }
}
 
export default Park;
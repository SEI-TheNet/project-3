import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from  './components/nav/Nav'
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Exper from './components/experience/Exper'
import Parks from './components/parks/Parks'

function App() {
  return (
    <div className="App">
       <Route path='/' component={Nav}/>
       <Route exact path='/' component={ Home } />
       <Route exact path='/Parks' component={ Parks }/>
       <Route exact path='/Exper' component={ Exper }/>
       <Route exact path='/Parks/:id' render={ () => {
         return(
          <h1>Hello i am one Park </h1>
         ) }} />
         <Route exact path='/Parks/:id/land' render={()=> {
           return (
            <h1>Hello i am lands </h1> )
         }}/>

         <Route exact path='/Parks/:id/land/:id' render={()=> {
           return (
            <h1>Hello i am one land </h1> )
         }}/> 
    </div>
  );
}

export default App;

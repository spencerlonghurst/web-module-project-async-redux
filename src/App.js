import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux'
import * as actionCreators from './actionCreators';







function App(props) {


  const {
    //state
    character,

    //ASYNC action creator
    fetchAllData
  } = props
  
  
  useEffect(() => {
    fetchAllData();
  }, [])
  
  
  
  
  
  
  
  
  






  return (
    <div className="App">
      <h2>Star Wars Info</h2>
      <div>
        
          {character.map((item) => {
            return (<h4 key={item.created}>{item.name}</h4>)
          })}
        
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    character: state.name,
    
  }
}

export default connect(mapStateToProps, actionCreators)(App);
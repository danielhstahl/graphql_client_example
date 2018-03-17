import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {graphql, QueryRenderer} from 'react-relay'
import environment from './relay'

const App=()=>(
  <QueryRenderer
    environment={environment}
    query={
      graphql`query AppQuery {
        viewer {
          id
        }
      }`
    }
    variables={{}}
    render={({err, props})=>{
      console.log(err)
      console.log(props)
      if(err){
        return <div>Error: {err}!</div>
      }
      if(!props){
        return <div>Loading...</div>
      }
      return <div>User ID: {props.viewer.id}</div>
    }}
  />
)

export default App;

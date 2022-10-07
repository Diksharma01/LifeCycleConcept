import React, { Component } from 'react'
import Header from './Components.js/Header' 
import Containerbox from './Components.js/Containerbox'

 class App extends Component {
  constructor(){
    super()
    this.state={
      color:'red',
      show:true
    }
    console.log("Hey D I am constructure  from App.js")
  }
  static getDerivedStateFromProps(newProps,state){
    console.log("Hey D i am static getDerivedStateFromProps(newProps,state) from App.js")
    return null
  }
 componentDidMount(){
  console.log(" Hey D I am componentDidMount from App.js")
 }
 shouldComponentUpdate(){
  console.log("Hey D I am  shouldComponentUpdate from App.js")
  return true
 }
 componentDidUpdate(){
  console.log(" Hey D I am componentDidUpdate from App.js")
 }



  render() {
    console.log("Hey D i am render from App.js");
    return (
     <> 
     <Header/>
      <button onClick={()=>this.setState({color:'green'})}>update</button>
      <h2>{this.state.color } AppJs</h2>
   <button onClick={()=>this.setState({show:!this.state.show})} >{this.state.show ? 'hide' : 'show'}</button>
    {
      this.state.show &&   <Containerbox/>   
    }
     
      </> 
    )
  }
}
export default App
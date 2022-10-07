import React, { Component } from 'react'
// import Containerbox from '.Components/Containerbox'
export default class Container extends Component {
    constructor(){
        super()
        this.state={
            obj:{username:'john'}
        }
        console.log("Hey D I am constructure  from Container.js")
      }
      static getDerivedStateFromProps(newProps,state){
        console.log("Hey D i am static getDerivedStateFromProps(newProps,state) from Container.js")
        return null
      }
     componentDidMount(){
      console.log(" Hey D I am componentDidMount from Container.js")
     }
     shouldComponentUpdate(){
      console.log("Hey D I am  shouldComponentUpdate from Container.js")
      return true
     }
     componentDidUpdate(){
      console.log(" Hey D I am componentDidUpdate from Container.js")
     }
  render() {
    console.log('Hey D its Render from container')
    return (
        <Container>
        <h2>{this.state.obj.username} Containerbox</h2>
        </Container>
    )
  }
}

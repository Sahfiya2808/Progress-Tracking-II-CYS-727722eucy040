import React, { Component } from 'react'

export default class ClassDemo extends Component {
    constructor(props){
        super(props);
        this.state={count1:0};
    }
    handleIncrement=()=>{
        return(
          this.setState(prevState=>({count1:prevState.count1+1}))
        )
    }
    handleDecrement=()=>{  
        if (this.state.count1>0){
            return(this.setState(prevState=>({count1:prevState.count1-1})))
        }
        else{
            return(this.setState(prevState=>({count1:prevState.count1=0})))
        }
    }
  render() {
    return (
      <div>
      <button onClick={this.handleIncrement}> + </button>
      {this.state.count1}
      <button onClick={this.handleDecrement}> - </button>
      </div>
    )
  }
}
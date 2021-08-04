import React, { Component } from 'react'
import './index.css'

export default class NewGame extends Component {
  state={value:"",flag:true}
  newNum = ()=>{
    const {flag} = this.state;
    if(flag===false) return; 
    this.setState({flag:false})
    let arrNum=[];
    let len = 4 ;
    while (len) {
      let num = Math.floor(Math.random()*10)
      if(arrNum.indexOf(num)===-1) {
        arrNum.push(num) ;
        len--;
      }
    }
    console.log(`NewGame arrNum`, arrNum)
    this.props.getNewNum({arrNum}) 
    this.setState({value:arrNum})
    setTimeout(() => {
      this.setState({value:""})
      this.setState({flag:true})
    }, 1000);
  
  }
  showNum = ()=>{
    this.setState({flag:false})
    const arrNum = this.props.num 
    this.setState({value:arrNum})
    setTimeout(() => {
      this.setState({value:""})
      this.setState({flag:true})
    }, 1000);
    
  }
  render() {
    return (
      <div className="newGame">
        <input className="showNum" value={this.state.value} readOnly></input><br/>
        <button className="btn" onClick={this.newNum} >New Game</button><br/><br/>
        <button className="btn" onClick={this.showNum}>Show Num</button>&nbsp;
      </div>
    )
  }
}

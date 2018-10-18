import React from "react";
import "./homepage.css";
import data from "./chatBotData.json"

class Home extends React.Component {
  constructor(){
    super()
    this.state={
      msg:[],
      addMsg:'',
    }
  }

  addMassage=(e)=>{
    this.setState({addMsg:e.target.value})
  }

  inpAppend=()=>{
    let addinp = this.state.msg;
    let reply =  data[this.state.addMsg];
    addinp.push(this.state.addMsg);
    addinp.push(reply);
    this.setState({
      msg:addinp,
      addMsg:''
    })
  }  

  render() {
    let chats = this.state.msg.map((elem, i) => {
      if(i%2===0){
        return (
          <div key={i} className="chats">
            <p style={{textAlign:'right', marginBottom:'10px', width:'100%'}} 
            className="user">User: { elem }</p>
          </div>
        )
      }else{
        return (
          <div key={i} className="chats">
            <p  style={{textAlign:'left', marginBottom:'10px', width:'100%'}} 
            className="bot" >Bot: {elem}</p>
          </div>
        )
      }
    });
    return(
      <div style={{margin: '20px 20% 20px 20%'}}>
        <div>{chats}</div>
        <input type="text" className="inp" placeholder="write comment..." onChange={this.addMassage} value={this.state.addMsg}/>
        <button className="btn" onClick={this.inpAppend} >send</button >
      </div>
    )
  }
}

export default Home;

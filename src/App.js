import React, { Component } from 'react';
import './App.css';

function Strength(props) {
  const pass= props.value.toString();
  const specialChar= new RegExp(/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
  const num= new RegExp(/[0-9]/);
  if(pass.length === 0){
    return (<p> </p>);
  }
  if(pass.length < 6 ){
    return(
      <p className="weak">Too short</p>
    )
  }
  if(!num.test(pass)) {
      return (
        <p className="weak">Must contain atleast one number</p>
      )
    }
  if(!specialChar.test(pass)) {
      return (
        <p className="weak">Must contain atleast one special character</p>
      )
    }
  return(
          <p className="good">Strong password</p>
      )
}
function TelNumber(props) {
  const phone=props.value.toString();
  if(phone.length === 0){
    return (<p> </p>);
  }
  if(isNaN(phone)) {
    return (
      <p className="weak">Please enter numbers only.</p>
    )
  }
  if(!(phone.length=== 10)) {
    return(
      <p className="weak">Not a valid mobile no.</p>
    )
  }
  return (
    <p className="good">Valid.</p>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={pass:'',mail:'',username:'',phone:'',msg:'false'};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target=event.target;
    const value=target.value;
    const name=target.name;
    this.setState({[name]:value});
  }

  handleSubmit(event) {
    alert('Your password was successfully submitted');
    event.preventDefault();
  }
  render() {
    return (
      <div >
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit} >
          <fieldset>
          <label>Enter name:</label>
          <input
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange} /><br />
          <label>Enter phone no.:</label>
          <input  name="phone"
                  type="tel"
                  value={this.state.phone}
                  onChange={this.handleChange} />
          <TelNumber value={this.state.phone} /><br />
          <label>Enter email-id:</label>
          <input  name="mail"
                  type="email"
                  value={this.state.mail}
                  onChange={this.handleChange} />
        //  <ValidMail value={this.state.mail} /><br />
          <label>Enter password:</label>
          <input  name="pass"
                  type="password"
                  value={this.state.pass}
                  onChange={this.handleChange} />
          <Strength value={this.state.pass} /><br />
          <input  type="submit"
                  value="Submit" />
          </fieldset>
        </form>

      </div>
    );
  }
}

export default App;

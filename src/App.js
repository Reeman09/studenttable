import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";

const App = () =>{
  const students =[
    {FirstName:"Reeman" , LastName:"Napit", Address:"Kirtipur", PhoneNumber:"9843363069", SchoolName:"Pushpasadan"},
    {FirstName:"Nikesh" , LastName:"Maharjan", Address:"Panga", PhoneNumber:"559599292962", SchoolName:"Ujjwal"},
    {FirstName:"Dibesh" , LastName:"Maharjan", Address:"Panga", PhoneNumber:"18484262", SchoolName:"Panga school"},
    {FirstName:"Aman" , LastName:"Maharjan", Address:"Panga", PhoneNumber:"5848482", SchoolName:"Hill town"},
    {FirstName:"Dipesh" , LastName:"Maharjan", Address:"Kirtipur", PhoneNumber:"5487484", SchoolName:"Rarahil"},
  ]
const renderStudent =(Student, index)=>{
  return(
    <tr key={index}>
      <td>{Student.FirstName}</td>
      <td>{Student.LastName}</td>
      <td>{Student.Address}</td>
      <td>{Student.PhoneNumber}</td>
      <td>{Student.SchoolName}</td>
    </tr>
  )
}

  return (
    <div className="App">
    <ReactBootstrap.Table striped bordered hover>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>School Name </th>
      </tr>
    </thead>
    <tbody>
     {students.map(renderStudent)}
    </tbody>
  </ReactBootstrap.Table>    </div>
  );
}

export default App;

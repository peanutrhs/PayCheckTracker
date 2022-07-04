import React, { Component } from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Link } from 'react-router-dom';


const Stub = props => (
    
        

    <tr>
      
      <td>{props.paystubs.CompanyName}</td>
      <td>{props.paystubs.EmployeeId}</td>
      <td>{props.paystubs.StartPeriod.substring(0,10)}</td>
      <td>{props.paystubs.EndPeriod.substring(0,10)}</td>
      <td>{props.paystubs.PayDate.substring(0,10)}</td>
      <td>${props.paystubs.Amount}</td>
      <td>
        <Link to={"/edit/"+props.paystubs._id}>edit</Link> | <a href="#" onClick={() => { props.deleteStub(props.paystubs._id) }}>delete</a> | <Link to={"/detail/"+props.paystubs._id}>detail</Link>
      </td>
    </tr>
  )
// this JSX
export default class PayStubList extends Component {
   constructor(props){
    super(props);

    this.deleteStub = this.deleteStub.bind(this);

    this.state = {paystubs: []};
   }
   componentDidMount(){
        axios.get('http://localhost:5000/stubs/')
        .then(response => {
          this.setState({paystubs: response.data})
          console.log(response.data[0].CompanyName);
        })
        .catch((error)=> {
            console.log(error);
        })
    }

    
    deleteStub(id){
        axios.delete('http://localhost:5000/stubs/'+id)
        .then(res => console.log(res.data));
        this.setState({
            paystubs: this.state.paystubs.filter(el => el.id!== id)
        })
    }
    
    payStubList(){
        return this.state.paystubs.map(currentstub => {
            return <Stub paystubs={currentstub} deleteStub={this.deleteStub} key={currentstub._id}/>;
          })
    }
    render() {
        return (
            <div className='App'>
                <h1>Pay Stubs</h1>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Company</th>
                            <th>Employee Id</th>
                            <th>Start Period</th>
                            <th>End Period</th>
                            <th>Pay Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.payStubList() }
                    </tbody>
                </table>
                
            </div>
        );
    }
}




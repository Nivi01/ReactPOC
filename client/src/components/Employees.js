import React, { Component } from 'react';
import axios from 'axios';

export class Employees extends Component {

    state = {
        employees: []
      } 

    receivedData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          const data = response.data;
          this.setState({
            employees: data
        });
        });
      }
    
      componentDidMount(){
        this.receivedData();
      }
    
    render() {
        const employees = this.state.employees;
        return (
            <div className="container">
                <h1>Meet the Team </h1>
                <ul>
                    {employees.map(item => (
                    <li key={item.id} className="empItem">
                      <div>
                         <img alt="" src={require('../img/employee.png')}/>
                      </div>
                      <div>
                          <span className="empName">{item.name}</span>
                      </div>
                     
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Employees


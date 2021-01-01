import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Woo Kim',
  'birthday': '961222',
  'gender': 'Male',
  'job': 'Store Owner'

},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Jacob Kim',
  'birthday': '960305',
  'gender': 'Male',
  'job': 'Accountant'

},
{
'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Shim Lee',
  'birthday': '961205',
  'gender': 'Male',
  'job': 'Programmer'
}]


class App extends Component {
  render() {
    return (
      <div>
        {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
            );
          })
          } 
        </div>
      );
    }
  }

export default App;
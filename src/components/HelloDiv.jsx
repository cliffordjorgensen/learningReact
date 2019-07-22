
import React from 'react';
import List from './List/List';
import OrderedList from './OrderedList/OrderedList';
const thingsILove = ['programmimg','hiking','water'];
const thingsIhate = ['normies','bad drivers','snow'];

function HelloDiv() {
  return (
    <div>
      <h1>Hello! My name is Cliff Jorgensen</h1>
      <List 
        thingsILove={thingsILove}
        name='Cliff'
        age={29}
        hasCar={true}
      />
      <OrderedList 
        thingsIhate={thingsIhate}
      />
    </div>
  )
}

export default HelloDiv;

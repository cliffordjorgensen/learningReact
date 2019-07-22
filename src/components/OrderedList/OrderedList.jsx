import React from 'react';
import ListItem from '../List/ListItem/ListItem';
const style = {
  headerColor: {
    color: 'purple'
  },
  listItemColor: {
    color: 'yellow'
    }
}

const OrderedList = () => (
  <div>
    <h1 style={style.headerColor}>Things I Hate</h1>
    <ol style={style.listItemColor}>
      {/* {
        thingsIhate.map((thing,index) => <ListItem key={index}>{thing}</ListItem>)
      } */}
    </ol>
  </div>
);

export default OrderedList;
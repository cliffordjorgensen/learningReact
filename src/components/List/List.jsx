import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css'

const style = {
  headerColor: {
    color: 'purple'
  },
  listItemColor: {
    color: 'yellow'
    }
}

const List = (props) => {
  console.log(props)
  return (
  <div>
    <h1 style={style.headerColor}>Things I love</h1>
    <ul style={style.listItemColor}>
      {
        !props.hasCar ? <h1>Lamp</h1> : props.thingsILove.map((thing,index) => <ListItem key={index}>{thing}</ListItem>)
      }

    </ul>
  </div>)
  
};

export default List;

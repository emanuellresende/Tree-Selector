import React from 'react';


import ItemNested from '../Item/index';
import { Container } from './styles';


const List = ({ children }) => {
  return (
    <Container>
    
        {children}
      
    </Container>
  )
}

const ListNested = ({ data, checked }) => {

  const renderItems = (item, i) => {
    const children = Object.values(item.children)

    return (
      <ItemNested
        key={item.id}
        item={item}
        children={children}
        isChecked={checked}
      />
    )
  }

  return (
    <List>
      {data.map(renderItems)}
    </List>
  )
}

export default ListNested;

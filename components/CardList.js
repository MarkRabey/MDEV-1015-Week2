import React from 'react';
import { FlatList } from 'react-native';
import { Card } from './Card';

export const CardList = props => {


  return (
    <FlatList
      data={ props.cards }
      keyExtractor={ (x, i) => `card-${ i }` }
      renderItem={ ({ item }) => (
        <Card { ...item } />
      )}
    />
  );
};

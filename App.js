import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form } from './components/Form';
import { CardList } from './components/CardList';

export default function App() {

  const [cards, setCards] = useState([]);

  const addCard = (cardDetails) => {
    setCards(cards.concat(cardDetails));
  }

  return (
    <View style={styles.container}>
      <Form onSubmit={ addCard } />
      <CardList cards={ cards } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 80,
    justifyContent: 'center',
  },
});

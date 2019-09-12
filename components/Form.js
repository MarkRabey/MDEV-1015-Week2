import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

export const Form = props => {

  const [ username, setUsername ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(`https://api.github.com/users/${ username }`)
      .then(res => res.json())
      .then(details => {
        props.onSubmit(details);
      });
  }

  return (
    <View>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          height: 40,
          padding: 10,
        }}
        value={ username }
        onChangeText={ setUsername }
        placeholder="GitHub Username"
        autoCapitalize='none'
      />

      <Button
        onPress={ handleSubmit }
        title="Add card"
      />
    </View>
  );
}
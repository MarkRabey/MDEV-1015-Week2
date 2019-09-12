import React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';

export const Card = props => {
  const handleLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  return (
    <View style={ styles.card }>
      <Image
        style={ styles.avatar }
        source={{ uri: props.avatar_url }}
      />
      <Text style={ styles.username }>{ props.name }</Text>
      <Text style={ styles.bio }>{ props.bio }</Text>
      <Button
        onPress={() => handleLink(props.html_url)}
        title={ props.html_url }
      />
      <Button
        onPress={() => handleLink(props.blog)}
        title={ props.blog }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  bio: {
    color: 'gray',
    fontSize: 14,
  }
});

import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';

type HeaderProps = {
  title: string;
  setPlaylist: any;
};

const Header = ({title, setPlaylist}: HeaderProps) => {
  console.log(title);
  return (
    <View style={styles.container}>
      <Button
        title="Back"
        onPress={() => {
          setPlaylist(null);
        }}
      />
      <Image source={require('src/assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#121f26',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Header;

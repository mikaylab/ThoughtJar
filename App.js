import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  
// componentWillMount ()
// {
//   setTimeout(()=>{
//     this.navigate('Main');
//   },70000)
// }

  render() {
    return (
      <View style={styles.container}>

         <Image
           style={{width: 119, height: 200}}
          source={require('./assets/ThoughtJar.png')}
        />

        <Text style = {styles.welcome}>Thought Jar</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDD1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 25,
    fontFamily: 'American Typewriter',
    padding: 10,
  }
});

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class App extends React.Component {
  
// componentWillMount ()
// {
//   setTimeout(()=>{
//     this.navigate('Main');
//   },70000)
// }
constructor(props) {
  super(props);
  this.state = {
    text: ""
  }
}

handleChangeText = (typedText) => {
  this.setState({text: typedText});
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image 
          style={{width: 267.75, height: 450}}
          source={require("./assets/ThoughtJar.png")}/>
        </TouchableOpacity>
        <Text style = {styles.date}>April 14, 2018</Text>
        <TextInput
          style={
            {
              height: 50
            }
          }
          placeholder="Type your text here"
          OnChangeText={
            (typedText) => {
              this.setState({typedText});
            }
          }
          value={this.state.text}
          />
        <Text
          style={
            {
              padding: 20,
              fontSize: 30,
            }
          }>
          You type: {this.state.text}
          <\text>
          <StatusBar hidden={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0,
  },
  date: {
    fontFamily: 'American Typewriter',
    fontSize: 30,
  },
});

//   render() {
//     return (
//       <View style={styles.container}>

//          <Image
//            style={{width: 119, height: 200}}
//           source={require('./assets/ThoughtJar.png')}
//         />

//         <Text style = {styles.welcome}>Thought Jar</Text>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EDEDD1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcome: {
//     fontSize: 25,
//     fontFamily: 'American Typewriter',
//     padding: 10,
//   }
// });

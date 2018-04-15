import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text ,
  View, Switch, TouchableOpacity, Button,
   Image, TextInput, Alert} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: component']);


//export default class App extends React.Component {
class HomePage extends Component {
  OpenMyJar = () =>
  {
    this.props.navigation.navigate("Second");
  }
  render()
  {
    return (
      <View style={styles.HomeContainer}>
         <Image
           style={{width: 119, height: 200}}
          source={require('./assets/ThoughtJar.png')}
        />

        <Text style = {styles.welcome}>Thought Jar</Text>
        <Button onPress = {this.OpenMyJar} title = "Go to My Jar" />
      </View>
    );
  }
}
class MyJar extends Component {
  static navigationOptions =
  {
      title: "My Jar",
  };
  FunctionToOpenSecondActivity = () =>
  {
    this.props.navigation.navigate("Settings");
  }
  render()
  {
    return(

      <View style = {styles.container }>
      <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
        <Image
        style={{width: 267.75, height: 450}}
        source={require("./assets/ThoughtJar.png")}/>
      </TouchableOpacity>
        <Text style = {styles.date}>April 14, 2018</Text>
        <Text> This is the Jar Page </Text>
        <Button onPress = {this.FunctionToOpenSecondActivity} title = 'Click Here'/>

      </View>
    );
  }
}
class SettingsPage extends Component {
  constructor(){
    super();
    this.state ={
      SwitchOnValue : false
    }
  }
  static navigationOptions =
  {
      title: "Settings",
  };
  ShowAlert = (value) =>{

  this.setState({

    SwitchOnValueHolder: value
  })

  if(value == true)
  {

    //Perform any task here which you want to execute on Switch ON event.
    Alert.alert("You will recieve Daily Thoughts.");
  }
  else{
    //Perform any task here which you want to execute on Switch OFF event.
    Alert.alert("You not recieve Daily Thoughts.");
  }

}
 render() {

   return (

     <View style={styles.container}>

       <Text style ={{fontSize: 18}}>Settings!!!</Text>

        <Switch
          onValueChange={(value) => this.ShowAlert(value)}
          style= {{paddingBottom:50}}
          value={this.state.SwitchOnValueHolder} />

     </View>
   );
 }
}
export default JarProject = StackNavigator(
{
    First: { screen: HomePage },
    Second: { screen: MyJar },
    Settings: { screen: SettingsPage}
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  HomeContainer: {
    flex: 1,
    backgroundColor: '#EDEDD1',
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
  welcome: {
    fontSize: 25,
    fontFamily: 'American Typewriter',
    padding: 10,
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

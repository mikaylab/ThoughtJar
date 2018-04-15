import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text ,
  View, Switch, TouchableOpacity, Button,
   Image, TextInput, Alert} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
import {YellowBox} from 'react-native';
import Moment from 'moment';
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
        <Button onPress = {this.OpenMyJar}
          title = "Go to My Jar"
          color = "#000000"
        />
      </View>
    );
  }
}
class MyJar extends Component {
  static navigationOptions =
  {
      headerTitle: (
        <Image
          source={require("./assets/home_icon.png")}
          style={{width: 32, height: 32}}
        />
      ),
  };
  OpenSettings = () =>
  {
    this.props.navigation.navigate("Settings");
  }
  JumpToQuestions = () =>
  {
    this.props.navigation.navigate("Questions");
  }
  render()
  {
    var moment = require('moment');
    var now = moment();
    return(

      <View style = {styles.jar_screen }>
      <TouchableOpacity style={styles.button} onPress= {this.OpenSettings} >
        <Image
          style={{width: 32, height: 32, left: 327}}
          source={require("./assets/settings_gear.png")}/>
       </TouchableOpacity>
       <View style = {styles.container}>
      <TouchableOpacity style={styles.button} onPress={this.JumpToQuestions} >
        <Image
        style={{width: 267.75, height: 450}}
        source={require("./assets/ThoughtJar.png")}/>
      </TouchableOpacity>
        <Text style = {styles.date}>{Moment(now).format('dddd, MMMM Do, YYYY')}</Text>
        </View>
      </View>
    );
  }
}
class Questions extends Component {
  GoBack = () =>
  {
    this.props.navigation.goBack(null);
  }
  OpenMyJar = () =>
  {
    this.props.navigation.navigate("Second");
  }
  Responses = () =>
  {
    this.props.navigation.navigate("Responses");
  }
  NewQuestion = () =>
  {
    this.forceUpdate();
  }

  render()
  {
    var questionDatabase = ["How will you conquer today?",
    "What can you accomplish in the next five minutes?",
    "Who's someone you haven't reached out to in a while?",
    "What is one thing you do that makes you feel happy?",
    "When's the last time you drank water?",
    "When's the last time you took a walk?",
    "Take an opportunity to sing your favorite song today!",
    "How can you brighten someone's day today?",
    "What's a skill you haven't used recently?",
    "Can you think of a time you overcame something stressful?",
    "What advice would you give your younger self?",
    ""];
    var i = Math.floor(Math.random() * (questionDatabase.length-1));

    return(
     <View style = {styles.container}>
      <Text style = {styles.qstyle}>{questionDatabase[i]}</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={this.GoBack}>
          <Image
          style={{width: 32, height: 32}}
          source={require("./assets/home_icon.png")}/>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={{top: 0, left: 0, bottom: 0, right: 0}} style={styles.buttonQuestion} onPress={this.NewQuestion} >
        <Image
        style={{width: 90, height: 150, right: 30, bottom: 100, position: 'absolute', zIndex: 1}}
        source={require("./assets/ThoughtJar.png")}/>
      </TouchableOpacity>

      <TouchableOpacity hitSlop={{top: 0, left: 0, bottom: 0, right: 0}} style={styles.buttonQuestion} onPress={this.Responses}>
        <Image
        style={{width: 135, height: 130, left: 50, bottom: 100, position: 'absolute', zIndex: 1}}
        source={require("./assets/pencilPaper.png")}/>
      </TouchableOpacity>
      </View>
    );
  }
}
class Responses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  static navigationOptions =
  {
      title: "Responses",
  };

  handleChangeText = (typedText) => {
    this.setState({text: typedText});
  }

  render() {
    return (
      <View style = {styles.container }>
        <TextInput multiline
            style={styles.responsesInput}
            placeholder="Enter your response"
            onChangeText={(text) => {this.setState(() => {
              return {
                typedResponse: text
              };
            })}
          }
        />
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

  ShowAlert = (value) =>
  {
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
    Alert.alert("You will not recieve Daily Thoughts.");
  }

  render() {

   return (

     <View style={styles.HomeContainer}>

       <Text style = {styles.welcome}>Do you want to get Daily Thoughts?</Text>
        <Switch
          onValueChange={(value) => this.ShowAlert(value)}
          value={this.state.SwitchOnValueHolder} />

     </View>
   );
 }
}
export default JarProject = StackNavigator(
{
    First: { screen: HomePage },
    Second: { screen: MyJar },
    Settings: { screen: SettingsPage },
    Questions: { screen: Questions },
    Responses: { screen: Responses }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   jar_screen: {
     flex: 1,
     backgroundColor: '#fff',
   },
  HomeContainer: {
    flex: 1,
    backgroundColor: '#CCE3D2',
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
  qstyle: {
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'American Typewriter',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 35,
    paddingTop: 30
  },
  date: {
    fontFamily: 'American Typewriter',
    fontSize: 30,
  },
    responsesInput: {
    flex: 1,
    height: 200,
    margin: 20,
    padding: 10,
    fontFamily: 'American Typewriter',
    fontSize: 25
  }

});

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

      <View style = {styles.container }>
      <TouchableOpacity style={styles.button} onPress={this.JumpToQuestions} >
        <Image
        style={{width: 267.75, height: 450}}
        source={require("./assets/ThoughtJar.png")}/>
      </TouchableOpacity>
        <Text style = {styles.date}>{Moment(now).format('dddd, MMMM Do, YYYY')}</Text>
        <Button onPress = {this.OpenSettings} title = 'Settings'/>

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

handleChangeText = (typedText) => {
  this.setState({text: typedText});
}

render() {
      var moment = require('moment');
    var now = moment();
    return (
      <View style={styles.container}>
        <Text style = {styles.date}>{Moment(now).format('dddd, MMMM Do, YYYY')}</Text>

        <TextInput
            style={{height: 50,
                    margin: 20,
                    padding: 10,
                    fontFamily: 'American Typewriter',
                    fontSize: 25,
            }}
            placeholder="Enter your response"
            onChangeText={(text) => {this.setState(() => {
              return {
                typedResponse: text
              };
            })}}
            />
      </View>
    );
  }
}

class Questions extends Component {
  Responses = () =>
  {
    this.props.navigation.navigate("Responses");
  }

  render()
  {
    var questionDatabase = ["How will you conquer today?",
    "What can you accomplish in the next five minutes?",
    "Who's someone you haven't reached out to in a while?",
    "What is one thing you do that makes you feel happy?",
    "When's the last time you drank water?",
    "When's the last time you took a walk?",
    "What is one small thing you can do to help the environment today?",
    "What are you grateful for in this moment?",
    "In what way(s) have you surprised yourself over the past couple months?",
    "What is one way you could treat yourself today?",
    "Do you need to remind youself of anything today?",
    "What is one sentence you would like to tell yourself in 2 months?",
    "How has society shaped the way I view gender representation is STEM?",
    "Why do you post photos on Instagram?",
    "How do the businesses you suppoer impact society?",
    "How can you brighten someone's day today?",
    "What's a skill you haven't used recently?",
    "Can you think of a time you overcame something stressful?",
    "What advice would you give your younger self?",
    "What do you value in fulfilling relationships?",
    "How do you foster curiosity in yourself or others?",
    "Do you give yourself space to challenge your beliefs?",
    "How can you expose yourself to others who are different than you?",
    "When was the last time you did something just to learn something new?",
    "Have you read a non-fiction book in a while?",
    "What is your opinion on a controversial current event?",
    "Where are some places you can engage in cross-cultural dialogue?",
    "If the sole of your shoe could be any surface, what would you choose?",
    "If rain could feel like anything what would you choose?",
    "What is one sound you are hearing right now?",
    "What is one group you could help empower?",
    "How can we change the face of influence in society?",
    "How would your life been different if you were born in another country?",
    "How aware are you of your impact on wildlife and the surrounding ecosystem?",
    "What is one habit wish you could break?",
    "What is one habit wish you could form?",
    ""];
    var i = Math.floor(Math.random() * (questionDatabase.length-1));


    return(
     <View style = {styles.container}>
      <Text style = {styles.qstyle}>{questionDatabase[i]}</Text>

      <TouchableOpacity style={styles.buttonQuestion} onPress={this.Responses} >
        <Image
        style={{width: 130, height: 130, right: 50, bottom: 100, position: 'absolute'}}
        source={require("./assets/thoughtBubble.png")}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonQuestion} onPress={this.Responses}>
        <Image
        style={{width: 135, height: 130, left: 50, bottom: 100, position: 'absolute'}}
        source={require("./assets/pencilPaper.png")}/>
      </TouchableOpacity>

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
    Alert.alert("You will not recieve Daily Thoughts.");
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
    Settings: { screen: SettingsPage },
    Questions: { screen: Questions },
    Responses: { screen: Responses },
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
  qstyle: {
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'American Typewriter',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 45,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  date: {
    fontFamily: 'American Typewriter',
    fontSize: 30,
  },

});

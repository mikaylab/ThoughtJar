import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text ,View, FlatList, Button, Image} from 'react-native';
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
      <View style={styles.container}>
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
    this.props.navigation.navigate("First");
  }
  render()
  {
    return(

      <View style = {styles.container }>
        <Text> This is the Jar Page </Text>
        <Button onPress = {this.FunctionToOpenSecondActivity} title = 'Click Here'/>
      </View>
    );
  }
}
class Questions extends Component{

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
      </View>
    );
  }
}
export default JarProject = StackNavigator(
{
    First: { screen: HomePage },
    Second: { screen: MyJar }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDD1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
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
    paddingTop: 60
  }
});

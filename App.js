import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text ,View, FlatList, Button} from 'react-native';
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
        <Text>Thought Jar</Text>
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
export default JarProject = StackNavigator(
{
    First: { screen: HomePage },
    Second: { screen: MyJar }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDED8A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

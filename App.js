import React from 'react';
import { StyleSheet, Text,View, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class App extends React.Component {
  render() {
  const list_data = [
          {title: "Jar 1", key: "Jar1"},
          {title: "Jar 2", key: "Jar2"},
          {title: "Jar 3", key: "Jar3"},
        ];
    return (
      <View style={styles.container}>
        <Text>Thought Jar</Text>
        <List>
          <FlatList
            data = {list_data}
            renderItem = {
                ({item}) => <Text key={item.key}>{item.title}</Text>
              }
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDED8A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

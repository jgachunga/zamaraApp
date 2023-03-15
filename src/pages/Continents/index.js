import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';

export default function index() {
  const [staff, setStaff] = useState([{id: 1}, {id: 2}])

  const keyExtractor = (item) => item.id.toString();
  
  const renderItem = ({ item }) => {
    console.log(item);
    return (<ListItem>
        <ListItem.Swipeable
        leftContent={(reset) => (
          <Button
            title="Info"
            onPress={() => reset()}
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
          />
        )}
        rightContent={(reset) => (
          <Button
            title="Delete"
            onPress={() => reset()}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
        )}
      >
        <Icon name="My Icon" />
        <ListItem.Content>
          <ListItem.Title>Hello Swiper</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
      </ListItem>);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        keyExtractor={keyExtractor}
        data={staff}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
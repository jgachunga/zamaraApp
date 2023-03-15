import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { Button, ListItem } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FAB } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import * as Api from '../../services/httpClient';
import { ZAMARA_CRUD_URL } from '../../constants/Apis';

export default function Index({navigation}) {
  const [staff, setStaff] = useState([])
  const [visible, setvisible] = useState(true)
  
  const navigator = useNavigation();

  useEffect(() => {
    getStaff()
    return () => {
        
    };
  }, [navigator]);

  const getStaff = () => {
    Api.get(`${ZAMARA_CRUD_URL}zamara`).then((res)=>{
        setStaff(res.data)
        navigator.navigate('List Staff')
    }).catch(err => console.log(err))
  }

  const deleteStaff = (id) => {
    Api.del(`${ZAMARA_CRUD_URL}zamara/${id}`).then((res)=>{
        getStaff()
    }).catch(err => console.log(err))
  }

  const keyExtractor = (item) => item._id;
  
  const renderItem = ({ item }) => {
    const id = item?._id
    const staff = {...item.payload, id }
    return (
        <ListItem.Swipeable
        leftContent={(reset) => (
          <Button
            title="Edit"
            onPress={() => navigator.navigate('Add Staff', {edit: true, staff})}
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
          />
        )}
        rightContent={() => (
          <Button
            title="Delete"
            onPress={() => deleteStaff(id)}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
        )}
      >
        <Ionicons name="person-circle-outline" size={30}/>
        <ListItem.Content>
          <ListItem.Title>{staff?.name}</ListItem.Title>
          <ListItem.Title>{staff?.email}</ListItem.Title>
          <ListItem.Title>{staff?.department}</ListItem.Title>
          <ListItem.Title>{staff?.salary}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
      );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        keyExtractor={keyExtractor}
        data={staff}
        renderItem={renderItem}
      />
       <FAB
        visible={visible}
        icon={{ name: 'add', color: 'white' }}
        placement="right"
        color="green"
        onPress={() => navigator.navigate('Add Staff')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
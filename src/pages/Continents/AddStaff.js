import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loader from '../../components/loader'
import { Button, Input } from '@rneui/themed'
import { ScrollView } from 'react-native'

export default function AddStaff() {
  return (
    <View style={styles.container}>
      
      <ScrollView>
        {(status === 'pending' || loading) && <Loader visible={true} message={'Loading ...'}/>}
        <Input
          placeholder='Enter staff number'
          containerStyle={styles.InputStyle}
          value={name}
          onChangeText = {(text)=> setName(text)}
        />

        <Input
          placeholder='Enter Staff name'
          containerStyle={styles.InputStyle}
          value={name}
          onChangeText = {(text)=> setName(text)}
        />
        
        <Input
          placeholder='Enter Staff Email'
          containerStyle={styles.InputStyle}
          keyboardType={'email'}
          value={phone_number}
          onChangeText = {(text)=> setPhone(text)}
        />

        <Input
          placeholder='Enter Staff Department'
          containerStyle={styles.InputStyle}
          value={phone_number}
          onChangeText = {(text)=> setPhone(text)}
        />

        <Input
          placeholder='Enter Staff Salary'
          containerStyle={styles.InputStyle}
          value={phone_number}
          onChangeText = {(text)=> setPhone(text)}
        />
       
        <Button
          title="Add Customer"
          buttonStyle={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
            paddingVertical: 5,
          }}
          containerStyle={{
            
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize : 20 }}
          disabled={status === 'pending'}
          onPress={() => debouncedSaveCustomer()}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        color : 'black',
        textAlign: 'center',
        marginBottom: 100,
        fontWeight: 'bold'
      },
      container: {
        flex: 1,
        paddingTop: 5,
        alignItems:'center',
        marginHorizontal: 20,
        maxHeight: HEIGHT-40
      },
      InputStyle : {
        width : WIDTH - 50,
        padding: 0,
        margin:0,
        
      },
})
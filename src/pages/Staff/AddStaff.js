import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader'
import { Button, Input } from '@rneui/themed'
import { ScrollView } from 'react-native'
import { WIDTH } from '../../constants/Sizes'
import * as Api from '../../services/httpClient';
import { ZAMARA_CRUD_URL } from '../../constants/Apis'
import { useNavigation } from '@react-navigation/native'

export default function AddStaff({navigation, route}) {
  const [staffNumber, setStaffNumber] = useState('ZAAC001')
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('jd@zamara.co.ke')
  const [department, setDepartment] = useState('ICT')
  const [salary, setSalary] = useState('50000')

  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigator = useNavigation();
 
//   const staffInfo = navigation.getParam('staff');
//   const edit = navigation.getParam('edit');

  useEffect(() => {
    
    if(route.params?.edit){
        const staffData = route.params?.staff
        setStaffNumber(staffData?.staffNumber)
        setName(staffData?.name)
        setEmail(staffData?.email)
        setDepartment(staffData?.department)
        setSalary(staffData?.salary)
    }
  }, [navigation])

  const addStaff = () => {
    const payload = {
        staffNumber, name, email, department, salary
    }
    Api.post(`${ZAMARA_CRUD_URL}zamara`, {payload}).then((res)=>{
        console.log(res);
        navigator.navigate('List Staff')
    }).catch(err => console.log(err))
  }

  const updateStaff = () => {
    const payload = {
        staffNumber, name, email, department, salary
    }
    Api.put(`${ZAMARA_CRUD_URL}zamara/${route?.params?.staff?.id}`, {payload}).then((res)=>{
        console.log(res);
        navigator.navigate('List Staff')
    }).catch(err => console.log(err))
  }
  
  return (
    <View style={styles.container}>
      <Text></Text>
      <ScrollView>
        {(status === 'pending' || loading) && <Loader visible={true} message={'Loading ...'}/>}
        <Input
          placeholder='Enter staff number'
          containerStyle={styles.InputStyle}
          value={staffNumber}
          onChangeText = {(text)=> setStaffNumber(text)}
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
          value={email}
          onChangeText = {(text)=> setEmail(text)}
        />

        <Input
          placeholder='Enter Staff Department'
          containerStyle={styles.InputStyle}
          value={department}
          onChangeText = {(text)=> setDepartment(text)}
        />

        <Input
          placeholder='Enter Staff Salary'
          containerStyle={styles.InputStyle}
          value={salary}
          onChangeText = {(text)=> setSalary(text)}
        />
       
        <Button
          title={ route?.params?.edit ?"Update Staff" :  "Add Staff"}
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
          onPress={() => route?.params?.edit ? updateStaff() : addStaff()}
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
      },
      InputStyle : {
        width : WIDTH - 50,
        padding: 0,
        margin:0,
        
      },
})
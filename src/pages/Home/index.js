import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AUTH_URL, USER_URL } from '../../constants/Apis'
import { axiosApi } from '../../services/httpClient'

export default function Home() {
  const [user, setUser] = useState(null)
  const {user : {id : userId}} = useSelector(state=>state.auth)
  
  useEffect(() => {
    axiosApi.get(`${USER_URL}${userId}`).then(res=>{
        console.log(res);
        setUser(res?.data)
    })
    return () => {
        setUser(null)
    };
  }, [userId]);


  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center', }}>
            <Text style={styles.text}>Welcome </Text><Text style={styles.titleText}>{user?.firstName} {user?.lastName}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 10}}>
            <Text style={styles.text}>Your profile details is as below:</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <Text style={styles.titleText}>Age :</Text><Text style={styles.text}>{user?.age} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Gender :</Text><Text style={styles.text}>{user?.gender} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Email :</Text><Text style={styles.text}>{user?.email} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Phone :</Text><Text style={styles.text}>{user?.phone} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Birth Date :</Text><Text style={styles.text}>{user?.birthDate} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Blood Group :</Text><Text style={styles.text}>{user?.bloodGroup} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Height :</Text><Text style={styles.text}>{user?.height} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Weight :</Text><Text style={styles.text}>{user?.weight} </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text style={styles.titleText}>Eye Color :</Text><Text style={styles.text}>{user?.eyeColor} </Text>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop: 50
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        fontSize: 18
    }
})
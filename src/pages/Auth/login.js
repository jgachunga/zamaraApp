import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@rneui/themed';
import { WIDTH } from '../../constants/Sizes';
import { Input } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { authLogin, resetError } from './authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import Loader from '../../components/loader';
import { StatusBar } from 'expo-status-bar';

export default function Login({navigation}) {
  const toast = useToast(); 
  const [username, setUserName] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const { status, isLoggedIn, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(resetError());
  }, []);
  
  useEffect(() => {
    if(error){
      toast.show(error);
      dispatch(resetError());
    }
    isLoggedIn && navigation.navigate('BotomNavigation');
  }, [isLoggedIn, error]);

  const login = ()  => {
    if(username === '' || password === ''){
      toast.show('Enter username and password');
      return;
    }
    const payload = {username, password};
    dispatch(authLogin(payload));
  };
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      {status === 'pending' && <Loader visible={true}/>}
      <Text h1 style={styles.text}>Welcome to Zamara Mobile</Text>
      <Input
        placeholder='Enter your username'
        containerStyle={styles.InputStyle}
        leftIcon={
          <Ionicons name="md-person-circle" size={32} color="black" />
        }
        value={username}
        onChangeText = {(text)=> setUserName(text)}
      />
      <Input
        placeholder='Enter your password'
        containerStyle={styles.InputStyle}
        secureTextEntry={true}
        leftIcon={
          <Ionicons name="md-key" size={32} color="black" />
        }
        keyboardType={'number-pad'}
        value={password}
        onChangeText = {(text)=> setPassword(text)}
      />
      <Button
        title="LOG IN"
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
          paddingVertical: 5,
        }}
        containerStyle={{
          width: WIDTH - 50,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold', fontSize : 30 }}
        disabled={status === 'pending'}
        onPress={() => login()}
      />
    </View>
  );
}

Login.propTypes = {
  navigation : PropTypes.any
};

const styles = StyleSheet.create({
  text : {
    color : 'black',
    textAlign: 'center',
    marginBottom: 100,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    marginHorizontal: 20
  },
  InputStyle : {
    width : WIDTH - 50
  },
});
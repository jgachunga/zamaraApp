import AsyncStorage from '@react-native-async-storage/async-storage';

export const authHeader = async() => {
  const token = await AsyncStorage.getItem('token');
  if(token != null){
    return { 'Authorization': 'Bearer ' +token };
  } else {
    return {};
  }
};
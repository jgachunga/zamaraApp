import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Auth/login';

const LoginStack = createNativeStackNavigator();

export function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login Screen" options={{ title : 'Login'}} component={Login} />
      
    </LoginStack.Navigator>
  );
}
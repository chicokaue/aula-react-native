import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Listasparimpar } from '@/screens/listasparimpar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/interface/rootPages';

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <SafeAreaView className="flex-1">
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="listas" component={ListaScreen} />
            <Stack.Screen name="soma" component={Soma} />
          </Stack.Navigator>
        </NavigationContainer> */}
        {Listasparimpar()}
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}

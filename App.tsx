import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1">
        {/* <LoginScreen /> */}
        <Soma />
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}

import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { Text, View } from 'react-native';

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <InputCustomizado placeholder={'Loguin'} />
      <InputCustomizado placeholder="Senha" />

      <ButtonCustomizado title={"Entrar"} />
    </View>
  );
}

import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { Text, View } from 'react-native';

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl">Nosso app</Text>

        <InputCustomizado placeholder={'Loguin'} />
        <InputCustomizado placeholder="Senha" />

        <ButtonCustomizado title={'Entrar'} />
        <Text className="text-sky-500 ">Esqueceu a senha</Text>
      </View>
    </View>
  );
}

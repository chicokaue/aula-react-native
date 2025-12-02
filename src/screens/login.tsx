import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  console.log('login', login, 'senha', senha);
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl text-white">Nosso app</Text>

        <InputCustomizado
          placeholder={'Login'}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />

        <InputCustomizado
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => {
            setSenha(text);
          }}
        />

        <ButtonCustomizado
          title={'Entrar'}
          onPress={() => {
            console.log("login", login, "senha", senha);
          }}
        />
        <Text className="text-2xl text-sky-500">Esqueceu a senha</Text>
      </View>
    </View>
  );
}

import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { ProfileScreenNavigationProp } from '@/interface/rootPages';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  function logar() {
    console.log('login', login, 'senha', senha);
    navigation.navigate('soma');
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl text-black">Nosso app</Text>

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

        <ButtonCustomizado title={'Entrar'} onPress={logar} />
        <View className="flex-row gap-4">
          <Text className="2xl text-sky-500">Esqueceu a senha </Text>
          <Text className="2xl text-black">|</Text>
          <Text className="2xl text-sky-500">Cadastre-se</Text>
        </View>
      </View>
    </View>
  );
}

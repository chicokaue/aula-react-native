import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { ProfileScreenNavigationProp } from '@/interface/rootPages';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function Soma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState(0);
  const navigation = useNavigation<ProfileScreenNavigationProp>();


  function somar() {
    const soma = Number(valor1) + Number(valor2);
    setResultado(soma);
  }

    function logar() {
    console.log('login', login, 'senha', senha);
    navigation.navigate('listas');
  }

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">
        <InputCustomizado placeholder="Valor 1" value={valor1} keyboardType="numeric" onChangeText={setValor1} />
        <InputCustomizado placeholder="Valor 2" value={valor2} keyboardType="numeric" onChangeText={setValor2} />

        <ButtonCustomizado title="Somar" onPress={somar} />

        <Text className="text-2xl text-black">Resultado: {resultado}</Text>

        <ButtonCustomizado title={'Lista'} onPress={logar} />
      </View>
    </View>
  );
}


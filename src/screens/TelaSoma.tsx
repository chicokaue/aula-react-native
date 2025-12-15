import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function TelaSoma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  const [resultado, setResultado] = useState(0);

  function somar() {
    const soma = Number(valor1) + Number(valor2) + Number(valor3);
    setResultado(soma);
  }

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2, valor3]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">

        <Text className="text-3xl text-black"> Tela de Soma do kaue foda </Text>
        <InputCustomizado placeholder="Valor 1" value={valor1} keyboardType="numeric" onChangeText={setValor1} />
        <InputCustomizado placeholder="Valor 2" value={valor2} keyboardType="numeric" onChangeText={setValor2} />
        <InputCustomizado placeholder="Valor 3" value={valor3} keyboardType="numeric" onChangeText={setValor3} />

        <ButtonCustomizado title="Somar" onPress={somar} />

        <Text className="text-2xl text-black">Resultado: {resultado}</Text>
      </View>
    </View>
  );
}

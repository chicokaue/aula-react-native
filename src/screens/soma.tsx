import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function Soma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function somar() {
    const soma = Number(valor1) + Number(valor2);
    setResultado(soma);
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
      </View>
    </View>
  );
}

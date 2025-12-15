import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function TelaMedia() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function media() {
    const media = (Number(valor1) + Number(valor2)) / 2;
    setResultado(media);
  }

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">

        <Text className="text-3xl text-black"> Cauculator de media do kaue fd </Text>
        <InputCustomizado placeholder="Valor 1" value={valor1} keyboardType="numeric" onChangeText={setValor1} />
        <InputCustomizado placeholder="Valor 2" value={valor2} keyboardType="numeric" onChangeText={setValor2} />

        <ButtonCustomizado title="Somar" onPress={media} />

        <Text className="text-2xl text-black">Valor da media: {resultado}</Text>
      </View>
    </View>
  );
}

import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function TelaParImpar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  function verificarParImpar() {
    const num = Number(numero);
    if (isNaN(num)) {
      setResultado('Por favor, insira um número válido.');
      return;
    }
    if (num % 2 === 0) {
      setResultado('O número é Par.');
    } else {
      setResultado('O número é Ímpar.');
    }
  }

  useEffect(() => {
    setResultado('');
  }, [numero]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl text-black">Tela Par ou Ímpar</Text>
        <InputCustomizado
          placeholder="Digite um número"
          value={numero}
          keyboardType="numeric"
          onChangeText={setNumero}
        />
        <ButtonCustomizado title="Verificar" onPress={verificarParImpar} />
        <Text className="text-2xl text-black">{resultado}</Text>
      </View>
    </View>
  );
}
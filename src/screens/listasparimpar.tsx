import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { getData, storeData } from '@/utils/storage';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Listasparimpar() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<number[]>([]);

  function adicionaItem() {
    const numero = Number(item);
    setLista([...lista, numero]);
    storeData({ key: 'listasparimpar', value: JSON.stringify([...lista, Number(item)]) });
    setItem('');
  }

  function limpaLista() {
    storeData({ key: 'listasparimpar', value: JSON.stringify({}) });
    setLista([]);
  }

  function verificarParImpar(num: number) {
    return num % 2 === 0 ? 'Par' : 'Ímpar';
  }

  async function carregarLista() {
    const dados = await getData('listasparimpar');
    if (dados) {
      setLista(JSON.parse(dados) as number[]);
    }
  }
  useEffect(() => {
    carregarLista();
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">

        <Text className="text-3xl text-black">Listas de Números Pares e Ímpares</Text>
        <InputCustomizado
          placeholder="Digite um número"
          keyboardType="numeric"
          value={item}
          onChangeText={setItem}
        />

        <ButtonCustomizado title="Adicionar Número" onPress={adicionaItem} />
        <ButtonCustomizado title="Limpar Lista" onPress={limpaLista} />

        <View>
          {lista.map((numero, index) => (
            <Text key={index} className="text-lg text-black">
              {numero} - {verificarParImpar(numero)}
            </Text>
          ))}
        </View>

      </View>
    </View>
  );    
}
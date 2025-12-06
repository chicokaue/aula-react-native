import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function ListaScreen() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  function adicionaItem() {
    setLista([...lista, item]);
    setItem('');
  }

  function limpaLista() {
    setLista([]);
  }
  return (
    <View className="flex-1 items-center gap-4 p-3">
      <Text className="m-3 text-4xl">Lista de itens</Text>;
      <InputCustomizado
        placeholder="item"
        value={item}
        onChangeText={(text) => {
          setItem(text);
        }}
      />
      <ButtonCustomizado title="Adicionar" onPress={adicionaItem} />
      <ButtonCustomizado title="Limpar lista" onPress={limpaLista} />
      <View>
        {lista.map((item, index) => (
          <Text key={index} className="text-lg text-black">
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

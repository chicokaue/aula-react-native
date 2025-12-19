import { ButtonCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from "react";
import { Text, View } from "react-native";

export function Listasparimpar() { 
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<number[]>([]);

  function adicionaItem() {
    const numero = Number(item);
    setLista([...lista, numero]);
    setItem('');
  }
  function limpaLista() {
    setLista([]);
  }
  function verificarParImpar(num: number) {
    return num % 2 === 0 ? 'Par' : 'Ímpar';
  }
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
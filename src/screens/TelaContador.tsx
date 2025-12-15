import { ButtonCustomizado } from '@/components/botaoCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function TelaContador() {
  const [item, setItem] = useState(0);
  
  function adicionar() {
    setItem(item + 1);
  }
   function diminuir () {
    setItem(item - 1);
  }
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">

        <Text className=" text-black 2xl"> Input </Text>
        <ButtonCustomizado title="+" onPress={adicionar} />
        <ButtonCustomizado title="-" onPress={diminuir} />
        <Text className=" text-black 2xl"> {item} </Text>

      </View>
    </View>
  );
}

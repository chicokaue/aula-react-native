import { TextInput, TextInputProps, View } from 'react-native';

export function InputCustomizado({ ...rest }: TextInputProps) {
  return (
  <View className="border-s-gray-300 border-2 rounded-2xl w-full bg-white">
      <TextInput {...rest} />
  </View>
  );
}

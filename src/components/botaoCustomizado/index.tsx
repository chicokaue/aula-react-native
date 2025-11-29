import { Button, ButtonProps, TextInputProps, View} from 'react-native';

export function ButtonCustomizado({...rest}: ButtonProps) {
  return (
    <View className="rounded-2xl w-full" >
        <Button {...rest} />
    </View>
    );
  }
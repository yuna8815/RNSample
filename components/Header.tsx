import React, { PropsWithChildren } from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type HeaderProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

function Header({title, description}: HeaderProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        padding: 16
      }}
    >
      <Text
        style={[{
          fontSize: 24,
          fontWeight: 'bold',
        },
        {
          color: isDarkMode ? Colors.white : Colors.black,
        }]}
      >{title}</Text>
      <Text
        style={
          {
            color: isDarkMode ? Colors.white : Colors.black,
          }
        }
      >{description}</Text>
    </View>
  )
}

export default Header

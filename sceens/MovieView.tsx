import React from 'react'
import { Text, useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

function MovieView() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{
        color: isDarkMode ? Colors.white : Colors.black
      }}>Movie Views</Text>
    </View>
  )
}

export default MovieView

import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

function Movies({id, title, releaseYear}: Movie): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      key={id}
      style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {releaseYear}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Movies
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header'
import Movies from './components/Movies'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLoading, setIsLoading] = useState(true)
  const [header, setHeader] = useState({title: '', description: ''})
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setHeader({title: json.title, description: json.description});
      setMovies(json.movies);
    } catch(e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      {
        isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Header
              title={header.title}
              description={header.description}
            />
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}>
              <View
                style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                {
                  movies.map((movie: any) => {
                    return <Movies id={movie.id} title={movie.title} releaseYear={movie.releaseYear} />
                  })
                }

                {/* <Section title="Step One">
                  Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                  screen and then come back to see your edits.
                </Section>
                <Section title="See Your Changes">
                  <ReloadInstructions />
                </Section>
                <Section title="Debug">
                  <DebugInstructions />
                </Section>
                <Section title="Learn More">
                  Read the docs to discover what to do next:
                </Section> */}
                {/* <LearnMoreLinks /> */}
              </View>
            </ScrollView>
          </View>
        )
      }
      {/* <Footer /> */}
    </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;

import React, {useState, useEffect} from 'react'
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Header from '../components/Header'
import Movies from '../components/Movies'

function Home() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [header, setHeader] = useState({title: '', description: ''})
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({})

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

  return isLoading ? 
    (
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
            height: '100%'
          }}>
          {
            movies.map((movie: any) => {
              return (
                <TouchableOpacity
                  key={movie.id}
                  onPress = {() => {
                    setSelectedMovie(movie)
                    // navigation.navigate()
                  }}>
                  <Movies
                    id={movie.id}
                    title={movie.title}
                    releaseYear={movie.releaseYear}
                    />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

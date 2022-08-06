/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header';
import Playlists from './src/components/Playlists';
import Playlist from './src/components/Playlist';
import Footer from './src/components/Footer';
import {Playlist as PlaylistT, Song} from './src/types';

const App = () => {
  const [playlist, setPlaylist] = React.useState<PlaylistT | null>(null);
  const [song, setSong] = React.useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Header setPlaylist={setPlaylist} title="test" />
        {playlist ? (
          <Playlist playlist={playlist} setSong={setSong} />
        ) : (
          <Playlists setPlaylist={setPlaylist} />
        )}
        <Footer song={song} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </View>
    </SafeAreaView>
  );
};

export default App;

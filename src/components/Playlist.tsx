import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getSongs} from '../services/SongSvc';
import {Playlist as PlaylistT, Song} from '../types';

type PlaylistProps = {
  playlist: PlaylistT;
  setSong: any;
};

const Playlist = ({playlist, setSong}: PlaylistProps) => {
  const [songs, setSongs] = React.useState<Song[]>([]);
  const fetchSongs = async () => {
    const s = await getSongs(playlist.id);
    if (s) {
      setSongs(s);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [playlist]);

  if (songs) {
    return (
      <ScrollView>
        <View style={styles.list}>
          {songs.map(s => (
            <TouchableOpacity
              key={s.id}
              style={styles.listItem}
              onPress={() => {
                setSong(s);
              }}>
              <Text style={styles.text}>{s.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
  return (
    <View>
      <Text>No playlists retrieved from API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    backgroundColor: '#1e5c93',
    width: '100%',
  },
  listItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: '#121f26',
    borderStyle: 'solid',
    borderBottomWidth: 3,
    height: 50,
  },
  text: {
    color: '#5ae7ff',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Playlist;

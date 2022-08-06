import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getPlaylists} from '../services/PlaylistSvc';
import {Playlist} from '../types';

type PlaylistsProps = {
  setPlaylist: any;
};

const Playlists = ({setPlaylist}: PlaylistsProps) => {
  const [playlists, setPlaylists] = React.useState<Playlist[]>([]);
  const fetchPlaylists = async () => {
    const p = await getPlaylists();
    if (p) {
      setPlaylists(p);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  if (playlists) {
    return (
      <ScrollView>
        <View style={styles.list}>
          {playlists.map(p => (
            <TouchableOpacity
              key={p.id}
              style={styles.listItem}
              onPress={() => {
                setPlaylist(p);
              }}>
              <Text style={styles.text}>{p.name}</Text>
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

export default Playlists;

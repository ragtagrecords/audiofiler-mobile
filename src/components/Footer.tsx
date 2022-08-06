import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Song} from '../types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';
// TODO: keep songs from playing over top of eachother
// TODO: play other versions of the same song
// TODO: songs sound fast

type FooterProps = {
  song: Song | null;
  isPlaying: boolean;
  setIsPlaying: any;
};

Sound.setCategory('Playback');

const createSoundFromURL = async (url: string) => {
  const sound: Sound = new Sound(url, undefined, (error: any) => {
    if (error) {
      console.log('failed to load the sound', error);
    }
    return;
  });

  if (sound) {
    sound.setVolume(1);
    sound.release();
    return sound;
  }
};

const Footer = ({song, isPlaying, setIsPlaying}: FooterProps) => {
  const [songSound, setSongSound] = React.useState<Sound | null>(null);

  const loadSongIntoAudioPlayer = async (url: string) => {
    const sound = await createSoundFromURL(url);
    if (sound) {
      setSongSound(sound);
    }
  };

  const playPause = () => {
    songSound?.stop();
    if (songSound) {
      if (isPlaying) {
        songSound.pause();
        setIsPlaying(false);
      } else {
        songSound.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (song && song.path) {
      loadSongIntoAudioPlayer(song.path);
    }
  }, [song]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('play song!');
        }}>
        <Icon
          name={isPlaying ? 'pause' : 'play'}
          size={30}
          color="#5ae7ff"
          onPress={playPause}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#121f26',
  },
  text: {
    color: '#5ae7ff',
  },
});

export default Footer;

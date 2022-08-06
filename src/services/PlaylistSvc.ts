import axios from 'axios';
import {Playlist} from '../types';

const baseURL = 'https://api.ragtagrecords.com';

export const getPlaylists = async () => {
  try {
    const res = await axios.get(`${baseURL}/playlists`);
    return res.data as Playlist[];
  } catch (ex) {
    console.log(ex);
    return null;
  }
};

export const getPlaylistByID = async (id: string | number) => {
  try {
    const res = await axios.get(`${baseURL}/playlists/${id}`);
    if (!res.data) {
      return null;
    }
    return res.data;
  } catch (ex) {
    return null;
  }
};

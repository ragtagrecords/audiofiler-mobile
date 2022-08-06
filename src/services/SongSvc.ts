import axios from 'axios';
import {Song} from '../types';

const baseURL = 'https://api.ragtagrecords.com';

export const getSongs = async (
  playlistID: number | null = null,
  parentID: number | null = null,
): Promise<Song[]> => {
  // By default, gets all the songs
  let endpoint = '/songs';

  // Get songs from a specific playlist
  if (playlistID) {
    endpoint = `/songs/playlist/${playlistID}`;
  }

  // Get different versions of a song
  if (parentID) {
    endpoint = `/songs/parent/${parentID}`;
  }

  console.log(`${baseURL}${endpoint}`);
  try {
    const res = await axios.get(`${baseURL}${endpoint}`);
    return res.data.length ? res.data : [];
  } catch (e) {
    return [];
  }
};

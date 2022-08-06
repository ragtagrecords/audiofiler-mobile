export type Playlist = {
  id: number;
  name: string;
};

export interface Song {
  id?: number;
  name: string;
  // file?: File;
  fileName?: string;
  // zipFile?: File;
  zipFileName?: string;
  path?: string;
  tempo?: string | number;
  artist?: string;
  zipPath?: string;
  isParent?: boolean;
  parentID?: number | null;
  playlistIDs?: Array<string> | null;
}

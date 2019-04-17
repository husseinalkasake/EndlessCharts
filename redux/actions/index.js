import { UPDATE_ALBUM, UPDATE_ALBUMS } from './action.types';

export function updateAlbums(albums) {
    debugger;
    return { type: UPDATE_ALBUMS, albums: albums };
}

export function updateAlbum(album) {
    return { type: UPDATE_ALBUM, album: album };
}
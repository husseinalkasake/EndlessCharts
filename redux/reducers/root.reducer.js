import {
    UPDATE_ALBUM,
    UPDATE_ALBUMS
} from '../actions/action.types';
import INITIAL_STATE from '../state';

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_ALBUM:
            return { ...state, album: action.album, currPage: 'album'};
        case UPDATE_ALBUMS:
            return {...state, albums: action.albums};
        default:
            return state;
    }
}
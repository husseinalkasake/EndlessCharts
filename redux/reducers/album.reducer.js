import {
    UPDATE_ALBUM,
    UPDATE_ALBUMS
} from '../actions/action.types';
import INITIAL_STATE from '../state';

export const albumReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_ALBUM:
            return { ...state, album: action.album};
        case UPDATE_ALBUMS:
            return {...state, albums: action.albums};
        default:
            return state;
    }
}
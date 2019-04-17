import {
    UPDATE_ALBUM,
    UPDATE_ALBUMS
} from '../actions';
import INITIAL_STATE from '../state';

export const albumReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_ALBUM:
            debugger;
            return Object.assign({}, state, {albums: action.albums});
        case UPDATE_ALBUMS:
            return state;
        default:
            return state;
    }
}
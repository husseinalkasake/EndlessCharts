import {
    UPDATE_ALBUM,
    UPDATE_ALBUMS
} from '../actions/action.types';
import INITIAL_STATE from '../state';

export const albumReducer = (state = INITIAL_STATE, action) => {
    debugger;
    switch(action.type) {
        case UPDATE_ALBUM:
            return state;
        case UPDATE_ALBUMS:
            debugger;
            return {...state, albums: action.albums};
        default:
            return state;
    }
}
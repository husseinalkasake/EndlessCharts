import axios from 'axios';
// TODO: MOVE TO CONSTS FILE!!
const API_KEY = '5106660ae858e4cd18a50cd8f7ee59a5';

export default class BaseService {
    baseResource = 'http://ws.audioscrobbler.com/2.0/';
    apiKey = '&api_key=' + API_KEY;
    formatJSON = '&format=json';

    get(path, data) {
        return axios.get(path, data);
    }
}
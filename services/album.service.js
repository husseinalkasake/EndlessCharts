import BaseService from './base.service';

export default class AlbumService extends BaseService {
    method = '?method=album';
    search = '.search&album=';
    info = '.getinfo';

    searchAlbum(album) {
        return this.get(this.baseResource + this.method + this.search + album + this.apiKey + this.formatJSON);
    }

    getInfo(artistName, albumName) {
        return this.get(this.baseResource + this.method + this.info + this.apiKey + '&artist=' + artistName + '&album=' + albumName + this.formatJSON);
    }


}
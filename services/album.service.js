import BaseService from './base.service';

export default class AlbumService extends BaseService {
    search = '?method=album.search&album=';

    searchAlbum(album) {
        return this.get(this.baseResource + this.search + album + this.apiKey + this.formatJSON);
    }


}
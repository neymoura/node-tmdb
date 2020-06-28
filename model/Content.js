class Content {
    title;
    originalTitle;
    overview;
    mediaType;

    constructor(title, originalTitle, overview, mediaType) {
        this.title = title;
        this.originalTitle = originalTitle;
        this.overview = overview;
        this.mediaType = mediaType;
    }

    static createFromMultiSearch(multiSearchResult) {

        var title;
        var originalTitle;

        switch (multiSearchResult.media_type) {
            case 'movie':
                title = multiSearchResult.title;
                originalTitle = multiSearchResult.original_title;
                break;
            case 'tv':
                title = multiSearchResult.name
                originalTitle = multiSearchResult.original_name;
                break
        }        

        return new Content(title, originalTitle, multiSearchResult.overview, multiSearchResult.media_type);

    }

}

module.exports = Content;
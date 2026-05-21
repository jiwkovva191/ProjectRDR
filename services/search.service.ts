import {
    SearchModel
} from "../models/search.model";

import {
    SearchResult
} from "../types/Search";

export class SearchService {

    constructor(
        private searchModel: SearchModel
    ) {}

    async search(
        query: string
    ): Promise<SearchResult[]> {

        return await this.searchModel
            .search(query);

    }

}
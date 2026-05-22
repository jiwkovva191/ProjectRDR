import {
    Request,
    Response
} from "express";

import {
    SearchService
} from "../services/search.service";

export class SearchController {

    constructor(
        private searchService: SearchService
    ) {}

    search = async (
        req: Request,
        res: Response
    ): Promise<void> => {

        const query =
            req.query.query as string;

        const results =
            await this.searchService
                .search(query);

        res.json({

            message: "Results found",

            data: results.map(result => ({

                ...result,

                skill_id:
                    result.skill_id.toString()

            }))

        });

    };

}
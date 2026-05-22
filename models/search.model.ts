import { PrismaClient }
    from "@prisma/client";

import {
    SearchResult
} from "../types/Search";

const prisma = new PrismaClient();

export class SearchModel {

    async search(
        query: string
    ): Promise<SearchResult[]> {

        const results =
            await prisma.skills.findMany({

                where: {

                    OR: [

                        {
                            skill_name: {
                                contains: query
                            }
                        },

                        {
                            skill_description: {
                                contains: query
                            }
                        }

                    ]

                }

            });

        return results as SearchResult[];

    }

}
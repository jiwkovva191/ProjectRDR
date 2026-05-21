import { Router }
    from "express";

import {
    SearchModel
} from "../models/search.model";

import {
    SearchService
} from "../services/search.service";

import {
    SearchController
} from "../controllers/search.controller";

const searchModel =
    new SearchModel();

const searchService =
    new SearchService(searchModel);

const searchController =
    new SearchController(searchService);

const searchRoutes = Router();

searchRoutes.get(
    "/search",
    searchController.search
);

export default searchRoutes;
import {CommonRoutesConfig} from '../common/common.routes.config';
import ShowsController from './shows.controller';
import express from 'express';

export class ShowsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ShowsRoutes');
    }

    configureRoutes() {
        this.app.route(`/api/shows`)
            .get(ShowsController.listShows);

        this.app.route(`/api/shows/:showId`)
            .get(ShowsController.getShowById);

        return this.app;
    }

}
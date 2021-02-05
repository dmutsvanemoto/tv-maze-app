import express from 'express';
import debug from 'debug';
import showsService from './shows.service';

const log: debug.IDebugger = debug('app:shows-controller');

class ShowsController {
    private static instance: ShowsController;

    // this will be a controller singleton (same pattern as before)
    static getInstance(): ShowsController {
        if (!ShowsController.instance) {
            ShowsController.instance = new ShowsController();
        }
        return ShowsController.instance;
    }

    async listShows(req: express.Request, res: express.Response) {
        const shows = await showsService.list(100, 0);
        res.status(200).send(shows);
    }

    async getShowById(req: express.Request, res: express.Response) {
        var showId = Number(req.params.showId);

        const show = await showsService.readById(showId);
        res.status(200).send(show);
    }
}

export default ShowsController.getInstance();
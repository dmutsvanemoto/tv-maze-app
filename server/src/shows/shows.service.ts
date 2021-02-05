import showsDao from './shows.dao';
import {CRUD} from "../common/interfaces/crud.interface";
import {ShowDto} from "./shows.model";

class ShowsService implements CRUD {
    private static instance: ShowsService;

    static getInstance(): ShowsService {
        if (!ShowsService.instance) {
            ShowsService.instance = new ShowsService();
        }
        return ShowsService.instance;
    }

    async list(limit: number, page: number) { // limit and page are ignored until we upgrade our DAO
        return await showsDao.getShows();
    };

    async readById(resourceId: number) {
        return await showsDao.getShowById(resourceId);
    };
}

export default ShowsService.getInstance();
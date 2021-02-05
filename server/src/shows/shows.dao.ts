import debug from 'debug';
import { ShowDto } from './shows.model';
import PrismaClient from '../common/prisma.client';

const log: debug.IDebugger = debug('app:in-memory-dao');

class ShowsDao {
    private static instance: ShowsDao;

    constructor() {
        log('Created new instance of ShowsDao');
    }

    static getInstance(): ShowsDao {
        if (!ShowsDao.instance) {
            ShowsDao.instance = new ShowsDao();
        }
        return ShowsDao.instance;
    }

    async getShows() {
        try {
            const shows = await PrismaClient.show.findMany();

            return shows;
        } catch(error) {
            log(error);
        }
        finally{
            await PrismaClient.$disconnect();
        }
    }
    
    async getShowById(showId: number) {
        try {
            const shows = await PrismaClient.show.findUnique({
                where: {
                  id: showId,
                },
              });

            return shows;
        } catch(error) {
            log(error);
        }
        finally{
            await PrismaClient.$disconnect();
        }
    }
}

export default ShowsDao.getInstance();
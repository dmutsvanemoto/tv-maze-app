import { PrismaClient } from '@prisma/client'
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

export default new PrismaClient();
export interface CRUD {
    list: (limit: number, page: number) => Promise<any>,
    readById: (resourceId: any) => Promise<any>,
}
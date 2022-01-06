import { DefaultCrudRepository } from '@loopback/repository';
import { RoaaDataSource } from '../datasources';
import { Roaa, RoaaRelations } from '../models';
export declare class RoaaRepository extends DefaultCrudRepository<Roaa, typeof Roaa.prototype._id, RoaaRelations> {
    constructor(dataSource: RoaaDataSource);
}

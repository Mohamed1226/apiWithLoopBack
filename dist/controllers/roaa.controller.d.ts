import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Roaa } from '../models';
import { RoaaRepository } from '../repositories';
import { UserProfile } from '@loopback/security';
export declare class RoaaController {
    roaaRepository: RoaaRepository;
    private userProfile;
    constructor(roaaRepository: RoaaRepository, userProfile: UserProfile);
    create(roaa: Omit<Roaa, '_id'>): Promise<Roaa>;
    count(where?: Where<Roaa>): Promise<Count>;
    find(filter?: Filter<Roaa>): Promise<Roaa[]>;
    updateAll(roaa: Roaa, where?: Where<Roaa>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Roaa>): Promise<Roaa>;
    updateById(id: string, roaa: Roaa): Promise<void>;
    replaceById(id: string, roaa: Roaa): Promise<void>;
    deleteById(id: string): Promise<void>;
}

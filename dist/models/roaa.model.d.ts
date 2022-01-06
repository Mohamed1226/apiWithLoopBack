import { Entity } from '@loopback/repository';
export declare class Roaa extends Entity {
    _id?: string;
    name: string;
    categoryID: string;
    [prop: string]: any;
    constructor(data?: Partial<Roaa>);
}
export interface RoaaRelations {
}
export declare type RoaaWithRelations = Roaa & RoaaRelations;

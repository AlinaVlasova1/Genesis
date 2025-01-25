import {IEntity} from "@/models/entity-model";

export enum Option {
    leads = 'leads',
    contacts = 'contacts',
    companies = 'companies'
}

export interface IEntityResponse {
    data: {
        _embedded: {
            [key in Option]: IEntity[];
        }
    }
}
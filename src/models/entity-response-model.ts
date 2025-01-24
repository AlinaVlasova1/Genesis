import {IEntity} from "@/models/entity-model";

export interface IEntityResponse {
    data: {
        _embedded: {
            leads: IEntity[]
        }
    }
}
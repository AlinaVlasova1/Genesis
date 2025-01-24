import axios from "axios";
import {IEntityResponse} from "@/models/entity-response-model";

export class EntityService {
    private proxy = `https://thingproxy.freeboard.io/fetch/`;
    createEntities(key: string): Promise<IEntityResponse> {
        return axios.post(this.proxy + `https://${localStorage.getItem('domain')}/api/v4/${key}`, [{}],
            {
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
    }
}
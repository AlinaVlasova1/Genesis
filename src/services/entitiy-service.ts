import axios from "axios";
import {IEntityResponse} from "@/models/entity-response-model";
import {ApiUrlFactory} from "@/services/api-url-factory";
import {AuthorizationService} from "@/services/authorization-service";

export class EntityService {
    private authorizationService = new AuthorizationService();
    createEntities(key: string): Promise<IEntityResponse>{
        const domain = localStorage.getItem('domain');
        const token = localStorage.getItem('token');
        if (domain && token) {
            console.log('if')
            return axios.post(ApiUrlFactory.proxy + `https://${domain}/api/v4/${key}`, [{}],
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
        }
        else {
            console.log('else')
            return this.authorizationService.getAccessToken().then(response => {
                console.log('response',response);
                localStorage.setItem("token", response.data.access_token);
                localStorage.setItem("domain", response.data.base_domain);
            }).then(() => {
                const domain = localStorage.getItem('domain');
                const token = localStorage.getItem('token');
                return axios.post(ApiUrlFactory.proxy + `https://${domain}/api/v4/${key}`, [{}],
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    })
            })
        }
    }
}
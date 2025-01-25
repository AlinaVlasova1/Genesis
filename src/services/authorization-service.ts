import axios from "axios";
import {IAccessTokenAndDomainResponse} from "@/models/access-token-and-domain-response-model";
import {ApiUrlFactory} from "@/services/api-url-factory";

export class AuthorizationService {
    getAccessToken(): Promise<IAccessTokenAndDomainResponse> {
        return axios.get(ApiUrlFactory.baseUrl.toString(),
            {
                headers: {
                    'X-Client-Id': 32185358
                }
            });
    }

}
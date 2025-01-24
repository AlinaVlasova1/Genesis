import axios from "axios";

export class AuthorizationService {
    private proxy = `https://thingproxy.freeboard.io/fetch/`;
    private readonly url = this.proxy + `https://app2.gnzs.ru/amocrm/test/oauth/get-token.php`;


    getAccessToken(): Promise<{data: {access_token: string, base_domain: string} }> {
        return axios.get(this.url.toString(),
            {
                headers: {
                    'X-Client-Id': 32185358
                }
            });
    }

}
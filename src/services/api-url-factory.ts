const proxy = `https://thingproxy.freeboard.io/fetch/`
const baseUrl = proxy + `https://app2.gnzs.ru/`;

export class ApiUrlFactory {
    static create(pathname: string) : URL {
        const requestUrl = new URL(baseUrl);
        requestUrl.pathname += pathname;
        return requestUrl;
    }
}
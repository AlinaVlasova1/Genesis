
export class ApiUrlFactory {
    static readonly proxy: string = `https://thingproxy.freeboard.io/fetch/`; //proxy нужен, чтоб не было CORS ошибки
    static readonly baseUrl: string = this.proxy + `https://app2.gnzs.ru/amocrm/test/oauth/get-token.php`;
}
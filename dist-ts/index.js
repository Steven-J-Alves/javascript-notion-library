"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_notion_api_1 = __importDefault(require("./page-notion-api"));
const search_notion_api_1 = __importDefault(require("./search-notion-api"));
const user_notion_api_1 = __importDefault(require("./user-notion-api"));
const api_1 = __importDefault(require("./config/api"));
const toJson_1 = __importDefault(require("./utils/toJson"));
class NotionClient {
    apiURL;
    token;
    page;
    search;
    user;
    constructor(options) {
        this.apiURL = options.API_URL || api_1.default;
        this.token = options.token;
        this.page = page_notion_api_1.default.bind(this, "")();
        this.search = search_notion_api_1.default.bind(this)();
        this.user = user_notion_api_1.default.bind(this)();
    }
    request(url, query) {
        let options = {
            'method': 'GET',
            'headers': {
                'Notion-Version': '2022-02-22',
                'Authorization': 'Bearer secret_fze6IaOKYoaSNLxVxlVMvwUm2SwjjmemWPWNlh51tLd'
            }
        };
        if (!query) {
            return fetch(url, options).then(toJson_1.default);
        }
        options.method = 'POST';
        options.body = {
            'query': query,
        };
        return fetch(url, options).then(toJson_1.default);
    }
}
exports.default = NotionClient;
//# sourceMappingURL=index.js.map
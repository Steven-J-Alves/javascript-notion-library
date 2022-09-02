"use strict";
exports.__esModule = true;
var page_notion_api_1 = require("./page-notion-api");
var search_notion_api_1 = require("./search-notion-api");
var user_notion_api_1 = require("./user-notion-api");
var api_1 = require("./config/api");
var toJson_1 = require("./utils/toJson");
var NotionClient = /** @class */ (function () {
    function NotionClient(options) {
        this.apiURL = options.API_URL || api_1["default"];
        this.token = options.token;
        this.page = page_notion_api_1["default"].bind(this, "")();
        this.search = search_notion_api_1["default"].bind(this)();
        this.user = user_notion_api_1["default"].bind(this)();
    }
    NotionClient.prototype.request = function (url, query) {
        var options = {
            'method': 'GET',
            'headers': {
                'Notion-Version': '2022-02-22',
                'Authorization': 'Bearer secret_fze6IaOKYoaSNLxVxlVMvwUm2SwjjmemWPWNlh51tLd'
            }
        };
        if (!query) {
            return fetch(url, options).then(toJson_1["default"]);
        }
        options.method = 'POST';
        options.body = {
            'query': query
        };
        return fetch(url, options).then(toJson_1["default"]);
    };
    return NotionClient;
}());
exports["default"] = NotionClient;

import page from './page-notion-api.js';
import search from './search-notion-api.js';
import user from './user-notion-api.js';

import API_URL from './config/api.js';
import toJSON from './utils/toJson.js';

export default class NotionClient {
  constructor(options) {
    this.apiURL =  API_URL;
    this.token = options.token;

    this.page = page.bind(this)();
    this.search = search.bind(this)();
    this.user = user.bind(this)();
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
      return fetch(url, options).then(toJSON)
    }

    options.method = 'POST';
    options.body = {
      'query': query,
    }

    return fetch(url, options).then(toJSON)
  }
}

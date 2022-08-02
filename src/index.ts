import page from './page-notion-api';
import search from './search-notion-api';
import user from './user-notion-api';

import API_URL from './config/api';
import toJSON from './utils/toJson';

interface optionsType {
  token: string;
  API_URL?: string;
}

interface requestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  headers: {
    'Notion-Version': string,
    Authorization: string,
  }
  body?: any
}

export default class NotionClient  {
  apiURL: string;
  token: string
  page: { getPage: (id: any) => any;}
  search: { global: (query: any) => any;}
  user: { getUser: (id: any) => any;}

  constructor(options: optionsType) {
    this.apiURL =  options.API_URL || API_URL;
    this.token = options.token;

    this.page = page.bind(this,"")();
    this.search = search.bind(this)();
    this.user = user.bind(this)();
  }

  request(url: string, query: string) {
    let options: requestOptions = {
      'method': 'GET',
      'headers': {
        'Notion-Version': '2022-02-22',
        'Authorization': 'Bearer secret_fze6IaOKYoaSNLxVxlVMvwUm2SwjjmemWPWNlh51tLd'
      }
    }

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

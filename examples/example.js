// rodar no terminal ou html para testar
import fetch from 'node-fetch';
global.fetch = fetch

import NotionClient from '../src/index.js';

const notion = new NotionClient({
  token: 'secret_fze6IaOKYoaSNLxVxlVMvwUm2SwjjmemWPWNlh51tLd',
});

const page = notion.page.getPage('755a94bba97e4ddd99f90c80afd0aed9');

page.then(data => console.log(data));

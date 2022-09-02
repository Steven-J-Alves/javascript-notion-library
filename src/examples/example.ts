// import fetch from 'node-fetch';
// global.fetch = fetch as any;
console.log('wddddddddddddd');

import NotionClient from '../index';

const notion = new NotionClient({
  token: 'secret_fze6IaOKYoaSNLxVxlVMvwUm2SwjjmemWPWNlh51tLd',
});

const page = notion.page.getPage('755a94bba97e4ddd99f90c80afd0aed9');

page.then((data: any) => console.log(data));

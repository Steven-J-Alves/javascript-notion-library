import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import fetch from 'node-fetch';
global.fetch = fetch

import NotionClient from '../src/index.js';

describe('NotionClient Library', function () {
  it('should create an instance of NotionClient', () => {
    let notion = new NotionClient({});
    expect(notion).to.be.an.instanceof(NotionClient);
  });


  describe('request method', () => {

  });
});

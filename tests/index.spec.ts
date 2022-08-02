import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import fetch from 'node-fetch';
global.fetch = fetch as any

import NotionClient from '../src/index';

describe('NotionClient Library', function () {
  it('should create an instance of NotionClient', () => {
    let notion = new NotionClient({token: 'foo'});
    expect(notion).to.be.an.instanceof(NotionClient);
  });


  describe('request method', () => {

  });
});

import { expect } from 'chai';

import fetch from 'node-fetch';
global.fetch = fetch

import NotionClient  from '../src/index.js';
const notion = new NotionClient({})

describe('User', () => {
  describe('smoke tests', () => {
    it('should exits getUser method', () => {
      expect(notion.user.getUser).to.exist;
    });
  });
});

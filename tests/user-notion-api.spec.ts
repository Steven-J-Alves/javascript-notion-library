import { expect } from 'chai';

import fetch from 'node-fetch';
global.fetch = fetch as any

import NotionClient  from '../src/index';
const notion = new NotionClient({token: 'foo'});

describe('User', () => {
  describe('smoke tests', () => {
    it('should exits getUser method', () => {
      expect(notion.user.getUser).to.exist;
    });
  });
});

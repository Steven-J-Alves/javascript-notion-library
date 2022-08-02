import { expect } from 'chai';

import NotionClient  from '../src/index';
const notion = new NotionClient({token: 'foo'})

describe('Page', () => {
  describe('smoke tests', () => {
    it('should exits getPage method', () => {
      expect(notion.page.getPage).to.exist;
    });
  });
});

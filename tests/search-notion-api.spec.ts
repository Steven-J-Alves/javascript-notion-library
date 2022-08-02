import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import fetch from 'node-fetch';
global.fetch = fetch as any;

import NotionClient  from '../src/index';

describe('Search', () => {
  let notion;
  let stubedFetch;
  let promise;

  beforeEach(() => {
    notion = new NotionClient({ token: 'foo' });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  })

  afterEach(() => {
    stubedFetch.restore();
  })

  describe('smoke tests', () => {
    it('should exits search method', () => {
      expect(notion.search.global).to.exist;
    });

    // it('should exits search method', () => {
    //   expect(notion.search.global).to.exist;
    // });

    // it('should exits search method', () => {
    //   expect(notion.search.global).to.exist;
    // });

    // it('should exits search method', () => {
    //   expect(notion.search.global).to.exist;
    // });
  });

  describe('search.notion.global', () => {
    it('should run global search', () => {
      const globalSearch = notion.search.global('home');
      expect(stubedFetch).to.have.been.calledOnce;
    });

  });
});

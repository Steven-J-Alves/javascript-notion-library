import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import fetch from 'node-fetch';
global.fetch = fetch as any;

import NotionClient  from '../src/index';

describe('User', () => {
  let notion: any;
  let stubedFetch: any;
  let promise;

  beforeEach(() => {
    notion = new NotionClient({ token: 'foo' });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({ json: () => ({ name: 'name' }) });
  })

  afterEach(() => {
    stubedFetch.restore();
  })

  describe('smoke tests', () => {
    it('should exits getUser method', () => {
      expect(notion.user.getUser).to.exist;
    });
  });

  describe('user.notion.getUser', () => {
    it('should run getUser', () => {
      const getPage = notion.user.getUser();
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });
});

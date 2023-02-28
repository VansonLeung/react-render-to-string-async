// @flow
import '@babel/polyfill';
import Helmet from 'react-helmet';
import {createMemoryHistory} from 'history';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';

// patch global environment
// TODO createElement in a sandboxed environment
import 'jsdom-global/register';
import fetch from 'node-fetch';
global.fetch = fetch;

// https://github.com/ReactTraining/history#properties
// https://github.com/ReactTraining/history#usage

type Action = 'POP' | 'PUSH' | 'REPLACE';

type Location = {
  hash: string,
  key: ?string,
  pathname: string,
  search: string,
  state: ?Object,
};

type History = {
  action: Action,
  entries: ?string[],
  index: ?number,
  length: number,
  location: Location,
};

// https://github.com/ReactTraining/history#modifying-the-hash-type-in-createhashhistory

type HistoryOpts = {
  basename: ?string,
  forceRefresh: ?boolean,
  getUserConfirmation: ?(msg: string, callback: (confirmed: boolean) => void) => void,
  hashType: ?'slash' | 'noslash' | 'hashbang',
  initialEntries: string[],
  initialIndex: ?number,
  keyLength: ?number,
};

type UrlString = string;
type UrlArray = UrlString[];

export type HistoryArg = UrlString & UrlArray & HistoryOpts & History;

export type CreateElementFn = (
  props: {history: History, isClient: ?boolean},
  callback: (err: ?Error, el: React$Element<any>) => void,
) => void;

type Metas = {
  base: string,
  bodyAttributes: string,
  htmlAttributes: string,
  link: string,
  meta: string,
  noscript: string,
  script: string,
  style: string,
  title: string,
};

export type CreateElementCb = (
  err: ?Error,
  html: ?string,
  metas: ?Metas,
) => void;

export type RenderAsyncFn = (
  historyArg: HistoryArg,
  createElement: CreateElementFn,
  createElementCb: CreateElementCb,
) => void;

const factory = (render): RenderAsyncFn =>
  (historyArg, createElement, createElementCb) => {

    // https://github.com/ReactTraining/history/tree/v4.7.2#properties
    const history = historyArg && ['length', 'location', 'action', 'index', 'entries']
      .every(Object.hasOwnProperty.bind(historyArg)) ? historyArg : // is a memory history instance
      { '[object String]': () => createMemoryHistory({initialEntries: [historyArg]}), // is a url
        '[object Array]': () => createMemoryHistory({initialEntries: historyArg}), // is an array of urls
        '[object Object]': () => createMemoryHistory(historyArg), // is memory history opts
      }[Object.prototype.toString.call(historyArg)]();

    // https://reactjs.org/docs/react-dom.html#hydrate
    const isClient = false;

    createElement({history, isClient}, (err, el) => {
      if (err) return createElementCb(err);
      const html: string = render(el);
      // https://github.com/nfl/react-helmet#server-usage
      Helmet.canUseDOM = false;
      const metas: Metas = Helmet.renderStatic();
      Object.entries(metas).forEach(([k, v]) => metas[k] = v.toString());
      return createElementCb(null, html, metas);
    });
  }

const renderToStaticMarkupAsync = factory(renderToStaticMarkup);
const renderToStringAsync = factory(renderToString);

export {
  renderToStaticMarkupAsync,
  renderToStringAsync as default,
  renderToStringAsync,
};

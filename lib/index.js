"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToStringAsync = exports.default = exports.renderToStaticMarkupAsync = void 0;

require("core-js/modules/es7.object.entries");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _history = require("history");

var _server = require("react-dom/server");

require("jsdom-global/register");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// patch global environment
// TODO createElement in a sandboxed environment
global.fetch = _nodeFetch.default; // https://github.com/ReactTraining/history#properties
// https://github.com/ReactTraining/history#usage

const factory = render => (historyArg, createElement, createElementCb) => {
  // https://github.com/ReactTraining/history/tree/v4.7.2#properties
  const history = historyArg && ['length', 'location', 'action', 'index', 'entries'].every(Object.hasOwnProperty.bind(historyArg)) ? historyArg : // is a memory history instance
  {
    '[object String]': () => (0, _history.createMemoryHistory)({
      initialEntries: [historyArg]
    }),
    // is a url
    '[object Array]': () => (0, _history.createMemoryHistory)({
      initialEntries: historyArg
    }),
    // is an array of urls
    '[object Object]': () => (0, _history.createMemoryHistory)(historyArg) // is memory history opts

  }[Object.prototype.toString.call(historyArg)](); // https://reactjs.org/docs/react-dom.html#hydrate

  const isClient = false;
  createElement({
    history,
    isClient
  }, (err, el) => {
    if (err) return createElementCb(err);
    const html = render(el); // https://github.com/nfl/react-helmet#server-usage

    _reactHelmet.default.canUseDOM = false;

    const metas = _reactHelmet.default.renderStatic();
    Object.entries(metas).forEach((kv) => { metas[ kv[0] ] = kv[1].toString(); });

    //Object.entries(metas).forEach(([k, v]) => metas[k] = v.toString());
    return createElementCb(null, html, metas);
  });
};

const renderToStaticMarkupAsync = factory(_server.renderToStaticMarkup);
exports.renderToStaticMarkupAsync = renderToStaticMarkupAsync;
const renderToStringAsync = factory(_server.renderToString);
exports.renderToStringAsync = exports.default = renderToStringAsync;

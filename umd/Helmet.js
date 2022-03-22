(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Helmet"] = factory(require("react"), require("prop-types"));
	else
		root["Helmet"] = factory(root["React"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(5);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(8);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(11);

var _HelmetConstants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _deepEqual2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (process.env.NODE_ENV !== "production") {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _exenv = __webpack_require__(6);

var _exenv2 = _interopRequireDefault(_exenv);

var _shallowequal = __webpack_require__(7);

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !(0, _shallowequal2.default)(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(_react.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = _exenv2.default.canUseDOM;


    return SideEffect;
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return ExecutionEnvironment;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(9);
var isArguments = __webpack_require__(10);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(13);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMjJmOGMxOTdkZDc1NmE1ZmE2MiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiYW1kXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwiLFwidmFyXCI6XCJSZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0L2xpYi9IZWxtZXRDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcImFtZFwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJ2YXJcIjpcIlByb3BUeXBlc1wifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9pc19hcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLCtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7O0FBRUw7O0FBRUEsc0U7Ozs7OztBQy9EQTtBQUNBOztBQUVBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQjs7Ozs7OztBQ25TQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QywrQzs7Ozs7OztBQ0FBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUFBO0FBQ0gsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7OztBQ3ZDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IkhlbG1ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGVsbWV0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIZWxtZXRcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlByb3BUeXBlc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDIyZjhjMTk3ZGQ3NTZhNWZhNjIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImFtZFwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwicm9vdFwiOlwiUmVhY3RcIixcInZhclwiOlwiUmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBBVFRSSUJVVEVfTkFNRVMgPSBleHBvcnRzLkFUVFJJQlVURV9OQU1FUyA9IHtcbiAgICBCT0RZOiBcImJvZHlBdHRyaWJ1dGVzXCIsXG4gICAgSFRNTDogXCJodG1sQXR0cmlidXRlc1wiLFxuICAgIFRJVExFOiBcInRpdGxlQXR0cmlidXRlc1wiXG59O1xuXG52YXIgVEFHX05BTUVTID0gZXhwb3J0cy5UQUdfTkFNRVMgPSB7XG4gICAgQkFTRTogXCJiYXNlXCIsXG4gICAgQk9EWTogXCJib2R5XCIsXG4gICAgSEVBRDogXCJoZWFkXCIsXG4gICAgSFRNTDogXCJodG1sXCIsXG4gICAgTElOSzogXCJsaW5rXCIsXG4gICAgTUVUQTogXCJtZXRhXCIsXG4gICAgTk9TQ1JJUFQ6IFwibm9zY3JpcHRcIixcbiAgICBTQ1JJUFQ6IFwic2NyaXB0XCIsXG4gICAgU1RZTEU6IFwic3R5bGVcIixcbiAgICBUSVRMRTogXCJ0aXRsZVwiXG59O1xuXG52YXIgVkFMSURfVEFHX05BTUVTID0gZXhwb3J0cy5WQUxJRF9UQUdfTkFNRVMgPSBPYmplY3Qua2V5cyhUQUdfTkFNRVMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBUQUdfTkFNRVNbbmFtZV07XG59KTtcblxudmFyIFRBR19QUk9QRVJUSUVTID0gZXhwb3J0cy5UQUdfUFJPUEVSVElFUyA9IHtcbiAgICBDSEFSU0VUOiBcImNoYXJzZXRcIixcbiAgICBDU1NfVEVYVDogXCJjc3NUZXh0XCIsXG4gICAgSFJFRjogXCJocmVmXCIsXG4gICAgSFRUUEVRVUlWOiBcImh0dHAtZXF1aXZcIixcbiAgICBJTk5FUl9IVE1MOiBcImlubmVySFRNTFwiLFxuICAgIElURU1fUFJPUDogXCJpdGVtcHJvcFwiLFxuICAgIE5BTUU6IFwibmFtZVwiLFxuICAgIFBST1BFUlRZOiBcInByb3BlcnR5XCIsXG4gICAgUkVMOiBcInJlbFwiLFxuICAgIFNSQzogXCJzcmNcIlxufTtcblxudmFyIFJFQUNUX1RBR19NQVAgPSBleHBvcnRzLlJFQUNUX1RBR19NQVAgPSB7XG4gICAgYWNjZXNza2V5OiBcImFjY2Vzc0tleVwiLFxuICAgIGNoYXJzZXQ6IFwiY2hhclNldFwiLFxuICAgIGNsYXNzOiBcImNsYXNzTmFtZVwiLFxuICAgIGNvbnRlbnRlZGl0YWJsZTogXCJjb250ZW50RWRpdGFibGVcIixcbiAgICBjb250ZXh0bWVudTogXCJjb250ZXh0TWVudVwiLFxuICAgIFwiaHR0cC1lcXVpdlwiOiBcImh0dHBFcXVpdlwiLFxuICAgIGl0ZW1wcm9wOiBcIml0ZW1Qcm9wXCIsXG4gICAgdGFiaW5kZXg6IFwidGFiSW5kZXhcIlxufTtcblxudmFyIEhFTE1FVF9QUk9QUyA9IGV4cG9ydHMuSEVMTUVUX1BST1BTID0ge1xuICAgIERFRkFVTFRfVElUTEU6IFwiZGVmYXVsdFRpdGxlXCIsXG4gICAgREVGRVI6IFwiZGVmZXJcIixcbiAgICBFTkNPREVfU1BFQ0lBTF9DSEFSQUNURVJTOiBcImVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzXCIsXG4gICAgT05fQ0hBTkdFX0NMSUVOVF9TVEFURTogXCJvbkNoYW5nZUNsaWVudFN0YXRlXCIsXG4gICAgVElUTEVfVEVNUExBVEU6IFwidGl0bGVUZW1wbGF0ZVwiXG59O1xuXG52YXIgSFRNTF9UQUdfTUFQID0gZXhwb3J0cy5IVE1MX1RBR19NQVAgPSBPYmplY3Qua2V5cyhSRUFDVF9UQUdfTUFQKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgb2JqW1JFQUNUX1RBR19NQVBba2V5XV0gPSBrZXk7XG4gICAgcmV0dXJuIG9iajtcbn0sIHt9KTtcblxudmFyIFNFTEZfQ0xPU0lOR19UQUdTID0gZXhwb3J0cy5TRUxGX0NMT1NJTkdfVEFHUyA9IFtUQUdfTkFNRVMuTk9TQ1JJUFQsIFRBR19OQU1FUy5TQ1JJUFQsIFRBR19OQU1FUy5TVFlMRV07XG5cbnZhciBIRUxNRVRfQVRUUklCVVRFID0gZXhwb3J0cy5IRUxNRVRfQVRUUklCVVRFID0gXCJkYXRhLXJlYWN0LWhlbG1ldFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0Q29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhlbG1ldCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3RTaWRlRWZmZWN0ID0gcmVxdWlyZShcInJlYWN0LXNpZGUtZWZmZWN0XCIpO1xuXG52YXIgX3JlYWN0U2lkZUVmZmVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdFNpZGVFZmZlY3QpO1xuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoXCJkZWVwLWVxdWFsXCIpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX0hlbG1ldFV0aWxzID0gcmVxdWlyZShcIi4vSGVsbWV0VXRpbHMuanNcIik7XG5cbnZhciBfSGVsbWV0Q29uc3RhbnRzID0gcmVxdWlyZShcIi4vSGVsbWV0Q29uc3RhbnRzLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEhlbG1ldCA9IGZ1bmN0aW9uIEhlbG1ldChDb21wb25lbnQpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICAgIF9pbmhlcml0cyhIZWxtZXRXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBIZWxtZXRXcmFwcGVyKCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlbG1ldFdyYXBwZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9kZWVwRXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzID0gZnVuY3Rpb24gbWFwTmVzdGVkQ2hpbGRyZW5Ub1Byb3BzKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKCFuZXN0ZWRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVDpcbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBUOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBuZXN0ZWRDaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzc1RleHQ6IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIjxcIiArIGNoaWxkLnR5cGUgKyBcIiAvPiBlbGVtZW50cyBhcmUgc2VsZi1jbG9zaW5nIGFuZCBjYW4gbm90IGNvbnRhaW4gY2hpbGRyZW4uIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLmZsYXR0ZW5BcnJheVR5cGVDaGlsZHJlbiA9IGZ1bmN0aW9uIGZsYXR0ZW5BcnJheVR5cGVDaGlsZHJlbihfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBfcmVmLmNoaWxkLFxuICAgICAgICAgICAgICAgIGFycmF5VHlwZUNoaWxkcmVuID0gX3JlZi5hcnJheVR5cGVDaGlsZHJlbixcbiAgICAgICAgICAgICAgICBuZXdDaGlsZFByb3BzID0gX3JlZi5uZXdDaGlsZFByb3BzLFxuICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuID0gX3JlZi5uZXN0ZWRDaGlsZHJlbjtcblxuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcnJheVR5cGVDaGlsZHJlbiwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY2hpbGQudHlwZV0gPSBbXS5jb25jYXQoYXJyYXlUeXBlQ2hpbGRyZW5bY2hpbGQudHlwZV0gfHwgW10sIFtfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcywgdGhpcy5tYXBOZXN0ZWRDaGlsZHJlblRvUHJvcHMoY2hpbGQsIG5lc3RlZENoaWxkcmVuKSldKSwgX2V4dGVuZHMyKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgSGVsbWV0V3JhcHBlci5wcm90b3R5cGUubWFwT2JqZWN0VHlwZUNoaWxkcmVuID0gZnVuY3Rpb24gbWFwT2JqZWN0VHlwZUNoaWxkcmVuKF9yZWYyKSB7XG4gICAgICAgICAgICB2YXIgX2V4dGVuZHMzLCBfZXh0ZW5kczQ7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZCA9IF9yZWYyLmNoaWxkLFxuICAgICAgICAgICAgICAgIG5ld1Byb3BzID0gX3JlZjIubmV3UHJvcHMsXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyA9IF9yZWYyLm5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW4gPSBfcmVmMi5uZXN0ZWRDaGlsZHJlbjtcblxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXdQcm9wcywgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbY2hpbGQudHlwZV0gPSBuZXN0ZWRDaGlsZHJlbiwgX2V4dGVuZHMzLnRpdGxlQXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBuZXdDaGlsZFByb3BzKSwgX2V4dGVuZHMzKSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJPRFk6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkhUTUw6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBfZXh0ZW5kcyh7fSwgbmV3Q2hpbGRQcm9wcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W2NoaWxkLnR5cGVdID0gX2V4dGVuZHMoe30sIG5ld0NoaWxkUHJvcHMpLCBfZXh0ZW5kczQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5tYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMgPSBmdW5jdGlvbiBtYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMoYXJyYXlUeXBlQ2hpbGRyZW4sIG5ld1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgbmV3RmxhdHRlbmVkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhcnJheVR5cGVDaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXlDaGlsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2V4dGVuZHM1O1xuXG4gICAgICAgICAgICAgICAgbmV3RmxhdHRlbmVkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3RmxhdHRlbmVkUHJvcHMsIChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W2FycmF5Q2hpbGROYW1lXSA9IGFycmF5VHlwZUNoaWxkcmVuW2FycmF5Q2hpbGROYW1lXSwgX2V4dGVuZHM1KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ld0ZsYXR0ZW5lZFByb3BzO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLndhcm5PbkludmFsaWRDaGlsZHJlbiA9IGZ1bmN0aW9uIHdhcm5PbkludmFsaWRDaGlsZHJlbihjaGlsZCwgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV9IZWxtZXRDb25zdGFudHMuVkFMSURfVEFHX05BTUVTLnNvbWUoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09IG5hbWU7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX0hlbG1ldFV0aWxzLndhcm4pKFwiWW91IG1heSBiZSBhdHRlbXB0aW5nIHRvIG5lc3QgPEhlbG1ldD4gY29tcG9uZW50cyB3aXRoaW4gZWFjaCBvdGhlciwgd2hpY2ggaXMgbm90IGFsbG93ZWQuIFJlZmVyIHRvIG91ciBBUEkgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfSGVsbWV0VXRpbHMud2FybikoXCJPbmx5IGVsZW1lbnRzIHR5cGVzIFwiICsgX0hlbG1ldENvbnN0YW50cy5WQUxJRF9UQUdfTkFNRVMuam9pbihcIiwgXCIpICsgXCIgYXJlIGFsbG93ZWQuIEhlbG1ldCBkb2VzIG5vdCBzdXBwb3J0IHJlbmRlcmluZyA8XCIgKyBjaGlsZC50eXBlICsgXCI+IGVsZW1lbnRzLiBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmVzdGVkQ2hpbGRyZW4gJiYgdHlwZW9mIG5lc3RlZENoaWxkcmVuICE9PSBcInN0cmluZ1wiICYmICghQXJyYXkuaXNBcnJheShuZXN0ZWRDaGlsZHJlbikgfHwgbmVzdGVkQ2hpbGRyZW4uc29tZShmdW5jdGlvbiAobmVzdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXN0ZWRDaGlsZCAhPT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVsbWV0IGV4cGVjdHMgYSBzdHJpbmcgYXMgYSBjaGlsZCBvZiA8XCIgKyBjaGlsZC50eXBlICsgXCI+LiBEaWQgeW91IGZvcmdldCB0byB3cmFwIHlvdXIgY2hpbGRyZW4gaW4gYnJhY2VzPyAoIDxcIiArIGNoaWxkLnR5cGUgKyBcIj57YGB9PC9cIiArIGNoaWxkLnR5cGUgKyBcIj4gKSBSZWZlciB0byBvdXIgQVBJIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIEhlbG1ldFdyYXBwZXIucHJvdG90eXBlLm1hcENoaWxkcmVuVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcENoaWxkcmVuVG9Qcm9wcyhjaGlsZHJlbiwgbmV3UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgYXJyYXlUeXBlQ2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZENoaWxkcmVuID0gX2NoaWxkJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jaGlsZCRwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIG5ld0NoaWxkUHJvcHMgPSAoMCwgX0hlbG1ldFV0aWxzLmNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcykoY2hpbGRQcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpczIud2Fybk9uSW52YWxpZENoaWxkcmVuKGNoaWxkLCBuZXN0ZWRDaGlsZHJlbik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNoaWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk1FVEE6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUeXBlQ2hpbGRyZW4gPSBfdGhpczIuZmxhdHRlbkFycmF5VHlwZUNoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZDogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUeXBlQ2hpbGRyZW46IGFycmF5VHlwZUNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NoaWxkUHJvcHM6IG5ld0NoaWxkUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkQ2hpbGRyZW46IG5lc3RlZENoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcyA9IF90aGlzMi5tYXBPYmplY3RUeXBlQ2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkOiBjaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wczogbmV3UHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2hpbGRQcm9wczogbmV3Q2hpbGRQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRDaGlsZHJlbjogbmVzdGVkQ2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1Byb3BzID0gdGhpcy5tYXBBcnJheVR5cGVDaGlsZHJlblRvUHJvcHMoYXJyYXlUeXBlQ2hpbGRyZW4sIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9wcztcbiAgICAgICAgfTtcblxuICAgICAgICBIZWxtZXRXcmFwcGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgICAgICAgICAgdmFyIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvcHMgPSB0aGlzLm1hcENoaWxkcmVuVG9Qcm9wcyhjaGlsZHJlbiwgbmV3UHJvcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBuZXdQcm9wcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKEhlbG1ldFdyYXBwZXIsIG51bGwsIFt7XG4gICAgICAgICAgICBrZXk6IFwiY2FuVXNlRE9NXCIsXG5cblxuICAgICAgICAgICAgLy8gQ29tcG9uZW50LnBlZWsgY29tZXMgZnJvbSByZWFjdC1zaWRlLWVmZmVjdDpcbiAgICAgICAgICAgIC8vIEZvciB0ZXN0aW5nLCB5b3UgbWF5IHVzZSBhIHN0YXRpYyBwZWVrKCkgbWV0aG9kIGF2YWlsYWJsZSBvbiB0aGUgcmV0dXJuZWQgY29tcG9uZW50LlxuICAgICAgICAgICAgLy8gSXQgbGV0cyB5b3UgZ2V0IHRoZSBjdXJyZW50IHN0YXRlIHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBtb3VudGVkIGluc3RhbmNlIHN0YWNrLlxuICAgICAgICAgICAgLy8gRG9u4oCZdCB1c2UgaXQgZm9yIGFueXRoaW5nIG90aGVyIHRoYW4gdGVzdGluZy5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBiYXNlOiB7XCJ0YXJnZXRcIjogXCJfYmxhbmtcIiwgXCJocmVmXCI6IFwiaHR0cDovL215c2l0ZS5jb20vXCJ9XG4gICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBib2R5QXR0cmlidXRlczoge1wiY2xhc3NOYW1lXCI6IFwicm9vdFwifVxuICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVmYXVsdFRpdGxlOiBcIkRlZmF1bHQgVGl0bGVcIlxuICAgICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmVyOiB0cnVlXG4gICAgICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5jb2RlU3BlY2lhbENoYXJhY3RlcnM6IHRydWVcbiAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGh0bWxBdHRyaWJ1dGVzOiB7XCJsYW5nXCI6IFwiZW5cIiwgXCJhbXBcIjogdW5kZWZpbmVkfVxuICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBsaW5rOiBbe1wicmVsXCI6IFwiY2Fub25pY2FsXCIsIFwiaHJlZlwiOiBcImh0dHA6Ly9teXNpdGUuY29tL2V4YW1wbGVcIn1dXG4gICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1ldGE6IFt7XCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIiwgXCJjb250ZW50XCI6IFwiVGVzdCBkZXNjcmlwdGlvblwifV1cbiAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbm9zY3JpcHQ6IFt7XCJpbm5lckhUTUxcIjogXCI8aW1nIHNyYz0naHR0cDovL215c2l0ZS5jb20vanMvdGVzdC5qcydcIn1dXG4gICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2hhbmdlQ2xpZW50U3RhdGU6IFwiKG5ld1N0YXRlKSA9PiBjb25zb2xlLmxvZyhuZXdTdGF0ZSlcIlxuICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBzY3JpcHQ6IFt7XCJ0eXBlXCI6IFwidGV4dC9qYXZhc2NyaXB0XCIsIFwic3JjXCI6IFwiaHR0cDovL215c2l0ZS5jb20vanMvdGVzdC5qc1wifV1cbiAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gc3R5bGU6IFt7XCJ0eXBlXCI6IFwidGV4dC9jc3NcIiwgXCJjc3NUZXh0XCI6IFwiZGl2IHsgZGlzcGxheTogYmxvY2s7IGNvbG9yOiBibHVlOyB9XCJ9XVxuICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IFwiVGl0bGVcIlxuICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdGl0bGVBdHRyaWJ1dGVzOiB7XCJpdGVtcHJvcFwiOiBcIm5hbWVcIn1cbiAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlVGVtcGxhdGU6IFwiTXlTaXRlLmNvbSAtICVzXCJcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChjYW5Vc2VET00pIHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQuY2FuVXNlRE9NID0gY2FuVXNlRE9NO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEhlbG1ldFdyYXBwZXI7XG4gICAgfShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICAgICAgYmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlKSwgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSksXG4gICAgICAgIGRlZmF1bHRUaXRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgICAgIGRlZmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICAgICAgbGluazogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgbWV0YTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgbm9zY3JpcHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgc2NyaXB0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpLFxuICAgICAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheU9mKF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0KSxcbiAgICAgICAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgICAgICB0aXRsZVRlbXBsYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICAgIH0sIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlZmVyOiB0cnVlLFxuICAgICAgICBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVyczogdHJ1ZVxuICAgIH0sIF9jbGFzcy5wZWVrID0gQ29tcG9uZW50LnBlZWssIF9jbGFzcy5yZXdpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYXBwZWRTdGF0ZSA9IENvbXBvbmVudC5yZXdpbmQoKTtcbiAgICAgICAgaWYgKCFtYXBwZWRTdGF0ZSkge1xuICAgICAgICAgICAgLy8gcHJvdmlkZSBmYWxsYmFjayBpZiBtYXBwZWRTdGF0ZSBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgIG1hcHBlZFN0YXRlID0gKDAsIF9IZWxtZXRVdGlscy5tYXBTdGF0ZU9uU2VydmVyKSh7XG4gICAgICAgICAgICAgICAgYmFzZVRhZzogW10sXG4gICAgICAgICAgICAgICAgYm9keUF0dHJpYnV0ZXM6IHt9LFxuICAgICAgICAgICAgICAgIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGh0bWxBdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgICAgICBsaW5rVGFnczogW10sXG4gICAgICAgICAgICAgICAgbWV0YVRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgIG5vc2NyaXB0VGFnczogW10sXG4gICAgICAgICAgICAgICAgc2NyaXB0VGFnczogW10sXG4gICAgICAgICAgICAgICAgc3R5bGVUYWdzOiBbXSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYnV0ZXM6IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBwZWRTdGF0ZTtcbiAgICB9LCBfdGVtcDtcbn07XG5cbnZhciBOdWxsQ29tcG9uZW50ID0gZnVuY3Rpb24gTnVsbENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBIZWxtZXRTaWRlRWZmZWN0cyA9ICgwLCBfcmVhY3RTaWRlRWZmZWN0Mi5kZWZhdWx0KShfSGVsbWV0VXRpbHMucmVkdWNlUHJvcHNUb1N0YXRlLCBfSGVsbWV0VXRpbHMuaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UsIF9IZWxtZXRVdGlscy5tYXBTdGF0ZU9uU2VydmVyKShOdWxsQ29tcG9uZW50KTtcblxudmFyIEhlbG1ldEV4cG9ydCA9IEhlbG1ldChIZWxtZXRTaWRlRWZmZWN0cyk7XG5IZWxtZXRFeHBvcnQucmVuZGVyU3RhdGljID0gSGVsbWV0RXhwb3J0LnJld2luZDtcblxuZXhwb3J0cy5IZWxtZXQgPSBIZWxtZXRFeHBvcnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBIZWxtZXRFeHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaGVsbWV0L2xpYi9IZWxtZXQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImFtZFwiOlwicHJvcC10eXBlc1wiLFwiY29tbW9uanNcIjpcInByb3AtdHlwZXNcIixcImNvbW1vbmpzMlwiOlwicHJvcC10eXBlc1wiLFwicm9vdFwiOlwiUHJvcFR5cGVzXCIsXCJ2YXJcIjpcIlByb3BUeXBlc1wifVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9leGVudiA9IHJlcXVpcmUoJ2V4ZW52Jyk7XG5cbnZhciBfZXhlbnYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhlbnYpO1xuXG52YXIgX3NoYWxsb3dlcXVhbCA9IHJlcXVpcmUoJ3NoYWxsb3dlcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dlcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93ZXF1YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50LCBtYXBTdGF0ZU9uU2VydmVyKSB7XG4gIGlmICh0eXBlb2YgcmVkdWNlUHJvcHNUb1N0YXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCByZWR1Y2VQcm9wc1RvU3RhdGUgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuICBpZiAodHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYXBTdGF0ZU9uU2VydmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBtYXBTdGF0ZU9uU2VydmVyIHRvIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIFdyYXBwZWRDb21wb25lbnQgdG8gYmUgYSBSZWFjdCBjb21wb25lbnQuJyk7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICB2YXIgc3RhdGUgPSB2b2lkIDA7XG5cbiAgICBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgICAgc3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGUobW91bnRlZEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKFNpZGVFZmZlY3QuY2FuVXNlRE9NKSB7XG4gICAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoc3RhdGUpO1xuICAgICAgfSBlbHNlIGlmIChtYXBTdGF0ZU9uU2VydmVyKSB7XG4gICAgICAgIHN0YXRlID0gbWFwU3RhdGVPblNlcnZlcihzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFNpZGVFZmZlY3QgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKFNpZGVFZmZlY3QsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTaWRlRWZmZWN0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2lkZUVmZmVjdCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byB1c2UgZGlzcGxheU5hbWUgb2Ygd3JhcHBlZCBjb21wb25lbnRcbiAgICAgIFNpZGVFZmZlY3QucGVlayA9IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIC8vIEV4cG9zZSBjYW5Vc2VET00gc28gdGVzdHMgY2FuIG1vbmtleXBhdGNoIGl0XG5cblxuICAgICAgU2lkZUVmZmVjdC5yZXdpbmQgPSBmdW5jdGlvbiByZXdpbmQoKSB7XG4gICAgICAgIGlmIChTaWRlRWZmZWN0LmNhblVzZURPTSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBvbmx5IGNhbGwgcmV3aW5kKCkgb24gdGhlIHNlcnZlci4gQ2FsbCBwZWVrKCkgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWNvcmRlZFN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzID0gW107XG4gICAgICAgIHJldHVybiByZWNvcmRlZFN0YXRlO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gISgwLCBfc2hhbGxvd2VxdWFsMi5kZWZhdWx0KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIFNpZGVFZmZlY3QucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgU2lkZUVmZmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbW91bnRlZEluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIFNpZGVFZmZlY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFNpZGVFZmZlY3Q7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICAgIFNpZGVFZmZlY3QuZGlzcGxheU5hbWUgPSAnU2lkZUVmZmVjdCgnICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gICAgU2lkZUVmZmVjdC5jYW5Vc2VET00gPSBfZXhlbnYyLmRlZmF1bHQuY2FuVXNlRE9NO1xuXG5cbiAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCLCBjb21wYXJlLCBjb21wYXJlQ29udGV4dCkge1xuXG4gICAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gICAgaWYocmV0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuICEhcmV0O1xuICAgIH1cblxuICAgIGlmKG9iakEgPT09IG9iakIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8ICFvYmpBIHx8XG4gICAgICAgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8ICFvYmpCKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICAgIGlmKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gICAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgICBmb3IodmFyIGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcblxuICAgICAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcblxuICAgICAgICBpZighYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgICAgIHZhciB2YWx1ZUIgPSBvYmpCW2tleV07XG5cbiAgICAgICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICAgICAgaWYocmV0ID09PSBmYWxzZSB8fFxuICAgICAgICAgICByZXQgPT09IHZvaWQgMCAmJiB2YWx1ZUEgIT09IHZhbHVlQikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53YXJuID0gZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBleHBvcnRzLnJlZHVjZVByb3BzVG9TdGF0ZSA9IGV4cG9ydHMubWFwU3RhdGVPblNlcnZlciA9IGV4cG9ydHMuaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UgPSBleHBvcnRzLmNvbnZlcnRSZWFjdFByb3BzdG9IdG1sQXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKTtcblxudmFyIF9vYmplY3RBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QXNzaWduKTtcblxudmFyIF9IZWxtZXRDb25zdGFudHMgPSByZXF1aXJlKFwiLi9IZWxtZXRDb25zdGFudHMuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBlbmNvZGVTcGVjaWFsQ2hhcmFjdGVycyA9IGZ1bmN0aW9uIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKHN0cikge1xuICAgIHZhciBlbmNvZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgICBpZiAoZW5jb2RlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoLyYvZywgXCImYW1wO1wiKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKS5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKS5yZXBsYWNlKC8nL2csIFwiJiN4Mjc7XCIpO1xufTtcblxudmFyIGdldFRpdGxlRnJvbVByb3BzTGlzdCA9IGZ1bmN0aW9uIGdldFRpdGxlRnJvbVByb3BzTGlzdChwcm9wc0xpc3QpIHtcbiAgICB2YXIgaW5uZXJtb3N0VGl0bGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlRJVExFKTtcbiAgICB2YXIgaW5uZXJtb3N0VGVtcGxhdGUgPSBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLlRJVExFX1RFTVBMQVRFKTtcblxuICAgIGlmIChpbm5lcm1vc3RUZW1wbGF0ZSAmJiBpbm5lcm1vc3RUaXRsZSkge1xuICAgICAgICAvLyB1c2UgZnVuY3Rpb24gYXJnIHRvIGF2b2lkIG5lZWQgdG8gZXNjYXBlICQgY2hhcmFjdGVyc1xuICAgICAgICByZXR1cm4gaW5uZXJtb3N0VGVtcGxhdGUucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlubmVybW9zdFRpdGxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJtb3N0RGVmYXVsdFRpdGxlID0gZ2V0SW5uZXJtb3N0UHJvcGVydHkocHJvcHNMaXN0LCBfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9QUk9QUy5ERUZBVUxUX1RJVExFKTtcblxuICAgIHJldHVybiBpbm5lcm1vc3RUaXRsZSB8fCBpbm5lcm1vc3REZWZhdWx0VGl0bGUgfHwgdW5kZWZpbmVkO1xufTtcblxudmFyIGdldE9uQ2hhbmdlQ2xpZW50U3RhdGUgPSBmdW5jdGlvbiBnZXRPbkNoYW5nZUNsaWVudFN0YXRlKHByb3BzTGlzdCkge1xuICAgIHJldHVybiBnZXRJbm5lcm1vc3RQcm9wZXJ0eShwcm9wc0xpc3QsIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX1BST1BTLk9OX0NIQU5HRV9DTElFTlRfU1RBVEUpIHx8IGZ1bmN0aW9uICgpIHt9O1xufTtcblxudmFyIGdldEF0dHJpYnV0ZXNGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QodGFnVHlwZSwgcHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvcHNbdGFnVHlwZV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHNbdGFnVHlwZV07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uICh0YWdBdHRycywgY3VycmVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRhZ0F0dHJzLCBjdXJyZW50KTtcbiAgICB9LCB7fSk7XG59O1xuXG52YXIgZ2V0QmFzZVRhZ0Zyb21Qcm9wc0xpc3QgPSBmdW5jdGlvbiBnZXRCYXNlVGFnRnJvbVByb3BzTGlzdChwcmltYXJ5QXR0cmlidXRlcywgcHJvcHNMaXN0KSB7XG4gICAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvcHNbX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHNbX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRV07XG4gICAgfSkucmV2ZXJzZSgpLnJlZHVjZShmdW5jdGlvbiAoaW5uZXJtb3N0QmFzZVRhZywgdGFnKSB7XG4gICAgICAgIGlmICghaW5uZXJtb3N0QmFzZVRhZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGFnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSA9IGF0dHJpYnV0ZUtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByaW1hcnlBdHRyaWJ1dGVzLmluZGV4T2YobG93ZXJDYXNlQXR0cmlidXRlS2V5KSAhPT0gLTEgJiYgdGFnW2xvd2VyQ2FzZUF0dHJpYnV0ZUtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubmVybW9zdEJhc2VUYWcuY29uY2F0KHRhZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlubmVybW9zdEJhc2VUYWc7XG4gICAgfSwgW10pO1xufTtcblxudmFyIGdldFRhZ3NGcm9tUHJvcHNMaXN0ID0gZnVuY3Rpb24gZ2V0VGFnc0Zyb21Qcm9wc0xpc3QodGFnTmFtZSwgcHJpbWFyeUF0dHJpYnV0ZXMsIHByb3BzTGlzdCkge1xuICAgIC8vIENhbGN1bGF0ZSBsaXN0IG9mIHRhZ3MsIGdpdmluZyBwcmlvcml0eSBpbm5lcm1vc3QgY29tcG9uZW50IChlbmQgb2YgdGhlIHByb3BzbGlzdClcbiAgICB2YXIgYXBwcm92ZWRTZWVuVGFncyA9IHt9O1xuXG4gICAgcmV0dXJuIHByb3BzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzW3RhZ05hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wc1t0YWdOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgd2FybihcIkhlbG1ldDogXCIgKyB0YWdOYW1lICsgXCIgc2hvdWxkIGJlIG9mIHR5cGUgXFxcIkFycmF5XFxcIi4gSW5zdGVhZCBmb3VuZCB0eXBlIFxcXCJcIiArIF90eXBlb2YocHJvcHNbdGFnTmFtZV0pICsgXCJcXFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wc1t0YWdOYW1lXTtcbiAgICB9KS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChhcHByb3ZlZFRhZ3MsIGluc3RhbmNlVGFncykge1xuICAgICAgICB2YXIgaW5zdGFuY2VTZWVuVGFncyA9IHt9O1xuXG4gICAgICAgIGluc3RhbmNlVGFncy5maWx0ZXIoZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgdmFyIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRhZyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgbG93ZXJDYXNlQXR0cmlidXRlS2V5ID0gYXR0cmlidXRlS2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIHJ1bGUgd2l0aCBsaW5rIHRhZ3MsIHNpbmNlIHJlbCBhbmQgaHJlZiBhcmUgYm90aCBwcmltYXJ5IHRhZ3MsIHJlbCB0YWtlcyBwcmlvcml0eVxuICAgICAgICAgICAgICAgIGlmIChwcmltYXJ5QXR0cmlidXRlcy5pbmRleE9mKGxvd2VyQ2FzZUF0dHJpYnV0ZUtleSkgIT09IC0xICYmICEocHJpbWFyeUF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5SRUwgJiYgdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCkgPT09IFwiY2Fub25pY2FsXCIpICYmICEobG93ZXJDYXNlQXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlJFTCAmJiB0YWdbbG93ZXJDYXNlQXR0cmlidXRlS2V5XS50b0xvd2VyQ2FzZSgpID09PSBcInN0eWxlc2hlZXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUF0dHJpYnV0ZUtleSA9IGxvd2VyQ2FzZUF0dHJpYnV0ZUtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBpbm5lckhUTUwgd2hpY2ggZG9lc24ndCB3b3JrIGxvd2VyY2FzZWRcbiAgICAgICAgICAgICAgICBpZiAocHJpbWFyeUF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGVLZXkpICE9PSAtMSAmJiAoYXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLklOTkVSX0hUTUwgfHwgYXR0cmlidXRlS2V5ID09PSBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkNTU19URVhUIHx8IGF0dHJpYnV0ZUtleSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JVEVNX1BST1ApKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlBdHRyaWJ1dGVLZXkgPSBhdHRyaWJ1dGVLZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXByaW1hcnlBdHRyaWJ1dGVLZXkgfHwgIXRhZ1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGFnW3ByaW1hcnlBdHRyaWJ1dGVLZXldLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICghYXBwcm92ZWRTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSkge1xuICAgICAgICAgICAgICAgIGFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV0gPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVNlZW5UYWdzW3ByaW1hcnlBdHRyaWJ1dGVLZXldKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWFwcHJvdmVkU2VlblRhZ3NbcHJpbWFyeUF0dHJpYnV0ZUtleV1bdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VTZWVuVGFnc1twcmltYXJ5QXR0cmlidXRlS2V5XVt2YWx1ZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHByb3ZlZFRhZ3MucHVzaCh0YWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgc2VlbiB0YWdzIHdpdGggdGFncyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhpbnN0YW5jZVNlZW5UYWdzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlS2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB0YWdVbmlvbiA9ICgwLCBfb2JqZWN0QXNzaWduMi5kZWZhdWx0KSh7fSwgYXBwcm92ZWRTZWVuVGFnc1thdHRyaWJ1dGVLZXldLCBpbnN0YW5jZVNlZW5UYWdzW2F0dHJpYnV0ZUtleV0pO1xuXG4gICAgICAgICAgICBhcHByb3ZlZFNlZW5UYWdzW2F0dHJpYnV0ZUtleV0gPSB0YWdVbmlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcHByb3ZlZFRhZ3M7XG4gICAgfSwgW10pLnJldmVyc2UoKTtcbn07XG5cbnZhciBnZXRJbm5lcm1vc3RQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgcHJvcGVydHkpIHtcbiAgICBmb3IgKHZhciBpID0gcHJvcHNMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHByb3BzTGlzdFtpXTtcblxuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgcmVkdWNlUHJvcHNUb1N0YXRlID0gZnVuY3Rpb24gcmVkdWNlUHJvcHNUb1N0YXRlKHByb3BzTGlzdCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VUYWc6IGdldEJhc2VUYWdGcm9tUHJvcHNMaXN0KFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkhSRUZdLCBwcm9wc0xpc3QpLFxuICAgICAgICBib2R5QXR0cmlidXRlczogZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuQk9EWSwgcHJvcHNMaXN0KSxcbiAgICAgICAgZGVmZXI6IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuREVGRVIpLFxuICAgICAgICBlbmNvZGU6IGdldElubmVybW9zdFByb3BlcnR5KHByb3BzTGlzdCwgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfUFJPUFMuRU5DT0RFX1NQRUNJQUxfQ0hBUkFDVEVSUyksXG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzOiBnZXRBdHRyaWJ1dGVzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5IVE1MLCBwcm9wc0xpc3QpLFxuICAgICAgICBsaW5rVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTElOSywgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuUkVMLCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkhSRUZdLCBwcm9wc0xpc3QpLFxuICAgICAgICBtZXRhVGFnczogZ2V0VGFnc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTUVUQSwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuTkFNRSwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DSEFSU0VULCBfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLkhUVFBFUVVJViwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5QUk9QRVJUWSwgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JVEVNX1BST1BdLCBwcm9wc0xpc3QpLFxuICAgICAgICBub3NjcmlwdFRhZ3M6IGdldFRhZ3NGcm9tUHJvcHNMaXN0KF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLk5PU0NSSVBULCBbX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgb25DaGFuZ2VDbGllbnRTdGF0ZTogZ2V0T25DaGFuZ2VDbGllbnRTdGF0ZShwcm9wc0xpc3QpLFxuICAgICAgICBzY3JpcHRUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TQ1JJUFQsIFtfSGVsbWV0Q29uc3RhbnRzLlRBR19QUk9QRVJUSUVTLlNSQywgX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MXSwgcHJvcHNMaXN0KSxcbiAgICAgICAgc3R5bGVUYWdzOiBnZXRUYWdzRnJvbVByb3BzTGlzdChfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5TVFlMRSwgW19IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFRdLCBwcm9wc0xpc3QpLFxuICAgICAgICB0aXRsZTogZ2V0VGl0bGVGcm9tUHJvcHNMaXN0KHByb3BzTGlzdCksXG4gICAgICAgIHRpdGxlQXR0cmlidXRlczogZ2V0QXR0cmlidXRlc0Zyb21Qcm9wc0xpc3QoX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuVElUTEUsIHByb3BzTGlzdClcbiAgICB9O1xufTtcblxudmFyIHJhZlBvbHlmaWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbG9jayA9IERhdGUubm93KCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gY2xvY2sgPiAxNikge1xuICAgICAgICAgICAgY2xvY2sgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJlbnRUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJhZlBvbHlmaWxsKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxudmFyIGNhZlBvbHlmaWxsID0gZnVuY3Rpb24gY2FmUG9seWZpbGwoaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcmFmUG9seWZpbGwgOiBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJhZlBvbHlmaWxsO1xuXG52YXIgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgY2FmUG9seWZpbGwgOiBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgY2FmUG9seWZpbGw7XG5cbnZhciB3YXJuID0gZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICByZXR1cm4gY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIgJiYgY29uc29sZS53YXJuKG1zZyk7XG59O1xuXG52YXIgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcblxudmFyIGhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2xpZW50U3RhdGVDaGFuZ2UobmV3U3RhdGUpIHtcbiAgICBpZiAoX2hlbG1ldENhbGxiYWNrKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF9oZWxtZXRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKG5ld1N0YXRlLmRlZmVyKSB7XG4gICAgICAgIF9oZWxtZXRDYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21taXRUYWdDaGFuZ2VzKG5ld1N0YXRlKTtcbiAgICAgICAgX2hlbG1ldENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG59O1xuXG52YXIgY29tbWl0VGFnQ2hhbmdlcyA9IGZ1bmN0aW9uIGNvbW1pdFRhZ0NoYW5nZXMobmV3U3RhdGUsIGNiKSB7XG4gICAgdmFyIGJhc2VUYWcgPSBuZXdTdGF0ZS5iYXNlVGFnLFxuICAgICAgICBib2R5QXR0cmlidXRlcyA9IG5ld1N0YXRlLmJvZHlBdHRyaWJ1dGVzLFxuICAgICAgICBodG1sQXR0cmlidXRlcyA9IG5ld1N0YXRlLmh0bWxBdHRyaWJ1dGVzLFxuICAgICAgICBsaW5rVGFncyA9IG5ld1N0YXRlLmxpbmtUYWdzLFxuICAgICAgICBtZXRhVGFncyA9IG5ld1N0YXRlLm1ldGFUYWdzLFxuICAgICAgICBub3NjcmlwdFRhZ3MgPSBuZXdTdGF0ZS5ub3NjcmlwdFRhZ3MsXG4gICAgICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGUgPSBuZXdTdGF0ZS5vbkNoYW5nZUNsaWVudFN0YXRlLFxuICAgICAgICBzY3JpcHRUYWdzID0gbmV3U3RhdGUuc2NyaXB0VGFncyxcbiAgICAgICAgc3R5bGVUYWdzID0gbmV3U3RhdGUuc3R5bGVUYWdzLFxuICAgICAgICB0aXRsZSA9IG5ld1N0YXRlLnRpdGxlLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXMgPSBuZXdTdGF0ZS50aXRsZUF0dHJpYnV0ZXM7XG5cbiAgICB1cGRhdGVBdHRyaWJ1dGVzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJPRFksIGJvZHlBdHRyaWJ1dGVzKTtcbiAgICB1cGRhdGVBdHRyaWJ1dGVzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkhUTUwsIGh0bWxBdHRyaWJ1dGVzKTtcblxuICAgIHVwZGF0ZVRpdGxlKHRpdGxlLCB0aXRsZUF0dHJpYnV0ZXMpO1xuXG4gICAgdmFyIHRhZ1VwZGF0ZXMgPSB7XG4gICAgICAgIGJhc2VUYWc6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuQkFTRSwgYmFzZVRhZyksXG4gICAgICAgIGxpbmtUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkxJTkssIGxpbmtUYWdzKSxcbiAgICAgICAgbWV0YVRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTUVUQSwgbWV0YVRhZ3MpLFxuICAgICAgICBub3NjcmlwdFRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQsIG5vc2NyaXB0VGFncyksXG4gICAgICAgIHNjcmlwdFRhZ3M6IHVwZGF0ZVRhZ3MoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU0NSSVBULCBzY3JpcHRUYWdzKSxcbiAgICAgICAgc3R5bGVUYWdzOiB1cGRhdGVUYWdzKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNUWUxFLCBzdHlsZVRhZ3MpXG4gICAgfTtcblxuICAgIHZhciBhZGRlZFRhZ3MgPSB7fTtcbiAgICB2YXIgcmVtb3ZlZFRhZ3MgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRhZ1VwZGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHRhZ1R5cGUpIHtcbiAgICAgICAgdmFyIF90YWdVcGRhdGVzJHRhZ1R5cGUgPSB0YWdVcGRhdGVzW3RhZ1R5cGVdLFxuICAgICAgICAgICAgbmV3VGFncyA9IF90YWdVcGRhdGVzJHRhZ1R5cGUubmV3VGFncyxcbiAgICAgICAgICAgIG9sZFRhZ3MgPSBfdGFnVXBkYXRlcyR0YWdUeXBlLm9sZFRhZ3M7XG5cblxuICAgICAgICBpZiAobmV3VGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZGVkVGFnc1t0YWdUeXBlXSA9IG5ld1RhZ3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZFRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZW1vdmVkVGFnc1t0YWdUeXBlXSA9IHRhZ1VwZGF0ZXNbdGFnVHlwZV0ub2xkVGFncztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2IgJiYgY2IoKTtcblxuICAgIG9uQ2hhbmdlQ2xpZW50U3RhdGUobmV3U3RhdGUsIGFkZGVkVGFncywgcmVtb3ZlZFRhZ3MpO1xufTtcblxudmFyIGZsYXR0ZW5BcnJheSA9IGZ1bmN0aW9uIGZsYXR0ZW5BcnJheShwb3NzaWJsZUFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocG9zc2libGVBcnJheSkgPyBwb3NzaWJsZUFycmF5LmpvaW4oXCJcIikgOiBwb3NzaWJsZUFycmF5O1xufTtcblxudmFyIHVwZGF0ZVRpdGxlID0gZnVuY3Rpb24gdXBkYXRlVGl0bGUodGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodHlwZW9mIHRpdGxlICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LnRpdGxlICE9PSB0aXRsZSkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGZsYXR0ZW5BcnJheSh0aXRsZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlcyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5USVRMRSwgYXR0cmlidXRlcyk7XG59O1xuXG52YXIgdXBkYXRlQXR0cmlidXRlcyA9IGZ1bmN0aW9uIHVwZGF0ZUF0dHJpYnV0ZXModGFnTmFtZSwgYXR0cmlidXRlcykge1xuICAgIHZhciBlbGVtZW50VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSlbMF07XG5cbiAgICBpZiAoIWVsZW1lbnRUYWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBoZWxtZXRBdHRyaWJ1dGVTdHJpbmcgPSBlbGVtZW50VGFnLmdldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUpO1xuICAgIHZhciBoZWxtZXRBdHRyaWJ1dGVzID0gaGVsbWV0QXR0cmlidXRlU3RyaW5nID8gaGVsbWV0QXR0cmlidXRlU3RyaW5nLnNwbGl0KFwiLFwiKSA6IFtdO1xuICAgIHZhciBhdHRyaWJ1dGVzVG9SZW1vdmUgPSBbXS5jb25jYXQoaGVsbWV0QXR0cmlidXRlcyk7XG4gICAgdmFyIGF0dHJpYnV0ZUtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlS2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1thdHRyaWJ1dGVdIHx8IFwiXCI7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRUYWcuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBlbGVtZW50VGFnLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoZWxtZXRBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGhlbG1ldEF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGV4VG9TYXZlID0gYXR0cmlidXRlc1RvUmVtb3ZlLmluZGV4T2YoYXR0cmlidXRlKTtcbiAgICAgICAgaWYgKGluZGV4VG9TYXZlICE9PSAtMSkge1xuICAgICAgICAgICAgYXR0cmlidXRlc1RvUmVtb3ZlLnNwbGljZShpbmRleFRvU2F2ZSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IGF0dHJpYnV0ZXNUb1JlbW92ZS5sZW5ndGggLSAxOyBfaSA+PSAwOyBfaS0tKSB7XG4gICAgICAgIGVsZW1lbnRUYWcucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZXNUb1JlbW92ZVtfaV0pO1xuICAgIH1cblxuICAgIGlmIChoZWxtZXRBdHRyaWJ1dGVzLmxlbmd0aCA9PT0gYXR0cmlidXRlc1RvUmVtb3ZlLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50VGFnLnJlbW92ZUF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudFRhZy5nZXRBdHRyaWJ1dGUoX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFKSAhPT0gYXR0cmlidXRlS2V5cy5qb2luKFwiLFwiKSkge1xuICAgICAgICBlbGVtZW50VGFnLnNldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUsIGF0dHJpYnV0ZUtleXMuam9pbihcIixcIikpO1xuICAgIH1cbn07XG5cbnZhciB1cGRhdGVUYWdzID0gZnVuY3Rpb24gdXBkYXRlVGFncyh0eXBlLCB0YWdzKSB7XG4gICAgdmFyIGhlYWRFbGVtZW50ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkhFQUQpO1xuICAgIHZhciB0YWdOb2RlcyA9IGhlYWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHlwZSArIFwiW1wiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCJdXCIpO1xuICAgIHZhciBvbGRUYWdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFnTm9kZXMpO1xuICAgIHZhciBuZXdUYWdzID0gW107XG4gICAgdmFyIGluZGV4VG9EZWxldGUgPSB2b2lkIDA7XG5cbiAgICBpZiAodGFncyAmJiB0YWdzLmxlbmd0aCkge1xuICAgICAgICB0YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyaWJ1dGUgaW4gdGFnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhZy5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0YWcuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0VsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gdGFnLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFnLmNzc1RleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB0YWdbYXR0cmlidXRlXSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiB0YWdbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEUsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGEgZHVwbGljYXRlIHRhZyBmcm9tIGRvbVRhZ3N0b1JlbW92ZSwgc28gaXQgaXNuJ3QgY2xlYXJlZC5cbiAgICAgICAgICAgIGlmIChvbGRUYWdzLnNvbWUoZnVuY3Rpb24gKGV4aXN0aW5nVGFnLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGluZGV4VG9EZWxldGUgPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3RWxlbWVudC5pc0VxdWFsTm9kZShleGlzdGluZ1RhZyk7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIG9sZFRhZ3Muc3BsaWNlKGluZGV4VG9EZWxldGUsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdUYWdzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9sZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIG5ld1RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZCh0YWcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2xkVGFnczogb2xkVGFncyxcbiAgICAgICAgbmV3VGFnczogbmV3VGFnc1xuICAgIH07XG59O1xuXG52YXIgZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50QXR0cmlidXRlc0FzU3RyaW5nKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGtleSkge1xuICAgICAgICB2YXIgYXR0ciA9IHR5cGVvZiBhdHRyaWJ1dGVzW2tleV0gIT09IFwidW5kZWZpbmVkXCIgPyBrZXkgKyBcIj1cXFwiXCIgKyBhdHRyaWJ1dGVzW2tleV0gKyBcIlxcXCJcIiA6IFwiXCIgKyBrZXk7XG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIgKyBcIiBcIiArIGF0dHIgOiBhdHRyO1xuICAgIH0sIFwiXCIpO1xufTtcblxudmFyIGdlbmVyYXRlVGl0bGVBc1N0cmluZyA9IGZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVBc1N0cmluZyh0eXBlLCB0aXRsZSwgYXR0cmlidXRlcywgZW5jb2RlKSB7XG4gICAgdmFyIGF0dHJpYnV0ZVN0cmluZyA9IGdlbmVyYXRlRWxlbWVudEF0dHJpYnV0ZXNBc1N0cmluZyhhdHRyaWJ1dGVzKTtcbiAgICB2YXIgZmxhdHRlbmVkVGl0bGUgPSBmbGF0dGVuQXJyYXkodGl0bGUpO1xuICAgIHJldHVybiBhdHRyaWJ1dGVTdHJpbmcgPyBcIjxcIiArIHR5cGUgKyBcIiBcIiArIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSArIFwiPVxcXCJ0cnVlXFxcIiBcIiArIGF0dHJpYnV0ZVN0cmluZyArIFwiPlwiICsgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnMoZmxhdHRlbmVkVGl0bGUsIGVuY29kZSkgKyBcIjwvXCIgKyB0eXBlICsgXCI+XCIgOiBcIjxcIiArIHR5cGUgKyBcIiBcIiArIF9IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURSArIFwiPVxcXCJ0cnVlXFxcIj5cIiArIGVuY29kZVNwZWNpYWxDaGFyYWN0ZXJzKGZsYXR0ZW5lZFRpdGxlLCBlbmNvZGUpICsgXCI8L1wiICsgdHlwZSArIFwiPlwiO1xufTtcblxudmFyIGdlbmVyYXRlVGFnc0FzU3RyaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVUYWdzQXNTdHJpbmcodHlwZSwgdGFncywgZW5jb2RlKSB7XG4gICAgcmV0dXJuIHRhZ3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIHRhZykge1xuICAgICAgICB2YXIgYXR0cmlidXRlSHRtbCA9IE9iamVjdC5rZXlzKHRhZykuZmlsdGVyKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhKGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5JTk5FUl9IVE1MIHx8IGF0dHJpYnV0ZSA9PT0gX0hlbG1ldENvbnN0YW50cy5UQUdfUFJPUEVSVElFUy5DU1NfVEVYVCk7XG4gICAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoc3RyaW5nLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBhdHRyID0gdHlwZW9mIHRhZ1thdHRyaWJ1dGVdID09PSBcInVuZGVmaW5lZFwiID8gYXR0cmlidXRlIDogYXR0cmlidXRlICsgXCI9XFxcIlwiICsgZW5jb2RlU3BlY2lhbENoYXJhY3RlcnModGFnW2F0dHJpYnV0ZV0sIGVuY29kZSkgKyBcIlxcXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBzdHJpbmcgKyBcIiBcIiArIGF0dHIgOiBhdHRyO1xuICAgICAgICB9LCBcIlwiKTtcblxuICAgICAgICB2YXIgdGFnQ29udGVudCA9IHRhZy5pbm5lckhUTUwgfHwgdGFnLmNzc1RleHQgfHwgXCJcIjtcblxuICAgICAgICB2YXIgaXNTZWxmQ2xvc2luZyA9IF9IZWxtZXRDb25zdGFudHMuU0VMRl9DTE9TSU5HX1RBR1MuaW5kZXhPZih0eXBlKSA9PT0gLTE7XG5cbiAgICAgICAgcmV0dXJuIHN0ciArIFwiPFwiICsgdHlwZSArIFwiIFwiICsgX0hlbG1ldENvbnN0YW50cy5IRUxNRVRfQVRUUklCVVRFICsgXCI9XFxcInRydWVcXFwiIFwiICsgYXR0cmlidXRlSHRtbCArIChpc1NlbGZDbG9zaW5nID8gXCIvPlwiIDogXCI+XCIgKyB0YWdDb250ZW50ICsgXCI8L1wiICsgdHlwZSArIFwiPlwiKTtcbiAgICB9LCBcIlwiKTtcbn07XG5cbnZhciBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHMgPSBmdW5jdGlvbiBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHMoYXR0cmlidXRlcykge1xuICAgIHZhciBpbml0UHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICAgICAgb2JqW19IZWxtZXRDb25zdGFudHMuUkVBQ1RfVEFHX01BUFtrZXldIHx8IGtleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgaW5pdFByb3BzKTtcbn07XG5cbnZhciBjb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBjb252ZXJ0UmVhY3RQcm9wc3RvSHRtbEF0dHJpYnV0ZXMocHJvcHMpIHtcbiAgICB2YXIgaW5pdEF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gICAgICAgIG9ialtfSGVsbWV0Q29uc3RhbnRzLkhUTUxfVEFHX01BUFtrZXldIHx8IGtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sIGluaXRBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciBnZW5lcmF0ZVRpdGxlQXNSZWFjdENvbXBvbmVudCA9IGZ1bmN0aW9uIGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRpdGxlLCBhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIF9pbml0UHJvcHM7XG5cbiAgICAvLyBhc3NpZ25pbmcgaW50byBhbiBhcnJheSB0byBkZWZpbmUgdG9TdHJpbmcgZnVuY3Rpb24gb24gaXRcbiAgICB2YXIgaW5pdFByb3BzID0gKF9pbml0UHJvcHMgPSB7XG4gICAgICAgIGtleTogdGl0bGVcbiAgICB9LCBfaW5pdFByb3BzW19IZWxtZXRDb25zdGFudHMuSEVMTUVUX0FUVFJJQlVURV0gPSB0cnVlLCBfaW5pdFByb3BzKTtcbiAgICB2YXIgcHJvcHMgPSBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHMoYXR0cmlidXRlcywgaW5pdFByb3BzKTtcblxuICAgIHJldHVybiBbX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUsIHByb3BzLCB0aXRsZSldO1xufTtcblxudmFyIGdlbmVyYXRlVGFnc0FzUmVhY3RDb21wb25lbnQgPSBmdW5jdGlvbiBnZW5lcmF0ZVRhZ3NBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gdGFncy5tYXAoZnVuY3Rpb24gKHRhZywgaSkge1xuICAgICAgICB2YXIgX21hcHBlZFRhZztcblxuICAgICAgICB2YXIgbWFwcGVkVGFnID0gKF9tYXBwZWRUYWcgPSB7XG4gICAgICAgICAgICBrZXk6IGlcbiAgICAgICAgfSwgX21hcHBlZFRhZ1tfSGVsbWV0Q29uc3RhbnRzLkhFTE1FVF9BVFRSSUJVVEVdID0gdHJ1ZSwgX21hcHBlZFRhZyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGFnKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBtYXBwZWRBdHRyaWJ1dGUgPSBfSGVsbWV0Q29uc3RhbnRzLlJFQUNUX1RBR19NQVBbYXR0cmlidXRlXSB8fCBhdHRyaWJ1dGU7XG5cbiAgICAgICAgICAgIGlmIChtYXBwZWRBdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuSU5ORVJfSFRNTCB8fCBtYXBwZWRBdHRyaWJ1dGUgPT09IF9IZWxtZXRDb25zdGFudHMuVEFHX1BST1BFUlRJRVMuQ1NTX1RFWFQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRhZy5pbm5lckhUTUwgfHwgdGFnLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgbWFwcGVkVGFnLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0geyBfX2h0bWw6IGNvbnRlbnQgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkVGFnW21hcHBlZEF0dHJpYnV0ZV0gPSB0YWdbYXR0cmlidXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHR5cGUsIG1hcHBlZFRhZyk7XG4gICAgfSk7XG59O1xuXG52YXIgZ2V0TWV0aG9kc0ZvclRhZyA9IGZ1bmN0aW9uIGdldE1ldGhvZHNGb3JUYWcodHlwZSwgdGFncywgZW5jb2RlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvQ29tcG9uZW50OiBmdW5jdGlvbiB0b0NvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGl0bGVBc1JlYWN0Q29tcG9uZW50KHR5cGUsIHRhZ3MudGl0bGUsIHRhZ3MudGl0bGVBdHRyaWJ1dGVzLCBlbmNvZGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUaXRsZUFzU3RyaW5nKHR5cGUsIHRhZ3MudGl0bGUsIHRhZ3MudGl0bGVBdHRyaWJ1dGVzLCBlbmNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgX0hlbG1ldENvbnN0YW50cy5BVFRSSUJVVEVfTkFNRVMuQk9EWTpcbiAgICAgICAgY2FzZSBfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5IVE1MOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b0NvbXBvbmVudDogZnVuY3Rpb24gdG9Db21wb25lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0RWxlbWVudEF0dHJpYnV0ZXN0b1JlYWN0UHJvcHModGFncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZUVsZW1lbnRBdHRyaWJ1dGVzQXNTdHJpbmcodGFncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9Db21wb25lbnQ6IGZ1bmN0aW9uIHRvQ29tcG9uZW50KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUYWdzQXNSZWFjdENvbXBvbmVudCh0eXBlLCB0YWdzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVGFnc0FzU3RyaW5nKHR5cGUsIHRhZ3MsIGVuY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuXG52YXIgbWFwU3RhdGVPblNlcnZlciA9IGZ1bmN0aW9uIG1hcFN0YXRlT25TZXJ2ZXIoX3JlZikge1xuICAgIHZhciBiYXNlVGFnID0gX3JlZi5iYXNlVGFnLFxuICAgICAgICBib2R5QXR0cmlidXRlcyA9IF9yZWYuYm9keUF0dHJpYnV0ZXMsXG4gICAgICAgIGVuY29kZSA9IF9yZWYuZW5jb2RlLFxuICAgICAgICBodG1sQXR0cmlidXRlcyA9IF9yZWYuaHRtbEF0dHJpYnV0ZXMsXG4gICAgICAgIGxpbmtUYWdzID0gX3JlZi5saW5rVGFncyxcbiAgICAgICAgbWV0YVRhZ3MgPSBfcmVmLm1ldGFUYWdzLFxuICAgICAgICBub3NjcmlwdFRhZ3MgPSBfcmVmLm5vc2NyaXB0VGFncyxcbiAgICAgICAgc2NyaXB0VGFncyA9IF9yZWYuc2NyaXB0VGFncyxcbiAgICAgICAgc3R5bGVUYWdzID0gX3JlZi5zdHlsZVRhZ3MsXG4gICAgICAgIF9yZWYkdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgICB0aXRsZSA9IF9yZWYkdGl0bGUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBfcmVmJHRpdGxlLFxuICAgICAgICB0aXRsZUF0dHJpYnV0ZXMgPSBfcmVmLnRpdGxlQXR0cmlidXRlcztcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLkJBU0UsIGJhc2VUYWcsIGVuY29kZSksXG4gICAgICAgIGJvZHlBdHRyaWJ1dGVzOiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuQVRUUklCVVRFX05BTUVTLkJPRFksIGJvZHlBdHRyaWJ1dGVzLCBlbmNvZGUpLFxuICAgICAgICBodG1sQXR0cmlidXRlczogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLkFUVFJJQlVURV9OQU1FUy5IVE1MLCBodG1sQXR0cmlidXRlcywgZW5jb2RlKSxcbiAgICAgICAgbGluazogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5MSU5LLCBsaW5rVGFncywgZW5jb2RlKSxcbiAgICAgICAgbWV0YTogZ2V0TWV0aG9kc0ZvclRhZyhfSGVsbWV0Q29uc3RhbnRzLlRBR19OQU1FUy5NRVRBLCBtZXRhVGFncywgZW5jb2RlKSxcbiAgICAgICAgbm9zY3JpcHQ6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuTk9TQ1JJUFQsIG5vc2NyaXB0VGFncywgZW5jb2RlKSxcbiAgICAgICAgc2NyaXB0OiBnZXRNZXRob2RzRm9yVGFnKF9IZWxtZXRDb25zdGFudHMuVEFHX05BTUVTLlNDUklQVCwgc2NyaXB0VGFncywgZW5jb2RlKSxcbiAgICAgICAgc3R5bGU6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuU1RZTEUsIHN0eWxlVGFncywgZW5jb2RlKSxcbiAgICAgICAgdGl0bGU6IGdldE1ldGhvZHNGb3JUYWcoX0hlbG1ldENvbnN0YW50cy5UQUdfTkFNRVMuVElUTEUsIHsgdGl0bGU6IHRpdGxlLCB0aXRsZUF0dHJpYnV0ZXM6IHRpdGxlQXR0cmlidXRlcyB9LCBlbmNvZGUpXG4gICAgfTtcbn07XG5cbmV4cG9ydHMuY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzID0gY29udmVydFJlYWN0UHJvcHN0b0h0bWxBdHRyaWJ1dGVzO1xuZXhwb3J0cy5oYW5kbGVDbGllbnRTdGF0ZUNoYW5nZSA9IGhhbmRsZUNsaWVudFN0YXRlQ2hhbmdlO1xuZXhwb3J0cy5tYXBTdGF0ZU9uU2VydmVyID0gbWFwU3RhdGVPblNlcnZlcjtcbmV4cG9ydHMucmVkdWNlUHJvcHNUb1N0YXRlID0gcmVkdWNlUHJvcHNUb1N0YXRlO1xuZXhwb3J0cy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5leHBvcnRzLndhcm4gPSB3YXJuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2goZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxuXHRcdGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
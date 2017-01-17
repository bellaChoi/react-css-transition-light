require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var ReactCssTransition = require('react-css-transition');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

    this.state = {
      isShow: true,
      state: ''
    };
  }

  _createClass(App, [{
    key: 'togglePopup',
    value: function togglePopup() {
      var obj = {};
      if (this.state.isShow) {
        obj = { 'isShow': false };
      } else {
        obj = { 'isShow': true };
      }

      this.setState(obj);
    }
  }, {
    key: 'onEnterTransitionStart',
    value: function onEnterTransitionStart() {
      this.setState({
        state: 'IN - start'
      });
    }
  }, {
    key: 'onEnterTransitionEnd',
    value: function onEnterTransitionEnd() {
      this.setState({
        state: 'IN - end'
      });
    }
  }, {
    key: 'onLeaveTransitionStart',
    value: function onLeaveTransitionStart() {
      this.setState({
        state: 'OUT - start'
      });
    }
  }, {
    key: 'onLeaveTransitionEnd',
    value: function onLeaveTransitionEnd() {
      this.setState({
        state: 'OUT - end'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      try {
        return React.createElement(
          'div',
          { className: 'example-container' },
          React.createElement(
            'p',
            null,
            this.state.state
          ),
          React.createElement(
            'div',
            { className: 'box-wrapper' },
            React.createElement(
              'button',
              { className: 'add', onClick: this.togglePopup.bind(this) },
              '+'
            ),
            React.createElement(
              ReactCssTransition,
              { className: 'example-box',
                visible: this.state.isShow,
                enterTimeout: 1000,
                leaveTimeout: 1000,
                onEnterTransitionStart: this.onEnterTransitionStart.bind(this),
                onEnterTransitionEnd: this.onEnterTransitionEnd.bind(this),
                onLeaveTransitionStart: this.onLeaveTransitionStart.bind(this),
                onLeaveTransitionEnd: this.onLeaveTransitionEnd.bind(this),
                options: { onClick: this.togglePopup.bind(this) } },
              'Click!'
            )
          )
        );
      } catch (err) {
        debugger;
      }
    }
  }]);

  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-css-transition":undefined,"react-dom":undefined}]},{},[1]);

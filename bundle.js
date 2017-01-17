require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-css-transition":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var propTypes = {
  visible: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  leaveTimeout: _react.PropTypes.number,
  enterTimeout: _react.PropTypes.number,
  onEnterTransitionStart: _react.PropTypes.func,
  onEnterTransitionEnd: _react.PropTypes.func,
  onLeaveTransitionStart: _react.PropTypes.func,
  onLeaveTransitionEnd: _react.PropTypes.func,
  options: _react.PropTypes.object
};

var defaultProps = {
  visible: true,
  enterTimeout: 500,
  leaveTimeout: 500
};

var Animation = (function (_React$Component) {
  _inherits(Animation, _React$Component);

  function Animation(props) {
    _classCallCheck(this, Animation);

    _get(Object.getPrototypeOf(Animation.prototype), 'constructor', this).call(this, props);

    this.state = {
      isShow: false,
      animationState: 'leave'
    };
  }

  _createClass(Animation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (Object.is(this.state, nextState) && Object.is(this.props, nextProps)) {
        return false;
      }
      return true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.visible && nextProps.visible) {
        this.enter();
      } else if (this.props.visible && !nextProps.visible) {
        this.leave();
      }
    }
  }, {
    key: 'enter',
    value: function enter() {
      var _this = this;

      if (this.state.animationState === 'leave' && this.leaveTimeout) {
        clearTimeout(this.leaveTimeout);
      }

      if (!this.state.isShow) {
        this.setState({
          isShow: true
        });
      }

      console.log('setState - show');
      setTimeout(function () {
        _this.props.onEnterTransitionStart && _this.props.onEnterTransitionStart();
        console.log('enter start');
        _this.setState({ animationState: 'enter' });

        _this.enterTimeout = setTimeout(function () {
          console.log('enter end');
          _this.props.onEnterTransitionEnd && _this.props.onEnterTransitionEnd();
          _this.setState({ animationState: 'active' });
        }, _this.props.enterTimeout);
      }, 100);
    }
  }, {
    key: 'leave',
    value: function leave() {
      if (this.state.animationState === 'enter' && this.enterTimeout) {
        clearTimeout(this.enterTimeout);
      }

      console.log('leave start');
      this.setState({
        animationState: 'leave'
      });

      this.props.onLeaveTransitionStart && this.props.onLeaveTransitionStart();
      this.leaveTimeout = setTimeout(this.onClose.bind(this), this.props.leaveTimeout);
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      if (this.state.animationState === 'leave') {
        console.log('leave end');
        this.setState({
          isShow: false
        });

        this.props.onLeaveTransitionEnd && this.props.onLeaveTransitionEnd();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      try {
        var style = this.state.isShow ? {} : { display: 'none' };
        var opts = this.props.options ? this.props.options : {};
        return _react2['default'].createElement(
          'div',
          _extends({ className: this.props.className + ' ' + (this.state.animationState || ''), style: style }, opts),
          this.props.children
        );
      } catch (err) {
        debugger;
      }
    }
  }]);

  return Animation;
})(_react2['default'].Component);

Animation.propTypes = propTypes;
Animation.defaultProps = defaultProps;

exports['default'] = Animation;
module.exports = exports['default'];

},{"react":undefined}]},{},[]);

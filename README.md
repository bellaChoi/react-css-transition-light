# react-css-transition-light

[![version](https://img.shields.io/npm/v/react-css-transition-light.svg) ![download](https://img.shields.io/npm/dm/react-css-transition-light.svg)](https://www.npmjs.com/package/react-css-transition-light)

react-css-transition is an easy way to perform CSS transitions and animations when a React Componenet enters or leaves the DOM.

## Demo & Examples

Live demo: [BellaChoi.github.io/react-css-transition-light](http://BellaChoi.github.io/react-css-transition-light/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-css-transition-light is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-css-transition-light.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-css-transition-light --save
```


## Usage


```
var ReactCssTransition = require('react-css-transition-light');

<ReactCssTransition className='example-box'
  visible={this.state.isShow}
  enterTimeout={1000}
  leaveTimeout={1000}
  onEnterTransitionStart={this.onEnterTransitionStart.bind(this)}
  onEnterTransitionEnd={this.onEnterTransitionEnd.bind(this)}
  onLeaveTransitionStart={this.onLeaveTransitionStart.bind(this)}
  onLeaveTransitionEnd={this.onLeaveTransitionEnd.bind(this)}
  options={{ onClick: this.togglePopup.bind(this) }} > Click! </ReactCssTransition>
```

### Properties

|    Property    | Type |          Description          | Default |
| -------------  | ---- |          -----------          | ------- |
| visible | bool | Initialize state | True |
| className | string | custom class name |  |
| enterTimeout | number | the number of milliseconds | 500 |
| leaveTimeout | number | the number of milliseconds | 500 |
| options | object | other props |  |
| onEnterTransitionStart | function | called at the start of 'enter transition' |  |
| onEnterTransitionEnd | function | called at the end of 'enter transition' |  |
| onLeaveTransitionStart | function | called at the start of 'leave transition' |  |
| onLeaveTransitionEnd | function | called at the end of 'leave transition' |  |

### Notes

In css, className according to transition state is defined as follows.
when className is 'example',

```
.example-box {
  ...
  -webkit-transition: opacity 1000ms ease;
  -moz-transition: opacity 1000ms ease;
  -ms-transition: opacity 1000ms ease;
  -o-transition: opacity 1000ms ease;
  transition: opacity 1000ms ease;
}

.example-box.enter {
  opacity: 1;
}
.example-box.leave {
  opacity: 0;
}

```


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

Copyright (c) 2017 bellaChoi.


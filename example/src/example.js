var React = require('react');
var ReactDOM = require('react-dom');
var ReactCssTransition = require('react-css-transition');

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isShow: true,
      state: ''
    };
  }

  togglePopup () {
    let obj = {};
    if (this.state.isShow) {
      obj = { 'isShow': false };
    } else {
      obj = { 'isShow': true };
    }

    this.setState(obj);
  }

  onInTransitionStart () {
    this.setState({
      state: 'IN - start'
    });
  }

  onInTransitionEnd () {
    this.setState({
      state: 'IN - end'
    });
  }

  onOutTransitionStart () {
    this.setState({
      state: 'OUT - start'
    });
  }

  onOutTransitionEnd () {
    this.setState({
      state: 'OUT - end'
    });
  }

  render () {
    try {
      return (
        <div className='example-container'>
          <p>{this.state.state}</p>
          <div className='box-wrapper'>
            <button className="add" onClick={this.togglePopup.bind(this)}>+</button>
            <ReactCssTransition className='example-box'
              visible={this.state.isShow}
              inDuration={1000}
              outDuration={1000}
              onInTransitionStart={this.onInTransitionStart.bind(this)}
              onInTransitionEnd={this.onInTransitionEnd.bind(this)}
              onOutTransitionStart={this.onOutTransitionStart.bind(this)}
              onOutTransitionEnd={this.onOutTransitionEnd.bind(this)}
              options={{ onClick: this.togglePopup.bind(this) }} >
              Click!
            </ReactCssTransition>
          </div>
        </div>
      );
    } catch (err) {
      debugger;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

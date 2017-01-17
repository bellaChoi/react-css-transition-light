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

  onEnterTransitionStart () {
    this.setState({
      state: 'IN - start'
    });
  }

  onEnterTransitionEnd () {
    this.setState({
      state: 'IN - end'
    });
  }

  onLeaveTransitionStart () {
    this.setState({
      state: 'OUT - start'
    });
  }

  onLeaveTransitionEnd () {
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
              enterTimeout={1000}
              leaveTimeout={1000}
              onEnterTransitionStart={this.onEnterTransitionStart.bind(this)}
              onEnterTransitionEnd={this.onEnterTransitionEnd.bind(this)}
              onLeaveTransitionStart={this.onLeaveTransitionStart.bind(this)}
              onLeaveTransitionEnd={this.onLeaveTransitionEnd.bind(this)}
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

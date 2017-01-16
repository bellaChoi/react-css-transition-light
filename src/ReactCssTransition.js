import React, { PropTypes } from 'react'

const propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  outDuration: PropTypes.number,
  inDuration: PropTypes.number,
  onInTransitionStart: PropTypes.func,
  onInTransitionEnd: PropTypes.func,
  onOutTransitionStart: PropTypes.func,
  onOutTransitionEnd: PropTypes.func
}

const defaultProps = {
  visible: true,
  inDuration: 500,
  outDuration: 500,
}

class Animation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isShow: false,
      animationState: 'leave'
    }
  }

  componentDidMount () {
    if (this.props.visible) {
      this.enter()
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (Object.is(this.state, nextState) && Object.is(this.props, nextProps)) {
      return false
    }
    return true
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this.enter()
    } else if (this.props.visible && !nextProps.visible) {
      this.leave()
    }
  }

  enter () {
    if (this.state.animationState === 'leave' && this.leaveTimeout) {
      clearTimeout(this.leaveTimeout)
    }

    if (!this.state.isShow) {
      this.setState({
        isShow: true
      })
    }

    console.log('setState - show')
    setTimeout(() => {
      this.props.onInTransitionStart && this.props.onInTransitionStart()
      console.log('enter start')
      this.setState({ animationState: 'enter' })

      this.enterTimeout = setTimeout(() => {
        console.log('enter end')
        this.props.onInTransitionEnd && this.props.onInTransitionEnd()
        this.setState({ animationState: 'active' })
      }, this.props.inDuration)
    }, 100)
  }

  leave () {
    if (this.state.animationState === 'enter' && this.enterTimeout) {
      clearTimeout(this.enterTimeout)
    }

    console.log('leave start')
    this.setState({
      animationState: 'leave'
    })

    this.props.onOutTransitionStart && this.props.onOutTransitionStart()
    this.leaveTimeout = setTimeout(this.onClose.bind(this), this.props.outDuration)
  }

  onClose () {
    if (this.state.animationState === 'leave') {
      console.log('leave end')
      this.setState({
        isShow: false
      })

      this.props.onOutTransitionEnd && this.props.onOutTransitionEnd()
    }

  }

  render () {
    try {
      let style = this.state.isShow ? {} : { display: 'none' }
      let opts = this.props.options ? this.props.options : {}
      return (
        <div className={`${this.props.className} ${this.state.animationState || ''}`} style={style} {...opts}>
          { this.props.children }
        </div>
      )
    } catch (err) {
      debugger
    }
  }
}

Animation.propTypes = propTypes
Animation.defaultProps = defaultProps

export default Animation
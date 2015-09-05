var React = require('react');

var FancyInput = React.createClass({
  getInitialState() {
    return {
      focus: false
    };
  },
  render() {
    return (
      <div className={'fancy-input' + (this.state.focus ? ' focus': '')}>
        {this.props.leftContent ? <div className="left-content">{this.props.leftContent}</div> : null}
        {this.props.rightContent ? <div className="right-content">{this.props.rightContent}</div> : null}
        <div className='middle-content'>
          <input type={this.props.type} onFocus={this._focus} onBlur={this._blur}/>
        </div>
      </div>
    );
  },
  _focus() {
    this.setState({
      focus: true
    });
  },
  _blur() {
    this.setState({
      focus: false
    });
  }
});

module.exports = FancyInput;

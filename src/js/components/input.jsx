var React = require('react');

var Input = React.createClass({
  getInitialState() {
    return {
      value: this.props.value,
      focus: false
    };
  },
  willRecieveProps(nextProps) {
    this.setState({
      value: this.props.value
    });
  },
  render() {
    return <input value={!this.state.value && !this.state.focus ? this.props.placeholder : this.state.value} placeholder={this.props.placeholder} onFocus={this._handleFocus} onBlur={this._handleBlur} className={this.props.className} onChange={this._handleChange}/>
  },
  _handleFocus() {
    this.setState({
      focus: true
    })
  },
  _handleBlur() {
    this.setState({
      focus: false
    });
  },
  _handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }else {
      this.setState({
        value: event.target.value
      });
    }
  }
});

module.exports = Input;

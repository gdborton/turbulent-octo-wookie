var React = require('react');
var postActions = require('../actions/posts');

var OnYourMind = React.createClass({
  getInitialState() {
    return {
      focus: false,
      value: ''
    };
  },
  render() {
    return (
      <div className="on-your-mind">
        <div>
          <input ref="input" onChange={this._handleChange} className="ghost-input" onFocus={this._handleFocus} onBlur={this._handleBlur} value={!this.state.value && !this.state.focus ? 'What’s on your mind?' : this.state.value} onKeyPress={this._handleKeyPress}/>
        </div>
        <span className="add-photo" onClick={this._addPhoto}><span className="wide-icon photo-icon-light"></span> Add Photo</span>
        <span className="add-video"><span className="wide-icon video-icon-light"></span> Add Video</span>
      </div>
    );
  },
  _handleChange(event) {
    this.setState({
      value: event.target.value
    });
  },
  _handleFocus() {
    this.setState({
      focus: true
    });
  },
  _handleBlur() {
    this.setState({
      focus: false
    });
  },
  _handleKeyPress(event) {
    if (event.which === 13 && event.target.value) {
      postActions.addPost(event.target.value);
      this.setState({
        value: ''
      });
    }
  },
  _addPhoto(){
    this.setState({
      value: this.state.value  + ' http://instagram.com/p/fake '
    });
  }
});

module.exports = OnYourMind;

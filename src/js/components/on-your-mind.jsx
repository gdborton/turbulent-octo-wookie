var React = require('react');
var postActions = require('../actions/posts');

var OnYourMind = React.createClass({
  render() {
    return (
      <div className="on-your-mind">
        <div>
          <input className="ghost-input" placeholder="What's on your mind?" onKeyPress={this._handleKeyPress}/>
        </div>
        <span className="add-photo"><span className="wide-icon photo-icon-light"></span> Add Photo</span>
        <span className="add-video"><span className="wide-icon video-icon-light"></span> Add Video</span>
      </div>
    );
  },
  _handleKeyPress(event) {
    if (event.which === 13 && event.target.value) {
      postActions.addPost(event.target.value);
      event.target.value = '';
    }
  }
});

module.exports = OnYourMind;

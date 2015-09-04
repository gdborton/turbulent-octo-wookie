var React = require('react');

var OnYourMind = React.createClass({
  render() {
    return (
      <div className="on-your-mind">
        <div>
          <input className="ghost-input" placeholder="What's on your mind?" />
        </div>
        <span className="add-photo"><span className="wide-icon photo-icon-light"></span> Add Photo</span>
        <span className="add-video"><span className="wide-icon video-icon-light"></span> Add Video</span>
      </div>
    );
  }
});

module.exports = OnYourMind;

var React = require('react');

var Reply = React.createClass({
  render() {
    return (
      <div className="reply">
        <input placeholder="Reply..." />
      </div>
    )
  }
});

module.exports = Reply;

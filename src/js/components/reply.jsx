var React = require('react');
var Input = require('./input');

var Reply = React.createClass({
  render() {
    return (
      <div className="reply">
        <Input placeholder="Reply..." />
      </div>
    )
  }
});

module.exports = Reply;

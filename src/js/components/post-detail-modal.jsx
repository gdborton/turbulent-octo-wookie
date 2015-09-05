var React = require('react');
var Modal = require('./modal');
var PostContent = require('./post-content');
var Reply = require('./reply');

var PostDetailModal = React.createClass({
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="post-detail-modal">
          <img src={'http://lorempixel.com/975/580?' + this.props.post.id} />
          <PostContent post={this.props.post}/>
          <Reply/>
        </div>
      </Modal>
    );
  }
});

module.exports = PostDetailModal;

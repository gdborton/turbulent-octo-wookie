var React = require('react');
var Modal = require('./modal');
var postActions = require('../actions/posts');

var NewMessageModal = React.createClass({
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='new-message-container'>
          <div>Create new message</div>
          <textarea ref="input" rows={3}></textarea>
          <div>
            Add Photo
            Add Video
            <button onClick={this._handleClickPost}>Post</button>
          </div>
        </div>
      </Modal>
    );
  },
  _handleClickPost() {
    var node = this.refs.input.getDOMNode();
    if (node.value) {
      postActions.addPost(node.value);
      this.props.onClose();
    }
  }
});

module.exports = NewMessageModal;

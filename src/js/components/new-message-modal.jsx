var React = require('react');
var Modal = require('./modal');
var postActions = require('../actions/posts');

var NewMessageModal = React.createClass({
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='new-message-container'>
          <div className="new-message-container-header">Create new message</div>
          <textarea ref="input" rows={4}></textarea>
          <div>
            <span className="add-photo dark" onClick={this._addPhoto}><span className="wide-icon photo-icon-dark"></span> Add Photo</span>
            <span className="add-video dark"><span className="wide-icon video-icon-dark"></span> Add Video</span>
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
  },
  _addPhoto() {
    var node = this.refs.input.getDOMNode();
    node.value = node.value + ' http://instagram.com/p/fake ';
    node.focus();
  }
});

module.exports = NewMessageModal;

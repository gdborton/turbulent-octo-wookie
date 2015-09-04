var React = require('react');
var Modal = require('./modal');

var NewMessageModal = React.createClass({
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='new-message-container'>
          <div>Create new message</div>
          <textarea rows={3}></textarea>
          <div>
            Add Photo
            Add Video
            <button onClick={this.props.onClose}>Post</button>
          </div>
        </div>
      </Modal>
    );
  }
});

module.exports = NewMessageModal;

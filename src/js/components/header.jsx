var React = require('react');
var NewMessageModal = require('./new-message-modal');

var Header = React.createClass({
  getInitialState() {
    return {
      showingNewMessageModal: false
    };
  },

  render() {
    return (
      <div className="header">
        <img src="/img/logo.png"/>
        <div className="header-contents">
          <img className="new-message" src="/img/new-message.png" alt="New Message" onClick={this._showNewMessageModal}/>
        </div>
        {this.state.showingNewMessageModal ? <NewMessageModal onClose={this._closeNewMessageModal}/> : null }
      </div>
    );
  },

  _showNewMessageModal() {
    this.setState({
      showingNewMessageModal: true
    });
  },

  _closeNewMessageModal() {
    this.setState({
      showingNewMessageModal: false
    });
  }
});

module.exports = Header;

var React = require('react');
var NewMessageModal = require('./new-message-modal');
var FancyInput = require('./fancy-input');
var ProfileMenu = require('./profile-menu');

var Header = React.createClass({
  getInitialState() {
    return {
      showingNewMessageModal: false
    };
  },

  render() {
    return (
      <div className="header">
        <a href="#/"><img src="/img/logo.png"/></a>
        <div className="header-contents">
          <img className="new-message" src="/img/new-message.png" alt="New Message" onClick={this._showNewMessageModal}/>
          <FancyInput rightContent={<span className="search-icon"/>}/>
          <ProfileMenu />
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

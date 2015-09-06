var React = require('react')

var ProfileMenu = React.createClass({
  getInitialState() {
    return {
      open: false
    };
  },
  render() {
    return (
      <div className={'profile-menu' + (this.state.open ? ' open' : '')} onClick={this.toggleOpen}>
        <div className="profile-picture x-small">
          <img src="http://lorempixel.com/85/85/people/?author=Me"/>
        </div>
        <div className="arrow-down"></div>
        <div className="backdrop" onClick={this.toggleOpen}/> {/* TODO - this isn't great, interferes with user's first click... better to listen to document.body and check children. */}
        <ul className="profile-menu-options">
          <li><a href="#/profile">Profile</a></li>
          <li><a href="#/followers">Followers</a></li>
          <li><a href="#/following">Following</a></li>
          <li><a href="#/settings">Settings</a></li>
        </ul>
      </div>
    );
  },
  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }
});

module.exports = ProfileMenu;

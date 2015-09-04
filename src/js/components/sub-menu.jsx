var React = require('react');

var SubMenu = React.createClass({
  propTypes: {
    tabs: React.PropTypes.arrayOf({
      title: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
      isActive: React.PropTypes.bool
    }).isRequired,
    buttons: React.PropTypes.arrayOf({
      class: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired
    }),
    onTabClick: React.PropTypes.func.isRequired,
    onButtonClick: React.PropTypes.func.isRequired
  },

  render() {
    var tabs = this.props.tabs.map((tab, index) => {
      return <div className={'tab' + (tab.isActive ? ' active' : '')} key={index} onClick={this._handleTabClick.bind(this, tab)}>{tab.title}</div>;
    });

    return (
      <div className={'sub-menu'}>
        {tabs}
      </div>
    );
  },
  _handleTabClick(tab) {
    this.props.onTabClick(tab.value);
  }
});

module.exports = SubMenu;

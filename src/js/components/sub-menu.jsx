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
    var tabs = this.props.tabs.map(function(tab, index) {
      return <div className={'tab' + (tab.isActive ? ' active' : '')} key={index}>{tab.title}</div>;
    });

    return (
      <div className={'sub-menu'}>
        {tabs}
      </div>
    );
  }
});

module.exports = SubMenu;

var React = require('react');

var SubMenu = React.createClass({
  propTypes: {
    tabs: React.PropTypes.arrayOf({
      title: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired,
      isActive: React.PropTypes.bool
    }).isRequired,
    buttons: React.PropTypes.arrayOf({
      classNames: React.PropTypes.string.isRequired,
      value: React.PropTypes.string.isRequired
    }),
    onTabClick: React.PropTypes.func.isRequired,
    onButtonClick: React.PropTypes.func.isRequired
  },

  render() {
    var tabs = this.props.tabs.map((tab, index) => {
      return (
        <div className={'tab' + (tab.isActive ? ' active' : '')} key={index} onClick={this._handleTabClick.bind(this, tab)}>
          <div className="tab-title">
            {tab.title}
          </div>
        </div>
      );
    });

    var buttons = null;
    if (this.props.buttons) {
      buttons = this.props.buttons.map((button, index) => {
        return <span className={button.classNames} key={index} onClick={this._handleViewClick.bind(this, button)} />;
      });
    }

    return (
      <div className={'sub-menu'}>
        {tabs}
        <div className="buttons pull-right">
          {buttons}
        </div>
      </div>
    );
  },
  _handleTabClick(tab) {
    this.props.onTabClick(tab.value);
  },
  _handleViewClick(button) {
    this.props.onButtonClick(button.value);
  }
});

module.exports = SubMenu;

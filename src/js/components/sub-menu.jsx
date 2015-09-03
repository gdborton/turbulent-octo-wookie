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
    return (
      <div>
        {this.props.textItems}
      </div>
    );
  }
});

module.exports = SubMenu;

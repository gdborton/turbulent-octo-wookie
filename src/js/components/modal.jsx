var React = require('react');

var Modal = React.createClass({
  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal-contents">
          {this.props.children}
        </div>
      </div>
    );
  }
});
var modalNode = document.querySelector('.modal-node');
var appContainer = document.querySelector('body > .container');

var MockModal = React.createClass({
  componentWillMount() {
    appContainer.className = appContainer.className + ' blur';
    React.render(<Modal>{this.props.children}</Modal>, modalNode);
  },
  componentWillUnmount() {
    appContainer.className = appContainer.className.replace(/blur/, '');
    modalNode.innerHTML = '';
  },
  render() {
    return <div></div>
  }
});

module.exports = MockModal;

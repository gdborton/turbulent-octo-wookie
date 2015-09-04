var React = require('react');

var Modal = React.createClass({
  render() {
    return (
      <div className="modal-backdrop" onClick={this._handleBackdropClick}>
        <div className="modal-contents">
          {this.props.children}
        </div>
      </div>
    );
  },
  _handleBackdropClick(event) {
    if(event.target === event.currentTarget) {
      this.props.onClose();
    }
  }
});
var modalNode = document.querySelector('.modal-node');
var appContainer = document.querySelector('body > .container');

var MockModal = React.createClass({
  componentWillMount() {
    appContainer.className = appContainer.className + ' blur';
    React.render(<Modal onClose={this.props.onClose}>{this.props.children}</Modal>, modalNode);
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

var _posts = require('../mockdata/posts');

var EventEmitter = require('events').EventEmitter;
var _assign = require('object-assign');
var eventConstants = require('../constants/events');
var appDispatcher = require('../dispatcher/dispatcher');

var store = _assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.addListener(eventConstants.CHANGE, callback);
  },

  removeChangeListener() {
    this.removeListener(eventConstants.CHANGE, callback);
  },
  getPosts() {
    return _posts;
  }
});

appDispatcher.register(payload => {
  var action = payload.action;
  switch (action.actionType) {
    case eventConstants.ADD_POST:
      _posts.unshift({
        id: _posts.length + 1,
        author: 'Me',
        content: action.data,
        type: 'post'
      });
      store.emit(eventConstants.CHANGE);
      break;
    default:
      return true;
  }
});

module.exports = store;

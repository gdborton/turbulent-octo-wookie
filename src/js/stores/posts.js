var _posts = require('../mockdata/posts');

var EventEmitter = require('events').EventEmitter;
var _assign = require('object-assign');
var eventConstants = require('../constants/events');
var appDispatcher = require('../dispatcher/dispatcher');

var store = _assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.addListener(eventConstants.CHANGE, callback);
  },

  removeChangeListener(callback) {
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
        type: 'post',
        hasPhoto: action.data.indexOf('instagram.com') !== -1 ? true : false // This isn't great, but it makes for a better fake experience.
      });
      store.emit(eventConstants.CHANGE);
      break;
    default:
      return true;
  }
});

module.exports = store;

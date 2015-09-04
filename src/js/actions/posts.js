var appDispatcher = require('../dispatcher/dispatcher');
var events = require('../constants/events');

var actions = {
  addPost(content) {
    appDispatcher.handleAction({
      actionType: events.ADD_POST,
      data: content
    });
  }
};

module.exports = actions;

// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    this.username = ' ';
    this.friends = [];
    MessagesView.$chats.on('click', this.handleClick(event));
  },

  render: function() {
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message) {
    Messages._data.push(message);

    var text = $('<div class=\'text\'></div>').text(message.username + ': ' + message.text);
    MessagesView.$chats.append(text);


  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus();
  }
};
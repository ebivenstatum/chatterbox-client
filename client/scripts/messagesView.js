// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done when this view loads.

    this.username = '';
    this.friends = [];
    MessagesView.$chats.on('click', function(event) {MessagesView.handleClick(event.target.id)});
  },

  render: function(message) {
    // TODO: Render _all_ the messages.
    RoomsView.renderRoom(message.roomname);
      if (message.text && message.text[0] === '<') {
        message.text = message.text.slice(1);
      }
      if (message.username && message.username[0] === '<') {
        message.username = message.username.slice(1);
      }
      if (message.roomname && message.roomname[0] === '<') {
        message.roomname = message.roomname.slice(1);
      }

      if (message.username && message.text && message.roomname) {

        var $username = $(`<h3 class="username" id=${message.username}></h3>`).text(message.username);
        var $text =  $(`<p class="text"></p>`).text(message.text);
    if (Friends.checkFriend(message.username)) {
      $username.css({'background-color': 'pink'});
    }
    $text.appendTo($username);
    return $username;

      }

  },

  renderMessage: function(message) {
    Messages.allMessages.push(message);
    var $message = MessagesView.render(message);
    MessagesView.$chats.prepend($message);


  },

  handleClick: function(username) {
    // TODO: handle a user clicking on a message (this should add the sender to the user's friend list).
    Friends.toggleStatus(username);
  }
};
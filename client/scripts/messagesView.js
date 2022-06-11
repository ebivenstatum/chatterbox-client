// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done when this view loads.
    this.username = '';
    this.friends = [];
    MessagesView.$chats.on('click', function (event) {MessagesView.handleClick(event.target.id)});
  },

  render: function (message) {
    // TODO: Render _all_ the messages.
    // if Rooms.getRoom() === ''
    // get all the messages
    // renderMessages all messages
    // else get all messages
    // filter messages by roomname
    // render all messages
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
    var $username = $(`<h3 class="username" id=${message.username}></h3>`).text(message.username);
    var $text = $(`<p class="text"></p>`).text(message.text);
    var $date = $(`<p class="createdat"></p>`).text(message.created_at);
    if (Friends.checkFriend(message.username)) {
      $username.css({ 'background-color': 'pink' });
    }
    $text.appendTo($username);
    $date.appendTo($username);
    return $username;
  },

  renderMessage: function (message) {
    if (!message.roomname) {
      message.roomname = 'lobby';
    }
    if (!(_.contains(Messages.allMessages, message))) {
      Messages.allMessages.push(message);
    }
    if (message.roomname === Rooms.currentRoom) {
      var $message = MessagesView.render(message);
      $message.appendTo(MessagesView.$chats);
    }
  },

  handleClick: function (username) {
    // TODO: handle a user clicking on a message (this should add the sender to the user's friend list).
    Friends.toggleStatus(username);
  }
};
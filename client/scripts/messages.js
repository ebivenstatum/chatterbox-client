// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},
  allMessages: [],
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  getMessagesByRoom: function (roomname) {

    var roomMessages = _.filter(allMessages, function (message) {
      return message.roomname === roomname;
    });
    _.each(roomMessages, function (message) {
      MessagesView.renderMessage(message);
    })
  },

  getAllMessages: function () {
    return Messages.AllMessages;
  },

  deleteMessage: function (message) {
    message = {};
    return message;
  },
  /*sortMessages: function(){
   Messages.allMessages.sort(function(a,b) {
     var keyA = new Date(a.created_at), keyB = new Date(b.updated_at);
     if (keyA < keyB) return -1;
     if (keyA > keyB) return 1;
     return 0;
   });
  }*/




};
// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  currentRoom: '',
  roomsList: [],
  add: function(roomname) {
    Rooms.roomsList.push(roomname);
    Rooms.setRoom(roomname);
    RoomsView.renderRoom(roomname);
    RoomsView.$select.append(`<option>${roomname}</option>`);
  },
  setRoom: function(roomname){
    Rooms.currentRoom = roomname;

  },
  getRoom: function(){
    return Rooms.currentRoom;
  },
  getAllRooms: function() {
    return Rooms.roomsList;
  }

  /*showMessages: function() {
    MessagesView.$chats.html('');
    var roomMessages = _.filter(array of all messages, function(message) {
      return message.roomname === currentRoom;
    });

    _.each(roomMessage, function(message) {
      MessagesView.renderMessage(message);

    })
  } */


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};
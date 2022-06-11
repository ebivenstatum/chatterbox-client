// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  currentRoom: '',
  roomsList: [],
  add: function (roomname) {
    if (!(_.contains(Rooms.roomsList, roomname))) {
      var $room = $(`<option id=${roomname}></option>`).val(roomname).text(roomname);
      $room.appendTo(RoomsView.$select);
      Rooms.roomsList.push(roomname);
      Rooms.setRoom(roomname);
    }

  },
  setRoom: function (roomname) {
    Rooms.currentRoom = roomname;
    //$('#chats div').empty();
    RoomsView.renderRoom(roomname);
  },
  getRoom: function () {
    return Rooms.currentRoom;
  },
  getAllRooms: function () {
    return Rooms.roomsList;
  }


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};
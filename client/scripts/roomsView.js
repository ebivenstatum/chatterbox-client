// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // TODO: Perform any work which needs to be done when this view loads.
    RoomsView.$select.on('click', function(event) {RoomsView.handleChange(event.target.id)});
    RoomsView.$button.on('click', function(event) {RoomsView.handleClick()});
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var $room = Rooms.getAllRooms();
    $room.forEach(roomname => RoomsView.renderRoom(roomname));
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $newRoom = $(`<div class="room" id=${roomname}></div>`).text(roomname);

    //var $roomMessage = $('<h2></h2>').text(roomname);
    //$roomMessage.appendTo($newRoom);
     MessagesView.$chats.prepend($newRoom);
    // RoomsView.$select.append($newRoom);
  },

  handleChange: function(roomname) {
    // TODO: Handle a user selecting a different room.
    Rooms.setRoom(roomname);
    RoomsView.renderRoom(roomname);
  },

  handleClick: function(/*event*/) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('Enter Room Name');
    Rooms.add(roomname);
    RoomsView.$select.val(roomname);
  }

};

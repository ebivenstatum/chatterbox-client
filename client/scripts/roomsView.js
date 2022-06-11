// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function () {
    // TODO: Perform any work which needs to be done when this view loads.
    RoomsView.$select.on('change', function (event) {
      RoomsView.handleChange(event); //event.target.id
    });
    RoomsView.$button.on('click', function (event) { RoomsView.handleClick() });
  },

  render: function () {
    // TODO: Render out the list of rooms.
    var $room = Rooms.getAllRooms();
    $room.forEach(roomname => RoomsView.renderRoom(roomname));
  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
    Rooms.add(roomname);
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
    MessagesView.$chats.empty();
    var roomname = prompt('Select Room');

    console.log(roomname);
    Rooms.setRoom(roomname);

    if (_.contains(Rooms.roomsList, roomname)) {
      var $newRoom = $(`<div class="room" id=${roomname}></div>`).text(roomname);
      MessagesView.$chats.prepend($newRoom);
      Messages.allMessages.forEach(message => MessagesView.render(message));

    }


   // Rooms.getRoom(RoomsView.$select.val(roomname))

  },

  handleClick: function (event/*event*/) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('Enter Room Name');
    Rooms.add(roomname);
    RoomsView.$select.val(roomname);
  }

};

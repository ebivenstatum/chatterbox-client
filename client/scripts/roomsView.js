// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('click', function(event) {RoomsView.handleChange()});
    RoomsView.$button.on('click', function(event) {RoomsView.handleClick()});
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var $room = Rooms.getRoom();
    _each($room, RoomsView.renderRoom(room));
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var $room = $(`<div class="room"></div>`).text(roomname); //.text(this.roomname);
    RoomsView.$select.append($room);
    //Rooms.showMessages(roomname);
    console.log(RoomsView);
  },

  handleChange: function() {
    // TODO: Handle a user selecting a different room.
   RoomsView.renderRoom(this.roomname);
  },

  handleClick: function(/*event*/) {
    // TODO: Handle the user clicking the "Add Room" button.
    //this.roomname =
    var roomname = prompt('Enter Room Name');
    Rooms.add(roomname);
  }

};

// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},
  friends: {},

  toggleStatus: function(friend) {
    //MAYBE CAN'T ADD ANONYMOUS AS FRIEND???

    if (!Friends.checkFriend(friend)) {

      Friends.addFriend(friend);

    } else {
      Friends.friends[friend].isFriend = false;
    }

    console.log(Friends.friends);

  },

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  addFriend: function(friend) {
    Friends.friends[friend] = true;
  },

  checkFriend: function(friend) {
    if (Friends.friends[friend] === true) {
      return true;
    } else {
      return false;
    }
  }

};
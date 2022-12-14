// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', function (event) {
      event.preventDefault();
      FormView.handleSubmit(event.target.id.message)
    });
  },

  handleSubmit: function (message) {
    // Stop the browser from submitting the form
    // TODO: Currently, this is all handleSubmit does. Make this function actually send a message to the Parse API.
    var newMessage = {};
    newMessage['username'] = App.username;
    newMessage['text'] = document.getElementById('message').value;
    newMessage['roomname'] = Rooms.currentRoom;
    Parse.create(newMessage);

    console.log('click!');
    document.getElementById('message').value = '';
    FormView.$form.text.innerHTML = "";
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
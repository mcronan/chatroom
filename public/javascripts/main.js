$(function(){
	// connect the socket.io server

	var socket = io.connect('http://localhost')
	// var socket = io()
		//define socket events
		
	socket.on('connect', function(message){
		console.log(message)
	})

	$('#submit').on('click', function() {

		var text = $('textarea').val()
		socket.emit('connect', {user: 'Client', message : text });
		$('#room').text(text);
		})

	
	 

		// attach events
});

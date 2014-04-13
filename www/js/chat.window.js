$(function() {

	// Add meta tag
	var viewportTag = '<meta name="viewport" content="width=device-width, initial-scale=1">';
	$('head').prepend(viewportTag);

	// Move chatroom title
	$( '#sidebar-content' ).prepend( $( '#sidebar-content .room-title' ) );

	console.log("js injected!");
});
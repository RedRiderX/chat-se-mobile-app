$(function() {

	// Add meta tag
	var viewportTag = '<meta name="viewport" content="width=device-width, initial-scale=1">';
	$('head').prepend(viewportTag);

	// Move chatroom title
	$( '#sidebar-content' ).prepend( $( '#room-title' ) );

	console.log('js injected!');

	// TODO: Remove this extremely hacky method
	// add event listener to open external links in a real browser
    $(document).on('click', 'a', function(event) {

    	var shouldOpenExternal = false;
    	var url = $(this).attr('href');
    	var urlIsRelative = false;

    	if ( $(this).is("[href^='/']") ) {

			urlIsRelative = true;    		
    	}

    	if ( !urlIsRelative ) {

			shouldOpenExternal = true;
    	}

		if ( shouldOpenExternal ) {

			event.preventDefault();
			window.open(url, '_system');
		}
	});
});
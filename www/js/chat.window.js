$(function() {

	var viewportTag = '<meta name="viewport" content="width=device-width, initial-scale=1">';
	$('head').prepend(viewportTag);
	console.log("js injected!");
});
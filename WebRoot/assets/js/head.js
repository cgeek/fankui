define(function(require, exports, module){
	var $ = require('jquery');
	require('plugins')($);

	//IE678 placeholder
	$('input[placeholder], textarea[placeholder]').placeholder() 
});

$(function () {

	$('#p_ost').click(function () {
		$('p:first').insertAfter('p:last');
	});

	$('#ost_p').click(function () {
		$('p:last').insertBefore('p:first');
	});
	
});
jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
$('#basic-modal .basic').click(function (e) {

$('#basic-modal-content').modal({overlayClose: true,
onOpen: function (dialog) {
	dialog.overlay.fadeIn('fast', function () {
		dialog.data.hide();
		dialog.container.fadeIn('fast', function () {
			dialog.data.show();			
					 
		});

	});

}});

		return false;

	});
		

	});

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
$('#basic-modal .basic2').click(function (e) {

$('#basic-modal-content2').modal({overlayClose: true,
onOpen: function (dialog) {
	dialog.overlay.fadeIn('fast', function () {
		dialog.data.hide();
		dialog.container.fadeIn('fast', function () {
			dialog.data.show();			
					 
		});

	});

}});

		return false;

	});
		

	});


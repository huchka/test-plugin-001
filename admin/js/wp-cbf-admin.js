(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	 $(function() {
	 	var frame,
	 	imgUploadButton = $('#upload_login_logo_button'),
	 	imgContainer = $('#upload_logo_preview'),
	 	imgIdInput = $('#upload_logo_id'),
	 	imgPreview = $('#upload_logo_preview'),
	 	imgDelButton = $('#wp_cbf-delete_logo_button'),
	 	// color picker inputs
	 	colorPickerInputs = $( '.wp-cbf-color-picker');

	 	// wordpress specific plugins - color picker and image upload
	 	$( '.wp-cbf-color-picker' ).wpColorPicker();

	 	// wp.media and Image
	 	imgUploadButton.on('click', function (event) {
	 		event.preventDefault();

	 		if (frame) {
	 			frame.open();
	 			return;
	 		}
	 		// create a new media frame
	 		frame = wp.media({
	 			title: 'Select or upload media for your login logo',
	 			button: {
	 				text: 'Use as my login page logo'
	 			},
	 			multiple: false,
	 		});
	 		frame.on('select', function () {
	 			var attachment = frame.state().get('selection').first().toJSON();
	 			imgPreview.find('img').attr('src', attachment.sizes.thumbnail.url);
	 			imgIdInput.val(attachment.id);
	 			imgPreview.removeClass('hidden');
	 		});
	 		frame.open();
	 	});
	 	imgDelButton.on('click', function (e) {
	 		e.preventDefault();
	 		imgIdInput.val('');
	 		imgPreview.find('img').attr('src', '');
	 		imgPreview.addClass('hidden');
	 	});
	 });
})( jQuery );

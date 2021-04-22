"use strict";

// Class definition
var KTModalNewCard3 = function () {
	var isubmitButton3;
	var validator3;
	var form3;
	
	// Init form inputs
	var initForm3 = function() {
		// Expiry month. For more info, plase visit the official plugin site: https://select2.org/
        $(form3.querySelector('[name="card_expiry_month"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validator3.revalidateField('card_expiry_month');
        });

		// Expiry year. For more info, plase visit the official plugin site: https://select2.org/
        $(form3.querySelector('[name="card_expiry_year"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validator3.revalidateField('card_expiry_year');
        });
	}

	// Handle form validation and submittion
	var handleFormcard3 = function() {
		// Stepper custom navigation

		// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		validator3 = FormValidation.formValidation(
			form3,
			{
				fields: {
					'card_name': {
						validators: {
							notEmpty: {
								message: 'Name on card is required'
							}
						}
					},
					'card_number': {
						validators: {
							notEmpty: {
								message: 'Card member is required'
							},
                            creditCard: {
                                message: 'Card number is not valid'
                            }
						}
					},
					'card_expiry_month': {
						validators: {
							notEmpty: {
								message: 'Month is required'
							}
						}
					},
					'card_expiry_year': {
						validators: {
							notEmpty: {
								message: 'Year is required'
							}
						}
					},
					'card_cvv': {
						validators: {
							notEmpty: {
								message: 'CVV is required'
							},
							digits: {
								message: 'CVV must contain only digits'
							},
							stringLength: {
								min: 3,
								max: 4,
								message: 'CVV must contain 3 to 4 digits only'
							}
						}
					}
				},
				
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap5({
						rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
					})
				}
			}
		);

		// Action buttons
		isubmitButton3.addEventListener('click', function (e) {
			// Prevent default button action
			e.preventDefault();

			// Validate form before submit
			if (validator3) {
				validator3.validate().then(function (status) {
					console.log('validated!');

					if (status == 'Valid') {
						// Show loading indication
						isubmitButton3.setAttribute('data-kt-indicator', 'on');

						// Disable button to avoid multiple click 
						isubmitButton3.disabled = true;

						// Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
						setTimeout(function() {
							// Remove loading indication
							isubmitButton3.removeAttribute('data-kt-indicator');

							// Enable button
							isubmitButton3.disabled = false;
							
							$("#loading").show();
							$(".payment-declain").hide();
							$(".processing-block").show();
							setTimeout(function() {
								$("#order-status").modal("show");
								$(".processing-block").show();
								$("#loading").hide();
                                setTimeout(function() {
                                    $(".processing-block").hide();
                                    $(".payment-success").show();
									setTimeout(function() {
										$(".payment-success").hide();
										$(".process-ok").show();
										setTimeout(function() {
											$(".process-ok").hide();
											$(".go-dash").show();
											setTimeout(function() {
												$("#order-status").modal("hide");
												$(".go-dash").hide();
												$(".processing-block").show();
												window.location.href = './'
											}, 2000);
										}, 2000);
									}, 2000);
                                }, 2000);
							}, 1000);

							//form.submit(); // Submit form
						}, 2000);   						
					} else {
						// Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/
						// Swal.fire({
						// 	text: "Sorry, looks like there are some errors detected, please try again.",
						// 	icon: "error",
						// 	buttonsStyling: false,
						// 	confirmButtonText: "Ok, got it!",
						// 	customClass: {
						// 		confirmButton: "btn btn-primary"
						// 	}
						// });
					}
				});
			}
		});
	}

	return {
		// Public functions
		init: function () {
			form3 = document.querySelector('#kt_modal_new_card_form');
			isubmitButton3 = document.getElementById('kt_modal_new_card_submit');
			initForm3();
			handleFormcard3();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTModalNewCard3.init();
});
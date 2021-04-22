"use strict";

// Class definition
var KTSignupGeneral2 = function() {
    // Elements
    var form2;
    var submitButton2;
    var validator2;

    // Handle form
    var handleForm2  = function(e) {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator2 = FormValidation.formValidation(
			form2,
			{
				fields: {
					'first-name2': {
						validators: {
							notEmpty: {
								message: 'First Name is required'
							}
						}
                    },
                    'last-name2': {
						validators: {
							notEmpty: {
								message: 'Last Name is required'
							}
						}
					},
                    'address2': {
						validators: {
							notEmpty: {
								message: 'Address is required'
							}
						}
					},
                    'country2': {
						validators: {
							notEmpty: {
								message: 'Country is required'
							}
						}
					},
                    'phone2': {
						validators: {
							notEmpty: {
								message: 'Phone no is required'
							}
						}
					}
				},
				plugins: {
					bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
				}
			}
		);

        // Handle form submit
        submitButton2.addEventListener('click', function (e) {
            e.preventDefault();

            validator2.validate().then(function(status) {
		        if (status == 'Valid') {
                    // Show loading indication
                    submitButton2.setAttribute('data-kt-indicator', 'on');

                    // Disable button to avoid multiple click 
                    submitButton2.disabled = true;

                    // Simulate ajax request
                    setTimeout(function() {
                        // Hide loading indication
                        submitButton2.removeAttribute('data-kt-indicator');

                        // Enable button
                        submitButton2.disabled = false;

                        $("#loading").show();
                        setTimeout(function() {
                            $("#kt_accordion_1_body_3").removeClass("show");
                            $("#kt_accordion_1_body_4").addClass("show");
                            $("#kt_accordion_1_header_3 button").addClass("collapsed");
                            $("#kt_accordion_1_header_4 button").removeClass("collapsed");
                            $("#card4").removeClass("remain");
                            $("#card3").addClass("done");
                            $("#nav4>a").addClass("active");
                            $("#nav3>a").removeClass("active");
                            $("#edit3").show();
                            $("#kt_modal_new_card_submit").removeAttr("disabled")
                            $("#loading").hide();
                        }, 1000);

                        // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                        //if (result.isConfirmed) { 
                            //form.reset();  // reset form                    
                            //form.submit();
                            
                        //}
                    }, 1500);   						
                } else {
                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    // Swal.fire({
                    //     text: "Sorry, looks like there are some errors detected, please try again.",
                    //     icon: "error",
                    //     buttonsStyling: false,
                    //     confirmButtonText: "Ok, got it!",
                    //     customClass: {
                    //         confirmButton: "btn btn-primary"
                    //     }
                    // });
                }
		    });
        });

    }

    // Public functions
    return {
        // Initialization
        init: function() {
            // Elements
            form2 = document.querySelector('#kt_sign_up_form2');
            submitButton2 = document.querySelector('#kt_sign_up_submit2');
            handleForm2 ();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSignupGeneral2.init();
});

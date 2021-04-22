"use strict";

// Class definition
var KTSignupGeneral = function() {
    // Elements
    var form;
    var submitButton;
    var validator;

    // Handle form
    var handleForm  = function(e) {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
			form,
			{
				fields: {
					'first-name': {
						validators: {
							notEmpty: {
								message: 'First Name is required'
							}
						}
                    },
                    'last-name': {
						validators: {
							notEmpty: {
								message: 'Last Name is required'
							}
						}
					},
                    'address': {
						validators: {
							notEmpty: {
								message: 'Address is required'
							}
						}
					},
                    'country': {
						validators: {
							notEmpty: {
								message: 'Country is required'
							}
						}
					},
                    'phone': {
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
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            validator.validate().then(function(status) {
		        if (status == 'Valid') {
                    // Show loading indication
                    submitButton.setAttribute('data-kt-indicator', 'on');

                    // Disable button to avoid multiple click 
                    submitButton.disabled = true;

                    // Simulate ajax request
                    setTimeout(function() {
                        // Hide loading indication
                        submitButton.removeAttribute('data-kt-indicator');

                        // Enable button
                        submitButton.disabled = false;

                        // if($("#group_id_2").attr("checked")) {
                        //     alert("11111")
                        // } else {
                        //     alert("2222")
                        // }

                        if(document.getElementById('group_id_3').checked) {
                            $("#loading").show();
							setTimeout(function() {
								$(".payment-declain").hide();
                                $(".processing-block").show();
								$("#order-status").modal("show");
								$("#loading").hide();
                                setTimeout(function() {
                                    $(".processing-block").hide();
                                    $(".payment-declain").show();
                                }, 2000);
							}, 1000);
                        } else {
                            $("#loading").show();
                            setTimeout(function() {
                                sameAsBilling()
                                $("#kt_accordion_1_body_2").removeClass("show");
                                $("#kt_accordion_1_body_3").addClass("show");
                                $("#kt_accordion_1_header_2 button").addClass("collapsed");
                                $("#kt_accordion_1_header_3 button").removeClass("collapsed");
                                $("#card3").removeClass("remain");
                                $("#card2").addClass("done");
                                $("#nav3>a").addClass("active");
                                $("#nav2>a").removeClass("active");
                                $("#edit2").show();
                                $("#loading").hide();
                            }, 1000);
                        }

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
            form = document.querySelector('#kt_sign_up_form');
            submitButton = document.querySelector('#kt_sign_up_submit');
            handleForm ();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSignupGeneral.init();
});

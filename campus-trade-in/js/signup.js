// form validation
$(document).ready(function() {
	$('#signupForm').formValidation({
		framework: 'bootstrap',
		icon: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			username: {
				validators: {
					notEmpty: {
						message: 'Please pick a username'
					},
					stringLength: {
						min: 6,
						max: 30,
						message: 'The username must be more than 6 and less than 30 characters long'
					}
				}
			},
			email: {
				validators: {
                    notEmpty: {
                        message: 'Please enter your email address'
                    }
				}
			},
			password: {
				validators: {
					notEmpty: {
						message: 'Password is required'
					},
					stringLength: {
						min: 8,
						max: 30,
						message: 'The password must be more than 6 and less than 30 character long'
					}
				}
			}
		}
	}).on('success.field.fv', function(e, data) {
		if(data.fv.getInvalidFields().length > 0) {
			data.fv.disableSubmitButtons(true);
		}
	});
})

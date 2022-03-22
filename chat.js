$(document).on('submit','#reg-form', function(ev) {
    ev.preventDefault();

    $.ajax ({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/v1/auth/users/',
        data: {
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            username:$('#login').val(),
            password:$('#password').val(),
            email:$('#mail').val()

        },
        success: function Redirect() {
            window.location.href = 'http://127.0.0.1:8000/deposit';



        },
        error: function(response) {
            //alert();
        }
    });

    });


$.validator.setDefaults({
    
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

    errorElement: 'span',
    errorClass: 'help-inline',

    errorPlacement: function(error, element) {
        if (element.prop('type') === 'radio') {
            //error.insertAfter(element.parent());
            //console.log('####### > EEEEEEEEEEERRRRRRRRRRRRRADIOOOOOO1: ', element);
            $( element )
                .closest( "form" )
                    .find( "label[for='" + element.attr( "name" ) + "']" )
                        .append( error );
        } else {
            //console.log('####### > EEEEEEEEEEERRRRRRRRRRRRRADIOOOOOO2: ', element);
            $( element )
                .closest( "form" )
                    .find( "label[for='" + element.attr( "id" ) + "']" )
                        .append( error );
        }
    },

    submitHandler: function(form) {
        form.submit();
    }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


$(document).ready(function() {

    //$('#submitAddNewComment').click(myFunction);

    $('.selectpicker').selectpicker();

    $("#addNewCommentViewFormID").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            city: "required",
            state: "required",
            candidate: "required"
        },
        messages: {
            firstName: "  ( required )",
            lastName: "  ( required )",
            city: "  ( required )",
            state: "  ( required )",
            candidate: "  ( required )"
        }
    });

    var frm = document.getElementById("addNewCommentViewFormID");

    $('.clrFavForm').click(function(event) {
        if ( frm != null ) {
            frm.reset();
            $("#state").val('').trigger('change');
            $(frm).find(".form-group").removeClass("has-error"); 
            $(frm).data('validator').resetForm(); 
        }
        if ( this.id == 'cancelFormBtn' || this.id == 'navbarBrandBtn') {
            window.location.href= '/';
        }
    });
});







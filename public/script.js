$(document).ready(function() {
    // Jalankan kode ini ketika form dengan id="login-form" disubmit
    $('#login-form').on('submit', function(event) {
        
        // 1. Mencegah form dari aksi default (reload halaman)
        event.preventDefault();

        const formData = $(this).serialize();

        
        $.ajax({
            type: 'POST',           
            url: '/home',           
            data: formData,         
        })
        .done(function(response) {
            document.open();
            document.write(response);
            document.close();
        })
        .fail(function(jqXHR) {
            alert(jqXHR.responseText); 
        });
    });
});
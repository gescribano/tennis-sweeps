
jQuery( document ).ready(function( $ ) {
  
  $('#mc-embedded-subscribe-form').ajaxChimp({
      callback: function( resp ){

        console.log( resp );

        if ( resp.result === 'success') {

        }

      }
  });

});


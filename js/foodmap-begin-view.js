$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function() {
    // Para que inicialize sin ningún contenido.
    $('#result').html('');
    $('#state').val('');
    // Obtener el valor del input search. 
    var searchField = $('#search').val();
    // console.log($(this).val());
    // Búsqueda 'case-insensitive' (no sensible a mayúsculas).
    var expression = new RegExp(searchField, 'i');
    // Accediendo a la data.
    $.getJSON('data.json', function(data) {
      $.each(data, function(key, value) {
        if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
          $('#result').append('<li class="list-group-item link-class"> ' + value.name + ' | <span class="text-muted">' + value.location + '</span></li>');
        }
      });   
    });
  });
  // Agregar sub cuadro de búsqueda.
  $('#result').on('click', 'li', function() {
    var clickText = $(this).text().split('|');
    $('#search').val($.trim(clickText[0]));
    $('#result').html('');
    $('#modal-container').html('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
    '<div class="modal-dialog">' + 
        '<div class="modal-content center-block form-style vh90">' +
            '<div class="modal-body">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<center>' +
                    '<a><img src="assets/images/googleMapsSweets.JPG" name="sweetLogoMap" class="img-circle sweet-img-logo"></a>' +
                    '<h3 class="media-heading" id="name">__name__</h3>' +
                    '<span><strong>Especialidades: </strong></span>' +
                        '<span class="label label-warning">Postres</span>' +
                        '<span class="label label-info">Empanadas</span>' + 
                        '<span class="label label-success">Café</span>' +
                        '<span class="label label-info">Infusiones</span>' +
                '</center>' +
                '<hr>' +
                '<center>' +
                    '<p class="text-left"><strong>Datos: </strong><br>' +
                    '<span id="__location__"></span>' +
                    '<span id="__phone__"></span>' + 
                    '</p>' + 
                    '<br>' +
                '</center>' +
            '</div>' + 
            '<div class="modal-footer">' +
                '<center>' +
                    '<button type="button" class="btn btn-default" data-dismiss="modal">OK</button>' +
                '</center>' +
            '</div>' + 
        '</div>' + 
    '</div>' + 
'</div>' ).show();
  });

}); // END
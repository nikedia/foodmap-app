$(document).ready(function() {
  function initialize() {
    var myLatlng = new google.maps.LatLng(-12.1241765, -77.0281543); // coordenadas de ubicación
    var mapOptions = {
      zoom: 15, // zoom del mapa
      center: myLatlng, // centra  mapa
      scrollwheel: false,
      draggable: true, // esta opción es la manito que aparece y es usado para desplazarse en el mapa
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('google-food'), mapOptions);
    var contentString = '<img src="logo.png" width="200" style="display:block;margin:auto;"><p>aquí la dirección</p>'; // imagen y dirección
    var infowindow = new google.maps.InfoWindow({ content: contentString });
    var marker = new google.maps.Marker({
      position: myLatlng,
      animation: google.maps.Animation.DROP,
      icon: 'icono-mapa.png', // icono de mapa
      map: map
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}); // END

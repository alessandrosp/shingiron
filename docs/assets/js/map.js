---
layout: blank
---
let map;
let icon = "https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png";
let url = "https://plus.codes/api?address=${pluscode}&key=AIzaSyAsVncbPDu6sjkwL6pXhj1LN2GD6QtcgMY";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(35.69375, 139.75375),
    zoom: 12,
  });
  
  async function fetchCoordinates(pluscode) {
    let response = await fetch(url.replace("${pluscode}", pluscode));
    return await response.json();
  }
  
  function getCoordinates(pluscode) {
    let a, b;
    fetchCoordinates(pluscode).then(geoinfo => {
      a = geoinfo.plus_code.geometry.location.lat;
      b = geoinfo.plus_code.geometry.location.lng;
    })
    return [a, b]
  }

  let places = []
  let lat, lng;
  {% for place in site.places %}
    {% if place.pluscode and place.pluscode != blank %}
      [lat, lng] = getCoordinates("{{ place.pluscode }}");
      places.push(
        {
          position: new google.maps.LatLng(lat, lng),
        }
      );
    {% endif %}
  {% endfor %}

  // Create markers.
  for (let i = 0; i < places.length; i++) {
    const marker = new google.maps.Marker({
      position: places[i].position,
      icon: icon,
      map: map,
    });
  }
}

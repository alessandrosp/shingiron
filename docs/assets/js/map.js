---
layout: blank
---
let map;
let icon = "https://img.icons8.com/color/48/000000/romantic-place--v2.png";
let url = "https://plus.codes/api?address=${pluscode}&key=AIzaSyAsVncbPDu6sjkwL6pXhj1LN2GD6QtcgMY";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(35.69375, 139.75375),
    zoom: 12,
  });
  
  async function fetchCoordinates(pluscode) {
    let escapedPluscode = pluscode.replace("+", "%2B");
    let response = await fetch(url.replace("${pluscode}", escapedPluscode));
    return await response.json();
  }

  let places = []
  {% for place in site.places %}
    {% if place.pluscode and place.pluscode != blank %}
      fetchCoordinates("{{ place.pluscode }}")
        .then(geoinfo => {
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(geoinfo.plus_code.geometry.location.lat, geoinfo.plus_code.geometry.location.lng),
            icon: icon,
            map: map,
          });
        })
    {% endif %}
  {% endfor %}
}

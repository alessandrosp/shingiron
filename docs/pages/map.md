---
layout: default
permalink: /map/
---
<b>Test</b>
<br>
<iframe
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDx3pE_t6DwHcdC8Hdga0dTSHWNeqPA5cI
    &q=Space+Needle,Seattle+WA">
</iframe>
<br>
    <div id="map"></div>

<!-- Async script executes immediately and must be after any DOM elements used in callback. -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDx3pE_t6DwHcdC8Hdga0dTSHWNeqPA5cI&callback=initMap&v=weekly" async></script>

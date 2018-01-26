function autocomplete_vis_coin(obj) {
  var src = obj.data('apis-pic');
  $('#container2').append('<img src="'+src+'" width="200" height="200"/>');
  return
};

function autocomplete_vis_place(obj) {
  var map = L.map('container2', {
  center: [51.505, -0.09],
  zoom: 5,
  zoomControl: false});
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1Ijoic2VubmllcmVyIiwiYSI6ImNpbHk1YWV0bDAwZnB2dW01d2l1Y3phdmkifQ.OljQLEhqeAygai2y6VoSwQ'
}).addTo(map);
  console.log(obj.data('lat'));
  L.marker([obj.data('lat'), obj.data('long')]).addTo(map);
  map.setView([obj.data('lat'), obj.data('long')], 8);
  console.log(map);
  return map
};

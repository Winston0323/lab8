function initMap() {
	console.log("sucess");
	L.mapquest.key = 'Qt5UqlNtRnEjUjrG0G7HFvIJnWhdmAAd';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [37.7749, -122.4194],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl:false
	});// add your code here
	L.marker([32.88, -117.236]).addTo(map);
}
// Get the three.js scene
var scene = document.querySelector('a-scene').object3D;
// Get the camera entity
var camera = document.querySelector('#camera');
// Get the arrow entity
var arrow = document.querySelector('#arrow');
// Get the road entity
var road = document.querySelector('#road');

// Create a three.ar.js session
var session = new THREE.ARSession({
    // Enable hit testing to detect surfaces
    hitTest: true,
    // Enable plane detection to find horizontal planes
    planeDetection: 'horizontal'
});

// Add the session to the scene
scene.add(session);

// Listen for hit test results
session.addEventListener('hit', function (event) {
    // Get the first hit result
    var hit = event.detail.hits[0];
    if (hit) {
        // Show the arrow and the road entities
        arrow.setAttribute('visible', true);
        road.setAttribute('visible', true);
        // Position the arrow and the road entities at the hit point
        arrow.object3D.position.copy(hit.point);
        road.object3D.position.copy(hit.point);
        // Orient the arrow entity towards the camera entity
        arrow.object3D.lookAt(camera.object3D.position);
    }
});
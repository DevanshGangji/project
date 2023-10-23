// ShirtViewer.js
// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// function ShirtViewer() {
//   useEffect(() => {
//     // Create a Three.js scene
//     const scene = new THREE.Scene();

//     // Create a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('shirt-container').appendChild(renderer.domElement);

//     // Load the 3D shirt model
//     const loader = new GLTFLoader();
//     loader.load('/shirt.gltf', (gltf) => {
//       const shirt = gltf.scene;
//       scene.add(shirt);

//       // Optional: Add lights or further customize the scene

//       // Animate the scene
//       const animate = () => {
//         requestAnimationFrame(animate);

//         // Rotate the shirt (if needed)
//         shirt.rotation.x += 0.01;
//         shirt.rotation.y += 0.01;

//         renderer.render(scene, camera);
//       };

//       animate();
//     });

//     return () => {
//       renderer.domElement.remove();
//     };
//   }, []);

//   return <div id="shirt-container" />;
// }

// export default ShirtViewer;

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();


const renderer = new THREE.WebGLRenderer({
	antialias: true
});
renderer.setSize( window.innerWidth, window.innerHeight );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
document.body.appendChild( renderer.domElement );

camera.position.set( 0, 0, 18 );
let light = new THREE.DirectionalLight(0xfff1e0, 10);
scene.add(light);
scene.background = new THREE.Color('white');

const loader = new GLTFLoader();

loader.load( 'rex/scene.gltf', function ( gltf ) {
	scene.add( gltf.scene );

	function animate() {
		requestAnimationFrame(animate)
		gltf.scene.rotation.y -= 0.005;
		renderer.render(scene, camera);
	
	}
	animate();
}, undefined, function ( error ) {

	console.error( error );
	
});


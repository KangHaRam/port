import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#canvas'),
    antialias : true
});

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0,0,150);

scene.background = new THREE.Color('white');
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);


let loader = new GLTFLoader();

loader.load('rex/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    
    function animate() {
        requestAnimationFrame(animate);
        gltf.scene.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});
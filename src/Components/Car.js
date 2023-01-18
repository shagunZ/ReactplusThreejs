import React from "react";
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
export default function Car(){
    

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

//stars
function addStar(){
  const geometry = new THREE.SphereGeometry( 0.25, 32, 16 );
const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry, material );

const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));

sphere.position.set(x,y,z);
scene.add( sphere );
}

Array(200).fill().forEach(addStar);


// animation

function animation( time ) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

{/* <Stars/> */}
	renderer.render( scene, camera );

}

    return(

<>
<p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus accusamus officiis, vitae nobis rem natus itaque? Ut ipsum </p>
{/* <Canvas>
		<Stars />
	</Canvas> */}
</>
       
    )
}
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import "./styles.css";
import Car from "./Components/Car"
import NavBar from "./Components/navbar"
import BoxGeo from "./Components/BoxGeo"
<script type="module" src="/main.js"></script>



createRoot(document.getElementById('root')).render(
	<>
	<NavBar />
	<h1 style={{color:'white'}}>carrrr</h1>

	<Car/>
	<Car/>
	<Car/>
	<Car/>


		<main>
		<p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus accusamus officiis, vitae nobis rem natus itaque? Ut ipsum </p>
		<p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus accusamus officiis, vitae nobis rem natus itaque? Ut ipsum </p>
		<p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus possimus accusamus officiis, vitae nobis rem natus itaque? Ut ipsum </p>
	
		 </main>
<BoxGeo/>
	</>
);
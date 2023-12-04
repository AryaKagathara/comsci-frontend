import Link from "next/link";
import Image from "next/image";
import Award from "@/../public/images/award-img.webp";

// import { useEffect } from 'react';

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DirectionalLight, DirectionalLightHelper } from "three";

// import SceneInit from '../pages/lib/SceneInit';


const Awards = () => {
	// useEffect(() => {
	// 	const test = new SceneInit('myThreeJsCanvas');
	// 	test.initialize();
	// 	test.animate();
	
	// 	let loadedModel;
	// 	const glftLoader = new GLTFLoader();
	// 	glftLoader.load('./WWW.glb', gltfScene => {
	// 	  loadedModel = gltfScene;
	// 	  // console.log(loadedModel);
	
	// 	  gltfScene.scene.rotation.y = Math.PI / 8;
	// 	  gltfScene.scene.position.y = 3;
	// 	  gltfScene.scene.scale.set(4, 4, 4);
	// 	  test.scene.add(gltfScene.scene);
	
	// 	  const lightPositions = [
	// 		new THREE.Vector3(0, 0, 0),
	// 		new THREE.Vector3(0, 0, 500),
	// 		new THREE.Vector3(0, 0, -500),
	// 		new THREE.Vector3(0, 500, 0),
	// 		new THREE.Vector3(0, 500, 500),
	// 		new THREE.Vector3(0, 500, -500),
	// 		new THREE.Vector3(0, -500, 0),
	// 		new THREE.Vector3(0, -500, 500),
	// 		new THREE.Vector3(0, -500, -500),
	// 		new THREE.Vector3(500, 0, 0),
	// 		new THREE.Vector3(500, 0, 500),
	// 		new THREE.Vector3(500, 0, -500),
	// 		new THREE.Vector3(500, 500, 0),
	// 		new THREE.Vector3(500, 500, 500),
	// 		new THREE.Vector3(500, 500, -500),
	// 		new THREE.Vector3(500, -500, 0),
	// 		new THREE.Vector3(500, -500, 500),
	// 		new THREE.Vector3(500, -500, -500),
	// 		new THREE.Vector3(-500, 0, 0),
	// 		new THREE.Vector3(-500, 0, 500),
	// 		new THREE.Vector3(-500, 0, -500),
	// 		new THREE.Vector3(-500, 500, 0),
	// 		new THREE.Vector3(-500, 500, 500),
	// 		new THREE.Vector3(-500, 500, -500),
	// 		new THREE.Vector3(-500, -500, 0),
	// 		new THREE.Vector3(-500, -500, 500),
	// 		new THREE.Vector3(-500, -500, -500),
	// 	  ];
	
	// 	  const lights = [];
	// 	  lightPositions.forEach((position) => {
	// 		const sunLight = new THREE.DirectionalLight(0xffffff, .5);
	// 		sunLight.position.copy(position);
	// 		test.scene.add(sunLight);
	// 		lights.push(sunLight);
	// 	  });
	// 	  const helper = new DirectionalLightHelper(lights, 1);
	// 	  test.scene.add(helper);
	
	// 	});
	
	// 	const animate = () => {
	// 	  if (loadedModel) {
	// 		loadedModel.scene.rotation.x += 0.005;
	// 		loadedModel.scene.rotation.y += 0.005;
	// 		loadedModel.scene.rotation.z += 0.005;
	// 	  }
	// 	  requestAnimationFrame(animate);
	// 	};
	// 	animate();
	//   }, []);

	return (
		<>
			<div className="award">
				<div className="container">
					<div className="award_section">
						<div className="image">
							<Image src={Award} alt="Award" />
							{/* <canvas id="myThreeJsCanvas" /> */}
						</div>
						<div className="award_text">
							<h2>Award Winning Company</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Awards;
import { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';

const Earth = () => {
	const earth = useGLTF('./planet/scene.gltf');
	return (
		<primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
	);
};

const EarthCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop='demand'
			gl={{ preserveDrawingBuffer: true }}
			camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
		>
			<Suspense fallback={<CanvasLoader />} />
			{/* OrbitControls allows us to modify and move around the model with mouse */}
			<OrbitControls
				autoRotate={true}
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
			/>
			<Earth />
		</Canvas>
	);
};

export default EarthCanvas;

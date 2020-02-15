import React, { useEffect } from 'react';
import * as THREE from 'three';

import { viewportConfig, cameraConfig } from '../threeGame/config/gameConfig';

import Game from '../threeGame/Game';

const ThreeJS = () => {
	const parentId = 'gameContainer';
	const canvasRef = React.createRef();

	useEffect(() => {
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(viewportConfig.width, viewportConfig.height);
		canvasRef.current.appendChild(renderer.domElement);

		const game = new Game(cameraConfig, renderer);

		game.start();
	}, []);

	return <div key={parentId} id={parentId} ref={canvasRef} />;
};

export default ThreeJS;

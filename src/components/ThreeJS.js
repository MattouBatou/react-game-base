import React, { useEffect } from 'react';
import Game from '../threeGame/Game';

const ThreeJS = () => {
	const parentId = 'gameContainer';
	const canvasRef = React.createRef();

	useEffect(() => {
		const ThreeGame = new Game();
		canvasRef.current.appendChild(ThreeGame.renderer.domElement);
		ThreeGame.start();
	}, []);

	return <div key={parentId} id={parentId} ref={canvasRef} />;
};

export default ThreeJS;

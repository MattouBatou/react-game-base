import React from 'react';
import ReactDOM from 'react-dom';

import Pixi from './components/Pixi';
import Phaser3 from './components/Phaser3';
import ThreeJS from './components/ThreeJS';

import './scss/main.scss';

ReactDOM.render(
	<>
		<Pixi />
		<Phaser3 />
		<ThreeJS />
	</>,
	document.getElementById('gameRoot')
);

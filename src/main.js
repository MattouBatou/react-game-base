import React from 'react';
import ReactDOM from 'react-dom';

import Phaser3 from './components/Phaser3';
import ThreeJS from './components/ThreeJS';

import './scss/main.scss';

ReactDOM.render(
	<>
		<Phaser3 />
		<ThreeJS />
	</>,
	document.getElementById('gameRoot')
);

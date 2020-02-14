import 'phaser';
import config from './config/gameConfig';

import GameScene from './scenes/GameScene';

export default class Game extends Phaser.Game {
	parent = '';

	constructor(parent) {
		super(parent ? { ...config, parent } : config);

		this.scene.add('Game', GameScene);
		this.scene.start('Game');
	}
}

import 'phaser';

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	preload() {
		this.load.setBaseURL('http://labs.phaser.io');

		this.load.image('sky', 'assets/skies/space3.png');
		this.load.image('logo', 'assets/sprites/phaser3-logo.png');
		this.load.image('red', 'assets/particles/red.png');
	}

	create() {
		this.background = this.add.image(512, 384, 'sky');

		this.background.setScale(1.28);

		this.particles = this.add.particles('red');

		this.emitter = this.particles.createEmitter({
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD'
		});

		this.logo = this.physics.add.image(400, 100, 'logo');

		this.logo.setVelocity(100, 200);
		this.logo.setBounce(1, 1);
		this.logo.setCollideWorldBounds(true);

		this.emitter.startFollow(this.logo);
	}
}

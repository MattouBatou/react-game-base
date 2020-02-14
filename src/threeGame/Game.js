import * as THREE from 'three';

export default class Game {
	constructor(cameraConfig, renderer) {
		this.renderer = renderer;

		this.scene = new THREE.Scene();
		this.camera = new THREE[cameraConfig.type](
			cameraConfig.fov,
			cameraConfig.aspect,
			cameraConfig.near,
			cameraConfig.far
		);
	}

	start() {
		this.geometry = new THREE.BoxGeometry(1, 1, 1);
		this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.cube = new THREE.Mesh(this.geometry, this.material);

		this.scene.add(this.cube);

		this.camera.position.z = 2.5;

		this.render();
	}

	render = () => {
		requestAnimationFrame(this.render);

		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;
		this.renderer.render(this.scene, this.camera);
	};
}

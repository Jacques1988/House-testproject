import * as THREE from 'three';




export default class Scene {

    scene: any = new THREE.Scene();
    mainCamera:any;

    constructor(camera:any) {
        this.mainCamera = camera;
        
        this.startScene();
    }



    startScene() {
        this.scene.add(
            this.mainCamera
        );
        return this.scene;
    }
}
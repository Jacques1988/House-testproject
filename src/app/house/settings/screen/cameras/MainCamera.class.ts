import * as THREE from 'three';


export default class MainCamera {

    camera: any;
    scene:any;

    constructor(sizes: any) {

        this.camera = new THREE.PerspectiveCamera(75, sizes.aspect, 0.001, 1000);
        this.startCamera();
    }

    

    startCamera() {
        this.camera.updateProjectionMatrix();
        
        return this.camera;

    }
}
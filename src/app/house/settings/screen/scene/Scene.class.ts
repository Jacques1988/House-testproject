import * as THREE from 'three';
import Cubeloader from '../../cubeloader/CubeLoader.class';

import AmbientLight from 'src/app/house/Objects/lights/AmbientLight.class';
import MainArea from 'src/app/house/Objects/area/mainArea.class'; 

export default class Scene {

    scene: any = new THREE.Scene();
    mainCamera:any;
    
    light:any;
    background:any;
    area:any;

    constructor(camera:any) {

        //Background
        const background = new Cubeloader();
        this.background = background.loadMainBackground();

        //Camera
        this.mainCamera = camera;
        this.mainCamera.position.set(0,2,3);
        

        //area
        const area = new MainArea();
        this.area = area.buildMainArea();


        //Lights
        const ambientLight = new AmbientLight('#ffffff', 0.8);
        this.light = ambientLight.createAmbientLight();


        //Start this scene
        this.startScene();
        
    }

    startScene() {

        this.scene.background = this.background;

        this.scene.add(
            this.mainCamera,
            this.light,
            this.area
        );
        return this.scene;
    }
}
import * as THREE from 'three';
import Cubeloader from '../../cubeloader/CubeLoader.class';

import AmbientLight from 'src/app/house/Objects/lights/AmbientLight.class';
import DirectionalLight from 'src/app/house/Objects/lights/DirectionalLight.class';

import MainArea from 'src/app/house/Objects/area/mainArea.class';
import Groundwork from 'src/app/house/Objects/groundwork/Groundwork.class';

import BungalowPurea from 'src/app/house/Objects/houses/BungalowPurea/BungalowPurea.class';

export default class Scene {

    scene: any = new THREE.Scene();
    mainCamera: any;

    ambientLight: any;
    directionalLight: any;

    background: any;
    area: any;
    groundwork: any;

    house:any;

    //helpers
    DLightHelper:any;


    constructor(camera: any) {

        //Background
        const background = new Cubeloader();
        this.background = background.loadMainBackground();

        //Camera
        this.mainCamera = camera;
        this.mainCamera.position.set(0, 2, 20);


        //area
        const area = new MainArea();
        this.area = area.buildMainArea();

        //Groundwork
        const groundwork = new Groundwork(30, 0.5, 30, 100, 100);
        this.groundwork = groundwork.buildGroundwork();


        //House
        const bungalowPurea = new BungalowPurea();
        this.house = bungalowPurea.buildHouse();

        //Lights
        const ambientLight = new AmbientLight('#ffffff', 0.35);
        this.ambientLight = ambientLight.createAmbientLight();

        const directionalLight = new DirectionalLight('#ffffff', 0.8);
        this.directionalLight = directionalLight.buildDirectionalLight();

        //helpers
        this.DLightHelper = new THREE.CameraHelper(this.directionalLight.shadow.camera);

        //Start this scene
        this.startScene();

    }

    startScene() {

        this.scene.background = this.background;

        this.scene.add(
            this.mainCamera,
            /* this.DLightHelper, */
            this.ambientLight,
            this.directionalLight,
            this.area,
            this.groundwork,
            this.house
        );
        return this.scene;
    }
}
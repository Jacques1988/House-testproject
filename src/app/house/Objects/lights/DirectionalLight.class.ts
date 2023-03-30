import * as THREE from 'three';


export default class DirectionalLight{
    light: any ;

    constructor(color:any, brightness:number){
       this.light = new THREE.DirectionalLight(color, brightness);
       this.light.position.set(10,10,-10);
       this.light.castShadow = true;

       this.light.shadow.mapSize.width = 512;
       this.light.shadow.mapSize.height = 512;
       this.light.shadow.camera.near = 0.5;
       this.light.shadow.camera.far = 500;
    }

    buildDirectionalLight(){
        return this.light;
    }
}
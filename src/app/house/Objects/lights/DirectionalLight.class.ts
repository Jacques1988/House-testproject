import * as THREE from 'three';


export default class DirectionalLight{
    light: any ;

    constructor(color:any, brightness:number){
       this.light = new THREE.DirectionalLight(color, brightness);
       this.light.position.set(0,10,10);
       this.light.castShadow = true;

       this.light.shadow.mapSize.width = 1024;
       this.light.shadow.mapSize.height = 1024;

       this.light.shadow.camera.top = 20;
       this.light.shadow.camera.right = 20;
       this.light.shadow.camera.bottom = -20;
       this.light.shadow.camera.left = -20;

       this.light.shadow.camera.near = 1;
       this.light.shadow.camera.far = 40;
    
    }

    buildDirectionalLight(){
        return this.light;
    }
}
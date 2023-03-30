import * as THREE from 'three';

export default class AmbientLight{

    light: any;

    constructor(color:any, brightness:number){
        this.light = new THREE.AmbientLight(color, brightness);
        this.light.position.set(-10, 10, 10);
    }

    createAmbientLight(){
        return this.light;
    }
}
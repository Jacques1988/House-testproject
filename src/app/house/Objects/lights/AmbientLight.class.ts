import * as THREE from 'three';

export default class AmbientLight{

    light: any;

    constructor(color:any, brightness:number){
        this.light = new THREE.AmbientLight(color, brightness);
        this.createAmbientLight();
    }

    createAmbientLight(){
        return this.light;
    }
}
import * as THREE from 'three';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';

import Garage from './garage/garage.class';

export default class BungalowPurea {
    house = new THREE.Group();
    garage:any = new Garage(); 
    textureloader:any = new TextureLoader();
    

    constructor(){
       

        this.house.add(
            this.garage.buildGarage()
           
            );


       
    }

    buildHouse(){
        return this.house;
    }
}
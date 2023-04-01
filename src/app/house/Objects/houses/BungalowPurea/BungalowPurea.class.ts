import * as THREE from 'three';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';

import Garage from './garage/garage.class';
import MiddleBlock from './middleBlock/MiddleBlock.class';

export default class BungalowPurea {
    house = new THREE.Group();
    garage:any = new Garage().buildGarage(); 
    middleBlock:any = new MiddleBlock().buildMiddleBlock();
    textureloader:any = new TextureLoader();
    

    constructor(){
       

        this.house.add(
            this.garage,
            this.middleBlock
            );


       
    }

    buildHouse(){
        return this.house;
    }
}
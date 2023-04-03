import * as THREE from 'three';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';

import Garage from './garage/garage.class';
import MiddleBlock from './middleBlock/MiddleBlock.class';
import EntryBlock from './middleBlock/EntryBlock.class';
import Kitchen from './middleBlock/Kitchen.class';
import LivingRoom from './middleBlock/LivingRoom.class';
import Roof from './roof/Roof.class';

export default class BungalowPurea {
    house = new THREE.Group();
    garage:any = new Garage().buildGarage(); 
    middleBlock:any = new MiddleBlock().buildMiddleBlock();
    entryBlock:any = new EntryBlock().buildEntryBlock();
    kitchen:any = new Kitchen().buildKitchen();
    livingRoom: any = new LivingRoom().buildLivingRoom();
    textureloader:any = new TextureLoader();
    roof:any = new Roof().buildRoof();
    

    constructor(){
       
        this.house.add(
            this.garage,
            this.middleBlock,
            this.entryBlock,
            this.kitchen,
            this.livingRoom,
            this.roof
            );
    }

    buildHouse(){
        return this.house;
    }
}
import * as THREE from 'three';
import Room from '../../Room.Class';

export default class EntryBlock {
    entryBlock: any;
    entry:any = new THREE.Group();

    constructor() {
        this.entryBlock = new Room(2, 3, 11.5, 100, 100).buildRoom();

        this.entry.add(this.entryBlock);
        this.entryBlock.position.set(3, 2, -3.25);
    }


    buildEntryBlock(){
        return this.entry;
    }
}
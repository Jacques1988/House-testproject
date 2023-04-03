import * as THREE from 'three';
import Room from '../../Room.Class';
import Door from '../garage/door/Doors.class';
import Glass from '../window/WindowGlass.class';

export default class EntryBlock {
    entryBlock: any;
    entry: any = new THREE.Group();
    mainDoor: any;
    doorGlass:any;

    constructor() {
        this.entryBlock = new Room(2, 3, 11.5, 100, 100).buildRoom();
        this.mainDoor = new Door(1.2, 2.4, 100, 100).buildDoor(3, 1.7, 2.5);
        this.doorGlass = new Glass(0.2, 1.7).buildGarageGlass(3.3, 1.7, 2.55)
        this.entry.add(this.entryBlock);
        this.entryBlock.position.set(3, 2, -3.25);

        this.entry.add(this.mainDoor, this.doorGlass)
    }


    buildEntryBlock() {
        return this.entry;
    }
}
import * as THREE from 'three';
import Room from '../../Room.Class';
import Window from '../window/Window.class';
import WindowGlass from '../window/WindowGlass.class';


export default class MiddleBlock {

    block: any = new THREE.Group();
    middleblock: any = new Room(5, 3, 12, 100, 100).buildRoom();

    window1: any = new Window(1, 1).buildWindow(-0.5, 2.35, 3);
    window2: any = new Window(1, 1).buildWindow(1, 2.35, 3);
    slidingDoor1: any = new Window(3, 3.4).buildSlidingDoor(-0.5, 1.7, -9, 500, 500);

    constructor() {

        this.block.add(
            this.middleblock,
            this.window1,
            this.window2,
            this.slidingDoor1
        );


        this.middleblock.position.set(-0.5, 2, -3);

        this.window1.rotation.z = -Math.PI * 0.5;
        this.window2.rotation.z = -Math.PI * 0.5;
        this.slidingDoor1.rotation.y = Math.PI
    }


    buildMiddleBlock() {
        return this.block;
    }
}
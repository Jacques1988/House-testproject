import * as THREE from 'three';
import Room from '../../Room.Class';
import Window from '../window/Window.class';


export default class LivingRoom {
    livingRoom: any = new Room(4, 3, 7, 100, 100).buildRoom();
    livingArea: any = new THREE.Group();
    slidingDoorBackside1:any = new Window(3, 3.4).buildSlidingDoor(0, -0.3, -3.5, 500, 500);
    slidingDoorSide1:any = new Window(3, 3.4).buildSlidingDoor(2, -0.3, -1.5, 500, 500);
    slidingDoorSide2:any = new Window(3, 3.4).buildSlidingDoor(2, -0.3, 1, 500, 500);

    constructor() {
        this.slidingDoorBackside1.rotation.y = Math.PI;
        this.slidingDoorSide1.rotation.y = Math.PI * 0.5;
        this.slidingDoorSide2.rotation.y = Math.PI * 0.5;

        this.livingArea.add(
            this.livingRoom,
            this.slidingDoorBackside1,
            this.slidingDoorSide1,
            this.slidingDoorSide2,
            );

        this.livingArea.position.set(6, 2, -5.5);
    }

    buildLivingRoom() {
        return this.livingArea;
    }
}
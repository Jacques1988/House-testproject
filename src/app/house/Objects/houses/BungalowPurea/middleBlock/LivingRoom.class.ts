import * as THREE from 'three';
import Room from '../../Room.Class';


export default class LivingRoom {
    livingRoom: any = new Room(4, 3, 7, 100, 100).buildRoom();
    livingArea: any = new THREE.Group();

    constructor() {

        this.livingArea.add(this.livingRoom);
        this.livingArea.position.set(6, 2, -5.5);
    }

    buildLivingRoom() {
        return this.livingArea;
    }
}
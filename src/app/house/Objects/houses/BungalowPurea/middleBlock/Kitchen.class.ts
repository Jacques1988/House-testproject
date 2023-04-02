import * as THREE from 'three';
import Room from '../../Room.Class';
import Window from '../window/Window.class';

export default class Kitchen{
    kitchenBlock: any = new Room(5, 3, 5, 100, 100).buildRoom();
    kitchen:any = new THREE.Group();
    window1: any = new Window(2, 1, 100, 100).buildWindow(0.5, 0.5, 2.5);
    slidingDoor:any = new Window(3, 3.5).buildSlidingDoor(2.5, -0.3, 0, 500, 500)

    constructor(){
        this.kitchen.add(
            this.kitchenBlock, 
            this.window1,
            this.slidingDoor
            );

        this.slidingDoor.rotation.y = Math.PI * 0.5;
        this.kitchen.position.set(6.5, 2, 0.5);

        this.kitchen.minfilter = THREE.NearestFilter;
        this.window1.minFilter = THREE.NearestFilter;
    }

    buildKitchen(){
        return this.kitchen;
    }
}
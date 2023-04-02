import * as THREE from 'three';
import Room from '../../Room.Class';
import Window from '../window/Window.class';

export default class Kitchen{
    kitchenBlock: any = new Room(5, 3, 5, 100, 100).buildRoom();
    kitchen:any = new THREE.Group();
    window1: any = new Window(3, 1, 100, 100).buildWindow(0, 0.5, 2.5);

    constructor(){
        this.kitchen.add(this.kitchenBlock, this.window1);
        this.kitchen.position.set(6.5, 2, 0.5);
    }

    buildKitchen(){
        return this.kitchen;
    }
}
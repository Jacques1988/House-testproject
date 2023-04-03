import * as THREE from 'three';
import Room from '../../Room.Class';
import Window from '../window/Window.class';
import Door from './door/Doors.class';




export default class Garage {
    garage: any = new THREE.Group();
    garageRoom: any = new Room(6, 3, 6, 100, 100).buildRoom();
    garageGate: any = new Door(5, 2.5, 100, 100).buildGarageGate(0, 0.6, 3.05);
    window2: any = new Window(1.5, 1.5).buildWindow(0.5, 0.4, -3);
    backdoor:any = new Door(1.2, 2.4, 100, 100).buildDoor(-2, -0.3, -3);

    constructor() {
        this.garage.position.set(-6, 2, 0);
        
        this.window2.position.set(0.5, 0.4, -3);
        this.window2.rotation.y = Math.PI;

        this.backdoor.rotation.y = Math.PI;

        this.garage.add(
            this.garageRoom,
            this.garageGate,
            this.backdoor,
            
            this.window2
        )
    }

    buildGarage() {
        return this.garage;
    }

}
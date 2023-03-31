import * as THREE from 'three';
import Room from '../../Room.Class';
import Gate from './gate/Gate.class';




export default class Garage {
    garage: any = new THREE.Group();
    garageRoom:any = new Room(6,3,6,100,100).buildRoom();
    garageGate:any = new Gate().buildGate();

    
    constructor() {
        this.garage.position.set(-6, 2, 0);


        this.garage.add(
            this.garageRoom,
            this.garageGate
        )
    }

    buildGarage() {
        return this.garage;
    }

}
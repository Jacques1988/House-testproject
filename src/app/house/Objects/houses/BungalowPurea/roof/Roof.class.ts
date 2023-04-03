import * as THREE from 'three';
import Room from '../../Room.Class';


export default class Roof {
    roof: any = new THREE.Group();
    sideWallRight: any = new Room(0.5, 4, 2, 100, 100).buildRoom();
    sidewallRightgarage: any = new Room(0.5, 4, 7.5, 100, 100).buildRoom();
    topLeft: any = new Room(13.5, 0.5, 7.5, 100, 100).buildRoom();
    topRight: any = new Room(4.5, 0.5, 6, 100, 100).buildRoom();
    topBackside:any = new Room(12, 0.5, 6, 100, 100).buildRoom();

    constructor() {

        this.sideWallRight.position.set(4.25, 2, 3.5);
        this.sidewallRightgarage.position.set(-9.25, 2, 0.75);
        this.topLeft.position.set(-2.25, 3.75, 0.75);
        this.topRight.position.set(6.75, 3.75, 0);
        this.topBackside.position.set(3, 3.75, -6);


        this.roof.add(
             this.sideWallRight,
            this.sidewallRightgarage,
            this.topLeft,
            this.topRight,
            this.topBackside
        )

        this.roof.minFilter = THREE.NearestFilter;
    }

    buildRoof() {
        return this.roof;
    }
}
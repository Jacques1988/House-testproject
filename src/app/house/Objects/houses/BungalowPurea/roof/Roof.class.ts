import * as THREE from 'three';
import Room from '../../Room.Class';
import Gutter from './Gutter.class';


export default class Roof {
    roof: any = new THREE.Group();
    sideWallRight: any = new Room(0.5, 3, 1.5, 100, 100).buildRoom();
    sidewallRightgarage: any = new Room(0.5, 3.5, 7.5, 100, 100).buildRoom();
    topLeft: any = new Room(13.5, 0.5, 7.5, 100, 100).buildRoom();
    topRight: any = new Room(4.5, 0.5, 6, 100, 100).buildRoom();
    topBackside: any = new Room(12, 0.5, 6, 100, 100).buildRoom();

    gutterFront: any = new Gutter(14.2, 0.2, 0.2, 100, 100).buildGutter(-2.5, 4, 4.5);
    gutterLeft1: any = new Gutter(7.5, 0.2, 0.2, 100, 100).buildGutter(-0.65, 4, -9.5);
    gutterFrontLeft: any = new Gutter(6.4, 0.2, 0.2, 100, 100).buildGutter(-6.2, 4, -3);
    gutterBackLeft: any = new Gutter(6.2, 0.2, 0.2, 100, 100).buildGutter(6, 4, -3);
    gutterBack: any = new Gutter(12, 0.2, 0.2, 100, 100).buildGutter(3.1, 4, -9);
    gutterBackRight: any = new Gutter(12, 0.2, 0.2, 100, 100).buildGutter(2.9, 4, 9);
    gutterFrontRight: any = new Gutter(4.5, 0.2, 0.2, 100, 100).buildGutter(6.65, 4, 3);
    gutterFrontRight2: any = new Gutter(1.3, 0.2, 0.2, 100, 100).buildGutter(-3.75, 4, 4.5);
    
     


    constructor() {

        this.sideWallRight.position.set(4.25, 2, 3.75);
        this.sidewallRightgarage.position.set(-9.25, 2.25, 0.75);
        this.topLeft.position.set(-2.25, 3.75, 0.75);
        this.topRight.position.set(6.75, 3.75, 0);
        this.topBackside.position.set(3, 3.75, -6);

        this.gutterLeft1.rotation.y = Math.PI * 0.5;
        this.gutterBackLeft.rotation.y = Math.PI * 0.5;
        this.gutterBackRight.rotation.y = Math.PI * 0.5;
        this.gutterFrontRight2.rotation.y = Math.PI * 0.5;

        this.roof.add(
            this.sideWallRight,
            this.sidewallRightgarage,
            this.topLeft,
            this.topRight,
            this.topBackside,
            this.gutterFront,
            this.gutterLeft1,
            this.gutterFrontLeft,
            this.gutterBackLeft,
            this.gutterBack,
            this.gutterBackRight,
            this.gutterFrontRight,
            this.gutterFrontRight2
        )

        this.roof.minFilter = THREE.NearestFilter;
    }

    buildRoof() {
        return this.roof;
    }
}
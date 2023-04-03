import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';
import * as THREE from 'three';

import Lock from '../../../Lock.class';
import Glass from '../../window/WindowGlass.class';


export default class Door {
    textureloader = new TextureLoader();
    door: any = new THREE.Group();
    doorPlane: any;
    doorPlaneImages = [];
    setRepeat: number = 2;
    lock: any;
    doorGlass: any;

    constructor(length: number, height: number, verticesA: number, verticesB: number) {
        this.doorPlaneImages = this.textureloader.loadBungalowPureadoorPlaneImages();
        this.doorPlane = new THREE.Mesh(
            new THREE.PlaneGeometry(length, height, verticesA, verticesB),
            new THREE.MeshStandardMaterial({
                map: this.doorPlaneImages[0],
                transparent: true,
                aoMap: this.doorPlaneImages[1],
                aoMapIntensity: 0.1,
                displacementMap: this.doorPlaneImages[2],
                displacementScale: 0.05,
                normalMap: this.doorPlaneImages[3],
                roughnessMap: this.doorPlaneImages[4],
                roughness: 0.1,
                metalness: 0.5
            })
        )

        this.doorPlaneImages[0].wrapS = THREE.RepeatWrapping;
        this.doorPlaneImages[1].wrapS = THREE.RepeatWrapping;
        this.doorPlaneImages[2].wrapS = THREE.RepeatWrapping;
        this.doorPlaneImages[3].wrapS = THREE.RepeatWrapping;
        this.doorPlaneImages[4].wrapS = THREE.RepeatWrapping;

        this.doorPlaneImages[0].wrapT = THREE.RepeatWrapping;
        this.doorPlaneImages[1].wrapT = THREE.RepeatWrapping;
        this.doorPlaneImages[2].wrapT = THREE.RepeatWrapping;
        this.doorPlaneImages[3].wrapT = THREE.RepeatWrapping;
        this.doorPlaneImages[4].wrapT = THREE.RepeatWrapping;

        this.doorPlaneImages[0].repeat.set(this.setRepeat, this.setRepeat);
        this.doorPlaneImages[1].repeat.set(this.setRepeat, this.setRepeat);
        this.doorPlaneImages[2].repeat.set(this.setRepeat, this.setRepeat);
        this.doorPlaneImages[3].repeat.set(this.setRepeat, this.setRepeat);
        this.doorPlaneImages[4].repeat.set(this.setRepeat, this.setRepeat);

        this.doorPlane.minFilter = THREE.NearestFilter;
        this.doorPlane.receiveShadow = true;
    }

    buildGarageGate(x: number, y: number, z: number) {
        this.doorGlass = new Glass(4.75, 0.5).buildGarageGlass(x, y, z);
        this.doorGlass.position.set(x, y, z);
        this.lock = new Lock(0.15, 0.15).buildLock(0, -0.75, 3.045);
        this.doorPlane.position.set(0, -0.25, 3.00);

        this.door.add(
            this.doorPlane,
            this.doorGlass,
            this.lock
        )
        return this.door;
    }

    buildDoor(x: number, y: number, z: number) {
        this.lock = new Lock(0.15, 0.15).buildLock(-0.4, -0.1, 0.045);
        this.door.position.set(x, y, z);

        this.door.add(
            this.doorPlane,
            this.doorGlass,
            this.lock
        )

        return this.door;
    }
}
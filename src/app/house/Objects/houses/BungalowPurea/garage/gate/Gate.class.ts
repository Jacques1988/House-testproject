import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';
import * as THREE from 'three';

import Lock from '../../../Lock.class';
import GarageWindow from './GateWindow.class';

export default class Gate {
    textureloader = new TextureLoader();
    gate: any = new THREE.Group();
    garageGate: any;
    garageGateImages = [];
    setRepeat: number = 2;

    lock: any = new Lock().buildLock();
    garageGlass: any = new GarageWindow().buildGarageGlass();

    constructor() {
        this.garageGateImages = this.textureloader.loadBungalowPureaGarageGateImages();
        this.garageGate = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 2.5, 100, 100),
            new THREE.MeshStandardMaterial({
                map: this.garageGateImages[0],
                transparent: true,
                aoMap: this.garageGateImages[1],
                aoMapIntensity: 0.1,
                displacementMap: this.garageGateImages[2],
                displacementScale: 0.05,
                normalMap: this.garageGateImages[3],
                roughnessMap: this.garageGateImages[4],
                roughness: 0.1,
                metalness: 0.5
            })
        )

        this.garageGateImages[0].wrapS = THREE.RepeatWrapping;
        this.garageGateImages[1].wrapS = THREE.RepeatWrapping;
        this.garageGateImages[2].wrapS = THREE.RepeatWrapping;
        this.garageGateImages[3].wrapS = THREE.RepeatWrapping;
        this.garageGateImages[4].wrapS = THREE.RepeatWrapping;

        this.garageGateImages[0].wrapT = THREE.RepeatWrapping;
        this.garageGateImages[1].wrapT = THREE.RepeatWrapping;
        this.garageGateImages[2].wrapT = THREE.RepeatWrapping;
        this.garageGateImages[3].wrapT = THREE.RepeatWrapping;
        this.garageGateImages[4].wrapT = THREE.RepeatWrapping;

        this.garageGateImages[0].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[1].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[2].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[3].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[4].repeat.set(this.setRepeat, this.setRepeat);

        this.garageGate.position.set(0, -0.25, 3.00);
        this.lock.position.set(0, -0.75, 3.045);

        this.garageGate.minFilter = THREE.NearestFilter;
        this.lock.minFilter = THREE.NearestFilter;
        this.garageGate.receiveShadow = true;

        this.gate.add(
            this.garageGate,
            this.garageGlass,
            this.lock
        )
    }

    buildGate() {
        return this.gate;
    }
}
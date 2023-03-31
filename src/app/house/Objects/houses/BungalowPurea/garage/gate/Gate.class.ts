import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';
import * as THREE from 'three';
import { RepeatWrapping } from 'three';

export default class Gate{
    textureloader = new TextureLoader();
    garageGate: any;
    garageGateImages = [];
    setRepeat: number = 2;

    constructor(){
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
                roughness: 0.5,
                metalness: 0.5
            })
        )
        this.garageGate.position.set(0, -0.25, 3.00);

        this.garageGateImages[0].wrapS = RepeatWrapping;
        this.garageGateImages[1].wrapS = RepeatWrapping;
        this.garageGateImages[2].wrapS = RepeatWrapping;
        this.garageGateImages[3].wrapS = RepeatWrapping;
        this.garageGateImages[4].wrapS = RepeatWrapping;

        this.garageGateImages[0].wrapT = RepeatWrapping;
        this.garageGateImages[1].wrapT = RepeatWrapping;
        this.garageGateImages[2].wrapT = RepeatWrapping;
        this.garageGateImages[3].wrapT = RepeatWrapping;
        this.garageGateImages[4].wrapT = RepeatWrapping;

        this.garageGateImages[0].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[1].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[2].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[3].repeat.set(this.setRepeat, this.setRepeat);
        this.garageGateImages[4].repeat.set(this.setRepeat, this.setRepeat);
    }

    buildGate(){
        return this.garageGate;
    }
}
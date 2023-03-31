import * as THREE from 'three';
import Room from '../Room.Class';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';
import AmbientLight from '../../lights/AmbientLight.class';
import { RepeatWrapping } from 'three';

export default class BungalowPurea {
    house = new THREE.Group();
    garage: any;
    garageGate:any;
    garageLight1 = new AmbientLight('#ffffff', 0.5);
    textureloader:any = new TextureLoader();
    garageGateImages = [];
    setRepeat: number = 2;

    constructor(){
        this.garageGateImages = this.textureloader.loadBungalowPureaGarageGateImages();
        const garage = new Room(6,3,6,100,100);
        this.garage = garage.buildRoom();
        this.garage.position.set(-6, 2, 0);


        this.garageGate = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 2.5, 100, 100),
            new THREE.MeshStandardMaterial({
                map: this.garageGateImages[0],
                transparent:true,
                aoMap: this.garageGateImages[1],
                aoMapIntensity:0.1,
                displacementMap:this.garageGateImages[2],
                displacementScale:0.05,
                normalMap:this.garageGateImages[3],
                roughnessMap:this.garageGateImages[4],
                roughness: 0.5,
                metalness: 0.5
            })
        )
        this.garageGate.position.set(-6, 1.75, 3.00)

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

        this.garageGateImages[0].repeat.set(this.setRepeat,this.setRepeat);
        this.garageGateImages[1].repeat.set(this.setRepeat,this.setRepeat);
        this.garageGateImages[2].repeat.set(this.setRepeat,this.setRepeat);
        this.garageGateImages[3].repeat.set(this.setRepeat,this.setRepeat);
        this.garageGateImages[4].repeat.set(this.setRepeat,this.setRepeat);

        this.house.add(
            this.garage,
            this.garageGate
            );


       
    }

    buildHouse(){
        return this.house;
    }
}
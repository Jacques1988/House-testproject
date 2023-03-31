import * as THREE from 'three';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';

export default class Room{
    roomGeometry:any;
    roomMaterial:any;
    room:any;
    getRoomImages = [];
    textureLoader:any = new TextureLoader();

    constructor(length:number, height:number, width:number, verticesA:number, verticesB:number){
        this.getRoomImages = this.textureLoader.loadBungalowPureaImages();
        this.room = new THREE.Mesh(
            this.roomGeometry = new THREE.BoxGeometry(length, height, width, verticesA, verticesB),
            this.roomMaterial = new THREE.MeshStandardMaterial(
                {
                    map: this.getRoomImages[0],
                    transparent: true,
                    aoMap: this.getRoomImages[1],
                    aoMapIntensity:0.5,
                    displacementMap:this.getRoomImages[2],
                    displacementScale: 0.001,
                    normalMap:this.getRoomImages[3],
                    roughnessMap: this.getRoomImages[4],
                    roughness:1
                }
            )
        )
        this.room.castShadow = true;
        this.room.receiveShadow = true;

    }

    buildRoom(){
        return this.room;
    }
}
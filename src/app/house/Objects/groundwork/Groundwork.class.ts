import * as THREE from 'three';
import { NearestFilter, RepeatWrapping } from 'three';
import TextureLoader from '../../settings/textureLoader/TextureLoader.class';

export default class Groundwork {
    groundworkImages = [];
    groundworkGeometry:any; 
    groundworkMaterial:any;
    groundwork:any;
    repeat:number = 5;
    

    constructor(length:number, height:number, width:number, verticesA:number, verticesB:number){
        const groundworkImages = new TextureLoader();
        this.groundworkImages = groundworkImages.loadGroundworkImages();

        this.groundworkGeometry = new THREE.BoxGeometry(length, height, width, verticesA, verticesB);
        this.groundworkMaterial = new THREE.MeshStandardMaterial({
            map:this.groundworkImages[0],
            transparent: true,
            aoMap: this.groundworkImages[1],
            aoMapIntensity: 1,
            displacementMap: this.groundworkImages[2],
            displacementScale: 0.001,
            normalMap: this.groundworkImages[3],
            roughnessMap: this.groundworkImages[4],
            roughness: 0.5
        })
        this.groundwork = new THREE.Mesh(this.groundworkGeometry, this.groundworkMaterial);

        this.groundwork.minFilter = NearestFilter;

        this.groundworkImages[0].wrapS = RepeatWrapping;
        this.groundworkImages[1].wrapS = RepeatWrapping;
        this.groundworkImages[2].wrapS = RepeatWrapping;
        this.groundworkImages[3].wrapS = RepeatWrapping;
        this.groundworkImages[4].wrapS = RepeatWrapping;

        this.groundworkImages[0].wrapT = RepeatWrapping;
        this.groundworkImages[1].wrapT = RepeatWrapping;
        this.groundworkImages[2].wrapT = RepeatWrapping;
        this.groundworkImages[3].wrapT = RepeatWrapping;
        this.groundworkImages[4].wrapT = RepeatWrapping;


        this.groundworkImages[0].repeat.set(this.repeat,this.repeat);
        this.groundworkImages[1].repeat.set(this.repeat,this.repeat);
        this.groundworkImages[2].repeat.set(this.repeat,this.repeat);
        this.groundworkImages[3].repeat.set(this.repeat,this.repeat);
        this.groundworkImages[4].repeat.set(this.repeat,this.repeat);

        this.groundwork.castShadow = true;
        this.groundwork.receiveShadow = true;

        this.groundwork.position.set(0, 0.25, 0);
    }

   




    buildGroundwork(){
        return this.groundwork;
    }
}
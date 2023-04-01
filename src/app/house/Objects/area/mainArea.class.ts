import * as THREE from 'three';
import { NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, RepeatWrapping } from 'three';
import TextureLoader from '../../settings/textureLoader/TextureLoader.class';

export default class MainArea {
    area: any;
    areaImages = [];
    repeatImage: number = 100;

    constructor() {
        const areaImages = new TextureLoader();
        this.areaImages = areaImages.loadGroundImages();
        this.area = new THREE.Mesh(
            new THREE.PlaneGeometry(200, 200, 100, 100),
            new THREE.MeshStandardMaterial({
                map: this.areaImages[0],
                transparent: true,
                aoMap: this.areaImages[1],
                aoMapIntensity: 0.01,
                displacementMap: this.areaImages[2],
                displacementScale: 0.01,
                normalMap: this.areaImages[3],
                roughnessMap: this.areaImages[4],
                roughness: 1
            })
        );

        this.areaImages[0].minFilter = NearestFilter;

        this.areaImages[0].wrapS = RepeatWrapping;
        this.areaImages[1].wrapS = RepeatWrapping;
        this.areaImages[2].wrapS = RepeatWrapping;
        this.areaImages[3].wrapS = RepeatWrapping;
        this.areaImages[4].wrapS = RepeatWrapping;
        

        this.areaImages[0].wrapT = RepeatWrapping;
        this.areaImages[1].wrapT = RepeatWrapping;
        this.areaImages[2].wrapT = RepeatWrapping;
        this.areaImages[3].wrapT = RepeatWrapping;
        this.areaImages[4].wrapT = RepeatWrapping;

        this.areaImages[0].repeat.set(this.repeatImage,this.repeatImage);
        this.areaImages[1].repeat.set(this.repeatImage,this.repeatImage);
        this.areaImages[2].repeat.set(this.repeatImage,this.repeatImage);
        this.areaImages[3].repeat.set(this.repeatImage,this.repeatImage);
        this.areaImages[4].repeat.set(this.repeatImage,this.repeatImage);


        this.area.rotation.x = - Math.PI * 0.5;

        this.area.receiveShadow = true;
    }

    buildMainArea() {
        return this.area;
    }


}
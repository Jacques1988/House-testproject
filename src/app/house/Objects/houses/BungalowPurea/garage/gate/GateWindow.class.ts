import * as THREE from 'three';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';

export default class GarageWindow{
    garageGlassImages = new TextureLoader().loadGarageGlassImages();
    garageGlass:any;
    setRepeat:number = 1;

    constructor(){
        this.garageGlass = new THREE.Mesh(
            new THREE.PlaneGeometry(4.75, 0.5, 10, 10),
            new THREE.MeshPhysicalMaterial({
                map: this.garageGlassImages[0],
                transparent:true,
                transmission:1,
                aoMap: this.garageGlassImages[1],
                aoMapIntensity:0.1,
                displacementMap: this.garageGlassImages[2],
                displacementScale:0.01,
                normalMap: this.garageGlassImages[3],
                roughnessMap: this.garageGlassImages[4],
                roughness:0,
                metalness:0.1,   
            })
        )

        this.garageGlassImages[0].wrapS = THREE.RepeatWrapping;
        this.garageGlassImages[1].wrapS = THREE.RepeatWrapping;
        this.garageGlassImages[2].wrapS = THREE.RepeatWrapping;
        this.garageGlassImages[3].wrapS = THREE.RepeatWrapping;
        this.garageGlassImages[4].wrapS = THREE.RepeatWrapping;

        this.garageGlassImages[0].wrapT = THREE.RepeatWrapping;
        this.garageGlassImages[1].wrapT = THREE.RepeatWrapping;
        this.garageGlassImages[2].wrapT = THREE.RepeatWrapping;
        this.garageGlassImages[3].wrapT = THREE.RepeatWrapping;
        this.garageGlassImages[4].wrapT = THREE.RepeatWrapping;

        this.garageGlassImages[0].repeat.set(10, this.setRepeat);
        this.garageGlassImages[1].repeat.set(10, this.setRepeat);
        this.garageGlassImages[2].repeat.set(10, this.setRepeat);
        this.garageGlassImages[3].repeat.set(10, this.setRepeat);
        this.garageGlassImages[4].repeat.set(10, this.setRepeat);

        this.garageGlass.minFilter = THREE.NearestFilter;
        this.garageGlass.position.set(0,0.6,3.05);
        this.garageGlass.receiveShadow = true;
    }

    buildGarageGlass(){
        return this.garageGlass;
    }
}
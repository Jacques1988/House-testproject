import * as THREE from 'three';
import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';


export default class Glass {
    GlassImages = new TextureLoader().loadGarageGlassImages();
    Glass: any;
    setRepeat: number = 1;


    constructor(length: number, height: number) {
        this.Glass = new THREE.Mesh(
            new THREE.PlaneGeometry(length, height, 100, 100),
            new THREE.MeshPhysicalMaterial({
                map: this.GlassImages[0],
                transparent: true,
                transmission: 1,
                aoMap: this.GlassImages[1],
                aoMapIntensity: 0.1,
                displacementMap: this.GlassImages[2],
                displacementScale: 0.01,
                normalMap: this.GlassImages[3],
                roughnessMap: this.GlassImages[4],
                roughness: 0,
                metalness: 0.1,
            })

        )

        this.GlassImages[0].wrapS = THREE.RepeatWrapping;
        this.GlassImages[1].wrapS = THREE.RepeatWrapping;
        this.GlassImages[2].wrapS = THREE.RepeatWrapping;
        this.GlassImages[3].wrapS = THREE.RepeatWrapping;
        this.GlassImages[4].wrapS = THREE.RepeatWrapping;

        this.GlassImages[0].wrapT = THREE.RepeatWrapping;
        this.GlassImages[1].wrapT = THREE.RepeatWrapping;
        this.GlassImages[2].wrapT = THREE.RepeatWrapping;
        this.GlassImages[3].wrapT = THREE.RepeatWrapping;
        this.GlassImages[4].wrapT = THREE.RepeatWrapping;

        this.GlassImages[0].repeat.set(10, this.setRepeat);
        this.GlassImages[1].repeat.set(10, this.setRepeat);
        this.GlassImages[2].repeat.set(10, this.setRepeat);
        this.GlassImages[3].repeat.set(10, this.setRepeat);
        this.GlassImages[4].repeat.set(10, this.setRepeat);

        this.Glass.minFilter = THREE.NearestFilter;
        this.Glass.receiveShadow = true;
    }

    buildGarageGlass(x: number, y: number, z: number) {
        this.Glass.position.set(x, y, z);
        return this.Glass;
    }

    buildWindowGlass(x: number, y: number, z: number) {
        return this.Glass;
    }

    
}
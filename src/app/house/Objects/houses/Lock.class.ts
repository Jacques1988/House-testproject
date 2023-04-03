import * as THREE from 'three';
import TextureLoader from '../../settings/textureLoader/TextureLoader.class';


export default class Lock{
    lock: any;
    lockImages = new TextureLoader().loadLockImages();

    constructor(lenght:number, height:number){
        this.lock = new THREE.Mesh(
            new THREE.PlaneGeometry(lenght, height, 100, 100),
            new THREE.MeshStandardMaterial({
                map: this.lockImages[0],
                transparent: true,
                aoMap: this.lockImages[1],
                aoMapIntensity:0.01,
                displacementMap: this.lockImages[2],
                displacementScale: 0.025,
                normalMap: this.lockImages[3],
                metalnessMap:this.lockImages[4],
                metalness: -0.8,
                alphaMap: this.lockImages[5],
                alphaTest:0.1,
                roughnessMap: this.lockImages[6],
                roughness: 0.5
            })
        )
        this.lock.minFilter = THREE.NearestFilter;
    }

    buildLock(x:number, y:number, z:number){
        this.lock.position.set(x, y, z);
        return this.lock;
    }
}
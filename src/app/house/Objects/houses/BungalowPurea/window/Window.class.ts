import * as THREE from 'three';
import TextureLoader from '../../../../settings/textureLoader/TextureLoader.class';
import WindowGlass from './WindowGlass.class';

export default class Window {
    windowImages = new TextureLoader().loadWindowImages();
    windowBorder: any;
    windowGlass: any;
    window: any = new THREE.Group();
    length: any;
    height: any;

    constructor(length: number, height: number) {
        this.length = length;
        this.height = height;
        this.windowBorder = new THREE.Mesh(
            new THREE.PlaneGeometry(this.length, this.height, 100, 100),
            new THREE.MeshPhysicalMaterial({
                color: new THREE.Color('#242424'),
                map: this.windowImages[0],
                transparent: true,
                aoMap: this.windowImages[1],
                aoMapIntensity: 0.5,
                displacementMap: this.windowImages[2],
                displacementScale: 0.05,
                normalMap: this.windowImages[3],
                metalnessMap: this.windowImages[4],
                metalness: 0.1,
                alphaMap: this.windowImages[5],
                alphaTest: 0,
                roughnessMap: this.windowImages[6],
                roughness: 1,
                transmission: 0,
            })
        )


    }

    buildWindow(x: number, y: number, z: number) {
        this.windowGlass = new WindowGlass(this.length * 0.75, this.height * 0.7).buildWindowGlass(x, y, z);
        this.window.position.set(x, y, z)
        this.window.add(this.windowBorder, this.windowGlass);
        
        return this.window;
    }
}
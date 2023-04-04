import TextureLoader from 'src/app/house/settings/textureLoader/TextureLoader.class';
import * as THREE from 'three';



export default class Gutter {
    gutterImages = [];
    gutter: any = new THREE.Group();
    gutterComponent: any;
    repeatX: number = 10
    repeatY:number = 0.3
    

    constructor(length: number, height: number, width:number, verticesA: number, verticesB: number) {
        this.gutterImages = new TextureLoader().loadGutterImages();

        this.gutterComponent = new THREE.Mesh(
            new THREE.BoxGeometry(length, height, width, verticesA, verticesB),
            new THREE.MeshStandardMaterial({
                map: this.gutterImages[0],
                transparent: true,
                aoMap: this.gutterImages[1],
                aoMapIntensity: 0.5,
                displacementMap: this.gutterImages[2],
                displacementScale: 0.5,
                normalMap: this.gutterImages[3],
                metalnessMap: this.gutterImages[4],
                metalness: 0.5,
                roughnessMap: this.gutterImages[5],
                roughness: 1
            })
        );


        this.gutterImages[0].wrapS = THREE.RepeatWrapping
        this.gutterImages[1].wrapS = THREE.RepeatWrapping
        this.gutterImages[2].wrapS = THREE.RepeatWrapping
        this.gutterImages[3].wrapS = THREE.RepeatWrapping
        this.gutterImages[4].wrapS = THREE.RepeatWrapping
        this.gutterImages[5].wrapS = THREE.RepeatWrapping

        this.gutterImages[0].wrapT = THREE.RepeatWrapping
        this.gutterImages[1].wrapT = THREE.RepeatWrapping
        this.gutterImages[2].wrapT = THREE.RepeatWrapping
        this.gutterImages[3].wrapT = THREE.RepeatWrapping
        this.gutterImages[4].wrapT = THREE.RepeatWrapping
        this.gutterImages[5].wrapT = THREE.RepeatWrapping

        this.gutterImages[0].repeat.set(this.repeatX, this.repeatY)
        this.gutterImages[1].repeat.set(this.repeatX, this.repeatY)
        this.gutterImages[2].repeat.set(this.repeatX, this.repeatY)
        this.gutterImages[3].repeat.set(this.repeatX, this.repeatY)
        this.gutterImages[4].repeat.set(this.repeatX, this.repeatY)
        this.gutterImages[5].repeat.set(this.repeatX, this.repeatY)
    }

    buildGutter(x: number, y: number, z: number) {
        this.gutterComponent.position.set(x, y, z);

        this.gutter.add(
            this.gutterComponent
        )


        return this.gutter;
    }
}
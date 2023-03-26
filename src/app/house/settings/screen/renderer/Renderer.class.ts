import { provideImgixLoader } from '@angular/common';
import * as THREE from 'three';


export default class Renderer {
    renderer: any;
    canvas: HTMLElement;
    scene:any;
    camera:any;
    sizes:any;

    constructor(canvas:HTMLElement, camera:any, scene:any, sizes:any) {
        this.scene = scene.startScene();
        this.camera = camera;
        this.canvas = canvas;
        this.sizes = sizes;

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        
        
        this.rendererUpdates();
        this.live();
    }

    rendererUpdates(){
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    live = () => {
        
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.live)
    }
}
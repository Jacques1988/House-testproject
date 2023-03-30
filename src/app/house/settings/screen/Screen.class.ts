import Renderer from "./renderer/Renderer.class";
import MainCamera from "./cameras/MainCamera.class";
import Scene from "./scene/Scene.class";

import screenfull from "screenfull";

export default class Screen {
    renderer: any;
    mainCamera: any;
    scene: any;
    sizes: any = {
        width: window.innerWidth,
        height: window.innerHeight,
        aspect: window.innerWidth / window.innerHeight
    }


    constructor() {

    }

    start(canvas: HTMLElement) {

        this.mainCamera = new MainCamera(this.sizes);
        this.scene = new Scene(this.mainCamera.camera);
        this.renderer = new Renderer(canvas, this.mainCamera.camera, this.scene, this.sizes);

        window.addEventListener('resize', () => {

            this.sizes.width = window.innerWidth;
            this.sizes.height = window.innerHeight;
            this.sizes.aspect = window.innerWidth / window.innerHeight;
            this.mainCamera.camera.aspect = this.sizes.aspect;
            this.mainCamera.startCamera();
            this.renderer.rendererUpdates();
        })

        window.addEventListener('dblclick', () => {
            if(screenfull.isEnabled){
                screenfull.toggle();
                if(screenfull.isEnabled){
                    screenfull.on('change', () => {console.log(screenfull.isFullscreen ? ' is Fullscreen' : 'no Fullscreen')})
                }
            }
        })  
    }
}
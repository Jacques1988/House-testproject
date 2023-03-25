import * as THREE from 'three';

export default class TextureLoader{
    loadingManager = new THREE.LoadingManager();
    textureLoader = new THREE.TextureLoader(this.loadingManager);


    constructor(){
        this.loadingManager.onStart = () => {
            console.log('Einen Moment bitte, Bilder werden geladen');
        }
        this.loadingManager.onLoad = () => {
            console.log('Fertig geladen');
        }
    }

    
}
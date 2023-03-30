import * as THREE from 'three';

export default class TextureLoader{
    loadingManager = new THREE.LoadingManager();
    textureLoader = new THREE.TextureLoader(this.loadingManager);
    groundImages = [];

    constructor(){
        this.loadingManager.onStart = () => {
            console.log('Einen Moment bitte, Bilder werden geladen');
        }
        this.loadingManager.onLoad = () => {
            console.log('Fertig geladen');
        }
    }

    // Load MainArea
    loadGroundImages(){
       const Grass_Color = this.textureLoader.load('../../assets/images/ground/Grass_Color.jpg');
       const Grass_AO = this.textureLoader.load('../../assets/images/ground/Grass_AO.jpg');
       const Grass_Height = this.textureLoader.load('../../assets/images/ground/Grass_Height.png');
       const Grass_Normal = this.textureLoader.load('../../assets/images/ground/Grass_Normal.jpg');
       const Grass_Roughness = this.textureLoader.load('../../assets/images/ground/Grass_Color.jpg');
       this.groundImages.push(Grass_Color, Grass_AO, Grass_Height, Grass_Normal, Grass_Roughness);
       return this.groundImages;
    }

    
}
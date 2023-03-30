import * as THREE from 'three';

export default class TextureLoader {
    loadingManager = new THREE.LoadingManager();
    textureLoader = new THREE.TextureLoader(this.loadingManager);

    //Grounds
    groundImages = [];
    groundworkImages = [];

    // Houses
    modernHouseWall = [];

    constructor() {
        this.loadingManager.onStart = () => {
            console.log('Einen Moment bitte, Bilder werden geladen');
        }
        this.loadingManager.onLoad = () => {
            console.log('Fertig geladen');
        }
    }

    // Load MainArea
    loadGroundImages() {
        const Grass_Color = this.textureLoader.load('../../assets/images/ground/Grass_Color.jpg');
        const Grass_AO = this.textureLoader.load('../../assets/images/ground/Grass_AO.jpg');
        const Grass_Height = this.textureLoader.load('../../assets/images/ground/Grass_Height.png');
        const Grass_Normal = this.textureLoader.load('../../assets/images/ground/Grass_Normal.jpg');
        const Grass_Roughness = this.textureLoader.load('../../assets/images/ground/Grass_Color.jpg');
        this.groundImages.push(Grass_Color, Grass_AO, Grass_Height, Grass_Normal, Grass_Roughness);
        return this.groundImages;
    }


    loadGroundworkImages() {
        const Groundwork_Color = this.textureLoader.load('../../assets/images/groundwork/elegantGroundwork/Groundwork_Color.jpg');
        const Groundwork_AO = this.textureLoader.load('../../assets/images/groundwork/elegantGroundwork/Groundwork_AO.jpg');
        const Groundwork_Height = this.textureLoader.load('../../assets/images/groundwork/elegantGroundwork/Groundwork_Height.png');
        const Groundwork_Normal = this.textureLoader.load('../../assets/images/groundwork/elegantGroundwork/Groundwork_Normal.jpg');
        const Groundwork_Roughness = this.textureLoader.load('../../assets/images/groundwork/elegantGroundwork/Groundwork_Color.jpg');
        this.groundworkImages.push(Groundwork_Color, Groundwork_AO, Groundwork_Height, Groundwork_Normal, Groundwork_Roughness);
        return this.groundworkImages;
    }

    loadModernHouseImages() {
        const Modern_Color = this.textureLoader.load('../../assets/images/houses/modernDecent/Modern_Color.jpg');
        const Modern_AO = this.textureLoader.load('../../assets/images/houses/modernDecent/Modern_AO.jpg');
        const Modern_Height = this.textureLoader.load('../../assets/images/houses/modernDecent/Modern_Color.png');
        const Modern_Normal = this.textureLoader.load('../../assets/images/houses/modernDecent/Modern_Normal.jpg');
        const Modern_Roughness = this.textureLoader.load('../../assets/images/houses/modernDecent/Modern_Roughness.jpg');
        this.modernHouseWall.push(Modern_Color, Modern_AO, Modern_Height, Modern_Normal, Modern_Roughness);
        return this.modernHouseWall;
    }

}
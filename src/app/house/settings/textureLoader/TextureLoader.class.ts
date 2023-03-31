import * as THREE from 'three';

export default class TextureLoader {
    loadingManager = new THREE.LoadingManager();
    textureLoader = new THREE.TextureLoader(this.loadingManager);

    //Grounds
    groundImages = [];
    groundworkImages = [];

    // Houses
    bungalowPureaWallImages = [];
    garageGateImages = [];

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

    loadBungalowPureaImages() {
        const Modern_Color = this.textureLoader.load('../../assets/images/houses/BungalowPurea/walls/Modern_Color.jpg');
        const Modern_AO = this.textureLoader.load('../../assets/images/houses/BungalowPurea/walls/Modern_AO.jpg');
        const Modern_Height = this.textureLoader.load('../../assets/images/houses/BungalowPurea/walls/Modern_Height.png');
        const Modern_Normal = this.textureLoader.load('../../assets/images/houses/BungalowPurea/walls/Modern_Normal.jpg');
        const Modern_Roughness = this.textureLoader.load('../../assets/images/houses/BungalowPurea/walls/Modern_Roughness.jpg');
        this.bungalowPureaWallImages.push(Modern_Color, Modern_AO, Modern_Height, Modern_Normal, Modern_Roughness);
        return this.bungalowPureaWallImages;
    }

    loadBungalowPureaGarageGateImages(){
        const Garage_Color = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/Garage_Color.jpg');
        const Garage_AO = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/Garage_AO.jpg');
        const Garage_Height = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/Garage_Height.png');
        const Garage_Normal = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/Garage_Normal.jpg');
        const Garage_Metalness = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/Garage_Metalness.jpg');
        this.garageGateImages.push(Garage_Color, Garage_AO, Garage_Height, Garage_Normal, Garage_Metalness);
        return this.garageGateImages;
    }

}
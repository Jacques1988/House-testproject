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
    garageGlassImages = [];
    windowImages = [];

    //Locks
    lockImages = [];

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
        const Groundwork_Color = this.textureLoader.load('../../assets/images/groundwork/Gravel/Groundwork_Color.jpg');
        const Groundwork_AO = this.textureLoader.load('../../assets/images/groundwork/Gravel/Groundwork_AO.jpg');
        const Groundwork_Height = this.textureLoader.load('../../assets/images/groundwork/Gravel/Groundwork_Height.png');
        const Groundwork_Normal = this.textureLoader.load('../../assets/images/groundwork/Gravel/Groundwork_Normal.jpg');
        const Groundwork_Roughness = this.textureLoader.load('../../assets/images/groundwork/Gravel/Groundwork_Color.jpg');
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

    loadLockImages(){
        const Lock_Color = this.textureLoader.load('../../assets/images/houses/locks/Lock_Color.jpg');
        const Lock_AO = this.textureLoader.load('../../assets/images/houses/locks/Lock_AO.jpg');
        const Lock_Height = this.textureLoader.load('../../assets/images/houses/locks/Lock_Height.png');
        const Lock_Normal = this.textureLoader.load('../../assets/images/houses/locks/Lock_Normal.jpg');
        const Lock_Metalness = this.textureLoader.load('../../assets/images/houses/locks/Lock_Metalness.jpg');
        const Lock_Opacity = this.textureLoader.load('../../assets/images/houses/locks/Lock_Opacity.jpg');
        const Lock_Roughness = this.textureLoader.load('../../assets/images/houses/locks/Lock_Roughness.jpg');
        this.lockImages.push(Lock_Color, Lock_AO, Lock_Height, Lock_Normal, Lock_Metalness, Lock_Opacity, Lock_Roughness);
        return this.lockImages;
    }

    loadGarageGlassImages(){
        const Glass_Color = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/GarageWindow/Glass_Color.jpg');
        const Glass_AO = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/GarageWindow/Glass_AO.jpg');
        const Glass_Height = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/GarageWindow/Glass_Height.png');
        const Glass_Normal = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/GarageWindow/Glass_Normal.jpg');
        const Glass_Roughness = this.textureLoader.load('../../assets/images/houses/BungalowPurea/garage/GarageWindow/Glass_Roughness.jpg');
        this.garageGlassImages.push(Glass_Color, Glass_AO, Glass_Height, Glass_Normal, Glass_Roughness);
        return this.garageGlassImages;
    }

    loadWindowImages(){
        const Window_Color = this.textureLoader.load('../../assets/images/houses/Windows/Window_Color.jpg');
        const Window_AO = this.textureLoader.load('../../assets/images/houses/Windows/Window_AO.jpg');
        const Window_Height = this.textureLoader.load('../../assets/images/houses/Windows/Window_Height.png');
        const Window_Normal = this.textureLoader.load('../../assets/images/houses/Windows/Window_Normal.jpg');
        const Window_Metalness = this.textureLoader.load('../../assets/images/houses/Windows/Window_Metalness.jpg');
        const Window_Alpha = this.textureLoader.load('../../assets/images/houses/Windows/Window_Alpha.jpg');
        const Window_Roughness = this.textureLoader.load('../../assets/images/houses/Windows/Window_Roughness.jpg');
        this.windowImages.push(Window_Color, Window_AO, Window_Height, Window_Normal, Window_Metalness, Window_Alpha, Window_Roughness);
        return this.windowImages;
    }

}
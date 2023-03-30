import * as THREE from 'three';


export default class Cubeloader {


    constructor(){
        
    }

    loadingManager = new THREE.LoadingManager();
    mainBackground = new THREE.CubeTextureLoader().setPath('../../assets/images/environments/').load(
        [
            'px.png',
            'nx.png',
            'py.png',
            'ny.png',
            'pz.png',
            'nz.png'
        ])


        loadMainBackground(){
            return this.mainBackground;
        }
}
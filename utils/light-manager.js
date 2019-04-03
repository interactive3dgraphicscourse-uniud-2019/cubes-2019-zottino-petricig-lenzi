/*
* TODO doc
*/

// alert('light-manager imported')


function CreateHemiLight(){
    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
	hemiLight.color.setHSL( 0.6, 1, 0.6 );
	hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
    hemiLight.position.set( 0, 500, 0 );
    return hemiLight;
}


function CreateDirLight(){
    var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
	dirLight.color.setHSL( 0.1, 1, 0.95 );
	dirLight.position.set( -1, 1.75, 1 );
	dirLight.position.multiplyScalar( 50 );
	dirLight.castShadow = true;
	dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    return dirLight;
}
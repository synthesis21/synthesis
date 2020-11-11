import * as THREE from '../node_modules/three/build/three.module.js';
		import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
		import { MarchingCubes } from '../node_modules/three/examples/jsm/objects/MarchingCubes.js';

		const nav = document.getElementById("navWrap");
		const navHeight = nav.offsetHeight;


		var container;

		var camera, scene, renderer;

		var materials, current_material;

		var light, pointLight, ambientLight;

		var effect, resolution;

		var effectController;

		var time = 0;
		var clock = new THREE.Clock();

		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
			isMobile = true;
		}

		var refractionRatio;
		function getRefraction(){
			if(isMobile){
				refractionRatio = 0.96;
			}else{
				refractionRatio = 0.9;
			}
			return refractionRatio;
		}

		var logoImg;
		function getLogo(){
			if(isMobile){
				logoImg = 'nz_s';
			}else{
				logoImg = 'nz_white';
			}
			return logoImg;
		}

		init();
		animate();

		function init() {

			container = document.getElementById( 'container' );

			// CAMERA

			camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 100000 );
        	camera.position.z = 4000;

			// SCENE

			scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xffffff );
			scene.background = new THREE.CubeTextureLoader()
            .setPath( './cubeMap/cube_' )
            .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', getLogo() + '.jpg' ] );

			// LIGHTS

			light = new THREE.DirectionalLight( 0xffffff );
			light.position.set( 0.5, 0.5, 1 );
			//scene.add( light );

			pointLight = new THREE.PointLight( 0xff3300 );
			pointLight.position.set( 0, 0, 100 );
			//scene.add( pointLight );

			ambientLight = new THREE.AmbientLight( 0xffffff );
			scene.add( ambientLight );

			// MATERIALS

			materials = generateMaterials();
			current_material = "liquid";

			// MARCHING CUBES
			if(isMobile){
				resolution = 50;
			}else{
				resolution = 60;
			}

			effect = new MarchingCubes( resolution, materials[ current_material ].m, true, true );
			effect.position.set( 0, 0, 0 );
			effect.scale.set( 4200, 4200, 4200 );

			effect.enableUvs = false;
			effect.enableColors = false;

			scene.add( effect );

			// RENDERER

			renderer = new THREE.WebGLRenderer();
			//renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight);
			container.appendChild( renderer.domElement );

			// CONTROLS

			/* var controls = new OrbitControls( camera, renderer.domElement );
			controls.minDistance = 500;
			controls.maxDistance = 5000; */

			// EVENTS

			window.addEventListener( 'resize', onWindowResize, false );

		}

		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );

		}

		function generateMaterials() {

			// environment map

			var path = "./cubeMap/cube_";
			var format = '.jpg';
			var urls = [
				path + 'px' + format, path + 'nx' + format,
				path + 'py' + format, path + 'ny' + format,
				path + 'pz' + format, path + getLogo() + format
			];

			var cubeTextureLoader = new THREE.CubeTextureLoader();

			var refractionCube = cubeTextureLoader.load( urls );
			refractionCube.mapping = THREE.CubeRefractionMapping;

			var materials = {
				"liquid": {
					m: new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: refractionCube, refractionRatio: getRefraction() } ),
					h: 2, s: 0, l: 1
				}
			};

			return materials;

		}

		function createShaderMaterial( shader, light, ambientLight ) {

			var u = THREE.UniformsUtils.clone( shader.uniforms );

			var vs = shader.vertexShader;
			var fs = shader.fragmentShader;

			var material = new THREE.ShaderMaterial( { uniforms: u, vertexShader: vs, fragmentShader: fs } );

			material.uniforms[ "uDirLightPos" ].value = light.position;
			material.uniforms[ "uDirLightColor" ].value = light.color;

			material.uniforms[ "uAmbientLightColor" ].value = ambientLight.color;

			return material;

		}

		//

		// this controls content of marching cubes voxel field
		var xpos = 0;
		var ypos = 0;
		function findScreenCoords(mouseEvent){
			
			if (mouseEvent)
			{
				//FireFox
				xpos = mouseEvent.screenX;
				ypos = mouseEvent.screenY;
			}
			else
			{
				//IE
				xpos = window.event.screenX;
				ypos = window.event.screenY;
			}
			//console.log(xpos);
			//document.getElementById("screenCoords").innerHTML = xpos + ", " + ypos;
		}

		function updateMouseCoords(){
			document.getElementById("container").onmousemove = findScreenCoords;
		}

		updateMouseCoords();

		function updateCubes( object, time, numblobs, floor, wallx, wallz ) {

			object.reset();

			// fill the field with some metaballs

			var i, ballx, bally, ballz, subtract, strength;
			
			subtract = 12;
			strength = 2 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

			for ( i = 0; i < numblobs; i ++ ) {

				ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5 - xpos/6000;
				bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77 + ypos/6000; // dip into the floor
				ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

				object.addBall( ballx, bally, ballz, strength, subtract );

			}

			if ( floor ) object.addPlaneY( 0, 220 );
			if ( wallz ) object.addPlaneZ( 2, 12 );
			if ( wallx ) object.addPlaneX( 2, 12 );

		}

		//

		function animate() {

			requestAnimationFrame( animate );

			render();

		}

		function render() {

			var delta = clock.getDelta();

			time += delta * 0.15;

			// marching cubes
			if(isMobile){
				resolution = 50;
				var numBlobs = 6;
			}else{
				resolution = 60;
				var numBlobs = 8;
			}
			effect.isolation = 50;

			/* if ( effectController.resolution !== resolution ) {

				resolution = 80;
				//effect.init( Math.floor( resolution ) );

			} */

			/* if ( effectController.isolation !== effect.isolation ) {

				effect.isolation = effectController.isolation;

			} */


			updateCubes( effect, time, numBlobs, false, false, false );

			// materials

			if ( effect.material instanceof THREE.ShaderMaterial ) {

				effect.material.uniforms[ "uBaseColor" ].value.setHSL( effectController.hue, effectController.saturation, effectController.lightness );

			} /* else {

				effect.material.color.setHSL( effectController.hue, effectController.saturation, effectController.lightness );

			}

			// lights

			light.position.set( effectController.lx, effectController.ly, effectController.lz );
			light.position.normalize();

			pointLight.color.setHSL( effectController.lhue, effectController.lsaturation, effectController.llightness ); */

			// render

			renderer.render( scene, camera );

		}
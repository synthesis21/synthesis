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

		init();
		animate();

		function init() {

			container = document.getElementById( 'container' );

			// CAMERA

			camera = new THREE.PerspectiveCamera( 95, window.innerWidth / window.innerHeight, 1, 100000 );
        	camera.position.z = 3000;

			// SCENE

			scene = new THREE.Scene();
			scene.background = new THREE.Color( 0xffffff );
			scene.background = new THREE.CubeTextureLoader()
            .setPath( './cubeMap/cube_' )
            .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz_white.jpg' ] );

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

			resolution = 80;

			effect = new MarchingCubes( resolution, materials[ current_material ].m, true, true );
			effect.position.set( 0, 0, 0 );
			effect.scale.set( 2700, 2700, 2700 );

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

			var controls = new OrbitControls( camera, renderer.domElement );
			controls.minDistance = 500;
			controls.maxDistance = 5000;

			

			// EVENTS

			window.addEventListener( 'resize', onWindowResize, false );

		}

		//

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
				path + 'pz' + format, path + 'nz_white' + format
			];

			var cubeTextureLoader = new THREE.CubeTextureLoader();

			//var reflectionCube = cubeTextureLoader.load( urls );
			var refractionCube = cubeTextureLoader.load( urls );
			refractionCube.mapping = THREE.CubeRefractionMapping;

			
/* 			var texture = new THREE.TextureLoader().load( "textures/uv_grid_opengl.jpg" );
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping; */

			var materials = {

/* 				"chrome": {
					m: new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: reflectionCube } ),
					h: 0, s: 0, l: 1
				}, */

				"liquid": {
					m: new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: refractionCube, refractionRatio: 0.9 } ),
					h: 2, s: 0, l: 1
				},

/* 				"shiny": {
					m: new THREE.MeshStandardMaterial( { color: 0x550000, envMap: reflectionCube, roughness: 0.1, metalness: 1.0 } ),
					h: 0, s: 0.8, l: 0.2
				}, */

				"matte": {
					m: new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x111111, shininess: 1 } ),
					h: 0, s: 0, l: 1
				},

				"flat": {
					m: new THREE.MeshLambertMaterial( { color: 0x000000, flatShading: true } ),
					h: 0, s: 0, l: 1
				},

				/* "textured": {
					m: new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 1, map: texture } ),
					h: 0, s: 0, l: 1
				}, */

				"colors": {
					m: new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 2, vertexColors: true } ),
					h: 0, s: 0, l: 1
				},

				"multiColors": {
					m: new THREE.MeshPhongMaterial( { shininess: 2, vertexColors: true } ),
					h: 0, s: 0, l: 1
				},

				"plastic": {
					m: new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x888888, shininess: 250 } ),
					h: 0.6, s: 0.8, l: 0.1
				},

				

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
			var rainbow = [
				new THREE.Color( 0xff0000 ),
				new THREE.Color( 0xff7f00 ),
				new THREE.Color( 0xffff00 ),
				new THREE.Color( 0x00ff00 ),
				new THREE.Color( 0x0000ff ),
				new THREE.Color( 0x4b0082 ),
				new THREE.Color( 0x9400d3 )
			];
			subtract = 12;
			strength = 2 / ( ( Math.sqrt( numblobs ) - 1 ) / 4 + 1 );

			for ( i = 0; i < numblobs; i ++ ) {

				ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5 - xpos/6000;
				bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77 + ypos/6000; // dip into the floor
				ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

				if ( current_material === 'multiColors' ) {

					object.addBall( ballx, bally, ballz, strength, subtract, rainbow[ i % 7 ] );

				} else {

					object.addBall( ballx, bally, ballz, strength, subtract );

				}

			}

			if ( floor ) object.addPlaneY( 2, 220 );
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

			resolution = 100;
			effect.isolation = 50;

			/* if ( effectController.resolution !== resolution ) {

				resolution = 80;
				//effect.init( Math.floor( resolution ) );

			} */

			/* if ( effectController.isolation !== effect.isolation ) {

				effect.isolation = effectController.isolation;

			} */

			var numBlobs = 15;

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
// Three JS, animated cube
var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById('box-one').appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry( 1, 1, 1);
            var material = new THREE.MeshPhongMaterial( { 
                color: 0xEEAA99, 
                specular: 0xeeeeee,
                reflectivity: 0.25
            } );
            var cube = new THREE.Mesh( geometry, material );
            
            scene.add( cube );


            var spotLight = new THREE.SpotLight( 0x2B4C7E );
            spotLight.position.set( 10, 100, 100 );

            spotLight.castShadow = true;

            spotLight.shadowMapWidth = 1024;
            spotLight.shadowMapHeight = 1024;

            spotLight.shadowCameraNear = 10;
            spotLight.shadowCameraFar = 10;
            spotLight.shadowCameraFov = 10;

            spotLight.intensity = 0.25;

            scene.add( spotLight );

            scene.add(new THREE.AmbientLight(0xe3e3e3));

            camera.position.z = 3;

            var render = function () {
                requestAnimationFrame( render );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            render();










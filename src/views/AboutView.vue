<template>
  <div class="about">
    <h1>This is an about page</h1>
    <canvas id="bg"></canvas>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  #bg {
    width: 500;
    height: 500;
  }
}
</style>

<script>
import * as THREE from 'three';
import oneUrl from '../assets/me_beer_flip.jpg';
import twoUrl from '../assets/me_2023.jpg';
import threeUrl from '../assets/me_green.jpg';
import fourUrl from '../assets/me_irl.jpg';
import fiveUrl from '../assets/me_ladef.jpg';
import sixUrl from '../assets/me.jpg';

export default {
  data () {
    return {
      myvar: 0
    }
  },
  mounted() {
    var scene = new THREE.Scene();
    const selector = document.querySelector('#bg');
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: selector
    });
    renderer.setSize(500, 500);

    var materials = [
    new THREE.MeshBasicMaterial({
           map: new THREE.TextureLoader().load(oneUrl)
       }),
       new THREE.MeshBasicMaterial({
           map: new THREE.TextureLoader().load(twoUrl)
       }),
       new THREE.MeshBasicMaterial({
           map: new THREE.TextureLoader().load(threeUrl)
       }),
       new THREE.MeshBasicMaterial({
           map: new THREE.TextureLoader().load(fourUrl)
       }),
       new THREE.MeshBasicMaterial({
           map: new THREE.TextureLoader().load(fiveUrl)
       }),
       new THREE.MeshBasicMaterial({
           map: new THREE.TextureLoader().load(sixUrl)
       })
    ];
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const cube = new THREE.Mesh(geometry, materials);

    scene.add(cube);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;

    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    // White directional light at 70% intensity shining from the top.
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
    scene.add( directionalLight );

// 01 87 27 95 70
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 37) {
        cube.rotation.y--
    } else if (keyCode == 40) {
        cube.rotation.x--;
    } else if (keyCode == 39) {
        cube.rotation.y++
    } else if (keyCode == 38) {
        cube.rotation.x++;
    } else if (keyCode == 65) {
        cube.position.set(0, 0, 0);
    }
    render();
};
let render = function() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
const el = document.getElementById("bg");
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
  function handleStart(evt) {
    console.info("handleStart");
  };
  function handleEnd(evt) {
    console.info("handleEnd");
  };
  function handleCancel(evt) {
    console.info("handleCancel");
  };
  let x = 0;
  let y = 0;
  function handleMove(evt) {
    evt.preventDefault();
    console.info("handleMove");
    let newX = evt.changedTouches[0].clientX;
    let newY = evt.changedTouches[0].clientY;
    if (x > newX)
      cube.rotation.y -= 0.01;
    else
      cube.rotation.y += 0.01;
    if (y > newY)
      cube.rotation.x -= 0.01;
    else
      cube.rotation.x += 0.01;
    x = newX;
    y = newY;
  };
render();

  },
  methods: {

   }
}

</script>

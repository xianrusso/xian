let camera, scene, renderer;
const canvas = document.querySelector("#canvas");

const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

function main() {

  renderer = new THREE.WebGLRenderer({canvas});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 1.8;
  
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf2f2f2);
   
  const color = 0xffffff;
  const intensity = 1;
  const ambientLight = new THREE.AmbientLight(color, intensity);
  scene.add(ambientLight);
    
  const dirLight = new THREE.DirectionalLight(color, intensity);
  dirLight.position.set = (100, 100, -2); 
  scene.add(dirLight);
  
  const geoWidth = 1;
  const geoHeight = 1;
  const geoDepth = 1;
  const geometry = new THREE.DodecahedronGeometry(geoWidth, geoHeight, geoDepth);
  
  function makeInstance(geometry, color, x) {
    let material = new THREE.MeshPhongMaterial({color});
    material.wireframe = true;
    material.wireframeLinecap = "round";
    material.shininess = 80;
    const dode = new THREE.Mesh(geometry, material);
    dode.position.x = x;
    // dode.castShadow = true;
    // dode.receiveShadow = false;
    scene.add(dode);
    return dode;
  }
  
  const dodes = [
    makeInstance(geometry, 0xaa8844, 0)
  ]
  
  function resizeRendererToDisplaySize(renderer) {
    canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvas.clientWidth * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  
  function render(time) {
    time *= 0.001;
    
    // if (resizeRendererToDisplaySize(renderer)) {
    //   const canvas = renderer.domElement;
    //   camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //   camera.updateProjectionMatrix();
    // }
    
    // dodes.forEach((dode, ndx) => {
    //   const speed = 1 + ndx * .1;
    //   const rot = time * speed;
    //   dode.rotation.x = rot;
    //   dode.rotation.y = rot;
    // });
    
    renderer.render(scene, camera);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener( 'resize', onResize, false);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();

function onMouseMove(event) {
  mouse.x = ( event.clientX - windowHalf.x );
  mouse.y = ( event.clientY - windowHalf.x );
}

function onResize(event) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = window.devicePixelRatio;
  const cwidth = canvas.clientWidth * pixelRatio | 0;
  const cheight = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(cwidth, cheight, false);
  }
  
  windowHalf.set(width/2, height/2);
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  //renderer.setSize(width, height);
}

function anim() {
  target.x = ( 1 - mouse.x ) * 0.002;
  target.y = ( 1 - mouse.y ) * 0.002;

  camera.position.x += ( target.x - camera.position.x ) * 0.05;
  camera.position.y += ( - target.y - camera.position.y ) * 0.05;
  camera.lookAt(scene.position);
  
  requestAnimationFrame( anim );
  renderer.render( scene, camera );
}
anim();

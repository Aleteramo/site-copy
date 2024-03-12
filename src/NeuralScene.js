import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import logoImage from './immagini2/logounite.jpeg';
import umanoideImage from './immagini2/umanoide.png';



const NeuralScene = ({ isScrolled }) => {
  const mountRef = useRef(null);
  const umanoideRef = useRef();
  const cubeRef = useRef();
  const manichino3DRef = useRef();


  useEffect(() => {
    const currentRef = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      controls.enablePan = false;
      controls.enableZoom = false; // o controlli di zoom specifici per mobile
      controls.enableRotate = false;
    }
    controls.enableZoom = false;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(logoImage, function (texture) {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearFilter; // Potrebbe migliorare la qualità su ridimensionamenti minori
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.set(isScrolled ? 2 : 0, isScrolled ? 2 : 1, 1);
      scene.add(cube);
      cubeRef.current = cube;
    });

    // Carica l'immagine dell'umanoide come texture su un cubo trasparente
    const umanoideTexture = textureLoader.load(umanoideImage);
    const umanoideMaterials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Faccia superiore completamente trasparente
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Faccia superiore completamente trasparente
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Faccia superiore completamente trasparente
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }), // Faccia superiore completamente trasparente
      new THREE.MeshBasicMaterial({ map: umanoideTexture, transparent: true }), // Faccia destra
      new THREE.MeshBasicMaterial({ map: umanoideTexture, transparent: true }), // Faccia sinistra
    ];
    const umanoideGeometry = new THREE.BoxGeometry(0.9, 0.9, 1);
    const umanoide = new THREE.Mesh(umanoideGeometry, umanoideMaterials);
    umanoide.position.set(-3.5, -1.8, 0);
    scene.add(umanoide);
    umanoideRef.current = umanoide;

  

    
    // Particelle
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 10000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (Math.random() * 10);
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({ size: 0.007 });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Luci
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 0);
    scene.add(directionalLight);

   // Carica il manichino 3D
const loader = new GLTFLoader();
loader.load('/3dumanoide.glb', function (gltf) {
  gltf.scene.scale.set(0.5, 0.5, 0.5); // Aumenta la scala se necessario
  gltf.scene.position.set(0, 0, 0); // Imposta la posizione iniziale
  gltf.scene.rotation.y = Math.PI; // Ruota di 180 gradi se necessario
  scene.add(gltf.scene);
  manichino3DRef.current = gltf.scene; // Assegna la scena caricata al ref
  animate(); // Avvia l'animazione dopo che il modello è stato caricato
}, undefined, function (error) {
  console.error('An error happened while loading the model:', error);
});

// Animazione
let clock = new THREE.Clock();

const animate = () => {
  requestAnimationFrame(animate);

  let time = clock.getElapsedTime();

  if (manichino3DRef.current) {
    // Movimento fluttuante basato su funzioni sinusoidali per x, y, z
    manichino3DRef.current.position.x = Math.sin(time * 0.5) * 2;
    manichino3DRef.current.position.y = Math.sin(time * 0.7) * 2;
    manichino3DRef.current.position.z = Math.sin(time * 0.3) * 2;
    // Rotazione continua per aggiungere dinamismo
    manichino3DRef.current.rotation.y += 0.01;
  }


      // Anima l'umanoide
      if (umanoideRef.current) {
        umanoideRef.current.rotation.y += 0.001;
      }

      // Anima il cubo
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.003;
        cubeRef.current.rotation.y += 0.003;      
      }

      // Anima le particelle
      if (particlesMesh) {
        particlesMesh.rotation.y += 0.001;
      }


      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    // Logica per rendere l'umanoide cliccabile
    const onClick = (event) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object === umanoideRef.current) {
          window.location.href = 'https://ia-liart-one.vercel.app/';
          break;
        }
      }
    };

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onClick);
      currentRef.removeChild(renderer.domElement);
    };
  }, [isScrolled]); // Non è necessario aggiungere ologrammaRef.current qui

  return <div ref={mountRef} className="scene-container" />;
};

export default NeuralScene;

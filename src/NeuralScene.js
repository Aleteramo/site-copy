import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import logoImage from './immagini2/logounite.jpeg'; 

const NeuralScene = ({ isScrolled }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true }); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    let cube;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; 

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(logoImage, function(texture) {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      const material = new THREE.MeshBasicMaterial({ map: texture });
      const materials = Array(6).fill(material);
      const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      cube = new THREE.Mesh(cubeGeometry, materials);
      cube.position.set(isScrolled ? 2 : 0, isScrolled ? 2 : 1, 1);
      scene.add(cube);
    });

    // Particelle
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 10000;
    const posArray = new Float32Array(particlesCount * 3); 
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
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

    const animate = () => {
      requestAnimationFrame(animate);

      if (particlesMesh) {
        particlesMesh.rotation.y += 0.001;
      }

      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
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

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isScrolled]); 

  return (
    <div ref={mountRef} className="scene-container" />
  );
};

export default NeuralScene;
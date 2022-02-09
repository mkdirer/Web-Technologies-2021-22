
console.log(THREE);

let scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.0001, 10000);
camera.position.set(0, 0, 50);
renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const handelResize = () => {
        const {innerWidth, innerHeight} = window;
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
};



const createSphere = (r =1, color = 0xffffff) => {
        const sphereGeo = new THREE.SphereGeometry(r, 20, 20);
        const sphereMat = new THREE.MeshPhongMaterial({
                color,
                shininess: 50,
        });
        return new THREE.Mesh(sphereGeo, sphereMat);
};

const createPointLight = (i =1, color = 0xffffff) => {
        return new THREE.PointLight(color, i);
};

const nucleus = createSphere(0.2, 0xE2302E);

const l1 = createPointLight(.8);
const l2 = createPointLight(.4);

l1.position.set(60, 20, 60);
l2.position.set(-30, 0, 20);

scene.add(nucleus, l2);
nucleus.add(l1);

const createElectron = (r = 0.4, color = 0x4B4AF7) => {
        const sphere = createSphere(r, color);
        const pivot = new THREE.Object3D();
        pivot.add(sphere);
        return {
                sphere, 
                pivot
        }
}

const e1 = createElectron(0.4);
const e2 = createElectron(0.4);
const e3 = createElectron(0.4);
const e4 = createElectron(0.4);
e1.sphere.position.set(10, 0, 0);
e2.sphere.position.set(5, 0, 0);
e3.sphere.position.set(-5, 0, 0);
e4.sphere.position.set(-10, 0, 0);
nucleus.add(e1.pivot, e2.pivot, e3.pivot, e4.pivot);
const nucleus1 = createElectron(1, 0xF74A4A);
const nucleus2 = createElectron(1, 0x4BF74A);
const nucleus3 = createElectron(1, 0xF74A4A);
const nucleus4 = createElectron(1, 0x4BF74A);
const nucleus5 = createElectron(1, 0xF74A4A);
const nucleus6 = createElectron(1, 0x4BF74A);
const nucleus7 = createElectron(1, 0xF74A4A);
nucleus1.sphere.position.set(-1, -1, 0);
nucleus2.sphere.position.set(0, 1, 0);
nucleus3.sphere.position.set(1, 0, 0);
nucleus4.sphere.position.set(0, 0, 1);
nucleus4.sphere.position.set(0, 0, -1);
nucleus6.sphere.position.set(0, -1, 0);
nucleus7.sphere.position.set(0, -1, 1);
nucleus.add(nucleus1.pivot, nucleus2.pivot, nucleus3.pivot, nucleus4.pivot, nucleus5.pivot, nucleus6.pivot, nucleus7.pivot);

e1.pivot.rotation.y = 90;
e2.pivot.rotation.y = 60;
e3.pivot.rotation.y = -60;
e4.pivot.rotation.y = -90;



const loop = () =>
{
        
        e1.pivot.rotation.z += 0.05;
        e2.pivot.rotation.z += 0.06;
        e3.pivot.rotation.z += 0.07;
        e4.pivot.rotation.z += 0.08;
        nucleus.rotation.z += 0.003;
        nucleus.rotation.x += 0.002;
        nucleus.rotation.y += 0.006;
        renderer.render(scene, camera);
        requestAnimationFrame(loop);
};

loop();
window.addEventListener('resize', handelResize);


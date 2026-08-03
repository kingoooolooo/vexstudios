import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as THREE from "three";

// Colors
const m = [0.95, 0.97, 1.0];
const p = [1.0, 0.84, 0.56];
const f = [1.0, 0.62, 0.26];
const b = [0.26, 0.5, 1.0];
const x = [0.36, 0.39, 0.49];

const u = 2 * Math.PI;
const g = () => Math.random();

// Helper to write colors
function w(arr: Float32Array, t: number, color: number[], intensity = 1) {
  arr[3 * t] = Math.min(1.35, color[0] * intensity);
  arr[3 * t + 1] = Math.min(1.35, color[1] * intensity);
  arr[3 * t + 2] = Math.min(1.35, color[2] * intensity);
}

// Generate random point on unit sphere
function M(arr: number[]) {
  const t = g() * u;
  const n = 2 * g() - 1;
  const a = Math.sqrt(Math.max(0, 1 - n * n));
  arr[0] = Math.cos(t) * a;
  arr[1] = n;
  arr[2] = Math.sin(t) * a;
}

// Helper to distribute particles
interface Emitter {
  w: number;
  emit: (posArr: Float32Array, colArr: Float32Array, idx: number, ratio: number) => void;
}

function v(total: number, posArr: Float32Array, colArr: Float32Array, emitters: Emitter[]) {
  const totalWeight = emitters.reduce((acc, curr) => acc + curr.w, 0);
  let currentIdx = 0;
  for (let o = 0; o < emitters.length; o++) {
    const count = o === emitters.length - 1 ? total - currentIdx : Math.round((emitters[o].w / totalWeight) * total);
    for (let i = 0; i < count && currentIdx < total; i++, currentIdx++) {
      emitters[o].emit(posArr, colArr, currentIdx, count > 1 ? i / (count - 1) : 0);
    }
  }
  while (currentIdx < total) {
    emitters[emitters.length - 1].emit(posArr, colArr, currentIdx, g());
    currentIdx++;
  }
}

// Normalization function (centers, rotates, and scales to max radius 1.0)
function y(total: number, posArr: Float32Array, rx: number, ry: number, rz: number) {
  let cx = 0, cy = 0, cz = 0;
  for (let n = 0; n < total; n++) {
    cx += posArr[3 * n];
    cy += posArr[3 * n + 1];
    cz += posArr[3 * n + 2];
  }
  cx /= total;
  cy /= total;
  cz /= total;

  const s = Math.cos(rx), c = Math.sin(rx);
  const h = Math.cos(ry), d = Math.sin(ry);
  const mRot = Math.cos(rz), pRot = Math.sin(rz);
  let maxSqDist = 1e-6;

  for (let n = 0; n < total; n++) {
    let px = posArr[3 * n] - cx;
    let py = posArr[3 * n + 1] - cy;
    let pz = posArr[3 * n + 2] - cz;

    // Rotate X
    const ry_val = py * s - pz * c;
    const rz_val = py * c + pz * s;
    py = ry_val;
    pz = rz_val;

    // Rotate Y
    const rx_val = px * h + pz * d;
    pz = -px * d + pz * h;
    px = rx_val;

    // Rotate Z
    const rx_final = px * mRot - py * pRot;
    const ry_final = px * pRot + py * mRot;
    px = rx_final;
    py = ry_final;

    posArr[3 * n] = px;
    posArr[3 * n + 1] = py;
    posArr[3 * n + 2] = pz;

    const sqDist = px * px + py * py + pz * pz;
    if (sqDist > maxSqDist) maxSqDist = sqDist;
  }

  const scale = 1 / Math.sqrt(maxSqDist);
  for (let n = 0; n < total; n++) {
    posArr[3 * n] *= scale;
    posArr[3 * n + 1] *= scale;
    posArr[3 * n + 2] *= scale;
  }
}

// Orbit setup
const j = [
  { rx: 0.2, ry: 0, a: 1, b: 0.6 },
  { rx: 1.15, ry: 0.5, a: 0.86, b: 0.62 },
  { rx: 0.6, ry: -0.7, a: 1.02, b: 0.54 },
  { rx: 1.45, ry: 0.95, a: 0.78, b: 0.7 },
  { rx: 0.35, ry: 1.25, a: 0.92, b: 0.5 },
  { rx: -0.5, ry: 0.4, a: 0.84, b: 0.66 }
];

const N = [
  { o: 0, ang: 0.6, blue: true },
  { o: 1, ang: 2.4, blue: true },
  { o: 2, ang: 4.1, blue: true },
  { o: 3, ang: 1.2, blue: true },
  { o: 4, ang: 3.3, blue: false },
  { o: 1, ang: 5, blue: false },
  { o: 5, ang: 0.25, blue: false }
];

function A(orbit: typeof j[0], t: number, n: number, out: number[]) {
  const i = Math.cos(t) * orbit.a * n;
  let l = Math.sin(t) * orbit.b * n;
  let o = 0;

  const r = l * Math.cos(orbit.rx) - o * Math.sin(orbit.rx);
  const s = l * Math.sin(orbit.rx) + o * Math.cos(orbit.rx);
  l = r;
  o = s;

  const c = i * Math.cos(orbit.ry) + o * Math.sin(orbit.ry);
  const h = -i * Math.sin(orbit.ry) + o * Math.cos(orbit.ry);
  out[0] = c;
  out[1] = l;
  out[2] = h;
}

// Continent data for Globe state
const z = [
  { lat: 60, lon: -103, dlat: 16, dlon: 30 },
  { lat: 43, lon: -98, dlat: 11, dlon: 20 },
  { lat: 64, lon: -150, dlat: 8, dlon: 16 },
  { lat: 26, lon: -103, dlat: 8, dlon: 8 },
  { lat: 12, lon: -84, dlat: 6, dlon: 6 },
  { lat: 73, lon: -42, dlat: 9, dlon: 14 },
  { lat: 6, lon: -68, dlat: 8, dlon: 9 },
  { lat: -9, lon: -55, dlat: 13, dlon: 15 },
  { lat: -27, lon: -62, dlat: 11, dlon: 8 },
  { lat: -43, lon: -69, dlat: 10, dlon: 5 },
  { lat: 20, lon: -2, dlat: 12, dlon: 16 },
  { lat: 6, lon: 21, dlat: 12, dlon: 15 },
  { lat: -12, lon: 23, dlat: 13, dlon: 12 },
  { lat: -30, lon: 23, dlat: 8, dlon: 7 },
  { lat: 9, lon: 42, dlat: 8, dlon: 7 },
  { lat: 52, lon: 12, dlat: 9, dlon: 20 },
  { lat: 60, lon: 40, dlat: 10, dlon: 20 },
  { lat: 58, lon: 92, dlat: 18, dlon: 44 },
  { lat: 40, lon: 70, dlat: 13, dlon: 24 },
  { lat: 30, lon: 106, dlat: 12, dlon: 18 },
  { lat: 22, lon: 80, dlat: 9, dlon: 11 },
  { lat: 28, lon: 46, dlat: 9, dlon: 11 },
  { lat: -26, lon: 134, dlat: 10, dlon: 17 },
  { lat: -2, lon: 117, dlat: 6, dlon: 15 }
];

// Shaders
const vertexShader = `
  uniform float uSize;
  uniform float uScale;
  uniform float uNear;
  uniform float uFar;
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vFog;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float depth = -mv.z;
    gl_PointSize = uSize * aSize * (uScale / max(0.001, depth));
    vFog = clamp((uFar - depth) / (uFar - uNear), 0.04, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec3 vColor;
  varying float vFog;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 1.5);
    gl_FragColor = vec4(vColor, a * vFog);
  }
`;

// Helper for line-segment generation with sphere noise
function ec(posArr: Float32Array, idx: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, noiseScale: number, tempSph: number[]) {
  const c = g();
  M(tempSph);
  posArr[3 * idx] = x1 + (x2 - x1) * c + tempSph[0] * noiseScale;
  posArr[3 * idx + 1] = y1 + (y2 - y1) * c + tempSph[1] * noiseScale;
  posArr[3 * idx + 2] = z1 + (z2 - z1) * c + tempSph[2] * noiseScale;
}

// Smoothstep function
function hSmooth(e: number) {
  return e * e * e * (e * (6 * e - 15) + 10);
}

// Clamp function
const clamp = (val: number) => (val < 0 ? 0 : val > 1 ? 1 : val);

// Rotation speeds for the 7 states
const rotationSpeeds = [0.12, 0.02, 0.18, 0, 0.06, 0.18, 0.05];
// Whether the state is scaled by the pulse factor
const pulseEnabled = [1, 0, 1, 0, 1, 1, 1];
// Parallax translation offsets [x, y] for text sections
const parallaxOffsets = [
  [-46, 0],
  [0, 34],
  [46, 0],
  [-46, 0],
  [0, 40],
  [0, 32],
  [0, 26]
];

export default function NebulaScene({ isSecondaryPage = false }: { isSecondaryPage?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();
  // Handle smooth scroll clicks on navigation links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetSection: number) => {
    e.preventDefault();
    if (!containerRef.current) return;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollTop = (targetSection / 6) * totalHeight;
    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const isCard = new URLSearchParams(window.location.search).has("card");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const screenWidth = window.innerWidth;
    const cpuCores = navigator.hardwareConcurrency || 8;

    // Responsive particle count
    let L = 56000;
    if (screenWidth >= 1600 && cpuCores >= 8) L = 70000;
    if (screenWidth < 1280) L = 44000;
    if (screenWidth < 900) L = 32000;
    if (screenWidth < 720) L = 20000;
    if (cpuCores <= 4) L = Math.round(0.62 * L);
    if (isCard) L = Math.min(L, 14000);

    // Create Canvas
    const canvas = document.createElement("canvas");
    canvas.className = "neb-gl";
    stage.appendChild(canvas);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    camera.position.set(0, 0, 15);

    // Viewport sizes at Z=0
    let fovHalfRad = 15 * Math.tan((Math.PI / 180) * 22.5);
    let U_val = fovHalfRad;
    let G_val = U_val;

    // Particle attributes
    const positions = new Float32Array(3 * L);
    const colors = new Float32Array(3 * L);
    const sizes = new Float32Array(L);

    // Random noise values for each particle
    const randomOffsets = new Float32Array(L);
    const randomPhases = new Float32Array(L);
    const randomUnitSpheres = new Float32Array(3 * L);

    for (let e = 0; e < L; e++) {
      randomOffsets[e] = Math.random();
      randomPhases[e] = Math.random();
      const t = Math.random() * Math.PI * 2;
      const n = (Math.random() - 0.5) * Math.PI;
      randomUnitSpheres[3 * e] = Math.cos(t) * Math.cos(n);
      randomUnitSpheres[3 * e + 1] = Math.sin(n);
      randomUnitSpheres[3 * e + 2] = Math.sin(t) * Math.cos(n);
    }

    // Geometry & Material
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uSize: { value: 0.05 },
        uScale: { value: 1000 },
        uNear: { value: 2 },
        uFar: { value: 58 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- GENERATE PARTICLE STATES ---
    const tempSph = [0, 0, 0];
    const tempOrbit = [0, 0, 0];

    // State 0 (Hero Base — Black Hole Singularity)
    const Z = new Float32Array(3 * L);
    const ee = new Float32Array(3 * L);

    const bhScale = 90;
    const bhSpin = 3.0;
    const bhAccretion = 1.0;
    const bhWarp = 1.2;
    const bhGoldenAngle = 2.399963229728653;
    const tempColor = new THREE.Color();

    for (let i = 0; i < L; i++) {
      const uVal = (i + 0.5) / L;
      const a = i * bhGoldenAngle;
      
      const band = uVal * 24.0 - 12.0;
      
      const disk = 1.0 - Math.abs(Math.sin(band * 0.5));
      const radius = bhScale * (0.08 + 1.9 * uVal * uVal);
      
      const swirl = a + bhSpin * Math.log(radius + 1.0);
      
      const grav = 1.0 / (1.0 + radius * 0.015);
      const bend = bhWarp * grav * grav;
      
      const x0 = radius * Math.cos(swirl);
      const z0 = radius * Math.sin(swirl);
      
      const x = x0 + bend * z0;
      const z = z0 - bend * x0;
      
      const yVal = bhScale * 0.22 * disk * Math.sin(a * 0.17) * bhAccretion;
      
      const bIdx = 3 * i;
      Z[bIdx] = x;
      Z[bIdx + 1] = yVal;
      Z[bIdx + 2] = z;
      
      const heat = 1.0 - Math.min(1.0, radius / (bhScale * 2.0));
      const hue = 0.08 + 0.58 * (1.0 - heat);
      const sat = 0.8 + 0.2 * heat;
      const light = 0.15 + 0.55 * Math.pow(heat, 1.5);
      
      tempColor.setHSL(hue, sat, light);
      ee[bIdx] = Math.min(1.4, tempColor.r * 1.35);
      ee[bIdx + 1] = Math.min(1.4, tempColor.g * 1.35);
      ee[bIdx + 2] = Math.min(1.4, tempColor.b * 1.35);
    }
    // Normalize and tilt Black Hole Singularity
    y(L, Z, 0.45, -0.2, 0.15);

    // State 2 (Agency Base)
    const et = new Float32Array(3 * L);
    const en = new Float32Array(3 * L);

    v(L, et, en, [
      {
        w: 20,
        emit: (e, n, a) => {
          M(tempSph);
          const i = 0.27 * Math.pow(g(), 0.5);
          e[3 * a] = tempSph[0] * i;
          e[3 * a + 1] = tempSph[1] * i;
          e[3 * a + 2] = tempSph[2] * i;
          w(n, a, i < 0.08 ? m : g() < 0.2 ? p : f, 0.95 + 0.4 * g());
        }
      },
      {
        w: 6,
        emit: (e, n, a) => {
          M(tempSph);
          const i = 0.27 + 0.2 * g();
          e[3 * a] = tempSph[0] * i;
          e[3 * a + 1] = tempSph[1] * i;
          e[3 * a + 2] = tempSph[2] * i;
          w(n, a, g() < 0.5 ? m : f, 0.7 + 0.3 * g());
        }
      },
      {
        w: 42,
        emit: (e, t, a) => {
          A(j[Math.floor(g() * j.length)], g() * u, 1, tempOrbit);
          e[3 * a] = tempOrbit[0] + (g() - 0.5) * 0.014;
          e[3 * a + 1] = tempOrbit[1] + (g() - 0.5) * 0.014;
          e[3 * a + 2] = tempOrbit[2] + (g() - 0.5) * 0.014;
          w(t, a, g() < 0.15 ? m : f, 0.8 + 0.3 * g());
        }
      },
      {
        w: 26,
        emit: (e, a, i) => {
          const l = N[Math.floor(g() * N.length)];
          A(j[l.o], l.ang, 1, tempOrbit);
          M(tempSph);
          const o = l.blue ? 0.12 : 0.075;
          e[3 * i] = tempOrbit[0] + tempSph[0] * o;
          e[3 * i + 1] = tempOrbit[1] + tempSph[1] * o;
          e[3 * i + 2] = tempOrbit[2] + tempSph[2] * o;
          w(a, i, l.blue ? b : f, l.blue ? 1 + 0.3 * g() : 0.9 + 0.3 * g());
        }
      },
      {
        w: 6,
        emit: (e, t, a) => {
          A(j[Math.floor(g() * j.length)], g() * u, 0.4 + 0.6 * g(), tempOrbit);
          e[3 * a] = tempOrbit[0];
          e[3 * a + 1] = tempOrbit[1];
          e[3 * a + 2] = tempOrbit[2];
          w(t, a, x, 0.5 + 0.3 * g());
        }
      }
    ]);
    y(L, et, 0.38, 0.12, 0);

    // State 5 (Team Base)
    const ea = new Float32Array(3 * L);
    const ei = new Float32Array(3 * L);
    const tempSph2 = [0, 0, 0];

    v(L, ea, ei, [
      {
        w: 20,
        emit: (e, t, n) => {
          M(tempSph2);
          e[3 * n] = 0.5 * tempSph2[0];
          e[3 * n + 1] = 0.72 + 0.5 * tempSph2[1];
          e[3 * n + 2] = 0.5 * tempSph2[2];
          if (Math.abs(tempSph2[0]) > 0.72 && g() < 0.6) {
            w(t, n, b, 0.9);
          } else {
            w(t, n, m, 0.9 + 0.25 * g());
          }
        }
      },
      {
        w: 10,
        emit: (e, t, n) => {
          const a = g() * u;
          const i = 0.31 * (0.2 + 0.8 * Math.sqrt(g()));
          const l = Math.cos(a) * i;
          const o = Math.sin(a) * i;
          const r = Math.sqrt(Math.max(0, 0.25 - i * i));
          e[3 * n] = l;
          e[3 * n + 1] = 0.72 + 0.9 * o;
          e[3 * n + 2] = r + 0.02;
          w(t, n, g() < 0.3 ? b : m, 1 + 0.2 * g());
        }
      },
      {
        w: 17,
        emit: (e, t, n) => {
          const a = -0.16 + 0.5 * g();
          const i = 0.34 * (0.86 + 0.14 * Math.sin(((a + 0.16) / 0.5) * Math.PI));
          const l = g() * u;
          e[3 * n] = Math.cos(l) * i;
          e[3 * n + 1] = 0.1 + a;
          e[3 * n + 2] = Math.sin(l) * i;
          if (Math.sin(l) > 0.55 && g() < 0.4) {
            w(t, n, m);
          } else {
            w(t, n, g() < 0.2 ? p : f, 0.85 + 0.35 * g());
          }
        }
      },
      {
        w: 6,
        emit: (e, t, n) => {
          e[3 * n] = (g() - 0.5) * 0.34;
          e[3 * n + 1] = 0.16 + (g() - 0.5) * 0.34;
          e[3 * n + 2] = -0.34 - 0.12 * g();
          w(t, n, g() < 0.5 ? b : x, 0.85);
        }
      },
      {
        w: 9,
        emit: (e, t, n) => {
          ec(e, n, -0.34, 0.26, 0, -0.5, 0.64, 0.06, 0.12, tempSph2);
          w(t, n, e[3 * n + 1] > 0.55 ? m : b, 0.9 + 0.2 * g());
        }
      },
      {
        w: 9,
        emit: (e, t, n) => {
          ec(e, n, 0.34, 0.2, 0, 0.46, -0.08, 0.06, 0.12, tempSph2);
          w(t, n, e[3 * n + 1] < 0 ? m : b, 0.9 + 0.2 * g());
        }
      },
      {
        w: 7,
        emit: (e, t, n) => {
          ec(e, n, -0.16, -0.18, 0, -0.18, -0.56, 0.02, 0.135, tempSph2);
          w(t, n, g() < 0.4 ? f : b, 0.85);
        }
      },
      {
        w: 7,
        emit: (e, t, n) => {
          ec(e, n, 0.16, -0.18, 0, 0.18, -0.56, 0.02, 0.135, tempSph2);
          w(t, n, g() < 0.4 ? f : b, 0.85);
        }
      },
      {
        w: 4,
        emit: (e, t, n) => {
          M(tempSph2);
          e[3 * n] = -0.18 + 0.14 * tempSph2[0];
          e[3 * n + 1] = -0.72 + 0.1 * tempSph2[1];
          e[3 * n + 2] = 0.06 + 0.16 * tempSph2[2];
          w(t, n, g() < 0.5 ? m : b, 0.9);
        }
      },
      {
        w: 4,
        emit: (e, t, n) => {
          M(tempSph2);
          e[3 * n] = 0.18 + 0.14 * tempSph2[0];
          e[3 * n + 1] = -0.72 + 0.1 * tempSph2[1];
          e[3 * n + 2] = 0.06 + 0.16 * tempSph2[2];
          w(t, n, g() < 0.5 ? m : b, 0.9);
        }
      }
    ]);
    y(L, ea, 0.05, -0.3, 0);

    // State 4 (Globe Base)
    const eh = new Float32Array(3 * L);
    const ed = new Float32Array(L);
    const em = new Float32Array(3 * L);

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let t = 0; t < L; t++) {
      const n = 1 - (t / (L - 1)) * 2;
      const a = Math.sqrt(Math.max(0, 1 - n * n));
      const i = goldenAngle * t;
      const l = Math.cos(i) * a;
      const o = Math.sin(i) * a;

      const r = (() => {
        const latDeg = (180 * Math.asin(Math.max(-1, Math.min(1, n)))) / Math.PI;
        const lonDeg = (180 * Math.atan2(o, l)) / Math.PI;
        let density = 0;
        for (const element of z) {
          let diffLon = Math.abs(lonDeg - element.lon);
          if (diffLon > 180) diffLon = 360 - diffLon;
          const dy = (latDeg - element.lat) / element.dlat;
          const dx = diffLon / element.dlon;
          const distVal = Math.exp(-(dy * dy + dx * dx));
          if (distVal > density) density = distVal;
        }
        density += 0.1 * Math.sin(0.5 * latDeg + 1) * Math.sin(0.4 * lonDeg + 2);
        if (latDeg < -68) density = Math.max(density, 0.8);
        return density;
      })();

      eh[3 * t] = l;
      eh[3 * t + 1] = n;
      eh[3 * t + 2] = o;
      ed[t] = r;

      if (r > 0.6) {
        w(em, t, Math.random() < 0.16 ? m : f, 0.9 + 0.3 * Math.random());
      } else if (r > 0.42) {
        w(em, t, Math.random() < 0.32 ? p : f, 1.12 + 0.3 * Math.random());
      } else {
        const lonAngle = (180 * Math.atan2(o, l)) / Math.PI;
        const gridValue =
          1.1 > Math.abs(((180 * Math.asin(n)) / Math.PI + 900) % 18 - 9) ||
          1.1 > Math.abs((lonAngle + 900) % 18 - 9);
        w(em, t, b, gridValue ? 0.7 + 0.2 * Math.random() : 0.4 + 0.18 * Math.random());
      }
    }

    // Scattered Starfield Color
    const ep = new Float32Array(3 * L);
    for (let e = 0; e < L; e++) {
      const t = Math.random();
      if (t < 0.5) {
        w(ep, e, m, 0.68 + 0.4 * Math.random());
      } else if (t < 0.78) {
        w(ep, e, b, 0.68 + 0.4 * Math.random());
      } else if (t < 0.92) {
        w(ep, e, f, 0.68 + 0.4 * Math.random());
      } else {
        w(ep, e, x, 0.6 + 0.3 * Math.random());
      }
    }

    // Color array pointers for the 7 states
    const stateColors = [ee, ep, en, ep, em, ei, ei];

    // Initialize base sizes
    for (let e = 0; e < L; e++) {
      sizes[e] = Math.random() < 0.14 ? 1 + 0.8 * Math.random() : 0.5 + 0.7 * Math.random();
    }
    geometry.attributes.aSize.needsUpdate = true;
    const baseSizes = sizes.slice();

    // 3D Position Arrays for the 7 states
    const statePositions: Float32Array[] = [];
    for (let e = 0; e < 7; e++) {
      statePositions.push(new Float32Array(3 * L));
    }

    const stateXOffsets = new Float32Array(7);
    const stateYOffsets = new Float32Array(7);
    const stateCosRotations = new Float32Array(7);
    const stateSinRotations = new Float32Array(7);
    let pulseScale = 1;
    let spiralOffset = 0;
    let maxSpiralDistance = 48;

    // Responsive sizing and offsets update function
    function resizeAndLayout() {
      const wWidth = stage!.clientWidth || window.innerWidth;
      const wHeight = stage!.clientHeight || window.innerHeight;

      renderer.setSize(wWidth, wHeight, false);
      camera.aspect = wWidth / wHeight;
      camera.updateProjectionMatrix();

      U_val = 15 * Math.tan((Math.PI / 180) * 22.5);
      G_val = (wWidth / wHeight) * U_val;

      const scalePixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
      material.uniforms.uScale.value = (wHeight * scalePixelRatio) / (2 * Math.tan((Math.PI / 180) * 22.5));
      material.uniforms.uSize.value = wWidth < 720 ? 0.075 : 0.05;

      // Populate statePositions based on layout ratios
      const scale0 = 0.98 * U_val;
      const scale2 = 0.8 * U_val;
      const scale5 = 0.5 * U_val;
      const scale6 = 0.3 * U_val;

      for (let n = 0; n < L; n++) {
        const l = 3 * n;
        // Hero
        statePositions[0][l] = Z[l] * scale0;
        statePositions[0][l + 1] = Z[l + 1] * scale0;
        statePositions[0][l + 2] = Z[l + 2] * scale0;
        // Agency
        statePositions[2][l] = et[l] * scale2;
        statePositions[2][l + 1] = et[l + 1] * scale2;
        statePositions[2][l + 2] = et[l + 2] * scale2;
        // Team
        statePositions[5][l] = ea[l] * scale5;
        statePositions[5][l + 1] = ea[l + 1] * scale5;
        statePositions[5][l + 2] = ea[l + 2] * scale5;
        // Contact
        statePositions[6][l] = ea[l] * scale6;
        statePositions[6][l + 1] = ea[l + 1] * scale6;
        statePositions[6][l + 2] = ea[l + 2] * scale6;
      }

      // State 1 - Scattered Starfield
      const starfield = statePositions[1];
      for (let e = 0; e < L; e++) {
        starfield[3 * e] = (Math.random() - 0.5) * G_val * 4.4;
        starfield[3 * e + 1] = (Math.random() - 0.5) * U_val * 3.4;
        starfield[3 * e + 2] = 9 - 50 * Math.pow(Math.random(), 0.7);
      }

      // State 3 - Spiral Galaxy
      const spiral = statePositions[3];
      maxSpiralDistance = 50;
      for (let e = 0; e < L; e++) {
        const randVal = Math.random();
        const zCoord = 9 - randVal * maxSpiralDistance;
        const angle = randVal * Math.PI * 7 + (e % 11);
        const radius = U_val * (0.16 + 0.82 * randVal);
        spiral[3 * e] = Math.cos(angle) * radius;
        spiral[3 * e + 1] = Math.sin(angle) * radius * 0.82;
        spiral[3 * e + 2] = zCoord;
      }

      // State 4 - Globe
      const globe = statePositions[4];
      const scale4 = U_val * (1.0 + 0.014 * 0.98); // base scale
      for (let e = 0; e < L; e++) {
        const factor = U_val * (1.0 + 0.014 * ed[e]);
        globe[3 * e] = eh[3 * e] * factor;
        globe[3 * e + 1] = eh[3 * e + 1] * factor;
        globe[3 * e + 2] = eh[3 * e + 2] * factor;
      }

      // State Offsets layout
      stateXOffsets[0] = isSecondaryPage ? 0 : 0.4 * G_val;
      stateYOffsets[0] = isSecondaryPage ? 0 : 0.04 * U_val;

      stateXOffsets[1] = 0;
      stateYOffsets[1] = 0;

      stateXOffsets[2] = -0.32 * G_val;
      stateYOffsets[2] = 0.02 * U_val;

      stateXOffsets[3] = 0;
      stateYOffsets[3] = 0;

      stateXOffsets[4] = 0.48 * G_val;
      stateYOffsets[4] = -0.02 * U_val;

      stateXOffsets[5] = 0;
      stateYOffsets[5] = -0.04 * U_val;

      stateXOffsets[6] = 0;
      stateYOffsets[6] = 0;
    }

    resizeAndLayout();

    // Resize Observer
    let resizeTimeout = false;
    const resizeObserver = new ResizeObserver(() => {
      if (!resizeTimeout) {
        resizeTimeout = true;
        requestAnimationFrame(() => {
          resizeTimeout = false;
          resizeAndLayout();
        });
      }
    });
    resizeObserver.observe(stage);

    // Elements selection for scroll animations
    const sections = Array.from(stage.querySelectorAll<HTMLElement>(".neb-sec"));
    const dots = Array.from(stage.querySelectorAll<HTMLElement>(".neb-dot"));
    const teamRow = stage.querySelector<HTMLElement>(".neb-team-row");
    const hintText = stage.querySelector<HTMLElement>(".neb-hint");

    // Interactive Pointer/Mouse tracking
    const isInteractive = !isCard;
    let pointerX = 0;
    let pointerY = 0;
    let isPointerActive = false;
    let hasTouch = false;

    function onPointerMove(e: PointerEvent) {
      if (hasTouch) return;
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerY = -2 * (e.clientY / window.innerHeight - 0.5);
      isPointerActive = true;
    }

    function onPointerLeave() {
      isPointerActive = false;
    }

    function onTouchMove(e: TouchEvent) {
      hasTouch = true;
      if (e.touches.length > 0) {
        pointerX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        pointerY = -2 * (e.touches[0].clientY / window.innerHeight - 0.5);
        isPointerActive = true;
      }
    }

    function onTouchEnd() {
      isPointerActive = false;
    }

    function onDeviceOrientation(e: DeviceOrientationEvent) {
      if (!e.beta || !e.gamma || hasTouch) return;
      
      // Map device tilt to pointer coordinates for parallax sway
      // beta (front-to-back): typically 45 deg is a neutral reading angle
      const tiltY = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
      // gamma (left-to-right)
      const tiltX = Math.max(-1, Math.min(1, e.gamma / 45));
      
      pointerX += (tiltX - pointerX) * 0.1;
      pointerY += (-tiltY - pointerY) * 0.1;
    }

    if (isInteractive) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerleave", onPointerLeave);
      window.addEventListener("touchstart", onTouchMove, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("touchcancel", onTouchEnd);
      window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });
    }

    // Repulsion and visual states
    const mouseProjPos = new THREE.Vector3();
    let repulsionX = 0;
    let repulsionY = 0;
    let repulsionZ = 0;
    let isRepelling = false;

    const pX = new Float32Array(3 * L);
    const pY = new Float32Array(3 * L);
    const pZ = new Float32Array(L);

    const tempStartPos = [0, 0, 0];
    const tempEndPos = [0, 0, 0];
    let transitionScale = 0;

    // Helper to get rotated state position
    function getRotatedStatePosition(stateIdx: number, pIdx: number, outArr: number[]) {
      const baseArr = statePositions[stateIdx];
      const bx = baseArr[3 * pIdx];
      const by = baseArr[3 * pIdx + 1];
      const bz = baseArr[3 * pIdx + 2];
      const cosRot = stateCosRotations[stateIdx];
      const sinRot = stateSinRotations[stateIdx];

      // Y-axis rotation
      let rx = bx * cosRot + bz * sinRot;
      let rz = -bx * sinRot + bz * cosRot;
      let ry = by;

      // Pulse scaling
      if (pulseEnabled[stateIdx]) {
        rx *= pulseScale;
        ry *= pulseScale;
        rz *= pulseScale;
      }

      // Spiral endless scroll
      if (stateIdx === 3) {
        rz += spiralOffset;
        if (rz > 9) rz -= maxSpiralDistance;
      }

      outArr[0] = rx + stateXOffsets[stateIdx];
      outArr[1] = ry + stateYOffsets[stateIdx];
      outArr[2] = rz;
    }

    // Main update frame function
    function updateFrame(scrollProgress: number, elapsedSecs: number) {
      // Calculate rotation trig values for all states
      for (let e = 0; e < 7; e++) {
        const angle = elapsedSecs * rotationSpeeds[e];
        stateCosRotations[e] = Math.cos(angle);
        stateSinRotations[e] = Math.sin(angle);
      }

      pulseScale = 1 + 0.024 * Math.sin(0.7 * elapsedSecs);
      spiralOffset = (2.4 * elapsedSecs) % maxSpiralDistance;

      // Interpolate current state
      const scaledProgress = 6 * scrollProgress;
      const stateIndex = Math.min(5, Math.floor(scaledProgress));
      const subProgress = hSmooth(clamp((scaledProgress - stateIndex - 0.2) / 0.6));
      transitionScale = Math.sin(subProgress * Math.PI);

      const colorStart = stateColors[stateIndex];
      const colorEnd = stateColors[stateIndex + 1];

      isRepelling = false;
      if (isInteractive && isPointerActive) {
        // Project screen mouse to 3D space near plane
        mouseProjPos.set(pointerX, pointerY, 0.5).unproject(camera).sub(camera.position);
        if (Math.abs(mouseProjPos.z) > 1e-4) {
          const depthRatio = -camera.position.z / mouseProjPos.z;
          repulsionX = camera.position.x + mouseProjPos.x * depthRatio;
          repulsionY = camera.position.y + mouseProjPos.y * depthRatio;
          repulsionZ = camera.position.z + mouseProjPos.z * depthRatio;
          isRepelling = true;
        }
      }

      const repulsionRadius = 0.5 * U_val;
      const repulsionRadiusSq = repulsionRadius * repulsionRadius;
      const repulsionForceFactor = 0.36 * U_val;

      // Update particles
      for (let e = 0; e < L; e++) {
        // Staggered particle morphing factor
        let individualProgress = (subProgress - 0.34 * randomOffsets[e]) / 0.66;
        individualProgress = hSmooth(individualProgress < 0 ? 0 : individualProgress > 1 ? 1 : individualProgress);

        getRotatedStatePosition(stateIndex, e, tempStartPos);
        getRotatedStatePosition(stateIndex + 1, e, tempEndPos);

        const phase = randomPhases[e];
        const rotSin = Math.sin(0.6 * elapsedSecs + 6.283 * phase);
        const rotCos = Math.cos(0.47 * elapsedSecs + 6.283 * phase);

        const bIdx = 3 * e;
        let baseX = tempStartPos[0] + (tempEndPos[0] - tempStartPos[0]) * individualProgress + randomUnitSpheres[bIdx] * transitionScale * 0.62 + 0.05 * rotSin;
        let baseY = tempStartPos[1] + (tempEndPos[1] - tempStartPos[1]) * individualProgress + randomUnitSpheres[bIdx + 1] * transitionScale * 0.62 + 0.05 * rotCos;
        let baseZ = tempStartPos[2] + (tempEndPos[2] - tempStartPos[2]) * individualProgress + randomUnitSpheres[bIdx + 2] * transitionScale * 0.62 + rotSin * rotCos * 0.06;

        let forceX = 0, forceY = 0, forceZ = 0, intensity = 0;

        if (isRepelling) {
          const dx = baseX - repulsionX;
          const dy = baseY - repulsionY;
          const dz = baseZ - repulsionZ;
          const sqDist = dx * dx + dy * dy + dz * dz;

          if (sqDist < repulsionRadiusSq) {
            const dist = Math.sqrt(sqDist) || 0.001;
            const normalizedDist = 1 - dist / repulsionRadius;
            intensity = normalizedDist * normalizedDist;
            const forceStrength = (repulsionForceFactor * intensity) / dist;
            forceX = dx * forceStrength;
            forceY = dy * forceStrength;
            forceZ = dz * forceStrength;
          }
        }

        // Apply visual smoothing (spring-like latency)
        pX[bIdx] += (forceX - pX[bIdx]) * 0.16;
        pX[bIdx + 1] += (forceY - pX[bIdx + 1]) * 0.16;
        pX[bIdx + 2] += (forceZ - pX[bIdx + 2]) * 0.16;
        pZ[e] += (intensity - pZ[e]) * 0.16;

        positions[bIdx] = baseX + pX[bIdx];
        positions[bIdx + 1] = baseY + pX[bIdx + 1];
        positions[bIdx + 2] = baseZ + pX[bIdx + 2];

        // Particle size & color brightening near mouse
        const sizeMultiplier = 1 + 0.95 * pZ[e];
        colors[bIdx] = Math.min(1.55, (colorStart[bIdx] + (colorEnd[bIdx] - colorStart[bIdx]) * subProgress) * sizeMultiplier);
        colors[bIdx + 1] = Math.min(1.55, (colorStart[bIdx + 1] + (colorEnd[bIdx + 1] - colorStart[bIdx + 1]) * subProgress) * sizeMultiplier);
        colors[bIdx + 2] = Math.min(1.55, (colorStart[bIdx + 2] + (colorEnd[bIdx + 2] - colorStart[bIdx + 2]) * subProgress) * sizeMultiplier);

        if (isInteractive) {
          sizes[e] = baseSizes[e] * (1 + 1.4 * pZ[e]);
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aColor.needsUpdate = true;
      if (isInteractive) {
        geometry.attributes.aSize.needsUpdate = true;
      }
      
      // Update text sections opacity and parallax offset
      for (let e = 0; e < sections.length; e++) {
        const opacityFactor = Math.max(0, 1 - Math.abs(scrollProgress - e / 6) / 0.1);
        let smoothOpacity = opacityFactor * opacityFactor;
        
        const pxOffset = parallaxOffsets[e] ? parallaxOffsets[e][0] * (1 - smoothOpacity) : 0;
        const pyOffset = parallaxOffsets[e] ? parallaxOffsets[e][1] * (1 - smoothOpacity) : 0;

        sections[e].style.opacity = String(smoothOpacity);
        sections[e].style.transform = `translate3d(${pxOffset}px, ${pyOffset}px, 0)`;
        sections[e].style.pointerEvents = smoothOpacity > 0.1 ? "auto" : "none";
      }

      // Team row horizontal scrolling slide effect
      if (teamRow) {
        const horizontalOffset = (5 - scaledProgress) * window.innerWidth * 0.1;
        teamRow.style.transform = `translateX(${horizontalOffset}px)`;
      }

      // Update progress dots right rail
      const roundedSection = Math.round(scaledProgress);
      setActiveSection(roundedSection);
      for (let e = 0; e < dots.length; e++) {
        dots[e].style.opacity = e === roundedSection ? "1" : "0.32";
        dots[e].style.transform = `scale(${e === roundedSection ? 1.7 : 1})`;
      }

      // Fade out "Scroll to explore" hint
      if (hintText) {
        hintText.style.opacity = scrollProgress > 0.05 ? "0" : "0.8";
        hintText.style.transform = `translateY(${scrollProgress > 0.05 ? 10 : 0}px)`;
        hintText.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      }
    }

    // Animation frame loop
    let animationFrameId = 0;
    let isTabVisible = true;
    let lastTime = performance.now();
    let elapsedSecs = 1.6 * Number(isCard);
    let smoothedScroll = 0;
    let targetScroll = 0;

    function loop(now: number) {
      const delta = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      elapsedSecs += delta;

      if (isCard) {
        const pingPong = (elapsedSecs / 9) % 2;
        targetScroll = pingPong < 1 ? pingPong : 2 - pingPong;
      } else {
        const bounding = container!.getBoundingClientRect();
        const scrollable = container!.offsetHeight - window.innerHeight;
        targetScroll = scrollable > 0 ? clamp(-bounding.top / scrollable) : 0;
      }

      // Lerp smoothedScroll (faster for touch devices for 1:1 feel)
      const lerpFactor = hasTouch ? 0.18 : 0.07;
      smoothedScroll += (targetScroll - smoothedScroll) * lerpFactor;

      updateFrame(smoothedScroll, elapsedSecs);

      // Camera parallax sway & slight zoom morphing
      const zoomFactor = 15 - 5.5 * transitionScale;
      camera.position.x += (1.7 * pointerX - camera.position.x) * 0.05;
      camera.position.y += (1.7 * pointerY * 0.7 - camera.position.y) * 0.05;
      camera.position.z += (zoomFactor - camera.position.z) * 0.06;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(loop);
    }

    function onVisibilityChange() {
      if (document.hidden) {
        if (isTabVisible) {
          isTabVisible = false;
          cancelAnimationFrame(animationFrameId);
        }
      } else {
        if (!isTabVisible) {
          isTabVisible = true;
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(loop);
        }
      }
    }

    animationFrameId = requestAnimationFrame(loop);
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Cleanup on unmount
    return () => {
      if (isInteractive) {
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerleave", onPointerLeave);
        window.removeEventListener("touchstart", onTouchMove);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("touchcancel", onTouchEnd);
        window.removeEventListener("deviceorientation", onDeviceOrientation);
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  return (
    <div className={`neb-root ${isSecondaryPage ? 'fixed inset-0 z-0 opacity-40 pointer-events-none' : ''}`} ref={containerRef}>
      <div className="neb-stage" ref={stageRef}>
        {!isSecondaryPage && (
          <>
            {/* Navigation */}
            <nav className="neb-nav">
          <Link to="/" className="neb-logo" style={{ textDecoration: "none", color: "inherit" }}>
            VexStudios<span>®</span>
          </Link>
          <div className="neb-links">
            <Link to="/work" style={{ textDecoration: "none", color: "inherit" }}>
              Work
            </Link>
            <Link to="/studio" style={{ textDecoration: "none", color: "inherit" }}>
              Studio
            </Link>
            <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
              Services
            </Link>
            <a 
              href="#contact" 
              style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-contact-modal"));
              }}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Section 0 - Hero */}
        <section className="neb-sec neb-hero" style={{ opacity: 0 }}>
          <div className="neb-hero-copy">
            <h1 className="neb-display">
              Launch
              <br />
              Beyond
              <br />
              <span className="neb-outline">Ordinary</span>
            </h1>
            <p className="neb-lead">
              We design immersive digital worlds, motion-driven websites, and 3D visual systems for ambitious brands.
            </p>
          </div>
        </section>

        {/* Section 1 - Statement */}
        <section className="neb-sec neb-statement" style={{ opacity: 0 }}>
          <h2 className="neb-statement-text">
            Blending a <span className="neb-outline">multi-disciplinary</span> craft with hands-on{" "}
            <span className="neb-outline">technical</span> execution
          </h2>
        </section>

        {/* Section 2 - Agency (Right block) */}
        <section className="neb-sec neb-right" style={{ opacity: 0 }}>
          <div className="neb-side-copy">
            <h2 className="neb-h2">Agency</h2>
            <p className="neb-para">
              We bring together strategy, design, engineering, and craft to build digital experiences that feel alive.
            </p>
          </div>
        </section>

        {/* Section 3 - Solutions (Left block) */}
        <section className="neb-sec neb-left" style={{ opacity: 0 }}>
          <div className="neb-side-copy">
            <h2 className="neb-h2">Solutions</h2>
            <p className="neb-para">
              From interactive sites to immersive 3D worlds, we design and build digital products that move with intent.
            </p>
          </div>
        </section>

        {/* Section 4 - Expertise */}
        <section className="neb-sec neb-expertise" style={{ opacity: 0 }}>
          <h2 className="neb-expertise-title">
            Where we <span className="neb-outline">excel</span>
          </h2>
          <div className="neb-cols">
            <div className="neb-col">
              <h4>Strategy</h4>
              <ul>
                <li>Brand strategy</li>
                <li>Market positioning</li>
                <li>Experience design</li>
              </ul>
            </div>
            <div className="neb-col">
              <h4>Creative</h4>
              <ul>
                <li>Art direction</li>
                <li>Motion design</li>
                <li>3D art</li>
              </ul>
            </div>
            <div className="neb-col">
              <h4>Tech</h4>
              <ul>
                <li>WebGL</li>
                <li>Frontend engineering</li>
                <li>Interactive builds</li>
              </ul>
            </div>
            <div className="neb-col">
              <h4>Production</h4>
              <ul>
                <li>Development</li>
                <li>Animation</li>
                <li>Launch support</li>
              </ul>
            </div>
          </div>
        </section>


        {/* Section 6 - Contact */}
        <section className="neb-sec neb-contact" style={{ opacity: 0 }}>
          <a 
            className="neb-email" 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-contact-modal"));
            }}
          >
            hello@vexstudios.studio
          </a>
          <div className="neb-footer">
            <div className="neb-divider"></div>
            <div className="neb-foot-links">
              <a href="#instagram" onClick={(e) => e.preventDefault()}>Instagram</a>
              <a href="#linkedin" onClick={(e) => e.preventDefault()}>LinkedIn</a>
              <a href="#behance" onClick={(e) => e.preventDefault()}>Behance</a>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy</a>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a>
            </div>
          </div>
        </section>

        {/* Progress rail on right side */}
        <div className="neb-rail">
          <div className="neb-dot"></div>
          <div className="neb-dot"></div>
          <div className="neb-dot"></div>
          <div className="neb-dot"></div>
          <div className="neb-dot"></div>
          <div className="neb-dot"></div>
        </div>

        {/* Bottom left hint */}
            <div className="neb-hint">Scroll to explore</div>
          </>
        )}
      </div>

      {!isSecondaryPage && (
        <div className="neb-spacer"></div>
      )}
    </div>
  );
}

/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
 (function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.THREE = {}));
}(this, (function (exports) { 'use strict';

	const REVISION = '133';
	const MOUSE = {
		LEFT: 0,
		MIDDLE: 1,
		RIGHT: 2,
		ROTATE: 0,
		DOLLY: 1,
		PAN: 2
	};
	const TOUCH = {
		ROTATE: 0,
		PAN: 1,
		DOLLY_PAN: 2,
		DOLLY_ROTATE: 3
	};
	const CullFaceNone = 0;
	const CullFaceBack = 1;
	const CullFaceFront = 2;
	const CullFaceFrontBack = 3;
	const BasicShadowMap = 0;
	const PCFShadowMap = 1;
	const PCFSoftShadowMap = 2;
	const VSMShadowMap = 3;
	const FrontSide = 0;
	const BackSide = 1;
	const DoubleSide = 2;
	const FlatShading = 1;
	const SmoothShading = 2;
	const NoBlending = 0;
	const NormalBlending = 1;
	const AdditiveBlending = 2;
	const SubtractiveBlending = 3;
	const MultiplyBlending = 4;
	const CustomBlending = 5;
	const AddEquation = 100;
	const SubtractEquation = 101;
	const ReverseSubtractEquation = 102;
	const MinEquation = 103;
	const MaxEquation = 104;
	const ZeroFactor = 200;
	const OneFactor = 201;
	const SrcColorFactor = 202;
	const OneMinusSrcColorFactor = 203;
	const SrcAlphaFactor = 204;
	const OneMinusSrcAlphaFactor = 205;
	const DstAlphaFactor = 206;
	const OneMinusDstAlphaFactor = 207;
	const DstColorFactor = 208;
	const OneMinusDstColorFactor = 209;
	const SrcAlphaSaturateFactor = 210;
	const NeverDepth = 0;
	const AlwaysDepth = 1;
	const LessDepth = 2;
	const LessEqualDepth = 3;
	const EqualDepth = 4;
	const GreaterEqualDepth = 5;
	const GreaterDepth = 6;
	const NotEqualDepth = 7;
	const MultiplyOperation = 0;
	const MixOperation = 1;
	const AddOperation = 2;
	const NoToneMapping = 0;
	const LinearToneMapping = 1;
	const ReinhardToneMapping = 2;
	const CineonToneMapping = 3;
	const ACESFilmicToneMapping = 4;
	const CustomToneMapping = 5;
	const UVMapping = 300;
	const CubeReflectionMapping = 301;
	const CubeRefractionMapping = 302;
	const EquirectangularReflectionMapping = 303;
	const EquirectangularRefractionMapping = 304;
	const CubeUVReflectionMapping = 306;
	const CubeUVRefractionMapping = 307;
	const RepeatWrapping = 1000;
	const ClampToEdgeWrapping = 1001;
	const MirroredRepeatWrapping = 1002;
	const NearestFilter = 1003;
	const NearestMipmapNearestFilter = 1004;
	const NearestMipMapNearestFilter = 1004;
	const NearestMipmapLinearFilter = 1005;
	const NearestMipMapLinearFilter = 1005;
	const LinearFilter = 1006;
	const LinearMipmapNearestFilter = 1007;
	const LinearMipMapNearestFilter = 1007;
	const LinearMipmapLinearFilter = 1008;
	const LinearMipMapLinearFilter = 1008;
	const UnsignedByteType = 1009;
	const ByteType = 1010;
	const ShortType = 1011;
	const UnsignedShortType = 1012;
	const IntType = 1013;
	const UnsignedIntType = 1014;
	const FloatType = 1015;
	const HalfFloatType = 1016;
	const UnsignedShort4444Type = 1017;
	const UnsignedShort5551Type = 1018;
	const UnsignedShort565Type = 1019;
	const UnsignedInt248Type = 1020;
	const AlphaFormat = 1021;
	const RGBFormat = 1022;
	const RGBAFormat = 1023;
	const LuminanceFormat = 1024;
	const LuminanceAlphaFormat = 1025;
	const RGBEFormat = RGBAFormat;
	const DepthFormat = 1026;
	const DepthStencilFormat = 1027;
	const RedFormat = 1028;
	const RedIntegerFormat = 1029;
	const RGFormat = 1030;
	const RGIntegerFormat = 1031;
	const RGBIntegerFormat = 1032;
	const RGBAIntegerFormat = 1033;
	const RGB_S3TC_DXT1_Format = 33776;
	const RGBA_S3TC_DXT1_Format = 33777;
	const RGBA_S3TC_DXT3_Format = 33778;
	const RGBA_S3TC_DXT5_Format = 33779;
	const RGB_PVRTC_4BPPV1_Format = 35840;
	const RGB_PVRTC_2BPPV1_Format = 35841;
	const RGBA_PVRTC_4BPPV1_Format = 35842;
	const RGBA_PVRTC_2BPPV1_Format = 35843;
	const RGB_ETC1_Format = 36196;
	const RGB_ETC2_Format = 37492;
	const RGBA_ETC2_EAC_Format = 37496;
	const RGBA_ASTC_4x4_Format = 37808;
	const RGBA_ASTC_5x4_Format = 37809;
	const RGBA_ASTC_5x5_Format = 37810;
	const RGBA_ASTC_6x5_Format = 37811;
	const RGBA_ASTC_6x6_Format = 37812;
	const RGBA_ASTC_8x5_Format = 37813;
	const RGBA_ASTC_8x6_Format = 37814;
	const RGBA_ASTC_8x8_Format = 37815;
	const RGBA_ASTC_10x5_Format = 37816;
	const RGBA_ASTC_10x6_Format = 37817;
	const RGBA_ASTC_10x8_Format = 37818;
	const RGBA_ASTC_10x10_Format = 37819;
	const RGBA_ASTC_12x10_Format = 37820;
	const RGBA_ASTC_12x12_Format = 37821;
	const RGBA_BPTC_Format = 36492;
	const SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
	const SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
	const SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
	const SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
	const SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
	const SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
	const SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
	const SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
	const SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
	const SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
	const SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
	const SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
	const SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
	const SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
	const LoopOnce = 2200;
	const LoopRepeat = 2201;
	const LoopPingPong = 2202;
	const InterpolateDiscrete = 2300;
	const InterpolateLinear = 2301;
	const InterpolateSmooth = 2302;
	const ZeroCurvatureEnding = 2400;
	const ZeroSlopeEnding = 2401;
	const WrapAroundEnding = 2402;
	const NormalAnimationBlendMode = 2500;
	const AdditiveAnimationBlendMode = 2501;
	const TrianglesDrawMode = 0;
	const TriangleStripDrawMode = 1;
	const TriangleFanDrawMode = 2;
	const LinearEncoding = 3000;
	const sRGBEncoding = 3001;
	const GammaEncoding = 3007;
	const RGBEEncoding = 3002;
	const LogLuvEncoding = 3003;
	const RGBM7Encoding = 3004;
	const RGBM16Encoding = 3005;
	const RGBDEncoding = 3006;
	const BasicDepthPacking = 3200;
	const RGBADepthPacking = 3201;
	const TangentSpaceNormalMap = 0;
	const ObjectSpaceNormalMap = 1;
	const ZeroStencilOp = 0;
	const KeepStencilOp = 7680;
	const ReplaceStencilOp = 7681;
	const IncrementStencilOp = 7682;
	const DecrementStencilOp = 7683;
	const IncrementWrapStencilOp = 34055;
	const DecrementWrapStencilOp = 34056;
	const InvertStencilOp = 5386;
	const NeverStencilFunc = 512;
	const LessStencilFunc = 513;
	const EqualStencilFunc = 514;
	const LessEqualStencilFunc = 515;
	const GreaterStencilFunc = 516;
	const NotEqualStencilFunc = 517;
	const GreaterEqualStencilFunc = 518;
	const AlwaysStencilFunc = 519;
	const StaticDrawUsage = 35044;
	const DynamicDrawUsage = 35048;
	const StreamDrawUsage = 35040;
	const StaticReadUsage = 35045;
	const DynamicReadUsage = 35049;
	const StreamReadUsage = 35041;
	const StaticCopyUsage = 35046;
	const DynamicCopyUsage = 35050;
	const StreamCopyUsage = 35042;
	const GLSL1 = '100';
	const GLSL3 = '300 es';

	/**
	 * https://github.com/mrdoob/eventdispatcher.js/
	 */
	class EventDispatcher {
		addEventListener(type, listener) {
			if (this._listeners === undefined) this._listeners = {};
			const listeners = this._listeners;

			if (listeners[type] === undefined) {
				listeners[type] = [];
			}

			if (listeners[type].indexOf(listener) === -1) {
				listeners[type].push(listener);
			}
		}

		hasEventListener(type, listener) {
			if (this._listeners === undefined) return false;
			const listeners = this._listeners;
			return listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1;
		}

		removeEventListener(type, listener) {
			if (this._listeners === undefined) return;
			const listeners = this._listeners;
			const listenerArray = listeners[type];

			if (listenerArray !== undefined) {
				const index = listenerArray.indexOf(listener);

				if (index !== -1) {
					listenerArray.splice(index, 1);
				}
			}
		}

		dispatchEvent(event) {
			if (this._listeners === undefined) return;
			const listeners = this._listeners;
			const listenerArray = listeners[event.type];

			if (listenerArray !== undefined) {
				event.target = this; // Make a copy, in case listeners are removed while iterating.

				const array = listenerArray.slice(0);

				for (let i = 0, l = array.length; i < l; i++) {
					array[i].call(this, event);
				}

				event.target = null;
			}
		}

	}

	let _seed = 1234567;
	const DEG2RAD = Math.PI / 180;
	const RAD2DEG = 180 / Math.PI; //

	const _lut = [];

	for (let i = 0; i < 256; i++) {
		_lut[i] = (i < 16 ? '0' : '') + i.toString(16);
	}

	const hasRandomUUID = typeof crypto !== 'undefined' && 'randomUUID' in crypto;

	function generateUUID() {
		if (hasRandomUUID) {
			return crypto.randomUUID().toUpperCase();
		} // TODO Remove this code when crypto.randomUUID() is available everywhere
		// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136


		const d0 = Math.random() * 0xffffffff | 0;
		const d1 = Math.random() * 0xffffffff | 0;
		const d2 = Math.random() * 0xffffffff | 0;
		const d3 = Math.random() * 0xffffffff | 0;
		const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff]; // .toUpperCase() here flattens concatenated strings to save heap memory space.

		return uuid.toUpperCase();
	}

	function clamp(value, min, max) {
		return Math.max(min, Math.min(max, value));
	} // compute euclidian modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation


	function euclideanModulo(n, m) {
		return (n % m + m) % m;
	} // Linear mapping from range <a1, a2> to range <b1, b2>


	function mapLinear(x, a1, a2, b1, b2) {
		return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
	} // https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/


	function inverseLerp(x, y, value) {
		if (x !== y) {
			return (value - x) / (y - x);
		} else {
			return 0;
		}
	} // https://en.wikipedia.org/wiki/Linear_interpolation


	function lerp(x, y, t) {
		return (1 - t) * x + t * y;
	} // http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/


	function damp(x, y, lambda, dt) {
		return lerp(x, y, 1 - Math.exp(-lambda * dt));
	} // https://www.desmos.com/calculator/vcsjnyz7x4


	function pingpong(x, length = 1) {
		return length - Math.abs(euclideanModulo(x, length * 2) - length);
	} // http://en.wikipedia.org/wiki/Smoothstep


	function smoothstep(x, min, max) {
		if (x <= min) return 0;
		if (x >= max) return 1;
		x = (x - min) / (max - min);
		return x * x * (3 - 2 * x);
	}

	function smootherstep(x, min, max) {
		if (x <= min) return 0;
		if (x >= max) return 1;
		x = (x - min) / (max - min);
		return x * x * x * (x * (x * 6 - 15) + 10);
	} // Random integer from <low, high> interval


	function randInt(low, high) {
		return low + Math.floor(Math.random() * (high - low + 1));
	} // Random float from <low, high> interval


	function randFloat(low, high) {
		return low + Math.random() * (high - low);
	} // Random float from <-range/2, range/2> interval


	function randFloatSpread(range) {
		return range * (0.5 - Math.random());
	} // Deterministic pseudo-random float in the interval [ 0, 1 ]


	function seededRandom(s) {
		if (s !== undefined) _seed = s % 2147483647; // Park-Miller algorithm

		_seed = _seed * 16807 % 2147483647;
		return (_seed - 1) / 2147483646;
	}

	function degToRad(degrees) {
		return degrees * DEG2RAD;
	}

	function radToDeg(radians) {
		return radians * RAD2DEG;
	}

	function isPowerOfTwo(value) {
		return (value & value - 1) === 0 && value !== 0;
	}

	function ceilPowerOfTwo(value) {
		return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
	}

	function floorPowerOfTwo(value) {
		return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
	}

	function setQuaternionFromProperEuler(q, a, b, c, order) {
		// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles
		// rotations are applied to the axes in the order specified by 'order'
		// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
		// angles are in radians
		const cos = Math.cos;
		const sin = Math.sin;
		const c2 = cos(b / 2);
		const s2 = sin(b / 2);
		const c13 = cos((a + c) / 2);
		const s13 = sin((a + c) / 2);
		const c1_3 = cos((a - c) / 2);
		const s1_3 = sin((a - c) / 2);
		const c3_1 = cos((c - a) / 2);
		const s3_1 = sin((c - a) / 2);

		switch (order) {
			case 'XYX':
				q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
				break;

			case 'YZY':
				q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
				break;

			case 'ZXZ':
				q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
				break;

			case 'XZX':
				q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
				break;

			case 'YXY':
				q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
				break;

			case 'ZYZ':
				q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
				break;

			default:
				console.warn('THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order);
		}
	}

	var MathUtils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		DEG2RAD: DEG2RAD,
		RAD2DEG: RAD2DEG,
		generateUUID: generateUUID,
		clamp: clamp,
		euclideanModulo: euclideanModulo,
		mapLinear: mapLinear,
		inverseLerp: inverseLerp,
		lerp: lerp,
		damp: damp,
		pingpong: pingpong,
		smoothstep: smoothstep,
		smootherstep: smootherstep,
		randInt: randInt,
		randFloat: randFloat,
		randFloatSpread: randFloatSpread,
		seededRandom: seededRandom,
		degToRad: degToRad,
		radToDeg: radToDeg,
		isPowerOfTwo: isPowerOfTwo,
		ceilPowerOfTwo: ceilPowerOfTwo,
		floorPowerOfTwo: floorPowerOfTwo,
		setQuaternionFromProperEuler: setQuaternionFromProperEuler
	});

	class Vector2 {
		constructor(x = 0, y = 0) {
			this.x = x;
			this.y = y;
		}

		get width() {
			return this.x;
		}

		set width(value) {
			this.x = value;
		}

		get height() {
			return this.y;
		}

		set height(value) {
			this.y = value;
		}

		set(x, y) {
			this.x = x;
			this.y = y;
			return this;
		}

		setScalar(scalar) {
			this.x = scalar;
			this.y = scalar;
			return this;
		}

		setX(x) {
			this.x = x;
			return this;
		}

		setY(y) {
			this.y = y;
			return this;
		}

		setComponent(index, value) {
			switch (index) {
				case 0:
					this.x = value;
					break;

				case 1:
					this.y = value;
					break;

				default:
					throw new Error('index is out of range: ' + index);
			}

			return this;
		}

		getComponent(index) {
			switch (index) {
				case 0:
					return this.x;

				case 1:
					return this.y;

				default:
					throw new Error('index is out of range: ' + index);
			}
		}

		clone() {
			return new this.constructor(this.x, this.y);
		}

		copy(v) {
			this.x = v.x;
			this.y = v.y;
			return this;
		}

		add(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
				return this.addVectors(v, w);
			}

			this.x += v.x;
			this.y += v.y;
			return this;
		}

		addScalar(s) {
			this.x += s;
			this.y += s;
			return this;
		}

		addVectors(a, b) {
			this.x = a.x + b.x;
			this.y = a.y + b.y;
			return this;
		}

		addScaledVector(v, s) {
			this.x += v.x * s;
			this.y += v.y * s;
			return this;
		}

		sub(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
				return this.subVectors(v, w);
			}

			this.x -= v.x;
			this.y -= v.y;
			return this;
		}

		subScalar(s) {
			this.x -= s;
			this.y -= s;
			return this;
		}

		subVectors(a, b) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			return this;
		}

		multiply(v) {
			this.x *= v.x;
			this.y *= v.y;
			return this;
		}

		multiplyScalar(scalar) {
			this.x *= scalar;
			this.y *= scalar;
			return this;
		}

		divide(v) {
			this.x /= v.x;
			this.y /= v.y;
			return this;
		}

		divideScalar(scalar) {
			return this.multiplyScalar(1 / scalar);
		}

		applyMatrix3(m) {
			const x = this.x,
						y = this.y;
			const e = m.elements;
			this.x = e[0] * x + e[3] * y + e[6];
			this.y = e[1] * x + e[4] * y + e[7];
			return this;
		}

		min(v) {
			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);
			return this;
		}

		max(v) {
			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);
			return this;
		}

		clamp(min, max) {
			// assumes min < max, componentwise
			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));
			return this;
		}

		clampScalar(minVal, maxVal) {
			this.x = Math.max(minVal, Math.min(maxVal, this.x));
			this.y = Math.max(minVal, Math.min(maxVal, this.y));
			return this;
		}

		clampLength(min, max) {
			const length = this.length();
			return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
		}

		floor() {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		}

		ceil() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			return this;
		}

		round() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		}

		roundToZero() {
			this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
			return this;
		}

		negate() {
			this.x = -this.x;
			this.y = -this.y;
			return this;
		}

		dot(v) {
			return this.x * v.x + this.y * v.y;
		}

		cross(v) {
			return this.x * v.y - this.y * v.x;
		}

		lengthSq() {
			return this.x * this.x + this.y * this.y;
		}

		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}

		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y);
		}

		normalize() {
			return this.divideScalar(this.length() || 1);
		}

		angle() {
			// computes the angle in radians with respect to the positive x-axis
			const angle = Math.atan2(-this.y, -this.x) + Math.PI;
			return angle;
		}

		distanceTo(v) {
			return Math.sqrt(this.distanceToSquared(v));
		}

		distanceToSquared(v) {
			const dx = this.x - v.x,
						dy = this.y - v.y;
			return dx * dx + dy * dy;
		}

		manhattanDistanceTo(v) {
			return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
		}

		setLength(length) {
			return this.normalize().multiplyScalar(length);
		}

		lerp(v, alpha) {
			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;
			return this;
		}

		lerpVectors(v1, v2, alpha) {
			this.x = v1.x + (v2.x - v1.x) * alpha;
			this.y = v1.y + (v2.y - v1.y) * alpha;
			return this;
		}

		equals(v) {
			return v.x === this.x && v.y === this.y;
		}

		fromArray(array, offset = 0) {
			this.x = array[offset];
			this.y = array[offset + 1];
			return this;
		}

		toArray(array = [], offset = 0) {
			array[offset] = this.x;
			array[offset + 1] = this.y;
			return array;
		}

		fromBufferAttribute(attribute, index, offset) {
			if (offset !== undefined) {
				console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().');
			}

			this.x = attribute.getX(index);
			this.y = attribute.getY(index);
			return this;
		}

		rotateAround(center, angle) {
			const c = Math.cos(angle),
						s = Math.sin(angle);
			const x = this.x - center.x;
			const y = this.y - center.y;
			this.x = x * c - y * s + center.x;
			this.y = x * s + y * c + center.y;
			return this;
		}

		random() {
			this.x = Math.random();
			this.y = Math.random();
			return this;
		}

		*[Symbol.iterator]() {
			yield this.x;
			yield this.y;
		}

	}

	Vector2.prototype.isVector2 = true;

	class Matrix3 {
		constructor() {
			this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];

			if (arguments.length > 0) {
				console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.');
			}
		}

		set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
			const te = this.elements;
			te[0] = n11;
			te[1] = n21;
			te[2] = n31;
			te[3] = n12;
			te[4] = n22;
			te[5] = n32;
			te[6] = n13;
			te[7] = n23;
			te[8] = n33;
			return this;
		}

		identity() {
			this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
			return this;
		}

		copy(m) {
			const te = this.elements;
			const me = m.elements;
			te[0] = me[0];
			te[1] = me[1];
			te[2] = me[2];
			te[3] = me[3];
			te[4] = me[4];
			te[5] = me[5];
			te[6] = me[6];
			te[7] = me[7];
			te[8] = me[8];
			return this;
		}

		extractBasis(xAxis, yAxis, zAxis) {
			xAxis.setFromMatrix3Column(this, 0);
			yAxis.setFromMatrix3Column(this, 1);
			zAxis.setFromMatrix3Column(this, 2);
			return this;
		}

		setFromMatrix4(m) {
			const me = m.elements;
			this.set(me[0], me[4], me[8], me[1], me[5], me[9], me[2], me[6], me[10]);
			return this;
		}

		multiply(m) {
			return this.multiplyMatrices(this, m);
		}

		premultiply(m) {
			return this.multiplyMatrices(m, this);
		}

		multiplyMatrices(a, b) {
			const ae = a.elements;
			const be = b.elements;
			const te = this.elements;
			const a11 = ae[0],
						a12 = ae[3],
						a13 = ae[6];
			const a21 = ae[1],
						a22 = ae[4],
						a23 = ae[7];
			const a31 = ae[2],
						a32 = ae[5],
						a33 = ae[8];
			const b11 = be[0],
						b12 = be[3],
						b13 = be[6];
			const b21 = be[1],
						b22 = be[4],
						b23 = be[7];
			const b31 = be[2],
						b32 = be[5],
						b33 = be[8];
			te[0] = a11 * b11 + a12 * b21 + a13 * b31;
			te[3] = a11 * b12 + a12 * b22 + a13 * b32;
			te[6] = a11 * b13 + a12 * b23 + a13 * b33;
			te[1] = a21 * b11 + a22 * b21 + a23 * b31;
			te[4] = a21 * b12 + a22 * b22 + a23 * b32;
			te[7] = a21 * b13 + a22 * b23 + a23 * b33;
			te[2] = a31 * b11 + a32 * b21 + a33 * b31;
			te[5] = a31 * b12 + a32 * b22 + a33 * b32;
			te[8] = a31 * b13 + a32 * b23 + a33 * b33;
			return this;
		}

		multiplyScalar(s) {
			const te = this.elements;
			te[0] *= s;
			te[3] *= s;
			te[6] *= s;
			te[1] *= s;
			te[4] *= s;
			te[7] *= s;
			te[2] *= s;
			te[5] *= s;
			te[8] *= s;
			return this;
		}

		determinant() {
			const te = this.elements;
			const a = te[0],
						b = te[1],
						c = te[2],
						d = te[3],
						e = te[4],
						f = te[5],
						g = te[6],
						h = te[7],
						i = te[8];
			return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
		}

		invert() {
			const te = this.elements,
						n11 = te[0],
						n21 = te[1],
						n31 = te[2],
						n12 = te[3],
						n22 = te[4],
						n32 = te[5],
						n13 = te[6],
						n23 = te[7],
						n33 = te[8],
						t11 = n33 * n22 - n32 * n23,
						t12 = n32 * n13 - n33 * n12,
						t13 = n23 * n12 - n22 * n13,
						det = n11 * t11 + n21 * t12 + n31 * t13;
			if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const detInv = 1 / det;
			te[0] = t11 * detInv;
			te[1] = (n31 * n23 - n33 * n21) * detInv;
			te[2] = (n32 * n21 - n31 * n22) * detInv;
			te[3] = t12 * detInv;
			te[4] = (n33 * n11 - n31 * n13) * detInv;
			te[5] = (n31 * n12 - n32 * n11) * detInv;
			te[6] = t13 * detInv;
			te[7] = (n21 * n13 - n23 * n11) * detInv;
			te[8] = (n22 * n11 - n21 * n12) * detInv;
			return this;
		}

		transpose() {
			let tmp;
			const m = this.elements;
			tmp = m[1];
			m[1] = m[3];
			m[3] = tmp;
			tmp = m[2];
			m[2] = m[6];
			m[6] = tmp;
			tmp = m[5];
			m[5] = m[7];
			m[7] = tmp;
			return this;
		}

		getNormalMatrix(matrix4) {
			return this.setFromMatrix4(matrix4).invert().transpose();
		}

		transposeIntoArray(r) {
			const m = this.elements;
			r[0] = m[0];
			r[1] = m[3];
			r[2] = m[6];
			r[3] = m[1];
			r[4] = m[4];
			r[5] = m[7];
			r[6] = m[2];
			r[7] = m[5];
			r[8] = m[8];
			return this;
		}

		setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
			const c = Math.cos(rotation);
			const s = Math.sin(rotation);
			this.set(sx * c, sx * s, -sx * (c * cx + s * cy) + cx + tx, -sy * s, sy * c, -sy * (-s * cx + c * cy) + cy + ty, 0, 0, 1);
			return this;
		}

		scale(sx, sy) {
			const te = this.elements;
			te[0] *= sx;
			te[3] *= sx;
			te[6] *= sx;
			te[1] *= sy;
			te[4] *= sy;
			te[7] *= sy;
			return this;
		}

		rotate(theta) {
			const c = Math.cos(theta);
			const s = Math.sin(theta);
			const te = this.elements;
			const a11 = te[0],
						a12 = te[3],
						a13 = te[6];
			const a21 = te[1],
						a22 = te[4],
						a23 = te[7];
			te[0] = c * a11 + s * a21;
			te[3] = c * a12 + s * a22;
			te[6] = c * a13 + s * a23;
			te[1] = -s * a11 + c * a21;
			te[4] = -s * a12 + c * a22;
			te[7] = -s * a13 + c * a23;
			return this;
		}

		translate(tx, ty) {
			const te = this.elements;
			te[0] += tx * te[2];
			te[3] += tx * te[5];
			te[6] += tx * te[8];
			te[1] += ty * te[2];
			te[4] += ty * te[5];
			te[7] += ty * te[8];
			return this;
		}

		equals(matrix) {
			const te = this.elements;
			const me = matrix.elements;

			for (let i = 0; i < 9; i++) {
				if (te[i] !== me[i]) return false;
			}

			return true;
		}

		fromArray(array, offset = 0) {
			for (let i = 0; i < 9; i++) {
				this.elements[i] = array[i + offset];
			}

			return this;
		}

		toArray(array = [], offset = 0) {
			const te = this.elements;
			array[offset] = te[0];
			array[offset + 1] = te[1];
			array[offset + 2] = te[2];
			array[offset + 3] = te[3];
			array[offset + 4] = te[4];
			array[offset + 5] = te[5];
			array[offset + 6] = te[6];
			array[offset + 7] = te[7];
			array[offset + 8] = te[8];
			return array;
		}

		clone() {
			return new this.constructor().fromArray(this.elements);
		}

	}

	Matrix3.prototype.isMatrix3 = true;

	function arrayMax(array) {
		if (array.length === 0) return -Infinity;
		let max = array[0];

		for (let i = 1, l = array.length; i < l; ++i) {
			if (array[i] > max) max = array[i];
		}

		return max;
	}

	const TYPED_ARRAYS = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: Uint8ClampedArray,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};

	function getTypedArray(type, buffer) {
		return new TYPED_ARRAYS[type](buffer);
	}

	function createElementNS(name) {
		return document.createElementNS('http://www.w3.org/1999/xhtml', name);
	}

	let _canvas;

	class ImageUtils {
		static getDataURL(image) {
			if (/^data:/i.test(image.src)) {
				return image.src;
			}

			if (typeof HTMLCanvasElement == 'undefined') {
				return image.src;
			}

			let canvas;

			if (image instanceof HTMLCanvasElement) {
				canvas = image;
			} else {
				if (_canvas === undefined) _canvas = createElementNS('canvas');
				_canvas.width = image.width;
				_canvas.height = image.height;

				const context = _canvas.getContext('2d');

				if (image instanceof ImageData) {
					context.putImageData(image, 0, 0);
				} else {
					context.drawImage(image, 0, 0, image.width, image.height);
				}

				canvas = _canvas;
			}

			if (canvas.width > 2048 || canvas.height > 2048) {
				console.warn('THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image);
				return canvas.toDataURL('image/jpeg', 0.6);
			} else {
				return canvas.toDataURL('image/png');
			}
		}

	}

	let textureId = 0;

	class Texture extends EventDispatcher {
		constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = 1, encoding = LinearEncoding) {
			super();
			Object.defineProperty(this, 'id', {
				value: textureId++
			});
			this.uuid = generateUUID();
			this.name = '';
			this.image = image;
			this.mipmaps = [];
			this.mapping = mapping;
			this.wrapS = wrapS;
			this.wrapT = wrapT;
			this.magFilter = magFilter;
			this.minFilter = minFilter;
			this.anisotropy = anisotropy;
			this.format = format;
			this.internalFormat = null;
			this.type = type;
			this.offset = new Vector2(0, 0);
			this.repeat = new Vector2(1, 1);
			this.center = new Vector2(0, 0);
			this.rotation = 0;
			this.matrixAutoUpdate = true;
			this.matrix = new Matrix3();
			this.generateMipmaps = true;
			this.premultiplyAlpha = false;
			this.flipY = true;
			this.unpackAlignment = 4; // valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
			// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
			//
			// Also changing the encoding after already used by a Material will not automatically make the Material
			// update. You need to explicitly call Material.needsUpdate to trigger it to recompile.

			this.encoding = encoding;
			this.version = 0;
			this.onUpdate = null;
			this.isRenderTargetTexture = false;
		}

		updateMatrix() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
		}

		clone() {
			return new this.constructor().copy(this);
		}

		copy(source) {
			this.name = source.name;
			this.image = source.image;
			this.mipmaps = source.mipmaps.slice(0);
			this.mapping = source.mapping;
			this.wrapS = source.wrapS;
			this.wrapT = source.wrapT;
			this.magFilter = source.magFilter;
			this.minFilter = source.minFilter;
			this.anisotropy = source.anisotropy;
			this.format = source.format;
			this.internalFormat = source.internalFormat;
			this.type = source.type;
			this.offset.copy(source.offset);
			this.repeat.copy(source.repeat);
			this.center.copy(source.center);
			this.rotation = source.rotation;
			this.matrixAutoUpdate = source.matrixAutoUpdate;
			this.matrix.copy(source.matrix);
			this.generateMipmaps = source.generateMipmaps;
			this.premultiplyAlpha = source.premultiplyAlpha;
			this.flipY = source.flipY;
			this.unpackAlignment = source.unpackAlignment;
			this.encoding = source.encoding;
			return this;
		}

		toJSON(meta) {
			const isRootObject = meta === undefined || typeof meta === 'string';

			if (!isRootObject && meta.textures[this.uuid] !== undefined) {
				return meta.textures[this.uuid];
			}

			const output = {
				metadata: {
					version: 4.5,
					type: 'Texture',
					generator: 'Texture.toJSON'
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				type: this.type,
				encoding: this.encoding,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};

			if (this.image !== undefined) {
				// TODO: Move to THREE.Image
				const image = this.image;

				if (image.uuid === undefined) {
					image.uuid = generateUUID(); // UGH
				}

				if (!isRootObject && meta.images[image.uuid] === undefined) {
					let url;

					if (Array.isArray(image)) {
						// process array of images e.g. CubeTexture
						url = [];

						for (let i = 0, l = image.length; i < l; i++) {
							// check cube texture with data textures
							if (image[i].isDataTexture) {
								url.push(serializeImage(image[i].image));
							} else {
								url.push(serializeImage(image[i]));
							}
						}
					} else {
						// process single image
						url = serializeImage(image);
					}

					meta.images[image.uuid] = {
						uuid: image.uuid,
						url: url
					};
				}

				output.image = image.uuid;
			}

			if (!isRootObject) {
				meta.textures[this.uuid] = output;
			}

			return output;
		}

		dispose() {
			this.dispatchEvent({
				type: 'dispose'
			});
		}

		transformUv(uv) {
			if (this.mapping !== UVMapping) return uv;
			uv.applyMatrix3(this.matrix);

			if (uv.x < 0 || uv.x > 1) {
				switch (this.wrapS) {
					case RepeatWrapping:
						uv.x = uv.x - Math.floor(uv.x);
						break;

					case ClampToEdgeWrapping:
						uv.x = uv.x < 0 ? 0 : 1;
						break;

					case MirroredRepeatWrapping:
						if (Math.abs(Math.floor(uv.x) % 2) === 1) {
							uv.x = Math.ceil(uv.x) - uv.x;
						} else {
							uv.x = uv.x - Math.floor(uv.x);
						}

						break;
				}
			}

			if (uv.y < 0 || uv.y > 1) {
				switch (this.wrapT) {
					case RepeatWrapping:
						uv.y = uv.y - Math.floor(uv.y);
						break;

					case ClampToEdgeWrapping:
						uv.y = uv.y < 0 ? 0 : 1;
						break;

					case MirroredRepeatWrapping:
						if (Math.abs(Math.floor(uv.y) % 2) === 1) {
							uv.y = Math.ceil(uv.y) - uv.y;
						} else {
							uv.y = uv.y - Math.floor(uv.y);
						}

						break;
				}
			}

			if (this.flipY) {
				uv.y = 1 - uv.y;
			}

			return uv;
		}

		set needsUpdate(value) {
			if (value === true) this.version++;
		}

	}

	Texture.DEFAULT_IMAGE = undefined;
	Texture.DEFAULT_MAPPING = UVMapping;
	Texture.prototype.isTexture = true;

	function serializeImage(image) {
		if (typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement || typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap) {
			// default images
			return ImageUtils.getDataURL(image);
		} else {
			if (image.data) {
				// images of DataTexture
				return {
					data: Array.prototype.slice.call(image.data),
					width: image.width,
					height: image.height,
					type: image.data.constructor.name
				};
			} else {
				console.warn('THREE.Texture: Unable to serialize Texture.');
				return {};
			}
		}
	}

	class Vector4 {
		constructor(x = 0, y = 0, z = 0, w = 1) {
			this.x = x;
			this.y = y;
			this.z = z;
			this.w = w;
		}

		get width() {
			return this.z;
		}

		set width(value) {
			this.z = value;
		}

		get height() {
			return this.w;
		}

		set height(value) {
			this.w = value;
		}

		set(x, y, z, w) {
			this.x = x;
			this.y = y;
			this.z = z;
			this.w = w;
			return this;
		}

		setScalar(scalar) {
			this.x = scalar;
			this.y = scalar;
			this.z = scalar;
			this.w = scalar;
			return this;
		}

		setX(x) {
			this.x = x;
			return this;
		}

		setY(y) {
			this.y = y;
			return this;
		}

		setZ(z) {
			this.z = z;
			return this;
		}

		setW(w) {
			this.w = w;
			return this;
		}

		setComponent(index, value) {
			switch (index) {
				case 0:
					this.x = value;
					break;

				case 1:
					this.y = value;
					break;

				case 2:
					this.z = value;
					break;

				case 3:
					this.w = value;
					break;

				default:
					throw new Error('index is out of range: ' + index);
			}

			return this;
		}

		getComponent(index) {
			switch (index) {
				case 0:
					return this.x;

				case 1:
					return this.y;

				case 2:
					return this.z;

				case 3:
					return this.w;

				default:
					throw new Error('index is out of range: ' + index);
			}
		}

		clone() {
			return new this.constructor(this.x, this.y, this.z, this.w);
		}

		copy(v) {
			this.x = v.x;
			this.y = v.y;
			this.z = v.z;
			this.w = v.w !== undefined ? v.w : 1;
			return this;
		}

		add(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
				return this.addVectors(v, w);
			}

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
			this.w += v.w;
			return this;
		}

		addScalar(s) {
			this.x += s;
			this.y += s;
			this.z += s;
			this.w += s;
			return this;
		}

		addVectors(a, b) {
			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;
			this.w = a.w + b.w;
			return this;
		}

		addScaledVector(v, s) {
			this.x += v.x * s;
			this.y += v.y * s;
			this.z += v.z * s;
			this.w += v.w * s;
			return this;
		}

		sub(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
				return this.subVectors(v, w);
			}

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;
			this.w -= v.w;
			return this;
		}

		subScalar(s) {
			this.x -= s;
			this.y -= s;
			this.z -= s;
			this.w -= s;
			return this;
		}

		subVectors(a, b) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;
			this.w = a.w - b.w;
			return this;
		}

		multiply(v) {
			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;
			this.w *= v.w;
			return this;
		}

		multiplyScalar(scalar) {
			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;
			this.w *= scalar;
			return this;
		}

		applyMatrix4(m) {
			const x = this.x,
						y = this.y,
						z = this.z,
						w = this.w;
			const e = m.elements;
			this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
			this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
			this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
			this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
			return this;
		}

		divideScalar(scalar) {
			return this.multiplyScalar(1 / scalar);
		}

		setAxisAngleFromQuaternion(q) {
			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
			// q is assumed to be normalized
			this.w = 2 * Math.acos(q.w);
			const s = Math.sqrt(1 - q.w * q.w);

			if (s < 0.0001) {
				this.x = 1;
				this.y = 0;
				this.z = 0;
			} else {
				this.x = q.x / s;
				this.y = q.y / s;
				this.z = q.z / s;
			}

			return this;
		}

		setAxisAngleFromRotationMatrix(m) {
			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
			let angle, x, y, z; // variables for result

			const epsilon = 0.01,
						// margin to allow for rounding errors
			epsilon2 = 0.1,
						// margin to distinguish between 0 and 180 degrees
			te = m.elements,
						m11 = te[0],
						m12 = te[4],
						m13 = te[8],
						m21 = te[1],
						m22 = te[5],
						m23 = te[9],
						m31 = te[2],
						m32 = te[6],
						m33 = te[10];

			if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
				// singularity found
				// first check for identity matrix which must have +1 for all terms
				// in leading diagonal and zero in other terms
				if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
					// this singularity is identity matrix so angle = 0
					this.set(1, 0, 0, 0);
					return this; // zero angle, arbitrary axis
				} // otherwise this singularity is angle = 180


				angle = Math.PI;
				const xx = (m11 + 1) / 2;
				const yy = (m22 + 1) / 2;
				const zz = (m33 + 1) / 2;
				const xy = (m12 + m21) / 4;
				const xz = (m13 + m31) / 4;
				const yz = (m23 + m32) / 4;

				if (xx > yy && xx > zz) {
					// m11 is the largest diagonal term
					if (xx < epsilon) {
						x = 0;
						y = 0.707106781;
						z = 0.707106781;
					} else {
						x = Math.sqrt(xx);
						y = xy / x;
						z = xz / x;
					}
				} else if (yy > zz) {
					// m22 is the largest diagonal term
					if (yy < epsilon) {
						x = 0.707106781;
						y = 0;
						z = 0.707106781;
					} else {
						y = Math.sqrt(yy);
						x = xy / y;
						z = yz / y;
					}
				} else {
					// m33 is the largest diagonal term so base result on this
					if (zz < epsilon) {
						x = 0.707106781;
						y = 0.707106781;
						z = 0;
					} else {
						z = Math.sqrt(zz);
						x = xz / z;
						y = yz / z;
					}
				}

				this.set(x, y, z, angle);
				return this; // return 180 deg rotation
			} // as we have reached here there are no singularities so we can handle normally


			let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12)); // used to normalize

			if (Math.abs(s) < 0.001) s = 1; // prevent divide by zero, should not happen if matrix is orthogonal and should be
			// caught by singularity test above, but I've left it in just in case

			this.x = (m32 - m23) / s;
			this.y = (m13 - m31) / s;
			this.z = (m21 - m12) / s;
			this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
			return this;
		}

		min(v) {
			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);
			this.z = Math.min(this.z, v.z);
			this.w = Math.min(this.w, v.w);
			return this;
		}

		max(v) {
			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);
			this.z = Math.max(this.z, v.z);
			this.w = Math.max(this.w, v.w);
			return this;
		}

		clamp(min, max) {
			// assumes min < max, componentwise
			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));
			this.z = Math.max(min.z, Math.min(max.z, this.z));
			this.w = Math.max(min.w, Math.min(max.w, this.w));
			return this;
		}

		clampScalar(minVal, maxVal) {
			this.x = Math.max(minVal, Math.min(maxVal, this.x));
			this.y = Math.max(minVal, Math.min(maxVal, this.y));
			this.z = Math.max(minVal, Math.min(maxVal, this.z));
			this.w = Math.max(minVal, Math.min(maxVal, this.w));
			return this;
		}

		clampLength(min, max) {
			const length = this.length();
			return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
		}

		floor() {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			this.z = Math.floor(this.z);
			this.w = Math.floor(this.w);
			return this;
		}

		ceil() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			this.z = Math.ceil(this.z);
			this.w = Math.ceil(this.w);
			return this;
		}

		round() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			this.z = Math.round(this.z);
			this.w = Math.round(this.w);
			return this;
		}

		roundToZero() {
			this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
			this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
			this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
			return this;
		}

		negate() {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			this.w = -this.w;
			return this;
		}

		dot(v) {
			return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
		}

		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
		}

		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		}

		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
		}

		normalize() {
			return this.divideScalar(this.length() || 1);
		}

		setLength(length) {
			return this.normalize().multiplyScalar(length);
		}

		lerp(v, alpha) {
			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;
			this.z += (v.z - this.z) * alpha;
			this.w += (v.w - this.w) * alpha;
			return this;
		}

		lerpVectors(v1, v2, alpha) {
			this.x = v1.x + (v2.x - v1.x) * alpha;
			this.y = v1.y + (v2.y - v1.y) * alpha;
			this.z = v1.z + (v2.z - v1.z) * alpha;
			this.w = v1.w + (v2.w - v1.w) * alpha;
			return this;
		}

		equals(v) {
			return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
		}

		fromArray(array, offset = 0) {
			this.x = array[offset];
			this.y = array[offset + 1];
			this.z = array[offset + 2];
			this.w = array[offset + 3];
			return this;
		}

		toArray(array = [], offset = 0) {
			array[offset] = this.x;
			array[offset + 1] = this.y;
			array[offset + 2] = this.z;
			array[offset + 3] = this.w;
			return array;
		}

		fromBufferAttribute(attribute, index, offset) {
			if (offset !== undefined) {
				console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().');
			}

			this.x = attribute.getX(index);
			this.y = attribute.getY(index);
			this.z = attribute.getZ(index);
			this.w = attribute.getW(index);
			return this;
		}

		random() {
			this.x = Math.random();
			this.y = Math.random();
			this.z = Math.random();
			this.w = Math.random();
			return this;
		}

		*[Symbol.iterator]() {
			yield this.x;
			yield this.y;
			yield this.z;
			yield this.w;
		}

	}

	Vector4.prototype.isVector4 = true;

	/*
	 In options, we can specify:
	 * Texture parameters for an auto-generated target texture
	 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
	*/

	class WebGLRenderTarget extends EventDispatcher {
		constructor(width, height, options = {}) {
			super();
			this.width = width;
			this.height = height;
			this.depth = 1;
			this.scissor = new Vector4(0, 0, width, height);
			this.scissorTest = false;
			this.viewport = new Vector4(0, 0, width, height);
			this.texture = new Texture(undefined, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding);
			this.texture.isRenderTargetTexture = true;
			this.texture.image = {
				width: width,
				height: height,
				depth: 1
			};
			this.texture.generateMipmaps = options.generateMipmaps !== undefined ? options.generateMipmaps : false;
			this.texture.internalFormat = options.internalFormat !== undefined ? options.internalFormat : null;
			this.texture.minFilter = options.minFilter !== undefined ? options.minFilter : LinearFilter;
			this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
			this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : false;
			this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;
		}

		setTexture(texture) {
			texture.image = {
				width: this.width,
				height: this.height,
				depth: this.depth
			};
			this.texture = texture;
		}

		setSize(width, height, depth = 1) {
			if (this.width !== width || this.height !== height || this.depth !== depth) {
				this.width = width;
				this.height = height;
				this.depth = depth;
				this.texture.image.width = width;
				this.texture.image.height = height;
				this.texture.image.depth = depth;
				this.dispose();
			}

			this.viewport.set(0, 0, width, height);
			this.scissor.set(0, 0, width, height);
		}

		clone() {
			return new this.constructor().copy(this);
		}

		copy(source) {
			this.width = source.width;
			this.height = source.height;
			this.depth = source.depth;
			this.viewport.copy(source.viewport);
			this.texture = source.texture.clone();
			this.texture.image = { ...this.texture.image
			}; // See #20328.

			this.depthBuffer = source.depthBuffer;
			this.stencilBuffer = source.stencilBuffer;
			this.depthTexture = source.depthTexture;
			return this;
		}

		dispose() {
			this.dispatchEvent({
				type: 'dispose'
			});
		}

	}

	WebGLRenderTarget.prototype.isWebGLRenderTarget = true;

	class WebGLMultipleRenderTargets extends WebGLRenderTarget {
		constructor(width, height, count) {
			super(width, height);
			const texture = this.texture;
			this.texture = [];

			for (let i = 0; i < count; i++) {
				this.texture[i] = texture.clone();
			}
		}

		setSize(width, height, depth = 1) {
			if (this.width !== width || this.height !== height || this.depth !== depth) {
				this.width = width;
				this.height = height;
				this.depth = depth;

				for (let i = 0, il = this.texture.length; i < il; i++) {
					this.texture[i].image.width = width;
					this.texture[i].image.height = height;
					this.texture[i].image.depth = depth;
				}

				this.dispose();
			}

			this.viewport.set(0, 0, width, height);
			this.scissor.set(0, 0, width, height);
			return this;
		}

		copy(source) {
			this.dispose();
			this.width = source.width;
			this.height = source.height;
			this.depth = source.depth;
			this.viewport.set(0, 0, this.width, this.height);
			this.scissor.set(0, 0, this.width, this.height);
			this.depthBuffer = source.depthBuffer;
			this.stencilBuffer = source.stencilBuffer;
			this.depthTexture = source.depthTexture;
			this.texture.length = 0;

			for (let i = 0, il = source.texture.length; i < il; i++) {
				this.texture[i] = source.texture[i].clone();
			}

			return this;
		}

	}

	WebGLMultipleRenderTargets.prototype.isWebGLMultipleRenderTargets = true;

	class WebGLMultisampleRenderTarget extends WebGLRenderTarget {
		constructor(width, height, options) {
			super(width, height, options);
			this.samples = 4;
		}

		copy(source) {
			super.copy.call(this, source);
			this.samples = source.samples;
			return this;
		}

	}

	WebGLMultisampleRenderTarget.prototype.isWebGLMultisampleRenderTarget = true;

	class Quaternion {
		constructor(x = 0, y = 0, z = 0, w = 1) {
			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;
		}

		static slerp(qa, qb, qm, t) {
			console.warn('THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.');
			return qm.slerpQuaternions(qa, qb, t);
		}

		static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
			// fuzz-free, array-based Quaternion SLERP operation
			let x0 = src0[srcOffset0 + 0],
					y0 = src0[srcOffset0 + 1],
					z0 = src0[srcOffset0 + 2],
					w0 = src0[srcOffset0 + 3];
			const x1 = src1[srcOffset1 + 0],
						y1 = src1[srcOffset1 + 1],
						z1 = src1[srcOffset1 + 2],
						w1 = src1[srcOffset1 + 3];

			if (t === 0) {
				dst[dstOffset + 0] = x0;
				dst[dstOffset + 1] = y0;
				dst[dstOffset + 2] = z0;
				dst[dstOffset + 3] = w0;
				return;
			}

			if (t === 1) {
				dst[dstOffset + 0] = x1;
				dst[dstOffset + 1] = y1;
				dst[dstOffset + 2] = z1;
				dst[dstOffset + 3] = w1;
				return;
			}

			if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
				let s = 1 - t;
				const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
							dir = cos >= 0 ? 1 : -1,
							sqrSin = 1 - cos * cos; // Skip the Slerp for tiny steps to avoid numeric problems:

				if (sqrSin > Number.EPSILON) {
					const sin = Math.sqrt(sqrSin),
								len = Math.atan2(sin, cos * dir);
					s = Math.sin(s * len) / sin;
					t = Math.sin(t * len) / sin;
				}

				const tDir = t * dir;
				x0 = x0 * s + x1 * tDir;
				y0 = y0 * s + y1 * tDir;
				z0 = z0 * s + z1 * tDir;
				w0 = w0 * s + w1 * tDir; // Normalize in case we just did a lerp:

				if (s === 1 - t) {
					const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
					x0 *= f;
					y0 *= f;
					z0 *= f;
					w0 *= f;
				}
			}

			dst[dstOffset] = x0;
			dst[dstOffset + 1] = y0;
			dst[dstOffset + 2] = z0;
			dst[dstOffset + 3] = w0;
		}

		static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
			const x0 = src0[srcOffset0];
			const y0 = src0[srcOffset0 + 1];
			const z0 = src0[srcOffset0 + 2];
			const w0 = src0[srcOffset0 + 3];
			const x1 = src1[srcOffset1];
			const y1 = src1[srcOffset1 + 1];
			const z1 = src1[srcOffset1 + 2];
			const w1 = src1[srcOffset1 + 3];
			dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
			dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
			dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
			dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
			return dst;
		}

		get x() {
			return this._x;
		}

		set x(value) {
			this._x = value;

			this._onChangeCallback();
		}

		get y() {
			return this._y;
		}

		set y(value) {
			this._y = value;

			this._onChangeCallback();
		}

		get z() {
			return this._z;
		}

		set z(value) {
			this._z = value;

			this._onChangeCallback();
		}

		get w() {
			return this._w;
		}

		set w(value) {
			this._w = value;

			this._onChangeCallback();
		}

		set(x, y, z, w) {
			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

			this._onChangeCallback();

			return this;
		}

		clone() {
			return new this.constructor(this._x, this._y, this._z, this._w);
		}

		copy(quaternion) {
			this._x = quaternion.x;
			this._y = quaternion.y;
			this._z = quaternion.z;
			this._w = quaternion.w;

			this._onChangeCallback();

			return this;
		}

		setFromEuler(euler, update) {
			if (!(euler && euler.isEuler)) {
				throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
			}

			const x = euler._x,
						y = euler._y,
						z = euler._z,
						order = euler._order; // http://www.mathworks.com/matlabcentral/fileexchange/
			// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
			//	content/SpinCalc.m

			const cos = Math.cos;
			const sin = Math.sin;
			const c1 = cos(x / 2);
			const c2 = cos(y / 2);
			const c3 = cos(z / 2);
			const s1 = sin(x / 2);
			const s2 = sin(y / 2);
			const s3 = sin(z / 2);

			switch (order) {
				case 'XYZ':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'YXZ':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				case 'ZXY':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'ZYX':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				case 'YZX':
					this._x = s1 * c2 * c3 + c1 * s2 * s3;
					this._y = c1 * s2 * c3 + s1 * c2 * s3;
					this._z = c1 * c2 * s3 - s1 * s2 * c3;
					this._w = c1 * c2 * c3 - s1 * s2 * s3;
					break;

				case 'XZY':
					this._x = s1 * c2 * c3 - c1 * s2 * s3;
					this._y = c1 * s2 * c3 - s1 * c2 * s3;
					this._z = c1 * c2 * s3 + s1 * s2 * c3;
					this._w = c1 * c2 * c3 + s1 * s2 * s3;
					break;

				default:
					console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order);
			}

			if (update !== false) this._onChangeCallback();
			return this;
		}

		setFromAxisAngle(axis, angle) {
			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
			// assumes axis is normalized
			const halfAngle = angle / 2,
						s = Math.sin(halfAngle);
			this._x = axis.x * s;
			this._y = axis.y * s;
			this._z = axis.z * s;
			this._w = Math.cos(halfAngle);

			this._onChangeCallback();

			return this;
		}

		setFromRotationMatrix(m) {
			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
			const te = m.elements,
						m11 = te[0],
						m12 = te[4],
						m13 = te[8],
						m21 = te[1],
						m22 = te[5],
						m23 = te[9],
						m31 = te[2],
						m32 = te[6],
						m33 = te[10],
						trace = m11 + m22 + m33;

			if (trace > 0) {
				const s = 0.5 / Math.sqrt(trace + 1.0);
				this._w = 0.25 / s;
				this._x = (m32 - m23) * s;
				this._y = (m13 - m31) * s;
				this._z = (m21 - m12) * s;
			} else if (m11 > m22 && m11 > m33) {
				const s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
				this._w = (m32 - m23) / s;
				this._x = 0.25 * s;
				this._y = (m12 + m21) / s;
				this._z = (m13 + m31) / s;
			} else if (m22 > m33) {
				const s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
				this._w = (m13 - m31) / s;
				this._x = (m12 + m21) / s;
				this._y = 0.25 * s;
				this._z = (m23 + m32) / s;
			} else {
				const s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
				this._w = (m21 - m12) / s;
				this._x = (m13 + m31) / s;
				this._y = (m23 + m32) / s;
				this._z = 0.25 * s;
			}

			this._onChangeCallback();

			return this;
		}

		setFromUnitVectors(vFrom, vTo) {
			// assumes direction vectors vFrom and vTo are normalized
			let r = vFrom.dot(vTo) + 1;

			if (r < Number.EPSILON) {
				// vFrom and vTo point in opposite directions
				r = 0;

				if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
					this._x = -vFrom.y;
					this._y = vFrom.x;
					this._z = 0;
					this._w = r;
				} else {
					this._x = 0;
					this._y = -vFrom.z;
					this._z = vFrom.y;
					this._w = r;
				}
			} else {
				// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
				this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
				this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
				this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
				this._w = r;
			}

			return this.normalize();
		}

		angleTo(q) {
			return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
		}

		rotateTowards(q, step) {
			const angle = this.angleTo(q);
			if (angle === 0) return this;
			const t = Math.min(1, step / angle);
			this.slerp(q, t);
			return this;
		}

		identity() {
			return this.set(0, 0, 0, 1);
		}

		invert() {
			// quaternion is assumed to have unit length
			return this.conjugate();
		}

		conjugate() {
			this._x *= -1;
			this._y *= -1;
			this._z *= -1;

			this._onChangeCallback();

			return this;
		}

		dot(v) {
			return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
		}

		lengthSq() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
		}

		length() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
		}

		normalize() {
			let l = this.length();

			if (l === 0) {
				this._x = 0;
				this._y = 0;
				this._z = 0;
				this._w = 1;
			} else {
				l = 1 / l;
				this._x = this._x * l;
				this._y = this._y * l;
				this._z = this._z * l;
				this._w = this._w * l;
			}

			this._onChangeCallback();

			return this;
		}

		multiply(q, p) {
			if (p !== undefined) {
				console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.');
				return this.multiplyQuaternions(q, p);
			}

			return this.multiplyQuaternions(this, q);
		}

		premultiply(q) {
			return this.multiplyQuaternions(q, this);
		}

		multiplyQuaternions(a, b) {
			// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
			const qax = a._x,
						qay = a._y,
						qaz = a._z,
						qaw = a._w;
			const qbx = b._x,
						qby = b._y,
						qbz = b._z,
						qbw = b._w;
			this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
			this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
			this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
			this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

			this._onChangeCallback();

			return this;
		}

		slerp(qb, t) {
			if (t === 0) return this;
			if (t === 1) return this.copy(qb);
			const x = this._x,
						y = this._y,
						z = this._z,
						w = this._w; // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

			let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

			if (cosHalfTheta < 0) {
				this._w = -qb._w;
				this._x = -qb._x;
				this._y = -qb._y;
				this._z = -qb._z;
				cosHalfTheta = -cosHalfTheta;
			} else {
				this.copy(qb);
			}

			if (cosHalfTheta >= 1.0) {
				this._w = w;
				this._x = x;
				this._y = y;
				this._z = z;
				return this;
			}

			const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

			if (sqrSinHalfTheta <= Number.EPSILON) {
				const s = 1 - t;
				this._w = s * w + t * this._w;
				this._x = s * x + t * this._x;
				this._y = s * y + t * this._y;
				this._z = s * z + t * this._z;
				this.normalize();

				this._onChangeCallback();

				return this;
			}

			const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
			const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
			const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
						ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
			this._w = w * ratioA + this._w * ratioB;
			this._x = x * ratioA + this._x * ratioB;
			this._y = y * ratioA + this._y * ratioB;
			this._z = z * ratioA + this._z * ratioB;

			this._onChangeCallback();

			return this;
		}

		slerpQuaternions(qa, qb, t) {
			this.copy(qa).slerp(qb, t);
		}

		random() {
			// Derived from http://planning.cs.uiuc.edu/node198.html
			// Note, this source uses w, x, y, z ordering,
			// so we swap the order below.
			const u1 = Math.random();
			const sqrt1u1 = Math.sqrt(1 - u1);
			const sqrtu1 = Math.sqrt(u1);
			const u2 = 2 * Math.PI * Math.random();
			const u3 = 2 * Math.PI * Math.random();
			return this.set(sqrt1u1 * Math.cos(u2), sqrtu1 * Math.sin(u3), sqrtu1 * Math.cos(u3), sqrt1u1 * Math.sin(u2));
		}

		equals(quaternion) {
			return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
		}

		fromArray(array, offset = 0) {
			this._x = array[offset];
			this._y = array[offset + 1];
			this._z = array[offset + 2];
			this._w = array[offset + 3];

			this._onChangeCallback();

			return this;
		}

		toArray(array = [], offset = 0) {
			array[offset] = this._x;
			array[offset + 1] = this._y;
			array[offset + 2] = this._z;
			array[offset + 3] = this._w;
			return array;
		}

		fromBufferAttribute(attribute, index) {
			this._x = attribute.getX(index);
			this._y = attribute.getY(index);
			this._z = attribute.getZ(index);
			this._w = attribute.getW(index);
			return this;
		}

		_onChange(callback) {
			this._onChangeCallback = callback;
			return this;
		}

		_onChangeCallback() {}

	}

	Quaternion.prototype.isQuaternion = true;

	class Vector3 {
		constructor(x = 0, y = 0, z = 0) {
			this.x = x;
			this.y = y;
			this.z = z;
		}

		set(x, y, z) {
			if (z === undefined) z = this.z; // sprite.scale.set(x,y)

			this.x = x;
			this.y = y;
			this.z = z;
			return this;
		}

		setScalar(scalar) {
			this.x = scalar;
			this.y = scalar;
			this.z = scalar;
			return this;
		}

		setX(x) {
			this.x = x;
			return this;
		}

		setY(y) {
			this.y = y;
			return this;
		}

		setZ(z) {
			this.z = z;
			return this;
		}

		setComponent(index, value) {
			switch (index) {
				case 0:
					this.x = value;
					break;

				case 1:
					this.y = value;
					break;

				case 2:
					this.z = value;
					break;

				default:
					throw new Error('index is out of range: ' + index);
			}

			return this;
		}

		getComponent(index) {
			switch (index) {
				case 0:
					return this.x;

				case 1:
					return this.y;

				case 2:
					return this.z;

				default:
					throw new Error('index is out of range: ' + index);
			}
		}

		clone() {
			return new this.constructor(this.x, this.y, this.z);
		}

		copy(v) {
			this.x = v.x;
			this.y = v.y;
			this.z = v.z;
			return this;
		}

		add(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.');
				return this.addVectors(v, w);
			}

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
			return this;
		}

		addScalar(s) {
			this.x += s;
			this.y += s;
			this.z += s;
			return this;
		}

		addVectors(a, b) {
			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;
			return this;
		}

		addScaledVector(v, s) {
			this.x += v.x * s;
			this.y += v.y * s;
			this.z += v.z * s;
			return this;
		}

		sub(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.');
				return this.subVectors(v, w);
			}

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;
			return this;
		}

		subScalar(s) {
			this.x -= s;
			this.y -= s;
			this.z -= s;
			return this;
		}

		subVectors(a, b) {
			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;
			return this;
		}

		multiply(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.');
				return this.multiplyVectors(v, w);
			}

			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;
			return this;
		}

		multiplyScalar(scalar) {
			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;
			return this;
		}

		multiplyVectors(a, b) {
			this.x = a.x * b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;
			return this;
		}

		applyEuler(euler) {
			if (!(euler && euler.isEuler)) {
				console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.');
			}

			return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
		}

		applyAxisAngle(axis, angle) {
			return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
		}

		applyMatrix3(m) {
			const x = this.x,
						y = this.y,
						z = this.z;
			const e = m.elements;
			this.x = e[0] * x + e[3] * y + e[6] * z;
			this.y = e[1] * x + e[4] * y + e[7] * z;
			this.z = e[2] * x + e[5] * y + e[8] * z;
			return this;
		}

		applyNormalMatrix(m) {
			return this.applyMatrix3(m).normalize();
		}

		applyMatrix4(m) {
			const x = this.x,
						y = this.y,
						z = this.z;
			const e = m.elements;
			const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
			this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
			this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
			this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
			return this;
		}

		applyQuaternion(q) {
			const x = this.x,
						y = this.y,
						z = this.z;
			const qx = q.x,
						qy = q.y,
						qz = q.z,
						qw = q.w; // calculate quat * vector

			const ix = qw * x + qy * z - qz * y;
			const iy = qw * y + qz * x - qx * z;
			const iz = qw * z + qx * y - qy * x;
			const iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

			this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
			this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
			this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
			return this;
		}

		project(camera) {
			return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
		}

		unproject(camera) {
			return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
		}

		transformDirection(m) {
			// input: THREE.Matrix4 affine matrix
			// vector interpreted as a direction
			const x = this.x,
						y = this.y,
						z = this.z;
			const e = m.elements;
			this.x = e[0] * x + e[4] * y + e[8] * z;
			this.y = e[1] * x + e[5] * y + e[9] * z;
			this.z = e[2] * x + e[6] * y + e[10] * z;
			return this.normalize();
		}

		divide(v) {
			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;
			return this;
		}

		divideScalar(scalar) {
			return this.multiplyScalar(1 / scalar);
		}

		min(v) {
			this.x = Math.min(this.x, v.x);
			this.y = Math.min(this.y, v.y);
			this.z = Math.min(this.z, v.z);
			return this;
		}

		max(v) {
			this.x = Math.max(this.x, v.x);
			this.y = Math.max(this.y, v.y);
			this.z = Math.max(this.z, v.z);
			return this;
		}

		clamp(min, max) {
			// assumes min < max, componentwise
			this.x = Math.max(min.x, Math.min(max.x, this.x));
			this.y = Math.max(min.y, Math.min(max.y, this.y));
			this.z = Math.max(min.z, Math.min(max.z, this.z));
			return this;
		}

		clampScalar(minVal, maxVal) {
			this.x = Math.max(minVal, Math.min(maxVal, this.x));
			this.y = Math.max(minVal, Math.min(maxVal, this.y));
			this.z = Math.max(minVal, Math.min(maxVal, this.z));
			return this;
		}

		clampLength(min, max) {
			const length = this.length();
			return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
		}

		floor() {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			this.z = Math.floor(this.z);
			return this;
		}

		ceil() {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			this.z = Math.ceil(this.z);
			return this;
		}

		round() {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			this.z = Math.round(this.z);
			return this;
		}

		roundToZero() {
			this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
			this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
			this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
			return this;
		}

		negate() {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			return this;
		}

		dot(v) {
			return this.x * v.x + this.y * v.y + this.z * v.z;
		} // TODO lengthSquared?


		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}

		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		}

		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
		}

		normalize() {
			return this.divideScalar(this.length() || 1);
		}

		setLength(length) {
			return this.normalize().multiplyScalar(length);
		}

		lerp(v, alpha) {
			this.x += (v.x - this.x) * alpha;
			this.y += (v.y - this.y) * alpha;
			this.z += (v.z - this.z) * alpha;
			return this;
		}

		lerpVectors(v1, v2, alpha) {
			this.x = v1.x + (v2.x - v1.x) * alpha;
			this.y = v1.y + (v2.y - v1.y) * alpha;
			this.z = v1.z + (v2.z - v1.z) * alpha;
			return this;
		}

		cross(v, w) {
			if (w !== undefined) {
				console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.');
				return this.crossVectors(v, w);
			}

			return this.crossVectors(this, v);
		}

		crossVectors(a, b) {
			const ax = a.x,
						ay = a.y,
						az = a.z;
			const bx = b.x,
						by = b.y,
						bz = b.z;
			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;
			return this;
		}

		projectOnVector(v) {
			const denominator = v.lengthSq();
			if (denominator === 0) return this.set(0, 0, 0);
			const scalar = v.dot(this) / denominator;
			return this.copy(v).multiplyScalar(scalar);
		}

		projectOnPlane(planeNormal) {
			_vector$c.copy(this).projectOnVector(planeNormal);

			return this.sub(_vector$c);
		}

		reflect(normal) {
			// reflect incident vector off plane orthogonal to normal
			// normal is assumed to have unit length
			return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
		}

		angleTo(v) {
			const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
			if (denominator === 0) return Math.PI / 2;
			const theta = this.dot(v) / denominator; // clamp, to handle numerical problems

			return Math.acos(clamp(theta, -1, 1));
		}

		distanceTo(v) {
			return Math.sqrt(this.distanceToSquared(v));
		}

		distanceToSquared(v) {
			const dx = this.x - v.x,
						dy = this.y - v.y,
						dz = this.z - v.z;
			return dx * dx + dy * dy + dz * dz;
		}

		manhattanDistanceTo(v) {
			return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
		}

		setFromSpherical(s) {
			return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
		}

		setFromSphericalCoords(radius, phi, theta) {
			const sinPhiRadius = Math.sin(phi) * radius;
			this.x = sinPhiRadius * Math.sin(theta);
			this.y = Math.cos(phi) * radius;
			this.z = sinPhiRadius * Math.cos(theta);
			return this;
		}

		setFromCylindrical(c) {
			return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
		}

		setFromCylindricalCoords(radius, theta, y) {
			this.x = radius * Math.sin(theta);
			this.y = y;
			this.z = radius * Math.cos(theta);
			return this;
		}

		setFromMatrixPosition(m) {
			const e = m.elements;
			this.x = e[12];
			this.y = e[13];
			this.z = e[14];
			return this;
		}

		setFromMatrixScale(m) {
			const sx = this.setFromMatrixColumn(m, 0).length();
			const sy = this.setFromMatrixColumn(m, 1).length();
			const sz = this.setFromMatrixColumn(m, 2).length();
			this.x = sx;
			this.y = sy;
			this.z = sz;
			return this;
		}

		setFromMatrixColumn(m, index) {
			return this.fromArray(m.elements, index * 4);
		}

		setFromMatrix3Column(m, index) {
			return this.fromArray(m.elements, index * 3);
		}

		equals(v) {
			return v.x === this.x && v.y === this.y && v.z === this.z;
		}

		fromArray(array, offset = 0) {
			this.x = array[offset];
			this.y = array[offset + 1];
			this.z = array[offset + 2];
			return this;
		}

		toArray(array = [], offset = 0) {
			array[offset] = this.x;
			array[offset + 1] = this.y;
			array[offset + 2] = this.z;
			return array;
		}

		fromBufferAttribute(attribute, index, offset) {
			if (offset !== undefined) {
				console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().');
			}

			this.x = attribute.getX(index);
			this.y = attribute.getY(index);
			this.z = attribute.getZ(index);
			return this;
		}

		random() {
			this.x = Math.random();
			this.y = Math.random();
			this.z = Math.random();
			return this;
		}

		randomDirection() {
			// Derived from https://mathworld.wolfram.com/SpherePointPicking.html
			const u = (Math.random() - 0.5) * 2;
			const t = Math.random() * Math.PI * 2;
			const f = Math.sqrt(1 - u ** 2);
			this.x = f * Math.cos(t);
			this.y = f * Math.sin(t);
			this.z = u;
			return this;
		}

		*[Symbol.iterator]() {
			yield this.x;
			yield this.y;
			yield this.z;
		}

	}

	Vector3.prototype.isVector3 = true;

	const _vector$c = /*@__PURE__*/new Vector3();

	const _quaternion$4 = /*@__PURE__*/new Quaternion();

	class Box3 {
		constructor(min = new Vector3(+Infinity, +Infinity, +Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
			this.min = min;
			this.max = max;
		}

		set(min, max) {
			this.min.copy(min);
			this.max.copy(max);
			return this;
		}

		setFromArray(array) {
			let minX = +Infinity;
			let minY = +Infinity;
			let minZ = +Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;
			let maxZ = -Infinity;

			for (let i = 0, l = array.length; i < l; i += 3) {
				const x = array[i];
				const y = array[i + 1];
				const z = array[i + 2];
				if (x < minX) minX = x;
				if (y < minY) minY = y;
				if (z < minZ) minZ = z;
				if (x > maxX) maxX = x;
				if (y > maxY) maxY = y;
				if (z > maxZ) maxZ = z;
			}

			this.min.set(minX, minY, minZ);
			this.max.set(maxX, maxY, maxZ);
			return this;
		}

		setFromBufferAttribute(attribute) {
			let minX = +Infinity;
			let minY = +Infinity;
			let minZ = +Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;
			let maxZ = -Infinity;

			for (let i = 0, l = attribute.count; i < l; i++) {
				const x = attribute.getX(i);
				const y = attribute.getY(i);
				const z = attribute.getZ(i);
				if (x < minX) minX = x;
				if (y < minY) minY = y;
				if (z < minZ) minZ = z;
				if (x > maxX) maxX = x;
				if (y > maxY) maxY = y;
				if (z > maxZ) maxZ = z;
			}

			this.min.set(minX, minY, minZ);
			this.max.set(maxX, maxY, maxZ);
			return this;
		}

		setFromPoints(points) {
			this.makeEmpty();

			for (let i = 0, il = points.length; i < il; i++) {
				this.expandByPoint(points[i]);
			}

			return this;
		}

		setFromCenterAndSize(center, size) {
			const halfSize = _vector$b.copy(size).multiplyScalar(0.5);

			this.min.copy(center).sub(halfSize);
			this.max.copy(center).add(halfSize);
			return this;
		}

		setFromObject(object) {
			this.makeEmpty();
			return this.expandByObject(object);
		}

		clone() {
			return new this.constructor().copy(this);
		}

		copy(box) {
			this.min.copy(box.min);
			this.max.copy(box.max);
			return this;
		}

		makeEmpty() {
			this.min.x = this.min.y = this.min.z = +Infinity;
			this.max.x = this.max.y = this.max.z = -Infinity;
			return this;
		}

		isEmpty() {
			// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
		}

		getCenter(target) {
			return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
		}

		getSize(target) {
			return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
		}

		expandByPoint(point) {
			this.min.min(point);
			this.max.max(point);
			return this;
		}

		expandByVector(vector) {
			this.min.sub(vector);
			this.max.add(vector);
			return this;
		}

		expandByScalar(scalar) {
			this.min.addScalar(-scalar);
			this.max.addScalar(scalar);
			return this;
		}

		expandByObject(object) {
			// Computes the world-axis-aligned bounding box of an object (including its children),
			// accounting for both the object's, and children's, world transforms
			object.updateWorldMatrix(false, false);
			const geometry = object.geometry;

			if (geometry !== undefined) {
				if (geometry.boundingBox === null) {
					geometry.computeBoundingBox();
				}

				_box$3.copy(geometry.boundingBox);

				_box$3.applyMatrix4(object.matrixWorld);

				this.union(_box$3);
			}

			const children = object.children;

			for (let i = 0, l = children.length; i < l; i++) {
				this.expandByObject(children[i]);
			}

			return this;
		}

		containsPoint(point) {
			return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
		}

		containsBox(box) {
			return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
		}

		getParameter(point, target) {
			// This can potentially have a divide by zero if the box
			// has a size dimension of 0.
			return target.set((point.x - this.min.x) / (this.max.x - this.min.x), (point.y - this.min.y) / (this.max.y - this.min.y), (point.z - this.min.z) / (this.max.z - this.min.z));
		}

		intersectsBox(box) {
			// using 6 splitting planes to rule out intersections.
			return box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y || box.max.z < this.min.z || box.min.z > this.max.z ? false : true;
		}

		intersectsSphere(sphere) {
			// Find the point on the AABB closest to the sphere center.
			this.clampPoint(sphere.center, _vector$b); // If that point is inside the sphere, the AABB and sphere intersect.

			return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
		}

		intersectsPlane(plane) {
			// We compute the minimum and maximum dot product values. If those values
			// are on the same side (back or front) of the plane, then there is no intersection.
			let min, max;

			if (plane.normal.x > 0) {
				min = plane.normal.x * this.min.x;
				max = plane.normal.x * this.max.x;
			} else {
				min = plane.normal.x * this.max.x;
				max = plane.normal.x * this.min.x;
			}

			if (plane.normal.y > 0) {
				min += plane.normal.y * this.min.y;
				max += plane.normal.y * this.max.y;
			} else {
				min += plane.normal.y * this.max.y;
				max += plane.normal.y * this.min.y;
			}

			if (plane.normal.z > 0) {
				min += plane.normal.z * this.min.z;
				max += plane.normal.z * this.max.z;
			} else {
				min += plane.normal.z * this.max.z;
				max += plane.normal.z * this.min.z;
			}

			return min <= -plane.constant && max >= -plane.constant;
		}

		intersectsTriangle(triangle) {
			if (this.isEmpty()) {
				return false;
			} // compute box center and extents


			this.getCenter(_center);

			_extents.subVectors(this.max, _center); // translate triangle to aabb origin


			_v0$2.subVectors(triangle.a, _center);

			_v1$7.subVectors(triangle.b, _center);

			_v2$3.subVectors(triangle.c, _center); // compute edge vectors for triangle


			_f0.subVectors(_v1$7, _v0$2);

			_f1.subVectors(_v2$3, _v1$7);

			_f2.subVectors(_v0$2, _v2$3); // test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
			// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
			// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)


			let axes = [0, -_f0.z, _f0.y, 0, -_f1.z, _f1.y, 0, -_f2.z, _f2.y, _f0.z, 0, -_f0.x, _f1.z, 0, -_f1.x, _f2.z, 0, -_f2.x, -_f0.y, _f0.x, 0, -_f1.y, _f1.x, 0, -_f2.y, _f2.x, 0];

			if (!satForAxes(axes, _v0$2, _v1$7, _v2$3, _extents)) {
				return false;
			} // test 3 face normals from the aabb


			axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];

			if (!satForAxes(axes, _v0$2, _v1$7, _v2$3, _extents)) {
				return false;
			} // finally testing the face normal of the triangle
			// use already existing triangle edge vectors here


			_triangleNormal.crossVectors(_f0, _f1);

			axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
			return satForAxes(axes, _v0$2, _v1$7, _v2$3, _extents);
		}

		clampPoint(point, target) {
			return target.copy(point).clamp(this.min, this.max);
		}

		distanceToPoint(point) {
			const clampedPoint = _vector$b.copy(point).clamp(this.min, this.max);

			return clampedPoint.sub(point).length();
		}

		getBoundingSphere(target) {
			this.getCenter(target.center);
			target.radius = this.getSize(_vector$b).length() * 0.5;
			return target;
		}

		intersect(box) {
			this.min.max(box.min);
			this.max.min(box.max); // ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.

			if (this.isEmpty()) this.makeEmpty();
			return this;
		}

		union(box) {
			this.min.min(box.min);
			this.max.max(box.max);
			return this;
		}

		applyMatrix4(matrix) {
			// transform of empty box is an empty box.
			if (this.isEmpty()) return this; // NOTE: I am using a binary pattern to specify all 2^3 combinations below

			_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix); // 000


			_points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix); // 001


			_points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix); // 010


			_points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix); // 011


			_points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix); // 100


			_points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix); // 101


			_points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix); // 110


			_points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix); // 111


			this.setFromPoints(_points);
			return this;
		}

		translate(offset) {
			this.min.add(offset);
			this.max.add(offset);
			return this;
		}

		equals(box) {
			return box.min.equals(this.min) && box.max.equals(this.max);
		}

	}

	Box3.prototype.isBox3 = true;
	const _points = [/*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3(), /*@__PURE__*/new Vector3()];

	const _vector$b = /*@__PURE__*/new Vector3();

	const _box$3 = /*@__PURE__*/new Box3(); // triangle centered vertices


	const _v0$2 = /*@__PURE__*/new Vector3();

	const _v1$7 = /*@__PURE__*/new Vector3();

	const _v2$3 = /*@__PURE__*/new Vector3(); // triangle edge vectors


	const _f0 = /*@__PURE__*/new Vector3();

	const _f1 = /*@__PURE__*/new Vector3();

	const _f2 = /*@__PURE__*/new Vector3();

	const _center = /*@__PURE__*/new Vector3();

	const _extents = /*@__PURE__*/new Vector3();

	const _triangleNormal = /*@__PURE__*/new Vector3();

	const _testAxis = /*@__PURE__*/new Vector3();

	function satForAxes(axes, v0, v1, v2, extents) {
		for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
			_testAxis.fromArray(axes, i); // project the aabb onto the seperating axis


			const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z); // project all 3 vertices of the triangle onto the seperating axis

			const p0 = v0.dot(_testAxis);
			const p1 = v1.dot(_testAxis);
			const p2 = v2.dot(_testAxis); // actual test, basically see if either of the most extreme of the triangle points intersects r

			if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
				// points of the projected triangle are outside the projected half-length of the aabb
				// the axis is seperating and we can exit
				return false;
			}
		}

		return true;
	}

	const _box$2 = /*@__PURE__*/new Box3();

	const _v1$6 = /*@__PURE__*/new Vector3();

	const _toFarthestPoint = /*@__PURE__*/new Vector3();

	const _toPoint = /*@__PURE__*/new Vector3();

	class Sphere {
		constructor(center = new Vector3(), radius = -1) {
			this.center = center;
			this.radius = radius;
		}

		set(center, radius) {
			this.center.copy(center);
			this.radius = radius;
			return this;
		}

		setFromPoints(points, optionalCenter) {
			const center = this.center;

			if (optionalCenter !== undefined) {
				center.copy(optionalCenter);
			} else {
				_box$2.setFromPoints(points).getCenter(center);
			}

			let maxRadiusSq = 0;

			for (let i = 0, il = points.length; i < il; i++) {
				maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
			}

			this.radius = Math.sqrt(maxRadiusSq);
			return this;
		}

		copy(sphere) {
			this.center.copy(sphere.center);
			this.radius = sphere.radius;
			return this;
		}

		isEmpty() {
			return this.radius < 0;
		}

		makeEmpty() {
			this.center.set(0, 0, 0);
			this.radius = -1;
			return this;
		}

		containsPoint(point) {
			return point.distanceToSquared(this.center) <= this.radius * this.radius;
		}

		distanceToPoint(point) {
			return point.distanceTo(this.center) - this.radius;
		}

		intersectsSphere(sphere) {
			const radiusSum = this.radius + sphere.radius;
			return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
		}

		intersectsBox(box) {
			return box.intersectsSphere(this);
		}

		intersectsPlane(plane) {
			return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
		}

		clampPoint(point, target) {
			const deltaLengthSq = this.center.distanceToSquared(point);
			target.copy(point);

			if (deltaLengthSq > this.radius * this.radius) {
				target.sub(this.center).normalize();
				target.multiplyScalar(this.radius).add(this.center);
			}

			return target;
		}

		getBoundingBox(target) {
			if (this.isEmpty()) {
				// Empty sphere produces empty bounding box
				target.makeEmpty();
				return target;
			}

			target.set(this.center, this.center);
			target.expandByScalar(this.radius);
			return target;
		}

		applyMatrix4(matrix) {
			this.center.applyMatrix4(matrix);
			this.radius = this.radius * matrix.getMaxScaleOnAxis();
			return this;
		}

		translate(offset) {
			this.center.add(offset);
			return this;
		}

		expandByPoint(point) {
			// from https://github.com/juj/MathGeoLib/blob/2940b99b99cfe575dd45103ef20f4019dee15b54/src/Geometry/Sphere.cpp#L649-L671
			_toPoint.subVectors(point, this.center);

			const lengthSq = _toPoint.lengthSq();

			if (lengthSq > this.radius * this.radius) {
				const length = Math.sqrt(lengthSq);
				const missingRadiusHalf = (length - this.radius) * 0.5; // Nudge this sphere towards the target point. Add half the missing distance to radius,
				// and the other half to position. This gives a tighter enclosure, instead of if
				// the whole missing distance were just added to radius.

				this.center.add(_toPoint.multiplyScalar(missingRadiusHalf / length));
				this.radius += missingRadiusHalf;
			}

			return this;
		}

		union(sphere) {
			// from https://github.com/juj/MathGeoLib/blob/2940b99b99cfe575dd45103ef20f4019dee15b54/src/Geometry/Sphere.cpp#L759-L769
			// To enclose another sphere into this sphere, we only need to enclose two points:
			// 1) Enclose the farthest point on the other sphere into this sphere.
			// 2) Enclose the opposite point of the farthest point into this sphere.
			_toFarthestPoint.subVectors(sphere.center, this.center).normalize().multiplyScalar(sphere.radius);

			this.expandByPoint(_v1$6.copy(sphere.center).add(_toFarthestPoint));
			this.expandByPoint(_v1$6.copy(sphere.center).sub(_toFarthestPoint));
			return this;
		}

		equals(sphere) {
			return sphere.center.equals(this.center) && sphere.radius === this.radius;
		}

		clone() {
			return new this.constructor().copy(this);
		}

	}

	const _vector$a = /*@__PURE__*/new Vector3();

	const _segCenter = /*@__PURE__*/new Vector3();

	const _segDir = /*@__PURE__*/new Vector3();

	const _diff = /*@__PURE__*/new Vector3();

	const _edge1 = /*@__PURE__*/new Vector3();

	const _edge2 = /*@__PURE__*/new Vector3();

	const _normal$1 = /*@__PURE__*/new Vector3();

	class Ray {
		constructor(origin = new Vector3(), direction = new Vector3(0, 0, -1)) {
			this.origin = origin;
			this.direction = direction;
		}

		set(origin, direction) {
			this.origin.copy(origin);
			this.direction.copy(direction);
			return this;
		}

		copy(ray) {
			this.origin.copy(ray.origin);
			this.direction.copy(ray.direction);
			return this;
		}

		at(t, target) {
			return target.copy(this.direction).multiplyScalar(t).add(this.origin);
		}

		lookAt(v) {
			this.direction.copy(v).sub(this.origin).normalize();
			return this;
		}

		recast(t) {
			this.origin.copy(this.at(t, _vector$a));
			return this;
		}

		closestPointToPoint(point, target) {
			target.subVectors(point, this.origin);
			const directionDistance = target.dot(this.direction);

			if (directionDistance < 0) {
				return target.copy(this.origin);
			}

			return target.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);
		}

		distanceToPoint(point) {
			return Math.sqrt(this.distanceSqToPoint(point));
		}

		distanceSqToPoint(point) {
			const directionDistance = _vector$a.subVectors(point, this.origin).dot(this.direction); // point behind the ray


			if (directionDistance < 0) {
				return this.origin.distanceToSquared(point);
			}

			_vector$a.copy(this.direction).multiplyScalar(directionDistance).add(this.origin);

			return _vector$a.distanceToSquared(point);
		}

		distanceSqToSegment(v0, v1, optionalPointOnRay, optionalPointOnSegment) {
			// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteDistRaySegment.h
			// It returns the min distance between the ray and the segment
			// defined by v0 and v1
			// It can also set two optional targets :
			// - The closest point on the ray
			// - The closest point on the segment
			_segCenter.copy(v0).add(v1).multiplyScalar(0.5);

			_segDir.copy(v1).sub(v0).normalize();

			_diff.copy(this.origin).sub(_segCenter);

			const segExtent = v0.distanceTo(v1) * 0.5;
			const a01 = -this.direction.dot(_segDir);

			const b0 = _diff.dot(this.direction);

			const b1 = -_diff.dot(_segDir);

			const c = _diff.lengthSq();

			const det = Math.abs(1 - a01 * a01);
			let s0, s1, sqrDist, extDet;

			if (det > 0) {
				// The ray and segment are not parallel.
				s0 = a01 * b1 - b0;
				s1 = a01 * b0 - b1;
				extDet = segExtent * det;

				if (s0 >= 0) {
					if (s1 >= -extDet) {
						if (s1 <= extDet) {
							// region 0
							// Minimum at interior points of ray and segment.
							const invDet = 1 / det;
							s0 *= invDet;
							s1 *= invDet;
							sqrDist = s0 * (s0 + a01 * s1 + 2 * b0) + s1 * (a01 * s0 + s1 + 2 * b1) + c;
						} else {
							// region 1
							s1 = segExtent;
							s0 = Math.max(0, -(a01 * s1 + b0));
							sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
						}
					} else {
						// region 5
						s1 = -segExtent;
						s0 = Math.max(0, -(a01 * s1 + b0));
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					}
				} else {
					if (s1 <= -extDet) {
						// region 4
						s0 = Math.max(0, -(-a01 * segExtent + b0));
						s1 = s0 > 0 ? -segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					} else if (s1 <= extDet) {
						// region 3
						s0 = 0;
						s1 = Math.min(Math.max(-segExtent, -b1), segExtent);
						sqrDist = s1 * (s1 + 2 * b1) + c;
					} else {
						// region 2
						s0 = Math.max(0, -(a01 * segExtent + b0));
						s1 = s0 > 0 ? segExtent : Math.min(Math.max(-segExtent, -b1), segExtent);
						sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
					}
				}
			} else {
				// Ray and segment are parallel.
				s1 = a01 > 0 ? -segExtent : segExtent;
				s0 = Math.max(0, -(a01 * s1 + b0));
				sqrDist = -s0 * s0 + s1 * (s1 + 2 * b1) + c;
			}

			if (optionalPointOnRay) {
				optionalPointOnRay.copy(this.direction).multiplyScalar(s0).add(this.origin);
			}

			if (optionalPointOnSegment) {
				optionalPointOnSegment.copy(_segDir).multiplyScalar(s1).add(_segCenter);
			}

			return sqrDist;
		}

		intersectSphere(sphere, target) {
			_vector$a.subVectors(sphere.center, this.origin);

			const tca = _vector$a.dot(this.direction);

			const d2 = _vector$a.dot(_vector$a) - tca * tca;
			const radius2 = sphere.radius * sphere.radius;
			if (d2 > radius2) return null;
			const thc = Math.sqrt(radius2 - d2); // t0 = first intersect point - entrance on front of sphere

			const t0 = tca - thc; // t1 = second intersect point - exit point on back of sphere

			const t1 = tca + thc; // test to see if both t0 and t1 are behind the ray - if so, return null

			if (t0 < 0 && t1 < 0) return null; // test to see if t0 is behind the ray:
			// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
			// in order to always return an intersect point that is in front of the ray.

			if (t0 < 0) return this.at(t1, target); // else t0 is in front of the ray, so return the first collision point scaled by t0

			return this.at(t0, target);
		}

		intersectsSphere(sphere) {
			return this.distanceSqToPoint(sphere.center) <= sphere.radius * sphere.radius;
		}

		distanceToPlane(plane) {
			const denominator = plane.normal.dot(this.direction);

			if (denominator === 0) {
				// line is coplanar, return origin
				if (plane.distanceToPoint(this.origin) === 0) {
					return 0;
				} // Null is preferable to undefined since undefined means.... it is undefined


				return null;
			}

			const t = -(this.origin.dot(plane.normal) + plane.constant) / denominator; // Return if the ray never intersects the plane

			return t >= 0 ? t : null;
		}

		intersectPlane(plane, target) {
			const t = this.distanceToPlane(plane);

			if (t === null) {
				return null;
			}

			return this.at(t, target);
		}

		intersectsPlane(plane) {
			// check if the ray lies on the plane first
			const distToPoint = plane.distanceToPoint(this.origin);

			if (distToPoint === 0) {
				return true;
			}

			const denominator = plane.normal.dot(this.direction);

			if (denominator * distToPoint < 0) {
				return true;
			} // ray origin is behind the plane (and is pointing behind it)


			return false;
		}

		intersectBox(box, target) {
			let tmin, tmax, tymin, tymax, tzmin, tzmax;
			const invdirx = 1 / this.direction.x,
						invdiry = 1 / this.direction.y,
						invdirz = 1 / this.direction.z;
			const origin = this.origin;

			if (invdirx >= 0) {
				tmin = (box.min.x - origin.x) * invdirx;
				tmax = (box.max.x - origin.x) * invdirx;
			} else {
				tmin = (box.max.x - origin.x) * invdirx;
				tmax = (box.min.x - origin.x) * invdirx;
			}

			if (invdiry >= 0) {
				tymin = (box.min.y - origin.y) * invdiry;
				tymax = (box.max.y - origin.y) * invdiry;
			} else {
				tymin = (box.max.y - origin.y) * invdiry;
				tymax = (box.min.y - origin.y) * invdiry;
			}

			if (tmin > tymax || tymin > tmax) return null; // These lines also handle the case where tmin or tmax is NaN
			// (result of 0 * Infinity). x !== x returns true if x is NaN

			if (tymin > tmin || tmin !== tmin) tmin = tymin;
			if (tymax < tmax || tmax !== tmax) tmax = tymax;

			if (invdirz >= 0) {
				tzmin = (box.min.z - origin.z) * invdirz;
				tzmax = (box.max.z - origin.z) * invdirz;
			} else {
				tzmin = (box.max.z - origin.z) * invdirz;
				tzmax = (box.min.z - origin.z) * invdirz;
			}

			if (tmin > tzmax || tzmin > tmax) return null;
			if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
			if (tzmax < tmax || tmax !== tmax) tmax = tzmax; //return point closest to the ray (positive side)

			if (tmax < 0) return null;
			return this.at(tmin >= 0 ? tmin : tmax, target);
		}

		intersectsBox(box) {
			return this.intersectBox(box, _vector$a) !== null;
		}

		intersectTriangle(a, b, c, backfaceCulling, target) {
			// Compute the offset origin, edges, and normal.
			// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
			_edge1.subVectors(b, a);

			_edge2.subVectors(c, a);

			_normal$1.crossVectors(_edge1, _edge2); // Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
			// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
			//	 |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
			//	 |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
			//	 |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)


			let DdN = this.direction.dot(_normal$1);
			let sign;

			if (DdN > 0) {
				if (backfaceCulling) return null;
				sign = 1;
			} else if (DdN < 0) {
				sign = -1;
				DdN = -DdN;
			} else {
				return null;
			}

			_diff.subVectors(this.origin, a);

			const DdQxE2 = sign * this.direction.dot(_edge2.crossVectors(_diff, _edge2)); // b1 < 0, no intersection

			if (DdQxE2 < 0) {
				return null;
			}

			const DdE1xQ = sign * this.direction.dot(_edge1.cross(_diff)); // b2 < 0, no intersection

			if (DdE1xQ < 0) {
				return null;
			} // b1+b2 > 1, no intersection


			if (DdQxE2 + DdE1xQ > DdN) {
				return null;
			} // Line intersects triangle, check if ray does.


			const QdN = -sign * _diff.dot(_normal$1); // t < 0, no intersection


			if (QdN < 0) {
				return null;
			} // Ray intersects triangle.


			return this.at(QdN / DdN, target);
		}

		applyMatrix4(matrix4) {
			this.origin.applyMatrix4(matrix4);
			this.direction.transformDirection(matrix4);
			return this;
		}

		equals(ray) {
			return ray.origin.equals(this.origin) && ray.direction.equals(this.direction);
		}

		clone() {
			return new this.constructor().copy(this);
		}

	}

	class Matrix4 {
		constructor() {
			this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

			if (arguments.length > 0) {
				console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.');
			}
		}

		set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
			const te = this.elements;
			te[0] = n11;
			te[4] = n12;
			te[8] = n13;
			te[12] = n14;
			te[1] = n21;
			te[5] = n22;
			te[9] = n23;
			te[13] = n24;
			te[2] = n31;
			te[6] = n32;
			te[10] = n33;
			te[14] = n34;
			te[3] = n41;
			te[7] = n42;
			te[11] = n43;
			te[15] = n44;
			return this;
		}

		identity() {
			this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			return this;
		}

		clone() {
			return new Matrix4().fromArray(this.elements);
		}

		copy(m) {
			const te = this.elements;
			const me = m.elements;
			te[0] = me[0];
			te[1] = me[1];
			te[2] = me[2];
			te[3] = me[3];
			te[4] = me[4];
			te[5] = me[5];
			te[6] = me[6];
			te[7] = me[7];
			te[8] = me[8];
			te[9] = me[9];
			te[10] = me[10];
			te[11] = me[11];
			te[12] = me[12];
			te[13] = me[13];
			te[14] = me[14];
			te[15] = me[15];
			return this;
		}

		copyPosition(m) {
			const te = this.elements,
						me = m.elements;
			te[12] = me[12];
			te[13] = me[13];
			te[14] = me[14];
			return this;
		}

		setFromMatrix3(m) {
			const me = m.elements;
			this.set(me[0], me[3], me[6], 0, me[1], me[4], me[7], 0, me[2], me[5], me[8], 0, 0, 0, 0, 1);
			return this;
		}

		extractBasis(xAxis, yAxis, zAxis) {
			xAxis.setFromMatrixColumn(this, 0);
			yAxis.setFromMatrixColumn(this, 1);
			zAxis.setFromMatrixColumn(this, 2);
			return this;
		}

		makeBasis(xAxis, yAxis, zAxis) {
			this.set(xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z, 0, 0, 0, 0, 1);
			return this;
		}

		extractRotation(m) {
			// this method does not support reflection matrices
			const te = this.elements;
			const me = m.elements;

			const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();

			const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();

			const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();

			te[0] = me[0] * scaleX;
			te[1] = me[1] * scaleX;
			te[2] = me[2] * scaleX;
			te[3] = 0;
			te[4] = me[4] * scaleY;
			te[5] = me[5] * scaleY;
			te[6] = me[6] * scaleY;
			te[7] = 0;
			te[8] = me[8] * scaleZ;
			te[9] = me[9] * scaleZ;
			te[10] = me[10] * scaleZ;
			te[11] = 0;
			te[12] = 0;
			te[13] = 0;
			te[14] = 0;
			te[15] = 1;
			return this;
		}

		makeRotationFromEuler(euler) {
			if (!(euler && euler.isEuler)) {
				console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.');
			}

			const te = this.elements;
			const x = euler.x,
						y = euler.y,
						z = euler.z;
			const a = Math.cos(x),
						b = Math.sin(x);
			const c = Math.cos(y),
						d = Math.sin(y);
			const e = Math.cos(z),
						f = Math.sin(z);

			if (euler.order === 'XYZ') {
				const ae = a * e,
							af = a * f,
							be = b * e,
							bf = b * f;
				te[0] = c * e;
				te[4] = -c * f;
				te[8] = d;
				te[1] = af + be * d;
				te[5] = ae - bf * d;
				te[9] = -b * c;
				te[2] = bf - ae * d;
				te[6] = be + af * d;
				te[10] = a * c;
			} else if (euler.order === 'YXZ') {
				const ce = c * e,
							cf = c * f,
							de = d * e,
							df = d * f;
				te[0] = ce + df * b;
				te[4] = de * b - cf;
				te[8] = a * d;
				te[1] = a * f;
				te[5] = a * e;
				te[9] = -b;
				te[2] = cf * b - de;
				te[6] = df + ce * b;
				te[10] = a * c;
			} else if (euler.order === 'ZXY') {
				const ce = c * e,
							cf = c * f,
							de = d * e,
							df = d * f;
				te[0] = ce - df * b;
				te[4] = -a * f;
				te[8] = de + cf * b;
				te[1] = cf + de * b;
				te[5] = a * e;
				te[9] = df - ce * b;
				te[2] = -a * d;
				te[6] = b;
				te[10] = a * c;
			} else if (euler.order === 'ZYX') {
				const ae = a * e,
							af = a * f,
							be = b * e,
							bf = b * f;
				te[0] = c * e;
				te[4] = be * d - af;
				te[8] = ae * d + bf;
				te[1] = c * f;
				te[5] = bf * d + ae;
				te[9] = af * d - be;
				te[2] = -d;
				te[6] = b * c;
				te[10] = a * c;
			} else if (euler.order === 'YZX') {
				const ac = a * c,
							ad = a * d,
							bc = b * c,
							bd = b * d;
				te[0] = c * e;
				te[4] = bd - ac * f;
				te[8] = bc * f + ad;
				te[1] = f;
				te[5] = a * e;
				te[9] = -b * e;
				te[2] = -d * e;
				te[6] = ad * f + bc;
				te[10] = ac - bd * f;
			} else if (euler.order === 'XZY') {
				const ac = a * c,
							ad = a * d,
							bc = b * c,
							bd = b * d;
				te[0] = c * e;
				te[4] = -f;
				te[8] = d * e;
				te[1] = ac * f + bd;
				te[5] = a * e;
				te[9] = ad * f - bc;
				te[2] = bc * f - ad;
				te[6] = b * e;
				te[10] = bd * f + ac;
			} // bottom row


			te[3] = 0;
			te[7] = 0;
			te[11] = 0; // last column

			te[12] = 0;
			te[13] = 0;
			te[14] = 0;
			te[15] = 1;
			return this;
		}

		makeRotationFromQuaternion(q) {
			return this.compose(_zero, q, _one);
		}

		lookAt(eye, target, up) {
			const te = this.elements;

			_z.subVectors(eye, target);

			if (_z.lengthSq() === 0) {
				// eye and target are in the same position
				_z.z = 1;
			}

			_z.normalize();

			_x.crossVectors(up, _z);

			if (_x.lengthSq() === 0) {
				// up and z are parallel
				if (Math.abs(up.z) === 1) {
					_z.x += 0.0001;
				} else {
					_z.z += 0.0001;
				}

				_z.normalize();

				_x.crossVectors(up, _z);
			}

			_x.normalize();

			_y.crossVectors(_z, _x);

			te[0] = _x.x;
			te[4] = _y.x;
			te[8] = _z.x;
			te[1] = _x.y;
			te[5] = _y.y;
			te[9] = _z.y;
			te[2] = _x.z;
			te[6] = _y.z;
			te[10] = _z.z;
			return this;
		}

		multiply(m, n) {
			if (n !== undefined) {
				console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.');
				return this.multiplyMatrices(m, n);
			}

			return this.multiplyMatrices(this, m);
		}

		premultiply(m) {
			return this.multiplyMatrices(m, this);
		}

		multiplyMatrices(a, b) {
			const ae = a.elements;
			const be = b.elements;
			const te = this.elements;
			const a11 = ae[0],
						a12 = ae[4],
						a13 = ae[8],
						a14 = ae[12];
			const a21 = ae[1],
						a22 = ae[5],
						a23 = ae[9],
						a24 = ae[13];
			const a31 = ae[2],
						a32 = ae[6],
						a33 = ae[10],
						a34 = ae[14];
			const a41 = ae[3],
						a42 = ae[7],
						a43 = ae[11],
						a44 = ae[15];
			const b11 = be[0],
						b12 = be[4],
						b13 = be[8],
						b14 = be[12];
			const b21 = be[1],
						b22 = be[5],
						b23 = be[9],
						b24 = be[13];
			const b31 = be[2],
						b32 = be[6],
						b33 = be[10],
						b34 = be[14];
			const b41 = be[3],
						b42 = be[7],
						b43 = be[11],
						b44 = be[15];
			te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
			te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
			te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
			te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
			te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
			te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
			te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
			te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
			te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
			te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
			te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
			te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
			te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
			te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
			te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
			te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
			return this;
		}

		multiplyScalar(s) {
			const te = this.elements;
			te[0] *= s;
			te[4] *= s;
			te[8] *= s;
			te[12] *= s;
			te[1] *= s;
			te[5] *= s;
			te[9] *= s;
			te[13] *= s;
			te[2] *= s;
			te[6] *= s;
			te[10] *= s;
			te[14] *= s;
			te[3] *= s;
			te[7] *= s;
			te[11] *= s;
			te[15] *= s;
			return this;
		}

		determinant() {
			const te = this.elements;
			const n11 = te[0],
						n12 = te[4],
						n13 = te[8],
						n14 = te[12];
			const n21 = te[1],
						n22 = te[5],
						n23 = te[9],
						n24 = te[13];
			const n31 = te[2],
						n32 = te[6],
						n33 = te[10],
						n34 = te[14];
			const n41 = te[3],
						n42 = te[7],
						n43 = te[11],
						n44 = te[15]; //TODO: make this more efficient
			//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

			return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
		}

		transpose() {
			const te = this.elements;
			let tmp;
			tmp = te[1];
			te[1] = te[4];
			te[4] = tmp;
			tmp = te[2];
			te[2] = te[8];
			te[8] = tmp;
			tmp = te[6];
			te[6] = te[9];
			te[9] = tmp;
			tmp = te[3];
			te[3] = te[12];
			te[12] = tmp;
			tmp = te[7];
			te[7] = te[13];
			te[13] = tmp;
			tmp = te[11];
			te[11] = te[14];
			te[14] = tmp;
			return this;
		}

		setPosition(x, y, z) {
			const te = this.elements;

			if (x.isVector3) {
				te[12] = x.x;
				te[13] = x.y;
				te[14] = x.z;
			} else {
				te[12] = x;
				te[13] = y;
				te[14] = z;
			}

			return this;
		}

		invert() {
			// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
			const te = this.elements,
						n11 = te[0],
						n21 = te[1],
						n31 = te[2],
						n41 = te[3],
						n12 = te[4],
						n22 = te[5],
						n32 = te[6],
						n42 = te[7],
						n13 = te[8],
						n23 = te[9],
						n33 = te[10],
						n43 = te[11],
						n14 = te[12],
						n24 = te[13],
						n34 = te[14],
						n44 = te[15],
						t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
						t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
						t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
						t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
			const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
			if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const detInv = 1 / det;
			te[0] = t11 * detInv;
			te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
			te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
			te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
			te[4] = t12 * detInv;
			te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
			te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
			te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
			te[8] = t13 * detInv;
			te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
			te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
			te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
			te[12] = t14 * detInv;
			te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
			te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
			te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
			return this;
		}

		scale(v) {
			const te = this.elements;
			const x = v.x,
						y = v.y,
						z = v.z;
			te[0] *= x;
			te[4] *= y;
			te[8] *= z;
			te[1] *= x;
			te[5] *= y;
			te[9] *= z;
			te[2] *= x;
			te[6] *= y;
			te[10] *= z;
			te[3] *= x;
			te[7] *= y;
			te[11] *= z;
			return this;
		}

		getMaxScaleOnAxis() {
			const te = this.elements;
			const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
			const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
			const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
			return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
		}

		makeTranslation(x, y, z) {
			this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
			return this;
		}

		makeRotationX(theta) {
			const c = Math.cos(theta),

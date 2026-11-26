var InverlochModel=function(wn){"use strict";var bx=Object.defineProperty;var wx=(wn,On,Qn)=>On in wn?bx(wn,On,{enumerable:!0,configurable:!0,writable:!0,value:Qn}):wn[On]=Qn;var ot=(wn,On,Qn)=>wx(wn,typeof On!="symbol"?On+"":On,Qn);const On='.inv-label{position:absolute;left:0;top:0;pointer-events:auto;font:600 12px/1 Space Grotesk,system-ui,sans-serif;padding:6px 10px;border-radius:999px;background:#0c1c24e6;color:#fff;border:1px solid rgba(255,255,255,.2);white-space:nowrap;cursor:pointer;will-change:transform}.inv-label:after{content:"";position:absolute;left:50%;bottom:-8px;width:1px;height:8px;background:#ffffffbf}.inv-label:hover{background:#0b7d9c}.inv-label--nature{background:#183826eb}.inv-label--nature:hover{background:#2c7a4b}.inv-label--water{background:none;border-color:transparent;color:#f1fbff;font-style:italic;font-weight:500;font-size:13px;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,35,60,.95),0 0 8px rgba(0,35,60,.7)}.inv-label--water:after{display:none}.inv-label--water:hover{background:#0c1c2499}.inv-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.inv-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#d8c79a,#58c7bb 45%,#1b6f9a)}.inv-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.inv-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}';/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qn="187",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lu=0,pl=1,cu=2,cs=1,hu=2,hs=3,ti=0,Xe=1,Be=2,Pi=0,us=1,na=2,ml=3,gl=4,uu=5,Di=100,fu=101,du=102,pu=103,mu=104,gu=200,_u=201,xu=202,vu=203,_l=204,xl=205,Mu=206,Su=207,yu=208,Eu=209,bu=210,wu=211,Tu=212,Au=213,Ru=214,ia=0,sa=1,ra=2,fs=3,aa=4,oa=5,la=6,ca=7,ha=0,Cu=1,Pu=2,Bn=0,vl=1,Ml=2,Sl=3,yl=4,El=5,bl=6,ua=7,wl=300,Li=301,ds=302,fa=303,da=304,Vs=1e3,dn=1001,pa=1002,Ue=1003,Du=1004,Ws=1005,qe=1006,ma=1007,Tn=1008,Je=1009,Tl=1010,Al=1011,ps=1012,ga=1013,An=1014,pn=1015,mn=1016,_a=1017,xa=1018,Ii=1020,Rl=35902,Cl=35899,Pl=1021,Dl=1022,Rn=1023,ei=1026,ni=1027,va=1028,Ma=1029,ii=1030,Sa=1031,ya=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,Ea=35840,ba=35841,wa=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,Pa=37488,Da=37489,Ks=37490,La=37491,Ia=37808,Na=37809,Ua=37810,Fa=37811,Oa=37812,za=37813,Ba=37814,ka=37815,Ga=37816,Ha=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,Ya=36492,Za=36494,Ka=36495,$a=36283,Ja=36284,$s=36285,Qa=36286,Lu=3200,Js=0,Iu=1,si="",ye="srgb",Qs="srgb-linear",js="linear",se="srgb",ja=7680,Nu=519,Uu=512,Fu=513,Ou=514,Ll=515,zu=516,Bu=517,Il=518,Nl=519,ku=35044,tr=35048,Ul="300 es",gn=2e3,ms=2001;function Gu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){const i=gs("canvas");return i.style.display="block",i}const Fl={};function Ol(...i){const t="THREE."+i.shift();console.log(t,...i)}function zl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=zl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=zl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function er(...i){const t=i.join(" ");t in Fl||(Fl[t]=!0,Nt(...i))}function Vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Wu={[ia]:ia,[ra]:la,[aa]:aa,[fs]:oa,[sa]:sa,[la]:ra,[ca]:ca,[oa]:fs};class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const _s=Math.PI/180,xs=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function to(i,t){return(i%t+t)%t}function Xu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qu(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function Yu(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function Zu(i,t=1){return t-Math.abs(to(i,t*2)-t)}function Ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ju(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qu(i,t){return i+Math.random()*(t-i)}function ju(i){return i*(.5-Math.random())}function tf(i){i!==void 0&&(Bl=i);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ef(i){return i*_s}function nf(i){return i*xs}function sf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function af(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*u,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gl(i,t){if(t.constructor===Float32Array)return i;const e=eo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Hl(i,t){if(t.constructor===Float32Array)return i;const e=eo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const le={DEG2RAD:_s,RAD2DEG:xs,generateUUID:Ni,clamp:Wt,euclideanModulo:to,mapLinear:Xu,inverseLerp:qu,lerp:vs,damp:Yu,pingpong:Zu,smoothstep:Ku,smootherstep:$u,randInt:Ju,randFloat:Qu,randFloatSpread:ju,seededRandom:tf,degToRad:ef,radToDeg:nf,isPowerOfTwo:sf,ceilPowerOfTwo:rf,floorPowerOfTwo:kl,setQuaternionFromProperEuler:af,normalize:Hl,denormalize:Gl},ol=class ol{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ol.prototype.isVector2=!0;let Lt=ol;class _n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],m=r[a+2],x=r[a+3];if(f!==x||l!==d||c!==u||h!==m){let p=l*d+c*u+h*m+f*x;p<0&&(d=-d,u=-u,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){const S=Math.acos(p),v=Math.sin(S);g=Math.sin(g*S)/v,o=Math.sin(o*S)/v,l=l*g+d*o,c=c*g+u*o,h=h*g+m*o,f=f*g+x*o}else{l=l*g+d*o,c=c*g+u*o,h=h*g+m*o,f=f*g+x*o;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*f+l*u-c*d,t[e+1]=l*m+h*d+c*f-o*u,t[e+2]=c*m+h*u+o*d-l*f,t[e+3]=h*m-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f+d*u*m;break;case"YZX":this._x=d*h*f+c*u*m,this._y=c*u*f+d*h*m,this._z=c*h*m-d*u*f,this._w=c*h*f-d*u*m;break;case"XZY":this._x=d*h*f-c*u*m,this._y=c*u*f-d*h*m,this._z=c*h*m+d*u*f,this._w=c*h*f+d*u*m;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ll=class ll{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ll.prototype.isVector3=!0;let W=ll;const no=new W,Vl=new _n,cl=class cl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],x=s[0],p=s[3],g=s[6],S=s[1],v=s[4],M=s[7],b=s[2],E=s[5],_=s[8];return r[0]=a*x+o*S+l*b,r[3]=a*p+o*v+l*E,r[6]=a*g+o*M+l*_,r[1]=c*x+h*S+f*b,r[4]=c*p+h*v+f*E,r[7]=c*g+h*M+f*_,r[2]=d*x+u*S+m*b,r[5]=d*p+u*v+m*E,r[8]=d*g+u*M+m*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,m=e*f+n*d+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(io.makeScale(t,e)),this}rotate(t){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(io.makeRotation(-t)),this}translate(t,e){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cl.prototype.isMatrix3=!0;let Ft=cl;const io=new Ft,Wl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){const i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===se&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:t,whitePoint:n,transfer:js,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const Zt=of();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class lf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=gs("canvas")),Fi.width=t.width,Fi.height=t.height;const s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cf=0;class so{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ro(s[a].image)):r.push(ro(s[a]))}else r=ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let hf=0;const ao=new W;class Ee extends ri{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=dn,s=dn,r=qe,a=Tn,o=Rn,l=Je,c=Ee.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Ni(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null,Ee.DEFAULT_MAPPING=wl,Ee.DEFAULT_ANISOTROPY=1;const hl=class hl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(u+1)/2,b=(g+1)/2,E=(h+d)/4,_=(f+x)/4,y=(m+p)/4;return v>M&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=_/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=_/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-m)/S,this.y=(f-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hl.prototype.isVector4=!0;let ue=hl;class uf extends ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ee({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new so(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ql extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const jr=class jr{constructor(t,e,n,s,r,a,o,l,c,h,f,d,u,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,u,m,x,p)}set(t,e,n,s,r,a,o,l,c,h,f,d,u,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,u=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+m*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,u=l*f,m=c*h,x=c*f;e[0]=d+x*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,u=l*f,m=c*h,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,u=a*f,m=o*h,x=o*f;e[0]=l*h,e[4]=m*c-u,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,u=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=x-d*f,e[8]=m*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+m,e[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,u=a*c,m=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=a*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=o*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,pf)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ai.crossVectors(n,Qe),ai.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ai.crossVectors(n,Qe)),ai.normalize(),nr.crossVectors(Qe,ai),s[0]=ai.x,s[4]=nr.x,s[8]=Qe.x,s[1]=ai.y,s[5]=nr.y,s[9]=Qe.y,s[2]=ai.z,s[6]=nr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],x=n[6],p=n[10],g=n[14],S=n[3],v=n[7],M=n[11],b=n[15],E=s[0],_=s[4],y=s[8],T=s[12],w=s[1],C=s[5],D=s[9],z=s[13],P=s[2],B=s[6],O=s[10],U=s[14],Y=s[3],F=s[7],L=s[11],N=s[15];return r[0]=a*E+o*w+l*P+c*Y,r[4]=a*_+o*C+l*B+c*F,r[8]=a*y+o*D+l*O+c*L,r[12]=a*T+o*z+l*U+c*N,r[1]=h*E+f*w+d*P+u*Y,r[5]=h*_+f*C+d*B+u*F,r[9]=h*y+f*D+d*O+u*L,r[13]=h*T+f*z+d*U+u*N,r[2]=m*E+x*w+p*P+g*Y,r[6]=m*_+x*C+p*B+g*F,r[10]=m*y+x*D+p*O+g*L,r[14]=m*T+x*z+p*U+g*N,r[3]=S*E+v*w+M*P+b*Y,r[7]=S*_+v*C+M*B+b*F,r[11]=S*y+v*D+M*O+b*L,r[15]=S*T+v*z+M*U+b*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],m=t[3],x=t[7],p=t[11],g=t[15],S=l*u-c*d,v=o*u-c*f,M=o*d-l*f,b=a*u-c*h,E=a*d-l*h,_=a*f-o*h;return e*(x*S-p*v+g*M)-n*(m*S-p*b+g*E)+s*(m*v-x*b+g*_)-r*(m*M-x*E+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],m=t[12],x=t[13],p=t[14],g=t[15],S=e*o-n*a,v=e*l-s*a,M=e*c-r*a,b=n*l-s*o,E=n*c-r*o,_=s*c-r*l,y=h*x-f*m,T=h*p-d*m,w=h*g-u*m,C=f*p-d*x,D=f*g-u*x,z=d*g-u*p,P=S*z-v*D+M*C+b*w-E*T+_*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/P;return t[0]=(o*z-l*D+c*C)*B,t[1]=(s*D-n*z-r*C)*B,t[2]=(x*_-p*E+g*b)*B,t[3]=(d*E-f*_-u*b)*B,t[4]=(l*w-a*z-c*T)*B,t[5]=(e*z-s*w+r*T)*B,t[6]=(p*M-m*_-g*v)*B,t[7]=(h*_-d*M+u*v)*B,t[8]=(a*D-o*w+c*y)*B,t[9]=(n*w-e*D-r*y)*B,t[10]=(m*E-x*M+g*S)*B,t[11]=(f*M-h*E-u*S)*B,t[12]=(o*T-a*C-l*y)*B,t[13]=(e*C-n*T+s*y)*B,t[14]=(x*v-m*b-p*S)*B,t[15]=(h*b-f*v+d*S)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,m=r*f,x=a*h,p=a*f,g=o*f,S=l*c,v=l*h,M=l*f,b=n.x,E=n.y,_=n.z;return s[0]=(1-(x+g))*b,s[1]=(u+M)*b,s[2]=(m-v)*b,s[3]=0,s[4]=(u-M)*E,s[5]=(1-(d+g))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(m+v)*_,s[9]=(p-S)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),l=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);const c=1/a,h=1/o,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=gn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===gn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ms)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=gn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===gn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ms)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};jr.prototype.isMatrix4=!0;let Qt=jr;const Oi=new W,xn=new Qt,df=new W(0,0,0),pf=new W(1,1,1),ai=new W,nr=new W,Qe=new W,Yl=new Qt,Zl=new _n;class vn{constructor(t=0,e=0,n=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class oo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mf=0;const Kl=new W,zi=new _n,Gn=new Qt,ir=new W,Ms=new W,gf=new W,_f=new _n,$l=new W(1,0,0),Jl=new W(0,1,0),Ql=new W(0,0,1),jl={type:"added"},xf={type:"removed"},Bi={type:"childadded",child:null},lo={type:"childremoved",child:null};class Pe extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new W,e=new vn,n=new _n,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ft}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ms,ir,this.up):Gn.lookAt(ir,Ms,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Gn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xf),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pe.DEFAULT_UP=new W(0,1,0),Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class je extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&d>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},sr={h:0,s:0,l:0};function ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=to(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+.3333333333333333),this.g=ho(a,r,t),this.b=ho(a,r,t-.3333333333333333)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Zt.workingToColorSpace(Ge.copy(this),t),Math.round(Wt(Ge.r*255,0,255))*65536+Math.round(Wt(Ge.g*255,0,255))*256+Math.round(Wt(Ge.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ye){Zt.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(sr);const n=vs(oi.h,sr.h,e),s=vs(oi.s,sr.s,e),r=vs(oi.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Rt;Rt.NAMES=tc;class Mf extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mn=new W,Hn=new W,uo=new W,Vn=new W,ki=new W,Gi=new W,ec=new W,fo=new W,po=new W,mo=new W,go=new ue,_o=new ue,xo=new ue;class Sn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Hn.subVectors(n,e),uo.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Hn),l=Mn.dot(uo),c=Hn.dot(Hn),h=Hn.dot(uo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return go.setScalar(0),_o.setScalar(0),xo.setScalar(0),go.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(go,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Hn.subVectors(t,e),Mn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Mn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),Gi.subVectors(r,n),fo.subVectors(t,n);const l=ki.dot(fo),c=Gi.dot(fo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,s);const h=ki.dot(po),f=Gi.dot(po);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(ki,a);mo.subVectors(t,r);const u=ki.dot(mo),m=Gi.dot(mo);if(m>=0&&u<=m)return e.copy(r);const x=u*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Gi,o);const p=h*m-u*f;if(p<=0&&f-h>=0&&u-m>=0)return ec.subVectors(r,s),o=(f-h)/(f-h+(u-m)),e.copy(s).addScaledVector(ec,o);const g=1/(p+x+d);return a=x*g,o=d*g,e.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class li{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),ar.subVectors(this.max,Ss),Hi.subVectors(t.a,Ss),Vi.subVectors(t.b,Ss),Wi.subVectors(t.c,Ss),ci.subVectors(Vi,Hi),hi.subVectors(Wi,Vi),xi.subVectors(Hi,Wi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-xi.z,xi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,xi.z,0,-xi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-xi.y,xi.x,0];return!vo(e,Hi,Vi,Wi,ar)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Hi,Vi,Wi,ar))?!1:(or.crossVectors(ci,hi),e=[or.x,or.y,or.z],vo(e,Hi,Vi,Wi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new W,new W,new W,new W,new W,new W,new W,new W],yn=new W,rr=new li,Hi=new W,Vi=new W,Wi=new W,ci=new W,hi=new W,xi=new W,Ss=new W,ar=new W,or=new W,vi=new W;function vo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Xn=Sf();function Sf(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function yf(i){Math.abs(i)>65504&&Nt("DataUtils.toHalfFloat(): Value out of range."),i=Wt(i,-65504,65504),Xn.floatView[0]=i;const t=Xn.uint32View[0],e=t>>23&511;return Xn.baseTable[e]+((t&8388607)>>Xn.shiftTable[e])}function Ef(i){const t=i>>10;return Xn.uint32View[0]=Xn.mantissaTable[Xn.offsetTable[t]+(i&1023)]+Xn.exponentTable[t],Xn.floatView[0]}class nc{static toHalfFloat(t){return yf(t)}static fromHalfFloat(t){return Ef(t)}}const ve=new W,lr=new Lt;let bf=0;class be extends ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ku,this.updateRanges=[],this.gpuType=pn,this.version=0,this._normalizationScale=t!==void 0?eo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gl(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Hl(t,this.array)}}class ic extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const wf=new li,ys=new W,Mo=new W;class Mi{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(Mo)),this.expandByPoint(ys.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Tf=0;const sn=new Qt,So=new Pe,Xi=new W,tn=new li,Es=new li,De=new W;class we extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gu(t)?sc:ic)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return So.lookAt(t),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(tn.min,Es.min),tn.expandByPoint(De),De.addVectors(tn.max,Es.max),tn.expandByPoint(De)):(tn.expandByPoint(Es.min),tn.expandByPoint(Es.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),De.add(Xi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)o[T]=new W,l[T]=new W;const h=new W,f=new W,d=new W,u=new Lt,m=new Lt,x=new Lt,p=new W,g=new W;function S(T,w,C){c[T]=c[w]=c[C]=1,h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),f.sub(h),d.sub(h),m.sub(u),x.sub(u);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(D),g.copy(d).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(D),o[T].add(p),o[w].add(p),o[C].add(p),l[T].add(g),l[w].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let T=0,w=v.length;T<w;++T){const C=v[T],D=C.start,z=C.count;for(let P=D,B=D+z;P<B;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new W,b=new W,E=new W,_=new W;function y(T){E.fromBufferAttribute(s,T),_.copy(E);const w=o[T];M.copy(w),M.sub(E.multiplyScalar(E.dot(w))).normalize(),b.crossVectors(_,w);const D=b.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,D)}for(let T=0,w=n.count;T<w;++T)c[T]&&y(T);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,f=new W;if(t)for(let d=0,u=t.count;d<u;d+=3){const m=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let u=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[u++]}return new be(d,h,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new W,Af=new W,Rf=new Ft;class Pn{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(yo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Cf=0;class Si extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=us,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const qn=new W,Eo=new W,cr=new W,hr=new W;class ur{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),hr.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(cr),o=hr.dot(this.direction),l=-hr.dot(cr),c=hr.lengthSq(),h=Math.abs(1-a*a);let f,d,u,m;if(h>0)if(f=a*l-o,d=a*o-l,m=r*h,f>=0)if(d>=-m)if(d<=m){const x=1/h;f*=x,d*=x,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=m?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Eo).addScaledVector(cr,d),u}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,m=e.x-a.x,x=e.y-a.y,p=e.z-a.z,g=n.x-a.x,S=n.y-a.y,v=n.z-a.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let _,y,T,w,C,D,z,P,B,O,U,Y;if(M>=b&&M>=E?(T=l,D=f,B=m,Y=g,l>=0?(_=c,y=h,w=d,C=u,z=x,P=p,O=S,U=v):(_=h,y=c,w=u,C=d,z=p,P=x,O=v,U=S)):b>=E?(T=c,D=d,B=x,Y=S,c>=0?(_=h,y=l,w=u,C=f,z=p,P=m,O=v,U=g):(_=l,y=h,w=f,C=u,z=m,P=p,O=g,U=v)):(T=h,D=u,B=p,Y=v,h>=0?(_=l,y=c,w=f,C=d,z=m,P=x,O=g,U=S):(_=c,y=l,w=d,C=f,z=x,P=m,O=S,U=g)),T===0)return null;const F=_/T,L=y/T,N=1/T,X=w-F*D,Z=C-L*D,V=z-F*B,J=P-L*B,rt=O-F*Y,lt=U-L*Y,it=rt*J-lt*V,yt=X*lt-Z*rt,Ot=V*Z-J*X;if(s){if(it<0||yt<0||Ot<0)return null}else if((it<0||yt<0||Ot<0)&&(it>0||yt>0||Ot>0))return null;const bt=it+yt+Ot;if(bt===0)return null;const kt=N*(it*D+yt*B+Ot*Y);return(bt>0?kt<0:kt>0)?null:this.at(kt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dn extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rc=new Qt,yi=new ur,fr=new Mi,ac=new W,dr=new W,pr=new W,mr=new W,bo=new W,gr=new W,oc=new W,_r=new W;class $t extends Pe{constructor(t=new we,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(bo.fromBufferAttribute(f,t),a?gr.addScaledVector(bo,h):gr.addScaledVector(bo.sub(e),h))}e.add(gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(fr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(fr,ac)===null||yi.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const p=d[m],g=a[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let M=S,b=v;M<b;M+=3){const E=o.getX(M),_=o.getX(M+1),y=o.getX(M+2);s=xr(this,g,t,n,c,h,f,E,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){const S=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);s=xr(this,a,t,n,c,h,f,S,v,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){const p=d[m],g=a[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let M=S,b=v;M<b;M+=3){const E=M,_=M+1,y=M+2;s=xr(this,g,t,n,c,h,f,E,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){const S=p,v=p+1,M=p+2;s=xr(this,a,t,n,c,h,f,S,v,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Pf(i,t,e,n,s,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;_r.copy(o),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function xr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,dr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const h=Pf(i,t,e,n,dr,pr,mr,oc);if(h){const f=new W;Sn.getBarycoord(oc,dr,pr,mr,f),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,f,new Lt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,f,new Lt)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,f,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Sn.getNormal(dr,pr,mr,d.normal),h.face=d,h.barycoord=f}return h}class vr extends Ee{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lc extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new Qt,cc=new Qt,Mr=[],hc=new li,Df=new Qt,bs=new $t,ws=new Mi;class Ke extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Df)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),hc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(hc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),ws.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),cc.multiplyMatrices(n,qi),bs.matrixWorld=cc,bs.raycast(t,Mr);for(let a=0,o=Mr.length;a<o;a++){const l=Mr[a];l.instanceId=r,l.object=this,e.push(l)}Mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,va,pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ei=new Mi,Lf=new Lt(.5,.5),Sr=new W;class Ts{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],m=r[8],x=r[9],p=r[10],g=r[11],S=r[12],v=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,u-h,g-m,b-S).normalize(),s[1].setComponents(c+a,u+h,g+m,b+S).normalize(),s[2].setComponents(c+o,u+f,g+x,b+v).normalize(),s[3].setComponents(c-o,u-f,g-x,b-v).normalize(),n)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,u-d,g-p,b-M).normalize();else if(s[4].setComponents(c-l,u-d,g-p,b-M).normalize(),e===gn)s[5].setComponents(c+l,u+d,g+p,b+M).normalize();else if(e===ms)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=Lf.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const uc=new Qt;class wo{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];uc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ts),n[s].setFromProjectionMatrix(uc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ts),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new wo().copy(this)}}class fc extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yr=new W,Er=new W,dc=new Qt,As=new ur,br=new Mi,To=new W,pc=new W;class If extends Pe{constructor(t=new we,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)yr.fromBufferAttribute(e,s-1),Er.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=yr.distanceTo(Er);t.setAttribute("lineDistance",new fe(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;dc.copy(s).invert(),As.copy(t.ray).applyMatrix4(dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=u,p=m-1;x<p;x+=c){const g=h.getX(x),S=h.getX(x+1),v=wr(this,t,As,l,g,S,x);v&&e.push(v)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(u),g=wr(this,t,As,l,x,p,m-1);g&&e.push(g)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=u,p=m-1;x<p;x+=c){const g=wr(this,t,As,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=wr(this,t,As,l,m-1,u,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(yr.fromBufferAttribute(o,s),Er.fromBufferAttribute(o,r),e.distanceSqToSegment(yr,Er,To,pc)>n)return;To.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(To);if(!(c<t.near||c>t.far))return{distance:c,point:pc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const mc=new W,gc=new W;class Nf extends If{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mc.fromBufferAttribute(e,s),gc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mc.distanceTo(gc);t.setAttribute("lineDistance",new fe(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _c extends Ee{constructor(t=[],e=Li,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ao extends Ee{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi extends Ee{constructor(t,e,n=An,s,r,a,o=Ue,l=Ue,c,h=ei,f=1){if(h!==ei&&h!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new so(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class xc extends Yi{constructor(t,e=An,n=Li,s,r,a=Ue,o=Ue,l,c=ei){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vc extends Ee{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bi extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(f,2));function m(x,p,g,S,v,M,b,E,_,y,T){const w=M/_,C=b/y,D=M/2,z=b/2,P=E/2,B=_+1,O=y+1;let U=0,Y=0;const F=new W;for(let L=0;L<O;L++){const N=L*C-z;for(let X=0;X<B;X++){const Z=X*w-D;F[x]=Z*S,F[p]=N*v,F[g]=P,c.push(F.x,F.y,F.z),F[x]=0,F[p]=0,F[g]=E>0?1:-1,h.push(F.x,F.y,F.z),f.push(X/_),f.push(1-L/y),U+=1}}for(let L=0;L<y;L++)for(let N=0;N<_;N++){const X=d+N+B*L,Z=d+N+B*(L+1),V=d+(N+1)+B*(L+1),J=d+(N+1)+B*L;l.push(X,Z,J),l.push(Z,V,J),Y+=6}o.addGroup(u,Y,T),u+=Y,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ro extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],u=[];let m=0;const x=[],p=n/2;let g=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(u,2));function S(){const M=new W,b=new W;let E=0;const _=(e-t)/n;for(let y=0;y<=r;y++){const T=[],w=y/r,C=w*(e-t)+t;for(let D=0;D<=s;D++){const z=D/s,P=z*l+o,B=Math.sin(P),O=Math.cos(P);b.x=C*B,b.y=-w*n+p,b.z=C*O,f.push(b.x,b.y,b.z),M.set(B,_,O).normalize(),d.push(M.x,M.y,M.z),u.push(z,1-w),T.push(m++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){const w=x[T][y],C=x[T+1][y],D=x[T+1][y+1],z=x[T][y+1];(t>0||T!==0)&&(h.push(w,C,z),E+=3),(e>0||T!==r-1)&&(h.push(C,D,z),E+=3)}c.addGroup(g,E,0),g+=E}function v(M){const b=m,E=new Lt,_=new W;let y=0;const T=M===!0?t:e,w=M===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*w,0),d.push(0,w,0),u.push(.5,.5),m++;const C=m;for(let D=0;D<=s;D++){const P=D/s*l+o,B=Math.cos(P),O=Math.sin(P);_.x=T*O,_.y=p*w,_.z=T*B,f.push(_.x,_.y,_.z),d.push(0,w,0),E.x=B*.5+.5,E.y=O*.5*w+.5,u.push(E.x,E.y),m++}for(let D=0;D<s;D++){const z=b+D,P=C+D;M===!0?h.push(P,P+1,z):h.push(P+1,P,z),y+=3}c.addGroup(g,y,M===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const v=new W,M=new W,b=new W;for(let E=0;E<e.length;E+=3)u(e[E+0],v),u(e[E+1],M),u(e[E+2],b),l(v,M,b,S)}function l(S,v,M,b){const E=b+1,_=[];for(let y=0;y<=E;y++){_[y]=[];const T=S.clone().lerp(M,y/E),w=v.clone().lerp(M,y/E),C=E-y;for(let D=0;D<=C;D++)D===0&&y===E?_[y][D]=T:_[y][D]=T.clone().lerp(w,D/C)}for(let y=0;y<E;y++)for(let T=0;T<2*(E-y)-1;T++){const w=Math.floor(T/2);T%2===0?(d(_[y][w+1]),d(_[y+1][w]),d(_[y][w])):(d(_[y][w+1]),d(_[y+1][w+1]),d(_[y+1][w]))}}function c(S){const v=new W;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(S),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const S=new W;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const M=p(S)/2/Math.PI+.5,b=g(S)/Math.PI+.5;a.push(M,1-b)}m(),f()}function f(){for(let S=0;S<a.length;S+=6){const v=a[S+0],M=a[S+2],b=a[S+4],E=Math.max(v,M,b),_=Math.min(v,M,b);E>.9&&_<.1&&(v<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),b<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function u(S,v){const M=S*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function m(){const S=new W,v=new W,M=new W,b=new W,E=new Lt,_=new Lt,y=new Lt;for(let T=0,w=0;T<r.length;T+=9,w+=6){S.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),E.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),y.set(a[w+4],a[w+5]),b.copy(S).add(v).add(M).divideScalar(3);const C=p(b);x(E,w+0,S,C),x(_,w+2,v,C),x(y,w+4,M,C)}}function x(S,v,M,b){b<0&&S.x===1&&(a[v]=S.x-1),M.x===0&&M.z===0&&(a[v]=b/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.vertices,t.indices,t.radius,t.detail)}}function Uf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Mc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=kf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let d=e;d<s;d+=e){const u=i[d],m=i[d+1];u<o&&(o=u),m<l&&(l=m),u>h&&(h=u),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Rs(r,a,e,o,l,c,0),a}function Mc(i,t,e,n,s){let r;if(s===Jf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=bc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=bc(a/n|0,i[a],i[a+1],r);return r&&Zi(r,r.next)&&(Ds(r),r=r.next),r}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zi(e,e.next)||me(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Xf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Of(i,n,s,r):Ff(i)){t.push(l.i,i.i,c.i),Ds(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zf(wi(i),t),Rs(i,t,e,n,s,r,2)):a===2&&Bf(i,t,e,n,s,r):Rs(wi(i),t,e,n,s,r,1);break}}}function Ff(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),u=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=f&&m.y<=u&&Cs(s,o,r,l,a,c,m.x,m.y)&&me(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Of(i,t,e,n){const s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,l,c),m=Math.min(h,f,d),x=Math.max(o,l,c),p=Math.max(h,f,d),g=Po(u,m,t,e,n),S=Po(x,p,t,e,n);let v=i.prevZ,M=i.nextZ;for(;v&&v.z>=g&&M&&M.z<=S;){if(v.x>=u&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Cs(o,h,l,f,c,d,v.x,v.y)&&me(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Cs(o,h,l,f,c,d,M.x,M.y)&&me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=g;){if(v.x>=u&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==a&&Cs(o,h,l,f,c,d,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=S;){if(M.x>=u&&M.x<=x&&M.y>=m&&M.y<=p&&M!==s&&M!==a&&Cs(o,h,l,f,c,d,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function zf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Zi(n,s)&&yc(n,e,e.next,s)&&Ps(n,s)&&Ps(s,n)&&(t.push(n.i,e.i,s.i),Ds(e),Ds(e.next),e=i=s),e=e.next}while(e!==i);return wi(e)}function Bf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zf(a,o)){let l=Ec(a,o);a=wi(a,a.next),l=wi(l,l.next),Rs(a,t,e,n,s,r,0),Rs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function kf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Mc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Yf(c))}s.sort(Gf);for(let r=0;r<s.length;r++)e=Hf(s[r],e);return e}function Gf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hf(i,t){const e=Vf(i,t);if(!e)return t;const n=Ec(e,i);return wi(n,n.next),wi(e,e.next)}function Vf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Zi(i,e))return e;do{if(Zi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Ps(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Wf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Wf(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function Xf(i,t,e,n){let s=i;do s.z===0&&(s.z=Po(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qf(s)}function qf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Po(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Sc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Cs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Sc(i,t,e,n,s,r,a,o)}function Zf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kf(i,t)&&(Ps(i,t)&&Ps(t,i)&&$f(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Zi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zi(i,t){return i.x===t.x&&i.y===t.y}function yc(i,t,e,n){const s=Ar(me(i,t,e)),r=Ar(me(i,t,n)),a=Ar(me(e,n,i)),o=Ar(me(e,n,t));return!!(s!==r&&a!==o||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||a===0&&Tr(e,i,n)||o===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ar(i){return i>0?1:i<0?-1:0}function Kf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ps(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function $f(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ec(i,t){const e=Do(i.i,i.x,i.y),n=Do(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bc(i,t,e,n){const s=Do(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Qf{static triangulate(t,e,n=2){return Uf(t,e,n)}}class Lo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Lo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wc(t),Tc(n,t);let a=t.length;e.forEach(wc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tc(n,e[l]);const o=Qf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Io extends Co{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class ui extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,u=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const S=g*d-a;for(let v=0;v<c;v++){const M=v*f-r;m.push(M,-S,0),x.push(0,0,1),p.push(v/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const v=S+c*g,M=S+c*(g+1),b=S+1+c*(g+1),E=S+1+c*g;u.push(v,M,E),u.push(M,b,E)}this.setIndex(u),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class No extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new W,d=new W,u=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const S=[],v=g/n,M=a+v*o,b=t*Math.cos(M),E=Math.sqrt(t*t-b*b);let _=0;g===0&&a===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let y=0;y<=e;y++){const T=y/e,w=s+T*r;f.x=-E*Math.cos(w),f.y=b,f.z=E*Math.sin(w),m.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(T+_,1-v),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const v=h[g][S+1],M=h[g][S],b=h[g+1][S],E=h[g+1][S+1];(g!==0||a>0)&&u.push(v,M,E),(g!==n-1||l<Math.PI)&&u.push(M,b,E)}this.setIndex(u),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ac(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ac(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const s in n)t[s]=n[s]}return t}function Ac(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const td={clone:Ki,merge:Ye};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class id extends Yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fi extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cc extends Si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Js,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=ha,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sd extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rd extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Pc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Pc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class ad{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const od=new ad;class Fo{constructor(t){this.manager=t!==void 0?t:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i=new WeakMap;class ld extends Fo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Uo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=$i.get(a);f===void 0&&(f=[],$i.set(a,f)),f.push({onLoad:e,onError:s})}return a}const o=gs("img");function l(){h(),e&&e(this);const f=$i.get(this)||[];for(let d=0;d<f.length;d++){const u=f[d];u.onLoad&&u.onLoad(this)}$i.delete(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),Uo.remove(`image:${t}`);const d=$i.get(this)||[];for(let u=0;u<d.length;u++){const m=d[u];m.onError&&m.onError(f)}$i.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uo.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Dc extends Fo{constructor(t){super(t)}load(t,e,n,s){const r=new Ee,a=new ld(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Lc extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class cd extends Lc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Oo=new Qt,Ic=new W,Nc=new W;class hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Oo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rr=new W,Cr=new _n,Ln=new W;class Uc extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Rr,Cr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Rr,Cr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new W,Fc=new Lt,Oc=new Lt;class En extends Uc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Fc,Oc),e.subVectors(Oc,Fc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class zc extends Uc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ud extends hd{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fd extends Lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ud}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ji=-90,Qi=1;class zo extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new En(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const a=new En(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new En(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const l=new En(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new En(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class dd extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Bc=new Qt;class pd{constructor(t,e,n=0,s=1/0){this.ray=new ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):te("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bc),this}intersectObject(t,e=!0,n=[]){return Bo(t,this,n,e),n.sort(kc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bo(t[s],this,n,e);return n.sort(kc),n}}function kc(i,t){return i.distance-t.distance}function Bo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Bo(r[a],t,e,!0)}}class Pr{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ul=class ul{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ul.prototype.isMatrix2=!0;let Gc=ul;class md extends ri{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Hc(i,t,e,n){const s=gd(n);switch(e){case Pl:return i*t;case va:return i*t/s.components*s.byteLength;case Ma:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case Sa:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ra:case Pa:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:case Ks:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ya:case Za:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gd(i){switch(i){case Je:case Tl:return{byteLength:1,components:1};case ps:case Al:case mn:return{byteLength:2,components:1};case _a:case xa:return{byteLength:2,components:4};case An:case ga:case pn:return{byteLength:4,components:1};case Rl:case Cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qn}})),typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qn);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _d(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){const m=f[d],x=f[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){const x=f[u];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ld=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ht={alphahash_fragment:xd,alphahash_pars_fragment:vd,alphamap_fragment:Md,alphamap_pars_fragment:Sd,alphatest_fragment:yd,alphatest_pars_fragment:Ed,aomap_fragment:bd,aomap_pars_fragment:wd,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Dd,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:zd,color_pars_vertex:Bd,color_vertex:kd,common:Gd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Zd,envmap_fragment:Kd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:cp,envmap_vertex:jd,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:fp,lights_phong_pars_fragment:dp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:xp,lightprobes_pars_fragment:vp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Ep,map_fragment:bp,map_pars_fragment:wp,map_particle_fragment:Tp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Dp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Np,normal_fragment_begin:Up,normal_fragment_maps:Fp,normal_pars_fragment:Op,normal_pars_vertex:zp,normal_vertex:Bp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Kp,dithering_pars_fragment:$p,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:fm,uv_pars_fragment:dm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Mt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},In={basic:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ye([Mt.points,Mt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ye([Mt.common,Mt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ye([Mt.sprite,Mt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ye([Mt.lights,Mt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};In.physical={uniforms:Ye([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Dr={r:0,b:0,g:0},_m=new Qt,Wc=new Ft;Wc.set(-1,0,0,0,1,0,0,0,1);function xm(i,t,e,n,s,r){const a=new Rt(0);let o=s===!0?0:1,l,c,h=null,f=0,d=null;function u(S){let v=S.isScene===!0?S.background:null;if(v&&v.isTexture){const M=S.backgroundBlurriness>0;v=t.get(v,M)}return v}function m(S){let v=!1;const M=u(S);M===null?p(a,o):M&&M.isColor&&(p(M,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,v){const M=u(v);M&&M.isCubeTexture?(c===void 0&&(c=new $t(new bi(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ki(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wc),c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==se,(h!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new $t(new ui(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ki(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(M.colorSpace)!==se,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(Dr,Rc(i)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:m,addToRenderList:x,dispose:g}}function vm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(C,D,z,P,B){let O=!1;const U=f(C,P,z,D);r!==U&&(r=U,c(r.object)),O=u(C,P,z,B),O&&m(C,P,z,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,M(C,D,z,P),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function f(C,D,z,P){const B=P.wireframe===!0;let O=n[D.id];O===void 0&&(O={},n[D.id]=O);const U=C.isInstancedMesh===!0?C.id:0;let Y=O[U];Y===void 0&&(Y={},O[U]=Y);let F=Y[z.id];F===void 0&&(F={},Y[z.id]=F);let L=F[B];return L===void 0&&(L=d(l()),F[B]=L),L}function d(C){const D=[],z=[],P=[];for(let B=0;B<e;B++)D[B]=0,z[B]=0,P[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:P,object:C,attributes:{},index:null}}function u(C,D,z,P){const B=r.attributes,O=D.attributes;let U=0;const Y=z.getAttributes();for(const F in Y)if(Y[F].location>=0){const N=B[F];let X=O[F];if(X===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),N===void 0||N.attribute!==X||X&&N.data!==X.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function m(C,D,z,P){const B={},O=D.attributes;let U=0;const Y=z.getAttributes();for(const F in Y)if(Y[F].location>=0){let N=O[F];N===void 0&&(F==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),F==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const X={};X.attribute=N,N&&N.data&&(X.data=N.data),B[F]=X,U++}r.attributes=B,r.attributesNum=U,r.index=P}function x(){const C=r.newAttributes;for(let D=0,z=C.length;D<z;D++)C[D]=0}function p(C){g(C,0)}function g(C,D){const z=r.newAttributes,P=r.enabledAttributes,B=r.attributeDivisors;z[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),B[C]!==D&&(i.vertexAttribDivisor(C,D),B[C]=D)}function S(){const C=r.newAttributes,D=r.enabledAttributes;for(let z=0,P=D.length;z<P;z++)D[z]!==C[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function v(C,D,z,P,B,O,U){U===!0?i.vertexAttribIPointer(C,D,z,B,O):i.vertexAttribPointer(C,D,z,P,B,O)}function M(C,D,z,P){x();const B=P.attributes,O=z.getAttributes(),U=D.defaultAttributeValues;for(const Y in O){const F=O[Y];if(F.location>=0){let L=B[Y];if(L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),L!==void 0){const N=L.normalized,X=L.itemSize,Z=t.get(L);if(Z===void 0)continue;const V=Z.buffer,J=Z.type,rt=Z.bytesPerElement,lt=J===i.INT||J===i.UNSIGNED_INT||L.gpuType===ga;if(L.isInterleavedBufferAttribute){const it=L.data,yt=it.isInterleavedBuffer===!0?it.stride:it.itemSize,Ot=L.offset;if(it.isInstancedInterleavedBuffer||it.isInstancedBufferAttribute){for(let bt=0;bt<F.locationSize;bt++)g(F.location+bt,it.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let bt=0;bt<F.locationSize;bt++)p(F.location+bt);i.bindBuffer(i.ARRAY_BUFFER,V);for(let bt=0;bt<F.locationSize;bt++)v(F.location+bt,X/F.locationSize,J,N,yt*rt,(Ot+X/F.locationSize*bt)*rt,lt)}else{if(L.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)g(F.location+it,L.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let it=0;it<F.locationSize;it++)p(F.location+it);i.bindBuffer(i.ARRAY_BUFFER,V);for(let it=0;it<F.locationSize;it++)v(F.location+it,X/F.locationSize,J,N,X*rt,X/F.locationSize*it*rt,lt)}}else if(U!==void 0){const N=U[Y];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(F.location,N);break;case 3:i.vertexAttrib3fv(F.location,N);break;case 4:i.vertexAttrib4fv(F.location,N);break;default:i.vertexAttrib1fv(F.location,N)}}}}S()}function b(){T();for(const C in n){const D=n[C];for(const z in D){const P=D[z];for(const B in P){const O=P[B];for(const U in O)h(O[U].object),delete O[U];delete P[B]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const z in D){const P=D[z];for(const B in P){const O=P[B];for(const U in O)h(O[U].object),delete O[U];delete P[B]}}delete n[C.id]}function _(C){for(const D in n){const z=n[D];for(const P in z){const B=z[P];if(B[C.id]===void 0)continue;const O=B[C.id];for(const U in O)h(O[U].object),delete O[U];delete B[C.id]}}}function y(C){for(const D in n){const z=n[D],P=C.isInstancedMesh===!0?C.id:0,B=z[P];if(B!==void 0){for(const O in B){const U=B[O];for(const Y in U)h(U[Y].object),delete U[Y];delete B[O]}delete z[P],Object.keys(z).length===0&&delete n[D]}}}function T(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Mm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Rn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Je&&_!==pn&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:M,maxSamples:b,samples:E}}function ym(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Pn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,v=S*4;let M=g.clippingState||null;l.value=M,M=h(m,d,v,u);for(let b=0;b!==v;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,m){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=u+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=u;v!==x;++v,M+=4)a.copy(f[v]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}class ko extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _c(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bi(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Pi});r.uniforms.tEquirect.value=e;const a=new $t(s,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=qe),new zo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Xc=256,Em=3,bm=20,qc=256,Yc=16,wm=3,Tm=new W,Am=new Rt;class Lr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zo(1,10,null),this._boxMesh=new $t(new bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Am));const p=new zo(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=m,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xc,kl(t))}_fromTexture(t,e){t.mapping===Li||t.mapping===ds?this._setSize(t.image.length===0?Xc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Zc(t,!1,!1),n=Math.log2(t)-Em;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Li||t.mapping===ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Rm(),this._integrationMaterial=Cm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Yc);for(let a=0;a<=n;a++){const o=Lr.lodToRoughness(a,n);if(a>n-wm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(qc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Pm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Zc(i,t,e){return new ko(i,{minFilter:Tn,generateMipmaps:t,type:mn,colorSpace:Qs,depthBuffer:e})}function Ls(i,t,e){return new Yn({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Xe,blending:Pi,depthTest:!1,depthWrite:!1})}function Rm(){return Ls("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cm(){return Ls("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Pm(){return Ls("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kc(){return Ls("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $c(){return Ls("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===fa||u===da)if(t.has(d)){const m=t.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const x=new ko(m.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const u=d.mapping,m=u===fa||u===da,x=u===Li||u===ds;if(m||x){let p=e.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Lr(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Lr(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===fa?d.mapping=Li:u===da&&(d.mapping=ds),d}function l(d){let u=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&u++;return u===m}function c(d){const u=d.target;u.removeEventListener("dispose",c);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(d){const u=d.target;u.removeEventListener("dispose",h);const m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&er("WebGLRenderer: "+n+" extension not supported."),s}}}function Im(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(m){const x=m.attributes;for(const p in x)t.update(x[p],i.ARRAY_BUFFER)}function f(m){const x=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const S=x!==null?x.array.length:p.array.length/3-1,v=p.count>=65535?sc:ic,M=new v(Math.ceil(S/3)*6,1),b=M.array;if(x!==null){const _=x.array;g=x.version;for(let y=0,T=0;y<S;y+=3){const w=_[y+0],C=_[y+1],D=_[y+2];b[T++]=w,b[T++]=C,b[T++]=C,b[T++]=D,b[T++]=D,b[T++]=w}}else{g=p.version;for(let _=0,y=0;_<S;_+=3){const T=_+0,w=_+1,C=_+2;b[y++]=T,b[y++]=w,b[y++]=w,b[y++]=C,b[y++]=C,b[y++]=T}}M.version=g;const E=r.get(m);E&&t.remove(E),r.set(m,M)}function d(m){const x=r.get(m);if(x){const p=m.index;p!==null&&x.version<p.version&&f(m)}else f(m);return r.get(m)}function u(){for(const m in s){const x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Nm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let p=0;p<u;p++)x+=d[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Um(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fm(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let T=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;u===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let M=o.attributes.position.count*v,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*b*4*f),_=new ql(E,M,b,f);_.type=pn,_.needsUpdate=!0;const y=v*4;for(let w=0;w<f;w++){const C=p[w],D=g[w],z=S[w],P=M*b*4*w;for(let B=0;B<C.count;B++){const O=B*y;u===!0&&(s.fromBufferAttribute(C,B),E[P+O+0]=s.x,E[P+O+1]=s.y,E[P+O+2]=s.z,E[P+O+3]=0),m===!0&&(s.fromBufferAttribute(D,B),E[P+O+4]=s.x,E[P+O+5]=s.y,E[P+O+6]=s.z,E[P+O+7]=0),x===!0&&(s.fromBufferAttribute(z,B),E[P+O+8]=s.x,E[P+O+9]=s.y,E[P+O+10]=s.z,E[P+O+11]=z.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new Lt(M,b)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];const m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Om(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const zm={[vl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[yl]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[ua]:"NEUTRAL_TONE_MAPPING",[El]:"CUSTOM_TONE_MAPPING"};function Bm(i,t,e,n,s,r){const a=new Cn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new we;h.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new fe([0,2,0,0,2,0],2));const f=new id({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new $t(h,f),u=new zc(-1,1,1,-1,0,1);let m=null,x=null,p=!1,g,S=null,v=[],M=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<v.length;_++){const y=v[_];y.setSize&&y.setSize(b,E)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;const E=a.width,_=a.height;v.length>0&&o===null&&(o=new Cn(E,_,{type:mn,depthBuffer:!1,stencilBuffer:!1}),l=new Cn(E,_,{type:mn,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&v.some(T=>T.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Yi(E,_),r===!0&&(c.format=ni,c.type=Ii)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let T=0;T<v.length;T++){const w=v[T];w.setSize&&w.setSize(E,_),y&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(b,E){if(p||b.toneMapping===Bn&&v.length===0)return!1;if(S=E,E!==null){const _=E.width,y=E.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return M===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Bn,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=g,p=!0;let _=a,y=o;for(let T=0;T<v.length;T++){const w=v[T];w.enabled!==!1&&(w.render(b,y,_,E),w.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,f.defines={},Zt.getTransfer(m)===se&&(f.defines.SRGB_TRANSFER="");const T=zm[x];T&&(f.defines[T]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(S),b.render(d,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const Jc=new Ee,Qc=new Yi(1,1),jc=new xc(1),th=new ql,eh=new ff,nh=new _c,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=sh[t];e===void 0&&(e=new Int32Array(t),sh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Ae(e,n)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;ah.set(n),i.uniformMatrix3fv(this.addr,!1,ah),Ae(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Ae(e,n)}}function Ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Nr(i){return i.version===0&&(i.compareFunction=Nl,i.needsUpdate=!0),i}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Nr(Qc):r=Jc,e.setTexture2D(t||r,s)}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eh,s)}function i0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Nr(jc):r=nh,e.setTextureCube(t||r,s)}function s0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||th,s)}function r0(i){switch(i){case 5126:return km;case 35664:return Gm;case 35665:return Hm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Qm;case 36295:return jm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(i,t){i.uniform1fv(this.addr,t)}function o0(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function l0(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function c0(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function h0(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u0(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function f0(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function d0(i,t){i.uniform1iv(this.addr,t)}function p0(i,t){i.uniform2iv(this.addr,t)}function m0(i,t){i.uniform3iv(this.addr,t)}function g0(i,t){i.uniform4iv(this.addr,t)}function _0(i,t){i.uniform1uiv(this.addr,t)}function x0(i,t){i.uniform2uiv(this.addr,t)}function v0(i,t){i.uniform3uiv(this.addr,t)}function M0(i,t){i.uniform4uiv(this.addr,t)}function S0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Nr(Qc):a=Jc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function y0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eh,r[a])}function E0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Nr(jc):a=nh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function b0(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||th,r[a])}function w0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return b0}}class T0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r0(e.type)}}class A0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}}class R0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function lh(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){const n=i.name,s=n.length;for(Go.lastIndex=0;;){const r=Go.exec(n),a=Go.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lh(e,c===void 0?new T0(o,i,t):new A0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new R0(o),lh(e,f)),e=f}}}class Ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);C0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ch(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const P0=37297;let D0=0;function L0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hh=new Ft;function I0(i){Zt._getMatrix(hh,Zt.workingColorSpace,i);const t=`mat3( ${hh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+L0(i.getShaderSource(t),o)}else return r}function N0(i,t){const e=I0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const U0={[vl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[yl]:"ACESFilmic",[bl]:"AgX",[ua]:"Neutral",[El]:"Custom"};function F0(i,t){const e=U0[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new W;function O0(){Zt.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function B0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Is(i){return i!==""}function fh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function dh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(G0,H0)}function H0(i,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ho(e)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(V0,W0)}function W0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const X0={[cs]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function q0(i){return X0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y0={[ds]:"ENVMAP_MODE_REFRACTION"};function Z0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Y0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K0={[ha]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Pu]:"ENVMAP_BLENDING_ADD"};function $0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K0[i.combine]||"ENVMAP_BLENDING_NONE"}function J0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=q0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Z0(e),f=$0(e),d=z0(e),u=B0(r),m=s.createProgram();let x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(x=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Bn?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=Ho(a),a=fh(a,e),a=dh(a,e),o=Ho(o),o=fh(o,e),o=dh(o,e),a=ph(a),o=ph(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=g+x+a,v=g+p+o,M=ch(s,s.VERTEX_SHADER,S),b=ch(s,s.FRAGMENT_SHADER,v);s.attachShader(m,M),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(w){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(b)||"",P=C.trim(),B=D.trim(),O=z.trim();let U=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,b);else{const F=uh(s,M,"vertex"),L=uh(s,b,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+F+`
`+L)}else P!==""?Nt("WebGLProgram: Program Info Log:",P):(B===""||O==="")&&(Y=!1);Y&&(w.diagnostics={runnable:U,programLog:P,vertexShader:{log:B,prefix:x},fragmentShader:{log:O,prefix:p}})}s.deleteShader(M),s.deleteShader(b),_=new Ur(s,m),y=k0(s,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,P0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let Q0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tg(t),e.set(t,n)),n}}class tg{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}}function eg(i){return i===ii||i===Ks||i===$s}function ng(i,t,e,n,s,r){const a=new oo,o=new j0,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,T,w,C,D){const z=w.fog,P=C.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||B,O),Y=d[_.type];let F=n.precision;_.precision!==null&&(F=n.getMaxPrecision(_.precision),F!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));const L=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,N=L!==void 0?L.length:0;let X=0;P.morphAttributes.position!==void 0&&(X=1),P.morphAttributes.normal!==void 0&&(X=2),P.morphAttributes.color!==void 0&&(X=3);let Z,V,J,rt;if(Y){const St=In[Y];Z=St.vertexShader,V=St.fragmentShader}else{Z=_.vertexShader,V=_.fragmentShader;const St=o.getVertexShaderStage(_),re=o.getFragmentShaderStage(_);o.update(_,St,re),J=St.id,rt=re.id}const lt=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),yt=C.isInstancedMesh===!0,Ot=C.isBatchedMesh===!0,bt=!!_.map,kt=!!_.matcap,Xt=!!U,Ut=Xt&&U.isPMREMTexture===!0,ae=!!_.aoMap,Kt=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,Fn=!!_.displacementMap,Le=!!_.emissiveMap,cn=!!_.metalnessMap,hn=!!_.roughnessMap,un=_.anisotropy>0,q=_.clearcoat>0,fn=_.diffuseRoughness>0,de=_.dispersion>0,pe=_.retroreflectivity>0,vt=_.iridescence>0,Ce=_.sheen>0,It=_.transmission>0,zt=un&&!!_.anisotropyMap,I=q&&!!_.clearcoatMap,A=q&&!!_.clearcoatNormalMap,$=q&&!!_.clearcoatRoughnessMap,ct=fn&&!!_.diffuseRoughnessMap,at=vt&&!!_.iridescenceMap,ft=vt&&!!_.iridescenceThicknessMap,_t=Ce&&!!_.sheenColorMap,et=Ce&&!!_.sheenRoughnessMap,nt=!!_.specularMap,pt=!!_.specularColorMap,k=!!_.specularIntensityMap,st=It&&!!_.transmissionMap,tt=It&&!!_.thicknessMap,mt=!!_.gradientMap,ut=!!_.alphaMap,dt=_.alphaTest>0,Pt=!!_.alphaHash,Vt=!!_.extensions;let ht=Bn;_.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ht=i.toneMapping);const Dt=Ut?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,Gt={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:V,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:Ot,batchingColor:Ot&&C._colorsTexture!==null,instancing:yt,instancingColor:yt&&C.instanceColor!==null,instancingMorph:yt&&C.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:bt,matcap:kt,envMap:Xt,envMapMode:Xt&&U.mapping,envMapPMREM:Ut,envMapMaxLod:Ut?Dt.length-1:null,envMapSize:Ut?Dt[0].width:null,aoMap:ae,lightMap:Kt,bumpMap:ce,normalMap:_e,displacementMap:Fn,emissiveMap:Le,normalMapObjectSpace:_e&&_.normalMapType===Iu,normalMapTangentSpace:_e&&_.normalMapType===Js,packedNormalMap:_e&&_.normalMapType===Js&&eg(_.normalMap.format),metalnessMap:cn,roughnessMap:hn,anisotropy:un,anisotropyMap:zt,clearcoat:q,clearcoatMap:I,clearcoatNormalMap:A,clearcoatRoughnessMap:$,diffuseRoughness:fn,diffuseRoughnessMap:ct,dispersion:de,retroreflection:pe,iridescence:vt,iridescenceMap:at,iridescenceThicknessMap:ft,sheen:Ce,sheenColorMap:_t,sheenRoughnessMap:et,specularMap:nt,specularColorMap:pt,specularIntensityMap:k,transmission:It,transmissionMap:st,thicknessMap:tt,gradientMap:mt,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:ut,alphaTest:dt,alphaHash:Pt,combine:_.combine,mapUv:bt&&u(_.map.channel),aoMapUv:ae&&u(_.aoMap.channel),lightMapUv:Kt&&u(_.lightMap.channel),bumpMapUv:ce&&u(_.bumpMap.channel),normalMapUv:_e&&u(_.normalMap.channel),displacementMapUv:Fn&&u(_.displacementMap.channel),emissiveMapUv:Le&&u(_.emissiveMap.channel),metalnessMapUv:cn&&u(_.metalnessMap.channel),roughnessMapUv:hn&&u(_.roughnessMap.channel),anisotropyMapUv:zt&&u(_.anisotropyMap.channel),clearcoatMapUv:I&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:A&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:at&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:et&&u(_.sheenRoughnessMap.channel),specularMapUv:nt&&u(_.specularMap.channel),specularColorMapUv:pt&&u(_.specularColorMap.channel),specularIntensityMapUv:k&&u(_.specularIntensityMap.channel),transmissionMapUv:st&&u(_.transmissionMap.channel),thicknessMapUv:tt&&u(_.thicknessMap.channel),alphaMapUv:ut&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(_e||un),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!P.attributes.uv&&(bt||ut),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:D.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:bt&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===se,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===Xe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Vt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&_.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)y.push(T),y.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(p(y,_),g(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const y=d[_.type];let T;if(y){const w=In[y];T=td.clone(w.uniforms)}else T=_.uniforms;return T}function v(_,y){let T=h.get(y);return T!==void 0?++T.usedTimes:(T=new J0(i,y,_,s),c.push(T),h.set(y,T)),T}function M(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function ig(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _h(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,m,x,p,g){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:u,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},i[t]=S):(S.id=d.id,S.object=d,S.geometry=u,S.material=m,S.materialVariant=a(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=p,S.group=g),t++,S}function l(d,u,m,x,p,g,S){S.reversedDepth===!0&&(p=-p);const v=o(d,u,m,x,p,g);m.transmission>0?n.push(v):m.transparent===!0?s.push(v):e.push(v)}function c(d,u,m,x,p,g){const S=o(d,u,m,x,p,g);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,u){e.length>1&&e.sort(d||sg),n.length>1&&n.sort(u||gh),s.length>1&&s.sort(u||gh)}function f(){for(let d=t,u=i.length;d<u;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function rg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new _h,i.set(n,[a])):s>=r.length?(a=new _h,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Rt};break;case"SpotLight":e={position:new W,direction:new W,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let lg=0;function cg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hg(i){const t=new ag,e=og(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const s=new W,r=new Qt,a=new Qt;function o(c){let h=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,x=0,p=0,g=0,S=0,v=0,M=0,b=0,E=0,_=0,y=0,T=0,w=0;c.sort(cg);for(let D=0,z=c.length;D<z;D++){const P=c[D],B=P.color,O=P.intensity,U=P.distance;let Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ii?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=B.r*O,f+=B.g*O,d+=B.b*O;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],O);w++}else if(P.isSunLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[m]=N,n.sunShadowMap[m]=Y;const X=L.getViewportCount();for(let Z=0;Z<X;Z++)n.sunShadowMatrix[x+Z]=L.getMatrix(Z),n.sunShadowCascade[x+Z]=L._cascadeData[Z];x+=X,m++}n.sun[u]=F,u++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const L=P.shadow,N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=F,p++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(B).multiplyScalar(O),F.distance=U,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[S]=F;const L=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,L.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[S]=L.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,n.spotShadow[S]=N,n.spotShadowMap[S]=Y,_++}S++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(B).multiplyScalar(O),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=F,v++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const L=P.shadow,N=e.get(P);N.shadowIntensity=L.intensity,N.shadowBias=L.bias,N.shadowNormalBias=L.normalBias,N.shadowRadius=L.radius,N.shadowMapSize=L.mapSize,N.shadowCameraNear=L.camera.near,N.shadowCameraFar=L.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=F,g++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(O),F.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[M]=F,M++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.sunLength!==u||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==S||C.rectAreaLength!==v||C.hemiLength!==M||C.numSunShadows!==m||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==_||C.numSpotMaps!==y||C.numLightProbes!==w)&&(n.sun.length=u,n.directional.length=p,n.spot.length=S,n.rectArea.length=v,n.point.length=g,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.sunLength=u,C.directionalLength=p,C.pointLength=g,C.spotLength=S,C.rectAreaLength=v,C.hemiLength=M,C.numSunShadows=m,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=_,C.numSpotMaps=y,C.numLightProbes=w,n.version=lg++)}function l(c,h){let f=0,d=0,u=0,m=0,x=0,p=0;const g=h.matrixWorldInverse;for(let S=0,v=c.length;S<v;S++){const M=c[S];if(M.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(M.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function xh(i){const t=new hg(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new xh(i),t.set(s,[o])):r>=a.length?(o=new xh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pg=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],mg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],vh=new Qt,Ns=new W,Vo=new W;function gg(i,t,e){let n=new Ts;const s=new Lt,r=new Lt,a=new ue,o=new sd,l=new rd,c={},h=e.maxTextureSize,f={[ti]:Xe,[Xe]:ti,[Be]:Be},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:fg,fragmentShader:dg}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const m=new we;m.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let g=this.type;this.render=function(E,_,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===hu&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);const T=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=g!==this.type;z&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(B=>B.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,B=E.length;P<B;P++){const O=E[P],U=O.shadow;if(U===void 0){Nt("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();s.multiply(Y),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y));const F=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=F,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===hs){if(O.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Cn(s.x,s.y,{format:ii,type:mn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new Yi(s.x,s.y,pn),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=ei,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ue,U.map.depthTexture.magFilter=Ue}else O.isPointLight?(U.map=new ko(s.x),U.map.depthTexture=new xc(s.x,An)):(U.map=new Cn(s.x,s.y),U.map.depthTexture=new Yi(s.x,s.y,An)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=ei,this.type===cs?(U.map.depthTexture.compareFunction=F?Il:Ll,U.map.depthTexture.minFilter=qe,U.map.depthTexture.magFilter=qe):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ue,U.map.depthTexture.magFilter=Ue);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);const L=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();O.isPointLight!==!0&&U.updateMatrices(O,y);const N=U.camera.layers.mask&4294967294?U.camera.layers:y.layers;for(let X=0;X<L;X++){const Z=U.getCamera(X);if(O.isPointLight){const V=U.camera,J=U.matrix,rt=O.distance||V.far;rt!==V.far&&(V.far=rt,V.updateProjectionMatrix()),Ns.setFromMatrixPosition(O.matrixWorld),V.position.copy(Ns),Vo.copy(V.position),Vo.add(pg[X]),V.up.copy(mg[X]),V.lookAt(Vo),V.updateMatrixWorld(),J.makeTranslation(-Ns.x,-Ns.y,-Ns.z),vh.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),U._frustum.setFromProjectionMatrix(vh,V.coordinateSystem,V.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,X),i.clear();else{X===0&&(i.setRenderTarget(U.map),i.clear());const V=U.getViewport(X);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),D.viewport(a)}n=U.getFrustum(X),M(_,y,Z,O,N,this.type)}U.isPointLightShadow!==!0&&this.type===hs&&S(U,y),U.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,w,C)};function S(E,_){const y=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Cn(s.x,s.y,{format:ii,type:mn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,y,d,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,y,u,x,null)}function v(E,_,y,T){let w=null;const C=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)w=C;else if(w=y.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=w.uuid,z=_.uuid;let P=c[D];P===void 0&&(P={},c[D]=P);let B=P[z];B===void 0&&(B=w.clone(),P[z]=B,_.addEventListener("dispose",b)),w=B}if(w.visible=_.visible,w.wireframe=_.wireframe,T===hs?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:f[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=i.properties.get(w);D.light=y}return w}function M(E,_,y,T,w,C){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===hs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const P=t.update(E),B=E.material;if(Array.isArray(B)){const O=P.groups;for(let U=0,Y=O.length;U<Y;U++){const F=O[U],L=B[F.materialIndex];if(L&&L.visible){const N=v(E,L,T,C);E.onBeforeShadow(i,E,_,y,P,N,F),i.renderBufferDirect(y,null,P,N,E,F),E.onAfterShadow(i,E,_,y,P,N,F)}}}else if(B.visible){const O=v(E,B,T,C);E.onBeforeShadow(i,E,_,y,P,O,null),i.renderBufferDirect(y,null,P,O,E,null),E.onAfterShadow(i,E,_,y,P,O,null)}}const z=E.children;for(let P=0,B=z.length;P<B;P++)M(z[P],_,y,T,w,C)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const T=c[y],w=E.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function _g(i,t){function e(){let k=!1;const st=new ue;let tt=null;const mt=new ue(0,0,0,0);return{setMask:function(ut){tt!==ut&&!k&&(i.colorMask(ut,ut,ut,ut),tt=ut)},setLocked:function(ut){k=ut},setClear:function(ut,dt,Pt,Vt,ht){ht===!0&&(ut*=Vt,dt*=Vt,Pt*=Vt),st.set(ut,dt,Pt,Vt),mt.equals(st)===!1&&(i.clearColor(ut,dt,Pt,Vt),mt.copy(st))},reset:function(){k=!1,tt=null,mt.set(-1,0,0,0)}}}function n(){let k=!1,st=!1,tt=null,mt=null,ut=null;return{setReversed:function(dt){if(st!==dt){const Pt=t.get("EXT_clip_control");dt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),st=dt;const Vt=ut;ut=null,this.setClear(Vt)}},getReversed:function(){return st},setTest:function(dt){dt?it(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(dt){tt!==dt&&!k&&(i.depthMask(dt),tt=dt)},setFunc:function(dt){if(st&&(dt=Wu[dt]),mt!==dt){switch(dt){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=dt}},setLocked:function(dt){k=dt},setClear:function(dt){ut!==dt&&(ut=dt,st&&(dt=1-dt),i.clearDepth(dt))},reset:function(){k=!1,tt=null,mt=null,ut=null,st=!1}}}function s(){let k=!1,st=null,tt=null,mt=null,ut=null,dt=null,Pt=null,Vt=null,ht=null;return{setTest:function(Dt){k||(Dt?it(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Dt){st!==Dt&&!k&&(i.stencilMask(Dt),st=Dt)},setFunc:function(Dt,Gt,St){(tt!==Dt||mt!==Gt||ut!==St)&&(i.stencilFunc(Dt,Gt,St),tt=Dt,mt=Gt,ut=St)},setOp:function(Dt,Gt,St){(dt!==Dt||Pt!==Gt||Vt!==St)&&(i.stencilOp(Dt,Gt,St),dt=Dt,Pt=Gt,Vt=St)},setLocked:function(Dt){k=Dt},setClear:function(Dt){ht!==Dt&&(i.clearStencil(Dt),ht=Dt)},reset:function(){k=!1,st=null,tt=null,mt=null,ut=null,dt=null,Pt=null,Vt=null,ht=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},f={},d={},u=new WeakMap,m=[],x=null,p=!1,g=null,S=null,v=null,M=null,b=null,E=null,_=null,y=new Rt(0,0,0),T=0,w=!1,C=null,D=null,z=null,P=null,B=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=Y>=2);let L=null,N={};const X=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),V=new ue().fromArray(X),J=new ue().fromArray(Z);function rt(k,st,tt,mt){const ut=new Uint8Array(4),dt=i.createTexture();i.bindTexture(k,dt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<tt;Pt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(st+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return dt}const lt={};lt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(fs),ce(!1),_e(pl),it(i.CULL_FACE),ae(Pi);function it(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function yt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ot(k,st){return d[k]!==st?(i.bindFramebuffer(k,st),d[k]=st,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function bt(k,st){let tt=m,mt=!1;if(k){tt=u.get(st),tt===void 0&&(tt=[],u.set(st,tt));const ut=k.textures;if(tt.length!==ut.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Pt=ut.length;dt<Pt;dt++)tt[dt]=i.COLOR_ATTACHMENT0+dt;tt.length=ut.length,mt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,mt=!0);mt&&i.drawBuffers(tt)}function kt(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const Xt={[Di]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};Xt[pu]=i.MIN,Xt[mu]=i.MAX;const Ut={[gu]:i.ZERO,[_u]:i.ONE,[xu]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[bu]:i.SRC_ALPHA_SATURATE,[yu]:i.DST_COLOR,[Mu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[Eu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Tu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(k,st,tt,mt,ut,dt,Pt,Vt,ht,Dt){if(k===Pi){p===!0&&(yt(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),k!==uu){if(k!==g||Dt!==w){if((S!==Di||b!==Di)&&(i.blendEquation(i.FUNC_ADD),S=Di,b=Di),Dt)switch(k){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",k);break}else switch(k){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",k);break}v=null,M=null,E=null,_=null,y.set(0,0,0),T=0,g=k,w=Dt}return}ut=ut||st,dt=dt||tt,Pt=Pt||mt,(st!==S||ut!==b)&&(i.blendEquationSeparate(Xt[st],Xt[ut]),S=st,b=ut),(tt!==v||mt!==M||dt!==E||Pt!==_)&&(i.blendFuncSeparate(Ut[tt],Ut[mt],Ut[dt],Ut[Pt]),v=tt,M=mt,E=dt,_=Pt),(Vt.equals(y)===!1||ht!==T)&&(i.blendColor(Vt.r,Vt.g,Vt.b,ht),y.copy(Vt),T=ht),g=k,w=!1}function Kt(k,st){k.side===Be?yt(i.CULL_FACE):it(i.CULL_FACE);let tt=k.side===Xe;st&&(tt=!tt),ce(tt),k.blending===us&&k.transparent===!1?ae(Pi):ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const mt=k.stencilWrite;o.setTest(mt),mt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function _e(k){k!==lu?(it(i.CULL_FACE),k!==D&&(k===pl?i.cullFace(i.BACK):k===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),D=k}function Fn(k){k!==z&&(U&&i.lineWidth(k),z=k)}function Le(k,st,tt){k?(it(i.POLYGON_OFFSET_FILL),(P!==st||B!==tt)&&(P=st,B=tt,a.getReversed()&&(st=-st,tt=-tt),i.polygonOffset(st,tt))):yt(i.POLYGON_OFFSET_FILL)}function cn(k){k?it(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function hn(k){k===void 0&&(k=i.TEXTURE0+O-1),L!==k&&(i.activeTexture(k),L=k)}function un(k,st,tt){tt===void 0&&(L===null?tt=i.TEXTURE0+O-1:tt=L);let mt=N[tt];mt===void 0&&(mt={type:void 0,texture:void 0},N[tt]=mt),(mt.type!==k||mt.texture!==st)&&(L!==tt&&(i.activeTexture(tt),L=tt),i.bindTexture(k,st||lt[k]),mt.type=k,mt.texture=st)}function q(){const k=N[L];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function fn(){try{i.compressedTexImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function pe(){try{i.texSubImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function vt(){try{i.texSubImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function Ce(){try{i.compressedTexSubImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function zt(){try{i.texStorage2D(...arguments)}catch(k){te("WebGLState:",k)}}function I(){try{i.texStorage3D(...arguments)}catch(k){te("WebGLState:",k)}}function A(){try{i.texImage2D(...arguments)}catch(k){te("WebGLState:",k)}}function $(){try{i.texImage3D(...arguments)}catch(k){te("WebGLState:",k)}}function ct(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function at(k,st){f[k]!==st&&(i.pixelStorei(k,st),f[k]=st)}function ft(k){V.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),V.copy(k))}function _t(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function et(k,st){let tt=c.get(st);tt===void 0&&(tt=new WeakMap,c.set(st,tt));let mt=tt.get(k);mt===void 0&&(mt=i.getUniformBlockIndex(st,k.name),i.uniformBlockBinding(st,mt,mt),tt.set(k,mt))}function nt(k,st,tt){const ut=c.get(st).get(k);l[ut]!==tt&&(i.bindBufferBase(i.UNIFORM_BUFFER,ut,tt),l[ut]=tt)}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},L=null,N={},d={},l={},u=new WeakMap,m=[],x=null,p=!1,g=null,S=null,v=null,M=null,b=null,E=null,_=null,y=new Rt(0,0,0),T=0,w=!1,C=null,D=null,z=null,P=null,B=null,V.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:yt,bindFramebuffer:Ot,drawBuffers:bt,useProgram:kt,setBlending:ae,setMaterial:Kt,setFlipSided:ce,setCullFace:_e,setLineWidth:Fn,setPolygonOffset:Le,setScissorTest:cn,activeTexture:hn,bindTexture:un,unbindTexture:q,compressedTexImage2D:fn,compressedTexImage3D:de,texImage2D:A,texImage3D:$,pixelStorei:at,getParameter:ct,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:zt,texStorage3D:I,texSubImage2D:pe,texSubImage3D:vt,compressedTexSubImage2D:Ce,compressedTexSubImage3D:It,scissor:ft,viewport:_t,reset:pt}}function xg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,f=new Set;let d;const u=new WeakMap,m=new Set,x=new FinalizationRegistry(I=>m.delete(I));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return p?new OffscreenCanvas(I,A):gs("canvas")}function S(I,A,$){let ct=1;const at=zt(I);if((at.width>$||at.height>$)&&(ct=$/Math.max(at.width,at.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ft=Math.floor(ct*at.width),_t=Math.floor(ct*at.height);d===void 0&&(d=g(ft,_t));const et=A?g(ft,_t):d;return et.width=ft,et.height=_t,et.getContext("2d").drawImage(I,0,0,ft,_t),Nt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+ft+"x"+_t+")."),et}else return"data"in I&&Nt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function v(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,A,$,ct,at,ft=!1){if(I!==null){if(i[I]!==void 0)return i[I];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t;ct&&(_t=t.get("EXT_texture_norm16"),_t||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=A;if(A===i.RED&&($===i.FLOAT&&(et=i.R32F),$===i.HALF_FLOAT&&(et=i.R16F),$===i.UNSIGNED_BYTE&&(et=i.R8),$===i.UNSIGNED_SHORT&&_t&&(et=_t.R16_EXT),$===i.SHORT&&_t&&(et=_t.R16_SNORM_EXT)),A===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.R8UI),$===i.UNSIGNED_SHORT&&(et=i.R16UI),$===i.UNSIGNED_INT&&(et=i.R32UI),$===i.BYTE&&(et=i.R8I),$===i.SHORT&&(et=i.R16I),$===i.INT&&(et=i.R32I)),A===i.RG&&($===i.FLOAT&&(et=i.RG32F),$===i.HALF_FLOAT&&(et=i.RG16F),$===i.UNSIGNED_BYTE&&(et=i.RG8),$===i.UNSIGNED_SHORT&&_t&&(et=_t.RG16_EXT),$===i.SHORT&&_t&&(et=_t.RG16_SNORM_EXT)),A===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.RG8UI),$===i.UNSIGNED_SHORT&&(et=i.RG16UI),$===i.UNSIGNED_INT&&(et=i.RG32UI),$===i.BYTE&&(et=i.RG8I),$===i.SHORT&&(et=i.RG16I),$===i.INT&&(et=i.RG32I)),A===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.RGB8UI),$===i.UNSIGNED_SHORT&&(et=i.RGB16UI),$===i.UNSIGNED_INT&&(et=i.RGB32UI),$===i.BYTE&&(et=i.RGB8I),$===i.SHORT&&(et=i.RGB16I),$===i.INT&&(et=i.RGB32I)),A===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),$===i.UNSIGNED_INT&&(et=i.RGBA32UI),$===i.BYTE&&(et=i.RGBA8I),$===i.SHORT&&(et=i.RGBA16I),$===i.INT&&(et=i.RGBA32I)),A===i.RGB&&($===i.UNSIGNED_SHORT&&_t&&(et=_t.RGB16_EXT),$===i.SHORT&&_t&&(et=_t.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),A===i.RGBA){const nt=ft?js:Zt.getTransfer(at);$===i.FLOAT&&(et=i.RGBA32F),$===i.HALF_FLOAT&&(et=i.RGBA16F),$===i.UNSIGNED_BYTE&&(et=nt===se?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&_t&&(et=_t.RGBA16_EXT),$===i.SHORT&&_t&&(et=_t.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(I,A){let $;return I?A===null||A===An||A===Ii?$=i.DEPTH24_STENCIL8:A===pn?$=i.DEPTH32F_STENCIL8:A===ps&&($=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===An||A===Ii?$=i.DEPTH_COMPONENT24:A===pn?$=i.DEPTH_COMPONENT32F:A===ps&&($=i.DEPTH_COMPONENT16),$}function y(I,A){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ue&&I.minFilter!==qe?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function T(I){const A=new WeakRef(I);n.get(I).__ref=A,m.add(A),x.register(I,A,A)}function w(I){const A=n.get(I).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function C(I){z(I.target)}function D(I){P(I.target)}function z(I){I.removeEventListener("dispose",C),w(I),O(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&f.delete(I)}function P(I){I.removeEventListener("dispose",D),w(I),Y(I)}function B(){for(const I of m){const A=I.deref();A!==void 0&&(A.isRenderTarget===!0?P(A):z(A))}m.clear(),f.clear()}function O(I){const A=n.get(I);if(A.__webglInit===void 0)return;const $=I.source,ct=u.get($);if(ct){const at=ct[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&U(I),Object.keys(ct).length===0&&u.delete($)}n.remove(I)}function U(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const $=I.source,ct=u.get($);delete ct[A.__cacheKey],a.memory.textures--}function Y(I){const A=n.get(I);A.__depthDisposeCallback&&A.__depthDisposeCallback();const $=I.depthTexture;if($&&$.renderTarget===I&&z($),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(A.__webglFramebuffer[at]))for(let ft=0;ft<A.__webglFramebuffer[at].length;ft++)i.deleteFramebuffer(A.__webglFramebuffer[at][ft]);else i.deleteFramebuffer(A.__webglFramebuffer[at]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[at])}else{if(Array.isArray(A.__webglFramebuffer))for(let at=0;at<A.__webglFramebuffer.length;at++)i.deleteFramebuffer(A.__webglFramebuffer[at]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let at=0;at<A.__webglColorRenderbuffer.length;at++)A.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[at]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ct=I.textures;for(let at=0,ft=ct.length;at<ft;at++){const _t=n.get(ct[at]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(ct[at])}n.remove(I)}let F=0;function L(){F=0}function N(){return F}function X(I){F=I}function Z(){const I=F;return I>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function V(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.mipmapsAutoUpdate),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function J(I,A){const $=n.get(I);if(I.isVideoTexture&&Ce(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const ct=I.image;if(ct===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Kt($,I,A);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+A)}function rt(I,A){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Kt($,I,A);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+A)}function lt(I,A){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Kt($,I,A);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+A)}function it(I,A){const $=n.get(I);if(I.version>0&&$.__version!==I.version){ce($,I,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+A)}const yt={[Vs]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},Ot={[Ue]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},bt={[Uu]:i.NEVER,[Nl]:i.ALWAYS,[Fu]:i.LESS,[Ll]:i.LEQUAL,[Ou]:i.EQUAL,[Il]:i.GEQUAL,[zu]:i.GREATER,[Bu]:i.NOTEQUAL};function kt(I,A){if(A.type===pn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===qe||A.magFilter===ma||A.magFilter===Ws||A.magFilter===Tn||A.minFilter===qe||A.minFilter===ma||A.minFilter===Ws||A.minFilter===Tn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,yt[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,yt[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,yt[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ot[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ot[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,bt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ue||A.minFilter!==Ws&&A.minFilter!==Tn||A.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Xt(I,A){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",C),T(A));const ct=A.source;let at=u.get(ct);at===void 0&&(at={},u.set(ct,at));const ft=V(A);if(ft!==I.__cacheKey){at[ft]===void 0&&(at[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),at[ft].usedTimes++;const _t=at[I.__cacheKey];_t!==void 0&&(at[I.__cacheKey].usedTimes--,_t.usedTimes===0&&U(A)),I.__cacheKey=ft,I.__webglTexture=at[ft].texture}return $}function Ut(I,A,$){return Math.floor(Math.floor(I/$)/A)}function ae(I,A,$,ct){const ft=I.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,$,ct,A.data);else{ft.sort((k,st)=>k.start-st.start);let _t=0;for(let k=1;k<ft.length;k++){const st=ft[_t],tt=ft[k],mt=st.start+st.count,ut=Ut(tt.start,A.width,4),dt=Ut(st.start,A.width,4);tt.start<=mt+1&&ut===dt&&Ut(tt.start+tt.count-1,A.width,4)===ut?st.count=Math.max(st.count,tt.start+tt.count-st.start):(++_t,ft[_t]=tt)}ft.length=_t+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let k=0,st=ft.length;k<st;k++){const tt=ft[k],mt=Math.floor(tt.start/4),ut=Math.ceil(tt.count/4),dt=mt%A.width,Pt=Math.floor(mt/A.width),Vt=ut,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,dt,Pt,Vt,ht,$,ct,A.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function Kt(I,A,$){let ct=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ct=i.TEXTURE_3D);const at=Xt(I,A),ft=A.source;e.bindTexture(ct,I.__webglTexture,i.TEXTURE0+$);const _t=n.get(ft);if(ft.version!==_t.__version||at===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ht=Zt.getPrimaries(Zt.workingColorSpace),Dt=A.colorSpace===si?null:Zt.getPrimaries(A.colorSpace),Gt=A.colorSpace===si||ht===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let nt=S(A.image,!1,s.maxTextureSize);nt=It(A,nt);const pt=r.convert(A.format,A.colorSpace),k=r.convert(A.type);let st=E(A.internalFormat,pt,k,A.normalized,A.colorSpace,A.isVideoTexture);kt(ct,A);let tt;const mt=A.mipmaps,ut=A.isVideoTexture!==!0,dt=_t.__version===void 0||at===!0,Pt=ft.dataReady,Vt=y(A,nt);if(A.isDepthTexture)st=_(A.format===ni,A.type),dt&&(ut?e.texStorage2D(i.TEXTURE_2D,1,st,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,st,nt.width,nt.height,0,pt,k,null));else if(A.isDataTexture)if(mt.length>0){ut&&dt&&e.texStorage2D(i.TEXTURE_2D,Vt,st,mt[0].width,mt[0].height);for(let ht=0,Dt=mt.length;ht<Dt;ht++)tt=mt[ht],ut?Pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,tt.width,tt.height,pt,k,tt.data):e.texImage2D(i.TEXTURE_2D,ht,st,tt.width,tt.height,0,pt,k,tt.data);A.generateMipmaps=!1}else ut?(dt&&e.texStorage2D(i.TEXTURE_2D,Vt,st,nt.width,nt.height),Pt&&ae(A,nt,pt,k)):e.texImage2D(i.TEXTURE_2D,0,st,nt.width,nt.height,0,pt,k,nt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,st,mt[0].width,mt[0].height,nt.depth);for(let ht=0,Dt=mt.length;ht<Dt;ht++)if(tt=mt[ht],A.format!==Rn)if(pt!==null)if(ut){if(Pt)if(A.layerUpdates.size>0){const Gt=Hc(tt.width,tt.height,A.format,A.type);for(const St of A.layerUpdates){const re=tt.data.subarray(St*Gt/tt.data.BYTES_PER_ELEMENT,(St+1)*Gt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,St,tt.width,tt.height,1,pt,re)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,tt.width,tt.height,nt.depth,pt,tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,st,tt.width,tt.height,nt.depth,0,tt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,tt.width,tt.height,nt.depth,pt,k,tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,st,tt.width,tt.height,nt.depth,0,pt,k,tt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ut&&dt&&e.texStorage2D(i.TEXTURE_2D,Vt,st,mt[0].width,mt[0].height);for(let ht=0,Dt=mt.length;ht<Dt;ht++)tt=mt[ht],A.format!==Rn?pt!==null?ut?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,tt.width,tt.height,pt,tt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,st,tt.width,tt.height,0,tt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,tt.width,tt.height,pt,k,tt.data):e.texImage2D(i.TEXTURE_2D,ht,st,tt.width,tt.height,0,pt,k,tt.data)}else if(A.isDataArrayTexture)if(ut){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,st,nt.width,nt.height,nt.depth),Pt)if(A.layerUpdates.size>0){const ht=Hc(nt.width,nt.height,A.format,A.type);for(const Dt of A.layerUpdates){const Gt=nt.data.subarray(Dt*ht/nt.data.BYTES_PER_ELEMENT,(Dt+1)*ht/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,nt.width,nt.height,1,pt,k,Gt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,k,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,st,nt.width,nt.height,nt.depth,0,pt,k,nt.data);else if(A.isData3DTexture)ut?(dt&&e.texStorage3D(i.TEXTURE_3D,Vt,st,nt.width,nt.height,nt.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,k,nt.data)):e.texImage3D(i.TEXTURE_3D,0,st,nt.width,nt.height,nt.depth,0,pt,k,nt.data);else if(A.isFramebufferTexture){if(dt)if(ut)e.texStorage2D(i.TEXTURE_2D,Vt,st,nt.width,nt.height);else{let ht=nt.width,Dt=nt.height;for(let Gt=0;Gt<Vt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,st,ht,Dt,0,pt,k,null),ht>>=1,Dt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),nt.parentNode!==ht){ht.appendChild(nt),f.add(A),ht.onpaint=Dt=>{const Gt=Dt.changedElements;for(const St of f)Gt.includes(St.image)&&(St.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const Gt=i.RGBA,St=i.RGBA,re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,St,re,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(mt.length>0){if(ut&&dt){const ht=zt(mt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,st,ht.width,ht.height)}for(let ht=0,Dt=mt.length;ht<Dt;ht++)tt=mt[ht],ut?Pt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,pt,k,tt):e.texImage2D(i.TEXTURE_2D,ht,st,pt,k,tt);A.generateMipmaps=!1}else if(ut){if(dt){const ht=zt(nt);e.texStorage2D(i.TEXTURE_2D,Vt,st,ht.width,ht.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,k,nt)}else e.texImage2D(i.TEXTURE_2D,0,st,pt,k,nt);v(A)&&A.mipmapsAutoUpdate===!0&&M(ct),_t.__version=ft.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ce(I,A,$){if(A.image.length!==6)return;const ct=Xt(I,A),at=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const ft=n.get(at);if(at.version!==ft.__version||ct===!0){e.activeTexture(i.TEXTURE0+$);const _t=Zt.getPrimaries(Zt.workingColorSpace),et=A.colorSpace===si?null:Zt.getPrimaries(A.colorSpace),nt=A.colorSpace===si||_t===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,st=[];for(let St=0;St<6;St++)!pt&&!k?st[St]=S(A.image[St],!0,s.maxCubemapSize):st[St]=k?A.image[St].image:A.image[St],st[St]=It(A,st[St]);const tt=st[0],mt=r.convert(A.format,A.colorSpace),ut=r.convert(A.type);let dt=E(A.internalFormat,mt,ut,A.normalized,A.colorSpace);const Pt=A.isVideoTexture!==!0,Vt=ft.__version===void 0||ct===!0,ht=at.dataReady;let Dt=y(A,tt);kt(i.TEXTURE_CUBE_MAP,A);let Gt;if(A.isDepthTexture){if(dt=_(A.format===ni,A.type),Vt)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,tt.width,tt.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,tt.width,tt.height,0,mt,ut,null)}else if(pt){Pt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,dt,tt.width,tt.height);for(let St=0;St<6;St++){Gt=st[St].mipmaps;for(let re=0;re<Gt.length;re++){const Ie=Gt[re];A.format!==Rn?mt!==null?Pt?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re,0,0,Ie.width,Ie.height,mt,Ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re,dt,Ie.width,Ie.height,0,Ie.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re,0,0,Ie.width,Ie.height,mt,ut,Ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re,dt,Ie.width,Ie.height,0,mt,ut,Ie.data)}}}else{if(Gt=A.mipmaps,Pt&&Vt){Gt.length>0&&Dt++;const St=zt(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,dt,St.width,St.height)}for(let St=0;St<6;St++)if(k){Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,st[St].width,st[St].height,mt,ut,st[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,st[St].width,st[St].height,0,mt,ut,st[St].data);for(let re=0;re<Gt.length;re++){const gi=Gt[re].image[St].image;Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re+1,0,0,gi.width,gi.height,mt,ut,gi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re+1,dt,gi.width,gi.height,0,mt,ut,gi.data)}}else{Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,mt,ut,st[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,dt,mt,ut,st[St]);for(let re=0;re<Gt.length;re++){const Ie=Gt[re];Pt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re+1,0,0,mt,ut,Ie.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,re+1,dt,mt,ut,Ie.image[St])}}}v(A)&&A.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ft.__version=at.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function _e(I,A,$,ct,at,ft){const _t=r.convert($.format,$.colorSpace),et=r.convert($.type),nt=E($.internalFormat,_t,et,$.normalized,$.colorSpace),pt=n.get(A),k=n.get($);if(k.__renderTarget=A,!pt.__hasExternalTextures){const st=Math.max(1,A.width>>ft),tt=Math.max(1,A.height>>ft);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,ft,nt,st,tt,A.depth,0,_t,et,null):e.texImage2D(at,ft,nt,st,tt,0,_t,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,at,k.__webglTexture,0,pe(A)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,at,k.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Fn(I,A,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const ct=A.depthTexture,at=ct&&ct.isDepthTexture?ct.type:null,ft=_(A.stencilBuffer,at),_t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(A),ft,A.width,A.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(A),ft,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,I)}else{const ct=A.textures;for(let at=0;at<ct.length;at++){const ft=ct[at],_t=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),nt=E(ft.internalFormat,_t,et,ft.normalized,ft.colorSpace);vt(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(A),nt,A.width,A.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(A),nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,nt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(I,A,$){const ct=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(A.depthTexture);at.__renderTarget=A;const ft=ct?A.depthTexture.image[0]:A.depthTexture.image;(!at.__webglTexture||ft.width!==A.width||ft.height!==A.height)&&(ft.width=A.width,ft.height=A.height,A.depthTexture.needsUpdate=!0),ct?it(A.depthTexture,0):J(A.depthTexture,0);const _t=at.__webglTexture,et=pe(A),nt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,pt=A.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ei)vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,nt,_t,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,pt,nt,_t,0);else if(A.depthTexture.format===ni)vt(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,nt,_t,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,pt,nt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function cn(I){const A=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ct){const at=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ct.removeEventListener("dispose",at)};ct.addEventListener("dispose",at),A.__depthDisposeCallback=at}A.__boundDepthTexture=ct}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if($)for(let ct=0;ct<6;ct++)Le(A.__webglFramebuffer[ct],I,ct);else I.texture.mipmaps.length>0?Le(A.__webglFramebuffer[0],I,0):Le(A.__webglFramebuffer,I,0);else if($){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]===void 0)A.__webglDepthbuffer[ct]=i.createRenderbuffer(),Fn(A.__webglDepthbuffer[ct],I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ft)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Fn(A.__webglDepthbuffer,I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,ft)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function hn(I,A,$){const ct=n.get(I);A!==void 0&&_e(ct.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&cn(I)}function un(I){const A=I.texture,$=n.get(I),ct=n.get(A);I.addEventListener("dispose",D),T(I);const at=I.textures,ft=I.isWebGLCubeRenderTarget===!0,_t=at.length>1;if(_t||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=A.version,a.memory.textures++),ft){$.__webglFramebuffer=[];for(let et=0;et<6;et++)if(A.mipmaps.length>0){$.__webglFramebuffer[et]=[];for(let nt=0;nt<A.mipmaps.length;nt++)$.__webglFramebuffer[et][nt]=i.createFramebuffer()}else $.__webglFramebuffer[et]=i.createFramebuffer()}else{if(A.mipmaps.length>0){$.__webglFramebuffer=[];for(let et=0;et<A.mipmaps.length;et++)$.__webglFramebuffer[et]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(_t)for(let et=0,nt=at.length;et<nt;et++){const pt=n.get(at[et]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&vt(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let et=0;et<at.length;et++){const nt=at[et];$.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[et]);const pt=r.convert(nt.format,nt.colorSpace),k=r.convert(nt.type),st=E(nt.internalFormat,pt,k,nt.normalized,nt.colorSpace,I.isXRRenderTarget===!0),tt=pe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,st,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,$.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Fn($.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),kt(i.TEXTURE_CUBE_MAP,A);for(let et=0;et<6;et++)if(A.mipmaps.length>0)for(let nt=0;nt<A.mipmaps.length;nt++)_e($.__webglFramebuffer[et][nt],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else _e($.__webglFramebuffer[et],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);v(A)?M(i.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let et=0,nt=at.length;et<nt;et++){const pt=at[et],k=n.get(pt);let st=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(st=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,k.__webglTexture),kt(st,pt),_e($.__webglFramebuffer,I,pt,i.COLOR_ATTACHMENT0+et,st,0),v(pt)&&M(st)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,ct.__webglTexture),kt(et,A),A.mipmaps.length>0)for(let nt=0;nt<A.mipmaps.length;nt++)_e($.__webglFramebuffer[nt],I,A,i.COLOR_ATTACHMENT0,et,nt);else _e($.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,et,0);v(A)?M(et):A.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&cn(I)}function q(I){const A=I.textures;for(let $=0,ct=A.length;$<ct;$++){const at=A[$];if(v(at)&&at.mipmapsAutoUpdate===!0){const ft=b(I),_t=n.get(at).__webglTexture;e.bindTexture(ft,_t),M(ft),e.unbindTexture()}}}const fn=[];function de(I){if(I.samples>0){if(vt(I)===!1){const A=I.textures,$=I.width,ct=I.height;let at=i.COLOR_BUFFER_BIT;const ft=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(I),et=A.length>1;if(et)for(let pt=0;pt<A.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let pt=0;pt<A.length;pt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);const k=n.get(A[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,$,ct,0,0,$,ct,at,i.NEAREST),l===!0&&(fn.length=0,fn.push(i.COLOR_ATTACHMENT0+pt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&fn.push(ft),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let pt=0;pt<A.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[pt]);const k=n.get(A[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function pe(I){return Math.min(s.maxSamples,I.samples)}function vt(I){const A=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ce(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function It(I,A){const $=I.colorSpace,ct=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Qs&&$!==si&&(Zt.getTransfer($)===se?(ct!==Rn||at!==Je)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",$)),A}function zt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=L,this.getTextureUnits=N,this.setTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=rt,this.setTexture3D=lt,this.setTextureCube=it,this.rebindTextures=hn,this.setupRenderTarget=un,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=cn,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=vt,this.dispose=B}function vg(i,t){function e(n,s=si){let r;const a=Zt.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===_a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tl)return i.BYTE;if(n===Al)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Dl)return i.RGB;if(n===Rn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Zs)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===ba||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===Ks||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pa)return r.COMPRESSED_R11_EAC;if(n===Da)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===La)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===Za||n===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===Ja||n===$s||n===Qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:Mg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends ri{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,m=null;const x=typeof XRWebGLBinding<"u",p=new yg,g={},S=e.getContextAttributes();let v=null,M=null;const b=[],E=[],_=new Lt;let y=null,T=null;const w=new En;w.viewport=new ue;const C=new En;C.viewport=new ue;const D=[w,C],z=new dd;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=b[V];return J===void 0&&(J=new co,b[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=b[V];return J===void 0&&(J=new co,b[V]=J),J.getGripSpace()},this.getHand=function(V){let J=b[V];return J===void 0&&(J=new co,b[V]=J),J.getHandSpace()};function O(V){const J=E.indexOf(V.inputSource);if(J===-1)return;const rt=b[J];rt!==void 0&&(rt.update(V.inputSource,V.frame,c||a),rt.dispatchEvent({type:V.type,data:V.inputSource}))}function U(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",Y);for(let V=0;V<b.length;V++){const J=E[V];J!==null&&(E[V]=null,b[V].disconnect(J))}P=null,B=null,p.reset();for(const V in g)delete g[V];if(t.setRenderTarget(v),u=null,d=null,f=null,s=null,M=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),T!==null){const V=T.camera;V.fov=T.fov,V.zoom=T.zoom,V.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",U),s.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,lt=null,it=null;S.depth&&(it=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=S.stencil?ni:ei,lt=S.stencil?Ii:An);const yt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Cn(d.textureWidth,d.textureHeight,{format:Rn,type:Je,depthTexture:new Yi(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Cn(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(V){for(let J=0;J<V.removed.length;J++){const rt=V.removed[J],lt=E.indexOf(rt);lt>=0&&(E[lt]=null,b[lt].disconnect(rt))}for(let J=0;J<V.added.length;J++){const rt=V.added[J];let lt=E.indexOf(rt);if(lt===-1){for(let yt=0;yt<b.length;yt++)if(yt>=E.length){E.push(rt),lt=yt;break}else if(E[yt]===null){E[yt]=rt,lt=yt;break}if(lt===-1)break}const it=b[lt];it&&it.connect(rt)}}function F(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,rt=V.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),z.near=C.near=w.near=J,z.far=C.far=w.far=rt,(P!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,B=z.far),z.layers.mask=V.layers.mask|6,w.layers.mask=z.layers.mask&-5,C.layers.mask=z.layers.mask&-3;const lt=V.parent,it=z.cameras;F(z,lt);for(let yt=0;yt<it.length;yt++)F(it[yt],lt);z.projectionMatrix.copy(w.projectionMatrix),z.projectionMatrixInverse.copy(w.projectionMatrixInverse),T===null&&V.isPerspectiveCamera&&(T={camera:V,fov:V.fov,zoom:V.zoom}),L(V,z,lt)};function L(V,J,rt){rt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(rt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=xs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(V){return g[V]};let N=null;function X(V,J){if(h=J.getViewerPose(c||a),m=J,h!==null){const rt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let lt=!1;rt.length!==z.cameras.length&&(z.cameras.length=0,lt=!0);for(let bt=0;bt<rt.length;bt++){const kt=rt[bt];let Xt=null;if(u!==null)Xt=u.getViewport(kt);else{const ae=f.getViewSubImage(d,kt);Xt=ae.viewport,bt===0&&(t.setRenderTargetTextures(M,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(M))}let Ut=D[bt];Ut===void 0&&(Ut=new En,Ut.layers.enable(bt),Ut.viewport=new ue,D[bt]=Ut),Ut.matrix.fromArray(kt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(kt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),bt===0&&(z.matrix.copy(Ut.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),lt===!0&&z.cameras.push(Ut)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const bt=f.getDepthInformation(rt[0]);bt&&bt.isValid&&bt.texture&&p.init(bt,s.renderState)}if(it&&it.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let bt=0;bt<rt.length;bt++){const kt=rt[bt].camera;if(kt){let Xt=g[kt];Xt||(Xt=new vc,g[kt]=Xt);const Ut=f.getCameraImage(kt);Xt.sourceTexture=Ut}}}}for(let rt=0;rt<b.length;rt++){const lt=E[rt],it=b[rt];lt!==null&&it!==void 0&&it.update(lt,J,c||a)}N&&N(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Z=new Vc;Z.setAnimationLoop(X),this.setAnimationLoop=function(V){N=V},this.dispose=function(){}}}const bg=new Qt,Mh=new Ft;Mh.set(-1,0,0,0,1,0,0,0,1);function wg(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Rc(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,S,v,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&u(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,S,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Xe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Xe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=t.get(g),v=S.envMap,M=S.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Mh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,S,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,S){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const S=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,t,e,n){let s={},r={};function a(S,v){const M=v.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,v){let M=s[S.id];M===void 0&&(m(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",p));const b=v.program;n.updateUBOMapping(S,b);const E=t.render.frame;r[S.id]!==E&&(c(S),r[S.id]=E)}function l(S){const v=i.createBuffer(),M=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(S){const v=s[S.id],M=S.uniforms,b=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,_=M.length;E<_;E++){const y=M[E];if(Array.isArray(y))for(let T=0,w=y.length;T<w;T++)h(y[T],E,T,b);else h(y,E,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,v,M,b){if(d(S,v,M,b)===!0){const E=S.__offset,_=S.value;if(Array.isArray(_)){let y=0;for(let T=0;T<_.length;T++){const w=_[T],C=x(w,!0);f(w,S.__data,y),y+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,S.__data)}}function f(S,v,M){typeof S=="number"||typeof S=="boolean"?v[M]=S:S.isMatrix3?(v[M]=S.elements[0],v[M+1]=S.elements[1],v[M+2]=S.elements[2],v[M+3]=0,v[M+4]=S.elements[3],v[M+5]=S.elements[4],v[M+6]=S.elements[5],v[M+7]=0,v[M+8]=S.elements[6],v[M+9]=S.elements[7],v[M+10]=S.elements[8],v[M+11]=0):ArrayBuffer.isView(S)?v.set(S.subarray(0,v.length-M),M):S.toArray(v,M)}function d(S,v,M,b){const E=S.value,_=v+"_"+M;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);const y=b[_];let T=!1;for(let w=0;w<E.length;w++)u(E[w],y,w)===!0&&(T=!0);return T}return u(E,b,_)}function u(S,v,M){if(v[M]===void 0)return typeof S=="number"||typeof S=="boolean"?v[M]=S:ArrayBuffer.isView(S)?v[M]=S.slice():v[M]=S.clone(),!0;{const b=v[M];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return v[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(b.equals(S)===!1)return b.copy(S),!0}}return!1}function m(S){const v=S.uniforms;let M=0;const b=16;for(let _=0,y=v.length;_<y;_++){const T=Array.isArray(v[_])?v[_]:[v[_]];for(let w=0,C=T.length;w<C;w++){const D=T[w],z=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(v[_])||Array.isArray(D.value);let B=M;for(let U=0,Y=z.length;U<Y;U++){const F=z[U],L=x(F,P),N=M%b,X=N%L.boundary,Z=N+X;M+=X,Z!==0&&b-Z<L.storage&&(M+=b-Z),U===0&&(B=M),M+=L.storage}const O=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new O((M-B)/Float32Array.BYTES_PER_ELEMENT),D.__offset=B}}const E=M%b;return E>0&&(M+=b-E),S.__size=M,S.__cache={},this}function x(S,v){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",S),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(S){const v=S.target;v.removeEventListener("dispose",p),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}const Ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function Rg(){return Nn===null&&(Nn=new vr(Ag,16,16,ii,mn),Nn.name="DFG_LUT",Nn.minFilter=qe,Nn.magFilter=qe,Nn.wrapS=dn,Nn.wrapT=dn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class Cg{constructor(t={}){const{canvas:e=Hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=u,p=new Set([ya,Sa,Ma]),g=new Set([Je,An,ps,Ii,_a,xa]),S=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const _=[],y=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1,D=null,z=null,P=null,B=null;this._outputColorSpace=ye;let O=0,U=0,Y=null,F=-1,L=null;const N=new ue,X=new ue;let Z=null;const V=new Rt(0);let J=0,rt=e.width,lt=e.height,it=1,yt=null,Ot=null;const bt=new ue(0,0,rt,lt),kt=new ue(0,0,rt,lt);let Xt=!1;const Ut=new Ts,ae=new wo;let Kt=!1,ce=!1;const _e=new Qt,Fn=new W,Le=new ue,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let hn=!1;function un(){return Y===null?it:1}let q=n;function fn(R,G){return e.getContext(R,G)}let de,pe,vt,Ce,It,zt,I,A,$,ct,at,ft,_t,et,nt,pt,k,st,tt,mt,ut,dt,Pt;try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qn}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",St,!1),q===null){const G="webgl2";if(q=fn(G,R),q===null)throw fn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(R){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),te("WebGLRenderer: "+R.message),R}function Vt(){de=new Lm(q),de.init(),ut=new vg(q,de),pe=new Sm(q,de,t,ut),vt=new _g(q,de),pe.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),z=q.createFramebuffer(),P=q.createFramebuffer(),B=q.createFramebuffer(),Ce=new Um(q),It=new ig,zt=new xg(q,de,vt,It,pe,ut,Ce),I=new Dm(w),A=new _d(q),dt=new vm(q,A),$=new Im(q,A,Ce,dt),ct=new Om(q,$,A,dt,Ce),st=new Fm(q,pe,zt),nt=new ym(It),at=new ng(w,I,de,pe,dt,nt),ft=new wg(w,It),_t=new rg,et=new ug(de),k=new xm(w,I,vt,ct,m,l),pt=new gg(w,ct,pe),Pt=new Tg(q,Ce,pe,vt),tt=new Mm(q,de,Ce),mt=new Nm(q,de,Ce),Ce.programs=at.programs,w.capabilities=pe,w.extensions=de,w.properties=It,w.renderLists=_t,w.shadowMap=pt,w.state=vt,w.info=Ce}x!==Je&&(T=new Bm(x,e.width,e.height,o,s,r));const ht=new Eg(w,q);this.xr=ht,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=de.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=de.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(R){R!==void 0&&(it=R,this.setSize(rt,lt,!1))},this.getSize=function(R){return R.set(rt,lt)},this.setSize=function(R,G,j=!0){if(ht.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=R,lt=G,e.width=Math.floor(R*it),e.height=Math.floor(G*it),j===!0&&(e.style.width=R+"px",e.style.height=G+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(rt*it,lt*it).floor()},this.setDrawingBufferSize=function(R,G,j){rt=R,lt=G,it=j,e.width=Math.floor(R*j),e.height=Math.floor(G*j),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(x===Je){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(bt)},this.setViewport=function(R,G,j,K){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,G,j,K),vt.viewport(N.copy(bt).multiplyScalar(un()).round())},this.getScissor=function(R){return R.copy(kt)},this.setScissor=function(R,G,j,K){R.isVector4?kt.set(R.x,R.y,R.z,R.w):kt.set(R,G,j,K),vt.scissor(X.copy(kt).multiplyScalar(un()).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(R){vt.setScissorTest(Xt=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){Ot=R},this.getClearColor=function(R){return R.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,j=!0){let K=0;if(R){let Q=!1;if(Y!==null){const xt=Y.texture.format;Q=p.has(xt)}if(Q){const xt=Y.texture.type,wt=g.has(xt),gt=k.getClearColor(),Et=k.getClearAlpha(),Ct=gt.r,Bt=gt.g,qt=gt.b;wt?(S[0]=Ct,S[1]=Bt,S[2]=qt,S[3]=Et,q.clearBufferuiv(q.COLOR,0,S)):(v[0]=Ct,v[1]=Bt,v[2]=qt,v[3]=Et,q.clearBufferiv(q.COLOR,0,v))}else K|=q.COLOR_BUFFER_BIT}G&&(K|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(K|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&q.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),k.dispose(),_t.dispose(),et.dispose(),zt.dispose(),It.dispose(),I.dispose(),ct.dispose(),$.dispose(),dt.dispose(),Pt.dispose(),at.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Qh),ht.removeEventListener("sessionend",jh),Ai.stop()};function Dt(R){R.preventDefault(),Ol("WebGLRenderer: Context Lost."),C=!0}function Gt(){Ol("WebGLRenderer: Context Restored."),C=!1;const R=Ce.autoReset,G=pt.enabled,j=pt.autoUpdate,K=pt.needsUpdate,Q=pt.type;Vt(),Ce.autoReset=R,pt.enabled=G,pt.autoUpdate=j,pt.needsUpdate=K,pt.type=Q}function St(R){te("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function re(R){const G=R.target;G.removeEventListener("dispose",re),Ie(G)}function Ie(R){gi(R),It.remove(R)}function gi(R){const G=It.get(R).programs;G!==void 0&&(G.forEach(function(j){at.releaseProgram(j)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,j,K,Q,xt){G===null&&(G=cn);const wt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,gt=Sx(R,G,j,K,Q);vt.setMaterial(K,wt);let Et=j.index,Ct=1;if(K.wireframe===!0){if(Et=$.getWireframeAttribute(j),Et===void 0)return;Ct=2}const Bt=j.drawRange,qt=j.attributes.position;let Tt=Bt.start*Ct,Yt=(Bt.start+Bt.count)*Ct;xt!==null&&(Tt=Math.max(Tt,xt.start*Ct),Yt=Math.min(Yt,(xt.start+xt.count)*Ct)),Et!==null?(Tt=Math.max(Tt,0),Yt=Math.min(Yt,Et.count)):qt!=null&&(Tt=Math.max(Tt,0),Yt=Math.min(Yt,qt.count));const Se=Yt-Tt;if(Se<0||Se===1/0)return;dt.setup(Q,K,gt,j,Et);let he,oe=tt;if(Et!==null&&(he=A.get(Et),oe=mt,oe.setIndex(he)),Q.isMesh)K.wireframe===!0?(vt.setLineWidth(K.wireframeLinewidth*un()),oe.setMode(q.LINES)):oe.setMode(q.TRIANGLES);else if(Q.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),vt.setLineWidth(Ve*un()),Q.isLineSegments?oe.setMode(q.LINES):Q.isLineLoop?oe.setMode(q.LINE_LOOP):oe.setMode(q.LINE_STRIP)}else Q.isPoints?oe.setMode(q.POINTS):Q.isSprite&&oe.setMode(q.TRIANGLES);if(Q.isBatchedMesh)if(de.get("WEBGL_multi_draw"))oe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ve=Q._multiDrawStarts,At=Q._multiDrawCounts,Ze=Q._multiDrawCount,ie=Et?A.get(Et).bytesPerElement:1,Ri=It.get(K).currentProgram.getUniforms();for(let We=0;We<Ze;We++)Ri.setValue(q,"_gl_DrawID",We),oe.render(Ve[We]/ie,At[We])}else if(Q.isInstancedMesh)oe.renderInstances(Tt,Se,Q.count);else if(j.isInstancedBufferGeometry){const Ve=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,At=Math.min(j.instanceCount,Ve);oe.renderInstances(Tt,Se,At)}else oe.render(Tt,Se)};function Jh(R,G,j,K){D!==null&&R.isNodeMaterial&&D.setObject(K,R),Kt===!0&&nt.setState(R,j,!1),R.transparent===!0&&R.side===Be&&R.forceSinglePass===!1?(R.side=Xe,R.needsUpdate=!0,Hs(R,G,K),R.side=ti,R.needsUpdate=!0,Hs(R,G,K),R.side=Be):Hs(R,G,K)}this.compile=function(R,G,j=null){j===null&&(j=R),D!==null&&D.renderStart(R,G,j),E=et.get(j),E.init(G),y.push(E),j.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),R!==j&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(E.pushLight(Q),Q.castShadow&&E.pushShadow(Q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),ce=this.localClippingEnabled,Kt=nt.init(this.clippingPlanes,ce),Kt===!0&&nt.setGlobalState(this.clippingPlanes,G),D!==null&&pt.render(E.state.shadowsArray,j,G);const K=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const xt=Q.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const gt=xt[wt];Jh(gt,j,G,Q),K.add(gt)}else Jh(xt,j,G,Q),K.add(xt)}),E=y.pop(),D!==null&&D.renderEnd(),K},this.compileAsync=function(R,G,j=null){const K=this.compile(R,G,j);return new Promise(Q=>{function xt(){if(K.forEach(function(wt){const Et=It.get(wt).currentProgram;(Et===void 0||Et.isReady())&&K.delete(wt)}),K.size===0){Q(R);return}setTimeout(xt,10)}de.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let fl=null;function vx(R){fl&&fl(R)}function Qh(){Ai.stop()}function jh(){Ai.start()}const Ai=new Vc;Ai.setAnimationLoop(vx),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){fl=R,ht.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ht.addEventListener("sessionstart",Qh),ht.addEventListener("sessionend",jh),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(R,G);const j=ht.enabled===!0&&ht.isPresenting===!0,K=T!==null&&(Y===null||j)&&T.begin(w,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(G),G=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,G,Y),E=et.get(R,y.length),E.init(G),E.state.textureUnits=zt.getTextureUnits(),y.push(E),_e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?ae.setFromArrayCamera(G):Ut.setFromProjectionMatrix(_e,gn,G.reversedDepth),ce=this.localClippingEnabled,Kt=nt.init(this.clippingPlanes,ce),b=_t.get(R,_.length),b.init(),_.push(b),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&dl(wt,G,-1/0,w.sortObjects)}dl(R,G,0,w.sortObjects),b.finish(),D!==null&&D.updateLights(E.state.lightsArray),w.sortObjects===!0&&b.sort(yt,Ot),hn=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,hn&&k.addToRenderList(b,R),this.info.autoReset===!0&&this.info.reset(),Kt===!0&&nt.beginShadows();const Q=E.state.shadowsArray;if(pt.render(Q,R,G),Kt===!0&&nt.endShadows(),(K&&T.hasRenderPass())===!1){const wt=b.opaque,gt=b.transmissive;if(E.setupLights(),G.isArrayCamera){const Et=G.cameras;if(gt.length>0)for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const qt=Et[Ct];eu(wt,gt,R,qt)}hn&&k.render(R);for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const qt=Et[Ct];tu(b,R,qt,qt.viewport)}}else gt.length>0&&eu(wt,gt,R,G),hn&&k.render(R),tu(b,R,G)}Y!==null&&U===0&&(zt.updateMultisampleRenderTarget(Y),zt.updateRenderTargetMipmap(Y)),K&&T.end(w),R.isScene===!0&&R.onAfterRender(w,R,G),dt.resetDefaultState(),F=-1,L=null,y.pop(),y.length>0?(E=y[y.length-1],zt.setTextureUnits(E.state.textureUnits),Kt===!0&&nt.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,D!==null&&D.renderEnd()};function dl(R,G,j,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){const wt=G.isArrayCamera?ae:Ut;if(!R.frustumCulled||R.intersectsFrustum(wt)){K&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_e);const gt=ct.update(R),Et=R.material;Et.visible&&b.push(R,gt,Et,j,Le.z,null,G)}}else if(R.isMesh||R.isLine||R.isPoints){const wt=G.isArrayCamera?ae:Ut;if(!R.frustumCulled||R.intersectsFrustum(wt)){const gt=ct.update(R),Et=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Le.copy(gt.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(_e)),Array.isArray(Et)){const Ct=gt.groups;for(let Bt=0,qt=Ct.length;Bt<qt;Bt++){const Tt=Ct[Bt],Yt=Et[Tt.materialIndex];Yt&&Yt.visible&&b.push(R,gt,Yt,j,Le.z,Tt,G)}}else Et.visible&&b.push(R,gt,Et,j,Le.z,null,G)}}}const xt=R.children;for(let wt=0,gt=xt.length;wt<gt;wt++)dl(xt[wt],G,j,K)}function tu(R,G,j,K){const{opaque:Q,transmissive:xt,transparent:wt}=R;E.setupLightsView(j),Kt===!0&&nt.setGlobalState(w.clippingPlanes,j),K&&vt.viewport(N.copy(K)),Q.length>0&&ta(Q,G,j),xt.length>0&&ta(xt,G,j),wt.length>0&&ta(wt,G,j),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function eu(R,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[K.id]===void 0){const Tt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[K.id]=new Cn(1,1,{generateMipmaps:!0,type:Tt?mn:Je,minFilter:Tn,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const xt=E.state.transmissionRenderTarget[K.id],wt=K.viewport||N;xt.setSize(wt.z*w.transmissionResolutionScale,wt.w*w.transmissionResolutionScale);const gt=w.getRenderTarget(),Et=w.getActiveCubeFace(),Ct=w.getActiveMipmapLevel();w.setRenderTarget(xt),w.getClearColor(V),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),hn&&k.render(j);const Bt=w.toneMapping;w.toneMapping=Bn;const qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),E.setupLightsView(K),Kt===!0&&nt.setGlobalState(w.clippingPlanes,K),ta(R,j,K),zt.updateMultisampleRenderTarget(xt),zt.updateRenderTargetMipmap(xt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Yt=0,Se=G.length;Yt<Se;Yt++){const he=G[Yt],{object:oe,geometry:Ve,material:At,group:Ze}=he;if(At.side===Be&&oe.layers.test(K.layers)){const ie=At.side;At.side=Xe,At.needsUpdate=!0,nu(oe,j,K,Ve,At,Ze),At.side=ie,At.needsUpdate=!0,Tt=!0}}Tt===!0&&(zt.updateMultisampleRenderTarget(xt),zt.updateRenderTargetMipmap(xt))}w.setRenderTarget(gt,Et,Ct),w.setClearColor(V,J),qt!==void 0&&(K.viewport=qt),w.toneMapping=Bt}function ta(R,G,j){const K=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,xt=R.length;Q<xt;Q++){const wt=R[Q],{object:gt,geometry:Et,group:Ct}=wt;let Bt=wt.material;Bt.allowOverride===!0&&K!==null&&(Bt=K),gt.layers.test(j.layers)&&nu(gt,G,j,Et,Bt,Ct)}}function nu(R,G,j,K,Q,xt){D!==null&&Q.isNodeMaterial&&D.setObject(R,Q),R.onBeforeRender(w,G,j,K,Q,xt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,G,j,K,R,xt),Q.transparent===!0&&Q.side===Be&&Q.forceSinglePass===!1?(Q.side=Xe,Q.needsUpdate=!0,w.renderBufferDirect(j,G,K,Q,R,xt),Q.side=ti,Q.needsUpdate=!0,w.renderBufferDirect(j,G,K,Q,R,xt),Q.side=Be):w.renderBufferDirect(j,G,K,Q,R,xt),R.onAfterRender(w,G,j,K,Q,xt)}function iu(R){let G=0;for(const j of R)j.texture!==null&&G++;return G}function Hs(R,G,j){G.isScene!==!0&&(G=cn);const K=It.get(R),Q=E.state.lights,xt=E.state.shadowsArray,wt=Q.state.version,gt=at.getParameters(R,Q.state,xt,G,j,E.state.lightProbeGridArray),Et=at.getProgramCacheKey(gt);let Ct=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;const Bt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=I.get(R.envMap||K.environment,Bt),K.envMapRotation=K.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ct===void 0&&(R.addEventListener("dispose",re),Ct=new Map,K.programs=Ct,K.programVariants=new Map);let qt=Ct.get(Et);if(qt!==void 0){if(K.currentProgram===qt&&K.lightsStateVersion===wt)return ru(R,gt),qt}else gt.uniforms=at.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,j,gt),R.onBeforeCompile(gt,w),qt=at.acquireProgram(gt,Et),Ct.set(Et,qt),K.uniforms=gt.uniforms;const Tt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),ru(R,gt),K.needsLights=Ex(R),K.lightsStateVersion=wt,K.needsLights&&(Tt.ambientLightColor.value=Q.state.ambient,Tt.lightProbe.value=Q.state.probe,Tt.sunLights.value=Q.state.sun,Tt.sunLightShadows.value=Q.state.sunShadow,Tt.directionalLights.value=Q.state.directional,Tt.directionalLightShadows.value=Q.state.directionalShadow,Tt.spotLights.value=Q.state.spot,Tt.spotLightShadows.value=Q.state.spotShadow,Tt.rectAreaLights.value=Q.state.rectArea,Tt.ltc_1.value=Q.state.rectAreaLTC1,Tt.ltc_2.value=Q.state.rectAreaLTC2,Tt.pointLights.value=Q.state.point,Tt.pointLightShadows.value=Q.state.pointShadow,Tt.hemisphereLights.value=Q.state.hemi,Tt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Tt.sunShadowCascade.value=Q.state.sunShadowCascade,Tt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Tt.spotLightMatrix.value=Q.state.spotLightMatrix,Tt.spotLightMap.value=Q.state.spotLightMap,Tt.pointShadowMatrix.value=Q.state.pointShadowMatrix),K.numLightProbeGrids=iu(E.state.lightProbeGridArray),K.currentProgram=qt,K.uniformsList=null,qt}function Mx(R,G,j,K,Q){const xt=It.get(R),wt=xt.currentProgram.id+","+K+","+Q;let gt=xt.programVariants.get(wt);return gt===void 0?(gt=Hs(R,G,j),xt.programVariants.set(wt,gt)):(xt.currentProgram=gt,xt.uniformsList=null,xt.outputColorSpace=K,xt.toneMapping=Q),gt}function su(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Ur.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function ru(R,G){const j=It.get(R);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Sx(R,G,j,K,Q){G.isScene!==!0&&(G=cn),zt.resetTextureUnits();const xt=G.fog,wt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,gt=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Zt.workingColorSpace,Et=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ct=I.get(K.envMap||wt,Et),Bt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Tt=!!j.morphAttributes.position,Yt=!!j.morphAttributes.normal,Se=!!j.morphAttributes.color;let he=Bn;K.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(he=w.toneMapping);const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ve=oe!==void 0?oe.length:0,At=It.get(K),Ze=E.state.lights;if(Kt===!0&&(ce===!0||R!==L)){const xe=R===L&&K.id===F;nt.setState(K,R,xe)}let ie=!1,Ri=!1;K.version===At.__version?At.needsLights&&At.lightsStateVersion!==Ze.state.version||Q.isBatchedMesh&&At.batching===!1||!Q.isBatchedMesh&&At.batching===!0||Q.isBatchedMesh&&At.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&At.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&At.instancing===!1||!Q.isInstancedMesh&&At.instancing===!0||Q.isSkinnedMesh&&At.skinning===!1||!Q.isSkinnedMesh&&At.skinning===!0||Q.isInstancedMesh&&At.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&At.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&At.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&At.instancingMorph===!1&&Q.morphTexture!==null||At.envMap!==Ct||K.fog===!0&&At.fog!==xt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==nt.numPlanes||At.numIntersection!==nt.numIntersection)||At.vertexAlphas!==Bt||At.vertexTangents!==qt||At.morphTargets!==Tt||At.morphNormals!==Yt||At.morphColors!==Se||At.morphTargetsCount!==Ve||At.numLightProbeGrids!==iu(E.state.lightProbeGridArray)?ie=!0:(At.outputColorSpace!==gt||At.toneMapping!==he)&&(Ri=!0):(ie=!0,At.__version=K.version);let We=At.currentProgram;(ie===!0||Ri===!0)&&(We=Ri===!0?Mx(K,G,Q,gt,he):Hs(K,G,Q),D&&K.isNodeMaterial&&D.onUpdateProgram(K,We,At));let ea=!1,_i=!1,Ci=!1;const jt=We.getUniforms(),ze=At.uniforms;if(vt.useProgram(We.program)&&(ea=!0,_i=!0,Ci=!0),K.id!==F&&(F=K.id,_i=!0),ea||L!==R){vt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),jt.setValue(q,"projectionMatrix",R.projectionMatrix),jt.setValue(q,"viewMatrix",R.matrixWorldInverse);const Ne=jt.map.cameraPosition;Ne!==void 0&&Ne.setValue(q,Fn.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&jt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&jt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,_i=!0,Ci=!0)}if(At.needsLights&&(Ze.state.sunShadowMap.length>0&&jt.setValue(q,"sunShadowMap",Ze.state.sunShadowMap,zt),Ze.state.directionalShadowMap.length>0&&jt.setValue(q,"directionalShadowMap",Ze.state.directionalShadowMap,zt),Ze.state.spotShadowMap.length>0&&jt.setValue(q,"spotShadowMap",Ze.state.spotShadowMap,zt),Ze.state.pointShadowMap.length>0&&jt.setValue(q,"pointShadowMap",Ze.state.pointShadowMap,zt)),Q.isSkinnedMesh){jt.setOptional(q,Q,"bindMatrix"),jt.setOptional(q,Q,"bindMatrixInverse");const xe=Q.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),jt.setValue(q,"boneTexture",xe.boneTexture,zt))}Q.isBatchedMesh&&(jt.setOptional(q,Q,"batchingTexture"),jt.setValue(q,"batchingTexture",Q._matricesTexture,zt),jt.setOptional(q,Q,"batchingIdTexture"),jt.setValue(q,"batchingIdTexture",Q._indirectTexture,zt),jt.setOptional(q,Q,"batchingColorTexture"),Q._colorsTexture!==null&&jt.setValue(q,"batchingColorTexture",Q._colorsTexture,zt));const bn=j.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&st.update(Q,j,We),(_i||At.receiveShadow!==Q.receiveShadow)&&(At.receiveShadow=Q.receiveShadow,jt.setValue(q,"receiveShadow",Q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(ze.envMapIntensity.value=G.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=Rg()),_i){if(jt.setValue(q,"toneMappingExposure",w.toneMappingExposure),At.needsLights&&yx(ze,Ci),xt&&K.fog===!0&&ft.refreshFogUniforms(ze,xt),ft.refreshMaterialUniforms(ze,K,it,lt,E.state.transmissionRenderTarget[R.id]),At.needsLights&&At.numLightProbeGrids>0){const xe=M;let Ne=0;for(const Jn of E.state.lightProbeGridArray)Jn.texture!==null&&(xe.textures[Ne]=Jn.texture,xe.min[Ne]=Jn.boundingBox.min,xe.max[Ne]=Jn.boundingBox.max,xe.resolution[Ne]=Jn.resolution,Ne++);for(const Jn in xe)xe[Jn].length=Ne;ze.probesSH.value=xe.textures,ze.probesMin.value=xe.min,ze.probesMax.value=xe.max,ze.probesResolution.value=xe.resolution}Ur.upload(q,su(At),ze,zt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ur.upload(q,su(At),ze,zt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&jt.setValue(q,"center",Q.center),jt.setValue(q,"modelViewMatrix",Q.modelViewMatrix),jt.setValue(q,"normalMatrix",Q.normalMatrix),jt.setValue(q,"modelMatrix",Q.matrixWorld),K.uniformsGroups!==void 0){const xe=K.uniformsGroups;for(let Ne=0,Jn=xe.length;Ne<Jn;Ne++){const ou=xe[Ne];Pt.update(ou,We),Pt.bind(ou,We)}}return We}function yx(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Ex(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,G,j){const K=It.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=G,It.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const j=It.get(R);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,j=0){Y=R,O=G,U=j;let K=null,Q=!1,xt=!1;if(R){const gt=It.get(R);if(gt.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(q.FRAMEBUFFER,gt.__webglFramebuffer),N.copy(R.viewport),X.copy(R.scissor),Z=R.scissorTest,vt.viewport(N),vt.scissor(X),vt.setScissorTest(Z),F=-1;return}else if(gt.__webglFramebuffer===void 0)zt.setupRenderTarget(R);else if(gt.__hasExternalTextures)zt.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Bt=R.depthTexture;if(gt.__boundDepthTexture!==Bt){if(Bt!==null&&It.has(Bt)&&(R.width!==Bt.image.width||R.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(R)}}const Et=R.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(xt=!0);const Ct=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ct[G])?K=Ct[G][j]:K=Ct[G],Q=!0):R.samples>0&&zt.useMultisampledRTT(R)===!1?K=It.get(R).__webglMultisampledFramebuffer:Array.isArray(Ct)?K=Ct[j]:K=Ct,N.copy(R.viewport),X.copy(R.scissor),Z=R.scissorTest}else N.copy(bt).multiplyScalar(it).floor(),X.copy(kt).multiplyScalar(it).floor(),Z=Xt;if(j!==0&&(K=z),vt.bindFramebuffer(q.FRAMEBUFFER,K)&&vt.drawBuffers(R,K),vt.viewport(N),vt.scissor(X),vt.setScissorTest(Z),Q){const gt=It.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,gt.__webglTexture,j)}else if(xt){const gt=G;for(let Et=0;Et<R.textures.length;Et++){const Ct=It.get(R.textures[Et]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Et,Ct.__webglTexture,j,gt)}}else if(R!==null&&j!==0){const gt=It.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,gt.__webglTexture,j)}F=-1};function au(R){const G=It.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=pe.textureFormatReadable(R.format),G.__typeReadable=pe.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,j,K,Q,xt,wt,gt=0){if(!(R&&R.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt],Array.isArray(Et)&&(Et=Et[0])),Et){vt.bindFramebuffer(q.FRAMEBUFFER,Et);try{const Ct=R.textures[gt],Bt=Ct.format,qt=Ct.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+gt);const Tt=au(Ct);if(Tt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&j>=0&&j<=R.height-Q&&q.readPixels(G,j,K,Q,ut.convert(Bt),ut.convert(qt),xt)}finally{const Ct=Y!==null?It.get(Y).__webglFramebuffer:null;vt.bindFramebuffer(q.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(R,G,j,K,Q,xt,wt,gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt],Array.isArray(Et)&&(Et=Et[0])),Et)if(G>=0&&G<=R.width-K&&j>=0&&j<=R.height-Q){vt.bindFramebuffer(q.FRAMEBUFFER,Et);const Ct=R.textures[gt],Bt=Ct.format,qt=Ct.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+gt);const Tt=au(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Yt),q.bufferData(q.PIXEL_PACK_BUFFER,xt.byteLength,q.STREAM_READ),q.readPixels(G,j,K,Q,ut.convert(Bt),ut.convert(qt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Se=Y!==null?It.get(Y).__webglFramebuffer:null;vt.bindFramebuffer(q.FRAMEBUFFER,Se);const he=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Vu(q,he,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Yt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,xt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Yt),q.deleteSync(he),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,j=0){const K=Math.pow(2,-j),Q=Math.floor(R.image.width*K),xt=Math.floor(R.image.height*K),wt=G!==null?G.x:0,gt=G!==null?G.y:0;zt.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,j,0,0,wt,gt,Q,xt),vt.unbindTexture()},this.copyTextureToTexture=function(R,G,j=null,K=null,Q=0,xt=0){let wt,gt,Et,Ct,Bt,qt,Tt,Yt,Se;const he=R.isCompressedTexture?R.mipmaps[xt]:R.image;if(j!==null)wt=j.max.x-j.min.x,gt=j.max.y-j.min.y,Et=j.isBox3?j.max.z-j.min.z:1,Ct=j.min.x,Bt=j.min.y,qt=j.isBox3?j.min.z:0;else{const jt=Math.pow(2,-Q);wt=Math.floor(he.width*jt),gt=Math.floor(he.height*jt),R.isDataArrayTexture?Et=he.depth:R.isData3DTexture?Et=Math.floor(he.depth*jt):Et=1,Ct=0,Bt=0,qt=0}K!==null?(Tt=K.x,Yt=K.y,Se=K.z):(Tt=0,Yt=0,Se=0);const oe=ut.convert(G.format),Ve=ut.convert(G.type);let At;G.isData3DTexture?(zt.setTexture3D(G,0),At=q.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(zt.setTexture2DArray(G,0),At=q.TEXTURE_2D_ARRAY):(zt.setTexture2D(G,0),At=q.TEXTURE_2D),vt.activeTexture(q.TEXTURE0),vt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,G.flipY),vt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),vt.pixelStorei(q.UNPACK_ALIGNMENT,G.unpackAlignment);const Ze=vt.getParameter(q.UNPACK_ROW_LENGTH),ie=vt.getParameter(q.UNPACK_IMAGE_HEIGHT),Ri=vt.getParameter(q.UNPACK_SKIP_PIXELS),We=vt.getParameter(q.UNPACK_SKIP_ROWS),ea=vt.getParameter(q.UNPACK_SKIP_IMAGES);vt.pixelStorei(q.UNPACK_ROW_LENGTH,he.width),vt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,he.height),vt.pixelStorei(q.UNPACK_SKIP_PIXELS,Ct),vt.pixelStorei(q.UNPACK_SKIP_ROWS,Bt),vt.pixelStorei(q.UNPACK_SKIP_IMAGES,qt);const _i=R.isDataArrayTexture||R.isData3DTexture,Ci=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const jt=It.get(R),ze=It.get(G),bn=It.get(jt.__renderTarget),xe=It.get(ze.__renderTarget);vt.bindFramebuffer(q.READ_FRAMEBUFFER,bn.__webglFramebuffer),vt.bindFramebuffer(q.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ne=0;Ne<Et;Ne++)_i&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,It.get(R).__webglTexture,Q,qt+Ne),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,It.get(G).__webglTexture,xt,Se+Ne)),q.blitFramebuffer(Ct,Bt,Ct+wt,Bt+gt,Tt,Yt,Tt+wt,Yt+gt,q.DEPTH_BUFFER_BIT,q.NEAREST);vt.bindFramebuffer(q.READ_FRAMEBUFFER,null),vt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||It.has(R)){const jt=It.get(R),ze=It.get(G);vt.bindFramebuffer(q.READ_FRAMEBUFFER,P),vt.bindFramebuffer(q.DRAW_FRAMEBUFFER,B);for(let bn=0;bn<Et;bn++)_i?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,jt.__webglTexture,Q,qt+bn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,jt.__webglTexture,Q),Ci?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ze.__webglTexture,xt,Se+bn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ze.__webglTexture,xt),Q!==0?q.blitFramebuffer(Ct,Bt,Ct+wt,Bt+gt,Tt,Yt,Tt+wt,Yt+gt,q.COLOR_BUFFER_BIT,q.NEAREST):Ci?q.copyTexSubImage3D(At,xt,Tt,Yt,Se+bn,Ct,Bt,wt,gt):q.copyTexSubImage2D(At,xt,Tt,Yt,Ct,Bt,wt,gt);vt.bindFramebuffer(q.READ_FRAMEBUFFER,null),vt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ci?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(At,xt,Tt,Yt,Se,wt,gt,Et,oe,Ve,he.data):G.isCompressedArrayTexture?q.compressedTexSubImage3D(At,xt,Tt,Yt,Se,wt,gt,Et,oe,he.data):q.texSubImage3D(At,xt,Tt,Yt,Se,wt,gt,Et,oe,Ve,he):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,xt,Tt,Yt,wt,gt,oe,Ve,he.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,xt,Tt,Yt,he.width,he.height,oe,he.data):q.texSubImage2D(q.TEXTURE_2D,xt,Tt,Yt,wt,gt,oe,Ve,he);vt.pixelStorei(q.UNPACK_ROW_LENGTH,Ze),vt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ie),vt.pixelStorei(q.UNPACK_SKIP_PIXELS,Ri),vt.pixelStorei(q.UNPACK_SKIP_ROWS,We),vt.pixelStorei(q.UNPACK_SKIP_IMAGES,ea),xt===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&q.generateMipmap(At),vt.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&zt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?zt.setTextureCube(R,0):R.isData3DTexture?zt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?zt.setTexture2DArray(R,0):zt.setTexture2D(R,0),vt.unbindTexture()},this.resetState=function(){O=0,U=0,Y=null,vt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const Sh={type:"change"},Wo={type:"start"},yh={type:"end"},Or=new ur,Eh=new Pn,Pg=Math.cos(70*le.DEG2RAD),Re=new W,$e=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xo=1e-6;class Dg extends md{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new _n,this._lastTargetPosition=new W,this._quat=new _n().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pr,this._sphericalDelta=new Pr,this._scale=1,this._panOffset=new W,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new W,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ig.bind(this),this._onPointerDown=Lg.bind(this),this._onPointerUp=Ng.bind(this),this._onContextMenu=Gg.bind(this),this._onMouseWheel=Og.bind(this),this._onKeyDown=zg.bind(this),this._onTouchStart=Bg.bind(this),this._onTouchMove=kg.bind(this),this._onMouseDown=Ug.bind(this),this._onMouseMove=Fg.bind(this),this._interceptControlDown=Hg.bind(this),this._interceptControlUp=Vg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sh),this.update(),this.state=ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$e:n>Math.PI&&(n-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Re.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Or.origin.copy(this.object.position),Or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Or.direction))<Pg?this.object.lookAt(this.target):(Eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Or.intersectPlane(Eh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xo||this._lastTargetPosition.distanceToSquared(this.target)>Xo?(this.dispatchEvent(Sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let r=Re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ig(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ng(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yh),this.state=ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ug(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case zn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case zn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Wo)}function Fg(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Og(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Wo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yh))}function zg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Bg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case jn.ROTATE:if(this.enableRotate===!1){this.state=ee.NONE;break}this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case jn.PAN:if(this.enablePan===!1){this.state=ee.NONE;break}this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Wo)}function kg(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function Gg(i){this.enabled!==!1&&i.preventDefault()}function Hg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qo=new Pn,zr=new pd,ts=new Lt,Yo=new W;class Wg extends Dg{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:zn.PAN,MIDDLE:zn.DOLLY,RIGHT:zn.ROTATE},this.touches={ONE:jn.PAN,TWO:jn.DOLLY_ROTATE},this._panWorldStart=new W}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;qo.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();ts.x=(t.clientX-n.left)/n.width*2-1,ts.y=-((t.clientY-n.top)/n.height)*2+1,zr.setFromCamera(ts,this.object),zr.ray.intersectPlane(qo,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();ts.x=(t.clientX-n.left)/n.width*2-1,ts.y=-((t.clientY-n.top)/n.height)*2+1,zr.setFromCamera(ts,this.object),zr.ray.intersectPlane(qo,Yo)&&(Yo.sub(this._panWorldStart),this._panOffset.copy(Yo).negate(),this.update())}}const Br=new Rt;function H(i){return Br.set(i),[Br.r,Br.g,Br.b]}function Jt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Us(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function He(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class ne{constructor(){ot(this,"pos",[]);ot(this,"nor",[]);ot(this,"col",[]);ot(this,"glo",[]);ot(this,"ox",0);ot(this,"oy",0);ot(this,"oz",0);ot(this,"c",1);ot(this,"s",0)}get vertexCount(){return this.pos.length/3}gradientY(t,e,n,s,r){for(let a=t*3;a<this.pos.length;a+=3){const o=le.clamp((this.pos[a+1]-e)/(n-e),0,1);for(let l=0;l<3;l++)this.col[a+l]=s[l]+(r[l]-s[l])*o}}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,h,f=0){const d=this.wx(t,n),u=this.wz(t,n),m=this.oy+e,x=this.wx(s,a),p=this.wz(s,a),g=this.oy+r,S=this.wx(o,c),v=this.wz(o,c),M=this.oy+l,b=x-d,E=g-m,_=p-u,y=S-d,T=M-m,w=v-u;let C=E*w-_*T,D=_*y-b*w,z=b*T-E*y;const P=Math.hypot(C,D,z)||1;C/=P,D/=P,z/=P,this.pos.push(d,m,u,x,g,p,S,M,v),this.nor.push(C,D,z,C,D,z,C,D,z),this.col.push(h[0],h[1],h[2],h[0],h[1],h[2],h[0],h[1],h[2]),this.glo.push(f,f,f)}quad(t,e,n,s,r,a,o,l,c,h,f,d,u,m=0){this.tri(t,e,n,s,r,a,o,l,c,u,m),this.tri(t,e,n,o,l,c,h,f,d,u,m)}box(t,e,n,s,r,a,o,l=void 0,c=null,h=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,h),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,h),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,h),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,h),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,h),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,h)}cyl(t,e,n,s,r,a,o,l,c=null,h=0){const f=e+a;for(let d=0;d<o;d++){const u=d/o*Math.PI*2,m=(d+1)/o*Math.PI*2,x=Math.cos(u),p=Math.sin(u),g=Math.cos(m),S=Math.sin(m);r>1e-4?(this.quad(t+x*s,e,n+p*s,t+x*r,f,n+p*r,t+g*r,f,n+S*r,t+g*s,e,n+S*s,l,h),c&&this.tri(t,f,n,t+g*r,f,n+S*r,t+x*r,f,n+p*r,c,h)):this.tri(t+x*s,e,n+p*s,t,f,n,t+g*s,e,n+S*s,l,h)}}blob(t,e,n,s,r,a,o,l,c,h,f=0){const d=h??c;for(let u=0;u<l;u++){const m=u/l*Math.PI,x=(u+1)/l*Math.PI,p=Math.cos(m),g=Math.cos(x),S=Math.sin(m),v=Math.sin(x),M=Us(c,d,1-(u+.5)/l);for(let b=0;b<o;b++){const E=b/o*Math.PI*2,_=(b+1)/o*Math.PI*2,y=Math.cos(E),T=Math.sin(E),w=Math.cos(_),C=Math.sin(_),D=t+y*S*s,z=e+p*r,P=n+T*S*a,B=t+w*S*s,O=n+C*S*a,U=t+y*v*s,Y=e+g*r,F=n+T*v*a,L=t+w*v*s,N=n+C*v*a;u>0&&this.tri(D,z,P,B,z,O,L,Y,N,M,f),u<l-1&&this.tri(D,z,P,L,Y,N,U,Y,F,M,f)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=Zo(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,h=t[l*2],f=t[l*2+1],d=t[c*2],u=t[c*2+1];o?this.quad(d,e,u,h,e,f,h,n,f,d,n,u,s,r):this.quad(h,e,f,d,e,u,d,n,u,h,n,f,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Lt(t[l*2],t[l*2+1]));const o=Lo.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],h=a[l[1]],f=a[l[2]];(h.x-c.x)*(f.y-c.y)-(h.y-c.y)*(f.x-c.x)>0?this.tri(c.x,e,c.y,f.x,e,f.y,h.x,e,h.y,n,s):this.tri(c.x,e,c.y,h.x,e,h.y,f.x,e,f.y,n,s)}}build(){const t=new we;return t.setAttribute("position",new be(new Float32Array(this.pos),3)),t.setAttribute("normal",new be(new Float32Array(this.nor),3)),t.setAttribute("color",new be(new Float32Array(this.col),3)),t.setAttribute("glow",new be(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function Zo(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const kr={value:0};function es(i={}){const t=new fi({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Be}),e=new Rt(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=kr,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>"inverloch-model",t}function Gr(i){return i.onBeforeCompile=t=>{t.uniforms.uNight=kr,t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= 1.0 - 0.82 * uNight;`)},i.customProgramCacheKey=()=>"inverloch-unlit",i}const Zn={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},Xg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,qg=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uBelow;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunGlow;
uniform float uNight;
varying vec3 vDir;
float sHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
void main() {
  vec3 dir = normalize(vDir);
  float h = dir.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.5));
  col = mix(col, uBelow, smoothstep(0.015, -0.3, h));
  float sd = max(dot(dir, uSunDir), 0.0);
  float above = smoothstep(-0.04, 0.03, h);
  col += uSunColor * (pow(sd, 900.0) * 3.0 + pow(sd, 40.0) * 0.35 + pow(sd, 6.0) * 0.12) * uSunGlow * above;
  vec3 cell = floor(dir * 190.0);
  float star = step(0.9972, sHash(cell)) * uNight * smoothstep(0.04, 0.35, h);
  col += vec3(0.85, 0.9, 1.0) * star * (0.5 + 0.5 * sHash(cell + 3.0));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;class Yg{constructor(t,e,n){ot(this,"sun",new fd(16777215,3));ot(this,"hemi",new cd(16777215,8947848,1));ot(this,"sky");ot(this,"sunDir",new W);ot(this,"skyUniforms");ot(this,"from");ot(this,"to");ot(this,"t",1);ot(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=Zn.day,this.skyUniforms={uZenith:{value:new Rt},uHorizon:{value:new Rt},uBelow:{value:new Rt},uSunDir:{value:new W},uSunColor:{value:new Rt},uSunGlow:{value:1},uNight:{value:0}},this.sky=new $t(new No(1,32,16),new Yn({uniforms:this.skyUniforms,vertexShader:Xg,fragmentShader:qg,side:Xe,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.radius=1.5),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=Zn[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=le.clamp(e*.7,90,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=le.clamp(a*1.6,.06,1.2))}setSolar(t){const e=(t%1440+1440)%1440,n=6*60,s=20.5*60;let r,a;if(e>=n&&e<=s)a=(e-n)/(s-n),r=Math.sin(Math.PI*a)*70;else{const m=((e<n?e+1440:e)-s)/(1440-(s-n));a=m<.5?1:0,r=-Math.sin(Math.PI*m)*40}const o=le.degToRad(110*(1-2*a)),l=le.degToRad(Math.max(r,5)),c=[Math.sin(o)*Math.cos(l),Math.sin(l),-Math.cos(o)*Math.cos(l)];let h;r>=25?h=Zn.day:r>=6?h=Ko(Zn.golden,Zn.day,(r-6)/19):r>=-6?h=Ko(Zn.night,Zn.golden,(r+6)/12):h=Zn.night;const f=le.clamp((2-r)/6,0,1),d=Zn.night.sunDir,u=[c[0]+(d[0]-c[0])*f,c[1]+(d[1]-c[1])*f,c[2]+(d[2]-c[2])*f];this.from=this.to={...h,sunDir:u},this.mode=r>=25?"day":r>=-6?"golden":"night",this.apply(1)}snapshot(){return Ko(this.from,this.to,Zg(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night;const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new Rt(e.shallow),.35),kr.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function Zg(i){return i*i*(3-2*i)}function Ko(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new Rt(r).lerp(new Rt(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}async function Kg(i,t,e){if(!i.detail)return[];try{const n=await fetch(i.detail,{signal:e});if(!n.ok)return[];const s=(await n.json()).patches,r=i.detail.slice(0,i.detail.lastIndexOf("/")+1),a=await Promise.all(s.map(async o=>{var h;const l=t?o.lo:o.file,c=await new Dc().loadAsync(((h=i.detailFiles)==null?void 0:h[l])??r+l);return c.colorSpace=ye,c.generateMipmaps=!0,c.minFilter=Tn,c.wrapS=c.wrapT=dn,{x:o.x,z:o.z,size:o.size,texture:c}}));if(e!=null&&e.aborted){for(const o of a)o.texture.dispose();return[]}return a}catch{return[]}}const $o=10,$g=5,ns=4,Jg=3;function Hr(i){const t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Int16Array(e.buffer,0,e.length>>1)}async function Qg(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const x=e.getUint32(n),p=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(p==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(p==="IDAT")c.push(t.subarray(n+8,n+8+x));else if(p==="IEND")break;n+=12+x}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const h=o===2?3:4,f=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),d=new Uint8Array(await new Response(f).arrayBuffer()),u=s*h,m=new Uint8Array(u*r);for(let x=0;x<r;x++){const p=d[x*(u+1)],g=x*(u+1)+1,S=x*u;for(let v=0;v<u;v++){const M=v>=h?m[S+v-h]:0,b=x>0?m[S-u+v]:0,E=v>=h&&x>0?m[S-u+v-h]:0;let _=d[g+v];if(p===1)_+=M;else if(p===2)_+=b;else if(p===3)_+=M+b>>1;else if(p===4){const y=Math.abs(b-E),T=Math.abs(M-E),w=Math.abs(M+b-2*E);_+=y<=T&&y<=w?M:T<=w?b:E}m[S+v]=_&255}}return{width:s,height:r,channels:h,data:m}}async function jg(i,t,e){let n=0;const s=u=>t(++n/4,u);t(0,"Fetching map data");const[r,a,o]=await Promise.all([fetch(i.town,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the town data");return u.json()}).then(u=>(s("Streets and buildings"),u)),fetch(i.height,{signal:e}).then(u=>{if(!u.ok)throw new Error("Could not load the terrain");return u.arrayBuffer()}).then(Qg).then(u=>(s("Terrain"),u)),new Dc().loadAsync(i.ground).then(u=>(s("Ground texture"),u))]),l=r.meta,c=a.width*a.height,h=new Float32Array(c),f=new Float32Array(c),d=a.channels;for(let u=0;u<c;u++)h[u]=(a.data[u*d]<<8|a.data[u*d+1])/l.heightScale-l.heightOffset,f[u]=a.data[u*d+2]/255;return o.colorSpace=ye,o.anisotropy=8,o.generateMipmaps=!0,o.minFilter=Tn,s("Building the model"),{town:{...r,houses:Hr(r.houses),cabins:Hr(r.cabins),cars:Hr(r.cars),trees:Hr(r.trees)},heights:h,exposure:f,ground:o}}const Jo=[["24",[-1702,305.08,12.22,9.68,-.7524],1,2,7232070,12103050,"v","o"],["22",[-1686.64,316,11.46,8.62,-.3855],2,1,9344923,13224902,"b","o"],["22 (garage)",[-1679.45,321.49,4.21,3.67,-.4978],1,3,9344923,13224902,"","t"],["20",[-1668.03,323.49,7.44,11.59,-.0907],1,0,13018492,10722704,"g","o"],["18",[-1645.61,335.05,11.19,8.31,-.346],1,0,14206627,9145997,"","o"],["16",[-1616.02,330.47,14.65,10.49,-.4859],1,2,13485749,11971464,"","o"],["14",[-1610.3,354.63,11.28,9.08,-.3794,-1609.54,344.81,5.42,9.72,-.3794],1,1,15328729,8079926,"","o"],["14A",[-1594.08,360.97,8.66,9.66,-.4636],1,2,14275006,12365706,"","o"],["10",[-1572.46,363.32,13.65,23.59,-.3996],1,0,14865590,9409683,"g","o"],["outbuilding at 8",[-1563.96,372.87,7.3,6.68,-.4275],1,0,14078146,13947340,"","s"],["8",[-1556.98,362.95,8.83,17.59,-.4512,-1554.25,370.09,2.32,7.12,-.4512],1,3,15526108,15000798,"","o"],["6",[-1542.81,380.79,14.34,8.58,-.3577,-1539.06,376.26,10.48,2.55,-.3577],1,2,15328470,14869212,"","o"],["4",[-1530.34,391.35,11.21,5.66,.0312,-1528.02,387.1,6.31,2.71,.0312],1,1,10134438,14014161,"","o"],["2",[-1509.87,393.04,12.04,8.58,-.3975,-1510.39,386.54,6.05,3,-.3975],1,1,15262678,14474454,"","o"],["29",[-1729.27,353.38,8.8,16.67,2.8003],1,1,14209989,14803419,"","o"],["27",[-1712.88,352.46,13.74,8.15,2.847,-1712.42,359,9.08,4.1,2.847],1,0,13222836,9277840,"v","o"],["25",[-1703.96,376.48,9.87,17.42,2.8565],1,0,15129535,10135434,"v","o"],["23",[-1683.5,379.63,11,25,2.6798],1,2,15789800,15000798,"","t"],["21",[-1665.11,377.41,10.66,13.24,2.7699],1,0,12240814,9409425,"v","o"],["17",[-1639.74,395.06,10.25,9.08,2.7085],2,3,15921644,15263970,"","o"],["outbuilding at 13",[-1629.65,418.37,4.54,7.23,2.9043],1,0,14078146,9342090,"","s"],["15",[-1627.03,407.09,11.04,13.86,2.8101,-1621.08,400.52,4.06,2.45,2.8101],1,3,15724006,14869212,"","o"],["13",[-1617.09,414.46,6.19,22.3,2.6721,-1614.57,423.97,6.93,7.63,2.6721],1,0,14209730,8358524,"","o"],["9",[-1574.55,442.34,11.72,14.88,2.8379],1,0,14932676,12628620,"","o"],["7",[-1559.58,439.94,8.54,11.74,2.8311],1,3,14275520,9412735,"","o"],["outbuilding",[-1540.1,440.05,7.53,5.25,2.5613],1,0,14078146,11313563,"","s"],["5",[-1526.07,445.23,16.31,7.93,2.7377],1,0,13617336,9211790,"","o"]],bh=[-1592.2,410.8],Fs=[-1744,317.6],Os=[-1495,439.1],t_=45;function wh(i,t,[e,n,s,r]){const a=s-e,o=r-n,l=a*a+o*o||1,c=Math.max(0,Math.min(1,((i-e)*a+(t-n)*o)/l));return Math.hypot(i-e-a*c,t-n-o*c)}const Th=new WeakMap;function Ah(i){let t=Th.get(i);if(t)return t;const e=[],n=[],s=[Math.min(Fs[0],Os[0])-120,Math.min(Fs[1],Os[1])-120],r=[Math.max(Fs[0],Os[0])+120,Math.max(Fs[1],Os[1])+120];for(const a of i.roads){if(a[0]>4)continue;const o=i.names[a[4]]??"",l=a[5];for(let c=0;c+3<l.length;c+=2){const h=[l[c]/10,l[c+1]/10,l[c+2]/10,l[c+3]/10];if(Math.max(h[0],h[2])<s[0]||Math.min(h[0],h[2])>r[0]||Math.max(h[1],h[3])<s[1]||Math.min(h[1],h[3])>r[1])continue;const f=(h[0]+h[2])/2;(o==="Norman Road"&&f>=Fs[0]-1&&f<=Os[0]+1?e:n).push(h)}}return t=(a,o)=>{if(a<s[0]||a>r[0]||o<s[1]||o>r[1]||!e.length||Math.hypot(a-bh[0],o-bh[1])<24)return!1;let l=1/0,c=1/0;for(const h of e)l=Math.min(l,wh(a,o,h));if(l>t_)return!1;for(const h of n)c=Math.min(c,wh(a,o,h));return l<c},Th.set(i,t),t}function e_(i,t,e=1.5){for(const[,n]of Jo)for(let s=0;s<n.length;s+=5){const[r,a,o,l,c]=n.slice(s,s+5),h=i-r,f=t-a;if(h*h+f*f>400)continue;const d=Math.cos(c),u=Math.sin(c),m=h*d-f*u,x=h*u+f*d;if(Math.abs(m)<o/2+e&&Math.abs(x)<l/2+e)return!0}return!1}const Vr=[15921126,15261640,13619920,11120043,12110550,11845800,14272936,5988452,11036494,14205088,15327150,16448250].map(H),pi=[15000277,12435386,8948618,4934726,3487290,6957594,8160360,3555666,11888447,11644323].map(H),Fe=H(3163994),zs=[7031348,3098712,9056042,15658730,4151878].map(H),is=H(9138002),en=H(16053230),Wr=H(12171184),Xr=H(1846090),Rh=[15327951,3099196,2504783,8007210,3816770,13214282,5209226].map(H);function Qo(i,t,e,n,s,r){const a=Jt(r,.9);if(t>=e){const o=t-e;i.quad(-t,n,e,t,n,e,o,n+s,0,-o,n+s,0,r),i.quad(t,n,-e,-t,n,-e,-o,n+s,0,o,n+s,0,r),i.tri(t,n,e,t,n,-e,o,n+s,0,a),i.tri(-t,n,-e,-t,n,e,-o,n+s,0,a)}else{const o=e-t;i.quad(t,n,e,t,n,-e,0,n+s,-o,0,n+s,o,r),i.quad(-t,n,-e,-t,n,e,0,n+s,o,0,n+s,-o,r),i.tri(-t,n,e,t,n,e,0,n+s,o,a),i.tri(t,n,-e,-t,n,-e,0,n+s,-o,a)}}function Ti(i,t,e,n,s,r,a,o){const l=t/2,c=e/2;if(t>=e){const f=c*s;return i.quad(-l-r,n-r*s,c+r,l+r,n-r*s,c+r,l+r,n+f,0,-l-r,n+f,0,a),i.quad(l+r,n-r*s,-c-r,-l-r,n-r*s,-c-r,-l-r,n+f,0,l+r,n+f,0,a),i.tri(l,n,c,l,n,-c,l,n+f,0,o),i.tri(-l,n,-c,-l,n,c,-l,n+f,0,o),f}const h=l*s;return i.quad(l+r,n-r*s,c+r,l+r,n-r*s,-c-r,0,n+h,-c-r,0,n+h,c+r,a),i.quad(-l-r,n-r*s,-c-r,-l-r,n-r*s,c+r,0,n+h,c+r,0,n+h,-c-r,a),i.tri(-l,n,c,l,n,c,0,n+h,c,o),i.tri(l,n,-c,-l,n,-c,0,n+h,-c,o),h}function Bs(i,t,e,n,s,r,a,o,l){const c=t/2,h=e/2,f=n+s,d=n+r,u=(f-d)/e;i.quad(-c-a,f+a*u,h+a,c+a,f+a*u,h+a,c+a,d-a*u,-h-a,-c-a,d-a*u,-h-a,o),i.quad(-c,n,h,c,n,h,c,f,h,-c,f,h,l),i.quad(c,n,h,c,n,-h,c,d,-h,c,f,h,l),i.quad(-c,n,-h,-c,n,h,-c,f,h,-c,d,-h,l),i.quad(c,n,-h,-c,n,-h,-c,d,-h,c,d,-h,l)}const rn=.05;function an(i,t,e,n,s,r,a,o=0){const l=t/2+rn;i.quad(e,s,l,n,s,l,n,r,l,e,r,l,a,o)}function Ch(i,t,e,n,s,r,a,o=0){const l=-t/2-rn;i.quad(n,s,l,e,s,l,e,r,l,n,r,l,a,o)}function jo(i,t,e,n,s,r,a,o=0){const l=t/2+rn;i.quad(l,s,n,l,s,e,l,r,e,l,r,n,a,o)}function tl(i,t,e,n,s,r,a,o=0){const l=-t/2-rn;i.quad(l,s,e,l,s,n,l,r,n,l,r,e,a,o)}function qr(i,t,e,n){let s=1/0,r=-1/0;for(const[a,o]of[[-e,-n],[e,-n],[e,n],[-e,n],[0,0]]){const l=i.yAt(t.wx(a,o),t.wz(a,o));l<s&&(s=l),l>r&&(r=l)}return{lo:s,hi:r}}function n_(i,t,e,n,s,r,a,o,l,c,h,f){i.frame(e,0,n,a);const d=qr(t,i,s/2,r/2),u=d.hi+.18;i.frame(e,u,n,a);const m=Vr[c%Vr.length],x=pi[h%pi.length],p=o===2?5.5:2.85,g=s/2,S=r/2,v=Jt(m,.7);i.box(-g,d.lo-u-.3,-S,g,0,S,v,null),i.box(-g,0,-S,g,p,S,m,l===3?Jt(x,1):null);let M=p;if(l===0){const y=Math.min(g,S)+.5;Qo(i,g+.5,S+.5,p,y*.44,x),M=p+y*.44}else l===1?M=p+Ti(i,s,r,p,.5,.4,x,m):l===2?(Bs(i,s,r,p,1.35,.25,.5,x,m),an(i,r,-g+.5,g-.5,p+.25,p+1.05,Fe,f()<.5?1:0),M=p+1.4):(i.box(-g-.15,p,-S-.15,g+.15,p+.3,S+.15,Jt(m,.92),x),M=p+.3);const b=zs[Math.floor(f()*zs.length)];for(let _=0;_<o;_++){const y=_*2.75+.85,T=y+1.3,w=Math.max(2,Math.floor(s/3.2)),C=_===0?Math.floor(f()*w):-1;for(let P=0;P<w;P++){const B=-g+(P+.5)/w*s;P===C?an(i,r,B-.5,B+.5,0,2.1,b):an(i,r,B-.85,B+.85,y,T,Fe,f()<.55?1:0)}const D=Math.max(1,Math.floor(s/3.8));for(let P=0;P<D;P++){const B=-g+(P+.5)/D*s;Ch(i,r,B-.75,B+.75,y,T,Fe,f()<.5?1:0)}const z=Math.max(1,Math.floor(r/4.2));for(let P=0;P<z;P++){const B=-S+(P+.5)/z*r;jo(i,s,B-.7,B+.7,y,T,Fe,f()<.45?1:0),tl(i,s,B-.7,B+.7,y,T,Fe,f()<.45?1:0)}}const E=f();if(o===1&&E<.36){const _=g*(.6+f()*.4),y=1.9;i.box(-_,-.12,S,_,.02,S+y,is),i.quad(-_-.2,2.3,S+y+.2,_+.2,2.3,S+y+.2,_+.2,2.7,S,-_-.2,2.7,S,Jt(x,.93));const T=Math.max(2,Math.round(_*2/3));for(let w=0;w<=T;w++){const C=-_+w/T*_*2;i.box(C-.06,0,S+y-.12,C+.06,2.32,S+y,en,null)}}else if(o===2&&E<.5){const _=g*(.55+f()*.45),y=2;i.box(-_,2.62,S,_,2.78,S+y,Wr,is,Jt(Wr,.8));const T=f()<.5?H(10469580):en;i.box(-_,2.78,S+y-.05,_,3.75,S+y,T,null),i.box(-_,2.78,S,-_+.05,3.75,S+y,T,null),i.box(_-.05,2.78,S,_,3.75,S+y,T,null);for(const w of[-_+.1,_-.1])i.box(w-.08,0,S+y-.2,w+.08,2.62,S+y-.04,en,null);f()<.5&&i.quad(-_-.2,5.05,S+y+.2,_+.2,5.05,S+y+.2,_+.2,5.4,S,-_-.2,5.4,S,Jt(x,.93))}if(f()<.1&&l<=1){const _=(f()-.5)*g,y=(f()-.5)*S*.6;i.box(_-.32,p,y-.32,_+.32,M+.55,y+.32,H(10116936))}if(f()<.24&&l<=1&&i_(i,s,r,p,a,l,f),f()<.15){const _=(f()<.5?-1:1)*(g+1.25),y=-S+1.3;i.cyl(_,d.hi-u,y,1.05,1.05,2.1,8,f()<.5?H(9347975):H(12370625),H(11120814))}}function i_(i,t,e,n,s,r,a){const o=t/2,l=e/2,c=r===0?.5:.4,h=.22,f=.74,d=.09;if(t>=e){const u=l+c,m=r===0?u*.44:l*.5*(1+c/l),x=r===0?n:n-c*.5,p=Math.max(1.4,(r===0?o-l:o)*.7)*(.6+a()*.4),g=Math.cos(s)<0,S=g?1:-1,v=S*u*(1-h),M=S*u*(1-f),b=x+m*h+d,E=x+m*f+d;g?i.quad(-p,b,v,p,b,v,p,E,M,-p,E,M,Xr):i.quad(p,b,v,-p,b,v,-p,E,M,p,E,M,Xr)}else{const u=o+c,m=r===0?u*.44:o*.5*(1+c/o),x=r===0?n:n-c*.5,p=Math.max(1.4,(r===0?l-o:l)*.7)*(.6+a()*.4),g=Math.sin(s)>0,S=g?1:-1,v=S*u*(1-h),M=S*u*(1-f),b=x+m*h+d,E=x+m*f+d;g?i.quad(v,b,p,v,b,-p,M,E,-p,M,E,p,Xr):i.quad(v,b,-p,v,b,p,M,E,p,M,E,-p,Xr)}}const s_=H(9075302);function r_(i,t,e,n){const[,s,r,a,o,l,c]=e;let h=-1/0,f=1/0;for(let u=0;u<s.length;u+=5){const[m,x,p,g,S]=s.slice(u,u+5);i.frame(m,0,x,S);const v=[];for(const[b,E]of[[-p/2,-g/2],[p/2,-g/2],[p/2,g/2],[-p/2,g/2]])v.push(i.wx(b,E),i.wz(b,E));n.push(v);const M=qr(t,i,p/2,g/2);h=Math.max(h,M.hi),f=Math.min(f,M.lo)}const d=h+.18;for(let u=0;u<s.length;u+=5)a_(i,d,f,s.slice(u,u+5),r,a,o,l,u===0?c:"",u===0)}function a_(i,t,e,[n,s,r,a,o],l,c,h,f,d,u){const m=He(Math.round(n*31+s*17)>>>0);i.frame(n,t,s,o);const x=H(h),p=H(f),g=l===2?5.5:2.85,S=r/2,v=a/2;if(i.box(-S,e-t-.3,-v,S,0,v,Jt(x,.7),null),i.box(-S,0,-v,S,g,v,x,c===3?p:null),c===0){const y=Math.min(S,v)+.5;Qo(i,S+.5,v+.5,g,y*.44,p)}else c===1?Ti(i,r,a,g,.5,.4,p,x):c===2?Bs(i,r,a,g,1.1,.2,.5,p,x):i.box(-S-.15,g,-v-.15,S+.15,g+.3,v+.15,Jt(x,.92),p);if(r<5||a<3)return;const M=d.includes("g")?Math.min(4.8,r*.42):0;M&&an(i,a,S-.4-M,S-.4,0,2.2,s_);const b=-S,E=S-(M?M+.8:0);for(let _=0;_<l;_++){const y=_*2.75+.85,T=y+1.3,w=Math.max(2,Math.floor((E-b)/3.2));for(let z=0;z<w;z++){const P=b+(z+.5)/w*(E-b);u&&_===0&&z===w-1?an(i,a,P-.5,P+.5,0,2.1,zs[0]):an(i,a,P-.85,P+.85,y,T,Fe,m()<.5?1:0)}const C=Math.max(1,Math.floor(r/3.8));for(let z=0;z<C;z++){const P=-S+(z+.5)/C*r;Ch(i,a,P-.75,P+.75,y,T,Fe,m()<.5?1:0)}const D=Math.max(1,Math.floor(a/4.2));for(let z=0;z<D;z++){const P=-v+(z+.5)/D*a;jo(i,r,P-.7,P+.7,y,T,Fe,m()<.45?1:0),tl(i,r,P-.7,P+.7,y,T,Fe,m()<.45?1:0)}}if(d.includes("v")){const _=Math.min(S-.3,(E-b)/2),y=(b+E)/2,T=2.2;i.box(y-_,-.12,v,y+_,.02,v+T,is),i.quad(y-_-.2,2.3,v+T+.2,y+_+.2,2.3,v+T+.2,y+_+.2,2.7,v,y-_-.2,2.7,v,Jt(p,.93));const w=Math.max(2,Math.round(_*2/3));for(let C=0;C<=w;C++){const D=y-_+C/w*_*2;i.box(D-.06,0,v+T-.12,D+.06,2.32,v+T,en,null)}}if(d.includes("b")&&l===2){const _=S*.8,y=1.8;i.box(-_,2.62,v,_,2.78,v+y,Wr,is,Jt(Wr,.8)),i.box(-_,2.78,v+y-.05,_,3.75,v+y,en,null),i.box(-_,2.78,v,-_+.05,3.75,v+y,en,null),i.box(_-.05,2.78,v,_,3.75,v+y,en,null);for(const T of[-_+.1,_-.1])i.box(T-.08,0,v+y-.2,T+.08,2.62,v+y-.04,en,null)}}function o_(i,t,e,n,s,r,a,o,l,c){i.frame(e,0,n,a);const h=qr(t,i,s/2,r/2);i.frame(e,h.hi+.05,n,a);const f=[H(14275778),H(9083526),H(12041145),H(7305842)][l%4],d=pi[c%pi.length],u=2.4,m=s/2,x=r/2;i.box(-m,h.lo-h.hi-.3,-x,m,u,x,f,null),o===1?Ti(i,s,r,u,.32,.2,d,f):Bs(i,s,r,u,.6,.1,.2,d,f),an(i,r,-m*.72,m*.72,0,2.05,Jt(f,1.12))}const Yr=[14243375,3112880,6266970,14725690,9134e3,4170656,14252591,4878261].map(H);function l_(i,t,e,n,s,r,a,o){const l={0:[8,4.2],1:[6.4,4.8],2:[3.6,3.6],3:[10.5,7.5]},[c,h]=l[r];i.frame(e,0,n,s);const f=qr(t,i,c/2,h/2);i.frame(e,f.hi+.05,n,s);const d=f.lo-f.hi-.3;if(r===0){const u=[H(15129798),H(12175305),H(13219994),H(10465434)][a%4],m=pi[(a*3+1)%pi.length];i.box(-4,d,-2.1,4,.35,2.1,Jt(u,.6),null),i.box(-4,.35,-2.1,4,2.75,2.1,u,null),Ti(i,8,4.2,2.75,.42,.35,m,u),i.box(-3.2,.2,2.1,1.2,.35,3.7,is),i.box(-3.2,.35,3.62,1.2,1.25,3.7,en,null),an(i,4.2,-2.8,-1.2,1.2,2.3,Fe,o()<.5?1:0),an(i,4.2,-.4,.5,.35,2.4,zs[a%zs.length]),an(i,4.2,1.4,3.2,1.2,2.3,Fe,o()<.5?1:0)}else if(r===1){const u=Yr[a%Yr.length];i.box(-2.9,.45,-2.3,2.9,2.55,-.1,en,H(15263972),H(9079432)),i.box(-2.92,1.05,-2.32,2.92,1.3,-.08,u,null),i.box(-1.4,0,-2.2,-.8,.5,-.2,H(2763308)),i.box(.8,0,-2.2,1.4,.5,-.2,H(2763308)),an(i,-.2,-2.2,-1,1.45,2.15,Fe,o()<.4?1:0),i.box(-2.6,0,-.1,2.6,2,2.3,Us(u,en,.72),null),i.quad(-2.7,2,2.4,2.7,2,2.4,2.7,2.5,-.1,-2.7,2.5,-.1,Us(u,en,.55))}else if(r===2){const u=Yr[a%Yr.length];i.blob(0,0,0,1.75,1.55,1.75,6,4,Jt(u,.85),u)}else{const u=H(14209732),m=H(5922659);i.box(-5.25,d,-3.75,5.25,3,3.75,u,null),Bs(i,10.5,7.5,3,1.5,.2,.7,m,H(9072466)),an(i,7.5,-4.4,4.4,.3,2.6,Fe,o()<.6?1:0),i.box(-5.25,.05,3.75,5.25,.25,6.2,is),jo(i,10.5,-2,2,.9,2.3,Fe,o()<.5?1:0),tl(i,10.5,-2,2,.9,2.3,Fe,o()<.5?1:0)}}function c_(i){const t=i.length/2;let e={cx:0,cz:0,w:0,d:0,heading:0,area:1/0};for(let n=0;n<t;n++){const s=(n+1)%t;let r=i[s*2]-i[n*2],a=i[s*2+1]-i[n*2+1];const o=Math.hypot(r,a);if(o<.5)continue;r/=o,a/=o;let l=1/0,c=-1/0,h=1/0,f=-1/0;for(let u=0;u<t;u++){const m=i[u*2],x=i[u*2+1],p=m*r+x*a,g=-m*a+x*r;p<l&&(l=p),p>c&&(c=p),g<h&&(h=g),g>f&&(f=g)}const d=(c-l)*(f-h);if(d<e.area){const u=(l+c)/2,m=(h+f)/2;e={cx:u*r-m*a,cz:u*a+m*r,w:c-l,d:f-h,heading:Math.atan2(-a,r),area:d}}}return e}function h_(i,t){const e=i.length/2,n=Zo(i)>0?1:-1,s=[];for(let r=0;r<e;r++){const a=(r+e-1)%e,o=(r+1)%e;let l=i[r*2]-i[a*2],c=i[r*2+1]-i[a*2+1],h=i[o*2]-i[r*2],f=i[o*2+1]-i[r*2+1];const d=Math.hypot(l,c)||1,u=Math.hypot(h,f)||1;l/=d,c/=d,h/=u,f/=u;const m=-c*n,x=l*n,p=-f*n,g=h*n;let S=m+p,v=x+g;const M=Math.hypot(S,v)||1;S/=M,v/=M;const b=t/Math.max(.4,S*m+v*x);s.push(i[r*2]+S*b,i[r*2+1]+v*b)}return s}const u_=new Set(["house","detached","residential","terrace","yes;house","semidetached_house","bungalow"]),f_=new Set(["shed","garage","garages","toilets","hut"]);function Ph(i,t,e,n,s,r){const a=e.p.map(T=>T/10),o=a.length/2;let l=0,c=0,h=1/0,f=-1/0;for(let T=0;T<o;T++){l+=a[T*2],c+=a[T*2+1];const w=t.yAt(a[T*2],a[T*2+1]);w<h&&(h=w),w>f&&(f=w)}l/=o,c/=o;const d=Math.abs(Zo(a)),u=c_(a),m=d/(u.w*u.d||1),x=f+.15,p=Math.hypot(l-r[0],c-r[1])<420,g=e.k==="retail"||e.k==="commercial"||!!e.u||!!e.n||e.k==="yes"&&(d>300||p&&d>110),S=!g&&(u_.has(e.k)||e.k==="yes"&&d<=300),v=f_.has(e.k)||d<28;let M;e.l?M=e.l*3.1:e.k==="roof"?M=3:e.k==="hangar"?M=6.5:e.k==="church"?M=5:v?M=2.5:S?M=s()<.2?5.5:2.9:M=d>1200?7:d>500?5.6:4.3+s()*.8;const b={name:e.n,use:e.u,kind:e.k,poly:a,cx:l,cz:c,area:d,obb:u,floorY:x,wallH:M,topY:x+M};let E=26;for(let T=0;T<o;T++){const w=(T+1)%o,C=a[T*2],D=a[T*2+1],z=a[w*2],P=a[w*2+1],B=Math.hypot(z-C,P-D);if(B<4.5)continue;const O=(C+z)/2,U=(D+P)/2,Y=n.nearest(O,U,E);if(!Y)continue;let F=-(P-D)/B,L=(z-C)/B;if(F*(O-l)+L*(U-c)<0&&(F=-F,L=-L),(Y.px-O)*F+(Y.pz-U)*L<Y.dist*.5)continue;E=Y.dist;const N=Math.atan2(F,L),X=(z-C)*Math.cos(N)-(P-D)*Math.sin(N);b.street={x:X>0?C:z,z:X>0?D:P,heading:N,length:B}}if(i.frame(0,x,0,0),e.k==="roof"){const T=H(12172728);i.walls(a,M-.25,M,T),i.cap(a,M,T);for(let w=0;w<o;w++)i.box(a[w*2]-.12,h-x,a[w*2+1]-.12,a[w*2]+.12,M-.25,a[w*2+1]+.12,H(6974832),null);return b}const _=g?[H(15328470),H(14275266),H(13620178),H(15128768),H(12568777),H(15789540),H(13220258)][Math.floor(s()*7)]:Vr[Math.floor(s()*Vr.length)],y=g&&d>300?[H(13225160),H(11777972),H(14211280),H(10133405)][Math.floor(s()*4)]:pi[Math.floor(s()*pi.length)];if(i.walls(a,h-x-.3,M,_),e.k==="church"){i.frame(u.cx,x,u.cz,u.heading);const T=Ti(i,u.w,u.d,M,1.15,.3,H(5922659),_);b.topY=x+M+T}else if((S||v||e.k==="hangar")&&m>.8&&o<=8)if(i.frame(u.cx,x,u.cz,u.heading),e.k==="hangar")b.topY=x+M+Ti(i,u.w,u.d,M,.3,.3,H(12172728),_);else if(v)Bs(i,u.w,u.d,M,.5,.1,.2,y,_);else if(s()<.55){const T=Math.min(u.w,u.d)/2+.45;Qo(i,u.w/2+.45,u.d/2+.45,M,T*.44,y),b.topY=x+M+T*.44}else b.topY=x+M+Ti(i,u.w,u.d,M,.5,.4,y,_);else if(d<420&&!g){const T=h_(a,Math.min(2.2,Math.sqrt(d)*.18)),w=1.15;for(let C=0;C<o;C++){const D=(C+1)%o;i.quad(a[C*2],M,a[C*2+1],a[D*2],M,a[D*2+1],T[D*2],M+w,T[D*2+1],T[C*2],M+w,T[C*2+1],y)}i.cap(T,M+w,Jt(y,1.05)),b.topY=x+M+w}else{i.cap(a,M-.05,y),i.walls(a,M,M+.45,Jt(_,.96)),b.topY=x+M+.45;const T=Math.min(6,Math.floor(d/220));for(let w=0;w<T;w++){const C=(s()-.5)*u.w*.5,D=(s()-.5)*u.d*.5,z=Math.cos(u.heading),P=Math.sin(u.heading),B=u.cx+C*z+D*P,O=u.cz-C*P+D*z;i.box(B-1.1,M,O-.8,B+1.1,M+.9,O+.8,H(11120304))}}if(!v&&e.k!=="hangar"){const T=Math.max(1,Math.round(M/3));for(let w=0;w<o;w++){const C=(w+1)%o,D=a[w*2],z=a[w*2+1],P=a[C*2],B=a[C*2+1],O=Math.hypot(P-D,B-z);if(O<3.2)continue;let U=-(B-z)/O,Y=(P-D)/O;U*((D+P)/2-l)+Y*((z+B)/2-c)<0&&(U=-U,Y=-Y);const F=Math.atan2(U,Y),L=(P-D)*Math.cos(F)-(B-z)*Math.sin(F);i.frame(L>0?D:P,x,L>0?z:B,F);const N=Math.floor(O/(g?4.2:3.4));for(let X=0;X<T;X++){const Z=X*3+.9;if(!(g&&X===0&&b.street&&Math.abs(F-b.street.heading)<.01))for(let V=0;V<N;V++){const J=(V+.5)/N*O;i.quad(J-.8,Z,rn,J+.8,Z,rn,J+.8,Z+1.3,rn,J-.8,Z+1.3,rn,Fe,s()<.5?1:0)}}}}if(g&&b.street&&!e.k.includes("church")&&d>60){const T=b.street;i.frame(T.x,x,T.z,T.heading);const w=Rh[Math.floor(s()*Rh.length)];if(i.quad(.5,.35,rn,T.length-.5,.35,rn,T.length-.5,2.7,rn,.5,2.7,rn,Fe,.9),p&&T.length>6&&M<9){i.box(.2,3,0,T.length-.2,3.16,2.7,w,Jt(w,.9),Jt(w,.75)),i.box(.2,2.75,2.62,T.length-.2,3.3,2.7,Us(w,en,.25),null);const C=Math.max(1,Math.round(T.length/4.5));for(let D=0;D<=C;D++){const z=.35+D/C*(T.length-.7);i.box(z-.06,0,2.5,z+.06,3,2.62,H(4869456),null)}}}return i.frame(),b}function d_(i,t,e,n,s=()=>!1){const r=new je;r.name="buildings";const a=es(),o=900,l=new Map,c=(v,M)=>{const b=`${Math.floor(v/o)}:${Math.floor(M/o)}`;let E=l.get(b);return E||l.set(b,E=new ne),E},h=i.meta,f=[(145.7285-h.origin[0])*h.metresPerDegree[0],-(-38.63385-h.origin[1])*h.metresPerDegree[1]],d=He(3996),u=[];for(const v of i.buildings){let M=0,b=0;for(let E=0;E<v.p.length;E+=2)M+=v.p[E],b+=v.p[E+1];if(M/=v.p.length*5,b/=v.p.length*5,!s(M,b)){if(n.has(v.n)){const E=new ne,_=Ph(E,t,v,e,He(1),f);_.custom=!0,u.push(_);continue}u.push(Ph(c(M,b),t,v,e,d,f))}}const m=i.houses,x=Ah(i);for(let v=0;v<m.length;v+=$o){const M=m[v]/4,b=m[v+1]/4,E=m[v+2]/10,_=m[v+3]/10,y=m[v+4]/10*(Math.PI/180),T=He(v*7919+17);s(M,b)||x(M,b)||(m[v+5]===1?o_(c(M,b),t,M,b,E,_,y,m[v+7],m[v+8],m[v+9]):n_(c(M,b),t,M,b,E,_,y,m[v+6],m[v+7],m[v+8],m[v+9],T))}const p=i.cabins;for(let v=0;v<p.length;v+=$g){const M=p[v]/4,b=p[v+1]/4;s(M,b)||l_(c(M,b),t,M,b,p[v+2]/10*(Math.PI/180),p[v+3],p[v+4],He(v*31+5))}const g=[];for(const v of Jo)s(v[1][0],v[1][1])||r_(c(v[1][0],v[1][1]),t,v,g);let S=0;for(const v of l.values()){v.frame(),S+=v.vertexCount/3;const M=new $t(v.build(),a);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}return{group:r,footprints:u,designedWalls:g,triangles:S}}class p_{constructor(t){ot(this,"targetFps");ot(this,"deadline",-1/0);ot(this,"lastDraw");this.targetFps=t===30?30:60}get target(){return this.targetFps}setTarget(t){const e=t===30?30:60;return e===this.targetFps?!1:(this.targetFps=e,this.reset(),!0)}reset(){this.deadline=-1/0,this.lastDraw=void 0}takeFrame(t){if(t+1<this.deadline)return;const e=1e3/this.targetFps,n=this.deadline+e;this.deadline=n<=t?t+e:n;const s=this.lastDraw===void 0?0:(t-this.lastDraw)/1e3;return this.lastDraw=t,s}}const Un=1.5;class m_{constructor(t,e,n,s,r,a,o){ot(this,"nx");ot(this,"nz");ot(this,"y");ot(this,"xMin");ot(this,"zMin");ot(this,"xMax");ot(this,"zMax");ot(this,"dx");ot(this,"dz");ot(this,"cellX");ot(this,"cellZ");this.raw=t,this.exposure=e,this.w=n,this.h=s,this.sizeX=r,this.sizeZ=a,this.cellX=r/n,this.cellZ=a/s,this.nx=Math.floor((n-1)/o)+1,this.nz=Math.floor((s-1)/o)+1,this.dx=this.cellX*o,this.dz=this.cellZ*o,this.xMin=-r/2+this.cellX/2,this.zMin=-a/2+this.cellZ/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);for(let l=0;l<this.nz;l++)for(let c=0;c<this.nx;c++)this.y[l*this.nx+c]=t[l*o*n+c*o]*Un}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,h=this.y[c],f=this.y[c+1],d=this.y[c+this.nx],u=this.y[c+this.nx+1];return o+l<=1?h+(f-h)*o+(d-h)*l:u+(d-u)*(1-o)+(f-u)*(1-l)}bilinear(t,e,n){let s=(e+this.sizeX/2)/this.cellX-.5,r=(n+this.sizeZ/2)/this.cellZ-.5;s<0?s=0:s>this.w-1.0001&&(s=this.w-1.0001),r<0?r=0:r>this.h-1.0001&&(r=this.h-1.0001);const a=s|0,o=r|0,l=s-a,c=r-o,h=o*this.w+a;return(t[h]*(1-l)+t[h+1]*l)*(1-c)+(t[h+this.w]*(1-l)+t[h+this.w+1]*l)*c}metresAt(t,e){return this.bilinear(this.raw,t,e)}exposureAt(t,e){return this.bilinear(this.exposure,t,e)}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}}class g_{constructor(t,e,n){ot(this,"items",[]);ot(this,"v",new W);ot(this,"visible",!0);ot(this,"obstacles",[]);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement("button");r.type="button",r.tabIndex=-1,r.className=`inv-label inv-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",r.addEventListener("click",()=>n(s.id)),t.appendChild(r),this.items.push({place:s,el:r,w:0,h:0,shown:!1})}}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.place;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=this.v.z<1&&this.v.z>-1&&l<(o.maxDist??1/0)&&l<s;const h=(this.v.x*.5+.5)*e,f=(-this.v.y*.5+.5)*n,d=h-a.w/2,u=f-a.h,m=h+a.w/2,x=f;if(c&&(m<0||d>e||x<0||u>n)&&(c=!1),c){for(const p of r)if(d<p[2]+6&&m>p[0]-6&&u<p[3]+4&&x>p[1]-4){c=!1;break}}c&&(r.push([d,u,m,x]),a.el.style.transform=`translate3d(${Math.round(d)}px, ${Math.round(u)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const __=[{id:"town",name:"A'Beckett Street",kind:"landmark",lat:-38.63372,lon:145.7283,blurb:"Inverloch's main street: bakeries, fish and chips, cafes and shops, a short walk from the inlet.",view:[380,58,-28],priority:1,lift:26},{id:"jetty",name:"Inverloch Jetty",kind:"landmark",lat:-38.63591,lon:145.73413,blurb:"Timber jetty reaching into Anderson Inlet, with the boat ramp alongside. A favourite for fishing and an evening walk.",view:[190,63,32],priority:1,lift:16},{id:"surf",name:"Surf Beach & Life Saving Club",kind:"landmark",lat:-38.64634,lon:145.70199,blurb:"Ocean beach facing Bass Strait, watched over by the Inverloch Surf Life Saving Club on the dune.",view:[330,62,-32],priority:1,lift:20},{id:"inlet",name:"Anderson Inlet",kind:"water",lat:-38.6412,lon:145.7445,blurb:"A shallow tidal estuary where the Tarwin River meets the sea. The sandbars here come from LiDAR survey data: slide the tide to cover and uncover them.",view:[3e3,50,8],priority:2},{id:"hub",name:"The Hub",kind:"landmark",lat:-38.63332,lon:145.72762,blurb:"Inverloch Community Hub on A'Beckett Street, home to the library and visitor information.",view:[300,60,20],priority:3,maxDist:2600,lift:18},{id:"espy",name:"Esplanade Hotel",kind:"landmark",lat:-38.63419,lon:145.72889,blurb:"The pub at the foreshore end of the main street.",view:[280,62,-40],priority:3,maxDist:2200,lift:18},{id:"rainbow",name:"Rainbow Park",kind:"landmark",lat:-38.63529,lon:145.72876,blurb:"Foreshore playground with picnic lawns and barbecues beside the inlet beach.",view:[150,60,14],priority:3,maxDist:2200,lift:14},{id:"bunurong",name:"Bunurong Environment Centre",kind:"landmark",lat:-38.63465,lon:145.72917,blurb:"Environment centre and shell museum on The Esplanade.",view:[260,60,-15],priority:5,maxDist:1100,lift:15},{id:"glade",name:"The Glade",kind:"landmark",lat:-38.63539,lon:145.7302,blurb:"Foreshore reserve and picnic shelter between the town centre and the jetty.",view:[300,62,5],priority:5,maxDist:1300,lift:13},{id:"oval",name:"Recreation Reserve",kind:"landmark",lat:-38.63194,lon:145.72681,blurb:"The town's football oval, a block back from the main street.",view:[460,58,15],priority:4,maxDist:2600,lift:16},{id:"school",name:"Primary School",kind:"landmark",lat:-38.63062,lon:145.72813,blurb:"Inverloch Primary School.",view:[380,58,0],priority:6,maxDist:1500,lift:14},{id:"bowls",name:"Bowls Club",kind:"landmark",lat:-38.63556,lon:145.73245,blurb:"Inverloch Bowls Club, two greens beside the foreshore.",view:[260,60,0],priority:6,maxDist:1300,lift:12},{id:"tennis",name:"Tennis Club & Oval",kind:"landmark",lat:-38.62722,lon:145.7372,blurb:"Tennis courts and a second football oval on the north-east side of town.",view:[520,58,10],priority:6,maxDist:2e3,lift:14},{id:"camping",name:"Foreshore Holiday Parks",kind:"landmark",lat:-38.63425,lon:145.7442,blurb:"Cabins, caravans and tents under the trees along The Esplanade, steps from the inlet.",view:[560,60,15],priority:4,maxDist:2800,lift:16},{id:"screw",name:"Screw Creek & Townsend Bluff",kind:"nature",lat:-38.6338,lon:145.7546,blurb:"A tidal creek in a nature conservation reserve, with a walking circuit up to the lookout on Townsend Bluff.",view:[900,60,-20],priority:3,lift:24},{id:"norman",name:"Point Norman",kind:"nature",lat:-38.648,lon:145.7118,blurb:"The corner where the surf beach turns into the inlet.",view:[900,60,-35],priority:4,maxDist:4200,lift:14},{id:"smythe",name:"Point Smythe",kind:"nature",lat:-38.6466,lon:145.7366,blurb:"The tip of the Venus Bay peninsula, across the entrance from town: coastal scrub, dunes and walking tracks.",view:[1300,58,150],priority:3,lift:22},{id:"racv",name:"RACV Inverloch Resort",kind:"landmark",lat:-38.6487,lon:145.6876,blurb:"Resort and villas on the Cape Paterson road, on the hill above the coast.",view:[520,60,40],priority:5,maxDist:3200,lift:18},{id:"strait",name:"Bass Strait",kind:"water",lat:-38.6565,lon:145.7075,blurb:"Open ocean. Swell rolls in to the surf beach from here.",view:[2300,50,-12],priority:4}];function x_(i,t){return __.map(e=>{const n=(e.lon-i.origin[0])*i.metresPerDegree[0],s=-(e.lat-i.origin[1])*i.metresPerDegree[1],r=Math.max(t.yAt(n,s),0);return{...e,x:n,z:s,y:r+(e.lift??6)}})}function on(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}const v_=new Set(["Inverloch Surf Life Saving Club","The Hub"]),Oe=H(10126440),Me=H(6113848),ln=H(16053230),ss=H(11842219),ge=H(7304312),ks=H(3163994),rs=H(13644844),as=H(15909424),M_=H(16119022),el=2.05*Un;function Dh(i,t,e,n=35){let s=1/0,r=0,a=1;for(let o=0;o<24;o++){const l=o/24*Math.PI*2,c=i.metresAt(t+Math.cos(l)*n,e+Math.sin(l)*n)+i.metresAt(t+Math.cos(l)*n*2,e+Math.sin(l)*n*2);c<s&&(s=c,r=Math.cos(l),a=Math.sin(l))}return[r,a]}function Zr(i){let t=0,e=0;for(let n=0;n<i.length;n+=2)t+=i[n],e+=i[n+1];return[t/(i.length/2)/10,e/(i.length/2)/10]}function S_(i,t,e){const n=[];for(let v=0;v<e.length;v+=2)n.push([e[v]/10,e[v+1]/10]);t.metresAt(n[0][0],n[0][1])<t.metresAt(n[n.length-1][0],n[n.length-1][1])&&n.reverse();const s=1.7,r=el,[a,o]=n[0];let l=a-n[1][0],c=o-n[1][1];const h=Math.hypot(l,c)||1;l/=h,c/=h;let f=0;for(;f<30&&t.yAt(a+l*f,o+c*f)<r-.25;)f+=1.5;const d=Math.max(t.yAt(a+l*f,o+c*f),r-1.2),u=Math.atan2(-l,-c);i.frame(a+l*f,0,o+c*f,u),i.quad(-s,d+.05,0,s,d+.05,0,s,r,f,-s,r,f,Oe),i.quad(-s,d-1.2,0,-s,r-.4,f,-s,r,f,-s,d+.05,0,Me),i.quad(s,d-1.2,0,s,d+.05,0,s,r,f,s,r-.4,f,Me);for(let v=0;v<n.length-1;v++){const[M,b]=n[v],[E,_]=n[v+1],y=Math.hypot(E-M,_-b),T=Math.atan2(E-M,_-b);i.frame(M,r,b,T);const w=Math.ceil(y/1.2);for(let D=0;D<w;D++){const z=D/w*y,P=(D+1)/w*y;i.box(-s,-.14,z,s,0,P,Jt(Oe,.9+D*7%5*.04),void 0,Me)}i.box(-s+.25,-.5,0,-s+.5,-.14,y,Me,null),i.box(s-.5,-.5,0,s-.25,-.14,y,Me,null);const C=Math.max(1,Math.round(y/3.6));for(let D=0;D<=C;D++){const z=D/C*y;for(const P of[-1,1]){const B=P*(s-.12),O=t.yAt(i.wx(B,z),i.wz(B,z));i.cyl(B,O-r-.6,z,.17,.15,r-O+.6+1.1,6,Me,Jt(Oe,.8))}i.box(-s,-.78,z-.12,s,-.5,z+.12,Me),i.quad(-s+.1,-2.6,z,s-.1,-.8,z,s-.1,-.6,z,-s+.1,-2.4,z,Jt(Me,.9))}for(const D of[-1,1]){const z=D*(s-.12);i.box(z-.05,1.02,0,z+.05,1.1,y,Oe,void 0,Me),i.box(z-.03,.52,0,z+.03,.58,y,Oe,void 0,Me)}i.box(-s,-.14,-s,s,0,.01,Oe,void 0,Me)}const[m,x]=n[n.length-1],[p,g]=n[n.length-2],S=Math.atan2(m-p,x-g);i.frame(m,r,x,S),i.box(-3.2,-.14,0,3.2,0,5.2,Jt(Oe,.96),void 0,Me);for(const[v,M]of[[-3.05,.2],[3.05,.2],[-3.05,5],[3.05,5],[0,5]]){const b=t.yAt(i.wx(v,M),i.wz(v,M));i.cyl(v,b-r-.6,M,.19,.17,r-b+.6+(v===0?0:1.1),6,Me,Jt(Oe,.8))}i.box(-3.1,1.02,4.9,3.1,1.1,5,Oe,void 0,Me),i.box(-3.1,1.02,0,-3,1.1,5,Oe,void 0,Me),i.box(3,1.02,0,3.1,1.1,5,Oe,void 0,Me),i.cyl(2.6,0,4.5,.07,.05,4.6,5,ge),i.blob(2.6,4.75,4.5,.28,.2,.28,6,3,H(16773320),void 0,1.6),i.box(-.35,-3.6,5.22,-.3,.9,5.28,ge,null),i.box(.3,-3.6,5.22,.35,.9,5.28,ge,null);for(let v=-3.3;v<.6;v+=.42)i.box(-.3,v,5.22,.3,v+.05,5.28,ge);return i.frame(),{head:new W(m,r,x),points:n}}function y_(i,t,e,n){const[s,r]=Dh(t,e,n,25),a=Math.atan2(s,r);i.frame(e,0,n,a);const o=4.2,l=-8,c=[];for(let m=l;m<=46;m+=3){const x=t.yAt(i.wx(0,m),i.wz(0,m));if(c.push([m,x]),x<-1.6*Un)break}const h=c[0][1]+.12,f=Math.min(c[c.length-1][1]+.25,-.9*Un),d=c[c.length-1][0],u=c.length-1;for(let m=0;m<u;m++){const x=l+(d-l)*m/u,p=l+(d-l)*(m+1)/u,g=h+(f-h)*m/u,S=h+(f-h)*(m+1)/u;i.quad(-o,g,x,-o,S,p,o,S,p,o,g,x,m%2?ss:Jt(ss,.94));for(const v of[-1,1])i.quad(v*o,g-1.5,x,v*o,S-1.5,p,v*o,S+.15,p,v*o,g+.15,x,Jt(ss,.8))}i.frame()}function E_(i,t,e){const[n,s]=Dh(t,e.cx,e.cz,60),r=e.obb;let a=r.heading,o=r.w,l=r.d,c=-1/0;for(let E=0;E<4;E++){const _=r.heading+E*Math.PI/2,y=Math.sin(_)*n+Math.cos(_)*s;y>c&&(c=y,a=_,o=E%2?r.d:r.w,l=E%2?r.w:r.d)}const h=o/2,f=l/2;i.frame(r.cx,e.floorY,r.cz,a);const d=H(13223611),u=H(15394522),m=H(6975604);i.box(-h,-4,-f,h,3.1,f,d,null),i.box(-h,3.1,-f,h,6.1,f,u,null);const x=Math.max(2,Math.floor(o/5));for(let E=0;E<x;E++){const _=-h+(E+.5)/x*o;i.quad(_-1.7,.05,f+.05,_+1.7,.05,f+.05,_+1.7,2.7,f+.05,_-1.7,2.7,f+.05,E%2?rs:as)}i.quad(-h+.6,3.6,f+.05,h-.6,3.6,f+.05,h-.6,5.7,f+.05,-h+.6,5.7,f+.05,ks,.9),i.box(-h-.6,2.95,f,h+.6,3.12,f+3.4,ss,Oe,Jt(ss,.8)),i.box(-h-.6,3.12,f+3.32,h+.6,4.15,f+3.4,H(10469580),null);for(const E of[-h-.4,-h/3,h/3,h+.4])i.box(E-.12,-4,f+3,E+.12,2.95,f+3.24,ge,null);i.quad(-h-.8,7.5,f+3.8,h+.8,7.5,f+3.8,h+.8,6.2,-f-.6,-h-.8,6.2,-f-.6,m),i.quad(-h,6.1,f,h,6.1,f,h,7.1,f,-h,7.1,f,u),i.quad(h,6.1,f,h,6.1,-f,h,6.3,-f,h,7.1,f,u),i.quad(-h,6.1,-f,-h,6.1,f,-h,7.1,f,-h,6.3,-f,u);const p=h-2.2,g=f-1.8;i.box(p-1.8,6.1,g-1.8,p+1.8,9.2,g+1.8,u,null),i.box(p-1.85,9.2,g-1.85,p+1.85,10.5,g+1.85,ks,null,null,.7),i.box(p-2.3,10.5,g-2.3,p+2.3,10.72,g+2.3,m),i.cyl(p,10.72,g,.06,.04,5.2,5,ln),i.quad(p,15.6,g,p+1.9,15.6,g,p+1.9,14.5,g,p,14.5,g,rs),i.quad(p,14.5,g,p+1.9,14.5,g,p+1.9,13.4,g,p,13.4,g,as);for(let E=0;E<4;E++){const _=-h+(E+.5)/4*o;i.quad(_+.9,3.9,-f-.05,_-.9,3.9,-f-.05,_-.9,5.3,-f-.05,_+.9,5.3,-f-.05,ks,E%2)}let S=f+14;for(;S<160&&t.metresAt(r.cx+n*S,r.cz+s*S)>1.75;)S+=3;const v=r.cx+n*S,M=r.cz+s*S,b=Math.atan2(n,s);i.frame(v,t.yAt(v,M),M,b);for(const E of[-1,1]){const _=E*32,y=t.yAt(i.wx(_,0),i.wz(_,0))-t.yAt(v,M);i.cyl(_,y,0,.05,.04,4.4,5,ln),i.quad(_,y+4.4,0,_+.95,y+4.4,0,_+.95,y+3.1,0,_,y+3.1,0,rs),i.quad(_,y+3.1,0,_+.95,y+3.1,0,_+.95,y+1.8,0,_,y+1.8,0,as)}for(const[E,_]of[[-1.5,-5.5],[1.5,-5.5],[-1.5,-8.5],[1.5,-8.5]])i.cyl(E,0,_,.04,.04,2.2,4,ge);i.tri(-1.7,2.2,-5.3,1.7,2.2,-5.3,0,3,-7,rs),i.tri(1.7,2.2,-8.7,-1.7,2.2,-8.7,0,3,-7,rs),i.tri(1.7,2.2,-5.3,1.7,2.2,-8.7,0,3,-7,as),i.tri(-1.7,2.2,-8.7,-1.7,2.2,-5.3,0,3,-7,as),i.blob(6,.35,-6,.95,.4,2.1,8,3,H(14238751),H(15755818)),i.box(5.6,.3,-7.9,6.4,.95,-7.5,H(2763308));for(let E=0;E<4;E++)i.box(-7+E*.5,.2,-7.2,-6.85+E*.5,.75,-4.6,E%2?as:H(3116992));return i.frame(),{beach:new W(v,t.yAt(v,M),M),seaward:[n,s]}}function Lh(i,t){const e=i.length/2;let n=0;for(let a=0;a<e;a++){const o=(a+1)%e;n+=i[a*2]*i[o*2+1]-i[o*2]*i[a*2+1]}const s=n>0?1:-1,r=[];for(let a=0;a<e;a++){const o=(a+e-1)%e,l=(a+1)%e;let c=i[a*2]-i[o*2],h=i[a*2+1]-i[o*2+1],f=i[l*2]-i[a*2],d=i[l*2+1]-i[a*2+1];const u=Math.hypot(c,h)||1,m=Math.hypot(f,d)||1;c/=u,h/=u,f/=m,d/=m;const x=-h*s,p=c*s;let g=x-d*s,S=p+f*s;const v=Math.hypot(g,S)||1;g/=v,S/=v;const M=t/Math.max(.45,g*x+S*p);r.push(i[a*2]+g*M,i[a*2+1]+S*M)}return r}function b_(i,t,e){i.frame(0,e.floorY,0,0);const n=H(11111014),s=H(15328470),r=H(9410458);let a=1/0;for(let h=0;h<e.poly.length;h+=2)a=Math.min(a,t.yAt(e.poly[h],e.poly[h+1]));const o=e.poly.length/2;i.walls(e.poly,a-e.floorY-.3,3.2,n),i.walls(e.poly,3.2,6.2,s);const l=Lh(e.poly,3.2),c=Lh(e.poly,4.4);for(let h=0;h<o;h++){const f=(h+1)%o;i.quad(e.poly[h*2],6.6,e.poly[h*2+1],e.poly[f*2],6.6,e.poly[f*2+1],l[f*2],6.05,l[f*2+1],l[h*2],6.05,l[h*2+1],r)}if(i.walls(e.poly,6.2,6.6,Jt(s,.92)),i.walls(l,6.05,7.9,ks,.8),i.cap(l,7.9,Jt(r,1.08)),i.walls(c,7.9,8.3,Jt(r,.9)),i.cap(c,8.3,r),e.street){const h=e.street;i.frame(h.x,e.floorY,h.z,h.heading),i.quad(.6,.3,.06,h.length-.6,.3,.06,h.length-.6,5.6,.06,.6,5.6,.06,ks,.9),i.box(h.length*.3,3.3,0,h.length*.7,3.5,3.4,H(14263361),void 0,Jt(H(14263361),.8)),i.box(h.length*.3+.2,0,3.1,h.length*.3+.4,3.3,3.3,ge,null),i.box(h.length*.7-.4,0,3.1,h.length*.7-.2,3.3,3.3,ge,null)}i.frame()}function nn(i,t,e,n,s,r=M_){const a=e.length,o=.22,l=s?a:a-1;for(let c=0;c<l;c++){const[h,f]=e[c],[d,u]=e[(c+1)%a];let m=-(u-f),x=d-h;const p=Math.hypot(m,x)||1;m=m/p*n*.5,x=x/p*n*.5;const g=t.yAt(h,f)+o,S=t.yAt(d,u)+o;i.quad(h+m,g,f+x,d+m,S,u+x,d-m,S,u-x,h-m,g,f-x,r)}}function w_(i,t,e,n,s){const r=[];for(let v=0;v<n.length;v+=2)r.push([n[v]/10,n[v+1]/10]);const[a,o]=Zr(n);let l=0,c=0,h=0;for(const[v,M]of r)l+=(v-a)**2,c+=(M-o)**2,h+=(v-a)*(M-o);const f=.5*Math.atan2(2*h,l-c),d=Math.cos(f),u=Math.sin(f);let m=0,x=0;for(const[v,M]of r)m=Math.max(m,Math.abs((v-a)*d+(M-o)*u)),x=Math.max(x,Math.abs(-(v-a)*u+(M-o)*d));m-=5,x-=5;const p=(v,M)=>[a+v*d-M*u,o+v*u+M*d],g=[];for(let v=0;v<72;v++){const M=v/72*Math.PI*2;g.push(p(Math.cos(M)*m,Math.sin(M)*x))}nn(t,e,g,.35,!0),nn(t,e,[p(-25,-25),p(25,-25),p(25,25),p(-25,25)],.3,!0);const S=v=>Array.from({length:24},(M,b)=>p(Math.cos(b/24*Math.PI*2)*v,Math.sin(b/24*Math.PI*2)*v));nn(t,e,S(5),.3,!0),nn(t,e,S(1.5),.3,!0);for(const v of[-1,1]){nn(t,e,[p(v*m,-3.2),p(v*(m-9),-3.2),p(v*(m-9),3.2),p(v*m,3.2)],.3,!1);const M=[];for(let b=-8;b<=8;b++){const E=b/8*1.05,_=v*(m-50*Math.cos(E)),y=50*Math.sin(E);(_/m)**2+(y/x)**2<1&&M.push(p(_,y))}M.length>2&&nn(t,e,M,.3,!1);for(const[b,E]of[[-3.2,9.5],[3.2,9.5],[-9.6,6.2],[9.6,6.2]]){const[_,y]=p(v*m,b);i.frame(_,e.yAt(_,y),y,0),i.cyl(0,0,0,.11,.09,E,6,ln),i.cyl(0,0,0,.2,.2,1.6,6,b*b<12?H(2973608):H(12597806))}}if(s)for(const[v,M]of[[-.62,-1],[.62,-1],[-.62,1],[.62,1]]){const[b,E]=p(v*(m+6),M*(x+9));i.frame(b,e.yAt(b,E),E,Math.atan2(a-b,o-E)),i.cyl(0,0,0,.28,.16,24,6,ge),i.box(-1.7,24,-.2,1.7,25.3,.2,H(4869972)),i.quad(-1.6,24.1,.22,1.6,24.1,.22,1.6,25.2,.22,-1.6,25.2,.22,H(16774876),2.2)}i.frame()}function T_(i,t,e,n,s){const r=[];for(let M=0;M<n.length;M+=2)r.push([n[M]/10,n[M+1]/10]);if(r.length<4)return;if(s==="bowls"){nn(t,e,r,.5,!0,H(15328986));return}const[a,o,l,c]=r,h=Math.hypot(o[0]-a[0],o[1]-a[1])>Math.hypot(l[0]-o[0],l[1]-o[1]),f=h?a:o,d=h?o:l,u=h?l:c,m=h?c:a,x=(M,b)=>{const E=f[0]+(d[0]-f[0])*M,_=f[1]+(d[1]-f[1])*M,y=m[0]+(u[0]-m[0])*M,T=m[1]+(u[1]-m[1])*M;return[E+(y-E)*b,_+(T-_)*b]},p=.14;nn(t,e,[x(0,0),x(1,0),x(1,1),x(0,1)],p,!0),nn(t,e,[x(0,.125),x(1,.125)],p,!1),nn(t,e,[x(0,.875),x(1,.875)],p,!1),nn(t,e,[x(.23,.125),x(.23,.875)],p,!1),nn(t,e,[x(.77,.125),x(.77,.875)],p,!1),nn(t,e,[x(.23,.5),x(.77,.5)],p,!1);const g=x(.5,-.04),S=x(.5,1.04),v=e.yAt(g[0],g[1])+.2;i.frame(0,v,0,0),i.quad(g[0],0,g[1],S[0],0,S[1],S[0],.95,S[1],g[0],.95,g[1],H(2830131)),i.quad(g[0],.95,g[1],S[0],.95,S[1],S[0],1.05,S[1],g[0],1.05,g[1],ln);for(const M of[g,S])i.cyl(M[0],0,M[1],.06,.06,1.1,5,ge);i.frame()}const Kn=[14826299,15764004,15909424,5025616,3117008,8280002].map(H);function A_(i,t,e,n,s){const[r,a]=Zr(e),o=t.yAt(r,a)+.05,l=s()*Math.PI;i.frame(r,o,a,l);const c=(d,u,m,x)=>{for(const[p,g]of[[-.9,-.9],[.9,-.9],[.9,.9],[-.9,.9]])i.cyl(d+p,0,u+g,.07,.07,m+2,5,H(8018492));i.box(d-1,m-.1,u-1,d+1,m,u+1,Oe,void 0,Me),i.cyl(d,m+2,u,1.5,0,1,4,x)};c(-2.2,0,1.5,Kn[0]),c(2.2,0,2.1,Kn[4]),i.box(-1.2,1.4,-.35,1.2,1.5,.35,Oe),i.quad(3.2,2.1,-.4,6.4,.15,-.4,6.4,.15,.4,3.2,2.1,.4,Kn[2]),i.quad(-3.2,1.5,.4,-5.6,.15,.4,-5.6,.15,-.4,-3.2,1.5,-.4,Kn[1]);const h=0,f=5.2;for(const d of[-2.2,2.2])i.quad(h+d,0,f-1.1,h+d+.08,0,f-1.1,h+d+.08,2.6,f,h+d,2.6,f,ge),i.quad(h+d,0,f+1.1,h+d+.08,0,f+1.1,h+d+.08,2.6,f,h+d,2.6,f,ge);i.box(h-2.25,2.55,f-.05,h+2.25,2.65,f+.05,Kn[3]);for(const d of[-1.1,0,1.1])i.box(h+d-.25,.5,f-.1,h+d+.25,.56,f+.1,H(2763308)),i.box(h+d-.24,.56,f-.01,h+d-.22,2.55,f+.01,ge,null),i.box(h+d+.22,.56,f-.01,h+d+.24,2.55,f+.01,ge,null);if(n){i.cyl(-6.5,0,-5.5,.09,.07,5.2,5,ge);for(let d=0;d<6;d++){const u=d/6*Math.PI*2,m=-6.5+Math.cos(u)*3.2,x=-5.5+Math.sin(u)*3.2;i.quad(m-.04,0,x,m+.04,0,x,-6.46,5.1,-5.5,-6.54,5.1,-5.5,H(3104672))}for(let d=0;d<6;d++){const u=-9+d*3.4,m=Kn[d],x=4.6,p=3.3;i.cyl(u,0,-11,.08,.07,x,5,ge),i.cyl(u+1.7,0,-7.2,.08,.07,p,5,ge),i.tri(u,x,-11,u+3.4,x,-11,u+1.7,p,-7.2,m)}i.cyl(11.399999999999999,0,-11,.08,.07,4.6,5,ge),i.cyl(6.5,.3,5.5,1.3,1.3,.12,10,Kn[5],Kn[2]),i.cyl(6.5,0,5.5,.1,.1,1.1,5,ge);for(let d=0;d<3;d++)i.blob(9.5+d*1.6,.55,-1.5,.3,.3,.55,5,3,Kn[(d*2+1)%6])}i.frame()}function R_(i,t,e){const n=[];for(let f=0;f<e.length;f+=2)n.push([e[f]/10,e[f+1]/10]);const[s,r]=Zr(e),a=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1])>Math.hypot(n[2][0]-n[1][0],n[2][1]-n[1][1])?[n[0],n[1]]:[n[1],n[2]],o=Math.atan2(a[1][0]-a[0][0],a[1][1]-a[0][1]),l=Math.hypot(a[1][0]-a[0][0],a[1][1]-a[0][1])/2-1;i.frame(s,t.yAt(s,r)+.1,r,o);const c=H(13092286),h=Jt(c,.88);for(const f of[-1,1]){const d=f*l,u=[[0,0],[1.4,.35],[2.4,1.1],[3,2]];for(let m=0;m<3;m++){const[x,p]=u[m],[g,S]=u[m+1],v=d-f*(3-x),M=d-f*(3-g);f>0?i.quad(-4,p,v,4,p,v,4,S,M,-4,S,M,m%2?c:h):i.quad(4,p,v,-4,p,v,-4,S,M,4,S,M,m%2?c:h)}i.box(-4,0,Math.min(d,d+f*1.2),4,2,Math.max(d,d+f*1.2),h,c)}i.box(-1.5,0,-1.2,1.5,.45,1.2,h,c),i.quad(-1.5,.45,1.2,1.5,.45,1.2,1.5,0,3,-1.5,0,3,c),i.quad(1.5,.45,-1.2,-1.5,.45,-1.2,-1.5,0,-3,1.5,0,-3,c),i.box(3.2,.45,-2.5,3.28,.5,2.5,ge),i.frame()}function C_(i,t){const e=t.obb,n=e.w>=e.d,s=(n?e.w:e.d)/2;i.frame(e.cx,t.floorY,e.cz,e.heading);const r=n?s+1.2:0,a=n?0:s+1.2,o=H(15262418);i.box(r-1.4,-1,a-1.4,r+1.4,t.wallH+4.6,a+1.4,o,null),i.cyl(r,t.wallH+4.6,a,2.1,0,4.2,4,H(5922659)),i.box(r-.07,t.wallH+8.8,a-.07,r+.07,t.wallH+10.6,a+.07,ln),i.box(r-.5,t.wallH+9.8,a-.07,r+.5,t.wallH+9.95,a+.07,ln),i.frame()}function P_(i,t,e,n){i.frame(e,t.yAt(e,n),n,.4);const s=46;for(let r=0;r<6;r++){const a=r/6*s,o=1.5-r/6*1.1,l=1.5-(r+1)/6*1.1;i.cyl(0,a,0,o,l,s/6,3,r%2?ln:rs)}i.cyl(0,s,0,.08,.05,5,4,ge),i.blob(0,s+5.1,0,.3,.3,.3,5,3,H(16726832),void 0,2.5);for(const[r,a]of[[.3,38],[2.4,35],[4.4,40]])i.cyl(Math.cos(r)*.9,a,Math.sin(r)*.9,.55,.55,.35,8,ln,ln);i.box(2.5,0,-1.5,5.5,2.6,1.5,H(13619919),H(9080716)),i.frame()}function D_(i,t,e,n,s){const r=s.nearest(e,n,60),a=r?Math.atan2(r.px-e,r.pz-n):0;i.frame(e,t.yAt(e,n)+.1,n,a);const o=H(3116874);for(const[l,c]of[[-6,3.5],[6,3.5],[-6,9.5],[6,9.5]])i.box(l-.2,0,c-.2,l+.2,5,c+.2,ln,null);i.box(-8,5,2,8,5.25,11,ln,H(14277590),H(15921902),.5),i.box(-8.05,5.25,1.95,8.05,5.9,11.05,o,H(14277590));for(const l of[-4,0,4])i.box(l-1.3,0,6.2,l+1.3,.2,6.8,ss),i.box(l-.4,.2,6.25,l+.4,1.7,6.75,ln,o);i.frame()}function L_(i,t,e,n,s){for(let r=0;r<3;r++){const a=e+(s()-.5)*16,o=n+(s()-.5)*16;i.frame(a,t.yAt(a,o)+.05,o,s()*Math.PI),i.box(-1,.7,-.4,1,.78,.4,Oe,void 0,Me),i.box(-1,.4,-.85,1,.46,-.6,Oe,void 0,Me),i.box(-1,.4,.6,1,.46,.85,Oe,void 0,Me),i.box(-.75,0,-.7,-.65,.7,.7,ge,null),i.box(.65,0,-.7,.75,.7,.7,ge,null)}i.frame()}function I_(i){if(!i.hasDetail)return null;const{town:t,hf:e,roads:n,paths:s}=i,r=new ne,a=He(4411),o=[12597547,3108687,15921902,3426654,9268810,14266938,10134443].map(H),l=H(7301730),c=H(3103290),h=[H(13115434),H(15254046)],f=t.houses,d=Ah(t),u=[];for(let E=0;E<f.length;E+=$o)f[E+5]!==1&&u.push(f[E]/4,f[E+1]/4);const m=u.length;for(const[,E,,,,,,_]of Jo)_!=="s"&&E[2]>=5&&u.push(E[0],E[1]);for(let E=0;E<u.length;E+=2){const _=u[E],y=u[E+1];if(!i.isDetail(_,y)||i.isClear(_,y))continue;const T=n.nearest(_,y,45),w=a()<.5?-1:1,C=w*(2.5+a()*2.5),D=Math.floor(a()*o.length),z=a()<.7;if(!T||E<m&&d(_,y))continue;const P=T.cls<=3?6.4:3.6;if(T.dist<P+3)continue;const B=(_-T.px)/T.dist,O=(y-T.pz)/T.dist,U=-O,Y=B,F=Math.atan2(B,O),L=T.px+B*P+U*C,N=T.pz+O*P+Y*C;if(!i.isClear(L,N)&&(r.frame(L,e.yAt(L,N),N,F),r.box(-.05,0,-.05,.05,.95,.05,l),r.box(-.17,.95,-.22,.17,1.22,.22,o[D],Jt(o[D],.8)),z)){const X=T.px+B*(P-1.1)+U*(C+w*1.5),Z=T.pz+O*(P-1.1)+Y*(C+w*1.5);r.frame(X,e.yAt(X,Z),Z,F),h.forEach((V,J)=>{r.box(J*.72-.28,0,-.33,J*.72+.28,.96,.33,c),r.box(J*.72-.3,.96,-.36,J*.72+.3,1.04,.36,V)})}}const x=H(7034692),p=H(5917242),g=H(2829102),S=H(14276303),v=42,M=new ne;for(const E of s){if(E.cls>3||E.flags)continue;const _=E.pts.length/3;let y=v*.4,T=null;for(let w=1;w<_;w++){const C=E.pts[w*3-3],D=E.pts[w*3-1],z=E.pts[w*3],P=E.pts[w*3+2],B=Math.hypot(z-C,P-D);if(y+=B,y<v)continue;y=0;const O=(z-C)/(B||1),U=(P-D)/(B||1),Y=E.width/2+2.5,F=z+U*Y,L=P-O*Y;if(!i.isDetail(F,L)||i.isClear(F,L)||!e.inside(F,L,20)){T=null;continue}const N=e.yAt(F,L);M.frame(F,N,L,Math.atan2(O,U)),M.cyl(0,0,0,.15,.1,9.2,6,x),M.box(-1.15,8.45,-.06,1.15,8.58,.06,p);for(const Z of[-.95,0,.95])M.box(Z-.04,8.58,-.04,Z+.04,8.72,.04,S);const X={x:F,y:N+8.72,z:L,nx:U,nz:-O};if(T&&Math.hypot(X.x-T.x,X.z-T.z)<v*1.8){M.frame();for(const Z of[-.95,0,.95]){const V=T.x+T.nx*Z,J=T.z+T.nz*Z,rt=X.x+X.nx*Z,lt=X.z+X.nz*Z,it=(V+rt)/2,yt=(J+lt)/2,Ot=(T.y+X.y)/2-.5;for(const[bt,kt,Xt,Ut,ae,Kt]of[[V,T.y,J,it,Ot,yt],[it,Ot,yt,rt,X.y,lt]])M.quad(bt,kt,Xt,Ut,ae,Kt,Ut,ae+.035,Kt,bt,kt+.035,Xt,g),M.quad(bt,kt,Xt,Ut,ae,Kt,Ut+X.nx*.035,ae,Kt+X.nz*.035,bt+X.nx*.035,kt,Xt+X.nz*.035,g)}}T=X}}if(!r.vertexCount&&!M.vertexCount)return null;const b=new $t(r.build(),es());if(b.castShadow=!0,b.receiveShadow=!0,b.name="street-detail",M.vertexCount){const E=new $t(M.build(),es());E.castShadow=!1,E.receiveShadow=!0,E.name="power-poles",b.add(E)}return b}function N_(i){const{town:t,hf:e,paths:n}=i,s=120,r=new Map,a=t.houses;for(let C=0;C<a.length;C+=$o){const D=Math.floor(a[C]/4/s)*4096+Math.floor(a[C+1]/4/s)+8390656;r.set(D,(r.get(D)??0)+1)}const[o,l]=on(t.meta,-38.63385,145.7285),c=(C,D)=>(r.get(Math.floor(C/s)*4096+Math.floor(D/s)+2048*4097)??0)>=4||Math.hypot(C-o,D-l)<380,h=[];for(const C of n){if(C.cls>2||C.flags)continue;const D=C.cls===0?48:58,z=C.pts.length/3;let P=D*.5,B=1;for(let O=1;O<z;O++){const U=C.pts[O*3-3],Y=C.pts[O*3-1],F=C.pts[O*3],L=C.pts[O*3+2],N=Math.hypot(F-U,L-Y);if(P+=N,P<D)continue;P=0,B=-B;const X=(F-U)/(N||1),Z=(L-Y)/(N||1),V=C.width/2+1.6,J=F-Z*V*B,rt=L+X*V*B;!c(J,rt)||!e.inside(J,rt,20)||i.isClear(J,rt)||h.push(J,e.yAt(J,rt),rt,Math.atan2(Z*B,-X*B))}}const f=new ne,d=H(9278358);f.cyl(0,0,0,.11,.07,8.2,5,d),f.box(-.05,8.1,0,.05,8.22,2.2,d),f.box(-.22,8,1.7,.22,8.14,2.5,H(5922659)),f.quad(-.2,7.99,2.48,.2,7.99,2.48,.2,7.99,1.72,-.2,7.99,1.72,H(16773320),3);const u=h.length/4,m=new Ke(f.build(),es(),u),x=document.createElement("canvas");x.width=x.height=64;const p=x.getContext("2d"),g=p.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,214,150,0.85)"),g.addColorStop(.45,"rgba(255,196,120,0.32)"),g.addColorStop(1,"rgba(255,180,100,0)"),p.fillStyle=g,p.fillRect(0,0,64,64);const S=new Ao(x);S.colorSpace=ye;const v=new ui(34,34);v.rotateX(-Math.PI/2);const M=new Dn({map:S,transparent:!0,opacity:0,blending:na,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-12}),b=new Ke(v,M,u);b.renderOrder=3;const E=new Qt,_=new _n,y=new W(0,1,0),T=new W(1,1,1),w=new W;for(let C=0;C<u;C++){const D=h[C*4],z=h[C*4+1],P=h[C*4+2],B=h[C*4+3];_.setFromAxisAngle(y,B),m.setMatrixAt(C,E.compose(w.set(D,z,P),_,T));const O=D+Math.sin(B)*2.1,U=P+Math.cos(B)*2.1;b.setMatrixAt(C,E.compose(w.set(O,e.yAt(O,U)+.5,U),_.identity(),T))}return m.castShadow=!1,m.computeBoundingSphere(),b.computeBoundingSphere(),b.onBeforeRender=()=>{M.opacity=kr.value*.9},b.visible=!0,{lights:m,pools:b,poolMat:M}}function U_(i){const{town:t,hf:e,footprints:n,roads:s}=i,r=new je;r.name="landmarks";const a=new ne,o=new ne,l=He(20261111),c={group:r,nightMaterials:[]};t.piers[0]&&(c.jetty=S_(a,e,t.piers[0]));for(const[y,T]of[[-38.63578,145.73393],[-38.63595,145.73085]]){const[w,C]=on(t.meta,y,T);y_(a,e,w,C)}const h=n.find(y=>y.name==="Inverloch Surf Life Saving Club");h&&(c.surf=E_(a,e,h));const f=n.find(y=>y.name==="The Hub");f&&b_(a,e,f);for(const y of n)y.kind==="church"&&C_(a,y);let d=0;for(const y of t.pitches)y.s==="australian_football"?w_(a,o,e,y.p,d++===0):y.s==="tennis"||y.s==="bowls"?T_(a,o,e,y.p,y.s):y.s==="skateboard"&&R_(a,e,y.p);const[u,m]=on(t.meta,-38.63529,145.72876);for(const y of t.playgrounds){const[T,w]=Zr(y);A_(a,e,y,Math.hypot(T-u,w-m)<60,l)}const[x,p]=on(t.meta,-38.62462,145.71011);P_(a,e,x,p);const[g,S]=on(t.meta,-38.63161,145.72943);D_(a,e,g,S,s);for(const[y,T]of[[-38.6358,145.72885],[-38.63447,145.72923],[-38.63545,145.72875]]){const[w,C]=on(t.meta,y,T);L_(a,e,w,C,l)}const v=new $t(a.build(),es());v.castShadow=!0,v.receiveShadow=!0,r.add(v);const M=o.build();M.deleteAttribute("glow");const b=new $t(M,Gr(new Dn({vertexColors:!0,side:Be,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})));r.add(b);const E=I_(i);E&&r.add(E);const _=N_(i);return r.add(_.lights,_.pools),c.nightMaterials.push(_.poolMat),c}class Ih{constructor(t,e){ot(this,"bounds",new li);ot(this,"level",-1);this.levels=t;for(const s of t)for(const r of s)r.computeBoundingBox(),this.bounds.union(r.boundingBox),r.castShadow=!0,e.add(r);const n=this.bounds.getBoundingSphere(new Mi);for(const s of t.flat())s.boundingSphere=n,s.visible=!1}update(t,e,n){const s=this.bounds.distanceToPoint(t),[r,a,o]=n,l=o+e*8,c=f=>this.level<0?1:this.level<=f?1.1:.9,h=s<=r*c(0)?0:s<=a*c(1)?1:s<=l*c(2)?2:3;if(h!==this.level){for(const f of this.levels[this.level]??[])f.visible=!1;for(const f of this.levels[h]??[])f.visible=!0;this.level=h}}}const Nh=.25,os=[16053490,16053490,16053490,13225168,10725291,5593438,2040100,2838410,11020586,2054728,14266938,8368595],Uh=[15223869,3113154,15909424,3843690,16777215,9329589,15764004,2042422,15231654,4899008],$n=[14826299,15764004,15909424,3715691,3117008,13651872,3720896,16053490].map(H);function Fh(){const i=new ne,t=H(16777215),e=H(1713198),n=H(1381655);i.box(-.88,.3,-2.1,.88,.95,2.1,t,void 0,n),i.box(-.8,.95,-1.35,.8,1.48,.7,e,t);for(const s of[-.9,.68])for(const r of[-1.55,1])i.box(s,0,r,s+.22,.62,r+.62,n);for(const s of[-.75,.45])i.quad(s,.6,2.11,s+.3,.6,2.11,s+.3,.8,2.11,s,.8,2.11,H(16776166),2.2);return i.build()}function nl(i){const t=new ne,e=new ne;return Hh(i,t,e,H(16777215)),{body:t.build(),trim:e.build()}}function il(i){const t=i===1,e=i===2,n=e?-2.3:-2.18,s=e?2.22:2.18,r=e?1.035:t?.99:.93;return{wagon:t,ute:e,tail:n,nose:s,sill:r,belt:o=>{const l=Math.max(0,(n+.58-o)/.58,(o-s+.55)/.55),c=o<0?t||e?.045:.095:.14,h=r-l*c;return{width:.88-.13*l,shoulder:h-.105,top:h}}}}function Oh(i,t){const e=new ne,{wagon:n,ute:s,tail:r,nose:a,sill:o}=il(i),l=H(16777215),c=H(6584713),h=H(2236966),f=s?1.63:n?1.6:1.49,d=s?-.37:n?-1.72:-.74,u=s?.64:.42,m=(x,p,g,S,v,M,b,E)=>{e.quad(-x,p,S,x,p,S,.65,v,b,-.65,v,b,E),e.quad(x,p,g,-x,p,g,-.65,v,M,.65,v,M,E),e.quad(x,p,S,x,p,g,.65,v,M,.65,v,b,E),e.quad(-x,p,g,-x,p,S,-.65,v,b,-.65,v,M,E),e.quad(-.65,v,b,.65,v,b,.65,v,M,-.65,v,M,l)};if(t)m(.88,.3,r,a,f,d,u,l);else{e.box(-.88,.3,r,.88,o,a,l),m(.77,o,s?-.52:n?-1.95:-1.47,1.02,f,d,u,c);for(const x of[-1.35,1.38])e.quad(.9,.02,x+.32,.9,.02,x-.32,.9,.57,x-.32,.9,.57,x+.32,h),e.quad(-.9,.02,x-.32,-.9,.02,x+.32,-.9,.57,x+.32,-.9,.57,x-.32,h)}return e.build()}function zh(i,t,e,n,s,r,a){const o=t>0?r-.025:r-.1,l=t<0&&(i===1||i===2);return[[e*.42,o,n],[e*(s-.022),o-(l?.13:0),n],[e*(s-.064),a-.025,n],[e*(t>0?.31:.43),a-.052,n]]}const Bh=12;function kh(i){const t=new ne,e=il(i);for(const s of[1,-1])for(const r of[1,-1]){const a=i<0?r*2.1:r>0?e.nose:e.tail,o=a+r*.02;let l;if(i<0){const c=r>0?.755:.59,h=.865;l=[[s*c,.62,o],[s*h,.62,o],[s*h,.77,o],[s*c,.77,o]]}else{const{width:c,shoulder:h,top:f}=e.belt(a),[d,u,m,x]=zh(i,r,s,o,c,h,f),p=(g,S,v)=>[g[0]+(S[0]-g[0])*v,g[1]+(S[1]-g[1])*v,o];l=[p(d,u,.59),p(d,u,.99),p(x,m,.99),p(x,m,.59)]}s!==r&&l.reverse(),t.quad(...l[0],...l[1],...l[2],...l[3],H(16777215))}const n=new $t(t.build(),new Dn({color:16752666,toneMapped:!1}));return n.visible=!1,n}function Gh(i,t){i.visible=t===-1||t===1,i.visible&&(i.name=t<0?"left-turn-indicator":"right-turn-indicator",i.geometry.setDrawRange(t<0?0:Bh,Bh))}function Hh(i,t,e,n){const s=H(4413799),r=H(3425876),a=H(2635588),o=H(8624550),l=H(6651533),c=H(2105636),h=H(2566960),f=H(11252924),d=H(5793135),u=(L,N,X,Z,V,J,rt=!1,lt=0)=>{rt?L.quad(...V,...Z,...X,...N,J,lt):L.quad(...N,...X,...Z,...V,J,lt)},{wagon:m,ute:x,tail:p,nose:g,sill:S,belt:v}=il(i),M=x||m?1.55:1.42,b=x?1.63:m?1.6:1.49,E=x?-.52:m?-1.95:-1.47,_=x?-.37:m?-1.72:-.74,y=1.02,T=x?.64:.42,w=-1.35,C=1.38,D=.34,z=.387,P=[p,p+.58,g-.55,g];for(const L of[w,C])for(let N=0;N<=5;N++)P.push(L-z*Math.cos(Math.PI*N/5));P.sort((L,N)=>L-N);const B=L=>{const N=Math.min(Math.abs(L-w),Math.abs(L-C));return N<z+1e-5?D+Math.sqrt(Math.max(0,z*z-N*N)):.3};for(const L of[-1,1])for(let N=1;N<P.length;N++){const X=P[N-1],Z=P[N],V=v(X),J=v(Z);u(t,[L*V.width,B(X),X],[L*V.width,V.shoulder,X],[L*J.width,J.shoulder,Z],[L*J.width,B(Z),Z],n,L<0)}const O=[p,p+.15,p+.58,E,y,g-.55,g].sort((L,N)=>L-N);for(let L=1;L<O.length;L++){const N=O[L-1],X=O[L],Z=v(N),V=v(X);for(const it of[-1,1])u(t,[it*Z.width,Z.shoulder,N],[it*(Z.width-.08),Z.top,N],[it*(V.width-.08),V.top,X],[it*V.width,V.shoulder,X],n,it<0);if(N>=E&&X<=y)continue;const J=x&&N>=p+.15&&X<=E,rt=Z.width-.08,lt=V.width-.08;if(J)for(const it of[-1,1])u(t,[it*rt,Z.top,N],[it*.665,Z.top,N],[it*.665,V.top,X],[it*lt,V.top,X],n,it<0),u(e,[it*.665,Z.top,N],[it*.665,.7,N],[it*.665,.7,X],[it*.665,V.top,X],h,it<0);else u(t,[-rt,Z.top,N],[-lt,V.top,X],[lt,V.top,X],[rt,Z.top,N],n)}if(x){const L=p+.15,N=E;u(e,[-.665,.7,L],[-.665,.7,N],[.665,.7,N],[.665,.7,L],H(4343627));for(const[X,Z]of[[L,1],[N,0]])u(e,[-.665,.7,X],[.665,.7,X],[.665,v(X).top,X],[-.665,v(X).top,X],h,!Z)}const U=(L,N,X)=>{const Z=E+(_-E)*X,V=y+(T-y)*X;return[L*(.8-.145*X),S+(M-S)*X,Z+(V-Z)*N]},Y=m?[0,.07,.275,.32,.56,.6,.935,1]:x?[0,.12,.33,.395,.925,1]:[0,.09,.47,.525,.925,1];for(const L of[-1,1]){const N=(X,Z,V,J,rt,lt)=>u(rt,U(L,X,V),U(L,X,J),U(L,Z,J),U(L,Z,V),lt,L<0);N(0,1,0,.07,t,n),N(0,1,.93,1,t,n);for(let X=1;X<Y.length;X++){const Z=X%2===0,V=X!==1&&X!==Y.length-1,J=e.vertexCount;N(Y[X-1],Y[X],.07,.93,Z||V?e:t,Z?X===2?a:r:V?h:n),Z&&e.gradientY(J,S,M,X===2?a:r,X===2?l:o)}}for(const L of[-1,1])u(t,U(L,0,1),[L*.58,b,_+.045],[L*.58,b,T-.045],U(L,1,1),n,L<0);u(t,[-.58,b,_+.045],[-.58,b,T-.045],[.58,b,T-.045],[.58,b,_+.045],n);for(const L of[0,1]){const N=L?T-.045:_+.045;u(t,U(-1,L,1),U(1,L,1),[.58,b,N],[-.58,b,N],n,!L);const X=e.vertexCount;u(e,U(-1,L,0),U(1,L,0),U(1,L,1),U(-1,L,1),L?s:a,!L),e.gradientY(X,S,M,L?s:a,L?o:l)}if(m)for(const L of[-1,1]){const N=L*.56;e.box(N-.032,b,_+.17,N+.032,1.67,T-.21,h)}for(const L of[-1,1]){const N=L>0?g:p,{width:X,shoulder:Z,top:V}=v(N);if(x&&L<0){const lt=[[-X,.3,N],[X,.3,N],[X,Z,N],[-X,Z,N]],it=[[-.41,.59,N],[.41,.59,N],[.46,.74,N],[-.46,.74,N]],yt=[[-.39,.612,N+.024],[.39,.612,N+.024],[.43,.716,N+.024],[-.43,.716,N+.024]];for(let Ot=0;Ot<4;Ot++){const bt=(Ot+1)%4;u(t,lt[Ot],lt[bt],it[bt],it[Ot],n,!0),u(t,it[Ot],it[bt],yt[bt],yt[Ot],n,!0)}u(t,yt[0],yt[1],yt[2],yt[3],Jt(n,.88),!0)}else u(t,[-X,.3,N],[X,.3,N],[X,Z,N],[-X,Z,N],n,L<0);u(t,[-X,Z,N],[X,Z,N],[X-.08,V,N],[-X+.08,V,N],n,L<0);const J=N+L*.008;for(const lt of[-1,1])u(e,...zh(i,L,lt,J,X,Z,V),L>0?H(14477800):H(12003881),lt!==L,L>0?1.1:.6);L>0?u(e,[-.48,.39,J],[.48,.39,J],[.53,.54,J],[-.53,.54,J],h):x&&u(e,[-.12,.76,J],[.12,.76,J],[.12,.8,J],[-.12,.8,J],h,!0);const rt=N+L*.012;u(e,[-.2,.44,rt],[.2,.44,rt],[.2,.55,rt],[-.2,.55,rt],H(14014927),L<0)}e.box(-.7,.23,p+.22,.7,.69,g-.22,h,null);const F=(L,N,X,Z)=>[L,D+Z*Math.sin(X)*Math.sin(.4*Math.PI),N+Z*Math.cos(X)];for(const L of[-1,1])for(const N of[w,C]){const X=L*.69,Z=L*.9,V=L*.912;for(let J=0;J<8;J++){const rt=J*Math.PI/4,lt=(J+1)*Math.PI/4,it=F(Z,N,rt,.34),yt=F(Z,N,lt,.34);u(e,F(X,N,rt,.34),it,yt,F(X,N,lt,.34),c,L<0),L>0?e.tri(Z,D,N,...yt,...it,c):e.tri(Z,D,N,...it,...yt,c)}for(let J=0;J<6;J++){const rt=F(V,N,J*Math.PI/3,.188),lt=F(V,N,(J+1)*Math.PI/3,.188),it=J%2?f:d;L>0?e.tri(L*.905,D,N,...lt,...rt,it):e.tri(L*.905,D,N,...rt,...lt,it)}}}function Kr(i,t,e,n,s,r){const a=-t/2,o=t*.12,l=t/2,c=e/2,h=c*.5,f=Jt(s,.72);for(const u of[-1,1])u>0?(i.quad(h,0,a,c*.88,n,a,c,n,o,h,0,o,s),i.quad(h,0,o,c,n,o,0,n*1.12,l,0,.1,l*.86,s)):(i.quad(-h,0,o,-c,n,o,-c*.88,n,a,-h,0,a,s),i.quad(0,.1,l*.86,0,n*1.12,l,-c,n,o,-h,0,o,s));i.quad(-h,0,a,-c*.88,n,a,c*.88,n,a,h,0,a,f),i.quad(-h,0,a,h,0,a,h,0,o,-h,0,o,f),i.tri(-h,0,o,h,0,o,0,.1,l*.86,f);const d=n*.8;i.quad(-c*.84,d,a+.05,c*.84,d,a+.05,c*.95,d,o,-c*.95,d,o,r),i.tri(-c*.95,d,o,c*.95,d,o,0,d,l*.95,r)}function F_(i,t){const e=new ne,n=H(16119280);if(i===0)Kr(e,4.6,1.9,.75,t()<.5?H(12962767):$n[Math.floor(t()*6)],H(10133668)),e.box(-.2,.55,-2.65,.2,1.25,-2.25,H(1974822)),e.box(-.75,.6,-.9,.75,.72,-.5,H(9138002)),e.box(-.75,.6,.4,.75,.72,.8,H(9138002));else if(i===1){const s=$n[Math.floor(t()*$n.length)];Kr(e,7.4,2.7,1.25,n,H(15131350)),e.box(-1.37,.72,-3.7,1.37,.9,3,s,null),e.box(-1.05,1,-1.2,1.05,2.25,1.9,n,H(15329248)),e.quad(-1,1.45,1.92,1,1.45,1.92,.9,2.2,1.92,-.9,2.2,1.92,H(2240572),.4),e.box(-1.06,1.5,-.9,-1.05,2.1,1.6,H(2240572),null),e.box(1.05,1.5,-.9,1.06,2.1,1.6,H(2240572),null),e.box(-.9,2.25,-1,.9,2.33,1.2,n),e.cyl(0,2.33,-.6,.03,.02,1.6,4,H(9278358))}else Kr(e,9,2.8,1.3,t()<.6?n:H(2377070),H(14208952)),e.box(-.85,1.05,-1.6,.85,1.55,1.6,n,H(15329248)),e.cyl(0,1.05,.9,.08,.05,11.5,5,H(14014682)),e.box(-.06,2.45,-3,.06,2.57,.9,H(14014682)),e.blob(0,2.72,-1.05,.17,.17,1.9,5,3,H(3104666)),e.quad(-.01,12.4,.9,.01,12.4,.9,.01,1.4,4.4,-.01,1.4,4.4,H(10133154));return e.build()}function O_(i){const t=new ne;return Kr(t,4.2,1.5,.55,H(16119280),H(14736588)),t.cyl(0,.45,.5,.04,.03,6,4,H(14014682)),t.tri(.02,6.3,.5,.02,1.1,.45,.6,1.2,-2,i),t.tri(.02,4.6,.6,.3,1,1.9,.02,1,.6,H(16250866)),t.blob(.35,.95,-.9,.22,.4,.22,5,3,H(14238767)),t.build()}function z_(i,t){const e=new ne,n=8,s=9,r=2.6;for(let a=0;a<n;a++){const o=-1.15+a/n*2.3,l=-1.15+(a+1)/n*2.3,c=Math.sin(o)*s*.5,h=Math.cos(o)*s*.42,f=Math.sin(l)*s*.5,d=Math.cos(l)*s*.42,u=a===0||a===n-1||a===3||a===4?t:i;e.quad(c,h,-r/2,f,d,-r/2,f,d,r/2,c,h,r/2,u)}return e.build()}function B_(i,t){const e=new ne;return e.box(-.22,0,-.75,.22,.06,.75,i),e.blob(-.25,.75,0,.2,.62,.22,5,3,t),e.blob(-.42,1.48,0,.13,.14,.13,5,3,H(14264711)),e.build()}function k_(i){const t=new ne;return t.blob(0,.02,0,.27,.05,1.05,6,2,i),t.blob(0,.42,-.1,.2,.4,.18,5,3,H(1976112)),t.blob(0,.9,-.1,.12,.13,.12,5,3,H(14264711)),t.build()}function G_(i){const t=new Map;for(const r of i){if(r.cls>1||!r.name||r.flags)continue;const a=t.get(r.name)??[];a.push(r),t.set(r.name,a)}const e=[],n=(r,a)=>a?[r[r.length-3],r[r.length-1]]:[r[0],r[2]],s=r=>{const a=new Float32Array(r.length);for(let o=0;o<r.length/3;o++)a.set(r.subarray(o*3,o*3+3),r.length-3-o*3);return a};for(const r of t.values()){const a=r.map(l=>l.pts),o=r[0].width;for(;a.length;){let l=Array.from(a.pop()),c=!0;for(;c;){c=!1;for(let u=0;u<a.length;u++){const m=a[u],x=[l[l.length-3],l[l.length-1]],p=[l[0],l[2]],g=(M,b)=>Math.hypot(M[0]-b[0],M[1]-b[1])<2.5;let S=null,v=!0;if(g(x,n(m,!1))?S=m:g(x,n(m,!0))?S=s(m):g(p,n(m,!0))?(S=m,v=!1):g(p,n(m,!1))&&(S=s(m),v=!1),!!S){l=v?l.concat(Array.from(S.subarray(3))):Array.from(S.subarray(0,S.length-3)).concat(l),a.splice(u,1),c=!0;break}}}const h=new Float32Array(l),f=h.length/3,d=new Float32Array(f);for(let u=1;u<f;u++)d[u]=d[u-1]+Math.hypot(h[u*3]-h[u*3-3],h[u*3+2]-h[u*3-1]);d[f-1]>380&&e.push({pts:h,cum:d,length:d[f-1],width:o})}}return e}function sl(i,t=2,e=320){if(i.length<=(e<320?24:96)||t===0)return[i];let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const f of i)n=Math.min(n,f.x),s=Math.max(s,f.x),r=Math.min(r,f.z),a=Math.max(a,f.z);const o=s-n,l=a-r;if(Math.max(o,l)<e)return[i];const c=o>l?"x":"z";i.sort((f,d)=>f[c]-d[c]);const h=Math.floor(i.length/2);return[...sl(i.slice(0,h),t-1,e),...sl(i.slice(h),t-1,e)]}class H_{constructor(t,e){ot(this,"group",new je);ot(this,"afloat",new je);ot(this,"boats",[]);ot(this,"dinghies",[]);ot(this,"kites",[]);ot(this,"kiteLines");ot(this,"surfers",[]);ot(this,"traffic");ot(this,"trafficTrim");ot(this,"cars",[]);ot(this,"parkedAt",new Map);ot(this,"parkedSets",[]);ot(this,"drivenAt",new Map);ot(this,"drivenSets",[]);ot(this,"carMat",es());ot(this,"tmpE",new vn);ot(this,"nothing",new Qt().makeScale(0,0,0));ot(this,"gulls");ot(this,"gullState",[]);ot(this,"tmpM",new Qt);ot(this,"tmpQ",new _n);ot(this,"tmpP",new W);ot(this,"up",new W(0,1,0));ot(this,"one",new W(1,1,1));this.ctx=t,this.group.name="life",this.group.add(this.afloat);const n=this.carMat;this.addParkedCars(),this.addTraffic(n),this.addBoats(n,e),this.addKites(n),this.addSurfers(n,e),this.addPeople(e),this.addGulls(e),this.update(0,0)}setTide(t){this.afloat.position.y=t}sit(t,e,n,s){const r=this.ctx.hf,a=Math.sin(n),o=Math.cos(n),l=r.yAt(t+a*1.3,e+o*1.3),c=r.yAt(t-a*1.3,e-o*1.3),h=r.yAt(t-o*.8,e+a*.8),f=r.yAt(t+o*.8,e-a*.8);return this.tmpQ.setFromEuler(this.tmpE.set(-Math.atan2(l-c,2.6),n,Math.atan2(f-h,1.6),"YXZ")),this.tmpM.compose(this.tmpP.set(t,(l+c+h+f)/4+s,e),this.tmpQ,this.one)}carShapes(t){return t?nl(t-1):{body:Fh(),trim:void 0}}makeTrafficCar(t,e,n,s,r){const a=new ne;Hh(t,a,a,H(e));const o=a.build(),l=o.boundingBox,c=(d,u)=>Math.min(1,d/u),h=new W(c(n,Math.max(-l.min.x,l.max.x)),c(r,l.max.y),c(s,Math.max(-l.min.z,l.max.z)));o.scale(h.x,h.y,h.z);const f=new $t(o,this.carMat);return f.name=["traffic-sedan","traffic-wagon","traffic-ute"][t],f.castShadow=f.receiveShadow=!0,f.matrixAutoUpdate=!1,f.visible=!1,this.group.add(f),{mesh:f,scale:h}}addParkedCars(){const{town:t,hf:e,paths:n}=this.ctx,s=t.cars,r=s.length/ns,a=[[],[],[],[]],o=new Set,l=(f,d)=>`${Math.round(f/7)}_${Math.round(d/7)}`;for(let f=0;f<r;f++){const d=s[f*ns]/4,u=s[f*ns+1]/4;if(this.ctx.isClear(d,u)||!this.ctx.isDetail(d,u)&&this.ctx.roads.nearest(d,u,5.5))continue;const m=1+(s[f*ns+3]+f)%3;a[m].push({x:d,z:u,heading:s[f*ns+2]/10*(Math.PI/180),colour:os[(s[f*ns+3]*7+f)%os.length]}),o.add(l(d,u))}const c=He(911);let h=0;for(const f of n){if(h>=1100||f.width<3.4||f.width>12)continue;const d=f.pts.length/3;let u=20+c()*60;for(let m=1;m<d;m++){const x=f.pts[(m-1)*3],p=f.pts[(m-1)*3+2],g=f.pts[m*3],S=f.pts[m*3+2],v=Math.hypot(g-x,S-p);if(u-=v,u>0||v<.01)continue;u=28+c()*70;const M=c()<.5?1:-1,b=(g-x)/v,E=(S-p)/v,_=Math.max(f.width/2-.55,1.5),y=g+E*_*M,T=S-b*_*M,w=Math.floor(c()*os.length),C=Math.floor(c()*3);if(e.metresAt(y,T)<.6||!e.inside(y,T,30)||this.ctx.isClear(y,T))continue;let D=!0;for(let z=-1;z<=1&&D;z++)for(let P=-1;P<=1;P++)if(o.has(`${Math.round(y/7)+z}_${Math.round(T/7)+P}`)){D=!1;break}D&&(o.add(l(y,T)),a[1+C].push({x:y,z:T,heading:Math.atan2(b*-M,E*-M),colour:os[w]}),h++)}}a.forEach((f,d)=>this.addParkedShape(f,d))}addParkedShape(t,e){if(!t.length)return;const n=nl(e-1),s=Oh(e-1,!1),r=Oh(e-1,!0);for(const a of sl(t,5,140)){const o=this.parkedSets.length,l=new Ke(n.body,this.carMat,a.length),c=new Ke(n.trim,this.carMat,a.length),h=new Ke(s,this.carMat,a.length),f=new Ke(r,this.carMat,a.length);l.name="parked-car-near-body",c.name="parked-car-near-trim",h.name="parked-car-mid",f.name="parked-car-far";const d=[l,c,h,f],u=[l,h,f],m=new Rt;a.forEach((p,g)=>{const{x:S,z:v,heading:M,colour:b}=p,E=this.sit(S,v,M,.3);for(const _ of d)_.setMatrixAt(g,E);m.set(b);for(const _ of u)_.setColorAt(g,m);this.parkedAt.set(`${Math.round(S*4)}_${Math.round(v*4)}`,{set:o,k:g,x:S,z:v,heading:M})});const x=new Ih([[l,c],[h],[f]],this.group);this.parkedSets.push({body:l,meshes:d,lod:x,shape:e})}}addCars(t){const e=[[],[],[],[]];for(const n of t)e[1+(n.kind??0)%3].push(n);e.forEach((n,s)=>this.addParkedShape(n,s))}nearestCar(t,e,n){let s=null;for(const[r,a]of this.parkedAt){const o=this.drivenAt.get(r)??a,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[a.x,a.z],x:o.x,z:o.z,heading:o.heading,distance:l})}return this.cars.forEach((r,a)=>{const o=this.drivenAt.get(`t${a}`)??r,l=Math.hypot(o.x-t,o.z-e);l<(s?s.distance:n)&&(s={id:[9e5+a,0],x:o.x,z:o.z,heading:o.heading,distance:l})}),s}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){const h=t>=9e5?this.cars[t-9e5]:void 0,f=h?`t${t-9e5}`:`${Math.round(t*4)}_${Math.round(e*4)}`,d=h?void 0:this.parkedAt.get(f);if(!d&&!h)return!1;let u=this.drivenAt.get(f);if(!u){if(this.drivenAt.size>=12)return!1;const x=d?this.parkedSets[d.set].shape:this.trafficTrim?1:0;let p=this.drivenSets[x];if(!p){const S=this.carShapes(x);p=this.drivenSets[x]={body:new Ke(S.body,this.carMat,12),trim:S.trim?new Ke(S.trim,this.carMat,12):void 0,n:0};for(const v of[p.body,p.trim])v&&(v.count=0,v.frustumCulled=!1,v.castShadow=!0,this.group.add(v))}u={set:x,k:p.n++,x:n,y:s,z:r,heading:a},this.drivenAt.set(f,u),p.body.count=p.n,p.trim&&(p.trim.count=p.n);const g=new Rt;if(d){const S=this.parkedSets[d.set];S.body.getColorAt(d.k,g);for(const v of S.meshes)v.setMatrixAt(d.k,this.nothing),v.instanceMatrix.needsUpdate=!0}else this.traffic.getColorAt(t-9e5,g),h.gone=!0;p.body.setColorAt(u.k,g),p.body.instanceColor.needsUpdate=!0}u.x=n,u.y=s,u.z=r,u.heading=a;const m=this.drivenSets[u.set];return this.tmpQ.setFromEuler(this.tmpE.set(-o,a,l,"YXZ")),this.tmpM.compose(this.tmpP.set(n,s+Nh,r),this.tmpQ,this.one),m.body.setMatrixAt(u.k,this.tmpM),m.body.instanceMatrix.needsUpdate=!0,m.trim&&(m.trim.setMatrixAt(u.k,this.tmpM),m.trim.instanceMatrix.needsUpdate=!0),c&&!u.indicator&&(u.indicator=kh(u.set-1),u.indicator.matrixAutoUpdate=!1,this.group.add(u.indicator)),u.indicator&&(Gh(u.indicator,c),u.indicator.visible&&(u.indicator.matrix.copy(this.tmpM),u.indicator.matrixWorldNeedsUpdate=!0)),!0}addTraffic(t){const e=G_(this.ctx.paths);if(!e.length)return;const n=e.reduce((c,h)=>c+h.length,0),s=0,r=He(77),a=this.ctx.hasDetail?nl(0):null,o=this.traffic=new Ke(a?a.body:Fh(),t,s);if(o.instanceMatrix.setUsage(tr),o.frustumCulled=!1,a){const c=this.trafficTrim=new Ke(a.trim,t,s);c.instanceMatrix.setUsage(tr),c.frustumCulled=!1,c.castShadow=!0,this.group.add(c)}const l=new Rt;for(let c=0;c<s;c++){let h=r()*n,f=e[0];for(const d of e)if((h-=d.length)<=0){f=d;break}this.cars.push({route:f,s:r()*f.length,dir:r()<.5?1:-1,speed:9+r()*6,x:0,z:0,heading:0}),o.setColorAt(c,l.set(os[Math.floor(r()*os.length)]))}o.castShadow=!0,this.group.add(o)}addBoats(t,e){var c;const{hf:n}=this.ctx,s=He(451),r=((c=e.jetty)==null?void 0:c.head)??new W(380,0,-117),a=[];for(let h=0;h<4e3&&a.length<16;h++){const f=s()*Math.PI*2,d=55+s()*420,u=r.x+Math.cos(f)*d,m=r.z+Math.sin(f)*d;n.metresAt(u,m)>-1.9||!n.inside(u,m,40)||a.some(([x,p])=>Math.hypot(x-u,p-m)<26)||a.push([u,m])}const o=2.2+s()*.4;a.forEach(([h,f],d)=>{const u=d%5===0?2:d%2?0:1,m=new $t(F_(u,s),t);m.position.set(h,0,f),m.rotation.y=o+(s()-.5)*.5,m.castShadow=!0,this.afloat.add(m),this.boats.push({obj:m,phase:s()*6.28,y:u===0?-.22:-.42})});const l=[H(16250866),H(15222589),H(3117008),H(15909424)];for(let h=0;h<600&&this.dinghies.length<4;h++){const f=s()*Math.PI*2,d=150+s()*900,u=r.x+Math.cos(f)*d,m=r.z+160+Math.sin(f)*d*.5,x=45+s()*70,p=30+s()*40;let g=n.inside(u,m,160);for(let v=0;v<12&&g;v++){const M=v/12*Math.PI*2;n.metresAt(u+Math.cos(M)*x,m+Math.sin(M)*p)>-1.5&&(g=!1)}if(!g||this.dinghies.some(v=>Math.hypot(v.cx-u,v.cz-m)<170))continue;const S=new $t(O_(l[this.dinghies.length%l.length]),t);S.castShadow=!0,this.afloat.add(S),this.dinghies.push({obj:S,cx:u,cz:m,rx:x,rz:p,phase:s()*6.28,speed:(2.2+s())/Math.max(x,p)})}}addKites(t){const{hf:e,town:n}=this.ctx,s=He(990),[r,a]=on(n.meta,-38.6385,145.714),[o,l]=on(n.meta,-38.645,145.731),c=[];for(let d=0;d<3e3&&c.length<6;d++){const u=r+s()*(o-r),m=a+s()*(l-a);e.metresAt(u,m)>-1.6||c.some(x=>Math.hypot(x.x-u,x.z-m)<110)||c.push(new W(u,0,m))}const h=new Float32Array(c.length*12);c.forEach((d,u)=>{let m=85;for(;m>15&&(e.metresAt(d.x+.65*m,d.z+.76*m)>-1.2||e.metresAt(d.x-.65*m,d.z-.76*m)>-1.2);)m-=10;const x=$n[Math.floor(s()*7)],p=$n[Math.floor(s()*7)],g=new $t(z_(x,p===x?$n[7]:p),t),S=new $t(B_($n[Math.floor(s()*7)],H(1976112)),t);g.castShadow=!0,this.afloat.add(g,S),this.kites.push({base:d,reach:m,phase:s()*6.28,speed:.12+s()*.06,kite:g,rider:S})});const f=new we;f.setAttribute("position",new be(h,3).setUsage(tr)),this.kiteLines=new Nf(f,Gr(new fc({color:15921906,transparent:!0,opacity:.7}))),this.kiteLines.frustumCulled=!1,this.afloat.add(this.kiteLines)}addSurfers(t,e){if(!e.surf)return;const{hf:n}=this.ctx,s=He(31),[r,a]=e.surf.seaward,o=e.surf.beach;let l=20;for(;l<420&&n.metresAt(o.x+r*l,o.z+a*l)>-2;)l+=5;for(let c=0;c<9;c++){const h=(c-4)*13+(s()-.5)*8,f=l+(s()-.5)*30,d=o.x+r*f-a*h,u=o.z+a*f+r*h,m=new $t(k_($n[Math.floor(s()*$n.length)]),t);m.position.set(d,0,u),m.rotation.y=Math.atan2(r,a)+(s()-.5)*.8,this.afloat.add(m),this.surfers.push({obj:m,phase:s()*6.28})}}addPeople(t){const{hf:e,town:n,paths:s,roads:r,footprints:a}=this.ctx,o=He(2026),l=[],c=[],h=(O,U)=>a.some(Y=>{if(Math.hypot(O-Y.cx,U-Y.cz)>Math.max(Y.obb.w,Y.obb.d))return!1;let F=!1;for(let L=0,N=Y.poly.length-2;L<Y.poly.length;N=L,L+=2){const X=Y.poly[L],Z=Y.poly[L+1],V=Y.poly[N],J=Y.poly[N+1];Z>U!=J>U&&O<(V-X)*(U-Z)/(J-Z)+X&&(F=!F)}return F}),f=(O,U)=>!r.nearest(O,U,6.4)&&!h(O,U),d=(O,U,Y,F,L,N,X=0)=>{for(let Z=0,V=0;Z<F*40&&V<F;Z++){const J=o()*Math.PI*2,rt=Math.sqrt(o())*Y,lt=O+Math.cos(J)*rt,it=U+Math.sin(J)*rt,yt=e.metresAt(lt,it);yt<L||yt>N||!f(lt,it)||(l.push(lt,e.yAt(lt,it),it),o()<X&&c.push(lt+1.2,e.yAt(lt+1.2,it),it+.6),V++)}};t.surf&&d(t.surf.beach.x,t.surf.beach.z,130,60,1.5,3,.32);const[u,m]=on(n.meta,-38.63575,145.729);d(u,m,120,34,1.5,2.4,.3);const[x,p]=on(n.meta,-38.6356,145.7337);d(x,p,110,26,1.5,2.6,.2);const[g,S]=on(n.meta,-38.63194,145.72681);d(g,S,55,14,0,99);const[v,M]=on(n.meta,-38.63385,145.7285);for(const O of s){if(O.cls>3||O.flags)continue;const U=O.pts.length/3;for(let Y=1;Y<U;Y++){const F=O.pts[Y*3],L=O.pts[Y*3+2];if(Math.hypot(F-v,L-M)>300||o()>.42||this.ctx.isClear(F,L))continue;const N=F-O.pts[Y*3-3],X=L-O.pts[Y*3-1],Z=Math.hypot(N,X)||1,V=o()<.5?1:-1,J=O.width/2+2.3+o()*1,rt=F-X/Z*J*V,lt=L+N/Z*J*V;f(rt,lt)&&l.push(rt,e.yAt(rt,lt),lt)}}if(t.jetty){const O=t.jetty.points;for(let U=0;U<O.length-1;U++)for(let Y=0;Y<3;Y++){const F=o();l.push(O[U][0]+(O[U+1][0]-O[U][0])*F+(o()-.5)*2,el,O[U][1]+(O[U+1][1]-O[U][1])*F+(o()-.5)*2)}}const b=l.length/3,E=new ne;E.cyl(0,0,0,.17,.22,.85,5,H(2765632)),E.cyl(0,.85,0,.24,.2,.6,5,H(16777215),H(16777215));const _=new ne;_.blob(0,1.6,0,.14,.15,.14,5,3,H(14264711));const y=new Cc({vertexColors:!0}),T=O=>(O.deleteAttribute("glow"),O),w=new Ke(T(E.build()),y,b),C=new Ke(T(_.build()),y,b),D=new Rt,z=[16777215,15255976,12159590,9068354];for(let O=0;O<b;O++){const U=.92+o()*.2;this.tmpQ.setFromAxisAngle(this.up,o()*6.28),this.tmpM.compose(this.tmpP.set(l[O*3],l[O*3+1],l[O*3+2]),this.tmpQ,new W(U,U,U)),w.setMatrixAt(O,this.tmpM),C.setMatrixAt(O,this.tmpM),w.setColorAt(O,D.set(Uh[Math.floor(o()*Uh.length)])),C.setColorAt(O,D.set(z[Math.floor(o()*z.length)]))}w.computeBoundingSphere(),C.computeBoundingSphere(),this.group.add(w,C);const P=new ne;P.cyl(0,0,0,.03,.03,2,4,H(14277081)),P.cyl(0,1.75,0,1.25,0,.5,8,H(16777215));const B=new Ke(T(P.build()),y,c.length/3);for(let O=0;O<c.length/3;O++)this.tmpQ.setFromAxisAngle(new W(1,0,0),(o()-.5)*.3),B.setMatrixAt(O,this.tmpM.compose(this.tmpP.set(c[O*3],c[O*3+1],c[O*3+2]),this.tmpQ,this.one)),B.setColorAt(O,D.set([14826299,3117008,15909424,3715691,15764004,16053490][Math.floor(o()*6)]));B.castShadow=!0,B.computeBoundingSphere(),this.group.add(B)}addGulls(t){if(!t.jetty)return;const e=He(8),n=16;for(let r=0;r<n;r++)this.gullState.push({cx:t.jetty.head.x+(e()-.5)*90,cz:t.jetty.head.z+(e()-.5)*90,r:18+e()*55,h:el+6+e()*16,w:(.25+e()*.3)*(e()<.5?1:-1),phase:e()*6.28});const s=new we;s.setAttribute("position",new be(new Float32Array(n*18),3).setUsage(tr)),this.gulls=new $t(s,Gr(new Dn({color:16185074,side:Be}))),this.gulls.frustumCulled=!1,this.group.add(this.gulls)}updateParkedLod(t,e,n){for(const s of this.parkedSets)s.lod.update(t,e,n)}update(t,e){for(const n of this.boats)n.obj.rotation.z=Math.sin(e*.9+n.phase)*.04,n.obj.rotation.x=Math.sin(e*.7+n.phase*1.7)*.025,n.obj.position.y=n.y+Math.sin(e*1.1+n.phase)*.06;for(const n of this.dinghies){const s=n.phase+e*n.speed;n.obj.position.set(n.cx+Math.cos(s)*n.rx,-.15,n.cz+Math.sin(s)*n.rz),n.obj.rotation.y=Math.atan2(-Math.sin(s)*n.rx,Math.cos(s)*n.rz),n.obj.rotation.z=.12+Math.sin(e*.8+n.phase)*.04}for(const n of this.surfers)n.obj.position.y=-.05+Math.sin(e*.9+n.phase)*.22;if(this.kiteLines){const n=this.kiteLines.geometry.getAttribute("position");this.kites.forEach((s,r)=>{const a=Math.sin(e*s.speed*6.28+s.phase),o=Math.cos(e*s.speed*6.28+s.phase)>=0?1:-1,l=s.base.x+.65*s.reach*a,c=s.base.z+.76*s.reach*a;s.rider.position.set(l,.05,c),s.rider.rotation.y=Math.atan2(.65*o,.76*o),s.rider.rotation.z=.28;const h=e*1.3+s.phase,f=l+12+o*5+Math.sin(h)*4.5,d=c-10+Math.cos(h)*1.5,u=17+Math.sin(h*2)*2.4;s.kite.position.set(f,u,d),s.kite.lookAt(l,1.2,c),s.kite.rotateX(-Math.PI/2),n.setXYZ(r*4,l-.3,1.25,c),n.setXYZ(r*4+1,f-2.6,u-1,d),n.setXYZ(r*4+2,l-.3,1.25,c),n.setXYZ(r*4+3,f+2.6,u-1,d)}),n.needsUpdate=!0}if(this.traffic&&(this.cars.forEach((n,s)=>{var v,M;if(n.gone){this.traffic.setMatrixAt(s,this.nothing),(v=this.trafficTrim)==null||v.setMatrixAt(s,this.nothing);return}const r=n.route;n.s+=n.dir*n.speed*t,n.s>r.length&&(n.s=r.length,n.dir=-1),n.s<0&&(n.s=0,n.dir=1);let a=0,o=r.cum.length-1;for(;o-a>1;){const b=a+o>>1;r.cum[b]<=n.s?a=b:o=b}const l=(n.s-r.cum[a])/(r.cum[o]-r.cum[a]||1),c=r.pts[a*3],h=r.pts[a*3+2],f=r.pts[o*3],d=r.pts[o*3+2];let u=f-c,m=d-h;const x=Math.hypot(u,m)||1;u=u/x*n.dir,m=m/x*n.dir;const p=Math.min(r.width*.24,2),g=c+(f-c)*l+m*p,S=h+(d-h)*l-u*p;n.x=g,n.z=S,n.heading=Math.atan2(u,m),this.traffic.setMatrixAt(s,this.sit(g,S,n.heading,.36)),(M=this.trafficTrim)==null||M.setMatrixAt(s,this.tmpM)}),this.traffic.instanceMatrix.needsUpdate=!0,this.trafficTrim&&(this.trafficTrim.instanceMatrix.needsUpdate=!0)),this.gulls){const n=this.gulls.geometry.getAttribute("position");this.gullState.forEach((s,r)=>{const a=s.phase+e*s.w,o=s.cx+Math.cos(a)*s.r,l=s.cz+Math.sin(a)*s.r,c=s.h+Math.sin(a*2.3)*1.5,h=s.w>0?1:-1,f=-Math.sin(a)*h,d=Math.cos(a)*h,u=d,m=-f,x=Math.sin(e*7+s.phase*3)*.45,p=r*6;n.setXYZ(p,o+f*.35,c,l+d*.35),n.setXYZ(p+1,o-f*.3,c,l-d*.3),n.setXYZ(p+2,o+u*.85,c+x,l+m*.85),n.setXYZ(p+3,o+f*.35,c,l+d*.35),n.setXYZ(p+4,o-u*.85,c+x,l-m*.85),n.setXYZ(p+5,o-f*.3,c,l-d*.3)}),n.needsUpdate=!0}}}const V_=1,Vh=2,W_=[H(5198680),H(11575168),H(9072466),H(12434356)],X_=H(4474957),q_=H(15921382),Y_=[.34,.3,.26,.22,.16,.15,.13,.11],Wh=new Float32Array(9);function Z_(i,t){const e=[i[0]/10,i[1]/10];for(let n=2;n<i.length;n+=2){const s=i[n-2]/10,r=i[n-1]/10,a=i[n]/10,o=i[n+1]/10,l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/t));for(let c=1;c<=l;c++)e.push(s+(a-s)*c/l,r+(o-r)*c/l)}return e}class K_{constructor(){ot(this,"cells",new Map);ot(this,"segs",[]);ot(this,"size",40)}add(t,e,n,s,r,a){const o=this.segs.length/6;this.segs.push(t,e,n,s,r,a);const l=Math.floor(Math.min(t,n)/this.size),c=Math.floor(Math.max(t,n)/this.size),h=Math.floor(Math.min(e,s)/this.size),f=Math.floor(Math.max(e,s)/this.size);for(let d=l;d<=c;d++)for(let u=h;u<=f;u++){const m=(d+512)*4096+(u+512);let x=this.cells.get(m);x||this.cells.set(m,x=[]),x.push(o)}}nearest(t,e,n){let s=null;const r=Math.ceil(n/this.size),a=Math.floor(t/this.size),o=Math.floor(e/this.size);for(let l=a-r;l<=a+r;l++)for(let c=o-r;c<=o+r;c++){const h=this.cells.get((l+512)*4096+(c+512));if(h)for(const f of h){const d=this.segs[f*6],u=this.segs[f*6+1],m=this.segs[f*6+2],x=this.segs[f*6+3],p=m-d,g=x-u,S=Math.max(0,Math.min(1,((t-d)*p+(e-u)*g)/(p*p+g*g||1))),v=d+p*S,M=u+g*S,b=Math.hypot(t-v,e-M);b<=n&&(!s||b<s.dist)&&(s={dist:b,px:v,pz:M,cls:this.segs[f*6+4],name:this.segs[f*6+5]})}}return s}}function $_(i,t,e){const n=new ne,s=new ne,r=new K_,a=[],o=[];for(const[p,g,S,v,M,b]of i.roads){const E=v/10,_=Z_(b,p<=3?6:5),y=_.length/2;if(y<2)continue;const T=g===0&&p<=1?X_:W_[g],w=Y_[p],C=(S&V_)!==0,D=t.yAt(_[0],_[1]),z=t.yAt(_[y*2-2],_[y*2-1]),P=new Float32Array(y);for(let F=1;F<y;F++)P[F]=P[F-1]+Math.hypot(_[F*2]-_[F*2-2],_[F*2+1]-_[F*2-1]);const B=P[y-1]||1,O=new Float32Array(y*3),U=new Float32Array(y*3),Y=new Float32Array(y*3);for(let F=0;F<y;F++){const L=_[F*2],N=_[F*2+1],X=Math.max(F-1,0),Z=Math.min(F+1,y-1);let V=_[Z*2]-_[X*2],J=_[Z*2+1]-_[X*2+1];const rt=Math.hypot(V,J)||1;V/=rt,J/=rt;let lt=1;if(F>0&&F<y-1){const Ut=_[F*2]-_[F*2-2],ae=_[F*2+1]-_[F*2-1],Kt=Math.hypot(Ut,ae)||1;lt=1/Math.max(.6,(Ut*V+ae*J)/Kt)}const it=-J*(E/2)*lt,yt=V*(E/2)*lt,Ot=C?D+(z-D)*(P[F]/B)+.6+1*Math.sin(Math.PI*P[F]/B):NaN,bt=C?Ot:t.yAt(L,N)+w,kt=C?Ot:t.yAt(L+it,N+yt)+w,Xt=C?Ot:t.yAt(L-it,N-yt)+w;O.set([L+it,kt,N+yt],F*3),U.set([L,bt,N],F*3),Y.set([L-it,Xt,N-yt],F*3),F>0&&p<=3&&r.add(_[F*2-2],_[F*2-1],L,N,p,M)}for(let F=0;F<y-1;F++){const L=F*3,N=L+3;if(e){const X=e(U[L],U[L+2]),Z=e(U[N],U[N+2]);if(X&&Z)continue;if(X!==Z){let V=0,J=1;for(let Kt=0;Kt<12;Kt++){const ce=(V+J)/2;e(U[L]+(U[N]-U[L])*ce,U[L+2]+(U[N+2]-U[L+2])*ce)===X?V=ce:J=ce}const rt=(V+J)/2;for(const Kt of[O,U,Y])for(let ce=0;ce<3;ce++)Wh[(Kt===O?0:Kt===U?3:6)+ce]=Kt[L+ce]+(Kt[N+ce]-Kt[L+ce])*rt;const[lt,it,yt,Ot,bt,kt,Xt,Ut,ae]=Wh;X?(n.quad(lt,it,yt,O[N],O[N+1],O[N+2],U[N],U[N+1],U[N+2],Ot,bt,kt,T),n.quad(Ot,bt,kt,U[N],U[N+1],U[N+2],Y[N],Y[N+1],Y[N+2],Xt,Ut,ae,T)):(n.quad(O[L],O[L+1],O[L+2],lt,it,yt,Ot,bt,kt,U[L],U[L+1],U[L+2],T),n.quad(U[L],U[L+1],U[L+2],Ot,bt,kt,Xt,Ut,ae,Y[L],Y[L+1],Y[L+2],T));continue}}if(n.quad(O[L],O[L+1],O[L+2],O[N],O[N+1],O[N+2],U[N],U[N+1],U[N+2],U[L],U[L+1],U[L+2],T),n.quad(U[L],U[L+1],U[L+2],U[N],U[N+1],U[N+2],Y[N],Y[N+1],Y[N+2],Y[L],Y[L+1],Y[L+2],T),C){const X=H(g===2?7297604:13225162);for(const Z of[O,Y])n.quad(Z[L],Z[L+1],Z[L+2],Z[N],Z[N+1],Z[N+2],Z[N],Z[N+1]+1.05,Z[N+2],Z[L],Z[L+1]+1.05,Z[L+2],X),n.quad(Z[L],Z[L+1]-.7,Z[L+2],Z[N],Z[N+1]-.7,Z[N+2],Z[N],Z[N+1],Z[N+2],Z[L],Z[L+1],Z[L+2],H(9276036))}}if(p<=5&&!C)for(const F of[0,y-1]){const L=U[F*3],N=U[F*3+1],X=U[F*3+2];if(e!=null&&e(L,X))continue;const Z=16;for(let V=0;V<Z;V++){const J=V/Z*Math.PI*2,rt=(V+1)/Z*Math.PI*2;n.tri(L,N,X,L+Math.cos(rt)*E/2,N,X+Math.sin(rt)*E/2,L+Math.cos(J)*E/2,N,X+Math.sin(J)*E/2,T)}}if(p<=1&&!(S&Vh)&&B>20){let F=0;for(let L=4;L<B-4;L+=12){for(;F<y-2&&P[F+1]<L;)F++;const N=(L-P[F])/(P[F+1]-P[F]||1),X=U[F*3]+(U[F*3+3]-U[F*3])*N,Z=U[F*3+1]+(U[F*3+4]-U[F*3+1])*N,V=U[F*3+2]+(U[F*3+5]-U[F*3+2])*N;if(e!=null&&e(X,V))continue;let J=U[F*3+3]-U[F*3],rt=U[F*3+5]-U[F*3+2];const lt=Math.hypot(J,rt)||1;J/=lt,rt/=lt;const it=(U[F*3+4]-U[F*3+1])/lt*3,yt=-rt*.16,Ot=J*.16,bt=.05;s.quad(X+yt,Z+bt,V+Ot,X+J*3+yt,Z+it+bt,V+rt*3+Ot,X+J*3-yt,Z+it+bt,V+rt*3-Ot,X-yt,Z+bt,V-Ot,q_)}}if(S&Vh){let F=0,L=0;for(let rt=0;rt<y;rt++)F+=_[rt*2],L+=_[rt*2+1];F/=y,L/=y;const N=y>>1,X=J_(_[0],_[1],_[N*2],_[N*2+1],_[y*2-2],_[y*2-1]),Z=X?X.x:F,V=X?X.z:L,J=X?X.r:Math.hypot(_[0]-F,_[1]-L);J>3&&J<40&&!(e!=null&&e(Z,V))&&!o.some(rt=>Math.hypot(rt.x-Z,rt.z-V)<12)&&o.push({x:Z,z:V,r:J,w:E})}p<=3&&a.push({cls:p,name:M>=0?i.names[M]:"",width:E,flags:S,pts:U,length:B})}const l=H(13158078),c=H(7314002),h=H(4943936);for(const p of o){const g=p.r-p.w/2-.3;if(g<1.2)continue;const S=t.yAt(p.x,p.z)+.2;n.frame(p.x,S,p.z,0),n.cyl(0,0,0,g,g,.4,14,l,c),n.blob(0,.9,0,g*.45,.8,g*.45,6,3,h,H(7181400)),n.frame()}const f=new fi({vertexColors:!0,roughness:.92,metalness:0,side:Be,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),d=new $t(Xh(n.build()),f);d.receiveShadow=!0,d.name="roads";const u=Gr(new Dn({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})),m=new $t(Xh(s.build()),u);m.name="road-markings";const x=new je;return x.add(d,m),{group:x,index:r,paths:a}}function Xh(i){return i.deleteAttribute("glow"),i}function J_(i,t,e,n,s,r){const a=2*(i*(n-r)+e*(r-t)+s*(t-n));if(Math.abs(a)<.001)return null;const o=i*i+t*t,l=e*e+n*n,c=s*s+r*r,h=(o*(n-r)+l*(r-t)+c*(t-n))/a,f=(o*(s-e)+l*(i-s)+c*(e-i))/a;return{x:h,z:f,r:Math.hypot(i-h,t-f)}}class Q_{constructor(t,e=1){ot(this,"ratio");ot(this,"floor");ot(this,"sampleSeconds",0);ot(this,"sampleFrames",0);ot(this,"slowSeconds",0);ot(this,"smoothSeconds",0);ot(this,"retryAfter",0);ot(this,"lastRaise",-1/0);this.ceiling=t,this.ratio=t,this.floor=Math.min(t,e)}resetSampling(){this.sampleSeconds=this.sampleFrames=this.slowSeconds=this.smoothSeconds=0}update(t,e,n){if(e<=0||e>=.25)return this.resetSampling(),!1;if(this.sampleSeconds+=e,this.sampleFrames+=1,this.sampleSeconds<1)return!1;const s=this.sampleSeconds,r=this.sampleFrames/s;return this.sampleSeconds=this.sampleFrames=0,this.slowSeconds=r<n*.9?this.slowSeconds+s:0,this.slowSeconds>=2&&this.ratio>this.floor?(this.ratio=Math.max(this.floor,this.ratio*.75),this.retryAfter=t+(t-this.lastRaise<15?90:20),this.resetSampling(),!0):this.ratio>=this.ceiling||t<this.retryAfter||(this.smoothSeconds=r>=n*.97?this.smoothSeconds+s:0,this.smoothSeconds<8)?!1:(this.ratio=Math.min(this.ceiling,this.ratio/.75),this.lastRaise=t,this.resetSampling(),!0)}}const Gs=-36,rl=170,j_=`
float invHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float invNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(invHash(i), invHash(i + vec2(1.0, 0.0)), f.x), mix(invHash(i + vec2(0.0, 1.0)), invHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
`,$r=2;function qh(){const i=new vr(new Uint8Array([128,128,128,255]),1,1);return i.needsUpdate=!0,{maps:Array.from({length:$r},()=>({value:i})),rects:Array.from({length:$r},()=>({value:new ue(0,0,1,0)}))}}const Jr=128;function tx(i,t,e){const{nx:n,nz:s}=i,r=Math.min(Jr+1,n-t),a=Math.min(Jr+1,s-e),o=new Float32Array(r*a*3),l=new Float32Array(r*a*3),c=new Float32Array(r*a*2);for(let u=e;u<e+a;u++)for(let m=t;m<t+r;m++){const x=(u-e)*r+m-t,p=i.xMin+m*i.dx,g=i.zMin+u*i.dz;o[x*3]=p,o[x*3+1]=i.y[u*n+m],o[x*3+2]=g,c[x*2]=(p+i.sizeX/2)/i.sizeX,c[x*2+1]=1-(g+i.sizeZ/2)/i.sizeZ;const S=i.y[u*n+Math.max(m-1,0)],v=i.y[u*n+Math.min(m+1,n-1)],M=i.y[Math.max(u-1,0)*n+m],b=i.y[Math.min(u+1,s-1)*n+m],E=(v-S)/(2*i.dx),_=(b-M)/(2*i.dz),y=Math.hypot(E,1,_);l[x*3]=-E/y,l[x*3+1]=1/y,l[x*3+2]=-_/y}const h=new Uint16Array((r-1)*(a-1)*6);let f=0;for(let u=0;u<a-1;u++)for(let m=0;m<r-1;m++){const x=u*r+m,p=x+1,g=x+r,S=g+1;h[f++]=x,h[f++]=g,h[f++]=p,h[f++]=p,h[f++]=g,h[f++]=S}const d=new we;return d.setAttribute("position",new be(o,3)),d.setAttribute("normal",new be(l,3)),d.setAttribute("uv",new be(c,2)),d.setIndex(new be(h,1)),d.computeBoundingSphere(),d}function ex(i,t,e,n=qh()){const s=new fi({map:t,roughness:.96,metalness:0});s.onBeforeCompile=a=>{a.uniforms.uTide=e;for(let o=0;o<$r;o++)a.uniforms["uDetail"+o]=n.maps[o],a.uniforms["uDetailRect"+o]=n.rects[o];a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform float uTide;
uniform sampler2D uDetail0;
uniform vec4 uDetailRect0;
uniform sampler2D uDetail1;
uniform vec4 uDetailRect1;
${j_}`).replace("#include <map_fragment>",`#include <map_fragment>
        {
          float camDist = length(cameraPosition - vWPos);
          float nearFade = 1.0 - smoothstep(300.0, 1600.0, camDist);
          #ifdef USE_MAP
          {
            // The ground's picture is about two metres to the pixel, so up close it is a blur. Near the camera its
            // edges are sharpened (against the average of the pixels around) and frayed with fine noise, so where
            // grass meets a path or a car park there is a crisp, uneven line instead of a soft smear.
            float close = 1.0 - smoothstep(70.0, 420.0, camDist);
            if (close > 0.0) {
              vec2 px = 1.0 / vec2(textureSize(map, 0));
              vec2 fray = (vec2(invNoise(vWPos.xz * 0.9), invNoise(vWPos.xz * 0.9 + 37.0)) - 0.5) * px * 1.2;
              vec2 uv = vMapUv + fray * close;
              vec3 here = texture2D(map, uv).rgb;
              vec3 e = texture2D(map, uv + px * vec2(1.6, 0.0)).rgb, w = texture2D(map, uv - px * vec2(1.6, 0.0)).rgb;
              vec3 n = texture2D(map, uv + px * vec2(0.0, 1.6)).rgb, t = texture2D(map, uv - px * vec2(0.0, 1.6)).rgb;
              vec3 around = (e + w + n + t) * 0.25;
              // (never past the lightest or darkest of the colours around: no dark or bright fringes)
              vec3 crisp = clamp(here + (here - around) * 1.6, min(min(e, w), min(n, t)), max(max(e, w), max(n, t)));
              diffuseColor.rgb = mix(diffuseColor.rgb, crisp, close);
            }
          }
          #endif
          {
            // a close-up picture of this square of the map, where there is one, faded in over 25 m at its edge
            vec2 d = (vWPos.xz - uDetailRect0.xy) * uDetailRect0.z;
            float edge = min(min(d.x, 1.0 - d.x), min(d.y, 1.0 - d.y)) / (25.0 * uDetailRect0.z);
            vec3 sharp = texture2D(uDetail0, vec2(d.x, 1.0 - d.y)).rgb;
            diffuseColor.rgb = mix(diffuseColor.rgb, sharp, uDetailRect0.w * clamp(edge, 0.0, 1.0));
          }
          {
            // a close-up picture of this square of the map, where there is one, faded in over 25 m at its edge
            vec2 d = (vWPos.xz - uDetailRect1.xy) * uDetailRect1.z;
            float edge = min(min(d.x, 1.0 - d.x), min(d.y, 1.0 - d.y)) / (25.0 * uDetailRect1.z);
            vec3 sharp = texture2D(uDetail1, vec2(d.x, 1.0 - d.y)).rgb;
            diffuseColor.rgb = mix(diffuseColor.rgb, sharp, uDetailRect1.w * clamp(edge, 0.0, 1.0));
          }
          float grain = invNoise(vWPos.xz * 0.85) * 0.55 + invNoise(vWPos.xz * 0.21) * 0.45;
          diffuseColor.rgb *= mix(1.0, 0.84 + 0.32 * grain, nearFade);
          // and a finer grain underfoot, so grass and gravel have some texture when you stand on them
          float fine = invNoise(vWPos.xz * 5.5) * 0.6 + invNoise(vWPos.xz * 17.0) * 0.4;
          diffuseColor.rgb *= mix(1.0, 0.88 + 0.24 * fine, 1.0 - smoothstep(25.0, 140.0, camDist));
          float above = vWPos.y / ${Un.toFixed(2)} - uTide;
          float wet = smoothstep(0.45, 0.03, above);
          diffuseColor.rgb *= mix(1.0, 0.76, wet);
        }`)},s.customProgramCacheKey=()=>"inverloch-terrain-3";const r=new je;for(let a=0;a<i.nz-1;a+=Jr)for(let o=0;o<i.nx-1;o+=Jr){const l=new $t(tx(i,o,a),s);l.receiveShadow=!0,l.name="terrain",r.add(l)}return r.add(ix(i),sx(i)),r}function nx(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function ix(i){const t=nx(i),e=t.length,n=[],s=[],r=[],a=new Rt(9074780),o=new Rt(6180669),l=new Rt(3813673),c=[[0,a,o],[1,o,l]];for(let d=0;d<e;d++){const[u,m]=t[d],[x,p]=t[(d+1)%e],g=i.yAt(u,m),S=i.yAt(x,p),v=x-u,M=p-m,b=Math.hypot(v,M)||1,E=-M/b*-1,_=v/b*-1;for(const[y,T,w]of c){const D=y===0?g:g-6,z=y===0?g-6:Gs,P=y===0?S:S-6,B=y===0?S-6:Gs;n.push(u,D,m,x,P,p,x,B,p,u,D,m,x,B,p,u,z,m);for(const O of[T,T,w,T,w,w])s.push(O.r,O.g,O.b);for(let O=0;O<6;O++)r.push(E,0,_)}}const h=new we;h.setAttribute("position",new fe(n,3)),h.setAttribute("normal",new fe(r,3)),h.setAttribute("color",new fe(s,3));const f=new $t(h,new fi({vertexColors:!0,roughness:1,side:Be}));return f.name="skirt",f}function sx(i){const t=new je,e=i.xMax-i.xMin+rl*2,n=i.zMax-i.zMin+rl*2,s=190,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new $t(new bi(e,s,n),new fi({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,Gs-s/2,a),o.receiveShadow=!0,t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("INVERLOCH",40,84);const h=c.measureText("INVERLOCH").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("Bass Coast, Victoria   ·   38.63° S  145.73° E   ·   Anderson Inlet & Bass Strait",40+h+46,88);const f=new Ao(l);f.colorSpace=ye,f.anisotropy=8;const d=1700,u=new $t(new ui(d,d*(l.height/l.width)),new Dn({map:f,toneMapped:!1}));u.position.set(r-e/2+d/2+110,Gs-s/2,a+n/2+.6),t.add(u);const m=document.createElement("canvas");m.width=m.height=256;const x=m.getContext("2d");x.fillStyle="#e9d9a6",x.beginPath(),x.moveTo(128,18),x.lineTo(176,150),x.lineTo(128,122),x.lineTo(80,150),x.closePath(),x.fill(),x.font="700 86px 'Space Grotesk', system-ui, sans-serif",x.textAlign="center",x.fillText("N",128,240);const p=new Ao(m);p.colorSpace=ye;const g=new $t(new ui(130,130),new Dn({map:p,transparent:!0,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.set(i.xMax+rl/2,Gs+.6,i.zMin+120),t.add(g),t}function Qr(i,t,e,n,s,r,a,o,l,c){const h=new Io(1,0),f=h.getAttribute("position"),d=[];for(let u=0;u<f.count;u++){const m=f.getX(u),x=f.getY(u),p=f.getZ(u),g=Math.sin(m*12.9898+x*78.233+p*37.719+o*4.1)*43758.5453,S=.8+(g-Math.floor(g))*.42;d.push([t+m*s*S,e+x*r*(x<0?.75:S),n+p*a*S])}for(let u=0;u<d.length;u+=3){const[m,x,p]=[d[u],d[u+1],d[u+2]],g=le.clamp(((m[1]+x[1]+p[1])/3-(e-r))/(2*r),0,1);i.tri(m[0],m[1],m[2],x[0],x[1],x[2],p[0],p[1],p[2],Us(l,c,g))}h.dispose()}function mi(i){const t=i.build();return t.deleteAttribute("glow"),t}function rx(){const i=[];let t=new ne;return Qr(t,0,.44,0,.82,.56,.82,1,H(3098152),H(7507285)),i.push(mi(t)),t=new ne,t.cyl(0,0,0,.04,.026,.56,4,H(11905429)),Qr(t,0,.72,0,.36,.3,.36,2,H(4151352),H(9349240)),Qr(t,.17,.52,.1,.24,.19,.24,3,H(3887925),H(8362603)),i.push(mi(t)),t=new ne,t.cyl(0,0,0,.055,.04,.4,4,H(7297608)),Qr(t,0,.64,0,.46,.38,.46,4,H(3695150),H(9091170)),i.push(mi(t)),t=new ne,t.cyl(0,0,0,.035,.03,.16,4,H(5916728)),t.cyl(0,.12,0,.23,.11,.42,6,H(2506539)),t.cyl(0,.5,0,.15,0,.5,6,H(4020796)),i.push(mi(t)),i}function Yh(i){const t=[],e=i?5:7;let n=new ne;return n.blob(0,.48,0,.81,.52,.81,e,2,H(4018735),H(7507285)),t.push(mi(n)),n=new ne,i||(n.cyl(0,0,0,.04,.026,.56,3,H(11905429)),n.blob(.17,.52,.1,.24,.19,.24,4,2,H(3887925),H(8362603))),n.blob(i?.05:0,.72,0,i?.39:.36,.3,.36,e,2,H(4546110),H(9349240)),t.push(mi(n)),n=new ne,i||n.cyl(0,0,0,.055,.04,.4,3,H(7297608)),n.blob(0,.64,0,.46,.38,.46,e,2,H(3695150),H(9091170)),t.push(mi(n)),n=new ne,i?n.cyl(0,.15,0,.23,0,.85,e,H(4020796)):(n.cyl(0,.12,0,.23,.11,.42,4,H(2506539)),n.cyl(0,.5,0,.15,0,.5,5,H(4020796))),t.push(mi(n)),t}function ax(i,t,e,n=()=>!1){const s=new je;s.name="trees";const r=[rx(),Yh(!1),Yh(!0)],a=[],o=new Cc({vertexColors:!0}),l=650,c=new Map,h=i.trees,f=He(88);for(let v=0;v<h.length;v+=Jg){if(e<1&&f()>e||n(h[v]/4,h[v+1]/4))continue;const b=`${h[v+2]>>8}:${Math.floor(h[v]/4/l)}:${Math.floor(h[v+1]/4/l)}`;let E=c.get(b);E||c.set(b,E=[]),E.push(v)}const d=new Qt,u=new _n,m=new W,x=new W,p=new W(0,1,0),g=new Rt;let S=0;for(const[v,M]of c){const b=Number(v.split(":")[0]),E=r.map((_,y)=>{const T=new Ke(_[b],o,M.length);return T.name=["tree-near","tree-mid","tree-far"][y],T});M.forEach((_,y)=>{const T=h[_]/4,w=h[_+1]/4,C=(h[_+2]&255)/10,D=He(_*2654435761+11);x.set(T,t.yAt(T,w)-.15,w),u.setFromAxisAngle(p,D()*Math.PI*2);const z=.85+D()*.35;m.set(C*z,C,C*(.85+D()*.35)),d.compose(x,u,m);const P=.8+D()*.34;g.setRGB(P*(.94+D()*.14),P,P*(.9+D()*.12));for(const B of E)B.setMatrixAt(y,d),B.setColorAt(y,g)}),a.push(new Ih(E.map(_=>[_]),s)),S+=M.length}return{group:s,count:S,updateLod(v,M,b){for(const E of a)E.update(v,M,b)}}}const ox=`
varying vec3 vW;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,lx=`
uniform sampler2D tField;   // r = sea bed / ground height (m), g = open-ocean exposure
uniform vec2 uSize;
uniform float uTide;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uShallow;
uniform vec3 uDeep;
uniform vec3 uSky;
uniform float uFoam;
varying vec3 vW;

float wHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float wNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(wHash(i), wHash(i + vec2(1.0, 0.0)), f.x), mix(wHash(i + vec2(0.0, 1.0)), wHash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// wind chop: several octaves of drifting noise, each faded out before it can alias
float chopHeight(vec2 p, float pix) {
  float h = 0.0;
  h += wNoise(p / 2.4 + vec2(uTime * 0.42, uTime * 0.27)) * 0.085 * (1.0 - smoothstep(0.22, 0.6, pix / 2.4));
  h += wNoise(p / 6.1 + vec2(-uTime * 0.25, uTime * 0.33)) * 0.20 * (1.0 - smoothstep(0.22, 0.6, pix / 6.1));
  h += wNoise(p / 16.0 + vec2(uTime * 0.14, -uTime * 0.19)) * 0.46 * (1.0 - smoothstep(0.22, 0.6, pix / 16.0));
  h += wNoise(p / 47.0 + vec2(uTime * 0.07, uTime * 0.05)) * 1.05 * (1.0 - smoothstep(0.22, 0.6, pix / 47.0));
  return h;
}
vec2 swell(vec2 p, vec2 dir, float wavelength, float speed, float slope, float pix) {
  float k = 6.2831853 / wavelength;
  float fade = 1.0 - smoothstep(0.18, 0.5, pix / wavelength);
  return dir * (cos(dot(dir, p) * k + uTime * speed * k) * slope * fade);
}

void main() {
  vec2 uv = (vW.xz + uSize * 0.5) / uSize;
  vec2 field = texture2D(tField, uv).rg;
  float depth = uTide - field.r;
  if (depth < -0.03) discard;
  float expo = field.g;
  vec2 p = vW.xz;
  float pix = max(fwidth(p.x), fwidth(p.y));

  float chop = mix(0.6, 1.2, expo);
  float e = max(0.45, pix);
  float h0 = chopHeight(p, pix);
  vec2 g = vec2(chopHeight(p + vec2(e, 0.0), pix) - h0, chopHeight(p + vec2(0.0, e), pix) - h0) / e * chop;
  // long ocean swell, only on the open coast
  g += swell(p, normalize(vec2(0.25, -0.97)), 38.0, 2.4, 0.03 * expo, pix);
  g += swell(p, normalize(vec2(-0.2, -0.98)), 21.0, 1.8, 0.022 * expo, pix);
  vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
  vec3 V = normalize(cameraPosition - vW);

  // body colour: sand shows through the shallows, channels go deep green-blue
  float k = 1.0 - exp(-depth * 0.5);
  vec3 col = mix(uShallow, uDeep, k);
  float patches = wNoise(p * 0.004 + uTime * 0.01) * 0.5 + wNoise(p * 0.0011) * 0.5;
  col *= 0.93 + 0.14 * patches;
  float alpha = (0.26 + 0.70 * (1.0 - exp(-depth * 1.15))) * smoothstep(-0.03, 0.06, depth);

  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  col = mix(col, uSky, fres * 0.7);
  alpha = max(alpha, fres * 0.75 * smoothstep(0.0, 0.2, depth));

  vec3 H = normalize(V + uSunDir);
  float ndh = max(dot(n, H), 0.0);
  col += uSunColor * (pow(ndh, 140.0) * 0.75 + pow(ndh, 18.0) * 0.035);

  // surf: a few lines of white water rolling in over the open-coast shallows
  float breakup = wNoise(p * 0.05 + vec2(uTime * 0.05, 0.0));
  float phase = depth * 9.0 + uTime * 0.7 + breakup * 3.2;
  float crisp = 1.0 - smoothstep(0.7, 2.0, fwidth(phase));
  float zone = smoothstep(1.7, 0.5, depth) * smoothstep(0.03, 0.25, depth);
  float band = pow(max(sin(phase), 0.0), 9.0);
  float surf = mix(0.14, band, crisp) * zone * expo * expo * (0.3 + 0.7 * breakup);
  float lace = smoothstep(0.16, 0.0, depth) * (0.35 + 0.65 * wNoise(p * 0.6 + uTime * 0.3)) * mix(0.45, 1.0, expo);
  float foam = clamp(max(surf, lace) * uFoam, 0.0, 1.0);
  col = mix(col, vec3(0.97, 0.98, 0.98) * (0.35 + 0.65 * uFoam), foam);
  alpha = max(alpha, foam * 0.92);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function cx(i,t){const e=i.w*i.h,n=new Uint16Array(e*2);for(let u=0;u<e;u++)n[u*2]=nc.toHalfFloat(i.raw[u]),n[u*2+1]=nc.toHalfFloat(i.exposure[u]);const s=new vr(n,i.w,i.h,ii,mn);s.minFilter=s.magFilter=qe,s.wrapS=s.wrapT=dn,s.needsUpdate=!0;const r={tField:{value:s},uSize:{value:new Lt(i.sizeX,i.sizeZ)},uTide:t,uTime:{value:0},uSunDir:{value:new W(.4,.8,.3).normalize()},uSunColor:{value:new Rt(16773848)},uShallow:{value:new Rt(7129789)},uDeep:{value:new Rt(937848)},uSky:{value:new Rt(12573938)},uFoam:{value:1}},a=new Yn({uniforms:r,vertexShader:ox,fragmentShader:lx,transparent:!0,depthWrite:!1}),o=new ui(i.xMax-i.xMin,i.zMax-i.zMin);o.rotateX(-Math.PI/2);const l=new $t(o,a);l.position.set((i.xMin+i.xMax)/2,t.value*Un,(i.zMin+i.zMax)/2),l.renderOrder=2,l.name="water";const c=new $t(new we,new Dn({color:1929103,transparent:!0,opacity:.8,side:Be,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));c.renderOrder=1,c.name="water-edge";const h=[];for(let u=0;u<i.nx;u++)h.push([i.xMin+u*i.dx,i.zMin]);for(let u=1;u<i.nz;u++)h.push([i.xMax,i.zMin+u*i.dz]);for(let u=i.nx-2;u>=0;u--)h.push([i.xMin+u*i.dx,i.zMax]);for(let u=i.nz-2;u>=1;u--)h.push([i.xMin,i.zMin+u*i.dz]);const f=h.map(([u,m])=>i.yAt(u,m)),d=u=>{t.value=u;const m=u*Un;l.position.y=m;const x=[],p=h.length;for(let S=0;S<p;S++){const v=(S+1)%p,M=f[S],b=f[v];if(M>=m&&b>=m)continue;const[E,_]=h[S],[y,T]=h[v],w=Math.min(M,m),C=Math.min(b,m);x.push(E,m,_,y,m,T,y,C,T,E,m,_,y,C,T,E,w,_)}c.geometry.dispose();const g=new we;g.setAttribute("position",new fe(x,3)),c.geometry=g};return d(t.value),{mesh:l,skirt:c,uniforms:r,setTide:d}}const Zh=-.9,Kh=1.3,$h=.2,ls={x:260,z:150,dist:3900,polar:55,azimuth:16},hx={high:{step:1,trees:1,shadow:4096,pixelRatio:2},medium:{step:2,trees:.6,shadow:2048,pixelRatio:1.3},low:{step:2,trees:.35,shadow:0,pixelRatio:1}},ux={high:{cars:[170,340,1050],trees:[235,710,3800]},medium:{cars:[120,270,820],trees:[160,530,2850]},low:{cars:[85,190,600],trees:[100,380,2200]}},fx=()=>new Promise(i=>requestAnimationFrame(()=>i()));function dx(i,t){const n=t.positions,s=t.normals,r=t.colors,a=t.uvs,o=t.indices,l=o?o.length:n.length/3,c=new Qt().fromArray(Array.from(t.matrix)),h=new Ft().getNormalMatrix(c),f=new W,d=_=>{const y=o?o[_]:_,T=new Float64Array(11);return f.set(n[y*3],n[y*3+1],n[y*3+2]).applyMatrix4(c),T[0]=f.x,T[1]=f.y,T[2]=f.z,s&&(f.set(s[y*3],s[y*3+1],s[y*3+2]).applyMatrix3(h).normalize(),T[3]=f.x,T[4]=f.y,T[5]=f.z),r&&(T[6]=r[y*3],T[7]=r[y*3+1],T[8]=r[y*3+2]),a&&(T[9]=a[y*2],T[10]=a[y*2+1]),T},u=_=>(_[0]-i.xMin)/i.dx,m=_=>(_[2]-i.zMin)/i.dz,x=_=>u(_)+m(_),p=(_,y,T)=>{const w=[],C=[];for(let D=0;D<_.length;D++){const z=_[D],P=_[(D+1)%_.length],B=y(z)-T,O=y(P)-T;if(B<=1e-9&&w.push(z),B>=-1e-9&&C.push(z),B<-1e-9&&O>1e-9||B>1e-9&&O<-1e-9){const U=B/(B-O),Y=new Float64Array(11);for(let F=0;F<11;F++)Y[F]=z[F]+(P[F]-z[F])*U;w.push(Y),C.push(Y)}}return[w,C]},g=(_,y)=>{const T=[];for(let w of _){let C=1/0,D=-1/0;for(const z of w){const P=y(z);P<C&&(C=P),P>D&&(D=P)}for(let z=Math.floor(C+1e-9)+1;z<D-1e-9&&w.length>=3;z++){const[P,B]=p(w,y,z);P.length>=3&&T.push(P),w=B}w.length>=3&&T.push(w)}return T},S=[],v=[],M=[],b=[],E=_=>{S.push(_[0],_[1]+i.yAt(_[0],_[2]),_[2]),s&&v.push(_[3],_[4],_[5]),r&&M.push(_[6],_[7],_[8]),a&&b.push(_[9],_[10])};for(let _=0;_+2<l;_+=3){const y=d(_),T=d(_+1),w=d(_+2),C=Math.min(u(y),u(T),u(w)),D=Math.max(u(y),u(T),u(w)),z=Math.min(m(y),m(T),m(w)),P=Math.max(m(y),m(T),m(w)),B=Math.min(x(y),x(T),x(w)),O=Math.max(x(y),x(T),x(w));if(Math.floor(C)===Math.floor(D-1e-9)&&Math.floor(z)===Math.floor(P-1e-9)&&Math.floor(B)===Math.floor(O-1e-9)){E(y),E(T),E(w);continue}for(const U of g(g(g([[y,T,w]],u),m),x))for(let Y=1;Y+1<U.length;Y++)E(U[0]),E(U[Y]),E(U[Y+1])}return{positions:new Float32Array(S),normals:s?new Float32Array(v):void 0,colors:r?new Float32Array(M):void 0,uvs:a?new Float32Array(b):void 0}}function px(i,t,e){let n=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],o=(a[0]-r[0])*(e-r[1])-(a[1]-r[1])*(t-r[0]);if(o!==0){if(n===0)n=Math.sign(o);else if(Math.sign(o)!==n)return!1}}return!0}const mx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class gx{constructor(t,e,n,s){ot(this,"renderer");ot(this,"scene",new Mf);ot(this,"camera",new En(38,1,5,9e4));ot(this,"controls");ot(this,"atmosphere");ot(this,"water");ot(this,"hf");ot(this,"life");ot(this,"trees");ot(this,"solid");ot(this,"designedWalls",[]);ot(this,"labels");ot(this,"places",[]);ot(this,"tide",{value:$h});ot(this,"raf",0);ot(this,"last",0);ot(this,"time",0);ot(this,"dirty",!0);ot(this,"animating",!0);ot(this,"disposed",!1);ot(this,"abort",new AbortController);ot(this,"detailMaps",[]);ot(this,"resizeObserver");ot(this,"flight");ot(this,"lastCompass",NaN);ot(this,"width",1);ot(this,"height",1);ot(this,"quality","high");ot(this,"resolution");ot(this,"pacing");ot(this,"solarMinutes",NaN);ot(this,"roadPaths",[]);ot(this,"external");ot(this,"meta");ot(this,"shadowAim",new W);ot(this,"lookDir",new W);ot(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=le.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=ls;break;default:return}t.preventDefault(),this.fly(c,.3)});ot(this,"frame",t=>{var d,u,m,x;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,document.hidden){this.pacing.reset(),this.resolution.resetSampling();return}if(this.flight){const p=this.flight;p.t=Math.min(1,p.t+e/p.duration);const g=mx(p.t),S=(v,M)=>v+(M-v)*g;this.applyView({x:S(p.from.x,p.to.x),z:S(p.from.z,p.to.z),dist:Math.exp(S(Math.log(p.from.dist),Math.log(p.to.dist))),polar:S(p.from.polar,p.to.polar),azimuth:S(p.from.azimuth,p.to.azimuth)}),p.t>=1&&(this.flight=void 0)}if(this.controls&&!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(e)&&(this.dirty=!0),this.animating&&(this.time+=e,this.water.uniforms.uTime.value=this.time,(d=this.life)==null||d.update(e,this.time),this.dirty=!0),!this.dirty)return;const n=this.pacing.takeFrame(t);if(n===void 0)return;this.dirty=!1,this.animating&&this.resolution.update(t/1e3,n,this.pacing.target)&&this.renderer.setPixelRatio(this.resolution.ratio);const s=this.camera;let r,a=1/0;const o=!!this.controls&&!this.external,l=this.hf.yAt(s.position.x,s.position.z);o&&(s.position.y=Math.max(s.position.y,l+12));const c=Math.max(1,s.position.y-Math.max(l,this.waterLevel));if(this.controls&&o)r=s.position.distanceTo(this.controls.target),this.shadowAim.copy(this.controls.target);else{s.getWorldDirection(this.lookDir);const p=Math.min(this.lookDir.y<-.05?c/-this.lookDir.y:1e9,40+c*3,3e3);this.shadowAim.copy(s.position).addScaledVector(this.lookDir,p),r=Math.max(p,c)*1.3,a=Math.max(350,c*10)}const h=o?le.clamp(r*.02,2,80):le.clamp(r*.012,.4,60);Math.abs(h-s.near)>s.near*.05&&(s.near=h,s.updateProjectionMatrix());const f=ux[this.quality];if((u=this.life)==null||u.updateParkedLod(s.position,c,f.cars),(m=this.trees)==null||m.updateLod(s.position,c,f.trees),this.atmosphere.aimShadow(this.shadowAim,r),this.renderer.render(this.scene,s),(x=this.labels)==null||x.update(s,this.width,this.height,a),o){const p=Math.round(this.currentView().azimuth);p!==this.lastCompass&&(this.lastCompass=p,this.cb.onCompass(p))}});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external,this.pacing=new p_(s.frameTarget)}async init(){try{this.renderer=new Cg({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D model needs.");return}const t=this.renderer;this.quality=this.pickQuality();let e=hx[this.quality];const n=(navigator.deviceMemory??8)>4;this.quality==="medium"&&n&&!this.opts.quality&&(e={...e,pixelRatio:2,trees:.8}),this.resolution=new Q_(Math.min(window.devicePixelRatio||1,e.pixelRatio),this.quality==="low"?.6:1),t.setPixelRatio(this.resolution.ratio),t.outputColorSpace=ye,t.toneMapping=ua,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=cs;const s=t.domElement;this.opts.external?(s.setAttribute("role","img"),s.setAttribute("aria-label","3D model of Inverloch")):(s.tabIndex=0,s.setAttribute("role","application"),s.setAttribute("aria-label","3D model of Inverloch. Drag to pan, right-drag to rotate, scroll to zoom. Arrow keys pan, plus and minus zoom, Q and E rotate.")),s.style.display="block",s.style.outlineOffset="-3px",this.container.appendChild(s),s.addEventListener("webglcontextlost",w=>{w.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this model was using.")});let r;try{r=await jg(this.opts.assets,(w,C)=>this.cb.onProgress(w*.6,C),this.abort.signal)}catch(w){this.disposed||this.cb.onError(w instanceof Error?w.message:"The model data could not be loaded.");return}if(this.disposed)return;const{town:a,heights:o,exposure:l,ground:c}=r;this.meta=a.meta;const h=[...this.opts.clear??[],...(this.opts.clearLatLon??[]).map(w=>{const[C,D]=this.fromLatLon(w.lat,w.lon);return{x:C,z:D,r:w.r}})],f=(this.opts.clearPolygons??[]).map(w=>({pts:w.latLon.map(([C,D])=>this.fromLatLon(C,D)),roads:!!w.roads})),d=(w,C,D)=>f.some(z=>(!D||z.roads)&&px(z.pts,w,C)),u=(w,C)=>h.some(D=>(w-D.x)**2+(C-D.z)**2<D.r*D.r)||d(w,C,!1),m=(this.opts.detailLatLon??[]).map(w=>{const[C,D]=this.fromLatLon(w.lat,w.lon);return{x:C,z:D,r:w.r}}),x=(w,C)=>m.some(D=>(w-D.x)**2+(C-D.z)**2<D.r*D.r);c.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const p=async(w,C)=>{this.cb.onProgress(w,C),await fx()};await p(.62,"Shaping the terrain");const g=this.hf=new m_(o,l,a.meta.grid[0],a.meta.grid[1],a.meta.size[0],a.meta.size[1],e.step),S=qh();this.scene.add(ex(g,c,this.tide,S));const v=navigator.deviceMemory??8;Kg(this.opts.assets,this.quality==="low"||v<=4,this.abort.signal).then(w=>{if(this.disposed){for(const C of w)C.texture.dispose();return}w.slice(0,$r).forEach((C,D)=>{C.texture.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),S.maps[D].value=C.texture,S.rects[D].value.set(C.x,C.z,1/C.size,1),this.detailMaps.push(C.texture)}),this.dirty=!0}),this.water=cx(g,this.tide),this.scene.add(this.water.skirt,this.water.mesh),await p(.7,"Laying out the streets");const M=$_(a,g,f.some(w=>w.roads)?(w,C)=>d(w,C,!0):void 0);this.scene.add(M.group),this.roadPaths=M.paths,await p(.78,"Raising the buildings");const b=d_(a,g,M.index,v_,u);this.scene.add(b.group),await p(.86,"Planting trees");const E=this.trees=ax(a,g,e.trees,(w,C)=>u(w,C)||e_(w,C));this.scene.add(E.group),await p(.92,"Adding landmarks");const _={town:a,hf:g,footprints:b.footprints,roads:M.index,paths:M.paths,isClear:u,isDetail:x,hasDetail:m.length>0},y=U_(_);this.scene.add(y.group),this.solid=new Map,this.designedWalls=b.designedWalls;for(const w of[...b.footprints.map(C=>C.poly),...this.designedWalls]){if(w.length<6)continue;let C=1/0,D=-1/0,z=1/0,P=-1/0;for(let B=0;B<w.length;B+=2)C=Math.min(C,w[B]),D=Math.max(D,w[B]),z=Math.min(z,w[B+1]),P=Math.max(P,w[B+1]);for(let B=Math.floor(C/16);B<=Math.floor(D/16);B++)for(let O=Math.floor(z/16);O<=Math.floor(P/16);O++){const U=`${B}_${O}`,Y=this.solid.get(U);Y?Y.push(w):this.solid.set(U,[w])}}if(this.life=new H_(_,y),this.life.setTide(this.tide.value*Un),this.scene.add(this.life.group),this.disposed)return;this.atmosphere=new Yg(t,this.water,e.shadow),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.places=x_(a.meta,g),this.labels=new g_(this.labelLayer,this.places,w=>this.flyToPlace(w)),this.external||this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const T=window.matchMedia("(prefers-reduced-motion: reduce)").matches;T&&(this.animating=!1),this.external?this.setExternalCamera(300,900,2600,0,-.42):T?this.applyView(ls):(this.applyView({...ls,dist:9500,polar:24,azimuth:-20}),this.fly(ls,3.4)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,houses:a.counts.houses,mappedBuildings:a.counts.buildings,trees:E.count,roadPieces:a.counts.roads,sources:a.meta.sources,places:this.places}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}get isAnimating(){return this.animating}setAnimating(t){var e;t!==this.animating&&((e=this.resolution)==null||e.resetSampling()),this.animating=t,this.dirty=!0}setFrameTarget(t){var e;this.pacing.setTarget(t)&&((e=this.resolution)==null||e.resetSampling())}setExternalCamera(t,e,n,s,r){this.external&&(this.camera.position.set(t,e,n),this.camera.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}setExternal(t){if(!(t===this.external||!this.hf)){if(this.external=t,t)this.flight=void 0,this.controls&&(this.controls.enabled=!1);else{this.controls||this.setupControls(),this.controls.enabled=!0;const e=this.camera;e.getWorldDirection(this.lookDir);const n=Math.max(1,e.position.y),s=this.lookDir.y<-.05?Math.min(n/-this.lookDir.y,6e3):900,r=this.controls.target.copy(e.position).addScaledVector(this.lookDir,s);r.x=le.clamp(r.x,this.hf.xMin,this.hf.xMax),r.z=le.clamp(r.z,this.hf.zMin,this.hf.zMax),r.y=0,this.controls.update(),this.fly(ls,1.6)}this.resize()}}getCamera(){const t=new vn().setFromQuaternion(this.camera.quaternion,"YXZ"),e=this.camera.position;return{x:e.x,y:e.y,z:e.z,yaw:t.y,pitch:t.x}}fromLatLon(t,e){const n=this.meta;return n?[(e-n.origin[0])*n.metresPerDegree[0],-(t-n.origin[1])*n.metresPerDegree[1]]:[0,0]}addParts(t){const e=new je;e.name="guest";const n=t.map(s=>{const r=s.onGround?{...s,...dx(this.hf,s),indices:void 0}:s,a=new we,o=(u,m)=>new be(u instanceof Float32Array?u:Float32Array.from(u),m);a.setAttribute("position",o(r.positions,3)),r.colors&&a.setAttribute("color",o(r.colors,3)),r.uvs&&a.setAttribute("uv",o(r.uvs,2)),r.indices&&a.setIndex(Array.from(r.indices)),r.normals?a.setAttribute("normal",o(r.normals,3)):a.computeVertexNormals();let l=null;r.map&&(l=new Ee(r.map),l.colorSpace=ye,l.wrapS=l.wrapT=Vs,r.mapRepeat&&l.repeat.set(r.mapRepeat[0],r.mapRepeat[1]),l.anisotropy=4,l.needsUpdate=!0);const c=r.opacity??1,h={color:new Rt().setRGB(...r.color??[1,1,1]),map:l,vertexColors:!!r.colors,transparent:c<1,opacity:c,side:r.doubleSide?Be:ti},f=r.unlit?new Dn(h):new fi({...h,roughness:r.roughness??.9,metalness:r.metalness??0,emissive:new Rt().setRGB(...r.emissive??[0,0,0]),emissiveIntensity:r.emissiveIntensity??1,emissiveMap:r.glowMap?l:null,flatShading:!!r.flatShading}),d=new $t(a,f);return d.matrixAutoUpdate=!1,r.onGround||d.matrix.fromArray(Array.from(r.matrix)),d.userData.fixed=!!r.onGround,d.castShadow=c>=1,d.receiveShadow=!0,e.add(d),d});return this.scene.add(e),this.dirty=!0,{setMatrix:(s,r)=>{const a=n[s];!a||a.userData.fixed||(a.matrix.fromArray(Array.from(r)),a.matrixWorldNeedsUpdate=!0,this.dirty=!0)},setEmissive:(s,r,a,o,l)=>{var h;const c=(h=n[s])==null?void 0:h.material;c instanceof fi&&(c.emissive.setRGB(r,a,o),c.emissiveIntensity=l,this.dirty=!0)},remove:()=>{var s;this.scene.remove(e);for(const r of n){r.geometry.dispose();const a=r.material;(s=a.map)==null||s.dispose(),a.dispose()}this.dirty=!0}}}addTrafficCar(t,e,n,s,r){if(!this.life)throw new Error("Wait for the Inverloch model before adding traffic");const{mesh:a,scale:o}=this.life.makeTrafficCar(t,e,n,s,r);let l;return{setMatrix:(c,h)=>{c===0&&(a.matrix.fromArray(h),a.matrix.elements[13]+=Nh,a.matrixWorldNeedsUpdate=!0,a.visible=!!(h[0]||h[1]||h[2]),this.dirty=!0)},setSignal:c=>{!l&&c&&(l=kh(t),l.scale.copy(o),a.add(l)),l&&(Gh(l,c),this.dirty=!0)},remove:()=>{a.removeFromParent(),a.geometry.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),this.dirty=!0}}}addPad(t){const e=t.radius??t.halfWidth??5,n=t.radius??t.halfDepth??5,s=t.heading??0,r=Math.cos(s),a=Math.sin(s);let o=1/0,l=-1/0;for(const[u,m]of[[0,0],[-e,-n],[e,-n],[e,n],[-e,n],[0,-n],[0,n],[-e,0],[e,0]]){const x=this.hf.yAt(t.x+u*r+m*a,t.z-u*a+m*r);o=Math.min(o,x),l=Math.max(l,x)}const c=l+(t.lift??.25),h=c-o+1,f=t.radius?new Ro(t.radius,t.radius,h,24):new bi(e*2,h,n*2),d=new $t(f,new fi({color:new Rt().setRGB(...t.color),roughness:1}));return d.position.set(t.x,c-h/2,t.z),d.rotation.y=s,d.receiveShadow=!0,d.name="guest-pad",this.scene.add(d),this.dirty=!0,c}setSolarMinutes(t){!this.atmosphere||t===this.solarMinutes||(this.solarMinutes=t,this.atmosphere.setSolar(t),this.dirty=!0)}roadSpot(t){const e=t.trim().toLowerCase();let n=null;for(const m of this.roadPaths)m.name.toLowerCase()===e&&(!n||m.length>n.length)&&(n=m);if(!n)return null;const s=n.pts.length/3,r=0,a=s-1,o=s>>1;let l=n.pts[a*3]-n.pts[r*3],c=n.pts[a*3+2]-n.pts[r*3+2];const h=Math.hypot(l,c)||1;l/=h,c/=h;const f=Math.min(70,h*.5),d=n.pts[o*3]-l*f,u=n.pts[o*3+2]-c*f;return{x:d,y:this.hf.yAt(d,u)+38,z:u,yaw:Math.atan2(-l,-c),pitch:-.42}}groundAt(t,e){return this.hf?this.hf.yAt(t,e):0}nearestCar(t,e,n){var s;return((s=this.life)==null?void 0:s.nearestCar(t,e,n))??null}addCars(t){var e;(e=this.life)==null||e.addCars(t),this.dirty=!0}driveCar(t,e,n,s,r,a,o=0,l=0,c=0){var f;const h=((f=this.life)==null?void 0:f.driveCar(t,e,n,s,r,a,o,l,c))??!1;return this.dirty=!0,h}designedWallFootprints(){return this.designedWalls.map(t=>t.slice())}solidAt(t,e){var s;const n=(s=this.solid)==null?void 0:s.get(`${Math.floor(t/16)}_${Math.floor(e/16)}`);if(!n)return!1;for(const r of n){let a=!1;for(let o=0,l=r.length/2-1;o<r.length/2;l=o++){const c=r[o*2],h=r[o*2+1],f=r[l*2],d=r[l*2+1];h>e!=d>e&&t<(f-c)*(e-h)/(d-h)+c&&(a=!a)}if(a)return!0}return!1}get waterLevel(){return this.tide.value*Un}get bounds(){return this.hf?[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]:[-4e3,4e3,-3440,3440]}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}setTide(t){var e;this.water&&(this.water.setTide(le.clamp(t,Zh,Kh)),(e=this.life)==null||e.setTide(this.tide.value*Un),this.dirty=!0)}setLabelsVisible(t){var e;(e=this.labels)==null||e.setVisible(t),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.2)}resetView(){this.fly(ls,1.8)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){const t=this.currentView();this.fly({...t,azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:le.clamp(e.dist*t,this.controls.minDistance,this.controls.maxDistance)},.35)}dispose(){var t,e,n;if(this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(t=this.resizeObserver)==null||t.disconnect(),(e=this.labels)==null||e.dispose(),(n=this.controls)==null||n.dispose(),!!this.renderer){for(const s of this.detailMaps)s.dispose();this.renderer.domElement.removeEventListener("keydown",this.onKey),this.scene.traverse(s=>{var o,l;const r=s;(l=(o=r.geometry)==null?void 0:o.dispose)==null||l.call(o);const a=Array.isArray(r.material)?r.material:r.material?[r.material]:[];for(const c of a){for(const h of Object.values(c))h instanceof Ee&&h.dispose();c.dispose()}}),this.renderer.dispose(),this.renderer.domElement.remove()}}pickQuality(){if(this.opts.quality)return this.opts.quality;const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new Wg(this.camera,this.renderer.domElement);t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=70,t.maxDistance=12e3,t.maxPolarAngle=le.degToRad(84),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const e=t.target,n=this.hf;e.x=le.clamp(e.x,n.xMin,n.xMax),e.z=le.clamp(e.z,n.zMin,n.zMax),e.y=0,this.dirty=!0}),this.renderer.domElement.addEventListener("keydown",this.onKey)}clampView(t){var e,n;return{x:le.clamp(t.x,this.hf.xMin,this.hf.xMax),z:le.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:le.clamp(t.dist,((e=this.controls)==null?void 0:e.minDistance)??70,((n=this.controls)==null?void 0:n.maxDistance)??12e3),polar:le.clamp(t.polar,2,84),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=this.camera.position.clone().sub(t),n=new Pr().setFromVector3(e);return{x:t.x,z:t.z,dist:n.radius,polar:le.radToDeg(n.phi),azimuth:le.radToDeg(n.theta)}}applyView(t){const e=new Pr(t.dist,le.degToRad(t.polar),le.degToRad(t.azimuth)),n=this.controls.target.set(t.x,0,t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(!this.controls||this.external)return;if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=this.external?60:t/e<.8?52:38,this.camera.updateProjectionMatrix(),this.dirty=!0}}const al="Map data © OpenStreetMap contributors · Elevation © Geoscience Australia (CC BY 4.0)",_x=`
.inv-embed, .inv-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the model but never take a touch: drags and pinches must reach the canvas underneath */
.inv-embed-labels, .inv-embed .inv-label { pointer-events: none; }
.inv-embed-credit { position: absolute; left: 50%; bottom: var(--inv-credit-bottom, 6px); transform: translateX(-50%); margin: 0; max-width: calc(100% - 24px);
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis; pointer-events: none; }
`;function xx(i,t){if(!document.querySelector("style[data-inverloch-model]")){const d=document.createElement("style");d.setAttribute("data-inverloch-model",""),d.textContent=On+_x,document.head.appendChild(d)}const e=document.createElement("div");e.className="inv-embed";const n=document.createElement("div");n.className="inv-embed-layer";const s=document.createElement("div");s.className="inv-embed-layer inv-embed-labels";const r=document.createElement("p");r.className="inv-embed-credit",r.textContent=al,e.append(n,s,r),i.appendChild(e);const a=typeof t.assets=="string"?{height:t.assets+"height.png",ground:t.assets+(typeof window<"u"&&window.anSmallGround?"ground-2k.webp":"ground.webp"),town:t.assets+"town.json",detail:t.assets+"detail.json"}:t.assets;let o=[],l=!1,c;const h=new Promise((d,u)=>c={ok:d,fail:u}),f=new gx(n,s,{onProgress:(d,u)=>{var m;return(m=t.onProgress)==null?void 0:m.call(t,d,u)},onReady:d=>{o=d.places.map(u=>{const m=Math.min(Math.max(u.view[0]*.55,90),1500),x=u.view[1]*Math.PI/180,p=u.view[2]*Math.PI/180,g=u.x+m*Math.sin(x)*Math.sin(p),S=u.z+m*Math.sin(x)*Math.cos(p),v=Math.max(f.groundAt(g,S),f.waterLevel)+Math.max(m*Math.cos(x),20),M=u.x-g,b=u.y-10-v,E=u.z-S;return{id:u.id,name:u.name,kind:u.kind,x:g,y:v,z:S,yaw:Math.atan2(-M,-E),pitch:Math.atan2(b,Math.hypot(M,E)),tx:u.x,tz:u.z}}),t.labels===!1&&f.setLabelsVisible(!1),l=!0,c.ok()},onError:d=>{var u;return l?(u=t.onError)==null?void 0:u.call(t,d):c.fail(new Error(d))},onCompass:()=>{}},{assets:a,external:!0,quality:t.quality,frameTarget:t.frameTarget,clear:t.clear,clearLatLon:t.clearLatLon,clearPolygons:t.clearPolygons,detailLatLon:t.detailLatLon});return f.init(),{ready:h,setCamera:(d,u,m,x,p)=>f.setExternalCamera(d,u,m,x,p),setMinutes:d=>f.setSolarMinutes(d),setTide:d=>f.setTide(d),setAnimating:d=>f.setAnimating(d),setFrameTarget:d=>f.setFrameTarget(d),setLabelsVisible:d=>f.setLabelsVisible(d),groundAt:(d,u)=>f.groundAt(d,u),waterLevel:()=>f.waterLevel,bounds:()=>f.bounds,fromLatLon:(d,u)=>f.fromLatLon(d,u),setMode:d=>f.setExternal(d!=="bird"),getCamera:()=>f.getCamera(),flyToPlace:d=>f.flyToPlace(d),lookAt:(d,u,m,x,p)=>f.setView(d,u,m,x,p),addParts:d=>f.addParts(d),addTrafficCar:(d,u,m,x,p)=>f.addTrafficCar(d,u,m,x,p),addPad:d=>f.addPad(d),spots:()=>o,nearestCar:(d,u,m)=>f.nearestCar(d,u,m),driveCar:(d,u,m,x,p,g,S,v,M)=>f.driveCar(d,u,m,x,p,g,S,v,M),solidAt:(d,u)=>f.solidAt(d,u),designedWallFootprints:()=>f.designedWallFootprints(),addCars:d=>f.addCars(d),roadSpot:d=>{const u=f.roadSpot(d);return u?{id:"road:"+d,name:d,kind:"landmark",...u,tx:u.x-Math.sin(u.yaw)*70,tz:u.z-Math.cos(u.yaw)*70}:null},tide:{min:Zh,max:Kh,initial:$h},credit:al,dispose:()=>{f.dispose(),e.remove()}}}return wn.CREDIT=al,wn.create=xx,Object.defineProperty(wn,Symbol.toStringTag,{value:"Module"}),wn}({});

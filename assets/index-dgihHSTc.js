(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var o0={exports:{}},Zo={},l0;function jy(){if(l0)return Zo;l0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var c0;function Wy(){return c0||(c0=1,o0.exports=jy()),o0.exports}var A=Wy(),u0={exports:{}},mt={},d0;function Xy(){if(d0)return mt;d0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,x={};function b(I,J,be){this.props=I,this.context=J,this.refs=x,this.updater=be||w}b.prototype.isReactComponent={},b.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},b.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=b.prototype;function z(I,J,be){this.props=I,this.context=J,this.refs=x,this.updater=be||w}var N=z.prototype=new L;N.constructor=z,R(N,b.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function U(){}var D={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function k(I,J,be){var Ue=be.ref;return{$$typeof:s,type:I,key:J,ref:Ue!==void 0?Ue:null,props:be}}function K(I,J){return k(I.type,J,I.props)}function V(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function q(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(be){return J[be]})}var ge=/\/+/g;function he(I,J){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):J.toString(36)}function ee(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,J,be,Ue,Le){var te=typeof I;(te==="undefined"||te==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(te){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case s:case e:ye=!0;break;case g:return ye=I._init,O(ye(I._payload),J,be,Ue,Le)}}if(ye)return Le=Le(I),ye=Ue===""?"."+he(I,0):Ue,F(Le)?(be="",ye!=null&&(be=ye.replace(ge,"$&/")+"/"),O(Le,J,be,"",function(it){return it})):Le!=null&&(V(Le)&&(Le=K(Le,be+(Le.key==null||I&&I.key===Le.key?"":(""+Le.key).replace(ge,"$&/")+"/")+ye)),J.push(Le)),1;ye=0;var we=Ue===""?".":Ue+":";if(F(I))for(var qe=0;qe<I.length;qe++)Ue=I[qe],te=we+he(Ue,qe),ye+=O(Ue,J,be,te,Le);else if(qe=S(I),typeof qe=="function")for(I=qe.call(I),qe=0;!(Ue=I.next()).done;)Ue=Ue.value,te=we+he(Ue,qe++),ye+=O(Ue,J,be,te,Le);else if(te==="object"){if(typeof I.then=="function")return O(ee(I),J,be,Ue,Le);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(I,J,be){if(I==null)return I;var Ue=[],Le=0;return O(I,Ue,"","",function(te){return J.call(be,te,Le++)}),Ue}function ae(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(be){(I._status===0||I._status===-1)&&(I._status=1,I._result=be)},function(be){(I._status===0||I._status===-1)&&(I._status=2,I._result=be)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var _e=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Me={map:G,forEach:function(I,J,be){G(I,function(){J.apply(this,arguments)},be)},count:function(I){var J=0;return G(I,function(){J++}),J},toArray:function(I){return G(I,function(J){return J})||[]},only:function(I){if(!V(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return mt.Activity=_,mt.Children=Me,mt.Component=b,mt.Fragment=n,mt.Profiler=l,mt.PureComponent=z,mt.StrictMode=a,mt.Suspense=m,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,mt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return D.H.useMemoCache(I)}},mt.cache=function(I){return function(){return I.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(I,J,be){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ue=R({},I.props),Le=I.key;if(J!=null)for(te in J.key!==void 0&&(Le=""+J.key),J)!E.call(J,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&J.ref===void 0||(Ue[te]=J[te]);var te=arguments.length-2;if(te===1)Ue.children=be;else if(1<te){for(var ye=Array(te),we=0;we<te;we++)ye[we]=arguments[we+2];Ue.children=ye}return k(I.type,Le,Ue)},mt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},mt.createElement=function(I,J,be){var Ue,Le={},te=null;if(J!=null)for(Ue in J.key!==void 0&&(te=""+J.key),J)E.call(J,Ue)&&Ue!=="key"&&Ue!=="__self"&&Ue!=="__source"&&(Le[Ue]=J[Ue]);var ye=arguments.length-2;if(ye===1)Le.children=be;else if(1<ye){for(var we=Array(ye),qe=0;qe<ye;qe++)we[qe]=arguments[qe+2];Le.children=we}if(I&&I.defaultProps)for(Ue in ye=I.defaultProps,ye)Le[Ue]===void 0&&(Le[Ue]=ye[Ue]);return k(I,te,Le)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(I){return{$$typeof:p,render:I}},mt.isValidElement=V,mt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ae}},mt.memo=function(I,J){return{$$typeof:f,type:I,compare:J===void 0?null:J}},mt.startTransition=function(I){var J=D.T,be={};D.T=be;try{var Ue=I(),Le=D.S;Le!==null&&Le(be,Ue),typeof Ue=="object"&&Ue!==null&&typeof Ue.then=="function"&&Ue.then(U,_e)}catch(te){_e(te)}finally{J!==null&&be.types!==null&&(J.types=be.types),D.T=J}},mt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},mt.use=function(I){return D.H.use(I)},mt.useActionState=function(I,J,be){return D.H.useActionState(I,J,be)},mt.useCallback=function(I,J){return D.H.useCallback(I,J)},mt.useContext=function(I){return D.H.useContext(I)},mt.useDebugValue=function(){},mt.useDeferredValue=function(I,J){return D.H.useDeferredValue(I,J)},mt.useEffect=function(I,J){return D.H.useEffect(I,J)},mt.useEffectEvent=function(I){return D.H.useEffectEvent(I)},mt.useId=function(){return D.H.useId()},mt.useImperativeHandle=function(I,J,be){return D.H.useImperativeHandle(I,J,be)},mt.useInsertionEffect=function(I,J){return D.H.useInsertionEffect(I,J)},mt.useLayoutEffect=function(I,J){return D.H.useLayoutEffect(I,J)},mt.useMemo=function(I,J){return D.H.useMemo(I,J)},mt.useOptimistic=function(I,J){return D.H.useOptimistic(I,J)},mt.useReducer=function(I,J,be){return D.H.useReducer(I,J,be)},mt.useRef=function(I){return D.H.useRef(I)},mt.useState=function(I){return D.H.useState(I)},mt.useSyncExternalStore=function(I,J,be){return D.H.useSyncExternalStore(I,J,be)},mt.useTransition=function(){return D.H.useTransition()},mt.version="19.2.8",mt}var h0;function hp(){return h0||(h0=1,u0.exports=Xy()),u0.exports}var me=hp(),Rh={exports:{}},Qo={},f0={exports:{}},p0={},m0;function qy(){return m0||(m0=1,(function(s){function e(O,G){var ae=O.length;O.push(G);e:for(;0<ae;){var _e=ae-1>>>1,Me=O[_e];if(0<l(Me,G))O[_e]=G,O[ae]=Me,ae=_e;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var G=O[0],ae=O.pop();if(ae!==G){O[0]=ae;e:for(var _e=0,Me=O.length,I=Me>>>1;_e<I;){var J=2*(_e+1)-1,be=O[J],Ue=J+1,Le=O[Ue];if(0>l(be,ae))Ue<Me&&0>l(Le,be)?(O[_e]=Le,O[Ue]=ae,_e=Ue):(O[_e]=be,O[J]=ae,_e=J);else if(Ue<Me&&0>l(Le,ae))O[_e]=Le,O[Ue]=ae,_e=Ue;else break e}}return G}function l(O,G){var ae=O.sortIndex-G.sortIndex;return ae!==0?ae:O.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],f=[],g=1,_=null,v=3,S=!1,w=!1,R=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var G=n(f);G!==null;){if(G.callback===null)a(f);else if(G.startTime<=O)a(f),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(f)}}function F(O){if(R=!1,N(O),!w)if(n(m)!==null)w=!0,U||(U=!0,q());else{var G=n(f);G!==null&&ee(F,G.startTime-O)}}var U=!1,D=-1,E=5,k=-1;function K(){return x?!0:!(s.unstable_now()-k<E)}function V(){if(x=!1,U){var O=s.unstable_now();k=O;var G=!0;try{e:{w=!1,R&&(R=!1,L(D),D=-1),S=!0;var ae=v;try{t:{for(N(O),_=n(m);_!==null&&!(_.expirationTime>O&&K());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,v=_.priorityLevel;var Me=_e(_.expirationTime<=O);if(O=s.unstable_now(),typeof Me=="function"){_.callback=Me,N(O),G=!0;break t}_===n(m)&&a(m),N(O)}else a(m);_=n(m)}if(_!==null)G=!0;else{var I=n(f);I!==null&&ee(F,I.startTime-O),G=!1}}break e}finally{_=null,v=ae,S=!1}G=void 0}}finally{G?q():U=!1}}}var q;if(typeof z=="function")q=function(){z(V)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,he=ge.port2;ge.port1.onmessage=V,q=function(){he.postMessage(null)}}else q=function(){b(V,0)};function ee(O,G){D=b(function(){O(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ae=v;v=G;try{return O()}finally{v=ae}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ae=v;v=O;try{return G()}finally{v=ae}},s.unstable_scheduleCallback=function(O,G,ae){var _e=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?_e+ae:_e):ae=_e,O){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=ae+Me,O={id:g++,callback:G,priorityLevel:O,startTime:ae,expirationTime:Me,sortIndex:-1},ae>_e?(O.sortIndex=ae,e(f,O),n(m)===null&&O===n(f)&&(R?(L(D),D=-1):R=!0,ee(F,ae-_e))):(O.sortIndex=Me,e(m,O),w||S||(w=!0,U||(U=!0,q()))),O},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(O){var G=v;return function(){var ae=v;v=G;try{return O.apply(this,arguments)}finally{v=ae}}}})(p0)),p0}var g0;function Yy(){return g0||(g0=1,f0.exports=qy()),f0.exports}var Nh={exports:{}},qr={},v0;function Ky(){if(v0)return qr;v0=1;var s=hp();function e(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)f+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,f,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:f,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return qr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qr.createPortal=function(m,f){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(e(299));return c(m,f,null,g)},qr.flushSync=function(m){var f=d.T,g=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=f,a.p=g,a.d.f()}},qr.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,a.d.C(m,f))},qr.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},qr.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var g=f.as,_=p(g,f.crossOrigin),v=typeof f.integrity=="string"?f.integrity:void 0,S=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;g==="style"?a.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},qr.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var g=p(f.as,f.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&a.d.M(m)},qr.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var g=f.as,_=p(g,f.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},qr.preloadModule=function(m,f){if(typeof m=="string")if(f){var g=p(f.as,f.crossOrigin);a.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:g,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else a.d.m(m)},qr.requestFormReset=function(m){a.d.r(m)},qr.unstable_batchedUpdates=function(m,f){return m(f)},qr.useFormState=function(m,f,g){return d.H.useFormState(m,f,g)},qr.useFormStatus=function(){return d.H.useHostTransitionStatus()},qr.version="19.2.8",qr}var _0;function $y(){if(_0)return Nh.exports;_0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nh.exports=Ky(),Nh.exports}var x0;function Zy(){if(x0)return Qo;x0=1;var s=Yy(),e=hp(),n=$y();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,i=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(i=r.return),t=r.return;while(t)}return r.tag===3?i:null}function d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function p(t){if(t.tag===31){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function f(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(a(188));return r!==t?null:t}for(var i=t,o=r;;){var u=i.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){i=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===i)return m(u),t;if(h===o)return m(u),r;h=h.sibling}throw Error(a(188))}if(i.return!==o.return)i=u,o=h;else{for(var y=!1,C=u.child;C;){if(C===i){y=!0,i=u,o=h;break}if(C===o){y=!0,o=u,i=h;break}C=C.sibling}if(!y){for(C=h.child;C;){if(C===i){y=!0,i=h,o=u;break}if(C===o){y=!0,o=h,i=u;break}C=C.sibling}if(!y)throw Error(a(189))}}if(i.alternate!==o)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?t:r}function g(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=g(t),r!==null)return r;t=t.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case b:return"Profiler";case x:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList";case k:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case z:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case N:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return r=t.displayName||null,r!==null?r:he(t.type)||"Memo";case E:r=t._payload,t=t._init;try{return he(t(r))}catch{}}return null}var ee=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},_e=[],Me=-1;function I(t){return{current:t}}function J(t){0>Me||(t.current=_e[Me],_e[Me]=null,Me--)}function be(t,r){Me++,_e[Me]=t.current,t.current=r}var Ue=I(null),Le=I(null),te=I(null),ye=I(null);function we(t,r){switch(be(te,r),be(Le,t),be(Ue,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?Nv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=Nv(r),t=Pv(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Ue),be(Ue,t)}function qe(){J(Ue),J(Le),J(te)}function it(t){t.memoizedState!==null&&be(ye,t);var r=Ue.current,i=Pv(r,t.type);r!==i&&(be(Le,t),be(Ue,i))}function He(t){Le.current===t&&(J(Ue),J(Le)),ye.current===t&&(J(ye),qo._currentValue=ae)}var Et,ct;function ot(t){if(Et===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);Et=r&&r[1]||"",ct=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+ct}var wt=!1;function Sr(t,r){if(!t||wt)return"";wt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(de){var le=de}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(de){le=de}t.call(Se.prototype)}}else{try{throw Error()}catch(de){le=de}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],C=h[1];if(y&&C){var B=y.split(`
`),se=C.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===se.length)for(o=B.length-1,u=se.length-1;1<=o&&0<=u&&B[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==se[u]){var ve=`
`+B[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?ot(i):""}function Mr(t,r){switch(t.tag){case 26:case 27:case 5:return ot(t.type);case 16:return ot("Lazy");case 13:return t.child!==r&&r!==null?ot("Suspense Fallback"):ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return Sr(t.type,!1);case 11:return Sr(t.type.render,!1);case 1:return Sr(t.type,!0);case 31:return ot("Activity");default:return""}}function rr(t){try{var r="",i=null;do r+=Mr(t,i),i=t,t=t.return;while(t);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var lr=Object.prototype.hasOwnProperty,sr=s.unstable_scheduleCallback,jt=s.unstable_cancelCallback,or=s.unstable_shouldYield,Y=s.unstable_requestPaint,kt=s.unstable_now,Rt=s.unstable_getCurrentPriorityLevel,P=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,$=s.unstable_NormalPriority,ne=s.unstable_LowPriority,ue=s.unstable_IdlePriority,ke=s.log,Oe=s.unstable_setDisableYieldValue,W=null,Ce=null;function Pe(t){if(typeof ke=="function"&&Oe(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(W,t)}catch{}}var ze=Math.clz32?Math.clz32:Je,Ae=Math.log,at=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ae(t)/at|0)|0}var lt=256,dt=262144,j=4194304;function pe(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Re(t,r,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=pe(o):(y&=C,y!==0?u=pe(y):i||(i=C&~t,i!==0&&(u=pe(i))))):(C=o&~h,C!==0?u=pe(C):y!==0?u=pe(y):i||(i=o&~t,i!==0&&(u=pe(i)))),u===0?0:r!==0&&r!==u&&(r&h)===0&&(h=u&-u,i=r&-r,h>=i||h===32&&(i&4194048)!==0)?r:u}function Fe(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function je(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function Ze(t){for(var r=[],i=0;31>i;i++)r.push(t);return r}function Ge(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _r(t,r,i,o,u,h){var y=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var C=t.entanglements,B=t.expirationTimes,se=t.hiddenUpdates;for(i=y&~i;0<i;){var ve=31-ze(i),Se=1<<ve;C[ve]=0,B[ve]=-1;var le=se[ve];if(le!==null)for(se[ve]=null,ve=0;ve<le.length;ve++){var de=le[ve];de!==null&&(de.lane&=-536870913)}i&=~Se}o!==0&&It(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~r))}function It(t,r,i){t.pendingLanes|=r,t.suspendedLanes&=~r;var o=31-ze(r);t.entangledLanes|=r,t.entanglements[o]=t.entanglements[o]|1073741824|i&261930}function zr(t,r){var i=t.entangledLanes|=r;for(t=t.entanglements;i;){var o=31-ze(i),u=1<<o;u&r|t[o]&r&&(t[o]|=r),i&=~u}}function Br(t,r){var i=r&-r;return i=(i&42)!==0?1:fi(i),(i&(t.suspendedLanes|r))!==0?0:i}function fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function pi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function mi(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:e0(t.type))}function gi(t,r){var i=G.p;try{return G.p=t,r()}finally{G.p=i}}var fe=Math.random().toString(36).slice(2),De="__reactFiber$"+fe,Ee="__reactProps$"+fe,et="__reactContainer$"+fe,pt="__reactEvents$"+fe,Tt="__reactListeners$"+fe,fr="__reactHandles$"+fe,Wt="__reactResources$"+fe,cr="__reactMarker$"+fe;function nr(t){delete t[De],delete t[Ee],delete t[pt],delete t[Tt],delete t[fr]}function st(t){var r=t[De];if(r)return r;for(var i=t.parentNode;i;){if(r=i[et]||i[De]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(t=Fv(t);t!==null;){if(i=t[De])return i;t=Fv(t)}return r}t=i,i=t.parentNode}return null}function Ne(t){if(t=t[De]||t[et]){var r=t.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return t}return null}function Zt(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function pr(t){var r=t[Wt];return r||(r=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function bt(t){t[cr]=!0}var un=new Set,T={};function X(t,r){oe(t,r),oe(t+"Capture",r)}function oe(t,r){for(T[t]=r,t=0;t<r.length;t++)un.add(r[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Q={},Ie={};function Be(t){return lr.call(Ie,t)?!0:lr.call(Q,t)?!1:re.test(t)?Ie[t]=!0:(Q[t]=!0,!1)}function We(t,r,i){if(Be(r))if(i===null)t.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+i)}}function Xe(t,r,i){if(i===null)t.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+i)}}function $e(t,r,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(r,i,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rt(t,r,i){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r);if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(y){i=""+y,h.call(this,y)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Dt(t){if(!t._valueTracker){var r=gt(t)?"checked":"value";t._valueTracker=rt(t,r,""+t[r])}}function ir(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var i=r.getValue(),o="";return t&&(o=gt(t)?t.checked?"true":"false":t.value),t=o,t!==i?(r.setValue(t),!0):!1}function Ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qt=/[\n"\\]/g;function Ut(t){return t.replace(Qt,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ye(t,r,i,o,u,h,y,C){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),r!=null?y==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+tt(r)):t.value!==""+tt(r)&&(t.value=""+tt(r)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),r!=null?On(t,y,tt(r)):i!=null?On(t,y,tt(i)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+tt(C):t.removeAttribute("name")}function Xr(t,r,i,o,u,h,y,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),r!=null||i!=null){if(!(h!=="submit"&&h!=="reset"||r!=null)){Dt(t);return}i=i!=null?""+tt(i):"",r=r!=null?""+tt(r):i,C||r===t.value||(t.value=r),t.defaultValue=r}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Dt(t)}function On(t,r,i){r==="number"&&Ft(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Lr(t,r,i,o){if(t=t.options,r){r={};for(var u=0;u<i.length;u++)r["$"+i[u]]=!0;for(i=0;i<t.length;i++)u=r.hasOwnProperty("$"+t[i].value),t[i].selected!==u&&(t[i].selected=u),u&&o&&(t[i].defaultSelected=!0)}else{for(i=""+tt(i),r=null,u=0;u<t.length;u++){if(t[u].value===i){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function dn(t,r,i){if(r!=null&&(r=""+tt(r),r!==t.value&&(t.value=r),i==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=i!=null?""+tt(i):""}function Fn(t,r,i,o){if(r==null){if(o!=null){if(i!=null)throw Error(a(92));if(ee(o)){if(1<o.length)throw Error(a(93));o=o[0]}i=o}i==null&&(i=""),r=i}i=tt(r),t.defaultValue=i,o=t.textContent,o===i&&o!==""&&o!==null&&(t.value=o),Dt(t)}function hn(t,r){if(r){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=r;return}}t.textContent=r}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mr(t,r,i){var o=r.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?o?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":o?t.setProperty(r,i):typeof i!="number"||i===0||Xt.has(r)?r==="float"?t.cssFloat=i:t[r]=(""+i).trim():t[r]=i+"px"}function zn(t,r,i){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,i!=null){for(var o in i)!i.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in r)o=r[u],r.hasOwnProperty(u)&&i[u]!==o&&mr(t,u,o)}else for(var h in r)r.hasOwnProperty(h)&&mr(t,h,r[h])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$i=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(t){return $i.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function vi(){}var Tu=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function Rp(t){var r=Ne(t);if(r&&(t=r.stateNode)){var i=t[Ee]||null;e:switch(t=r.stateNode,r.type){case"input":if(Ye(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),r=i.name,i.type==="radio"&&r!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Ut(""+r)+'"][type="radio"]'),r=0;r<i.length;r++){var o=i[r];if(o!==t&&o.form===t.form){var u=o[Ee]||null;if(!u)throw Error(a(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(r=0;r<i.length;r++)o=i[r],o.form===t.form&&ir(o)}break e;case"textarea":dn(t,i.value,i.defaultValue);break e;case"select":r=i.value,r!=null&&Lr(t,!!i.multiple,r,!1)}}}var Au=!1;function Np(t,r,i){if(Au)return t(r,i);Au=!0;try{var o=t(r);return o}finally{if(Au=!1,(os!==null||ls!==null)&&(lc(),os&&(r=os,t=ls,ls=os=null,Rp(r),t)))for(r=0;r<t.length;r++)Rp(t[r])}}function co(t,r){var i=t.stateNode;if(i===null)return null;var o=i[Ee]||null;if(o===null)return null;i=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(a(231,r,typeof i));return i}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=!1;if(_i)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ru=!1}var Zi=null,Nu=null,Sl=null;function Pp(){if(Sl)return Sl;var t,r=Nu,i=r.length,o,u="value"in Zi?Zi.value:Zi.textContent,h=u.length;for(t=0;t<i&&r[t]===u[t];t++);var y=i-t;for(o=1;o<=y&&r[i-o]===u[h-o];o++);return Sl=u.slice(t,1<o?1-o:void 0)}function Ml(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Lp(){return!1}function en(t){function r(i,o,u,h,y){this._reactName=i,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(i=t[C],this[C]=i?i(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?El:Lp,this.isPropagationStopped=Lp,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),r}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=en(Pa),ho=_({},Pa,{view:0,detail:0}),Vx=en(ho),Pu,Lu,fo,Tl=_({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Pu=t.screenX-fo.screenX,Lu=t.screenY-fo.screenY):Lu=Pu=0,fo=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Ip=en(Tl),Hx=_({},Tl,{dataTransfer:0}),jx=en(Hx),Wx=_({},ho,{relatedTarget:0}),Iu=en(Wx),Xx=_({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),qx=en(Xx),Yx=_({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kx=en(Yx),$x=_({},Pa,{data:0}),Up=en($x),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e1(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Jx[t])?!!r[t]:!1}function Uu(){return e1}var t1=_({},ho,{key:function(t){if(t.key){var r=Zx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r1=en(t1),n1=_({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=en(n1),i1=_({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),a1=en(i1),s1=_({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=en(s1),l1=_({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c1=en(l1),u1=_({},Pa,{newState:0,oldState:0}),d1=en(u1),h1=[9,13,27,32],ku=_i&&"CompositionEvent"in window,po=null;_i&&"documentMode"in document&&(po=document.documentMode);var f1=_i&&"TextEvent"in window&&!po,Dp=_i&&(!ku||po&&8<po&&11>=po),Op=" ",Fp=!1;function zp(t,r){switch(t){case"keyup":return h1.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function p1(t,r){switch(t){case"compositionend":return Bp(r);case"keypress":return r.which!==32?null:(Fp=!0,Op);case"textInput":return t=r.data,t===Op&&Fp?null:t;default:return null}}function m1(t,r){if(cs)return t==="compositionend"||!ku&&zp(t,r)?(t=Pp(),Sl=Nu=Zi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Dp&&r.locale!=="ko"?null:r.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!g1[t.type]:r==="textarea"}function Vp(t,r,i,o){os?ls?ls.push(o):ls=[o]:os=o,r=mc(r,"onChange"),0<r.length&&(i=new wl("onChange","change",null,i,o),t.push({event:i,listeners:r}))}var mo=null,go=null;function v1(t){Ev(t,0)}function Cl(t){var r=Zt(t);if(ir(r))return t}function Hp(t,r){if(t==="change")return r}var jp=!1;if(_i){var Du;if(_i){var Ou="oninput"in document;if(!Ou){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Ou=typeof Wp.oninput=="function"}Du=Ou}else Du=!1;jp=Du&&(!document.documentMode||9<document.documentMode)}function Xp(){mo&&(mo.detachEvent("onpropertychange",qp),go=mo=null)}function qp(t){if(t.propertyName==="value"&&Cl(go)){var r=[];Vp(r,go,t,Cu(t)),Np(v1,r)}}function _1(t,r,i){t==="focusin"?(Xp(),mo=r,go=i,mo.attachEvent("onpropertychange",qp)):t==="focusout"&&Xp()}function x1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(go)}function y1(t,r){if(t==="click")return Cl(r)}function b1(t,r){if(t==="input"||t==="change")return Cl(r)}function S1(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var fn=typeof Object.is=="function"?Object.is:S1;function vo(t,r){if(fn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var i=Object.keys(t),o=Object.keys(r);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var u=i[o];if(!lr.call(r,u)||!fn(t[u],r[u]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,r){var i=Yp(t);t=0;for(var o;i;){if(i.nodeType===3){if(o=t+i.textContent.length,t<=r&&o>=r)return{node:i,offset:r-t};t=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Yp(i)}}function $p(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?$p(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Ft(t.document);r instanceof t.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)t=r.contentWindow;else break;r=Ft(t.document)}return r}function Fu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var M1=_i&&"documentMode"in document&&11>=document.documentMode,us=null,zu=null,_o=null,Bu=!1;function Qp(t,r,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Bu||us==null||us!==Ft(o)||(o=us,"selectionStart"in o&&Fu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&vo(_o,o)||(_o=o,o=mc(zu,"onSelect"),0<o.length&&(r=new wl("onSelect","select",null,r,i),t.push({event:r,listeners:o}),r.target=us)))}function La(t,r){var i={};return i[t.toLowerCase()]=r.toLowerCase(),i["Webkit"+t]="webkit"+r,i["Moz"+t]="moz"+r,i}var ds={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Gu={},Jp={};_i&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Ia(t){if(Gu[t])return Gu[t];if(!ds[t])return t;var r=ds[t],i;for(i in r)if(r.hasOwnProperty(i)&&i in Jp)return Gu[t]=r[i];return t}var em=Ia("animationend"),tm=Ia("animationiteration"),rm=Ia("animationstart"),E1=Ia("transitionrun"),w1=Ia("transitionstart"),T1=Ia("transitioncancel"),nm=Ia("transitionend"),im=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Bn(t,r){im.set(t,r),X(r,[t])}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Mn=[],hs=0,Hu=0;function Rl(){for(var t=hs,r=Hu=hs=0;r<t;){var i=Mn[r];Mn[r++]=null;var o=Mn[r];Mn[r++]=null;var u=Mn[r];Mn[r++]=null;var h=Mn[r];if(Mn[r++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&am(i,u,h)}}function Nl(t,r,i,o){Mn[hs++]=t,Mn[hs++]=r,Mn[hs++]=i,Mn[hs++]=o,Hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ju(t,r,i,o){return Nl(t,r,i,o),Pl(t)}function Ua(t,r){return Nl(t,null,null,r),Pl(t)}function am(t,r,i){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i);for(var u=!1,h=t.return;h!==null;)h.childLanes|=i,o=h.alternate,o!==null&&(o.childLanes|=i),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&r!==null&&(u=31-ze(i),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[r]:o.push(r),r.lane=i|536870912),h):null}function Pl(t){if(50<Bo)throw Bo=0,Jd=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var fs={};function C1(t,r,i,o){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,r,i,o){return new C1(t,r,i,o)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xi(t,r){var i=t.alternate;return i===null?(i=pn(t.tag,r,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=r,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,r=t.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function sm(t,r){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,r=i.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Ll(t,r,i,o,u,h){var y=0;if(o=t,typeof t=="function")Wu(t)&&(y=1);else if(typeof t=="string")y=Ly(t,i,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case k:return t=pn(31,i,r,u),t.elementType=k,t.lanes=h,t;case R:return ka(i.children,u,h,r);case x:y=8,u|=24;break;case b:return t=pn(12,i,r,u|2),t.elementType=b,t.lanes=h,t;case F:return t=pn(13,i,r,u),t.elementType=F,t.lanes=h,t;case U:return t=pn(19,i,r,u),t.elementType=U,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:y=10;break e;case L:y=9;break e;case N:y=11;break e;case D:y=14;break e;case E:y=16,o=null;break e}y=29,i=Error(a(130,t===null?"null":typeof t,"")),o=null}return r=pn(y,i,r,u),r.elementType=t,r.type=o,r.lanes=h,r}function ka(t,r,i,o){return t=pn(7,t,o,r),t.lanes=i,t}function Xu(t,r,i){return t=pn(6,t,null,r),t.lanes=i,t}function om(t){var r=pn(18,null,null,0);return r.stateNode=t,r}function qu(t,r,i){return r=pn(4,t.children!==null?t.children:[],t.key,r),r.lanes=i,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var lm=new WeakMap;function En(t,r){if(typeof t=="object"&&t!==null){var i=lm.get(t);return i!==void 0?i:(r={value:t,source:r,stack:rr(r)},lm.set(t,r),r)}return{value:t,source:r,stack:rr(r)}}var ps=[],ms=0,Il=null,xo=0,wn=[],Tn=0,Qi=null,Qn=1,Jn="";function yi(t,r){ps[ms++]=xo,ps[ms++]=Il,Il=t,xo=r}function cm(t,r,i){wn[Tn++]=Qn,wn[Tn++]=Jn,wn[Tn++]=Qi,Qi=t;var o=Qn;t=Jn;var u=32-ze(o)-1;o&=~(1<<u),i+=1;var h=32-ze(r)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Qn=1<<32-ze(r)+u|i<<u|o,Jn=h+t}else Qn=1<<h|i<<u|o,Jn=t}function Yu(t){t.return!==null&&(yi(t,1),cm(t,1,0))}function Ku(t){for(;t===Il;)Il=ps[--ms],ps[ms]=null,xo=ps[--ms],ps[ms]=null;for(;t===Qi;)Qi=wn[--Tn],wn[Tn]=null,Jn=wn[--Tn],wn[Tn]=null,Qn=wn[--Tn],wn[Tn]=null}function um(t,r){wn[Tn++]=Qn,wn[Tn++]=Jn,wn[Tn++]=Qi,Qn=r.id,Jn=r.overflow,Qi=t}var Gr=null,ur=null,Nt=!1,Ji=null,Cn=!1,$u=Error(a(519));function ea(t){var r=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(En(r,t)),$u}function dm(t){var r=t.stateNode,i=t.type,o=t.memoizedProps;switch(r[De]=t,r[Ee]=o,i){case"dialog":Mt("cancel",r),Mt("close",r);break;case"iframe":case"object":case"embed":Mt("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)Mt(Vo[i],r);break;case"source":Mt("error",r);break;case"img":case"image":case"link":Mt("error",r),Mt("load",r);break;case"details":Mt("toggle",r);break;case"input":Mt("invalid",r),Xr(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",r);break;case"textarea":Mt("invalid",r),Fn(r,o.value,o.defaultValue,o.children)}i=o.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||r.textContent===""+i||o.suppressHydrationWarning===!0||Av(r.textContent,i)?(o.popover!=null&&(Mt("beforetoggle",r),Mt("toggle",r)),o.onScroll!=null&&Mt("scroll",r),o.onScrollEnd!=null&&Mt("scrollend",r),o.onClick!=null&&(r.onclick=vi),r=!0):r=!1,r||ea(t,!0)}function hm(t){for(Gr=t.return;Gr;)switch(Gr.tag){case 5:case 31:case 13:Cn=!1;return;case 27:case 3:Cn=!0;return;default:Gr=Gr.return}}function gs(t){if(t!==Gr)return!1;if(!Nt)return hm(t),Nt=!0,!1;var r=t.tag,i;if((i=r!==3&&r!==27)&&((i=r===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||ph(t.type,t.memoizedProps)),i=!i),i&&ur&&ea(t),hm(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ur=Ov(t)}else if(r===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ur=Ov(t)}else r===27?(r=ur,pa(t.type)?(t=xh,xh=null,ur=t):ur=r):ur=Gr?An(t.stateNode.nextSibling):null;return!0}function Da(){ur=Gr=null,Nt=!1}function Zu(){var t=Ji;return t!==null&&(an===null?an=t:an.push.apply(an,t),Ji=null),t}function yo(t){Ji===null?Ji=[t]:Ji.push(t)}var Qu=I(null),Oa=null,bi=null;function ta(t,r,i){be(Qu,r._currentValue),r._currentValue=i}function Si(t){t._currentValue=Qu.current,J(Qu)}function Ju(t,r,i){for(;t!==null;){var o=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),t===i)break;t=t.return}}function ed(t,r,i,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var C=h;h=u;for(var B=0;B<r.length;B++)if(C.context===r[B]){h.lanes|=i,C=h.alternate,C!==null&&(C.lanes|=i),Ju(h.return,i,t),o||(y=null);break e}h=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=i,h=y.alternate,h!==null&&(h.lanes|=i),Ju(y,i,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function vs(t,r,i,o){t=null;for(var u=r,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=u.type;fn(u.pendingProps.value,y.value)||(t!==null?t.push(C):t=[C])}}else if(u===ye.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}u=u.return}t!==null&&ed(r,t,i,o),r.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fa(t){Oa=t,bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Vr(t){return fm(Oa,t)}function kl(t,r){return Oa===null&&Fa(t),fm(t,r)}function fm(t,r){var i=r._currentValue;if(r={context:r,memoizedValue:i,next:null},bi===null){if(t===null)throw Error(a(308));bi=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else bi=bi.next=r;return i}var A1=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(i,o){t.push(o)}};this.abort=function(){r.aborted=!0,t.forEach(function(i){return i()})}},R1=s.unstable_scheduleCallback,N1=s.unstable_NormalPriority,Tr={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function td(){return{controller:new A1,data:new Map,refCount:0}}function bo(t){t.refCount--,t.refCount===0&&R1(N1,function(){t.controller.abort()})}var So=null,rd=0,_s=0,xs=null;function P1(t,r){if(So===null){var i=So=[];rd=0,_s=ah(),xs={status:"pending",value:void 0,then:function(o){i.push(o)}}}return rd++,r.then(pm,pm),r}function pm(){if(--rd===0&&So!==null){xs!==null&&(xs.status="fulfilled");var t=So;So=null,_s=0,xs=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function L1(t,r){var i=[],o={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return t.then(function(){o.status="fulfilled",o.value=r;for(var u=0;u<i.length;u++)(0,i[u])(r)},function(u){for(o.status="rejected",o.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),o}var mm=O.S;O.S=function(t,r){Qg=kt(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&P1(t,r),mm!==null&&mm(t,r)};var za=I(null);function nd(){var t=za.current;return t!==null?t:ar.pooledCache}function Dl(t,r){r===null?be(za,za.current):be(za,r.pool)}function gm(){var t=nd();return t===null?null:{parent:Tr._currentValue,pool:t}}var ys=Error(a(460)),id=Error(a(474)),Ol=Error(a(542)),Fl={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,r,i){switch(i=t[i],i===void 0?t.push(r):i!==r&&(r.then(vi,vi),r=i),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,ym(t),t;default:if(typeof r.status=="string")r.then(vi,vi);else{if(t=ar,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(o){if(r.status==="pending"){var u=r;u.status="fulfilled",u.value=o}},function(o){if(r.status==="pending"){var u=r;u.status="rejected",u.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,ym(t),t}throw Ga=r,ys}}function Ba(t){try{var r=t._init;return r(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ga=i,ys):i}}var Ga=null;function xm(){if(Ga===null)throw Error(a(459));var t=Ga;return Ga=null,t}function ym(t){if(t===ys||t===Ol)throw Error(a(483))}var bs=null,Mo=0;function zl(t){var r=Mo;return Mo+=1,bs===null&&(bs=[]),_m(bs,t,r)}function Eo(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Bl(t,r){throw r.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function bm(t){function r(Z,H){if(t){var ie=Z.deletions;ie===null?(Z.deletions=[H],Z.flags|=16):ie.push(H)}}function i(Z,H){if(!t)return null;for(;H!==null;)r(Z,H),H=H.sibling;return null}function o(Z){for(var H=new Map;Z!==null;)Z.key!==null?H.set(Z.key,Z):H.set(Z.index,Z),Z=Z.sibling;return H}function u(Z,H){return Z=xi(Z,H),Z.index=0,Z.sibling=null,Z}function h(Z,H,ie){return Z.index=ie,t?(ie=Z.alternate,ie!==null?(ie=ie.index,ie<H?(Z.flags|=67108866,H):ie):(Z.flags|=67108866,H)):(Z.flags|=1048576,H)}function y(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,H,ie,xe){return H===null||H.tag!==6?(H=Xu(ie,Z.mode,xe),H.return=Z,H):(H=u(H,ie),H.return=Z,H)}function B(Z,H,ie,xe){var nt=ie.type;return nt===R?ve(Z,H,ie.props.children,xe,ie.key):H!==null&&(H.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===E&&Ba(nt)===H.type)?(H=u(H,ie.props),Eo(H,ie),H.return=Z,H):(H=Ll(ie.type,ie.key,ie.props,null,Z.mode,xe),Eo(H,ie),H.return=Z,H)}function se(Z,H,ie,xe){return H===null||H.tag!==4||H.stateNode.containerInfo!==ie.containerInfo||H.stateNode.implementation!==ie.implementation?(H=qu(ie,Z.mode,xe),H.return=Z,H):(H=u(H,ie.children||[]),H.return=Z,H)}function ve(Z,H,ie,xe,nt){return H===null||H.tag!==7?(H=ka(ie,Z.mode,xe,nt),H.return=Z,H):(H=u(H,ie),H.return=Z,H)}function Se(Z,H,ie){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Xu(""+H,Z.mode,ie),H.return=Z,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return ie=Ll(H.type,H.key,H.props,null,Z.mode,ie),Eo(ie,H),ie.return=Z,ie;case w:return H=qu(H,Z.mode,ie),H.return=Z,H;case E:return H=Ba(H),Se(Z,H,ie)}if(ee(H)||q(H))return H=ka(H,Z.mode,ie,null),H.return=Z,H;if(typeof H.then=="function")return Se(Z,zl(H),ie);if(H.$$typeof===z)return Se(Z,kl(Z,H),ie);Bl(Z,H)}return null}function le(Z,H,ie,xe){var nt=H!==null?H.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return nt!==null?null:C(Z,H,""+ie,xe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===nt?B(Z,H,ie,xe):null;case w:return ie.key===nt?se(Z,H,ie,xe):null;case E:return ie=Ba(ie),le(Z,H,ie,xe)}if(ee(ie)||q(ie))return nt!==null?null:ve(Z,H,ie,xe,null);if(typeof ie.then=="function")return le(Z,H,zl(ie),xe);if(ie.$$typeof===z)return le(Z,H,kl(Z,ie),xe);Bl(Z,ie)}return null}function de(Z,H,ie,xe,nt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(ie)||null,C(H,Z,""+xe,nt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return Z=Z.get(xe.key===null?ie:xe.key)||null,B(H,Z,xe,nt);case w:return Z=Z.get(xe.key===null?ie:xe.key)||null,se(H,Z,xe,nt);case E:return xe=Ba(xe),de(Z,H,ie,xe,nt)}if(ee(xe)||q(xe))return Z=Z.get(ie)||null,ve(H,Z,xe,nt,null);if(typeof xe.then=="function")return de(Z,H,ie,zl(xe),nt);if(xe.$$typeof===z)return de(Z,H,ie,kl(H,xe),nt);Bl(H,xe)}return null}function Ke(Z,H,ie,xe){for(var nt=null,Bt=null,Qe=H,xt=H=0,At=null;Qe!==null&&xt<ie.length;xt++){Qe.index>xt?(At=Qe,Qe=null):At=Qe.sibling;var Gt=le(Z,Qe,ie[xt],xe);if(Gt===null){Qe===null&&(Qe=At);break}t&&Qe&&Gt.alternate===null&&r(Z,Qe),H=h(Gt,H,xt),Bt===null?nt=Gt:Bt.sibling=Gt,Bt=Gt,Qe=At}if(xt===ie.length)return i(Z,Qe),Nt&&yi(Z,xt),nt;if(Qe===null){for(;xt<ie.length;xt++)Qe=Se(Z,ie[xt],xe),Qe!==null&&(H=h(Qe,H,xt),Bt===null?nt=Qe:Bt.sibling=Qe,Bt=Qe);return Nt&&yi(Z,xt),nt}for(Qe=o(Qe);xt<ie.length;xt++)At=de(Qe,Z,xt,ie[xt],xe),At!==null&&(t&&At.alternate!==null&&Qe.delete(At.key===null?xt:At.key),H=h(At,H,xt),Bt===null?nt=At:Bt.sibling=At,Bt=At);return t&&Qe.forEach(function(xa){return r(Z,xa)}),Nt&&yi(Z,xt),nt}function ut(Z,H,ie,xe){if(ie==null)throw Error(a(151));for(var nt=null,Bt=null,Qe=H,xt=H=0,At=null,Gt=ie.next();Qe!==null&&!Gt.done;xt++,Gt=ie.next()){Qe.index>xt?(At=Qe,Qe=null):At=Qe.sibling;var xa=le(Z,Qe,Gt.value,xe);if(xa===null){Qe===null&&(Qe=At);break}t&&Qe&&xa.alternate===null&&r(Z,Qe),H=h(xa,H,xt),Bt===null?nt=xa:Bt.sibling=xa,Bt=xa,Qe=At}if(Gt.done)return i(Z,Qe),Nt&&yi(Z,xt),nt;if(Qe===null){for(;!Gt.done;xt++,Gt=ie.next())Gt=Se(Z,Gt.value,xe),Gt!==null&&(H=h(Gt,H,xt),Bt===null?nt=Gt:Bt.sibling=Gt,Bt=Gt);return Nt&&yi(Z,xt),nt}for(Qe=o(Qe);!Gt.done;xt++,Gt=ie.next())Gt=de(Qe,Z,xt,Gt.value,xe),Gt!==null&&(t&&Gt.alternate!==null&&Qe.delete(Gt.key===null?xt:Gt.key),H=h(Gt,H,xt),Bt===null?nt=Gt:Bt.sibling=Gt,Bt=Gt);return t&&Qe.forEach(function(Hy){return r(Z,Hy)}),Nt&&yi(Z,xt),nt}function tr(Z,H,ie,xe){if(typeof ie=="object"&&ie!==null&&ie.type===R&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var nt=ie.key;H!==null;){if(H.key===nt){if(nt=ie.type,nt===R){if(H.tag===7){i(Z,H.sibling),xe=u(H,ie.props.children),xe.return=Z,Z=xe;break e}}else if(H.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===E&&Ba(nt)===H.type){i(Z,H.sibling),xe=u(H,ie.props),Eo(xe,ie),xe.return=Z,Z=xe;break e}i(Z,H);break}else r(Z,H);H=H.sibling}ie.type===R?(xe=ka(ie.props.children,Z.mode,xe,ie.key),xe.return=Z,Z=xe):(xe=Ll(ie.type,ie.key,ie.props,null,Z.mode,xe),Eo(xe,ie),xe.return=Z,Z=xe)}return y(Z);case w:e:{for(nt=ie.key;H!==null;){if(H.key===nt)if(H.tag===4&&H.stateNode.containerInfo===ie.containerInfo&&H.stateNode.implementation===ie.implementation){i(Z,H.sibling),xe=u(H,ie.children||[]),xe.return=Z,Z=xe;break e}else{i(Z,H);break}else r(Z,H);H=H.sibling}xe=qu(ie,Z.mode,xe),xe.return=Z,Z=xe}return y(Z);case E:return ie=Ba(ie),tr(Z,H,ie,xe)}if(ee(ie))return Ke(Z,H,ie,xe);if(q(ie)){if(nt=q(ie),typeof nt!="function")throw Error(a(150));return ie=nt.call(ie),ut(Z,H,ie,xe)}if(typeof ie.then=="function")return tr(Z,H,zl(ie),xe);if(ie.$$typeof===z)return tr(Z,H,kl(Z,ie),xe);Bl(Z,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,H!==null&&H.tag===6?(i(Z,H.sibling),xe=u(H,ie),xe.return=Z,Z=xe):(i(Z,H),xe=Xu(ie,Z.mode,xe),xe.return=Z,Z=xe),y(Z)):i(Z,H)}return function(Z,H,ie,xe){try{Mo=0;var nt=tr(Z,H,ie,xe);return bs=null,nt}catch(Qe){if(Qe===ys||Qe===Ol)throw Qe;var Bt=pn(29,Qe,null,Z.mode);return Bt.lanes=xe,Bt.return=Z,Bt}}}var Va=bm(!0),Sm=bm(!1),ra=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function na(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ia(t,r,i){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var u=o.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),o.pending=r,r=Pl(t),am(t,null,i),r}return Nl(t,o,r,i),Pl(t)}function wo(t,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194048)!==0)){var o=r.lanes;o&=t.pendingLanes,i|=o,r.lanes=i,zr(t,i)}}function od(t,r){var i=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var u=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?u=h=r:h=h.next=r}else u=h=r;i={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=r:t.next=r,i.lastBaseUpdate=r}var ld=!1;function To(){if(ld){var t=xs;if(t!==null)throw t}}function Co(t,r,i,o){ld=!1;var u=t.updateQueue;ra=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var B=C,se=B.next;B.next=null,y===null?h=se:y.next=se,y=B;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,C=ve.lastBaseUpdate,C!==y&&(C===null?ve.firstBaseUpdate=se:C.next=se,ve.lastBaseUpdate=B))}if(h!==null){var Se=u.baseState;y=0,ve=se=B=null,C=h;do{var le=C.lane&-536870913,de=le!==C.lane;if(de?(Ct&le)===le:(o&le)===le){le!==0&&le===_s&&(ld=!0),ve!==null&&(ve=ve.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ke=t,ut=C;le=r;var tr=i;switch(ut.tag){case 1:if(Ke=ut.payload,typeof Ke=="function"){Se=Ke.call(tr,Se,le);break e}Se=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ut.payload,le=typeof Ke=="function"?Ke.call(tr,Se,le):Ke,le==null)break e;Se=_({},Se,le);break e;case 2:ra=!0}}le=C.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[le]:de.push(le))}else de={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ve===null?(se=ve=de,B=Se):ve=ve.next=de,y|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;de=C,C=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);ve===null&&(B=Se),u.baseState=B,u.firstBaseUpdate=se,u.lastBaseUpdate=ve,h===null&&(u.shared.lanes=0),ca|=y,t.lanes=y,t.memoizedState=Se}}function Mm(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function Em(t,r){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Mm(i[t],r)}var Ss=I(null),Gl=I(0);function wm(t,r){t=Pi,be(Gl,t),be(Ss,r),Pi=t|r.baseLanes}function cd(){be(Gl,Pi),be(Ss,Ss.current)}function ud(){Pi=Gl.current,J(Ss),J(Gl)}var mn=I(null),Gn=null;function aa(t){var r=t.alternate;be(Er,Er.current&1),be(mn,t),Gn===null&&(r===null||Ss.current!==null||r.memoizedState!==null)&&(Gn=t)}function dd(t){be(Er,Er.current),be(mn,t),Gn===null&&(Gn=t)}function Tm(t){t.tag===22?(be(Er,Er.current),be(mn,t),Gn===null&&(Gn=t)):sa()}function sa(){be(Er,Er.current),be(mn,mn.current)}function gn(t){J(mn),Gn===t&&(Gn=null),J(Er)}var Er=I(0);function Vl(t){for(var r=t;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||vh(i)||_h(i)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Mi=0,vt=null,Jt=null,Cr=null,Hl=!1,Ms=!1,Ha=!1,jl=0,Ao=0,Es=null,I1=0;function yr(){throw Error(a(321))}function hd(t,r){if(r===null)return!1;for(var i=0;i<r.length&&i<t.length;i++)if(!fn(t[i],r[i]))return!1;return!0}function fd(t,r,i,o,u,h){return Mi=h,vt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,O.H=t===null||t.memoizedState===null?cg:Ad,Ha=!1,h=i(o,u),Ha=!1,Ms&&(h=Am(r,i,o,u)),Cm(t),h}function Cm(t){O.H=Po;var r=Jt!==null&&Jt.next!==null;if(Mi=0,Cr=Jt=vt=null,Hl=!1,Ao=0,Es=null,r)throw Error(a(300));t===null||Ar||(t=t.dependencies,t!==null&&Ul(t)&&(Ar=!0))}function Am(t,r,i,o){vt=t;var u=0;do{if(Ms&&(Es=null),Ao=0,Ms=!1,25<=u)throw Error(a(301));if(u+=1,Cr=Jt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=ug,h=r(i,o)}while(Ms);return h}function U1(){var t=O.H,r=t.useState()[0];return r=typeof r.then=="function"?Ro(r):r,t=t.useState()[0],(Jt!==null?Jt.memoizedState:null)!==t&&(vt.flags|=1024),r}function pd(){var t=jl!==0;return jl=0,t}function md(t,r,i){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~i}function gd(t){if(Hl){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Hl=!1}Mi=0,Cr=Jt=vt=null,Ms=!1,Ao=jl=0,Es=null}function Zr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cr===null?vt.memoizedState=Cr=t:Cr=Cr.next=t,Cr}function wr(){if(Jt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var r=Cr===null?vt.memoizedState:Cr.next;if(r!==null)Cr=r,Jt=t;else{if(t===null)throw vt.alternate===null?Error(a(467)):Error(a(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},Cr===null?vt.memoizedState=Cr=t:Cr=Cr.next=t}return Cr}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var r=Ao;return Ao+=1,Es===null&&(Es=[]),t=_m(Es,t,r),r=vt,(Cr===null?r.memoizedState:Cr.next)===null&&(r=r.alternate,O.H=r===null||r.memoizedState===null?cg:Ad),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===z)return Vr(t)}throw Error(a(438,String(t)))}function vd(t){var r=null,i=vt.updateQueue;if(i!==null&&(r=i.memoCache),r==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(u){return u.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),i===null&&(i=Wl(),vt.updateQueue=i),i.memoCache=r,i=r.data[r.index],i===void 0)for(i=r.data[r.index]=Array(t),o=0;o<t;o++)i[o]=K;return r.index++,i}function Ei(t,r){return typeof r=="function"?r(t):r}function ql(t){var r=wr();return _d(r,Jt,t)}function _d(t,r,i){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=i;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}r.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{r=u.next;var C=y=null,B=null,se=r,ve=!1;do{var Se=se.lane&-536870913;if(Se!==se.lane?(Ct&Se)===Se:(Mi&Se)===Se){var le=se.revertLane;if(le===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Se===_s&&(ve=!0);else if((Mi&le)===le){se=se.next,le===_s&&(ve=!0);continue}else Se={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},B===null?(C=B=Se,y=h):B=B.next=Se,vt.lanes|=le,ca|=le;Se=se.action,Ha&&i(h,Se),h=se.hasEagerState?se.eagerState:i(h,Se)}else le={lane:Se,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},B===null?(C=B=le,y=h):B=B.next=le,vt.lanes|=Se,ca|=Se;se=se.next}while(se!==null&&se!==r);if(B===null?y=h:B.next=C,!fn(h,t.memoizedState)&&(Ar=!0,ve&&(i=xs,i!==null)))throw i;t.memoizedState=h,t.baseState=y,t.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xd(t){var r=wr(),i=r.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=t;var o=i.dispatch,u=i.pending,h=r.memoizedState;if(u!==null){i.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);fn(h,r.memoizedState)||(Ar=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),i.lastRenderedState=h}return[h,o]}function Rm(t,r,i){var o=vt,u=wr(),h=Nt;if(h){if(i===void 0)throw Error(a(407));i=i()}else i=r();var y=!fn((Jt||u).memoizedState,i);if(y&&(u.memoizedState=i,Ar=!0),u=u.queue,Sd(Lm.bind(null,o,u,t),[t]),u.getSnapshot!==r||y||Cr!==null&&Cr.memoizedState.tag&1){if(o.flags|=2048,ws(9,{destroy:void 0},Pm.bind(null,o,u,i,r),null),ar===null)throw Error(a(349));h||(Mi&127)!==0||Nm(o,r,i)}return i}function Nm(t,r,i){t.flags|=16384,t={getSnapshot:r,value:i},r=vt.updateQueue,r===null?(r=Wl(),vt.updateQueue=r,r.stores=[t]):(i=r.stores,i===null?r.stores=[t]:i.push(t))}function Pm(t,r,i,o){r.value=i,r.getSnapshot=o,Im(r)&&Um(t)}function Lm(t,r,i){return i(function(){Im(r)&&Um(t)})}function Im(t){var r=t.getSnapshot;t=t.value;try{var i=r();return!fn(t,i)}catch{return!0}}function Um(t){var r=Ua(t,2);r!==null&&sn(r,t,2)}function yd(t){var r=Zr();if(typeof t=="function"){var i=t;if(t=i(),Ha){Pe(!0);try{i()}finally{Pe(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:t},r}function km(t,r,i,o){return t.baseState=i,_d(t,Jt,typeof o=="function"?o:Ei)}function k1(t,r,i,o,u){if($l(t))throw Error(a(485));if(t=r.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};O.T!==null?i(!0):h.isTransition=!1,o(h),i=r.pending,i===null?(h.next=r.pending=h,Dm(r,h)):(h.next=i.next,r.pending=i.next=h)}}function Dm(t,r){var i=r.action,o=r.payload,u=t.state;if(r.isTransition){var h=O.T,y={};O.T=y;try{var C=i(u,o),B=O.S;B!==null&&B(y,C),Om(t,r,C)}catch(se){bd(t,r,se)}finally{h!==null&&y.types!==null&&(h.types=y.types),O.T=h}}else try{h=i(u,o),Om(t,r,h)}catch(se){bd(t,r,se)}}function Om(t,r,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){Fm(t,r,o)},function(o){return bd(t,r,o)}):Fm(t,r,i)}function Fm(t,r,i){r.status="fulfilled",r.value=i,zm(r),t.state=i,r=t.pending,r!==null&&(i=r.next,i===r?t.pending=null:(i=i.next,r.next=i,Dm(t,i)))}function bd(t,r,i){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=i,zm(r),r=r.next;while(r!==o)}t.action=null}function zm(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Bm(t,r){return r}function Gm(t,r){if(Nt){var i=ar.formState;if(i!==null){e:{var o=vt;if(Nt){if(ur){t:{for(var u=ur,h=Cn;u.nodeType!==8;){if(!h){u=null;break t}if(u=An(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){ur=An(u.nextSibling),o=u.data==="F!";break e}}ea(o)}o=!1}o&&(r=i[0])}}return i=Zr(),i.memoizedState=i.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:r},i.queue=o,i=sg.bind(null,vt,o),o.dispatch=i,o=yd(!1),h=Cd.bind(null,vt,!1,o.queue),o=Zr(),u={state:r,dispatch:null,action:t,pending:null},o.queue=u,i=k1.bind(null,vt,u,h,i),u.dispatch=i,o.memoizedState=t,[r,i,!1]}function Vm(t){var r=wr();return Hm(r,Jt,t)}function Hm(t,r,i){if(r=_d(t,r,Bm)[0],t=ql(Ei)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var o=Ro(r)}catch(y){throw y===ys?Ol:y}else o=r;r=wr();var u=r.queue,h=u.dispatch;return i!==r.memoizedState&&(vt.flags|=2048,ws(9,{destroy:void 0},D1.bind(null,u,i),null)),[o,h,t]}function D1(t,r){t.action=r}function jm(t){var r=wr(),i=Jt;if(i!==null)return Hm(r,i,t);wr(),r=r.memoizedState,i=wr();var o=i.queue.dispatch;return i.memoizedState=t,[r,o,!1]}function ws(t,r,i,o){return t={tag:t,create:i,deps:o,inst:r,next:null},r=vt.updateQueue,r===null&&(r=Wl(),vt.updateQueue=r),i=r.lastEffect,i===null?r.lastEffect=t.next=t:(o=i.next,i.next=t,t.next=o,r.lastEffect=t),t}function Wm(){return wr().memoizedState}function Yl(t,r,i,o){var u=Zr();vt.flags|=t,u.memoizedState=ws(1|r,{destroy:void 0},i,o===void 0?null:o)}function Kl(t,r,i,o){var u=wr();o=o===void 0?null:o;var h=u.memoizedState.inst;Jt!==null&&o!==null&&hd(o,Jt.memoizedState.deps)?u.memoizedState=ws(r,h,i,o):(vt.flags|=t,u.memoizedState=ws(1|r,h,i,o))}function Xm(t,r){Yl(8390656,8,t,r)}function Sd(t,r){Kl(2048,8,t,r)}function O1(t){vt.flags|=4;var r=vt.updateQueue;if(r===null)r=Wl(),vt.updateQueue=r,r.events=[t];else{var i=r.events;i===null?r.events=[t]:i.push(t)}}function qm(t){var r=wr().memoizedState;return O1({ref:r,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}function Ym(t,r){return Kl(4,2,t,r)}function Km(t,r){return Kl(4,4,t,r)}function $m(t,r){if(typeof r=="function"){t=t();var i=r(t);return function(){typeof i=="function"?i():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Zm(t,r,i){i=i!=null?i.concat([t]):null,Kl(4,4,$m.bind(null,r,t),i)}function Md(){}function Qm(t,r){var i=wr();r=r===void 0?null:r;var o=i.memoizedState;return r!==null&&hd(r,o[1])?o[0]:(i.memoizedState=[t,r],t)}function Jm(t,r){var i=wr();r=r===void 0?null:r;var o=i.memoizedState;if(r!==null&&hd(r,o[1]))return o[0];if(o=t(),Ha){Pe(!0);try{t()}finally{Pe(!1)}}return i.memoizedState=[o,r],o}function Ed(t,r,i){return i===void 0||(Mi&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=r:(t.memoizedState=i,t=ev(),vt.lanes|=t,ca|=t,i)}function eg(t,r,i,o){return fn(i,r)?i:Ss.current!==null?(t=Ed(t,i,o),fn(t,r)||(Ar=!0),t):(Mi&42)===0||(Mi&1073741824)!==0&&(Ct&261930)===0?(Ar=!0,t.memoizedState=i):(t=ev(),vt.lanes|=t,ca|=t,r)}function tg(t,r,i,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var y=O.T,C={};O.T=C,Cd(t,!1,r,i);try{var B=u(),se=O.S;if(se!==null&&se(C,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ve=L1(B,o);No(t,r,ve,xn(t))}else No(t,r,o,xn(t))}catch(Se){No(t,r,{then:function(){},status:"rejected",reason:Se},xn())}finally{G.p=h,y!==null&&C.types!==null&&(y.types=C.types),O.T=y}}function F1(){}function wd(t,r,i,o){if(t.tag!==5)throw Error(a(476));var u=rg(t).queue;tg(t,u,r,ae,i===null?F1:function(){return ng(t),i(o)})}function rg(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:ae},next:null};var i={};return r.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:i},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function ng(t){var r=rg(t);r.next===null&&(r=t.alternate.memoizedState),No(t,r.next.queue,{},xn())}function Td(){return Vr(qo)}function ig(){return wr().memoizedState}function ag(){return wr().memoizedState}function z1(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var i=xn();t=na(i);var o=ia(r,t,i);o!==null&&(sn(o,r,i),wo(o,r,i)),r={cache:td()},t.payload=r;return}r=r.return}}function B1(t,r,i){var o=xn();i={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},$l(t)?og(r,i):(i=ju(t,r,i,o),i!==null&&(sn(i,t,o),lg(i,r,o)))}function sg(t,r,i){var o=xn();No(t,r,i,o)}function No(t,r,i,o){var u={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if($l(t))og(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var y=r.lastRenderedState,C=h(y,i);if(u.hasEagerState=!0,u.eagerState=C,fn(C,y))return Nl(t,r,u,0),ar===null&&Rl(),!1}catch{}if(i=ju(t,r,u,o),i!==null)return sn(i,t,o),lg(i,r,o),!0}return!1}function Cd(t,r,i,o){if(o={lane:2,revertLane:ah(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(r)throw Error(a(479))}else r=ju(t,i,o,2),r!==null&&sn(r,t,2)}function $l(t){var r=t.alternate;return t===vt||r!==null&&r===vt}function og(t,r){Ms=Hl=!0;var i=t.pending;i===null?r.next=r:(r.next=i.next,i.next=r),t.pending=r}function lg(t,r,i){if((i&4194048)!==0){var o=r.lanes;o&=t.pendingLanes,i|=o,r.lanes=i,zr(t,i)}}var Po={readContext:Vr,use:Xl,useCallback:yr,useContext:yr,useEffect:yr,useImperativeHandle:yr,useLayoutEffect:yr,useInsertionEffect:yr,useMemo:yr,useReducer:yr,useRef:yr,useState:yr,useDebugValue:yr,useDeferredValue:yr,useTransition:yr,useSyncExternalStore:yr,useId:yr,useHostTransitionStatus:yr,useFormState:yr,useActionState:yr,useOptimistic:yr,useMemoCache:yr,useCacheRefresh:yr};Po.useEffectEvent=yr;var cg={readContext:Vr,use:Xl,useCallback:function(t,r){return Zr().memoizedState=[t,r===void 0?null:r],t},useContext:Vr,useEffect:Xm,useImperativeHandle:function(t,r,i){i=i!=null?i.concat([t]):null,Yl(4194308,4,$m.bind(null,r,t),i)},useLayoutEffect:function(t,r){return Yl(4194308,4,t,r)},useInsertionEffect:function(t,r){Yl(4,2,t,r)},useMemo:function(t,r){var i=Zr();r=r===void 0?null:r;var o=t();if(Ha){Pe(!0);try{t()}finally{Pe(!1)}}return i.memoizedState=[o,r],o},useReducer:function(t,r,i){var o=Zr();if(i!==void 0){var u=i(r);if(Ha){Pe(!0);try{i(r)}finally{Pe(!1)}}}else u=r;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=B1.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var r=Zr();return t={current:t},r.memoizedState=t},useState:function(t){t=yd(t);var r=t.queue,i=sg.bind(null,vt,r);return r.dispatch=i,[t.memoizedState,i]},useDebugValue:Md,useDeferredValue:function(t,r){var i=Zr();return Ed(i,t,r)},useTransition:function(){var t=yd(!1);return t=tg.bind(null,vt,t.queue,!0,!1),Zr().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,i){var o=vt,u=Zr();if(Nt){if(i===void 0)throw Error(a(407));i=i()}else{if(i=r(),ar===null)throw Error(a(349));(Ct&127)!==0||Nm(o,r,i)}u.memoizedState=i;var h={value:i,getSnapshot:r};return u.queue=h,Xm(Lm.bind(null,o,h,t),[t]),o.flags|=2048,ws(9,{destroy:void 0},Pm.bind(null,o,h,i,r),null),i},useId:function(){var t=Zr(),r=ar.identifierPrefix;if(Nt){var i=Jn,o=Qn;i=(o&~(1<<32-ze(o)-1)).toString(32)+i,r="_"+r+"R_"+i,i=jl++,0<i&&(r+="H"+i.toString(32)),r+="_"}else i=I1++,r="_"+r+"r_"+i.toString(32)+"_";return t.memoizedState=r},useHostTransitionStatus:Td,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var r=Zr();r.memoizedState=r.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=i,r=Cd.bind(null,vt,!0,i),i.dispatch=r,[t,r]},useMemoCache:vd,useCacheRefresh:function(){return Zr().memoizedState=z1.bind(null,vt)},useEffectEvent:function(t){var r=Zr(),i={impl:t};return r.memoizedState=i,function(){if((Ht&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}},Ad={readContext:Vr,use:Xl,useCallback:Qm,useContext:Vr,useEffect:Sd,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:Km,useMemo:Jm,useReducer:ql,useRef:Wm,useState:function(){return ql(Ei)},useDebugValue:Md,useDeferredValue:function(t,r){var i=wr();return eg(i,Jt.memoizedState,t,r)},useTransition:function(){var t=ql(Ei)[0],r=wr().memoizedState;return[typeof t=="boolean"?t:Ro(t),r]},useSyncExternalStore:Rm,useId:ig,useHostTransitionStatus:Td,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,r){var i=wr();return km(i,Jt,t,r)},useMemoCache:vd,useCacheRefresh:ag};Ad.useEffectEvent=qm;var ug={readContext:Vr,use:Xl,useCallback:Qm,useContext:Vr,useEffect:Sd,useImperativeHandle:Zm,useInsertionEffect:Ym,useLayoutEffect:Km,useMemo:Jm,useReducer:xd,useRef:Wm,useState:function(){return xd(Ei)},useDebugValue:Md,useDeferredValue:function(t,r){var i=wr();return Jt===null?Ed(i,t,r):eg(i,Jt.memoizedState,t,r)},useTransition:function(){var t=xd(Ei)[0],r=wr().memoizedState;return[typeof t=="boolean"?t:Ro(t),r]},useSyncExternalStore:Rm,useId:ig,useHostTransitionStatus:Td,useFormState:jm,useActionState:jm,useOptimistic:function(t,r){var i=wr();return Jt!==null?km(i,Jt,t,r):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:vd,useCacheRefresh:ag};ug.useEffectEvent=qm;function Rd(t,r,i,o){r=t.memoizedState,i=i(o,r),i=i==null?r:_({},r,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Nd={enqueueSetState:function(t,r,i){t=t._reactInternals;var o=xn(),u=na(o);u.payload=r,i!=null&&(u.callback=i),r=ia(t,u,o),r!==null&&(sn(r,t,o),wo(r,t,o))},enqueueReplaceState:function(t,r,i){t=t._reactInternals;var o=xn(),u=na(o);u.tag=1,u.payload=r,i!=null&&(u.callback=i),r=ia(t,u,o),r!==null&&(sn(r,t,o),wo(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var i=xn(),o=na(i);o.tag=2,r!=null&&(o.callback=r),r=ia(t,o,i),r!==null&&(sn(r,t,i),wo(r,t,i))}};function dg(t,r,i,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):r.prototype&&r.prototype.isPureReactComponent?!vo(i,o)||!vo(u,h):!0}function hg(t,r,i,o){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,o),r.state!==t&&Nd.enqueueReplaceState(r,r.state,null)}function ja(t,r){var i=r;if("ref"in r){i={};for(var o in r)o!=="ref"&&(i[o]=r[o])}if(t=t.defaultProps){i===r&&(i=_({},i));for(var u in t)i[u]===void 0&&(i[u]=t[u])}return i}function fg(t){Al(t)}function pg(t){console.error(t)}function mg(t){Al(t)}function Zl(t,r){try{var i=t.onUncaughtError;i(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function gg(t,r,i){try{var o=t.onCaughtError;o(i.value,{componentStack:i.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pd(t,r,i){return i=na(i),i.tag=3,i.payload={element:null},i.callback=function(){Zl(t,r)},i}function vg(t){return t=na(t),t.tag=3,t}function _g(t,r,i,o){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){gg(r,i,o)}}var y=i.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){gg(r,i,o),typeof u!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function G1(t,r,i,o,u){if(i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=i.alternate,r!==null&&vs(r,i,u,!0),i=mn.current,i!==null){switch(i.tag){case 31:case 13:return Gn===null?cc():i.alternate===null&&br===0&&(br=3),i.flags&=-257,i.flags|=65536,i.lanes=u,o===Fl?i.flags|=16384:(r=i.updateQueue,r===null?i.updateQueue=new Set([o]):r.add(o),rh(t,o,u)),!1;case 22:return i.flags|=65536,o===Fl?i.flags|=16384:(r=i.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},i.updateQueue=r):(i=r.retryQueue,i===null?r.retryQueue=new Set([o]):i.add(o)),rh(t,o,u)),!1}throw Error(a(435,i.tag))}return rh(t,o,u),cc(),!1}if(Nt)return r=mn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=u,o!==$u&&(t=Error(a(422),{cause:o}),yo(En(t,i)))):(o!==$u&&(r=Error(a(423),{cause:o}),yo(En(r,i))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=En(o,i),u=Pd(t.stateNode,o,u),od(t,u),br!==4&&(br=2)),!1;var h=Error(a(520),{cause:o});if(h=En(h,i),zo===null?zo=[h]:zo.push(h),br!==4&&(br=2),r===null)return!0;o=En(o,i),i=r;do{switch(i.tag){case 3:return i.flags|=65536,t=u&-u,i.lanes|=t,t=Pd(i.stateNode,o,t),od(i,t),!1;case 1:if(r=i.type,h=i.stateNode,(i.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ua===null||!ua.has(h))))return i.flags|=65536,u&=-u,i.lanes|=u,u=vg(u),_g(u,t,i,o),od(i,u),!1}i=i.return}while(i!==null);return!1}var Ld=Error(a(461)),Ar=!1;function Hr(t,r,i,o){r.child=t===null?Sm(r,null,i,o):Va(r,t.child,i,o)}function xg(t,r,i,o,u){i=i.render;var h=r.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return Fa(r),o=fd(t,r,i,y,h,u),C=pd(),t!==null&&!Ar?(md(t,r,u),wi(t,r,u)):(Nt&&C&&Yu(r),r.flags|=1,Hr(t,r,o,u),r.child)}function yg(t,r,i,o,u){if(t===null){var h=i.type;return typeof h=="function"&&!Wu(h)&&h.defaultProps===void 0&&i.compare===null?(r.tag=15,r.type=h,bg(t,r,h,o,u)):(t=Ll(i.type,null,o,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!Bd(t,u)){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:vo,i(y,o)&&t.ref===r.ref)return wi(t,r,u)}return r.flags|=1,t=xi(h,o),t.ref=r.ref,t.return=r,r.child=t}function bg(t,r,i,o,u){if(t!==null){var h=t.memoizedProps;if(vo(h,o)&&t.ref===r.ref)if(Ar=!1,r.pendingProps=o=h,Bd(t,u))(t.flags&131072)!==0&&(Ar=!0);else return r.lanes=t.lanes,wi(t,r,u)}return Id(t,r,i,o,u)}function Sg(t,r,i,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((r.flags&128)!==0){if(h=h!==null?h.baseLanes|i:i,t!==null){for(o=r.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,r.child=null;return Mg(t,r,h,i,o)}if((i&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(r,h!==null?h.cachePool:null),h!==null?wm(r,h):cd(),Tm(r);else return o=r.lanes=536870912,Mg(t,r,h!==null?h.baseLanes|i:i,i,o)}else h!==null?(Dl(r,h.cachePool),wm(r,h),sa(),r.memoizedState=null):(t!==null&&Dl(r,null),cd(),sa());return Hr(t,r,u,i),r.child}function Lo(t,r){return t!==null&&t.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function Mg(t,r,i,o,u){var h=nd();return h=h===null?null:{parent:Tr._currentValue,pool:h},r.memoizedState={baseLanes:i,cachePool:h},t!==null&&Dl(r,null),cd(),Tm(r),t!==null&&vs(t,r,o,!0),r.childLanes=u,null}function Ql(t,r){return r=ec({mode:r.mode,children:r.children},t.mode),r.ref=t.ref,t.child=r,r.return=t,r}function Eg(t,r,i){return Va(r,t.child,null,i),t=Ql(r,r.pendingProps),t.flags|=2,gn(r),r.memoizedState=null,t}function V1(t,r,i){var o=r.pendingProps,u=(r.flags&128)!==0;if(r.flags&=-129,t===null){if(Nt){if(o.mode==="hidden")return t=Ql(r,o),r.lanes=536870912,Lo(null,t);if(dd(r),(t=ur)?(t=Dv(t,Cn),t=t!==null&&t.data==="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:Qi!==null?{id:Qn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},i=om(t),i.return=r,r.child=i,Gr=r,ur=null)):t=null,t===null)throw ea(r);return r.lanes=536870912,null}return Ql(r,o)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(dd(r),u)if(r.flags&256)r.flags&=-257,r=Eg(t,r,i);else if(r.memoizedState!==null)r.child=t.child,r.flags|=128,r=null;else throw Error(a(558));else if(Ar||vs(t,r,i,!1),u=(i&t.childLanes)!==0,Ar||u){if(o=ar,o!==null&&(y=Br(o,i),y!==0&&y!==h.retryLane))throw h.retryLane=y,Ua(t,y),sn(o,t,y),Ld;cc(),r=Eg(t,r,i)}else t=h.treeContext,ur=An(y.nextSibling),Gr=r,Nt=!0,Ji=null,Cn=!1,t!==null&&um(r,t),r=Ql(r,o),r.flags|=4096;return r}return t=xi(t.child,{mode:o.mode,children:o.children}),t.ref=r.ref,r.child=t,t.return=r,t}function Jl(t,r){var i=r.ref;if(i===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(t===null||t.ref!==i)&&(r.flags|=4194816)}}function Id(t,r,i,o,u){return Fa(r),i=fd(t,r,i,o,void 0,u),o=pd(),t!==null&&!Ar?(md(t,r,u),wi(t,r,u)):(Nt&&o&&Yu(r),r.flags|=1,Hr(t,r,i,u),r.child)}function wg(t,r,i,o,u,h){return Fa(r),r.updateQueue=null,i=Am(r,o,i,u),Cm(t),o=pd(),t!==null&&!Ar?(md(t,r,h),wi(t,r,h)):(Nt&&o&&Yu(r),r.flags|=1,Hr(t,r,i,h),r.child)}function Tg(t,r,i,o,u){if(Fa(r),r.stateNode===null){var h=fs,y=i.contextType;typeof y=="object"&&y!==null&&(h=Vr(y)),h=new i(o,h),r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Nd,r.stateNode=h,h._reactInternals=r,h=r.stateNode,h.props=o,h.state=r.memoizedState,h.refs={},ad(r),y=i.contextType,h.context=typeof y=="object"&&y!==null?Vr(y):fs,h.state=r.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(Rd(r,i,y,o),h.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Nd.enqueueReplaceState(h,h.state,null),Co(r,o,h,u),To(),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(t===null){h=r.stateNode;var C=r.memoizedProps,B=ja(i,C);h.props=B;var se=h.context,ve=i.contextType;y=fs,typeof ve=="object"&&ve!==null&&(y=Vr(ve));var Se=i.getDerivedStateFromProps;ve=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=r.pendingProps!==C,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||se!==y)&&hg(r,h,o,y),ra=!1;var le=r.memoizedState;h.state=le,Co(r,o,h,u),To(),se=r.memoizedState,C||le!==se||ra?(typeof Se=="function"&&(Rd(r,i,Se,o),se=r.memoizedState),(B=ra||dg(r,i,B,o,le,se,y))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(r.flags|=4194308)):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=se),h.props=o,h.state=se,h.context=y,o=B):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{h=r.stateNode,sd(t,r),y=r.memoizedProps,ve=ja(i,y),h.props=ve,Se=r.pendingProps,le=h.context,se=i.contextType,B=fs,typeof se=="object"&&se!==null&&(B=Vr(se)),C=i.getDerivedStateFromProps,(se=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Se||le!==B)&&hg(r,h,o,B),ra=!1,le=r.memoizedState,h.state=le,Co(r,o,h,u),To();var de=r.memoizedState;y!==Se||le!==de||ra||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof C=="function"&&(Rd(r,i,C,o),de=r.memoizedState),(ve=ra||dg(r,i,ve,o,le,de,B)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?(se||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,de,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,de,B)),typeof h.componentDidUpdate=="function"&&(r.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=de),h.props=o,h.state=de,h.context=B,o=ve):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(r.flags|=1024),o=!1)}return h=o,Jl(t,r),o=(r.flags&128)!==0,h||o?(h=r.stateNode,i=o&&typeof i.getDerivedStateFromError!="function"?null:h.render(),r.flags|=1,t!==null&&o?(r.child=Va(r,t.child,null,u),r.child=Va(r,null,i,u)):Hr(t,r,i,u),r.memoizedState=h.state,t=r.child):t=wi(t,r,u),t}function Cg(t,r,i,o){return Da(),r.flags|=256,Hr(t,r,i,o),r.child}var Ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kd(t){return{baseLanes:t,cachePool:gm()}}function Dd(t,r,i){return t=t!==null?t.childLanes&~i:0,r&&(t|=_n),t}function Ag(t,r,i){var o=r.pendingProps,u=!1,h=(r.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(Er.current&2)!==0),y&&(u=!0,r.flags&=-129),y=(r.flags&32)!==0,r.flags&=-33,t===null){if(Nt){if(u?aa(r):sa(),(t=ur)?(t=Dv(t,Cn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:Qi!==null?{id:Qn,overflow:Jn}:null,retryLane:536870912,hydrationErrors:null},i=om(t),i.return=r,r.child=i,Gr=r,ur=null)):t=null,t===null)throw ea(r);return _h(t)?r.lanes=32:r.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(sa(),u=r.mode,C=ec({mode:"hidden",children:C},u),o=ka(o,u,i,null),C.return=r,o.return=r,C.sibling=o,r.child=C,o=r.child,o.memoizedState=kd(i),o.childLanes=Dd(t,y,i),r.memoizedState=Ud,Lo(null,o)):(aa(r),Od(r,C))}var B=t.memoizedState;if(B!==null&&(C=B.dehydrated,C!==null)){if(h)r.flags&256?(aa(r),r.flags&=-257,r=Fd(t,r,i)):r.memoizedState!==null?(sa(),r.child=t.child,r.flags|=128,r=null):(sa(),C=o.fallback,u=r.mode,o=ec({mode:"visible",children:o.children},u),C=ka(C,u,i,null),C.flags|=2,o.return=r,C.return=r,o.sibling=C,r.child=o,Va(r,t.child,null,i),o=r.child,o.memoizedState=kd(i),o.childLanes=Dd(t,y,i),r.memoizedState=Ud,r=Lo(null,o));else if(aa(r),_h(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var se=y.dgst;y=se,o=Error(a(419)),o.stack="",o.digest=y,yo({value:o,source:null,stack:null}),r=Fd(t,r,i)}else if(Ar||vs(t,r,i,!1),y=(i&t.childLanes)!==0,Ar||y){if(y=ar,y!==null&&(o=Br(y,i),o!==0&&o!==B.retryLane))throw B.retryLane=o,Ua(t,o),sn(y,t,o),Ld;vh(C)||cc(),r=Fd(t,r,i)}else vh(C)?(r.flags|=192,r.child=t.child,r=null):(t=B.treeContext,ur=An(C.nextSibling),Gr=r,Nt=!0,Ji=null,Cn=!1,t!==null&&um(r,t),r=Od(r,o.children),r.flags|=4096);return r}return u?(sa(),C=o.fallback,u=r.mode,B=t.child,se=B.sibling,o=xi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,se!==null?C=xi(se,C):(C=ka(C,u,i,null),C.flags|=2),C.return=r,o.return=r,o.sibling=C,r.child=o,Lo(null,o),o=r.child,C=t.child.memoizedState,C===null?C=kd(i):(u=C.cachePool,u!==null?(B=Tr._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=gm(),C={baseLanes:C.baseLanes|i,cachePool:u}),o.memoizedState=C,o.childLanes=Dd(t,y,i),r.memoizedState=Ud,Lo(t.child,o)):(aa(r),i=t.child,t=i.sibling,i=xi(i,{mode:"visible",children:o.children}),i.return=r,i.sibling=null,t!==null&&(y=r.deletions,y===null?(r.deletions=[t],r.flags|=16):y.push(t)),r.child=i,r.memoizedState=null,i)}function Od(t,r){return r=ec({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function ec(t,r){return t=pn(22,t,null,r),t.lanes=0,t}function Fd(t,r,i){return Va(r,t.child,null,i),t=Od(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Rg(t,r,i){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r),Ju(t.return,r,i)}function zd(t,r,i,o,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:u,treeForkCount:h}:(y.isBackwards=r,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=i,y.tailMode=u,y.treeForkCount=h)}function Ng(t,r,i){var o=r.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=Er.current,C=(y&2)!==0;if(C?(y=y&1|2,r.flags|=128):y&=1,be(Er,y),Hr(t,r,o,i),o=Nt?xo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,i,r);else if(t.tag===19)Rg(t,i,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(i=r.child,u=null;i!==null;)t=i.alternate,t!==null&&Vl(t)===null&&(u=i),i=i.sibling;i=u,i===null?(u=r.child,r.child=null):(u=i.sibling,i.sibling=null),zd(r,!1,u,i,h,o);break;case"backwards":case"unstable_legacy-backwards":for(i=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Vl(t)===null){r.child=u;break}t=u.sibling,u.sibling=i,i=u,u=t}zd(r,!0,i,null,h,o);break;case"together":zd(r,!1,null,null,void 0,o);break;default:r.memoizedState=null}return r.child}function wi(t,r,i){if(t!==null&&(r.dependencies=t.dependencies),ca|=r.lanes,(i&r.childLanes)===0)if(t!==null){if(vs(t,r,i,!1),(i&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,i=xi(t,t.pendingProps),r.child=i,i.return=r;t.sibling!==null;)t=t.sibling,i=i.sibling=xi(t,t.pendingProps),i.return=r;i.sibling=null}return r.child}function Bd(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function H1(t,r,i){switch(r.tag){case 3:we(r,r.stateNode.containerInfo),ta(r,Tr,t.memoizedState.cache),Da();break;case 27:case 5:it(r);break;case 4:we(r,r.stateNode.containerInfo);break;case 10:ta(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,dd(r),null;break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(aa(r),r.flags|=128,null):(i&r.child.childLanes)!==0?Ag(t,r,i):(aa(r),t=wi(t,r,i),t!==null?t.sibling:null);aa(r);break;case 19:var u=(t.flags&128)!==0;if(o=(i&r.childLanes)!==0,o||(vs(t,r,i,!1),o=(i&r.childLanes)!==0),u){if(o)return Ng(t,r,i);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(Er,Er.current),o)break;return null;case 22:return r.lanes=0,Sg(t,r,i,r.pendingProps);case 24:ta(r,Tr,t.memoizedState.cache)}return wi(t,r,i)}function Pg(t,r,i){if(t!==null)if(t.memoizedProps!==r.pendingProps)Ar=!0;else{if(!Bd(t,i)&&(r.flags&128)===0)return Ar=!1,H1(t,r,i);Ar=(t.flags&131072)!==0}else Ar=!1,Nt&&(r.flags&1048576)!==0&&cm(r,xo,r.index);switch(r.lanes=0,r.tag){case 16:e:{var o=r.pendingProps;if(t=Ba(r.elementType),r.type=t,typeof t=="function")Wu(t)?(o=ja(t,o),r.tag=1,r=Tg(null,r,t,o,i)):(r.tag=0,r=Id(null,r,t,o,i));else{if(t!=null){var u=t.$$typeof;if(u===N){r.tag=11,r=xg(null,r,t,o,i);break e}else if(u===D){r.tag=14,r=yg(null,r,t,o,i);break e}}throw r=he(t)||t,Error(a(306,r,""))}}return r;case 0:return Id(t,r,r.type,r.pendingProps,i);case 1:return o=r.type,u=ja(o,r.pendingProps),Tg(t,r,o,u,i);case 3:e:{if(we(r,r.stateNode.containerInfo),t===null)throw Error(a(387));o=r.pendingProps;var h=r.memoizedState;u=h.element,sd(t,r),Co(r,o,null,i);var y=r.memoizedState;if(o=y.cache,ta(r,Tr,o),o!==h.cache&&ed(r,[Tr],i,!0),To(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=Cg(t,r,o,i);break e}else if(o!==u){u=En(Error(a(424)),r),yo(u),r=Cg(t,r,o,i);break e}else for(t=r.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ur=An(t.firstChild),Gr=r,Nt=!0,Ji=null,Cn=!0,i=Sm(r,null,o,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Da(),o===u){r=wi(t,r,i);break e}Hr(t,r,o,i)}r=r.child}return r;case 26:return Jl(t,r),t===null?(i=Vv(r.type,null,r.pendingProps,null))?r.memoizedState=i:Nt||(i=r.type,t=r.pendingProps,o=gc(te.current).createElement(i),o[De]=r,o[Ee]=t,jr(o,i,t),bt(o),r.stateNode=o):r.memoizedState=Vv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return it(r),t===null&&Nt&&(o=r.stateNode=zv(r.type,r.pendingProps,te.current),Gr=r,Cn=!0,u=ur,pa(r.type)?(xh=u,ur=An(o.firstChild)):ur=u),Hr(t,r,r.pendingProps.children,i),Jl(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&Nt&&((u=o=ur)&&(o=xy(o,r.type,r.pendingProps,Cn),o!==null?(r.stateNode=o,Gr=r,ur=An(o.firstChild),Cn=!1,u=!0):u=!1),u||ea(r)),it(r),u=r.type,h=r.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,ph(u,h)?o=null:y!==null&&ph(u,y)&&(r.flags|=32),r.memoizedState!==null&&(u=fd(t,r,U1,null,null,i),qo._currentValue=u),Jl(t,r),Hr(t,r,o,i),r.child;case 6:return t===null&&Nt&&((t=i=ur)&&(i=yy(i,r.pendingProps,Cn),i!==null?(r.stateNode=i,Gr=r,ur=null,t=!0):t=!1),t||ea(r)),null;case 13:return Ag(t,r,i);case 4:return we(r,r.stateNode.containerInfo),o=r.pendingProps,t===null?r.child=Va(r,null,o,i):Hr(t,r,o,i),r.child;case 11:return xg(t,r,r.type,r.pendingProps,i);case 7:return Hr(t,r,r.pendingProps,i),r.child;case 8:return Hr(t,r,r.pendingProps.children,i),r.child;case 12:return Hr(t,r,r.pendingProps.children,i),r.child;case 10:return o=r.pendingProps,ta(r,r.type,o.value),Hr(t,r,o.children,i),r.child;case 9:return u=r.type._context,o=r.pendingProps.children,Fa(r),u=Vr(u),o=o(u),r.flags|=1,Hr(t,r,o,i),r.child;case 14:return yg(t,r,r.type,r.pendingProps,i);case 15:return bg(t,r,r.type,r.pendingProps,i);case 19:return Ng(t,r,i);case 31:return V1(t,r,i);case 22:return Sg(t,r,i,r.pendingProps);case 24:return Fa(r),o=Vr(Tr),t===null?(u=nd(),u===null&&(u=ar,h=td(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=i),u=h),r.memoizedState={parent:o,cache:u},ad(r),ta(r,Tr,u)):((t.lanes&i)!==0&&(sd(t,r),Co(r,null,null,i),To()),u=t.memoizedState,h=r.memoizedState,u.parent!==o?(u={parent:o,cache:o},r.memoizedState=u,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=u),ta(r,Tr,o)):(o=h.cache,ta(r,Tr,o),o!==u.cache&&ed(r,[Tr],i,!0))),Hr(t,r,r.pendingProps.children,i),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Ti(t){t.flags|=4}function Gd(t,r,i,o,u){if((r=(t.mode&32)!==0)&&(r=!1),r){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(iv())t.flags|=8192;else throw Ga=Fl,id}else t.flags&=-16777217}function Lg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qv(r))if(iv())t.flags|=8192;else throw Ga=Fl,id}function tc(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Te():536870912,t.lanes|=r,Rs|=r)}function Io(t,r){if(!Nt)switch(t.tailMode){case"hidden":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function dr(t){var r=t.alternate!==null&&t.alternate.child===t.child,i=0,o=0;if(r)for(var u=t.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=i,r}function j1(t,r,i){var o=r.pendingProps;switch(Ku(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dr(r),null;case 1:return dr(r),null;case 3:return i=r.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Si(Tr),qe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gs(r)?Ti(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zu())),dr(r),null;case 26:var u=r.type,h=r.memoizedState;return t===null?(Ti(r),h!==null?(dr(r),Lg(r,h)):(dr(r),Gd(r,u,null,o,i))):h?h!==t.memoizedState?(Ti(r),dr(r),Lg(r,h)):(dr(r),r.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ti(r),dr(r),Gd(r,u,t,o,i)),null;case 27:if(He(r),i=te.current,u=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Ti(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return dr(r),null}t=Ue.current,gs(r)?dm(r):(t=zv(u,o,i),r.stateNode=t,Ti(r))}return dr(r),null;case 5:if(He(r),u=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Ti(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return dr(r),null}if(h=Ue.current,gs(r))dm(r);else{var y=gc(te.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[De]=r,h[Ee]=o;e:for(y=r.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===r)break e;for(;y.sibling===null;){if(y.return===null||y.return===r)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}r.stateNode=h;e:switch(jr(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ti(r)}}return dr(r),Gd(r,r.type,t===null?null:t.memoizedProps,r.pendingProps,i),null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==o&&Ti(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(t=te.current,gs(r)){if(t=r.stateNode,i=r.memoizedProps,o=null,u=Gr,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[De]=r,t=!!(t.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||Av(t.nodeValue,i)),t||ea(r,!0)}else t=gc(t).createTextNode(o),t[De]=r,r.stateNode=t}return dr(r),null;case 31:if(i=r.memoizedState,t===null||t.memoizedState!==null){if(o=gs(r),i!==null){if(t===null){if(!o)throw Error(a(318));if(t=r.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[De]=r}else Da(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dr(r),t=!1}else i=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return r.flags&256?(gn(r),r):(gn(r),null);if((r.flags&128)!==0)throw Error(a(558))}return dr(r),null;case 13:if(o=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=gs(r),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=r.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[De]=r}else Da(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dr(r),u=!1}else u=Zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return r.flags&256?(gn(r),r):(gn(r),null)}return gn(r),(r.flags&128)!==0?(r.lanes=i,r):(i=o!==null,t=t!==null&&t.memoizedState!==null,i&&(o=r.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),i!==t&&i&&(r.child.flags|=8192),tc(r,r.updateQueue),dr(r),null);case 4:return qe(),t===null&&ch(r.stateNode.containerInfo),dr(r),null;case 10:return Si(r.type),dr(r),null;case 19:if(J(Er),o=r.memoizedState,o===null)return dr(r),null;if(u=(r.flags&128)!==0,h=o.rendering,h===null)if(u)Io(o,!1);else{if(br!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(h=Vl(t),h!==null){for(r.flags|=128,Io(o,!1),t=h.updateQueue,r.updateQueue=t,tc(r,t),r.subtreeFlags=0,t=i,i=r.child;i!==null;)sm(i,t),i=i.sibling;return be(Er,Er.current&1|2),Nt&&yi(r,o.treeForkCount),r.child}t=t.sibling}o.tail!==null&&kt()>sc&&(r.flags|=128,u=!0,Io(o,!1),r.lanes=4194304)}else{if(!u)if(t=Vl(h),t!==null){if(r.flags|=128,u=!0,t=t.updateQueue,r.updateQueue=t,tc(r,t),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Nt)return dr(r),null}else 2*kt()-o.renderingStartTime>sc&&i!==536870912&&(r.flags|=128,u=!0,Io(o,!1),r.lanes=4194304);o.isBackwards?(h.sibling=r.child,r.child=h):(t=o.last,t!==null?t.sibling=h:r.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=kt(),t.sibling=null,i=Er.current,be(Er,u?i&1|2:i&1),Nt&&yi(r,o.treeForkCount),t):(dr(r),null);case 22:case 23:return gn(r),ud(),o=r.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(i&536870912)!==0&&(r.flags&128)===0&&(dr(r),r.subtreeFlags&6&&(r.flags|=8192)):dr(r),i=r.updateQueue,i!==null&&tc(r,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048),t!==null&&J(za),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),r.memoizedState.cache!==i&&(r.flags|=2048),Si(Tr),dr(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function W1(t,r){switch(Ku(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Si(Tr),qe(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return He(r),null;case 31:if(r.memoizedState!==null){if(gn(r),r.alternate===null)throw Error(a(340));Da()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 13:if(gn(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Da()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return J(Er),null;case 4:return qe(),null;case 10:return Si(r.type),null;case 22:case 23:return gn(r),ud(),t!==null&&J(za),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Si(Tr),null;case 25:return null;default:return null}}function Ig(t,r){switch(Ku(r),r.tag){case 3:Si(Tr),qe();break;case 26:case 27:case 5:He(r);break;case 4:qe();break;case 31:r.memoizedState!==null&&gn(r);break;case 13:gn(r);break;case 19:J(Er);break;case 10:Si(r.type);break;case 22:case 23:gn(r),ud(),t!==null&&J(za);break;case 24:Si(Tr)}}function Uo(t,r){try{var i=r.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&t)===t){o=void 0;var h=i.create,y=i.inst;o=h(),y.destroy=o}i=i.next}while(i!==u)}}catch(C){Yt(r,r.return,C)}}function oa(t,r,i){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=r;var B=i,se=C;try{se()}catch(ve){Yt(u,B,ve)}}}o=o.next}while(o!==h)}}catch(ve){Yt(r,r.return,ve)}}function Ug(t){var r=t.updateQueue;if(r!==null){var i=t.stateNode;try{Em(r,i)}catch(o){Yt(t,t.return,o)}}}function kg(t,r,i){i.props=ja(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(o){Yt(t,r,o)}}function ko(t,r){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof i=="function"?t.refCleanup=i(o):i.current=o}}catch(u){Yt(t,r,u)}}function ei(t,r){var i=t.ref,o=t.refCleanup;if(i!==null)if(typeof o=="function")try{o()}catch(u){Yt(t,r,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){Yt(t,r,u)}else i.current=null}function Dg(t){var r=t.type,i=t.memoizedProps,o=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();break e;case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}}catch(u){Yt(t,t.return,u)}}function Vd(t,r,i){try{var o=t.stateNode;fy(o,t.type,i,r),o[Ee]=r}catch(u){Yt(t,t.return,u)}}function Og(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pa(t.type)||t.tag===4}function Hd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,r,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,r):(r=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,r.appendChild(t),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=vi));else if(o!==4&&(o===27&&pa(t.type)&&(i=t.stateNode,r=null),t=t.child,t!==null))for(jd(t,r,i),t=t.sibling;t!==null;)jd(t,r,i),t=t.sibling}function rc(t,r,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?i.insertBefore(t,r):i.appendChild(t);else if(o!==4&&(o===27&&pa(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(rc(t,r,i),t=t.sibling;t!==null;)rc(t,r,i),t=t.sibling}function Fg(t){var r=t.stateNode,i=t.memoizedProps;try{for(var o=t.type,u=r.attributes;u.length;)r.removeAttributeNode(u[0]);jr(r,o,i),r[De]=t,r[Ee]=i}catch(h){Yt(t,t.return,h)}}var Ci=!1,Rr=!1,Wd=!1,zg=typeof WeakSet=="function"?WeakSet:Set,Or=null;function X1(t,r){if(t=t.containerInfo,hh=Mc,t=Zp(t),Fu(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,C=-1,B=-1,se=0,ve=0,Se=t,le=null;t:for(;;){for(var de;Se!==i||u!==0&&Se.nodeType!==3||(C=y+u),Se!==h||o!==0&&Se.nodeType!==3||(B=y+o),Se.nodeType===3&&(y+=Se.nodeValue.length),(de=Se.firstChild)!==null;)le=Se,Se=de;for(;;){if(Se===t)break t;if(le===i&&++se===u&&(C=y),le===h&&++ve===o&&(B=y),(de=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=de}i=C===-1||B===-1?null:{start:C,end:B}}else i=null}i=i||{start:0,end:0}}else i=null;for(fh={focusedElem:t,selectionRange:i},Mc=!1,Or=r;Or!==null;)if(r=Or,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Or=t;else for(;Or!==null;){switch(r=Or,h=r.alternate,t=r.flags,r.tag){case 0:if((t&4)!==0&&(t=r.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)u=t[i],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,i=r,u=h.memoizedProps,h=h.memoizedState,o=i.stateNode;try{var Ke=ja(i.type,u);t=o.getSnapshotBeforeUpdate(Ke,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ut){Yt(i,i.return,ut)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,i=t.nodeType,i===9)gh(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,Or=t;break}Or=r.return}}function Bg(t,r,i){var o=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(t,i),o&4&&Uo(5,i);break;case 1:if(Ri(t,i),o&4)if(t=i.stateNode,r===null)try{t.componentDidMount()}catch(y){Yt(i,i.return,y)}else{var u=ja(i.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(u,r,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Yt(i,i.return,y)}}o&64&&Ug(i),o&512&&ko(i,i.return);break;case 3:if(Ri(t,i),o&64&&(t=i.updateQueue,t!==null)){if(r=null,i.child!==null)switch(i.child.tag){case 27:case 5:r=i.child.stateNode;break;case 1:r=i.child.stateNode}try{Em(t,r)}catch(y){Yt(i,i.return,y)}}break;case 27:r===null&&o&4&&Fg(i);case 26:case 5:Ri(t,i),r===null&&o&4&&Dg(i),o&512&&ko(i,i.return);break;case 12:Ri(t,i);break;case 31:Ri(t,i),o&4&&Hg(t,i);break;case 13:Ri(t,i),o&4&&jg(t,i),o&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=ty.bind(null,i),by(t,i))));break;case 22:if(o=i.memoizedState!==null||Ci,!o){r=r!==null&&r.memoizedState!==null||Rr,u=Ci;var h=Rr;Ci=o,(Rr=r)&&!h?Ni(t,i,(i.subtreeFlags&8772)!==0):Ri(t,i),Ci=u,Rr=h}break;case 30:break;default:Ri(t,i)}}function Gg(t){var r=t.alternate;r!==null&&(t.alternate=null,Gg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&nr(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gr=null,tn=!1;function Ai(t,r,i){for(i=i.child;i!==null;)Vg(t,r,i),i=i.sibling}function Vg(t,r,i){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(W,i)}catch{}switch(i.tag){case 26:Rr||ei(i,r),Ai(t,r,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Rr||ei(i,r);var o=gr,u=tn;pa(i.type)&&(gr=i.stateNode,tn=!1),Ai(t,r,i),jo(i.stateNode),gr=o,tn=u;break;case 5:Rr||ei(i,r);case 6:if(o=gr,u=tn,gr=null,Ai(t,r,i),gr=o,tn=u,gr!==null)if(tn)try{(gr.nodeType===9?gr.body:gr.nodeName==="HTML"?gr.ownerDocument.body:gr).removeChild(i.stateNode)}catch(h){Yt(i,r,h)}else try{gr.removeChild(i.stateNode)}catch(h){Yt(i,r,h)}break;case 18:gr!==null&&(tn?(t=gr,Uv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Os(t)):Uv(gr,i.stateNode));break;case 4:o=gr,u=tn,gr=i.stateNode.containerInfo,tn=!0,Ai(t,r,i),gr=o,tn=u;break;case 0:case 11:case 14:case 15:oa(2,i,r),Rr||oa(4,i,r),Ai(t,r,i);break;case 1:Rr||(ei(i,r),o=i.stateNode,typeof o.componentWillUnmount=="function"&&kg(i,r,o)),Ai(t,r,i);break;case 21:Ai(t,r,i);break;case 22:Rr=(o=Rr)||i.memoizedState!==null,Ai(t,r,i),Rr=o;break;default:Ai(t,r,i)}}function Hg(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Os(t)}catch(i){Yt(r,r.return,i)}}}function jg(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Os(t)}catch(i){Yt(r,r.return,i)}}function q1(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new zg),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new zg),r;default:throw Error(a(435,t.tag))}}function nc(t,r){var i=q1(t);r.forEach(function(o){if(!i.has(o)){i.add(o);var u=ry.bind(null,t,o);o.then(u,u)}})}function rn(t,r){var i=r.deletions;if(i!==null)for(var o=0;o<i.length;o++){var u=i[o],h=t,y=r,C=y;e:for(;C!==null;){switch(C.tag){case 27:if(pa(C.type)){gr=C.stateNode,tn=!1;break e}break;case 5:gr=C.stateNode,tn=!1;break e;case 3:case 4:gr=C.stateNode.containerInfo,tn=!0;break e}C=C.return}if(gr===null)throw Error(a(160));Vg(h,y,u),gr=null,tn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Wg(r,t),r=r.sibling}var Vn=null;function Wg(t,r){var i=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:rn(r,t),nn(t),o&4&&(oa(3,t,t.return),Uo(3,t),oa(5,t,t.return));break;case 1:rn(r,t),nn(t),o&512&&(Rr||i===null||ei(i,i.return)),o&64&&Ci&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?o:i.concat(o))));break;case 26:var u=Vn;if(rn(r,t),nn(t),o&512&&(Rr||i===null||ei(i,i.return)),o&4){var h=i!==null?i.memoizedState:null;if(o=t.memoizedState,i===null)if(o===null)if(t.stateNode===null){e:{o=t.type,i=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[cr]||h[De]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),jr(h,o,i),h[De]=t,bt(h),o=h;break e;case"link":var y=Wv("link","href",u).get(o+(i.href||""));if(y){for(var C=0;C<y.length;C++)if(h=y[C],h.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&h.getAttribute("rel")===(i.rel==null?null:i.rel)&&h.getAttribute("title")===(i.title==null?null:i.title)&&h.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){y.splice(C,1);break t}}h=u.createElement(o),jr(h,o,i),u.head.appendChild(h);break;case"meta":if(y=Wv("meta","content",u).get(o+(i.content||""))){for(C=0;C<y.length;C++)if(h=y[C],h.getAttribute("content")===(i.content==null?null:""+i.content)&&h.getAttribute("name")===(i.name==null?null:i.name)&&h.getAttribute("property")===(i.property==null?null:i.property)&&h.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&h.getAttribute("charset")===(i.charSet==null?null:i.charSet)){y.splice(C,1);break t}}h=u.createElement(o),jr(h,o,i),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[De]=t,bt(h),o=h}t.stateNode=o}else Xv(u,t.type,t.stateNode);else t.stateNode=jv(u,o,t.memoizedProps);else h!==o?(h===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):h.count--,o===null?Xv(u,t.type,t.stateNode):jv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Vd(t,t.memoizedProps,i.memoizedProps)}break;case 27:rn(r,t),nn(t),o&512&&(Rr||i===null||ei(i,i.return)),i!==null&&o&4&&Vd(t,t.memoizedProps,i.memoizedProps);break;case 5:if(rn(r,t),nn(t),o&512&&(Rr||i===null||ei(i,i.return)),t.flags&32){u=t.stateNode;try{hn(u,"")}catch(Ke){Yt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Vd(t,u,i!==null?i.memoizedProps:u)),o&1024&&(Wd=!0);break;case 6:if(rn(r,t),nn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,i=t.stateNode;try{i.nodeValue=o}catch(Ke){Yt(t,t.return,Ke)}}break;case 3:if(xc=null,u=Vn,Vn=vc(r.containerInfo),rn(r,t),Vn=u,nn(t),o&4&&i!==null&&i.memoizedState.isDehydrated)try{Os(r.containerInfo)}catch(Ke){Yt(t,t.return,Ke)}Wd&&(Wd=!1,Xg(t));break;case 4:o=Vn,Vn=vc(t.stateNode.containerInfo),rn(r,t),nn(t),Vn=o;break;case 12:rn(r,t),nn(t);break;case 31:rn(r,t),nn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 13:rn(r,t),nn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ac=kt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 22:u=t.memoizedState!==null;var B=i!==null&&i.memoizedState!==null,se=Ci,ve=Rr;if(Ci=se||u,Rr=ve||B,rn(r,t),Rr=ve,Ci=se,nn(t),o&8192)e:for(r=t.stateNode,r._visibility=u?r._visibility&-2:r._visibility|1,u&&(i===null||B||Ci||Rr||Wa(t)),i=null,r=t;;){if(r.tag===5||r.tag===26){if(i===null){B=i=r;try{if(h=B.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=B.stateNode;var Se=B.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){Yt(B,B.return,Ke)}}}else if(r.tag===6){if(i===null){B=r;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ke){Yt(B,B.return,Ke)}}}else if(r.tag===18){if(i===null){B=r;try{var de=B.stateNode;u?kv(de,!0):kv(B.stateNode,!1)}catch(Ke){Yt(B,B.return,Ke)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;i===r&&(i=null),r=r.return}i===r&&(i=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=t.updateQueue,o!==null&&(i=o.retryQueue,i!==null&&(o.retryQueue=null,nc(t,i))));break;case 19:rn(r,t),nn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nc(t,o)));break;case 30:break;case 21:break;default:rn(r,t),nn(t)}}function nn(t){var r=t.flags;if(r&2){try{for(var i,o=t.return;o!==null;){if(Og(o)){i=o;break}o=o.return}if(i==null)throw Error(a(160));switch(i.tag){case 27:var u=i.stateNode,h=Hd(t);rc(t,h,u);break;case 5:var y=i.stateNode;i.flags&32&&(hn(y,""),i.flags&=-33);var C=Hd(t);rc(t,C,y);break;case 3:case 4:var B=i.stateNode.containerInfo,se=Hd(t);jd(t,se,B);break;default:throw Error(a(161))}}catch(ve){Yt(t,t.return,ve)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Xg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Xg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Ri(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Bg(t,r.alternate,r),r=r.sibling}function Wa(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:oa(4,r,r.return),Wa(r);break;case 1:ei(r,r.return);var i=r.stateNode;typeof i.componentWillUnmount=="function"&&kg(r,r.return,i),Wa(r);break;case 27:jo(r.stateNode);case 26:case 5:ei(r,r.return),Wa(r);break;case 22:r.memoizedState===null&&Wa(r);break;case 30:Wa(r);break;default:Wa(r)}t=t.sibling}}function Ni(t,r,i){for(i=i&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,u=t,h=r,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ni(u,h,i),Uo(4,h);break;case 1:if(Ni(u,h,i),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){Yt(o,o.return,se)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Mm(B[u],C)}catch(se){Yt(o,o.return,se)}}i&&y&64&&Ug(h),ko(h,h.return);break;case 27:Fg(h);case 26:case 5:Ni(u,h,i),i&&o===null&&y&4&&Dg(h),ko(h,h.return);break;case 12:Ni(u,h,i);break;case 31:Ni(u,h,i),i&&y&4&&Hg(u,h);break;case 13:Ni(u,h,i),i&&y&4&&jg(u,h);break;case 22:h.memoizedState===null&&Ni(u,h,i),ko(h,h.return);break;case 30:break;default:Ni(u,h,i)}r=r.sibling}}function Xd(t,r){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&bo(i))}function qd(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&bo(t))}function Hn(t,r,i,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)qg(t,r,i,o),r=r.sibling}function qg(t,r,i,o){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Hn(t,r,i,o),u&2048&&Uo(9,r);break;case 1:Hn(t,r,i,o);break;case 3:Hn(t,r,i,o),u&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&bo(t)));break;case 12:if(u&2048){Hn(t,r,i,o),t=r.stateNode;try{var h=r.memoizedProps,y=h.id,C=h.onPostCommit;typeof C=="function"&&C(y,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Yt(r,r.return,B)}}else Hn(t,r,i,o);break;case 31:Hn(t,r,i,o);break;case 13:Hn(t,r,i,o);break;case 23:break;case 22:h=r.stateNode,y=r.alternate,r.memoizedState!==null?h._visibility&2?Hn(t,r,i,o):Do(t,r):h._visibility&2?Hn(t,r,i,o):(h._visibility|=2,Ts(t,r,i,o,(r.subtreeFlags&10256)!==0||!1)),u&2048&&Xd(y,r);break;case 24:Hn(t,r,i,o),u&2048&&qd(r.alternate,r);break;default:Hn(t,r,i,o)}}function Ts(t,r,i,o,u){for(u=u&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var h=t,y=r,C=i,B=o,se=y.flags;switch(y.tag){case 0:case 11:case 15:Ts(h,y,C,B,u),Uo(8,y);break;case 23:break;case 22:var ve=y.stateNode;y.memoizedState!==null?ve._visibility&2?Ts(h,y,C,B,u):Do(h,y):(ve._visibility|=2,Ts(h,y,C,B,u)),u&&se&2048&&Xd(y.alternate,y);break;case 24:Ts(h,y,C,B,u),u&&se&2048&&qd(y.alternate,y);break;default:Ts(h,y,C,B,u)}r=r.sibling}}function Do(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var i=t,o=r,u=o.flags;switch(o.tag){case 22:Do(i,o),u&2048&&Xd(o.alternate,o);break;case 24:Do(i,o),u&2048&&qd(o.alternate,o);break;default:Do(i,o)}r=r.sibling}}var Oo=8192;function Cs(t,r,i){if(t.subtreeFlags&Oo)for(t=t.child;t!==null;)Yg(t,r,i),t=t.sibling}function Yg(t,r,i){switch(t.tag){case 26:Cs(t,r,i),t.flags&Oo&&t.memoizedState!==null&&Iy(i,Vn,t.memoizedState,t.memoizedProps);break;case 5:Cs(t,r,i);break;case 3:case 4:var o=Vn;Vn=vc(t.stateNode.containerInfo),Cs(t,r,i),Vn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,Cs(t,r,i),Oo=o):Cs(t,r,i));break;default:Cs(t,r,i)}}function Kg(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Fo(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];Or=o,Zg(o,t)}Kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$g(t),t=t.sibling}function $g(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&oa(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,ic(t)):Fo(t);break;default:Fo(t)}}function ic(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];Or=o,Zg(o,t)}Kg(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:oa(8,r,r.return),ic(r);break;case 22:i=r.stateNode,i._visibility&2&&(i._visibility&=-3,ic(r));break;default:ic(r)}t=t.sibling}}function Zg(t,r){for(;Or!==null;){var i=Or;switch(i.tag){case 0:case 11:case 15:oa(8,i,r);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var o=i.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:bo(i.memoizedState.cache)}if(o=i.child,o!==null)o.return=i,Or=o;else e:for(i=t;Or!==null;){o=Or;var u=o.sibling,h=o.return;if(Gg(o),o===i){Or=null;break e}if(u!==null){u.return=h,Or=u;break e}Or=h}}}var Y1={getCacheForType:function(t){var r=Vr(Tr),i=r.data.get(t);return i===void 0&&(i=t(),r.data.set(t,i)),i},cacheSignal:function(){return Vr(Tr).controller.signal}},K1=typeof WeakMap=="function"?WeakMap:Map,Ht=0,ar=null,St=null,Ct=0,qt=0,vn=null,la=!1,As=!1,Yd=!1,Pi=0,br=0,ca=0,Xa=0,Kd=0,_n=0,Rs=0,zo=null,an=null,$d=!1,ac=0,Qg=0,sc=1/0,oc=null,ua=null,Ir=0,da=null,Ns=null,Li=0,Zd=0,Qd=null,Jg=null,Bo=0,Jd=null;function xn(){return(Ht&2)!==0&&Ct!==0?Ct&-Ct:O.T!==null?ah():mi()}function ev(){if(_n===0)if((Ct&536870912)===0||Nt){var t=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),_n=t}else _n=536870912;return t=mn.current,t!==null&&(t.flags|=32),_n}function sn(t,r,i){(t===ar&&(qt===2||qt===9)||t.cancelPendingCommit!==null)&&(Ps(t,0),ha(t,Ct,_n,!1)),Ge(t,i),((Ht&2)===0||t!==ar)&&(t===ar&&((Ht&2)===0&&(Xa|=i),br===4&&ha(t,Ct,_n,!1)),ti(t))}function tv(t,r,i){if((Ht&6)!==0)throw Error(a(327));var o=!i&&(r&127)===0&&(r&t.expiredLanes)===0||Fe(t,r),u=o?Q1(t,r):th(t,r,!0),h=o;do{if(u===0){As&&!o&&ha(t,r,0,!1);break}else{if(i=t.current.alternate,h&&!$1(i)){u=th(t,r,!1),h=!1;continue}if(u===2){if(h=r,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){r=y;e:{var C=t;u=zo;var B=C.current.memoizedState.isDehydrated;if(B&&(Ps(C,y).flags|=256),y=th(C,y,!1),y!==2){if(Yd&&!B){C.errorRecoveryDisabledLanes|=h,Xa|=h,u=4;break e}h=an,an=u,h!==null&&(an===null?an=h:an.push.apply(an,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){Ps(t,0),ha(t,r,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:ha(o,r,_n,!la);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(u=ac+300-kt(),10<u)){if(ha(o,r,_n,!la),Re(o,0,!0)!==0)break e;Li=r,o.timeoutHandle=Lv(rv.bind(null,o,i,an,oc,$d,r,_n,Xa,Rs,la,h,"Throttled",-0,0),u);break e}rv(o,i,an,oc,$d,r,_n,Xa,Rs,la,h,null,-0,0)}}break}while(!0);ti(t)}function rv(t,r,i,o,u,h,y,C,B,se,ve,Se,le,de){if(t.timeoutHandle=-1,Se=r.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},Yg(r,h,Se);var Ke=(h&62914560)===h?ac-kt():(h&4194048)===h?Qg-kt():0;if(Ke=Uy(Se,Ke),Ke!==null){Li=h,t.cancelPendingCommit=Ke(uv.bind(null,t,r,h,i,o,u,y,C,B,ve,Se,null,le,de)),ha(t,h,y,!se);return}}uv(t,r,h,i,o,u,y,C,B)}function $1(t){for(var r=t;;){var i=r.tag;if((i===0||i===11||i===15)&&r.flags&16384&&(i=r.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var o=0;o<i.length;o++){var u=i[o],h=u.getSnapshot;u=u.value;try{if(!fn(h(),u))return!1}catch{return!1}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ha(t,r,i,o){r&=~Kd,r&=~Xa,t.suspendedLanes|=r,t.pingedLanes&=~r,o&&(t.warmLanes|=r),o=t.expirationTimes;for(var u=r;0<u;){var h=31-ze(u),y=1<<h;o[h]=-1,u&=~y}i!==0&&It(t,i,r)}function lc(){return(Ht&6)===0?(Go(0),!1):!0}function eh(){if(St!==null){if(qt===0)var t=St.return;else t=St,bi=Oa=null,gd(t),bs=null,Mo=0,t=St;for(;t!==null;)Ig(t.alternate,t),t=t.return;St=null}}function Ps(t,r){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,gy(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Li=0,eh(),ar=t,St=i=xi(t.current,null),Ct=r,qt=0,vn=null,la=!1,As=Fe(t,r),Yd=!1,Rs=_n=Kd=Xa=ca=br=0,an=zo=null,$d=!1,(r&8)!==0&&(r|=r&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=r;0<o;){var u=31-ze(o),h=1<<u;r|=t[u],o&=~h}return Pi=r,Rl(),i}function nv(t,r){vt=null,O.H=Po,r===ys||r===Ol?(r=xm(),qt=3):r===id?(r=xm(),qt=4):qt=r===Ld?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,vn=r,St===null&&(br=1,Zl(t,En(r,t.current)))}function iv(){var t=mn.current;return t===null?!0:(Ct&4194048)===Ct?Gn===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Gn:!1}function av(){var t=O.H;return O.H=Po,t===null?Po:t}function sv(){var t=O.A;return O.A=Y1,t}function cc(){br=4,la||(Ct&4194048)!==Ct&&mn.current!==null||(As=!0),(ca&134217727)===0&&(Xa&134217727)===0||ar===null||ha(ar,Ct,_n,!1)}function th(t,r,i){var o=Ht;Ht|=2;var u=av(),h=sv();(ar!==t||Ct!==r)&&(oc=null,Ps(t,r)),r=!1;var y=br;e:do try{if(qt!==0&&St!==null){var C=St,B=vn;switch(qt){case 8:eh(),y=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(r=!0);var se=qt;if(qt=0,vn=null,Ls(t,C,B,se),i&&As){y=0;break e}break;default:se=qt,qt=0,vn=null,Ls(t,C,B,se)}}Z1(),y=br;break}catch(ve){nv(t,ve)}while(!0);return r&&t.shellSuspendCounter++,bi=Oa=null,Ht=o,O.H=u,O.A=h,St===null&&(ar=null,Ct=0,Rl()),y}function Z1(){for(;St!==null;)ov(St)}function Q1(t,r){var i=Ht;Ht|=2;var o=av(),u=sv();ar!==t||Ct!==r?(oc=null,sc=kt()+500,Ps(t,r)):As=Fe(t,r);e:do try{if(qt!==0&&St!==null){r=St;var h=vn;t:switch(qt){case 1:qt=0,vn=null,Ls(t,r,h,1);break;case 2:case 9:if(vm(h)){qt=0,vn=null,lv(r);break}r=function(){qt!==2&&qt!==9||ar!==t||(qt=7),ti(t)},h.then(r,r);break e;case 3:qt=7;break e;case 4:qt=5;break e;case 7:vm(h)?(qt=0,vn=null,lv(r)):(qt=0,vn=null,Ls(t,r,h,7));break;case 5:var y=null;switch(St.tag){case 26:y=St.memoizedState;case 5:case 27:var C=St;if(y?qv(y):C.stateNode.complete){qt=0,vn=null;var B=C.sibling;if(B!==null)St=B;else{var se=C.return;se!==null?(St=se,uc(se)):St=null}break t}}qt=0,vn=null,Ls(t,r,h,5);break;case 6:qt=0,vn=null,Ls(t,r,h,6);break;case 8:eh(),br=6;break e;default:throw Error(a(462))}}J1();break}catch(ve){nv(t,ve)}while(!0);return bi=Oa=null,O.H=o,O.A=u,Ht=i,St!==null?0:(ar=null,Ct=0,Rl(),br)}function J1(){for(;St!==null&&!or();)ov(St)}function ov(t){var r=Pg(t.alternate,t,Pi);t.memoizedProps=t.pendingProps,r===null?uc(t):St=r}function lv(t){var r=t,i=r.alternate;switch(r.tag){case 15:case 0:r=wg(i,r,r.pendingProps,r.type,void 0,Ct);break;case 11:r=wg(i,r,r.pendingProps,r.type.render,r.ref,Ct);break;case 5:gd(r);default:Ig(i,r),r=St=sm(r,Pi),r=Pg(i,r,Pi)}t.memoizedProps=t.pendingProps,r===null?uc(t):St=r}function Ls(t,r,i,o){bi=Oa=null,gd(r),bs=null,Mo=0;var u=r.return;try{if(G1(t,u,r,i,Ct)){br=1,Zl(t,En(i,t.current)),St=null;return}}catch(h){if(u!==null)throw St=u,h;br=1,Zl(t,En(i,t.current)),St=null;return}r.flags&32768?(Nt||o===1?t=!0:As||(Ct&536870912)!==0?t=!1:(la=t=!0,(o===2||o===9||o===3||o===6)&&(o=mn.current,o!==null&&o.tag===13&&(o.flags|=16384))),cv(r,t)):uc(r)}function uc(t){var r=t;do{if((r.flags&32768)!==0){cv(r,la);return}t=r.return;var i=j1(r.alternate,r,Pi);if(i!==null){St=i;return}if(r=r.sibling,r!==null){St=r;return}St=r=t}while(r!==null);br===0&&(br=5)}function cv(t,r){do{var i=W1(t.alternate,t);if(i!==null){i.flags&=32767,St=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!r&&(t=t.sibling,t!==null)){St=t;return}St=t=i}while(t!==null);br=6,St=null}function uv(t,r,i,o,u,h,y,C,B){t.cancelPendingCommit=null;do dc();while(Ir!==0);if((Ht&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(h=r.lanes|r.childLanes,h|=Hu,_r(t,i,h,y,C,B),t===ar&&(St=ar=null,Ct=0),Ns=r,da=t,Li=i,Zd=h,Qd=u,Jg=o,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ny($,function(){return mv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=G.p,G.p=2,y=Ht,Ht|=4;try{X1(t,r,i)}finally{Ht=y,G.p=u,O.T=o}}Ir=1,dv(),hv(),fv()}}function dv(){if(Ir===1){Ir=0;var t=da,r=Ns,i=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||i){i=O.T,O.T=null;var o=G.p;G.p=2;var u=Ht;Ht|=4;try{Wg(r,t);var h=fh,y=Zp(t.containerInfo),C=h.focusedElem,B=h.selectionRange;if(y!==C&&C&&C.ownerDocument&&$p(C.ownerDocument.documentElement,C)){if(B!==null&&Fu(C)){var se=B.start,ve=B.end;if(ve===void 0&&(ve=se),"selectionStart"in C)C.selectionStart=se,C.selectionEnd=Math.min(ve,C.value.length);else{var Se=C.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var de=le.getSelection(),Ke=C.textContent.length,ut=Math.min(B.start,Ke),tr=B.end===void 0?ut:Math.min(B.end,Ke);!de.extend&&ut>tr&&(y=tr,tr=ut,ut=y);var Z=Kp(C,ut),H=Kp(C,tr);if(Z&&H&&(de.rangeCount!==1||de.anchorNode!==Z.node||de.anchorOffset!==Z.offset||de.focusNode!==H.node||de.focusOffset!==H.offset)){var ie=Se.createRange();ie.setStart(Z.node,Z.offset),de.removeAllRanges(),ut>tr?(de.addRange(ie),de.extend(H.node,H.offset)):(ie.setEnd(H.node,H.offset),de.addRange(ie))}}}}for(Se=[],de=C;de=de.parentNode;)de.nodeType===1&&Se.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Se.length;C++){var xe=Se[C];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Mc=!!hh,fh=hh=null}finally{Ht=u,G.p=o,O.T=i}}t.current=r,Ir=2}}function hv(){if(Ir===2){Ir=0;var t=da,r=Ns,i=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||i){i=O.T,O.T=null;var o=G.p;G.p=2;var u=Ht;Ht|=4;try{Bg(t,r.alternate,r)}finally{Ht=u,G.p=o,O.T=i}}Ir=3}}function fv(){if(Ir===4||Ir===3){Ir=0,Y();var t=da,r=Ns,i=Li,o=Jg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ir=5:(Ir=0,Ns=da=null,pv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ua=null),pi(i),r=r.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(W,r,void 0,(r.current.flags&128)===128)}catch{}if(o!==null){r=O.T,u=G.p,G.p=2,O.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var C=o[y];h(C.value,{componentStack:C.stack})}}finally{O.T=r,G.p=u}}(Li&3)!==0&&dc(),ti(t),u=t.pendingLanes,(i&261930)!==0&&(u&42)!==0?t===Jd?Bo++:(Bo=0,Jd=t):Bo=0,Go(0)}}function pv(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,bo(r)))}function dc(){return dv(),hv(),fv(),mv()}function mv(){if(Ir!==5)return!1;var t=da,r=Zd;Zd=0;var i=pi(Li),o=O.T,u=G.p;try{G.p=32>i?32:i,O.T=null,i=Qd,Qd=null;var h=da,y=Li;if(Ir=0,Ns=da=null,Li=0,(Ht&6)!==0)throw Error(a(331));var C=Ht;if(Ht|=4,$g(h.current),qg(h,h.current,y,i),Ht=C,Go(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(W,h)}catch{}return!0}finally{G.p=u,O.T=o,pv(t,r)}}function gv(t,r,i){r=En(i,r),r=Pd(t.stateNode,r,2),t=ia(t,r,2),t!==null&&(Ge(t,2),ti(t))}function Yt(t,r,i){if(t.tag===3)gv(t,t,i);else for(;r!==null;){if(r.tag===3){gv(r,t,i);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ua===null||!ua.has(o))){t=En(i,t),i=vg(2),o=ia(r,i,2),o!==null&&(_g(i,o,r,t),Ge(o,2),ti(o));break}}r=r.return}}function rh(t,r,i){var o=t.pingCache;if(o===null){o=t.pingCache=new K1;var u=new Set;o.set(r,u)}else u=o.get(r),u===void 0&&(u=new Set,o.set(r,u));u.has(i)||(Yd=!0,u.add(i),t=ey.bind(null,t,r,i),r.then(t,t))}function ey(t,r,i){var o=t.pingCache;o!==null&&o.delete(r),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,ar===t&&(Ct&i)===i&&(br===4||br===3&&(Ct&62914560)===Ct&&300>kt()-ac?(Ht&2)===0&&Ps(t,0):Kd|=i,Rs===Ct&&(Rs=0)),ti(t)}function vv(t,r){r===0&&(r=Te()),t=Ua(t,r),t!==null&&(Ge(t,r),ti(t))}function ty(t){var r=t.memoizedState,i=0;r!==null&&(i=r.retryLane),vv(t,i)}function ry(t,r){var i=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(i=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(r),vv(t,i)}function ny(t,r){return sr(t,r)}var hc=null,Is=null,nh=!1,fc=!1,ih=!1,fa=0;function ti(t){t!==Is&&t.next===null&&(Is===null?hc=Is=t:Is=Is.next=t),fc=!0,nh||(nh=!0,ay())}function Go(t,r){if(!ih&&fc){ih=!0;do for(var i=!1,o=hc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-ze(42|t)+1)-1,h&=u&~(y&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(i=!0,bv(o,h))}else h=Ct,h=Re(o,o===ar?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Fe(o,h)||(i=!0,bv(o,h));o=o.next}while(i);ih=!1}}function iy(){_v()}function _v(){fc=nh=!1;var t=0;fa!==0&&my()&&(t=fa);for(var r=kt(),i=null,o=hc;o!==null;){var u=o.next,h=xv(o,r);h===0?(o.next=null,i===null?hc=u:i.next=u,u===null&&(Is=i)):(i=o,(t!==0||(h&3)!==0)&&(fc=!0)),o=u}Ir!==0&&Ir!==5||Go(t),fa!==0&&(fa=0)}function xv(t,r){for(var i=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-ze(h),C=1<<y,B=u[y];B===-1?((C&i)===0||(C&o)!==0)&&(u[y]=je(C,r)):B<=r&&(t.expiredLanes|=C),h&=~C}if(r=ar,i=Ct,i=Re(t,t===r?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,i===0||t===r&&(qt===2||qt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&jt(o),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Fe(t,i)){if(r=i&-i,r===t.callbackPriority)return r;switch(o!==null&&jt(o),pi(i)){case 2:case 8:i=M;break;case 32:i=$;break;case 268435456:i=ue;break;default:i=$}return o=yv.bind(null,t),i=sr(i,o),t.callbackPriority=r,t.callbackNode=i,r}return o!==null&&o!==null&&jt(o),t.callbackPriority=2,t.callbackNode=null,2}function yv(t,r){if(Ir!==0&&Ir!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(dc()&&t.callbackNode!==i)return null;var o=Ct;return o=Re(t,t===ar?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(tv(t,o,r),xv(t,kt()),t.callbackNode!=null&&t.callbackNode===i?yv.bind(null,t):null)}function bv(t,r){if(dc())return null;tv(t,r,!0)}function ay(){vy(function(){(Ht&6)!==0?sr(P,iy):_v()})}function ah(){if(fa===0){var t=_s;t===0&&(t=lt,lt<<=1,(lt&261888)===0&&(lt=256)),fa=t}return fa}function Sv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Na(""+t)}function Mv(t,r){var i=r.ownerDocument.createElement("input");return i.name=r.name,i.value=r.value,t.id&&i.setAttribute("form",t.id),r.parentNode.insertBefore(i,r),t=new FormData(t),i.parentNode.removeChild(i),t}function sy(t,r,i,o,u){if(r==="submit"&&i&&i.stateNode===u){var h=Sv((u[Ee]||null).action),y=o.submitter;y&&(r=(r=y[Ee]||null)?Sv(r.formAction):y.getAttribute("formAction"),r!==null&&(h=r,y=null));var C=new wl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fa!==0){var B=y?Mv(u,y):new FormData(u);wd(i,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(C.preventDefault(),B=y?Mv(u,y):new FormData(u),wd(i,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var sh=0;sh<Vu.length;sh++){var oh=Vu[sh],oy=oh.toLowerCase(),ly=oh[0].toUpperCase()+oh.slice(1);Bn(oy,"on"+ly)}Bn(em,"onAnimationEnd"),Bn(tm,"onAnimationIteration"),Bn(rm,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(E1,"onTransitionRun"),Bn(w1,"onTransitionStart"),Bn(T1,"onTransitionCancel"),Bn(nm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Ev(t,r){r=(r&4)!==0;for(var i=0;i<t.length;i++){var o=t[i],u=o.event;o=o.listeners;e:{var h=void 0;if(r)for(var y=o.length-1;0<=y;y--){var C=o[y],B=C.instance,se=C.currentTarget;if(C=C.listener,B!==h&&u.isPropagationStopped())break e;h=C,u.currentTarget=se;try{h(u)}catch(ve){Al(ve)}u.currentTarget=null,h=B}else for(y=0;y<o.length;y++){if(C=o[y],B=C.instance,se=C.currentTarget,C=C.listener,B!==h&&u.isPropagationStopped())break e;h=C,u.currentTarget=se;try{h(u)}catch(ve){Al(ve)}u.currentTarget=null,h=B}}}}function Mt(t,r){var i=r[pt];i===void 0&&(i=r[pt]=new Set);var o=t+"__bubble";i.has(o)||(wv(r,t,2,!1),i.add(o))}function lh(t,r,i){var o=0;r&&(o|=4),wv(i,t,o,r)}var pc="_reactListening"+Math.random().toString(36).slice(2);function ch(t){if(!t[pc]){t[pc]=!0,un.forEach(function(i){i!=="selectionchange"&&(cy.has(i)||lh(i,!1,t),lh(i,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[pc]||(r[pc]=!0,lh("selectionchange",!1,r))}}function wv(t,r,i,o){switch(e0(r)){case 2:var u=Oy;break;case 8:u=Fy;break;default:u=Eh}i=u.bind(null,r,i,t),u=void 0,!Ru||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(r,i,{capture:!0,passive:u}):t.addEventListener(r,i,!0):u!==void 0?t.addEventListener(r,i,{passive:u}):t.addEventListener(r,i,!1)}function uh(t,r,i,o,u){var h=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=st(C),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=h=y;continue e}C=C.parentNode}}o=o.return}Np(function(){var se=h,ve=Cu(i),Se=[];e:{var le=im.get(t);if(le!==void 0){var de=wl,Ke=t;switch(t){case"keypress":if(Ml(i)===0)break e;case"keydown":case"keyup":de=r1;break;case"focusin":Ke="focus",de=Iu;break;case"focusout":Ke="blur",de=Iu;break;case"beforeblur":case"afterblur":de=Iu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=a1;break;case em:case tm:case rm:de=qx;break;case nm:de=o1;break;case"scroll":case"scrollend":de=Vx;break;case"wheel":de=c1;break;case"copy":case"cut":case"paste":de=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=kp;break;case"toggle":case"beforetoggle":de=d1}var ut=(r&4)!==0,tr=!ut&&(t==="scroll"||t==="scrollend"),Z=ut?le!==null?le+"Capture":null:le;ut=[];for(var H=se,ie;H!==null;){var xe=H;if(ie=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ie===null||Z===null||(xe=co(H,Z),xe!=null&&ut.push(Ho(H,xe,ie))),tr)break;H=H.return}0<ut.length&&(le=new de(le,Ke,null,i,ve),Se.push({event:le,listeners:ut}))}}if((r&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&i!==Tu&&(Ke=i.relatedTarget||i.fromElement)&&(st(Ke)||Ke[et]))break e;if((de||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,de?(Ke=i.relatedTarget||i.toElement,de=se,Ke=Ke?st(Ke):null,Ke!==null&&(tr=c(Ke),ut=Ke.tag,Ke!==tr||ut!==5&&ut!==27&&ut!==6)&&(Ke=null)):(de=null,Ke=se),de!==Ke)){if(ut=Ip,xe="onMouseLeave",Z="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(ut=kp,xe="onPointerLeave",Z="onPointerEnter",H="pointer"),tr=de==null?le:Zt(de),ie=Ke==null?le:Zt(Ke),le=new ut(xe,H+"leave",de,i,ve),le.target=tr,le.relatedTarget=ie,xe=null,st(ve)===se&&(ut=new ut(Z,H+"enter",Ke,i,ve),ut.target=ie,ut.relatedTarget=tr,xe=ut),tr=xe,de&&Ke)t:{for(ut=uy,Z=de,H=Ke,ie=0,xe=Z;xe;xe=ut(xe))ie++;xe=0;for(var nt=H;nt;nt=ut(nt))xe++;for(;0<ie-xe;)Z=ut(Z),ie--;for(;0<xe-ie;)H=ut(H),xe--;for(;ie--;){if(Z===H||H!==null&&Z===H.alternate){ut=Z;break t}Z=ut(Z),H=ut(H)}ut=null}else ut=null;de!==null&&Tv(Se,le,de,ut,!1),Ke!==null&&tr!==null&&Tv(Se,tr,Ke,ut,!0)}}e:{if(le=se?Zt(se):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var Bt=Hp;else if(Gp(le))if(jp)Bt=b1;else{Bt=x1;var Qe=_1}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?se&&zt(se.elementType)&&(Bt=Hp):Bt=y1;if(Bt&&(Bt=Bt(t,se))){Vp(Se,Bt,i,ve);break e}Qe&&Qe(t,le,se),t==="focusout"&&se&&le.type==="number"&&se.memoizedProps.value!=null&&On(le,"number",le.value)}switch(Qe=se?Zt(se):window,t){case"focusin":(Gp(Qe)||Qe.contentEditable==="true")&&(us=Qe,zu=se,_o=null);break;case"focusout":_o=zu=us=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Qp(Se,i,ve);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":Qp(Se,i,ve)}var xt;if(ku)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else cs?zp(t,i)&&(At="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(At="onCompositionStart");At&&(Dp&&i.locale!=="ko"&&(cs||At!=="onCompositionStart"?At==="onCompositionEnd"&&cs&&(xt=Pp()):(Zi=ve,Nu="value"in Zi?Zi.value:Zi.textContent,cs=!0)),Qe=mc(se,At),0<Qe.length&&(At=new Up(At,t,null,i,ve),Se.push({event:At,listeners:Qe}),xt?At.data=xt:(xt=Bp(i),xt!==null&&(At.data=xt)))),(xt=f1?p1(t,i):m1(t,i))&&(At=mc(se,"onBeforeInput"),0<At.length&&(Qe=new Up("onBeforeInput","beforeinput",null,i,ve),Se.push({event:Qe,listeners:At}),Qe.data=xt)),sy(Se,t,se,i,ve)}Ev(Se,r)})}function Ho(t,r,i){return{instance:t,listener:r,currentTarget:i}}function mc(t,r){for(var i=r+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=co(t,i),u!=null&&o.unshift(Ho(t,u,h)),u=co(t,r),u!=null&&o.push(Ho(t,u,h))),t.tag===3)return o;t=t.return}return[]}function uy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tv(t,r,i,o,u){for(var h=r._reactName,y=[];i!==null&&i!==o;){var C=i,B=C.alternate,se=C.stateNode;if(C=C.tag,B!==null&&B===o)break;C!==5&&C!==26&&C!==27||se===null||(B=se,u?(se=co(i,h),se!=null&&y.unshift(Ho(i,se,B))):u||(se=co(i,h),se!=null&&y.push(Ho(i,se,B)))),i=i.return}y.length!==0&&t.push({event:r,listeners:y})}var dy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function Cv(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(hy,"")}function Av(t,r){return r=Cv(r),Cv(t)===r}function er(t,r,i,o,u,h){switch(i){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||hn(t,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&hn(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,i,o);break;case"style":zn(t,o,h);break;case"data":if(r!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||i!=="href")){t.removeAttribute(i);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=Na(""+o),t.setAttribute(i,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(i==="formAction"?(r!=="input"&&er(t,r,"name",u.name,u,null),er(t,r,"formEncType",u.formEncType,u,null),er(t,r,"formMethod",u.formMethod,u,null),er(t,r,"formTarget",u.formTarget,u,null)):(er(t,r,"encType",u.encType,u,null),er(t,r,"method",u.method,u,null),er(t,r,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=Na(""+o),t.setAttribute(i,o);break;case"onClick":o!=null&&(t.onclick=vi);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=i}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}i=Na(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""+o):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":o===!0?t.setAttribute(i,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,o):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(i,o):t.removeAttribute(i);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(i):t.setAttribute(i,o);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),We(t,"popover",o);break;case"xlinkActuate":$e(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$e(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$e(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$e(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$e(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$e(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$e(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Ra.get(i)||i,We(t,i,o))}}function dh(t,r,i,o,u,h){switch(i){case"style":zn(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=i}}break;case"children":typeof o=="string"?hn(t,o):(typeof o=="number"||typeof o=="bigint")&&hn(t,""+o);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),r=i.slice(2,u?i.length-7:void 0),h=t[Ee]||null,h=h!=null?h[i]:null,typeof h=="function"&&t.removeEventListener(r,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(r,o,u);break e}i in t?t[i]=o:o===!0?t.setAttribute(i,""):We(t,i,o)}}}function jr(t,r,i){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var o=!1,u=!1,h;for(h in i)if(i.hasOwnProperty(h)){var y=i[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:er(t,r,h,y,i,null)}}u&&er(t,r,"srcSet",i.srcSet,i,null),o&&er(t,r,"src",i.src,i,null);return;case"input":Mt("invalid",t);var C=h=y=u=null,B=null,se=null;for(o in i)if(i.hasOwnProperty(o)){var ve=i[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":y=ve;break;case"checked":B=ve;break;case"defaultChecked":se=ve;break;case"value":h=ve;break;case"defaultValue":C=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,r));break;default:er(t,r,o,ve,i,null)}}Xr(t,h,C,B,se,y,u,!1);return;case"select":Mt("invalid",t),o=y=h=null;for(u in i)if(i.hasOwnProperty(u)&&(C=i[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:er(t,r,u,C,i,null)}r=h,i=y,t.multiple=!!o,r!=null?Lr(t,!!o,r,!1):i!=null&&Lr(t,!!o,i,!0);return;case"textarea":Mt("invalid",t),h=u=o=null;for(y in i)if(i.hasOwnProperty(y)&&(C=i[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:er(t,r,y,C,i,null)}Fn(t,o,u,h);return;case"option":for(B in i)i.hasOwnProperty(B)&&(o=i[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":er(t,r,B,o,i,null));return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(o=0;o<Vo.length;o++)Mt(Vo[o],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in i)if(i.hasOwnProperty(se)&&(o=i[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:er(t,r,se,o,i,null)}return;default:if(zt(r)){for(ve in i)i.hasOwnProperty(ve)&&(o=i[ve],o!==void 0&&dh(t,r,ve,o,i,void 0));return}}for(C in i)i.hasOwnProperty(C)&&(o=i[C],o!=null&&er(t,r,C,o,i,null))}function fy(t,r,i,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,C=null,B=null,se=null,ve=null;for(de in i){var Se=i[de];if(i.hasOwnProperty(de)&&Se!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":B=Se;default:o.hasOwnProperty(de)||er(t,r,de,null,o,Se)}}for(var le in o){var de=o[le];if(Se=i[le],o.hasOwnProperty(le)&&(de!=null||Se!=null))switch(le){case"type":h=de;break;case"name":u=de;break;case"checked":se=de;break;case"defaultChecked":ve=de;break;case"value":y=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,r));break;default:de!==Se&&er(t,r,le,de,o,Se)}}Ye(t,y,C,B,se,ve,h,u);return;case"select":de=y=C=le=null;for(h in i)if(B=i[h],i.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":de=B;default:o.hasOwnProperty(h)||er(t,r,h,null,o,B)}for(u in o)if(h=o[u],B=i[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":le=h;break;case"defaultValue":C=h;break;case"multiple":y=h;default:h!==B&&er(t,r,u,h,o,B)}r=C,i=y,o=de,le!=null?Lr(t,!!i,le,!1):!!o!=!!i&&(r!=null?Lr(t,!!i,r,!0):Lr(t,!!i,i?[]:"",!1));return;case"textarea":de=le=null;for(C in i)if(u=i[C],i.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:er(t,r,C,null,o,u)}for(y in o)if(u=o[y],h=i[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":le=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&er(t,r,y,u,o,h)}dn(t,le,de);return;case"option":for(var Ke in i)le=i[Ke],i.hasOwnProperty(Ke)&&le!=null&&!o.hasOwnProperty(Ke)&&(Ke==="selected"?t.selected=!1:er(t,r,Ke,null,o,le));for(B in o)le=o[B],de=i[B],o.hasOwnProperty(B)&&le!==de&&(le!=null||de!=null)&&(B==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":er(t,r,B,le,o,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in i)le=i[ut],i.hasOwnProperty(ut)&&le!=null&&!o.hasOwnProperty(ut)&&er(t,r,ut,null,o,le);for(se in o)if(le=o[se],de=i[se],o.hasOwnProperty(se)&&le!==de&&(le!=null||de!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,r));break;default:er(t,r,se,le,o,de)}return;default:if(zt(r)){for(var tr in i)le=i[tr],i.hasOwnProperty(tr)&&le!==void 0&&!o.hasOwnProperty(tr)&&dh(t,r,tr,void 0,o,le);for(ve in o)le=o[ve],de=i[ve],!o.hasOwnProperty(ve)||le===de||le===void 0&&de===void 0||dh(t,r,ve,le,o,de);return}}for(var Z in i)le=i[Z],i.hasOwnProperty(Z)&&le!=null&&!o.hasOwnProperty(Z)&&er(t,r,Z,null,o,le);for(Se in o)le=o[Se],de=i[Se],!o.hasOwnProperty(Se)||le===de||le==null&&de==null||er(t,r,Se,le,o,de)}function Rv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function py(){if(typeof performance.getEntriesByType=="function"){for(var t=0,r=0,i=performance.getEntriesByType("resource"),o=0;o<i.length;o++){var u=i[o],h=u.transferSize,y=u.initiatorType,C=u.duration;if(h&&C&&Rv(y)){for(y=0,C=u.responseEnd,o+=1;o<i.length;o++){var B=i[o],se=B.startTime;if(se>C)break;var ve=B.transferSize,Se=B.initiatorType;ve&&Rv(Se)&&(B=B.responseEnd,y+=ve*(B<C?1:(C-se)/(B-se)))}if(--o,r+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return r/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var hh=null,fh=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function Nv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pv(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function ph(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var mh=null;function my(){var t=window.event;return t&&t.type==="popstate"?t===mh?!1:(mh=t,!0):(mh=null,!1)}var Lv=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Iv=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Iv<"u"?function(t){return Iv.resolve(null).then(t).catch(_y)}:Lv;function _y(t){setTimeout(function(){throw t})}function pa(t){return t==="head"}function Uv(t,r){var i=r,o=0;do{var u=i.nextSibling;if(t.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"||i==="/&"){if(o===0){t.removeChild(u),Os(r);return}o--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")o++;else if(i==="html")jo(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,jo(i);for(var h=i.firstChild;h;){var y=h.nextSibling,C=h.nodeName;h[cr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||i.removeChild(h),h=y}}else i==="body"&&jo(t.ownerDocument.body);i=u}while(i);Os(r)}function kv(t,r){var i=t;t=0;do{var o=i.nextSibling;if(i.nodeType===1?r?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(r?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=o}while(i)}function gh(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var i=r;switch(r=r.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":gh(i),nr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function xy(t,r,i,o){for(;t.nodeType===1;){var u=i;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cr])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence")||h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=An(t.nextSibling),t===null)break}return null}function yy(t,r,i){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=An(t.nextSibling),t===null))return null;return t}function Dv(t,r){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=An(t.nextSibling),t===null))return null;return t}function vh(t){return t.data==="$?"||t.data==="$~"}function _h(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function by(t,r){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=r;else if(t.data!=="$?"||i.readyState!=="loading")r();else{var o=function(){r(),i.removeEventListener("DOMContentLoaded",o)};i.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function An(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return t}var xh=null;function Ov(t){t=t.nextSibling;for(var r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(r===0)return An(t.nextSibling);r--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||r++}t=t.nextSibling}return null}function Fv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(r===0)return t;r--}else i!=="/$"&&i!=="/&"||r++}t=t.previousSibling}return null}function zv(t,r,i){switch(r=gc(i),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function jo(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);nr(t)}var Rn=new Map,Bv=new Set;function vc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ii=G.d;G.d={f:Sy,r:My,D:Ey,C:wy,L:Ty,m:Cy,X:Ry,S:Ay,M:Ny};function Sy(){var t=Ii.f(),r=lc();return t||r}function My(t){var r=Ne(t);r!==null&&r.tag===5&&r.type==="form"?ng(r):Ii.r(t)}var Us=typeof document>"u"?null:document;function Gv(t,r,i){var o=Us;if(o&&typeof r=="string"&&r){var u=Ut(r);u='link[rel="'+t+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),Bv.has(u)||(Bv.add(u),t={rel:t,crossOrigin:i,href:r},o.querySelector(u)===null&&(r=o.createElement("link"),jr(r,"link",t),bt(r),o.head.appendChild(r)))}}function Ey(t){Ii.D(t),Gv("dns-prefetch",t,null)}function wy(t,r){Ii.C(t,r),Gv("preconnect",t,r)}function Ty(t,r,i){Ii.L(t,r,i);var o=Us;if(o&&t&&r){var u='link[rel="preload"][as="'+Ut(r)+'"]';r==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+Ut(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+Ut(i.imageSizes)+'"]')):u+='[href="'+Ut(t)+'"]';var h=u;switch(r){case"style":h=ks(t);break;case"script":h=Ds(t)}Rn.has(h)||(t=_({rel:"preload",href:r==="image"&&i&&i.imageSrcSet?void 0:t,as:r},i),Rn.set(h,t),o.querySelector(u)!==null||r==="style"&&o.querySelector(Wo(h))||r==="script"&&o.querySelector(Xo(h))||(r=o.createElement("link"),jr(r,"link",t),bt(r),o.head.appendChild(r)))}}function Cy(t,r){Ii.m(t,r);var i=Us;if(i&&t){var o=r&&typeof r.as=="string"?r.as:"script",u='link[rel="modulepreload"][as="'+Ut(o)+'"][href="'+Ut(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ds(t)}if(!Rn.has(h)&&(t=_({rel:"modulepreload",href:t},r),Rn.set(h,t),i.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Xo(h)))return}o=i.createElement("link"),jr(o,"link",t),bt(o),i.head.appendChild(o)}}}function Ay(t,r,i){Ii.S(t,r,i);var o=Us;if(o&&t){var u=pr(o).hoistableStyles,h=ks(t);r=r||"default";var y=u.get(h);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Wo(h)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":r},i),(i=Rn.get(h))&&yh(t,i);var B=y=o.createElement("link");bt(B),jr(B,"link",t),B._p=new Promise(function(se,ve){B.onload=se,B.onerror=ve}),B.addEventListener("load",function(){C.loading|=1}),B.addEventListener("error",function(){C.loading|=2}),C.loading|=4,_c(y,r,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(h,y)}}}function Ry(t,r){Ii.X(t,r);var i=Us;if(i&&t){var o=pr(i).hoistableScripts,u=Ds(t),h=o.get(u);h||(h=i.querySelector(Xo(u)),h||(t=_({src:t,async:!0},r),(r=Rn.get(u))&&bh(t,r),h=i.createElement("script"),bt(h),jr(h,"link",t),i.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Ny(t,r){Ii.M(t,r);var i=Us;if(i&&t){var o=pr(i).hoistableScripts,u=Ds(t),h=o.get(u);h||(h=i.querySelector(Xo(u)),h||(t=_({src:t,async:!0,type:"module"},r),(r=Rn.get(u))&&bh(t,r),h=i.createElement("script"),bt(h),jr(h,"link",t),i.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Vv(t,r,i,o){var u=(u=te.current)?vc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(r=ks(i.href),i=pr(u).hoistableStyles,o=i.get(r),o||(o={type:"style",instance:null,count:0,state:null},i.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ks(i.href);var h=pr(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(Wo(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Rn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Rn.set(t,i),h||Py(u,t,i,y.state))),r&&o===null)throw Error(a(528,""));return y}if(r&&o!==null)throw Error(a(529,""));return null;case"script":return r=i.async,i=i.src,typeof i=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ds(i),i=pr(u).hoistableScripts,o=i.get(r),o||(o={type:"script",instance:null,count:0,state:null},i.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ks(t){return'href="'+Ut(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function Hv(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Py(t,r,i,o){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=t.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),jr(r,"link",i),bt(r),t.head.appendChild(r))}function Ds(t){return'[src="'+Ut(t)+'"]'}function Xo(t){return"script[async]"+t}function jv(t,r,i){if(r.count++,r.instance===null)switch(r.type){case"style":var o=t.querySelector('style[data-href~="'+Ut(i.href)+'"]');if(o)return r.instance=o,bt(o),o;var u=_({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),bt(o),jr(o,"style",u),_c(o,i.precedence,t),r.instance=o;case"stylesheet":u=ks(i.href);var h=t.querySelector(Wo(u));if(h)return r.state.loading|=4,r.instance=h,bt(h),h;o=Hv(i),(u=Rn.get(u))&&yh(o,u),h=(t.ownerDocument||t).createElement("link"),bt(h);var y=h;return y._p=new Promise(function(C,B){y.onload=C,y.onerror=B}),jr(h,"link",o),r.state.loading|=4,_c(h,i.precedence,t),r.instance=h;case"script":return h=Ds(i.src),(u=t.querySelector(Xo(h)))?(r.instance=u,bt(u),u):(o=i,(u=Rn.get(h))&&(o=_({},i),bh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),bt(u),jr(u,"link",o),t.head.appendChild(u),r.instance=u);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,_c(o,i.precedence,t));return r.instance}function _c(t,r,i){for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===r)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(r=i.nodeType===9?i.head:i,r.insertBefore(t,r.firstChild))}function yh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function bh(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var xc=null;function Wv(t,r,i){if(xc===null){var o=new Map,u=xc=new Map;u.set(i,o)}else u=xc,o=u.get(i),o||(o=new Map,u.set(i,o));if(o.has(t))return o;for(o.set(t,null),i=i.getElementsByTagName(t),u=0;u<i.length;u++){var h=i[u];if(!(h[cr]||h[De]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(r)||"";y=t+y;var C=o.get(y);C?C.push(h):o.set(y,[h])}}return o}function Xv(t,r,i){t=t.ownerDocument||t,t.head.insertBefore(i,r==="title"?t.querySelector("head > title"):null)}function Ly(t,r,i){if(i===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(t=r.disabled,typeof r.precedence=="string"&&t==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function qv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Iy(t,r,i,o){if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=ks(o.href),h=r.querySelector(Wo(u));if(h){r=h._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(t.count++,t=yc.bind(t),r.then(t,t)),i.state.loading|=4,i.instance=h,bt(h);return}h=r.ownerDocument||r,o=Hv(o),(u=Rn.get(u))&&yh(o,u),h=h.createElement("link"),bt(h);var y=h;y._p=new Promise(function(C,B){y.onload=C,y.onerror=B}),jr(h,"link",o),i.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=yc.bind(t),r.addEventListener("load",i),r.addEventListener("error",i))}}var Sh=0;function Uy(t,r){return t.stylesheets&&t.count===0&&Sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var o=setTimeout(function(){if(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+r);0<t.imgBytes&&Sh===0&&(Sh=62500*py());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Sh?50:800)+r);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bc=null;function Sc(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bc=new Map,r.forEach(ky,t),bc=null,yc.call(t))}function ky(t,r){if(!(r.state.loading&4)){var i=bc.get(t);if(i)var o=i.get(null);else{i=new Map,bc.set(t,i);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(i.set(y.dataset.precedence,y),o=y)}o&&i.set(null,o)}u=r.instance,y=u.getAttribute("data-precedence"),h=i.get(y)||o,h===o&&i.set(null,u),i.set(y,u),this.count++,o=yc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),r.state.loading|=4}}var qo={$$typeof:z,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Dy(t,r,i,o,u,h,y,C,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ze(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ze(0),this.hiddenUpdates=Ze(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Yv(t,r,i,o,u,h,y,C,B,se,ve,Se){return t=new Dy(t,r,i,y,B,se,ve,Se,C),r=1,h===!0&&(r|=24),h=pn(3,null,null,r),t.current=h,h.stateNode=t,r=td(),r.refCount++,t.pooledCache=r,r.refCount++,h.memoizedState={element:o,isDehydrated:i,cache:r},ad(h),t}function Kv(t){return t?(t=fs,t):fs}function $v(t,r,i,o,u,h){u=Kv(u),o.context===null?o.context=u:o.pendingContext=u,o=na(r),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=ia(t,o,r),i!==null&&(sn(i,t,r),wo(i,t,r))}function Zv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<r?i:r}}function Mh(t,r){Zv(t,r),(t=t.alternate)&&Zv(t,r)}function Qv(t){if(t.tag===13||t.tag===31){var r=Ua(t,67108864);r!==null&&sn(r,t,67108864),Mh(t,67108864)}}function Jv(t){if(t.tag===13||t.tag===31){var r=xn();r=fi(r);var i=Ua(t,r);i!==null&&sn(i,t,r),Mh(t,r)}}var Mc=!0;function Oy(t,r,i,o){var u=O.T;O.T=null;var h=G.p;try{G.p=2,Eh(t,r,i,o)}finally{G.p=h,O.T=u}}function Fy(t,r,i,o){var u=O.T;O.T=null;var h=G.p;try{G.p=8,Eh(t,r,i,o)}finally{G.p=h,O.T=u}}function Eh(t,r,i,o){if(Mc){var u=wh(o);if(u===null)uh(t,r,o,Ec,i),t0(t,o);else if(By(u,t,r,i,o))o.stopPropagation();else if(t0(t,o),r&4&&-1<zy.indexOf(t)){for(;u!==null;){var h=Ne(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=pe(h.pendingLanes);if(y!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var B=1<<31-ze(y);C.entanglements[1]|=B,y&=~B}ti(h),(Ht&6)===0&&(sc=kt()+500,Go(0))}}break;case 31:case 13:C=Ua(h,2),C!==null&&sn(C,h,2),lc(),Mh(h,2)}if(h=wh(o),h===null&&uh(t,r,o,Ec,i),h===u)break;u=h}u!==null&&o.stopPropagation()}else uh(t,r,o,null,i)}}function wh(t){return t=Cu(t),Th(t)}var Ec=null;function Th(t){if(Ec=null,t=st(t),t!==null){var r=c(t);if(r===null)t=null;else{var i=r.tag;if(i===13){if(t=d(r),t!==null)return t;t=null}else if(i===31){if(t=p(r),t!==null)return t;t=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Ec=t,null}function e0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case P:return 2;case M:return 8;case $:case ne:return 32;case ue:return 268435456;default:return 32}default:return 32}}var Ch=!1,ma=null,ga=null,va=null,Yo=new Map,Ko=new Map,_a=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(t,r){switch(t){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Yo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(r.pointerId)}}function $o(t,r,i,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:i,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Ne(r),r!==null&&Qv(r)),t):(t.eventSystemFlags|=o,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function By(t,r,i,o,u){switch(r){case"focusin":return ma=$o(ma,t,r,i,o,u),!0;case"dragenter":return ga=$o(ga,t,r,i,o,u),!0;case"mouseover":return va=$o(va,t,r,i,o,u),!0;case"pointerover":var h=u.pointerId;return Yo.set(h,$o(Yo.get(h)||null,t,r,i,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Ko.set(h,$o(Ko.get(h)||null,t,r,i,o,u)),!0}return!1}function r0(t){var r=st(t.target);if(r!==null){var i=c(r);if(i!==null){if(r=i.tag,r===13){if(r=d(i),r!==null){t.blockedOn=r,gi(t.priority,function(){Jv(i)});return}}else if(r===31){if(r=p(i),r!==null){t.blockedOn=r,gi(t.priority,function(){Jv(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var i=wh(t.nativeEvent);if(i===null){i=t.nativeEvent;var o=new i.constructor(i.type,i);Tu=o,i.target.dispatchEvent(o),Tu=null}else return r=Ne(i),r!==null&&Qv(r),t.blockedOn=i,!1;r.shift()}return!0}function n0(t,r,i){wc(t)&&i.delete(r)}function Gy(){Ch=!1,ma!==null&&wc(ma)&&(ma=null),ga!==null&&wc(ga)&&(ga=null),va!==null&&wc(va)&&(va=null),Yo.forEach(n0),Ko.forEach(n0)}function Tc(t,r){t.blockedOn===r&&(t.blockedOn=null,Ch||(Ch=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Gy)))}var Cc=null;function i0(t){Cc!==t&&(Cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Cc===t&&(Cc=null);for(var r=0;r<t.length;r+=3){var i=t[r],o=t[r+1],u=t[r+2];if(typeof o!="function"){if(Th(o||i)===null)continue;break}var h=Ne(i);h!==null&&(t.splice(r,3),r-=3,wd(h,{pending:!0,data:u,method:i.method,action:o},o,u))}}))}function Os(t){function r(B){return Tc(B,t)}ma!==null&&Tc(ma,t),ga!==null&&Tc(ga,t),va!==null&&Tc(va,t),Yo.forEach(r),Ko.forEach(r);for(var i=0;i<_a.length;i++){var o=_a[i];o.blockedOn===t&&(o.blockedOn=null)}for(;0<_a.length&&(i=_a[0],i.blockedOn===null);)r0(i),i.blockedOn===null&&_a.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(o=0;o<i.length;o+=3){var u=i[o],h=i[o+1],y=u[Ee]||null;if(typeof h=="function")y||i0(i);else if(y){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Ee]||null)C=y.formAction;else if(Th(u)!==null)continue}else C=y.action;typeof C=="function"?i[o+1]=C:(i.splice(o,3),o-=3),i0(i)}}}function a0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function r(){u!==null&&(u(),u=null),o||setTimeout(i,20)}function i(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(i,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),u!==null&&(u(),u=null)}}}function Ah(t){this._internalRoot=t}Ac.prototype.render=Ah.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var i=r.current,o=xn();$v(i,o,t,r,null,null)},Ac.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;$v(t.current,2,null,t,null,null),lc(),r[et]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var r=mi();t={blockedOn:null,target:t,priority:r};for(var i=0;i<_a.length&&r!==0&&r<_a[i].priority;i++);_a.splice(i,0,t),i===0&&r0(t)}};var s0=e.version;if(s0!=="19.2.8")throw Error(a(527,s0,"19.2.8"));G.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=f(r),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Vy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{W=Rc.inject(Vy),Ce=Rc}catch{}}return Qo.createRoot=function(t,r){if(!l(t))throw Error(a(299));var i=!1,o="",u=fg,h=pg,y=mg;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(h=r.onCaughtError),r.onRecoverableError!==void 0&&(y=r.onRecoverableError)),r=Yv(t,1,!1,null,null,i,o,null,u,h,y,a0),t[et]=r.current,ch(t),new Ah(r)},Qo.hydrateRoot=function(t,r,i){if(!l(t))throw Error(a(299));var o=!1,u="",h=fg,y=pg,C=mg,B=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(y=i.onCaughtError),i.onRecoverableError!==void 0&&(C=i.onRecoverableError),i.formState!==void 0&&(B=i.formState)),r=Yv(t,1,!0,r,i??null,o,u,B,h,y,C,a0),r.context=Kv(null),i=r.current,o=xn(),o=fi(o),u=na(o),u.callback=null,ia(i,u,o),i=o,r.current.lanes=i,Ge(r,i),ti(r),t[et]=r.current,ch(t),new Ac(r)},Qo.version="19.2.8",Qo}var y0;function Qy(){if(y0)return Rh.exports;y0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rh.exports=Zy(),Rh.exports}var Jy=Qy(),b0="popstate";function S0(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function eb(s={}){function e(a,l){let c=l.state?.masked,{pathname:d,search:p,hash:m}=c||a.location;return _f("",{pathname:d,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function n(a,l){return typeof l=="string"?l:hl(l)}return rb(e,n,null,s)}function xr(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function di(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tb(){return Math.random().toString(36).substring(2,10)}function M0(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function _f(s,e,n=null,a,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?ao(e):e,state:n,key:e&&e.key||a||tb(),unstable_mask:l}}function hl({pathname:s="/",search:e="",hash:n=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function ao(s){let e={};if(s){let n=s.indexOf("#");n>=0&&(e.hash=s.substring(n),s=s.substring(0,n));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function rb(s,e,n,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,d=l.history,p="POP",m=null,f=g();f==null&&(f=0,d.replaceState({...d.state,idx:f},""));function g(){return(d.state||{idx:null}).idx}function _(){p="POP";let x=g(),b=x==null?null:x-f;f=x,m&&m({action:p,location:R.location,delta:b})}function v(x,b){p="PUSH";let L=S0(x)?x:_f(R.location,x,b);f=g()+1;let z=M0(L,f),N=R.createHref(L.unstable_mask||L);try{d.pushState(z,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(N)}c&&m&&m({action:p,location:R.location,delta:1})}function S(x,b){p="REPLACE";let L=S0(x)?x:_f(R.location,x,b);f=g();let z=M0(L,f),N=R.createHref(L.unstable_mask||L);d.replaceState(z,"",N),c&&m&&m({action:p,location:R.location,delta:0})}function w(x){return nb(x)}let R={get action(){return p},get location(){return s(l,d)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(b0,_),m=x,()=>{l.removeEventListener(b0,_),m=null}},createHref(x){return e(l,x)},createURL:w,encodeLocation(x){let b=w(x);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:v,replace:S,go(x){return d.go(x)}};return R}function nb(s,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),xr(n,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:hl(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function L_(s,e,n="/"){return ib(s,e,n,!1)}function ib(s,e,n,a){let l=typeof e=="string"?ao(e):e,c=ji(l.pathname||"/",n);if(c==null)return null;let d=I_(s);ab(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let f=gb(c);p=pb(d[m],f,a)}return p}function I_(s,e=[],n=[],a="",l=!1){let c=(d,p,m=l,f)=>{let g={relativePath:f===void 0?d.path||"":f,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;xr(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let _=li([a,g.relativePath]),v=n.concat(g);d.children&&d.children.length>0&&(xr(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),I_(d.children,e,v,_,m)),!(d.path==null&&!d.index)&&e.push({path:_,score:hb(_,d.index),routesMeta:v})};return s.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))c(d,p);else for(let m of U_(d.path))c(d,p,!0,m)}),e}function U_(s){let e=s.split("/");if(e.length===0)return[];let[n,...a]=e,l=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let d=U_(a.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function ab(s){s.sort((e,n)=>e.score!==n.score?n.score-e.score:fb(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var sb=/^:[\w-]+$/,ob=3,lb=2,cb=1,ub=10,db=-2,E0=s=>s==="*";function hb(s,e){let n=s.split("/"),a=n.length;return n.some(E0)&&(a+=db),e&&(a+=lb),n.filter(l=>!E0(l)).reduce((l,c)=>l+(sb.test(c)?ob:c===""?cb:ub),a)}function fb(s,e){return s.length===e.length&&s.slice(0,-1).every((n,a)=>n===e[a])?s[s.length-1]-e[e.length-1]:0}function pb(s,e,n=!1){let{routesMeta:a}=s,l={},c="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],f=p===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",_=hu({path:m.relativePath,caseSensitive:m.caseSensitive,end:f},g),v=m.route;if(!_&&f&&n&&!a[a.length-1].route.index&&(_=hu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),d.push({params:l,pathname:li([c,_.pathname]),pathnameBase:yb(li([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=li([c,_.pathnameBase]))}return d}function hu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,a]=mb(s.path,s.caseSensitive,s.end),l=e.match(n);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:a.reduce((m,{paramName:f,isOptional:g},_)=>{if(f==="*"){let S=p[_]||"";d=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const v=p[_];return g&&!v?m[f]=void 0:m[f]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:s}}function mb(s,e=!1,n=!0){di(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p,m,f)=>{if(a.push({paramName:d,isOptional:p!=null}),p){let g=f.charAt(m+c.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function gb(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return di(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ji(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=s.charAt(n);return a&&a!=="/"?null:s.slice(n)||"/"}var vb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function _b(s,e="/"){let{pathname:n,search:a="",hash:l=""}=typeof s=="string"?ao(s):s,c;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?c=w0(n.substring(1),"/"):c=w0(n,e)):c=e,{pathname:c,search:bb(a),hash:Sb(l)}}function w0(s,e){let n=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ph(s,e,n,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xb(s){return s.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function k_(s){let e=xb(s);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function fp(s,e,n,a=!1){let l;typeof s=="string"?l=ao(s):(l={...s},xr(!l.pathname||!l.pathname.includes("?"),Ph("?","pathname","search",l)),xr(!l.pathname||!l.pathname.includes("#"),Ph("#","pathname","hash",l)),xr(!l.search||!l.search.includes("#"),Ph("#","search","hash",l)));let c=s===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=n;else{let _=e.length-1;if(!a&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}p=_>=0?e[_]:"/"}let m=_b(l,p),f=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(f||g)&&(m.pathname+="/"),m}var li=s=>s.join("/").replace(/\/\/+/g,"/"),yb=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),bb=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Sb=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Mb=class{constructor(s,e,n,a=!1){this.status=s,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Eb(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function wb(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var D_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function O_(s,e){let n=s;if(typeof n!="string"||!vb.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,l=!1;if(D_)try{let c=new URL(window.location.href),d=n.startsWith("//")?new URL(c.protocol+n):new URL(n),p=ji(d.pathname,e);d.origin===c.origin&&p!=null?n=p+d.search+d.hash:l=!0}catch{di(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:l,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var F_=["POST","PUT","PATCH","DELETE"];new Set(F_);var Tb=["GET",...F_];new Set(Tb);var so=me.createContext(null);so.displayName="DataRouter";var xu=me.createContext(null);xu.displayName="DataRouterState";var Cb=me.createContext(!1),z_=me.createContext({isTransitioning:!1});z_.displayName="ViewTransition";var Ab=me.createContext(new Map);Ab.displayName="Fetchers";var Rb=me.createContext(null);Rb.displayName="Await";var Dn=me.createContext(null);Dn.displayName="Navigation";var ml=me.createContext(null);ml.displayName="Location";var Yi=me.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var pp=me.createContext(null);pp.displayName="RouteError";var B_="REACT_ROUTER_ERROR",Nb="REDIRECT",Pb="ROUTE_ERROR_RESPONSE";function Lb(s){if(s.startsWith(`${B_}:${Nb}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Ib(s){if(s.startsWith(`${B_}:${Pb}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Mb(e.status,e.statusText,e.data)}catch{}}function Ub(s,{relative:e}={}){xr(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=me.useContext(Dn),{hash:l,pathname:c,search:d}=vl(s,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:li([n,c])),a.createHref({pathname:p,search:d,hash:l})}function gl(){return me.useContext(ml)!=null}function Ki(){return xr(gl(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(ml).location}var G_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function V_(s){me.useContext(Dn).static||me.useLayoutEffect(s)}function H_(){let{isDataRoute:s}=me.useContext(Yi);return s?qb():kb()}function kb(){xr(gl(),"useNavigate() may be used only in the context of a <Router> component.");let s=me.useContext(so),{basename:e,navigator:n}=me.useContext(Dn),{matches:a}=me.useContext(Yi),{pathname:l}=Ki(),c=JSON.stringify(k_(a)),d=me.useRef(!1);return V_(()=>{d.current=!0}),me.useCallback((p,m={})=>{if(di(d.current,G_),!d.current)return;if(typeof p=="number"){n.go(p);return}let f=fp(p,JSON.parse(c),l,m.relative==="path");s==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:li([e,f.pathname])),(m.replace?n.replace:n.push)(f,m.state,m)},[e,n,c,l,s])}me.createContext(null);function vl(s,{relative:e}={}){let{matches:n}=me.useContext(Yi),{pathname:a}=Ki(),l=JSON.stringify(k_(n));return me.useMemo(()=>fp(s,JSON.parse(l),a,e==="path"),[s,l,a,e])}function Db(s,e){return j_(s,e)}function j_(s,e,n){xr(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=me.useContext(Dn),{matches:l}=me.useContext(Yi),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",f=c&&c.route;{let x=f&&f.path||"";X_(p,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let g=Ki(),_;if(e){let x=typeof e=="string"?ao(e):e;xr(m==="/"||x.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),_=x}else _=g;let v=_.pathname||"/",S=v;if(m!=="/"){let x=m.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=L_(s,{pathname:S});di(f||w!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),di(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=Gb(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},d,x.params),pathname:li([m,a.encodeLocation?a.encodeLocation(x.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:li([m,a.encodeLocation?a.encodeLocation(x.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),l,n);return e&&R?me.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,..._},navigationType:"POP"}},R):R}function Ob(){let s=Xb(),e=Eb(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:c},"ErrorBoundary")," or"," ",me.createElement("code",{style:c},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),n?me.createElement("pre",{style:l},n):null,d)}var Fb=me.createElement(Ob,null),W_=class extends me.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const n=Ib(s.digest);n&&(s=n)}let e=s!==void 0?me.createElement(Yi.Provider,{value:this.props.routeContext},me.createElement(pp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?me.createElement(zb,{error:s},e):e}};W_.contextType=Cb;var Lh=new WeakMap;function zb({children:s,error:e}){let{basename:n}=me.useContext(Dn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=Lb(e.digest);if(a){let l=Lh.get(e);if(l)throw l;let c=O_(a.location,n);if(D_&&!Lh.get(e))if(c.isExternal||a.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:a.replace}));throw Lh.set(e,d),d}return me.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return s}function Bb({routeContext:s,match:e,children:n}){let a=me.useContext(so);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(Yi.Provider,{value:s},n)}function Gb(s,e=[],n){let a=n?.state;if(s==null){if(!a)return null;if(a.errors)s=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)s=a.matches;else return null}let l=s,c=a?.errors;if(c!=null){let g=l.findIndex(_=>_.route.id&&c?.[_.route.id]!==void 0);xr(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let d=!1,p=-1;if(n&&a){d=a.renderFallback;for(let g=0;g<l.length;g++){let _=l[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:v,errors:S}=a,w=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||w){n.isStatic&&(d=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=n?.onError,f=a&&m?(g,_)=>{m(g,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:wb(a.matches),errorInfo:_})}:void 0;return l.reduceRight((g,_,v)=>{let S,w=!1,R=null,x=null;a&&(S=c&&_.route.id?c[_.route.id]:void 0,R=_.route.errorElement||Fb,d&&(p<0&&v===0?(X_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):p===v&&(w=!0,x=_.route.hydrateFallbackElement||null)));let b=e.concat(l.slice(0,v+1)),L=()=>{let z;return S?z=R:w?z=x:_.route.Component?z=me.createElement(_.route.Component,null):_.route.element?z=_.route.element:z=g,me.createElement(Bb,{match:_,routeContext:{outlet:g,matches:b,isDataRoute:a!=null},children:z})};return a&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?me.createElement(W_,{location:a.location,revalidation:a.revalidation,component:R,error:S,children:L(),routeContext:{outlet:null,matches:b,isDataRoute:!0},onError:f}):L()},null)}function mp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vb(s){let e=me.useContext(so);return xr(e,mp(s)),e}function Hb(s){let e=me.useContext(xu);return xr(e,mp(s)),e}function jb(s){let e=me.useContext(Yi);return xr(e,mp(s)),e}function gp(s){let e=jb(s),n=e.matches[e.matches.length-1];return xr(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function Wb(){return gp("useRouteId")}function Xb(){let s=me.useContext(pp),e=Hb("useRouteError"),n=gp("useRouteError");return s!==void 0?s:e.errors?.[n]}function qb(){let{router:s}=Vb("useNavigate"),e=gp("useNavigate"),n=me.useRef(!1);return V_(()=>{n.current=!0}),me.useCallback(async(a,l={})=>{di(n.current,G_),n.current&&(typeof a=="number"?await s.navigate(a):await s.navigate(a,{fromRouteId:e,...l}))},[s,e])}var T0={};function X_(s,e,n){!e&&!T0[s]&&(T0[s]=!0,di(!1,n))}me.memo(Yb);function Yb({routes:s,future:e,state:n,isStatic:a,onError:l}){return j_(s,void 0,{state:n,isStatic:a,onError:l})}function ll(s){xr(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Kb({basename:s="/",children:e=null,location:n,navigationType:a="POP",navigator:l,static:c=!1,unstable_useTransitions:d}){xr(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=me.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:d,future:{}}),[p,l,c,d]);typeof n=="string"&&(n=ao(n));let{pathname:f="/",search:g="",hash:_="",state:v=null,key:S="default",unstable_mask:w}=n,R=me.useMemo(()=>{let x=ji(f,p);return x==null?null:{location:{pathname:x,search:g,hash:_,state:v,key:S,unstable_mask:w},navigationType:a}},[p,f,g,_,v,S,a,w]);return di(R!=null,`<Router basename="${p}"> is not able to match the URL "${f}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:me.createElement(Dn.Provider,{value:m},me.createElement(ml.Provider,{children:e,value:R}))}function $b({children:s,location:e}){return Db(xf(s),e)}function xf(s,e=[]){let n=[];return me.Children.forEach(s,(a,l)=>{if(!me.isValidElement(a))return;let c=[...e,l];if(a.type===me.Fragment){n.push.apply(n,xf(a.props.children,c));return}xr(a.type===ll,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xr(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=xf(a.props.children,c)),n.push(d)}),n}var iu="get",au="application/x-www-form-urlencoded";function yu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Zb(s){return yu(s)&&s.tagName.toLowerCase()==="button"}function Qb(s){return yu(s)&&s.tagName.toLowerCase()==="form"}function Jb(s){return yu(s)&&s.tagName.toLowerCase()==="input"}function eS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function tS(s,e){return s.button===0&&(!e||e==="_self")&&!eS(s)}var Nc=null;function rS(){if(Nc===null)try{new FormData(document.createElement("form"),0),Nc=!1}catch{Nc=!0}return Nc}var nS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ih(s){return s!=null&&!nS.has(s)?(di(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${au}"`),null):s}function iS(s,e){let n,a,l,c,d;if(Qb(s)){let p=s.getAttribute("action");a=p?ji(p,e):null,n=s.getAttribute("method")||iu,l=Ih(s.getAttribute("enctype"))||au,c=new FormData(s)}else if(Zb(s)||Jb(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(a=m?ji(m,e):null,n=s.getAttribute("formmethod")||p.getAttribute("method")||iu,l=Ih(s.getAttribute("formenctype"))||Ih(p.getAttribute("enctype"))||au,c=new FormData(p,s),!rS()){let{name:f,type:g,value:_}=s;if(g==="image"){let v=f?`${f}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else f&&c.append(f,_)}}else{if(yu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=iu,a=null,l=au,d=s}return c&&l==="text/plain"&&(d=c,c=void 0),{action:a,method:n.toLowerCase(),encType:l,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function aS(s,e,n,a){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return n?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${a}`:l.pathname=`${l.pathname}.${a}`:l.pathname==="/"?l.pathname=`_root.${a}`:e&&ji(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${a}`,l}async function sS(s,e){if(s.id in e)return e[s.id];try{let n=await import(s.module);return e[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function oS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function lS(s,e,n){let a=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await sS(c,n);return d.links?d.links():[]}return[]}));return hS(a.flat(1).filter(oS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function C0(s,e,n,a,l,c){let d=(m,f)=>n[f]?m.route.id!==n[f].route.id:!0,p=(m,f)=>n[f].pathname!==m.pathname||n[f].route.path?.endsWith("*")&&n[f].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,f)=>d(m,f)||p(m,f)):c==="data"?e.filter((m,f)=>{let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(d(m,f)||p(m,f))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function cS(s,e,{includeHydrateFallback:n}={}){return uS(s.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function uS(s){return[...new Set(s)]}function dS(s){let e={},n=Object.keys(s).sort();for(let a of n)e[a]=s[a];return e}function hS(s,e){let n=new Set;return new Set(e),s.reduce((a,l)=>{let c=JSON.stringify(dS(l));return n.has(c)||(n.add(c),a.push({key:c,link:l})),a},[])}function q_(){let s=me.useContext(so);return vp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function fS(){let s=me.useContext(xu);return vp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var _p=me.createContext(void 0);_p.displayName="FrameworkContext";function Y_(){let s=me.useContext(_p);return vp(s,"You must render this element inside a <HydratedRouter> element"),s}function pS(s,e){let n=me.useContext(_p),[a,l]=me.useState(!1),[c,d]=me.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:f,onMouseLeave:g,onTouchStart:_}=e,v=me.useRef(null);me.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let R=b=>{b.forEach(L=>{d(L.isIntersecting)})},x=new IntersectionObserver(R,{threshold:.5});return v.current&&x.observe(v.current),()=>{x.disconnect()}}},[s]),me.useEffect(()=>{if(a){let R=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(R)}}},[a]);let S=()=>{l(!0)},w=()=>{l(!1),d(!1)};return n?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Jo(p,S),onBlur:Jo(m,w),onMouseEnter:Jo(f,S),onMouseLeave:Jo(g,w),onTouchStart:Jo(_,S)}]:[!1,v,{}]}function Jo(s,e){return n=>{s&&s(n),n.defaultPrevented||e(n)}}function mS({page:s,...e}){let{router:n}=q_(),a=me.useMemo(()=>L_(n.routes,s,n.basename),[n.routes,s,n.basename]);return a?me.createElement(vS,{page:s,matches:a,...e}):null}function gS(s){let{manifest:e,routeModules:n}=Y_(),[a,l]=me.useState([]);return me.useEffect(()=>{let c=!1;return lS(s,e,n).then(d=>{c||l(d)}),()=>{c=!0}},[s,e,n]),a}function vS({page:s,matches:e,...n}){let a=Ki(),{future:l,manifest:c,routeModules:d}=Y_(),{basename:p}=q_(),{loaderData:m,matches:f}=fS(),g=me.useMemo(()=>C0(s,e,f,c,a,"data"),[s,e,f,c,a]),_=me.useMemo(()=>C0(s,e,f,c,a,"assets"),[s,e,f,c,a]),v=me.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let R=new Set,x=!1;if(e.forEach(L=>{let z=c.routes[L.route.id];!z||!z.hasLoader||(!g.some(N=>N.route.id===L.route.id)&&L.route.id in m&&d[L.route.id]?.shouldRevalidate||z.hasClientLoader?x=!0:R.add(L.route.id))}),R.size===0)return[];let b=aS(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return x&&R.size>0&&b.searchParams.set("_routes",e.filter(L=>R.has(L.route.id)).map(L=>L.route.id).join(",")),[b.pathname+b.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,a,c,g,e,s,d]),S=me.useMemo(()=>cS(_,c),[_,c]),w=gS(_);return me.createElement(me.Fragment,null,v.map(R=>me.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...n})),S.map(R=>me.createElement("link",{key:R,rel:"modulepreload",href:R,...n})),w.map(({key:R,link:x})=>me.createElement("link",{key:R,nonce:n.nonce,...x,crossOrigin:x.crossOrigin??n.crossOrigin})))}function _S(...s){return e=>{s.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var xS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xS&&(window.__reactRouterVersion="7.13.1")}catch{}function yS({basename:s,children:e,unstable_useTransitions:n,window:a}){let l=me.useRef();l.current==null&&(l.current=eb({window:a,v5Compat:!0}));let c=l.current,[d,p]=me.useState({action:c.action,location:c.location}),m=me.useCallback(f=>{n===!1?p(f):me.startTransition(()=>p(f))},[n]);return me.useLayoutEffect(()=>c.listen(m),[c,m]),me.createElement(Kb,{basename:s,children:e,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:n})}var K_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hr=me.forwardRef(function({onClick:s,discover:e="render",prefetch:n="none",relative:a,reloadDocument:l,replace:c,unstable_mask:d,state:p,target:m,to:f,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},w){let{basename:R,navigator:x,unstable_useTransitions:b}=me.useContext(Dn),L=typeof f=="string"&&K_.test(f),z=O_(f,R);f=z.to;let N=Ub(f,{relative:a}),F=Ki(),U=null;if(d){let he=fp(d,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);R!=="/"&&(he.pathname=he.pathname==="/"?R:li([R,he.pathname])),U=x.createHref(he)}let[D,E,k]=pS(n,S),K=ES(f,{replace:c,unstable_mask:d,state:p,target:m,preventScrollReset:g,relative:a,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:b});function V(he){s&&s(he),he.defaultPrevented||K(he)}let q=!(z.isExternal||l),ge=me.createElement("a",{...S,...k,href:(q?U:void 0)||z.absoluteURL||N,onClick:q?V:s,ref:_S(w,E),target:m,"data-discover":!L&&e==="render"?"true":void 0});return D&&!L?me.createElement(me.Fragment,null,ge,me.createElement(mS,{page:N})):ge});hr.displayName="Link";var bS=me.forwardRef(function({"aria-current":s="page",caseSensitive:e=!1,className:n="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...m},f){let g=vl(c,{relative:m.relative}),_=Ki(),v=me.useContext(xu),{navigator:S,basename:w}=me.useContext(Dn),R=v!=null&&RS(g)&&d===!0,x=S.encodeLocation?S.encodeLocation(g).pathname:g.pathname,b=_.pathname,L=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;e||(b=b.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&w&&(L=ji(L,w)||L);const z=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=b===x||!a&&b.startsWith(x)&&b.charAt(z)==="/",F=L!=null&&(L===x||!a&&L.startsWith(x)&&L.charAt(x.length)==="/"),U={isActive:N,isPending:F,isTransitioning:R},D=N?s:void 0,E;typeof n=="function"?E=n(U):E=[n,N?"active":null,F?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(U):l;return me.createElement(hr,{...m,"aria-current":D,className:E,ref:f,style:k,to:c,viewTransition:d},typeof p=="function"?p(U):p)});bS.displayName="NavLink";var SS=me.forwardRef(({discover:s="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:l,state:c,method:d=iu,action:p,onSubmit:m,relative:f,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},w)=>{let{unstable_useTransitions:R}=me.useContext(Dn),x=CS(),b=AS(p,{relative:f}),L=d.toLowerCase()==="get"?"get":"post",z=typeof p=="string"&&K_.test(p),N=F=>{if(m&&m(F),F.defaultPrevented)return;F.preventDefault();let U=F.nativeEvent.submitter,D=U?.getAttribute("formmethod")||d,E=()=>x(U||F.currentTarget,{fetcherKey:e,method:D,navigate:n,replace:l,state:c,relative:f,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});R&&n!==!1?me.startTransition(()=>E()):E()};return me.createElement("form",{ref:w,method:L,action:b,onSubmit:a?m:N,...S,"data-discover":!z&&s==="render"?"true":void 0})});SS.displayName="Form";function MS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $_(s){let e=me.useContext(so);return xr(e,MS(s)),e}function ES(s,{target:e,replace:n,unstable_mask:a,state:l,preventScrollReset:c,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:f}={}){let g=H_(),_=Ki(),v=vl(s,{relative:d});return me.useCallback(S=>{if(tS(S,e)){S.preventDefault();let w=n!==void 0?n:hl(_)===hl(v),R=()=>g(s,{replace:w,unstable_mask:a,state:l,preventScrollReset:c,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:m});f?me.startTransition(()=>R()):R()}},[_,g,v,n,a,l,e,s,c,d,p,m,f])}var wS=0,TS=()=>`__${String(++wS)}__`;function CS(){let{router:s}=$_("useSubmit"),{basename:e}=me.useContext(Dn),n=Wb(),a=s.fetch,l=s.navigate;return me.useCallback(async(c,d={})=>{let{action:p,method:m,encType:f,formData:g,body:_}=iS(c,e);if(d.navigate===!1){let v=d.fetcherKey||TS();await a(v,n,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:g,body:_,formMethod:d.method||m,formEncType:d.encType||f,flushSync:d.flushSync})}else await l(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:g,body:_,formMethod:d.method||m,formEncType:d.encType||f,replace:d.replace,state:d.state,fromRouteId:n,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,l,e,n])}function AS(s,{relative:e}={}){let{basename:n}=me.useContext(Dn),a=me.useContext(Yi);xr(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...vl(s||".",{relative:e})},d=Ki();if(s==null){c.search=d.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(f=>f==="")){p.delete("index"),m.filter(g=>g).forEach(g=>p.append("index",g));let f=p.toString();c.search=f?`?${f}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:li([n,c.pathname])),hl(c)}function RS(s,{relative:e}={}){let n=me.useContext(z_);xr(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=$_("useViewTransitionState"),l=vl(s,{relative:e});if(!n.isTransitioning)return!1;let c=ji(n.currentLocation.pathname,a)||n.currentLocation.pathname,d=ji(n.nextLocation.pathname,a)||n.nextLocation.pathname;return hu(l.pathname,d)!=null||hu(l.pathname,c)!=null}const xp="185",NS=0,A0=1,PS=2,su=1,LS=2,cl=3,Aa=0,ln=1,zi=2,Gi=0,Qs=1,yf=2,R0=3,N0=4,IS=5,Ja=100,US=101,kS=102,DS=103,OS=104,FS=200,zS=201,BS=202,GS=203,bf=204,Sf=205,VS=206,HS=207,jS=208,WS=209,XS=210,qS=211,YS=212,KS=213,$S=214,Mf=0,Ef=1,wf=2,to=3,Tf=4,Cf=5,Af=6,Rf=7,Z_=0,ZS=1,QS=2,ci=0,Q_=1,J_=2,ex=3,tx=4,rx=5,nx=6,ix=7,ax=300,ns=301,ro=302,Uh=303,kh=304,bu=306,Nf=1e3,Bi=1001,Pf=1002,Wr=1003,JS=1004,Pc=1005,$r=1006,Dh=1007,ts=1008,kn=1009,sx=1010,ox=1011,fl=1012,yp=1013,hi=1014,si=1015,Wi=1016,bp=1017,Sp=1018,pl=1020,lx=35902,cx=35899,ux=1021,dx=1022,Yn=1023,Xi=1026,rs=1027,hx=1028,Mp=1029,is=1030,Ep=1031,wp=1033,ou=33776,lu=33777,cu=33778,uu=33779,Lf=35840,If=35841,Uf=35842,kf=35843,Df=36196,Of=37492,Ff=37496,zf=37488,Bf=37489,fu=37490,Gf=37491,Vf=37808,Hf=37809,jf=37810,Wf=37811,Xf=37812,qf=37813,Yf=37814,Kf=37815,$f=37816,Zf=37817,Qf=37818,Jf=37819,ep=37820,tp=37821,rp=36492,np=36494,ip=36495,ap=36283,sp=36284,pu=36285,op=36286,eM=3200,P0=0,tM=1,Ta="",In="srgb",mu="srgb-linear",gu="linear",Kt="srgb",Fs=7680,L0=519,rM=512,nM=513,iM=514,Tp=515,aM=516,sM=517,Cp=518,oM=519,I0=35044,U0="300 es",oi=2e3,vu=2001;function lM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _u(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cM(){const s=_u("canvas");return s.style.display="block",s}const k0={};function D0(...s){const e="THREE."+s.shift();console.log(e,...s)}function fx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ht(...s){s=fx(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Ot(...s){s=fx(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Js(...s){const e=s.join(" ");e in k0||(k0[e]=!0,ht(...s))}function uM(s,e,n){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const dM={[Mf]:Ef,[wf]:Af,[Tf]:Rf,[to]:Cf,[Ef]:Mf,[Af]:wf,[Rf]:Tf,[Cf]:to};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Yr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,lp=180/Math.PI;function _l(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Yr[s&255]+Yr[s>>8&255]+Yr[s>>16&255]+Yr[s>>24&255]+"-"+Yr[e&255]+Yr[e>>8&255]+"-"+Yr[e>>16&15|64]+Yr[e>>24&255]+"-"+Yr[n&63|128]+Yr[n>>8&255]+"-"+Yr[n>>16&255]+Yr[n>>24&255]+Yr[a&255]+Yr[a>>8&255]+Yr[a>>16&255]+Yr[a>>24&255]).toLowerCase()}function Lt(s,e,n){return Math.max(e,Math.min(n,s))}function hM(s,e){return(s%e+e)%e}function Fh(s,e,n){return(1-n)*s+n*e}function el(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const px=class{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*a-d*l+e.x,this.y=c*l+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};px.prototype.isVector2=!0;let $t=px;class oo{constructor(e=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=l}static slerpFlat(e,n,a,l,c,d,p){let m=a[l+0],f=a[l+1],g=a[l+2],_=a[l+3],v=c[d+0],S=c[d+1],w=c[d+2],R=c[d+3];if(_!==R||m!==v||f!==S||g!==w){let x=m*v+f*S+g*w+_*R;x<0&&(v=-v,S=-S,w=-w,R=-R,x=-x);let b=1-p;if(x<.9995){const L=Math.acos(x),z=Math.sin(L);b=Math.sin(b*L)/z,p=Math.sin(p*L)/z,m=m*b+v*p,f=f*b+S*p,g=g*b+w*p,_=_*b+R*p}else{m=m*b+v*p,f=f*b+S*p,g=g*b+w*p,_=_*b+R*p;const L=1/Math.sqrt(m*m+f*f+g*g+_*_);m*=L,f*=L,g*=L,_*=L}}e[n]=m,e[n+1]=f,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,l,c,d){const p=a[l],m=a[l+1],f=a[l+2],g=a[l+3],_=c[d],v=c[d+1],S=c[d+2],w=c[d+3];return e[n]=p*w+g*_+m*S-f*v,e[n+1]=m*w+g*v+f*_-p*S,e[n+2]=f*w+g*S+p*v-m*_,e[n+3]=g*w-p*_-m*v-f*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,l){return this._x=e,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,f=p(a/2),g=p(l/2),_=p(c/2),v=m(a/2),S=m(l/2),w=m(c/2);switch(d){case"XYZ":this._x=v*g*_+f*S*w,this._y=f*S*_-v*g*w,this._z=f*g*w+v*S*_,this._w=f*g*_-v*S*w;break;case"YXZ":this._x=v*g*_+f*S*w,this._y=f*S*_-v*g*w,this._z=f*g*w-v*S*_,this._w=f*g*_+v*S*w;break;case"ZXY":this._x=v*g*_-f*S*w,this._y=f*S*_+v*g*w,this._z=f*g*w+v*S*_,this._w=f*g*_-v*S*w;break;case"ZYX":this._x=v*g*_-f*S*w,this._y=f*S*_+v*g*w,this._z=f*g*w-v*S*_,this._w=f*g*_+v*S*w;break;case"YZX":this._x=v*g*_+f*S*w,this._y=f*S*_+v*g*w,this._z=f*g*w-v*S*_,this._w=f*g*_-v*S*w;break;case"XZY":this._x=v*g*_-f*S*w,this._y=f*S*_-v*g*w,this._z=f*g*w+v*S*_,this._w=f*g*_+v*S*w;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],l=n[4],c=n[8],d=n[1],p=n[5],m=n[9],f=n[2],g=n[6],_=n[10],v=a+p+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-f)*S,this._z=(d-l)*S}else if(a>p&&a>_){const S=2*Math.sqrt(1+a-p-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+f)/S}else if(p>_){const S=2*Math.sqrt(1+p-a-_);this._w=(c-f)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-a-p);this._w=(d-l)/S,this._x=(c+f)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,l=e._y,c=e._z,d=e._w,p=n._x,m=n._y,f=n._z,g=n._w;return this._x=a*g+d*p+l*f-c*m,this._y=l*g+d*m+c*p-a*f,this._z=c*g+d*f+a*m-l*p,this._w=d*g-a*p-l*m-c*f,this._onChangeCallback(),this}slerp(e,n){let a=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(a=-a,l=-l,c=-c,d=-d,p=-p);let m=1-n;if(p<.9995){const f=Math.acos(p),g=Math.sin(f);m=Math.sin(m*f)/g,n=Math.sin(n*f)/g,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+d*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+d*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mx=class{constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(O0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=e.elements,d=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*d,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*d,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*d,this}applyQuaternion(e){const n=this.x,a=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,f=2*(d*l-p*a),g=2*(p*n-c*l),_=2*(c*a-d*n);return this.x=n+m*f+d*_-p*g,this.y=a+m*g+p*f-c*_,this.z=l+m*_+c*g-d*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this.z=Lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this.z=Lt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,l=e.y,c=e.z,d=n.x,p=n.y,m=n.z;return this.x=l*m-c*p,this.y=c*d-a*m,this.z=a*p-l*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return zh.copy(this).projectOnVector(e),this.sub(zh)}reflect(e){return this.sub(zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return n*n+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const l=Math.sin(n)*e;return this.x=l*Math.sin(a),this.y=Math.cos(n)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mx.prototype.isVector3=!0;let ce=mx;const zh=new ce,O0=new oo,gx=class{constructor(e,n,a,l,c,d,p,m,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,d,p,m,f)}set(e,n,a,l,c,d,p,m,f){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=d,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,d=a[0],p=a[3],m=a[6],f=a[1],g=a[4],_=a[7],v=a[2],S=a[5],w=a[8],R=l[0],x=l[3],b=l[6],L=l[1],z=l[4],N=l[7],F=l[2],U=l[5],D=l[8];return c[0]=d*R+p*L+m*F,c[3]=d*x+p*z+m*U,c[6]=d*b+p*N+m*D,c[1]=f*R+g*L+_*F,c[4]=f*x+g*z+_*U,c[7]=f*b+g*N+_*D,c[2]=v*R+S*L+w*F,c[5]=v*x+S*z+w*U,c[8]=v*b+S*N+w*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],g=e[8];return n*d*g-n*p*f-a*c*g+a*p*m+l*c*f-l*d*m}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],g=e[8],_=g*d-p*f,v=p*m-g*c,S=f*c-d*m,w=n*_+a*v+l*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=_*R,e[1]=(l*f-g*a)*R,e[2]=(p*a-l*d)*R,e[3]=v*R,e[4]=(g*n-l*m)*R,e[5]=(l*c-p*n)*R,e[6]=S*R,e[7]=(a*m-f*n)*R,e[8]=(d*n-a*c)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,l,c,d,p){const m=Math.cos(c),f=Math.sin(c);return this.set(a*m,a*f,-a*(m*d+f*p)+d+e,-l*f,l*m,-l*(-f*d+m*p)+p+n,0,0,1),this}scale(e,n){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gx.prototype.isMatrix3=!0;let _t=gx;const Bh=new _t,F0=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const s={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Kt&&(l.r=Vi(l.r),l.g=Vi(l.g),l.b=Vi(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Kt&&(l.r=eo(l.r),l.g=eo(l.g),l.b=eo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ta?gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[mu]:{primaries:e,whitePoint:a,transfer:gu,toXYZ:F0,fromXYZ:z0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:a,transfer:Kt,toXYZ:F0,fromXYZ:z0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}const Pt=fM();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class pM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{zs===void 0&&(zs=_u("canvas")),zs.width=e.width,zs.height=e.height;const l=zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=zs}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_u("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Vi(c[d]/255)*255;return a.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Vi(n[a]/255)*255):n[a]=Vi(n[a]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mM=0;class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=_l(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Gh(l[d].image)):c.push(Gh(l[d]))}else c=Gh(l);a.url=c}return n||(e.images[this.uuid]=a),a}}function Gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let gM=0;const Vh=new ce;class Jr extends ss{constructor(e=Jr.DEFAULT_IMAGE,n=Jr.DEFAULT_MAPPING,a=Bi,l=Bi,c=$r,d=ts,p=Yn,m=kn,f=Jr.DEFAULT_ANISOTROPY,g=Ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=_l(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=f,this.format=p,this.internalFormat=null,this.type=m,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jr.DEFAULT_IMAGE=null;Jr.DEFAULT_MAPPING=ax;Jr.DEFAULT_ANISOTROPY=1;const vx=class{constructor(e=0,n=0,a=0,l=1){this.x=e,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,l){return this.x=e,this.y=n,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*a+d[8]*l+d[12]*c,this.y=d[1]*n+d[5]*a+d[9]*l+d[13]*c,this.z=d[2]*n+d[6]*a+d[10]*l+d[14]*c,this.w=d[3]*n+d[7]*a+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,l,c;const d=e.elements,p=d[0],m=d[4],f=d[8],g=d[1],_=d[5],v=d[9],S=d[2],w=d[6],R=d[10];if(Math.abs(m-g)<.01&&Math.abs(f-S)<.01&&Math.abs(v-w)<.01){if(Math.abs(m+g)<.1&&Math.abs(f+S)<.1&&Math.abs(v+w)<.1&&Math.abs(p+_+R-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(p+1)/2,L=(_+1)/2,z=(R+1)/2,N=(m+g)/4,F=(f+S)/4,U=(v+w)/4;return b>L&&b>z?b<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(b),l=N/a,c=F/a):L>z?L<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),a=N/l,c=U/l):z<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),a=F/c,l=U/c),this.set(a,l,c,n),this}let x=Math.sqrt((w-v)*(w-v)+(f-S)*(f-S)+(g-m)*(g-m));return Math.abs(x)<.001&&(x=1),this.x=(w-v)/x,this.y=(f-S)/x,this.z=(g-m)/x,this.w=Math.acos((p+_+R-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this.z=Lt(this.z,e.z,n.z),this.w=Lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this.z=Lt(this.z,e,n),this.w=Lt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vx.prototype.isVector4=!0;let Pr=vx;class vM extends ss{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$r,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Pr(0,0,e,n),this.scissorTest=!1,this.viewport=new Pr(0,0,e,n),this.textures=[];const l={width:e,height:n,depth:a.depth},c=new Jr(l),d=a.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:$r,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new Ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends vM{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class _x extends Jr{constructor(e=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=Wr,this.minFilter=Wr,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _M extends Jr{constructor(e=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:l},this.magFilter=Wr,this.minFilter=Wr,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xx=class yx{constructor(e,n,a,l,c,d,p,m,f,g,_,v,S,w,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,l,c,d,p,m,f,g,_,v,S,w,R,x)}set(e,n,a,l,c,d,p,m,f,g,_,v,S,w,R,x){const b=this.elements;return b[0]=e,b[4]=n,b[8]=a,b[12]=l,b[1]=c,b[5]=d,b[9]=p,b[13]=m,b[2]=f,b[6]=g,b[10]=_,b[14]=v,b[3]=S,b[7]=w,b[11]=R,b[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yx().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,a=e.elements,l=1/Bs.setFromMatrixColumn(e,0).length(),c=1/Bs.setFromMatrixColumn(e,1).length(),d=1/Bs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*d,n[9]=a[9]*d,n[10]=a[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,l=e.y,c=e.z,d=Math.cos(a),p=Math.sin(a),m=Math.cos(l),f=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=d*g,S=d*_,w=p*g,R=p*_;n[0]=m*g,n[4]=-m*_,n[8]=f,n[1]=S+w*f,n[5]=v-R*f,n[9]=-p*m,n[2]=R-v*f,n[6]=w+S*f,n[10]=d*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,w=f*g,R=f*_;n[0]=v+R*p,n[4]=w*p-S,n[8]=d*f,n[1]=d*_,n[5]=d*g,n[9]=-p,n[2]=S*p-w,n[6]=R+v*p,n[10]=d*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,w=f*g,R=f*_;n[0]=v-R*p,n[4]=-d*_,n[8]=w+S*p,n[1]=S+w*p,n[5]=d*g,n[9]=R-v*p,n[2]=-d*f,n[6]=p,n[10]=d*m}else if(e.order==="ZYX"){const v=d*g,S=d*_,w=p*g,R=p*_;n[0]=m*g,n[4]=w*f-S,n[8]=v*f+R,n[1]=m*_,n[5]=R*f+v,n[9]=S*f-w,n[2]=-f,n[6]=p*m,n[10]=d*m}else if(e.order==="YZX"){const v=d*m,S=d*f,w=p*m,R=p*f;n[0]=m*g,n[4]=R-v*_,n[8]=w*_+S,n[1]=_,n[5]=d*g,n[9]=-p*g,n[2]=-f*g,n[6]=S*_+w,n[10]=v-R*_}else if(e.order==="XZY"){const v=d*m,S=d*f,w=p*m,R=p*f;n[0]=m*g,n[4]=-_,n[8]=f*g,n[1]=v*_+R,n[5]=d*g,n[9]=S*_-w,n[2]=w*_-S,n[6]=p*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,yM)}lookAt(e,n,a){const l=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ya.crossVectors(a,yn),ya.lengthSq()===0&&(Math.abs(a.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ya.crossVectors(a,yn)),ya.normalize(),Lc.crossVectors(yn,ya),l[0]=ya.x,l[4]=Lc.x,l[8]=yn.x,l[1]=ya.y,l[5]=Lc.y,l[9]=yn.y,l[2]=ya.z,l[6]=Lc.z,l[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,l=n.elements,c=this.elements,d=a[0],p=a[4],m=a[8],f=a[12],g=a[1],_=a[5],v=a[9],S=a[13],w=a[2],R=a[6],x=a[10],b=a[14],L=a[3],z=a[7],N=a[11],F=a[15],U=l[0],D=l[4],E=l[8],k=l[12],K=l[1],V=l[5],q=l[9],ge=l[13],he=l[2],ee=l[6],O=l[10],G=l[14],ae=l[3],_e=l[7],Me=l[11],I=l[15];return c[0]=d*U+p*K+m*he+f*ae,c[4]=d*D+p*V+m*ee+f*_e,c[8]=d*E+p*q+m*O+f*Me,c[12]=d*k+p*ge+m*G+f*I,c[1]=g*U+_*K+v*he+S*ae,c[5]=g*D+_*V+v*ee+S*_e,c[9]=g*E+_*q+v*O+S*Me,c[13]=g*k+_*ge+v*G+S*I,c[2]=w*U+R*K+x*he+b*ae,c[6]=w*D+R*V+x*ee+b*_e,c[10]=w*E+R*q+x*O+b*Me,c[14]=w*k+R*ge+x*G+b*I,c[3]=L*U+z*K+N*he+F*ae,c[7]=L*D+z*V+N*ee+F*_e,c[11]=L*E+z*q+N*O+F*Me,c[15]=L*k+z*ge+N*G+F*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],f=e[13],g=e[2],_=e[6],v=e[10],S=e[14],w=e[3],R=e[7],x=e[11],b=e[15],L=m*S-f*v,z=p*S-f*_,N=p*v-m*_,F=d*S-f*g,U=d*v-m*g,D=d*_-p*g;return n*(R*L-x*z+b*N)-a*(w*L-x*F+b*U)+l*(w*z-R*F+b*D)-c*(w*N-R*U+x*D)}determinantAffine(){const e=this.elements,n=e[0],a=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],f=e[6],g=e[10];return n*(d*g-p*f)-a*(c*g-p*m)+l*(c*f-d*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],f=e[7],g=e[8],_=e[9],v=e[10],S=e[11],w=e[12],R=e[13],x=e[14],b=e[15],L=n*p-a*d,z=n*m-l*d,N=n*f-c*d,F=a*m-l*p,U=a*f-c*p,D=l*f-c*m,E=g*R-_*w,k=g*x-v*w,K=g*b-S*w,V=_*x-v*R,q=_*b-S*R,ge=v*b-S*x,he=L*ge-z*q+N*V+F*K-U*k+D*E;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/he;return e[0]=(p*ge-m*q+f*V)*ee,e[1]=(l*q-a*ge-c*V)*ee,e[2]=(R*D-x*U+b*F)*ee,e[3]=(v*U-_*D-S*F)*ee,e[4]=(m*K-d*ge-f*k)*ee,e[5]=(n*ge-l*K+c*k)*ee,e[6]=(x*N-w*D-b*z)*ee,e[7]=(g*D-v*N+S*z)*ee,e[8]=(d*q-p*K+f*E)*ee,e[9]=(a*K-n*q-c*E)*ee,e[10]=(w*U-R*N+b*L)*ee,e[11]=(_*N-g*U-S*L)*ee,e[12]=(p*k-d*V-m*E)*ee,e[13]=(n*V-a*k+l*E)*ee,e[14]=(R*z-w*F-x*L)*ee,e[15]=(g*F-_*z+v*L)*ee,this}scale(e){const n=this.elements,a=e.x,l=e.y,c=e.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,d=e.x,p=e.y,m=e.z,f=c*d,g=c*p;return this.set(f*d+a,f*p-l*m,f*m+l*p,0,f*p+l*m,g*p+a,g*m-l*d,0,f*m-l*p,g*m+l*d,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,l,c,d){return this.set(1,a,c,0,e,1,d,0,n,l,1,0,0,0,0,1),this}compose(e,n,a){const l=this.elements,c=n._x,d=n._y,p=n._z,m=n._w,f=c+c,g=d+d,_=p+p,v=c*f,S=c*g,w=c*_,R=d*g,x=d*_,b=p*_,L=m*f,z=m*g,N=m*_,F=a.x,U=a.y,D=a.z;return l[0]=(1-(R+b))*F,l[1]=(S+N)*F,l[2]=(w-z)*F,l[3]=0,l[4]=(S-N)*U,l[5]=(1-(v+b))*U,l[6]=(x+L)*U,l[7]=0,l[8]=(w+z)*D,l[9]=(x-L)*D,l[10]=(1-(v+R))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let d=Bs.set(l[0],l[1],l[2]).length();const p=Bs.set(l[4],l[5],l[6]).length(),m=Bs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),jn.copy(this);const f=1/d,g=1/p,_=1/m;return jn.elements[0]*=f,jn.elements[1]*=f,jn.elements[2]*=f,jn.elements[4]*=g,jn.elements[5]*=g,jn.elements[6]*=g,jn.elements[8]*=_,jn.elements[9]*=_,jn.elements[10]*=_,n.setFromRotationMatrix(jn),a.x=d,a.y=p,a.z=m,this}makePerspective(e,n,a,l,c,d,p=oi,m=!1){const f=this.elements,g=2*c/(n-e),_=2*c/(a-l),v=(n+e)/(n-e),S=(a+l)/(a-l);let w,R;if(m)w=c/(d-c),R=d*c/(d-c);else if(p===oi)w=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===vu)w=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return f[0]=g,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=_,f[9]=S,f[13]=0,f[2]=0,f[6]=0,f[10]=w,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,n,a,l,c,d,p=oi,m=!1){const f=this.elements,g=2/(n-e),_=2/(a-l),v=-(n+e)/(n-e),S=-(a+l)/(a-l);let w,R;if(m)w=1/(d-c),R=d/(d-c);else if(p===oi)w=-2/(d-c),R=-(d+c)/(d-c);else if(p===vu)w=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return f[0]=g,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=_,f[9]=0,f[13]=S,f[2]=0,f[6]=0,f[10]=w,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}};xx.prototype.isMatrix4=!0;let Ur=xx;const Bs=new ce,jn=new Ur,xM=new ce(0,0,0),yM=new ce(1,1,1),ya=new ce,Lc=new ce,yn=new ce,B0=new Ur,G0=new oo;class as{constructor(e=0,n=0,a=0,l=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,l=this._order){return this._x=e,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],f=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,f)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,f)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,f));break;case"YZX":this._z=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return G0.setFromEuler(this),this.setFromQuaternion(G0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bM=0;const V0=new ce,Gs=new oo,Ui=new Ur,Ic=new ce,tl=new ce,SM=new ce,MM=new oo,H0=new ce(1,0,0),j0=new ce(0,1,0),W0=new ce(0,0,1),X0={type:"added"},EM={type:"removed"},Vs={type:"childadded",child:null},Hh={type:"childremoved",child:null};class cn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new ce,n=new as,a=new oo,l=new ce(1,1,1);function c(){a.setFromEuler(n,!1)}function d(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ur},normalMatrix:{value:new _t}}),this.matrix=new Ur,this.matrixWorld=new Ur,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,n){return Gs.setFromAxisAngle(e,n),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(j0,e)}rotateZ(e){return this.rotateOnAxis(W0,e)}translateOnAxis(e,n){return V0.copy(e).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(j0,e)}translateZ(e){return this.translateOnAxis(W0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Ic.copy(e):Ic.set(e,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(tl,Ic,this.up):Ui.lookAt(Ic,tl,this.up),this.quaternion.setFromRotationMatrix(Ui),l&&(Ui.extractRotation(l.matrixWorld),Gs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,a)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let f=0,g=m.length;f<g;f++){const _=m[f];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,f=this.material.length;m<f;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(n){const p=d(e.geometries),m=d(e.materials),f=d(e.textures),g=d(e.images),_=d(e.shapes),v=d(e.skeletons),S=d(e.animations),w=d(e.nodes);p.length>0&&(a.geometries=p),m.length>0&&(a.materials=m),f.length>0&&(a.textures=f),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),w.length>0&&(a.nodes=w)}return a.object=l,a;function d(p){const m=[];for(const f in p){const g=p[f];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}cn.DEFAULT_UP=new ce(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uc extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,f=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(f&&e.hand){d=!0;for(const R of e.hand.values()){const x=n.getJointPose(R,a),b=this._getHandJoint(f,R);x!==null&&(b.matrix.fromArray(x.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=x.radius),b.visible=x!==null}const g=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,w=.005;f.inputState.pinching&&v>S+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=S-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=n.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),f!==null&&(f.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Uc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const Sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ba={h:0,s:0,l:0},kc={h:0,s:0,l:0};function Wh(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Vt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,l=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Pt.colorSpaceToWorking(this,l),this}setHSL(e,n,a,l=Pt.workingColorSpace){if(e=hM(e,1),n=Lt(n,0,1),a=Lt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,d=2*a-c;this.r=Wh(d,c,e+1/3),this.g=Wh(d,c,e),this.b=Wh(d,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,n=In){function a(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const a=Sx[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Pt.workingToColorSpace(Kr.copy(this),e),Math.round(Lt(Kr.r*255,0,255))*65536+Math.round(Lt(Kr.g*255,0,255))*256+Math.round(Lt(Kr.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Kr.copy(this),n);const a=Kr.r,l=Kr.g,c=Kr.b,d=Math.max(a,l,c),p=Math.min(a,l,c);let m,f;const g=(p+d)/2;if(p===d)m=0,f=0;else{const _=d-p;switch(f=g<=.5?_/(d+p):_/(2-d-p),d){case a:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-a)/_+2;break;case c:m=(a-l)/_+4;break}m/=6}return e.h=m,e.s=f,e.l=g,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Kr.copy(this),n),e.r=Kr.r,e.g=Kr.g,e.b=Kr.b,e}getStyle(e=In){Pt.workingToColorSpace(Kr.copy(this),e);const n=Kr.r,a=Kr.g,l=Kr.b;return e!==In?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,n,a){return this.getHSL(ba),this.setHSL(ba.h+e,ba.s+n,ba.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ba),e.getHSL(kc);const a=Fh(ba.h,kc.h,n),l=Fh(ba.s,kc.s,n),c=Fh(ba.l,kc.l,n);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kr=new Vt;Vt.NAMES=Sx;class TM extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wn=new ce,ki=new ce,Xh=new ce,Di=new ce,Hs=new ce,js=new ce,q0=new ce,qh=new ce,Yh=new ce,Kh=new ce,$h=new Pr,Zh=new Pr,Qh=new Pr;class qn{constructor(e=new ce,n=new ce,a=new ce){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,l){l.subVectors(a,n),Wn.subVectors(e,n),l.cross(Wn);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,n,a,l,c){Wn.subVectors(l,n),ki.subVectors(a,n),Xh.subVectors(e,n);const d=Wn.dot(Wn),p=Wn.dot(ki),m=Wn.dot(Xh),f=ki.dot(ki),g=ki.dot(Xh),_=d*f-p*p;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(f*m-p*g)*v,w=(d*g-p*m)*v;return c.set(1-S-w,w,S)}static containsPoint(e,n,a,l){return this.getBarycoord(e,n,a,l,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,a,l,c,d,p,m){return this.getBarycoord(e,n,a,l,Di)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Di.x),m.addScaledVector(d,Di.y),m.addScaledVector(p,Di.z),m)}static getInterpolatedAttribute(e,n,a,l,c,d){return $h.setScalar(0),Zh.setScalar(0),Qh.setScalar(0),$h.fromBufferAttribute(e,n),Zh.fromBufferAttribute(e,a),Qh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector($h,c.x),d.addScaledVector(Zh,c.y),d.addScaledVector(Qh,c.z),d}static isFrontFacing(e,n,a,l){return Wn.subVectors(a,n),ki.subVectors(e,n),Wn.cross(ki).dot(l)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,l){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,a,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),Wn.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,l,c){return qn.getInterpolation(e,this.a,this.b,this.c,n,a,l,c)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,l=this.b,c=this.c;let d,p;Hs.subVectors(l,a),js.subVectors(c,a),qh.subVectors(e,a);const m=Hs.dot(qh),f=js.dot(qh);if(m<=0&&f<=0)return n.copy(a);Yh.subVectors(e,l);const g=Hs.dot(Yh),_=js.dot(Yh);if(g>=0&&_<=g)return n.copy(l);const v=m*_-g*f;if(v<=0&&m>=0&&g<=0)return d=m/(m-g),n.copy(a).addScaledVector(Hs,d);Kh.subVectors(e,c);const S=Hs.dot(Kh),w=js.dot(Kh);if(w>=0&&S<=w)return n.copy(c);const R=S*f-m*w;if(R<=0&&f>=0&&w<=0)return p=f/(f-w),n.copy(a).addScaledVector(js,p);const x=g*w-S*_;if(x<=0&&_-g>=0&&S-w>=0)return q0.subVectors(c,l),p=(_-g)/(_-g+(S-w)),n.copy(l).addScaledVector(q0,p);const b=1/(x+R+v);return d=R*b,p=v*b,n.copy(a).addScaledVector(Hs,d).addScaledVector(js,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xl{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Xn):Xn.fromBufferAttribute(c,d),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Dc.copy(a.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),Oc.subVectors(this.max,rl),Ws.subVectors(e.a,rl),Xs.subVectors(e.b,rl),qs.subVectors(e.c,rl),Sa.subVectors(Xs,Ws),Ma.subVectors(qs,Xs),qa.subVectors(Ws,qs);let n=[0,-Sa.z,Sa.y,0,-Ma.z,Ma.y,0,-qa.z,qa.y,Sa.z,0,-Sa.x,Ma.z,0,-Ma.x,qa.z,0,-qa.x,-Sa.y,Sa.x,0,-Ma.y,Ma.x,0,-qa.y,qa.x,0];return!Jh(n,Ws,Xs,qs,Oc)||(n=[1,0,0,0,1,0,0,0,1],!Jh(n,Ws,Xs,qs,Oc))?!1:(Fc.crossVectors(Sa,Ma),n=[Fc.x,Fc.y,Fc.z],Jh(n,Ws,Xs,qs,Oc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Xn=new ce,Dc=new xl,Ws=new ce,Xs=new ce,qs=new ce,Sa=new ce,Ma=new ce,qa=new ce,rl=new ce,Oc=new ce,Fc=new ce,Ya=new ce;function Jh(s,e,n,a,l){for(let c=0,d=s.length-3;c<=d;c+=3){Ya.fromArray(s,c);const p=l.x*Math.abs(Ya.x)+l.y*Math.abs(Ya.y)+l.z*Math.abs(Ya.z),m=e.dot(Ya),f=n.dot(Ya),g=a.dot(Ya);if(Math.max(-Math.max(m,f,g),Math.min(m,f,g))>p)return!1}return!0}const Nr=new ce,zc=new $t;let CM=0;class Sn extends ss{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=I0,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=n.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)zc.fromBufferAttribute(this,n),zc.applyMatrix3(e),this.setXY(n,zc.x,zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Nr.fromBufferAttribute(this,n),Nr.applyMatrix3(e),this.setXYZ(n,Nr.x,Nr.y,Nr.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Nr.fromBufferAttribute(this,n),Nr.applyMatrix4(e),this.setXYZ(n,Nr.x,Nr.y,Nr.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Nr.fromBufferAttribute(this,n),Nr.applyNormalMatrix(e),this.setXYZ(n,Nr.x,Nr.y,Nr.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Nr.fromBufferAttribute(this,n),Nr.transformDirection(e),this.setXYZ(n,Nr.x,Nr.y,Nr.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=el(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=on(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=el(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=el(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=el(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=el(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),a=on(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,l){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),a=on(a,this.array),l=on(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,n,a,l,c){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),a=on(a,this.array),l=on(l,this.array),c=on(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==I0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Mx extends Sn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Ex extends Sn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Hi extends Sn{constructor(e,n,a){super(new Float32Array(e),n,a)}}const AM=new xl,nl=new ce,ef=new ce;class Su{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):AM.setFromPoints(e).getCenter(a);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const n=nl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(nl,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(ef)),this.expandByPoint(nl.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RM=0;const Nn=new Ur,tf=new cn,Ys=new ce,bn=new xl,il=new xl,Fr=new ce;class $n extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lM(e)?Ex:Mx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _t().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,a){return Nn.makeTranslation(e,n,a),this.applyMatrix4(Nn),this}scale(e,n,a){return Nn.makeScale(e,n,a),this.applyMatrix4(Nn),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hi(a,3))}else{const a=Math.min(e.length,n.count);for(let l=0;l<a;l++){const c=e[l];n.setXYZ(l,c.x,c.y,c.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];bn.setFromBufferAttribute(c),this.morphTargetsRelative?(Fr.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Fr),Fr.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Fr)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const a=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const p=n[c];il.setFromBufferAttribute(p),this.morphTargetsRelative?(Fr.addVectors(bn.min,il.min),bn.expandByPoint(Fr),Fr.addVectors(bn.max,il.max),bn.expandByPoint(Fr)):(bn.expandByPoint(il.min),bn.expandByPoint(il.max))}bn.getCenter(a);let l=0;for(let c=0,d=e.count;c<d;c++)Fr.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Fr));if(n)for(let c=0,d=n.length;c<d;c++){const p=n[c],m=this.morphTargetsRelative;for(let f=0,g=p.count;f<g;f++)Fr.fromBufferAttribute(p,f),m&&(Ys.fromBufferAttribute(e,f),Fr.add(Ys)),l=Math.max(l,a.distanceToSquared(Fr))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==a.count)&&(d=new Sn(new Float32Array(4*a.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let E=0;E<a.count;E++)p[E]=new ce,m[E]=new ce;const f=new ce,g=new ce,_=new ce,v=new $t,S=new $t,w=new $t,R=new ce,x=new ce;function b(E,k,K){f.fromBufferAttribute(a,E),g.fromBufferAttribute(a,k),_.fromBufferAttribute(a,K),v.fromBufferAttribute(c,E),S.fromBufferAttribute(c,k),w.fromBufferAttribute(c,K),g.sub(f),_.sub(f),S.sub(v),w.sub(v);const V=1/(S.x*w.y-w.x*S.y);isFinite(V)&&(R.copy(g).multiplyScalar(w.y).addScaledVector(_,-S.y).multiplyScalar(V),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-w.x).multiplyScalar(V),p[E].add(R),p[k].add(R),p[K].add(R),m[E].add(x),m[k].add(x),m[K].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let E=0,k=L.length;E<k;++E){const K=L[E],V=K.start,q=K.count;for(let ge=V,he=V+q;ge<he;ge+=3)b(e.getX(ge+0),e.getX(ge+1),e.getX(ge+2))}const z=new ce,N=new ce,F=new ce,U=new ce;function D(E){F.fromBufferAttribute(l,E),U.copy(F);const k=p[E];z.copy(k),z.sub(F.multiplyScalar(F.dot(k))).normalize(),N.crossVectors(U,k);const K=N.dot(m[E])<0?-1:1;d.setXYZW(E,z.x,z.y,z.z,K)}for(let E=0,k=L.length;E<k;++E){const K=L[E],V=K.start,q=K.count;for(let ge=V,he=V+q;ge<he;ge+=3)D(e.getX(ge+0)),D(e.getX(ge+1)),D(e.getX(ge+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const l=new ce,c=new ce,d=new ce,p=new ce,m=new ce,f=new ce,g=new ce,_=new ce;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),R=e.getX(v+1),x=e.getX(v+2);l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,x),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(a,w),m.fromBufferAttribute(a,R),f.fromBufferAttribute(a,x),p.add(g),m.add(g),f.add(g),a.setXYZ(w,p.x,p.y,p.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(x,f.x,f.y,f.z)}else for(let v=0,S=n.count;v<S;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),d.fromBufferAttribute(n,v+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Fr.fromBufferAttribute(e,n),Fr.normalize(),e.setXYZ(n,Fr.x,Fr.y,Fr.z)}toNonIndexed(){function e(p,m){const f=p.array,g=p.itemSize,_=p.normalized,v=new f.constructor(m.length*g);let S=0,w=0;for(let R=0,x=m.length;R<x;R++){p.isInterleavedBufferAttribute?S=m[R]*p.data.stride+p.offset:S=m[R]*g;for(let b=0;b<g;b++)v[w++]=f[S++]}return new Sn(v,g,_)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,a=this.index.array,l=this.attributes;for(const p in l){const m=l[p],f=e(m,a);n.setAttribute(p,f)}const c=this.morphAttributes;for(const p in c){const m=[],f=c[p];for(let g=0,_=f.length;g<_;g++){const v=f[g],S=e(v,a);m.push(S)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const f=d[p];n.addGroup(f.start,f.count,f.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const f in m)m[f]!==void 0&&(e[f]=m[f]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const f=a[m];e.data.attributes[m]=f.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const f=this.morphAttributes[m],g=[];for(let _=0,v=f.length;_<v;_++){const S=f[_];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const f in l){const g=l[f];this.setAttribute(f,g.clone(n))}const c=e.morphAttributes;for(const f in c){const g=[],_=c[f];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let f=0,g=d.length;f<g;f++){const _=d[f];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NM=0;class yl extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=Qs,this.side=Aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Sf,this.blendEquation=Ja,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(a.blending=this.blending),this.side!==Aa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==bf&&(a.blendSrc=this.blendSrc),this.blendDst!==Sf&&(a.blendDst=this.blendDst),this.blendEquation!==Ja&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(n){const c=l(e.textures),d=l(e.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new $t().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new ce,rf=new ce,Bc=new ce,Ea=new ce,nf=new ce,Gc=new ce,af=new ce;class wx{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,a,l){rf.copy(e).add(n).multiplyScalar(.5),Bc.copy(n).sub(e).normalize(),Ea.copy(this.origin).sub(rf);const c=e.distanceTo(n)*.5,d=-this.direction.dot(Bc),p=Ea.dot(this.direction),m=-Ea.dot(Bc),f=Ea.lengthSq(),g=Math.abs(1-d*d);let _,v,S,w;if(g>0)if(_=d*m-p,v=d*p-m,w=c*g,_>=0)if(v>=-w)if(v<=w){const R=1/g;_*=R,v*=R,S=_*(_+d*v+2*p)+v*(d*_+v+2*m)+f}else v=c,_=Math.max(0,-(d*v+p)),S=-_*_+v*(v+2*m)+f;else v=-c,_=Math.max(0,-(d*v+p)),S=-_*_+v*(v+2*m)+f;else v<=-w?(_=Math.max(0,-(-d*c+p)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+f):v<=w?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+f):(_=Math.max(0,-(d*c+p)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+f);else v=d>0?-c:c,_=Math.max(0,-(d*v+p)),S=-_*_+v*(v+2*m)+f;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(rf).addScaledVector(Bc,v),S}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const a=Fi.dot(this.direction),l=Fi.dot(Fi)-a*a,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=a-d,m=a+d;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,l,c,d,p,m;const f=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return f>=0?(a=(e.min.x-v.x)*f,l=(e.max.x-v.x)*f):(a=(e.max.x-v.x)*f,l=(e.min.x-v.x)*f),g>=0?(c=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),a>d||c>l||((c>a||isNaN(a))&&(a=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(p=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),a>m||p>l)||((p>a||a!==a)&&(a=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,a,l,c){nf.subVectors(n,e),Gc.subVectors(a,e),af.crossVectors(nf,Gc);let d=this.direction.dot(af),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ea.subVectors(this.origin,e);const m=p*this.direction.dot(Gc.crossVectors(Ea,Gc));if(m<0)return null;const f=p*this.direction.dot(nf.cross(Ea));if(f<0||m+f>d)return null;const g=-p*Ea.dot(af);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tx extends yl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Y0=new Ur,Ka=new wx,Vc=new Su,K0=new ce,Hc=new ce,jc=new ce,Wc=new ce,sf=new ce,Xc=new ce,$0=new ce,qc=new ce;class qi extends cn{constructor(e=new $n,n=new Tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;n.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Xc.set(0,0,0);for(let m=0,f=c.length;m<f;m++){const g=p[m],_=c[m];g!==0&&(sf.fromBufferAttribute(_,e),d?Xc.addScaledVector(sf,g):Xc.addScaledVector(sf.sub(n),g))}n.add(Xc)}return n}raycast(e,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere),Vc.applyMatrix4(c),Ka.copy(e.ray).recast(e.near),!(Vc.containsPoint(Ka.origin)===!1&&(Ka.intersectSphere(Vc,K0)===null||Ka.origin.distanceToSquared(K0)>(e.far-e.near)**2))&&(Y0.copy(c).invert(),Ka.copy(e.ray).applyMatrix4(Y0),!(a.boundingBox!==null&&Ka.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ka)))}_computeIntersections(e,n,a){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,f=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(d))for(let w=0,R=v.length;w<R;w++){const x=v[w],b=d[x.materialIndex],L=Math.max(x.start,S.start),z=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let N=L,F=z;N<F;N+=3){const U=p.getX(N),D=p.getX(N+1),E=p.getX(N+2);l=Yc(this,b,e,a,f,g,_,U,D,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,n.push(l))}}else{const w=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let x=w,b=R;x<b;x+=3){const L=p.getX(x),z=p.getX(x+1),N=p.getX(x+2);l=Yc(this,d,e,a,f,g,_,L,z,N),l&&(l.faceIndex=Math.floor(x/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,R=v.length;w<R;w++){const x=v[w],b=d[x.materialIndex],L=Math.max(x.start,S.start),z=Math.min(m.count,Math.min(x.start+x.count,S.start+S.count));for(let N=L,F=z;N<F;N+=3){const U=N,D=N+1,E=N+2;l=Yc(this,b,e,a,f,g,_,U,D,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,n.push(l))}}else{const w=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let x=w,b=R;x<b;x+=3){const L=x,z=x+1,N=x+2;l=Yc(this,d,e,a,f,g,_,L,z,N),l&&(l.faceIndex=Math.floor(x/3),n.push(l))}}}}function PM(s,e,n,a,l,c,d,p){let m;if(e.side===ln?m=a.intersectTriangle(d,c,l,!0,p):m=a.intersectTriangle(l,c,d,e.side===Aa,p),m===null)return null;qc.copy(p),qc.applyMatrix4(s.matrixWorld);const f=n.ray.origin.distanceTo(qc);return f<n.near||f>n.far?null:{distance:f,point:qc.clone(),object:s}}function Yc(s,e,n,a,l,c,d,p,m,f){s.getVertexPosition(p,Hc),s.getVertexPosition(m,jc),s.getVertexPosition(f,Wc);const g=PM(s,e,n,a,Hc,jc,Wc,$0);if(g){const _=new ce;qn.getBarycoord($0,Hc,jc,Wc,_),l&&(g.uv=qn.getInterpolatedAttribute(l,p,m,f,_,new $t)),c&&(g.uv1=qn.getInterpolatedAttribute(c,p,m,f,_,new $t)),d&&(g.normal=qn.getInterpolatedAttribute(d,p,m,f,_,new ce),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:f,normal:new ce,materialIndex:0};qn.getNormal(Hc,jc,Wc,v.normal),g.face=v,g.barycoord=_}return g}class LM extends Jr{constructor(e=null,n=1,a=1,l,c,d,p,m,f=Wr,g=Wr,_,v){super(null,d,p,m,f,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new ce,IM=new ce,UM=new _t;class Za{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,l){return this.normal.set(e,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const l=of.subVectors(a,n).cross(IM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){const l=e.delta(of),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(d<0||d>1)?null:n.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||UM.getNormalMatrix(e),l=this.coplanarPoint(of).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new Su,kM=new $t(.5,.5),Kc=new ce;class Cx{constructor(e=new Za,n=new Za,a=new Za,l=new Za,c=new Za,d=new Za){this.planes=[e,n,a,l,c,d]}set(e,n,a,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(n),p[2].copy(a),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=oi,a=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],f=c[3],g=c[4],_=c[5],v=c[6],S=c[7],w=c[8],R=c[9],x=c[10],b=c[11],L=c[12],z=c[13],N=c[14],F=c[15];if(l[0].setComponents(f-d,S-g,b-w,F-L).normalize(),l[1].setComponents(f+d,S+g,b+w,F+L).normalize(),l[2].setComponents(f+p,S+_,b+R,F+z).normalize(),l[3].setComponents(f-p,S-_,b-R,F-z).normalize(),a)l[4].setComponents(m,v,x,N).normalize(),l[5].setComponents(f-m,S-v,b-x,F-N).normalize();else if(l[4].setComponents(f-m,S-v,b-x,F-N).normalize(),n===oi)l[5].setComponents(f+m,S+v,b+x,F+N).normalize();else if(n===vu)l[5].setComponents(m,v,x,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){$a.center.set(0,0,0);const n=kM.distanceTo(e.center);return $a.radius=.7071067811865476+n,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const n=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(Kc.x=l.normal.x>0?e.max.x:e.min.x,Kc.y=l.normal.y>0?e.max.y:e.min.y,Kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DM extends yl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z0=new Ur,cp=new wx,$c=new Su,Zc=new ce;class OM extends cn{constructor(e=new $n,n=new DM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),$c.copy(a.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,e.ray.intersectsSphere($c)===!1)return;Z0.copy(l).invert(),cp.copy(e.ray).applyMatrix4(Z0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,f=a.index,g=a.attributes.position;if(f!==null){const _=Math.max(0,d.start),v=Math.min(f.count,d.start+d.count);for(let S=_,w=v;S<w;S++){const R=f.getX(S);Zc.fromBufferAttribute(g,R),Q0(Zc,R,m,l,e,n,this)}}else{const _=Math.max(0,d.start),v=Math.min(g.count,d.start+d.count);for(let S=_,w=v;S<w;S++)Zc.fromBufferAttribute(g,S),Q0(Zc,S,m,l,e,n,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Q0(s,e,n,a,l,c,d){const p=cp.distanceSqToPoint(s);if(p<n){const m=new ce;cp.closestPointToPoint(s,m),m.applyMatrix4(a);const f=l.ray.origin.distanceTo(m);if(f<l.near||f>l.far)return;c.push({distance:f,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Ax extends Jr{constructor(e=[],n=ns,a,l,c,d,p,m,f,g){super(e,n,a,l,c,d,p,m,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class no extends Jr{constructor(e,n,a=hi,l,c,d,p=Wr,m=Wr,f,g=Xi,_=1){if(g!==Xi&&g!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,l,c,d,p,m,g,a,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FM extends no{constructor(e,n=hi,a=ns,l,c,d=Wr,p=Wr,m,f=Xi){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,a,l,c,d,p,m,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rx extends Jr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bl extends $n{constructor(e=1,n=1,a=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],f=[],g=[],_=[];let v=0,S=0;w("z","y","x",-1,-1,a,n,e,d,c,0),w("z","y","x",1,-1,a,n,-e,d,c,1),w("x","z","y",1,1,e,a,n,l,d,2),w("x","z","y",1,-1,e,a,-n,l,d,3),w("x","y","z",1,-1,e,n,a,l,c,4),w("x","y","z",-1,-1,e,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new Hi(f,3)),this.setAttribute("normal",new Hi(g,3)),this.setAttribute("uv",new Hi(_,2));function w(R,x,b,L,z,N,F,U,D,E,k){const K=N/D,V=F/E,q=N/2,ge=F/2,he=U/2,ee=D+1,O=E+1;let G=0,ae=0;const _e=new ce;for(let Me=0;Me<O;Me++){const I=Me*V-ge;for(let J=0;J<ee;J++){const be=J*K-q;_e[R]=be*L,_e[x]=I*z,_e[b]=he,f.push(_e.x,_e.y,_e.z),_e[R]=0,_e[x]=0,_e[b]=U>0?1:-1,g.push(_e.x,_e.y,_e.z),_.push(J/D),_.push(1-Me/E),G+=1}}for(let Me=0;Me<E;Me++)for(let I=0;I<D;I++){const J=v+I+ee*Me,be=v+I+ee*(Me+1),Ue=v+(I+1)+ee*(Me+1),Le=v+(I+1)+ee*Me;m.push(J,be,Le),m.push(be,Ue,Le),ae+=6}p.addGroup(S,ae,k),S+=ae,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mu extends $n{constructor(e=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:l};const c=e/2,d=n/2,p=Math.floor(a),m=Math.floor(l),f=p+1,g=m+1,_=e/p,v=n/m,S=[],w=[],R=[],x=[];for(let b=0;b<g;b++){const L=b*v-d;for(let z=0;z<f;z++){const N=z*_-c;w.push(N,-L,0),R.push(0,0,1),x.push(z/p),x.push(1-b/m)}}for(let b=0;b<m;b++)for(let L=0;L<p;L++){const z=L+f*b,N=L+f*(b+1),F=L+1+f*(b+1),U=L+1+f*b;S.push(z,N,U),S.push(N,F,U)}this.setIndex(S),this.setAttribute("position",new Hi(w,3)),this.setAttribute("normal",new Hi(R,3)),this.setAttribute("uv",new Hi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}function io(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const l=s[n][a];if(J0(l))l.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=l.clone();else if(Array.isArray(l))if(J0(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[n][a]=c}else e[n][a]=l.slice();else e[n][a]=l}}return e}function Qr(s){const e={};for(let n=0;n<s.length;n++){const a=io(s[n]);for(const l in a)e[l]=a[l]}return e}function J0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function zM(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Nx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const BM={clone:io,merge:Qr};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends yl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?n.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[l]={type:"m4",value:c.toArray()}:n.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const a in e.uniforms){const l=e.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=n[l.value]||null;break;case"c":this.uniforms[a].value=new Vt().setHex(l.value);break;case"v2":this.uniforms[a].value=new $t().fromArray(l.value);break;case"v3":this.uniforms[a].value=new ce().fromArray(l.value);break;case"v4":this.uniforms[a].value=new Pr().fromArray(l.value);break;case"m3":this.uniforms[a].value=new _t().fromArray(l.value);break;case"m4":this.uniforms[a].value=new Ur().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class HM extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM extends yl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WM extends yl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qc=new ce,Jc=new oo,ri=new ce;class Px extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ur,this.projectionMatrix=new Ur,this.projectionMatrixInverse=new Ur,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,Jc,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,Jc,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Qc,Jc,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,Jc,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wa=new ce,e_=new $t,t_=new $t;class Un extends Px{constructor(e=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,n){return this.getViewBounds(e,e_,t_),n.subVectors(t_,e_)}setViewOffset(e,n,a,l,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oh*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,f=d.fullHeight;c+=d.offsetX*l/m,n-=d.offsetY*a/f,l*=d.width/m,a*=d.height/f}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Lx extends Px{constructor(e=-1,n=1,a=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,d=a+e,p=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=f*this.view.offsetX,d=c+f*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ks=-90,$s=1;class XM extends cn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Un(Ks,$s,e,n);l.layers=this.layers,this.add(l);const c=new Un(Ks,$s,e,n);c.layers=this.layers,this.add(c);const d=new Un(Ks,$s,e,n);d.layers=this.layers,this.add(d);const p=new Un(Ks,$s,e,n);p.layers=this.layers,this.add(p);const m=new Un(Ks,$s,e,n);m.layers=this.layers,this.add(m);const f=new Un(Ks,$s,e,n);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,l,c,d,p,m]=n;for(const f of n)this.remove(f);if(e===oi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===vu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of n)this.add(f),f.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,f,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(a,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(a,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=w,a.texture.needsPMREMUpdate=!0}}class qM extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function r_(s,e,n,a){const l=YM(a);switch(n){case ux:return s*e;case hx:return s*e/l.components*l.byteLength;case Mp:return s*e/l.components*l.byteLength;case is:return s*e*2/l.components*l.byteLength;case Ep:return s*e*2/l.components*l.byteLength;case dx:return s*e*3/l.components*l.byteLength;case Yn:return s*e*4/l.components*l.byteLength;case wp:return s*e*4/l.components*l.byteLength;case ou:case lu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cu:case uu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:case kf:return Math.max(s,16)*Math.max(e,8)/4;case Lf:case Uf:return Math.max(s,8)*Math.max(e,8)/2;case Df:case Of:case zf:case Bf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ff:case fu:case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $f:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ep:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rp:case np:case ip:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ap:case sp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pu:case op:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function YM(s){switch(s){case kn:case sx:return{byteLength:1,components:1};case fl:case ox:case Wi:return{byteLength:2,components:1};case bp:case Sp:return{byteLength:2,components:4};case hi:case yp:case si:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function Ix(){let s=null,e=!1,n=null,a=null;function l(c,d){n(c,d),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function KM(s){const e=new WeakMap;function n(p,m){const f=p.array,g=p.usage,_=f.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,f,g),p.onUploadCallback();let S;if(f instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)S=s.HALF_FLOAT;else if(f instanceof Uint16Array)p.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=s.SHORT;else if(f instanceof Uint32Array)S=s.UNSIGNED_INT;else if(f instanceof Int32Array)S=s.INT;else if(f instanceof Int8Array)S=s.BYTE;else if(f instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:p.version,size:_}}function a(p,m,f){const g=m.array,_=m.updateRanges;if(s.bindBuffer(f,p),_.length===0)s.bufferSubData(f,0,g);else{_.sort((S,w)=>S.start-w.start);let v=0;for(let S=1;S<_.length;S++){const w=_[v],R=_[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,w=_.length;S<w;S++){const R=_[S];s.bufferSubData(f,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const f=e.get(p);if(f===void 0)e.set(p,n(p,m));else if(f.version<p.version){if(f.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,p,m),f.version=p.version}}return{get:l,remove:c,update:d}}var $M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
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
#endif`,aE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cE=`#ifdef USE_IRIDESCENCE
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
#endif`,uE=`#ifdef USE_BUMPMAP
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
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xE=`#define PI 3.141592653589793
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
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bE=`vec3 transformedNormal = objectNormal;
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
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,YE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,KE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sw=`#if defined( USE_POINTS_UV )
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
#endif`,ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`#ifdef USE_MORPHTARGETS
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
#endif`,fw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xw=`#ifdef USE_NORMALMAP
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
#endif`,yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ww=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ow=`#ifdef USE_SKINNING
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
#endif`,Fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,Bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,Ww=`#ifdef USE_TRANSMISSION
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
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zw=`uniform sampler2D t2D;
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
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,nT=`#if DEPTH_PACKING == 3200
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
}`,iT=`#define DISTANCE
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
}`,aT=`#define DISTANCE
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#define LAMBERT
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
}`,fT=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,pT=`#define MATCAP
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
}`,mT=`#define MATCAP
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
}`,gT=`#define NORMAL
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
}`,vT=`#define NORMAL
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
}`,_T=`#define PHONG
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
}`,xT=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,yT=`#define STANDARD
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
}`,bT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,ST=`#define TOON
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
}`,MT=`#define TOON
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
}`,ET=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,TT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,AT=`uniform float rotation;
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
}`,RT=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:$M,alphahash_pars_fragment:ZM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:eE,alphatest_pars_fragment:tE,aomap_fragment:rE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:aE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:cE,bumpmap_pars_fragment:uE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:vE,color_vertex:_E,common:xE,cube_uv_reflection_fragment:yE,defaultnormal_vertex:bE,displacementmap_pars_vertex:SE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:wE,colorspace_fragment:TE,colorspace_pars_fragment:CE,envmap_fragment:AE,envmap_common_pars_fragment:RE,envmap_pars_fragment:NE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:VE,envmap_vertex:LE,fog_vertex:IE,fog_pars_vertex:UE,fog_fragment:kE,fog_pars_fragment:DE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:FE,lights_lambert_fragment:zE,lights_lambert_pars_fragment:BE,lights_pars_begin:GE,lights_toon_fragment:HE,lights_toon_pars_fragment:jE,lights_phong_fragment:WE,lights_phong_pars_fragment:XE,lights_physical_fragment:qE,lights_physical_pars_fragment:YE,lights_fragment_begin:KE,lights_fragment_maps:$E,lights_fragment_end:ZE,lightprobes_pars_fragment:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:ew,logdepthbuf_pars_vertex:tw,logdepthbuf_vertex:rw,map_fragment:nw,map_pars_fragment:iw,map_particle_fragment:aw,map_particle_pars_fragment:sw,metalnessmap_fragment:ow,metalnessmap_pars_fragment:lw,morphinstance_vertex:cw,morphcolor_vertex:uw,morphnormal_vertex:dw,morphtarget_pars_vertex:hw,morphtarget_vertex:fw,normal_fragment_begin:pw,normal_fragment_maps:mw,normal_pars_fragment:gw,normal_pars_vertex:vw,normal_vertex:_w,normalmap_pars_fragment:xw,clearcoat_normal_fragment_begin:yw,clearcoat_normal_fragment_maps:bw,clearcoat_pars_fragment:Sw,iridescence_pars_fragment:Mw,opaque_fragment:Ew,packing:ww,premultiplied_alpha_fragment:Tw,project_vertex:Cw,dithering_fragment:Aw,dithering_pars_fragment:Rw,roughnessmap_fragment:Nw,roughnessmap_pars_fragment:Pw,shadowmap_pars_fragment:Lw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Uw,shadowmask_pars_fragment:kw,skinbase_vertex:Dw,skinning_pars_vertex:Ow,skinning_vertex:Fw,skinnormal_vertex:zw,specularmap_fragment:Bw,specularmap_pars_fragment:Gw,tonemapping_fragment:Vw,tonemapping_pars_fragment:Hw,transmission_fragment:jw,transmission_pars_fragment:Ww,uv_pars_fragment:Xw,uv_pars_vertex:qw,uv_vertex:Yw,worldpos_vertex:Kw,background_vert:$w,background_frag:Zw,backgroundCube_vert:Qw,backgroundCube_frag:Jw,cube_vert:eT,cube_frag:tT,depth_vert:rT,depth_frag:nT,distance_vert:iT,distance_frag:aT,equirect_vert:sT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:fT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:vT,meshphong_vert:_T,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:bT,meshtoon_vert:ST,meshtoon_frag:MT,points_vert:ET,points_frag:wT,shadow_vert:TT,shadow_frag:CT,sprite_vert:AT,sprite_frag:RT},Ve={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ai={basic:{uniforms:Qr([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Qr([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Qr([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Qr([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Qr([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Vt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Qr([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Qr([Ve.points,Ve.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Qr([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Qr([Ve.common,Ve.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Qr([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Qr([Ve.sprite,Ve.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Qr([Ve.common,Ve.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Qr([Ve.lights,Ve.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ai.physical={uniforms:Qr([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const eu={r:0,b:0,g:0},NT=new Ur,Ux=new _t;Ux.set(-1,0,0,0,1,0,0,0,1);function PT(s,e,n,a,l,c){const d=new Vt(0);let p=l===!0?0:1,m,f,g=null,_=0,v=null;function S(L){let z=L.isScene===!0?L.background:null;if(z&&z.isTexture){const N=L.backgroundBlurriness>0;z=e.get(z,N)}return z}function w(L){let z=!1;const N=S(L);N===null?x(d,p):N&&N.isColor&&(x(N,1),z=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||z)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(L,z){const N=S(z);N&&(N.isCubeTexture||N.mapping===bu)?(f===void 0&&(f=new qi(new bl(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:io(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(F,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),f.material.uniforms.envMap.value=N,f.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(z.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Ux),f.material.toneMapped=Pt.getTransfer(N.colorSpace)!==Kt,(g!==N||_!==N.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,g=N,_=N.version,v=s.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new qi(new Mu(2,2),new Kn({name:"BackgroundMaterial",uniforms:io(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(N.colorSpace)!==Kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||_!==N.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=N,_=N.version,v=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function x(L,z){L.getRGB(eu,Nx(s)),n.buffers.color.setClear(eu.r,eu.g,eu.b,z,c)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,z=1){d.set(L),p=z,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(d,p)},render:w,addToRenderList:R,dispose:b}}function LT(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,d=!1;function p(V,q,ge,he,ee){let O=!1;const G=_(V,he,ge,q);c!==G&&(c=G,f(c.object)),O=S(V,he,ge,ee),O&&w(V,he,ge,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,N(V,q,ge,he),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return s.createVertexArray()}function f(V){return s.bindVertexArray(V)}function g(V){return s.deleteVertexArray(V)}function _(V,q,ge,he){const ee=he.wireframe===!0;let O=a[q.id];O===void 0&&(O={},a[q.id]=O);const G=V.isInstancedMesh===!0?V.id:0;let ae=O[G];ae===void 0&&(ae={},O[G]=ae);let _e=ae[ge.id];_e===void 0&&(_e={},ae[ge.id]=_e);let Me=_e[ee];return Me===void 0&&(Me=v(m()),_e[ee]=Me),Me}function v(V){const q=[],ge=[],he=[];for(let ee=0;ee<n;ee++)q[ee]=0,ge[ee]=0,he[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ge,attributeDivisors:he,object:V,attributes:{},index:null}}function S(V,q,ge,he){const ee=c.attributes,O=q.attributes;let G=0;const ae=ge.getAttributes();for(const _e in ae)if(ae[_e].location>=0){const Me=ee[_e];let I=O[_e];if(I===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(I=V.instanceColor)),Me===void 0||Me.attribute!==I||I&&Me.data!==I.data)return!0;G++}return c.attributesNum!==G||c.index!==he}function w(V,q,ge,he){const ee={},O=q.attributes;let G=0;const ae=ge.getAttributes();for(const _e in ae)if(ae[_e].location>=0){let Me=O[_e];Me===void 0&&(_e==="instanceMatrix"&&V.instanceMatrix&&(Me=V.instanceMatrix),_e==="instanceColor"&&V.instanceColor&&(Me=V.instanceColor));const I={};I.attribute=Me,Me&&Me.data&&(I.data=Me.data),ee[_e]=I,G++}c.attributes=ee,c.attributesNum=G,c.index=he}function R(){const V=c.newAttributes;for(let q=0,ge=V.length;q<ge;q++)V[q]=0}function x(V){b(V,0)}function b(V,q){const ge=c.newAttributes,he=c.enabledAttributes,ee=c.attributeDivisors;ge[V]=1,he[V]===0&&(s.enableVertexAttribArray(V),he[V]=1),ee[V]!==q&&(s.vertexAttribDivisor(V,q),ee[V]=q)}function L(){const V=c.newAttributes,q=c.enabledAttributes;for(let ge=0,he=q.length;ge<he;ge++)q[ge]!==V[ge]&&(s.disableVertexAttribArray(ge),q[ge]=0)}function z(V,q,ge,he,ee,O,G){G===!0?s.vertexAttribIPointer(V,q,ge,ee,O):s.vertexAttribPointer(V,q,ge,he,ee,O)}function N(V,q,ge,he){R();const ee=he.attributes,O=ge.getAttributes(),G=q.defaultAttributeValues;for(const ae in O){const _e=O[ae];if(_e.location>=0){let Me=ee[ae];if(Me===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(Me=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(Me=V.instanceColor)),Me!==void 0){const I=Me.normalized,J=Me.itemSize,be=e.get(Me);if(be===void 0)continue;const Ue=be.buffer,Le=be.type,te=be.bytesPerElement,ye=Le===s.INT||Le===s.UNSIGNED_INT||Me.gpuType===yp;if(Me.isInterleavedBufferAttribute){const we=Me.data,qe=we.stride,it=Me.offset;if(we.isInstancedInterleavedBuffer){for(let He=0;He<_e.locationSize;He++)b(_e.location+He,we.meshPerAttribute);V.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let He=0;He<_e.locationSize;He++)x(_e.location+He);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let He=0;He<_e.locationSize;He++)z(_e.location+He,J/_e.locationSize,Le,I,qe*te,(it+J/_e.locationSize*He)*te,ye)}else{if(Me.isInstancedBufferAttribute){for(let we=0;we<_e.locationSize;we++)b(_e.location+we,Me.meshPerAttribute);V.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let we=0;we<_e.locationSize;we++)x(_e.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let we=0;we<_e.locationSize;we++)z(_e.location+we,J/_e.locationSize,Le,I,J*te,J/_e.locationSize*we*te,ye)}}else if(G!==void 0){const I=G[ae];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(_e.location,I);break;case 3:s.vertexAttrib3fv(_e.location,I);break;case 4:s.vertexAttrib4fv(_e.location,I);break;default:s.vertexAttrib1fv(_e.location,I)}}}}L()}function F(){k();for(const V in a){const q=a[V];for(const ge in q){const he=q[ge];for(const ee in he){const O=he[ee];for(const G in O)g(O[G].object),delete O[G];delete he[ee]}}delete a[V]}}function U(V){if(a[V.id]===void 0)return;const q=a[V.id];for(const ge in q){const he=q[ge];for(const ee in he){const O=he[ee];for(const G in O)g(O[G].object),delete O[G];delete he[ee]}}delete a[V.id]}function D(V){for(const q in a){const ge=a[q];for(const he in ge){const ee=ge[he];if(ee[V.id]===void 0)continue;const O=ee[V.id];for(const G in O)g(O[G].object),delete O[G];delete ee[V.id]}}}function E(V){for(const q in a){const ge=a[q],he=V.isInstancedMesh===!0?V.id:0,ee=ge[he];if(ee!==void 0){for(const O in ee){const G=ee[O];for(const ae in G)g(G[ae].object),delete G[ae];delete ee[O]}delete ge[he],Object.keys(ge).length===0&&delete a[q]}}}function k(){K(),d=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:k,resetDefaultState:K,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:D,initAttributes:R,enableAttribute:x,disableUnusedAttributes:L}}function IT(s,e,n){let a;function l(m){a=m}function c(m,f){s.drawArrays(a,m,f),n.update(f,a,1)}function d(m,f,g){g!==0&&(s.drawArraysInstanced(a,m,f,g),n.update(f,a,g))}function p(m,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,f,0,g);let _=0;for(let v=0;v<g;v++)_+=f[v];n.update(_,a,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function UT(s,e,n,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(D){return!(D!==Yn&&a.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(D){const E=D===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==kn&&a.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==si&&!E)}function m(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=n.precision!==void 0?n.precision:"highp";const g=m(f);g!==f&&(ht("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:x,maxAttributes:b,maxVertexUniforms:L,maxVaryings:z,maxFragmentUniforms:N,maxSamples:F,samples:U}}function kT(s){const e=this;let n=null,a=0,l=!1,c=!1;const d=new Za,p=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||a!==0||l;return l=v,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const w=_.clippingPlanes,R=_.clipIntersection,x=_.clipShadows,b=s.get(_);if(!l||w===null||w.length===0||c&&!x)c?g(null):f();else{const L=c?0:a,z=L*4;let N=b.clippingState||null;m.value=N,N=g(w,v,z,S);for(let F=0;F!==z;++F)N[F]=n[F];b.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function f(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,v,S,w){const R=_!==null?_.length:0;let x=null;if(R!==0){if(x=m.value,w!==!0||x===null){const b=S+R*4,L=v.matrixWorldInverse;p.getNormalMatrix(L),(x===null||x.length<b)&&(x=new Float32Array(b));for(let z=0,N=S;z!==R;++z,N+=4)d.copy(_[z]).applyMatrix4(L,p),d.normal.toArray(x,N),x[N+3]=d.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Ca=4,n_=[.125,.215,.35,.446,.526,.582],es=20,DT=256,al=new Lx,i_=new Vt;let lf=null,cf=0,uf=0,df=!1;const OT=new ce;class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,l=100,c={}){const{size:d=256,position:p=OT}=c;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=df,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:$r,minFilter:$r,generateMipmaps:!1,type:Wi,format:Yn,colorSpace:mu,depthBuffer:!1},l=s_(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FT(c)),this._blurMaterial=BT(c,e,n),this._ggxMaterial=zT(c,e,n)}return l}_compileMaterial(e){const n=new qi(new $n,e);this._renderer.compile(n,al)}_sceneToCubeUV(e,n,a,l,c){const d=new Un(90,1,n,a),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,_=f.toneMapping;f.getClearColor(i_),f.toneMapping=ci,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(l),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new bl,new Tx({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,S=v.material;let w=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,w=!0):(S.color.copy(i_),w=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(d.up.set(0,p[x],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+m[x],c.y,c.z)):b===1?(d.up.set(0,0,p[x]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+m[x],c.z)):(d.up.set(0,p[x],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+m[x]));const L=this._cubeSize;Zs(l,b*L,x>2?L:0,L,L),f.setRenderTarget(l),w&&f.render(v,d),f.render(e,d)}f.toneMapping=_,f.autoClear=g,e.background=R}_textureToCubeUV(e,n){const a=this._renderer,l=e.mapping===ns||e.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Zs(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(d,al)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[a];p.material=d;const m=d.uniforms,f=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(f*f-g*g),v=0+f*1.25,S=_*v,{_lodMax:w}=this,R=this._sizeLods[a],x=3*R*(a>w-Ca?a-w+Ca:0),b=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=w-n,Zs(c,x,b,3*R,2*R),l.setRenderTarget(c),l.render(p,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=w-a,Zs(e,x,b,3*R,2*R),l.setRenderTarget(e),l.render(p,al)}_blur(e,n,a,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,a,l,"latitudinal",c),this._halfBlur(d,e,a,a,l,"longitudinal",c)}_halfBlur(e,n,a,l,c,d,p){const m=this._renderer,f=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=f;const v=f.uniforms,S=this._sizeLods[a]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*es-1),R=c/w,x=isFinite(c)?1+Math.floor(g*R):es;x>es&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${es}`);const b=[];let L=0;for(let D=0;D<es;++D){const E=D/R,k=Math.exp(-E*E/2);b.push(k),D===0?L+=k:D<x&&(L+=2*k)}for(let D=0;D<b.length;D++)b[D]=b[D]/L;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=b,v.latitudinal.value=d==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:z}=this;v.dTheta.value=w,v.mipInt.value=z-a;const N=this._sizeLods[l],F=3*N*(l>z-Ca?l-z+Ca:0),U=4*(this._cubeSize-N);Zs(n,F,U,3*N,2*N),m.setRenderTarget(n),m.render(_,al)}}function FT(s){const e=[],n=[],a=[];let l=s;const c=s-Ca+1+n_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-Ca?m=n_[d-s+Ca-1]:d===0&&(m=0),n.push(m);const f=1/(p-2),g=-f,_=1+f,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,w=6,R=3,x=2,b=1,L=new Float32Array(R*w*S),z=new Float32Array(x*w*S),N=new Float32Array(b*w*S);for(let U=0;U<S;U++){const D=U%3*2/3-1,E=U>2?0:-1,k=[D,E,0,D+2/3,E,0,D+2/3,E+1,0,D,E,0,D+2/3,E+1,0,D,E+1,0];L.set(k,R*w*U),z.set(v,x*w*U);const K=[U,U,U,U,U,U];N.set(K,b*w*U)}const F=new $n;F.setAttribute("position",new Sn(L,R)),F.setAttribute("uv",new Sn(z,x)),F.setAttribute("faceIndex",new Sn(N,b)),a.push(new qi(F,null)),l>Ca&&l--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function s_(s,e,n){const a=new ui(s,e,n);return a.texture.mapping=bu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zs(s,e,n,a,l){s.viewport.set(e,n,a,l),s.scissor.set(e,n,a,l)}function zT(s,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function BT(s,e,n){const a=new Float32Array(es),l=new ce(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function o_(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function l_(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class kx extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new Ax(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new bl(5,5,5),c=new Kn({name:"CubemapFromEquirect",uniforms:io(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ln,blending:Gi});c.uniforms.tEquirect.value=n;const d=new qi(l,c),p=n.minFilter;return n.minFilter===ts&&(n.minFilter=$r),new XM(1,10,this).update(e,d),n.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,a,l);e.setRenderTarget(c)}}function GT(s){let e=new WeakMap,n=new WeakMap,a=null;function l(v,S=!1){return v==null?null:S?d(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===Uh||S===kh)if(e.has(v)){const w=e.get(v).texture;return p(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const R=new kx(w.height);return R.fromEquirectangularTexture(s,v),e.set(v,R),v.addEventListener("dispose",f),p(R.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const S=v.mapping,w=S===Uh||S===kh,R=S===ns||S===ro;if(w||R){let x=n.get(v);const b=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==b)return a===null&&(a=new a_(s)),x=w?a.fromEquirectangular(v,x):a.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,n.set(v,x),x.texture;if(x!==void 0)return x.texture;{const L=v.image;return w&&L&&L.height>0||R&&L&&m(L)?(a===null&&(a=new a_(s)),x=w?a.fromEquirectangular(v):a.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,n.set(v,x),v.addEventListener("dispose",g),x.texture):null}}}return v}function p(v,S){return S===Uh?v.mapping=ns:S===kh&&(v.mapping=ro),v}function m(v){let S=0;const w=6;for(let R=0;R<w;R++)v[R]!==void 0&&S++;return S===w}function f(v){const S=v.target;S.removeEventListener("dispose",f);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const w=n.get(S);w!==void 0&&(n.delete(S),w.dispose())}function _(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:_}}function VT(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const l=s.getExtension(a);return e[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Js("WebGLRenderer: "+a+" extension not supported."),l}}}function HT(s,e,n,a){const l={},c=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",d),delete l[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function p(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function f(_){const v=[],S=_.index,w=_.attributes.position;let R=0;if(w===void 0)return;if(S!==null){const L=S.array;R=S.version;for(let z=0,N=L.length;z<N;z+=3){const F=L[z+0],U=L[z+1],D=L[z+2];v.push(F,U,U,D,D,F)}}else{const L=w.array;R=w.version;for(let z=0,N=L.length/3-1;z<N;z+=3){const F=z+0,U=z+1,D=z+2;v.push(F,U,U,D,D,F)}}const x=new(w.count>=65535?Ex:Mx)(v,1);x.version=R;const b=c.get(_);b&&e.remove(b),c.set(_,x)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&f(_)}else f(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function jT(s,e,n){let a;function l(_){a=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,v){s.drawElements(a,v,c,_*d),n.update(v,a,1)}function f(_,v,S){S!==0&&(s.drawElementsInstanced(a,v,c,_*d,S),n.update(v,a,S))}function g(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,S);let w=0;for(let R=0;R<S;R++)w+=v[R];n.update(w,a,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=f,this.renderMultiDraw=g}function WT(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,p){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=p*(c/3);break;case s.LINES:n.lines+=p*(c/2);break;case s.LINE_STRIP:n.lines+=p*(c-1);break;case s.LINE_LOOP:n.lines+=p*c;break;case s.POINTS:n.points+=p*c;break;default:Ot("WebGLInfo: Unknown draw mode:",d);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:a}}function XT(s,e,n){const a=new WeakMap,l=new Pr;function c(d,p,m){const f=d.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(p);if(v===void 0||v.count!==_){let S=function(){E.dispose(),a.delete(p),p.removeEventListener("dispose",S)};v!==void 0&&v.texture.dispose();const w=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],L=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let N=0;w===!0&&(N=1),R===!0&&(N=2),x===!0&&(N=3);let F=p.attributes.position.count*N,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*U*4*_),E=new _x(D,F,U,_);E.type=si,E.needsUpdate=!0;const k=N*4;for(let K=0;K<_;K++){const V=b[K],q=L[K],ge=z[K],he=F*U*4*K;for(let ee=0;ee<V.count;ee++){const O=ee*k;w===!0&&(l.fromBufferAttribute(V,ee),D[he+O+0]=l.x,D[he+O+1]=l.y,D[he+O+2]=l.z,D[he+O+3]=0),R===!0&&(l.fromBufferAttribute(q,ee),D[he+O+4]=l.x,D[he+O+5]=l.y,D[he+O+6]=l.z,D[he+O+7]=0),x===!0&&(l.fromBufferAttribute(ge,ee),D[he+O+8]=l.x,D[he+O+9]=l.y,D[he+O+10]=l.z,D[he+O+11]=ge.itemSize===4?l.w:1)}}v={count:_,texture:E,size:new $t(F,U)},a.set(p,v),p.addEventListener("dispose",S)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let S=0;for(let R=0;R<f.length;R++)S+=f[R];const w=p.morphTargetsRelative?1:1-S;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",f)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function qT(s,e,n,a,l){let c=new WeakMap;function d(f){const g=l.render.frame,_=f.geometry,v=e.get(f,_);if(c.get(v)!==g&&(e.update(v),c.set(v,g)),f.isInstancedMesh&&(f.hasEventListener("dispose",m)===!1&&f.addEventListener("dispose",m),c.get(f)!==g&&(n.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&n.update(f.instanceColor,s.ARRAY_BUFFER),c.set(f,g))),f.isSkinnedMesh){const S=f.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return v}function p(){c=new WeakMap}function m(f){const g=f.target;g.removeEventListener("dispose",m),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:d,dispose:p}}const YT={[Q_]:"LINEAR_TONE_MAPPING",[J_]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[tx]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[rx]:"CUSTOM_TONE_MAPPING"};function KT(s,e,n,a,l,c){const d=new ui(e,n,{type:s,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new no(e,n):void 0}),p=new ui(e,n,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),m=new $n;m.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const f=new HM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new qi(m,f),_=new Lx(-1,1,1,-1,0,1);let v=null,S=null,w=!1,R,x=null,b=[],L=!1;this.setSize=function(z,N){d.setSize(z,N),p.setSize(z,N);for(let F=0;F<b.length;F++){const U=b[F];U.setSize&&U.setSize(z,N)}},this.setEffects=function(z){b=z,L=b.length>0&&b[0].isRenderPass===!0;const N=d.width,F=d.height;for(let U=0;U<b.length;U++){const D=b[U];D.setSize&&D.setSize(N,F)}},this.begin=function(z,N){if(w||z.toneMapping===ci&&b.length===0)return!1;if(x=N,N!==null){const F=N.width,U=N.height;(d.width!==F||d.height!==U)&&this.setSize(F,U)}return L===!1&&z.setRenderTarget(d),R=z.toneMapping,z.toneMapping=ci,!0},this.hasRenderPass=function(){return L},this.end=function(z,N){z.toneMapping=R,w=!0;let F=d,U=p;for(let D=0;D<b.length;D++){const E=b[D];if(E.enabled!==!1&&(E.render(z,U,F,N),E.needsSwap!==!1)){const k=F;F=U,U=k}}if(v!==z.outputColorSpace||S!==z.toneMapping){v=z.outputColorSpace,S=z.toneMapping,f.defines={},Pt.getTransfer(v)===Kt&&(f.defines.SRGB_TRANSFER="");const D=YT[S];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=F.texture,z.setRenderTarget(x),z.render(g,_),x=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),f.dispose()}}const Dx=new Jr,up=new no(1,1),Ox=new _x,Fx=new _M,zx=new Ax,c_=[],u_=[],d_=new Float32Array(16),h_=new Float32Array(9),f_=new Float32Array(4);function lo(s,e,n){const a=s[0];if(a<=0||a>0)return s;const l=e*n;let c=c_[l];if(c===void 0&&(c=new Float32Array(l),c_[l]=c),e!==0){a.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=n,s[d].toArray(c,p)}return c}function kr(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Dr(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function wu(s,e){let n=u_[e];n===void 0&&(n=new Int32Array(e),u_[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function $T(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function ZT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kr(n,e))return;s.uniform2fv(this.addr,e),Dr(n,e)}}function QT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kr(n,e))return;s.uniform3fv(this.addr,e),Dr(n,e)}}function JT(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kr(n,e))return;s.uniform4fv(this.addr,e),Dr(n,e)}}function e2(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(kr(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dr(n,e)}else{if(kr(n,a))return;f_.set(a),s.uniformMatrix2fv(this.addr,!1,f_),Dr(n,a)}}function t2(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(kr(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dr(n,e)}else{if(kr(n,a))return;h_.set(a),s.uniformMatrix3fv(this.addr,!1,h_),Dr(n,a)}}function r2(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(kr(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dr(n,e)}else{if(kr(n,a))return;d_.set(a),s.uniformMatrix4fv(this.addr,!1,d_),Dr(n,a)}}function n2(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function i2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kr(n,e))return;s.uniform2iv(this.addr,e),Dr(n,e)}}function a2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kr(n,e))return;s.uniform3iv(this.addr,e),Dr(n,e)}}function s2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kr(n,e))return;s.uniform4iv(this.addr,e),Dr(n,e)}}function o2(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function l2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kr(n,e))return;s.uniform2uiv(this.addr,e),Dr(n,e)}}function c2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kr(n,e))return;s.uniform3uiv(this.addr,e),Dr(n,e)}}function u2(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kr(n,e))return;s.uniform4uiv(this.addr,e),Dr(n,e)}}function d2(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(up.compareFunction=n.isReversedDepthBuffer()?Cp:Tp,c=up):c=Dx,n.setTexture2D(e||c,l)}function h2(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(e||Fx,l)}function f2(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(e||zx,l)}function p2(s,e,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(e||Ox,l)}function m2(s){switch(s){case 5126:return $T;case 35664:return ZT;case 35665:return QT;case 35666:return JT;case 35674:return e2;case 35675:return t2;case 35676:return r2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return a2;case 35669:case 35673:return s2;case 5125:return o2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(s,e){s.uniform1fv(this.addr,e)}function v2(s,e){const n=lo(e,this.size,2);s.uniform2fv(this.addr,n)}function _2(s,e){const n=lo(e,this.size,3);s.uniform3fv(this.addr,n)}function x2(s,e){const n=lo(e,this.size,4);s.uniform4fv(this.addr,n)}function y2(s,e){const n=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function b2(s,e){const n=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function S2(s,e){const n=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function M2(s,e){s.uniform1iv(this.addr,e)}function E2(s,e){s.uniform2iv(this.addr,e)}function w2(s,e){s.uniform3iv(this.addr,e)}function T2(s,e){s.uniform4iv(this.addr,e)}function C2(s,e){s.uniform1uiv(this.addr,e)}function A2(s,e){s.uniform2uiv(this.addr,e)}function R2(s,e){s.uniform3uiv(this.addr,e)}function N2(s,e){s.uniform4uiv(this.addr,e)}function P2(s,e,n){const a=this.cache,l=e.length,c=wu(n,l);kr(a,c)||(s.uniform1iv(this.addr,c),Dr(a,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=up:d=Dx;for(let p=0;p!==l;++p)n.setTexture2D(e[p]||d,c[p])}function L2(s,e,n){const a=this.cache,l=e.length,c=wu(n,l);kr(a,c)||(s.uniform1iv(this.addr,c),Dr(a,c));for(let d=0;d!==l;++d)n.setTexture3D(e[d]||Fx,c[d])}function I2(s,e,n){const a=this.cache,l=e.length,c=wu(n,l);kr(a,c)||(s.uniform1iv(this.addr,c),Dr(a,c));for(let d=0;d!==l;++d)n.setTextureCube(e[d]||zx,c[d])}function U2(s,e,n){const a=this.cache,l=e.length,c=wu(n,l);kr(a,c)||(s.uniform1iv(this.addr,c),Dr(a,c));for(let d=0;d!==l;++d)n.setTexture2DArray(e[d]||Ox,c[d])}function k2(s){switch(s){case 5126:return g2;case 35664:return v2;case 35665:return _2;case 35666:return x2;case 35674:return y2;case 35675:return b2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return E2;case 35668:case 35672:return w2;case 35669:case 35673:return T2;case 5125:return C2;case 36294:return A2;case 36295:return R2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return U2}}class D2{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=m2(n.type)}}class O2{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}}class F2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,n[p.id],a)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function p_(s,e){s.seq.push(e),s.map[e.id]=e}function z2(s,e,n){const a=s.name,l=a.length;for(hf.lastIndex=0;;){const c=hf.exec(a),d=hf.lastIndex;let p=c[1];const m=c[2]==="]",f=c[3];if(m&&(p=p|0),f===void 0||f==="["&&d+2===l){p_(n,f===void 0?new D2(p,s,e):new O2(p,s,e));break}else{let g=n.map[p];g===void 0&&(g=new F2(p),p_(n,g)),n=g}}}class du{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let d=0;d<a;++d){const p=e.getActiveUniform(n,d),m=e.getUniformLocation(n,p.name);z2(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(e,a,l)}setOptional(e,n,a){const l=n[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,n,a,l){for(let c=0,d=n.length;c!==d;++c){const p=n[c],m=a[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,n){const a=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in n&&a.push(d)}return a}}function m_(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const B2=37297;let G2=0;function V2(s,e){const n=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=l;d<c;d++){const p=d+1;a.push(`${p===e?">":" "} ${p}: ${n[d]}`)}return a.join(`
`)}const g_=new _t;function H2(s){Pt._getMatrix(g_,Pt.workingColorSpace,s);const e=`mat3( ${g_.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case gu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function v_(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+V2(s.getShaderSource(e),d)}else return l}function j2(s,e){const n=H2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const W2={[Q_]:"Linear",[J_]:"Reinhard",[ex]:"Cineon",[tx]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[rx]:"Custom"};function X2(s,e){const n=W2[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tu=new ce;function q2(){Pt.getLuminanceCoefficients(tu);const s=tu.x.toFixed(4),e=tu.y.toFixed(4),n=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function K2(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function $2(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return n}function ul(s){return s!==""}function __(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(s){return s.replace(Z2,J2)}const Q2=new Map;function J2(s,e){let n=yt[e];if(n===void 0){const a=Q2.get(e);if(a!==void 0)n=yt[a],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dp(n)}const e3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(s){return s.replace(e3,t3)}function t3(s,e,n,a){let l="";for(let c=parseInt(e);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function b_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const r3={[su]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function n3(s){return r3[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i3={[ns]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function a3(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":i3[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const s3={[ro]:"ENVMAP_MODE_REFRACTION"};function o3(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":s3[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l3={[Z_]:"ENVMAP_BLENDING_MULTIPLY",[ZS]:"ENVMAP_BLENDING_MIX",[QS]:"ENVMAP_BLENDING_ADD"};function c3(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":l3[s.combine]||"ENVMAP_BLENDING_NONE"}function u3(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function d3(s,e,n,a){const l=s.getContext(),c=n.defines;let d=n.vertexShader,p=n.fragmentShader;const m=n3(n),f=a3(n),g=o3(n),_=c3(n),v=u3(n),S=Y2(n),w=K2(c),R=l.createProgram();let x,b,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ul).join(`
`),x.length>0&&(x+=`
`),b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ul).join(`
`),b.length>0&&(b+=`
`)):(x=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),b=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?yt.tonemapping_pars_fragment:"",n.toneMapping!==ci?X2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,j2("linearToOutputTexel",n.outputColorSpace),q2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),d=dp(d),d=__(d,n),d=x_(d,n),p=dp(p),p=__(p,n),p=x_(p,n),d=y_(d),p=y_(p),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,b=["#define varying in",n.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const z=L+x+d,N=L+b+p,F=m_(l,l.VERTEX_SHADER,z),U=m_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,F),l.attachShader(R,U),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function D(V){if(s.debug.checkShaderErrors){const q=l.getProgramInfoLog(R)||"",ge=l.getShaderInfoLog(F)||"",he=l.getShaderInfoLog(U)||"",ee=q.trim(),O=ge.trim(),G=he.trim();let ae=!0,_e=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,F,U);else{const Me=v_(l,F,"vertex"),I=v_(l,U,"fragment");Ot("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ee+`
`+Me+`
`+I)}else ee!==""?ht("WebGLProgram: Program Info Log:",ee):(O===""||G==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ae,programLog:ee,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:b}})}l.deleteShader(F),l.deleteShader(U),E=new du(l,R),k=$2(l,R)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let k;this.getAttributes=function(){return k===void 0&&D(this),k};let K=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(R,B2)),K},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=U,this}let h3=0;class f3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){const l=this._getShaderCacheForMaterial(e);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new p3(e),n.set(e,a)),a}}class p3{constructor(e){this.id=h3++,this.code=e,this.usedTimes=0}}function m3(s){return s===is||s===fu||s===pu}function g3(s,e,n,a,l,c){const d=new bx,p=new f3,m=new Set,f=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,k,K,V,q,ge){const he=V.fog,ee=q.geometry,O=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ae=e.get(E.envMap||O,G),_e=ae&&ae.mapping===bu?ae.image.height:null,Me=S[E.type];E.precision!==null&&(v=a.getMaxPrecision(E.precision),v!==E.precision&&ht("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const I=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,J=I!==void 0?I.length:0;let be=0;ee.morphAttributes.position!==void 0&&(be=1),ee.morphAttributes.normal!==void 0&&(be=2),ee.morphAttributes.color!==void 0&&(be=3);let Ue,Le,te,ye;if(Me){const Ge=ai[Me];Ue=Ge.vertexShader,Le=Ge.fragmentShader}else{Ue=E.vertexShader,Le=E.fragmentShader;const Ge=p.getVertexShaderStage(E),_r=p.getFragmentShaderStage(E);p.update(E,Ge,_r),te=Ge.id,ye=_r.id}const we=s.getRenderTarget(),qe=s.state.buffers.depth.getReversed(),it=q.isInstancedMesh===!0,He=q.isBatchedMesh===!0,Et=!!E.map,ct=!!E.matcap,ot=!!ae,wt=!!E.aoMap,Sr=!!E.lightMap,Mr=!!E.bumpMap&&E.wireframe===!1,rr=!!E.normalMap,lr=!!E.displacementMap,sr=!!E.emissiveMap,jt=!!E.metalnessMap,or=!!E.roughnessMap,Y=E.anisotropy>0,kt=E.clearcoat>0,Rt=E.dispersion>0,P=E.iridescence>0,M=E.sheen>0,$=E.transmission>0,ne=Y&&!!E.anisotropyMap,ue=kt&&!!E.clearcoatMap,ke=kt&&!!E.clearcoatNormalMap,Oe=kt&&!!E.clearcoatRoughnessMap,W=P&&!!E.iridescenceMap,Ce=P&&!!E.iridescenceThicknessMap,Pe=M&&!!E.sheenColorMap,ze=M&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,at=!!E.specularColorMap,Je=!!E.specularIntensityMap,lt=$&&!!E.transmissionMap,dt=$&&!!E.thicknessMap,j=!!E.gradientMap,pe=!!E.alphaMap,Re=E.alphaTest>0,Fe=!!E.alphaHash,je=!!E.extensions;let Te=ci;E.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Ze={shaderID:Me,shaderType:E.type,shaderName:E.name,vertexShader:Ue,fragmentShader:Le,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:He,batchingColor:He&&q._colorsTexture!==null,instancing:it,instancingColor:it&&q.instanceColor!==null,instancingMorph:it&&q.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Et,matcap:ct,envMap:ot,envMapMode:ot&&ae.mapping,envMapCubeUVHeight:_e,aoMap:wt,lightMap:Sr,bumpMap:Mr,normalMap:rr,displacementMap:lr,emissiveMap:sr,normalMapObjectSpace:rr&&E.normalMapType===tM,normalMapTangentSpace:rr&&E.normalMapType===P0,packedNormalMap:rr&&E.normalMapType===P0&&m3(E.normalMap.format),metalnessMap:jt,roughnessMap:or,anisotropy:Y,anisotropyMap:ne,clearcoat:kt,clearcoatMap:ue,clearcoatNormalMap:ke,clearcoatRoughnessMap:Oe,dispersion:Rt,iridescence:P,iridescenceMap:W,iridescenceThicknessMap:Ce,sheen:M,sheenColorMap:Pe,sheenRoughnessMap:ze,specularMap:Ae,specularColorMap:at,specularIntensityMap:Je,transmission:$,transmissionMap:lt,thicknessMap:dt,gradientMap:j,opaque:E.transparent===!1&&E.blending===Qs&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:Re,alphaHash:Fe,combine:E.combine,mapUv:Et&&w(E.map.channel),aoMapUv:wt&&w(E.aoMap.channel),lightMapUv:Sr&&w(E.lightMap.channel),bumpMapUv:Mr&&w(E.bumpMap.channel),normalMapUv:rr&&w(E.normalMap.channel),displacementMapUv:lr&&w(E.displacementMap.channel),emissiveMapUv:sr&&w(E.emissiveMap.channel),metalnessMapUv:jt&&w(E.metalnessMap.channel),roughnessMapUv:or&&w(E.roughnessMap.channel),anisotropyMapUv:ne&&w(E.anisotropyMap.channel),clearcoatMapUv:ue&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:ke&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(E.sheenRoughnessMap.channel),specularMapUv:Ae&&w(E.specularMap.channel),specularColorMapUv:at&&w(E.specularColorMap.channel),specularIntensityMapUv:Je&&w(E.specularIntensityMap.channel),transmissionMapUv:lt&&w(E.transmissionMap.channel),thicknessMapUv:dt&&w(E.thicknessMap.channel),alphaMapUv:pe&&w(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(rr||Y),vertexNormals:!!ee.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(Et||pe),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ee.attributes.normal===void 0&&rr===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:qe,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:be,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:ge.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:sr&&E.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zi,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function x(E){const k=[];if(E.shaderID?k.push(E.shaderID):(k.push(E.customVertexShaderID),k.push(E.customFragmentShaderID)),E.defines!==void 0)for(const K in E.defines)k.push(K),k.push(E.defines[K]);return E.isRawShaderMaterial===!1&&(b(k,E),L(k,E),k.push(s.outputColorSpace)),k.push(E.customProgramCacheKey),k.join()}function b(E,k){E.push(k.precision),E.push(k.outputColorSpace),E.push(k.envMapMode),E.push(k.envMapCubeUVHeight),E.push(k.mapUv),E.push(k.alphaMapUv),E.push(k.lightMapUv),E.push(k.aoMapUv),E.push(k.bumpMapUv),E.push(k.normalMapUv),E.push(k.displacementMapUv),E.push(k.emissiveMapUv),E.push(k.metalnessMapUv),E.push(k.roughnessMapUv),E.push(k.anisotropyMapUv),E.push(k.clearcoatMapUv),E.push(k.clearcoatNormalMapUv),E.push(k.clearcoatRoughnessMapUv),E.push(k.iridescenceMapUv),E.push(k.iridescenceThicknessMapUv),E.push(k.sheenColorMapUv),E.push(k.sheenRoughnessMapUv),E.push(k.specularMapUv),E.push(k.specularColorMapUv),E.push(k.specularIntensityMapUv),E.push(k.transmissionMapUv),E.push(k.thicknessMapUv),E.push(k.combine),E.push(k.fogExp2),E.push(k.sizeAttenuation),E.push(k.morphTargetsCount),E.push(k.morphAttributeCount),E.push(k.numDirLights),E.push(k.numPointLights),E.push(k.numSpotLights),E.push(k.numSpotLightMaps),E.push(k.numHemiLights),E.push(k.numRectAreaLights),E.push(k.numDirLightShadows),E.push(k.numPointLightShadows),E.push(k.numSpotLightShadows),E.push(k.numSpotLightShadowsWithMaps),E.push(k.numLightProbes),E.push(k.shadowMapType),E.push(k.toneMapping),E.push(k.numClippingPlanes),E.push(k.numClipIntersection),E.push(k.depthPacking)}function L(E,k){d.disableAll(),k.instancing&&d.enable(0),k.instancingColor&&d.enable(1),k.instancingMorph&&d.enable(2),k.matcap&&d.enable(3),k.envMap&&d.enable(4),k.normalMapObjectSpace&&d.enable(5),k.normalMapTangentSpace&&d.enable(6),k.clearcoat&&d.enable(7),k.iridescence&&d.enable(8),k.alphaTest&&d.enable(9),k.vertexColors&&d.enable(10),k.vertexAlphas&&d.enable(11),k.vertexUv1s&&d.enable(12),k.vertexUv2s&&d.enable(13),k.vertexUv3s&&d.enable(14),k.vertexTangents&&d.enable(15),k.anisotropy&&d.enable(16),k.alphaHash&&d.enable(17),k.batching&&d.enable(18),k.dispersion&&d.enable(19),k.batchingColor&&d.enable(20),k.gradientMap&&d.enable(21),k.packedNormalMap&&d.enable(22),k.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),k.fog&&d.enable(0),k.useFog&&d.enable(1),k.flatShading&&d.enable(2),k.logarithmicDepthBuffer&&d.enable(3),k.reversedDepthBuffer&&d.enable(4),k.skinning&&d.enable(5),k.morphTargets&&d.enable(6),k.morphNormals&&d.enable(7),k.morphColors&&d.enable(8),k.premultipliedAlpha&&d.enable(9),k.shadowMapEnabled&&d.enable(10),k.doubleSided&&d.enable(11),k.flipSided&&d.enable(12),k.useDepthPacking&&d.enable(13),k.dithering&&d.enable(14),k.transmission&&d.enable(15),k.sheen&&d.enable(16),k.opaque&&d.enable(17),k.pointsUvs&&d.enable(18),k.decodeVideoTexture&&d.enable(19),k.decodeVideoTextureEmissive&&d.enable(20),k.alphaToCoverage&&d.enable(21),k.numLightProbeGrids>0&&d.enable(22),k.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function z(E){const k=S[E.type];let K;if(k){const V=ai[k];K=BM.clone(V.uniforms)}else K=E.uniforms;return K}function N(E,k){let K=g.get(k);return K!==void 0?++K.usedTimes:(K=new d3(s,k,E,l),f.push(K),g.set(k,K)),K}function F(E){if(--E.usedTimes===0){const k=f.indexOf(E);f[k]=f[f.length-1],f.pop(),g.delete(E.cacheKey),E.destroy()}}function U(E){p.remove(E)}function D(){p.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:z,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:f,dispose:D}}function v3(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function a(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:l,dispose:c}}function _3(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function S_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function M_(){const s=[];let e=0;const n=[],a=[],l=[];function c(){e=0,n.length=0,a.length=0,l.length=0}function d(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function p(v,S,w,R,x,b){let L=s[e];return L===void 0?(L={id:v.id,object:v,geometry:S,material:w,materialVariant:d(v),groupOrder:R,renderOrder:v.renderOrder,z:x,group:b},s[e]=L):(L.id=v.id,L.object=v,L.geometry=S,L.material=w,L.materialVariant=d(v),L.groupOrder=R,L.renderOrder=v.renderOrder,L.z=x,L.group=b),e++,L}function m(v,S,w,R,x,b){const L=p(v,S,w,R,x,b);w.transmission>0?a.push(L):w.transparent===!0?l.push(L):n.push(L)}function f(v,S,w,R,x,b){const L=p(v,S,w,R,x,b);w.transmission>0?a.unshift(L):w.transparent===!0?l.unshift(L):n.unshift(L)}function g(v,S,w){n.length>1&&n.sort(v||_3),a.length>1&&a.sort(S||S_),l.length>1&&l.sort(S||S_),w&&(n.reverse(),a.reverse(),l.reverse())}function _(){for(let v=e,S=s.length;v<S;v++){const w=s[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:m,unshift:f,finish:_,sort:g}}function x3(){let s=new WeakMap;function e(a,l){const c=s.get(a);let d;return c===void 0?(d=new M_,s.set(a,[d])):l>=c.length?(d=new M_,c.push(d)):d=c[l],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function y3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Vt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=n,n}}}function b3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let S3=0;function M3(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function E3(s){const e=new y3,n=b3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)a.probe.push(new ce);const l=new ce,c=new Ur,d=new Ur;function p(f){let g=0,_=0,v=0;for(let k=0;k<9;k++)a.probe[k].set(0,0,0);let S=0,w=0,R=0,x=0,b=0,L=0,z=0,N=0,F=0,U=0,D=0;f.sort(M3);for(let k=0,K=f.length;k<K;k++){const V=f[k],q=V.color,ge=V.intensity,he=V.distance;let ee=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===is?ee=V.shadow.map.texture:ee=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=q.r*ge,_+=q.g*ge,v+=q.b*ge;else if(V.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(V.sh.coefficients[O],ge);D++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ae=n.get(V);ae.shadowIntensity=G.intensity,ae.shadowBias=G.bias,ae.shadowNormalBias=G.normalBias,ae.shadowRadius=G.radius,ae.shadowMapSize=G.mapSize,a.directionalShadow[S]=ae,a.directionalShadowMap[S]=ee,a.directionalShadowMatrix[S]=V.shadow.matrix,L++}a.directional[S]=O,S++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(q).multiplyScalar(ge),O.distance=he,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,a.spot[R]=O;const G=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,G.updateMatrices(V),V.castShadow&&U++),a.spotLightMatrix[R]=G.matrix,V.castShadow){const ae=n.get(V);ae.shadowIntensity=G.intensity,ae.shadowBias=G.bias,ae.shadowNormalBias=G.normalBias,ae.shadowRadius=G.radius,ae.shadowMapSize=G.mapSize,a.spotShadow[R]=ae,a.spotShadowMap[R]=ee,N++}R++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy(q).multiplyScalar(ge),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),a.rectArea[x]=O,x++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const G=V.shadow,ae=n.get(V);ae.shadowIntensity=G.intensity,ae.shadowBias=G.bias,ae.shadowNormalBias=G.normalBias,ae.shadowRadius=G.radius,ae.shadowMapSize=G.mapSize,ae.shadowCameraNear=G.camera.near,ae.shadowCameraFar=G.camera.far,a.pointShadow[w]=ae,a.pointShadowMap[w]=ee,a.pointShadowMatrix[w]=V.shadow.matrix,z++}a.point[w]=O,w++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(ge),O.groundColor.copy(V.groundColor).multiplyScalar(ge),a.hemi[b]=O,b++}}x>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ve.LTC_FLOAT_1,a.rectAreaLTC2=Ve.LTC_FLOAT_2):(a.rectAreaLTC1=Ve.LTC_HALF_1,a.rectAreaLTC2=Ve.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const E=a.hash;(E.directionalLength!==S||E.pointLength!==w||E.spotLength!==R||E.rectAreaLength!==x||E.hemiLength!==b||E.numDirectionalShadows!==L||E.numPointShadows!==z||E.numSpotShadows!==N||E.numSpotMaps!==F||E.numLightProbes!==D)&&(a.directional.length=S,a.spot.length=R,a.rectArea.length=x,a.point.length=w,a.hemi.length=b,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=z,a.pointShadowMap.length=z,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=z,a.spotLightMatrix.length=N+F-U,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=D,E.directionalLength=S,E.pointLength=w,E.spotLength=R,E.rectAreaLength=x,E.hemiLength=b,E.numDirectionalShadows=L,E.numPointShadows=z,E.numSpotShadows=N,E.numSpotMaps=F,E.numLightProbes=D,a.version=S3++)}function m(f,g){let _=0,v=0,S=0,w=0,R=0;const x=g.matrixWorldInverse;for(let b=0,L=f.length;b<L;b++){const z=f[b];if(z.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),_++}else if(z.isSpotLight){const N=a.spot[S];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),S++}else if(z.isRectAreaLight){const N=a.rectArea[w];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(x),d.identity(),c.copy(z.matrixWorld),c.premultiply(x),d.extractRotation(c),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(z.isPointLight){const N=a.point[v];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(x),v++}else if(z.isHemisphereLight){const N=a.hemi[R];N.direction.setFromMatrixPosition(z.matrixWorld),N.direction.transformDirection(x),R++}}}return{setup:p,setupView:m,state:a}}function E_(s){const e=new E3(s),n=[],a=[],l=[];function c(v){_.camera=v,n.length=0,a.length=0,l.length=0}function d(v){n.push(v)}function p(v){a.push(v)}function m(v){l.push(v)}function f(){e.setup(n)}function g(v){e.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:f,setupLightsView:g,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function w3(s){let e=new WeakMap;function n(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new E_(s),e.set(l,[p])):c>=d.length?(p=new E_(s),d.push(p)):p=d[c],p}function a(){e=new WeakMap}return{get:n,dispose:a}}const T3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
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
}`,A3=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],R3=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],w_=new Ur,sl=new ce,ff=new ce;function N3(s,e,n){let a=new Cx;const l=new $t,c=new $t,d=new Pr,p=new jM,m=new WM,f={},g=n.maxTextureSize,_={[Aa]:ln,[ln]:Aa,[zi]:zi},v=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:T3,fragmentShader:C3}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new $n;w.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new qi(w,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let b=this.type;this.render=function(U,D,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;this.type===LS&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=su);const k=s.getRenderTarget(),K=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Gi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ge=b!==this.type;ge&&D.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(ee=>ee.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,ee=U.length;he<ee;he++){const O=U[he],G=O.shadow;if(G===void 0){ht("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ae=G.getFrameExtents();l.multiply(ae),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ae.x),l.x=c.x*ae.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ae.y),l.y=c.y*ae.y,G.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||ge===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===cl){if(O.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ui(l.x,l.y,{format:is,type:Wi,minFilter:$r,magFilter:$r,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new no(l.x,l.y,si),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=Xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wr,G.map.depthTexture.magFilter=Wr}else O.isPointLight?(G.map=new kx(l.x),G.map.depthTexture=new FM(l.x,hi)):(G.map=new ui(l.x,l.y),G.map.depthTexture=new no(l.x,l.y,hi)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=Xi,this.type===su?(G.map.depthTexture.compareFunction=_e?Cp:Tp,G.map.depthTexture.minFilter=$r,G.map.depthTexture.magFilter=$r):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wr,G.map.depthTexture.magFilter=Wr);G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Me;I++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,I),s.clear();else{I===0&&(s.setRenderTarget(G.map),s.clear());const J=G.getViewport(I);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),q.viewport(d)}if(O.isPointLight){const J=G.camera,be=G.matrix,Ue=O.distance||J.far;Ue!==J.far&&(J.far=Ue,J.updateProjectionMatrix()),sl.setFromMatrixPosition(O.matrixWorld),J.position.copy(sl),ff.copy(J.position),ff.add(A3[I]),J.up.copy(R3[I]),J.lookAt(ff),J.updateMatrixWorld(),be.makeTranslation(-sl.x,-sl.y,-sl.z),w_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(w_,J.coordinateSystem,J.reversedDepth)}else G.updateMatrices(O);a=G.getFrustum(),N(D,E,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===cl&&L(G,E),G.needsUpdate=!1}b=this.type,x.needsUpdate=!1,s.setRenderTarget(k,K,V)};function L(U,D){const E=e.update(R);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ui(l.x,l.y,{format:is,type:Wi})),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(D,null,E,v,R,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(D,null,E,S,R,null)}function z(U,D,E,k){let K=null;const V=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)K=V;else if(K=E.isPointLight===!0?m:p,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const q=K.uuid,ge=D.uuid;let he=f[q];he===void 0&&(he={},f[q]=he);let ee=he[ge];ee===void 0&&(ee=K.clone(),he[ge]=ee,D.addEventListener("dispose",F)),K=ee}if(K.visible=D.visible,K.wireframe=D.wireframe,k===cl?K.side=D.shadowSide!==null?D.shadowSide:D.side:K.side=D.shadowSide!==null?D.shadowSide:_[D.side],K.alphaMap=D.alphaMap,K.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,K.map=D.map,K.clipShadows=D.clipShadows,K.clippingPlanes=D.clippingPlanes,K.clipIntersection=D.clipIntersection,K.displacementMap=D.displacementMap,K.displacementScale=D.displacementScale,K.displacementBias=D.displacementBias,K.wireframeLinewidth=D.wireframeLinewidth,K.linewidth=D.linewidth,E.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const q=s.properties.get(K);q.light=E}return K}function N(U,D,E,k,K){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&K===cl)&&(!U.frustumCulled||a.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const q=e.update(U),ge=U.material;if(Array.isArray(ge)){const he=q.groups;for(let ee=0,O=he.length;ee<O;ee++){const G=he[ee],ae=ge[G.materialIndex];if(ae&&ae.visible){const _e=z(U,ae,k,K);U.onBeforeShadow(s,U,D,E,q,_e,G),s.renderBufferDirect(E,null,q,_e,U,G),U.onAfterShadow(s,U,D,E,q,_e,G)}}}else if(ge.visible){const he=z(U,ge,k,K);U.onBeforeShadow(s,U,D,E,q,he,null),s.renderBufferDirect(E,null,q,he,U,null),U.onAfterShadow(s,U,D,E,q,he,null)}}const V=U.children;for(let q=0,ge=V.length;q<ge;q++)N(V[q],D,E,k,K)}function F(U){U.target.removeEventListener("dispose",F);for(const D in f){const E=f[D],k=U.target.uuid;k in E&&(E[k].dispose(),delete E[k])}}}function P3(s,e){function n(){let j=!1;const pe=new Pr;let Re=null;const Fe=new Pr(0,0,0,0);return{setMask:function(je){Re!==je&&!j&&(s.colorMask(je,je,je,je),Re=je)},setLocked:function(je){j=je},setClear:function(je,Te,Ze,Ge,_r){_r===!0&&(je*=Ge,Te*=Ge,Ze*=Ge),pe.set(je,Te,Ze,Ge),Fe.equals(pe)===!1&&(s.clearColor(je,Te,Ze,Ge),Fe.copy(pe))},reset:function(){j=!1,Re=null,Fe.set(-1,0,0,0)}}}function a(){let j=!1,pe=!1,Re=null,Fe=null,je=null;return{setReversed:function(Te){if(pe!==Te){const Ze=e.get("EXT_clip_control");Te?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),pe=Te;const Ge=je;je=null,this.setClear(Ge)}},getReversed:function(){return pe},setTest:function(Te){Te?we(s.DEPTH_TEST):qe(s.DEPTH_TEST)},setMask:function(Te){Re!==Te&&!j&&(s.depthMask(Te),Re=Te)},setFunc:function(Te){if(pe&&(Te=dM[Te]),Fe!==Te){switch(Te){case Mf:s.depthFunc(s.NEVER);break;case Ef:s.depthFunc(s.ALWAYS);break;case wf:s.depthFunc(s.LESS);break;case to:s.depthFunc(s.LEQUAL);break;case Tf:s.depthFunc(s.EQUAL);break;case Cf:s.depthFunc(s.GEQUAL);break;case Af:s.depthFunc(s.GREATER);break;case Rf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=Te}},setLocked:function(Te){j=Te},setClear:function(Te){je!==Te&&(je=Te,pe&&(Te=1-Te),s.clearDepth(Te))},reset:function(){j=!1,Re=null,Fe=null,je=null,pe=!1}}}function l(){let j=!1,pe=null,Re=null,Fe=null,je=null,Te=null,Ze=null,Ge=null,_r=null;return{setTest:function(It){j||(It?we(s.STENCIL_TEST):qe(s.STENCIL_TEST))},setMask:function(It){pe!==It&&!j&&(s.stencilMask(It),pe=It)},setFunc:function(It,zr,Br){(Re!==It||Fe!==zr||je!==Br)&&(s.stencilFunc(It,zr,Br),Re=It,Fe=zr,je=Br)},setOp:function(It,zr,Br){(Te!==It||Ze!==zr||Ge!==Br)&&(s.stencilOp(It,zr,Br),Te=It,Ze=zr,Ge=Br)},setLocked:function(It){j=It},setClear:function(It){_r!==It&&(s.clearStencil(It),_r=It)},reset:function(){j=!1,pe=null,Re=null,Fe=null,je=null,Te=null,Ze=null,Ge=null,_r=null}}}const c=new n,d=new a,p=new l,m=new WeakMap,f=new WeakMap;let g={},_={},v={},S=new WeakMap,w=[],R=null,x=!1,b=null,L=null,z=null,N=null,F=null,U=null,D=null,E=new Vt(0,0,0),k=0,K=!1,V=null,q=null,ge=null,he=null,ee=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ae=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=ae>=1):_e.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=ae>=2);let Me=null,I={};const J=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ue=new Pr().fromArray(J),Le=new Pr().fromArray(be);function te(j,pe,Re,Fe){const je=new Uint8Array(4),Te=s.createTexture();s.bindTexture(j,Te),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<Re;Ze++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,je):s.texImage2D(pe+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,je);return Te}const ye={};ye[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),we(s.DEPTH_TEST),d.setFunc(to),Mr(!1),rr(A0),we(s.CULL_FACE),wt(Gi);function we(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function qe(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function it(j,pe){return v[j]!==pe?(s.bindFramebuffer(j,pe),v[j]=pe,j===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=pe),j===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function He(j,pe){let Re=w,Fe=!1;if(j){Re=S.get(pe),Re===void 0&&(Re=[],S.set(pe,Re));const je=j.textures;if(Re.length!==je.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Ze=je.length;Te<Ze;Te++)Re[Te]=s.COLOR_ATTACHMENT0+Te;Re.length=je.length,Fe=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(Re)}function Et(j){return R!==j?(s.useProgram(j),R=j,!0):!1}const ct={[Ja]:s.FUNC_ADD,[US]:s.FUNC_SUBTRACT,[kS]:s.FUNC_REVERSE_SUBTRACT};ct[DS]=s.MIN,ct[OS]=s.MAX;const ot={[FS]:s.ZERO,[zS]:s.ONE,[BS]:s.SRC_COLOR,[bf]:s.SRC_ALPHA,[XS]:s.SRC_ALPHA_SATURATE,[jS]:s.DST_COLOR,[VS]:s.DST_ALPHA,[GS]:s.ONE_MINUS_SRC_COLOR,[Sf]:s.ONE_MINUS_SRC_ALPHA,[WS]:s.ONE_MINUS_DST_COLOR,[HS]:s.ONE_MINUS_DST_ALPHA,[qS]:s.CONSTANT_COLOR,[YS]:s.ONE_MINUS_CONSTANT_COLOR,[KS]:s.CONSTANT_ALPHA,[$S]:s.ONE_MINUS_CONSTANT_ALPHA};function wt(j,pe,Re,Fe,je,Te,Ze,Ge,_r,It){if(j===Gi){x===!0&&(qe(s.BLEND),x=!1);return}if(x===!1&&(we(s.BLEND),x=!0),j!==IS){if(j!==b||It!==K){if((L!==Ja||F!==Ja)&&(s.blendEquation(s.FUNC_ADD),L=Ja,F=Ja),It)switch(j){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yf:s.blendFunc(s.ONE,s.ONE);break;case R0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",j);break}else switch(j){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case R0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",j);break}z=null,N=null,U=null,D=null,E.set(0,0,0),k=0,b=j,K=It}return}je=je||pe,Te=Te||Re,Ze=Ze||Fe,(pe!==L||je!==F)&&(s.blendEquationSeparate(ct[pe],ct[je]),L=pe,F=je),(Re!==z||Fe!==N||Te!==U||Ze!==D)&&(s.blendFuncSeparate(ot[Re],ot[Fe],ot[Te],ot[Ze]),z=Re,N=Fe,U=Te,D=Ze),(Ge.equals(E)===!1||_r!==k)&&(s.blendColor(Ge.r,Ge.g,Ge.b,_r),E.copy(Ge),k=_r),b=j,K=!1}function Sr(j,pe){j.side===zi?qe(s.CULL_FACE):we(s.CULL_FACE);let Re=j.side===ln;pe&&(Re=!Re),Mr(Re),j.blending===Qs&&j.transparent===!1?wt(Gi):wt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const Fe=j.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),sr(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):qe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mr(j){V!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),V=j)}function rr(j){j!==NS?(we(s.CULL_FACE),j!==q&&(j===A0?s.cullFace(s.BACK):j===PS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qe(s.CULL_FACE),q=j}function lr(j){j!==ge&&(G&&s.lineWidth(j),ge=j)}function sr(j,pe,Re){j?(we(s.POLYGON_OFFSET_FILL),(he!==pe||ee!==Re)&&(he=pe,ee=Re,d.getReversed()&&(pe=-pe),s.polygonOffset(pe,Re))):qe(s.POLYGON_OFFSET_FILL)}function jt(j){j?we(s.SCISSOR_TEST):qe(s.SCISSOR_TEST)}function or(j){j===void 0&&(j=s.TEXTURE0+O-1),Me!==j&&(s.activeTexture(j),Me=j)}function Y(j,pe,Re){Re===void 0&&(Me===null?Re=s.TEXTURE0+O-1:Re=Me);let Fe=I[Re];Fe===void 0&&(Fe={type:void 0,texture:void 0},I[Re]=Fe),(Fe.type!==j||Fe.texture!==pe)&&(Me!==Re&&(s.activeTexture(Re),Me=Re),s.bindTexture(j,pe||ye[j]),Fe.type=j,Fe.texture=pe)}function kt(){const j=I[Me];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Rt(){try{s.compressedTexImage2D(...arguments)}catch(j){Ot("WebGLState:",j)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(j){Ot("WebGLState:",j)}}function M(){try{s.texSubImage2D(...arguments)}catch(j){Ot("WebGLState:",j)}}function $(){try{s.texSubImage3D(...arguments)}catch(j){Ot("WebGLState:",j)}}function ne(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Ot("WebGLState:",j)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Ot("WebGLState:",j)}}function ke(){try{s.texStorage2D(...arguments)}catch(j){Ot("WebGLState:",j)}}function Oe(){try{s.texStorage3D(...arguments)}catch(j){Ot("WebGLState:",j)}}function W(){try{s.texImage2D(...arguments)}catch(j){Ot("WebGLState:",j)}}function Ce(){try{s.texImage3D(...arguments)}catch(j){Ot("WebGLState:",j)}}function Pe(j){return _[j]!==void 0?_[j]:s.getParameter(j)}function ze(j,pe){_[j]!==pe&&(s.pixelStorei(j,pe),_[j]=pe)}function Ae(j){Ue.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Ue.copy(j))}function at(j){Le.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Le.copy(j))}function Je(j,pe){let Re=f.get(pe);Re===void 0&&(Re=new WeakMap,f.set(pe,Re));let Fe=Re.get(j);Fe===void 0&&(Fe=s.getUniformBlockIndex(pe,j.name),Re.set(j,Fe))}function lt(j,pe){const Re=f.get(pe).get(j);m.get(pe)!==Re&&(s.uniformBlockBinding(pe,Re,j.__bindingPointIndex),m.set(pe,Re))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},Me=null,I={},v={},S=new WeakMap,w=[],R=null,x=!1,b=null,L=null,z=null,N=null,F=null,U=null,D=null,E=new Vt(0,0,0),k=0,K=!1,V=null,q=null,ge=null,he=null,ee=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:we,disable:qe,bindFramebuffer:it,drawBuffers:He,useProgram:Et,setBlending:wt,setMaterial:Sr,setFlipSided:Mr,setCullFace:rr,setLineWidth:lr,setPolygonOffset:sr,setScissorTest:jt,activeTexture:or,bindTexture:Y,unbindTexture:kt,compressedTexImage2D:Rt,compressedTexImage3D:P,texImage2D:W,texImage3D:Ce,pixelStorei:ze,getParameter:Pe,updateUBOMapping:Je,uniformBlockBinding:lt,texStorage2D:ke,texStorage3D:Oe,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:ne,compressedTexSubImage3D:ue,scissor:Ae,viewport:at,reset:dt}}function L3(s,e,n,a,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new $t,g=new WeakMap,_=new Set;let v;const S=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,M){return w?new OffscreenCanvas(P,M):_u("canvas")}function x(P,M,$){let ne=1;const ue=Rt(P);if((ue.width>$||ue.height>$)&&(ne=$/Math.max(ue.width,ue.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ke=Math.floor(ne*ue.width),Oe=Math.floor(ne*ue.height);v===void 0&&(v=R(ke,Oe));const W=M?R(ke,Oe):v;return W.width=ke,W.height=Oe,W.getContext("2d").drawImage(P,0,0,ke,Oe),ht("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+ke+"x"+Oe+")."),W}else return"data"in P&&ht("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function b(P){return P.generateMipmaps}function L(P){s.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(P,M,$,ne,ue,ke=!1){if(P!==null){if(s[P]!==void 0)return s[P];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Oe;ne&&(Oe=e.get("EXT_texture_norm16"),Oe||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=M;if(M===s.RED&&($===s.FLOAT&&(W=s.R32F),$===s.HALF_FLOAT&&(W=s.R16F),$===s.UNSIGNED_BYTE&&(W=s.R8),$===s.UNSIGNED_SHORT&&Oe&&(W=Oe.R16_EXT),$===s.SHORT&&Oe&&(W=Oe.R16_SNORM_EXT)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(W=s.R8UI),$===s.UNSIGNED_SHORT&&(W=s.R16UI),$===s.UNSIGNED_INT&&(W=s.R32UI),$===s.BYTE&&(W=s.R8I),$===s.SHORT&&(W=s.R16I),$===s.INT&&(W=s.R32I)),M===s.RG&&($===s.FLOAT&&(W=s.RG32F),$===s.HALF_FLOAT&&(W=s.RG16F),$===s.UNSIGNED_BYTE&&(W=s.RG8),$===s.UNSIGNED_SHORT&&Oe&&(W=Oe.RG16_EXT),$===s.SHORT&&Oe&&(W=Oe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(W=s.RG8UI),$===s.UNSIGNED_SHORT&&(W=s.RG16UI),$===s.UNSIGNED_INT&&(W=s.RG32UI),$===s.BYTE&&(W=s.RG8I),$===s.SHORT&&(W=s.RG16I),$===s.INT&&(W=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(W=s.RGB8UI),$===s.UNSIGNED_SHORT&&(W=s.RGB16UI),$===s.UNSIGNED_INT&&(W=s.RGB32UI),$===s.BYTE&&(W=s.RGB8I),$===s.SHORT&&(W=s.RGB16I),$===s.INT&&(W=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),$===s.UNSIGNED_INT&&(W=s.RGBA32UI),$===s.BYTE&&(W=s.RGBA8I),$===s.SHORT&&(W=s.RGBA16I),$===s.INT&&(W=s.RGBA32I)),M===s.RGB&&($===s.UNSIGNED_SHORT&&Oe&&(W=Oe.RGB16_EXT),$===s.SHORT&&Oe&&(W=Oe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),M===s.RGBA){const Ce=ke?gu:Pt.getTransfer(ue);$===s.FLOAT&&(W=s.RGBA32F),$===s.HALF_FLOAT&&(W=s.RGBA16F),$===s.UNSIGNED_BYTE&&(W=Ce===Kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Oe&&(W=Oe.RGBA16_EXT),$===s.SHORT&&Oe&&(W=Oe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function F(P,M){let $;return P?M===null||M===hi||M===pl?$=s.DEPTH24_STENCIL8:M===si?$=s.DEPTH32F_STENCIL8:M===fl&&($=s.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hi||M===pl?$=s.DEPTH_COMPONENT24:M===si?$=s.DEPTH_COMPONENT32F:M===fl&&($=s.DEPTH_COMPONENT16),$}function U(P,M){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wr&&P.minFilter!==$r?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function D(P){const M=P.target;M.removeEventListener("dispose",D),k(M),M.isVideoTexture&&g.delete(M),M.isHTMLTexture&&_.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),V(M)}function k(P){const M=a.get(P);if(M.__webglInit===void 0)return;const $=P.source,ne=S.get($);if(ne){const ue=ne[M.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&K(P),Object.keys(ne).length===0&&S.delete($)}a.remove(P)}function K(P){const M=a.get(P);s.deleteTexture(M.__webglTexture);const $=P.source,ne=S.get($);delete ne[M.__cacheKey],d.memory.textures--}function V(P){const M=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let ue=0;ue<M.__webglFramebuffer[ne].length;ue++)s.deleteFramebuffer(M.__webglFramebuffer[ne][ue]);else s.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)s.deleteFramebuffer(M.__webglFramebuffer[ne]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=P.textures;for(let ne=0,ue=$.length;ne<ue;ne++){const ke=a.get($[ne]);ke.__webglTexture&&(s.deleteTexture(ke.__webglTexture),d.memory.textures--),a.remove($[ne])}a.remove(P)}let q=0;function ge(){q=0}function he(){return q}function ee(P){q=P}function O(){const P=q;return P>=l.maxTextures&&ht("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),q+=1,P}function G(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ae(P,M){const $=a.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const ne=P.image;if(ne===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{qe($,P,M);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function _e(P,M){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){qe($,P,M);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function Me(P,M){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){qe($,P,M);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function I(P,M){const $=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){it($,P,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const J={[Nf]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[Pf]:s.MIRRORED_REPEAT},be={[Wr]:s.NEAREST,[JS]:s.NEAREST_MIPMAP_NEAREST,[Pc]:s.NEAREST_MIPMAP_LINEAR,[$r]:s.LINEAR,[Dh]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},Ue={[rM]:s.NEVER,[oM]:s.ALWAYS,[nM]:s.LESS,[Tp]:s.LEQUAL,[iM]:s.EQUAL,[Cp]:s.GEQUAL,[aM]:s.GREATER,[sM]:s.NOTEQUAL};function Le(P,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$r||M.magFilter===Dh||M.magFilter===Pc||M.magFilter===ts||M.minFilter===$r||M.minFilter===Dh||M.minFilter===Pc||M.minFilter===ts)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,J[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,be[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wr||M.minFilter!==Pc&&M.minFilter!==ts||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function te(P,M){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",D));const ne=M.source;let ue=S.get(ne);ue===void 0&&(ue={},S.set(ne,ue));const ke=G(M);if(ke!==P.__cacheKey){ue[ke]===void 0&&(ue[ke]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ue[ke].usedTimes++;const Oe=ue[P.__cacheKey];Oe!==void 0&&(ue[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&K(M)),P.__cacheKey=ke,P.__webglTexture=ue[ke].texture}return $}function ye(P,M,$){return Math.floor(Math.floor(P/$)/M)}function we(P,M,$,ne){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,$,ne,M.data);else{ue.sort((Pe,ze)=>Pe.start-ze.start);let ke=0;for(let Pe=1;Pe<ue.length;Pe++){const ze=ue[ke],Ae=ue[Pe],at=ze.start+ze.count,Je=ye(Ae.start,M.width,4),lt=ye(ze.start,M.width,4);Ae.start<=at+1&&Je===lt&&ye(Ae.start+Ae.count-1,M.width,4)===Je?ze.count=Math.max(ze.count,Ae.start+Ae.count-ze.start):(++ke,ue[ke]=Ae)}ue.length=ke+1;const Oe=n.getParameter(s.UNPACK_ROW_LENGTH),W=n.getParameter(s.UNPACK_SKIP_PIXELS),Ce=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Pe=0,ze=ue.length;Pe<ze;Pe++){const Ae=ue[Pe],at=Math.floor(Ae.start/4),Je=Math.ceil(Ae.count/4),lt=at%M.width,dt=Math.floor(at/M.width),j=Je;n.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(s.UNPACK_SKIP_ROWS,dt),n.texSubImage2D(s.TEXTURE_2D,0,lt,dt,j,1,$,ne,M.data)}P.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,Oe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,W),n.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function qe(P,M,$){let ne=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=s.TEXTURE_3D);const ue=te(P,M),ke=M.source;n.bindTexture(ne,P.__webglTexture,s.TEXTURE0+$);const Oe=a.get(ke);if(ke.version!==Oe.__version||ue===!0){if(n.activeTexture(s.TEXTURE0+$),!(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)){const pe=Pt.getPrimaries(Pt.workingColorSpace),Re=M.colorSpace===Ta?null:Pt.getPrimaries(M.colorSpace),Fe=M.colorSpace===Ta||pe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let W=x(M.image,!1,l.maxTextureSize);W=kt(M,W);const Ce=c.convert(M.format,M.colorSpace),Pe=c.convert(M.type);let ze=N(M.internalFormat,Ce,Pe,M.normalized,M.colorSpace,M.isVideoTexture);Le(ne,M);let Ae;const at=M.mipmaps,Je=M.isVideoTexture!==!0,lt=Oe.__version===void 0||ue===!0,dt=ke.dataReady,j=U(M,W);if(M.isDepthTexture)ze=F(M.format===rs,M.type),lt&&(Je?n.texStorage2D(s.TEXTURE_2D,1,ze,W.width,W.height):n.texImage2D(s.TEXTURE_2D,0,ze,W.width,W.height,0,Ce,Pe,null));else if(M.isDataTexture)if(at.length>0){Je&&lt&&n.texStorage2D(s.TEXTURE_2D,j,ze,at[0].width,at[0].height);for(let pe=0,Re=at.length;pe<Re;pe++)Ae=at[pe],Je?dt&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,Ce,Pe,Ae.data):n.texImage2D(s.TEXTURE_2D,pe,ze,Ae.width,Ae.height,0,Ce,Pe,Ae.data);M.generateMipmaps=!1}else Je?(lt&&n.texStorage2D(s.TEXTURE_2D,j,ze,W.width,W.height),dt&&we(M,W,Ce,Pe)):n.texImage2D(s.TEXTURE_2D,0,ze,W.width,W.height,0,Ce,Pe,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&lt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,j,ze,at[0].width,at[0].height,W.depth);for(let pe=0,Re=at.length;pe<Re;pe++)if(Ae=at[pe],M.format!==Yn)if(Ce!==null)if(Je){if(dt)if(M.layerUpdates.size>0){const Fe=r_(Ae.width,Ae.height,M.format,M.type);for(const je of M.layerUpdates){const Te=Ae.data.subarray(je*Fe/Ae.data.BYTES_PER_ELEMENT,(je+1)*Fe/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,je,Ae.width,Ae.height,1,Ce,Te)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,W.depth,Ce,Ae.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,ze,Ae.width,Ae.height,W.depth,0,Ae.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?dt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,W.depth,Ce,Pe,Ae.data):n.texImage3D(s.TEXTURE_2D_ARRAY,pe,ze,Ae.width,Ae.height,W.depth,0,Ce,Pe,Ae.data)}else{Je&&lt&&n.texStorage2D(s.TEXTURE_2D,j,ze,at[0].width,at[0].height);for(let pe=0,Re=at.length;pe<Re;pe++)Ae=at[pe],M.format!==Yn?Ce!==null?Je?dt&&n.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,Ce,Ae.data):n.compressedTexImage2D(s.TEXTURE_2D,pe,ze,Ae.width,Ae.height,0,Ae.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?dt&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,Ce,Pe,Ae.data):n.texImage2D(s.TEXTURE_2D,pe,ze,Ae.width,Ae.height,0,Ce,Pe,Ae.data)}else if(M.isDataArrayTexture)if(Je){if(lt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,j,ze,W.width,W.height,W.depth),dt)if(M.layerUpdates.size>0){const pe=r_(W.width,W.height,M.format,M.type);for(const Re of M.layerUpdates){const Fe=W.data.subarray(Re*pe/W.data.BYTES_PER_ELEMENT,(Re+1)*pe/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Re,W.width,W.height,1,Ce,Pe,Fe)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Ce,Pe,W.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,W.width,W.height,W.depth,0,Ce,Pe,W.data);else if(M.isData3DTexture)Je?(lt&&n.texStorage3D(s.TEXTURE_3D,j,ze,W.width,W.height,W.depth),dt&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Ce,Pe,W.data)):n.texImage3D(s.TEXTURE_3D,0,ze,W.width,W.height,W.depth,0,Ce,Pe,W.data);else if(M.isFramebufferTexture){if(lt)if(Je)n.texStorage2D(s.TEXTURE_2D,j,ze,W.width,W.height);else{let pe=W.width,Re=W.height;for(let Fe=0;Fe<j;Fe++)n.texImage2D(s.TEXTURE_2D,Fe,ze,pe,Re,0,Ce,Pe,null),pe>>=1,Re>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),W.parentNode!==pe){pe.appendChild(W),_.add(M),pe.onpaint=Re=>{const Fe=Re.changedElements;for(const je of _)Fe.includes(je.image)&&(je.needsUpdate=!0)},pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,W);else{const Re=s.RGBA,Fe=s.RGBA,je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Re,Fe,je,W)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(at.length>0){if(Je&&lt){const pe=Rt(at[0]);n.texStorage2D(s.TEXTURE_2D,j,ze,pe.width,pe.height)}for(let pe=0,Re=at.length;pe<Re;pe++)Ae=at[pe],Je?dt&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ce,Pe,Ae):n.texImage2D(s.TEXTURE_2D,pe,ze,Ce,Pe,Ae);M.generateMipmaps=!1}else if(Je){if(lt){const pe=Rt(W);n.texStorage2D(s.TEXTURE_2D,j,ze,pe.width,pe.height)}dt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Pe,W)}else n.texImage2D(s.TEXTURE_2D,0,ze,Ce,Pe,W);b(M)&&L(ne),Oe.__version=ke.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function it(P,M,$){if(M.image.length!==6)return;const ne=te(P,M),ue=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const ke=a.get(ue);if(ue.version!==ke.__version||ne===!0){n.activeTexture(s.TEXTURE0+$);const Oe=Pt.getPrimaries(Pt.workingColorSpace),W=M.colorSpace===Ta?null:Pt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Ta||Oe===W?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let Te=0;Te<6;Te++)!Pe&&!ze?Ae[Te]=x(M.image[Te],!0,l.maxCubemapSize):Ae[Te]=ze?M.image[Te].image:M.image[Te],Ae[Te]=kt(M,Ae[Te]);const at=Ae[0],Je=c.convert(M.format,M.colorSpace),lt=c.convert(M.type),dt=N(M.internalFormat,Je,lt,M.normalized,M.colorSpace),j=M.isVideoTexture!==!0,pe=ke.__version===void 0||ne===!0,Re=ue.dataReady;let Fe=U(M,at);Le(s.TEXTURE_CUBE_MAP,M);let je;if(Pe){j&&pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,dt,at.width,at.height);for(let Te=0;Te<6;Te++){je=Ae[Te].mipmaps;for(let Ze=0;Ze<je.length;Ze++){const Ge=je[Ze];M.format!==Yn?Je!==null?j?Re&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,0,0,Ge.width,Ge.height,Je,Ge.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,dt,Ge.width,Ge.height,0,Ge.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Re&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,0,0,Ge.width,Ge.height,Je,lt,Ge.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze,dt,Ge.width,Ge.height,0,Je,lt,Ge.data)}}}else{if(je=M.mipmaps,j&&pe){je.length>0&&Fe++;const Te=Rt(Ae[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,dt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ze){j?Re&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ae[Te].width,Ae[Te].height,Je,lt,Ae[Te].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,dt,Ae[Te].width,Ae[Te].height,0,Je,lt,Ae[Te].data);for(let Ze=0;Ze<je.length;Ze++){const Ge=je[Ze].image[Te].image;j?Re&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,0,0,Ge.width,Ge.height,Je,lt,Ge.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,dt,Ge.width,Ge.height,0,Je,lt,Ge.data)}}else{j?Re&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Je,lt,Ae[Te]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,dt,Je,lt,Ae[Te]);for(let Ze=0;Ze<je.length;Ze++){const Ge=je[Ze];j?Re&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,0,0,Je,lt,Ge.image[Te]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ze+1,dt,Je,lt,Ge.image[Te])}}}b(M)&&L(s.TEXTURE_CUBE_MAP),ke.__version=ue.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function He(P,M,$,ne,ue,ke){const Oe=c.convert($.format,$.colorSpace),W=c.convert($.type),Ce=N($.internalFormat,Oe,W,$.normalized,$.colorSpace),Pe=a.get(M),ze=a.get($);if(ze.__renderTarget=M,!Pe.__hasExternalTextures){const Ae=Math.max(1,M.width>>ke),at=Math.max(1,M.height>>ke);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,ke,Ce,Ae,at,M.depth,0,Oe,W,null):n.texImage2D(ue,ke,Ce,Ae,at,0,Oe,W,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),or(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ue,ze.__webglTexture,0,jt(M)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ue,ze.__webglTexture,ke),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(P,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const ne=M.depthTexture,ue=ne&&ne.isDepthTexture?ne.type:null,ke=F(M.stencilBuffer,ue),Oe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;or(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt(M),ke,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt(M),ke,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ke,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,P)}else{const ne=M.textures;for(let ue=0;ue<ne.length;ue++){const ke=ne[ue],Oe=c.convert(ke.format,ke.colorSpace),W=c.convert(ke.type),Ce=N(ke.internalFormat,Oe,W,ke.normalized,ke.colorSpace);or(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt(M),Ce,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt(M),Ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(P,M,$){const ne=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=a.get(M.depthTexture);if(ue.__renderTarget=M,(!ue.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,M.depthTexture.addEventListener("dispose",D)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Le(s.TEXTURE_CUBE_MAP,M.depthTexture);const Pe=c.convert(M.depthTexture.format),ze=c.convert(M.depthTexture.type);let Ae;M.depthTexture.format===Xi?Ae=s.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(Ae=s.DEPTH24_STENCIL8);for(let at=0;at<6;at++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Ae,M.width,M.height,0,Pe,ze,null)}}else ae(M.depthTexture,0);const ke=ue.__webglTexture,Oe=jt(M),W=ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,Ce=M.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Xi)or(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,W,ke,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,W,ke,0);else if(M.depthTexture.format===rs)or(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,W,ke,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Ce,W,ke,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(P){const M=a.get(P),$=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const ue=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ue)};ne.addEventListener("dispose",ue),M.__depthDisposeCallback=ue}M.__boundDepthTexture=ne}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let ne=0;ne<6;ne++)ct(M.__webglFramebuffer[ne],P,ne);else{const ne=P.texture.mipmaps;ne&&ne.length>0?ct(M.__webglFramebuffer[0],P,0):ct(M.__webglFramebuffer,P,0)}else if($){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=s.createRenderbuffer(),Et(M.__webglDepthbuffer[ne],P,!1);else{const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=M.__webglDepthbuffer[ne];s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,ke)}}else{const ne=P.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Et(M.__webglDepthbuffer,P,!1);else{const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,ke)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(P,M,$){const ne=a.get(P);M!==void 0&&He(ne.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ot(P)}function Sr(P){const M=P.texture,$=a.get(P),ne=a.get(M);P.addEventListener("dispose",E);const ue=P.textures,ke=P.isWebGLCubeRenderTarget===!0,Oe=ue.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=M.version,d.memory.textures++),ke){$.__webglFramebuffer=[];for(let W=0;W<6;W++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[W]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)$.__webglFramebuffer[W][Ce]=s.createFramebuffer()}else $.__webglFramebuffer[W]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let W=0;W<M.mipmaps.length;W++)$.__webglFramebuffer[W]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let W=0,Ce=ue.length;W<Ce;W++){const Pe=a.get(ue[W]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&or(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let W=0;W<ue.length;W++){const Ce=ue[W];$.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[W]);const Pe=c.convert(Ce.format,Ce.colorSpace),ze=c.convert(Ce.type),Ae=N(Ce.internalFormat,Pe,ze,Ce.normalized,Ce.colorSpace,P.isXRRenderTarget===!0),at=jt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ae,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,$.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Et($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ke){n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),Le(s.TEXTURE_CUBE_MAP,M);for(let W=0;W<6;W++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)He($.__webglFramebuffer[W][Ce],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce);else He($.__webglFramebuffer[W],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);b(M)&&L(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let W=0,Ce=ue.length;W<Ce;W++){const Pe=ue[W],ze=a.get(Pe);let Ae=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ze.__webglTexture),Le(Ae,Pe),He($.__webglFramebuffer,P,Pe,s.COLOR_ATTACHMENT0+W,Ae,0),b(Pe)&&L(Ae)}n.unbindTexture()}else{let W=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(W=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(W,ne.__webglTexture),Le(W,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)He($.__webglFramebuffer[Ce],P,M,s.COLOR_ATTACHMENT0,W,Ce);else He($.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,W,0);b(M)&&L(W),n.unbindTexture()}P.depthBuffer&&ot(P)}function Mr(P){const M=P.textures;for(let $=0,ne=M.length;$<ne;$++){const ue=M[$];if(b(ue)){const ke=z(P),Oe=a.get(ue).__webglTexture;n.bindTexture(ke,Oe),L(ke),n.unbindTexture()}}}const rr=[],lr=[];function sr(P){if(P.samples>0){if(or(P)===!1){const M=P.textures,$=P.width,ne=P.height;let ue=s.COLOR_BUFFER_BIT;const ke=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=a.get(P),W=M.length>1;if(W)for(let Pe=0;Pe<M.length;Pe++)n.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ce=P.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),W){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const ze=a.get(M[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ze,0)}s.blitFramebuffer(0,0,$,ne,0,0,$,ne,ue,s.NEAREST),m===!0&&(rr.length=0,lr.length=0,rr.push(s.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(rr.push(ke),lr.push(ke),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lr)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rr))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let Pe=0;Pe<M.length;Pe++){n.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Pe]);const ze=a.get(M[Pe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,ze,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function jt(P){return Math.min(l.maxSamples,P.samples)}function or(P){const M=a.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(P){const M=d.render.frame;g.get(P)!==M&&(g.set(P,M),P.update())}function kt(P,M){const $=P.colorSpace,ne=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==mu&&$!==Ta&&(Pt.getTransfer($)===Kt?(ne!==Yn||ue!==kn)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",$)),M}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=O,this.resetTextureUnits=ge,this.getTextureUnits=he,this.setTextureUnits=ee,this.setTexture2D=ae,this.setTexture2DArray=_e,this.setTexture3D=Me,this.setTextureCube=I,this.rebindTextures=wt,this.setupRenderTarget=Sr,this.updateRenderTargetMipmap=Mr,this.updateMultisampleRenderTarget=sr,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=He,this.useMultisampledRTT=or,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function I3(s,e){function n(a,l=Ta){let c;const d=Pt.getTransfer(l);if(a===kn)return s.UNSIGNED_BYTE;if(a===bp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Sp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===lx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===cx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===sx)return s.BYTE;if(a===ox)return s.SHORT;if(a===fl)return s.UNSIGNED_SHORT;if(a===yp)return s.INT;if(a===hi)return s.UNSIGNED_INT;if(a===si)return s.FLOAT;if(a===Wi)return s.HALF_FLOAT;if(a===ux)return s.ALPHA;if(a===dx)return s.RGB;if(a===Yn)return s.RGBA;if(a===Xi)return s.DEPTH_COMPONENT;if(a===rs)return s.DEPTH_STENCIL;if(a===hx)return s.RED;if(a===Mp)return s.RED_INTEGER;if(a===is)return s.RG;if(a===Ep)return s.RG_INTEGER;if(a===wp)return s.RGBA_INTEGER;if(a===ou||a===lu||a===cu||a===uu)if(d===Kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Lf||a===If||a===Uf||a===kf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Lf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===If)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Uf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===kf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Df||a===Of||a===Ff||a===zf||a===Bf||a===fu||a===Gf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Df||a===Of)return d===Kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Ff)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===zf)return c.COMPRESSED_R11_EAC;if(a===Bf)return c.COMPRESSED_SIGNED_R11_EAC;if(a===fu)return c.COMPRESSED_RG11_EAC;if(a===Gf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Vf||a===Hf||a===jf||a===Wf||a===Xf||a===qf||a===Yf||a===Kf||a===$f||a===Zf||a===Qf||a===Jf||a===ep||a===tp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Vf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===jf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Wf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Xf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Yf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Kf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$f)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Zf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Qf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Jf)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ep)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===tp)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rp||a===np||a===ip)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===rp)return d===Kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ap||a===sp||a===pu||a===op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===ap)return c.COMPRESSED_RED_RGTC1_EXT;if(a===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===pu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===pl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const U3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k3=`
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

}`;class D3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Rx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Kn({vertexShader:U3,fragmentShader:k3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qi(new Mu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O3 extends ss{constructor(e,n){super();const a=this;let l=null,c=1,d=null,p="local-floor",m=1,f=null,g=null,_=null,v=null,S=null,w=null;const R=typeof XRWebGLBinding<"u",x=new D3,b={},L=n.getContextAttributes();let z=null,N=null;const F=[],U=[],D=new $t;let E=null;const k=new Un;k.viewport=new Pr;const K=new Un;K.viewport=new Pr;const V=[k,K],q=new qM;let ge=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ye=F[te];return ye===void 0&&(ye=new jh,F[te]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(te){let ye=F[te];return ye===void 0&&(ye=new jh,F[te]=ye),ye.getGripSpace()},this.getHand=function(te){let ye=F[te];return ye===void 0&&(ye=new jh,F[te]=ye),ye.getHandSpace()};function ee(te){const ye=U.indexOf(te.inputSource);if(ye===-1)return;const we=F[ye];we!==void 0&&(we.update(te.inputSource,te.frame,f||d),we.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let te=0;te<F.length;te++){const ye=U[te];ye!==null&&(U[te]=null,F[te].disconnect(ye))}ge=null,he=null,x.reset();for(const te in b)delete b[te];e.setRenderTarget(z),S=null,v=null,_=null,l=null,N=null,Le.stop(),a.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,a.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){p=te,a.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||d},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,n)),_},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,we=null,qe=null;L.depth&&(qe=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=L.stencil?rs:Xi,we=L.stencil?pl:hi);const it={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(it),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ui(v.textureWidth,v.textureHeight,{format:Yn,type:kn,depthTexture:new no(v.textureWidth,v.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,ye),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ui(S.framebufferWidth,S.framebufferHeight,{format:Yn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),f=null,d=await l.requestReferenceSpace(p),Le.setContext(l),Le.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(te){for(let ye=0;ye<te.removed.length;ye++){const we=te.removed[ye],qe=U.indexOf(we);qe>=0&&(U[qe]=null,F[qe].disconnect(we))}for(let ye=0;ye<te.added.length;ye++){const we=te.added[ye];let qe=U.indexOf(we);if(qe===-1){for(let He=0;He<F.length;He++)if(He>=U.length){U.push(we),qe=He;break}else if(U[He]===null){U[He]=we,qe=He;break}if(qe===-1)break}const it=F[qe];it&&it.connect(we)}}const ae=new ce,_e=new ce;function Me(te,ye,we){ae.setFromMatrixPosition(ye.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const qe=ae.distanceTo(_e),it=ye.projectionMatrix.elements,He=we.projectionMatrix.elements,Et=it[14]/(it[10]-1),ct=it[14]/(it[10]+1),ot=(it[9]+1)/it[5],wt=(it[9]-1)/it[5],Sr=(it[8]-1)/it[0],Mr=(He[8]+1)/He[0],rr=Et*Sr,lr=Et*Mr,sr=qe/(-Sr+Mr),jt=sr*-Sr;if(ye.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(jt),te.translateZ(sr),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),it[10]===-1)te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const or=Et+sr,Y=ct+sr,kt=rr-jt,Rt=lr+(qe-jt),P=ot*ct/Y*or,M=wt*ct/Y*or;te.projectionMatrix.makePerspective(kt,Rt,P,M,or,Y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function I(te,ye){ye===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ye.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ye=te.near,we=te.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(we=x.depthFar)),q.near=K.near=k.near=ye,q.far=K.far=k.far=we,(ge!==q.near||he!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),ge=q.near,he=q.far),q.layers.mask=te.layers.mask|6,k.layers.mask=q.layers.mask&-5,K.layers.mask=q.layers.mask&-3;const qe=te.parent,it=q.cameras;I(q,qe);for(let He=0;He<it.length;He++)I(it[He],qe);it.length===2?Me(q,k,K):q.projectionMatrix.copy(k.projectionMatrix),J(te,q,qe)};function J(te,ye,we){we===null?te.matrix.copy(ye.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ye.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=lp*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(te){return b[te]};let be=null;function Ue(te,ye){if(g=ye.getViewerPose(f||d),w=ye,g!==null){const we=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let qe=!1;we.length!==q.cameras.length&&(q.cameras.length=0,qe=!0);for(let He=0;He<we.length;He++){const Et=we[He];let ct=null;if(S!==null)ct=S.getViewport(Et);else{const wt=_.getViewSubImage(v,Et);ct=wt.viewport,He===0&&(e.setRenderTargetTextures(N,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(N))}let ot=V[He];ot===void 0&&(ot=new Un,ot.layers.enable(He),ot.viewport=new Pr,V[He]=ot),ot.matrix.fromArray(Et.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Et.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ct.x,ct.y,ct.width,ct.height),He===0&&(q.matrix.copy(ot.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),qe===!0&&q.cameras.push(ot)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=a.getBinding();const He=_.getDepthInformation(we[0]);He&&He.isValid&&He.texture&&x.init(He,l.renderState)}if(it&&it.includes("camera-access")&&R){e.state.unbindTexture(),_=a.getBinding();for(let He=0;He<we.length;He++){const Et=we[He].camera;if(Et){let ct=b[Et];ct||(ct=new Rx,b[Et]=ct);const ot=_.getCameraImage(Et);ct.sourceTexture=ot}}}}for(let we=0;we<F.length;we++){const qe=U[we],it=F[we];qe!==null&&it!==void 0&&it.update(qe,ye,f||d)}be&&be(te,ye),ye.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ye}),w=null}const Le=new Ix;Le.setAnimationLoop(Ue),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}}const F3=new Ur,Bx=new _t;Bx.set(-1,0,0,0,1,0,0,0,1);function z3(s,e){function n(x,b){x.matrixAutoUpdate===!0&&x.updateMatrix(),b.value.copy(x.matrix)}function a(x,b){b.color.getRGB(x.fogColor.value,Nx(s)),b.isFog?(x.fogNear.value=b.near,x.fogFar.value=b.far):b.isFogExp2&&(x.fogDensity.value=b.density)}function l(x,b,L,z,N){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(x,b):b.isMeshLambertMaterial?(c(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(x,b),_(x,b)):b.isMeshPhongMaterial?(c(x,b),g(x,b),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(x,b),v(x,b),b.isMeshPhysicalMaterial&&S(x,b,N)):b.isMeshMatcapMaterial?(c(x,b),w(x,b)):b.isMeshDepthMaterial?c(x,b):b.isMeshDistanceMaterial?(c(x,b),R(x,b)):b.isMeshNormalMaterial?c(x,b):b.isLineBasicMaterial?(d(x,b),b.isLineDashedMaterial&&p(x,b)):b.isPointsMaterial?m(x,b,L,z):b.isSpriteMaterial?f(x,b):b.isShadowMaterial?(x.color.value.copy(b.color),x.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(x,b){x.opacity.value=b.opacity,b.color&&x.diffuse.value.copy(b.color),b.emissive&&x.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(x.map.value=b.map,n(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,n(b.alphaMap,x.alphaMapTransform)),b.bumpMap&&(x.bumpMap.value=b.bumpMap,n(b.bumpMap,x.bumpMapTransform),x.bumpScale.value=b.bumpScale,b.side===ln&&(x.bumpScale.value*=-1)),b.normalMap&&(x.normalMap.value=b.normalMap,n(b.normalMap,x.normalMapTransform),x.normalScale.value.copy(b.normalScale),b.side===ln&&x.normalScale.value.negate()),b.displacementMap&&(x.displacementMap.value=b.displacementMap,n(b.displacementMap,x.displacementMapTransform),x.displacementScale.value=b.displacementScale,x.displacementBias.value=b.displacementBias),b.emissiveMap&&(x.emissiveMap.value=b.emissiveMap,n(b.emissiveMap,x.emissiveMapTransform)),b.specularMap&&(x.specularMap.value=b.specularMap,n(b.specularMap,x.specularMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest);const L=e.get(b),z=L.envMap,N=L.envMapRotation;z&&(x.envMap.value=z,x.envMapRotation.value.setFromMatrix4(F3.makeRotationFromEuler(N)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Bx),x.reflectivity.value=b.reflectivity,x.ior.value=b.ior,x.refractionRatio.value=b.refractionRatio),b.lightMap&&(x.lightMap.value=b.lightMap,x.lightMapIntensity.value=b.lightMapIntensity,n(b.lightMap,x.lightMapTransform)),b.aoMap&&(x.aoMap.value=b.aoMap,x.aoMapIntensity.value=b.aoMapIntensity,n(b.aoMap,x.aoMapTransform))}function d(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,b.map&&(x.map.value=b.map,n(b.map,x.mapTransform))}function p(x,b){x.dashSize.value=b.dashSize,x.totalSize.value=b.dashSize+b.gapSize,x.scale.value=b.scale}function m(x,b,L,z){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.size.value=b.size*L,x.scale.value=z*.5,b.map&&(x.map.value=b.map,n(b.map,x.uvTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,n(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}function f(x,b){x.diffuse.value.copy(b.color),x.opacity.value=b.opacity,x.rotation.value=b.rotation,b.map&&(x.map.value=b.map,n(b.map,x.mapTransform)),b.alphaMap&&(x.alphaMap.value=b.alphaMap,n(b.alphaMap,x.alphaMapTransform)),b.alphaTest>0&&(x.alphaTest.value=b.alphaTest)}function g(x,b){x.specular.value.copy(b.specular),x.shininess.value=Math.max(b.shininess,1e-4)}function _(x,b){b.gradientMap&&(x.gradientMap.value=b.gradientMap)}function v(x,b){x.metalness.value=b.metalness,b.metalnessMap&&(x.metalnessMap.value=b.metalnessMap,n(b.metalnessMap,x.metalnessMapTransform)),x.roughness.value=b.roughness,b.roughnessMap&&(x.roughnessMap.value=b.roughnessMap,n(b.roughnessMap,x.roughnessMapTransform)),b.envMap&&(x.envMapIntensity.value=b.envMapIntensity)}function S(x,b,L){x.ior.value=b.ior,b.sheen>0&&(x.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),x.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(x.sheenColorMap.value=b.sheenColorMap,n(b.sheenColorMap,x.sheenColorMapTransform)),b.sheenRoughnessMap&&(x.sheenRoughnessMap.value=b.sheenRoughnessMap,n(b.sheenRoughnessMap,x.sheenRoughnessMapTransform))),b.clearcoat>0&&(x.clearcoat.value=b.clearcoat,x.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(x.clearcoatMap.value=b.clearcoatMap,n(b.clearcoatMap,x.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,n(b.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(x.clearcoatNormalMap.value=b.clearcoatNormalMap,n(b.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===ln&&x.clearcoatNormalScale.value.negate())),b.dispersion>0&&(x.dispersion.value=b.dispersion),b.iridescence>0&&(x.iridescence.value=b.iridescence,x.iridescenceIOR.value=b.iridescenceIOR,x.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(x.iridescenceMap.value=b.iridescenceMap,n(b.iridescenceMap,x.iridescenceMapTransform)),b.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=b.iridescenceThicknessMap,n(b.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),b.transmission>0&&(x.transmission.value=b.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),b.transmissionMap&&(x.transmissionMap.value=b.transmissionMap,n(b.transmissionMap,x.transmissionMapTransform)),x.thickness.value=b.thickness,b.thicknessMap&&(x.thicknessMap.value=b.thicknessMap,n(b.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=b.attenuationDistance,x.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(x.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(x.anisotropyMap.value=b.anisotropyMap,n(b.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=b.specularIntensity,x.specularColor.value.copy(b.specularColor),b.specularColorMap&&(x.specularColorMap.value=b.specularColorMap,n(b.specularColorMap,x.specularColorMapTransform)),b.specularIntensityMap&&(x.specularIntensityMap.value=b.specularIntensityMap,n(b.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,b){b.matcap&&(x.matcap.value=b.matcap)}function R(x,b){const L=e.get(b).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function B3(s,e,n,a){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,F){const U=F.program;a.uniformBlockBinding(N,U)}function f(N,F){let U=l[N.id];U===void 0&&(x(N),U=g(N),l[N.id]=U,N.addEventListener("dispose",L));const D=F.program;a.updateUBOMapping(N,D);const E=e.render.frame;c[N.id]!==E&&(v(N),c[N.id]=E)}function g(N){const F=_();N.__bindingPointIndex=F;const U=s.createBuffer(),D=N.__size,E=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,D,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,U),U}function _(){for(let N=0;N<p;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const F=l[N.id],U=N.uniforms,D=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let E=0,k=U.length;E<k;E++){const K=U[E];if(Array.isArray(K))for(let V=0,q=K.length;V<q;V++)S(K[V],E,V,D);else S(K,E,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,F,U,D){if(R(N,F,U,D)===!0){const E=N.__offset,k=N.value;if(Array.isArray(k)){let K=0;for(let V=0;V<k.length;V++){const q=k[V],ge=b(q);w(q,N.__data,K),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(K+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(k,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,N.__data)}}function w(N,F,U){typeof N=="number"||typeof N=="boolean"?F[0]=N:N.isMatrix3?(F[0]=N.elements[0],F[1]=N.elements[1],F[2]=N.elements[2],F[3]=0,F[4]=N.elements[3],F[5]=N.elements[4],F[6]=N.elements[5],F[7]=0,F[8]=N.elements[6],F[9]=N.elements[7],F[10]=N.elements[8],F[11]=0):ArrayBuffer.isView(N)?F.set(new N.constructor(N.buffer,N.byteOffset,F.length)):N.toArray(F,U)}function R(N,F,U,D){const E=N.value,k=F+"_"+U;if(D[k]===void 0)return typeof E=="number"||typeof E=="boolean"?D[k]=E:ArrayBuffer.isView(E)?D[k]=E.slice():D[k]=E.clone(),!0;{const K=D[k];if(typeof E=="number"||typeof E=="boolean"){if(K!==E)return D[k]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(K.equals(E)===!1)return K.copy(E),!0}}return!1}function x(N){const F=N.uniforms;let U=0;const D=16;for(let k=0,K=F.length;k<K;k++){const V=Array.isArray(F[k])?F[k]:[F[k]];for(let q=0,ge=V.length;q<ge;q++){const he=V[q],ee=Array.isArray(he.value)?he.value:[he.value];for(let O=0,G=ee.length;O<G;O++){const ae=ee[O],_e=b(ae),Me=U%D,I=Me%_e.boundary,J=Me+I;U+=I,J!==0&&D-J<_e.storage&&(U+=D-J),he.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=U,U+=_e.storage}}}const E=U%D;return E>0&&(U+=D-E),N.__size=U,N.__cache={},this}function b(N){const F={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(F.boundary=4,F.storage=4):N.isVector2?(F.boundary=8,F.storage=8):N.isVector3||N.isColor?(F.boundary=16,F.storage=12):N.isVector4?(F.boundary=16,F.storage=16):N.isMatrix3?(F.boundary=48,F.storage=48):N.isMatrix4?(F.boundary=64,F.storage=64):N.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(F.boundary=16,F.storage=N.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",N),F}function L(N){const F=N.target;F.removeEventListener("dispose",L);const U=d.indexOf(F.__bindingPointIndex);d.splice(U,1),s.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function z(){for(const N in l)s.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:f,dispose:z}}const G3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function V3(){return ni===null&&(ni=new LM(G3,16,16,is,Wi),ni.name="DFG_LUT",ni.minFilter=$r,ni.magFilter=$r,ni.wrapS=Bi,ni.wrapT=Bi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class H3{constructor(e={}){const{canvas:n=cM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=kn}=e;this.isWebGLRenderer=!0;let w;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=a.getContextAttributes().alpha}else w=d;const R=S,x=new Set([wp,Ep,Mp]),b=new Set([kn,hi,fl,pl,bp,Sp]),L=new Uint32Array(4),z=new Int32Array(4),N=new ce;let F=null,U=null;const D=[],E=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let V=!1,q=null,ge=null,he=null,ee=null;this._outputColorSpace=In;let O=0,G=0,ae=null,_e=-1,Me=null;const I=new Pr,J=new Pr;let be=null;const Ue=new Vt(0);let Le=0,te=n.width,ye=n.height,we=1,qe=null,it=null;const He=new Pr(0,0,te,ye),Et=new Pr(0,0,te,ye);let ct=!1;const ot=new Cx;let wt=!1,Sr=!1;const Mr=new Ur,rr=new ce,lr=new Pr,sr={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function or(){return ae===null?we:1}let Y=a;function kt(T,X){return n.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xp}`),n.addEventListener("webglcontextlost",_r,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",zr,!1),Y===null){const X="webgl2";if(Y=kt(X,T),Y===null)throw kt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ot("WebGLRenderer: "+T.message),T}let Rt,P,M,$,ne,ue,ke,Oe,W,Ce,Pe,ze,Ae,at,Je,lt,dt,j,pe,Re,Fe,je,Te;function Ze(){Rt=new VT(Y),Rt.init(),Fe=new I3(Y,Rt),P=new UT(Y,Rt,e,Fe),M=new P3(Y,Rt),P.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),ge=Y.createFramebuffer(),he=Y.createFramebuffer(),ee=Y.createFramebuffer(),$=new WT(Y),ne=new v3,ue=new L3(Y,Rt,M,ne,P,Fe,$),ke=new GT(K),Oe=new KM(Y),je=new LT(Y,Oe),W=new HT(Y,Oe,$,je),Ce=new qT(Y,W,Oe,je,$),j=new XT(Y,P,ue),Je=new kT(ne),Pe=new g3(K,ke,Rt,P,je,Je),ze=new z3(K,ne),Ae=new x3,at=new w3(Rt),dt=new PT(K,ke,M,Ce,w,m),lt=new N3(K,Ce,P),Te=new B3(Y,$,P,M),pe=new IT(Y,Rt,$),Re=new jT(Y,Rt,$),$.programs=Pe.programs,K.capabilities=P,K.extensions=Rt,K.properties=ne,K.renderLists=Ae,K.shadowMap=lt,K.state=M,K.info=$}Ze(),R!==kn&&(k=new KT(R,n.width,n.height,p,l,c));const Ge=new O3(K,Y);this.xr=Ge,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=Rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(T){T!==void 0&&(we=T,this.setSize(te,ye,!1))},this.getSize=function(T){return T.set(te,ye)},this.setSize=function(T,X,oe=!0){if(Ge.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ye=X,n.width=Math.floor(T*we),n.height=Math.floor(X*we),oe===!0&&(n.style.width=T+"px",n.style.height=X+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(te*we,ye*we).floor()},this.setDrawingBufferSize=function(T,X,oe){te=T,ye=X,we=oe,n.width=Math.floor(T*oe),n.height=Math.floor(X*oe),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(R===kn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(He)},this.setViewport=function(T,X,oe,re){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,X,oe,re),M.viewport(I.copy(He).multiplyScalar(we).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,X,oe,re){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,X,oe,re),M.scissor(J.copy(Et).multiplyScalar(we).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){M.setScissorTest(ct=T)},this.setOpaqueSort=function(T){qe=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,oe=!0){let re=0;if(T){let Q=!1;if(ae!==null){const Ie=ae.texture.format;Q=x.has(Ie)}if(Q){const Ie=ae.texture.type,Be=b.has(Ie),We=dt.getClearColor(),Xe=dt.getClearAlpha(),$e=We.r,tt=We.g,gt=We.b;Be?(L[0]=$e,L[1]=tt,L[2]=gt,L[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,L)):(z[0]=$e,z[1]=tt,z[2]=gt,z[3]=Xe,Y.clearBufferiv(Y.COLOR,0,z))}else re|=Y.COLOR_BUFFER_BIT}X&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),q=T},this.dispose=function(){n.removeEventListener("webglcontextlost",_r,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",zr,!1),dt.dispose(),Ae.dispose(),at.dispose(),ne.dispose(),ke.dispose(),Ce.dispose(),je.dispose(),Te.dispose(),Pe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",De),Ge.removeEventListener("sessionend",Ee),et.stop()};function _r(T){T.preventDefault(),D0("WebGLRenderer: Context Lost."),V=!0}function It(){D0("WebGLRenderer: Context Restored."),V=!1;const T=$.autoReset,X=lt.enabled,oe=lt.autoUpdate,re=lt.needsUpdate,Q=lt.type;Ze(),$.autoReset=T,lt.enabled=X,lt.autoUpdate=oe,lt.needsUpdate=re,lt.type=Q}function zr(T){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Br(T){const X=T.target;X.removeEventListener("dispose",Br),fi(X)}function fi(T){pi(T),ne.remove(T)}function pi(T){const X=ne.get(T).programs;X!==void 0&&(X.forEach(function(oe){Pe.releaseProgram(oe)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,oe,re,Q,Ie){X===null&&(X=sr);const Be=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,We=pr(T,X,oe,re,Q);M.setMaterial(re,Be);let Xe=oe.index,$e=1;if(re.wireframe===!0){if(Xe=W.getWireframeAttribute(oe),Xe===void 0)return;$e=2}const tt=oe.drawRange,gt=oe.attributes.position;let rt=tt.start*$e,Dt=(tt.start+tt.count)*$e;Ie!==null&&(rt=Math.max(rt,Ie.start*$e),Dt=Math.min(Dt,(Ie.start+Ie.count)*$e)),Xe!==null?(rt=Math.max(rt,0),Dt=Math.min(Dt,Xe.count)):gt!=null&&(rt=Math.max(rt,0),Dt=Math.min(Dt,gt.count));const ir=Dt-rt;if(ir<0||ir===1/0)return;je.setup(Q,re,We,oe,Xe);let Ft,Qt=pe;if(Xe!==null&&(Ft=Oe.get(Xe),Qt=Re,Qt.setIndex(Ft)),Q.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*or()),Qt.setMode(Y.LINES)):Qt.setMode(Y.TRIANGLES);else if(Q.isLine){let Ut=re.linewidth;Ut===void 0&&(Ut=1),M.setLineWidth(Ut*or()),Q.isLineSegments?Qt.setMode(Y.LINES):Q.isLineLoop?Qt.setMode(Y.LINE_LOOP):Qt.setMode(Y.LINE_STRIP)}else Q.isPoints?Qt.setMode(Y.POINTS):Q.isSprite&&Qt.setMode(Y.TRIANGLES);if(Q.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ut=Q._multiDrawStarts,Ye=Q._multiDrawCounts,Xr=Q._multiDrawCount,On=Xe?Oe.get(Xe).bytesPerElement:1,Lr=ne.get(re).currentProgram.getUniforms();for(let dn=0;dn<Xr;dn++)Lr.setValue(Y,"_gl_DrawID",dn),Qt.render(Ut[dn]/On,Ye[dn])}else if(Q.isInstancedMesh)Qt.renderInstances(rt,ir,Q.count);else if(oe.isInstancedBufferGeometry){const Ut=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ye=Math.min(oe.instanceCount,Ut);Qt.renderInstances(rt,ir,Ye)}else Qt.render(rt,ir)};function mi(T,X,oe){T.transparent===!0&&T.side===zi&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,nr(T,X,oe),T.side=Aa,T.needsUpdate=!0,nr(T,X,oe),T.side=zi):nr(T,X,oe)}this.compile=function(T,X,oe=null){oe===null&&(oe=T),U=at.get(oe),U.init(X),E.push(U),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),T!==oe&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),U.setupLights();const re=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){const We=Ie[Be];mi(We,oe,Q),re.add(We)}else mi(Ie,oe,Q),re.add(Ie)}),U=E.pop(),re},this.compileAsync=function(T,X,oe=null){const re=this.compile(T,X,oe);return new Promise(Q=>{function Ie(){if(re.forEach(function(Be){ne.get(Be).currentProgram.isReady()&&re.delete(Be)}),re.size===0){Q(T);return}setTimeout(Ie,10)}Rt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let gi=null;function fe(T){gi&&gi(T)}function De(){et.stop()}function Ee(){et.start()}const et=new Ix;et.setAnimationLoop(fe),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(T){gi=T,Ge.setAnimationLoop(T),T===null?et.stop():et.start()},Ge.addEventListener("sessionstart",De),Ge.addEventListener("sessionend",Ee),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(T,X);const oe=Ge.enabled===!0&&Ge.isPresenting===!0,re=k!==null&&(ae===null||oe)&&k.begin(K,ae);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(X),X=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(K,T,X,ae),U=at.get(T,E.length),U.init(X),U.state.textureUnits=ue.getTextureUnits(),E.push(U),Mr.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ot.setFromProjectionMatrix(Mr,oi,X.reversedDepth),Sr=this.localClippingEnabled,wt=Je.init(this.clippingPlanes,Sr),F=Ae.get(T,D.length),F.init(),D.push(F),Ge.enabled===!0&&Ge.isPresenting===!0){const Ie=K.xr.getDepthSensingMesh();Ie!==null&&pt(Ie,X,-1/0,K.sortObjects)}pt(T,X,0,K.sortObjects),F.finish(),K.sortObjects===!0&&F.sort(qe,it,X.reversedDepth),jt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,jt&&dt.addToRenderList(F,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),wt===!0&&Je.beginShadows();const Q=U.state.shadowsArray;if(lt.render(Q,T,X),wt===!0&&Je.endShadows(),(re&&k.hasRenderPass())===!1){const Ie=F.opaque,Be=F.transmissive;if(U.setupLights(),X.isArrayCamera){const We=X.cameras;if(Be.length>0)for(let Xe=0,$e=We.length;Xe<$e;Xe++){const tt=We[Xe];fr(Ie,Be,T,tt)}jt&&dt.render(T);for(let Xe=0,$e=We.length;Xe<$e;Xe++){const tt=We[Xe];Tt(F,T,tt,tt.viewport)}}else Be.length>0&&fr(Ie,Be,T,X),jt&&dt.render(T),Tt(F,T,X)}ae!==null&&G===0&&(ue.updateMultisampleRenderTarget(ae),ue.updateRenderTargetMipmap(ae)),re&&k.end(K),T.isScene===!0&&T.onAfterRender(K,T,X),je.resetDefaultState(),_e=-1,Me=null,E.pop(),E.length>0?(U=E[E.length-1],ue.setTextureUnits(U.state.textureUnits),wt===!0&&Je.setGlobalState(K.clippingPlanes,U.state.camera)):U=null,D.pop(),D.length>0?F=D[D.length-1]:F=null,q!==null&&q.renderEnd()};function pt(T,X,oe,re){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLightProbeGrid)U.pushLightProbeGrid(T);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ot.intersectsSprite(T)){re&&lr.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Mr);const Ie=Ce.update(T),Be=T.material;Be.visible&&F.push(T,Ie,Be,oe,lr.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ot.intersectsObject(T))){const Ie=Ce.update(T),Be=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lr.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),lr.copy(Ie.boundingSphere.center)),lr.applyMatrix4(T.matrixWorld).applyMatrix4(Mr)),Array.isArray(Be)){const We=Ie.groups;for(let Xe=0,$e=We.length;Xe<$e;Xe++){const tt=We[Xe],gt=Be[tt.materialIndex];gt&&gt.visible&&F.push(T,Ie,gt,oe,lr.z,tt)}}else Be.visible&&F.push(T,Ie,Be,oe,lr.z,null)}}const Q=T.children;for(let Ie=0,Be=Q.length;Ie<Be;Ie++)pt(Q[Ie],X,oe,re)}function Tt(T,X,oe,re){const{opaque:Q,transmissive:Ie,transparent:Be}=T;U.setupLightsView(oe),wt===!0&&Je.setGlobalState(K.clippingPlanes,oe),re&&M.viewport(I.copy(re)),Q.length>0&&Wt(Q,X,oe),Ie.length>0&&Wt(Ie,X,oe),Be.length>0&&Wt(Be,X,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function fr(T,X,oe,re){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[re.id]===void 0){const gt=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[re.id]=new ui(1,1,{generateMipmaps:!0,type:gt?Wi:kn,minFilter:ts,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Q=U.state.transmissionRenderTarget[re.id],Ie=re.viewport||I;Q.setSize(Ie.z*K.transmissionResolutionScale,Ie.w*K.transmissionResolutionScale);const Be=K.getRenderTarget(),We=K.getActiveCubeFace(),Xe=K.getActiveMipmapLevel();K.setRenderTarget(Q),K.getClearColor(Ue),Le=K.getClearAlpha(),Le<1&&K.setClearColor(16777215,.5),K.clear(),jt&&dt.render(oe);const $e=K.toneMapping;K.toneMapping=ci;const tt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),U.setupLightsView(re),wt===!0&&Je.setGlobalState(K.clippingPlanes,re),Wt(T,oe,re),ue.updateMultisampleRenderTarget(Q),ue.updateRenderTargetMipmap(Q),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let rt=0,Dt=X.length;rt<Dt;rt++){const ir=X[rt],{object:Ft,geometry:Qt,material:Ut,group:Ye}=ir;if(Ut.side===zi&&Ft.layers.test(re.layers)){const Xr=Ut.side;Ut.side=ln,Ut.needsUpdate=!0,cr(Ft,oe,re,Qt,Ut,Ye),Ut.side=Xr,Ut.needsUpdate=!0,gt=!0}}gt===!0&&(ue.updateMultisampleRenderTarget(Q),ue.updateRenderTargetMipmap(Q))}K.setRenderTarget(Be,We,Xe),K.setClearColor(Ue,Le),tt!==void 0&&(re.viewport=tt),K.toneMapping=$e}function Wt(T,X,oe){const re=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ie=T.length;Q<Ie;Q++){const Be=T[Q],{object:We,geometry:Xe,group:$e}=Be;let tt=Be.material;tt.allowOverride===!0&&re!==null&&(tt=re),We.layers.test(oe.layers)&&cr(We,X,oe,Xe,tt,$e)}}function cr(T,X,oe,re,Q,Ie){T.onBeforeRender(K,X,oe,re,Q,Ie),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(K,X,oe,re,T,Ie),Q.transparent===!0&&Q.side===zi&&Q.forceSinglePass===!1?(Q.side=ln,Q.needsUpdate=!0,K.renderBufferDirect(oe,X,re,Q,T,Ie),Q.side=Aa,Q.needsUpdate=!0,K.renderBufferDirect(oe,X,re,Q,T,Ie),Q.side=zi):K.renderBufferDirect(oe,X,re,Q,T,Ie),T.onAfterRender(K,X,oe,re,Q,Ie)}function nr(T,X,oe){X.isScene!==!0&&(X=sr);const re=ne.get(T),Q=U.state.lights,Ie=U.state.shadowsArray,Be=Q.state.version,We=Pe.getParameters(T,Q.state,Ie,X,oe,U.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(We);let $e=re.programs;re.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;re.envMap=ke.get(T.envMap||re.environment,tt),re.envMapRotation=re.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",Br),$e=new Map,re.programs=$e);let gt=$e.get(Xe);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===Be)return Ne(T,We),gt}else We.uniforms=Pe.getUniforms(T),q!==null&&T.isNodeMaterial&&q.build(T,oe,We),T.onBeforeCompile(We,K),gt=Pe.acquireProgram(We,Xe),$e.set(Xe,gt),re.uniforms=We.uniforms;const rt=re.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(rt.clippingPlanes=Je.uniform),Ne(T,We),re.needsLights=un(T),re.lightsStateVersion=Be,re.needsLights&&(rt.ambientLightColor.value=Q.state.ambient,rt.lightProbe.value=Q.state.probe,rt.directionalLights.value=Q.state.directional,rt.directionalLightShadows.value=Q.state.directionalShadow,rt.spotLights.value=Q.state.spot,rt.spotLightShadows.value=Q.state.spotShadow,rt.rectAreaLights.value=Q.state.rectArea,rt.ltc_1.value=Q.state.rectAreaLTC1,rt.ltc_2.value=Q.state.rectAreaLTC2,rt.pointLights.value=Q.state.point,rt.pointLightShadows.value=Q.state.pointShadow,rt.hemisphereLights.value=Q.state.hemi,rt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,rt.spotLightMatrix.value=Q.state.spotLightMatrix,rt.spotLightMap.value=Q.state.spotLightMap,rt.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.lightProbeGrid=U.state.lightProbeGridArray.length>0,re.currentProgram=gt,re.uniformsList=null,gt}function st(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=du.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Ne(T,X){const oe=ne.get(T);oe.outputColorSpace=X.outputColorSpace,oe.batching=X.batching,oe.batchingColor=X.batchingColor,oe.instancing=X.instancing,oe.instancingColor=X.instancingColor,oe.instancingMorph=X.instancingMorph,oe.skinning=X.skinning,oe.morphTargets=X.morphTargets,oe.morphNormals=X.morphNormals,oe.morphColors=X.morphColors,oe.morphTargetsCount=X.morphTargetsCount,oe.numClippingPlanes=X.numClippingPlanes,oe.numIntersection=X.numClipIntersection,oe.vertexAlphas=X.vertexAlphas,oe.vertexTangents=X.vertexTangents,oe.toneMapping=X.toneMapping}function Zt(T,X){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;N.setFromMatrixPosition(X.matrixWorld);for(let oe=0,re=T.length;oe<re;oe++){const Q=T[oe];if(Q.texture!==null&&Q.boundingBox.containsPoint(N))return Q}return null}function pr(T,X,oe,re,Q){X.isScene!==!0&&(X=sr),ue.resetTextureUnits();const Ie=X.fog,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,We=ae===null?K.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Pt.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,$e=ke.get(re.envMap||Be,Xe),tt=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,gt=!!oe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),rt=!!oe.morphAttributes.position,Dt=!!oe.morphAttributes.normal,ir=!!oe.morphAttributes.color;let Ft=ci;re.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ft=K.toneMapping);const Qt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=Qt!==void 0?Qt.length:0,Ye=ne.get(re),Xr=U.state.lights;if(wt===!0&&(Sr===!0||T!==Me)){const zt=T===Me&&re.id===_e;Je.setState(re,T,zt)}let On=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Xr.state.version||Ye.outputColorSpace!==We||Q.isBatchedMesh&&Ye.batching===!1||!Q.isBatchedMesh&&Ye.batching===!0||Q.isBatchedMesh&&Ye.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ye.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ye.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ye.instancingMorph===!1&&Q.morphTexture!==null||Ye.envMap!==$e||re.fog===!0&&Ye.fog!==Ie||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Je.numPlanes||Ye.numIntersection!==Je.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==gt||Ye.morphTargets!==rt||Ye.morphNormals!==Dt||Ye.morphColors!==ir||Ye.toneMapping!==Ft||Ye.morphTargetsCount!==Ut||!!Ye.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(On=!0):(On=!0,Ye.__version=re.version);let Lr=Ye.currentProgram;On===!0&&(Lr=nr(re,X,Q),q&&re.isNodeMaterial&&q.onUpdateProgram(re,Lr,Ye));let dn=!1,Fn=!1,hn=!1;const Xt=Lr.getUniforms(),mr=Ye.uniforms;if(M.useProgram(Lr.program)&&(dn=!0,Fn=!0,hn=!0),re.id!==_e&&(_e=re.id,Fn=!0),Ye.needsLights){const zt=Zt(U.state.lightProbeGridArray,Q);Ye.lightProbeGrid!==zt&&(Ye.lightProbeGrid=zt,Fn=!0)}if(dn||Me!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Xt.setValue(Y,"projectionMatrix",T.projectionMatrix),Xt.setValue(Y,"viewMatrix",T.matrixWorldInverse);const zt=Xt.map.cameraPosition;zt!==void 0&&zt.setValue(Y,rr.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Xt.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Xt.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),Me!==T&&(Me=T,Fn=!0,hn=!0)}if(Ye.needsLights&&(Xr.state.directionalShadowMap.length>0&&Xt.setValue(Y,"directionalShadowMap",Xr.state.directionalShadowMap,ue),Xr.state.spotShadowMap.length>0&&Xt.setValue(Y,"spotShadowMap",Xr.state.spotShadowMap,ue),Xr.state.pointShadowMap.length>0&&Xt.setValue(Y,"pointShadowMap",Xr.state.pointShadowMap,ue)),Q.isSkinnedMesh){Xt.setOptional(Y,Q,"bindMatrix"),Xt.setOptional(Y,Q,"bindMatrixInverse");const zt=Q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Xt.setValue(Y,"boneTexture",zt.boneTexture,ue))}Q.isBatchedMesh&&(Xt.setOptional(Y,Q,"batchingTexture"),Xt.setValue(Y,"batchingTexture",Q._matricesTexture,ue),Xt.setOptional(Y,Q,"batchingIdTexture"),Xt.setValue(Y,"batchingIdTexture",Q._indirectTexture,ue),Xt.setOptional(Y,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Xt.setValue(Y,"batchingColorTexture",Q._colorsTexture,ue));const zn=oe.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&j.update(Q,oe,Lr),(Fn||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,Xt.setValue(Y,"receiveShadow",Q.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(mr.envMapIntensity.value=X.environmentIntensity),mr.dfgLUT!==void 0&&(mr.dfgLUT.value=V3()),Fn){if(Xt.setValue(Y,"toneMappingExposure",K.toneMappingExposure),Ye.needsLights&&bt(mr,hn),Ie&&re.fog===!0&&ze.refreshFogUniforms(mr,Ie),ze.refreshMaterialUniforms(mr,re,we,ye,U.state.transmissionRenderTarget[T.id]),Ye.needsLights&&Ye.lightProbeGrid){const zt=Ye.lightProbeGrid;mr.probesSH.value=zt.texture,mr.probesMin.value.copy(zt.boundingBox.min),mr.probesMax.value.copy(zt.boundingBox.max),mr.probesResolution.value.copy(zt.resolution)}du.upload(Y,st(Ye),mr,ue)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(du.upload(Y,st(Ye),mr,ue),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Xt.setValue(Y,"center",Q.center),Xt.setValue(Y,"modelViewMatrix",Q.modelViewMatrix),Xt.setValue(Y,"normalMatrix",Q.normalMatrix),Xt.setValue(Y,"modelMatrix",Q.matrixWorld),re.uniformsGroups!==void 0){const zt=re.uniformsGroups;for(let Ra=0,$i=zt.length;Ra<$i;Ra++){const Na=zt[Ra];Te.update(Na,Lr),Te.bind(Na,Lr)}}return Lr}function bt(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function un(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(T,X,oe){const re=ne.get(T);re.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ne.get(T.texture).__webglTexture=X,ne.get(T.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:oe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const oe=ne.get(T);oe.__webglFramebuffer=X,oe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,oe=0){ae=T,O=X,G=oe;let re=null,Q=!1,Ie=!1;if(T){const Be=ne.get(T);if(Be.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Be.__webglFramebuffer),I.copy(T.viewport),J.copy(T.scissor),be=T.scissorTest,M.viewport(I),M.scissor(J),M.setScissorTest(be),_e=-1;return}else if(Be.__webglFramebuffer===void 0)ue.setupRenderTarget(T);else if(Be.__hasExternalTextures)ue.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&ne.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Xe=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?re=Xe[X][oe]:re=Xe[X],Q=!0):T.samples>0&&ue.useMultisampledRTT(T)===!1?re=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?re=Xe[oe]:re=Xe,I.copy(T.viewport),J.copy(T.scissor),be=T.scissorTest}else I.copy(He).multiplyScalar(we).floor(),J.copy(Et).multiplyScalar(we).floor(),be=ct;if(oe!==0&&(re=ge),M.bindFramebuffer(Y.FRAMEBUFFER,re)&&M.drawBuffers(T,re),M.viewport(I),M.scissor(J),M.setScissorTest(be),Q){const Be=ne.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,oe)}else if(Ie){const Be=X;for(let We=0;We<T.textures.length;We++){const Xe=ne.get(T.textures[We]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+We,Xe.__webglTexture,oe,Be)}}else if(T!==null&&oe!==0){const Be=ne.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Be.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(T,X,oe,re,Q,Ie,Be,We=0){if(!(T&&T.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){M.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const $e=T.textures[We],tt=$e.format,gt=$e.type;if(T.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+We),!P.textureFormatReadable(tt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(gt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-re&&oe>=0&&oe<=T.height-Q&&Y.readPixels(X,oe,re,Q,Fe.convert(tt),Fe.convert(gt),Ie)}finally{const $e=ae!==null?ne.get(ae).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(T,X,oe,re,Q,Ie,Be,We=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(X>=0&&X<=T.width-re&&oe>=0&&oe<=T.height-Q){M.bindFramebuffer(Y.FRAMEBUFFER,Xe);const $e=T.textures[We],tt=$e.format,gt=$e.type;if(T.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+We),!P.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,rt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(X,oe,re,Q,Fe.convert(tt),Fe.convert(gt),0);const Dt=ae!==null?ne.get(ae).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,Dt);const ir=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await uM(Y,ir,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,rt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.deleteBuffer(rt),Y.deleteSync(ir),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,oe=0){const re=Math.pow(2,-oe),Q=Math.floor(T.image.width*re),Ie=Math.floor(T.image.height*re),Be=X!==null?X.x:0,We=X!==null?X.y:0;ue.setTexture2D(T,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,Be,We,Q,Ie),M.unbindTexture()},this.copyTextureToTexture=function(T,X,oe=null,re=null,Q=0,Ie=0){let Be,We,Xe,$e,tt,gt,rt,Dt,ir;const Ft=T.isCompressedTexture?T.mipmaps[Ie]:T.image;if(oe!==null)Be=oe.max.x-oe.min.x,We=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,tt=oe.min.y,gt=oe.isBox3?oe.min.z:0;else{const mr=Math.pow(2,-Q);Be=Math.floor(Ft.width*mr),We=Math.floor(Ft.height*mr),T.isDataArrayTexture?Xe=Ft.depth:T.isData3DTexture?Xe=Math.floor(Ft.depth*mr):Xe=1,$e=0,tt=0,gt=0}re!==null?(rt=re.x,Dt=re.y,ir=re.z):(rt=0,Dt=0,ir=0);const Qt=Fe.convert(X.format),Ut=Fe.convert(X.type);let Ye;X.isData3DTexture?(ue.setTexture3D(X,0),Ye=Y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ue.setTexture2DArray(X,0),Ye=Y.TEXTURE_2D_ARRAY):(ue.setTexture2D(X,0),Ye=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const Xr=M.getParameter(Y.UNPACK_ROW_LENGTH),On=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),Lr=M.getParameter(Y.UNPACK_SKIP_PIXELS),dn=M.getParameter(Y.UNPACK_SKIP_ROWS),Fn=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Ft.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ft.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,$e),M.pixelStorei(Y.UNPACK_SKIP_ROWS,tt),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,gt);const hn=T.isDataArrayTexture||T.isData3DTexture,Xt=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const mr=ne.get(T),zn=ne.get(X),zt=ne.get(mr.__renderTarget),Ra=ne.get(zn.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,zt.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let $i=0;$i<Xe;$i++)hn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ne.get(T).__webglTexture,Q,gt+$i),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,Ie,ir+$i)),Y.blitFramebuffer($e,tt,Be,We,rt,Dt,Be,We,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||ne.has(T)){const mr=ne.get(T),zn=ne.get(X);M.bindFramebuffer(Y.READ_FRAMEBUFFER,he),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ee);for(let zt=0;zt<Xe;zt++)hn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,mr.__webglTexture,Q,gt+zt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,mr.__webglTexture,Q),Xt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,zn.__webglTexture,Ie,ir+zt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,zn.__webglTexture,Ie),Q!==0?Y.blitFramebuffer($e,tt,Be,We,rt,Dt,Be,We,Y.COLOR_BUFFER_BIT,Y.NEAREST):Xt?Y.copyTexSubImage3D(Ye,Ie,rt,Dt,ir+zt,$e,tt,Be,We):Y.copyTexSubImage2D(Ye,Ie,rt,Dt,$e,tt,Be,We);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Xt?T.isDataTexture||T.isData3DTexture?Y.texSubImage3D(Ye,Ie,rt,Dt,ir,Be,We,Xe,Qt,Ut,Ft.data):X.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ye,Ie,rt,Dt,ir,Be,We,Xe,Qt,Ft.data):Y.texSubImage3D(Ye,Ie,rt,Dt,ir,Be,We,Xe,Qt,Ut,Ft):T.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,rt,Dt,Be,We,Qt,Ut,Ft.data):T.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,rt,Dt,Ft.width,Ft.height,Qt,Ft.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,rt,Dt,Be,We,Qt,Ut,Ft);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Xr),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,On),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,Lr),M.pixelStorei(Y.UNPACK_SKIP_ROWS,dn),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,Fn),Ie===0&&X.generateMipmaps&&Y.generateMipmap(Ye),M.unbindTexture()},this.initRenderTarget=function(T){ne.get(T).__webglFramebuffer===void 0&&ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ue.setTextureCube(T,0):T.isData3DTexture?ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ue.setTexture2DArray(T,0):ue.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){O=0,G=0,ae=null,M.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}const Pn=[.95,.97,1],pf=[1,.84,.56],ii=[1,.62,.26],Ln=[.26,.5,1],mf=[.36,.39,.49],dl=2*Math.PI,ft=()=>Math.random();function vr(s,e,n,a=1){s[3*e]=Math.min(1.35,n[0]*a),s[3*e+1]=Math.min(1.35,n[1]*a),s[3*e+2]=Math.min(1.35,n[2]*a)}function Qa(s){const e=ft()*dl,n=2*ft()-1,a=Math.sqrt(Math.max(0,1-n*n));s[0]=Math.cos(e)*a,s[1]=n,s[2]=Math.sin(e)*a}function T_(s,e,n,a){const l=a.reduce((d,p)=>d+p.w,0);let c=0;for(let d=0;d<a.length;d++){const p=d===a.length-1?s-c:Math.round(a[d].w/l*s);for(let m=0;m<p&&c<s;m++,c++)a[d].emit(e,n,c,p>1?m/(p-1):0)}for(;c<s;)a[a.length-1].emit(e,n,c,ft()),c++}function gf(s,e,n,a,l){let c=0,d=0,p=0;for(let x=0;x<s;x++)c+=e[3*x],d+=e[3*x+1],p+=e[3*x+2];c/=s,d/=s,p/=s;const m=Math.cos(n),f=Math.sin(n),g=Math.cos(a),_=Math.sin(a),v=Math.cos(l),S=Math.sin(l);let w=1e-6;for(let x=0;x<s;x++){let b=e[3*x]-c,L=e[3*x+1]-d,z=e[3*x+2]-p;const N=L*m-z*f,F=L*f+z*m;L=N,z=F;const U=b*g+z*_;z=-b*_+z*g,b=U;const D=b*v-L*S,E=b*S+L*v;b=D,L=E,e[3*x]=b,e[3*x+1]=L,e[3*x+2]=z;const k=b*b+L*L+z*z;k>w&&(w=k)}const R=1/Math.sqrt(w);for(let x=0;x<s;x++)e[3*x]*=R,e[3*x+1]*=R,e[3*x+2]*=R}const ol=[{rx:.2,ry:0,a:1,b:.6},{rx:1.15,ry:.5,a:.86,b:.62},{rx:.6,ry:-.7,a:1.02,b:.54},{rx:1.45,ry:.95,a:.78,b:.7},{rx:.35,ry:1.25,a:.92,b:.5},{rx:-.5,ry:.4,a:.84,b:.66}],C_=[{o:0,ang:.6,blue:!0},{o:1,ang:2.4,blue:!0},{o:2,ang:4.1,blue:!0},{o:3,ang:1.2,blue:!0},{o:4,ang:3.3,blue:!1},{o:1,ang:5,blue:!1},{o:5,ang:.25,blue:!1}];function vf(s,e,n,a){const l=Math.cos(e)*s.a*n;let c=Math.sin(e)*s.b*n,d=0;const p=c*Math.cos(s.rx)-d*Math.sin(s.rx),m=c*Math.sin(s.rx)+d*Math.cos(s.rx);c=p,d=m;const f=l*Math.cos(s.ry)+d*Math.sin(s.ry),g=-l*Math.sin(s.ry)+d*Math.cos(s.ry);a[0]=f,a[1]=c,a[2]=g}const j3=[{lat:60,lon:-103,dlat:16,dlon:30},{lat:43,lon:-98,dlat:11,dlon:20},{lat:64,lon:-150,dlat:8,dlon:16},{lat:26,lon:-103,dlat:8,dlon:8},{lat:12,lon:-84,dlat:6,dlon:6},{lat:73,lon:-42,dlat:9,dlon:14},{lat:6,lon:-68,dlat:8,dlon:9},{lat:-9,lon:-55,dlat:13,dlon:15},{lat:-27,lon:-62,dlat:11,dlon:8},{lat:-43,lon:-69,dlat:10,dlon:5},{lat:20,lon:-2,dlat:12,dlon:16},{lat:6,lon:21,dlat:12,dlon:15},{lat:-12,lon:23,dlat:13,dlon:12},{lat:-30,lon:23,dlat:8,dlon:7},{lat:9,lon:42,dlat:8,dlon:7},{lat:52,lon:12,dlat:9,dlon:20},{lat:60,lon:40,dlat:10,dlon:20},{lat:58,lon:92,dlat:18,dlon:44},{lat:40,lon:70,dlat:13,dlon:24},{lat:30,lon:106,dlat:12,dlon:18},{lat:22,lon:80,dlat:9,dlon:11},{lat:28,lon:46,dlat:9,dlon:11},{lat:-26,lon:134,dlat:10,dlon:17},{lat:-2,lon:117,dlat:6,dlon:15}],W3=`
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
`,X3=`
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
`;function ru(s,e,n,a,l,c,d,p,m,f){const g=ft();Qa(f),s[3*e]=n+(c-n)*g+f[0]*m,s[3*e+1]=a+(d-a)*g+f[1]*m,s[3*e+2]=l+(p-l)*g+f[2]*m}function A_(s){return s*s*s*(s*(6*s-15)+10)}const R_=s=>s<0?0:s>1?1:s,q3=[.12,.02,.18,0,.06,.18,.05],Y3=[1,0,1,0,1,1,1],nu=[[-46,0],[0,34],[46,0],[-46,0],[0,40],[0,32],[0,26]];function K3({isSecondaryPage:s=!1}){const e=me.useRef(null),n=me.useRef(null),[a,l]=me.useState(0);return H_(),me.useEffect(()=>{const c=e.current,d=n.current;if(!c||!d)return;const p=new URLSearchParams(window.location.search).has("card");window.matchMedia("(prefers-reduced-motion: reduce)").matches;const m=window.innerWidth,f=navigator.hardwareConcurrency||8;let g=56e3;m>=1600&&f>=8&&(g=7e4),m<1280&&(g=44e3),m<900&&(g=32e3),m<720&&(g=2e4),f<=4&&(g=Math.round(.62*g)),p&&(g=Math.min(g,14e3));const _=document.createElement("canvas");_.className="neb-gl",d.appendChild(_);const v=new H3({canvas:_,antialias:!0,alpha:!0}),S=Math.min(window.devicePixelRatio||1,1.75);v.setPixelRatio(S),v.setClearColor(0,0);const w=new TM,R=new Un(45,1,.1,200);R.position.set(0,0,15);let x=15*Math.tan(Math.PI/180*22.5),b=x;const L=new Float32Array(3*g),z=new Float32Array(3*g),N=new Float32Array(g),F=new Float32Array(g),U=new Float32Array(g),D=new Float32Array(3*g);for(let fe=0;fe<g;fe++){F[fe]=Math.random(),U[fe]=Math.random();const De=Math.random()*Math.PI*2,Ee=(Math.random()-.5)*Math.PI;D[3*fe]=Math.cos(De)*Math.cos(Ee),D[3*fe+1]=Math.sin(Ee),D[3*fe+2]=Math.sin(De)*Math.cos(Ee)}const E=new $n;E.setAttribute("position",new Sn(L,3)),E.setAttribute("aColor",new Sn(z,3)),E.setAttribute("aSize",new Sn(N,1));const k=new Kn({vertexShader:W3,fragmentShader:X3,uniforms:{uSize:{value:.05},uScale:{value:1e3},uNear:{value:2},uFar:{value:58}},transparent:!0,blending:yf,depthTest:!1,depthWrite:!1}),K=new OM(E,k);w.add(K);const V=[0,0,0],q=[0,0,0],ge=new Float32Array(3*g),he=new Float32Array(3*g),ee=90,O=3,G=1,ae=1.2,_e=2.399963229728653,Me=new Vt;for(let fe=0;fe<g;fe++){const De=(fe+.5)/g,Ee=fe*_e,et=De*24-12,pt=1-Math.abs(Math.sin(et*.5)),Tt=ee*(.08+1.9*De*De),fr=Ee+O*Math.log(Tt+1),Wt=1/(1+Tt*.015),cr=ae*Wt*Wt,nr=Tt*Math.cos(fr),st=Tt*Math.sin(fr),Ne=nr+cr*st,Zt=st-cr*nr,pr=ee*.22*pt*Math.sin(Ee*.17)*G,bt=3*fe;ge[bt]=Ne,ge[bt+1]=pr,ge[bt+2]=Zt;const un=1-Math.min(1,Tt/(ee*2)),T=.08+.58*(1-un),X=.8+.2*un,oe=.15+.55*Math.pow(un,1.5);Me.setHSL(T,X,oe),he[bt]=Math.min(1.4,Me.r*1.35),he[bt+1]=Math.min(1.4,Me.g*1.35),he[bt+2]=Math.min(1.4,Me.b*1.35)}gf(g,ge,.45,-.2,.15);const I=new Float32Array(3*g),J=new Float32Array(3*g);T_(g,I,J,[{w:20,emit:(fe,De,Ee)=>{Qa(V);const et=.27*Math.pow(ft(),.5);fe[3*Ee]=V[0]*et,fe[3*Ee+1]=V[1]*et,fe[3*Ee+2]=V[2]*et,vr(De,Ee,et<.08?Pn:ft()<.2?pf:ii,.95+.4*ft())}},{w:6,emit:(fe,De,Ee)=>{Qa(V);const et=.27+.2*ft();fe[3*Ee]=V[0]*et,fe[3*Ee+1]=V[1]*et,fe[3*Ee+2]=V[2]*et,vr(De,Ee,ft()<.5?Pn:ii,.7+.3*ft())}},{w:42,emit:(fe,De,Ee)=>{vf(ol[Math.floor(ft()*ol.length)],ft()*dl,1,q),fe[3*Ee]=q[0]+(ft()-.5)*.014,fe[3*Ee+1]=q[1]+(ft()-.5)*.014,fe[3*Ee+2]=q[2]+(ft()-.5)*.014,vr(De,Ee,ft()<.15?Pn:ii,.8+.3*ft())}},{w:26,emit:(fe,De,Ee)=>{const et=C_[Math.floor(ft()*C_.length)];vf(ol[et.o],et.ang,1,q),Qa(V);const pt=et.blue?.12:.075;fe[3*Ee]=q[0]+V[0]*pt,fe[3*Ee+1]=q[1]+V[1]*pt,fe[3*Ee+2]=q[2]+V[2]*pt,vr(De,Ee,et.blue?Ln:ii,et.blue?1+.3*ft():.9+.3*ft())}},{w:6,emit:(fe,De,Ee)=>{vf(ol[Math.floor(ft()*ol.length)],ft()*dl,.4+.6*ft(),q),fe[3*Ee]=q[0],fe[3*Ee+1]=q[1],fe[3*Ee+2]=q[2],vr(De,Ee,mf,.5+.3*ft())}}]),gf(g,I,.38,.12,0);const be=new Float32Array(3*g),Ue=new Float32Array(3*g),Le=[0,0,0];T_(g,be,Ue,[{w:20,emit:(fe,De,Ee)=>{Qa(Le),fe[3*Ee]=.5*Le[0],fe[3*Ee+1]=.72+.5*Le[1],fe[3*Ee+2]=.5*Le[2],Math.abs(Le[0])>.72&&ft()<.6?vr(De,Ee,Ln,.9):vr(De,Ee,Pn,.9+.25*ft())}},{w:10,emit:(fe,De,Ee)=>{const et=ft()*dl,pt=.31*(.2+.8*Math.sqrt(ft())),Tt=Math.cos(et)*pt,fr=Math.sin(et)*pt,Wt=Math.sqrt(Math.max(0,.25-pt*pt));fe[3*Ee]=Tt,fe[3*Ee+1]=.72+.9*fr,fe[3*Ee+2]=Wt+.02,vr(De,Ee,ft()<.3?Ln:Pn,1+.2*ft())}},{w:17,emit:(fe,De,Ee)=>{const et=-.16+.5*ft(),pt=.34*(.86+.14*Math.sin((et+.16)/.5*Math.PI)),Tt=ft()*dl;fe[3*Ee]=Math.cos(Tt)*pt,fe[3*Ee+1]=.1+et,fe[3*Ee+2]=Math.sin(Tt)*pt,Math.sin(Tt)>.55&&ft()<.4?vr(De,Ee,Pn):vr(De,Ee,ft()<.2?pf:ii,.85+.35*ft())}},{w:6,emit:(fe,De,Ee)=>{fe[3*Ee]=(ft()-.5)*.34,fe[3*Ee+1]=.16+(ft()-.5)*.34,fe[3*Ee+2]=-.34-.12*ft(),vr(De,Ee,ft()<.5?Ln:mf,.85)}},{w:9,emit:(fe,De,Ee)=>{ru(fe,Ee,-.34,.26,0,-.5,.64,.06,.12,Le),vr(De,Ee,fe[3*Ee+1]>.55?Pn:Ln,.9+.2*ft())}},{w:9,emit:(fe,De,Ee)=>{ru(fe,Ee,.34,.2,0,.46,-.08,.06,.12,Le),vr(De,Ee,fe[3*Ee+1]<0?Pn:Ln,.9+.2*ft())}},{w:7,emit:(fe,De,Ee)=>{ru(fe,Ee,-.16,-.18,0,-.18,-.56,.02,.135,Le),vr(De,Ee,ft()<.4?ii:Ln,.85)}},{w:7,emit:(fe,De,Ee)=>{ru(fe,Ee,.16,-.18,0,.18,-.56,.02,.135,Le),vr(De,Ee,ft()<.4?ii:Ln,.85)}},{w:4,emit:(fe,De,Ee)=>{Qa(Le),fe[3*Ee]=-.18+.14*Le[0],fe[3*Ee+1]=-.72+.1*Le[1],fe[3*Ee+2]=.06+.16*Le[2],vr(De,Ee,ft()<.5?Pn:Ln,.9)}},{w:4,emit:(fe,De,Ee)=>{Qa(Le),fe[3*Ee]=.18+.14*Le[0],fe[3*Ee+1]=-.72+.1*Le[1],fe[3*Ee+2]=.06+.16*Le[2],vr(De,Ee,ft()<.5?Pn:Ln,.9)}}]),gf(g,be,.05,-.3,0);const te=new Float32Array(3*g),ye=new Float32Array(g),we=new Float32Array(3*g),qe=Math.PI*(3-Math.sqrt(5));for(let fe=0;fe<g;fe++){const De=1-fe/(g-1)*2,Ee=Math.sqrt(Math.max(0,1-De*De)),et=qe*fe,pt=Math.cos(et)*Ee,Tt=Math.sin(et)*Ee,fr=(()=>{const Wt=180*Math.asin(Math.max(-1,Math.min(1,De)))/Math.PI,cr=180*Math.atan2(Tt,pt)/Math.PI;let nr=0;for(const st of j3){let Ne=Math.abs(cr-st.lon);Ne>180&&(Ne=360-Ne);const Zt=(Wt-st.lat)/st.dlat,pr=Ne/st.dlon,bt=Math.exp(-(Zt*Zt+pr*pr));bt>nr&&(nr=bt)}return nr+=.1*Math.sin(.5*Wt+1)*Math.sin(.4*cr+2),Wt<-68&&(nr=Math.max(nr,.8)),nr})();if(te[3*fe]=pt,te[3*fe+1]=De,te[3*fe+2]=Tt,ye[fe]=fr,fr>.6)vr(we,fe,Math.random()<.16?Pn:ii,.9+.3*Math.random());else if(fr>.42)vr(we,fe,Math.random()<.32?pf:ii,1.12+.3*Math.random());else{const Wt=180*Math.atan2(Tt,pt)/Math.PI,cr=1.1>Math.abs((180*Math.asin(De)/Math.PI+900)%18-9)||1.1>Math.abs((Wt+900)%18-9);vr(we,fe,Ln,cr?.7+.2*Math.random():.4+.18*Math.random())}}const it=new Float32Array(3*g);for(let fe=0;fe<g;fe++){const De=Math.random();De<.5?vr(it,fe,Pn,.68+.4*Math.random()):De<.78?vr(it,fe,Ln,.68+.4*Math.random()):De<.92?vr(it,fe,ii,.68+.4*Math.random()):vr(it,fe,mf,.6+.3*Math.random())}const He=[he,it,J,it,we,Ue,Ue];for(let fe=0;fe<g;fe++)N[fe]=Math.random()<.14?1+.8*Math.random():.5+.7*Math.random();E.attributes.aSize.needsUpdate=!0;const Et=N.slice(),ct=[];for(let fe=0;fe<7;fe++)ct.push(new Float32Array(3*g));const ot=new Float32Array(7),wt=new Float32Array(7),Sr=new Float32Array(7),Mr=new Float32Array(7);let rr=1,lr=0,sr=48;function jt(){const fe=d.clientWidth||window.innerWidth,De=d.clientHeight||window.innerHeight;v.setSize(fe,De,!1),R.aspect=fe/De,R.updateProjectionMatrix(),x=15*Math.tan(Math.PI/180*22.5),b=fe/De*x;const Ee=Math.min(window.devicePixelRatio||1,1.75);k.uniforms.uScale.value=De*Ee/(2*Math.tan(Math.PI/180*22.5)),k.uniforms.uSize.value=fe<720?.075:.05;const et=.98*x,pt=.8*x,Tt=.5*x,fr=.3*x;for(let st=0;st<g;st++){const Ne=3*st;ct[0][Ne]=ge[Ne]*et,ct[0][Ne+1]=ge[Ne+1]*et,ct[0][Ne+2]=ge[Ne+2]*et,ct[2][Ne]=I[Ne]*pt,ct[2][Ne+1]=I[Ne+1]*pt,ct[2][Ne+2]=I[Ne+2]*pt,ct[5][Ne]=be[Ne]*Tt,ct[5][Ne+1]=be[Ne+1]*Tt,ct[5][Ne+2]=be[Ne+2]*Tt,ct[6][Ne]=be[Ne]*fr,ct[6][Ne+1]=be[Ne+1]*fr,ct[6][Ne+2]=be[Ne+2]*fr}const Wt=ct[1];for(let st=0;st<g;st++)Wt[3*st]=(Math.random()-.5)*b*4.4,Wt[3*st+1]=(Math.random()-.5)*x*3.4,Wt[3*st+2]=9-50*Math.pow(Math.random(),.7);const cr=ct[3];sr=50;for(let st=0;st<g;st++){const Ne=Math.random(),Zt=9-Ne*sr,pr=Ne*Math.PI*7+st%11,bt=x*(.16+.82*Ne);cr[3*st]=Math.cos(pr)*bt,cr[3*st+1]=Math.sin(pr)*bt*.82,cr[3*st+2]=Zt}const nr=ct[4];for(let st=0;st<g;st++){const Ne=x*(1+.014*ye[st]);nr[3*st]=te[3*st]*Ne,nr[3*st+1]=te[3*st+1]*Ne,nr[3*st+2]=te[3*st+2]*Ne}ot[0]=s?0:.4*b,wt[0]=s?0:.04*x,ot[1]=0,wt[1]=0,ot[2]=-.32*b,wt[2]=.02*x,ot[3]=0,wt[3]=0,ot[4]=.48*b,wt[4]=-.02*x,ot[5]=0,wt[5]=-.04*x,ot[6]=0,wt[6]=0}jt();let or=!1;const Y=new ResizeObserver(()=>{or||(or=!0,requestAnimationFrame(()=>{or=!1,jt()}))});Y.observe(d);const kt=Array.from(d.querySelectorAll(".neb-sec")),Rt=Array.from(d.querySelectorAll(".neb-dot")),P=d.querySelector(".neb-team-row"),M=d.querySelector(".neb-hint"),$=!p;let ne=0,ue=0,ke=!1,Oe=!1;function W(fe){Oe||(ne=(fe.clientX/window.innerWidth-.5)*2,ue=-2*(fe.clientY/window.innerHeight-.5),ke=!0)}function Ce(){ke=!1}function Pe(fe){Oe=!0,fe.touches.length>0&&(ne=(fe.touches[0].clientX/window.innerWidth-.5)*2,ue=-2*(fe.touches[0].clientY/window.innerHeight-.5),ke=!0)}function ze(){ke=!1}function Ae(fe){if(!fe.beta||!fe.gamma||Oe)return;const De=Math.max(-1,Math.min(1,(fe.beta-45)/45)),Ee=Math.max(-1,Math.min(1,fe.gamma/45));ne+=(Ee-ne)*.1,ue+=(-De-ue)*.1}$&&(window.addEventListener("pointermove",W,{passive:!0}),document.addEventListener("pointerleave",Ce),window.addEventListener("touchstart",Pe,{passive:!0}),window.addEventListener("touchmove",Pe,{passive:!0}),window.addEventListener("touchend",ze),window.addEventListener("touchcancel",ze),window.addEventListener("deviceorientation",Ae,{passive:!0}));const at=new ce;let Je=0,lt=0,dt=0,j=!1;const pe=new Float32Array(3*g),Re=new Float32Array(g),Fe=[0,0,0],je=[0,0,0];let Te=0;function Ze(fe,De,Ee){const et=ct[fe],pt=et[3*De],Tt=et[3*De+1],fr=et[3*De+2],Wt=Sr[fe],cr=Mr[fe];let nr=pt*Wt+fr*cr,st=-pt*cr+fr*Wt,Ne=Tt;Y3[fe]&&(nr*=rr,Ne*=rr,st*=rr),fe===3&&(st+=lr,st>9&&(st-=sr)),Ee[0]=nr+ot[fe],Ee[1]=Ne+wt[fe],Ee[2]=st}function Ge(fe,De){for(let Ne=0;Ne<7;Ne++){const Zt=De*q3[Ne];Sr[Ne]=Math.cos(Zt),Mr[Ne]=Math.sin(Zt)}rr=1+.024*Math.sin(.7*De),lr=2.4*De%sr;const Ee=6*fe,et=Math.min(5,Math.floor(Ee)),pt=A_(R_((Ee-et-.2)/.6));Te=Math.sin(pt*Math.PI);const Tt=He[et],fr=He[et+1];if(j=!1,$&&ke&&(at.set(ne,ue,.5).unproject(R).sub(R.position),Math.abs(at.z)>1e-4)){const Ne=-R.position.z/at.z;Je=R.position.x+at.x*Ne,lt=R.position.y+at.y*Ne,dt=R.position.z+at.z*Ne,j=!0}const Wt=.5*x,cr=Wt*Wt,nr=.36*x;for(let Ne=0;Ne<g;Ne++){let Zt=(pt-.34*F[Ne])/.66;Zt=A_(Zt<0?0:Zt>1?1:Zt),Ze(et,Ne,Fe),Ze(et+1,Ne,je);const pr=U[Ne],bt=Math.sin(.6*De+6.283*pr),un=Math.cos(.47*De+6.283*pr),T=3*Ne;let X=Fe[0]+(je[0]-Fe[0])*Zt+D[T]*Te*.62+.05*bt,oe=Fe[1]+(je[1]-Fe[1])*Zt+D[T+1]*Te*.62+.05*un,re=Fe[2]+(je[2]-Fe[2])*Zt+D[T+2]*Te*.62+bt*un*.06,Q=0,Ie=0,Be=0,We=0;if(j){const $e=X-Je,tt=oe-lt,gt=re-dt,rt=$e*$e+tt*tt+gt*gt;if(rt<cr){const Dt=Math.sqrt(rt)||.001,ir=1-Dt/Wt;We=ir*ir;const Ft=nr*We/Dt;Q=$e*Ft,Ie=tt*Ft,Be=gt*Ft}}pe[T]+=(Q-pe[T])*.16,pe[T+1]+=(Ie-pe[T+1])*.16,pe[T+2]+=(Be-pe[T+2])*.16,Re[Ne]+=(We-Re[Ne])*.16,L[T]=X+pe[T],L[T+1]=oe+pe[T+1],L[T+2]=re+pe[T+2];const Xe=1+.95*Re[Ne];z[T]=Math.min(1.55,(Tt[T]+(fr[T]-Tt[T])*pt)*Xe),z[T+1]=Math.min(1.55,(Tt[T+1]+(fr[T+1]-Tt[T+1])*pt)*Xe),z[T+2]=Math.min(1.55,(Tt[T+2]+(fr[T+2]-Tt[T+2])*pt)*Xe),$&&(N[Ne]=Et[Ne]*(1+1.4*Re[Ne]))}E.attributes.position.needsUpdate=!0,E.attributes.aColor.needsUpdate=!0,$&&(E.attributes.aSize.needsUpdate=!0);for(let Ne=0;Ne<kt.length;Ne++){const Zt=Math.max(0,1-Math.abs(fe-Ne/6)/.1);let pr=Zt*Zt;const bt=nu[Ne]?nu[Ne][0]*(1-pr):0,un=nu[Ne]?nu[Ne][1]*(1-pr):0;kt[Ne].style.opacity=String(pr),kt[Ne].style.transform=`translate3d(${bt}px, ${un}px, 0)`,kt[Ne].style.pointerEvents=pr>.1?"auto":"none"}if(P){const Ne=(5-Ee)*window.innerWidth*.1;P.style.transform=`translateX(${Ne}px)`}const st=Math.round(Ee);l(st);for(let Ne=0;Ne<Rt.length;Ne++)Rt[Ne].style.opacity=Ne===st?"1":"0.32",Rt[Ne].style.transform=`scale(${Ne===st?1.7:1})`;M&&(M.style.opacity=fe>.05?"0":"0.8",M.style.transform=`translateY(${fe>.05?10:0}px)`,M.style.transition="opacity 0.4s ease, transform 0.4s ease")}let _r=0,It=!0,zr=performance.now(),Br=1.6*Number(p),fi=0,pi=0;function mi(fe){const De=Math.min(.05,(fe-zr)/1e3);if(zr=fe,Br+=De,p){const pt=Br/9%2;pi=pt<1?pt:2-pt}else{const pt=c.getBoundingClientRect(),Tt=c.offsetHeight-window.innerHeight;pi=Tt>0?R_(-pt.top/Tt):0}const Ee=Oe?.18:.07;fi+=(pi-fi)*Ee,Ge(fi,Br);const et=15-5.5*Te;R.position.x+=(1.7*ne-R.position.x)*.05,R.position.y+=(1.7*ue*.7-R.position.y)*.05,R.position.z+=(et-R.position.z)*.06,R.lookAt(0,0,0),v.render(w,R),_r=requestAnimationFrame(mi)}function gi(){document.hidden?It&&(It=!1,cancelAnimationFrame(_r)):It||(It=!0,zr=performance.now(),_r=requestAnimationFrame(mi))}return _r=requestAnimationFrame(mi),document.addEventListener("visibilitychange",gi),()=>{$&&(window.removeEventListener("pointermove",W),document.removeEventListener("pointerleave",Ce),window.removeEventListener("touchstart",Pe),window.removeEventListener("touchmove",Pe),window.removeEventListener("touchend",ze),window.removeEventListener("touchcancel",ze),window.removeEventListener("deviceorientation",Ae)),document.removeEventListener("visibilitychange",gi),cancelAnimationFrame(_r),Y.disconnect(),E.dispose(),k.dispose(),v.dispose(),_.remove()}},[]),A.jsxs("div",{className:`neb-root ${s?"fixed inset-0 z-0 opacity-40 pointer-events-none":""}`,ref:e,"data-source-loc":"src/components/NebulaScene.tsx:1091:4",children:[A.jsx("div",{className:"neb-stage",ref:n,"data-source-loc":"src/components/NebulaScene.tsx:1092:6",children:!s&&A.jsxs(A.Fragment,{children:[A.jsxs("nav",{className:"neb-nav","data-source-loc":"src/components/NebulaScene.tsx:1096:12",children:[A.jsxs(hr,{to:"/",className:"neb-logo",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1097:10",children:["VexStudios",A.jsx("span",{"data-source-loc":"src/components/NebulaScene.tsx:1098:22",children:"®"})]}),A.jsxs("div",{className:"neb-links","data-source-loc":"src/components/NebulaScene.tsx:1100:10",children:[A.jsx(hr,{to:"/work",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1101:12",children:"Work"}),A.jsx(hr,{to:"/studio",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1104:12",children:"Studio"}),A.jsx(hr,{to:"/services",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1107:12",children:"Services"}),A.jsx("a",{href:"#contact",style:{textDecoration:"none",color:"inherit",cursor:"pointer"},onClick:c=>{c.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/components/NebulaScene.tsx:1110:12",children:"Contact"})]})]}),A.jsx("section",{className:"neb-sec neb-hero",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1124:8",children:A.jsxs("div",{className:"neb-hero-copy","data-source-loc":"src/components/NebulaScene.tsx:1125:10",children:[A.jsxs("h1",{className:"neb-display","data-source-loc":"src/components/NebulaScene.tsx:1126:12",children:["Launch",A.jsx("br",{"data-source-loc":"src/components/NebulaScene.tsx:1128:14"}),"Beyond",A.jsx("br",{"data-source-loc":"src/components/NebulaScene.tsx:1130:14"}),A.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1131:14",children:"Ordinary"})]}),A.jsx("p",{className:"neb-lead","data-source-loc":"src/components/NebulaScene.tsx:1133:12",children:"We design immersive digital worlds, motion-driven websites, and 3D visual systems for ambitious brands."})]})}),A.jsx("section",{className:"neb-sec neb-statement",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1140:8",children:A.jsxs("h2",{className:"neb-statement-text","data-source-loc":"src/components/NebulaScene.tsx:1141:10",children:["Blending a ",A.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1142:23",children:"multi-disciplinary"})," craft with hands-on"," ",A.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1143:12",children:"technical"})," execution"]})}),A.jsx("section",{className:"neb-sec neb-right",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1148:8",children:A.jsxs("div",{className:"neb-side-copy","data-source-loc":"src/components/NebulaScene.tsx:1149:10",children:[A.jsx("h2",{className:"neb-h2","data-source-loc":"src/components/NebulaScene.tsx:1150:12",children:"Agency"}),A.jsx("p",{className:"neb-para","data-source-loc":"src/components/NebulaScene.tsx:1151:12",children:"We bring together strategy, design, engineering, and craft to build digital experiences that feel alive."})]})}),A.jsx("section",{className:"neb-sec neb-left",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1158:8",children:A.jsxs("div",{className:"neb-side-copy","data-source-loc":"src/components/NebulaScene.tsx:1159:10",children:[A.jsx("h2",{className:"neb-h2","data-source-loc":"src/components/NebulaScene.tsx:1160:12",children:"Solutions"}),A.jsx("p",{className:"neb-para","data-source-loc":"src/components/NebulaScene.tsx:1161:12",children:"From interactive sites to immersive 3D worlds, we design and build digital products that move with intent."})]})}),A.jsxs("section",{className:"neb-sec neb-expertise",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1168:8",children:[A.jsxs("h2",{className:"neb-expertise-title","data-source-loc":"src/components/NebulaScene.tsx:1169:10",children:["Where we ",A.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1170:21",children:"excel"})]}),A.jsxs("div",{className:"neb-cols","data-source-loc":"src/components/NebulaScene.tsx:1172:10",children:[A.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1173:12",children:[A.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1174:14",children:"Strategy"}),A.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1175:14",children:[A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1176:16",children:"Brand strategy"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1177:16",children:"Market positioning"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1178:16",children:"Experience design"})]})]}),A.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1181:12",children:[A.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1182:14",children:"Creative"}),A.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1183:14",children:[A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1184:16",children:"Art direction"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1185:16",children:"Motion design"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1186:16",children:"3D art"})]})]}),A.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1189:12",children:[A.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1190:14",children:"Tech"}),A.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1191:14",children:[A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1192:16",children:"WebGL"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1193:16",children:"Frontend engineering"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1194:16",children:"Interactive builds"})]})]}),A.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1197:12",children:[A.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1198:14",children:"Production"}),A.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1199:14",children:[A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1200:16",children:"Development"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1201:16",children:"Animation"}),A.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1202:16",children:"Launch support"})]})]})]})]}),A.jsxs("section",{className:"neb-sec neb-team",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1209:8",children:[A.jsx("h2",{className:"neb-team-title","data-source-loc":"src/components/NebulaScene.tsx:1210:10",children:"The minds behind it"}),A.jsxs("div",{className:"neb-team-row","data-source-loc":"src/components/NebulaScene.tsx:1211:10",children:[A.jsx("span",{className:"neb-name","data-source-loc":"src/components/NebulaScene.tsx:1212:12",children:"Sienna"}),A.jsx("span",{className:"neb-name neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1213:12",children:"Kairo"}),A.jsx("span",{className:"neb-name","data-source-loc":"src/components/NebulaScene.tsx:1214:12",children:"Noor"}),A.jsx("span",{className:"neb-name neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1215:12",children:"Theo"}),A.jsx("span",{className:"neb-name","data-source-loc":"src/components/NebulaScene.tsx:1216:12",children:"Lior"}),A.jsx("span",{className:"neb-name neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1217:12",children:"Mika"})]})]}),A.jsxs("section",{className:"neb-sec neb-contact",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1222:8",children:[A.jsx("a",{className:"neb-email",href:"#contact",onClick:c=>{c.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/components/NebulaScene.tsx:1223:10",children:"hello@vexstudios.studio"}),A.jsxs("div",{className:"neb-footer","data-source-loc":"src/components/NebulaScene.tsx:1233:10",children:[A.jsx("div",{className:"neb-divider","data-source-loc":"src/components/NebulaScene.tsx:1234:12"}),A.jsxs("div",{className:"neb-foot-links","data-source-loc":"src/components/NebulaScene.tsx:1235:12",children:[A.jsx("a",{href:"#instagram",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1236:14",children:"Instagram"}),A.jsx("a",{href:"#linkedin",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1237:14",children:"LinkedIn"}),A.jsx("a",{href:"#behance",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1238:14",children:"Behance"}),A.jsx("a",{href:"#privacy",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1239:14",children:"Privacy"}),A.jsx("a",{href:"#terms",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1240:14",children:"Terms"})]})]})]}),A.jsxs("div",{className:"neb-rail","data-source-loc":"src/components/NebulaScene.tsx:1246:8",children:[A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1247:10"}),A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1248:10"}),A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1249:10"}),A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1250:10"}),A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1251:10"}),A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1252:10"}),A.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1253:10"})]}),A.jsx("div",{className:"neb-hint","data-source-loc":"src/components/NebulaScene.tsx:1257:12",children:"Scroll to explore"})]})}),!s&&A.jsx("div",{className:"neb-spacer","data-source-loc":"src/components/NebulaScene.tsx:1263:8"})]})}const N_=[{id:"campus-connect",title:"CampusConnect",subtitle:"SAM Global University",category:"Website Development",description:"A private, student-only college communication and resource-sharing platform. Features real-time department chat, permanent notes repository, verified student access, and Yufi — an AI study assistant powered by Google Gemini.",tags:["Next.js","Google Gemini AI","WebSockets","Tailwind CSS"],image:"/projects/campus_connect.png",liveUrl:"https://campus-connect-sam.vercel.app/",year:"2026"}],$3=["All","Brand Identity","Marketing Automation","Digital Marketing & SEO","Website Development","Ecommerce Automation","Custom Software Dev"];function Z3(){const[s,e]=me.useState("All"),n=s==="All"?N_:N_.filter(a=>a.category===s);return A.jsxs("div",{className:"min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden","data-source-loc":"src/pages/Work.tsx:40:4",children:[A.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-60",style:{background:"radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"},"data-source-loc":"src/pages/Work.tsx:42:6"}),A.jsxs("header",{className:"relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up",style:{animationDelay:"200ms"},"data-source-loc":"src/pages/Work.tsx:50:6",children:[A.jsxs(hr,{to:"/",className:"font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity","data-source-loc":"src/pages/Work.tsx:51:8",children:["VexStudios",A.jsx("span",{className:"text-[#6f8cff]","data-source-loc":"src/pages/Work.tsx:52:20",children:"®"})]}),A.jsxs("nav",{className:"flex items-center gap-6 md:gap-8","data-source-loc":"src/pages/Work.tsx:55:8",children:[A.jsx(hr,{to:"/work",className:"text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold","data-source-loc":"src/pages/Work.tsx:56:10",children:"Work"}),A.jsx(hr,{to:"/studio",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Work.tsx:59:10",children:"Studio"}),A.jsx(hr,{to:"/services",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Work.tsx:62:10",children:"Services"}),A.jsx("a",{href:"#contact",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer",onClick:a=>{a.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Work.tsx:65:10",children:"Contact"})]})]}),A.jsxs("main",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24","data-source-loc":"src/pages/Work.tsx:79:6",children:[A.jsxs("div",{className:"max-w-3xl mb-14 work-fade-up",style:{animationDelay:"400ms"},"data-source-loc":"src/pages/Work.tsx:81:8",children:[A.jsxs("h1",{className:"font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6","data-source-loc":"src/pages/Work.tsx:82:10",children:["Our Genuine ",A.jsx("span",{className:"neb-outline","data-source-loc":"src/pages/Work.tsx:83:24",children:"Work"})]}),A.jsx("p",{className:"text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed","data-source-loc":"src/pages/Work.tsx:85:10",children:"Live web applications and digital platforms engineered by VexStudios for real clients and users."})]}),A.jsx("div",{className:"flex flex-wrap gap-3 mb-12 work-fade-up",style:{animationDelay:"550ms"},"data-source-loc":"src/pages/Work.tsx:91:8",children:$3.map(a=>A.jsx("button",{onClick:()=>e(a),className:`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all border ${s===a?"bg-[#6f8cff] text-white border-[#6f8cff] shadow-[0_0_20px_rgba(111,140,255,0.4)]":"bg-white/5 text-[#aab2da] border-white/10 hover:border-white/30 hover:text-white"}`,"data-source-loc":"src/pages/Work.tsx:93:12",children:a},a))}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 work-fade-up",style:{animationDelay:"700ms"},"data-source-loc":"src/pages/Work.tsx:108:8",children:[n.map(a=>A.jsxs("div",{className:"flex flex-col gap-6 group","data-source-loc":"src/pages/Work.tsx:110:12",children:[A.jsx("a",{href:a.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"cyber-container select-none block aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]","data-source-loc":"src/pages/Work.tsx:112:14",children:A.jsxs("div",{className:"canvas w-full h-full","data-source-loc":"src/pages/Work.tsx:118:16",children:[Array.from({length:25}).map((l,c)=>A.jsx("div",{className:`tracker tr-${c+1}`,"data-source-loc":"src/pages/Work.tsx:120:20"},c)),A.jsx("div",{className:"cyber-card","data-source-loc":"src/pages/Work.tsx:123:18",children:A.jsxs("div",{className:"card-content","data-source-loc":"src/pages/Work.tsx:124:20",children:[A.jsx("div",{className:"cyber-card-bg",style:{backgroundImage:`url(${a.image})`},"data-source-loc":"src/pages/Work.tsx:125:22"}),A.jsx("div",{className:"cyber-overlay","data-source-loc":"src/pages/Work.tsx:129:22"}),A.jsx("div",{className:"card-glare","data-source-loc":"src/pages/Work.tsx:130:22"}),A.jsxs("div",{className:"cyber-lines","data-source-loc":"src/pages/Work.tsx:131:22",children:[A.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:24"}),A.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:37"}),A.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:50"}),A.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:63"})]}),A.jsxs("div",{className:"cyber-prompt text-center flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100","data-source-loc":"src/pages/Work.tsx:135:22",children:[A.jsx("span",{className:"text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]","data-source-loc":"src/pages/Work.tsx:136:24",children:"Launch Site"}),A.jsx("span",{className:"text-[10px] text-white/70 mt-2 tracking-[0.3em] font-light drop-shadow-md","data-source-loc":"src/pages/Work.tsx:137:24",children:"↗"})]}),A.jsxs("div",{className:"glowing-elements","data-source-loc":"src/pages/Work.tsx:140:22",children:[A.jsx("div",{className:"glow-1","data-source-loc":"src/pages/Work.tsx:141:24"}),A.jsx("div",{className:"glow-2","data-source-loc":"src/pages/Work.tsx:142:24"})]})]})})]})}),A.jsxs("div",{className:"flex flex-col gap-4 px-2","data-source-loc":"src/pages/Work.tsx:150:14",children:[A.jsxs("div",{className:"flex justify-between items-start gap-4","data-source-loc":"src/pages/Work.tsx:151:16",children:[A.jsxs("div",{"data-source-loc":"src/pages/Work.tsx:152:18",children:[A.jsx("h3",{className:"font-['Sora'] font-bold text-2xl text-white group-hover:text-[#8aa0ff] transition-colors uppercase tracking-wide","data-source-loc":"src/pages/Work.tsx:153:20",children:a.title}),a.subtitle&&A.jsx("p",{className:"text-sm text-[#6f8cff] font-medium tracking-wide mt-1.5","data-source-loc":"src/pages/Work.tsx:157:22",children:a.subtitle})]}),A.jsxs("div",{className:"text-right shrink-0","data-source-loc":"src/pages/Work.tsx:162:18",children:[A.jsx("span",{className:"text-[#aab2da] text-xs font-['Sora'] tracking-[0.2em] uppercase block","data-source-loc":"src/pages/Work.tsx:163:20",children:a.category}),A.jsx("span",{className:"text-[10px] text-white/40 mt-1.5 font-normal tracking-[0.3em] block","data-source-loc":"src/pages/Work.tsx:164:20",children:a.year})]})]}),A.jsx("p",{className:"text-[#aab2da]/70 text-sm font-light leading-relaxed","data-source-loc":"src/pages/Work.tsx:168:16",children:a.description}),A.jsx("div",{className:"flex flex-wrap gap-2 mt-1","data-source-loc":"src/pages/Work.tsx:172:16",children:a.tags.map(l=>A.jsx("span",{className:"text-[10px] uppercase tracking-widest text-[#6f8cff] bg-[#6f8cff]/10 px-3 py-1.5 rounded-full border border-[#6f8cff]/20","data-source-loc":"src/pages/Work.tsx:174:20",children:l},l))})]})]},a.id)),A.jsxs("div",{className:"border border-dashed border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors min-h-[360px]","data-source-loc":"src/pages/Work.tsx:184:10",children:[A.jsx("div",{className:"w-12 h-12 rounded-full bg-[#6f8cff]/10 border border-[#6f8cff]/30 flex items-center justify-center text-[#6f8cff] text-xl font-bold mb-4","data-source-loc":"src/pages/Work.tsx:185:12",children:"+"}),A.jsx("h4",{className:"font-['Sora'] font-semibold text-lg text-white mb-2","data-source-loc":"src/pages/Work.tsx:188:12",children:"More Genuine Works Coming Soon"}),A.jsx("p",{className:"text-[#8aa0ff]/70 text-xs max-w-xs leading-relaxed","data-source-loc":"src/pages/Work.tsx:189:12",children:"Have another deployed project link to add? Send it over and we'll instantly feature it here!"})]})]})]}),A.jsx("footer",{className:"relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up",style:{animationDelay:"800ms"},"data-source-loc":"src/pages/Work.tsx:197:6",children:A.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6","data-source-loc":"src/pages/Work.tsx:198:8",children:[A.jsxs("div",{"data-source-loc":"src/pages/Work.tsx:199:10",children:["© ",new Date().getFullYear()," VEXSTUDIOS. ALL RIGHTS RESERVED."]}),A.jsxs("div",{className:"flex gap-6","data-source-loc":"src/pages/Work.tsx:200:10",children:[A.jsx(hr,{to:"/",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Work.tsx:201:12",children:"Home"}),A.jsx(hr,{to:"/studio",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Work.tsx:202:12",children:"Studio"}),A.jsx("a",{href:"#contact",className:"hover:text-white transition-colors cursor-pointer",onClick:a=>{a.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Work.tsx:203:12",children:"Contact"})]})]})})]})}const Gx=(...s)=>s.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),Q3=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J3=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),P_=s=>{const e=J3(s);return e.charAt(0).toUpperCase()+e.slice(1)};var eC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tC=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},rC=me.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:d,...p},m)=>me.createElement("svg",{ref:m,...eC,width:e,height:e,stroke:s,strokeWidth:a?Number(n)*24/Number(e):n,className:Gx("lucide",l),...!c&&!tC(p)&&{"aria-hidden":"true"},...p},[...d.map(([f,g])=>me.createElement(f,g)),...Array.isArray(c)?c:[c]])),Zn=(s,e)=>{const n=me.forwardRef(({className:a,...l},c)=>me.createElement(rC,{ref:c,iconNode:e,className:Gx(`lucide-${Q3(P_(s))}`,`lucide-${s}`,a),...l}));return n.displayName=P_(s),n},nC=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],iC=Zn("bot",nC),aC=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],sC=Zn("chart-no-axes-column-increasing",aC),oC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lC=Zn("circle-check",oC),cC=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],uC=Zn("code-xml",cC),dC=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],hC=Zn("cpu",dC),fC=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],pC=Zn("fingerprint-pattern",fC),mC=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],gC=Zn("lightbulb",mC),vC=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],_C=Zn("send",vC),xC=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],yC=Zn("shopping-cart",xC),bC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],SC=Zn("users",bC),MC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],EC=Zn("x",MC);function wC(){return A.jsxs("div",{className:"min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden","data-source-loc":"src/pages/Studio.tsx:7:4",children:[A.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-60",style:{background:"radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"},"data-source-loc":"src/pages/Studio.tsx:9:6"}),A.jsxs("header",{className:"relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up",style:{animationDelay:"200ms"},"data-source-loc":"src/pages/Studio.tsx:17:6",children:[A.jsxs(hr,{to:"/",className:"font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity","data-source-loc":"src/pages/Studio.tsx:18:8",children:["VexStudios",A.jsx("span",{className:"text-[#6f8cff]","data-source-loc":"src/pages/Studio.tsx:19:20",children:"®"})]}),A.jsxs("nav",{className:"flex items-center gap-6 md:gap-8","data-source-loc":"src/pages/Studio.tsx:22:8",children:[A.jsx(hr,{to:"/work",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Studio.tsx:23:10",children:"Work"}),A.jsx(hr,{to:"/studio",className:"text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold","data-source-loc":"src/pages/Studio.tsx:26:10",children:"Studio"}),A.jsx(hr,{to:"/services",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Studio.tsx:29:10",children:"Services"}),A.jsx("a",{href:"#contact",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Studio.tsx:32:10",children:"Contact"})]})]}),A.jsxs("main",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24","data-source-loc":"src/pages/Studio.tsx:46:6",children:[A.jsxs("div",{className:"max-w-3xl mb-20 work-fade-up",style:{animationDelay:"400ms"},"data-source-loc":"src/pages/Studio.tsx:49:8",children:[A.jsxs("h1",{className:"font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6","data-source-loc":"src/pages/Studio.tsx:50:10",children:["Building digital ",A.jsx("span",{className:"neb-outline","data-source-loc":"src/pages/Studio.tsx:51:29",children:"worlds"})]}),A.jsx("p",{className:"text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed","data-source-loc":"src/pages/Studio.tsx:53:10",children:"VexStudios was born out of a desire to move beyond the generic web. We believe that digital platforms should be immersive, motion-driven experiences that feel truly alive. We blend high-end design with rigorous technical engineering."})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 work-fade-up",style:{animationDelay:"550ms"},"data-source-loc":"src/pages/Studio.tsx:59:8",children:[A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Studio.tsx:61:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Studio.tsx:62:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Studio.tsx:63:12"}),A.jsx(gC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Studio.tsx:64:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Studio.tsx:65:12",children:"Our Philosophy"}),A.jsxs("div",{className:"notibody space-y-4","data-source-loc":"src/pages/Studio.tsx:66:12",children:[A.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:67:14",children:"We approach every build as a unique piece of architecture. We don't rely on templates or bloated frameworks. Instead, we write custom shaders, custom WebGL pipelines, and highly optimized frontend code to ensure that our projects are as performant as they are visually stunning."}),A.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:70:14",children:"Performance and aesthetics shouldn't be mutually exclusive. By controlling the entire stack from concept to code, we deliver platforms that wow users instantly without sacrificing speed."})]})]}),A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Studio.tsx:76:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Studio.tsx:77:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Studio.tsx:78:12"}),A.jsx(SC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Studio.tsx:79:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Studio.tsx:80:12",children:"Culture & Vibe"}),A.jsxs("div",{className:"notibody space-y-4","data-source-loc":"src/pages/Studio.tsx:81:12",children:[A.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:82:14",children:"We operate as a highly specialized, multi-disciplinary strike team. We're a remote-first crew of designers, engineers, and 3D artists who collaborate deeply on every detail."}),A.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:85:14",children:"We value direct communication, iterative prototyping, and obsessing over micro-interactions. If an animation feels slightly off, we rewrite the math. That's the VexStudios standard."})]})]})]}),A.jsxs("div",{className:"mb-24 work-fade-up",style:{animationDelay:"700ms"},"data-source-loc":"src/pages/Studio.tsx:94:8",children:[A.jsx("h2",{className:"font-['Sora'] font-bold text-3xl uppercase tracking-wide mb-10 border-b border-white/10 pb-6","data-source-loc":"src/pages/Studio.tsx:95:10",children:"The Process"}),A.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6","data-source-loc":"src/pages/Studio.tsx:98:10",children:[{step:"01",title:"Discover",desc:"Deep diving into your brand architecture and strategic goals."},{step:"02",title:"Design",desc:"Crafting wireframes, UI layouts, and early 3D visual concepts."},{step:"03",title:"Build",desc:"Engineering the platform with custom physics and modern frameworks."},{step:"04",title:"Launch",desc:"Rigorous testing, optimization, and deploying to the world."},{step:"05",title:"Iterate",desc:"Post-launch refinement based on real user analytics."}].map(s=>A.jsxs("div",{className:"group flex flex-col gap-3","data-source-loc":"src/pages/Studio.tsx:106:14",children:[A.jsx("span",{className:"text-[#6f8cff] font-['Sora'] font-bold text-xl","data-source-loc":"src/pages/Studio.tsx:107:16",children:s.step}),A.jsx("h4",{className:"text-white font-bold uppercase tracking-wider","data-source-loc":"src/pages/Studio.tsx:108:16",children:s.title}),A.jsx("p",{className:"text-[#aab2da]/70 text-xs leading-relaxed","data-source-loc":"src/pages/Studio.tsx:109:16",children:s.desc}),A.jsx("div",{className:"h-0.5 w-full bg-white/10 mt-2 relative overflow-hidden","data-source-loc":"src/pages/Studio.tsx:110:16",children:A.jsx("div",{className:"absolute inset-y-0 left-0 bg-[#6f8cff] w-0 group-hover:w-full transition-all duration-700 ease-out","data-source-loc":"src/pages/Studio.tsx:111:18"})})]},s.step))})]}),A.jsxs("div",{className:"mb-20 work-fade-up",style:{animationDelay:"850ms"},"data-source-loc":"src/pages/Studio.tsx:119:8",children:[A.jsx("h2",{className:"font-['Sora'] font-bold text-3xl uppercase tracking-wide mb-10 border-b border-white/10 pb-6","data-source-loc":"src/pages/Studio.tsx:120:10",children:"Capabilities & Stack"}),A.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6","data-source-loc":"src/pages/Studio.tsx:123:10",children:["WebGL & Three.js","Custom GLSL Shaders","Next.js / React","Tailwind CSS","Motion & Interaction","UI/UX Systems","E-Commerce Architecture","Performance Optimization"].map((s,e)=>A.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#6f8cff]/50 transition-colors","data-source-loc":"src/pages/Studio.tsx:134:14",children:[A.jsx("div",{className:"w-2 h-2 rounded-full bg-[#6f8cff]","data-source-loc":"src/pages/Studio.tsx:135:16"}),A.jsx("span",{className:"text-[#c2c8ee] text-xs font-semibold tracking-widest uppercase","data-source-loc":"src/pages/Studio.tsx:136:16",children:s})]},e))})]}),A.jsxs("div",{className:"mt-32 text-center work-fade-up",style:{animationDelay:"1000ms"},"data-source-loc":"src/pages/Studio.tsx:143:8",children:[A.jsx("p",{className:"text-[#aab2da] text-sm uppercase tracking-[0.2em] mb-6","data-source-loc":"src/pages/Studio.tsx:144:10",children:"Ready to build something extraordinary?"}),A.jsx("a",{href:"#contact",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},className:"inline-block px-10 py-5 bg-[#6f8cff] text-white font-['Sora'] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#05060a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(111,140,255,0.4)]","data-source-loc":"src/pages/Studio.tsx:145:10",children:"Start a Project"})]})]}),A.jsx("footer",{className:"relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up",style:{animationDelay:"1100ms"},"data-source-loc":"src/pages/Studio.tsx:159:6",children:A.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6","data-source-loc":"src/pages/Studio.tsx:160:8",children:[A.jsxs("div",{"data-source-loc":"src/pages/Studio.tsx:161:10",children:["© ",new Date().getFullYear()," VEXSTUDIOS. ALL RIGHTS RESERVED."]}),A.jsxs("div",{className:"flex gap-6","data-source-loc":"src/pages/Studio.tsx:162:10",children:[A.jsx(hr,{to:"/work",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Studio.tsx:163:12",children:"Work"}),A.jsx(hr,{to:"/",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Studio.tsx:164:12",children:"Home"}),A.jsx("a",{href:"#contact",className:"hover:text-white transition-colors cursor-pointer",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Studio.tsx:165:12",children:"Contact"})]})]})})]})}function TC(){return A.jsxs("div",{className:"min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden","data-source-loc":"src/pages/Services.tsx:7:4",children:[A.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-60",style:{background:"radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"},"data-source-loc":"src/pages/Services.tsx:9:6"}),A.jsxs("header",{className:"relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up",style:{animationDelay:"200ms"},"data-source-loc":"src/pages/Services.tsx:17:6",children:[A.jsxs(hr,{to:"/",className:"font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity","data-source-loc":"src/pages/Services.tsx:18:8",children:["VexStudios",A.jsx("span",{className:"text-[#6f8cff]","data-source-loc":"src/pages/Services.tsx:19:20",children:"®"})]}),A.jsxs("nav",{className:"flex items-center gap-6 md:gap-8","data-source-loc":"src/pages/Services.tsx:22:8",children:[A.jsx(hr,{to:"/work",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Services.tsx:23:10",children:"Work"}),A.jsx(hr,{to:"/studio",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Services.tsx:26:10",children:"Studio"}),A.jsx(hr,{to:"/services",className:"text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold","data-source-loc":"src/pages/Services.tsx:29:10",children:"Services"}),A.jsx("a",{href:"#contact",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Services.tsx:32:10",children:"Contact"})]})]}),A.jsxs("main",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24","data-source-loc":"src/pages/Services.tsx:46:6",children:[A.jsxs("div",{className:"max-w-3xl mb-24 work-fade-up",style:{animationDelay:"400ms"},"data-source-loc":"src/pages/Services.tsx:49:8",children:[A.jsxs("h1",{className:"font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6","data-source-loc":"src/pages/Services.tsx:50:10",children:["Our ",A.jsx("span",{className:"neb-outline","data-source-loc":"src/pages/Services.tsx:51:16",children:"Services"})]}),A.jsx("p",{className:"text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed","data-source-loc":"src/pages/Services.tsx:53:10",children:"We don't do generic templates. We build bespoke digital products, immersive 3D experiences, and intelligent automations designed to elevate your brand and optimize your operations."})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 work-fade-up",style:{animationDelay:"550ms"},"data-source-loc":"src/pages/Services.tsx:59:8",children:[A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:62:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:63:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:64:12"}),A.jsx(pC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:65:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:66:12",children:"Brand Identity"}),A.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:67:12",children:"Forging digital DNA. We architect comprehensive brand strategies, from core naming and logo design to complete product packaging and startup kits."}),A.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:70:12",children:["Brand Strategy","Logo Design","Product Design","Packaging"].map(s=>A.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:72:16",children:s},s))})]}),A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:78:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:79:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:80:12"}),A.jsx(iC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:81:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:82:12",children:"Marketing Automation"}),A.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:83:12",children:"Intelligent marketing engines. We deploy automated workflows that transform manual follow-ups into deeply personalized, high-converting pipelines."}),A.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:86:12",children:["HubSpot","Salesforce","ActiveCampaign","AI Chatbots"].map(s=>A.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:88:16",children:s},s))})]}),A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:94:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:95:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:96:12"}),A.jsx(sC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:97:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:98:12",children:"Digital Marketing & SEO"}),A.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:99:12",children:"Data-driven growth architecture. We don't guess—we mathematically optimize your digital footprint for maximum visibility and conversion rates."}),A.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:102:12",children:["Performance Marketing","Technical SEO","PPC","CRO"].map(s=>A.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:104:16",children:s},s))})]}),A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:110:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:111:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:112:12"}),A.jsx(uC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:113:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:114:12",children:"Website Development"}),A.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:115:12",children:"Bespoke digital platforms. Moving beyond generic templates, we engineer custom React, Vue, and headless architectures optimized for absolute speed."}),A.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:118:12",children:["UI/UX Design","React / Next.js","API Integrations","WebGL"].map(s=>A.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:120:16",children:s},s))})]}),A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:126:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:127:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:128:12"}),A.jsx(yC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:129:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:130:12",children:"Ecommerce Automation"}),A.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:131:12",children:"Scaling revenue seamlessly. We optimize infrastructures with advanced workflow automations and custom sales integrations, turning your storefront into an autonomous machine."}),A.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:134:12",children:["Shopify Automation","Magento","Workflow AI","Amazon Ads"].map(s=>A.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:136:16",children:s},s))})]}),A.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:142:10",children:[A.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:143:12"}),A.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:144:12"}),A.jsx(hC,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:145:12"}),A.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:146:12",children:"Custom Software Dev"}),A.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:147:12",children:"Engineering the complex. From high-performance mobile apps to intricate SaaS platforms, we combine deep technical expertise with beautiful UI/UX logic."}),A.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:150:12",children:["iOS & Android","SaaS Architecture","Mobile UI/UX","Backend Eng."].map(s=>A.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:152:16",children:s},s))})]})]}),A.jsxs("div",{className:"mt-32 text-center work-fade-up",style:{animationDelay:"700ms"},"data-source-loc":"src/pages/Services.tsx:160:8",children:[A.jsx("p",{className:"text-[#aab2da] text-sm uppercase tracking-[0.2em] mb-6","data-source-loc":"src/pages/Services.tsx:161:10",children:"Need a custom solution?"}),A.jsx("a",{href:"#contact",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},className:"inline-block px-10 py-5 bg-[#6f8cff] text-white font-['Sora'] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#05060a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(111,140,255,0.4)]","data-source-loc":"src/pages/Services.tsx:162:10",children:"Start a Project"})]})]}),A.jsx("footer",{className:"relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up",style:{animationDelay:"850ms"},"data-source-loc":"src/pages/Services.tsx:176:6",children:A.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6","data-source-loc":"src/pages/Services.tsx:177:8",children:[A.jsxs("div",{"data-source-loc":"src/pages/Services.tsx:178:10",children:["© ",new Date().getFullYear()," VEXSTUDIOS. ALL RIGHTS RESERVED."]}),A.jsxs("div",{className:"flex gap-6","data-source-loc":"src/pages/Services.tsx:179:10",children:[A.jsx(hr,{to:"/",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Services.tsx:180:12",children:"Home"}),A.jsx(hr,{to:"/work",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Services.tsx:181:12",children:"Work"}),A.jsx(hr,{to:"/studio",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Services.tsx:182:12",children:"Studio"}),A.jsx("a",{href:"#contact",className:"hover:text-white transition-colors cursor-pointer",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Services.tsx:183:12",children:"Contact"})]})]})})]})}function CC(){const s=Ki(),[e,n]=me.useState(!0),[a,l]=me.useState(!0);return me.useEffect(()=>{n(!0),l(!0);const c=setTimeout(()=>{n(!1),setTimeout(()=>l(!1),500)},800);return()=>clearTimeout(c)},[s.pathname]),a?A.jsx("div",{className:"page-loader-overlay",style:{opacity:e?1:0},"data-source-loc":"src/components/PageLoader.tsx:24:4",children:A.jsx("div",{className:"spinner","data-source-loc":"src/components/PageLoader.tsx:25:6"})}):null}function AC(){const[s,e]=me.useState(!1),[n,a]=me.useState({name:"",email:"",service:"",message:""}),[l,c]=me.useState(!1),[d,p]=me.useState(!1);me.useEffect(()=>{const _=()=>e(!0);return window.addEventListener("open-contact-modal",_),()=>window.removeEventListener("open-contact-modal",_)},[]);const m=()=>{e(!1),setTimeout(()=>{p(!1),a({name:"",email:"",service:"",message:""})},300)},f=_=>{_.preventDefault(),c(!0),setTimeout(()=>{c(!1),p(!0)},1500)},g=_=>{a({...n,[_.target.name]:_.target.value})};return s?A.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300","data-source-loc":"src/components/ContactModal.tsx:52:4",children:[A.jsx("div",{className:"absolute inset-0 bg-[#05060a]/80 backdrop-blur-sm transition-opacity",onClick:m,"data-source-loc":"src/components/ContactModal.tsx:54:6"}),A.jsxs("div",{className:"relative z-10 w-full max-w-[400px] flex items-center justify-center animate-in zoom-in-95 duration-300","data-source-loc":"src/components/ContactModal.tsx:60:6",children:[A.jsx("button",{onClick:m,className:"absolute -top-12 right-0 text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-white/10","data-source-loc":"src/components/ContactModal.tsx:61:8",children:A.jsx(EC,{size:20,"data-source-loc":"src/components/ContactModal.tsx:65:10"})}),d?A.jsxs("div",{className:"contact-form flex flex-col items-center justify-center text-center py-12 min-h-[400px]","data-source-loc":"src/components/ContactModal.tsx:69:10",children:[A.jsxs("section",{className:"contact-bg-stars","data-source-loc":"src/components/ContactModal.tsx:70:13",children:[A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:71:14"}),A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:72:14"}),A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:73:14"}),A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:74:14"})]}),A.jsx("div",{className:"w-20 h-20 bg-[#6f8cff]/10 rounded-full flex items-center justify-center mb-6 border border-[#6f8cff]/30","data-source-loc":"src/components/ContactModal.tsx:77:12",children:A.jsx(lC,{className:"text-[#6f8cff]",size:40,"data-source-loc":"src/components/ContactModal.tsx:78:14"})}),A.jsx("h3",{className:"font-['Sora'] text-2xl font-bold uppercase tracking-tight text-white mb-4","data-source-loc":"src/components/ContactModal.tsx:80:12",children:"Transmission Sent"}),A.jsx("p",{className:"text-[#aab2da] text-sm font-light leading-relaxed max-w-xs mb-8","data-source-loc":"src/components/ContactModal.tsx:81:12",children:"Your details are in our system. A project architect will be in touch shortly."}),A.jsx("button",{onClick:m,className:"px-8 py-3 rounded-full text-xs uppercase tracking-widest bg-white/5 border border-white/10 hover:border-[#6f8cff] transition-all text-white","data-source-loc":"src/components/ContactModal.tsx:84:12",children:"Close Window"})]}):A.jsxs("form",{onSubmit:f,className:"contact-form","data-source-loc":"src/components/ContactModal.tsx:92:10",children:[A.jsx("div",{className:"contact-form-title","data-source-loc":"src/components/ContactModal.tsx:93:12",children:A.jsx("span",{"data-source-loc":"src/components/ContactModal.tsx:93:48",children:"start your"})}),A.jsx("div",{className:"contact-title-2","data-source-loc":"src/components/ContactModal.tsx:94:12",children:A.jsx("span",{"data-source-loc":"src/components/ContactModal.tsx:94:45",children:"PROJECT"})}),A.jsxs("section",{className:"contact-bg-stars","data-source-loc":"src/components/ContactModal.tsx:96:12",children:[A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:97:14"}),A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:98:14"}),A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:99:14"}),A.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:100:14"})]}),A.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:103:12",children:A.jsx("input",{placeholder:"Name",type:"text",className:"contact-input",name:"name",required:!0,value:n.name,onChange:g,"data-source-loc":"src/components/ContactModal.tsx:104:14"})}),A.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:115:12",children:A.jsx("input",{placeholder:"Email Address",type:"email",className:"contact-input",name:"email",required:!0,value:n.email,onChange:g,"data-source-loc":"src/components/ContactModal.tsx:116:14"})}),A.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:127:12",children:A.jsxs("select",{name:"service",required:!0,value:n.service,onChange:g,className:"contact-input appearance-none text-white/70","data-source-loc":"src/components/ContactModal.tsx:128:14",children:[A.jsx("option",{value:"",disabled:!0,className:"text-black","data-source-loc":"src/components/ContactModal.tsx:135:16",children:"Select a service..."}),A.jsx("option",{value:"Brand Identity",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:136:16",children:"Brand Identity"}),A.jsx("option",{value:"Marketing Automation",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:137:16",children:"Marketing Automation"}),A.jsx("option",{value:"Digital Marketing & SEO",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:138:16",children:"Digital Marketing & SEO"}),A.jsx("option",{value:"Website Development",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:139:16",children:"Website Development"}),A.jsx("option",{value:"Ecommerce Automation",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:140:16",children:"Ecommerce Automation"}),A.jsx("option",{value:"Custom Software Dev",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:141:16",children:"Custom Software Dev"}),A.jsx("option",{value:"Other",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:142:16",children:"Other / Unsure"})]})}),A.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:146:12",children:A.jsx("textarea",{placeholder:"Project Details...",name:"message",required:!0,value:n.message,onChange:g,rows:3,className:"contact-input resize-none","data-source-loc":"src/components/ContactModal.tsx:147:14"})}),A.jsx("button",{className:"contact-submit",type:"submit",disabled:l,"data-source-loc":"src/components/ContactModal.tsx:158:12",children:A.jsxs("span",{className:"sign-text flex items-center justify-center gap-2","data-source-loc":"src/components/ContactModal.tsx:159:14",children:[l?"Transmitting...":"Send Message",!l&&A.jsx(_C,{size:14,"data-source-loc":"src/components/ContactModal.tsx:161:34"})]})})]})]})]}):null}function RC(){return A.jsxs(yS,{"data-source-loc":"src/App.tsx:12:4",children:[A.jsx(CC,{"data-source-loc":"src/App.tsx:13:6"}),A.jsx(AC,{"data-source-loc":"src/App.tsx:14:6"}),A.jsx("main",{className:"w-full min-h-screen bg-[#05060a]","data-source-loc":"src/App.tsx:15:6",children:A.jsxs($b,{"data-source-loc":"src/App.tsx:16:8",children:[A.jsx(ll,{path:"/",element:A.jsx(K3,{"data-source-loc":"src/App.tsx:17:35"}),"data-source-loc":"src/App.tsx:17:10"}),A.jsx(ll,{path:"/work",element:A.jsx(Z3,{"data-source-loc":"src/App.tsx:18:39"}),"data-source-loc":"src/App.tsx:18:10"}),A.jsx(ll,{path:"/studio",element:A.jsx(wC,{"data-source-loc":"src/App.tsx:19:41"}),"data-source-loc":"src/App.tsx:19:10"}),A.jsx(ll,{path:"/services",element:A.jsx(TC,{"data-source-loc":"src/App.tsx:20:43"}),"data-source-loc":"src/App.tsx:20:10"})]})})]})}Jy.createRoot(document.getElementById("root")).render(A.jsx(me.StrictMode,{"data-source-loc":"src/main.tsx:7:2",children:A.jsx(RC,{"data-source-loc":"src/main.tsx:8:4"})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Dd={exports:{}},Jo={};var vv;function qy(){if(vv)return Jo;vv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=e,Jo.jsx=i,Jo.jsxs=i,Jo}var xv;function Yy(){return xv||(xv=1,Dd.exports=qy()),Dd.exports}var w=Yy(),Ud={exports:{}},gt={};var _v;function jy(){if(_v)return gt;_v=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,_={};function S(U,Z,Ae){this.props=U,this.context=Z,this.refs=_,this.updater=Ae||E}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function L(){}L.prototype=S.prototype;function F(U,Z,Ae){this.props=U,this.context=Z,this.refs=_,this.updater=Ae||E}var N=F.prototype=new L;N.constructor=F,C(N,S.prototype),N.isPureReactComponent=!0;var I=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(U,Z,Ae){var Ce=Ae.ref;return{$$typeof:r,type:U,key:Z,ref:Ce!==void 0?Ce:null,props:Ae}}function Y(U,Z){return O(U.type,Z,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function j(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return Z[Ae]})}var ue=/\/+/g;function ve(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):Z.toString(36)}function K(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(P,P):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,Z,Ae,Ce,Ge){var $=typeof U;($==="undefined"||$==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch($){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case r:case e:ye=!0;break;case g:return ye=U._init,B(ye(U._payload),Z,Ae,Ce,Ge)}}if(ye)return Ge=Ge(U),ye=Ce===""?"."+ve(U,0):Ce,I(Ge)?(Ae="",ye!=null&&(Ae=ye.replace(ue,"$&/")+"/"),B(Ge,Z,Ae,"",function(lt){return lt})):Ge!=null&&(k(Ge)&&(Ge=Y(Ge,Ae+(Ge.key==null||U&&U.key===Ge.key?"":(""+Ge.key).replace(ue,"$&/")+"/")+ye)),Z.push(Ge)),1;ye=0;var Te=Ce===""?".":Ce+":";if(I(U))for(var We=0;We<U.length;We++)Ce=U[We],$=Te+ve(Ce,We),ye+=B(Ce,Z,Ae,$,Ge);else if(We=M(U),typeof We=="function")for(U=We.call(U),We=0;!(Ce=U.next()).done;)Ce=Ce.value,$=Te+ve(Ce,We++),ye+=B(Ce,Z,Ae,$,Ge);else if($==="object"){if(typeof U.then=="function")return B(K(U),Z,Ae,Ce,Ge);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(U,Z,Ae){if(U==null)return U;var Ce=[],Ge=0;return B(U,Ce,"","",function($){return Z.call(Ae,$,Ge++)}),Ce}function ne(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var _e=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Re={map:G,forEach:function(U,Z,Ae){G(U,function(){Z.apply(this,arguments)},Ae)},count:function(U){var Z=0;return G(U,function(){Z++}),Z},toArray:function(U){return G(U,function(Z){return Z})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return gt.Activity=v,gt.Children=Re,gt.Component=S,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=F,gt.StrictMode=s,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,gt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},gt.cache=function(U){return function(){return U.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(U,Z,Ae){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=C({},U.props),Ge=U.key;if(Z!=null)for($ in Z.key!==void 0&&(Ge=""+Z.key),Z)!T.call(Z,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Z.ref===void 0||(Ce[$]=Z[$]);var $=arguments.length-2;if($===1)Ce.children=Ae;else if(1<$){for(var ye=Array($),Te=0;Te<$;Te++)ye[Te]=arguments[Te+2];Ce.children=ye}return O(U.type,Ge,Ce)},gt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},gt.createElement=function(U,Z,Ae){var Ce,Ge={},$=null;if(Z!=null)for(Ce in Z.key!==void 0&&($=""+Z.key),Z)T.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ge[Ce]=Z[Ce]);var ye=arguments.length-2;if(ye===1)Ge.children=Ae;else if(1<ye){for(var Te=Array(ye),We=0;We<ye;We++)Te[We]=arguments[We+2];Ge.children=Te}if(U&&U.defaultProps)for(Ce in ye=U.defaultProps,ye)Ge[Ce]===void 0&&(Ge[Ce]=ye[Ce]);return O(U,$,Ge)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:p,render:U}},gt.isValidElement=k,gt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ne}},gt.memo=function(U,Z){return{$$typeof:h,type:U,compare:Z===void 0?null:Z}},gt.startTransition=function(U){var Z=z.T,Ae={};z.T=Ae;try{var Ce=U(),Ge=z.S;Ge!==null&&Ge(Ae,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(P,_e)}catch($){_e($)}finally{Z!==null&&Ae.types!==null&&(Z.types=Ae.types),z.T=Z}},gt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},gt.use=function(U){return z.H.use(U)},gt.useActionState=function(U,Z,Ae){return z.H.useActionState(U,Z,Ae)},gt.useCallback=function(U,Z){return z.H.useCallback(U,Z)},gt.useContext=function(U){return z.H.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U,Z){return z.H.useDeferredValue(U,Z)},gt.useEffect=function(U,Z){return z.H.useEffect(U,Z)},gt.useEffectEvent=function(U){return z.H.useEffectEvent(U)},gt.useId=function(){return z.H.useId()},gt.useImperativeHandle=function(U,Z,Ae){return z.H.useImperativeHandle(U,Z,Ae)},gt.useInsertionEffect=function(U,Z){return z.H.useInsertionEffect(U,Z)},gt.useLayoutEffect=function(U,Z){return z.H.useLayoutEffect(U,Z)},gt.useMemo=function(U,Z){return z.H.useMemo(U,Z)},gt.useOptimistic=function(U,Z){return z.H.useOptimistic(U,Z)},gt.useReducer=function(U,Z,Ae){return z.H.useReducer(U,Z,Ae)},gt.useRef=function(U){return z.H.useRef(U)},gt.useState=function(U){return z.H.useState(U)},gt.useSyncExternalStore=function(U,Z,Ae){return z.H.useSyncExternalStore(U,Z,Ae)},gt.useTransition=function(){return z.H.useTransition()},gt.version="19.2.8",gt}var Sv;function vp(){return Sv||(Sv=1,Ud.exports=jy()),Ud.exports}var me=vp(),Ld={exports:{}},$o={},Od={exports:{}},Pd={};var yv;function Zy(){return yv||(yv=1,(function(r){function e(B,G){var ne=B.length;B.push(G);e:for(;0<ne;){var _e=ne-1>>>1,Re=B[_e];if(0<l(Re,G))B[_e]=G,B[ne]=Re,ne=_e;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],ne=B.pop();if(ne!==G){B[0]=ne;e:for(var _e=0,Re=B.length,U=Re>>>1;_e<U;){var Z=2*(_e+1)-1,Ae=B[Z],Ce=Z+1,Ge=B[Ce];if(0>l(Ae,ne))Ce<Re&&0>l(Ge,Ae)?(B[_e]=Ge,B[Ce]=ne,_e=Ce):(B[_e]=Ae,B[Z]=ne,_e=Z);else if(Ce<Re&&0>l(Ge,ne))B[_e]=Ge,B[Ce]=ne,_e=Ce;else break e}}return G}function l(B,G){var ne=B.sortIndex-G.sortIndex;return ne!==0?ne:B.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,v=null,x=3,M=!1,E=!1,C=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=B)s(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function I(B){if(C=!1,N(B),!E)if(i(m)!==null)E=!0,P||(P=!0,j());else{var G=i(h);G!==null&&K(I,G.startTime-B)}}var P=!1,z=-1,T=5,O=-1;function Y(){return _?!0:!(r.unstable_now()-O<T)}function k(){if(_=!1,P){var B=r.unstable_now();O=B;var G=!0;try{e:{E=!1,C&&(C=!1,L(z),z=-1),M=!0;var ne=x;try{t:{for(N(B),v=i(m);v!==null&&!(v.expirationTime>B&&Y());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,x=v.priorityLevel;var Re=_e(v.expirationTime<=B);if(B=r.unstable_now(),typeof Re=="function"){v.callback=Re,N(B),G=!0;break t}v===i(m)&&s(m),N(B)}else s(m);v=i(m)}if(v!==null)G=!0;else{var U=i(h);U!==null&&K(I,U.startTime-B),G=!1}}break e}finally{v=null,x=ne,M=!1}G=void 0}}finally{G?j():P=!1}}}var j;if(typeof F=="function")j=function(){F(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ve=ue.port2;ue.port1.onmessage=k,j=function(){ve.postMessage(null)}}else j=function(){S(k,0)};function K(B,G){z=S(function(){B(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var ne=x;x=G;try{return B()}finally{x=ne}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=x;x=B;try{return G()}finally{x=ne}},r.unstable_scheduleCallback=function(B,G,ne){var _e=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?_e+ne:_e):ne=_e,B){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ne+Re,B={id:g++,callback:G,priorityLevel:B,startTime:ne,expirationTime:Re,sortIndex:-1},ne>_e?(B.sortIndex=ne,e(h,B),i(m)===null&&B===i(h)&&(C?(L(z),z=-1):C=!0,K(I,ne-_e))):(B.sortIndex=Re,e(m,B),E||M||(E=!0,P||(P=!0,j()))),B},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(B){var G=x;return function(){var ne=x;x=G;try{return B.apply(this,arguments)}finally{x=ne}}}})(Pd)),Pd}var Mv;function Ky(){return Mv||(Mv=1,Od.exports=Zy()),Od.exports}var Fd={exports:{}},Zn={};var bv;function Qy(){if(bv)return Zn;bv=1;var r=vp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Zn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Zn.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},Zn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Zn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Zn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Zn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Zn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Zn.requestFormReset=function(m){s.d.r(m)},Zn.unstable_batchedUpdates=function(m,h){return m(h)},Zn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Zn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Zn.version="19.2.8",Zn}var Ev;function Jy(){if(Ev)return Fd.exports;Ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fd.exports=Qy(),Fd.exports}var Tv;function $y(){if(Tv)return $o;Tv=1;var r=Ky(),e=vp(),i=Jy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),F=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case _:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var K=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},_e=[],Re=-1;function U(t){return{current:t}}function Z(t){0>Re||(t.current=_e[Re],_e[Re]=null,Re--)}function Ae(t,n){Re++,_e[Re]=t.current,t.current=n}var Ce=U(null),Ge=U(null),$=U(null),ye=U(null);function Te(t,n){switch(Ae($,n),Ae(Ge,t),Ae(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hg(n),t=Gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),Ae(Ce,t)}function We(){Z(Ce),Z(Ge),Z($)}function lt(t){t.memoizedState!==null&&Ae(ye,t);var n=Ce.current,a=Gg(n,t.type);n!==a&&(Ae(Ge,t),Ae(Ce,a))}function $e(t){Ge.current===t&&(Z(Ce),Z(Ge)),ye.current===t&&(Z(ye),jo._currentValue=ne)}var en,_t;function rt(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+_t}var mt=!1;function dt(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(fe){var le=fe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(fe){le=fe}t.call(Me.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var H=y.split(`
`),se=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===se.length)for(o=H.length-1,u=se.length-1;1<=o&&0<=u&&H[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==se[u]){var xe=`
`+H[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?rt(a):""}function fn(t,n){switch(t.tag){case 26:case 27:case 5:return rt(t.type);case 16:return rt("Lazy");case 13:return t.child!==n&&n!==null?rt("Suspense Fallback"):rt("Suspense");case 19:return rt("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return rt("Activity");default:return""}}function dn(t){try{var n="",a=null;do n+=fn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var rn=Object.prototype.hasOwnProperty,xn=r.unstable_scheduleCallback,Gt=r.unstable_cancelCallback,hn=r.unstable_shouldYield,q=r.unstable_requestPaint,Vt=r.unstable_now,At=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,ae=r.unstable_LowPriority,de=r.unstable_IdlePriority,we=r.log,Oe=r.unstable_setDisableYieldValue,he=null,pe=null;function Ue(t){if(typeof we=="function"&&Oe(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(he,t)}catch{}}var Ve=Math.clz32?Math.clz32:Je,Fe=Math.log,Ie=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Fe(t)/Ie|0)|0}var it=256,ct=262144,X=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=De(o):(y&=R,y!==0?u=De(y):a||(a=R&~t,a!==0&&(u=De(a))))):(R=o&~d,R!==0?u=De(R):y!==0?u=De(y):a||(a=o&~t,a!==0&&(u=De(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function Ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function un(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,se=t.hiddenUpdates;for(a=y&~a;0<a;){var xe=31-Ve(a),Me=1<<xe;R[xe]=0,H[xe]=-1;var le=se[xe];if(le!==null)for(se[xe]=null,xe=0;xe<le.length;xe++){var fe=le[xe];fe!==null&&(fe.lane&=-536870913)}a&=~Me}o!==0&&Dt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function Dt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Bn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ve(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Vn(t,n){var a=n&-n;return a=(a&42)!==0?1:ma(a),(a&(t.suspendedLanes|n))!==0?0:a}function ma(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ga(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function va(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:uv(t.type))}function $i(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var fi=Math.random().toString(36).slice(2),ce="__reactFiber$"+fi,Pe="__reactProps$"+fi,Ee="__reactContainer$"+fi,ut="__reactEvents$"+fi,St="__reactListeners$"+fi,Rt="__reactHandles$"+fi,on="__reactResources$"+fi,Xt="__reactMarker$"+fi;function pn(t){delete t[ce],delete t[Pe],delete t[ut],delete t[St],delete t[Rt]}function tn(t){var n=t[ce];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ee]||a[ce]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=jg(t);t!==null;){if(a=t[ce])return a;t=jg(t)}return n}t=a,a=t.parentNode}return null}function st(t){if(t=t[ce]||t[Ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ne(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function jt(t){var n=t[on];return n||(n=t[on]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ct(t){t[Xt]=!0}var bn=new Set,A={};function V(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(A[t]=n,t=0;t<n.length;t++)bn.add(n[t])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},He={};function Xe(t){return rn.call(He,t)?!0:rn.call(te,t)?!1:ee.test(t)?He[t]=!0:(te[t]=!0,!1)}function Be(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=ht(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function ln(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ht(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Zt(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?bt(t,y,nt(n)):a!=null?bt(t,y,nt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+nt(R):t.removeAttribute("name")}function jn(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ut(t)}function bt(t,n,a){n==="number"&&qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Pn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function di(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function Bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(K(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ut(t)}function hi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _n(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Hi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&_n(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&_n(t,d,n[d])}function Yt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ea=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ns(t){return Qa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function xa(){}var Ru=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,cr=null;function Bp(t){var n=st(t);if(n&&(t=n.stateNode)){var a=t[Pe]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ye(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Pe]||null;if(!u)throw Error(s(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&ln(o)}break e;case"textarea":di(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Pn(t,!!a.multiple,n,!1)}}}var wu=!1;function Hp(t,n,a){if(wu)return t(n,a);wu=!0;try{var o=t(n);return o}finally{if(wu=!1,(lr!==null||cr!==null)&&(lc(),lr&&(n=lr,t=cr,cr=lr=null,Bp(n),t)))for(n=0;n<t.length;n++)Bp(t[n])}}function uo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Pe]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(_a)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Nu=!1}var Ja=null,Du=null,Ml=null;function Gp(){if(Ml)return Ml;var t,n=Du,a=n.length,o,u="value"in Ja?Ja.value:Ja.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return Ml=u.slice(t,1<o?1-o:void 0)}function bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Vp(){return!1}function ni(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?El:Vp,this.isPropagationStopped=Vp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),n}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=ni(Ds),ho=v({},Ds,{view:0,detail:0}),W_=ni(ho),Uu,Lu,po,Al=v({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Uu=t.screenX-po.screenX,Lu=t.screenY-po.screenY):Lu=Uu=0,po=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),kp=ni(Al),X_=v({},Al,{dataTransfer:0}),q_=ni(X_),Y_=v({},ho,{relatedTarget:0}),Ou=ni(Y_),j_=v({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=ni(j_),K_=v({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q_=ni(K_),J_=v({},Ds,{data:0}),Wp=ni(J_),$_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tS[t])?!!n[t]:!1}function Pu(){return nS}var iS=v({},ho,{key:function(t){if(t.key){var n=$_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aS=ni(iS),sS=v({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=ni(sS),rS=v({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),oS=ni(rS),lS=v({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=ni(lS),uS=v({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=ni(uS),dS=v({},Ds,{newState:0,oldState:0}),hS=ni(dS),pS=[9,13,27,32],Fu=_a&&"CompositionEvent"in window,mo=null;_a&&"documentMode"in document&&(mo=document.documentMode);var mS=_a&&"TextEvent"in window&&!mo,qp=_a&&(!Fu||mo&&8<mo&&11>=mo),Yp=" ",jp=!1;function Zp(t,n){switch(t){case"keyup":return pS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function gS(t,n){switch(t){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(jp=!0,Yp);case"textInput":return t=n.data,t===Yp&&jp?null:t;default:return null}}function vS(t,n){if(ur)return t==="compositionend"||!Fu&&Zp(t,n)?(t=Gp(),Ml=Du=Ja=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qp&&n.locale!=="ko"?null:n.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xS[t.type]:n==="textarea"}function Jp(t,n,a,o){lr?cr?cr.push(o):cr=[o]:lr=o,n=mc(n,"onChange"),0<n.length&&(a=new Tl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var go=null,vo=null;function _S(t){Og(t,0)}function Rl(t){var n=Ne(t);if(ln(n))return t}function $p(t,n){if(t==="change")return n}var em=!1;if(_a){var Iu;if(_a){var zu="oninput"in document;if(!zu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),zu=typeof tm.oninput=="function"}Iu=zu}else Iu=!1;em=Iu&&(!document.documentMode||9<document.documentMode)}function nm(){go&&(go.detachEvent("onpropertychange",im),vo=go=null)}function im(t){if(t.propertyName==="value"&&Rl(vo)){var n=[];Jp(n,vo,t,Cu(t)),Hp(_S,n)}}function SS(t,n,a){t==="focusin"?(nm(),go=n,vo=a,go.attachEvent("onpropertychange",im)):t==="focusout"&&nm()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(vo)}function MS(t,n){if(t==="click")return Rl(n)}function bS(t,n){if(t==="input"||t==="change")return Rl(n)}function ES(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var pi=typeof Object.is=="function"?Object.is:ES;function xo(t,n){if(pi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!rn.call(n,u)||!pi(t[u],n[u]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,n){var a=am(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=am(a)}}function rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qt(t.document)}return n}function Bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var TS=_a&&"documentMode"in document&&11>=document.documentMode,fr=null,Hu=null,_o=null,Gu=!1;function lm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||fr==null||fr!==qt(o)||(o=fr,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&xo(_o,o)||(_o=o,o=mc(Hu,"onSelect"),0<o.length&&(n=new Tl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=fr)))}function Us(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var dr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},Vu={},cm={};_a&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ls(t){if(Vu[t])return Vu[t];if(!dr[t])return t;var n=dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cm)return Vu[t]=n[a];return t}var um=Ls("animationend"),fm=Ls("animationiteration"),dm=Ls("animationstart"),AS=Ls("transitionrun"),RS=Ls("transitionstart"),CS=Ls("transitioncancel"),hm=Ls("transitionend"),pm=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function Gi(t,n){pm.set(t,n),V(n,[t])}var Cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],hr=0,Wu=0;function wl(){for(var t=hr,n=Wu=hr=0;n<t;){var a=Ei[n];Ei[n++]=null;var o=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var d=Ei[n];if(Ei[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&mm(a,u,d)}}function Nl(t,n,a,o){Ei[hr++]=t,Ei[hr++]=n,Ei[hr++]=a,Ei[hr++]=o,Wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Xu(t,n,a,o){return Nl(t,n,a,o),Dl(t)}function Os(t,n){return Nl(t,null,null,n),Dl(t)}function mm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ve(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Dl(t){if(50<Go)throw Go=0,td=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var pr={};function wS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,n,a,o){return new wS(t,n,a,o)}function qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=mi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ul(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")qu(t)&&(y=1);else if(typeof t=="string")y=Oy(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=mi(31,a,n,u),t.elementType=O,t.lanes=d,t;case C:return Ps(a.children,u,d,n);case _:y=8,u|=24;break;case S:return t=mi(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case I:return t=mi(13,a,n,u),t.elementType=I,t.lanes=d,t;case P:return t=mi(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:y=10;break e;case L:y=9;break e;case N:y=11;break e;case z:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=mi(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ps(t,n,a,o){return t=mi(7,t,o,n),t.lanes=a,t}function Yu(t,n,a){return t=mi(6,t,null,n),t.lanes=a,t}function vm(t){var n=mi(18,null,null,0);return n.stateNode=t,n}function ju(t,n,a){return n=mi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xm=new WeakMap;function Ti(t,n){if(typeof t=="object"&&t!==null){var a=xm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:dn(n)},xm.set(t,n),n)}return{value:t,source:n,stack:dn(n)}}var mr=[],gr=0,Ll=null,So=0,Ai=[],Ri=0,$a=null,ta=1,na="";function ya(t,n){mr[gr++]=So,mr[gr++]=Ll,Ll=t,So=n}function _m(t,n,a){Ai[Ri++]=ta,Ai[Ri++]=na,Ai[Ri++]=$a,$a=t;var o=ta;t=na;var u=32-Ve(o)-1;o&=~(1<<u),a+=1;var d=32-Ve(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ta=1<<32-Ve(n)+u|a<<u|o,na=d+t}else ta=1<<d|a<<u|o,na=t}function Zu(t){t.return!==null&&(ya(t,1),_m(t,1,0))}function Ku(t){for(;t===Ll;)Ll=mr[--gr],mr[gr]=null,So=mr[--gr],mr[gr]=null;for(;t===$a;)$a=Ai[--Ri],Ai[Ri]=null,na=Ai[--Ri],Ai[Ri]=null,ta=Ai[--Ri],Ai[Ri]=null}function Sm(t,n){Ai[Ri++]=ta,Ai[Ri++]=na,Ai[Ri++]=$a,ta=n.id,na=n.overflow,$a=t}var kn=null,mn=null,Lt=!1,es=null,Ci=!1,Qu=Error(s(519));function ts(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(Ti(n,t)),Qu}function ym(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ce]=t,n[Pe]=o,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<ko.length;a++)Tt(ko[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),jn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),Bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||zg(n.textContent,a)?(o.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),o.onScroll!=null&&Tt("scroll",n),o.onScrollEnd!=null&&Tt("scrollend",n),o.onClick!=null&&(n.onclick=xa),n=!0):n=!1,n||ts(t,!0)}function Mm(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:kn=kn.return}}function vr(t){if(t!==kn)return!1;if(!Lt)return Mm(t),Lt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||gd(t.type,t.memoizedProps)),a=!a),a&&mn&&ts(t),Mm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));mn=Yg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));mn=Yg(t)}else n===27?(n=mn,ms(t.type)?(t=yd,yd=null,mn=t):mn=n):mn=kn?Ni(t.stateNode.nextSibling):null;return!0}function Fs(){mn=kn=null,Lt=!1}function Ju(){var t=es;return t!==null&&(ri===null?ri=t:ri.push.apply(ri,t),es=null),t}function yo(t){es===null?es=[t]:es.push(t)}var $u=U(null),Is=null,Ma=null;function ns(t,n,a){Ae($u,n._currentValue),n._currentValue=a}function ba(t){t._currentValue=$u.current,Z($u)}function ef(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function tf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),ef(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),ef(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function xr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;pi(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}u=u.return}t!==null&&tf(n,t,a,o),n.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!pi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zs(t){Is=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wn(t){return bm(Is,t)}function Pl(t,n){return Is===null&&zs(t),bm(t,n)}function bm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(t===null)throw Error(s(308));Ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ma=Ma.next=n;return a}var NS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},DS=r.unstable_scheduleCallback,US=r.unstable_NormalPriority,Nn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new NS,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&DS(US,function(){t.controller.abort()})}var bo=null,af=0,_r=0,Sr=null;function LS(t,n){if(bo===null){var a=bo=[];af=0,_r=od(),Sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return af++,n.then(Em,Em),n}function Em(){if(--af===0&&bo!==null){Sr!==null&&(Sr.status="fulfilled");var t=bo;bo=null,_r=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function OS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Tm=B.S;B.S=function(t,n){lg=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&LS(t,n),Tm!==null&&Tm(t,n)};var Bs=U(null);function sf(){var t=Bs.current;return t!==null?t:cn.pooledCache}function Fl(t,n){n===null?Ae(Bs,Bs.current):Ae(Bs,n.pool)}function Am(){var t=sf();return t===null?null:{parent:Nn._currentValue,pool:t}}var yr=Error(s(460)),rf=Error(s(474)),Il=Error(s(542)),zl={then:function(){}};function Rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(xa,xa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Nm(t),t;default:if(typeof n.status=="string")n.then(xa,xa);else{if(t=cn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Nm(t),t}throw Gs=n,yr}}function Hs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gs=a,yr):a}}var Gs=null;function wm(){if(Gs===null)throw Error(s(459));var t=Gs;return Gs=null,t}function Nm(t){if(t===yr||t===Il)throw Error(s(483))}var Mr=null,Eo=0;function Bl(t){var n=Eo;return Eo+=1,Mr===null&&(Mr=[]),Cm(Mr,t,n)}function To(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Hl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dm(t){function n(J,W){if(t){var ie=J.deletions;ie===null?(J.deletions=[W],J.flags|=16):ie.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=Sa(J,W),J.index=0,J.sibling=null,J}function d(J,W,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<W?(J.flags|=67108866,W):ie):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function y(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,ie,Se){return W===null||W.tag!==6?(W=Yu(ie,J.mode,Se),W.return=J,W):(W=u(W,ie),W.return=J,W)}function H(J,W,ie,Se){var at=ie.type;return at===C?xe(J,W,ie.props.children,Se,ie.key):W!==null&&(W.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&Hs(at)===W.type)?(W=u(W,ie.props),To(W,ie),W.return=J,W):(W=Ul(ie.type,ie.key,ie.props,null,J.mode,Se),To(W,ie),W.return=J,W)}function se(J,W,ie,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=ju(ie,J.mode,Se),W.return=J,W):(W=u(W,ie.children||[]),W.return=J,W)}function xe(J,W,ie,Se,at){return W===null||W.tag!==7?(W=Ps(ie,J.mode,Se,at),W.return=J,W):(W=u(W,ie),W.return=J,W)}function Me(J,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Yu(""+W,J.mode,ie),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return ie=Ul(W.type,W.key,W.props,null,J.mode,ie),To(ie,W),ie.return=J,ie;case E:return W=ju(W,J.mode,ie),W.return=J,W;case T:return W=Hs(W),Me(J,W,ie)}if(K(W)||j(W))return W=Ps(W,J.mode,ie,null),W.return=J,W;if(typeof W.then=="function")return Me(J,Bl(W),ie);if(W.$$typeof===F)return Me(J,Pl(J,W),ie);Hl(J,W)}return null}function le(J,W,ie,Se){var at=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return at!==null?null:R(J,W,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===at?H(J,W,ie,Se):null;case E:return ie.key===at?se(J,W,ie,Se):null;case T:return ie=Hs(ie),le(J,W,ie,Se)}if(K(ie)||j(ie))return at!==null?null:xe(J,W,ie,Se,null);if(typeof ie.then=="function")return le(J,W,Bl(ie),Se);if(ie.$$typeof===F)return le(J,W,Pl(J,ie),Se);Hl(J,ie)}return null}function fe(J,W,ie,Se,at){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ie)||null,R(W,J,""+Se,at);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case M:return J=J.get(Se.key===null?ie:Se.key)||null,H(W,J,Se,at);case E:return J=J.get(Se.key===null?ie:Se.key)||null,se(W,J,Se,at);case T:return Se=Hs(Se),fe(J,W,ie,Se,at)}if(K(Se)||j(Se))return J=J.get(ie)||null,xe(W,J,Se,at,null);if(typeof Se.then=="function")return fe(J,W,ie,Bl(Se),at);if(Se.$$typeof===F)return fe(J,W,ie,Pl(W,Se),at);Hl(W,Se)}return null}function Qe(J,W,ie,Se){for(var at=null,zt=null,tt=W,yt=W=0,Nt=null;tt!==null&&yt<ie.length;yt++){tt.index>yt?(Nt=tt,tt=null):Nt=tt.sibling;var Bt=le(J,tt,ie[yt],Se);if(Bt===null){tt===null&&(tt=Nt);break}t&&tt&&Bt.alternate===null&&n(J,tt),W=d(Bt,W,yt),zt===null?at=Bt:zt.sibling=Bt,zt=Bt,tt=Nt}if(yt===ie.length)return a(J,tt),Lt&&ya(J,yt),at;if(tt===null){for(;yt<ie.length;yt++)tt=Me(J,ie[yt],Se),tt!==null&&(W=d(tt,W,yt),zt===null?at=tt:zt.sibling=tt,zt=tt);return Lt&&ya(J,yt),at}for(tt=o(tt);yt<ie.length;yt++)Nt=fe(tt,J,yt,ie[yt],Se),Nt!==null&&(t&&Nt.alternate!==null&&tt.delete(Nt.key===null?yt:Nt.key),W=d(Nt,W,yt),zt===null?at=Nt:zt.sibling=Nt,zt=Nt);return t&&tt.forEach(function(Ss){return n(J,Ss)}),Lt&&ya(J,yt),at}function ot(J,W,ie,Se){if(ie==null)throw Error(s(151));for(var at=null,zt=null,tt=W,yt=W=0,Nt=null,Bt=ie.next();tt!==null&&!Bt.done;yt++,Bt=ie.next()){tt.index>yt?(Nt=tt,tt=null):Nt=tt.sibling;var Ss=le(J,tt,Bt.value,Se);if(Ss===null){tt===null&&(tt=Nt);break}t&&tt&&Ss.alternate===null&&n(J,tt),W=d(Ss,W,yt),zt===null?at=Ss:zt.sibling=Ss,zt=Ss,tt=Nt}if(Bt.done)return a(J,tt),Lt&&ya(J,yt),at;if(tt===null){for(;!Bt.done;yt++,Bt=ie.next())Bt=Me(J,Bt.value,Se),Bt!==null&&(W=d(Bt,W,yt),zt===null?at=Bt:zt.sibling=Bt,zt=Bt);return Lt&&ya(J,yt),at}for(tt=o(tt);!Bt.done;yt++,Bt=ie.next())Bt=fe(tt,J,yt,Bt.value,Se),Bt!==null&&(t&&Bt.alternate!==null&&tt.delete(Bt.key===null?yt:Bt.key),W=d(Bt,W,yt),zt===null?at=Bt:zt.sibling=Bt,zt=Bt);return t&&tt.forEach(function(Xy){return n(J,Xy)}),Lt&&ya(J,yt),at}function sn(J,W,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===C&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var at=ie.key;W!==null;){if(W.key===at){if(at=ie.type,at===C){if(W.tag===7){a(J,W.sibling),Se=u(W,ie.props.children),Se.return=J,J=Se;break e}}else if(W.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===T&&Hs(at)===W.type){a(J,W.sibling),Se=u(W,ie.props),To(Se,ie),Se.return=J,J=Se;break e}a(J,W);break}else n(J,W);W=W.sibling}ie.type===C?(Se=Ps(ie.props.children,J.mode,Se,ie.key),Se.return=J,J=Se):(Se=Ul(ie.type,ie.key,ie.props,null,J.mode,Se),To(Se,ie),Se.return=J,J=Se)}return y(J);case E:e:{for(at=ie.key;W!==null;){if(W.key===at)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(J,W.sibling),Se=u(W,ie.children||[]),Se.return=J,J=Se;break e}else{a(J,W);break}else n(J,W);W=W.sibling}Se=ju(ie,J.mode,Se),Se.return=J,J=Se}return y(J);case T:return ie=Hs(ie),sn(J,W,ie,Se)}if(K(ie))return Qe(J,W,ie,Se);if(j(ie)){if(at=j(ie),typeof at!="function")throw Error(s(150));return ie=at.call(ie),ot(J,W,ie,Se)}if(typeof ie.then=="function")return sn(J,W,Bl(ie),Se);if(ie.$$typeof===F)return sn(J,W,Pl(J,ie),Se);Hl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(a(J,W.sibling),Se=u(W,ie),Se.return=J,J=Se):(a(J,W),Se=Yu(ie,J.mode,Se),Se.return=J,J=Se),y(J)):a(J,W)}return function(J,W,ie,Se){try{Eo=0;var at=sn(J,W,ie,Se);return Mr=null,at}catch(tt){if(tt===yr||tt===Il)throw tt;var zt=mi(29,tt,null,J.mode);return zt.lanes=Se,zt.return=J,zt}}}var Vs=Dm(!0),Um=Dm(!1),is=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function as(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ss(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(kt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(t),mm(t,null,a),n}return Nl(t,o,n,a),Dl(t)}function Ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Bn(t,a)}}function cf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var uf=!1;function Ro(){if(uf){var t=Sr;if(t!==null)throw t}}function Co(t,n,a,o){uf=!1;var u=t.updateQueue;is=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,se=H.next;H.next=null,y===null?d=se:y.next=se,y=H;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,R=xe.lastBaseUpdate,R!==y&&(R===null?xe.firstBaseUpdate=se:R.next=se,xe.lastBaseUpdate=H))}if(d!==null){var Me=u.baseState;y=0,xe=se=H=null,R=d;do{var le=R.lane&-536870913,fe=le!==R.lane;if(fe?(wt&le)===le:(o&le)===le){le!==0&&le===_r&&(uf=!0),xe!==null&&(xe=xe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Qe=t,ot=R;le=n;var sn=a;switch(ot.tag){case 1:if(Qe=ot.payload,typeof Qe=="function"){Me=Qe.call(sn,Me,le);break e}Me=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ot.payload,le=typeof Qe=="function"?Qe.call(sn,Me,le):Qe,le==null)break e;Me=v({},Me,le);break e;case 2:is=!0}}le=R.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},xe===null?(se=xe=fe,H=Me):xe=xe.next=fe,y|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);xe===null&&(H=Me),u.baseState=H,u.firstBaseUpdate=se,u.lastBaseUpdate=xe,d===null&&(u.shared.lanes=0),us|=y,t.lanes=y,t.memoizedState=Me}}function Lm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Om(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lm(a[t],n)}var br=U(null),Gl=U(0);function Pm(t,n){t=Ua,Ae(Gl,t),Ae(br,n),Ua=t|n.baseLanes}function ff(){Ae(Gl,Ua),Ae(br,br.current)}function df(){Ua=Gl.current,Z(br),Z(Gl)}var gi=U(null),wi=null;function rs(t){var n=t.alternate;Ae(Rn,Rn.current&1),Ae(gi,t),wi===null&&(n===null||br.current!==null||n.memoizedState!==null)&&(wi=t)}function hf(t){Ae(Rn,Rn.current),Ae(gi,t),wi===null&&(wi=t)}function Fm(t){t.tag===22?(Ae(Rn,Rn.current),Ae(gi,t),wi===null&&(wi=t)):os()}function os(){Ae(Rn,Rn.current),Ae(gi,gi.current)}function vi(t){Z(gi),wi===t&&(wi=null),Z(Rn)}var Rn=U(0);function Vl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_d(a)||Sd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,xt=null,nn=null,Dn=null,kl=!1,Er=!1,ks=!1,Wl=0,wo=0,Tr=null,PS=0;function En(){throw Error(s(321))}function pf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!pi(t[a],n[a]))return!1;return!0}function mf(t,n,a,o,u,d){return Ea=d,xt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?_0:Nf,ks=!1,d=a(o,u),ks=!1,Er&&(d=zm(n,a,o,u)),Im(t),d}function Im(t){B.H=Uo;var n=nn!==null&&nn.next!==null;if(Ea=0,Dn=nn=xt=null,kl=!1,wo=0,Tr=null,n)throw Error(s(300));t===null||Un||(t=t.dependencies,t!==null&&Ol(t)&&(Un=!0))}function zm(t,n,a,o){xt=t;var u=0;do{if(Er&&(Tr=null),wo=0,Er=!1,25<=u)throw Error(s(301));if(u+=1,Dn=nn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=S0,d=n(a,o)}while(Er);return d}function FS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?No(n):n,t=t.useState()[0],(nn!==null?nn.memoizedState:null)!==t&&(xt.flags|=1024),n}function gf(){var t=Wl!==0;return Wl=0,t}function vf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xf(t){if(kl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}kl=!1}Ea=0,Dn=nn=xt=null,Er=!1,wo=Wl=0,Tr=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?xt.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function Cn(){if(nn===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var n=Dn===null?xt.memoizedState:Dn.next;if(n!==null)Dn=n,nn=t;else{if(t===null)throw xt.alternate===null?Error(s(467)):Error(s(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},Dn===null?xt.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var n=wo;return wo+=1,Tr===null&&(Tr=[]),t=Cm(Tr,t,n),n=xt,(Dn===null?n.memoizedState:Dn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?_0:Nf),t}function ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===F)return Wn(t)}throw Error(s(438,String(t)))}function _f(t){var n=null,a=xt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xl(),xt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function Ta(t,n){return typeof n=="function"?n(t):n}function Yl(t){var n=Cn();return Sf(n,nn,t)}function Sf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,H=null,se=n,xe=!1;do{var Me=se.lane&-536870913;if(Me!==se.lane?(wt&Me)===Me:(Ea&Me)===Me){var le=se.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Me===_r&&(xe=!0);else if((Ea&le)===le){se=se.next,le===_r&&(xe=!0);continue}else Me={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},H===null?(R=H=Me,y=d):H=H.next=Me,xt.lanes|=le,us|=le;Me=se.action,ks&&a(d,Me),d=se.hasEagerState?se.eagerState:a(d,Me)}else le={lane:Me,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},H===null?(R=H=le,y=d):H=H.next=le,xt.lanes|=Me,us|=Me;se=se.next}while(se!==null&&se!==n);if(H===null?y=d:H.next=R,!pi(d,t.memoizedState)&&(Un=!0,xe&&(a=Sr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function yf(t){var n=Cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);pi(d,n.memoizedState)||(Un=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Bm(t,n,a){var o=xt,u=Cn(),d=Lt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!pi((nn||u).memoizedState,a);if(y&&(u.memoizedState=a,Un=!0),u=u.queue,Ef(Vm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||Dn!==null&&Dn.memoizedState.tag&1){if(o.flags|=2048,Ar(9,{destroy:void 0},Gm.bind(null,o,u,a,n),null),cn===null)throw Error(s(349));d||(Ea&127)!==0||Hm(o,n,a)}return a}function Hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xt.updateQueue,n===null?(n=Xl(),xt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gm(t,n,a,o){n.value=a,n.getSnapshot=o,km(n)&&Wm(t)}function Vm(t,n,a){return a(function(){km(n)&&Wm(t)})}function km(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!pi(t,a)}catch{return!0}}function Wm(t){var n=Os(t,2);n!==null&&oi(n,t,2)}function Mf(t){var n=$n();if(typeof t=="function"){var a=t;if(t=a(),ks){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},n}function Xm(t,n,a,o){return t.baseState=a,Sf(t,nn,typeof o=="function"?o:Ta)}function IS(t,n,a,o,u){if(Kl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,qm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function qm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var R=a(u,o),H=B.S;H!==null&&H(y,R),Ym(t,n,R)}catch(se){bf(t,n,se)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=a(u,o),Ym(t,n,d)}catch(se){bf(t,n,se)}}function Ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jm(t,n,o)},function(o){return bf(t,n,o)}):jm(t,n,a)}function jm(t,n,a){n.status="fulfilled",n.value=a,Zm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,qm(t,a)))}function bf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zm(n),n=n.next;while(n!==o)}t.action=null}function Zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Km(t,n){return n}function Qm(t,n){if(Lt){var a=cn.formState;if(a!==null){e:{var o=xt;if(Lt){if(mn){t:{for(var u=mn,d=Ci;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ni(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){mn=Ni(u.nextSibling),o=u.data==="F!";break e}}ts(o)}o=!1}o&&(n=a[0])}}return a=$n(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:n},a.queue=o,a=g0.bind(null,xt,o),o.dispatch=a,o=Mf(!1),d=wf.bind(null,xt,!1,o.queue),o=$n(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=IS.bind(null,xt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Jm(t){var n=Cn();return $m(n,nn,t)}function $m(t,n,a){if(n=Sf(t,n,Km)[0],t=Yl(Ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(y){throw y===yr?Il:y}else o=n;n=Cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(xt.flags|=2048,Ar(9,{destroy:void 0},zS.bind(null,u,a),null)),[o,d,t]}function zS(t,n){t.action=n}function e0(t){var n=Cn(),a=nn;if(a!==null)return $m(n,a,t);Cn(),n=n.memoizedState,a=Cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ar(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=xt.updateQueue,n===null&&(n=Xl(),xt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function t0(){return Cn().memoizedState}function jl(t,n,a,o){var u=$n();xt.flags|=t,u.memoizedState=Ar(1|n,{destroy:void 0},a,o===void 0?null:o)}function Zl(t,n,a,o){var u=Cn();o=o===void 0?null:o;var d=u.memoizedState.inst;nn!==null&&o!==null&&pf(o,nn.memoizedState.deps)?u.memoizedState=Ar(n,d,a,o):(xt.flags|=t,u.memoizedState=Ar(1|n,d,a,o))}function n0(t,n){jl(8390656,8,t,n)}function Ef(t,n){Zl(2048,8,t,n)}function BS(t){xt.flags|=4;var n=xt.updateQueue;if(n===null)n=Xl(),xt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function i0(t){var n=Cn().memoizedState;return BS({ref:n,nextImpl:t}),function(){if((kt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function a0(t,n){return Zl(4,2,t,n)}function s0(t,n){return Zl(4,4,t,n)}function r0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function o0(t,n,a){a=a!=null?a.concat([t]):null,Zl(4,4,r0.bind(null,n,t),a)}function Tf(){}function l0(t,n){var a=Cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&pf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function c0(t,n){var a=Cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&pf(n,o[1]))return o[0];if(o=t(),ks){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o}function Af(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(wt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ug(),xt.lanes|=t,us|=t,a)}function u0(t,n,a,o){return pi(a,n)?a:br.current!==null?(t=Af(t,a,o),pi(t,n)||(Un=!0),t):(Ea&42)===0||(Ea&1073741824)!==0&&(wt&261930)===0?(Un=!0,t.memoizedState=a):(t=ug(),xt.lanes|=t,us|=t,n)}function f0(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var y=B.T,R={};B.T=R,wf(t,!1,n,a);try{var H=u(),se=B.S;if(se!==null&&se(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xe=OS(H,o);Do(t,n,xe,Si(t))}else Do(t,n,o,Si(t))}catch(Me){Do(t,n,{then:function(){},status:"rejected",reason:Me},Si())}finally{G.p=d,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function HS(){}function Rf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=d0(t).queue;f0(t,u,n,ne,a===null?HS:function(){return h0(t),a(o)})}function d0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function h0(t){var n=d0(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},Si())}function Cf(){return Wn(jo)}function p0(){return Cn().memoizedState}function m0(){return Cn().memoizedState}function GS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Si();t=as(a);var o=ss(n,t,a);o!==null&&(oi(o,n,a),Ao(o,n,a)),n={cache:nf()},t.payload=n;return}n=n.return}}function VS(t,n,a){var o=Si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Kl(t)?v0(n,a):(a=Xu(t,n,a,o),a!==null&&(oi(a,t,o),x0(a,n,o)))}function g0(t,n,a){var o=Si();Do(t,n,a,o)}function Do(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kl(t))v0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,pi(R,y))return Nl(t,n,u,0),cn===null&&wl(),!1}catch{}if(a=Xu(t,n,u,o),a!==null)return oi(a,t,o),x0(a,n,o),!0}return!1}function wf(t,n,a,o){if(o={lane:2,revertLane:od(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Kl(t)){if(n)throw Error(s(479))}else n=Xu(t,a,o,2),n!==null&&oi(n,t,2)}function Kl(t){var n=t.alternate;return t===xt||n!==null&&n===xt}function v0(t,n){Er=kl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function x0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Bn(t,a)}}var Uo={readContext:Wn,use:ql,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En};Uo.useEffectEvent=En;var _0={readContext:Wn,use:ql,useCallback:function(t,n){return $n().memoizedState=[t,n===void 0?null:n],t},useContext:Wn,useEffect:n0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,jl(4194308,4,r0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return jl(4194308,4,t,n)},useInsertionEffect:function(t,n){jl(4,2,t,n)},useMemo:function(t,n){var a=$n();n=n===void 0?null:n;var o=t();if(ks){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=$n();if(a!==void 0){var u=a(n);if(ks){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=VS.bind(null,xt,t),[o.memoizedState,t]},useRef:function(t){var n=$n();return t={current:t},n.memoizedState=t},useState:function(t){t=Mf(t);var n=t.queue,a=g0.bind(null,xt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Tf,useDeferredValue:function(t,n){var a=$n();return Af(a,t,n)},useTransition:function(){var t=Mf(!1);return t=f0.bind(null,xt,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=xt,u=$n();if(Lt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),cn===null)throw Error(s(349));(wt&127)!==0||Hm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,n0(Vm.bind(null,o,d,t),[t]),o.flags|=2048,Ar(9,{destroy:void 0},Gm.bind(null,o,d,a,n),null),a},useId:function(){var t=$n(),n=cn.identifierPrefix;if(Lt){var a=na,o=ta;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=PS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Cf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t){var n=$n();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wf.bind(null,xt,!0,a),a.dispatch=n,[t,n]},useMemoCache:_f,useCacheRefresh:function(){return $n().memoizedState=GS.bind(null,xt)},useEffectEvent:function(t){var n=$n(),a={impl:t};return n.memoizedState=a,function(){if((kt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Nf={readContext:Wn,use:ql,useCallback:l0,useContext:Wn,useEffect:Ef,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:s0,useMemo:c0,useReducer:Yl,useRef:t0,useState:function(){return Yl(Ta)},useDebugValue:Tf,useDeferredValue:function(t,n){var a=Cn();return u0(a,nn.memoizedState,t,n)},useTransition:function(){var t=Yl(Ta)[0],n=Cn().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Bm,useId:p0,useHostTransitionStatus:Cf,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var a=Cn();return Xm(a,nn,t,n)},useMemoCache:_f,useCacheRefresh:m0};Nf.useEffectEvent=i0;var S0={readContext:Wn,use:ql,useCallback:l0,useContext:Wn,useEffect:Ef,useImperativeHandle:o0,useInsertionEffect:a0,useLayoutEffect:s0,useMemo:c0,useReducer:yf,useRef:t0,useState:function(){return yf(Ta)},useDebugValue:Tf,useDeferredValue:function(t,n){var a=Cn();return nn===null?Af(a,t,n):u0(a,nn.memoizedState,t,n)},useTransition:function(){var t=yf(Ta)[0],n=Cn().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Bm,useId:p0,useHostTransitionStatus:Cf,useFormState:e0,useActionState:e0,useOptimistic:function(t,n){var a=Cn();return nn!==null?Xm(a,nn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:m0};S0.useEffectEvent=i0;function Df(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Si(),u=as(o);u.payload=n,a!=null&&(u.callback=a),n=ss(t,u,o),n!==null&&(oi(n,t,o),Ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Si(),u=as(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ss(t,u,o),n!==null&&(oi(n,t,o),Ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Si(),o=as(a);o.tag=2,n!=null&&(o.callback=n),n=ss(t,o,a),n!==null&&(oi(n,t,a),Ao(n,t,a))}};function y0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!xo(a,o)||!xo(u,d):!0}function M0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Uf.enqueueReplaceState(n,n.state,null)}function Ws(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function b0(t){Cl(t)}function E0(t){console.error(t)}function T0(t){Cl(t)}function Ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function A0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Lf(t,n,a){return a=as(a),a.tag=3,a.payload={element:null},a.callback=function(){Ql(t,n)},a}function R0(t){return t=as(t),t.tag=3,t}function C0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){A0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){A0(n,a,o),typeof u!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function kS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&xr(n,a,u,!0),a=gi.current,a!==null){switch(a.tag){case 31:case 13:return wi===null?cc():a.alternate===null&&Tn===0&&(Tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ad(t,o,u)),!1;case 22:return a.flags|=65536,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ad(t,o,u)),!1}throw Error(s(435,a.tag))}return ad(t,o,u),cc(),!1}if(Lt)return n=gi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Qu&&(t=Error(s(422),{cause:o}),yo(Ti(t,a)))):(o!==Qu&&(n=Error(s(423),{cause:o}),yo(Ti(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ti(o,a),u=Lf(t.stateNode,o,u),cf(t,u),Tn!==4&&(Tn=2)),!1;var d=Error(s(520),{cause:o});if(d=Ti(d,a),Ho===null?Ho=[d]:Ho.push(d),Tn!==4&&(Tn=2),n===null)return!0;o=Ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Lf(a.stateNode,o,t),cf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(fs===null||!fs.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=R0(u),C0(u,t,a,o),cf(a,u),!1}a=a.return}while(a!==null);return!1}var Of=Error(s(461)),Un=!1;function Xn(t,n,a,o){n.child=t===null?Um(n,null,a,o):Vs(n,t.child,a,o)}function w0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return zs(n),o=mf(t,n,a,y,d,u),R=gf(),t!==null&&!Un?(vf(t,n,u),Aa(t,n,u)):(Lt&&R&&Zu(n),n.flags|=1,Xn(t,n,o,u),n.child)}function N0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!qu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,D0(t,n,d,o,u)):(t=Ul(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Vf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(y,o)&&t.ref===n.ref)return Aa(t,n,u)}return n.flags|=1,t=Sa(d,o),t.ref=n.ref,t.return=n,n.child=t}function D0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(xo(d,o)&&t.ref===n.ref)if(Un=!1,n.pendingProps=o=d,Vf(t,u))(t.flags&131072)!==0&&(Un=!0);else return n.lanes=t.lanes,Aa(t,n,u)}return Pf(t,n,a,o,u)}function U0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return L0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fl(n,d!==null?d.cachePool:null),d!==null?Pm(n,d):ff(),Fm(n);else return o=n.lanes=536870912,L0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Fl(n,d.cachePool),Pm(n,d),os(),n.memoizedState=null):(t!==null&&Fl(n,null),ff(),os());return Xn(t,n,u,a),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function L0(t,n,a,o,u){var d=sf();return d=d===null?null:{parent:Nn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Fl(n,null),ff(),Fm(n),t!==null&&xr(t,n,o,!0),n.childLanes=u,null}function Jl(t,n){return n=ec({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function O0(t,n,a){return Vs(n,t.child,null,a),t=Jl(n,n.pendingProps),t.flags|=2,vi(n),n.memoizedState=null,t}function WS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Lt){if(o.mode==="hidden")return t=Jl(n,o),n.lanes=536870912,Lo(null,t);if(hf(n),(t=mn)?(t=qg(t,Ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=vm(t),a.return=n,n.child=a,kn=n,mn=null)):t=null,t===null)throw ts(n);return n.lanes=536870912,null}return Jl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(hf(n),u)if(n.flags&256)n.flags&=-257,n=O0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Un||xr(t,n,a,!1),u=(a&t.childLanes)!==0,Un||u){if(o=cn,o!==null&&(y=Vn(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Os(t,y),oi(o,t,y),Of;cc(),n=O0(t,n,a)}else t=d.treeContext,mn=Ni(y.nextSibling),kn=n,Lt=!0,es=null,Ci=!1,t!==null&&Sm(n,t),n=Jl(n,o),n.flags|=4096;return n}return t=Sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function $l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pf(t,n,a,o,u){return zs(n),a=mf(t,n,a,o,void 0,u),o=gf(),t!==null&&!Un?(vf(t,n,u),Aa(t,n,u)):(Lt&&o&&Zu(n),n.flags|=1,Xn(t,n,a,u),n.child)}function P0(t,n,a,o,u,d){return zs(n),n.updateQueue=null,a=zm(n,o,a,u),Im(t),o=gf(),t!==null&&!Un?(vf(t,n,d),Aa(t,n,d)):(Lt&&o&&Zu(n),n.flags|=1,Xn(t,n,a,d),n.child)}function F0(t,n,a,o,u){if(zs(n),n.stateNode===null){var d=pr,y=a.contextType;typeof y=="object"&&y!==null&&(d=Wn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Uf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},of(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Wn(y):pr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Df(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Uf.enqueueReplaceState(d,d.state,null),Co(n,o,d,u),Ro(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,H=Ws(a,R);d.props=H;var se=d.context,xe=a.contextType;y=pr,typeof xe=="object"&&xe!==null&&(y=Wn(xe));var Me=a.getDerivedStateFromProps;xe=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,xe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||se!==y)&&M0(n,d,o,y),is=!1;var le=n.memoizedState;d.state=le,Co(n,o,d,u),Ro(),se=n.memoizedState,R||le!==se||is?(typeof Me=="function"&&(Df(n,a,Me,o),se=n.memoizedState),(H=is||y0(n,a,H,o,le,se,y))?(xe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=y,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,lf(t,n),y=n.memoizedProps,xe=Ws(a,y),d.props=xe,Me=n.pendingProps,le=d.context,se=a.contextType,H=pr,typeof se=="object"&&se!==null&&(H=Wn(se)),R=a.getDerivedStateFromProps,(se=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Me||le!==H)&&M0(n,d,o,H),is=!1,le=n.memoizedState,d.state=le,Co(n,o,d,u),Ro();var fe=n.memoizedState;y!==Me||le!==fe||is||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof R=="function"&&(Df(n,a,R,o),fe=n.memoizedState),(xe=is||y0(n,a,xe,o,le,fe,H)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(se||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,fe,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,fe,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),d.props=o,d.state=fe,d.context=H,o=xe):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,$l(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Vs(n,t.child,null,u),n.child=Vs(n,null,a,u)):Xn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Aa(t,n,u),t}function I0(t,n,a,o){return Fs(),n.flags|=256,Xn(t,n,a,o),n.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(t){return{baseLanes:t,cachePool:Am()}}function zf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=_i),t}function z0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Lt){if(u?rs(n):os(),(t=mn)?(t=qg(t,Ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=vm(t),a.return=n,n.child=a,kn=n,mn=null)):t=null,t===null)throw ts(n);return Sd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(os(),u=n.mode,R=ec({mode:"hidden",children:R},u),o=Ps(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=If(a),o.childLanes=zf(t,y,a),n.memoizedState=Ff,Lo(null,o)):(rs(n),Bf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(d)n.flags&256?(rs(n),n.flags&=-257,n=Hf(t,n,a)):n.memoizedState!==null?(os(),n.child=t.child,n.flags|=128,n=null):(os(),R=o.fallback,u=n.mode,o=ec({mode:"visible",children:o.children},u),R=Ps(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Vs(n,t.child,null,a),o=n.child,o.memoizedState=If(a),o.childLanes=zf(t,y,a),n.memoizedState=Ff,n=Lo(null,o));else if(rs(n),Sd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var se=y.dgst;y=se,o=Error(s(419)),o.stack="",o.digest=y,yo({value:o,source:null,stack:null}),n=Hf(t,n,a)}else if(Un||xr(t,n,a,!1),y=(a&t.childLanes)!==0,Un||y){if(y=cn,y!==null&&(o=Vn(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Os(t,o),oi(y,t,o),Of;_d(R)||cc(),n=Hf(t,n,a)}else _d(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,mn=Ni(R.nextSibling),kn=n,Lt=!0,es=null,Ci=!1,t!==null&&Sm(n,t),n=Bf(n,o.children),n.flags|=4096);return n}return u?(os(),R=o.fallback,u=n.mode,H=t.child,se=H.sibling,o=Sa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,se!==null?R=Sa(se,R):(R=Ps(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Lo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=If(a):(u=R.cachePool,u!==null?(H=Nn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Am(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=zf(t,y,a),n.memoizedState=Ff,Lo(t.child,o)):(rs(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Bf(t,n){return n=ec({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ec(t,n){return t=mi(22,t,null,n),t.lanes=0,t}function Hf(t,n,a){return Vs(n,t.child,null,a),t=Bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function B0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ef(t.return,n,a)}function Gf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function H0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=Rn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,Ae(Rn,y),Xn(t,n,o,a),o=Lt?So:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B0(t,a,n);else if(t.tag===19)B0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Vl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Gf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Vl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gf(n,!0,a,null,d,o);break;case"together":Gf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),us|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(xr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function XS(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),ns(n,Nn,t.memoizedState.cache),Fs();break;case 27:case 5:lt(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:ns(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(rs(n),n.flags|=128,null):(a&n.child.childLanes)!==0?z0(t,n,a):(rs(n),t=Aa(t,n,a),t!==null?t.sibling:null);rs(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(xr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return H0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(Rn,Rn.current),o)break;return null;case 22:return n.lanes=0,U0(t,n,a,n.pendingProps);case 24:ns(n,Nn,t.memoizedState.cache)}return Aa(t,n,a)}function G0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Un=!0;else{if(!Vf(t,a)&&(n.flags&128)===0)return Un=!1,XS(t,n,a);Un=(t.flags&131072)!==0}else Un=!1,Lt&&(n.flags&1048576)!==0&&_m(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Hs(n.elementType),n.type=t,typeof t=="function")qu(t)?(o=Ws(t,o),n.tag=1,n=F0(null,n,t,o,a)):(n.tag=0,n=Pf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=w0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=N0(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(s(306,n,""))}}return n;case 0:return Pf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ws(o,n.pendingProps),F0(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,lf(t,n),Co(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ns(n,Nn,o),o!==d.cache&&tf(n,[Nn],a,!0),Ro(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=I0(t,n,o,a);break e}else if(o!==u){u=Ti(Error(s(424)),n),yo(u),n=I0(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,mn=Ni(t.firstChild),kn=n,Lt=!0,es=null,Ci=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),o===u){n=Aa(t,n,a);break e}Xn(t,n,o,a)}n=n.child}return n;case 26:return $l(t,n),t===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Lt||(a=n.type,t=n.pendingProps,o=gc($.current).createElement(a),o[ce]=n,o[Pe]=t,qn(o,a,t),Ct(o),n.stateNode=o):n.memoizedState=Jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return lt(n),t===null&&Lt&&(o=n.stateNode=Zg(n.type,n.pendingProps,$.current),kn=n,Ci=!0,u=mn,ms(n.type)?(yd=u,mn=Ni(o.firstChild)):mn=u),Xn(t,n,n.pendingProps.children,a),$l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Lt&&((u=o=mn)&&(o=yy(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,kn=n,mn=Ni(o.firstChild),Ci=!1,u=!0):u=!1),u||ts(n)),lt(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,gd(u,d)?o=null:y!==null&&gd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=mf(t,n,FS,null,null,a),jo._currentValue=u),$l(t,n),Xn(t,n,o,a),n.child;case 6:return t===null&&Lt&&((t=a=mn)&&(a=My(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,kn=n,mn=null,t=!0):t=!1),t||ts(n)),null;case 13:return z0(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Vs(n,null,o,a):Xn(t,n,o,a),n.child;case 11:return w0(t,n,n.type,n.pendingProps,a);case 7:return Xn(t,n,n.pendingProps,a),n.child;case 8:return Xn(t,n,n.pendingProps.children,a),n.child;case 12:return Xn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ns(n,n.type,o.value),Xn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,zs(n),u=Wn(u),o=o(u),n.flags|=1,Xn(t,n,o,a),n.child;case 14:return N0(t,n,n.type,n.pendingProps,a);case 15:return D0(t,n,n.type,n.pendingProps,a);case 19:return H0(t,n,a);case 31:return WS(t,n,a);case 22:return U0(t,n,a,n.pendingProps);case 24:return zs(n),o=Wn(Nn),t===null?(u=sf(),u===null&&(u=cn,d=nf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},of(n),ns(n,Nn,u)):((t.lanes&a)!==0&&(lf(t,n),Co(n,null,null,a),Ro()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ns(n,Nn,o)):(o=d.cache,ns(n,Nn,o),o!==u.cache&&tf(n,[Nn],a,!0))),Xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ra(t){t.flags|=4}function kf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(pg())t.flags|=8192;else throw Gs=zl,rf}else t.flags&=-16777217}function V0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!iv(n))if(pg())t.flags|=8192;else throw Gs=zl,rf}function tc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,Nr|=n)}function Oo(t,n){if(!Lt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function gn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function qS(t,n,a){var o=n.pendingProps;switch(Ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(n),null;case 1:return gn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ba(Nn),We(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vr(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ju())),gn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Ra(n),d!==null?(gn(n),V0(n,d)):(gn(n),kf(n,u,null,o,a))):d?d!==t.memoizedState?(Ra(n),gn(n),V0(n,d)):(gn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ra(n),gn(n),kf(n,u,t,o,a)),null;case 27:if($e(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return gn(n),null}t=Ce.current,vr(n)?ym(n):(t=Zg(u,o,a),n.stateNode=t,Ra(n))}return gn(n),null;case 5:if($e(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return gn(n),null}if(d=Ce.current,vr(n))ym(n);else{var y=gc($.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[ce]=n,d[Pe]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(qn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ra(n)}}return gn(n),kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,vr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=kn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ce]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||zg(t.nodeValue,a)),t||ts(n,!0)}else t=gc(t).createTextNode(o),t[ce]=n,n.stateNode=t}return gn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=vr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ce]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gn(n),t=!1}else a=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(vi(n),n):(vi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return gn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=vr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ce]=n}else Fs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gn(n),u=!1}else u=Ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(vi(n),n):(vi(n),null)}return vi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),tc(n,n.updateQueue),gn(n),null);case 4:return We(),t===null&&fd(n.stateNode.containerInfo),gn(n),null;case 10:return ba(n.type),gn(n),null;case 19:if(Z(Rn),o=n.memoizedState,o===null)return gn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Oo(o,!1);else{if(Tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Vl(t),d!==null){for(n.flags|=128,Oo(o,!1),t=d.updateQueue,n.updateQueue=t,tc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)gm(a,t),a=a.sibling;return Ae(Rn,Rn.current&1|2),Lt&&ya(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Vt()>rc&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Vl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,tc(n,t),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Lt)return gn(n),null}else 2*Vt()-o.renderingStartTime>rc&&a!==536870912&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Vt(),t.sibling=null,a=Rn.current,Ae(Rn,u?a&1|2:a&1),Lt&&ya(n,o.treeForkCount),t):(gn(n),null);case 22:case 23:return vi(n),df(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(gn(n),n.subtreeFlags&6&&(n.flags|=8192)):gn(n),a=n.updateQueue,a!==null&&tc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(Nn),gn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function YS(t,n){switch(Ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ba(Nn),We(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(vi(n),n.alternate===null)throw Error(s(340));Fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(vi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Fs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(Rn),null;case 4:return We(),null;case 10:return ba(n.type),null;case 22:case 23:return vi(n),df(),t!==null&&Z(Bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ba(Nn),null;case 25:return null;default:return null}}function k0(t,n){switch(Ku(n),n.tag){case 3:ba(Nn),We();break;case 26:case 27:case 5:$e(n);break;case 4:We();break;case 31:n.memoizedState!==null&&vi(n);break;case 13:vi(n);break;case 19:Z(Rn);break;case 10:ba(n.type);break;case 22:case 23:vi(n),df(),t!==null&&Z(Bs);break;case 24:ba(Nn)}}function Po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Jt(n,n.return,R)}}function ls(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,se=R;try{se()}catch(xe){Jt(u,H,xe)}}}o=o.next}while(o!==d)}}catch(xe){Jt(n,n.return,xe)}}function W0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Om(n,a)}catch(o){Jt(t,t.return,o)}}}function X0(t,n,a){a.props=Ws(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Jt(t,n,o)}}function Fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Jt(t,n,u)}}function ia(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Jt(t,n,u)}else a.current=null}function q0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Jt(t,t.return,u)}}function Wf(t,n,a){try{var o=t.stateNode;my(o,t.type,a,n),o[Pe]=n}catch(u){Jt(t,t.return,u)}}function Y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ms(t.type)||t.tag===4}function Xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=xa));else if(o!==4&&(o===27&&ms(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(qf(t,n,a),t=t.sibling;t!==null;)qf(t,n,a),t=t.sibling}function nc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ms(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(nc(t,n,a),t=t.sibling;t!==null;)nc(t,n,a),t=t.sibling}function j0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);qn(n,o,a),n[ce]=t,n[Pe]=a}catch(d){Jt(t,t.return,d)}}var Ca=!1,Ln=!1,Yf=!1,Z0=typeof WeakSet=="function"?WeakSet:Set,Hn=null;function jS(t,n){if(t=t.containerInfo,pd=bc,t=om(t),Bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,se=0,xe=0,Me=t,le=null;t:for(;;){for(var fe;Me!==a||u!==0&&Me.nodeType!==3||(R=y+u),Me!==d||o!==0&&Me.nodeType!==3||(H=y+o),Me.nodeType===3&&(y+=Me.nodeValue.length),(fe=Me.firstChild)!==null;)le=Me,Me=fe;for(;;){if(Me===t)break t;if(le===a&&++se===u&&(R=y),le===d&&++xe===o&&(H=y),(fe=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=fe}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(md={focusedElem:t,selectionRange:a},bc=!1,Hn=n;Hn!==null;)if(n=Hn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Hn=t;else for(;Hn!==null;){switch(n=Hn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Qe=Ws(a.type,u);t=o.getSnapshotBeforeUpdate(Qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Jt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Hn=t;break}Hn=n.return}}function K0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Na(t,a),o&4&&Po(5,a);break;case 1:if(Na(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Jt(a,a.return,y)}else{var u=Ws(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Jt(a,a.return,y)}}o&64&&W0(a),o&512&&Fo(a,a.return);break;case 3:if(Na(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Om(t,n)}catch(y){Jt(a,a.return,y)}}break;case 27:n===null&&o&4&&j0(a);case 26:case 5:Na(t,a),n===null&&o&4&&q0(a),o&512&&Fo(a,a.return);break;case 12:Na(t,a);break;case 31:Na(t,a),o&4&&$0(t,a);break;case 13:Na(t,a),o&4&&eg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=iy.bind(null,a),by(t,a))));break;case 22:if(o=a.memoizedState!==null||Ca,!o){n=n!==null&&n.memoizedState!==null||Ln,u=Ca;var d=Ln;Ca=o,(Ln=n)&&!d?Da(t,a,(a.subtreeFlags&8772)!==0):Na(t,a),Ca=u,Ln=d}break;case 30:break;default:Na(t,a)}}function Q0(t){var n=t.alternate;n!==null&&(t.alternate=null,Q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&pn(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,ii=!1;function wa(t,n,a){for(a=a.child;a!==null;)J0(t,n,a),a=a.sibling}function J0(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(he,a)}catch{}switch(a.tag){case 26:Ln||ia(a,n),wa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ln||ia(a,n);var o=Sn,u=ii;ms(a.type)&&(Sn=a.stateNode,ii=!1),wa(t,n,a),Xo(a.stateNode),Sn=o,ii=u;break;case 5:Ln||ia(a,n);case 6:if(o=Sn,u=ii,Sn=null,wa(t,n,a),Sn=o,ii=u,Sn!==null)if(ii)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(a.stateNode)}catch(d){Jt(a,n,d)}else try{Sn.removeChild(a.stateNode)}catch(d){Jt(a,n,d)}break;case 18:Sn!==null&&(ii?(t=Sn,Wg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zr(t)):Wg(Sn,a.stateNode));break;case 4:o=Sn,u=ii,Sn=a.stateNode.containerInfo,ii=!0,wa(t,n,a),Sn=o,ii=u;break;case 0:case 11:case 14:case 15:ls(2,a,n),Ln||ls(4,a,n),wa(t,n,a);break;case 1:Ln||(ia(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&X0(a,n,o)),wa(t,n,a);break;case 21:wa(t,n,a);break;case 22:Ln=(o=Ln)||a.memoizedState!==null,wa(t,n,a),Ln=o;break;default:wa(t,n,a)}}function $0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zr(t)}catch(a){Jt(n,n.return,a)}}}function eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zr(t)}catch(a){Jt(n,n.return,a)}}function ZS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Z0),n;default:throw Error(s(435,t.tag))}}function ic(t,n){var a=ZS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ay.bind(null,t,o);o.then(u,u)}})}function ai(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(ms(R.type)){Sn=R.stateNode,ii=!1;break e}break;case 5:Sn=R.stateNode,ii=!1;break e;case 3:case 4:Sn=R.stateNode.containerInfo,ii=!0;break e}R=R.return}if(Sn===null)throw Error(s(160));J0(d,y,u),Sn=null,ii=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,t),n=n.sibling}var Vi=null;function tg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ai(n,t),si(t),o&4&&(ls(3,t,t.return),Po(3,t),ls(5,t,t.return));break;case 1:ai(n,t),si(t),o&512&&(Ln||a===null||ia(a,a.return)),o&64&&Ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Vi;if(ai(n,t),si(t),o&512&&(Ln||a===null||ia(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Xt]||d[ce]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),qn(d,o,a),d[ce]=t,Ct(d),o=d;break e;case"link":var y=tv("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),qn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=tv("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),qn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ce]=t,Ct(d),o=d}t.stateNode=o}else nv(u,t.type,t.stateNode);else t.stateNode=ev(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?nv(u,t.type,t.stateNode):ev(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ai(n,t),si(t),o&512&&(Ln||a===null||ia(a,a.return)),a!==null&&o&4&&Wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ai(n,t),si(t),o&512&&(Ln||a===null||ia(a,a.return)),t.flags&32){u=t.stateNode;try{hi(u,"")}catch(Qe){Jt(t,t.return,Qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Wf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Yf=!0);break;case 6:if(ai(n,t),si(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Qe){Jt(t,t.return,Qe)}}break;case 3:if(_c=null,u=Vi,Vi=vc(n.containerInfo),ai(n,t),Vi=u,si(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zr(n.containerInfo)}catch(Qe){Jt(t,t.return,Qe)}Yf&&(Yf=!1,ng(t));break;case 4:o=Vi,Vi=vc(t.stateNode.containerInfo),ai(n,t),si(t),Vi=o;break;case 12:ai(n,t),si(t);break;case 31:ai(n,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 13:ai(n,t),si(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sc=Vt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,se=Ca,xe=Ln;if(Ca=se||u,Ln=xe||H,ai(n,t),Ln=xe,Ca=se,si(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Ca||Ln||Xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var Me=H.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Qe){Jt(H,H.return,Qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Qe){Jt(H,H.return,Qe)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?Xg(fe,!0):Xg(H.stateNode,!1)}catch(Qe){Jt(H,H.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ic(t,a))));break;case 19:ai(n,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ic(t,o)));break;case 30:break;case 21:break;default:ai(n,t),si(t)}}function si(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Y0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Xf(t);nc(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(hi(y,""),a.flags&=-33);var R=Xf(t);nc(t,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,se=Xf(t);qf(t,se,H);break;default:throw Error(s(161))}}catch(xe){Jt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)K0(t,n.alternate,n),n=n.sibling}function Xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ls(4,n,n.return),Xs(n);break;case 1:ia(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&X0(n,n.return,a),Xs(n);break;case 27:Xo(n.stateNode);case 26:case 5:ia(n,n.return),Xs(n);break;case 22:n.memoizedState===null&&Xs(n);break;case 30:Xs(n);break;default:Xs(n)}t=t.sibling}}function Da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Da(u,d,a),Po(4,d);break;case 1:if(Da(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){Jt(o,o.return,se)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Lm(H[u],R)}catch(se){Jt(o,o.return,se)}}a&&y&64&&W0(d),Fo(d,d.return);break;case 27:j0(d);case 26:case 5:Da(u,d,a),a&&o===null&&y&4&&q0(d),Fo(d,d.return);break;case 12:Da(u,d,a);break;case 31:Da(u,d,a),a&&y&4&&$0(u,d);break;case 13:Da(u,d,a),a&&y&4&&eg(u,d);break;case 22:d.memoizedState===null&&Da(u,d,a),Fo(d,d.return);break;case 30:break;default:Da(u,d,a)}n=n.sibling}}function jf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function Zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function ki(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(t,n,a,o),n=n.sibling}function ig(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ki(t,n,a,o),u&2048&&Po(9,n);break;case 1:ki(t,n,a,o);break;case 3:ki(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){ki(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Jt(n,n.return,H)}}else ki(t,n,a,o);break;case 31:ki(t,n,a,o);break;case 13:ki(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?ki(t,n,a,o):Io(t,n):d._visibility&2?ki(t,n,a,o):(d._visibility|=2,Rr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jf(y,n);break;case 24:ki(t,n,a,o),u&2048&&Zf(n.alternate,n);break;default:ki(t,n,a,o)}}function Rr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,H=o,se=y.flags;switch(y.tag){case 0:case 11:case 15:Rr(d,y,R,H,u),Po(8,y);break;case 23:break;case 22:var xe=y.stateNode;y.memoizedState!==null?xe._visibility&2?Rr(d,y,R,H,u):Io(d,y):(xe._visibility|=2,Rr(d,y,R,H,u)),u&&se&2048&&jf(y.alternate,y);break;case 24:Rr(d,y,R,H,u),u&&se&2048&&Zf(y.alternate,y);break;default:Rr(d,y,R,H,u)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Io(a,o),u&2048&&jf(o.alternate,o);break;case 24:Io(a,o),u&2048&&Zf(o.alternate,o);break;default:Io(a,o)}n=n.sibling}}var zo=8192;function Cr(t,n,a){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)ag(t,n,a),t=t.sibling}function ag(t,n,a){switch(t.tag){case 26:Cr(t,n,a),t.flags&zo&&t.memoizedState!==null&&Py(a,Vi,t.memoizedState,t.memoizedProps);break;case 5:Cr(t,n,a);break;case 3:case 4:var o=Vi;Vi=vc(t.stateNode.containerInfo),Cr(t,n,a),Vi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,Cr(t,n,a),zo=o):Cr(t,n,a));break;default:Cr(t,n,a)}}function sg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Hn=o,og(o,t)}sg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rg(t),t=t.sibling}function rg(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&ls(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ac(t)):Bo(t);break;default:Bo(t)}}function ac(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Hn=o,og(o,t)}sg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ls(8,n,n.return),ac(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ac(n));break;default:ac(n)}t=t.sibling}}function og(t,n){for(;Hn!==null;){var a=Hn;switch(a.tag){case 0:case 11:case 15:ls(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Hn=o;else e:for(a=t;Hn!==null;){o=Hn;var u=o.sibling,d=o.return;if(Q0(o),o===a){Hn=null;break e}if(u!==null){u.return=d,Hn=u;break e}Hn=d}}}var KS={getCacheForType:function(t){var n=Wn(Nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Wn(Nn).controller.signal}},QS=typeof WeakMap=="function"?WeakMap:Map,kt=0,cn=null,Et=null,wt=0,Qt=0,xi=null,cs=!1,wr=!1,Kf=!1,Ua=0,Tn=0,us=0,qs=0,Qf=0,_i=0,Nr=0,Ho=null,ri=null,Jf=!1,sc=0,lg=0,rc=1/0,oc=null,fs=null,Fn=0,ds=null,Dr=null,La=0,$f=0,ed=null,cg=null,Go=0,td=null;function Si(){return(kt&2)!==0&&wt!==0?wt&-wt:B.T!==null?od():va()}function ug(){if(_i===0)if((wt&536870912)===0||Lt){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),_i=t}else _i=536870912;return t=gi.current,t!==null&&(t.flags|=32),_i}function oi(t,n,a){(t===cn&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),hs(t,wt,_i,!1)),je(t,a),((kt&2)===0||t!==cn)&&(t===cn&&((kt&2)===0&&(qs|=a),Tn===4&&hs(t,wt,_i,!1)),aa(t))}function fg(t,n,a){if((kt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?ey(t,n):id(t,n,!0),d=o;do{if(u===0){wr&&!o&&hs(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!JS(a)){u=id(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Ho;var H=R.current.memoizedState.isDehydrated;if(H&&(Ur(R,y).flags|=256),y=id(R,y,!1),y!==2){if(Kf&&!H){R.errorRecoveryDisabledLanes|=d,qs|=d,u=4;break e}d=ri,ri=u,d!==null&&(ri===null?ri=d:ri.push.apply(ri,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Ur(t,0),hs(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:hs(o,n,_i,!cs);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=sc+300-Vt(),10<u)){if(hs(o,n,_i,!cs),ge(o,0,!0)!==0)break e;La=n,o.timeoutHandle=Vg(dg.bind(null,o,a,ri,oc,Jf,n,_i,qs,Nr,cs,d,"Throttled",-0,0),u);break e}dg(o,a,ri,oc,Jf,n,_i,qs,Nr,cs,d,null,-0,0)}}break}while(!0);aa(t)}function dg(t,n,a,o,u,d,y,R,H,se,xe,Me,le,fe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},ag(n,d,Me);var Qe=(d&62914560)===d?sc-Vt():(d&4194048)===d?lg-Vt():0;if(Qe=Fy(Me,Qe),Qe!==null){La=d,t.cancelPendingCommit=Qe(Sg.bind(null,t,n,d,a,o,u,y,R,H,xe,Me,null,le,fe)),hs(t,d,y,!se);return}}Sg(t,n,d,a,o,u,y,R,H)}function JS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!pi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hs(t,n,a,o){n&=~Qf,n&=~qs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ve(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&Dt(t,a,n)}function lc(){return(kt&6)===0?(Vo(0),!1):!0}function nd(){if(Et!==null){if(Qt===0)var t=Et.return;else t=Et,Ma=Is=null,xf(t),Mr=null,Eo=0,t=Et;for(;t!==null;)k0(t.alternate,t),t=t.return;Et=null}}function Ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,xy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),La=0,nd(),cn=t,Et=a=Sa(t.current,null),wt=n,Qt=0,xi=null,cs=!1,wr=Le(t,n),Kf=!1,Nr=_i=Qf=qs=us=Tn=0,ri=Ho=null,Jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),d=1<<u;n|=t[u],o&=~d}return Ua=n,wl(),a}function hg(t,n){xt=null,B.H=Uo,n===yr||n===Il?(n=wm(),Qt=3):n===rf?(n=wm(),Qt=4):Qt=n===Of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xi=n,Et===null&&(Tn=1,Ql(t,Ti(n,t.current)))}function pg(){var t=gi.current;return t===null?!0:(wt&4194048)===wt?wi===null:(wt&62914560)===wt||(wt&536870912)!==0?t===wi:!1}function mg(){var t=B.H;return B.H=Uo,t===null?Uo:t}function gg(){var t=B.A;return B.A=KS,t}function cc(){Tn=4,cs||(wt&4194048)!==wt&&gi.current!==null||(wr=!0),(us&134217727)===0&&(qs&134217727)===0||cn===null||hs(cn,wt,_i,!1)}function id(t,n,a){var o=kt;kt|=2;var u=mg(),d=gg();(cn!==t||wt!==n)&&(oc=null,Ur(t,n)),n=!1;var y=Tn;e:do try{if(Qt!==0&&Et!==null){var R=Et,H=xi;switch(Qt){case 8:nd(),y=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(n=!0);var se=Qt;if(Qt=0,xi=null,Lr(t,R,H,se),a&&wr){y=0;break e}break;default:se=Qt,Qt=0,xi=null,Lr(t,R,H,se)}}$S(),y=Tn;break}catch(xe){hg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,Ma=Is=null,kt=o,B.H=u,B.A=d,Et===null&&(cn=null,wt=0,wl()),y}function $S(){for(;Et!==null;)vg(Et)}function ey(t,n){var a=kt;kt|=2;var o=mg(),u=gg();cn!==t||wt!==n?(oc=null,rc=Vt()+500,Ur(t,n)):wr=Le(t,n);e:do try{if(Qt!==0&&Et!==null){n=Et;var d=xi;t:switch(Qt){case 1:Qt=0,xi=null,Lr(t,n,d,1);break;case 2:case 9:if(Rm(d)){Qt=0,xi=null,xg(n);break}n=function(){Qt!==2&&Qt!==9||cn!==t||(Qt=7),aa(t)},d.then(n,n);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:Rm(d)?(Qt=0,xi=null,xg(n)):(Qt=0,xi=null,Lr(t,n,d,7));break;case 5:var y=null;switch(Et.tag){case 26:y=Et.memoizedState;case 5:case 27:var R=Et;if(y?iv(y):R.stateNode.complete){Qt=0,xi=null;var H=R.sibling;if(H!==null)Et=H;else{var se=R.return;se!==null?(Et=se,uc(se)):Et=null}break t}}Qt=0,xi=null,Lr(t,n,d,5);break;case 6:Qt=0,xi=null,Lr(t,n,d,6);break;case 8:nd(),Tn=6;break e;default:throw Error(s(462))}}ty();break}catch(xe){hg(t,xe)}while(!0);return Ma=Is=null,B.H=o,B.A=u,kt=a,Et!==null?0:(cn=null,wt=0,wl(),Tn)}function ty(){for(;Et!==null&&!hn();)vg(Et)}function vg(t){var n=G0(t.alternate,t,Ua);t.memoizedProps=t.pendingProps,n===null?uc(t):Et=n}function xg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=P0(a,n,n.pendingProps,n.type,void 0,wt);break;case 11:n=P0(a,n,n.pendingProps,n.type.render,n.ref,wt);break;case 5:xf(n);default:k0(a,n),n=Et=gm(n,Ua),n=G0(a,n,Ua)}t.memoizedProps=t.pendingProps,n===null?uc(t):Et=n}function Lr(t,n,a,o){Ma=Is=null,xf(n),Mr=null,Eo=0;var u=n.return;try{if(kS(t,u,n,a,wt)){Tn=1,Ql(t,Ti(a,t.current)),Et=null;return}}catch(d){if(u!==null)throw Et=u,d;Tn=1,Ql(t,Ti(a,t.current)),Et=null;return}n.flags&32768?(Lt||o===1?t=!0:wr||(wt&536870912)!==0?t=!1:(cs=t=!0,(o===2||o===9||o===3||o===6)&&(o=gi.current,o!==null&&o.tag===13&&(o.flags|=16384))),_g(n,t)):uc(n)}function uc(t){var n=t;do{if((n.flags&32768)!==0){_g(n,cs);return}t=n.return;var a=qS(n.alternate,n,Ua);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);Tn===0&&(Tn=5)}function _g(t,n){do{var a=YS(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);Tn=6,Et=null}function Sg(t,n,a,o,u,d,y,R,H){t.cancelPendingCommit=null;do fc();while(Fn!==0);if((kt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Wu,un(t,a,d,y,R,H),t===cn&&(Et=cn=null,wt=0),Dr=n,ds=t,La=a,$f=d,ed=u,cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sy(Q,function(){return Tg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,y=kt,kt|=4;try{jS(t,n,a)}finally{kt=y,G.p=u,B.T=o}}Fn=1,yg(),Mg(),bg()}}function yg(){if(Fn===1){Fn=0;var t=ds,n=Dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=kt;kt|=4;try{tg(n,t);var d=md,y=om(t.containerInfo),R=d.focusedElem,H=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&rm(R.ownerDocument.documentElement,R)){if(H!==null&&Bu(R)){var se=H.start,xe=H.end;if(xe===void 0&&(xe=se),"selectionStart"in R)R.selectionStart=se,R.selectionEnd=Math.min(xe,R.value.length);else{var Me=R.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var fe=le.getSelection(),Qe=R.textContent.length,ot=Math.min(H.start,Qe),sn=H.end===void 0?ot:Math.min(H.end,Qe);!fe.extend&&ot>sn&&(y=sn,sn=ot,ot=y);var J=sm(R,ot),W=sm(R,sn);if(J&&W&&(fe.rangeCount!==1||fe.anchorNode!==J.node||fe.anchorOffset!==J.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var ie=Me.createRange();ie.setStart(J.node,J.offset),fe.removeAllRanges(),ot>sn?(fe.addRange(ie),fe.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),fe.addRange(ie))}}}}for(Me=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&Me.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}bc=!!pd,md=pd=null}finally{kt=u,G.p=o,B.T=a}}t.current=n,Fn=2}}function Mg(){if(Fn===2){Fn=0;var t=ds,n=Dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=kt;kt|=4;try{K0(t,n.alternate,n)}finally{kt=u,G.p=o,B.T=a}}Fn=3}}function bg(){if(Fn===4||Fn===3){Fn=0,q();var t=ds,n=Dr,a=La,o=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Fn=5:(Fn=0,Dr=ds=null,Eg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(fs=null),ga(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=u}}(La&3)!==0&&fc(),aa(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===td?Go++:(Go=0,td=t):Go=0,Vo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function fc(){return yg(),Mg(),bg(),Tg()}function Tg(){if(Fn!==5)return!1;var t=ds,n=$f;$f=0;var a=ga(La),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=ed,ed=null;var d=ds,y=La;if(Fn=0,Dr=ds=null,La=0,(kt&6)!==0)throw Error(s(331));var R=kt;if(kt|=4,rg(d.current),ig(d,d.current,y,a),kt=R,Vo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(he,d)}catch{}return!0}finally{G.p=u,B.T=o,Eg(t,n)}}function Ag(t,n,a){n=Ti(a,n),n=Lf(t.stateNode,n,2),t=ss(t,n,2),t!==null&&(je(t,2),aa(t))}function Jt(t,n,a){if(t.tag===3)Ag(t,t,a);else for(;n!==null;){if(n.tag===3){Ag(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fs===null||!fs.has(o))){t=Ti(a,t),a=R0(2),o=ss(n,a,2),o!==null&&(C0(a,o,n,t),je(o,2),aa(o));break}}n=n.return}}function ad(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new QS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Kf=!0,u.add(a),t=ny.bind(null,t,n,a),n.then(t,t))}function ny(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,cn===t&&(wt&a)===a&&(Tn===4||Tn===3&&(wt&62914560)===wt&&300>Vt()-sc?(kt&2)===0&&Ur(t,0):Qf|=a,Nr===wt&&(Nr=0)),aa(t)}function Rg(t,n){n===0&&(n=be()),t=Os(t,n),t!==null&&(je(t,n),aa(t))}function iy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Rg(t,a)}function ay(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Rg(t,a)}function sy(t,n){return xn(t,n)}var dc=null,Or=null,sd=!1,hc=!1,rd=!1,ps=0;function aa(t){t!==Or&&t.next===null&&(Or===null?dc=Or=t:Or=Or.next=t),hc=!0,sd||(sd=!0,oy())}function Vo(t,n){if(!rd&&hc){rd=!0;do for(var a=!1,o=dc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Dg(o,d))}else d=wt,d=ge(o,o===cn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Le(o,d)||(a=!0,Dg(o,d));o=o.next}while(a);rd=!1}}function ry(){Cg()}function Cg(){hc=sd=!1;var t=0;ps!==0&&vy()&&(t=ps);for(var n=Vt(),a=null,o=dc;o!==null;){var u=o.next,d=wg(o,n);d===0?(o.next=null,a===null?dc=u:a.next=u,u===null&&(Or=a)):(a=o,(t!==0||(d&3)!==0)&&(hc=!0)),o=u}Fn!==0&&Fn!==5||Vo(t),ps!==0&&(ps=0)}function wg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Ve(d),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=ze(R,n)):H<=n&&(t.expiredLanes|=R),d&=~R}if(n=cn,a=wt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Gt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Gt(o),ga(a)){case 2:case 8:a=b;break;case 32:a=Q;break;case 268435456:a=de;break;default:a=Q}return o=Ng.bind(null,t),a=xn(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Gt(o),t.callbackPriority=2,t.callbackNode=null,2}function Ng(t,n){if(Fn!==0&&Fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(fc()&&t.callbackNode!==a)return null;var o=wt;return o=ge(t,t===cn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(fg(t,o,n),wg(t,Vt()),t.callbackNode!=null&&t.callbackNode===a?Ng.bind(null,t):null)}function Dg(t,n){if(fc())return null;fg(t,n,!0)}function oy(){_y(function(){(kt&6)!==0?xn(D,ry):Cg()})}function od(){if(ps===0){var t=_r;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),ps=t}return ps}function Ug(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ns(""+t)}function Lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ly(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Ug((u[Pe]||null).action),y=o.submitter;y&&(n=(n=y[Pe]||null)?Ug(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new Tl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ps!==0){var H=y?Lg(u,y):new FormData(u);Rf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(R.preventDefault(),H=y?Lg(u,y):new FormData(u),Rf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var ld=0;ld<ku.length;ld++){var cd=ku[ld],cy=cd.toLowerCase(),uy=cd[0].toUpperCase()+cd.slice(1);Gi(cy,"on"+uy)}Gi(um,"onAnimationEnd"),Gi(fm,"onAnimationIteration"),Gi(dm,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(AS,"onTransitionRun"),Gi(RS,"onTransitionStart"),Gi(CS,"onTransitionCancel"),Gi(hm,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),V("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),V("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),V("onBeforeInput",["compositionend","keypress","textInput","paste"]),V("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),V("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function Og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,se=R.currentTarget;if(R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=se;try{d(u)}catch(xe){Cl(xe)}u.currentTarget=null,d=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,se=R.currentTarget,R=R.listener,H!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=se;try{d(u)}catch(xe){Cl(xe)}u.currentTarget=null,d=H}}}}function Tt(t,n){var a=n[ut];a===void 0&&(a=n[ut]=new Set);var o=t+"__bubble";a.has(o)||(Pg(n,t,2,!1),a.add(o))}function ud(t,n,a){var o=0;n&&(o|=4),Pg(a,t,o,n)}var pc="_reactListening"+Math.random().toString(36).slice(2);function fd(t){if(!t[pc]){t[pc]=!0,bn.forEach(function(a){a!=="selectionchange"&&(fy.has(a)||ud(a,!1,t),ud(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[pc]||(n[pc]=!0,ud("selectionchange",!1,n))}}function Pg(t,n,a,o){switch(uv(n)){case 2:var u=By;break;case 8:u=Hy;break;default:u=Ad}a=u.bind(null,n,a,t),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function dd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=tn(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Hp(function(){var se=d,xe=Cu(a),Me=[];e:{var le=pm.get(t);if(le!==void 0){var fe=Tl,Qe=t;switch(t){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":fe=aS;break;case"focusin":Qe="focus",fe=Ou;break;case"focusout":Qe="blur",fe=Ou;break;case"beforeblur":case"afterblur":fe=Ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=oS;break;case um:case fm:case dm:fe=Z_;break;case hm:fe=cS;break;case"scroll":case"scrollend":fe=W_;break;case"wheel":fe=fS;break;case"copy":case"cut":case"paste":fe=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Xp;break;case"toggle":case"beforetoggle":fe=hS}var ot=(n&4)!==0,sn=!ot&&(t==="scroll"||t==="scrollend"),J=ot?le!==null?le+"Capture":null:le;ot=[];for(var W=se,ie;W!==null;){var Se=W;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||J===null||(Se=uo(W,J),Se!=null&&ot.push(Wo(W,Se,ie))),sn)break;W=W.return}0<ot.length&&(le=new fe(le,Qe,null,a,xe),Me.push({event:le,listeners:ot}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&a!==Ru&&(Qe=a.relatedTarget||a.fromElement)&&(tn(Qe)||Qe[Ee]))break e;if((fe||le)&&(le=xe.window===xe?xe:(le=xe.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(Qe=a.relatedTarget||a.toElement,fe=se,Qe=Qe?tn(Qe):null,Qe!==null&&(sn=c(Qe),ot=Qe.tag,Qe!==sn||ot!==5&&ot!==27&&ot!==6)&&(Qe=null)):(fe=null,Qe=se),fe!==Qe)){if(ot=kp,Se="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Xp,Se="onPointerLeave",J="onPointerEnter",W="pointer"),sn=fe==null?le:Ne(fe),ie=Qe==null?le:Ne(Qe),le=new ot(Se,W+"leave",fe,a,xe),le.target=sn,le.relatedTarget=ie,Se=null,tn(xe)===se&&(ot=new ot(J,W+"enter",Qe,a,xe),ot.target=ie,ot.relatedTarget=sn,Se=ot),sn=Se,fe&&Qe)t:{for(ot=dy,J=fe,W=Qe,ie=0,Se=J;Se;Se=ot(Se))ie++;Se=0;for(var at=W;at;at=ot(at))Se++;for(;0<ie-Se;)J=ot(J),ie--;for(;0<Se-ie;)W=ot(W),Se--;for(;ie--;){if(J===W||W!==null&&J===W.alternate){ot=J;break t}J=ot(J),W=ot(W)}ot=null}else ot=null;fe!==null&&Fg(Me,le,fe,ot,!1),Qe!==null&&sn!==null&&Fg(Me,sn,Qe,ot,!0)}}e:{if(le=se?Ne(se):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var zt=$p;else if(Qp(le))if(em)zt=bS;else{zt=yS;var tt=SS}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?se&&Yt(se.elementType)&&(zt=$p):zt=MS;if(zt&&(zt=zt(t,se))){Jp(Me,zt,a,xe);break e}tt&&tt(t,le,se),t==="focusout"&&se&&le.type==="number"&&se.memoizedProps.value!=null&&bt(le,"number",le.value)}switch(tt=se?Ne(se):window,t){case"focusin":(Qp(tt)||tt.contentEditable==="true")&&(fr=tt,Hu=se,_o=null);break;case"focusout":_o=Hu=fr=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,lm(Me,a,xe);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":lm(Me,a,xe)}var yt;if(Fu)e:{switch(t){case"compositionstart":var Nt="onCompositionStart";break e;case"compositionend":Nt="onCompositionEnd";break e;case"compositionupdate":Nt="onCompositionUpdate";break e}Nt=void 0}else ur?Zp(t,a)&&(Nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Nt="onCompositionStart");Nt&&(qp&&a.locale!=="ko"&&(ur||Nt!=="onCompositionStart"?Nt==="onCompositionEnd"&&ur&&(yt=Gp()):(Ja=xe,Du="value"in Ja?Ja.value:Ja.textContent,ur=!0)),tt=mc(se,Nt),0<tt.length&&(Nt=new Wp(Nt,t,null,a,xe),Me.push({event:Nt,listeners:tt}),yt?Nt.data=yt:(yt=Kp(a),yt!==null&&(Nt.data=yt)))),(yt=mS?gS(t,a):vS(t,a))&&(Nt=mc(se,"onBeforeInput"),0<Nt.length&&(tt=new Wp("onBeforeInput","beforeinput",null,a,xe),Me.push({event:tt,listeners:Nt}),tt.data=yt)),ly(Me,t,se,a,xe)}Og(Me,n)})}function Wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function mc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=uo(t,a),u!=null&&o.unshift(Wo(t,u,d)),u=uo(t,n),u!=null&&o.push(Wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function dy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fg(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,se=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||se===null||(H=se,u?(se=uo(a,d),se!=null&&y.unshift(Wo(a,se,H))):u||(se=uo(a,d),se!=null&&y.push(Wo(a,se,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var hy=/\r\n?/g,py=/\u0000|\uFFFD/g;function Ig(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(py,"")}function zg(t,n){return n=Ig(n),Ig(t)===n}function an(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||hi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&hi(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":Hi(t,o,d);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ns(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&an(t,n,"name",u.name,u,null),an(t,n,"formEncType",u.formEncType,u,null),an(t,n,"formMethod",u.formMethod,u,null),an(t,n,"formTarget",u.formTarget,u,null)):(an(t,n,"encType",u.encType,u,null),an(t,n,"method",u.method,u,null),an(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ns(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=xa);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ns(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ea.get(a)||a,Be(t,a,o))}}function hd(t,n,a,o,u,d){switch(a){case"style":Hi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?hi(t,o):(typeof o=="number"||typeof o=="bigint")&&hi(t,""+o);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function qn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(t,n,d,y,a,null)}}u&&an(t,n,"srcSet",a.srcSet,a,null),o&&an(t,n,"src",a.src,a,null);return;case"input":Tt("invalid",t);var R=d=y=u=null,H=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var xe=a[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":y=xe;break;case"checked":H=xe;break;case"defaultChecked":se=xe;break;case"value":d=xe;break;case"defaultValue":R=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:an(t,n,o,xe,a,null)}}jn(t,d,R,H,se,y,u,!1);return;case"select":Tt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:an(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?Pn(t,!!o,n,!1):a!=null&&Pn(t,!!o,a,!0);return;case"textarea":Tt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:an(t,n,y,R,a,null)}Bi(t,o,u,d);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":an(t,n,H,o,a,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)Tt(ko[o],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(t,n,se,o,a,null)}return;default:if(Yt(n)){for(xe in a)a.hasOwnProperty(xe)&&(o=a[xe],o!==void 0&&hd(t,n,xe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&an(t,n,R,o,a,null))}function my(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,H=null,se=null,xe=null;for(fe in a){var Me=a[fe];if(a.hasOwnProperty(fe)&&Me!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Me;default:o.hasOwnProperty(fe)||an(t,n,fe,null,o,Me)}}for(var le in o){var fe=o[le];if(Me=a[le],o.hasOwnProperty(le)&&(fe!=null||Me!=null))switch(le){case"type":d=fe;break;case"name":u=fe;break;case"checked":se=fe;break;case"defaultChecked":xe=fe;break;case"value":y=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==Me&&an(t,n,le,fe,o,Me)}}Ye(t,y,R,H,se,xe,d,u);return;case"select":fe=y=R=le=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(d)||an(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==H&&an(t,n,u,d,o,H)}n=R,a=y,o=fe,le!=null?Pn(t,!!a,le,!1):!!o!=!!a&&(n!=null?Pn(t,!!a,n,!0):Pn(t,!!a,a?[]:"",!1));return;case"textarea":fe=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:an(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":le=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&an(t,n,y,u,o,d)}di(t,le,fe);return;case"option":for(var Qe in a)le=a[Qe],a.hasOwnProperty(Qe)&&le!=null&&!o.hasOwnProperty(Qe)&&(Qe==="selected"?t.selected=!1:an(t,n,Qe,null,o,le));for(H in o)le=o[H],fe=a[H],o.hasOwnProperty(H)&&le!==fe&&(le!=null||fe!=null)&&(H==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":an(t,n,H,le,o,fe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)le=a[ot],a.hasOwnProperty(ot)&&le!=null&&!o.hasOwnProperty(ot)&&an(t,n,ot,null,o,le);for(se in o)if(le=o[se],fe=a[se],o.hasOwnProperty(se)&&le!==fe&&(le!=null||fe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:an(t,n,se,le,o,fe)}return;default:if(Yt(n)){for(var sn in a)le=a[sn],a.hasOwnProperty(sn)&&le!==void 0&&!o.hasOwnProperty(sn)&&hd(t,n,sn,void 0,o,le);for(xe in o)le=o[xe],fe=a[xe],!o.hasOwnProperty(xe)||le===fe||le===void 0&&fe===void 0||hd(t,n,xe,le,o,fe);return}}for(var J in a)le=a[J],a.hasOwnProperty(J)&&le!=null&&!o.hasOwnProperty(J)&&an(t,n,J,null,o,le);for(Me in o)le=o[Me],fe=a[Me],!o.hasOwnProperty(Me)||le===fe||le==null&&fe==null||an(t,n,Me,le,o,fe)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&Bg(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],se=H.startTime;if(se>R)break;var xe=H.transferSize,Me=H.initiatorType;xe&&Bg(Me)&&(H=H.responseEnd,y+=xe*(H<R?1:(R-se)/(H-se)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var pd=null,md=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function Hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function gd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vd=null;function vy(){var t=window.event;return t&&t.type==="popstate"?t===vd?!1:(vd=t,!0):(vd=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(t){return kg.resolve(null).then(t).catch(Sy)}:Vg;function Sy(t){setTimeout(function(){throw t})}function ms(t){return t==="head"}function Wg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),zr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[Xt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Xo(t.ownerDocument.body);a=u}while(a);zr(n)}function Xg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function xd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xd(a),pn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Xt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ni(t.nextSibling),t===null)break}return null}function My(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ni(t.nextSibling),t===null))return null;return t}function qg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ni(t.nextSibling),t===null))return null;return t}function _d(t){return t.data==="$?"||t.data==="$~"}function Sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function by(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ni(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var yd=null;function Yg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Zg(t,n,a){switch(n=gc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);pn(t)}var Di=new Map,Kg=new Set;function vc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oa=G.d;G.d={f:Ey,r:Ty,D:Ay,C:Ry,L:Cy,m:wy,X:Dy,S:Ny,M:Uy};function Ey(){var t=Oa.f(),n=lc();return t||n}function Ty(t){var n=st(t);n!==null&&n.tag===5&&n.type==="form"?h0(n):Oa.r(t)}var Pr=typeof document>"u"?null:document;function Qg(t,n,a){var o=Pr;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Kg.has(u)||(Kg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),qn(n,"link",t),Ct(n),o.head.appendChild(n)))}}function Ay(t){Oa.D(t),Qg("dns-prefetch",t,null)}function Ry(t,n){Oa.C(t,n),Qg("preconnect",t,n)}function Cy(t,n,a){Oa.L(t,n,a);var o=Pr;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(n){case"style":d=Fr(t);break;case"script":d=Ir(t)}Di.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Di.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(d))||n==="script"&&o.querySelector(Yo(d))||(n=o.createElement("link"),qn(n,"link",t),Ct(n),o.head.appendChild(n)))}}function wy(t,n){Oa.m(t,n);var a=Pr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ir(t)}if(!Di.has(d)&&(t=v({rel:"modulepreload",href:t},n),Di.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yo(d)))return}o=a.createElement("link"),qn(o,"link",t),Ct(o),a.head.appendChild(o)}}}function Ny(t,n,a){Oa.S(t,n,a);var o=Pr;if(o&&t){var u=jt(o).hoistableStyles,d=Fr(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(qo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Di.get(d))&&Md(t,a);var H=y=o.createElement("link");Ct(H),qn(H,"link",t),H._p=new Promise(function(se,xe){H.onload=se,H.onerror=xe}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,xc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function Dy(t,n){Oa.X(t,n);var a=Pr;if(a&&t){var o=jt(a).hoistableScripts,u=Ir(t),d=o.get(u);d||(d=a.querySelector(Yo(u)),d||(t=v({src:t,async:!0},n),(n=Di.get(u))&&bd(t,n),d=a.createElement("script"),Ct(d),qn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Uy(t,n){Oa.M(t,n);var a=Pr;if(a&&t){var o=jt(a).hoistableScripts,u=Ir(t),d=o.get(u);d||(d=a.querySelector(Yo(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Di.get(u))&&bd(t,n),d=a.createElement("script"),Ct(d),qn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Jg(t,n,a,o){var u=(u=$.current)?vc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fr(a.href),a=jt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fr(a.href);var d=jt(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(qo(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Di.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(t,a),d||Ly(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ir(a),a=jt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fr(t){return'href="'+Zt(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function $g(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ly(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),qn(n,"link",a),Ct(n),t.head.appendChild(n))}function Ir(t){return'[src="'+Zt(t)+'"]'}function Yo(t){return"script[async]"+t}function ev(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,Ct(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ct(o),qn(o,"style",u),xc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Fr(a.href);var d=t.querySelector(qo(u));if(d)return n.state.loading|=4,n.instance=d,Ct(d),d;o=$g(a),(u=Di.get(u))&&Md(o,u),d=(t.ownerDocument||t).createElement("link"),Ct(d);var y=d;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),qn(d,"link",o),n.state.loading|=4,xc(d,a.precedence,t),n.instance=d;case"script":return d=Ir(a.src),(u=t.querySelector(Yo(d)))?(n.instance=u,Ct(u),u):(o=a,(u=Di.get(d))&&(o=v({},a),bd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ct(u),qn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,t));return n.instance}function xc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var _c=null;function tv(t,n,a){if(_c===null){var o=new Map,u=_c=new Map;u.set(a,o)}else u=_c,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Xt]||d[ce]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function nv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Oy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function iv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Py(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Fr(o.href),d=n.querySelector(qo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,Ct(d);return}d=n.ownerDocument||n,o=$g(o),(u=Di.get(u))&&Md(o,u),d=d.createElement("link"),Ct(d);var y=d;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),qn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ed=0;function Fy(t,n){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Ed===0&&(Ed=62500*gy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ed?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yc=null;function Mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yc=new Map,n.forEach(Iy,t),yc=null,Sc.call(t))}function Iy(t,n){if(!(n.state.loading&4)){var a=yc.get(t);if(a)var o=a.get(null);else{a=new Map,yc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var jo={$$typeof:F,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function zy(t,n,a,o,u,d,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function av(t,n,a,o,u,d,y,R,H,se,xe,Me){return t=new zy(t,n,a,y,H,se,xe,Me,R),n=1,d===!0&&(n|=24),d=mi(3,null,null,n),t.current=d,d.stateNode=t,n=nf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},of(d),t}function sv(t){return t?(t=pr,t):pr}function rv(t,n,a,o,u,d){u=sv(u),o.context===null?o.context=u:o.pendingContext=u,o=as(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ss(t,o,n),a!==null&&(oi(a,t,n),Ao(a,t,n))}function ov(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Td(t,n){ov(t,n),(t=t.alternate)&&ov(t,n)}function lv(t){if(t.tag===13||t.tag===31){var n=Os(t,67108864);n!==null&&oi(n,t,67108864),Td(t,67108864)}}function cv(t){if(t.tag===13||t.tag===31){var n=Si();n=ma(n);var a=Os(t,n);a!==null&&oi(a,t,n),Td(t,n)}}var bc=!0;function By(t,n,a,o){var u=B.T;B.T=null;var d=G.p;try{G.p=2,Ad(t,n,a,o)}finally{G.p=d,B.T=u}}function Hy(t,n,a,o){var u=B.T;B.T=null;var d=G.p;try{G.p=8,Ad(t,n,a,o)}finally{G.p=d,B.T=u}}function Ad(t,n,a,o){if(bc){var u=Rd(o);if(u===null)dd(t,n,o,Ec,a),fv(t,o);else if(Vy(u,t,n,a,o))o.stopPropagation();else if(fv(t,o),n&4&&-1<Gy.indexOf(t)){for(;u!==null;){var d=st(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=De(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Ve(y);R.entanglements[1]|=H,y&=~H}aa(d),(kt&6)===0&&(rc=Vt()+500,Vo(0))}}break;case 31:case 13:R=Os(d,2),R!==null&&oi(R,d,2),lc(),Td(d,2)}if(d=Rd(o),d===null&&dd(t,n,o,Ec,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else dd(t,n,o,null,a)}}function Rd(t){return t=Cu(t),Cd(t)}var Ec=null;function Cd(t){if(Ec=null,t=tn(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ec=t,null}function uv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case D:return 2;case b:return 8;case Q:case ae:return 32;case de:return 268435456;default:return 32}default:return 32}}var wd=!1,gs=null,vs=null,xs=null,Zo=new Map,Ko=new Map,_s=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fv(t,n){switch(t){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":vs=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=st(n),n!==null&&lv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Vy(t,n,a,o,u){switch(n){case"focusin":return gs=Qo(gs,t,n,a,o,u),!0;case"dragenter":return vs=Qo(vs,t,n,a,o,u),!0;case"mouseover":return xs=Qo(xs,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Zo.set(d,Qo(Zo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ko.set(d,Qo(Ko.get(d)||null,t,n,a,o,u)),!0}return!1}function dv(t){var n=tn(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,$i(t.priority,function(){cv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,$i(t.priority,function(){cv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ru=o,a.target.dispatchEvent(o),Ru=null}else return n=st(a),n!==null&&lv(n),t.blockedOn=a,!1;n.shift()}return!0}function hv(t,n,a){Tc(t)&&a.delete(n)}function ky(){wd=!1,gs!==null&&Tc(gs)&&(gs=null),vs!==null&&Tc(vs)&&(vs=null),xs!==null&&Tc(xs)&&(xs=null),Zo.forEach(hv),Ko.forEach(hv)}function Ac(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ky)))}var Rc=null;function pv(t){Rc!==t&&(Rc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===t&&(Rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Cd(o||a)===null)continue;break}var d=st(a);d!==null&&(t.splice(n,3),n-=3,Rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zr(t){function n(H){return Ac(H,t)}gs!==null&&Ac(gs,t),vs!==null&&Ac(vs,t),xs!==null&&Ac(xs,t),Zo.forEach(n),Ko.forEach(n);for(var a=0;a<_s.length;a++){var o=_s[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<_s.length&&(a=_s[0],a.blockedOn===null);)dv(a),a.blockedOn===null&&_s.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[Pe]||null;if(typeof d=="function")y||pv(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Pe]||null)R=y.formAction;else if(Cd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),pv(a)}}}function mv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nd(t){this._internalRoot=t}Cc.prototype.render=Nd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Si();rv(a,o,t,n,null,null)},Cc.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;rv(t.current,2,null,t,null,null),lc(),n[Ee]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=va();t={blockedOn:null,target:t,priority:n};for(var a=0;a<_s.length&&n!==0&&n<_s[a].priority;a++);_s.splice(a,0,t),a===0&&dv(t)}};var gv=e.version;if(gv!=="19.2.8")throw Error(s(527,gv,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Wy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{he=wc.inject(Wy),pe=wc}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=b0,d=E0,y=T0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=av(t,1,!1,null,null,a,o,null,u,d,y,mv),t[Ee]=n.current,fd(t),new Nd(n)},$o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=b0,y=E0,R=T0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=av(t,1,!0,n,a??null,o,u,H,d,y,R,mv),n.context=sv(null),a=n.current,o=Si(),o=ma(o),u=as(o),u.callback=null,ss(a,u,o),a=o,n.current.lanes=a,je(n,a),aa(n),t[Ee]=n.current,fd(t),new Cc(n)},$o.version="19.2.8",$o}var Av;function eM(){if(Av)return Ld.exports;Av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ld.exports=$y(),Ld.exports}var tM=eM();var Rv="popstate";function Cv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function nM(r={}){function e(l,c){let{pathname:f="/",search:p="",hash:m=""}=rr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),bh("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=l.location.href,h=m.indexOf("#");p=h===-1?m:m.slice(0,h)}return p+"#"+(typeof c=="string"?c:dl(c))}function s(l,c){Zi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return aM(e,i,s,r)}function Mn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Zi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iM(){return Math.random().toString(36).substring(2,10)}function wv(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function bh(r,e,i=null,s,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?rr(e):e,state:i,key:e&&e.key||s||iM(),unstable_mask:l}}function dl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function rr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function aM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function v(){p="POP";let _=g(),S=_==null?null:_-h;h=_,m&&m({action:p,location:C.location,delta:S})}function x(_,S){p="PUSH";let L=Cv(_)?_:bh(C.location,_,S);i&&i(L,_),h=g()+1;let F=wv(L,h),N=C.createHref(L.unstable_mask||L);try{f.pushState(F,"",N)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(N)}c&&m&&m({action:p,location:C.location,delta:1})}function M(_,S){p="REPLACE";let L=Cv(_)?_:bh(C.location,_,S);i&&i(L,_),h=g();let F=wv(L,h),N=C.createHref(L.unstable_mask||L);f.replaceState(F,"",N),c&&m&&m({action:p,location:C.location,delta:0})}function E(_){return sM(_)}let C={get action(){return p},get location(){return r(l,f)},listen(_){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Rv,v),m=_,()=>{l.removeEventListener(Rv,v),m=null}},createHref(_){return e(l,_)},createURL:E,encodeLocation(_){let S=E(_);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:M,go(_){return f.go(_)}};return C}function sM(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Mn(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:dl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function Hx(r,e,i="/"){return rM(r,e,i,!1)}function rM(r,e,i,s){let l=typeof e=="string"?rr(e):e,c=Xa(l.pathname||"/",i);if(c==null)return null;let f=Gx(r);oM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=xM(c);p=gM(f[m],h,s)}return p}function Gx(r,e=[],i=[],s="",l=!1){let c=(f,p,m=l,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;Mn(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let v=fa([s,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Mn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Gx(f.children,e,x,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:pM(v,f.index),routesMeta:x})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of Vx(f.path))c(f,p,!0,m)}),e}function Vx(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=Vx(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function oM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:mM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var lM=/^:[\w-]+$/,cM=3,uM=2,fM=1,dM=10,hM=-2,Nv=r=>r==="*";function pM(r,e){let i=r.split("/"),s=i.length;return i.some(Nv)&&(s+=hM),e&&(s+=uM),i.filter(l=>!Nv(l)).reduce((l,c)=>l+(lM.test(c)?cM:c===""?fM:dM),s)}function mM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function gM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],h=p===s.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=du({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),x=m.route;if(!v&&h&&i&&!s[s.length-1].route.index&&(v=du({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:fa([c,v.pathname]),pathnameBase:MM(fa([c,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(c=fa([c,v.pathnameBase]))}return f}function du(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=vM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=p[x]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=p[x];return v&&!M?h[g]=void 0:h[g]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function vM(r,e=!1,i=!0){Zi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,g)=>{if(s.push({paramName:p,isOptional:m!=null}),m){let v=g.charAt(h+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function xM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Xa(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var _M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function SM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?rr(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=Dv(i.substring(1),"/"):c=Dv(i,e)):c=e,{pathname:c,search:bM(s),hash:EM(l)}}function Dv(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Id(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function yM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function kx(r){let e=yM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function xp(r,e,i,s=!1){let l;typeof r=="string"?l=rr(r):(l={...r},Mn(!l.pathname||!l.pathname.includes("?"),Id("?","pathname","search",l)),Mn(!l.pathname||!l.pathname.includes("#"),Id("#","pathname","hash",l)),Mn(!l.search||!l.search.includes("#"),Id("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}p=v>=0?e[v]:"/"}let m=SM(l,p),h=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var fa=r=>r.join("/").replace(/\/\/+/g,"/"),MM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),bM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,EM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,TM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function AM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function RM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xx(r,e){let i=r;if(typeof i!="string"||!_M.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(Wx)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=Xa(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Zi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var qx=["POST","PUT","PATCH","DELETE"];new Set(qx);var CM=["GET",...qx];new Set(CM);var oo=me.createContext(null);oo.displayName="DataRouter";var Su=me.createContext(null);Su.displayName="DataRouterState";var wM=me.createContext(!1),Yx=me.createContext({isTransitioning:!1});Yx.displayName="ViewTransition";var NM=me.createContext(new Map);NM.displayName="Fetchers";var DM=me.createContext(null);DM.displayName="Await";var zi=me.createContext(null);zi.displayName="Navigation";var ml=me.createContext(null);ml.displayName="Location";var Za=me.createContext({outlet:null,matches:[],isDataRoute:!1});Za.displayName="Route";var _p=me.createContext(null);_p.displayName="RouteError";var jx="REACT_ROUTER_ERROR",UM="REDIRECT",LM="ROUTE_ERROR_RESPONSE";function OM(r){if(r.startsWith(`${jx}:${UM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function PM(r){if(r.startsWith(`${jx}:${LM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new TM(e.status,e.statusText,e.data)}catch{}}function FM(r,{relative:e}={}){Mn(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=me.useContext(zi),{hash:l,pathname:c,search:f}=vl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:fa([i,c])),s.createHref({pathname:p,search:f,hash:l})}function gl(){return me.useContext(ml)!=null}function Ka(){return Mn(gl(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(ml).location}var Zx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kx(r){me.useContext(zi).static||me.useLayoutEffect(r)}function Qx(){let{isDataRoute:r}=me.useContext(Za);return r?ZM():IM()}function IM(){Mn(gl(),"useNavigate() may be used only in the context of a <Router> component.");let r=me.useContext(oo),{basename:e,navigator:i}=me.useContext(zi),{matches:s}=me.useContext(Za),{pathname:l}=Ka(),c=JSON.stringify(kx(s)),f=me.useRef(!1);return Kx(()=>{f.current=!0}),me.useCallback((m,h={})=>{if(Zi(f.current,Zx),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=xp(m,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:fa([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,c,l,r])}me.createContext(null);function vl(r,{relative:e}={}){let{matches:i}=me.useContext(Za),{pathname:s}=Ka(),l=JSON.stringify(kx(i));return me.useMemo(()=>xp(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function zM(r,e){return Jx(r,e)}function Jx(r,e,i){Mn(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=me.useContext(zi),{matches:l}=me.useContext(Za),c=l[l.length-1],f=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",h=c&&c.route;{let _=h&&h.path||"";e_(p,!h||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=Ka(),v;if(e){let _=typeof e=="string"?rr(e):e;Mn(m==="/"||_.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=g;let x=v.pathname||"/",M=x;if(m!=="/"){let _=m.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let E=Hx(r,{pathname:M});Zi(h||E!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Zi(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=kM(E&&E.map(_=>Object.assign({},_,{params:Object.assign({},f,_.params),pathname:fa([m,s.encodeLocation?s.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?m:fa([m,s.encodeLocation?s.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),l,i);return e&&C?me.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},C):C}function BM(){let r=jM(),e=AM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:c},"ErrorBoundary")," or"," ",me.createElement("code",{style:c},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),i?me.createElement("pre",{style:l},i):null,f)}var HM=me.createElement(BM,null),$x=class extends me.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=PM(r.digest);i&&(r=i)}let e=r!==void 0?me.createElement(Za.Provider,{value:this.props.routeContext},me.createElement(_p.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?me.createElement(GM,{error:r},e):e}};$x.contextType=wM;var zd=new WeakMap;function GM({children:r,error:e}){let{basename:i}=me.useContext(zi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=OM(e.digest);if(s){let l=zd.get(e);if(l)throw l;let c=Xx(s.location,i);if(Wx&&!zd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw zd.set(e,f),f}return me.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function VM({routeContext:r,match:e,children:i}){let s=me.useContext(oo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(Za.Provider,{value:r},i)}function kM(r,e=[],i){let s=i?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let l=r,c=s?.errors;if(c!=null){let g=l.findIndex(v=>v.route.id&&c?.[v.route.id]!==void 0);Mn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,p=-1;if(i&&s){f=s.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:x,errors:M}=s,E=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||E){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,h=s&&m?(g,v)=>{m(g,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:RM(s.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,x)=>{let M,E=!1,C=null,_=null;s&&(M=c&&v.route.id?c[v.route.id]:void 0,C=v.route.errorElement||HM,f&&(p<0&&x===0?(e_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,_=null):p===x&&(E=!0,_=v.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,x+1)),L=()=>{let F;return M?F=C:E?F=_:v.route.Component?F=me.createElement(v.route.Component,null):v.route.element?F=v.route.element:F=g,me.createElement(VM,{match:v,routeContext:{outlet:g,matches:S,isDataRoute:s!=null},children:F})};return s&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?me.createElement($x,{location:s.location,revalidation:s.revalidation,component:C,error:M,children:L(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):L()},null)}function Sp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function WM(r){let e=me.useContext(oo);return Mn(e,Sp(r)),e}function XM(r){let e=me.useContext(Su);return Mn(e,Sp(r)),e}function qM(r){let e=me.useContext(Za);return Mn(e,Sp(r)),e}function yp(r){let e=qM(r),i=e.matches[e.matches.length-1];return Mn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function YM(){return yp("useRouteId")}function jM(){let r=me.useContext(_p),e=XM("useRouteError"),i=yp("useRouteError");return r!==void 0?r:e.errors?.[i]}function ZM(){let{router:r}=WM("useNavigate"),e=yp("useNavigate"),i=me.useRef(!1);return Kx(()=>{i.current=!0}),me.useCallback(async(l,c={})=>{Zi(i.current,Zx),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Uv={};function e_(r,e,i){!e&&!Uv[r]&&(Uv[r]=!0,Zi(!1,i))}me.memo(KM);function KM({routes:r,future:e,state:i,isStatic:s,onError:l}){return Jx(r,void 0,{state:i,isStatic:s,onError:l})}function $r(r){Mn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function QM({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Mn(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),m=me.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=rr(i));let{pathname:h="/",search:g="",hash:v="",state:x=null,key:M="default",unstable_mask:E}=i,C=me.useMemo(()=>{let _=Xa(h,p);return _==null?null:{location:{pathname:_,search:g,hash:v,state:x,key:M,unstable_mask:E},navigationType:s}},[p,h,g,v,x,M,s,E]);return Zi(C!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:me.createElement(zi.Provider,{value:m},me.createElement(ml.Provider,{children:e,value:C}))}function JM({children:r,location:e}){return zM(Eh(r),e)}function Eh(r,e=[]){let i=[];return me.Children.forEach(r,(s,l)=>{if(!me.isValidElement(s))return;let c=[...e,l];if(s.type===me.Fragment){i.push.apply(i,Eh(s.props.children,c));return}Mn(s.type===$r,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Mn(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Eh(s.props.children,c)),i.push(f)}),i}var au="get",su="application/x-www-form-urlencoded";function yu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function $M(r){return yu(r)&&r.tagName.toLowerCase()==="button"}function e1(r){return yu(r)&&r.tagName.toLowerCase()==="form"}function t1(r){return yu(r)&&r.tagName.toLowerCase()==="input"}function n1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function i1(r,e){return r.button===0&&(!e||e==="_self")&&!n1(r)}var Nc=null;function a1(){if(Nc===null)try{new FormData(document.createElement("form"),0),Nc=!1}catch{Nc=!0}return Nc}var s1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bd(r){return r!=null&&!s1.has(r)?(Zi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${su}"`),null):r}function r1(r,e){let i,s,l,c,f;if(e1(r)){let p=r.getAttribute("action");s=p?Xa(p,e):null,i=r.getAttribute("method")||au,l=Bd(r.getAttribute("enctype"))||su,c=new FormData(r)}else if($M(r)||t1(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Xa(m,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||au,l=Bd(r.getAttribute("formenctype"))||Bd(p.getAttribute("enctype"))||su,c=new FormData(p,r),!a1()){let{name:h,type:g,value:v}=r;if(g==="image"){let x=h?`${h}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else h&&c.append(h,v)}}else{if(yu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=au,s=null,l=su,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Mp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function o1(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Xa(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function l1(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function c1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function u1(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await l1(c,i);return f.links?f.links():[]}return[]}));return p1(s.flat(1).filter(c1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Lv(r,e,i,s,l,c){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,h)=>f(m,h)||p(m,h)):c==="data"?e.filter((m,h)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function f1(r,e,{includeHydrateFallback:i}={}){return d1(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function d1(r){return[...new Set(r)]}function h1(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function p1(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(h1(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function t_(){let r=me.useContext(oo);return Mp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function m1(){let r=me.useContext(Su);return Mp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bp=me.createContext(void 0);bp.displayName="FrameworkContext";function n_(){let r=me.useContext(bp);return Mp(r,"You must render this element inside a <HydratedRouter> element"),r}function g1(r,e){let i=me.useContext(bp),[s,l]=me.useState(!1),[c,f]=me.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,x=me.useRef(null);me.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=S=>{S.forEach(L=>{f(L.isIntersecting)})},_=new IntersectionObserver(C,{threshold:.5});return x.current&&_.observe(x.current),()=>{_.disconnect()}}},[r]),me.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,x,{}]:[c,x,{onFocus:el(p,M),onBlur:el(m,E),onMouseEnter:el(h,M),onMouseLeave:el(g,E),onTouchStart:el(v,M)}]:[!1,x,{}]}function el(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function v1({page:r,...e}){let{router:i}=t_(),s=me.useMemo(()=>Hx(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?me.createElement(_1,{page:r,matches:s,...e}):null}function x1(r){let{manifest:e,routeModules:i}=n_(),[s,l]=me.useState([]);return me.useEffect(()=>{let c=!1;return u1(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function _1({page:r,matches:e,...i}){let s=Ka(),{future:l,manifest:c,routeModules:f}=n_(),{basename:p}=t_(),{loaderData:m,matches:h}=m1(),g=me.useMemo(()=>Lv(r,e,h,c,s,"data"),[r,e,h,c,s]),v=me.useMemo(()=>Lv(r,e,h,c,s,"assets"),[r,e,h,c,s]),x=me.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,_=!1;if(e.forEach(L=>{let F=c.routes[L.route.id];!F||!F.hasLoader||(!g.some(N=>N.route.id===L.route.id)&&L.route.id in m&&f[L.route.id]?.shouldRevalidate||F.hasClientLoader?_=!0:C.add(L.route.id))}),C.size===0)return[];let S=o1(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return _&&C.size>0&&S.searchParams.set("_routes",e.filter(L=>C.has(L.route.id)).map(L=>L.route.id).join(",")),[S.pathname+S.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,s,c,g,e,r,f]),M=me.useMemo(()=>f1(v,c),[v,c]),E=x1(v);return me.createElement(me.Fragment,null,x.map(C=>me.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>me.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),E.map(({key:C,link:_})=>me.createElement("link",{key:C,nonce:i.nonce,..._,crossOrigin:_.crossOrigin??i.crossOrigin})))}function S1(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var y1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{y1&&(window.__reactRouterVersion="7.13.1")}catch{}function M1({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=me.useRef();l.current==null&&(l.current=nM({window:s,v5Compat:!0}));let c=l.current,[f,p]=me.useState({action:c.action,location:c.location}),m=me.useCallback(h=>{i===!1?p(h):me.startTransition(()=>p(h))},[i]);return me.useLayoutEffect(()=>c.listen(m),[c,m]),me.createElement(QM,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var i_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vn=me.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,unstable_mask:p,state:m,target:h,to:g,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:M,...E},C){let{basename:_,navigator:S,unstable_useTransitions:L}=me.useContext(zi),F=typeof g=="string"&&i_.test(g),N=Xx(g,_);g=N.to;let I=FM(g,{relative:l}),P=Ka(),z=null;if(p){let K=xp(p,[],P.unstable_mask?P.unstable_mask.pathname:"/",!0);_!=="/"&&(K.pathname=K.pathname==="/"?_:fa([_,K.pathname])),z=S.createHref(K)}let[T,O,Y]=g1(s,E),k=A1(g,{replace:f,unstable_mask:p,state:m,target:h,preventScrollReset:v,relative:l,viewTransition:x,unstable_defaultShouldRevalidate:M,unstable_useTransitions:L});function j(K){e&&e(K),K.defaultPrevented||k(K)}let ue=!(N.isExternal||c),ve=me.createElement("a",{...E,...Y,href:(ue?z:void 0)||N.absoluteURL||I,onClick:ue?j:e,ref:S1(C,O),target:h,"data-discover":!F&&i==="render"?"true":void 0});return T&&!F?me.createElement(me.Fragment,null,ve,me.createElement(v1,{page:I})):ve});vn.displayName="Link";var b1=me.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:m,...h},g){let v=vl(f,{relative:h.relative}),x=Ka(),M=me.useContext(Su),{navigator:E,basename:C}=me.useContext(zi),_=M!=null&&D1(v)&&p===!0,S=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,L=x.pathname,F=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),F=F?F.toLowerCase():null,S=S.toLowerCase()),F&&C&&(F=Xa(F,C)||F);const N=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let I=L===S||!l&&L.startsWith(S)&&L.charAt(N)==="/",P=F!=null&&(F===S||!l&&F.startsWith(S)&&F.charAt(S.length)==="/"),z={isActive:I,isPending:P,isTransitioning:_},T=I?e:void 0,O;typeof s=="function"?O=s(z):O=[s,I?"active":null,P?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(z):c;return me.createElement(vn,{...h,"aria-current":T,className:O,ref:g,style:Y,to:f,viewTransition:p},typeof m=="function"?m(z):m)});b1.displayName="NavLink";var E1=me.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=au,action:p,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x,...M},E)=>{let{unstable_useTransitions:C}=me.useContext(zi),_=w1(),S=N1(p,{relative:h}),L=f.toLowerCase()==="get"?"get":"post",F=typeof p=="string"&&i_.test(p),N=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let P=I.nativeEvent.submitter,z=P?.getAttribute("formmethod")||f,T=()=>_(P||I.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:x});C&&i!==!1?me.startTransition(()=>T()):T()};return me.createElement("form",{ref:E,method:L,action:S,onSubmit:s?m:N,...M,"data-discover":!F&&r==="render"?"true":void 0})});E1.displayName="Form";function T1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function a_(r){let e=me.useContext(oo);return Mn(e,T1(r)),e}function A1(r,{target:e,replace:i,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:h}={}){let g=Qx(),v=Ka(),x=vl(r,{relative:f});return me.useCallback(M=>{if(i1(M,e)){M.preventDefault();let E=i!==void 0?i:dl(v)===dl(x),C=()=>g(r,{replace:E,unstable_mask:s,state:l,preventScrollReset:c,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m});h?me.startTransition(()=>C()):C()}},[v,g,x,i,s,l,e,r,c,f,p,m,h])}var R1=0,C1=()=>`__${String(++R1)}__`;function w1(){let{router:r}=a_("useSubmit"),{basename:e}=me.useContext(zi),i=YM(),s=r.fetch,l=r.navigate;return me.useCallback(async(c,f={})=>{let{action:p,method:m,encType:h,formData:g,body:v}=r1(c,e);if(f.navigate===!1){let x=f.fetcherKey||C1();await s(x,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function N1(r,{relative:e}={}){let{basename:i}=me.useContext(zi),s=me.useContext(Za);Mn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...vl(r||".",{relative:e})},f=Ka();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(g=>g==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let g=p.toString();c.search=g?`?${g}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:fa([i,c.pathname])),dl(c)}function D1(r,{relative:e}={}){let i=me.useContext(Yx);Mn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=a_("useViewTransitionState"),l=vl(r,{relative:e});if(!i.isTransitioning)return!1;let c=Xa(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Xa(i.nextLocation.pathname,s)||i.nextLocation.pathname;return du(l.pathname,f)!=null||du(l.pathname,c)!=null}const Ep="185",U1=0,Ov=1,L1=2,ru=1,O1=2,cl=3,ws=0,ci=1,Ha=2,Va=0,eo=1,Th=2,Pv=3,Fv=4,P1=5,$s=100,F1=101,I1=102,z1=103,B1=104,H1=200,G1=201,V1=202,k1=203,Ah=204,Rh=205,W1=206,X1=207,q1=208,Y1=209,j1=210,Z1=211,K1=212,Q1=213,J1=214,Ch=0,wh=1,Nh=2,io=3,Dh=4,Uh=5,Lh=6,Oh=7,s_=0,$1=1,eb=2,da=0,r_=1,o_=2,l_=3,c_=4,u_=5,f_=6,d_=7,h_=300,ir=301,ao=302,Hd=303,Gd=304,Mu=306,Ph=1e3,Ga=1001,Fh=1002,Yn=1003,tb=1004,Dc=1005,Jn=1006,Vd=1007,tr=1008,Ii=1009,p_=1010,m_=1011,hl=1012,Tp=1013,pa=1014,ca=1015,qa=1016,Ap=1017,Rp=1018,pl=1020,g_=35902,v_=35899,x_=1021,__=1022,ji=1023,Ya=1026,nr=1027,S_=1028,Cp=1029,ar=1030,wp=1031,Np=1033,ou=33776,lu=33777,cu=33778,uu=33779,Ih=35840,zh=35841,Bh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Wh=37488,Xh=37489,hu=37490,qh=37491,Yh=37808,jh=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,$h=37814,ep=37815,tp=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,pu=36285,dp=36286,nb=3200,Iv=0,ib=1,Rs="",Pi="srgb",mu="srgb-linear",gu="linear",$t="srgb",Br=7680,zv=519,ab=512,sb=513,rb=514,Dp=515,ob=516,lb=517,Up=518,cb=519,Bv=35044,Hv="300 es",ua=2e3,vu=2001;function ub(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fb(){const r=xu("canvas");return r.style.display="block",r}const Gv={};function Vv(...r){const e="THREE."+r.shift();console.log(e,...r)}function y_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ft(...r){r=y_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function It(...r){r=y_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function to(...r){const e=r.join(" ");e in Gv||(Gv[e]=!0,ft(...r))}function db(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const hb={[Ch]:wh,[Nh]:Lh,[Dh]:Oh,[io]:Uh,[wh]:Ch,[Lh]:Nh,[Oh]:Dh,[Uh]:io};class or{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=Math.PI/180,hp=180/Math.PI;function xl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Kn[r&255]+Kn[r>>8&255]+Kn[r>>16&255]+Kn[r>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[i&63|128]+Kn[i>>8&255]+"-"+Kn[i>>16&255]+Kn[i>>24&255]+Kn[s&255]+Kn[s>>8&255]+Kn[s>>16&255]+Kn[s>>24&255]).toLowerCase()}function Pt(r,e,i){return Math.max(e,Math.min(i,r))}function pb(r,e){return(r%e+e)%e}function Wd(r,e,i){return(1-i)*r+i*e}function tl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Op=class Op{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Pt(this.x,e.x,i.x),this.y=Pt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Pt(this.x,e,i),this.y=Pt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Op.prototype.isVector2=!0;let Wt=Op;class lo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],v=s[l+3],x=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(v!==C||m!==x||h!==M||g!==E){let _=m*x+h*M+g*E+v*C;_<0&&(x=-x,M=-M,E=-E,C=-C,_=-_);let S=1-p;if(_<.9995){const L=Math.acos(_),F=Math.sin(L);S=Math.sin(S*L)/F,p=Math.sin(p*L)/F,m=m*S+x*p,h=h*S+M*p,g=g*S+E*p,v=v*S+C*p}else{m=m*S+x*p,h=h*S+M*p,g=g*S+E*p,v=v*S+C*p;const L=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=L,h*=L,g*=L,v*=L}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],v=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return e[i]=p*E+g*v+m*M-h*x,e[i+1]=m*E+g*x+h*v-p*M,e[i+2]=h*E+g*M+p*x-m*v,e[i+3]=g*E-p*v-m*x-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),v=p(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*v+h*M*E,this._y=h*M*v-x*g*E,this._z=h*g*E+x*M*v,this._w=h*g*v-x*M*E;break;case"YXZ":this._x=x*g*v+h*M*E,this._y=h*M*v-x*g*E,this._z=h*g*E-x*M*v,this._w=h*g*v+x*M*E;break;case"ZXY":this._x=x*g*v-h*M*E,this._y=h*M*v+x*g*E,this._z=h*g*E+x*M*v,this._w=h*g*v-x*M*E;break;case"ZYX":this._x=x*g*v-h*M*E,this._y=h*M*v+x*g*E,this._z=h*g*E-x*M*v,this._w=h*g*v+x*M*E;break;case"YZX":this._x=x*g*v+h*M*E,this._y=h*M*v+x*g*E,this._z=h*g*E-x*M*v,this._w=h*g*v-x*M*E;break;case"XZY":this._x=x*g*v-h*M*E,this._y=h*M*v-x*g*E,this._z=h*g*E+x*M*v,this._w=h*g*v+x*M*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],v=i[10],x=s+p+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(s>p&&s>v){const M=2*Math.sqrt(1+s-p-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-s-v);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-s-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pp=class Pp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(kv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(kv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),v=2*(c*s-f*i);return this.x=i+m*h+f*v-p*g,this.y=s+m*g+p*h-c*v,this.z=l+m*v+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Pt(this.x,e.x,i.x),this.y=Pt(this.y,e.y,i.y),this.z=Pt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Pt(this.x,e,i),this.y=Pt(this.y,e,i),this.z=Pt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pp.prototype.isVector3=!0;let oe=Pp;const Xd=new oe,kv=new lo,Fp=class Fp{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],v=s[7],x=s[2],M=s[5],E=s[8],C=l[0],_=l[3],S=l[6],L=l[1],F=l[4],N=l[7],I=l[2],P=l[5],z=l[8];return c[0]=f*C+p*L+m*I,c[3]=f*_+p*F+m*P,c[6]=f*S+p*N+m*z,c[1]=h*C+g*L+v*I,c[4]=h*_+g*F+v*P,c[7]=h*S+g*N+v*z,c[2]=x*C+M*L+E*I,c[5]=x*_+M*F+E*P,c[8]=x*S+M*N+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],v=g*f-p*h,x=p*m-g*c,M=h*c-f*m,E=i*v+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(l*h-g*s)*C,e[2]=(p*s-l*f)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(s*m-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return to("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,i)),this}rotate(e){return to("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,i){return to("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fp.prototype.isMatrix3=!0;let vt=Fp;const qd=new vt,Wv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const r={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$t&&(l.r=ka(l.r),l.g=ka(l.g),l.b=ka(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$t&&(l.r=no(l.r),l.g=no(l.g),l.b=no(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Rs?gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[mu]:{primaries:e,whitePoint:s,transfer:gu,toXYZ:Wv,fromXYZ:Xv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:s,transfer:$t,toXYZ:Wv,fromXYZ:Xv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),r}const Ot=mb();function ka(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function no(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class gb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Hr===void 0&&(Hr=xu("canvas")),Hr.width=e.width,Hr.height=e.height;const l=Hr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Hr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=xu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ka(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ka(i[s]/255)*255):i[s]=ka(i[s]);return{data:i,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vb=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Yd(l[f].image)):c.push(Yd(l[f]))}else c=Yd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Yd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let xb=0;const jd=new oe;class ti extends or{constructor(e=ti.DEFAULT_IMAGE,i=ti.DEFAULT_MAPPING,s=Ga,l=Ga,c=Jn,f=tr,p=ji,m=Ii,h=ti.DEFAULT_ANISOTROPY,g=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=xl(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ph:e.x=e.x-Math.floor(e.x);break;case Ga:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ph:e.y=e.y-Math.floor(e.y);break;case Ga:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=h_;ti.DEFAULT_ANISOTROPY=1;const Ip=class Ip{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],v=m[8],x=m[1],M=m[5],E=m[9],C=m[2],_=m[6],S=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-C)<.01&&Math.abs(E-_)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+C)<.1&&Math.abs(E+_)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(h+1)/2,N=(M+1)/2,I=(S+1)/2,P=(g+x)/4,z=(v+C)/4,T=(E+_)/4;return F>N&&F>I?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=P/s,c=z/s):N>I?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=P/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=T/c),this.set(s,l,c,i),this}let L=Math.sqrt((_-E)*(_-E)+(v-C)*(v-C)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(_-E)/L,this.y=(v-C)/L,this.z=(x-g)/L,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Pt(this.x,e.x,i.x),this.y=Pt(this.y,e.y,i.y),this.z=Pt(this.z,e.z,i.z),this.w=Pt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Pt(this.x,e,i),this.y=Pt(this.y,e,i),this.z=Pt(this.z,e,i),this.w=Pt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ip.prototype.isVector4=!0;let An=Ip;class _b extends or{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new An(0,0,e,i),this.scissorTest=!1,this.viewport=new An(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new ti(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Lp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ha extends _b{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class M_ extends ti{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sb extends ti{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _u=class _u{constructor(e,i,s,l,c,f,p,m,h,g,v,x,M,E,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,v,x,M,E,C,_)}set(e,i,s,l,c,f,p,m,h,g,v,x,M,E,C,_){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=p,S[13]=m,S[2]=h,S[6]=g,S[10]=v,S[14]=x,S[3]=M,S[7]=E,S[11]=C,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _u().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Gr.setFromMatrixColumn(e,0).length(),c=1/Gr.setFromMatrixColumn(e,1).length(),f=1/Gr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,M=f*v,E=p*g,C=p*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=M+E*h,i[5]=x-C*h,i[9]=-p*m,i[2]=C-x*h,i[6]=E+M*h,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,M=m*v,E=h*g,C=h*v;i[0]=x+C*p,i[4]=E*p-M,i[8]=f*h,i[1]=f*v,i[5]=f*g,i[9]=-p,i[2]=M*p-E,i[6]=C+x*p,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,M=m*v,E=h*g,C=h*v;i[0]=x-C*p,i[4]=-f*v,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*g,i[9]=C-x*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,M=f*v,E=p*g,C=p*v;i[0]=m*g,i[4]=E*h-M,i[8]=x*h+C,i[1]=m*v,i[5]=C*h+x,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*h,E=p*m,C=p*h;i[0]=m*g,i[4]=C-x*v,i[8]=E*v+M,i[1]=v,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=M*v+E,i[10]=x-C*v}else if(e.order==="XZY"){const x=f*m,M=f*h,E=p*m,C=p*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=x*v+C,i[5]=f*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=p*g,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,Mb)}lookAt(e,i,s){const l=this.elements;return yi.subVectors(e,i),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),ys.crossVectors(s,yi),ys.lengthSq()===0&&(Math.abs(s.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),ys.crossVectors(s,yi)),ys.normalize(),Uc.crossVectors(yi,ys),l[0]=ys.x,l[4]=Uc.x,l[8]=yi.x,l[1]=ys.y,l[5]=Uc.y,l[9]=yi.y,l[2]=ys.z,l[6]=Uc.z,l[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],v=s[5],x=s[9],M=s[13],E=s[2],C=s[6],_=s[10],S=s[14],L=s[3],F=s[7],N=s[11],I=s[15],P=l[0],z=l[4],T=l[8],O=l[12],Y=l[1],k=l[5],j=l[9],ue=l[13],ve=l[2],K=l[6],B=l[10],G=l[14],ne=l[3],_e=l[7],Re=l[11],U=l[15];return c[0]=f*P+p*Y+m*ve+h*ne,c[4]=f*z+p*k+m*K+h*_e,c[8]=f*T+p*j+m*B+h*Re,c[12]=f*O+p*ue+m*G+h*U,c[1]=g*P+v*Y+x*ve+M*ne,c[5]=g*z+v*k+x*K+M*_e,c[9]=g*T+v*j+x*B+M*Re,c[13]=g*O+v*ue+x*G+M*U,c[2]=E*P+C*Y+_*ve+S*ne,c[6]=E*z+C*k+_*K+S*_e,c[10]=E*T+C*j+_*B+S*Re,c[14]=E*O+C*ue+_*G+S*U,c[3]=L*P+F*Y+N*ve+I*ne,c[7]=L*z+F*k+N*K+I*_e,c[11]=L*T+F*j+N*B+I*Re,c[15]=L*O+F*ue+N*G+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],v=e[6],x=e[10],M=e[14],E=e[3],C=e[7],_=e[11],S=e[15],L=m*M-h*x,F=p*M-h*v,N=p*x-m*v,I=f*M-h*g,P=f*x-m*g,z=f*v-p*g;return i*(C*L-_*F+S*N)-s*(E*L-_*I+S*P)+l*(E*F-C*I+S*z)-c*(E*N-C*P+_*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],g=e[10];return i*(f*g-p*h)-s*(c*g-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],v=e[9],x=e[10],M=e[11],E=e[12],C=e[13],_=e[14],S=e[15],L=i*p-s*f,F=i*m-l*f,N=i*h-c*f,I=s*m-l*p,P=s*h-c*p,z=l*h-c*m,T=g*C-v*E,O=g*_-x*E,Y=g*S-M*E,k=v*_-x*C,j=v*S-M*C,ue=x*S-M*_,ve=L*ue-F*j+N*k+I*Y-P*O+z*T;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ve;return e[0]=(p*ue-m*j+h*k)*K,e[1]=(l*j-s*ue-c*k)*K,e[2]=(C*z-_*P+S*I)*K,e[3]=(x*P-v*z-M*I)*K,e[4]=(m*Y-f*ue-h*O)*K,e[5]=(i*ue-l*Y+c*O)*K,e[6]=(_*N-E*z-S*F)*K,e[7]=(g*z-x*N+M*F)*K,e[8]=(f*j-p*Y+h*T)*K,e[9]=(s*Y-i*j-c*T)*K,e[10]=(E*P-C*N+S*L)*K,e[11]=(v*N-g*P-M*L)*K,e[12]=(p*O-f*k-m*T)*K,e[13]=(i*k-s*O+l*T)*K,e[14]=(C*F-E*I-_*L)*K,e[15]=(g*I-v*F+x*L)*K,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,v=p+p,x=c*h,M=c*g,E=c*v,C=f*g,_=f*v,S=p*v,L=m*h,F=m*g,N=m*v,I=s.x,P=s.y,z=s.z;return l[0]=(1-(C+S))*I,l[1]=(M+N)*I,l[2]=(E-F)*I,l[3]=0,l[4]=(M-N)*P,l[5]=(1-(x+S))*P,l[6]=(_+L)*P,l[7]=0,l[8]=(E+F)*z,l[9]=(_-L)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Gr.set(l[0],l[1],l[2]).length();const p=Gr.set(l[4],l[5],l[6]).length(),m=Gr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Wi.copy(this);const h=1/f,g=1/p,v=1/m;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=g,Wi.elements[5]*=g,Wi.elements[6]*=g,Wi.elements[8]*=v,Wi.elements[9]*=v,Wi.elements[10]*=v,i.setFromRotationMatrix(Wi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=ua,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(p===ua)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===vu)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=ua,m=!1){const h=this.elements,g=2/(i-e),v=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(p===ua)E=-2/(f-c),C=-(f+c)/(f-c);else if(p===vu)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};_u.prototype.isMatrix4=!0;let wn=_u;const Gr=new oe,Wi=new wn,yb=new oe(0,0,0),Mb=new oe(1,1,1),ys=new oe,Uc=new oe,yi=new oe,qv=new wn,Yv=new lo;class sr{constructor(e=0,i=0,s=0,l=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Pt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Yv.setFromEuler(this),this.setFromQuaternion(Yv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class b_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const jv=new oe,Vr=new lo,Pa=new wn,Lc=new oe,nl=new oe,Eb=new oe,Tb=new lo,Zv=new oe(1,0,0),Kv=new oe(0,1,0),Qv=new oe(0,0,1),Jv={type:"added"},Ab={type:"removed"},kr={type:"childadded",child:null},Zd={type:"childremoved",child:null};class ui extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new oe,i=new sr,s=new lo,l=new oe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new wn},normalMatrix:{value:new vt}}),this.matrix=new wn,this.matrixWorld=new wn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Vr.setFromAxisAngle(e,i),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,i){return Vr.setFromAxisAngle(e,i),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Zv,e)}rotateY(e){return this.rotateOnAxis(Kv,e)}rotateZ(e){return this.rotateOnAxis(Qv,e)}translateOnAxis(e,i){return jv.copy(e).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Zv,e)}translateY(e){return this.translateOnAxis(Kv,e)}translateZ(e){return this.translateOnAxis(Qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Lc.copy(e):Lc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(nl,Lc,this.up):Pa.lookAt(Lc,nl,this.up),this.quaternion.setFromRotationMatrix(Pa),l&&(Pa.extractRotation(l.matrixWorld),Vr.setFromRotationMatrix(Pa),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jv),kr.child=e,this.dispatchEvent(kr),kr.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ab),Zd.child=e,this.dispatchEvent(Zd),Zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jv),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ui.DEFAULT_UP=new oe(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const _=i.getJointPose(C,s),S=this._getHandJoint(h,C);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],x=g.position.distanceTo(v.position),M=.02,E=.005;h.inputState.pinching&&x>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Qd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ht{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ot.workingColorSpace){if(e=pb(e,1),i=Pt(i,0,1),s=Pt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Qd(f,c,e+1/3),this.g=Qd(f,c,e),this.b=Qd(f,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=Pi){function s(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Pi){const s=E_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Ot.workingToColorSpace(Qn.copy(this),e),Math.round(Pt(Qn.r*255,0,255))*65536+Math.round(Pt(Qn.g*255,0,255))*256+Math.round(Pt(Qn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(Qn.copy(this),i);const s=Qn.r,l=Qn.g,c=Qn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=g<=.5?v/(f+p):v/(2-f-p),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Qn.copy(this),i),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=Pi){Ot.workingToColorSpace(Qn.copy(this),e);const i=Qn.r,s=Qn.g,l=Qn.b;return e!==Pi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+i,Ms.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ms),e.getHSL(Pc);const s=Wd(Ms.h,Pc.h,i),l=Wd(Ms.s,Pc.s,i),c=Wd(Ms.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new Ht;Ht.NAMES=E_;class Cb extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Xi=new oe,Fa=new oe,Jd=new oe,Ia=new oe,Wr=new oe,Xr=new oe,$v=new oe,$d=new oe,eh=new oe,th=new oe,nh=new An,ih=new An,ah=new An;class Yi{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Xi.subVectors(e,i),l.cross(Xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Xi.subVectors(l,i),Fa.subVectors(s,i),Jd.subVectors(e,i);const f=Xi.dot(Xi),p=Xi.dot(Fa),m=Xi.dot(Jd),h=Fa.dot(Fa),g=Fa.dot(Jd),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(h*m-p*g)*x,E=(f*g-p*m)*x;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ia.x),m.addScaledVector(f,Ia.y),m.addScaledVector(p,Ia.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,s),ah.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(nh,c.x),f.addScaledVector(ih,c.y),f.addScaledVector(ah,c.z),f}static isFrontFacing(e,i,s,l){return Xi.subVectors(s,i),Fa.subVectors(e,i),Xi.cross(Fa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Fa.subVectors(this.a,this.b),Xi.cross(Fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Wr.subVectors(l,s),Xr.subVectors(c,s),$d.subVectors(e,s);const m=Wr.dot($d),h=Xr.dot($d);if(m<=0&&h<=0)return i.copy(s);eh.subVectors(e,l);const g=Wr.dot(eh),v=Xr.dot(eh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Wr,f);th.subVectors(e,c);const M=Wr.dot(th),E=Xr.dot(th);if(E>=0&&M<=E)return i.copy(c);const C=M*h-m*E;if(C<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(s).addScaledVector(Xr,p);const _=g*E-M*v;if(_<=0&&v-g>=0&&M-E>=0)return $v.subVectors(c,l),p=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector($v,p);const S=1/(_+C+x);return f=C*S,p=x*S,i.copy(s).addScaledVector(Wr,f).addScaledVector(Xr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(qi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(qi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=qi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,qi):qi.fromBufferAttribute(c,f),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Ic.subVectors(this.max,il),qr.subVectors(e.a,il),Yr.subVectors(e.b,il),jr.subVectors(e.c,il),bs.subVectors(Yr,qr),Es.subVectors(jr,Yr),Ys.subVectors(qr,jr);let i=[0,-bs.z,bs.y,0,-Es.z,Es.y,0,-Ys.z,Ys.y,bs.z,0,-bs.x,Es.z,0,-Es.x,Ys.z,0,-Ys.x,-bs.y,bs.x,0,-Es.y,Es.x,0,-Ys.y,Ys.x,0];return!sh(i,qr,Yr,jr,Ic)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,qr,Yr,jr,Ic))?!1:(zc.crossVectors(bs,Es),i=[zc.x,zc.y,zc.z],sh(i,qr,Yr,jr,Ic))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],qi=new oe,Fc=new _l,qr=new oe,Yr=new oe,jr=new oe,bs=new oe,Es=new oe,Ys=new oe,il=new oe,Ic=new oe,zc=new oe,js=new oe;function sh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){js.fromArray(r,c);const p=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),m=e.dot(js),h=i.dot(js),g=s.dot(js);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const On=new oe,Bc=new Wt;let wb=0;class bi extends or{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Bv,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(e),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)On.fromBufferAttribute(this,i),On.applyMatrix3(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)On.fromBufferAttribute(this,i),On.applyMatrix4(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)On.fromBufferAttribute(this,i),On.applyNormalMatrix(e),this.setXYZ(i,On.x,On.y,On.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)On.fromBufferAttribute(this,i),On.transformDirection(e),this.setXYZ(i,On.x,On.y,On.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=tl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=li(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=tl(i,this.array)),i}setX(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=tl(i,this.array)),i}setY(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=tl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=tl(i,this.array)),i}setW(e,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=li(i,this.array),s=li(s,this.array),l=li(l,this.array),c=li(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class A_ extends bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Wa extends bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Nb=new _l,al=new oe,rh=new oe;class bu{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Nb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const i=al.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(al,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(rh)),this.expandByPoint(al.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Db=0;const Ui=new wn,oh=new ui,Zr=new oe,Mi=new _l,sl=new _l,Gn=new oe;class Qi extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ub(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new vt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ui.makeRotationFromQuaternion(e),this.applyMatrix4(Ui),this}rotateX(e){return Ui.makeRotationX(e),this.applyMatrix4(Ui),this}rotateY(e){return Ui.makeRotationY(e),this.applyMatrix4(Ui),this}rotateZ(e){return Ui.makeRotationZ(e),this.applyMatrix4(Ui),this}translate(e,i,s){return Ui.makeTranslation(e,i,s),this.applyMatrix4(Ui),this}scale(e,i,s){return Ui.makeScale(e,i,s),this.applyMatrix4(Ui),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];sl.setFromBufferAttribute(p),this.morphTargetsRelative?(Gn.addVectors(Mi.min,sl.min),Mi.expandByPoint(Gn),Gn.addVectors(Mi.max,sl.max),Mi.expandByPoint(Gn)):(Mi.expandByPoint(sl.min),Mi.expandByPoint(sl.max))}Mi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Gn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Gn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)Gn.fromBufferAttribute(p,h),m&&(Zr.fromBufferAttribute(e,h),Gn.add(Zr)),l=Math.max(l,s.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new bi(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new oe,m[T]=new oe;const h=new oe,g=new oe,v=new oe,x=new Wt,M=new Wt,E=new Wt,C=new oe,_=new oe;function S(T,O,Y){h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,O),v.fromBufferAttribute(s,Y),x.fromBufferAttribute(c,T),M.fromBufferAttribute(c,O),E.fromBufferAttribute(c,Y),g.sub(h),v.sub(h),M.sub(x),E.sub(x);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(k),_.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(k),p[T].add(C),p[O].add(C),p[Y].add(C),m[T].add(_),m[O].add(_),m[Y].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,O=L.length;T<O;++T){const Y=L[T],k=Y.start,j=Y.count;for(let ue=k,ve=k+j;ue<ve;ue+=3)S(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const F=new oe,N=new oe,I=new oe,P=new oe;function z(T){I.fromBufferAttribute(l,T),P.copy(I);const O=p[T];F.copy(O),F.sub(I.multiplyScalar(I.dot(O))).normalize(),N.crossVectors(P,O);const k=N.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,k)}for(let T=0,O=L.length;T<O;++T){const Y=L[T],k=Y.start,j=Y.count;for(let ue=k,ve=k+j;ue<ve;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new oe,c=new oe,f=new oe,p=new oe,m=new oe,h=new oe,g=new oe,v=new oe;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),C=e.getX(x+1),_=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,_),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,_),p.add(g),m.add(g),h.add(g),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(_,h.x,h.y,h.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Gn.fromBufferAttribute(e,i),Gn.normalize(),e.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,v=p.normalized,x=new h.constructor(m.length*g);let M=0,E=0;for(let C=0,_=m.length;C<_;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*g;for(let S=0;S<g;S++)x[E++]=h[M++]}return new bi(x,g,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,v=h.length;g<v;g++){const x=h[g],M=e(x,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,x=h.length;v<x;v++){const M=h[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let x=0,M=v.length;x<M;x++)g.push(v[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ub=0;class Sl extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=eo,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(s.blending=this.blending),this.side!==ws&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ah&&(s.blendSrc=this.blendSrc),this.blendDst!==Rh&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Wt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ba=new oe,lh=new oe,Hc=new oe,Ts=new oe,ch=new oe,Gc=new oe,uh=new oe;class R_{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){lh.copy(e).add(i).multiplyScalar(.5),Hc.copy(i).sub(e).normalize(),Ts.copy(this.origin).sub(lh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Hc),p=Ts.dot(this.direction),m=-Ts.dot(Hc),h=Ts.lengthSq(),g=Math.abs(1-f*f);let v,x,M,E;if(g>0)if(v=f*m-p,x=f*p-m,E=c*g,v>=0)if(x>=-E)if(x<=E){const C=1/g;v*=C,x*=C,M=v*(v+f*x+2*p)+x*(f*v+x+2*m)+h}else x=c,v=Math.max(0,-(f*x+p)),M=-v*v+x*(x+2*m)+h;else x=-c,v=Math.max(0,-(f*x+p)),M=-v*v+x*(x+2*m)+h;else x<=-E?(v=Math.max(0,-(-f*c+p)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+h):x<=E?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+h):(v=Math.max(0,-(f*c+p)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+h);else x=f>0?-c:c,v=Math.max(0,-(f*x+p)),M=-v*v+x*(x+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(lh).addScaledVector(Hc,x),M}intersectSphere(e,i){Ba.subVectors(e.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(p=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ba)!==null}intersectTriangle(e,i,s,l,c){ch.subVectors(i,e),Gc.subVectors(s,e),uh.crossVectors(ch,Gc);let f=this.direction.dot(uh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;Ts.subVectors(this.origin,e);const m=p*this.direction.dot(Gc.crossVectors(Ts,Gc));if(m<0)return null;const h=p*this.direction.dot(ch.cross(Ts));if(h<0||m+h>f)return null;const g=-p*Ts.dot(uh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class C_ extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ex=new wn,Zs=new R_,Vc=new bu,tx=new oe,kc=new oe,Wc=new oe,Xc=new oe,fh=new oe,qc=new oe,nx=new oe,Yc=new oe;class ja extends ui{constructor(e=new Qi,i=new C_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],v=c[m];g!==0&&(fh.fromBufferAttribute(v,e),f?qc.addScaledVector(fh,g):qc.addScaledVector(fh.sub(i),g))}i.add(qc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(c),Zs.copy(e.ray).recast(e.near),!(Vc.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Vc,tx)===null||Zs.origin.distanceToSquared(tx)>(e.far-e.near)**2))&&(ex.copy(c).invert(),Zs.copy(e.ray).applyMatrix4(ex),!(s.boundingBox!==null&&Zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Zs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const _=x[E],S=f[_.materialIndex],L=Math.max(_.start,M.start),F=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let N=L,I=F;N<I;N+=3){const P=p.getX(N),z=p.getX(N+1),T=p.getX(N+2);l=jc(this,S,e,s,h,g,v,P,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let _=E,S=C;_<S;_+=3){const L=p.getX(_),F=p.getX(_+1),N=p.getX(_+2);l=jc(this,f,e,s,h,g,v,L,F,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const _=x[E],S=f[_.materialIndex],L=Math.max(_.start,M.start),F=Math.min(m.count,Math.min(_.start+_.count,M.start+M.count));for(let N=L,I=F;N<I;N+=3){const P=N,z=N+1,T=N+2;l=jc(this,S,e,s,h,g,v,P,z,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let _=E,S=C;_<S;_+=3){const L=_,F=_+1,N=_+2;l=jc(this,f,e,s,h,g,v,L,F,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function Lb(r,e,i,s,l,c,f,p){let m;if(e.side===ci?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===ws,p),m===null)return null;Yc.copy(p),Yc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Yc);return h<i.near||h>i.far?null:{distance:h,point:Yc.clone(),object:r}}function jc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,kc),r.getVertexPosition(m,Wc),r.getVertexPosition(h,Xc);const g=Lb(r,e,i,s,kc,Wc,Xc,nx);if(g){const v=new oe;Yi.getBarycoord(nx,kc,Wc,Xc,v),l&&(g.uv=Yi.getInterpolatedAttribute(l,p,m,h,v,new Wt)),c&&(g.uv1=Yi.getInterpolatedAttribute(c,p,m,h,v,new Wt)),f&&(g.normal=Yi.getInterpolatedAttribute(f,p,m,h,v,new oe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new oe,materialIndex:0};Yi.getNormal(kc,Wc,Xc,x.normal),g.face=x,g.barycoord=v}return g}class Ob extends ti{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Yn,g=Yn,v,x){super(null,f,p,m,h,g,l,c,v,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new oe,Pb=new oe,Fb=new vt;class Qs{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=dh.subVectors(s,i).cross(Pb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(dh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Fb.getNormalMatrix(e),l=this.coplanarPoint(dh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new bu,Ib=new Wt(.5,.5),Zc=new oe;class w_{constructor(e=new Qs,i=new Qs,s=new Qs,l=new Qs,c=new Qs,f=new Qs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ua,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],v=c[5],x=c[6],M=c[7],E=c[8],C=c[9],_=c[10],S=c[11],L=c[12],F=c[13],N=c[14],I=c[15];if(l[0].setComponents(h-f,M-g,S-E,I-L).normalize(),l[1].setComponents(h+f,M+g,S+E,I+L).normalize(),l[2].setComponents(h+p,M+v,S+C,I+F).normalize(),l[3].setComponents(h-p,M-v,S-C,I-F).normalize(),s)l[4].setComponents(m,x,_,N).normalize(),l[5].setComponents(h-m,M-x,S-_,I-N).normalize();else if(l[4].setComponents(h-m,M-x,S-_,I-N).normalize(),i===ua)l[5].setComponents(h+m,M+x,S+_,I+N).normalize();else if(i===vu)l[5].setComponents(m,x,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);const i=Ib.distanceTo(e.center);return Ks.radius=.7071067811865476+i,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Zc.x=l.normal.x>0?e.max.x:e.min.x,Zc.y=l.normal.y>0?e.max.y:e.min.y,Zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zb extends Sl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ix=new wn,pp=new R_,Kc=new bu,Qc=new oe;class Bb extends ui{constructor(e=new Qi,i=new zb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(l),Kc.radius+=c,e.ray.intersectsSphere(Kc)===!1)return;ix.copy(l).invert(),pp.copy(e.ray).applyMatrix4(ix);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,v=s.attributes.position;if(h!==null){const x=Math.max(0,f.start),M=Math.min(h.count,f.start+f.count);for(let E=x,C=M;E<C;E++){const _=h.getX(E);Qc.fromBufferAttribute(v,_),ax(Qc,_,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let E=x,C=M;E<C;E++)Qc.fromBufferAttribute(v,E),ax(Qc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function ax(r,e,i,s,l,c,f){const p=pp.distanceSqToPoint(r);if(p<i){const m=new oe;pp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class N_ extends ti{constructor(e=[],i=ir,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class so extends ti{constructor(e,i,s=pa,l,c,f,p=Yn,m=Yn,h,g=Ya,v=1){if(g!==Ya&&g!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Hb extends so{constructor(e,i=pa,s=ir,l,c,f=Yn,p=Yn,m,h=Ya){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class D_ extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yl extends Qi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],v=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Wa(h,3)),this.setAttribute("normal",new Wa(g,3)),this.setAttribute("uv",new Wa(v,2));function E(C,_,S,L,F,N,I,P,z,T,O){const Y=N/z,k=I/T,j=N/2,ue=I/2,ve=P/2,K=z+1,B=T+1;let G=0,ne=0;const _e=new oe;for(let Re=0;Re<B;Re++){const U=Re*k-ue;for(let Z=0;Z<K;Z++){const Ae=Z*Y-j;_e[C]=Ae*L,_e[_]=U*F,_e[S]=ve,h.push(_e.x,_e.y,_e.z),_e[C]=0,_e[_]=0,_e[S]=P>0?1:-1,g.push(_e.x,_e.y,_e.z),v.push(Z/z),v.push(1-Re/T),G+=1}}for(let Re=0;Re<T;Re++)for(let U=0;U<z;U++){const Z=x+U+K*Re,Ae=x+U+K*(Re+1),Ce=x+(U+1)+K*(Re+1),Ge=x+(U+1)+K*Re;m.push(Z,Ae,Ge),m.push(Ae,Ce,Ge),ne+=6}p.addGroup(M,ne,O),M+=ne,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eu extends Qi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,v=e/p,x=i/m,M=[],E=[],C=[],_=[];for(let S=0;S<g;S++){const L=S*x-f;for(let F=0;F<h;F++){const N=F*v-c;E.push(N,-L,0),C.push(0,0,1),_.push(F/p),_.push(1-S/m)}}for(let S=0;S<m;S++)for(let L=0;L<p;L++){const F=L+h*S,N=L+h*(S+1),I=L+1+h*(S+1),P=L+1+h*S;M.push(F,N,P),M.push(N,I,P)}this.setIndex(M),this.setAttribute("position",new Wa(E,3)),this.setAttribute("normal",new Wa(C,3)),this.setAttribute("uv",new Wa(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.width,e.height,e.widthSegments,e.heightSegments)}}function ro(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(sx(l))l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(sx(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function ei(r){const e={};for(let i=0;i<r.length;i++){const s=ro(r[i]);for(const l in s)e[l]=s[l]}return e}function sx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Gb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function U_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const Vb={clone:ro,merge:ei};var kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kb,this.fragmentShader=Wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Ht().setHex(l.value);break;case"v2":this.uniforms[s].value=new Wt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[s].value=new An().fromArray(l.value);break;case"m3":this.uniforms[s].value=new vt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new wn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xb extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qb extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yb extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jc=new oe,$c=new lo,sa=new oe;class L_ extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wn,this.projectionMatrix=new wn,this.projectionMatrixInverse=new wn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jc,$c,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,sa.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Jc,$c,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const As=new oe,rx=new Wt,ox=new Wt;class Fi extends L_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(kd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,i){return this.getViewBounds(e,rx,ox),i.subVectors(ox,rx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(kd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class O_ extends L_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Kr=-90,Qr=1;class jb extends ui{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Fi(Kr,Qr,e,i);l.layers=this.layers,this.add(l);const c=new Fi(Kr,Qr,e,i);c.layers=this.layers,this.add(c);const f=new Fi(Kr,Qr,e,i);f.layers=this.layers,this.add(f);const p=new Fi(Kr,Qr,e,i);p.layers=this.layers,this.add(p);const m=new Fi(Kr,Qr,e,i);m.layers=this.layers,this.add(m);const h=new Fi(Kr,Qr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===vu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Zb extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zp=class zp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};zp.prototype.isMatrix2=!0;let lx=zp;function cx(r,e,i,s){const l=Kb(s);switch(i){case x_:return r*e;case S_:return r*e/l.components*l.byteLength;case Cp:return r*e/l.components*l.byteLength;case ar:return r*e*2/l.components*l.byteLength;case wp:return r*e*2/l.components*l.byteLength;case __:return r*e*3/l.components*l.byteLength;case ji:return r*e*4/l.components*l.byteLength;case Np:return r*e*4/l.components*l.byteLength;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:case Hh:return Math.max(r,16)*Math.max(e,8)/4;case Ih:case Bh:return Math.max(r,8)*Math.max(e,8)/2;case Gh:case Vh:case Wh:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kh:case hu:case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case op:case lp:case cp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case up:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pu:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Kb(r){switch(r){case Ii:case p_:return{byteLength:1,components:1};case hl:case m_:case qa:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case pa:case Tp:case ca:return{byteLength:4,components:1};case g_:case v_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);function P_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Qb(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,v=h.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,h,g),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const g=m.array,v=m.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,g);else{v.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<v.length;M++){const E=v[x],C=v[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,v[x]=C)}v.length=x+1;for(let M=0,E=v.length;M<E;M++){const C=v[M];r.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$b=`#ifdef USE_ALPHAHASH
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
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
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
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yE=`#define PI 3.141592653589793
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
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,WE=`#ifdef USE_ENVMAP
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
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
#endif`,KE=`uniform sampler2D dfgLUT;
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
}`,QE=`
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
#endif`,JE=`#if defined( RE_IndirectDiffuse )
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
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lT=`#if defined( USE_POINTS_UV )
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
#endif`,cT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
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
#endif`,mT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
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
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ET=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IT=`float getShadowMask() {
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
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
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
#endif`,HT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,VT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$T=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`#include <common>
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
}`,sA=`#if DEPTH_PACKING == 3200
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
}`,rA=`#define DISTANCE
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
}`,oA=`#define DISTANCE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
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
}`,fA=`uniform vec3 diffuse;
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
}`,dA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define MATCAP
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
}`,vA=`#define MATCAP
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
}`,xA=`#define NORMAL
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
}`,_A=`#define NORMAL
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
}`,SA=`#define PHONG
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
}`,yA=`#define PHONG
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
}`,MA=`#define STANDARD
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
}`,bA=`#define STANDARD
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
}`,EA=`#define TOON
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
}`,TA=`#define TOON
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
}`,AA=`uniform float size;
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
}`,RA=`uniform vec3 diffuse;
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
}`,CA=`#include <common>
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
}`,wA=`uniform vec3 color;
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
}`,NA=`uniform float rotation;
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
}`,DA=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Jb,alphahash_pars_fragment:$b,alphamap_fragment:eE,alphamap_pars_fragment:tE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:rE,batching_vertex:oE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:fE,bumpmap_pars_fragment:dE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:vE,color_pars_fragment:xE,color_pars_vertex:_E,color_vertex:SE,common:yE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:bE,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:RE,colorspace_fragment:CE,colorspace_pars_fragment:wE,envmap_fragment:NE,envmap_common_pars_fragment:DE,envmap_pars_fragment:UE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:WE,envmap_vertex:OE,fog_vertex:PE,fog_pars_vertex:FE,fog_fragment:IE,fog_pars_fragment:zE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:HE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:VE,lights_pars_begin:kE,lights_toon_fragment:XE,lights_toon_pars_fragment:qE,lights_phong_fragment:YE,lights_phong_pars_fragment:jE,lights_physical_fragment:ZE,lights_physical_pars_fragment:KE,lights_fragment_begin:QE,lights_fragment_maps:JE,lights_fragment_end:$E,lightprobes_pars_fragment:eT,logdepthbuf_fragment:tT,logdepthbuf_pars_fragment:nT,logdepthbuf_pars_vertex:iT,logdepthbuf_vertex:aT,map_fragment:sT,map_pars_fragment:rT,map_particle_fragment:oT,map_particle_pars_fragment:lT,metalnessmap_fragment:cT,metalnessmap_pars_fragment:uT,morphinstance_vertex:fT,morphcolor_vertex:dT,morphnormal_vertex:hT,morphtarget_pars_vertex:pT,morphtarget_vertex:mT,normal_fragment_begin:gT,normal_fragment_maps:vT,normal_pars_fragment:xT,normal_pars_vertex:_T,normal_vertex:ST,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:ET,iridescence_pars_fragment:TT,opaque_fragment:AT,packing:RT,premultiplied_alpha_fragment:CT,project_vertex:wT,dithering_fragment:NT,dithering_pars_fragment:DT,roughnessmap_fragment:UT,roughnessmap_pars_fragment:LT,shadowmap_pars_fragment:OT,shadowmap_pars_vertex:PT,shadowmap_vertex:FT,shadowmask_pars_fragment:IT,skinbase_vertex:zT,skinning_pars_vertex:BT,skinning_vertex:HT,skinnormal_vertex:GT,specularmap_fragment:VT,specularmap_pars_fragment:kT,tonemapping_fragment:WT,tonemapping_pars_fragment:XT,transmission_fragment:qT,transmission_pars_fragment:YT,uv_pars_fragment:jT,uv_pars_vertex:ZT,uv_vertex:KT,worldpos_vertex:QT,background_vert:JT,background_frag:$T,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:aA,depth_frag:sA,distance_vert:rA,distance_frag:oA,equirect_vert:lA,equirect_frag:cA,linedashed_vert:uA,linedashed_frag:fA,meshbasic_vert:dA,meshbasic_frag:hA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:vA,meshnormal_vert:xA,meshnormal_frag:_A,meshphong_vert:SA,meshphong_frag:yA,meshphysical_vert:MA,meshphysical_frag:bA,meshtoon_vert:EA,meshtoon_frag:TA,points_vert:AA,points_frag:RA,shadow_vert:CA,shadow_frag:wA,sprite_vert:NA,sprite_frag:DA},ke={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},la={basic:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ei([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ei([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ei([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ei([ke.points,ke.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ei([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ei([ke.common,ke.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ei([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ei([ke.sprite,ke.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:ei([ke.common,ke.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:ei([ke.lights,ke.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};la.physical={uniforms:ei([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const eu={r:0,b:0,g:0},UA=new wn,F_=new vt;F_.set(-1,0,0,0,1,0,0,0,1);function LA(r,e,i,s,l,c){const f=new Ht(0);let p=l===!0?0:1,m,h,g=null,v=0,x=null;function M(L){let F=L.isScene===!0?L.background:null;if(F&&F.isTexture){const N=L.backgroundBlurriness>0;F=e.get(F,N)}return F}function E(L){let F=!1;const N=M(L);N===null?_(f,p):N&&N.isColor&&(_(N,1),F=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(L,F){const N=M(F);N&&(N.isCubeTexture||N.mapping===Mu)?(h===void 0&&(h=new ja(new yl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ro(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(UA.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(F_),h.material.toneMapped=Ot.getTransfer(N.colorSpace)!==$t,(g!==N||v!==N.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,g=N,v=N.version,x=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new ja(new Eu(2,2),new Ki({name:"BackgroundMaterial",uniforms:ro(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(N.colorSpace)!==$t,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=N,v=N.version,x=r.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,F){L.getRGB(eu,U_(r)),i.buffers.color.setClear(eu.r,eu.g,eu.b,F,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,F=1){f.set(L),p=F,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(f,p)},render:E,addToRenderList:C,dispose:S}}function OA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(k,j,ue,ve,K){let B=!1;const G=v(k,ve,ue,j);c!==G&&(c=G,h(c.object)),B=M(k,ve,ue,K),B&&E(k,ve,ue,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,N(k,j,ue,ve),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function m(){return r.createVertexArray()}function h(k){return r.bindVertexArray(k)}function g(k){return r.deleteVertexArray(k)}function v(k,j,ue,ve){const K=ve.wireframe===!0;let B=s[j.id];B===void 0&&(B={},s[j.id]=B);const G=k.isInstancedMesh===!0?k.id:0;let ne=B[G];ne===void 0&&(ne={},B[G]=ne);let _e=ne[ue.id];_e===void 0&&(_e={},ne[ue.id]=_e);let Re=_e[K];return Re===void 0&&(Re=x(m()),_e[K]=Re),Re}function x(k){const j=[],ue=[],ve=[];for(let K=0;K<i;K++)j[K]=0,ue[K]=0,ve[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ue,attributeDivisors:ve,object:k,attributes:{},index:null}}function M(k,j,ue,ve){const K=c.attributes,B=j.attributes;let G=0;const ne=ue.getAttributes();for(const _e in ne)if(ne[_e].location>=0){const U=K[_e];let Z=B[_e];if(Z===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;G++}return c.attributesNum!==G||c.index!==ve}function E(k,j,ue,ve){const K={},B=j.attributes;let G=0;const ne=ue.getAttributes();for(const _e in ne)if(ne[_e].location>=0){let U=B[_e];U===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),K[_e]=Z,G++}c.attributes=K,c.attributesNum=G,c.index=ve}function C(){const k=c.newAttributes;for(let j=0,ue=k.length;j<ue;j++)k[j]=0}function _(k){S(k,0)}function S(k,j){const ue=c.newAttributes,ve=c.enabledAttributes,K=c.attributeDivisors;ue[k]=1,ve[k]===0&&(r.enableVertexAttribArray(k),ve[k]=1),K[k]!==j&&(r.vertexAttribDivisor(k,j),K[k]=j)}function L(){const k=c.newAttributes,j=c.enabledAttributes;for(let ue=0,ve=j.length;ue<ve;ue++)j[ue]!==k[ue]&&(r.disableVertexAttribArray(ue),j[ue]=0)}function F(k,j,ue,ve,K,B,G){G===!0?r.vertexAttribIPointer(k,j,ue,K,B):r.vertexAttribPointer(k,j,ue,ve,K,B)}function N(k,j,ue,ve){C();const K=ve.attributes,B=ue.getAttributes(),G=j.defaultAttributeValues;for(const ne in B){const _e=B[ne];if(_e.location>=0){let Re=K[ne];if(Re===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(Re=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(Re=k.instanceColor)),Re!==void 0){const U=Re.normalized,Z=Re.itemSize,Ae=e.get(Re);if(Ae===void 0)continue;const Ce=Ae.buffer,Ge=Ae.type,$=Ae.bytesPerElement,ye=Ge===r.INT||Ge===r.UNSIGNED_INT||Re.gpuType===Tp;if(Re.isInterleavedBufferAttribute){const Te=Re.data,We=Te.stride,lt=Re.offset;if(Te.isInstancedInterleavedBuffer){for(let $e=0;$e<_e.locationSize;$e++)S(_e.location+$e,Te.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<_e.locationSize;$e++)_(_e.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let $e=0;$e<_e.locationSize;$e++)F(_e.location+$e,Z/_e.locationSize,Ge,U,We*$,(lt+Z/_e.locationSize*$e)*$,ye)}else{if(Re.isInstancedBufferAttribute){for(let Te=0;Te<_e.locationSize;Te++)S(_e.location+Te,Re.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Te=0;Te<_e.locationSize;Te++)_(_e.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Te=0;Te<_e.locationSize;Te++)F(_e.location+Te,Z/_e.locationSize,Ge,U,Z*$,Z/_e.locationSize*Te*$,ye)}}else if(G!==void 0){const U=G[ne];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(_e.location,U);break;case 3:r.vertexAttrib3fv(_e.location,U);break;case 4:r.vertexAttrib4fv(_e.location,U);break;default:r.vertexAttrib1fv(_e.location,U)}}}}L()}function I(){O();for(const k in s){const j=s[k];for(const ue in j){const ve=j[ue];for(const K in ve){const B=ve[K];for(const G in B)g(B[G].object),delete B[G];delete ve[K]}}delete s[k]}}function P(k){if(s[k.id]===void 0)return;const j=s[k.id];for(const ue in j){const ve=j[ue];for(const K in ve){const B=ve[K];for(const G in B)g(B[G].object),delete B[G];delete ve[K]}}delete s[k.id]}function z(k){for(const j in s){const ue=s[j];for(const ve in ue){const K=ue[ve];if(K[k.id]===void 0)continue;const B=K[k.id];for(const G in B)g(B[G].object),delete B[G];delete K[k.id]}}}function T(k){for(const j in s){const ue=s[j],ve=k.isInstancedMesh===!0?k.id:0,K=ue[ve];if(K!==void 0){for(const B in K){const G=K[B];for(const ne in G)g(G[ne].object),delete G[ne];delete K[B]}delete ue[ve],Object.keys(ue).length===0&&delete s[j]}}}function O(){Y(),f=!0,c!==l&&(c=l,h(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:_,disableUnusedAttributes:L}}function PA(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,g){g!==0&&(r.drawArraysInstanced(s,m,h,g),i.update(h,s,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,g);let x=0;for(let M=0;M<g;M++)x+=h[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function FA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==ji&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ca&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ft("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:L,maxVaryings:F,maxFragmentUniforms:N,maxSamples:I,samples:P}}function IA(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Qs,p=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||s!==0||l;return l=x,s=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,M){const E=v.clippingPlanes,C=v.clipIntersection,_=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!_)c?g(null):h();else{const L=c?0:s,F=L*4;let N=S.clippingState||null;m.value=N,N=g(E,x,F,M);for(let I=0;I!==F;++I)N[I]=i[I];S.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,M,E){const C=v!==null?v.length:0;let _=null;if(C!==0){if(_=m.value,E!==!0||_===null){const S=M+C*4,L=x.matrixWorldInverse;p.getNormalMatrix(L),(_===null||_.length<S)&&(_=new Float32Array(S));for(let F=0,N=M;F!==C;++F,N+=4)f.copy(v[F]).applyMatrix4(L,p),f.normal.toArray(_,N),_[N+3]=f.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Cs=4,ux=[.125,.215,.35,.446,.526,.582],er=20,zA=256,rl=new O_,fx=new Ht;let hh=null,ph=0,mh=0,gh=!1;const BA=new oe;class dx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=BA}=c;hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ir||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:qa,format:ji,colorSpace:mu,depthBuffer:!1},l=hx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HA(c)),this._blurMaterial=VA(c,e,i),this._ggxMaterial=GA(c,e,i)}return l}_compileMaterial(e){const i=new ja(new Qi,e);this._renderer.compile(i,rl)}_sceneToCubeUV(e,i,s,l,c){const m=new Fi(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(fx),v.toneMapping=da,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ja(new yl,new C_({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let S=!1;const L=e.background;L?L.isColor&&(_.color.copy(L),e.background=null,S=!0):(_.color.copy(fx),S=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[F],c.y,c.z)):N===1?(m.up.set(0,0,h[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[F],c.z)):(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[F]));const I=this._cubeSize;Jr(l,N*I,F>2?I:0,I,I),v.setRenderTarget(l),S&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=x,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ir||e.mapping===ao;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Jr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,rl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),x=0+h*1.25,M=v*x,{_lodMax:E}=this,C=this._sizeLods[s],_=3*C*(s>E-Cs?s-E+Cs:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Jr(c,_,S,3*C,2*C),l.setRenderTarget(c),l.render(p,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Jr(e,_,S,3*C,2*C),l.setRenderTarget(e),l.render(p,rl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=h;const x=h.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*er-1),C=c/E,_=isFinite(c)?1+Math.floor(g*C):er;_>er&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${er}`);const S=[];let L=0;for(let z=0;z<er;++z){const T=z/C,O=Math.exp(-T*T/2);S.push(O),z===0?L+=O:z<_&&(L+=2*O)}for(let z=0;z<S.length;z++)S[z]=S[z]/L;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=S,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:F}=this;x.dTheta.value=E,x.mipInt.value=F-s;const N=this._sizeLods[l],I=3*N*(l>F-Cs?l-F+Cs:0),P=4*(this._cubeSize-N);Jr(i,I,P,3*N,2*N),m.setRenderTarget(i),m.render(v,rl)}}function HA(r){const e=[],i=[],s=[];let l=r;const c=r-Cs+1+ux.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-Cs?m=ux[f-r+Cs-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,v=1+h,x=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,C=3,_=2,S=1,L=new Float32Array(C*E*M),F=new Float32Array(_*E*M),N=new Float32Array(S*E*M);for(let P=0;P<M;P++){const z=P%3*2/3-1,T=P>2?0:-1,O=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];L.set(O,C*E*P),F.set(x,_*E*P);const Y=[P,P,P,P,P,P];N.set(Y,S*E*P)}const I=new Qi;I.setAttribute("position",new bi(L,C)),I.setAttribute("uv",new bi(F,_)),I.setAttribute("faceIndex",new bi(N,S)),s.push(new ja(I,null)),l>Cs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function hx(r,e,i){const s=new ha(r,e,i);return s.texture.mapping=Mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function GA(r,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function VA(r,e,i){const s=new Float32Array(er),l=new oe(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function px(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function mx(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}class I_ extends ha{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new N_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new yl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ci,blending:Va});c.uniforms.tEquirect.value=i;const f=new ja(l,c),p=i.minFilter;return i.minFilter===tr&&(i.minFilter=Jn),new jb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function kA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?f(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===Hd||M===Gd)if(e.has(x)){const E=e.get(x).texture;return p(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const C=new I_(E.height);return C.fromEquirectangularTexture(r,x),e.set(x,C),x.addEventListener("dispose",h),p(C.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const M=x.mapping,E=M===Hd||M===Gd,C=M===ir||M===ao;if(E||C){let _=i.get(x);const S=_!==void 0?_.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==S)return s===null&&(s=new dx(r)),_=E?s.fromEquirectangular(x,_):s.fromCubemap(x,_),_.texture.pmremVersion=x.pmremVersion,i.set(x,_),_.texture;if(_!==void 0)return _.texture;{const L=x.image;return E&&L&&L.height>0||C&&L&&m(L)?(s===null&&(s=new dx(r)),_=E?s.fromEquirectangular(x):s.fromCubemap(x),_.texture.pmremVersion=x.pmremVersion,i.set(x,_),x.addEventListener("dispose",g),_.texture):null}}}return x}function p(x,M){return M===Hd?x.mapping=ir:M===Gd&&(x.mapping=ao),x}function m(x){let M=0;const E=6;for(let C=0;C<E;C++)x[C]!==void 0&&M++;return M===E}function h(x){const M=x.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function g(x){const M=x.target;M.removeEventListener("dispose",g);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function WA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&to("WebGLRenderer: "+s+" extension not supported."),l}}}function XA(r,e,i,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function h(v){const x=[],M=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const L=M.array;C=M.version;for(let F=0,N=L.length;F<N;F+=3){const I=L[F+0],P=L[F+1],z=L[F+2];x.push(I,P,P,z,z,I)}}else{const L=E.array;C=E.version;for(let F=0,N=L.length/3-1;F<N;F+=3){const I=F+0,P=F+1,z=F+2;x.push(I,P,P,z,z,I)}}const _=new(E.count>=65535?A_:T_)(x,1);_.version=C;const S=c.get(v);S&&e.remove(S),c.set(v,_)}function g(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:g}}function qA(r,e,i){let s;function l(v){s=v}let c,f;function p(v){c=v.type,f=v.bytesPerElement}function m(v,x){r.drawElements(s,x,c,v*f),i.update(x,s,1)}function h(v,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,v*f,M),i.update(x,s,M))}function g(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,v,0,M);let C=0;for(let _=0;_<M;_++)C+=x[_];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function YA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:It("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function jA(r,e,i){const s=new WeakMap,l=new An;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(p);if(x===void 0||x.count!==v){let Y=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var M=Y;x!==void 0&&x.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],L=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let N=0;E===!0&&(N=1),C===!0&&(N=2),_===!0&&(N=3);let I=p.attributes.position.count*N,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*P*4*v),T=new M_(z,I,P,v);T.type=ca,T.needsUpdate=!0;const O=N*4;for(let k=0;k<v;k++){const j=S[k],ue=L[k],ve=F[k],K=I*P*4*k;for(let B=0;B<j.count;B++){const G=B*O;E===!0&&(l.fromBufferAttribute(j,B),z[K+G+0]=l.x,z[K+G+1]=l.y,z[K+G+2]=l.z,z[K+G+3]=0),C===!0&&(l.fromBufferAttribute(ue,B),z[K+G+4]=l.x,z[K+G+5]=l.y,z[K+G+6]=l.z,z[K+G+7]=0),_===!0&&(l.fromBufferAttribute(ve,B),z[K+G+8]=l.x,z[K+G+9]=l.y,z[K+G+10]=l.z,z[K+G+11]=ve.itemSize===4?l.w:1)}}x={count:v,texture:T,size:new Wt(I,P)},s.set(p,x),p.addEventListener("dispose",Y)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let _=0;_<h.length;_++)E+=h[_];const C=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function ZA(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,v=h.geometry,x=e.get(h,v);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const KA={[r_]:"LINEAR_TONE_MAPPING",[o_]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[c_]:"ACES_FILMIC_TONE_MAPPING",[f_]:"AGX_TONE_MAPPING",[d_]:"NEUTRAL_TONE_MAPPING",[u_]:"CUSTOM_TONE_MAPPING"};function QA(r,e,i,s,l,c){const f=new ha(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new so(e,i):void 0}),p=new ha(e,i,{type:qa,depthBuffer:!1,stencilBuffer:!1}),m=new Qi;m.setAttribute("position",new Wa([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wa([0,2,0,0,2,0],2));const h=new Xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new ja(m,h),v=new O_(-1,1,1,-1,0,1);let x=null,M=null,E=!1,C,_=null,S=[],L=!1;this.setSize=function(F,N){f.setSize(F,N),p.setSize(F,N);for(let I=0;I<S.length;I++){const P=S[I];P.setSize&&P.setSize(F,N)}},this.setEffects=function(F){S=F,L=S.length>0&&S[0].isRenderPass===!0;const N=f.width,I=f.height;for(let P=0;P<S.length;P++){const z=S[P];z.setSize&&z.setSize(N,I)}},this.begin=function(F,N){if(E||F.toneMapping===da&&S.length===0)return!1;if(_=N,N!==null){const I=N.width,P=N.height;(f.width!==I||f.height!==P)&&this.setSize(I,P)}return L===!1&&F.setRenderTarget(f),C=F.toneMapping,F.toneMapping=da,!0},this.hasRenderPass=function(){return L},this.end=function(F,N){F.toneMapping=C,E=!0;let I=f,P=p;for(let z=0;z<S.length;z++){const T=S[z];if(T.enabled!==!1&&(T.render(F,P,I,N),T.needsSwap!==!1)){const O=I;I=P,P=O}}if(x!==F.outputColorSpace||M!==F.toneMapping){x=F.outputColorSpace,M=F.toneMapping,h.defines={},Ot.getTransfer(x)===$t&&(h.defines.SRGB_TRANSFER="");const z=KA[M];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,F.setRenderTarget(_),F.render(g,v),_=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const z_=new ti,mp=new so(1,1),B_=new M_,H_=new Sb,G_=new N_,gx=[],vx=[],xx=new Float32Array(16),_x=new Float32Array(9),Sx=new Float32Array(4);function co(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=gx[l];if(c===void 0&&(c=new Float32Array(l),gx[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function In(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function zn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Au(r,e){let i=vx[e];i===void 0&&(i=new Int32Array(e),vx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function JA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function $A(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(In(i,e))return;r.uniform2fv(this.addr,e),zn(i,e)}}function e2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(In(i,e))return;r.uniform3fv(this.addr,e),zn(i,e)}}function t2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(In(i,e))return;r.uniform4fv(this.addr,e),zn(i,e)}}function n2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(In(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(In(i,s))return;Sx.set(s),r.uniformMatrix2fv(this.addr,!1,Sx),zn(i,s)}}function i2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(In(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(In(i,s))return;_x.set(s),r.uniformMatrix3fv(this.addr,!1,_x),zn(i,s)}}function a2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(In(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(In(i,s))return;xx.set(s),r.uniformMatrix4fv(this.addr,!1,xx),zn(i,s)}}function s2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function r2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(In(i,e))return;r.uniform2iv(this.addr,e),zn(i,e)}}function o2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(In(i,e))return;r.uniform3iv(this.addr,e),zn(i,e)}}function l2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(In(i,e))return;r.uniform4iv(this.addr,e),zn(i,e)}}function c2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function u2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(In(i,e))return;r.uniform2uiv(this.addr,e),zn(i,e)}}function f2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(In(i,e))return;r.uniform3uiv(this.addr,e),zn(i,e)}}function d2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(In(i,e))return;r.uniform4uiv(this.addr,e),zn(i,e)}}function h2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(mp.compareFunction=i.isReversedDepthBuffer()?Up:Dp,c=mp):c=z_,i.setTexture2D(e||c,l)}function p2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||H_,l)}function m2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||G_,l)}function g2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||B_,l)}function v2(r){switch(r){case 5126:return JA;case 35664:return $A;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return a2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return o2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}function x2(r,e){r.uniform1fv(this.addr,e)}function _2(r,e){const i=co(e,this.size,2);r.uniform2fv(this.addr,i)}function S2(r,e){const i=co(e,this.size,3);r.uniform3fv(this.addr,i)}function y2(r,e){const i=co(e,this.size,4);r.uniform4fv(this.addr,i)}function M2(r,e){const i=co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function b2(r,e){const i=co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function E2(r,e){const i=co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function T2(r,e){r.uniform1iv(this.addr,e)}function A2(r,e){r.uniform2iv(this.addr,e)}function R2(r,e){r.uniform3iv(this.addr,e)}function C2(r,e){r.uniform4iv(this.addr,e)}function w2(r,e){r.uniform1uiv(this.addr,e)}function N2(r,e){r.uniform2uiv(this.addr,e)}function D2(r,e){r.uniform3uiv(this.addr,e)}function U2(r,e){r.uniform4uiv(this.addr,e)}function L2(r,e,i){const s=this.cache,l=e.length,c=Au(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=mp:f=z_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function O2(r,e,i){const s=this.cache,l=e.length,c=Au(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||H_,c[f])}function P2(r,e,i){const s=this.cache,l=e.length,c=Au(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||G_,c[f])}function F2(r,e,i){const s=this.cache,l=e.length,c=Au(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||B_,c[f])}function I2(r){switch(r){case 5126:return x2;case 35664:return _2;case 35665:return S2;case 35666:return y2;case 35674:return M2;case 35675:return b2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return A2;case 35668:case 35672:return R2;case 35669:case 35673:return C2;case 5125:return w2;case 36294:return N2;case 36295:return D2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return F2}}class z2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=v2(i.type)}}class B2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=I2(i.type)}}class H2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function yx(r,e){r.seq.push(e),r.map[e.id]=e}function G2(r,e,i){const s=r.name,l=s.length;for(vh.lastIndex=0;;){const c=vh.exec(s),f=vh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){yx(i,h===void 0?new z2(p,r,e):new B2(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new H2(p),yx(i,v)),i=v}}}class fu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);G2(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Mx(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const V2=37297;let k2=0;function W2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const bx=new vt;function X2(r){Ot._getMatrix(bx,Ot.workingColorSpace,r);const e=`mat3( ${bx.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(r)){case gu:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ex(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+W2(r.getShaderSource(e),p)}else return c}function q2(r,e){const i=X2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Y2={[r_]:"Linear",[o_]:"Reinhard",[l_]:"Cineon",[c_]:"ACESFilmic",[f_]:"AgX",[d_]:"Neutral",[u_]:"Custom"};function j2(r,e){const i=Y2[e];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const tu=new oe;function Z2(){Ot.getLuminanceCoefficients(tu);const r=tu.x.toFixed(4),e=tu.y.toFixed(4),i=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function Q2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function J2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function ul(r){return r!==""}function Tx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ax(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $2=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(r){return r.replace($2,tR)}const eR=new Map;function tR(r,e){let i=Mt[e];if(i===void 0){const s=eR.get(e);if(s!==void 0)i=Mt[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gp(i)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(r){return r.replace(nR,iR)}function iR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Cx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aR={[ru]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function sR(r){return aR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rR={[ir]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE",[Mu]:"ENVMAP_TYPE_CUBE_UV"};function oR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":rR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const lR={[ao]:"ENVMAP_MODE_REFRACTION"};function cR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uR={[s_]:"ENVMAP_BLENDING_MULTIPLY",[$1]:"ENVMAP_BLENDING_MIX",[eb]:"ENVMAP_BLENDING_ADD"};function fR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":uR[r.combine]||"ENVMAP_BLENDING_NONE"}function dR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function hR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=sR(i),h=oR(i),g=cR(i),v=fR(i),x=dR(i),M=K2(i),E=Q2(c),C=l.createProgram();let _,S,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ul).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ul).join(`
`),S.length>0&&(S+=`
`)):(_=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),S=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==da?"#define TONE_MAPPING":"",i.toneMapping!==da?Mt.tonemapping_pars_fragment:"",i.toneMapping!==da?j2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,q2("linearToOutputTexel",i.outputColorSpace),Z2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ul).join(`
`)),f=gp(f),f=Tx(f,i),f=Ax(f,i),p=gp(p),p=Tx(p,i),p=Ax(p,i),f=Rx(f),p=Rx(p),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",i.glslVersion===Hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=L+_+f,N=L+S+p,I=Mx(l,l.VERTEX_SHADER,F),P=Mx(l,l.FRAGMENT_SHADER,N);l.attachShader(C,I),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(k){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(C)||"",ue=l.getShaderInfoLog(I)||"",ve=l.getShaderInfoLog(P)||"",K=j.trim(),B=ue.trim(),G=ve.trim();let ne=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,P);else{const Re=Ex(l,I,"vertex"),U=Ex(l,P,"fragment");It("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+Re+`
`+U)}else K!==""?ft("WebGLProgram: Program Info Log:",K):(B===""||G==="")&&(_e=!1);_e&&(k.diagnostics={runnable:ne,programLog:K,vertexShader:{log:B,prefix:_},fragmentShader:{log:G,prefix:S}})}l.deleteShader(I),l.deleteShader(P),T=new fu(l,C),O=J2(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,V2)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=k2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=P,this}let pR=0;class mR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new gR(e),i.set(e,s)),s}}class gR{constructor(e){this.id=pR++,this.code=e,this.usedTimes=0}}function vR(r){return r===ar||r===hu||r===pu}function xR(r,e,i,s,l,c){const f=new b_,p=new mR,m=new Set,h=[],g=new Map,v=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,O,Y,k,j,ue){const ve=k.fog,K=j.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ne=e.get(T.envMap||B,G),_e=ne&&ne.mapping===Mu?ne.image.height:null,Re=M[T.type];T.precision!==null&&(x=s.getMaxPrecision(T.precision),x!==T.precision&&ft("WebGLProgram.getParameters:",T.precision,"not supported, using",x,"instead."));const U=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Z=U!==void 0?U.length:0;let Ae=0;K.morphAttributes.position!==void 0&&(Ae=1),K.morphAttributes.normal!==void 0&&(Ae=2),K.morphAttributes.color!==void 0&&(Ae=3);let Ce,Ge,$,ye;if(Re){const je=la[Re];Ce=je.vertexShader,Ge=je.fragmentShader}else{Ce=T.vertexShader,Ge=T.fragmentShader;const je=p.getVertexShaderStage(T),un=p.getFragmentShaderStage(T);p.update(T,je,un),$=je.id,ye=un.id}const Te=r.getRenderTarget(),We=r.state.buffers.depth.getReversed(),lt=j.isInstancedMesh===!0,$e=j.isBatchedMesh===!0,en=!!T.map,_t=!!T.matcap,rt=!!ne,mt=!!T.aoMap,dt=!!T.lightMap,fn=!!T.bumpMap&&T.wireframe===!1,dn=!!T.normalMap,rn=!!T.displacementMap,xn=!!T.emissiveMap,Gt=!!T.metalnessMap,hn=!!T.roughnessMap,q=T.anisotropy>0,Vt=T.clearcoat>0,At=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,Q=T.transmission>0,ae=q&&!!T.anisotropyMap,de=Vt&&!!T.clearcoatMap,we=Vt&&!!T.clearcoatNormalMap,Oe=Vt&&!!T.clearcoatRoughnessMap,he=D&&!!T.iridescenceMap,pe=D&&!!T.iridescenceThicknessMap,Ue=b&&!!T.sheenColorMap,Ve=b&&!!T.sheenRoughnessMap,Fe=!!T.specularMap,Ie=!!T.specularColorMap,Je=!!T.specularIntensityMap,it=Q&&!!T.transmissionMap,ct=Q&&!!T.thicknessMap,X=!!T.gradientMap,De=!!T.alphaMap,ge=T.alphaTest>0,Le=!!T.alphaHash,ze=!!T.extensions;let be=da;T.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(be=r.toneMapping);const Ke={shaderID:Re,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ge,defines:T.defines,customVertexShaderID:$,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:x,batching:$e,batchingColor:$e&&j._colorsTexture!==null,instancing:lt,instancingColor:lt&&j.instanceColor!==null,instancingMorph:lt&&j.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:en,matcap:_t,envMap:rt,envMapMode:rt&&ne.mapping,envMapCubeUVHeight:_e,aoMap:mt,lightMap:dt,bumpMap:fn,normalMap:dn,displacementMap:rn,emissiveMap:xn,normalMapObjectSpace:dn&&T.normalMapType===ib,normalMapTangentSpace:dn&&T.normalMapType===Iv,packedNormalMap:dn&&T.normalMapType===Iv&&vR(T.normalMap.format),metalnessMap:Gt,roughnessMap:hn,anisotropy:q,anisotropyMap:ae,clearcoat:Vt,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,dispersion:At,iridescence:D,iridescenceMap:he,iridescenceThicknessMap:pe,sheen:b,sheenColorMap:Ue,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:Je,transmission:Q,transmissionMap:it,thicknessMap:ct,gradientMap:X,opaque:T.transparent===!1&&T.blending===eo&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:Le,combine:T.combine,mapUv:en&&E(T.map.channel),aoMapUv:mt&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:fn&&E(T.bumpMap.channel),normalMapUv:dn&&E(T.normalMap.channel),displacementMapUv:rn&&E(T.displacementMap.channel),emissiveMapUv:xn&&E(T.emissiveMap.channel),metalnessMapUv:Gt&&E(T.metalnessMap.channel),roughnessMapUv:hn&&E(T.roughnessMap.channel),anisotropyMapUv:ae&&E(T.anisotropyMap.channel),clearcoatMapUv:de&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(T.sheenRoughnessMap.channel),specularMapUv:Fe&&E(T.specularMap.channel),specularColorMapUv:Ie&&E(T.specularColorMap.channel),specularIntensityMapUv:Je&&E(T.specularIntensityMap.channel),transmissionMapUv:it&&E(T.transmissionMap.channel),thicknessMapUv:ct&&E(T.thicknessMap.channel),alphaMapUv:De&&E(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(dn||q),vertexNormals:!!K.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(en||De),fog:!!ve,useFog:T.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||K.attributes.normal===void 0&&dn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:We,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ae,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:en&&T.map.isVideoTexture===!0&&Ot.getTransfer(T.map.colorSpace)===$t,decodeVideoTextureEmissive:xn&&T.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(T.emissiveMap.colorSpace)===$t,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ha,flipSided:T.side===ci,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function _(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)O.push(Y),O.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(O,T),L(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function S(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function L(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const O=M[T.type];let Y;if(O){const k=la[O];Y=Vb.clone(k.uniforms)}else Y=T.uniforms;return Y}function N(T,O){let Y=g.get(O);return Y!==void 0?++Y.usedTimes:(Y=new hR(r,O,T,l),h.push(Y),g.set(O,Y)),Y}function I(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function P(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:F,acquireProgram:N,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:z}}function _R(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function SR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function wx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function p(x,M,E,C,_,S){let L=r[e];return L===void 0?(L={id:x.id,object:x,geometry:M,material:E,materialVariant:f(x),groupOrder:C,renderOrder:x.renderOrder,z:_,group:S},r[e]=L):(L.id=x.id,L.object=x,L.geometry=M,L.material=E,L.materialVariant=f(x),L.groupOrder=C,L.renderOrder=x.renderOrder,L.z=_,L.group=S),e++,L}function m(x,M,E,C,_,S){const L=p(x,M,E,C,_,S);E.transmission>0?s.push(L):E.transparent===!0?l.push(L):i.push(L)}function h(x,M,E,C,_,S){const L=p(x,M,E,C,_,S);E.transmission>0?s.unshift(L):E.transparent===!0?l.unshift(L):i.unshift(L)}function g(x,M,E){i.length>1&&i.sort(x||SR),s.length>1&&s.sort(M||wx),l.length>1&&l.sort(M||wx),E&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let x=e,M=r.length;x<M;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:g}}function yR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Nx,r.set(s,[f])):l>=c.length?(f=new Nx,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function MR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Ht};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":i={color:new Ht,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=i,i}}}function bR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let ER=0;function TR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function AR(r){const e=new MR,i=bR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new oe);const l=new oe,c=new wn,f=new wn;function p(h){let g=0,v=0,x=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,E=0,C=0,_=0,S=0,L=0,F=0,N=0,I=0,P=0,z=0;h.sort(TR);for(let O=0,Y=h.length;O<Y;O++){const k=h[O],j=k.color,ue=k.intensity,ve=k.distance;let K=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ar?K=k.shadow.map.texture:K=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*ue,v+=j.g*ue,x+=j.b*ue;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],ue);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,ne=i.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,s.directionalShadow[M]=ne,s.directionalShadowMap[M]=K,s.directionalShadowMatrix[M]=k.shadow.matrix,L++}s.directional[M]=B,M++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(j).multiplyScalar(ue),B.distance=ve,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[C]=B;const G=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&P++),s.spotLightMatrix[C]=G.matrix,k.castShadow){const ne=i.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,s.spotShadow[C]=ne,s.spotShadowMap[C]=K,N++}C++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(j).multiplyScalar(ue),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[_]=B,_++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const G=k.shadow,ne=i.get(k);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,s.pointShadow[E]=ne,s.pointShadowMap[E]=K,s.pointShadowMatrix[E]=k.shadow.matrix,F++}s.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(ue),B.groundColor.copy(k.groundColor).multiplyScalar(ue),s.hemi[S]=B,S++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==L||T.numPointShadows!==F||T.numSpotShadows!==N||T.numSpotMaps!==I||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=_,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=N+I-P,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=L,T.numPointShadows=F,T.numSpotShadows=N,T.numSpotMaps=I,T.numLightProbes=z,s.version=ER++)}function m(h,g){let v=0,x=0,M=0,E=0,C=0;const _=g.matrixWorldInverse;for(let S=0,L=h.length;S<L;S++){const F=h[S];if(F.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),v++}else if(F.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),M++}else if(F.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(_),f.identity(),c.copy(F.matrixWorld),c.premultiply(_),f.extractRotation(c),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(F.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(F.matrixWorld),N.position.applyMatrix4(_),x++}else if(F.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(F.matrixWorld),N.direction.transformDirection(_),C++}}}return{setup:p,setupView:m,state:s}}function Dx(r){const e=new AR(r),i=[],s=[],l=[];function c(x){v.camera=x,i.length=0,s.length=0,l.length=0}function f(x){i.push(x)}function p(x){s.push(x)}function m(x){l.push(x)}function h(){e.setup(i)}function g(x){e.setupView(i,x)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function RR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Dx(r),e.set(l,[p])):c>=f.length?(p=new Dx(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
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
}`,NR=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],DR=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Ux=new wn,ol=new oe,xh=new oe;function UR(r,e,i){let s=new w_;const l=new Wt,c=new Wt,f=new An,p=new qb,m=new Yb,h={},g=i.maxTextureSize,v={[ws]:ci,[ci]:ws,[Ha]:Ha},x=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Qi;E.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ja(E,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let S=this.type;this.render=function(P,z,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===O1&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const O=r.getRenderTarget(),Y=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Va),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ue=S!==this.type;ue&&z.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(K=>K.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,K=P.length;ve<K;ve++){const B=P[ve],G=B.shadow;if(G===void 0){ft("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();l.multiply(ne),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ne.x),l.x=c.x*ne.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ne.y),l.y=c.y*ne.y,G.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||ue===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===cl){if(B.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ha(l.x,l.y,{format:ar,type:qa,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new so(l.x,l.y,ca),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ya,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yn,G.map.depthTexture.magFilter=Yn}else B.isPointLight?(G.map=new I_(l.x),G.map.depthTexture=new Hb(l.x,pa)):(G.map=new ha(l.x,l.y),G.map.depthTexture=new so(l.x,l.y,pa)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ya,this.type===ru?(G.map.depthTexture.compareFunction=_e?Up:Dp,G.map.depthTexture.minFilter=Jn,G.map.depthTexture.magFilter=Jn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yn,G.map.depthTexture.magFilter=Yn);G.camera.updateProjectionMatrix()}const Re=G.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Re;U++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,U),r.clear();else{U===0&&(r.setRenderTarget(G.map),r.clear());const Z=G.getViewport(U);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),j.viewport(f)}if(B.isPointLight){const Z=G.camera,Ae=G.matrix,Ce=B.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),ol.setFromMatrixPosition(B.matrixWorld),Z.position.copy(ol),xh.copy(Z.position),xh.add(NR[U]),Z.up.copy(DR[U]),Z.lookAt(xh),Z.updateMatrixWorld(),Ae.makeTranslation(-ol.x,-ol.y,-ol.z),Ux.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ux,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),N(z,T,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===cl&&L(G,T),G.needsUpdate=!1}S=this.type,_.needsUpdate=!1,r.setRenderTarget(O,Y,k)};function L(P,z){const T=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ha(l.x,l.y,{format:ar,type:qa})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(z,null,T,x,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(z,null,T,M,C,null)}function F(P,z,T,O){let Y=null;const k=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=T.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=Y.uuid,ue=z.uuid;let ve=h[j];ve===void 0&&(ve={},h[j]=ve);let K=ve[ue];K===void 0&&(K=Y.clone(),ve[ue]=K,z.addEventListener("dispose",I)),Y=K}if(Y.visible=z.visible,Y.wireframe=z.wireframe,O===cl?Y.side=z.shadowSide!==null?z.shadowSide:z.side:Y.side=z.shadowSide!==null?z.shadowSide:v[z.side],Y.alphaMap=z.alphaMap,Y.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Y.map=z.map,Y.clipShadows=z.clipShadows,Y.clippingPlanes=z.clippingPlanes,Y.clipIntersection=z.clipIntersection,Y.displacementMap=z.displacementMap,Y.displacementScale=z.displacementScale,Y.displacementBias=z.displacementBias,Y.wireframeLinewidth=z.wireframeLinewidth,Y.linewidth=z.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=r.properties.get(Y);j.light=T}return Y}function N(P,z,T,O,Y){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===cl)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),ve=P.material;if(Array.isArray(ve)){const K=ue.groups;for(let B=0,G=K.length;B<G;B++){const ne=K[B],_e=ve[ne.materialIndex];if(_e&&_e.visible){const Re=F(P,_e,O,Y);P.onBeforeShadow(r,P,z,T,ue,Re,ne),r.renderBufferDirect(T,null,ue,Re,P,ne),P.onAfterShadow(r,P,z,T,ue,Re,ne)}}}else if(ve.visible){const K=F(P,ve,O,Y);P.onBeforeShadow(r,P,z,T,ue,K,null),r.renderBufferDirect(T,null,ue,K,P,null),P.onAfterShadow(r,P,z,T,ue,K,null)}}const j=P.children;for(let ue=0,ve=j.length;ue<ve;ue++)N(j[ue],z,T,O,Y)}function I(P){P.target.removeEventListener("dispose",I);for(const T in h){const O=h[T],Y=P.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function LR(r,e){function i(){let X=!1;const De=new An;let ge=null;const Le=new An(0,0,0,0);return{setMask:function(ze){ge!==ze&&!X&&(r.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){X=ze},setClear:function(ze,be,Ke,je,un){un===!0&&(ze*=je,be*=je,Ke*=je),De.set(ze,be,Ke,je),Le.equals(De)===!1&&(r.clearColor(ze,be,Ke,je),Le.copy(De))},reset:function(){X=!1,ge=null,Le.set(-1,0,0,0)}}}function s(){let X=!1,De=!1,ge=null,Le=null,ze=null;return{setReversed:function(be){if(De!==be){const Ke=e.get("EXT_clip_control");be?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),De=be;const je=ze;ze=null,this.setClear(je)}},getReversed:function(){return De},setTest:function(be){be?Te(r.DEPTH_TEST):We(r.DEPTH_TEST)},setMask:function(be){ge!==be&&!X&&(r.depthMask(be),ge=be)},setFunc:function(be){if(De&&(be=hb[be]),Le!==be){switch(be){case Ch:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Nh:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Lh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=be}},setLocked:function(be){X=be},setClear:function(be){ze!==be&&(ze=be,De&&(be=1-be),r.clearDepth(be))},reset:function(){X=!1,ge=null,Le=null,ze=null,De=!1}}}function l(){let X=!1,De=null,ge=null,Le=null,ze=null,be=null,Ke=null,je=null,un=null;return{setTest:function(Dt){X||(Dt?Te(r.STENCIL_TEST):We(r.STENCIL_TEST))},setMask:function(Dt){De!==Dt&&!X&&(r.stencilMask(Dt),De=Dt)},setFunc:function(Dt,Bn,Vn){(ge!==Dt||Le!==Bn||ze!==Vn)&&(r.stencilFunc(Dt,Bn,Vn),ge=Dt,Le=Bn,ze=Vn)},setOp:function(Dt,Bn,Vn){(be!==Dt||Ke!==Bn||je!==Vn)&&(r.stencilOp(Dt,Bn,Vn),be=Dt,Ke=Bn,je=Vn)},setLocked:function(Dt){X=Dt},setClear:function(Dt){un!==Dt&&(r.clearStencil(Dt),un=Dt)},reset:function(){X=!1,De=null,ge=null,Le=null,ze=null,be=null,Ke=null,je=null,un=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},v={},x={},M=new WeakMap,E=[],C=null,_=!1,S=null,L=null,F=null,N=null,I=null,P=null,z=null,T=new Ht(0,0,0),O=0,Y=!1,k=null,j=null,ue=null,ve=null,K=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=ne>=1):_e.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=ne>=2);let Re=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Ce=new An().fromArray(Z),Ge=new An().fromArray(Ae);function $(X,De,ge,Le){const ze=new Uint8Array(4),be=r.createTexture();r.bindTexture(X,be),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ge;Ke++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,ze):r.texImage2D(De+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ze);return be}const ye={};ye[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Te(r.DEPTH_TEST),f.setFunc(io),fn(!1),dn(Ov),Te(r.CULL_FACE),mt(Va);function Te(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function We(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function lt(X,De){return x[X]!==De?(r.bindFramebuffer(X,De),x[X]=De,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=De),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=De),!0):!1}function $e(X,De){let ge=E,Le=!1;if(X){ge=M.get(De),ge===void 0&&(ge=[],M.set(De,ge));const ze=X.textures;if(ge.length!==ze.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Ke=ze.length;be<Ke;be++)ge[be]=r.COLOR_ATTACHMENT0+be;ge.length=ze.length,Le=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,Le=!0);Le&&r.drawBuffers(ge)}function en(X){return C!==X?(r.useProgram(X),C=X,!0):!1}const _t={[$s]:r.FUNC_ADD,[F1]:r.FUNC_SUBTRACT,[I1]:r.FUNC_REVERSE_SUBTRACT};_t[z1]=r.MIN,_t[B1]=r.MAX;const rt={[H1]:r.ZERO,[G1]:r.ONE,[V1]:r.SRC_COLOR,[Ah]:r.SRC_ALPHA,[j1]:r.SRC_ALPHA_SATURATE,[q1]:r.DST_COLOR,[W1]:r.DST_ALPHA,[k1]:r.ONE_MINUS_SRC_COLOR,[Rh]:r.ONE_MINUS_SRC_ALPHA,[Y1]:r.ONE_MINUS_DST_COLOR,[X1]:r.ONE_MINUS_DST_ALPHA,[Z1]:r.CONSTANT_COLOR,[K1]:r.ONE_MINUS_CONSTANT_COLOR,[Q1]:r.CONSTANT_ALPHA,[J1]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(X,De,ge,Le,ze,be,Ke,je,un,Dt){if(X===Va){_===!0&&(We(r.BLEND),_=!1);return}if(_===!1&&(Te(r.BLEND),_=!0),X!==P1){if(X!==S||Dt!==Y){if((L!==$s||I!==$s)&&(r.blendEquation(r.FUNC_ADD),L=$s,I=$s),Dt)switch(X){case eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Th:r.blendFunc(r.ONE,r.ONE);break;case Pv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:It("WebGLState: Invalid blending: ",X);break}else switch(X){case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Th:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pv:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fv:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",X);break}F=null,N=null,P=null,z=null,T.set(0,0,0),O=0,S=X,Y=Dt}return}ze=ze||De,be=be||ge,Ke=Ke||Le,(De!==L||ze!==I)&&(r.blendEquationSeparate(_t[De],_t[ze]),L=De,I=ze),(ge!==F||Le!==N||be!==P||Ke!==z)&&(r.blendFuncSeparate(rt[ge],rt[Le],rt[be],rt[Ke]),F=ge,N=Le,P=be,z=Ke),(je.equals(T)===!1||un!==O)&&(r.blendColor(je.r,je.g,je.b,un),T.copy(je),O=un),S=X,Y=!1}function dt(X,De){X.side===Ha?We(r.CULL_FACE):Te(r.CULL_FACE);let ge=X.side===ci;De&&(ge=!ge),fn(ge),X.blending===eo&&X.transparent===!1?mt(Va):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Le=X.stencilWrite;p.setTest(Le),Le&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):We(r.SAMPLE_ALPHA_TO_COVERAGE)}function fn(X){k!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),k=X)}function dn(X){X!==U1?(Te(r.CULL_FACE),X!==j&&(X===Ov?r.cullFace(r.BACK):X===L1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):We(r.CULL_FACE),j=X}function rn(X){X!==ue&&(G&&r.lineWidth(X),ue=X)}function xn(X,De,ge){X?(Te(r.POLYGON_OFFSET_FILL),(ve!==De||K!==ge)&&(ve=De,K=ge,f.getReversed()&&(De=-De),r.polygonOffset(De,ge))):We(r.POLYGON_OFFSET_FILL)}function Gt(X){X?Te(r.SCISSOR_TEST):We(r.SCISSOR_TEST)}function hn(X){X===void 0&&(X=r.TEXTURE0+B-1),Re!==X&&(r.activeTexture(X),Re=X)}function q(X,De,ge){ge===void 0&&(Re===null?ge=r.TEXTURE0+B-1:ge=Re);let Le=U[ge];Le===void 0&&(Le={type:void 0,texture:void 0},U[ge]=Le),(Le.type!==X||Le.texture!==De)&&(Re!==ge&&(r.activeTexture(ge),Re=ge),r.bindTexture(X,De||ye[X]),Le.type=X,Le.texture=De)}function Vt(){const X=U[Re];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function At(){try{r.compressedTexImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function b(){try{r.texSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Q(){try{r.texSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function we(){try{r.texStorage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Oe(){try{r.texStorage3D(...arguments)}catch(X){It("WebGLState:",X)}}function he(){try{r.texImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function pe(){try{r.texImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Ue(X){return v[X]!==void 0?v[X]:r.getParameter(X)}function Ve(X,De){v[X]!==De&&(r.pixelStorei(X,De),v[X]=De)}function Fe(X){Ce.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ce.copy(X))}function Ie(X){Ge.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ge.copy(X))}function Je(X,De){let ge=h.get(De);ge===void 0&&(ge=new WeakMap,h.set(De,ge));let Le=ge.get(X);Le===void 0&&(Le=r.getUniformBlockIndex(De,X.name),ge.set(X,Le))}function it(X,De){const Le=h.get(De).get(X);m.get(De)!==Le&&(r.uniformBlockBinding(De,Le,X.__bindingPointIndex),m.set(De,Le))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},v={},Re=null,U={},x={},M=new WeakMap,E=[],C=null,_=!1,S=null,L=null,F=null,N=null,I=null,P=null,z=null,T=new Ht(0,0,0),O=0,Y=!1,k=null,j=null,ue=null,ve=null,K=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Te,disable:We,bindFramebuffer:lt,drawBuffers:$e,useProgram:en,setBlending:mt,setMaterial:dt,setFlipSided:fn,setCullFace:dn,setLineWidth:rn,setPolygonOffset:xn,setScissorTest:Gt,activeTexture:hn,bindTexture:q,unbindTexture:Vt,compressedTexImage2D:At,compressedTexImage3D:D,texImage2D:he,texImage3D:pe,pixelStorei:Ve,getParameter:Ue,updateUBOMapping:Je,uniformBlockBinding:it,texStorage2D:we,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Fe,viewport:Ie,reset:ct}}function OR(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,g=new WeakMap,v=new Set;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):xu("canvas")}function _(D,b,Q){let ae=1;const de=At(D);if((de.width>Q||de.height>Q)&&(ae=Q/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const we=Math.floor(ae*de.width),Oe=Math.floor(ae*de.height);x===void 0&&(x=C(we,Oe));const he=b?C(we,Oe):x;return he.width=we,he.height=Oe,he.getContext("2d").drawImage(D,0,0,we,Oe),ft("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+Oe+")."),he}else return"data"in D&&ft("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function S(D){return D.generateMipmaps}function L(D){r.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(D,b,Q,ae,de,we=!1){if(D!==null){if(r[D]!==void 0)return r[D];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Oe;ae&&(Oe=e.get("EXT_texture_norm16"),Oe||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=b;if(b===r.RED&&(Q===r.FLOAT&&(he=r.R32F),Q===r.HALF_FLOAT&&(he=r.R16F),Q===r.UNSIGNED_BYTE&&(he=r.R8),Q===r.UNSIGNED_SHORT&&Oe&&(he=Oe.R16_EXT),Q===r.SHORT&&Oe&&(he=Oe.R16_SNORM_EXT)),b===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.R8UI),Q===r.UNSIGNED_SHORT&&(he=r.R16UI),Q===r.UNSIGNED_INT&&(he=r.R32UI),Q===r.BYTE&&(he=r.R8I),Q===r.SHORT&&(he=r.R16I),Q===r.INT&&(he=r.R32I)),b===r.RG&&(Q===r.FLOAT&&(he=r.RG32F),Q===r.HALF_FLOAT&&(he=r.RG16F),Q===r.UNSIGNED_BYTE&&(he=r.RG8),Q===r.UNSIGNED_SHORT&&Oe&&(he=Oe.RG16_EXT),Q===r.SHORT&&Oe&&(he=Oe.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.RG8UI),Q===r.UNSIGNED_SHORT&&(he=r.RG16UI),Q===r.UNSIGNED_INT&&(he=r.RG32UI),Q===r.BYTE&&(he=r.RG8I),Q===r.SHORT&&(he=r.RG16I),Q===r.INT&&(he=r.RG32I)),b===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(he=r.RGB16UI),Q===r.UNSIGNED_INT&&(he=r.RGB32UI),Q===r.BYTE&&(he=r.RGB8I),Q===r.SHORT&&(he=r.RGB16I),Q===r.INT&&(he=r.RGB32I)),b===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),Q===r.UNSIGNED_INT&&(he=r.RGBA32UI),Q===r.BYTE&&(he=r.RGBA8I),Q===r.SHORT&&(he=r.RGBA16I),Q===r.INT&&(he=r.RGBA32I)),b===r.RGB&&(Q===r.UNSIGNED_SHORT&&Oe&&(he=Oe.RGB16_EXT),Q===r.SHORT&&Oe&&(he=Oe.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),b===r.RGBA){const pe=we?gu:Ot.getTransfer(de);Q===r.FLOAT&&(he=r.RGBA32F),Q===r.HALF_FLOAT&&(he=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(he=pe===$t?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Oe&&(he=Oe.RGBA16_EXT),Q===r.SHORT&&Oe&&(he=Oe.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(D,b){let Q;return D?b===null||b===pa||b===pl?Q=r.DEPTH24_STENCIL8:b===ca?Q=r.DEPTH32F_STENCIL8:b===hl&&(Q=r.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pa||b===pl?Q=r.DEPTH_COMPONENT24:b===ca?Q=r.DEPTH_COMPONENT32F:b===hl&&(Q=r.DEPTH_COMPONENT16),Q}function P(D,b){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Yn&&D.minFilter!==Jn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function z(D){const b=D.target;b.removeEventListener("dispose",z),O(b),b.isVideoTexture&&g.delete(b),b.isHTMLTexture&&v.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),k(b)}function O(D){const b=s.get(D);if(b.__webglInit===void 0)return;const Q=D.source,ae=M.get(Q);if(ae){const de=ae[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&Y(D),Object.keys(ae).length===0&&M.delete(Q)}s.remove(D)}function Y(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const Q=D.source,ae=M.get(Q);delete ae[b.__cacheKey],f.memory.textures--}function k(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let de=0;de<b.__webglFramebuffer[ae].length;de++)r.deleteFramebuffer(b.__webglFramebuffer[ae][de]);else r.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)r.deleteFramebuffer(b.__webglFramebuffer[ae]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=D.textures;for(let ae=0,de=Q.length;ae<de;ae++){const we=s.get(Q[ae]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),f.memory.textures--),s.remove(Q[ae])}s.remove(D)}let j=0;function ue(){j=0}function ve(){return j}function K(D){j=D}function B(){const D=j;return D>=l.maxTextures&&ft("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function G(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ne(D,b){const Q=s.get(D);if(D.isVideoTexture&&q(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const ae=D.image;if(ae===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{We(Q,D,b);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+b)}function _e(D,b){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){We(Q,D,b);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+b)}function Re(D,b){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){We(Q,D,b);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+b)}function U(D,b){const Q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){lt(Q,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+b)}const Z={[Ph]:r.REPEAT,[Ga]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},Ae={[Yn]:r.NEAREST,[tb]:r.NEAREST_MIPMAP_NEAREST,[Dc]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[Vd]:r.LINEAR_MIPMAP_NEAREST,[tr]:r.LINEAR_MIPMAP_LINEAR},Ce={[ab]:r.NEVER,[cb]:r.ALWAYS,[sb]:r.LESS,[Dp]:r.LEQUAL,[rb]:r.EQUAL,[Up]:r.GEQUAL,[ob]:r.GREATER,[lb]:r.NOTEQUAL};function Ge(D,b){if(b.type===ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Jn||b.magFilter===Vd||b.magFilter===Dc||b.magFilter===tr||b.minFilter===Jn||b.minFilter===Vd||b.minFilter===Dc||b.minFilter===tr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Z[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Z[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Z[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Ae[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Ae[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yn||b.minFilter!==Dc&&b.minFilter!==tr||b.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function $(D,b){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",z));const ae=b.source;let de=M.get(ae);de===void 0&&(de={},M.set(ae,de));const we=G(b);if(we!==D.__cacheKey){de[we]===void 0&&(de[we]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),de[we].usedTimes++;const Oe=de[D.__cacheKey];Oe!==void 0&&(de[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&Y(b)),D.__cacheKey=we,D.__webglTexture=de[we].texture}return Q}function ye(D,b,Q){return Math.floor(Math.floor(D/Q)/b)}function Te(D,b,Q,ae){const we=D.updateRanges;if(we.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Q,ae,b.data);else{we.sort((Ve,Fe)=>Ve.start-Fe.start);let Oe=0;for(let Ve=1;Ve<we.length;Ve++){const Fe=we[Oe],Ie=we[Ve],Je=Fe.start+Fe.count,it=ye(Ie.start,b.width,4),ct=ye(Fe.start,b.width,4);Ie.start<=Je+1&&it===ct&&ye(Ie.start+Ie.count-1,b.width,4)===it?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Oe,we[Oe]=Ie)}we.length=Oe+1;const he=i.getParameter(r.UNPACK_ROW_LENGTH),pe=i.getParameter(r.UNPACK_SKIP_PIXELS),Ue=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ve=0,Fe=we.length;Ve<Fe;Ve++){const Ie=we[Ve],Je=Math.floor(Ie.start/4),it=Math.ceil(Ie.count/4),ct=Je%b.width,X=Math.floor(Je/b.width),De=it,ge=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ct,X,De,ge,Q,ae,b.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,he),i.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}}function We(D,b,Q){let ae=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=r.TEXTURE_3D);const de=$(D,b),we=b.source;i.bindTexture(ae,D.__webglTexture,r.TEXTURE0+Q);const Oe=s.get(we);if(we.version!==Oe.__version||de===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=Ot.getPrimaries(Ot.workingColorSpace),Le=b.colorSpace===Rs?null:Ot.getPrimaries(b.colorSpace),ze=b.colorSpace===Rs||ge===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let pe=_(b.image,!1,l.maxTextureSize);pe=Vt(b,pe);const Ue=c.convert(b.format,b.colorSpace),Ve=c.convert(b.type);let Fe=N(b.internalFormat,Ue,Ve,b.normalized,b.colorSpace,b.isVideoTexture);Ge(ae,b);let Ie;const Je=b.mipmaps,it=b.isVideoTexture!==!0,ct=Oe.__version===void 0||de===!0,X=we.dataReady,De=P(b,pe);if(b.isDepthTexture)Fe=I(b.format===nr,b.type),ct&&(it?i.texStorage2D(r.TEXTURE_2D,1,Fe,pe.width,pe.height):i.texImage2D(r.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Ue,Ve,null));else if(b.isDataTexture)if(Je.length>0){it&&ct&&i.texStorage2D(r.TEXTURE_2D,De,Fe,Je[0].width,Je[0].height);for(let ge=0,Le=Je.length;ge<Le;ge++)Ie=Je[ge],it?X&&i.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ie.width,Ie.height,Ue,Ve,Ie.data):i.texImage2D(r.TEXTURE_2D,ge,Fe,Ie.width,Ie.height,0,Ue,Ve,Ie.data);b.generateMipmaps=!1}else it?(ct&&i.texStorage2D(r.TEXTURE_2D,De,Fe,pe.width,pe.height),X&&Te(b,pe,Ue,Ve)):i.texImage2D(r.TEXTURE_2D,0,Fe,pe.width,pe.height,0,Ue,Ve,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,Je[0].width,Je[0].height,pe.depth);for(let ge=0,Le=Je.length;ge<Le;ge++)if(Ie=Je[ge],b.format!==ji)if(Ue!==null)if(it){if(X)if(b.layerUpdates.size>0){const ze=cx(Ie.width,Ie.height,b.format,b.type);for(const be of b.layerUpdates){const Ke=Ie.data.subarray(be*ze/Ie.data.BYTES_PER_ELEMENT,(be+1)*ze/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,be,Ie.width,Ie.height,1,Ue,Ke)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ie.width,Ie.height,pe.depth,Ue,Ie.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,Fe,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,Ie.width,Ie.height,pe.depth,Ue,Ve,Ie.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ge,Fe,Ie.width,Ie.height,pe.depth,0,Ue,Ve,Ie.data)}else{it&&ct&&i.texStorage2D(r.TEXTURE_2D,De,Fe,Je[0].width,Je[0].height);for(let ge=0,Le=Je.length;ge<Le;ge++)Ie=Je[ge],b.format!==ji?Ue!==null?it?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,Ie.width,Ie.height,Ue,Ie.data):i.compressedTexImage2D(r.TEXTURE_2D,ge,Fe,Ie.width,Ie.height,0,Ie.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&i.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ie.width,Ie.height,Ue,Ve,Ie.data):i.texImage2D(r.TEXTURE_2D,ge,Fe,Ie.width,Ie.height,0,Ue,Ve,Ie.data)}else if(b.isDataArrayTexture)if(it){if(ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Fe,pe.width,pe.height,pe.depth),X)if(b.layerUpdates.size>0){const ge=cx(pe.width,pe.height,b.format,b.type);for(const Le of b.layerUpdates){const ze=pe.data.subarray(Le*ge/pe.data.BYTES_PER_ELEMENT,(Le+1)*ge/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Le,pe.width,pe.height,1,Ue,Ve,ze)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Ve,pe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,pe.width,pe.height,pe.depth,0,Ue,Ve,pe.data);else if(b.isData3DTexture)it?(ct&&i.texStorage3D(r.TEXTURE_3D,De,Fe,pe.width,pe.height,pe.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Ve,pe.data)):i.texImage3D(r.TEXTURE_3D,0,Fe,pe.width,pe.height,pe.depth,0,Ue,Ve,pe.data);else if(b.isFramebufferTexture){if(ct)if(it)i.texStorage2D(r.TEXTURE_2D,De,Fe,pe.width,pe.height);else{let ge=pe.width,Le=pe.height;for(let ze=0;ze<De;ze++)i.texImage2D(r.TEXTURE_2D,ze,Fe,ge,Le,0,Ue,Ve,null),ge>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const ge=r.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),pe.parentNode!==ge){ge.appendChild(pe),v.add(b),ge.onpaint=Le=>{const ze=Le.changedElements;for(const be of v)ze.includes(be.image)&&(be.needsUpdate=!0)},ge.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,pe);else{const ze=r.RGBA,be=r.RGBA,Ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ze,be,Ke,pe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if(it&&ct){const ge=At(Je[0]);i.texStorage2D(r.TEXTURE_2D,De,Fe,ge.width,ge.height)}for(let ge=0,Le=Je.length;ge<Le;ge++)Ie=Je[ge],it?X&&i.texSubImage2D(r.TEXTURE_2D,ge,0,0,Ue,Ve,Ie):i.texImage2D(r.TEXTURE_2D,ge,Fe,Ue,Ve,Ie);b.generateMipmaps=!1}else if(it){if(ct){const ge=At(pe);i.texStorage2D(r.TEXTURE_2D,De,Fe,ge.width,ge.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Ve,pe)}else i.texImage2D(r.TEXTURE_2D,0,Fe,Ue,Ve,pe);S(b)&&L(ae),Oe.__version=we.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function lt(D,b,Q){if(b.image.length!==6)return;const ae=$(D,b),de=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);const we=s.get(de);if(de.version!==we.__version||ae===!0){i.activeTexture(r.TEXTURE0+Q);const Oe=Ot.getPrimaries(Ot.workingColorSpace),he=b.colorSpace===Rs?null:Ot.getPrimaries(b.colorSpace),pe=b.colorSpace===Rs||Oe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,Ve=b.image[0]&&b.image[0].isDataTexture,Fe=[];for(let be=0;be<6;be++)!Ue&&!Ve?Fe[be]=_(b.image[be],!0,l.maxCubemapSize):Fe[be]=Ve?b.image[be].image:b.image[be],Fe[be]=Vt(b,Fe[be]);const Ie=Fe[0],Je=c.convert(b.format,b.colorSpace),it=c.convert(b.type),ct=N(b.internalFormat,Je,it,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,De=we.__version===void 0||ae===!0,ge=de.dataReady;let Le=P(b,Ie);Ge(r.TEXTURE_CUBE_MAP,b);let ze;if(Ue){X&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ct,Ie.width,Ie.height);for(let be=0;be<6;be++){ze=Fe[be].mipmaps;for(let Ke=0;Ke<ze.length;Ke++){const je=ze[Ke];b.format!==ji?Je!==null?X?ge&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,0,0,je.width,je.height,Je,je.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,ct,je.width,je.height,0,je.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,0,0,je.width,je.height,Je,it,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke,ct,je.width,je.height,0,Je,it,je.data)}}}else{if(ze=b.mipmaps,X&&De){ze.length>0&&Le++;const be=At(Fe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Le,ct,be.width,be.height)}for(let be=0;be<6;be++)if(Ve){X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Fe[be].width,Fe[be].height,Je,it,Fe[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,Fe[be].width,Fe[be].height,0,Je,it,Fe[be].data);for(let Ke=0;Ke<ze.length;Ke++){const un=ze[Ke].image[be].image;X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,0,0,un.width,un.height,Je,it,un.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,ct,un.width,un.height,0,Je,it,un.data)}}else{X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,it,Fe[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ct,Je,it,Fe[be]);for(let Ke=0;Ke<ze.length;Ke++){const je=ze[Ke];X?ge&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,0,0,Je,it,je.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ke+1,ct,Je,it,je.image[be])}}}S(b)&&L(r.TEXTURE_CUBE_MAP),we.__version=de.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function $e(D,b,Q,ae,de,we){const Oe=c.convert(Q.format,Q.colorSpace),he=c.convert(Q.type),pe=N(Q.internalFormat,Oe,he,Q.normalized,Q.colorSpace),Ue=s.get(b),Ve=s.get(Q);if(Ve.__renderTarget=b,!Ue.__hasExternalTextures){const Fe=Math.max(1,b.width>>we),Ie=Math.max(1,b.height>>we);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,we,pe,Fe,Ie,b.depth,0,Oe,he,null):i.texImage2D(de,we,pe,Fe,Ie,0,Oe,he,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),hn(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,de,Ve.__webglTexture,0,Gt(b)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,de,Ve.__webglTexture,we),i.bindFramebuffer(r.FRAMEBUFFER,null)}function en(D,b,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const ae=b.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,we=I(b.stencilBuffer,de),Oe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;hn(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt(b),we,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt(b),we,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,we,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,D)}else{const ae=b.textures;for(let de=0;de<ae.length;de++){const we=ae[de],Oe=c.convert(we.format,we.colorSpace),he=c.convert(we.type),pe=N(we.internalFormat,Oe,he,we.normalized,we.colorSpace);hn(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt(b),pe,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt(b),pe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _t(D,b,Q){const ae=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(b.depthTexture);if(de.__renderTarget=b,(!de.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(de.__webglInit===void 0&&(de.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,b.depthTexture);const Ue=c.convert(b.depthTexture.format),Ve=c.convert(b.depthTexture.type);let Fe;b.depthTexture.format===Ya?Fe=r.DEPTH_COMPONENT24:b.depthTexture.format===nr&&(Fe=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,b.width,b.height,0,Ue,Ve,null)}}else ne(b.depthTexture,0);const we=de.__webglTexture,Oe=Gt(b),he=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,pe=b.depthTexture.format===nr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ya)hn(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,he,we,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,he,we,0);else if(b.depthTexture.format===nr)hn(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,he,we,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,pe,he,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(D){const b=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ae=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const de=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",de)};ae.addEventListener("dispose",de),b.__depthDisposeCallback=de}b.__boundDepthTexture=ae}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)_t(b.__webglFramebuffer[ae],D,ae);else{const ae=D.texture.mipmaps;ae&&ae.length>0?_t(b.__webglFramebuffer[0],D,0):_t(b.__webglFramebuffer,D,0)}else if(Q){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=r.createRenderbuffer(),en(b.__webglDepthbuffer[ae],D,!1);else{const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,we)}}else{const ae=D.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),en(b.__webglDepthbuffer,D,!1);else{const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,we)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(D,b,Q){const ae=s.get(D);b!==void 0&&$e(ae.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&rt(D)}function dt(D){const b=D.texture,Q=s.get(D),ae=s.get(b);D.addEventListener("dispose",T);const de=D.textures,we=D.isWebGLCubeRenderTarget===!0,Oe=de.length>1;if(Oe||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,f.memory.textures++),we){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let pe=0;pe<b.mipmaps.length;pe++)Q.__webglFramebuffer[he][pe]=r.createFramebuffer()}else Q.__webglFramebuffer[he]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)Q.__webglFramebuffer[he]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let he=0,pe=de.length;he<pe;he++){const Ue=s.get(de[he]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&hn(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const pe=de[he];Q.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const Ue=c.convert(pe.format,pe.colorSpace),Ve=c.convert(pe.type),Fe=N(pe.internalFormat,Ue,Ve,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Ie=Gt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Fe,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),en(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){i.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)$e(Q.__webglFramebuffer[he][pe],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else $e(Q.__webglFramebuffer[he],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(b)&&L(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let he=0,pe=de.length;he<pe;he++){const Ue=de[he],Ve=s.get(Ue);let Fe=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Fe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Fe,Ve.__webglTexture),Ge(Fe,Ue),$e(Q.__webglFramebuffer,D,Ue,r.COLOR_ATTACHMENT0+he,Fe,0),S(Ue)&&L(Fe)}i.unbindTexture()}else{let he=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(he,ae.__webglTexture),Ge(he,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)$e(Q.__webglFramebuffer[pe],D,b,r.COLOR_ATTACHMENT0,he,pe);else $e(Q.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,he,0);S(b)&&L(he),i.unbindTexture()}D.depthBuffer&&rt(D)}function fn(D){const b=D.textures;for(let Q=0,ae=b.length;Q<ae;Q++){const de=b[Q];if(S(de)){const we=F(D),Oe=s.get(de).__webglTexture;i.bindTexture(we,Oe),L(we),i.unbindTexture()}}}const dn=[],rn=[];function xn(D){if(D.samples>0){if(hn(D)===!1){const b=D.textures,Q=D.width,ae=D.height;let de=r.COLOR_BUFFER_BIT;const we=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=s.get(D),he=b.length>1;if(he)for(let Ue=0;Ue<b.length;Ue++)i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ue]);const Ve=s.get(b[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,de,r.NEAREST),m===!0&&(dn.length=0,rn.length=0,dn.push(r.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dn.push(we),rn.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Ue=0;Ue<b.length;Ue++){i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ue]);const Ve=s.get(b[Ue]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,Ve,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Gt(D){return Math.min(l.maxSamples,D.samples)}function hn(D){const b=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(D){const b=f.render.frame;g.get(D)!==b&&(g.set(D,b),D.update())}function Vt(D,b){const Q=D.colorSpace,ae=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==mu&&Q!==Rs&&(Ot.getTransfer(Q)===$t?(ae!==ji||de!==Ii)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",Q)),b}function At(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.getTextureUnits=ve,this.setTextureUnits=K,this.setTexture2D=ne,this.setTexture2DArray=_e,this.setTexture3D=Re,this.setTextureCube=U,this.rebindTextures=mt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=hn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function PR(r,e){function i(s,l=Rs){let c;const f=Ot.getTransfer(l);if(s===Ii)return r.UNSIGNED_BYTE;if(s===Ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===g_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===v_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===p_)return r.BYTE;if(s===m_)return r.SHORT;if(s===hl)return r.UNSIGNED_SHORT;if(s===Tp)return r.INT;if(s===pa)return r.UNSIGNED_INT;if(s===ca)return r.FLOAT;if(s===qa)return r.HALF_FLOAT;if(s===x_)return r.ALPHA;if(s===__)return r.RGB;if(s===ji)return r.RGBA;if(s===Ya)return r.DEPTH_COMPONENT;if(s===nr)return r.DEPTH_STENCIL;if(s===S_)return r.RED;if(s===Cp)return r.RED_INTEGER;if(s===ar)return r.RG;if(s===wp)return r.RG_INTEGER;if(s===Np)return r.RGBA_INTEGER;if(s===ou||s===lu||s===cu||s===uu)if(f===$t)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ih||s===zh||s===Bh||s===Hh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gh||s===Vh||s===kh||s===Wh||s===Xh||s===hu||s===qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Gh||s===Vh)return f===$t?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===kh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wh)return c.COMPRESSED_R11_EAC;if(s===Xh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===hu)return c.COMPRESSED_RG11_EAC;if(s===qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Yh||s===jh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ep)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===np)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ip)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ap)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sp)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===op||s===lp||s===cp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===op)return f===$t?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===fp||s===pu||s===dp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===up)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const FR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
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

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new D_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ki({vertexShader:FR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ja(new Eu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends or{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,v=null,x=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",_=new zR,S={},L=i.getContextAttributes();let F=null,N=null;const I=[],P=[],z=new Wt;let T=null;const O=new Fi;O.viewport=new An;const Y=new Fi;Y.viewport=new An;const k=[O,Y],j=new Zb;let ue=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ye=I[$];return ye===void 0&&(ye=new Kd,I[$]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function($){let ye=I[$];return ye===void 0&&(ye=new Kd,I[$]=ye),ye.getGripSpace()},this.getHand=function($){let ye=I[$];return ye===void 0&&(ye=new Kd,I[$]=ye),ye.getHandSpace()};function K($){const ye=P.indexOf($.inputSource);if(ye===-1)return;const Te=I[ye];Te!==void 0&&(Te.update($.inputSource,$.frame,h||f),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let $=0;$<I.length;$++){const ye=P[$];ye!==null&&(P[$]=null,I[$].disconnect(ye))}ue=null,ve=null,_.reset();for(const $ in S)delete S[$];e.setRenderTarget(F),M=null,x=null,v=null,l=null,N=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),L.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,We=null,lt=null;L.depth&&(lt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=L.stencil?nr:Ya,We=L.stencil?pl:pa);const $e={colorFormat:i.RGBA8,depthFormat:lt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer($e),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new ha(x.textureWidth,x.textureHeight,{format:ji,type:Ii,depthTexture:new so(x.textureWidth,x.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Te={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new ha(M.framebufferWidth,M.framebufferHeight,{format:ji,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G($){for(let ye=0;ye<$.removed.length;ye++){const Te=$.removed[ye],We=P.indexOf(Te);We>=0&&(P[We]=null,I[We].disconnect(Te))}for(let ye=0;ye<$.added.length;ye++){const Te=$.added[ye];let We=P.indexOf(Te);if(We===-1){for(let $e=0;$e<I.length;$e++)if($e>=P.length){P.push(Te),We=$e;break}else if(P[$e]===null){P[$e]=Te,We=$e;break}if(We===-1)break}const lt=I[We];lt&&lt.connect(Te)}}const ne=new oe,_e=new oe;function Re($,ye,Te){ne.setFromMatrixPosition(ye.matrixWorld),_e.setFromMatrixPosition(Te.matrixWorld);const We=ne.distanceTo(_e),lt=ye.projectionMatrix.elements,$e=Te.projectionMatrix.elements,en=lt[14]/(lt[10]-1),_t=lt[14]/(lt[10]+1),rt=(lt[9]+1)/lt[5],mt=(lt[9]-1)/lt[5],dt=(lt[8]-1)/lt[0],fn=($e[8]+1)/$e[0],dn=en*dt,rn=en*fn,xn=We/(-dt+fn),Gt=xn*-dt;if(ye.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Gt),$.translateZ(xn),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),lt[10]===-1)$.projectionMatrix.copy(ye.projectionMatrix),$.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const hn=en+xn,q=_t+xn,Vt=dn-Gt,At=rn+(We-Gt),D=rt*_t/q*hn,b=mt*_t/q*hn;$.projectionMatrix.makePerspective(Vt,At,D,b,hn,q),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,ye){ye===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ye.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ye=$.near,Te=$.far;_.texture!==null&&(_.depthNear>0&&(ye=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),j.near=Y.near=O.near=ye,j.far=Y.far=O.far=Te,(ue!==j.near||ve!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),ue=j.near,ve=j.far),j.layers.mask=$.layers.mask|6,O.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const We=$.parent,lt=j.cameras;U(j,We);for(let $e=0;$e<lt.length;$e++)U(lt[$e],We);lt.length===2?Re(j,O,Y):j.projectionMatrix.copy(O.projectionMatrix),Z($,j,We)};function Z($,ye,Te){Te===null?$.matrix.copy(ye.matrixWorld):($.matrix.copy(Te.matrixWorld),$.matrix.invert(),$.matrix.multiply(ye.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ye.projectionMatrix),$.projectionMatrixInverse.copy(ye.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=hp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function($){return S[$]};let Ae=null;function Ce($,ye){if(g=ye.getViewerPose(h||f),E=ye,g!==null){const Te=g.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let We=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,We=!0);for(let _t=0;_t<Te.length;_t++){const rt=Te[_t];let mt=null;if(M!==null)mt=M.getViewport(rt);else{const fn=v.getViewSubImage(x,rt);mt=fn.viewport,_t===0&&(e.setRenderTargetTextures(N,fn.colorTexture,fn.depthStencilTexture),e.setRenderTarget(N))}let dt=k[_t];dt===void 0&&(dt=new Fi,dt.layers.enable(_t),dt.viewport=new An,k[_t]=dt),dt.matrix.fromArray(rt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(rt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(mt.x,mt.y,mt.width,mt.height),_t===0&&(j.matrix.copy(dt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),We===!0&&j.cameras.push(dt)}const lt=l.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const _t=v.getDepthInformation(Te[0]);_t&&_t.isValid&&_t.texture&&_.init(_t,l.renderState)}if(lt&&lt.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let _t=0;_t<Te.length;_t++){const rt=Te[_t].camera;if(rt){let mt=S[rt];mt||(mt=new D_,S[rt]=mt);const dt=v.getCameraImage(rt);mt.sourceTexture=dt}}}}for(let Te=0;Te<I.length;Te++){const We=P[Te],lt=I[Te];We!==null&&lt!==void 0&&lt.update(We,ye,h||f)}Ae&&Ae($,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ge=new P_;Ge.setAnimationLoop(Ce),this.setAnimationLoop=function($){Ae=$},this.dispose=function(){}}}const HR=new wn,V_=new vt;V_.set(-1,0,0,0,1,0,0,0,1);function GR(r,e){function i(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function s(_,S){S.color.getRGB(_.fogColor.value,U_(r)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function l(_,S,L,F,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(_,S):S.isMeshLambertMaterial?(c(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(_,S),v(_,S)):S.isMeshPhongMaterial?(c(_,S),g(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(_,S),x(_,S),S.isMeshPhysicalMaterial&&M(_,S,N)):S.isMeshMatcapMaterial?(c(_,S),E(_,S)):S.isMeshDepthMaterial?c(_,S):S.isMeshDistanceMaterial?(c(_,S),C(_,S)):S.isMeshNormalMaterial?c(_,S):S.isLineBasicMaterial?(f(_,S),S.isLineDashedMaterial&&p(_,S)):S.isPointsMaterial?m(_,S,L,F):S.isSpriteMaterial?h(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,i(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,i(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ci&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,i(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ci&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,i(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,i(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const L=e.get(S),F=L.envMap,N=L.envMapRotation;F&&(_.envMap.value=F,_.envMapRotation.value.setFromMatrix4(HR.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(V_),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,_.aoMapTransform))}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,i(S.map,_.mapTransform))}function p(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function m(_,S,L,F){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*L,_.scale.value=F*.5,S.map&&(_.map.value=S.map,i(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function h(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,i(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function g(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function v(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function x(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function M(_,S,L){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ci&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,S){S.matcap&&(_.matcap.value=S.matcap)}function C(_,S){const L=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function VR(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,I){const P=I.program;s.uniformBlockBinding(N,P)}function h(N,I){let P=l[N.id];P===void 0&&(_(N),P=g(N),l[N.id]=P,N.addEventListener("dispose",L));const z=I.program;s.updateUBOMapping(N,z);const T=e.render.frame;c[N.id]!==T&&(x(N),c[N.id]=T)}function g(N){const I=v();N.__bindingPointIndex=I;const P=r.createBuffer(),z=N.__size,T=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,P),P}function v(){for(let N=0;N<p;N++)if(f.indexOf(N)===-1)return f.push(N),N;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=l[N.id],P=N.uniforms,z=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let T=0,O=P.length;T<O;T++){const Y=P[T];if(Array.isArray(Y))for(let k=0,j=Y.length;k<j;k++)M(Y[k],T,k,z);else M(Y,T,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,I,P,z){if(C(N,I,P,z)===!0){const T=N.__offset,O=N.value;if(Array.isArray(O)){let Y=0;for(let k=0;k<O.length;k++){const j=O[k],ue=S(j);E(j,N.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(O,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,N.__data)}}function E(N,I,P){typeof N=="number"||typeof N=="boolean"?I[0]=N:N.isMatrix3?(I[0]=N.elements[0],I[1]=N.elements[1],I[2]=N.elements[2],I[3]=0,I[4]=N.elements[3],I[5]=N.elements[4],I[6]=N.elements[5],I[7]=0,I[8]=N.elements[6],I[9]=N.elements[7],I[10]=N.elements[8],I[11]=0):ArrayBuffer.isView(N)?I.set(new N.constructor(N.buffer,N.byteOffset,I.length)):N.toArray(I,P)}function C(N,I,P,z){const T=N.value,O=I+"_"+P;if(z[O]===void 0)return typeof T=="number"||typeof T=="boolean"?z[O]=T:ArrayBuffer.isView(T)?z[O]=T.slice():z[O]=T.clone(),!0;{const Y=z[O];if(typeof T=="number"||typeof T=="boolean"){if(Y!==T)return z[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Y.equals(T)===!1)return Y.copy(T),!0}}return!1}function _(N){const I=N.uniforms;let P=0;const z=16;for(let O=0,Y=I.length;O<Y;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let j=0,ue=k.length;j<ue;j++){const ve=k[j],K=Array.isArray(ve.value)?ve.value:[ve.value];for(let B=0,G=K.length;B<G;B++){const ne=K[B],_e=S(ne),Re=P%z,U=Re%_e.boundary,Z=Re+U;P+=U,Z!==0&&z-Z<_e.storage&&(P+=z-Z),ve.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=P,P+=_e.storage}}}const T=P%z;return T>0&&(P+=z-T),N.__size=P,N.__cache={},this}function S(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(I.boundary=16,I.storage=N.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",N),I}function L(N){const I=N.target;I.removeEventListener("dispose",L);const P=f.indexOf(I.__bindingPointIndex);f.splice(P,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function F(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:h,dispose:F}}const kR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function WR(){return ra===null&&(ra=new Ob(kR,16,16,ar,qa),ra.name="DFG_LUT",ra.minFilter=Jn,ra.magFilter=Jn,ra.wrapS=Ga,ra.wrapT=Ga,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class XR{constructor(e={}){const{canvas:i=fb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Ii}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,_=new Set([Np,wp,Cp]),S=new Set([Ii,pa,hl,pl,Ap,Rp]),L=new Uint32Array(4),F=new Int32Array(4),N=new oe;let I=null,P=null;const z=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let k=!1,j=null,ue=null,ve=null,K=null;this._outputColorSpace=Pi;let B=0,G=0,ne=null,_e=-1,Re=null;const U=new An,Z=new An;let Ae=null;const Ce=new Ht(0);let Ge=0,$=i.width,ye=i.height,Te=1,We=null,lt=null;const $e=new An(0,0,$,ye),en=new An(0,0,$,ye);let _t=!1;const rt=new w_;let mt=!1,dt=!1;const fn=new wn,dn=new oe,rn=new An,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function hn(){return ne===null?Te:1}let q=s;function Vt(A,V){return i.getContext(A,V)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",un,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Bn,!1),q===null){const V="webgl2";if(q=Vt(V,A),q===null)throw Vt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw It("WebGLRenderer: "+A.message),A}let At,D,b,Q,ae,de,we,Oe,he,pe,Ue,Ve,Fe,Ie,Je,it,ct,X,De,ge,Le,ze,be;function Ke(){At=new WA(q),At.init(),Le=new PR(q,At),D=new FA(q,At,e,Le),b=new LR(q,At),D.reversedDepthBuffer&&x&&b.buffers.depth.setReversed(!0),ue=q.createFramebuffer(),ve=q.createFramebuffer(),K=q.createFramebuffer(),Q=new YA(q),ae=new _R,de=new OR(q,At,b,ae,D,Le,Q),we=new kA(Y),Oe=new Qb(q),ze=new OA(q,Oe),he=new XA(q,Oe,Q,ze),pe=new ZA(q,he,Oe,ze,Q),X=new jA(q,D,de),Je=new IA(ae),Ue=new xR(Y,we,At,D,ze,Je),Ve=new GR(Y,ae),Fe=new yR,Ie=new RR(At),ct=new LA(Y,we,b,pe,E,m),it=new UR(Y,pe,D),be=new VR(q,Q,D,b),De=new PA(q,At,Q),ge=new qA(q,At,Q),Q.programs=Ue.programs,Y.capabilities=D,Y.extensions=At,Y.properties=ae,Y.renderLists=Fe,Y.shadowMap=it,Y.state=b,Y.info=Q}Ke(),C!==Ii&&(O=new QA(C,i.width,i.height,p,l,c));const je=new BR(Y,q);this.xr=je,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(A){A!==void 0&&(Te=A,this.setSize($,ye,!1))},this.getSize=function(A){return A.set($,ye)},this.setSize=function(A,V,re=!0){if(je.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,ye=V,i.width=Math.floor(A*Te),i.height=Math.floor(V*Te),re===!0&&(i.style.width=A+"px",i.style.height=V+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set($*Te,ye*Te).floor()},this.setDrawingBufferSize=function(A,V,re){$=A,ye=V,Te=re,i.width=Math.floor(A*re),i.height=Math.floor(V*re),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(C===Ii){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,V,re,ee){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,V,re,ee),b.viewport(U.copy($e).multiplyScalar(Te).round())},this.getScissor=function(A){return A.copy(en)},this.setScissor=function(A,V,re,ee){A.isVector4?en.set(A.x,A.y,A.z,A.w):en.set(A,V,re,ee),b.scissor(Z.copy(en).multiplyScalar(Te).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){b.setScissorTest(_t=A)},this.setOpaqueSort=function(A){We=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,re=!0){let ee=0;if(A){let te=!1;if(ne!==null){const He=ne.texture.format;te=_.has(He)}if(te){const He=ne.texture.type,Xe=S.has(He),Be=ct.getClearColor(),Ze=ct.getClearAlpha(),qe=Be.r,nt=Be.g,ht=Be.b;Xe?(L[0]=qe,L[1]=nt,L[2]=ht,L[3]=Ze,q.clearBufferuiv(q.COLOR,0,L)):(F[0]=qe,F[1]=nt,F[2]=ht,F[3]=Ze,q.clearBufferiv(q.COLOR,0,F))}else ee|=q.COLOR_BUFFER_BIT}V&&(ee|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&q.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",un,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Bn,!1),ct.dispose(),Fe.dispose(),Ie.dispose(),ae.dispose(),we.dispose(),pe.dispose(),ze.dispose(),be.dispose(),Ue.dispose(),je.dispose(),je.removeEventListener("sessionstart",ce),je.removeEventListener("sessionend",Pe),Ee.stop()};function un(A){A.preventDefault(),Vv("WebGLRenderer: Context Lost."),k=!0}function Dt(){Vv("WebGLRenderer: Context Restored."),k=!1;const A=Q.autoReset,V=it.enabled,re=it.autoUpdate,ee=it.needsUpdate,te=it.type;Ke(),Q.autoReset=A,it.enabled=V,it.autoUpdate=re,it.needsUpdate=ee,it.type=te}function Bn(A){It("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Vn(A){const V=A.target;V.removeEventListener("dispose",Vn),ma(V)}function ma(A){ga(A),ae.remove(A)}function ga(A){const V=ae.get(A).programs;V!==void 0&&(V.forEach(function(re){Ue.releaseProgram(re)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,re,ee,te,He){V===null&&(V=xn);const Xe=te.isMesh&&te.matrixWorld.determinantAffine()<0,Be=jt(A,V,re,ee,te);b.setMaterial(ee,Xe);let Ze=re.index,qe=1;if(ee.wireframe===!0){if(Ze=he.getWireframeAttribute(re),Ze===void 0)return;qe=2}const nt=re.drawRange,ht=re.attributes.position;let et=nt.start*qe,Ut=(nt.start+nt.count)*qe;He!==null&&(et=Math.max(et,He.start*qe),Ut=Math.min(Ut,(He.start+He.count)*qe)),Ze!==null?(et=Math.max(et,0),Ut=Math.min(Ut,Ze.count)):ht!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,ht.count));const ln=Ut-et;if(ln<0||ln===1/0)return;ze.setup(te,ee,Be,re,Ze);let qt,Ft=De;if(Ze!==null&&(qt=Oe.get(Ze),Ft=ge,Ft.setIndex(qt)),te.isMesh)ee.wireframe===!0?(b.setLineWidth(ee.wireframeLinewidth*hn()),Ft.setMode(q.LINES)):Ft.setMode(q.TRIANGLES);else if(te.isLine){let Zt=ee.linewidth;Zt===void 0&&(Zt=1),b.setLineWidth(Zt*hn()),te.isLineSegments?Ft.setMode(q.LINES):te.isLineLoop?Ft.setMode(q.LINE_LOOP):Ft.setMode(q.LINE_STRIP)}else te.isPoints?Ft.setMode(q.POINTS):te.isSprite&&Ft.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Ft.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Zt=te._multiDrawStarts,Ye=te._multiDrawCounts,jn=te._multiDrawCount,bt=Ze?Oe.get(Ze).bytesPerElement:1,Pn=ae.get(ee).currentProgram.getUniforms();for(let di=0;di<jn;di++)Pn.setValue(q,"_gl_DrawID",di),Ft.render(Zt[di]/bt,Ye[di])}else if(te.isInstancedMesh)Ft.renderInstances(et,ln,te.count);else if(re.isInstancedBufferGeometry){const Zt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ye=Math.min(re.instanceCount,Zt);Ft.renderInstances(et,ln,Ye)}else Ft.render(et,ln)};function va(A,V,re){A.transparent===!0&&A.side===Ha&&A.forceSinglePass===!1?(A.side=ci,A.needsUpdate=!0,pn(A,V,re),A.side=ws,A.needsUpdate=!0,pn(A,V,re),A.side=Ha):pn(A,V,re)}this.compile=function(A,V,re=null){re===null&&(re=A),P=Ie.get(re),P.init(V),T.push(P),re.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),A!==re&&A.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights();const ee=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let Xe=0;Xe<He.length;Xe++){const Be=He[Xe];va(Be,re,te),ee.add(Be)}else va(He,re,te),ee.add(He)}),P=T.pop(),ee},this.compileAsync=function(A,V,re=null){const ee=this.compile(A,V,re);return new Promise(te=>{function He(){if(ee.forEach(function(Xe){ae.get(Xe).currentProgram.isReady()&&ee.delete(Xe)}),ee.size===0){te(A);return}setTimeout(He,10)}At.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let $i=null;function fi(A){$i&&$i(A)}function ce(){Ee.stop()}function Pe(){Ee.start()}const Ee=new P_;Ee.setAnimationLoop(fi),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(A){$i=A,je.setAnimationLoop(A),A===null?Ee.stop():Ee.start()},je.addEventListener("sessionstart",ce),je.addEventListener("sessionend",Pe),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(A,V);const re=je.enabled===!0&&je.isPresenting===!0,ee=O!==null&&(ne===null||re)&&O.begin(Y,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(V),V=je.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,V,ne),P=Ie.get(A,T.length),P.init(V),P.state.textureUnits=de.getTextureUnits(),T.push(P),fn.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),rt.setFromProjectionMatrix(fn,ua,V.reversedDepth),dt=this.localClippingEnabled,mt=Je.init(this.clippingPlanes,dt),I=Fe.get(A,z.length),I.init(),z.push(I),je.enabled===!0&&je.isPresenting===!0){const Xe=Y.xr.getDepthSensingMesh();Xe!==null&&ut(Xe,V,-1/0,Y.sortObjects)}ut(A,V,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(We,lt,V.reversedDepth),Gt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Gt&&ct.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Je.beginShadows();const te=P.state.shadowsArray;if(it.render(te,A,V),mt===!0&&Je.endShadows(),(ee&&O.hasRenderPass())===!1){const Xe=I.opaque,Be=I.transmissive;if(P.setupLights(),V.isArrayCamera){const Ze=V.cameras;if(Be.length>0)for(let qe=0,nt=Ze.length;qe<nt;qe++){const ht=Ze[qe];Rt(Xe,Be,A,ht)}Gt&&ct.render(A);for(let qe=0,nt=Ze.length;qe<nt;qe++){const ht=Ze[qe];St(I,A,ht,ht.viewport)}}else Be.length>0&&Rt(Xe,Be,A,V),Gt&&ct.render(A),St(I,A,V)}ne!==null&&G===0&&(de.updateMultisampleRenderTarget(ne),de.updateRenderTargetMipmap(ne)),ee&&O.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,V),ze.resetDefaultState(),_e=-1,Re=null,T.pop(),T.length>0?(P=T[T.length-1],de.setTextureUnits(P.state.textureUnits),mt===!0&&Je.setGlobalState(Y.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?I=z[z.length-1]:I=null,j!==null&&j.renderEnd()};function ut(A,V,re,ee){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||rt.intersectsSprite(A)){ee&&rn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fn);const Xe=pe.update(A),Be=A.material;Be.visible&&I.push(A,Xe,Be,re,rn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||rt.intersectsObject(A))){const Xe=pe.update(A),Be=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rn.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),rn.copy(Xe.boundingSphere.center)),rn.applyMatrix4(A.matrixWorld).applyMatrix4(fn)),Array.isArray(Be)){const Ze=Xe.groups;for(let qe=0,nt=Ze.length;qe<nt;qe++){const ht=Ze[qe],et=Be[ht.materialIndex];et&&et.visible&&I.push(A,Xe,et,re,rn.z,ht)}}else Be.visible&&I.push(A,Xe,Be,re,rn.z,null)}}const He=A.children;for(let Xe=0,Be=He.length;Xe<Be;Xe++)ut(He[Xe],V,re,ee)}function St(A,V,re,ee){const{opaque:te,transmissive:He,transparent:Xe}=A;P.setupLightsView(re),mt===!0&&Je.setGlobalState(Y.clippingPlanes,re),ee&&b.viewport(U.copy(ee)),te.length>0&&on(te,V,re),He.length>0&&on(He,V,re),Xe.length>0&&on(Xe,V,re),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Rt(A,V,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ee.id]===void 0){const et=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ee.id]=new ha(1,1,{generateMipmaps:!0,type:et?qa:Ii,minFilter:tr,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const He=P.state.transmissionRenderTarget[ee.id],Xe=ee.viewport||U;He.setSize(Xe.z*Y.transmissionResolutionScale,Xe.w*Y.transmissionResolutionScale);const Be=Y.getRenderTarget(),Ze=Y.getActiveCubeFace(),qe=Y.getActiveMipmapLevel();Y.setRenderTarget(He),Y.getClearColor(Ce),Ge=Y.getClearAlpha(),Ge<1&&Y.setClearColor(16777215,.5),Y.clear(),Gt&&ct.render(re);const nt=Y.toneMapping;Y.toneMapping=da;const ht=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),P.setupLightsView(ee),mt===!0&&Je.setGlobalState(Y.clippingPlanes,ee),on(A,re,ee),de.updateMultisampleRenderTarget(He),de.updateRenderTargetMipmap(He),At.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,ln=V.length;Ut<ln;Ut++){const qt=V[Ut],{object:Ft,geometry:Zt,material:Ye,group:jn}=qt;if(Ye.side===Ha&&Ft.layers.test(ee.layers)){const bt=Ye.side;Ye.side=ci,Ye.needsUpdate=!0,Xt(Ft,re,ee,Zt,Ye,jn),Ye.side=bt,Ye.needsUpdate=!0,et=!0}}et===!0&&(de.updateMultisampleRenderTarget(He),de.updateRenderTargetMipmap(He))}Y.setRenderTarget(Be,Ze,qe),Y.setClearColor(Ce,Ge),ht!==void 0&&(ee.viewport=ht),Y.toneMapping=nt}function on(A,V,re){const ee=V.isScene===!0?V.overrideMaterial:null;for(let te=0,He=A.length;te<He;te++){const Xe=A[te],{object:Be,geometry:Ze,group:qe}=Xe;let nt=Xe.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Be.layers.test(re.layers)&&Xt(Be,V,re,Ze,nt,qe)}}function Xt(A,V,re,ee,te,He){A.onBeforeRender(Y,V,re,ee,te,He),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(Y,V,re,ee,A,He),te.transparent===!0&&te.side===Ha&&te.forceSinglePass===!1?(te.side=ci,te.needsUpdate=!0,Y.renderBufferDirect(re,V,ee,te,A,He),te.side=ws,te.needsUpdate=!0,Y.renderBufferDirect(re,V,ee,te,A,He),te.side=Ha):Y.renderBufferDirect(re,V,ee,te,A,He),A.onAfterRender(Y,V,re,ee,te,He)}function pn(A,V,re){V.isScene!==!0&&(V=xn);const ee=ae.get(A),te=P.state.lights,He=P.state.shadowsArray,Xe=te.state.version,Be=Ue.getParameters(A,te.state,He,V,re,P.state.lightProbeGridArray),Ze=Ue.getProgramCacheKey(Be);let qe=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,ee.fog=V.fog;const nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=we.get(A.envMap||ee.environment,nt),ee.envMapRotation=ee.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Vn),qe=new Map,ee.programs=qe);let ht=qe.get(Ze);if(ht!==void 0){if(ee.currentProgram===ht&&ee.lightsStateVersion===Xe)return st(A,Be),ht}else Be.uniforms=Ue.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,re,Be),A.onBeforeCompile(Be,Y),ht=Ue.acquireProgram(Be,Ze),qe.set(Ze,ht),ee.uniforms=Be.uniforms;const et=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=Je.uniform),st(A,Be),ee.needsLights=bn(A),ee.lightsStateVersion=Xe,ee.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=P.state.lightProbeGridArray.length>0,ee.currentProgram=ht,ee.uniformsList=null,ht}function tn(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=fu.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function st(A,V){const re=ae.get(A);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function Ne(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;N.setFromMatrixPosition(V.matrixWorld);for(let re=0,ee=A.length;re<ee;re++){const te=A[re];if(te.texture!==null&&te.boundingBox.containsPoint(N))return te}return null}function jt(A,V,re,ee,te){V.isScene!==!0&&(V=xn),de.resetTextureUnits();const He=V.fog,Xe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?V.environment:null,Be=ne===null?Y.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ot.workingColorSpace,Ze=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,qe=we.get(ee.envMap||Xe,Ze),nt=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ht=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),et=!!re.morphAttributes.position,Ut=!!re.morphAttributes.normal,ln=!!re.morphAttributes.color;let qt=da;ee.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(qt=Y.toneMapping);const Ft=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Zt=Ft!==void 0?Ft.length:0,Ye=ae.get(ee),jn=P.state.lights;if(mt===!0&&(dt===!0||A!==Re)){const Yt=A===Re&&ee.id===_e;Je.setState(ee,A,Yt)}let bt=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==jn.state.version||Ye.outputColorSpace!==Be||te.isBatchedMesh&&Ye.batching===!1||!te.isBatchedMesh&&Ye.batching===!0||te.isBatchedMesh&&Ye.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ye.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ye.instancing===!1||!te.isInstancedMesh&&Ye.instancing===!0||te.isSkinnedMesh&&Ye.skinning===!1||!te.isSkinnedMesh&&Ye.skinning===!0||te.isInstancedMesh&&Ye.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ye.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ye.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ye.instancingMorph===!1&&te.morphTexture!==null||Ye.envMap!==qe||ee.fog===!0&&Ye.fog!==He||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Je.numPlanes||Ye.numIntersection!==Je.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==ht||Ye.morphTargets!==et||Ye.morphNormals!==Ut||Ye.morphColors!==ln||Ye.toneMapping!==qt||Ye.morphTargetsCount!==Zt||!!Ye.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ye.__version=ee.version);let Pn=Ye.currentProgram;bt===!0&&(Pn=pn(ee,V,te),j&&ee.isNodeMaterial&&j.onUpdateProgram(ee,Pn,Ye));let di=!1,Bi=!1,hi=!1;const Kt=Pn.getUniforms(),_n=Ye.uniforms;if(b.useProgram(Pn.program)&&(di=!0,Bi=!0,hi=!0),ee.id!==_e&&(_e=ee.id,Bi=!0),Ye.needsLights){const Yt=Ne(P.state.lightProbeGridArray,te);Ye.lightProbeGrid!==Yt&&(Ye.lightProbeGrid=Yt,Bi=!0)}if(di||Re!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Kt.setValue(q,"projectionMatrix",A.projectionMatrix),Kt.setValue(q,"viewMatrix",A.matrixWorldInverse);const ea=Kt.map.cameraPosition;ea!==void 0&&ea.setValue(q,dn.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Kt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Kt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),Re!==A&&(Re=A,Bi=!0,hi=!0)}if(Ye.needsLights&&(jn.state.directionalShadowMap.length>0&&Kt.setValue(q,"directionalShadowMap",jn.state.directionalShadowMap,de),jn.state.spotShadowMap.length>0&&Kt.setValue(q,"spotShadowMap",jn.state.spotShadowMap,de),jn.state.pointShadowMap.length>0&&Kt.setValue(q,"pointShadowMap",jn.state.pointShadowMap,de)),te.isSkinnedMesh){Kt.setOptional(q,te,"bindMatrix"),Kt.setOptional(q,te,"bindMatrixInverse");const Yt=te.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Kt.setValue(q,"boneTexture",Yt.boneTexture,de))}te.isBatchedMesh&&(Kt.setOptional(q,te,"batchingTexture"),Kt.setValue(q,"batchingTexture",te._matricesTexture,de),Kt.setOptional(q,te,"batchingIdTexture"),Kt.setValue(q,"batchingIdTexture",te._indirectTexture,de),Kt.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&Kt.setValue(q,"batchingColorTexture",te._colorsTexture,de));const Hi=re.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&X.update(te,re,Pn),(Bi||Ye.receiveShadow!==te.receiveShadow)&&(Ye.receiveShadow=te.receiveShadow,Kt.setValue(q,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&V.environment!==null&&(_n.envMapIntensity.value=V.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=WR()),Bi){if(Kt.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Ye.needsLights&&Ct(_n,hi),He&&ee.fog===!0&&Ve.refreshFogUniforms(_n,He),Ve.refreshMaterialUniforms(_n,ee,Te,ye,P.state.transmissionRenderTarget[A.id]),Ye.needsLights&&Ye.lightProbeGrid){const Yt=Ye.lightProbeGrid;_n.probesSH.value=Yt.texture,_n.probesMin.value.copy(Yt.boundingBox.min),_n.probesMax.value.copy(Yt.boundingBox.max),_n.probesResolution.value.copy(Yt.resolution)}fu.upload(q,tn(Ye),_n,de)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(fu.upload(q,tn(Ye),_n,de),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Kt.setValue(q,"center",te.center),Kt.setValue(q,"modelViewMatrix",te.modelViewMatrix),Kt.setValue(q,"normalMatrix",te.normalMatrix),Kt.setValue(q,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){const Yt=ee.uniformsGroups;for(let ea=0,Qa=Yt.length;ea<Qa;ea++){const Ns=Yt[ea];be.update(Ns,Pn),be.bind(Ns,Pn)}}return Pn}function Ct(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function bn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,V,re){const ee=ae.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=V,ae.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const re=ae.get(A);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,re=0){ne=A,B=V,G=re;let ee=null,te=!1,He=!1;if(A){const Be=ae.get(A);if(Be.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Be.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),Ae=A.scissorTest,b.viewport(U),b.scissor(Z),b.setScissorTest(Ae),_e=-1;return}else if(Be.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Be.__hasExternalTextures)de.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const nt=A.depthTexture;if(Be.__boundDepthTexture!==nt){if(nt!==null&&ae.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(He=!0);const qe=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[V])?ee=qe[V][re]:ee=qe[V],te=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ee=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ee=qe[re]:ee=qe,U.copy(A.viewport),Z.copy(A.scissor),Ae=A.scissorTest}else U.copy($e).multiplyScalar(Te).floor(),Z.copy(en).multiplyScalar(Te).floor(),Ae=_t;if(re!==0&&(ee=ue),b.bindFramebuffer(q.FRAMEBUFFER,ee)&&b.drawBuffers(A,ee),b.viewport(U),b.scissor(Z),b.setScissorTest(Ae),te){const Be=ae.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,re)}else if(He){const Be=V;for(let Ze=0;Ze<A.textures.length;Ze++){const qe=ae.get(A.textures[Ze]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ze,qe.__webglTexture,re,Be)}}else if(A!==null&&re!==0){const Be=ae.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Be.__webglTexture,re)}_e=-1},this.readRenderTargetPixels=function(A,V,re,ee,te,He,Xe,Be=0){if(!(A&&A.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){b.bindFramebuffer(q.FRAMEBUFFER,Ze);try{const qe=A.textures[Be],nt=qe.format,ht=qe.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Be),!D.textureFormatReadable(nt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ht)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-ee&&re>=0&&re<=A.height-te&&q.readPixels(V,re,ee,te,Le.convert(nt),Le.convert(ht),He)}finally{const qe=ne!==null?ae.get(ne).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,V,re,ee,te,He,Xe,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze)if(V>=0&&V<=A.width-ee&&re>=0&&re<=A.height-te){b.bindFramebuffer(q.FRAMEBUFFER,Ze);const qe=A.textures[Be],nt=qe.format,ht=qe.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Be),!D.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,et),q.bufferData(q.PIXEL_PACK_BUFFER,He.byteLength,q.STREAM_READ),q.readPixels(V,re,ee,te,Le.convert(nt),Le.convert(ht),0);const Ut=ne!==null?ae.get(ne).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Ut);const ln=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await db(q,ln,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,et),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,He),q.deleteBuffer(et),q.deleteSync(ln),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,re=0){const ee=Math.pow(2,-re),te=Math.floor(A.image.width*ee),He=Math.floor(A.image.height*ee),Xe=V!==null?V.x:0,Be=V!==null?V.y:0;de.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,Xe,Be,te,He),b.unbindTexture()},this.copyTextureToTexture=function(A,V,re=null,ee=null,te=0,He=0){let Xe,Be,Ze,qe,nt,ht,et,Ut,ln;const qt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(re!==null)Xe=re.max.x-re.min.x,Be=re.max.y-re.min.y,Ze=re.isBox3?re.max.z-re.min.z:1,qe=re.min.x,nt=re.min.y,ht=re.isBox3?re.min.z:0;else{const _n=Math.pow(2,-te);Xe=Math.floor(qt.width*_n),Be=Math.floor(qt.height*_n),A.isDataArrayTexture?Ze=qt.depth:A.isData3DTexture?Ze=Math.floor(qt.depth*_n):Ze=1,qe=0,nt=0,ht=0}ee!==null?(et=ee.x,Ut=ee.y,ln=ee.z):(et=0,Ut=0,ln=0);const Ft=Le.convert(V.format),Zt=Le.convert(V.type);let Ye;V.isData3DTexture?(de.setTexture3D(V,0),Ye=q.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(de.setTexture2DArray(V,0),Ye=q.TEXTURE_2D_ARRAY):(de.setTexture2D(V,0),Ye=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,V.unpackAlignment);const jn=b.getParameter(q.UNPACK_ROW_LENGTH),bt=b.getParameter(q.UNPACK_IMAGE_HEIGHT),Pn=b.getParameter(q.UNPACK_SKIP_PIXELS),di=b.getParameter(q.UNPACK_SKIP_ROWS),Bi=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,qt.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,qt.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,qe),b.pixelStorei(q.UNPACK_SKIP_ROWS,nt),b.pixelStorei(q.UNPACK_SKIP_IMAGES,ht);const hi=A.isDataArrayTexture||A.isData3DTexture,Kt=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const _n=ae.get(A),Hi=ae.get(V),Yt=ae.get(_n.__renderTarget),ea=ae.get(Hi.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,Yt.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let Qa=0;Qa<Ze;Qa++)hi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,te,ht+Qa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ae.get(V).__webglTexture,He,ln+Qa)),q.blitFramebuffer(qe,nt,Xe,Be,et,Ut,Xe,Be,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||ae.has(A)){const _n=ae.get(A),Hi=ae.get(V);b.bindFramebuffer(q.READ_FRAMEBUFFER,ve),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,K);for(let Yt=0;Yt<Ze;Yt++)hi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,_n.__webglTexture,te,ht+Yt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_n.__webglTexture,te),Kt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Hi.__webglTexture,He,ln+Yt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Hi.__webglTexture,He),te!==0?q.blitFramebuffer(qe,nt,Xe,Be,et,Ut,Xe,Be,q.COLOR_BUFFER_BIT,q.NEAREST):Kt?q.copyTexSubImage3D(Ye,He,et,Ut,ln+Yt,qe,nt,Xe,Be):q.copyTexSubImage2D(Ye,He,et,Ut,qe,nt,Xe,Be);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Kt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ye,He,et,Ut,ln,Xe,Be,Ze,Ft,Zt,qt.data):V.isCompressedArrayTexture?q.compressedTexSubImage3D(Ye,He,et,Ut,ln,Xe,Be,Ze,Ft,qt.data):q.texSubImage3D(Ye,He,et,Ut,ln,Xe,Be,Ze,Ft,Zt,qt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,He,et,Ut,Xe,Be,Ft,Zt,qt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,He,et,Ut,qt.width,qt.height,Ft,qt.data):q.texSubImage2D(q.TEXTURE_2D,He,et,Ut,Xe,Be,Ft,Zt,qt);b.pixelStorei(q.UNPACK_ROW_LENGTH,jn),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,bt),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Pn),b.pixelStorei(q.UNPACK_SKIP_ROWS,di),b.pixelStorei(q.UNPACK_SKIP_IMAGES,Bi),He===0&&V.generateMipmaps&&q.generateMipmap(Ye),b.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,G=0,ne=null,b.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const Li=[.95,.97,1],_h=[1,.84,.56],oa=[1,.62,.26],Oi=[.26,.5,1],Sh=[.36,.39,.49],fl=2*Math.PI,pt=()=>Math.random();function yn(r,e,i,s=1){r[3*e]=Math.min(1.35,i[0]*s),r[3*e+1]=Math.min(1.35,i[1]*s),r[3*e+2]=Math.min(1.35,i[2]*s)}function Js(r){const e=pt()*fl,i=2*pt()-1,s=Math.sqrt(Math.max(0,1-i*i));r[0]=Math.cos(e)*s,r[1]=i,r[2]=Math.sin(e)*s}function Lx(r,e,i,s){const l=s.reduce((f,p)=>f+p.w,0);let c=0;for(let f=0;f<s.length;f++){const p=f===s.length-1?r-c:Math.round(s[f].w/l*r);for(let m=0;m<p&&c<r;m++,c++)s[f].emit(e,i,c,p>1?m/(p-1):0)}for(;c<r;)s[s.length-1].emit(e,i,c,pt()),c++}function yh(r,e,i,s,l){let c=0,f=0,p=0;for(let _=0;_<r;_++)c+=e[3*_],f+=e[3*_+1],p+=e[3*_+2];c/=r,f/=r,p/=r;const m=Math.cos(i),h=Math.sin(i),g=Math.cos(s),v=Math.sin(s),x=Math.cos(l),M=Math.sin(l);let E=1e-6;for(let _=0;_<r;_++){let S=e[3*_]-c,L=e[3*_+1]-f,F=e[3*_+2]-p;const N=L*m-F*h,I=L*h+F*m;L=N,F=I;const P=S*g+F*v;F=-S*v+F*g,S=P;const z=S*x-L*M,T=S*M+L*x;S=z,L=T,e[3*_]=S,e[3*_+1]=L,e[3*_+2]=F;const O=S*S+L*L+F*F;O>E&&(E=O)}const C=1/Math.sqrt(E);for(let _=0;_<r;_++)e[3*_]*=C,e[3*_+1]*=C,e[3*_+2]*=C}const ll=[{rx:.2,ry:0,a:1,b:.6},{rx:1.15,ry:.5,a:.86,b:.62},{rx:.6,ry:-.7,a:1.02,b:.54},{rx:1.45,ry:.95,a:.78,b:.7},{rx:.35,ry:1.25,a:.92,b:.5},{rx:-.5,ry:.4,a:.84,b:.66}],Ox=[{o:0,ang:.6,blue:!0},{o:1,ang:2.4,blue:!0},{o:2,ang:4.1,blue:!0},{o:3,ang:1.2,blue:!0},{o:4,ang:3.3,blue:!1},{o:1,ang:5,blue:!1},{o:5,ang:.25,blue:!1}];function Mh(r,e,i,s){const l=Math.cos(e)*r.a*i;let c=Math.sin(e)*r.b*i,f=0;const p=c*Math.cos(r.rx)-f*Math.sin(r.rx),m=c*Math.sin(r.rx)+f*Math.cos(r.rx);c=p,f=m;const h=l*Math.cos(r.ry)+f*Math.sin(r.ry),g=-l*Math.sin(r.ry)+f*Math.cos(r.ry);s[0]=h,s[1]=c,s[2]=g}const qR=[{lat:60,lon:-103,dlat:16,dlon:30},{lat:43,lon:-98,dlat:11,dlon:20},{lat:64,lon:-150,dlat:8,dlon:16},{lat:26,lon:-103,dlat:8,dlon:8},{lat:12,lon:-84,dlat:6,dlon:6},{lat:73,lon:-42,dlat:9,dlon:14},{lat:6,lon:-68,dlat:8,dlon:9},{lat:-9,lon:-55,dlat:13,dlon:15},{lat:-27,lon:-62,dlat:11,dlon:8},{lat:-43,lon:-69,dlat:10,dlon:5},{lat:20,lon:-2,dlat:12,dlon:16},{lat:6,lon:21,dlat:12,dlon:15},{lat:-12,lon:23,dlat:13,dlon:12},{lat:-30,lon:23,dlat:8,dlon:7},{lat:9,lon:42,dlat:8,dlon:7},{lat:52,lon:12,dlat:9,dlon:20},{lat:60,lon:40,dlat:10,dlon:20},{lat:58,lon:92,dlat:18,dlon:44},{lat:40,lon:70,dlat:13,dlon:24},{lat:30,lon:106,dlat:12,dlon:18},{lat:22,lon:80,dlat:9,dlon:11},{lat:28,lon:46,dlat:9,dlon:11},{lat:-26,lon:134,dlat:10,dlon:17},{lat:-2,lon:117,dlat:6,dlon:15}],YR=`
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
`,jR=`
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
`;function nu(r,e,i,s,l,c,f,p,m,h){const g=pt();Js(h),r[3*e]=i+(c-i)*g+h[0]*m,r[3*e+1]=s+(f-s)*g+h[1]*m,r[3*e+2]=l+(p-l)*g+h[2]*m}function Px(r){return r*r*r*(r*(6*r-15)+10)}const Fx=r=>r<0?0:r>1?1:r,ZR=[.12,.02,.18,0,.06,.18,.05],KR=[1,0,1,0,1,1,1],iu=[[-46,0],[0,34],[46,0],[-46,0],[0,40],[0,32],[0,26]];function Ix({isSecondaryPage:r=!1}){const e=me.useRef(null),i=me.useRef(null),[s,l]=me.useState(0);return Qx(),me.useEffect(()=>{const c=e.current,f=i.current;if(!c||!f)return;const p=new URLSearchParams(window.location.search).has("card");window.matchMedia("(prefers-reduced-motion: reduce)").matches;const m=window.innerWidth,h=navigator.hardwareConcurrency||8;let g=56e3;m>=1600&&h>=8&&(g=7e4),m<1280&&(g=44e3),m<900&&(g=32e3),m<720&&(g=2e4),h<=4&&(g=Math.round(.62*g)),p&&(g=Math.min(g,14e3));const v=document.createElement("canvas");v.className="neb-gl",f.appendChild(v);const x=new XR({canvas:v,antialias:!0,alpha:!0}),M=Math.min(window.devicePixelRatio||1,1.75);x.setPixelRatio(M),x.setClearColor(0,0);const E=new Cb,C=new Fi(45,1,.1,200);C.position.set(0,0,15);let S=15*Math.tan(Math.PI/180*22.5),L=S;const F=new Float32Array(3*g),N=new Float32Array(3*g),I=new Float32Array(g),P=new Float32Array(g),z=new Float32Array(g),T=new Float32Array(3*g);for(let ce=0;ce<g;ce++){P[ce]=Math.random(),z[ce]=Math.random();const Pe=Math.random()*Math.PI*2,Ee=(Math.random()-.5)*Math.PI;T[3*ce]=Math.cos(Pe)*Math.cos(Ee),T[3*ce+1]=Math.sin(Ee),T[3*ce+2]=Math.sin(Pe)*Math.cos(Ee)}const O=new Qi;O.setAttribute("position",new bi(F,3)),O.setAttribute("aColor",new bi(N,3)),O.setAttribute("aSize",new bi(I,1));const Y=new Ki({vertexShader:YR,fragmentShader:jR,uniforms:{uSize:{value:.05},uScale:{value:1e3},uNear:{value:2},uFar:{value:58}},transparent:!0,blending:Th,depthTest:!1,depthWrite:!1}),k=new Bb(O,Y);E.add(k);const j=[0,0,0],ue=[0,0,0],ve=new Float32Array(3*g),K=new Float32Array(3*g),B=90,G=3,ne=1,_e=1.2,Re=2.399963229728653,U=new Ht;for(let ce=0;ce<g;ce++){const Pe=(ce+.5)/g,Ee=ce*Re,ut=Pe*24-12,St=1-Math.abs(Math.sin(ut*.5)),Rt=B*(.08+1.9*Pe*Pe),on=Ee+G*Math.log(Rt+1),Xt=1/(1+Rt*.015),pn=_e*Xt*Xt,tn=Rt*Math.cos(on),st=Rt*Math.sin(on),Ne=tn+pn*st,jt=st-pn*tn,Ct=B*.22*St*Math.sin(Ee*.17)*ne,bn=3*ce;ve[bn]=Ne,ve[bn+1]=Ct,ve[bn+2]=jt;const A=1-Math.min(1,Rt/(B*2)),V=.08+.58*(1-A),re=.8+.2*A,ee=.15+.55*Math.pow(A,1.5);U.setHSL(V,re,ee),K[bn]=Math.min(1.4,U.r*1.35),K[bn+1]=Math.min(1.4,U.g*1.35),K[bn+2]=Math.min(1.4,U.b*1.35)}yh(g,ve,.45,-.2,.15);const Z=new Float32Array(3*g),Ae=new Float32Array(3*g);Lx(g,Z,Ae,[{w:20,emit:(ce,Pe,Ee)=>{Js(j);const ut=.27*Math.pow(pt(),.5);ce[3*Ee]=j[0]*ut,ce[3*Ee+1]=j[1]*ut,ce[3*Ee+2]=j[2]*ut,yn(Pe,Ee,ut<.08?Li:pt()<.2?_h:oa,.95+.4*pt())}},{w:6,emit:(ce,Pe,Ee)=>{Js(j);const ut=.27+.2*pt();ce[3*Ee]=j[0]*ut,ce[3*Ee+1]=j[1]*ut,ce[3*Ee+2]=j[2]*ut,yn(Pe,Ee,pt()<.5?Li:oa,.7+.3*pt())}},{w:42,emit:(ce,Pe,Ee)=>{Mh(ll[Math.floor(pt()*ll.length)],pt()*fl,1,ue),ce[3*Ee]=ue[0]+(pt()-.5)*.014,ce[3*Ee+1]=ue[1]+(pt()-.5)*.014,ce[3*Ee+2]=ue[2]+(pt()-.5)*.014,yn(Pe,Ee,pt()<.15?Li:oa,.8+.3*pt())}},{w:26,emit:(ce,Pe,Ee)=>{const ut=Ox[Math.floor(pt()*Ox.length)];Mh(ll[ut.o],ut.ang,1,ue),Js(j);const St=ut.blue?.12:.075;ce[3*Ee]=ue[0]+j[0]*St,ce[3*Ee+1]=ue[1]+j[1]*St,ce[3*Ee+2]=ue[2]+j[2]*St,yn(Pe,Ee,ut.blue?Oi:oa,ut.blue?1+.3*pt():.9+.3*pt())}},{w:6,emit:(ce,Pe,Ee)=>{Mh(ll[Math.floor(pt()*ll.length)],pt()*fl,.4+.6*pt(),ue),ce[3*Ee]=ue[0],ce[3*Ee+1]=ue[1],ce[3*Ee+2]=ue[2],yn(Pe,Ee,Sh,.5+.3*pt())}}]),yh(g,Z,.38,.12,0);const Ce=new Float32Array(3*g),Ge=new Float32Array(3*g),$=[0,0,0];Lx(g,Ce,Ge,[{w:20,emit:(ce,Pe,Ee)=>{Js($),ce[3*Ee]=.5*$[0],ce[3*Ee+1]=.72+.5*$[1],ce[3*Ee+2]=.5*$[2],Math.abs($[0])>.72&&pt()<.6?yn(Pe,Ee,Oi,.9):yn(Pe,Ee,Li,.9+.25*pt())}},{w:10,emit:(ce,Pe,Ee)=>{const ut=pt()*fl,St=.31*(.2+.8*Math.sqrt(pt())),Rt=Math.cos(ut)*St,on=Math.sin(ut)*St,Xt=Math.sqrt(Math.max(0,.25-St*St));ce[3*Ee]=Rt,ce[3*Ee+1]=.72+.9*on,ce[3*Ee+2]=Xt+.02,yn(Pe,Ee,pt()<.3?Oi:Li,1+.2*pt())}},{w:17,emit:(ce,Pe,Ee)=>{const ut=-.16+.5*pt(),St=.34*(.86+.14*Math.sin((ut+.16)/.5*Math.PI)),Rt=pt()*fl;ce[3*Ee]=Math.cos(Rt)*St,ce[3*Ee+1]=.1+ut,ce[3*Ee+2]=Math.sin(Rt)*St,Math.sin(Rt)>.55&&pt()<.4?yn(Pe,Ee,Li):yn(Pe,Ee,pt()<.2?_h:oa,.85+.35*pt())}},{w:6,emit:(ce,Pe,Ee)=>{ce[3*Ee]=(pt()-.5)*.34,ce[3*Ee+1]=.16+(pt()-.5)*.34,ce[3*Ee+2]=-.34-.12*pt(),yn(Pe,Ee,pt()<.5?Oi:Sh,.85)}},{w:9,emit:(ce,Pe,Ee)=>{nu(ce,Ee,-.34,.26,0,-.5,.64,.06,.12,$),yn(Pe,Ee,ce[3*Ee+1]>.55?Li:Oi,.9+.2*pt())}},{w:9,emit:(ce,Pe,Ee)=>{nu(ce,Ee,.34,.2,0,.46,-.08,.06,.12,$),yn(Pe,Ee,ce[3*Ee+1]<0?Li:Oi,.9+.2*pt())}},{w:7,emit:(ce,Pe,Ee)=>{nu(ce,Ee,-.16,-.18,0,-.18,-.56,.02,.135,$),yn(Pe,Ee,pt()<.4?oa:Oi,.85)}},{w:7,emit:(ce,Pe,Ee)=>{nu(ce,Ee,.16,-.18,0,.18,-.56,.02,.135,$),yn(Pe,Ee,pt()<.4?oa:Oi,.85)}},{w:4,emit:(ce,Pe,Ee)=>{Js($),ce[3*Ee]=-.18+.14*$[0],ce[3*Ee+1]=-.72+.1*$[1],ce[3*Ee+2]=.06+.16*$[2],yn(Pe,Ee,pt()<.5?Li:Oi,.9)}},{w:4,emit:(ce,Pe,Ee)=>{Js($),ce[3*Ee]=.18+.14*$[0],ce[3*Ee+1]=-.72+.1*$[1],ce[3*Ee+2]=.06+.16*$[2],yn(Pe,Ee,pt()<.5?Li:Oi,.9)}}]),yh(g,Ce,.05,-.3,0);const ye=new Float32Array(3*g),Te=new Float32Array(g),We=new Float32Array(3*g),lt=Math.PI*(3-Math.sqrt(5));for(let ce=0;ce<g;ce++){const Pe=1-ce/(g-1)*2,Ee=Math.sqrt(Math.max(0,1-Pe*Pe)),ut=lt*ce,St=Math.cos(ut)*Ee,Rt=Math.sin(ut)*Ee,on=(()=>{const Xt=180*Math.asin(Math.max(-1,Math.min(1,Pe)))/Math.PI,pn=180*Math.atan2(Rt,St)/Math.PI;let tn=0;for(const st of qR){let Ne=Math.abs(pn-st.lon);Ne>180&&(Ne=360-Ne);const jt=(Xt-st.lat)/st.dlat,Ct=Ne/st.dlon,bn=Math.exp(-(jt*jt+Ct*Ct));bn>tn&&(tn=bn)}return tn+=.1*Math.sin(.5*Xt+1)*Math.sin(.4*pn+2),Xt<-68&&(tn=Math.max(tn,.8)),tn})();if(ye[3*ce]=St,ye[3*ce+1]=Pe,ye[3*ce+2]=Rt,Te[ce]=on,on>.6)yn(We,ce,Math.random()<.16?Li:oa,.9+.3*Math.random());else if(on>.42)yn(We,ce,Math.random()<.32?_h:oa,1.12+.3*Math.random());else{const Xt=180*Math.atan2(Rt,St)/Math.PI,pn=1.1>Math.abs((180*Math.asin(Pe)/Math.PI+900)%18-9)||1.1>Math.abs((Xt+900)%18-9);yn(We,ce,Oi,pn?.7+.2*Math.random():.4+.18*Math.random())}}const $e=new Float32Array(3*g);for(let ce=0;ce<g;ce++){const Pe=Math.random();Pe<.5?yn($e,ce,Li,.68+.4*Math.random()):Pe<.78?yn($e,ce,Oi,.68+.4*Math.random()):Pe<.92?yn($e,ce,oa,.68+.4*Math.random()):yn($e,ce,Sh,.6+.3*Math.random())}const en=[K,$e,Ae,$e,We,Ge,Ge];for(let ce=0;ce<g;ce++)I[ce]=Math.random()<.14?1+.8*Math.random():.5+.7*Math.random();O.attributes.aSize.needsUpdate=!0;const _t=I.slice(),rt=[];for(let ce=0;ce<7;ce++)rt.push(new Float32Array(3*g));const mt=new Float32Array(7),dt=new Float32Array(7),fn=new Float32Array(7),dn=new Float32Array(7);let rn=1,xn=0,Gt=48;function hn(){const ce=f.clientWidth||window.innerWidth,Pe=f.clientHeight||window.innerHeight;x.setSize(ce,Pe,!1),C.aspect=ce/Pe,C.updateProjectionMatrix(),S=15*Math.tan(Math.PI/180*22.5),L=ce/Pe*S;const Ee=Math.min(window.devicePixelRatio||1,1.75);Y.uniforms.uScale.value=Pe*Ee/(2*Math.tan(Math.PI/180*22.5)),Y.uniforms.uSize.value=ce<720?.075:.05;const ut=.98*S,St=.8*S,Rt=.5*S,on=.3*S;for(let st=0;st<g;st++){const Ne=3*st;rt[0][Ne]=ve[Ne]*ut,rt[0][Ne+1]=ve[Ne+1]*ut,rt[0][Ne+2]=ve[Ne+2]*ut,rt[2][Ne]=Z[Ne]*St,rt[2][Ne+1]=Z[Ne+1]*St,rt[2][Ne+2]=Z[Ne+2]*St,rt[5][Ne]=Ce[Ne]*Rt,rt[5][Ne+1]=Ce[Ne+1]*Rt,rt[5][Ne+2]=Ce[Ne+2]*Rt,rt[6][Ne]=Ce[Ne]*on,rt[6][Ne+1]=Ce[Ne+1]*on,rt[6][Ne+2]=Ce[Ne+2]*on}const Xt=rt[1];for(let st=0;st<g;st++)Xt[3*st]=(Math.random()-.5)*L*4.4,Xt[3*st+1]=(Math.random()-.5)*S*3.4,Xt[3*st+2]=9-50*Math.pow(Math.random(),.7);const pn=rt[3];Gt=50;for(let st=0;st<g;st++){const Ne=Math.random(),jt=9-Ne*Gt,Ct=Ne*Math.PI*7+st%11,bn=S*(.16+.82*Ne);pn[3*st]=Math.cos(Ct)*bn,pn[3*st+1]=Math.sin(Ct)*bn*.82,pn[3*st+2]=jt}const tn=rt[4];for(let st=0;st<g;st++){const Ne=S*(1+.014*Te[st]);tn[3*st]=ye[3*st]*Ne,tn[3*st+1]=ye[3*st+1]*Ne,tn[3*st+2]=ye[3*st+2]*Ne}mt[0]=r?0:.4*L,dt[0]=r?0:.04*S,mt[1]=0,dt[1]=0,mt[2]=-.32*L,dt[2]=.02*S,mt[3]=0,dt[3]=0,mt[4]=.48*L,dt[4]=-.02*S,mt[5]=0,dt[5]=-.04*S,mt[6]=0,dt[6]=0}hn();let q=!1;const Vt=new ResizeObserver(()=>{q||(q=!0,requestAnimationFrame(()=>{q=!1,hn()}))});Vt.observe(f);const At=Array.from(f.querySelectorAll(".neb-sec")),D=Array.from(f.querySelectorAll(".neb-dot")),b=f.querySelector(".neb-team-row"),Q=f.querySelector(".neb-hint"),ae=!p;let de=0,we=0,Oe=!1,he=!1;function pe(ce){he||(de=(ce.clientX/window.innerWidth-.5)*2,we=-2*(ce.clientY/window.innerHeight-.5),Oe=!0)}function Ue(){Oe=!1}function Ve(ce){he=!0,ce.touches.length>0&&(de=(ce.touches[0].clientX/window.innerWidth-.5)*2,we=-2*(ce.touches[0].clientY/window.innerHeight-.5),Oe=!0)}function Fe(){Oe=!1}function Ie(ce){if(!ce.beta||!ce.gamma||he)return;const Pe=Math.max(-1,Math.min(1,(ce.beta-45)/45)),Ee=Math.max(-1,Math.min(1,ce.gamma/45));de+=(Ee-de)*.1,we+=(-Pe-we)*.1}ae&&(window.addEventListener("pointermove",pe,{passive:!0}),document.addEventListener("pointerleave",Ue),window.addEventListener("touchstart",Ve,{passive:!0}),window.addEventListener("touchmove",Ve,{passive:!0}),window.addEventListener("touchend",Fe),window.addEventListener("touchcancel",Fe),window.addEventListener("deviceorientation",Ie,{passive:!0}));const Je=new oe;let it=0,ct=0,X=0,De=!1;const ge=new Float32Array(3*g),Le=new Float32Array(g),ze=[0,0,0],be=[0,0,0];let Ke=0;function je(ce,Pe,Ee){const ut=rt[ce],St=ut[3*Pe],Rt=ut[3*Pe+1],on=ut[3*Pe+2],Xt=fn[ce],pn=dn[ce];let tn=St*Xt+on*pn,st=-St*pn+on*Xt,Ne=Rt;KR[ce]&&(tn*=rn,Ne*=rn,st*=rn),ce===3&&(st+=xn,st>9&&(st-=Gt)),Ee[0]=tn+mt[ce],Ee[1]=Ne+dt[ce],Ee[2]=st}function un(ce,Pe){for(let Ne=0;Ne<7;Ne++){const jt=Pe*ZR[Ne];fn[Ne]=Math.cos(jt),dn[Ne]=Math.sin(jt)}rn=1+.024*Math.sin(.7*Pe),xn=2.4*Pe%Gt;const Ee=6*ce,ut=Math.min(5,Math.floor(Ee)),St=Px(Fx((Ee-ut-.2)/.6));Ke=Math.sin(St*Math.PI);const Rt=en[ut],on=en[ut+1];if(De=!1,ae&&Oe&&(Je.set(de,we,.5).unproject(C).sub(C.position),Math.abs(Je.z)>1e-4)){const Ne=-C.position.z/Je.z;it=C.position.x+Je.x*Ne,ct=C.position.y+Je.y*Ne,X=C.position.z+Je.z*Ne,De=!0}const Xt=.5*S,pn=Xt*Xt,tn=.36*S;for(let Ne=0;Ne<g;Ne++){let jt=(St-.34*P[Ne])/.66;jt=Px(jt<0?0:jt>1?1:jt),je(ut,Ne,ze),je(ut+1,Ne,be);const Ct=z[Ne],bn=Math.sin(.6*Pe+6.283*Ct),A=Math.cos(.47*Pe+6.283*Ct),V=3*Ne;let re=ze[0]+(be[0]-ze[0])*jt+T[V]*Ke*.62+.05*bn,ee=ze[1]+(be[1]-ze[1])*jt+T[V+1]*Ke*.62+.05*A,te=ze[2]+(be[2]-ze[2])*jt+T[V+2]*Ke*.62+bn*A*.06,He=0,Xe=0,Be=0,Ze=0;if(De){const nt=re-it,ht=ee-ct,et=te-X,Ut=nt*nt+ht*ht+et*et;if(Ut<pn){const ln=Math.sqrt(Ut)||.001,qt=1-ln/Xt;Ze=qt*qt;const Ft=tn*Ze/ln;He=nt*Ft,Xe=ht*Ft,Be=et*Ft}}ge[V]+=(He-ge[V])*.16,ge[V+1]+=(Xe-ge[V+1])*.16,ge[V+2]+=(Be-ge[V+2])*.16,Le[Ne]+=(Ze-Le[Ne])*.16,F[V]=re+ge[V],F[V+1]=ee+ge[V+1],F[V+2]=te+ge[V+2];const qe=1+.95*Le[Ne];N[V]=Math.min(1.55,(Rt[V]+(on[V]-Rt[V])*St)*qe),N[V+1]=Math.min(1.55,(Rt[V+1]+(on[V+1]-Rt[V+1])*St)*qe),N[V+2]=Math.min(1.55,(Rt[V+2]+(on[V+2]-Rt[V+2])*St)*qe),ae&&(I[Ne]=_t[Ne]*(1+1.4*Le[Ne]))}O.attributes.position.needsUpdate=!0,O.attributes.aColor.needsUpdate=!0,ae&&(O.attributes.aSize.needsUpdate=!0);for(let Ne=0;Ne<At.length;Ne++){const jt=Math.max(0,1-Math.abs(ce-Ne/6)/.1);let Ct=jt*jt;const bn=iu[Ne]?iu[Ne][0]*(1-Ct):0,A=iu[Ne]?iu[Ne][1]*(1-Ct):0;At[Ne].style.opacity=String(Ct),At[Ne].style.transform=`translate3d(${bn}px, ${A}px, 0)`,At[Ne].style.pointerEvents=Ct>.1?"auto":"none"}if(b){const Ne=(5-Ee)*window.innerWidth*.1;b.style.transform=`translateX(${Ne}px)`}const st=Math.round(Ee);l(st);for(let Ne=0;Ne<D.length;Ne++)D[Ne].style.opacity=Ne===st?"1":"0.32",D[Ne].style.transform=`scale(${Ne===st?1.7:1})`;Q&&(Q.style.opacity=ce>.05?"0":"0.8",Q.style.transform=`translateY(${ce>.05?10:0}px)`,Q.style.transition="opacity 0.4s ease, transform 0.4s ease")}let Dt=0,Bn=!0,Vn=performance.now(),ma=1.6*Number(p),ga=0,va=0;function $i(ce){const Pe=Math.min(.05,(ce-Vn)/1e3);if(Vn=ce,ma+=Pe,p){const St=ma/9%2;va=St<1?St:2-St}else{const St=c.getBoundingClientRect(),Rt=c.offsetHeight-window.innerHeight;va=Rt>0?Fx(-St.top/Rt):0}const Ee=he?.18:.07;ga+=(va-ga)*Ee,un(ga,ma);const ut=15-5.5*Ke;C.position.x+=(1.7*de-C.position.x)*.05,C.position.y+=(1.7*we*.7-C.position.y)*.05,C.position.z+=(ut-C.position.z)*.06,C.lookAt(0,0,0),x.render(E,C),Dt=requestAnimationFrame($i)}function fi(){document.hidden?Bn&&(Bn=!1,cancelAnimationFrame(Dt)):Bn||(Bn=!0,Vn=performance.now(),Dt=requestAnimationFrame($i))}return Dt=requestAnimationFrame($i),document.addEventListener("visibilitychange",fi),()=>{ae&&(window.removeEventListener("pointermove",pe),document.removeEventListener("pointerleave",Ue),window.removeEventListener("touchstart",Ve),window.removeEventListener("touchmove",Ve),window.removeEventListener("touchend",Fe),window.removeEventListener("touchcancel",Fe),window.removeEventListener("deviceorientation",Ie)),document.removeEventListener("visibilitychange",fi),cancelAnimationFrame(Dt),Vt.disconnect(),O.dispose(),Y.dispose(),x.dispose(),v.remove()}},[]),w.jsxs("div",{className:`neb-root ${r?"fixed inset-0 z-0 opacity-40 pointer-events-none":""}`,ref:e,"data-source-loc":"src/components/NebulaScene.tsx:1091:4",children:[w.jsx("div",{className:"neb-stage",ref:i,"data-source-loc":"src/components/NebulaScene.tsx:1092:6",children:!r&&w.jsxs(w.Fragment,{children:[w.jsxs("nav",{className:"neb-nav","data-source-loc":"src/components/NebulaScene.tsx:1096:12",children:[w.jsxs(vn,{to:"/",className:"neb-logo",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1097:10",children:["VexStudios",w.jsx("span",{"data-source-loc":"src/components/NebulaScene.tsx:1098:22",children:"®"})]}),w.jsxs("div",{className:"neb-links","data-source-loc":"src/components/NebulaScene.tsx:1100:10",children:[w.jsx(vn,{to:"/work",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1101:12",children:"Work"}),w.jsx(vn,{to:"/studio",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1104:12",children:"Studio"}),w.jsx(vn,{to:"/services",style:{textDecoration:"none",color:"inherit"},"data-source-loc":"src/components/NebulaScene.tsx:1107:12",children:"Services"}),w.jsx("a",{href:"#contact",style:{textDecoration:"none",color:"inherit",cursor:"pointer"},onClick:c=>{c.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/components/NebulaScene.tsx:1110:12",children:"Contact"})]})]}),w.jsx("section",{className:"neb-sec neb-hero",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1124:8",children:w.jsxs("div",{className:"neb-hero-copy","data-source-loc":"src/components/NebulaScene.tsx:1125:10",children:[w.jsxs("h1",{className:"neb-display","data-source-loc":"src/components/NebulaScene.tsx:1126:12",children:["Launch",w.jsx("br",{"data-source-loc":"src/components/NebulaScene.tsx:1128:14"}),"Beyond",w.jsx("br",{"data-source-loc":"src/components/NebulaScene.tsx:1130:14"}),w.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1131:14",children:"Ordinary"})]}),w.jsx("p",{className:"neb-lead","data-source-loc":"src/components/NebulaScene.tsx:1133:12",children:"We design immersive digital worlds, motion-driven websites, and 3D visual systems for ambitious brands."})]})}),w.jsx("section",{className:"neb-sec neb-statement",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1140:8",children:w.jsxs("h2",{className:"neb-statement-text","data-source-loc":"src/components/NebulaScene.tsx:1141:10",children:["Blending a ",w.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1142:23",children:"multi-disciplinary"})," craft with hands-on"," ",w.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1143:12",children:"technical"})," execution"]})}),w.jsx("section",{className:"neb-sec neb-right",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1148:8",children:w.jsxs("div",{className:"neb-side-copy","data-source-loc":"src/components/NebulaScene.tsx:1149:10",children:[w.jsx("h2",{className:"neb-h2","data-source-loc":"src/components/NebulaScene.tsx:1150:12",children:"Agency"}),w.jsx("p",{className:"neb-para","data-source-loc":"src/components/NebulaScene.tsx:1151:12",children:"We bring together strategy, design, engineering, and craft to build digital experiences that feel alive."})]})}),w.jsx("section",{className:"neb-sec neb-left",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1158:8",children:w.jsxs("div",{className:"neb-side-copy","data-source-loc":"src/components/NebulaScene.tsx:1159:10",children:[w.jsx("h2",{className:"neb-h2","data-source-loc":"src/components/NebulaScene.tsx:1160:12",children:"Solutions"}),w.jsx("p",{className:"neb-para","data-source-loc":"src/components/NebulaScene.tsx:1161:12",children:"From interactive sites to immersive 3D worlds, we design and build digital products that move with intent."})]})}),w.jsxs("section",{className:"neb-sec neb-expertise",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1168:8",children:[w.jsxs("h2",{className:"neb-expertise-title","data-source-loc":"src/components/NebulaScene.tsx:1169:10",children:["Where we ",w.jsx("span",{className:"neb-outline","data-source-loc":"src/components/NebulaScene.tsx:1170:21",children:"excel"})]}),w.jsxs("div",{className:"neb-cols","data-source-loc":"src/components/NebulaScene.tsx:1172:10",children:[w.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1173:12",children:[w.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1174:14",children:"Strategy"}),w.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1175:14",children:[w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1176:16",children:"Brand strategy"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1177:16",children:"Market positioning"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1178:16",children:"Experience design"})]})]}),w.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1181:12",children:[w.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1182:14",children:"Creative"}),w.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1183:14",children:[w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1184:16",children:"Art direction"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1185:16",children:"Motion design"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1186:16",children:"3D art"})]})]}),w.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1189:12",children:[w.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1190:14",children:"Tech"}),w.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1191:14",children:[w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1192:16",children:"WebGL"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1193:16",children:"Frontend engineering"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1194:16",children:"Interactive builds"})]})]}),w.jsxs("div",{className:"neb-col","data-source-loc":"src/components/NebulaScene.tsx:1197:12",children:[w.jsx("h4",{"data-source-loc":"src/components/NebulaScene.tsx:1198:14",children:"Production"}),w.jsxs("ul",{"data-source-loc":"src/components/NebulaScene.tsx:1199:14",children:[w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1200:16",children:"Development"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1201:16",children:"Animation"}),w.jsx("li",{"data-source-loc":"src/components/NebulaScene.tsx:1202:16",children:"Launch support"})]})]})]})]}),w.jsxs("section",{className:"neb-sec neb-contact",style:{opacity:0},"data-source-loc":"src/components/NebulaScene.tsx:1210:8",children:[w.jsx("a",{className:"neb-email",href:"#contact",onClick:c=>{c.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/components/NebulaScene.tsx:1211:10",children:"hello@vexstudios.studio"}),w.jsxs("div",{className:"neb-footer","data-source-loc":"src/components/NebulaScene.tsx:1221:10",children:[w.jsx("div",{className:"neb-divider","data-source-loc":"src/components/NebulaScene.tsx:1222:12"}),w.jsxs("div",{className:"neb-foot-links","data-source-loc":"src/components/NebulaScene.tsx:1223:12",children:[w.jsx("a",{href:"#instagram",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1224:14",children:"Instagram"}),w.jsx("a",{href:"#linkedin",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1225:14",children:"LinkedIn"}),w.jsx("a",{href:"#behance",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1226:14",children:"Behance"}),w.jsx("a",{href:"#privacy",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1227:14",children:"Privacy"}),w.jsx("a",{href:"#terms",onClick:c=>c.preventDefault(),"data-source-loc":"src/components/NebulaScene.tsx:1228:14",children:"Terms"})]})]})]}),w.jsxs("div",{className:"neb-rail","data-source-loc":"src/components/NebulaScene.tsx:1234:8",children:[w.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1235:10"}),w.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1236:10"}),w.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1237:10"}),w.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1238:10"}),w.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1239:10"}),w.jsx("div",{className:"neb-dot","data-source-loc":"src/components/NebulaScene.tsx:1240:10"})]}),w.jsx("div",{className:"neb-hint","data-source-loc":"src/components/NebulaScene.tsx:1244:12",children:"Scroll to explore"})]})}),!r&&w.jsx("div",{className:"neb-spacer","data-source-loc":"src/components/NebulaScene.tsx:1250:8"})]})}const zx=[{id:"campus-connect",title:"CampusConnect",subtitle:"SAM Global University",category:"Website Development",description:"A private, student-only college communication and resource-sharing platform. Features real-time department chat, permanent notes repository, verified student access, and Yufi — an AI study assistant powered by Google Gemini.",tags:["Next.js","Google Gemini AI","WebSockets","Tailwind CSS"],image:"/vexstudios/projects/campus_connect.png",liveUrl:"https://campus-connect-sam.vercel.app/",year:"2026"}],QR=["All","Brand Identity","Marketing Automation","Digital Marketing & SEO","Website Development","Ecommerce Automation","Custom Software Dev"];function JR(){const[r,e]=me.useState("All"),i=r==="All"?zx:zx.filter(s=>s.category===r);return w.jsxs("div",{className:"min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden","data-source-loc":"src/pages/Work.tsx:40:4",children:[w.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-60",style:{background:"radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"},"data-source-loc":"src/pages/Work.tsx:42:6"}),w.jsxs("header",{className:"relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up",style:{animationDelay:"200ms"},"data-source-loc":"src/pages/Work.tsx:50:6",children:[w.jsxs(vn,{to:"/",className:"font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity","data-source-loc":"src/pages/Work.tsx:51:8",children:["VexStudios",w.jsx("span",{className:"text-[#6f8cff]","data-source-loc":"src/pages/Work.tsx:52:20",children:"®"})]}),w.jsxs("nav",{className:"flex items-center gap-6 md:gap-8","data-source-loc":"src/pages/Work.tsx:55:8",children:[w.jsx(vn,{to:"/work",className:"text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold","data-source-loc":"src/pages/Work.tsx:56:10",children:"Work"}),w.jsx(vn,{to:"/studio",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Work.tsx:59:10",children:"Studio"}),w.jsx(vn,{to:"/services",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Work.tsx:62:10",children:"Services"}),w.jsx("a",{href:"#contact",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Work.tsx:65:10",children:"Contact"})]})]}),w.jsxs("main",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24","data-source-loc":"src/pages/Work.tsx:79:6",children:[w.jsxs("div",{className:"max-w-3xl mb-14 work-fade-up",style:{animationDelay:"400ms"},"data-source-loc":"src/pages/Work.tsx:81:8",children:[w.jsxs("h1",{className:"font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6","data-source-loc":"src/pages/Work.tsx:82:10",children:["Our Genuine ",w.jsx("span",{className:"neb-outline","data-source-loc":"src/pages/Work.tsx:83:24",children:"Work"})]}),w.jsx("p",{className:"text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed","data-source-loc":"src/pages/Work.tsx:85:10",children:"Live web applications and digital platforms engineered by VexStudios for real clients and users."})]}),w.jsx("div",{className:"flex flex-wrap gap-3 mb-12 work-fade-up",style:{animationDelay:"550ms"},"data-source-loc":"src/pages/Work.tsx:91:8",children:QR.map(s=>w.jsx("button",{onClick:()=>e(s),className:`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all border ${r===s?"bg-[#6f8cff] text-white border-[#6f8cff] shadow-[0_0_20px_rgba(111,140,255,0.4)]":"bg-white/5 text-[#aab2da] border-white/10 hover:border-white/30 hover:text-white"}`,"data-source-loc":"src/pages/Work.tsx:93:12",children:s},s))}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 work-fade-up",style:{animationDelay:"700ms"},"data-source-loc":"src/pages/Work.tsx:108:8",children:[i.map(s=>w.jsxs("div",{className:"flex flex-col gap-6 group","data-source-loc":"src/pages/Work.tsx:110:12",children:[w.jsx("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"cyber-container select-none block aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]","data-source-loc":"src/pages/Work.tsx:112:14",children:w.jsxs("div",{className:"canvas w-full h-full","data-source-loc":"src/pages/Work.tsx:118:16",children:[Array.from({length:25}).map((l,c)=>w.jsx("div",{className:`tracker tr-${c+1}`,"data-source-loc":"src/pages/Work.tsx:120:20"},c)),w.jsx("div",{className:"cyber-card","data-source-loc":"src/pages/Work.tsx:123:18",children:w.jsxs("div",{className:"card-content","data-source-loc":"src/pages/Work.tsx:124:20",children:[w.jsx("div",{className:"cyber-card-bg",style:{backgroundImage:`url(${s.image})`},"data-source-loc":"src/pages/Work.tsx:125:22"}),w.jsx("div",{className:"cyber-overlay","data-source-loc":"src/pages/Work.tsx:129:22"}),w.jsx("div",{className:"card-glare","data-source-loc":"src/pages/Work.tsx:130:22"}),w.jsxs("div",{className:"cyber-lines","data-source-loc":"src/pages/Work.tsx:131:22",children:[w.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:24"}),w.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:37"}),w.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:50"}),w.jsx("span",{"data-source-loc":"src/pages/Work.tsx:132:63"})]}),w.jsxs("div",{className:"cyber-prompt text-center flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100","data-source-loc":"src/pages/Work.tsx:135:22",children:[w.jsx("span",{className:"text-white font-bold tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]","data-source-loc":"src/pages/Work.tsx:136:24",children:"Launch Site"}),w.jsx("span",{className:"text-[10px] text-white/70 mt-2 tracking-[0.3em] font-light drop-shadow-md","data-source-loc":"src/pages/Work.tsx:137:24",children:"↗"})]}),w.jsxs("div",{className:"glowing-elements","data-source-loc":"src/pages/Work.tsx:140:22",children:[w.jsx("div",{className:"glow-1","data-source-loc":"src/pages/Work.tsx:141:24"}),w.jsx("div",{className:"glow-2","data-source-loc":"src/pages/Work.tsx:142:24"})]})]})})]})}),w.jsxs("div",{className:"flex flex-col gap-4 px-2","data-source-loc":"src/pages/Work.tsx:150:14",children:[w.jsxs("div",{className:"flex justify-between items-start gap-4","data-source-loc":"src/pages/Work.tsx:151:16",children:[w.jsxs("div",{"data-source-loc":"src/pages/Work.tsx:152:18",children:[w.jsx("h3",{className:"font-['Sora'] font-bold text-2xl text-white group-hover:text-[#8aa0ff] transition-colors uppercase tracking-wide","data-source-loc":"src/pages/Work.tsx:153:20",children:s.title}),s.subtitle&&w.jsx("p",{className:"text-sm text-[#6f8cff] font-medium tracking-wide mt-1.5","data-source-loc":"src/pages/Work.tsx:157:22",children:s.subtitle})]}),w.jsxs("div",{className:"text-right shrink-0","data-source-loc":"src/pages/Work.tsx:162:18",children:[w.jsx("span",{className:"text-[#aab2da] text-xs font-['Sora'] tracking-[0.2em] uppercase block","data-source-loc":"src/pages/Work.tsx:163:20",children:s.category}),w.jsx("span",{className:"text-[10px] text-white/40 mt-1.5 font-normal tracking-[0.3em] block","data-source-loc":"src/pages/Work.tsx:164:20",children:s.year})]})]}),w.jsx("p",{className:"text-[#aab2da]/70 text-sm font-light leading-relaxed","data-source-loc":"src/pages/Work.tsx:168:16",children:s.description}),w.jsx("div",{className:"flex flex-wrap gap-2 mt-1","data-source-loc":"src/pages/Work.tsx:172:16",children:s.tags.map(l=>w.jsx("span",{className:"text-[10px] uppercase tracking-widest text-[#6f8cff] bg-[#6f8cff]/10 px-3 py-1.5 rounded-full border border-[#6f8cff]/20","data-source-loc":"src/pages/Work.tsx:174:20",children:l},l))})]})]},s.id)),w.jsxs("div",{className:"border border-dashed border-white/15 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors min-h-[360px]","data-source-loc":"src/pages/Work.tsx:184:10",children:[w.jsx("div",{className:"w-12 h-12 rounded-full bg-[#6f8cff]/10 border border-[#6f8cff]/30 flex items-center justify-center text-[#6f8cff] text-xl font-bold mb-4","data-source-loc":"src/pages/Work.tsx:185:12",children:"+"}),w.jsx("h4",{className:"font-['Sora'] font-semibold text-lg text-white mb-2","data-source-loc":"src/pages/Work.tsx:188:12",children:"More Genuine Works Coming Soon"}),w.jsx("p",{className:"text-[#8aa0ff]/70 text-xs max-w-xs leading-relaxed","data-source-loc":"src/pages/Work.tsx:189:12",children:"Have another deployed project link to add? Send it over and we'll instantly feature it here!"})]})]})]}),w.jsx("footer",{className:"relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up",style:{animationDelay:"800ms"},"data-source-loc":"src/pages/Work.tsx:197:6",children:w.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6","data-source-loc":"src/pages/Work.tsx:198:8",children:[w.jsxs("div",{"data-source-loc":"src/pages/Work.tsx:199:10",children:["© ",new Date().getFullYear()," VEXSTUDIOS. ALL RIGHTS RESERVED."]}),w.jsxs("div",{className:"flex gap-6","data-source-loc":"src/pages/Work.tsx:200:10",children:[w.jsx(vn,{to:"/",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Work.tsx:201:12",children:"Home"}),w.jsx(vn,{to:"/studio",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Work.tsx:202:12",children:"Studio"}),w.jsx("a",{href:"#contact",className:"hover:text-white transition-colors cursor-pointer",onClick:s=>{s.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Work.tsx:203:12",children:"Contact"})]})]})})]})}const k_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const $R=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const e3=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());const Bx=r=>{const e=e3(r);return e.charAt(0).toUpperCase()+e.slice(1)};var t3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n3=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const i3=me.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>me.createElement("svg",{ref:m,...t3,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:k_("lucide",l),...!c&&!n3(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,g])=>me.createElement(h,g)),...Array.isArray(c)?c:[c]]));const Ji=(r,e)=>{const i=me.forwardRef(({className:s,...l},c)=>me.createElement(i3,{ref:c,iconNode:e,className:k_(`lucide-${$R(Bx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Bx(r),i};const a3=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],s3=Ji("bot",a3);const r3=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],o3=Ji("chart-no-axes-column-increasing",r3);const l3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],c3=Ji("circle-check",l3);const u3=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],f3=Ji("code-xml",u3);const d3=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],h3=Ji("cpu",d3);const p3=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],m3=Ji("fingerprint-pattern",p3);const g3=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],v3=Ji("lightbulb",g3);const x3=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],_3=Ji("send",x3);const S3=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],y3=Ji("shopping-cart",S3);const M3=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],b3=Ji("users",M3);const E3=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],T3=Ji("x",E3);function A3(){return w.jsxs("div",{className:"min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden","data-source-loc":"src/pages/Studio.tsx:7:4",children:[w.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-60",style:{background:"radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"},"data-source-loc":"src/pages/Studio.tsx:9:6"}),w.jsxs("header",{className:"relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up",style:{animationDelay:"200ms"},"data-source-loc":"src/pages/Studio.tsx:17:6",children:[w.jsxs(vn,{to:"/",className:"font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity","data-source-loc":"src/pages/Studio.tsx:18:8",children:["VexStudios",w.jsx("span",{className:"text-[#6f8cff]","data-source-loc":"src/pages/Studio.tsx:19:20",children:"®"})]}),w.jsxs("nav",{className:"flex items-center gap-6 md:gap-8","data-source-loc":"src/pages/Studio.tsx:22:8",children:[w.jsx(vn,{to:"/work",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Studio.tsx:23:10",children:"Work"}),w.jsx(vn,{to:"/studio",className:"text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold","data-source-loc":"src/pages/Studio.tsx:26:10",children:"Studio"}),w.jsx(vn,{to:"/services",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Studio.tsx:29:10",children:"Services"}),w.jsx("a",{href:"#contact",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer",onClick:r=>{r.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Studio.tsx:32:10",children:"Contact"})]})]}),w.jsxs("main",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24","data-source-loc":"src/pages/Studio.tsx:46:6",children:[w.jsxs("div",{className:"max-w-3xl mb-20 work-fade-up",style:{animationDelay:"400ms"},"data-source-loc":"src/pages/Studio.tsx:49:8",children:[w.jsxs("h1",{className:"font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6","data-source-loc":"src/pages/Studio.tsx:50:10",children:["Building digital ",w.jsx("span",{className:"neb-outline","data-source-loc":"src/pages/Studio.tsx:51:29",children:"worlds"})]}),w.jsx("p",{className:"text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed","data-source-loc":"src/pages/Studio.tsx:53:10",children:"VexStudios was born out of a desire to move beyond the generic web. We believe that digital platforms should be immersive, motion-driven experiences that feel truly alive. We blend high-end design with rigorous technical engineering."})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 work-fade-up",style:{animationDelay:"550ms"},"data-source-loc":"src/pages/Studio.tsx:59:8",children:[w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Studio.tsx:61:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Studio.tsx:62:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Studio.tsx:63:12"}),w.jsx(v3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Studio.tsx:64:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Studio.tsx:65:12",children:"Our Philosophy"}),w.jsxs("div",{className:"notibody space-y-4","data-source-loc":"src/pages/Studio.tsx:66:12",children:[w.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:67:14",children:"We approach every build as a unique piece of architecture. We don't rely on templates or bloated frameworks. Instead, we write custom shaders, custom WebGL pipelines, and highly optimized frontend code to ensure that our projects are as performant as they are visually stunning."}),w.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:70:14",children:"Performance and aesthetics shouldn't be mutually exclusive. By controlling the entire stack from concept to code, we deliver platforms that wow users instantly without sacrificing speed."})]})]}),w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Studio.tsx:76:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Studio.tsx:77:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Studio.tsx:78:12"}),w.jsx(b3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Studio.tsx:79:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Studio.tsx:80:12",children:"Culture & Vibe"}),w.jsxs("div",{className:"notibody space-y-4","data-source-loc":"src/pages/Studio.tsx:81:12",children:[w.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:82:14",children:"We operate as a highly specialized, multi-disciplinary strike team. We're a remote-first crew of designers, engineers, and 3D artists who collaborate deeply on every detail."}),w.jsx("p",{"data-source-loc":"src/pages/Studio.tsx:85:14",children:"We value direct communication, iterative prototyping, and obsessing over micro-interactions. If an animation feels slightly off, we rewrite the math. That's the VexStudios standard."})]})]})]}),w.jsxs("div",{className:"mb-24 work-fade-up",style:{animationDelay:"700ms"},"data-source-loc":"src/pages/Studio.tsx:94:8",children:[w.jsx("h2",{className:"font-['Sora'] font-bold text-3xl uppercase tracking-wide mb-10 border-b border-white/10 pb-6","data-source-loc":"src/pages/Studio.tsx:95:10",children:"The Process"}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6","data-source-loc":"src/pages/Studio.tsx:98:10",children:[{step:"01",title:"Discover",desc:"Deep diving into your brand architecture and strategic goals."},{step:"02",title:"Design",desc:"Crafting wireframes, UI layouts, and early 3D visual concepts."},{step:"03",title:"Build",desc:"Engineering the platform with custom physics and modern frameworks."},{step:"04",title:"Launch",desc:"Rigorous testing, optimization, and deploying to the world."},{step:"05",title:"Iterate",desc:"Post-launch refinement based on real user analytics."}].map(r=>w.jsxs("div",{className:"group flex flex-col gap-3","data-source-loc":"src/pages/Studio.tsx:106:14",children:[w.jsx("span",{className:"text-[#6f8cff] font-['Sora'] font-bold text-xl","data-source-loc":"src/pages/Studio.tsx:107:16",children:r.step}),w.jsx("h4",{className:"text-white font-bold uppercase tracking-wider","data-source-loc":"src/pages/Studio.tsx:108:16",children:r.title}),w.jsx("p",{className:"text-[#aab2da]/70 text-xs leading-relaxed","data-source-loc":"src/pages/Studio.tsx:109:16",children:r.desc}),w.jsx("div",{className:"h-0.5 w-full bg-white/10 mt-2 relative overflow-hidden","data-source-loc":"src/pages/Studio.tsx:110:16",children:w.jsx("div",{className:"absolute inset-y-0 left-0 bg-[#6f8cff] w-0 group-hover:w-full transition-all duration-700 ease-out","data-source-loc":"src/pages/Studio.tsx:111:18"})})]},r.step))})]}),w.jsxs("div",{className:"mb-20 work-fade-up",style:{animationDelay:"850ms"},"data-source-loc":"src/pages/Studio.tsx:119:8",children:[w.jsx("h2",{className:"font-['Sora'] font-bold text-3xl uppercase tracking-wide mb-10 border-b border-white/10 pb-6","data-source-loc":"src/pages/Studio.tsx:120:10",children:"Capabilities & Stack"}),w.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6","data-source-loc":"src/pages/Studio.tsx:123:10",children:["WebGL & Three.js","Custom GLSL Shaders","Next.js / React","Tailwind CSS","Motion & Interaction","UI/UX Systems","E-Commerce Architecture","Performance Optimization"].map((r,e)=>w.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#6f8cff]/50 transition-colors","data-source-loc":"src/pages/Studio.tsx:134:14",children:[w.jsx("div",{className:"w-2 h-2 rounded-full bg-[#6f8cff]","data-source-loc":"src/pages/Studio.tsx:135:16"}),w.jsx("span",{className:"text-[#c2c8ee] text-xs font-semibold tracking-widest uppercase","data-source-loc":"src/pages/Studio.tsx:136:16",children:r})]},e))})]}),w.jsxs("div",{className:"mt-32 text-center work-fade-up",style:{animationDelay:"1000ms"},"data-source-loc":"src/pages/Studio.tsx:143:8",children:[w.jsx("p",{className:"text-[#aab2da] text-sm uppercase tracking-[0.2em] mb-6","data-source-loc":"src/pages/Studio.tsx:144:10",children:"Ready to build something extraordinary?"}),w.jsx("a",{href:"#contact",onClick:r=>{r.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},className:"inline-block px-10 py-5 bg-[#6f8cff] text-white font-['Sora'] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#05060a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(111,140,255,0.4)]","data-source-loc":"src/pages/Studio.tsx:145:10",children:"Start a Project"})]})]}),w.jsx("footer",{className:"relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up",style:{animationDelay:"1100ms"},"data-source-loc":"src/pages/Studio.tsx:159:6",children:w.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6","data-source-loc":"src/pages/Studio.tsx:160:8",children:[w.jsxs("div",{"data-source-loc":"src/pages/Studio.tsx:161:10",children:["© ",new Date().getFullYear()," VEXSTUDIOS. ALL RIGHTS RESERVED."]}),w.jsxs("div",{className:"flex gap-6","data-source-loc":"src/pages/Studio.tsx:162:10",children:[w.jsx(vn,{to:"/work",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Studio.tsx:163:12",children:"Work"}),w.jsx(vn,{to:"/",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Studio.tsx:164:12",children:"Home"}),w.jsx("a",{href:"#contact",className:"hover:text-white transition-colors cursor-pointer",onClick:r=>{r.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Studio.tsx:165:12",children:"Contact"})]})]})})]})}function R3(){return w.jsxs("div",{className:"min-h-screen bg-[#05060a] text-[#eef1ff] font-['Space_Grotesk',sans-serif] relative overflow-x-hidden","data-source-loc":"src/pages/Services.tsx:7:4",children:[w.jsx("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-60",style:{background:"radial-gradient(100% 120% at 50% 10%, #10122a 0%, #0a0b1a 50%, #05060a 100%)"},"data-source-loc":"src/pages/Services.tsx:9:6"}),w.jsxs("header",{className:"relative z-10 flex items-center justify-between px-8 py-7 md:px-14 work-fade-up",style:{animationDelay:"200ms"},"data-source-loc":"src/pages/Services.tsx:17:6",children:[w.jsxs(vn,{to:"/",className:"font-['Sora'] font-extrabold text-xl tracking-wider uppercase text-white hover:opacity-80 transition-opacity","data-source-loc":"src/pages/Services.tsx:18:8",children:["VexStudios",w.jsx("span",{className:"text-[#6f8cff]","data-source-loc":"src/pages/Services.tsx:19:20",children:"®"})]}),w.jsxs("nav",{className:"flex items-center gap-6 md:gap-8","data-source-loc":"src/pages/Services.tsx:22:8",children:[w.jsx(vn,{to:"/work",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Services.tsx:23:10",children:"Work"}),w.jsx(vn,{to:"/studio",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity","data-source-loc":"src/pages/Services.tsx:26:10",children:"Studio"}),w.jsx(vn,{to:"/services",className:"text-xs uppercase tracking-[0.2em] text-[#6f8cff] font-semibold","data-source-loc":"src/pages/Services.tsx:29:10",children:"Services"}),w.jsx("a",{href:"#contact",className:"text-xs uppercase tracking-[0.2em] text-[#c2c8ee] opacity-85 hover:opacity-100 transition-opacity cursor-pointer",onClick:r=>{r.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Services.tsx:32:10",children:"Contact"})]})]}),w.jsxs("main",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24","data-source-loc":"src/pages/Services.tsx:46:6",children:[w.jsxs("div",{className:"max-w-3xl mb-24 work-fade-up",style:{animationDelay:"400ms"},"data-source-loc":"src/pages/Services.tsx:49:8",children:[w.jsxs("h1",{className:"font-['Sora'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] mb-6","data-source-loc":"src/pages/Services.tsx:50:10",children:["Our ",w.jsx("span",{className:"neb-outline","data-source-loc":"src/pages/Services.tsx:51:16",children:"Services"})]}),w.jsx("p",{className:"text-[#b9c0e6] text-base md:text-lg max-w-2xl font-light leading-relaxed","data-source-loc":"src/pages/Services.tsx:53:10",children:"We don't do generic templates. We build bespoke digital products, immersive 3D experiences, and intelligent automations designed to elevate your brand and optimize your operations."})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 work-fade-up",style:{animationDelay:"550ms"},"data-source-loc":"src/pages/Services.tsx:59:8",children:[w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:62:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:63:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:64:12"}),w.jsx(m3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:65:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:66:12",children:"Brand Identity"}),w.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:67:12",children:"Forging digital DNA. We architect comprehensive brand strategies, from core naming and logo design to complete product packaging and startup kits."}),w.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:70:12",children:["Brand Strategy","Logo Design","Product Design","Packaging"].map(r=>w.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:72:16",children:r},r))})]}),w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:78:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:79:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:80:12"}),w.jsx(s3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:81:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:82:12",children:"Marketing Automation"}),w.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:83:12",children:"Intelligent marketing engines. We deploy automated workflows that transform manual follow-ups into deeply personalized, high-converting pipelines."}),w.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:86:12",children:["HubSpot","Salesforce","ActiveCampaign","AI Chatbots"].map(r=>w.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:88:16",children:r},r))})]}),w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:94:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:95:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:96:12"}),w.jsx(o3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:97:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:98:12",children:"Digital Marketing & SEO"}),w.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:99:12",children:"Data-driven growth architecture. We don't guess—we mathematically optimize your digital footprint for maximum visibility and conversion rates."}),w.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:102:12",children:["Performance Marketing","Technical SEO","PPC","CRO"].map(r=>w.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:104:16",children:r},r))})]}),w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:110:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:111:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:112:12"}),w.jsx(f3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:113:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:114:12",children:"Website Development"}),w.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:115:12",children:"Bespoke digital platforms. Moving beyond generic templates, we engineer custom React, Vue, and headless architectures optimized for absolute speed."}),w.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:118:12",children:["UI/UX Design","React / Next.js","API Integrations","WebGL"].map(r=>w.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:120:16",children:r},r))})]}),w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:126:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:127:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:128:12"}),w.jsx(y3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:129:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:130:12",children:"Ecommerce Automation"}),w.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:131:12",children:"Scaling revenue seamlessly. We optimize infrastructures with advanced workflow automations and custom sales integrations, turning your storefront into an autonomous machine."}),w.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:134:12",children:["Shopify Automation","Magento","Workflow AI","Amazon Ads"].map(r=>w.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:136:16",children:r},r))})]}),w.jsxs("div",{className:"notification","data-source-loc":"src/pages/Services.tsx:142:10",children:[w.jsx("div",{className:"notiglow","data-source-loc":"src/pages/Services.tsx:143:12"}),w.jsx("div",{className:"notiborderglow","data-source-loc":"src/pages/Services.tsx:144:12"}),w.jsx(h3,{className:"noti-icon",size:32,strokeWidth:1.5,"data-source-loc":"src/pages/Services.tsx:145:12"}),w.jsx("div",{className:"notititle","data-source-loc":"src/pages/Services.tsx:146:12",children:"Custom Software Dev"}),w.jsx("div",{className:"notibody","data-source-loc":"src/pages/Services.tsx:147:12",children:"Engineering the complex. From high-performance mobile apps to intricate SaaS platforms, we combine deep technical expertise with beautiful UI/UX logic."}),w.jsx("div",{className:"noti-tags","data-source-loc":"src/pages/Services.tsx:150:12",children:["iOS & Android","SaaS Architecture","Mobile UI/UX","Backend Eng."].map(r=>w.jsx("span",{className:"text-[9px] uppercase tracking-widest text-[#c2c8ee] bg-white/[0.03] px-2 py-1 rounded-full border border-white/10","data-source-loc":"src/pages/Services.tsx:152:16",children:r},r))})]})]}),w.jsxs("div",{className:"mt-32 text-center work-fade-up",style:{animationDelay:"700ms"},"data-source-loc":"src/pages/Services.tsx:160:8",children:[w.jsx("p",{className:"text-[#aab2da] text-sm uppercase tracking-[0.2em] mb-6","data-source-loc":"src/pages/Services.tsx:161:10",children:"Need a custom solution?"}),w.jsx("a",{href:"#contact",onClick:r=>{r.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},className:"inline-block px-10 py-5 bg-[#6f8cff] text-white font-['Sora'] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-[#05060a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(111,140,255,0.4)]","data-source-loc":"src/pages/Services.tsx:162:10",children:"Start a Project"})]})]}),w.jsx("footer",{className:"relative z-10 border-t border-white/10 py-12 px-6 text-center text-xs tracking-widest text-[#aab2da] uppercase work-fade-up",style:{animationDelay:"850ms"},"data-source-loc":"src/pages/Services.tsx:176:6",children:w.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6","data-source-loc":"src/pages/Services.tsx:177:8",children:[w.jsxs("div",{"data-source-loc":"src/pages/Services.tsx:178:10",children:["© ",new Date().getFullYear()," VEXSTUDIOS. ALL RIGHTS RESERVED."]}),w.jsxs("div",{className:"flex gap-6","data-source-loc":"src/pages/Services.tsx:179:10",children:[w.jsx(vn,{to:"/",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Services.tsx:180:12",children:"Home"}),w.jsx(vn,{to:"/work",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Services.tsx:181:12",children:"Work"}),w.jsx(vn,{to:"/studio",className:"hover:text-white transition-colors","data-source-loc":"src/pages/Services.tsx:182:12",children:"Studio"}),w.jsx("a",{href:"#contact",className:"hover:text-white transition-colors cursor-pointer",onClick:r=>{r.preventDefault(),window.dispatchEvent(new Event("open-contact-modal"))},"data-source-loc":"src/pages/Services.tsx:183:12",children:"Contact"})]})]})})]})}function C3(){const r=Ka(),[e,i]=me.useState(!0),[s,l]=me.useState(!0);return me.useEffect(()=>{i(!0),l(!0);const c=setTimeout(()=>{i(!1),setTimeout(()=>l(!1),500)},800);return()=>clearTimeout(c)},[r.pathname]),s?w.jsx("div",{className:"page-loader-overlay",style:{opacity:e?1:0},"data-source-loc":"src/components/PageLoader.tsx:24:4",children:w.jsx("div",{className:"spinner","data-source-loc":"src/components/PageLoader.tsx:25:6"})}):null}function w3(){const[r,e]=me.useState(!1),[i,s]=me.useState({name:"",email:"",service:"",message:""}),[l,c]=me.useState(!1),[f,p]=me.useState(!1);me.useEffect(()=>{const v=()=>e(!0);return window.addEventListener("open-contact-modal",v),()=>window.removeEventListener("open-contact-modal",v)},[]);const m=()=>{e(!1),setTimeout(()=>{p(!1),s({name:"",email:"",service:"",message:""})},300)},h=v=>{v.preventDefault(),c(!0),setTimeout(()=>{c(!1),p(!0)},1500)},g=v=>{s({...i,[v.target.name]:v.target.value})};return r?w.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300","data-source-loc":"src/components/ContactModal.tsx:52:4",children:[w.jsx("div",{className:"absolute inset-0 bg-[#05060a]/80 backdrop-blur-sm transition-opacity",onClick:m,"data-source-loc":"src/components/ContactModal.tsx:54:6"}),w.jsxs("div",{className:"relative z-10 w-full max-w-[400px] flex items-center justify-center animate-in zoom-in-95 duration-300","data-source-loc":"src/components/ContactModal.tsx:60:6",children:[w.jsx("button",{onClick:m,className:"absolute -top-12 right-0 text-white/50 hover:text-white transition-colors bg-black/20 p-2 rounded-full hover:bg-white/10","data-source-loc":"src/components/ContactModal.tsx:61:8",children:w.jsx(T3,{size:20,"data-source-loc":"src/components/ContactModal.tsx:65:10"})}),f?w.jsxs("div",{className:"contact-form flex flex-col items-center justify-center text-center py-12 min-h-[400px]","data-source-loc":"src/components/ContactModal.tsx:69:10",children:[w.jsxs("section",{className:"contact-bg-stars","data-source-loc":"src/components/ContactModal.tsx:70:13",children:[w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:71:14"}),w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:72:14"}),w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:73:14"}),w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:74:14"})]}),w.jsx("div",{className:"w-20 h-20 bg-[#6f8cff]/10 rounded-full flex items-center justify-center mb-6 border border-[#6f8cff]/30","data-source-loc":"src/components/ContactModal.tsx:77:12",children:w.jsx(c3,{className:"text-[#6f8cff]",size:40,"data-source-loc":"src/components/ContactModal.tsx:78:14"})}),w.jsx("h3",{className:"font-['Sora'] text-2xl font-bold uppercase tracking-tight text-white mb-4","data-source-loc":"src/components/ContactModal.tsx:80:12",children:"Transmission Sent"}),w.jsx("p",{className:"text-[#aab2da] text-sm font-light leading-relaxed max-w-xs mb-8","data-source-loc":"src/components/ContactModal.tsx:81:12",children:"Your details are in our system. A project architect will be in touch shortly."}),w.jsx("button",{onClick:m,className:"px-8 py-3 rounded-full text-xs uppercase tracking-widest bg-white/5 border border-white/10 hover:border-[#6f8cff] transition-all text-white","data-source-loc":"src/components/ContactModal.tsx:84:12",children:"Close Window"})]}):w.jsxs("form",{onSubmit:h,className:"contact-form","data-source-loc":"src/components/ContactModal.tsx:92:10",children:[w.jsx("div",{className:"contact-form-title","data-source-loc":"src/components/ContactModal.tsx:93:12",children:w.jsx("span",{"data-source-loc":"src/components/ContactModal.tsx:93:48",children:"start your"})}),w.jsx("div",{className:"contact-title-2","data-source-loc":"src/components/ContactModal.tsx:94:12",children:w.jsx("span",{"data-source-loc":"src/components/ContactModal.tsx:94:45",children:"PROJECT"})}),w.jsxs("section",{className:"contact-bg-stars","data-source-loc":"src/components/ContactModal.tsx:96:12",children:[w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:97:14"}),w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:98:14"}),w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:99:14"}),w.jsx("span",{className:"contact-star","data-source-loc":"src/components/ContactModal.tsx:100:14"})]}),w.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:103:12",children:w.jsx("input",{placeholder:"Name",type:"text",className:"contact-input",name:"name",required:!0,value:i.name,onChange:g,"data-source-loc":"src/components/ContactModal.tsx:104:14"})}),w.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:115:12",children:w.jsx("input",{placeholder:"Email Address",type:"email",className:"contact-input",name:"email",required:!0,value:i.email,onChange:g,"data-source-loc":"src/components/ContactModal.tsx:116:14"})}),w.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:127:12",children:w.jsxs("select",{name:"service",required:!0,value:i.service,onChange:g,className:"contact-input appearance-none text-white/70","data-source-loc":"src/components/ContactModal.tsx:128:14",children:[w.jsx("option",{value:"",disabled:!0,className:"text-black","data-source-loc":"src/components/ContactModal.tsx:135:16",children:"Select a service..."}),w.jsx("option",{value:"Brand Identity",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:136:16",children:"Brand Identity"}),w.jsx("option",{value:"Marketing Automation",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:137:16",children:"Marketing Automation"}),w.jsx("option",{value:"Digital Marketing & SEO",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:138:16",children:"Digital Marketing & SEO"}),w.jsx("option",{value:"Website Development",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:139:16",children:"Website Development"}),w.jsx("option",{value:"Ecommerce Automation",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:140:16",children:"Ecommerce Automation"}),w.jsx("option",{value:"Custom Software Dev",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:141:16",children:"Custom Software Dev"}),w.jsx("option",{value:"Other",className:"text-black","data-source-loc":"src/components/ContactModal.tsx:142:16",children:"Other / Unsure"})]})}),w.jsx("div",{className:"contact-input-container","data-source-loc":"src/components/ContactModal.tsx:146:12",children:w.jsx("textarea",{placeholder:"Project Details...",name:"message",required:!0,value:i.message,onChange:g,rows:3,className:"contact-input resize-none","data-source-loc":"src/components/ContactModal.tsx:147:14"})}),w.jsx("button",{className:"contact-submit",type:"submit",disabled:l,"data-source-loc":"src/components/ContactModal.tsx:158:12",children:w.jsxs("span",{className:"sign-text flex items-center justify-center gap-2","data-source-loc":"src/components/ContactModal.tsx:159:14",children:[l?"Transmitting...":"Send Message",!l&&w.jsx(_3,{size:14,"data-source-loc":"src/components/ContactModal.tsx:161:34"})]})})]})]})]}):null}function N3(){return w.jsxs(M1,{"data-source-loc":"src/App.tsx:12:4",children:[w.jsx(C3,{"data-source-loc":"src/App.tsx:13:6"}),w.jsx(w3,{"data-source-loc":"src/App.tsx:14:6"}),w.jsx("main",{className:"w-full min-h-screen bg-[#05060a]","data-source-loc":"src/App.tsx:15:6",children:w.jsxs(JM,{"data-source-loc":"src/App.tsx:16:8",children:[w.jsx($r,{path:"/",element:w.jsx(Ix,{"data-source-loc":"src/App.tsx:17:35"}),"data-source-loc":"src/App.tsx:17:10"}),w.jsx($r,{path:"/work",element:w.jsx(JR,{"data-source-loc":"src/App.tsx:18:39"}),"data-source-loc":"src/App.tsx:18:10"}),w.jsx($r,{path:"/studio",element:w.jsx(A3,{"data-source-loc":"src/App.tsx:19:41"}),"data-source-loc":"src/App.tsx:19:10"}),w.jsx($r,{path:"/services",element:w.jsx(R3,{"data-source-loc":"src/App.tsx:20:43"}),"data-source-loc":"src/App.tsx:20:10"}),w.jsx($r,{path:"*",element:w.jsx(Ix,{"data-source-loc":"src/App.tsx:21:35"}),"data-source-loc":"src/App.tsx:21:10"})]})})]})}tM.createRoot(document.getElementById("root")).render(w.jsx(me.StrictMode,{"data-source-loc":"src/main.tsx:7:2",children:w.jsx(N3,{"data-source-loc":"src/main.tsx:8:4"})}));

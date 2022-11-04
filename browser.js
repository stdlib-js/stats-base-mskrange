// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;function l(e){return e!=e}function c(e,r,t,n,o){var i,a,u,f,c,_;if(e<=0)return NaN;for(u=t<0?(1-e)*t:0,f=o<0?(1-e)*o:0,_=0;_<e&&0!==n[f];_++)u+=t,f+=o;if(_===e)return NaN;if(l(a=r[u]))return a;for(i=a,_+=1;_<e;_++)if(u+=t,!n[f+=o]){if(l(c=r[u]))return c;c<a?a=c:c>i&&(i=c)}return i-a}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,i,a){var u,f,c,_,p,d;if(e<=0)return NaN;for(c=n,_=a,d=0;d<e&&0!==o[_];d++)c+=t,_+=i;if(d===e)return NaN;if(l(f=r[c]))return f;for(u=f,d+=1;d<e;d++)if(c+=t,!o[_+=i]){if(l(p=r[c]))return p;p<f?f=p:p>u&&(u=p)}return u-f}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).mskrange=r();
//# sourceMappingURL=browser.js.map

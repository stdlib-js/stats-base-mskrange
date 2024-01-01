"use strict";var q=function(i,f){return function(){return f||i((f={exports:{}}).exports,f),f.exports}};var g=q(function(C,l){
var x=require('@stdlib/math-base-assert-is-nan/dist');function j(i,f,t,m,o){var s,u,n,r,a,e;if(i<=0)return NaN;for(t<0?n=(1-i)*t:n=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&m[r]!==0;e++)n+=t,r+=o;if(e===i)return NaN;if(u=f[n],x(u))return u;for(s=u,e+=1,e;e<i;e++)if(n+=t,r+=o,!m[r]){if(a=f[n],x(a))return a;a<u?u=a:a>s&&(s=a)}return s-u}l.exports=j
});var b=q(function(D,y){
var p=require('@stdlib/math-base-assert-is-nan/dist');function k(i,f,t,m,o,s,u){var n,r,a,e,c,v;if(i<=0)return NaN;for(a=m,e=u,v=0;v<i&&o[e]!==0;v++)a+=t,e+=s;if(v===i)return NaN;if(r=f[a],p(r))return r;for(n=r,v+=1,v;v<i;v++)if(a+=t,e+=s,!o[e]){if(c=f[a],p(c))return c;c<r?r=c:c>n&&(n=c)}return n-r}y.exports=k
});var h=q(function(E,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=g(),z=b();w(O,"ndarray",z);R.exports=O
});var A=h();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

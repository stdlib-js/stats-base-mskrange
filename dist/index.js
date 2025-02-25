"use strict";var b=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var j=b(function(Q,P){
var y=require('@stdlib/math-base-assert-is-nan/dist');function D(r,a,t,x,v,g,l){var f,n,o,c,s,u,i,e,q,m;for(f=a.data,n=v.data,o=a.accessors[0],c=v.accessors[0],i=x,e=l,m=0;m<r&&c(n,e)!==0;m++)i+=t,e+=g;if(m===r)return NaN;if(u=o(f,i),y(u))return u;for(s=u,m+=1,m;m<r;m++)if(i+=t,e+=g,!c(n,e)){if(q=o(f,i),y(q))return q;q<u?u=q:q>s&&(s=q)}return s-u}P.exports=D
});var p=b(function(S,h){
var O=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),E=j();function F(r,a,t,x,v,g,l){var f,n,o,c,s,u,i,e;if(r<=0)return NaN;if(s=R(a),u=R(v),s.accessorProtocol||u.accessorProtocol)return E(r,s,t,x,u,g,l);for(o=x,c=l,e=0;e<r&&v[c]!==0;e++)o+=t,c+=g;if(e===r)return NaN;if(n=a[o],O(n))return n;for(f=n,e+=1,e;e<r;e++)if(o+=t,c+=g,!v[c]){if(i=a[o],O(i))return i;i<n?n=i:i>f&&(f=i)}return f-n}h.exports=F
});var z=b(function(T,w){
var k=require('@stdlib/strided-base-stride2offset/dist'),G=p();function H(r,a,t,x,v){return G(r,a,t,k(r,t),x,v,k(r,v))}w.exports=H
});var C=b(function(U,B){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),J=p();I(A,"ndarray",J);B.exports=A
});var K=C();module.exports=K;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

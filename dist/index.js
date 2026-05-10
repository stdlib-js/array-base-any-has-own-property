"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(h,s){
var a=require('@stdlib/array-base-assert-is-accessor-array/dist'),f=require('@stdlib/array-base-resolve-getter/dist'),i=require('@stdlib/assert-has-own-property/dist');function c(e,r){var t;for(t=0;t<e.length;t++)if(i(e[t],r))return!0;return!1}function v(e,r){var t,n;for(t=f(e),n=0;n<e.length;n++)if(i(t(e,n),r))return!0;return!1}function l(e,r){return a(e)?v(e,r):c(e,r)}s.exports=l
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

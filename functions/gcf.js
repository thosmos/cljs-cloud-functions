(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
})(this, function () {
    var g;function h(a,c){this.a=[];this.b=c;for(var d=!0,b=a.length-1;0<=b;b--){var e=a[b]|0;d&&e==c||(this.a[b]=e,d=!1)}}var k={};function m(a){if(-128<=a&&128>a){var c=k[a];if(c)return c}c=new h([a|0],0>a?-1:0);-128<=a&&128>a&&(k[a]=c);return c}function n(a){if(isNaN(a)||!isFinite(a))return p;if(0>a)return q(n(-a));for(var c=[],d=1,b=0;a>=d;b++)c[b]=a/d|0,d*=r;return new h(c,0)}var r=4294967296,p=m(0),t=m(1),u=m(16777216);
function v(a){if(-1==a.b)return-v(q(a));for(var c=0,d=1,b=0;b<a.a.length;b++){var e=w(a,b);c+=(0<=e?e:r+e)*d;d*=r}return c}g=h.prototype;g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(x(this))return"0";if(-1==this.b)return"-"+q(this).toString(a);for(var c=n(Math.pow(a,6)),d=this,b="";;){var e=y(d,c),f=e.multiply(c);d=d.add(q(f));f=((0<d.a.length?d.a[0]:d.b)>>>0).toString(a);d=e;if(x(d))return f+b;for(;6>f.length;)f="0"+f;b=""+f+b}};
function w(a,c){return 0>c?0:c<a.a.length?a.a[c]:a.b}function x(a){if(0!=a.b)return!1;for(var c=0;c<a.a.length;c++)if(0!=a.a[c])return!1;return!0}g.compare=function(a){a=this.add(q(a));return-1==a.b?-1:x(a)?0:1};function q(a){for(var c=a.a.length,d=[],b=0;b<c;b++)d[b]=~a.a[b];return(new h(d,~a.b)).add(t)}
g.add=function(a){for(var c=Math.max(this.a.length,a.a.length),d=[],b=0,e=0;e<=c;e++){var f=b+(w(this,e)&65535)+(w(a,e)&65535),l=(f>>>16)+(w(this,e)>>>16)+(w(a,e)>>>16);b=l>>>16;f&=65535;l&=65535;d[e]=l<<16|f}return new h(d,d[d.length-1]&-2147483648?-1:0)};
g.multiply=function(a){if(x(this)||x(a))return p;if(-1==this.b)return-1==a.b?q(this).multiply(q(a)):q(q(this).multiply(a));if(-1==a.b)return q(this.multiply(q(a)));if(0>this.compare(u)&&0>a.compare(u))return n(v(this)*v(a));for(var c=this.a.length+a.a.length,d=[],b=0;b<2*c;b++)d[b]=0;for(b=0;b<this.a.length;b++)for(var e=0;e<a.a.length;e++){var f=w(this,b)>>>16,l=w(this,b)&65535,I=w(a,e)>>>16,J=w(a,e)&65535;d[2*b+2*e]+=l*J;z(d,2*b+2*e);d[2*b+2*e+1]+=f*J;z(d,2*b+2*e+1);d[2*b+2*e+1]+=l*I;z(d,2*b+2*
e+1);d[2*b+2*e+2]+=f*I;z(d,2*b+2*e+2)}for(b=0;b<c;b++)d[b]=d[2*b+1]<<16|d[2*b];for(b=c;b<2*c;b++)d[b]=0;return new h(d,0)};function z(a,c){for(;(a[c]&65535)!=a[c];)a[c+1]+=a[c]>>>16,a[c]&=65535,c++}
function y(a,c){if(x(c))throw Error("division by zero");if(x(a))return p;if(-1==a.b)return-1==c.b?y(q(a),q(c)):q(y(q(a),c));if(-1==c.b)return q(y(a,q(c)));if(30<a.a.length){if(-1==a.b||-1==c.b)throw Error("slowDivide_ only works with positive integers.");for(var d=t;0>=c.compare(a);)d=d.shiftLeft(1),c=c.shiftLeft(1);var b=A(d,1),e=A(c,1);c=A(c,2);for(d=A(d,2);!x(c);){var f=e.add(c);0>=f.compare(a)&&(b=b.add(d),e=f);c=A(c,1);d=A(d,1)}return b}for(d=p;0<=a.compare(c);){b=Math.max(1,Math.floor(v(a)/
v(c)));e=Math.ceil(Math.log(b)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);f=n(b);for(var l=f.multiply(c);-1==l.b||0<l.compare(a);)b-=e,f=n(b),l=f.multiply(c);x(f)&&(f=t);d=d.add(f);a=a.add(q(l))}return d}g.and=function(a){for(var c=Math.max(this.a.length,a.a.length),d=[],b=0;b<c;b++)d[b]=w(this,b)&w(a,b);return new h(d,this.b&a.b)};g.or=function(a){for(var c=Math.max(this.a.length,a.a.length),d=[],b=0;b<c;b++)d[b]=w(this,b)|w(a,b);return new h(d,this.b|a.b)};
g.xor=function(a){for(var c=Math.max(this.a.length,a.a.length),d=[],b=0;b<c;b++)d[b]=w(this,b)^w(a,b);return new h(d,this.b^a.b)};g.shiftLeft=function(a){var c=a>>5;a%=32;for(var d=this.a.length+c+(0<a?1:0),b=[],e=0;e<d;e++)b[e]=0<a?w(this,e-c)<<a|w(this,e-c-1)>>>32-a:w(this,e-c);return new h(b,this.b)};function A(a,c){var d=c>>5;c%=32;for(var b=a.a.length-d,e=[],f=0;f<b;f++)e[f]=0<c?w(a,f+d)>>>c|w(a,f+d+1)<<32-c:w(a,f+d);return new h(e,a.b)};function B(a){var c=a.length;if(0<c){for(var d=Array(c),b=0;b<c;b++)d[b]=a[b];return d}return[]};var C={},D={};if("undefined"===typeof C||"undefined"===typeof D||"undefined"===typeof E)var E={};if("undefined"===typeof C||"undefined"===typeof D||"undefined"===typeof F)var F=null;if("undefined"===typeof C||"undefined"===typeof D||"undefined"===typeof G)var G=null;if("undefined"===typeof C||"undefined"===typeof D||"undefined"===typeof H)var H=null;function K(){F=function(){return console.log.apply(console,B(arguments))};G=function(){return console.error.apply(console,B(arguments))}}
if("undefined"!==typeof Symbol){var M=Symbol;"object"!=typeof M||!M||M instanceof Array||M instanceof Object||Object.prototype.toString.call(M)}if("undefined"===typeof C||"undefined"===typeof D||"undefined"===typeof N)var N=null;"undefined"!==typeof console&&K();if("undefined"===typeof C||"undefined"===typeof D||"undefined"===typeof O)var O=function(){throw Error("cljs.core/*eval* not bound");};K();var P={cljsHTTP:require("firebase-functions").https.onRequest(function(a,c){return c.send("Hello from CLJS!!!!")})};function Q(){return P}var R=["shadow","umd_helper","get_exports"],S=this;R[0]in S||!S.execScript||S.execScript("var "+R[0]);for(var T;R.length&&(T=R.shift());){var U;if(U=!R.length)U=void 0!==Q;U?S[T]=Q:S=S[T]&&S[T]!==Object.prototype[T]?S[T]:S[T]={}};

    return shadow.umd_helper.get_exports();
});
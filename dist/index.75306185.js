!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof global?r=global:"undefined"!=typeof self&&(r=self),r.decomp=n()}}(function(){return(function n(r,e,t){function f(u,i){if(!e[u]){if(!r[u]){var l="function"==typeof require&&void 0;if(!i&&l)return l(u,!0);if(o)return o(u,!0);throw Error("Cannot find module '"+u+"'")}var a=e[u]={exports:{}};r[u][0].call(a.exports,function(n){return f(r[u][1][n]||n)},a,a.exports,n,r,e,t)}return e[u].exports}for(var o="function"==typeof require&&void 0,u=0;u<t.length;u++)f(t[u]);return f})({1:[function(n,r,e){function t(n,r,e,t){var f=r[0]-n[0],o=r[1]-n[1],u=t[0]-e[0],i=t[1]-e[1];if(u*o-i*f==0)return!1;var l=(f*(e[1]-n[1])+o*(n[0]-e[0]))/(u*o-i*f),a=(u*(n[1]-e[1])+i*(e[0]-n[0]))/(i*f-u*o);return l>=0&&l<=1&&a>=0&&a<=1}function f(n,r,e){return(r[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(r[1]-n[1])}function o(n,r,e){return 0>=f(n,r,e)}r.exports={decomp:function(n){var r=function n(r){for(var e=[],t=[],u=[],i=[],h=Number.MAX_VALUE,p=0;p<r.length;++p)if(c(r,p)){for(var m=0;m<r.length;++m)if(function(n,r,e){if(f(a(n,r+1),a(n,r),a(n,e))>=0&&o(a(n,r-1),a(n,r),a(n,e)))return!1;u=l(a(n,r),a(n,e));for(var t,u,i=0;i!==n.length;++i)if((i+1)%n.length!==r&&i!==r&&f(a(n,r),a(n,e),a(n,i+1))>=0&&o(a(n,r),a(n,e),a(n,i))&&([][0]=a(n,r),[][1]=a(n,e),[][0]=a(n,i),[][1]=a(n,i+1),t=function(n,r,e){e=e||0;var t,f,o,u,i,l,a,h=[0,0];return t=n[1][1]-n[0][1],f=n[0][0]-n[1][0],o=t*n[0][0]+f*n[0][1],u=r[1][1]-r[0][1],i=r[0][0]-r[1][0],l=u*r[0][0]+i*r[0][1],d(a=t*i-u*f,0,e)||(h[0]=(i*o-f*l)/a,h[1]=(t*l-u*o)/a),h}(v,g),l(a(n,r),t)<u))return!1;return!0}(r,p,m)){t=n(s(r,p,m,i)),u=n(s(r,m,p,i));for(var y=0;y<u.length;y++)t.push(u[y]);t.length<h&&(e=t,h=t.length,e.push([a(r,p),a(r,m)]))}}return e}(n);return r.length>0?function n(r,e){if(0===e.length)return[r];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var t=[r],f=0;f<e.length;f++)for(var o=e[f],u=0;u<t.length;u++){var i=n(t[u],o);if(i){t.splice(u,1),t.push(i[0],i[1]);break}}return t}var o=e,f=r.indexOf(o[0]),u=r.indexOf(o[1]);return -1!==f&&-1!==u&&[s(r,f,u),s(r,u,f)]}(n,r):[n]},quickDecomp:function n(r,e,u,i,v,g,s){g=g||100,s=s||0,v=v||25,e=void 0!==e?e:[],u=u||[],i=i||[];var d=[0,0],m=[0,0],y=[0,0],x=0,A=0,b=0,M=0,q=0,w=0,k=0,C=[],E=[];if(r.length<3)return e;if(++s>g)return console.warn("quickDecomp: max level ("+g+") reached."),e;for(var D=0;D<r.length;++D)if(c(r,D)){u.push(r[D]),x=A=Number.MAX_VALUE;for(var L=0;L<r.length;++L)f(a(r,D-1),a(r,D),a(r,L))>0&&o(a(r,D-1),a(r,D),a(r,L-1))&&(y=p(a(r,D-1),a(r,D),a(r,L),a(r,L-1)),0>f(a(r,D+1),a(r,D),y)&&(b=l(r[D],y))<A&&(A=b,m=y,w=L)),f(a(r,D+1),a(r,D),a(r,L+1))>0&&o(a(r,D+1),a(r,D),a(r,L))&&(y=p(a(r,D+1),a(r,D),a(r,L),a(r,L+1)),f(a(r,D-1),a(r,D),y)>0&&(b=l(r[D],y))<x&&(x=b,d=y,q=L));if(w===(q+1)%r.length)y[0]=(m[0]+d[0])/2,y[1]=(m[1]+d[1])/2,i.push(y),D<q?(h(C,r,D,q+1),C.push(y),E.push(y),0!==w&&h(E,r,w,r.length),h(E,r,0,D+1)):(0!==D&&h(C,r,D,r.length),h(C,r,0,q+1),C.push(y),E.push(y),h(E,r,w,D+1));else{if(w>q&&(q+=r.length),M=Number.MAX_VALUE,q<w)return e;for(var L=w;L<=q;++L)f(a(r,D-1),a(r,D),a(r,L))>=0&&o(a(r,D+1),a(r,D),a(r,L))&&(b=l(a(r,D),a(r,L)))<M&&function(n,r,e){for(var f=0;f!==n.length;++f)if(f!==r&&f!==e&&(f+1)%n.length!==r&&(f+1)%n.length!==e&&t(a(n,r),a(n,e),a(n,f),a(n,f+1)))return!1;return!0}(r,D,L)&&(M=b,k=L%r.length);D<k?(h(C,r,D,k+1),0!==k&&h(E,r,k,r.length),h(E,r,0,D+1)):(0!==D&&h(C,r,D,r.length),h(C,r,0,k+1),h(E,r,k,D+1))}return C.length<E.length?(n(C,e,u,i,v,g,s),n(E,e,u,i,v,g,s)):(n(E,e,u,i,v,g,s),n(C,e,u,i,v,g,s)),e}return e.push(r),e},isSimple:function(n){var r;for(r=0;r<n.length-1;r++)for(var e=0;e<r-1;e++)if(t(n[r],n[r+1],n[e],n[e+1]))return!1;for(r=1;r<n.length-2;r++)if(t(n[0],n[n.length-1],n[r],n[r+1]))return!1;return!0},removeCollinearPoints:function(n,r){for(var e,t,o,l=0,h=n.length-1;n.length>3&&h>=0;--h)e=a(n,h-1),t=a(n,h),o=a(n,h+1),(r?(u[0]=t[0]-e[0],u[1]=t[1]-e[1],i[0]=o[0]-t[0],i[1]=o[1]-t[1],Math.acos((u[0]*i[0]+u[1]*i[1])/(Math.sqrt(u[0]*u[0]+u[1]*u[1])*Math.sqrt(i[0]*i[0]+i[1]*i[1])))<r):0===f(e,t,o))&&(n.splice(h%n.length,1),l++);return l},removeDuplicatePoints:function(n,r){for(var e,t=n.length-1;t>=1;--t)for(var f=n[t],o=t-1;o>=0;--o)if(e=n[o],d(f[0],e[0],r)&&d(f[1],e[1],r)){n.splice(t,1);continue}},makeCCW:function(n){for(var r=0,e=1;e<n.length;++e)(n[e][1]<n[r][1]||n[e][1]===n[r][1]&&n[e][0]>n[r][0])&&(r=e);return!(f(a(n,r-1),a(n,r),a(n,r+1))>0)&&(function(n){for(var r=[],e=n.length,t=0;t!==e;t++)r.push(n.pop());for(var t=0;t!==e;t++)n[t]=r[t]}(n),!0)}};var u=[],i=[];function l(n,r){var e=r[0]-n[0],t=r[1]-n[1];return e*e+t*t}function a(n,r){var e=n.length;return n[r<0?r%e+e:r%e]}function h(n,r,e,t){for(var f=e;f<t;f++)n.push(r[f])}function c(n,r){return 0>f(a(n,r-1),a(n,r),a(n,r+1))}var v=[],g=[];function s(n,r,e,t){var f=t||[];if(f.length=0,r<e)for(var o=r;o<=e;o++)f.push(n[o]);else{for(var o=0;o<=e;o++)f.push(n[o]);for(var o=r;o<n.length;o++)f.push(n[o])}return f}function p(n,r,e,t,f){f=f||0;var o=r[1]-n[1],u=n[0]-r[0],i=o*n[0]+u*n[1],l=t[1]-e[1],a=e[0]-t[0],h=l*e[0]+a*e[1],c=o*a-l*u;return d(c,0,f)?[0,0]:[(a*i-u*h)/c,(o*h-l*i)/c]}function d(n,r,e){return Math.abs(n-r)<=(e=e||0)}},{}]},{},[1])(1)});
//# sourceMappingURL=index.75306185.js.map

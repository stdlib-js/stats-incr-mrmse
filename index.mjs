// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var i=t.isPrimitive,n=s,m=r,d=e;var o=function(t){var s;if(!i(t))throw new TypeError(d("0eP8T",t));return s=n(t),function(t,r){var e;if(0===arguments.length)return null===(e=s())?e:m(e);return m(s((e=r-t)*e))}};export{o as default};
//# sourceMappingURL=index.mjs.map

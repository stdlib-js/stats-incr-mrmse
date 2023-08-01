// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(i){var n;if(!t(i))throw new TypeError(r("0eP8T",i));return n=s(i),function(t,s){var r;if(0===arguments.length)return null===(r=n())?r:e(r);return e(n((r=s-t)*r))}}export{i as default};
//# sourceMappingURL=index.mjs.map

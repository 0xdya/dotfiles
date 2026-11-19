/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 98869:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.7.0
https://github.com/mholt/PapaParse
License: MIT
*/((e,t)=>{ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;})(this,function r(){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{};var s=!n.document&&!!n.postMessage,a=n.IS_PAPA_WORKER||!1,o={},h=0,w={};function q(e){return 65279===e.charCodeAt(0)?e.slice(1):e;}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t;}.call(this,e),this.parseChunk=function(t,e){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let e=this._config.newline;e||(r=this._config.quoteChar||'"',e=this._handle.guessLineEndings(t,r)),t=[...t.split(e).slice(i)].join(e);}this.isFirstChunk&&U(this._config.beforeFirstChunk)&&void 0!==(r=this._config.beforeFirstChunk(t))&&(t=r),this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+t,r=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){t=r.meta.cursor,i=(this._finished||(this._partialLine=i.substring(t-this._baseIndex),this._baseIndex=t),r&&r.data&&(this._rowCount+=r.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview);if(a)n.postMessage({results:r,workerId:w.WORKER_ID,finished:i});else if(U(this._config.chunk)&&!e){if(this._config.chunk(r,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=r=void 0;}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(r.data),this._completeResults.errors=this._completeResults.errors.concat(r.errors),this._completeResults.meta=r.meta),this._completed||!i||!U(this._config.complete)||r&&r.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||r&&r.meta.paused||this._nextChunk(),r;}this._halted=!0;},this._sendError=function(e){U(this._config.error)?this._config.error(e):a&&this._config.error&&n.postMessage({workerId:w.WORKER_ID,error:e,finished:!1});};}function d(e){var r;(e=e||{}).chunkSize||(e.chunkSize=w.RemoteChunkSize),u.call(this,e),this._nextChunk=s?function(){this._readChunk(),this._chunkLoaded();}:function(){this._readChunk();},this.stream=function(e){this._input=e,this._nextChunk();},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest(),this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),s||(r.onload=m(this._chunkLoaded,this),r.onerror=m(this._chunkError,this)),r.ontimeout=m(this._chunkTimeout,this),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!s),this._config.downloadTimeout&&!s&&(r.timeout=this._config.downloadTimeout),this._config.downloadRequestHeaders){var e,t=this._config.downloadRequestHeaders;for(e in t)r.setRequestHeader(e,t[e]);}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,r.setRequestHeader("Range","bytes="+this._start+"-"+i));try{r.send(this._config.downloadRequestBody);}catch(e){this._chunkError(e.message);}s&&0===r.status&&this._chunkError();}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize||r.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(r),this.parseChunk(r.responseText)));},this._chunkError=function(e){e=r.statusText||e;this._sendError(new Error(e));},this._chunkTimeout=function(){this._chunkError("Request timed out after "+this._config.downloadTimeout+"ms");};}function l(e){(e=e||{}).chunkSize||(e.chunkSize=w.LocalChunkSize),u.call(this,e);var i,r,n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((i=new FileReader()).onload=m(this._chunkLoaded,this),i.onerror=m(this._chunkError,this)):i=new FileReaderSync(),this._nextChunk();},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk();},this._readChunk=function(){var e=this._input,t=(this._config.chunkSize&&(t=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,t)),i.readAsText(e,this._config.encoding));n||this._chunkLoaded({target:{result:t}});},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result);},this._chunkError=function(){this._sendError(i.error);};}function f(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk();},this._nextChunk=function(){var e,t;if(!this._finished)return e=this._config.chunkSize,i=e?(t=i.substring(0,e),i.substring(e)):(t=i,""),this._finished=!i,this.parseChunk(t);};}function c(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause();},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume();},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError);},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0);},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0;},this._streamData=m(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()));}catch(e){this._streamError(e);}},this),this._streamError=m(function(e){this._streamCleanUp(),this._sendError(e);},this),this._streamEnd=m(function(){this._streamCleanUp(),r=!0,this._streamData("");},this),this._streamCleanUp=m(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError);},this);}function i(m){var n,s,a,t,o=Math.pow(2,53),h=-o,u=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,d=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,i=this,r=0,l=0,f=!1,e=!1,c=[],p={data:[],errors:[],meta:{}};function y(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length;}function _(){if(p&&a&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+w.DefaultDelimiter+"'"),a=!1),m.skipEmptyLines&&(p.data=p.data.filter(function(e){return!y(e);})),g()){if(p)if(Array.isArray(p.data[0])){for(var e=0;g()&&e<p.data.length;e++)p.data[e].forEach(t);p.data.splice(0,1);}else p.data.forEach(t);function t(e){c.push(e);}}function i(e,t){for(var i=m.header?{}:[],r=0;r<e.length;r++){var n=r,s=e[r],s=((e,t)=>(e=>(m.dynamicTypingFunction&&void 0===m.dynamicTyping[e]&&(m.dynamicTyping[e]=m.dynamicTypingFunction(e)),!0===(m.dynamicTyping[e]||m.dynamicTyping)))(e)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&((e=>{if(u.test(e)){e=parseFloat(e);if(h<e&&e<o)return 1;}})(t)?parseFloat(t):d.test(t)?new Date(t):""===t?null:t):t)(n=m.header?r>=c.length?"__parsed_extra":c[r]:n,s=m.transform?m.transform(s,n):s);"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(s)):i[n]=s;}return m.header&&(r>c.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+c.length+" fields but parsed "+r,l+t):r<c.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+c.length+" fields but parsed "+r,l+t)),i;}var r;p&&(m.header||m.dynamicTyping||m.transform)&&(r=1,!p.data.length||Array.isArray(p.data[0])?(p.data=p.data.map(i),r=p.data.length):p.data=i(p.data,0),m.header&&p.meta&&(p.meta.fields=c),l+=r);}function g(){return m.header&&0===c.length;}function k(e,t,i,r){e={type:e,code:t,message:i};void 0!==r&&(e.row=r),p.errors.push(e);}U(m.step)&&(t=m.step,m.step=function(e){p=e,g()?_():(_(),0!==p.data.length&&(r+=e.data.length,m.preview&&r>m.preview?s.abort():(p.data=p.data[0],t(p,i))));}),this.parse=function(e,t,i){var r=m.quoteChar||'"',r=(m.newline||(m.newline=this.guessLineEndings(e,r)),a=!1,m.delimiter?U(m.delimiter)&&(m.delimiter=m.delimiter(e),p.meta.delimiter=m.delimiter):((r=((e,t,i,r,n)=>{var s,a,o,h;n=n||[",","\t","|",";",w.RECORD_SEP,w.UNIT_SEP];for(var u=0;u<n.length;u++){for(var d,l=n[u],f=0,c=0,p=0,_=(o=void 0,new E({comments:r,delimiter:l,newline:t,preview:10}).parse(e)),g=0;g<_.data.length;g++)i&&y(_.data[g])?p++:(d=_.data[g].length,c+=d,void 0===o?o=d:0<d&&(f+=Math.abs(d-o),o=d));0<_.data.length&&(c/=_.data.length-p),1.99<c&&(void 0===a||f<a||f===a&&h<c)&&(a=f,s=l,h=c);}return{successful:!!(m.delimiter=s),bestDelimiter:s};})(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess)).successful?m.delimiter=r.bestDelimiter:(a=!0,m.delimiter=w.DefaultDelimiter),p.meta.delimiter=m.delimiter),v(m));return r.header=g(),m.preview&&m.header&&r.preview++,n=e,s=new E(r),p=s.parse(n,t,i),_(),f?{meta:{paused:!0}}:p||{meta:{paused:!1}};},this.paused=function(){return f;},this.pause=function(){f=!0,s.abort(),n=U(m.chunk)?"":n.substring(s.getCharIndex());},this.resume=function(){i.streamer._halted?(f=!1,i.streamer.parseChunk(n,!0)):setTimeout(i.resume,3);},this.aborted=function(){return e;},this.abort=function(){e=!0,s.abort(),p.meta.aborted=!0,U(m.complete)&&m.complete(p),n="";},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=new RegExp(P(t)+"([^]*?)"+P(t),"gm"),i=(e=e.replace(t,"")).split("\r"),t=e.split("\n"),e=1<t.length&&t[0].length<i[0].length;if(1===i.length||e)return"\n";for(var r=0,n=0;n<i.length;n++)"\n"===i[n][0]&&r++;return r>=i.length/2?"\r\n":"\r";};}function P(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}function E(C){var S=(C=C||{}).delimiter,O=C.newline,x=C.comments,T=C.step,I=C.preview,A=C.fastMode,D=null,L=!1,F=null==C.quoteChar?'"':C.quoteChar,z=F;if(void 0!==C.escapeChar&&(z=C.escapeChar),("string"!=typeof S||-1<w.BAD_DELIMITERS.indexOf(S))&&(S=","),x===S)throw new Error("Comment character same as delimiter");!0===x?x="#":("string"!=typeof x||-1<w.BAD_DELIMITERS.indexOf(x))&&(x=!1),"\n"!==O&&"\r"!==O&&"\r\n"!==O&&(O="\n");var M=0,j=!1;this.parse=function(i,t,r){if("string"!=typeof i)throw new Error("Input must be a string");var n=i.length,e=S.length,s=O.length,a=x.length,o=U(T),h=[],u=[],d=[],l=M=0;if(!i)return b();if(A||!1!==A&&-1===i.indexOf(F)){for(var f=i.split(O),c=0;c<f.length;c++){if(d=f[c],M+=d.length,c!==f.length-1)M+=O.length;else if(r)return b();if(!x||d.substring(0,a)!==x){if(o){if(h=[],k(d.split(S)),R(),j)return b();}else k(d.split(S));if(I&&I<=c)return h=h.slice(0,I),b(!0);}}return b();}for(var p=i.indexOf(S,M),_=i.indexOf(O,M),g=new RegExp(P(z)+P(F),"g"),m=i.indexOf(F,M);;)if(i[M]===F)for(m=M,M++;;){if(-1===(m=i.indexOf(F,m+1)))return r||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),E();if(m===n-1)return E(i.substring(M,m).replace(g,F));if(F===z&&i[m+1]===z)m++;else if(F===z||0===m||i[m-1]!==z){-1!==p&&p<m+1&&(p=i.indexOf(S,m+1));var y=w(-1===(_=-1!==_&&_<m+1?i.indexOf(O,m+1):_)?p:Math.min(p,_));if(i.substr(m+1+y,e)===S){d.push(i.substring(M,m).replace(g,F)),i[M=m+1+y+e]!==F&&(m=i.indexOf(F,M)),p=i.indexOf(S,M),_=i.indexOf(O,M);break;}y=w(_);if(i.substring(m+1+y,m+1+y+s)===O){if(d.push(i.substring(M,m).replace(g,F)),v(m+1+y+s),p=i.indexOf(S,M),m=i.indexOf(F,M),o&&(R(),j))return b();if(I&&h.length>=I)return b(!0);break;}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),m++;}}else if(x&&0===d.length&&i.substring(M,M+a)===x){if(-1===_)return b();M=_+s,_=i.indexOf(O,M),p=i.indexOf(S,M);}else if(-1!==p&&(p<_||-1===_))d.push(i.substring(M,p)),M=p+e,p=i.indexOf(S,M);else{if(-1===_)break;if(d.push(i.substring(M,_)),v(_+s),o&&(R(),j))return b();if(I&&h.length>=I)return b(!0);}return E();function k(e){h.push(e),l=M;}function w(e){var t=0;return t=-1!==e&&(e=i.substring(m+1,e))&&""===e.trim()?e.length:t;}function E(e){return r||(void 0===e&&(e=i.substring(M)),d.push(e),M=n,k(d),o&&R()),b();}function v(e){M=e,k(d),d=[],_=i.indexOf(O,M);}function b(e){if(C.header&&!t&&h.length&&!L){var s=h[0],a=Object.create(null),o=new Set(s);let n=!1;for(let r=0;r<s.length;r++){let i=q(s[r]);if(a[i=U(C.transformHeader)?C.transformHeader(i,r):i]){let e,t=a[i];for(;e=i+"_"+t,t++,o.has(e););o.add(e),s[r]=e,a[i]++,n=!0,(D=null===D?{}:D)[e]=i;}else a[i]=1,s[r]=i;o.add(i);}n&&console.warn("Duplicate headers found and renamed."),L=!0;}return{data:h,errors:u,meta:{delimiter:S,linebreak:O,aborted:j,truncated:!!e,cursor:l+(t||0),renamedHeaders:D}};}function R(){T(b()),h=[],u=[];}},this.abort=function(){j=!0;},this.getCharIndex=function(){return M;};}function p(e){var t=e.data,i=o[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}});},pause:g,resume:g};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results;}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results);}t.finished&&!r&&_(t.workerId,t.results);}function _(e,t){var i=o[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete o[e];}function g(){throw new Error("Not implemented.");}function v(e){if("object"!=typeof e||null===e)return e;var t,i=Array.isArray(e)?[]:{};for(t in e)i[t]=v(e[t]);return i;}function m(e,t){return function(){e.apply(t,arguments);};}function U(e){return"function"==typeof e;}return w.parse=function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,void 0!==t.downloadTimeout){var i=parseInt(t.downloadTimeout);if(isNaN(i))throw new Error("Config downloadTimeout value ("+t.downloadTimeout+") not parsable by parseInt(val).");t.downloadTimeout=i;}if(!t.worker||!w.WORKERS_SUPPORTED)return i=null,w.NODE_STREAM_INPUT,"string"==typeof e?(e=q(e),i=new(t.download?d:f)(t)):!0===e.readable&&U(e.read)&&U(e.on)?i=new c(t):(n.File&&e instanceof File||e instanceof Object)&&(i=new l(t)),i.stream(e);(i=(()=>{var e;return!!w.WORKERS_SUPPORTED&&(e=(()=>{var e=n.URL||n.webkitURL||null,t=r.toString();return w.BLOB_URL||(w.BLOB_URL=e.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",t,")();"],{type:"text/javascript"})));})(),(e=new n.Worker(e)).onmessage=p,e.id=h++,o[e.id]=e);})()).userStep=t.step,i.userChunk=t.chunk,i.userComplete=t.complete,i.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,i.postMessage({input:e,config:t,workerId:i.id});},w.unparse=function(e,t){var s=!1,g=!0,m=",",y="\r\n",a='"',o=a+a,i=!1,r=null,h=!1,u=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||w.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e);}).length||(m=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(s=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines),"string"==typeof t.newline&&(y=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar,o=a+a),"boolean"==typeof t.header&&(g=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns;}void 0!==t.escapeChar&&(o=t.escapeChar+a),t.escapeFormulae instanceof RegExp?h=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(h=/^[=+\-@\t\r].*$/);}})(),new RegExp(P(a),"g"));"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return n(null,e,i);if("object"==typeof e[0])return n(r||Object.keys(e[0]),e,i);}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||r),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),n(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function n(e,t,i){var r="",n=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),s=!Array.isArray(t[0]);if(n&&g){for(var a=0;a<e.length;a++)0<a&&(r+=m),r+=k(e[a],a);0<t.length&&(r+=y);}for(var o=0;o<t.length;o++){var h=(n?e:t[o]).length,u=!1,d=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var l=[],f=0;f<h;f++){var c=s?e[f]:f;l.push(t[o][c]);}u=""===l.join("").trim();}if(!u){for(var p=0;p<h;p++){0<p&&!d&&(r+=m);var _=n&&s?e[p]:p;r+=k(t[o][_],p);}o<t.length-1&&(!i||0<h&&!d)&&(r+=y);}}return r;}function k(e,t){var i,r,n;return null==e?"":e.constructor===Date?isNaN(e.getTime())?"":e.toISOString():(n=!1,h&&"string"==typeof e&&h.test(e)&&(e="'"+e,n=!0),r=(i=e.toString()).replace(u,o),(n=n||!0===s||"function"==typeof s&&s(e,t)||Array.isArray(s)&&s[t]||((e,t)=>{for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1;})(r,w.BAD_DELIMITERS)||-1<r.indexOf(m)||-1<i.indexOf(a)||" "===r.charAt(0)||" "===r.charAt(r.length-1))?a+r+a:r);}},w.RECORD_SEP=String.fromCharCode(30),w.UNIT_SEP=String.fromCharCode(31),w.BYTE_ORDER_MARK="\ufeff",w.BAD_DELIMITERS=["\r","\n",'"',w.BYTE_ORDER_MARK],w.WORKERS_SUPPORTED=!s&&!!n.Worker,w.NODE_STREAM_INPUT=1,w.LocalChunkSize=10485760,w.RemoteChunkSize=5242880,w.DefaultDelimiter=",",w.Parser=E,w.ParserHandle=i,w.NetworkStreamer=d,w.FileStreamer=l,w.StringStreamer=f,w.ReadableStreamStreamer=c,a&&(n.onmessage=function(e){e=e.data;void 0===w.WORKER_ID&&e&&(w.WORKER_ID=e.workerId);"string"==typeof e.input?n.postMessage({workerId:w.WORKER_ID,results:w.parse(e.input,e.config),finished:!0}):(n.File&&e.input instanceof File||e.input instanceof Object)&&(e=w.parse(e.input,e.config))&&n.postMessage({workerId:w.WORKER_ID,results:e,finished:!0});}),(d.prototype=Object.create(u.prototype)).constructor=d,(l.prototype=Object.create(u.prototype)).constructor=l,(f.prototype=Object.create(f.prototype)).constructor=f,(c.prototype=Object.create(u.prototype)).constructor=c,w;});

/***/ }),

/***/ 6121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";

;// ../../node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap();class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet()).replaceSync(this.cssText),e&&o.set(s,t));}return t;}toString(){return this.cssText;}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");})(s)+t[o+1],t[0]);return new n(o,t,s);},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e);})(t):t;
;// ../../node_modules/@lit/reactive-element/reactive-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:h,getOwnPropertyNames:reactive_element_r,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t;},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i;}},f=(t,s)=>!reactive_element_i(t,s),b={attribute:!0,type:String,converter:u,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap();class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()];}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&reactive_element_e(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h(this.prototype,t)??{get(){return this[s];},set(t){this[s]=t;}};return{get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0};}static getPropertyOptions(t){return this.elementProperties.get(t)??b;}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=reactive_element_n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...reactive_element_r(t),...reactive_element_o(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map();for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c(s));}else void 0!==s&&i.push(c(s));return i;}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0;}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map(),this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set()).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map(),s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t;}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=!1,h){if(void 0!==t){const r=this.constructor;if(!1===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map()).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set()).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&(await t),!this.isUpdatePending;}scheduleUpdate(){return this.performUpdate();}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s;}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map(),this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete();}getUpdateComplete(){return this._$ES;}shouldUpdate(t){return!0;}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[d("elementProperties")]=new Map(),y[d("finalized")]=new Map(),p?.({ReactiveElement:y}),(a.reactiveElementVersions??=[]).push("2.1.2");
;// ../../node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lit_html_t=globalThis,lit_html_i=t=>t,lit_html_s=lit_html_t.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_h="$lit$",lit_html_o=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_n="?"+lit_html_o,lit_html_r=`<${lit_html_n}>`,lit_html_l=document,lit_html_c=()=>lit_html_l.createComment(""),lit_html_a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_u=Array.isArray,lit_html_d=t=>lit_html_u(t)||"function"==typeof t?.[Symbol.iterator],lit_html_f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,lit_html_p=RegExp(`>|${lit_html_f}(?:([^\\s"'>=/]+)(${lit_html_f}*=${lit_html_f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,lit_html_y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),lit_html_b=x(1),w=x(2),T=x(3),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap(),P=lit_html_l.createTreeWalker(lit_html_l,129);function V(t,i){if(!lit_html_u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_e?lit_html_e.createHTML(i):i;}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(lit_html_y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=lit_html_p):void 0!==u[3]&&(c=lit_html_p):c===lit_html_p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?lit_html_p:'"'===u[3]?$:g):c===$||c===g?c=lit_html_p:c===_||c===m?c=v:(c=lit_html_p,n=void 0);const x=c===lit_html_p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+lit_html_r:d>=0?(e.push(a),s.slice(0,d)+lit_html_h+s.slice(d)+lit_html_o+x):s+lit_html_o+(-2===d?i:x);}return[V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e];};class lit_html_S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=lit_html_S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(lit_html_h)){const i=v[a++],s=r.getAttribute(t).split(lit_html_o),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(lit_html_o)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(lit_html_y.test(r.tagName)){const t=r.textContent.split(lit_html_o),i=t.length-1;if(i>0){r.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],lit_html_c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],lit_html_c());}}}else if(8===r.nodeType)if(r.data===lit_html_n)d.push({type:2,index:l});else{let t=-1;for(;-1!==(t=r.data.indexOf(lit_html_o,t+1));)d.push({type:7,index:l}),t+=lit_html_o.length-1;}l++;}}static createElement(t,i){const s=lit_html_l.createElement("template");return s.innerHTML=t,s;}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=lit_html_a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i;}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode;}get _$AU(){return this._$AM._$AU;}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??lit_html_l).importNode(i,!0);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=lit_html_l,e;}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv;}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t;}get startNode(){return this._$AA;}get endNode(){return this._$AB;}_$AI(t,i=this){t=M(this,t,i),lit_html_a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):lit_html_d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB);}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&lit_html_a(this._$AH)?this._$AA.nextSibling.data=t:this.T(lit_html_l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=lit_html_S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new lit_html_S(t)),i;}k(t){lit_html_u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(lit_html_c()),this.O(lit_html_c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=lit_html_i(t).nextSibling;lit_html_i(t).remove(),t=s;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName;}get _$AU(){return this._$AM._$AU;}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String()),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=M(this,t,i,0),o=!lit_html_a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!lit_html_a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU;}_$AI(t){M(this,t);}}const j={M:lit_html_h,P:lit_html_o,A:lit_html_n,C:1,L:N,R,D:lit_html_d,V:M,I:k,H,N:L,U:z,B:I,F:Z},B=lit_html_t.litHtmlPolyfillSupport;B?.(lit_html_S,k),(lit_html_t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(lit_html_c(),t),t,void 0,s??{});}return h._$AI(t),h;};
;// ../../node_modules/lit-element/lit-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lit_element_s=globalThis;class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t;}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return E;}}lit_element_i._$litElement$=!0,lit_element_i["finalized"]=!0,lit_element_s.litElementHydrateSupport?.({LitElement:lit_element_i});const lit_element_o=lit_element_s.litElementPolyfillSupport;lit_element_o?.({LitElement:lit_element_i});const lit_element_n={_$AK:(t,e,r)=>{t._$AK(e,r);},_$AL:t=>t._$AL};(lit_element_s.litElementVersions??=[]).push("4.2.2");
;// ../../node_modules/lit/index.js

;// ../../libs/common/src/platform/enums/file-upload-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));

;// ../../libs/storage-core/src/html-storage-location.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));

;// ../../node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol, Iterator */var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];};return extendStatics(d,b);};function __extends(d,b){if(typeof b!=="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());}var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function __rest(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;}function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;}function __param(paramIndex,decorator){return function(target,key){decorator(target,key,paramIndex);};}function __esDecorate(ctor,descriptorIn,decorators,contextIn,initializers,extraInitializers){function accept(f){if(f!==void 0&&typeof f!=="function")throw new TypeError("Function expected");return f;}var kind=contextIn.kind,key=kind==="getter"?"get":kind==="setter"?"set":"value";var target=!descriptorIn&&ctor?contextIn["static"]?ctor:ctor.prototype:null;var descriptor=descriptorIn||(target?Object.getOwnPropertyDescriptor(target,contextIn.name):{});var _,done=false;for(var i=decorators.length-1;i>=0;i--){var context={};for(var p in contextIn)context[p]=p==="access"?{}:contextIn[p];for(var p in contextIn.access)context.access[p]=contextIn.access[p];context.addInitializer=function(f){if(done)throw new TypeError("Cannot add initializers after decoration has completed");extraInitializers.push(accept(f||null));};var result=(0,decorators[i])(kind==="accessor"?{get:descriptor.get,set:descriptor.set}:descriptor[key],context);if(kind==="accessor"){if(result===void 0)continue;if(result===null||typeof result!=="object")throw new TypeError("Object expected");if(_=accept(result.get))descriptor.get=_;if(_=accept(result.set))descriptor.set=_;if(_=accept(result.init))initializers.unshift(_);}else if(_=accept(result)){if(kind==="field")initializers.unshift(_);else descriptor[key]=_;}}if(target)Object.defineProperty(target,contextIn.name,descriptor);done=true;};function __runInitializers(thisArg,initializers,value){var useValue=arguments.length>2;for(var i=0;i<initializers.length;i++){value=useValue?initializers[i].call(thisArg,value):initializers[i].call(thisArg);}return useValue?value:void 0;};function __propKey(x){return typeof x==="symbol"?x:"".concat(x);};function __setFunctionName(f,name,prefix){if(typeof name==="symbol")name=name.description?"[".concat(name.description,"]"):"";return Object.defineProperty(f,"name",{configurable:true,value:prefix?"".concat(prefix," ",name):name});};function __metadata(metadataKey,metadataValue){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(metadataKey,metadataValue);}function __awaiter(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});}function __generator(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return g.next=verb(0),g["throw"]=verb(1),g["return"]=verb(2),typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(g&&(g=0,op[0]&&(_=0)),_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}}var __createBinding=Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;var desc=Object.getOwnPropertyDescriptor(m,k);if(!desc||("get"in desc?!m.__esModule:desc.writable||desc.configurable)){desc={enumerable:true,get:function(){return m[k];}};}Object.defineProperty(o,k2,desc);}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];};function __exportStar(m,o){for(var p in m)if(p!=="default"&&!Object.prototype.hasOwnProperty.call(o,p))__createBinding(o,m,p);}function __values(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");}function __read(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done)ar.push(r.value);}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;}/** @deprecated */function __spread(){for(var ar=[],i=0;i<arguments.length;i++)ar=ar.concat(__read(arguments[i]));return ar;}/** @deprecated */function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r;}function __spreadArray(to,from,pack){if(pack||arguments.length===2)for(var i=0,l=from.length,ar;i<l;i++){if(ar||!(i in from)){if(!ar)ar=Array.prototype.slice.call(from,0,i);ar[i]=from[i];}}return to.concat(ar||Array.prototype.slice.call(from));}function __await(v){return this instanceof __await?(this.v=v,this):new __await(v);}function __asyncGenerator(thisArg,_arguments,generator){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=generator.apply(thisArg,_arguments||[]),i,q=[];return i=Object.create((typeof AsyncIterator==="function"?AsyncIterator:Object).prototype),verb("next"),verb("throw"),verb("return",awaitReturn),i[Symbol.asyncIterator]=function(){return this;},i;function awaitReturn(f){return function(v){return Promise.resolve(v).then(f,reject);};}function verb(n,f){if(g[n]){i[n]=function(v){return new Promise(function(a,b){q.push([n,v,a,b])>1||resume(n,v);});};if(f)i[n]=f(i[n]);}}function resume(n,v){try{step(g[n](v));}catch(e){settle(q[0][3],e);}}function step(r){r.value instanceof __await?Promise.resolve(r.value.v).then(fulfill,reject):settle(q[0][2],r);}function fulfill(value){resume("next",value);}function reject(value){resume("throw",value);}function settle(f,v){if(f(v),q.shift(),q.length)resume(q[0][0],q[0][1]);}}function __asyncDelegator(o){var i,p;return i={},verb("next"),verb("throw",function(e){throw e;}),verb("return"),i[Symbol.iterator]=function(){return this;},i;function verb(n,f){i[n]=o[n]?function(v){return(p=!p)?{value:__await(o[n](v)),done:false}:f?f(v):v;}:f;}}function __asyncValues(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m=o[Symbol.asyncIterator],i;return m?m.call(o):(o=typeof __values==="function"?__values(o):o[Symbol.iterator](),i={},verb("next"),verb("throw"),verb("return"),i[Symbol.asyncIterator]=function(){return this;},i);function verb(n){i[n]=o[n]&&function(v){return new Promise(function(resolve,reject){v=o[n](v),settle(resolve,reject,v.done,v.value);});};}function settle(resolve,reject,d,v){Promise.resolve(v).then(function(v){resolve({value:v,done:d});},reject);}}function __makeTemplateObject(cooked,raw){if(Object.defineProperty){Object.defineProperty(cooked,"raw",{value:raw});}else{cooked.raw=raw;}return cooked;};var __setModuleDefault=Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;};var ownKeys=function(o){ownKeys=Object.getOwnPropertyNames||function(o){var ar=[];for(var k in o)if(Object.prototype.hasOwnProperty.call(o,k))ar[ar.length]=k;return ar;};return ownKeys(o);};function __importStar(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k=ownKeys(mod),i=0;i<k.length;i++)if(k[i]!=="default")__createBinding(result,mod,k[i]);__setModuleDefault(result,mod);return result;}function __importDefault(mod){return mod&&mod.__esModule?mod:{default:mod};}function __classPrivateFieldGet(receiver,state,kind,f){if(kind==="a"&&!f)throw new TypeError("Private accessor was defined without a getter");if(typeof state==="function"?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return kind==="m"?f:kind==="a"?f.call(receiver):f?f.value:state.get(receiver);}function __classPrivateFieldSet(receiver,state,value,kind,f){if(kind==="m")throw new TypeError("Private method is not writable");if(kind==="a"&&!f)throw new TypeError("Private accessor was defined without a setter");if(typeof state==="function"?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot write private member to an object whose class did not declare it");return kind==="a"?f.call(receiver,value):f?f.value=value:state.set(receiver,value),value;}function __classPrivateFieldIn(state,receiver){if(receiver===null||typeof receiver!=="object"&&typeof receiver!=="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof state==="function"?receiver===state:state.has(receiver);}function __addDisposableResource(env,value,async){if(value!==null&&value!==void 0){if(typeof value!=="object"&&typeof value!=="function")throw new TypeError("Object expected.");var dispose,inner;if(async){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");dispose=value[Symbol.asyncDispose];}if(dispose===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");dispose=value[Symbol.dispose];if(async)inner=dispose;}if(typeof dispose!=="function")throw new TypeError("Object not disposable.");if(inner)dispose=function(){try{inner.call(this);}catch(e){return Promise.reject(e);}};env.stack.push({value:value,dispose:dispose,async:async});}else if(async){env.stack.push({async:true});}return value;}var _SuppressedError=typeof SuppressedError==="function"?SuppressedError:function(error,suppressed,message){var e=new Error(message);return e.name="SuppressedError",e.error=error,e.suppressed=suppressed,e;};function __disposeResources(env){function fail(e){env.error=env.hasError?new _SuppressedError(e,env.error,"An error was suppressed during disposal."):e;env.hasError=true;}var r,s=0;function next(){while(r=env.stack.pop()){try{if(!r.async&&s===1)return s=0,env.stack.push(r),Promise.resolve().then(next);if(r.dispose){var result=r.dispose.call(r.value);if(r.async)return s|=2,Promise.resolve(result).then(next,function(e){fail(e);return next();});}else s|=1;}catch(e){fail(e);}}if(s===1)return env.hasError?Promise.reject(env.error):Promise.resolve();if(env.hasError)throw env.error;}return next();}function __rewriteRelativeImportExtension(path,preserveJsx){if(typeof path==="string"&&/^\.\.?\//.test(path)){return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(m,tsx,d,ext,cm){return tsx?preserveJsx?".jsx":".js":d&&(!ext||!cm)?m:d+ext+"."+cm.toLowerCase()+"js";});}return path;}/* harmony default export */ var tslib_es6 = ({__extends,__assign,__rest,__decorate,__param,__esDecorate,__runInitializers,__propKey,__setFunctionName,__metadata,__awaiter,__generator,__createBinding,__exportStar,__values,__read,__spread,__spreadArrays,__spreadArray,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault,__classPrivateFieldGet,__classPrivateFieldSet,__classPrivateFieldIn,__addDisposableResource,__disposeResources,__rewriteRelativeImportExtension});
;// ../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value){return typeof value==='function';}
;// ../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl){var _super=function(instance){Error.call(instance);instance.stack=new Error().stack;};var ctorFunc=createImpl(_super);ctorFunc.prototype=Object.create(Error.prototype);ctorFunc.prototype.constructor=ctorFunc;return ctorFunc;}
;// ../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError=createErrorClass(function(_super){return function UnsubscriptionErrorImpl(errors){_super(this);this.message=errors?errors.length+" errors occurred during unsubscription:\n"+errors.map(function(err,i){return i+1+") "+err.toString();}).join('\n  '):'';this.name='UnsubscriptionError';this.errors=errors;};});
;// ../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr,item){if(arr){var index=arr.indexOf(item);0<=index&&arr.splice(index,1);}}
;// ../../node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription=function(){function Subscription(initialTeardown){this.initialTeardown=initialTeardown;this.closed=false;this._parentage=null;this._finalizers=null;}Subscription.prototype.unsubscribe=function(){var e_1,_a,e_2,_b;var errors;if(!this.closed){this.closed=true;var _parentage=this._parentage;if(_parentage){this._parentage=null;if(Array.isArray(_parentage)){try{for(var _parentage_1=__values(_parentage),_parentage_1_1=_parentage_1.next();!_parentage_1_1.done;_parentage_1_1=_parentage_1.next()){var parent_1=_parentage_1_1.value;parent_1.remove(this);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_parentage_1_1&&!_parentage_1_1.done&&(_a=_parentage_1.return))_a.call(_parentage_1);}finally{if(e_1)throw e_1.error;}}}else{_parentage.remove(this);}}var initialFinalizer=this.initialTeardown;if(isFunction(initialFinalizer)){try{initialFinalizer();}catch(e){errors=e instanceof UnsubscriptionError?e.errors:[e];}}var _finalizers=this._finalizers;if(_finalizers){this._finalizers=null;try{for(var _finalizers_1=__values(_finalizers),_finalizers_1_1=_finalizers_1.next();!_finalizers_1_1.done;_finalizers_1_1=_finalizers_1.next()){var finalizer=_finalizers_1_1.value;try{execFinalizer(finalizer);}catch(err){errors=errors!==null&&errors!==void 0?errors:[];if(err instanceof UnsubscriptionError){errors=__spreadArray(__spreadArray([],__read(errors)),__read(err.errors));}else{errors.push(err);}}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_finalizers_1_1&&!_finalizers_1_1.done&&(_b=_finalizers_1.return))_b.call(_finalizers_1);}finally{if(e_2)throw e_2.error;}}}if(errors){throw new UnsubscriptionError(errors);}}};Subscription.prototype.add=function(teardown){var _a;if(teardown&&teardown!==this){if(this.closed){execFinalizer(teardown);}else{if(teardown instanceof Subscription){if(teardown.closed||teardown._hasParent(this)){return;}teardown._addParent(this);}(this._finalizers=(_a=this._finalizers)!==null&&_a!==void 0?_a:[]).push(teardown);}}};Subscription.prototype._hasParent=function(parent){var _parentage=this._parentage;return _parentage===parent||Array.isArray(_parentage)&&_parentage.includes(parent);};Subscription.prototype._addParent=function(parent){var _parentage=this._parentage;this._parentage=Array.isArray(_parentage)?(_parentage.push(parent),_parentage):_parentage?[_parentage,parent]:parent;};Subscription.prototype._removeParent=function(parent){var _parentage=this._parentage;if(_parentage===parent){this._parentage=null;}else if(Array.isArray(_parentage)){arrRemove(_parentage,parent);}};Subscription.prototype.remove=function(teardown){var _finalizers=this._finalizers;_finalizers&&arrRemove(_finalizers,teardown);if(teardown instanceof Subscription){teardown._removeParent(this);}};Subscription.EMPTY=function(){var empty=new Subscription();empty.closed=true;return empty;}();return Subscription;}();var EMPTY_SUBSCRIPTION=Subscription.EMPTY;function isSubscription(value){return value instanceof Subscription||value&&'closed'in value&&isFunction(value.remove)&&isFunction(value.add)&&isFunction(value.unsubscribe);}function execFinalizer(finalizer){if(isFunction(finalizer)){finalizer();}else{finalizer.unsubscribe();}}
;// ../../node_modules/rxjs/dist/esm5/internal/config.js
var config={onUnhandledError:null,onStoppedNotification:null,Promise:undefined,useDeprecatedSynchronousErrorHandling:false,useDeprecatedNextContext:false};
;// ../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider={setTimeout:function(handler,timeout){var args=[];for(var _i=2;_i<arguments.length;_i++){args[_i-2]=arguments[_i];}var delegate=timeoutProvider.delegate;if(delegate===null||delegate===void 0?void 0:delegate.setTimeout){return delegate.setTimeout.apply(delegate,__spreadArray([handler,timeout],__read(args)));}return setTimeout.apply(void 0,__spreadArray([handler,timeout],__read(args)));},clearTimeout:function(handle){var delegate=timeoutProvider.delegate;return((delegate===null||delegate===void 0?void 0:delegate.clearTimeout)||clearTimeout)(handle);},delegate:undefined};
;// ../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err){timeoutProvider.setTimeout(function(){var onUnhandledError=config.onUnhandledError;if(onUnhandledError){onUnhandledError(err);}else{throw err;}});}
;// ../../node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop(){}
;// ../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION=function(){return createNotification('C',undefined,undefined);}();function errorNotification(error){return createNotification('E',undefined,error);}function nextNotification(value){return createNotification('N',value,undefined);}function createNotification(kind,value,error){return{kind:kind,value:value,error:error};}
;// ../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context=null;function errorContext(cb){if(config.useDeprecatedSynchronousErrorHandling){var isRoot=!context;if(isRoot){context={errorThrown:false,error:null};}cb();if(isRoot){var _a=context,errorThrown=_a.errorThrown,error=_a.error;context=null;if(errorThrown){throw error;}}}else{cb();}}function captureError(err){if(config.useDeprecatedSynchronousErrorHandling&&context){context.errorThrown=true;context.error=err;}}
;// ../../node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber=function(_super){__extends(Subscriber,_super);function Subscriber(destination){var _this=_super.call(this)||this;_this.isStopped=false;if(destination){_this.destination=destination;if(isSubscription(destination)){destination.add(_this);}}else{_this.destination=EMPTY_OBSERVER;}return _this;}Subscriber.create=function(next,error,complete){return new SafeSubscriber(next,error,complete);};Subscriber.prototype.next=function(value){if(this.isStopped){handleStoppedNotification(nextNotification(value),this);}else{this._next(value);}};Subscriber.prototype.error=function(err){if(this.isStopped){handleStoppedNotification(errorNotification(err),this);}else{this.isStopped=true;this._error(err);}};Subscriber.prototype.complete=function(){if(this.isStopped){handleStoppedNotification(COMPLETE_NOTIFICATION,this);}else{this.isStopped=true;this._complete();}};Subscriber.prototype.unsubscribe=function(){if(!this.closed){this.isStopped=true;_super.prototype.unsubscribe.call(this);this.destination=null;}};Subscriber.prototype._next=function(value){this.destination.next(value);};Subscriber.prototype._error=function(err){try{this.destination.error(err);}finally{this.unsubscribe();}};Subscriber.prototype._complete=function(){try{this.destination.complete();}finally{this.unsubscribe();}};return Subscriber;}(Subscription);var _bind=Function.prototype.bind;function bind(fn,thisArg){return _bind.call(fn,thisArg);}var ConsumerObserver=function(){function ConsumerObserver(partialObserver){this.partialObserver=partialObserver;}ConsumerObserver.prototype.next=function(value){var partialObserver=this.partialObserver;if(partialObserver.next){try{partialObserver.next(value);}catch(error){handleUnhandledError(error);}}};ConsumerObserver.prototype.error=function(err){var partialObserver=this.partialObserver;if(partialObserver.error){try{partialObserver.error(err);}catch(error){handleUnhandledError(error);}}else{handleUnhandledError(err);}};ConsumerObserver.prototype.complete=function(){var partialObserver=this.partialObserver;if(partialObserver.complete){try{partialObserver.complete();}catch(error){handleUnhandledError(error);}}};return ConsumerObserver;}();var SafeSubscriber=function(_super){__extends(SafeSubscriber,_super);function SafeSubscriber(observerOrNext,error,complete){var _this=_super.call(this)||this;var partialObserver;if(isFunction(observerOrNext)||!observerOrNext){partialObserver={next:observerOrNext!==null&&observerOrNext!==void 0?observerOrNext:undefined,error:error!==null&&error!==void 0?error:undefined,complete:complete!==null&&complete!==void 0?complete:undefined};}else{var context_1;if(_this&&config.useDeprecatedNextContext){context_1=Object.create(observerOrNext);context_1.unsubscribe=function(){return _this.unsubscribe();};partialObserver={next:observerOrNext.next&&bind(observerOrNext.next,context_1),error:observerOrNext.error&&bind(observerOrNext.error,context_1),complete:observerOrNext.complete&&bind(observerOrNext.complete,context_1)};}else{partialObserver=observerOrNext;}}_this.destination=new ConsumerObserver(partialObserver);return _this;}return SafeSubscriber;}(Subscriber);function handleUnhandledError(error){if(config.useDeprecatedSynchronousErrorHandling){captureError(error);}else{reportUnhandledError(error);}}function defaultErrorHandler(err){throw err;}function handleStoppedNotification(notification,subscriber){var onStoppedNotification=config.onStoppedNotification;onStoppedNotification&&timeoutProvider.setTimeout(function(){return onStoppedNotification(notification,subscriber);});}var EMPTY_OBSERVER={closed:true,next:noop,error:defaultErrorHandler,complete:noop};
;// ../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable=function(){return typeof Symbol==='function'&&Symbol.observable||'@@observable';}();
;// ../../node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x){return x;}
;// ../../node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipe(){var fns=[];for(var _i=0;_i<arguments.length;_i++){fns[_i]=arguments[_i];}return pipeFromArray(fns);}function pipeFromArray(fns){if(fns.length===0){return identity;}if(fns.length===1){return fns[0];}return function piped(input){return fns.reduce(function(prev,fn){return fn(prev);},input);};}
;// ../../node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable=function(){function Observable(subscribe){if(subscribe){this._subscribe=subscribe;}}Observable.prototype.lift=function(operator){var observable=new Observable();observable.source=this;observable.operator=operator;return observable;};Observable.prototype.subscribe=function(observerOrNext,error,complete){var _this=this;var subscriber=isSubscriber(observerOrNext)?observerOrNext:new SafeSubscriber(observerOrNext,error,complete);errorContext(function(){var _a=_this,operator=_a.operator,source=_a.source;subscriber.add(operator?operator.call(subscriber,source):source?_this._subscribe(subscriber):_this._trySubscribe(subscriber));});return subscriber;};Observable.prototype._trySubscribe=function(sink){try{return this._subscribe(sink);}catch(err){sink.error(err);}};Observable.prototype.forEach=function(next,promiseCtor){var _this=this;promiseCtor=getPromiseCtor(promiseCtor);return new promiseCtor(function(resolve,reject){var subscriber=new SafeSubscriber({next:function(value){try{next(value);}catch(err){reject(err);subscriber.unsubscribe();}},error:reject,complete:resolve});_this.subscribe(subscriber);});};Observable.prototype._subscribe=function(subscriber){var _a;return(_a=this.source)===null||_a===void 0?void 0:_a.subscribe(subscriber);};Observable.prototype[observable]=function(){return this;};Observable.prototype.pipe=function(){var operations=[];for(var _i=0;_i<arguments.length;_i++){operations[_i]=arguments[_i];}return pipeFromArray(operations)(this);};Observable.prototype.toPromise=function(promiseCtor){var _this=this;promiseCtor=getPromiseCtor(promiseCtor);return new promiseCtor(function(resolve,reject){var value;_this.subscribe(function(x){return value=x;},function(err){return reject(err);},function(){return resolve(value);});});};Observable.create=function(subscribe){return new Observable(subscribe);};return Observable;}();function getPromiseCtor(promiseCtor){var _a;return(_a=promiseCtor!==null&&promiseCtor!==void 0?promiseCtor:config.Promise)!==null&&_a!==void 0?_a:Promise;}function isObserver(value){return value&&isFunction(value.next)&&isFunction(value.error)&&isFunction(value.complete);}function isSubscriber(value){return value&&value instanceof Subscriber||isObserver(value)&&isSubscription(value);}
;// ../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError=createErrorClass(function(_super){return function ObjectUnsubscribedErrorImpl(){_super(this);this.name='ObjectUnsubscribedError';this.message='object unsubscribed';};});
;// ../../node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject=function(_super){__extends(Subject,_super);function Subject(){var _this=_super.call(this)||this;_this.closed=false;_this.currentObservers=null;_this.observers=[];_this.isStopped=false;_this.hasError=false;_this.thrownError=null;return _this;}Subject.prototype.lift=function(operator){var subject=new AnonymousSubject(this,this);subject.operator=operator;return subject;};Subject.prototype._throwIfClosed=function(){if(this.closed){throw new ObjectUnsubscribedError();}};Subject.prototype.next=function(value){var _this=this;errorContext(function(){var e_1,_a;_this._throwIfClosed();if(!_this.isStopped){if(!_this.currentObservers){_this.currentObservers=Array.from(_this.observers);}try{for(var _b=__values(_this.currentObservers),_c=_b.next();!_c.done;_c=_b.next()){var observer=_c.value;observer.next(value);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}}});};Subject.prototype.error=function(err){var _this=this;errorContext(function(){_this._throwIfClosed();if(!_this.isStopped){_this.hasError=_this.isStopped=true;_this.thrownError=err;var observers=_this.observers;while(observers.length){observers.shift().error(err);}}});};Subject.prototype.complete=function(){var _this=this;errorContext(function(){_this._throwIfClosed();if(!_this.isStopped){_this.isStopped=true;var observers=_this.observers;while(observers.length){observers.shift().complete();}}});};Subject.prototype.unsubscribe=function(){this.isStopped=this.closed=true;this.observers=this.currentObservers=null;};Object.defineProperty(Subject.prototype,"observed",{get:function(){var _a;return((_a=this.observers)===null||_a===void 0?void 0:_a.length)>0;},enumerable:false,configurable:true});Subject.prototype._trySubscribe=function(subscriber){this._throwIfClosed();return _super.prototype._trySubscribe.call(this,subscriber);};Subject.prototype._subscribe=function(subscriber){this._throwIfClosed();this._checkFinalizedStatuses(subscriber);return this._innerSubscribe(subscriber);};Subject.prototype._innerSubscribe=function(subscriber){var _this=this;var _a=this,hasError=_a.hasError,isStopped=_a.isStopped,observers=_a.observers;if(hasError||isStopped){return EMPTY_SUBSCRIPTION;}this.currentObservers=null;observers.push(subscriber);return new Subscription(function(){_this.currentObservers=null;arrRemove(observers,subscriber);});};Subject.prototype._checkFinalizedStatuses=function(subscriber){var _a=this,hasError=_a.hasError,thrownError=_a.thrownError,isStopped=_a.isStopped;if(hasError){subscriber.error(thrownError);}else if(isStopped){subscriber.complete();}};Subject.prototype.asObservable=function(){var observable=new Observable();observable.source=this;return observable;};Subject.create=function(destination,source){return new AnonymousSubject(destination,source);};return Subject;}(Observable);var AnonymousSubject=function(_super){__extends(AnonymousSubject,_super);function AnonymousSubject(destination,source){var _this=_super.call(this)||this;_this.destination=destination;_this.source=source;return _this;}AnonymousSubject.prototype.next=function(value){var _a,_b;(_b=(_a=this.destination)===null||_a===void 0?void 0:_a.next)===null||_b===void 0?void 0:_b.call(_a,value);};AnonymousSubject.prototype.error=function(err){var _a,_b;(_b=(_a=this.destination)===null||_a===void 0?void 0:_a.error)===null||_b===void 0?void 0:_b.call(_a,err);};AnonymousSubject.prototype.complete=function(){var _a,_b;(_b=(_a=this.destination)===null||_a===void 0?void 0:_a.complete)===null||_b===void 0?void 0:_b.call(_a);};AnonymousSubject.prototype._subscribe=function(subscriber){var _a,_b;return(_b=(_a=this.source)===null||_a===void 0?void 0:_a.subscribe(subscriber))!==null&&_b!==void 0?_b:EMPTY_SUBSCRIPTION;};return AnonymousSubject;}(Subject);
;// ../../libs/storage-core/src/storage.service.ts
class StorageService {
}

;// ../../libs/storage-core/src/memory-storage.service.ts
var memory_storage_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


class MemoryStorageService extends StorageService {
    constructor() {
        super(...arguments);
        this.store = new Map();
        this.updatesSubject = new Subject();
    }
    get valuesRequireDeserialization() {
        return false;
    }
    get updates$() {
        return this.updatesSubject.asObservable();
    }
    get(key) {
        if (this.store.has(key)) {
            const obj = this.store.get(key);
            return Promise.resolve(obj);
        }
        return Promise.resolve(null);
    }
    has(key) {
        return memory_storage_service_awaiter(this, void 0, void 0, function* () {
            return (yield this.get(key)) != null;
        });
    }
    save(key, obj) {
        if (obj == null) {
            return this.remove(key);
        }
        // TODO: Remove once foreground/background contexts are separated in browser
        // Needed to ensure ownership of all memory by the context running the storage service
        const toStore = structuredClone(obj);
        this.store.set(key, toStore);
        this.updatesSubject.next({ key, updateType: "save" });
        return Promise.resolve();
    }
    remove(key) {
        this.store.delete(key);
        this.updatesSubject.next({ key, updateType: "remove" });
        return Promise.resolve();
    }
}

;// ../../libs/storage-core/src/serialized-memory-storage.service.ts
var serialized_memory_storage_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


class SerializedMemoryStorageService extends StorageService {
    constructor() {
        super(...arguments);
        this.store = {};
        this.updatesSubject = new Subject();
    }
    get valuesRequireDeserialization() {
        return true;
    }
    get updates$() {
        return this.updatesSubject.asObservable();
    }
    get(key) {
        const json = this.store[key];
        if (json) {
            const obj = JSON.parse(json);
            return Promise.resolve(obj);
        }
        return Promise.resolve(null);
    }
    has(key) {
        return serialized_memory_storage_service_awaiter(this, void 0, void 0, function* () {
            return (yield this.get(key)) != null;
        });
    }
    save(key, obj) {
        if (obj == null) {
            return this.remove(key);
        }
        // TODO: Remove once foreground/background contexts are separated in browser
        // Needed to ensure ownership of all memory by the context running the storage service
        this.store[key] = JSON.stringify(obj);
        this.updatesSubject.next({ key, updateType: "save" });
        return Promise.resolve();
    }
    remove(key) {
        delete this.store[key];
        this.updatesSubject.next({ key, updateType: "remove" });
        return Promise.resolve();
    }
}

;// ../../libs/storage-core/src/storage-location.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var StorageLocationEnum;
(function (StorageLocationEnum) {
    StorageLocationEnum["Both"] = "both";
    StorageLocationEnum["Disk"] = "disk";
    StorageLocationEnum["Memory"] = "memory";
})(StorageLocationEnum || (StorageLocationEnum = {}));

;// ../../libs/storage-core/src/index.ts








// Renamed to just "StorageService", to be removed when references are updated



;// ../../libs/common/src/platform/enums/html-storage-location.enum.ts


;// ../../libs/common/src/platform/enums/key-suffix-options.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));

;// ../../libs/logging/src/log-level.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));

;// ../../libs/logging/src/perf-track-group.ts
/**
 * DevTools performance track groups, i.e. the domain or flow a measurement belongs to.
 * Shared so entries from different services land in the same group, e.g. `"Unlock"`.
 */
const PerfTrackGroup = Object.freeze({
    Crypto: "Crypto",
    KeyManagement: "KeyManagement",
    Migrations: "Migrations",
    Notifications: "Notifications",
    Sdk: "SDK",
    Search: "Search",
    Sync: "Sync",
    Unlock: "Unlock",
    Vault: "Vault",
});

;// ../../libs/logging/src/console-log.service.ts
/* unused harmony import specifier */ var console_log_service_LogLevel;
/* unused harmony import specifier */ var Measurement;
/* unused harmony import specifier */ var recordTrackEntry;



class ConsoleLogService {
    constructor(isDev, filter = null, recorder = null) {
        this.isDev = isDev;
        this.filter = filter;
        this.recorder = recorder;
        this.timersMap = new Map();
    }
    enableRecorder(enabled) {
        var _a;
        (_a = this.recorder) === null || _a === void 0 ? void 0 : _a.setEnabled(enabled);
    }
    debug(message, ...optionalParams) {
        if (!this.isDev) {
            return;
        }
        this.write(console_log_service_LogLevel.Debug, message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        this.write(console_log_service_LogLevel.Info, message, ...optionalParams);
    }
    warning(message, ...optionalParams) {
        this.write(console_log_service_LogLevel.Warning, message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        this.write(console_log_service_LogLevel.Error, message, ...optionalParams);
    }
    write(level, message, ...optionalParams) {
        this.tee(level, message, ...optionalParams);
        if (this.filter != null && this.filter(level)) {
            return;
        }
        switch (level) {
            case console_log_service_LogLevel.Debug:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case console_log_service_LogLevel.Info:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case console_log_service_LogLevel.Warning:
                // eslint-disable-next-line
                console.warn(message, ...optionalParams);
                break;
            case console_log_service_LogLevel.Error:
                // eslint-disable-next-line
                console.error(message, ...optionalParams);
                break;
            default:
                break;
        }
    }
    /**
     * Sends an event to the recorder, if one is wired up. Subclasses that override
     * {@link write} without calling `super.write` must call this themselves, before
     * any filtering: the filter gates output only, never what gets recorded.
     */
    tee(level, message, ...optionalParams) {
        var _a;
        try {
            (_a = this.recorder) === null || _a === void 0 ? void 0 : _a.record(level, message, ...optionalParams);
        }
        catch (_b) {
            // Ignore error
        }
    }
    measure(start, trackGroup, track, name, properties) {
        return this.recordMeasure(`[${track}]: ${name}`, start, trackGroup, track, properties);
    }
    startMeasurement(trackGroup, track, measureName) {
        // The DevTools track already shows the track, so the entry keeps the bare name
        return new Measurement((start, properties, duration) => this.recordMeasure(measureName, start, trackGroup, track, properties, duration));
    }
    /**
     * Records a DevTools track entry and debug-logs it.
     *
     * @param entryName Name of the performance entry shown in DevTools.
     * @param duration Fixed duration in ms; when omitted, the entry ends now.
     */
    recordMeasure(entryName, start, trackGroup, track, properties, duration) {
        const measure = recordTrackEntry(entryName, start, trackGroup, track, properties, duration);
        this.debug(`[${track}]: ${entryName} took ${measure.duration}`, properties);
        return measure;
    }
    mark(name) {
        const mark = performance.mark(name, {
            detail: {
                devtools: {
                    dataType: "marker",
                },
            },
        });
        this.debug(mark.name, new Date().toISOString());
        return mark;
    }
}

;// ../../libs/logging/src/flight-recorder.ts
/* unused harmony import specifier */ var FlightRecorderClient;
var flight_recorder_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Framework-agnostic wrapper around the SDK's {@link FlightRecorderClient}.
 *
 * The underlying WASM must be loaded before the client can be used. Callers
 * provide a `sdkReady` promise (typically `SdkLoadService.Ready`) that resolves
 * once the SDK is initialized. The client is lazily created on first access.
 */
class FlightRecorder {
    /**
     * @param sdkReady - A promise that resolves when the SDK WASM has been loaded
     *   and initialized. Pass `SdkLoadService.Ready` in DI-enabled contexts.
     */
    constructor(sdkReady) {
        this.sdkReady = sdkReady;
    }
    /**
     * Read all events currently in the flight recorder buffer.
     */
    read() {
        return flight_recorder_awaiter(this, void 0, void 0, function* () {
            const client = yield this.getClient();
            return client.read();
        });
    }
    /**
     * Get the current event count without reading event contents.
     */
    count() {
        return flight_recorder_awaiter(this, void 0, void 0, function* () {
            const client = yield this.getClient();
            return client.count();
        });
    }
    getClient() {
        if (this.clientPromise == null) {
            this.clientPromise = this.sdkReady.then(() => new FlightRecorderClient());
        }
        return this.clientPromise;
    }
}

;// ../../libs/logging/src/flight-recorder-log-recorder.ts
/* unused harmony import specifier */ var SdkLogLevel;
/* unused harmony import specifier */ var flight_recorder_log_recorder_LogLevel;
/* unused harmony import specifier */ var safeStringify;



/** Cap on records buffered before the SDK is ready. Later records are dropped. */
const MAX_QUEUE = 1000;
/**
 * The SDK carries a `Trace` level the clients have no equivalent for.
 *
 * Read at call time: `libs/common` re-exports the `@bitwarden/logging` barrel, so touching
 * the SDK enum during module evaluation breaks every spec that stubs
 * `@bitwarden/sdk-internal` with a partial mock.
 */
function toSdkLevel(level) {
    switch (level) {
        case flight_recorder_log_recorder_LogLevel.Debug:
            return SdkLogLevel.Debug;
        case flight_recorder_log_recorder_LogLevel.Info:
            return SdkLogLevel.Info;
        case flight_recorder_log_recorder_LogLevel.Warning:
            return SdkLogLevel.Warn;
        case flight_recorder_log_recorder_LogLevel.Error:
            return SdkLogLevel.Error;
    }
}
/**
 * A {@link LogRecorder} that forwards log events into the SDK Flight Recorder buffer.
 *
 * Records are queued until the SDK has loaded and {@link setEnabled} has been
 * called, then written in order. Each record keeps the timestamp from when it was
 * logged.
 */
class FlightRecorderLogRecorder {
    /**
     * @param clientReady Resolves with the client once the SDK WASM is loaded. If it
     *   rejects, the recorder is disabled.
     * @param target The target recorded alongside each event, mirroring the Rust
     *   module path on SDK-origin events.
     */
    constructor(clientReady, target = "typescript") {
        this.target = target;
        this.client = null;
        this.queue = [];
        /** `null` until {@link setEnabled} is called. */
        this.enabled = null;
        void clientReady.then((client) => {
            this.client = client;
            this.flush();
        }, () => {
            this.enabled = false;
            this.queue = [];
        });
    }
    setEnabled(enabled) {
        if (this.enabled != null) {
            return;
        }
        this.enabled = enabled;
        if (enabled) {
            this.flush();
        }
        else {
            this.queue = [];
        }
    }
    record(level, message, ...optionalParams) {
        if (this.enabled === false) {
            return;
        }
        try {
            const timestamp = Date.now();
            const sdkLevel = toSdkLevel(level);
            const text = this.format(message, optionalParams);
            if (this.client != null && this.enabled) {
                this.client.write(timestamp, sdkLevel, this.target, text);
            }
            else if (this.queue.length < MAX_QUEUE) {
                this.queue.push({ timestamp, level: sdkLevel, message: text });
            }
        }
        catch (_a) {
            // Ignore error
        }
    }
    flush() {
        if (this.client == null || !this.enabled) {
            return;
        }
        const queued = this.queue;
        this.queue = [];
        for (const record of queued) {
            try {
                this.client.write(record.timestamp, record.level, this.target, record.message);
            }
            catch (_a) {
                // Ignore error
            }
        }
    }
    format(message, params) {
        return [message, ...params]
            .map(safeStringify)
            .filter((part) => part.length > 0)
            .join(" ");
    }
}

// EXTERNAL MODULE: ../../node_modules/papaparse/papaparse.min.js
var papaparse_min = __webpack_require__(98869);
;// ../../libs/logging/src/flight-recorder-export.ts
/* unused harmony import specifier */ var papa;

const CSV_COLUMNS = (/* unused pure expression or super */ null && (["timestamp", "level", "target", "message", "fields"]));
/**
 * Build a CSV download payload for {@link FlightRecorderEvent}s.
 *
 * Returns a `fileName` of the form `Bitwarden-diagnostic-report-YYYY-MM-DD.csv`
 * and a CSV-encoded `blobData` ready to pass to `FileDownloadService.download`.
 *
 * @param events The events to encode.
 * @param date The date used for the filename. Defaults to `new Date()`.
 */
function buildFlightRecorderCsvExport(events, date = new Date()) {
    const rows = events.map((e) => ({
        timestamp: new Date(e.timestamp).toISOString(),
        level: e.level,
        target: e.target,
        message: e.message,
        fields: JSON.stringify(e.fields),
    }));
    const blobData = papa.unparse(rows, {
        columns: [...CSV_COLUMNS],
        header: true,
    });
    const datePart = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const fileName = `Bitwarden-diagnostic-report-${datePart}.csv`;
    return { fileName, blobData };
}

;// ../../libs/logging/src/index.ts












;// ../../libs/common/src/platform/enums/log-level-type.enum.ts


;// ../../libs/common/src/platform/enums/storage-location.enum.ts


;// ../../libs/common/src/platform/enums/theme-type.enum.ts
/**
 * @deprecated prefer the `ThemeTypes` constants and `Theme` type over unsafe enum types
 **/
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
})(ThemeType || (ThemeType = {}));
const ThemeTypes = {
    System: "system",
    Light: "light",
    Dark: "dark",
};

;// ../../libs/common/src/platform/enums/index.ts







;// ../../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment=false;/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/function sheetForTag(tag){if(tag.sheet){return tag.sheet;}// this weirdness brought to you by firefox
/* istanbul ignore next */for(var i=0;i<document.styleSheets.length;i++){if(document.styleSheets[i].ownerNode===tag){return document.styleSheets[i];}}// this function should always return with a value
// TS can't understand it though so we make it stop complaining here
return undefined;}function createStyleElement(options){var tag=document.createElement('style');tag.setAttribute('data-emotion',options.key);if(options.nonce!==undefined){tag.setAttribute('nonce',options.nonce);}tag.appendChild(document.createTextNode(''));tag.setAttribute('data-s','');return tag;}var StyleSheet=/*#__PURE__*/function(){// Using Node instead of HTMLElement since container may be a ShadowRoot
function StyleSheet(options){var _this=this;this._insertTag=function(tag){var before;if(_this.tags.length===0){if(_this.insertionPoint){before=_this.insertionPoint.nextSibling;}else if(_this.prepend){before=_this.container.firstChild;}else{before=_this.before;}}else{before=_this.tags[_this.tags.length-1].nextSibling;}_this.container.insertBefore(tag,before);_this.tags.push(tag);};this.isSpeedy=options.speedy===undefined?!isDevelopment:options.speedy;this.tags=[];this.ctr=0;this.nonce=options.nonce;// key is the value of the data-emotion attribute, it's used to identify different sheets
this.key=options.key;this.container=options.container;this.prepend=options.prepend;this.insertionPoint=options.insertionPoint;this.before=null;}var _proto=StyleSheet.prototype;_proto.hydrate=function hydrate(nodes){nodes.forEach(this._insertTag);};_proto.insert=function insert(rule){// the max length is how many rules we have per style tag, it's 65000 in speedy mode
// it's 1 in dev because we insert source maps that map a single rule to a location
// and you can only have one source map per style tag
if(this.ctr%(this.isSpeedy?65000:1)===0){this._insertTag(createStyleElement(this));}var tag=this.tags[this.tags.length-1];if(this.isSpeedy){var sheet=sheetForTag(tag);try{// this is the ultrafast version, works across browsers
// the big drawback is that the css won't be editable in devtools
sheet.insertRule(rule,sheet.cssRules.length);}catch(e){}}else{tag.appendChild(document.createTextNode(rule));}this.ctr++;};_proto.flush=function flush(){this.tags.forEach(function(tag){var _tag$parentNode;return(_tag$parentNode=tag.parentNode)==null?void 0:_tag$parentNode.removeChild(tag);});this.tags=[];this.ctr=0;};return StyleSheet;}();
;// ../../node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */var abs=Math.abs;/**
 * @param {number}
 * @return {string}
 */var from=String.fromCharCode;/**
 * @param {object}
 * @return {object}
 */var Utility_assign=Object.assign;/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */function hash(value,length){return charat(value,0)^45?(((length<<2^charat(value,0))<<2^charat(value,1))<<2^charat(value,2))<<2^charat(value,3):0;}/**
 * @param {string} value
 * @return {string}
 */function trim(value){return value.trim();}/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */function match(value,pattern){return(value=pattern.exec(value))?value[0]:value;}/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */function replace(value,pattern,replacement){return value.replace(pattern,replacement);}/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */function indexof(value,search){return value.indexOf(search);}/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */function charat(value,index){return value.charCodeAt(index)|0;}/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function substr(value,begin,end){return value.slice(begin,end);}/**
 * @param {string} value
 * @return {number}
 */function strlen(value){return value.length;}/**
 * @param {any[]} value
 * @return {number}
 */function sizeof(value){return value.length;}/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */function append(value,array){return array.push(value),value;}/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */function combine(array,callback){return array.map(callback).join('');}
;// ../../node_modules/stylis/src/Tokenizer.js
/* unused harmony import specifier */ var Tokenizer_append;
/* unused harmony import specifier */ var Tokenizer_from;
var line=1;var column=1;var Tokenizer_length=0;var position=0;var character=0;var characters='';/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */function node(value,root,parent,type,props,children,length){return{value:value,root:root,parent:parent,type:type,props:props,children:children,line:line,column:column,length:length,return:''};}/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */function copy(root,props){return Utility_assign(node('',null,null,'',null,null,0),root,{length:-root.length},props);}/**
 * @return {number}
 */function Tokenizer_char(){return character;}/**
 * @return {number}
 */function prev(){character=position>0?charat(characters,--position):0;if(column--,character===10)column=1,line--;return character;}/**
 * @return {number}
 */function next(){character=position<Tokenizer_length?charat(characters,position++):0;if(column++,character===10)column=1,line++;return character;}/**
 * @return {number}
 */function peek(){return charat(characters,position);}/**
 * @return {number}
 */function caret(){return position;}/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function slice(begin,end){return substr(characters,begin,end);}/**
 * @param {number} type
 * @return {number}
 */function token(type){switch(type){// \0 \t \n \r \s whitespace token
case 0:case 9:case 10:case 13:case 32:return 5;// ! + , / > @ ~ isolate token
case 33:case 43:case 44:case 47:case 62:case 64:case 126:// ; { } breakpoint token
case 59:case 123:case 125:return 4;// : accompanied token
case 58:return 3;// " ' ( [ opening delimit token
case 34:case 39:case 40:case 91:return 2;// ) ] closing delimit token
case 41:case 93:return 1;}return 0;}/**
 * @param {string} value
 * @return {any[]}
 */function alloc(value){return line=column=1,Tokenizer_length=strlen(characters=value),position=0,[];}/**
 * @param {any} value
 * @return {any}
 */function dealloc(value){return characters='',value;}/**
 * @param {number} type
 * @return {string}
 */function delimit(type){return trim(slice(position-1,delimiter(type===91?type+2:type===40?type+1:type)));}/**
 * @param {string} value
 * @return {string[]}
 */function tokenize(value){return dealloc(tokenizer(alloc(value)));}/**
 * @param {number} type
 * @return {string}
 */function whitespace(type){while(character=peek())if(character<33)next();else break;return token(type)>2||token(character)>3?'':' ';}/**
 * @param {string[]} children
 * @return {string[]}
 */function tokenizer(children){while(next())switch(token(character)){case 0:Tokenizer_append(identifier(position-1),children);break;case 2:Tokenizer_append(delimit(character),children);break;default:Tokenizer_append(Tokenizer_from(character),children);}return children;}/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */function escaping(index,count){while(--count&&next())// not 0-9 A-F a-f
if(character<48||character>102||character>57&&character<65||character>70&&character<97)break;return slice(index,caret()+(count<6&&peek()==32&&next()==32));}/**
 * @param {number} type
 * @return {number}
 */function delimiter(type){while(next())switch(character){// ] ) " '
case type:return position;// " '
case 34:case 39:if(type!==34&&type!==39)delimiter(character);break;// (
case 40:if(type===41)delimiter(type);break;// \
case 92:next();break;}return position;}/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */function commenter(type,index){while(next())// //
if(type+character===47+10)break;// /*
else if(type+character===42+42&&peek()===47)break;return'/*'+slice(index,position-1)+'*'+from(type===47?type:next());}/**
 * @param {number} index
 * @return {string}
 */function identifier(index){while(!token(peek()))next();return slice(index,position);}
;// ../../node_modules/stylis/src/Enum.js
var MS='-ms-';var MOZ='-moz-';var WEBKIT='-webkit-';var COMMENT='comm';var RULESET='rule';var DECLARATION='decl';var PAGE='@page';var MEDIA='@media';var IMPORT='@import';var CHARSET='@charset';var VIEWPORT='@viewport';var SUPPORTS='@supports';var DOCUMENT='@document';var NAMESPACE='@namespace';var KEYFRAMES='@keyframes';var FONT_FACE='@font-face';var COUNTER_STYLE='@counter-style';var FONT_FEATURE_VALUES='@font-feature-values';var LAYER='@layer';
;// ../../node_modules/stylis/src/Serializer.js
/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function serialize(children,callback){var output='';var length=sizeof(children);for(var i=0;i<length;i++)output+=callback(children[i],i,children,callback)||'';return output;}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function stringify(element,index,children,callback){switch(element.type){case LAYER:if(element.children.length)break;case IMPORT:case DECLARATION:return element.return=element.return||element.value;case COMMENT:return'';case KEYFRAMES:return element.return=element.value+'{'+serialize(element.children,callback)+'}';case RULESET:element.value=element.props.join(',');}return strlen(children=serialize(element.children,callback))?element.return=element.value+'{'+children+'}':'';}
;// ../../node_modules/stylis/src/Middleware.js
/* unused harmony import specifier */ var Middleware_DECLARATION;
/* unused harmony import specifier */ var Middleware_KEYFRAMES;
/* unused harmony import specifier */ var Middleware_WEBKIT;
/* unused harmony import specifier */ var Middleware_RULESET;
/* unused harmony import specifier */ var Middleware_MOZ;
/* unused harmony import specifier */ var Middleware_MS;
/* unused harmony import specifier */ var Middleware_replace;
/* unused harmony import specifier */ var Middleware_combine;
/* unused harmony import specifier */ var Middleware_match;
/* unused harmony import specifier */ var Middleware_charat;
/* unused harmony import specifier */ var Middleware_substr;
/* unused harmony import specifier */ var Middleware_strlen;
/* unused harmony import specifier */ var Middleware_sizeof;
/* unused harmony import specifier */ var Middleware_copy;
/* unused harmony import specifier */ var Middleware_tokenize;
/* unused harmony import specifier */ var Middleware_serialize;
/* unused harmony import specifier */ var prefix;
/**
 * @param {function[]} collection
 * @return {function}
 */function middleware(collection){var length=sizeof(collection);return function(element,index,children,callback){var output='';for(var i=0;i<length;i++)output+=collection[i](element,index,children,callback)||'';return output;};}/**
 * @param {function} callback
 * @return {function}
 */function rulesheet(callback){return function(element){if(!element.root)if(element=element.return)callback(element);};}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */function prefixer(element,index,children,callback){if(element.length>-1)if(!element.return)switch(element.type){case Middleware_DECLARATION:element.return=prefix(element.value,element.length,children);return;case Middleware_KEYFRAMES:return Middleware_serialize([Middleware_copy(element,{value:Middleware_replace(element.value,'@','@'+Middleware_WEBKIT)})],callback);case Middleware_RULESET:if(element.length)return Middleware_combine(element.props,function(value){switch(Middleware_match(value,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case':read-only':case':read-write':return Middleware_serialize([Middleware_copy(element,{props:[Middleware_replace(value,/:(read-\w+)/,':'+Middleware_MOZ+'$1')]})],callback);// :placeholder
case'::placeholder':return Middleware_serialize([Middleware_copy(element,{props:[Middleware_replace(value,/:(plac\w+)/,':'+Middleware_WEBKIT+'input-$1')]}),Middleware_copy(element,{props:[Middleware_replace(value,/:(plac\w+)/,':'+Middleware_MOZ+'$1')]}),Middleware_copy(element,{props:[Middleware_replace(value,/:(plac\w+)/,Middleware_MS+'input-$1')]})],callback);}return'';});}}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */function namespace(element){switch(element.type){case Middleware_RULESET:element.props=element.props.map(function(value){return Middleware_combine(Middleware_tokenize(value),function(value,index,children){switch(Middleware_charat(value,0)){// \f
case 12:return Middleware_substr(value,1,Middleware_strlen(value));// \0 ( + > ~
case 0:case 40:case 43:case 62:case 126:return value;// :
case 58:if(children[++index]==='global')children[index]='',children[++index]='\f'+Middleware_substr(children[index],index=1,-1);// \s
case 32:return index===1?'':value;default:switch(index){case 0:element=value;return Middleware_sizeof(children)>1?'':value;case index=Middleware_sizeof(children)-1:case 2:return index===2?value+element+element:value+element;default:return value;}}});});}}
;// ../../node_modules/stylis/src/Parser.js
/**
 * @param {string} value
 * @return {object[]}
 */function compile(value){return dealloc(parse('',null,null,null,[''],value=alloc(value),0,[0],value));}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */function parse(value,root,parent,rule,rules,rulesets,pseudo,points,declarations){var index=0;var offset=0;var length=pseudo;var atrule=0;var property=0;var previous=0;var variable=1;var scanning=1;var ampersand=1;var character=0;var type='';var props=rules;var children=rulesets;var reference=rule;var characters=type;while(scanning)switch(previous=character,character=next()){// (
case 40:if(previous!=108&&charat(characters,length-1)==58){if(indexof(characters+=replace(delimit(character),'&','&\f'),'&\f')!=-1)ampersand=-1;break;}// " ' [
case 34:case 39:case 91:characters+=delimit(character);break;// \t \n \r \s
case 9:case 10:case 13:case 32:characters+=whitespace(previous);break;// \
case 92:characters+=escaping(caret()-1,7);continue;// /
case 47:switch(peek()){case 42:case 47:append(comment(commenter(next(),caret()),root,parent),declarations);break;default:characters+='/';}break;// {
case 123*variable:points[index++]=strlen(characters)*ampersand;// } ; \0
case 125*variable:case 59:case 0:switch(character){// \0 }
case 0:case 125:scanning=0;// ;
case 59+offset:if(ampersand==-1)characters=replace(characters,/\f/g,'');if(property>0&&strlen(characters)-length)append(property>32?declaration(characters+';',rule,parent,length-1):declaration(replace(characters,' ','')+';',rule,parent,length-2),declarations);break;// @ ;
case 59:characters+=';';// { rule/at-rule
default:append(reference=ruleset(characters,root,parent,index,offset,rules,points,type,props=[],children=[],length),rulesets);if(character===123)if(offset===0)parse(characters,root,reference,reference,props,rulesets,length,points,children);else switch(atrule===99&&charat(characters,3)===110?100:atrule){// d l m s
case 100:case 108:case 109:case 115:parse(value,reference,reference,rule&&append(ruleset(value,reference,reference,0,0,rules,points,type,rules,props=[],length),children),rules,children,length,points,rule?props:children);break;default:parse(characters,reference,reference,reference,[''],children,0,points,children);}}index=offset=property=0,variable=ampersand=1,type=characters='',length=pseudo;break;// :
case 58:length=1+strlen(characters),property=previous;default:if(variable<1)if(character==123)--variable;else if(character==125&&variable++==0&&prev()==125)continue;switch(characters+=from(character),character*variable){// &
case 38:ampersand=offset>0?1:(characters+='\f',-1);break;// ,
case 44:points[index++]=(strlen(characters)-1)*ampersand,ampersand=1;break;// @
case 64:// -
if(peek()===45)characters+=delimit(next());atrule=peek(),offset=length=strlen(type=characters+=identifier(caret())),character++;break;// -
case 45:if(previous===45&&strlen(characters)==2)variable=0;}}return rulesets;}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */function ruleset(value,root,parent,index,offset,rules,points,type,props,children,length){var post=offset-1;var rule=offset===0?rules:[''];var size=sizeof(rule);for(var i=0,j=0,k=0;i<index;++i)for(var x=0,y=substr(value,post+1,post=abs(j=points[i])),z=value;x<size;++x)if(z=trim(j>0?rule[x]+' '+y:replace(y,/&\f/g,rule[x])))props[k++]=z;return node(value,root,parent,offset===0?RULESET:type,props,children,length);}/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */function comment(value,root,parent){return node(value,root,parent,COMMENT,from(Tokenizer_char()),substr(value,2,-2),0);}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */function declaration(value,root,parent,length){return node(value,root,parent,DECLARATION,substr(value,0,length),substr(value,length+1,-1),length);}
;// ../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking=function identifierWithPointTracking(begin,points,index){var previous=0;var character=0;while(true){previous=character;character=peek();// &\f
if(previous===38&&character===12){points[index]=1;}if(token(character)){break;}next();}return slice(begin,position);};var toRules=function toRules(parsed,points){// pretend we've started with a comma
var index=-1;var character=44;do{switch(token(character)){case 0:// &\f
if(character===38&&peek()===12){// this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
// stylis inserts \f after & to know when & where it should replace this sequence with the context selector
// and when it should just concatenate the outer and inner selectors
// it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
points[index]=1;}parsed[index]+=identifierWithPointTracking(position-1,points,index);break;case 2:parsed[index]+=delimit(character);break;case 4:// comma
if(character===44){// colon
parsed[++index]=peek()===58?'&\f':'';points[index]=parsed[index].length;break;}// fallthrough
default:parsed[index]+=from(character);}}while(character=next());return parsed;};var getRules=function getRules(value,points){return dealloc(toRules(alloc(value),points));};// WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements=/* #__PURE__ */new WeakMap();var compat=function compat(element){if(element.type!=='rule'||!element.parent||// positive .length indicates that this rule contains pseudo
// negative .length indicates that this rule has been already prefixed
element.length<1){return;}var value=element.value;var parent=element.parent;var isImplicitRule=element.column===parent.column&&element.line===parent.line;while(parent.type!=='rule'){parent=parent.parent;if(!parent)return;}// short-circuit for the simplest case
if(element.props.length===1&&value.charCodeAt(0)!==58/* colon */&&!fixedElements.get(parent)){return;}// if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
// then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
if(isImplicitRule){return;}fixedElements.set(element,true);var points=[];var rules=getRules(value,points);var parentRules=parent.props;for(var i=0,k=0;i<rules.length;i++){for(var j=0;j<parentRules.length;j++,k++){element.props[k]=points[i]?rules[i].replace(/&\f/g,parentRules[j]):parentRules[j]+" "+rules[i];}}};var removeLabel=function removeLabel(element){if(element.type==='decl'){var value=element.value;if(// charcode for l
value.charCodeAt(0)===108&&// charcode for b
value.charCodeAt(2)===98){// this ignores label
element["return"]='';element.value='';}}};/* eslint-disable no-fallthrough */function emotion_cache_browser_esm_prefix(value,length){switch(hash(value,length)){// color-adjust
case 5103:return WEBKIT+'print-'+value+value;// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return WEBKIT+value+value;// appearance, user-select, transform, hyphens, text-size-adjust
case 5349:case 4246:case 4810:case 6968:case 2756:return WEBKIT+value+MOZ+value+MS+value+value;// flex, flex-direction
case 6828:case 4268:return WEBKIT+value+MS+value+value;// order
case 6165:return WEBKIT+value+MS+'flex-'+value+value;// align-items
case 5187:return WEBKIT+value+replace(value,/(\w+).+(:[^]+)/,WEBKIT+'box-$1$2'+MS+'flex-$1$2')+value;// align-self
case 5443:return WEBKIT+value+MS+'flex-item-'+replace(value,/flex-|-self/,'')+value;// align-content
case 4675:return WEBKIT+value+MS+'flex-line-pack'+replace(value,/align-content|flex-|-self/,'')+value;// flex-shrink
case 5548:return WEBKIT+value+MS+replace(value,'shrink','negative')+value;// flex-basis
case 5292:return WEBKIT+value+MS+replace(value,'basis','preferred-size')+value;// flex-grow
case 6060:return WEBKIT+'box-'+replace(value,'-grow','')+WEBKIT+value+MS+replace(value,'grow','positive')+value;// transition
case 4554:return WEBKIT+replace(value,/([^-])(transform)/g,'$1'+WEBKIT+'$2')+value;// cursor
case 6187:return replace(replace(replace(value,/(zoom-|grab)/,WEBKIT+'$1'),/(image-set)/,WEBKIT+'$1'),value,'')+value;// background, background-image
case 5495:case 3959:return replace(value,/(image-set\([^]*)/,WEBKIT+'$1'+'$`$1');// justify-content
case 4968:return replace(replace(value,/(.+:)(flex-)?(.*)/,WEBKIT+'box-pack:$3'+MS+'flex-pack:$3'),/s.+-b[^;]+/,'justify')+WEBKIT+value+value;// (margin|padding)-inline-(start|end)
case 4095:case 3583:case 4068:case 2532:return replace(value,/(.+)-inline(.+)/,WEBKIT+'$1$2')+value;// (min|max)?(width|height|inline-size|block-size)
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:// stretch, max-content, min-content, fill-available
if(strlen(value)-1-length>6)switch(charat(value,length+1)){// (m)ax-content, (m)in-content
case 109:// -
if(charat(value,length+4)!==45)break;// (f)ill-available, (f)it-content
case 102:return replace(value,/(.+:)(.+)-([^]+)/,'$1'+WEBKIT+'$2-$3'+'$1'+MOZ+(charat(value,length+3)==108?'$3':'$2-$3'))+value;// (s)tretch
case 115:return~indexof(value,'stretch')?emotion_cache_browser_esm_prefix(replace(value,'stretch','fill-available'),length)+value:value;}break;// position: sticky
case 4949:// (s)ticky?
if(charat(value,length+1)!==115)break;// display: (flex|inline-flex)
case 6444:switch(charat(value,strlen(value)-3-(~indexof(value,'!important')&&10))){// stic(k)y
case 107:return replace(value,':',':'+WEBKIT)+value;// (inline-)?fl(e)x
case 101:return replace(value,/(.+:)([^;!]+)(;|!.+)?/,'$1'+WEBKIT+(charat(value,14)===45?'inline-':'')+'box$3'+'$1'+WEBKIT+'$2$3'+'$1'+MS+'$2box$3')+value;}break;// writing-mode
case 5936:switch(charat(value,length+11)){// vertical-l(r)
case 114:return WEBKIT+value+MS+replace(value,/[svh]\w+-[tblr]{2}/,'tb')+value;// vertical-r(l)
case 108:return WEBKIT+value+MS+replace(value,/[svh]\w+-[tblr]{2}/,'tb-rl')+value;// horizontal(-)tb
case 45:return WEBKIT+value+MS+replace(value,/[svh]\w+-[tblr]{2}/,'lr')+value;}return WEBKIT+value+MS+value+value;}return value;}var emotion_cache_browser_esm_prefixer=function prefixer(element,index,children,callback){if(element.length>-1)if(!element["return"])switch(element.type){case DECLARATION:element["return"]=emotion_cache_browser_esm_prefix(element.value,element.length);break;case KEYFRAMES:return serialize([copy(element,{value:replace(element.value,'@','@'+WEBKIT)})],callback);case RULESET:if(element.length)return combine(element.props,function(value){switch(match(value,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case':read-only':case':read-write':return serialize([copy(element,{props:[replace(value,/:(read-\w+)/,':'+MOZ+'$1')]})],callback);// :placeholder
case'::placeholder':return serialize([copy(element,{props:[replace(value,/:(plac\w+)/,':'+WEBKIT+'input-$1')]}),copy(element,{props:[replace(value,/:(plac\w+)/,':'+MOZ+'$1')]}),copy(element,{props:[replace(value,/:(plac\w+)/,MS+'input-$1')]})],callback);}return'';});}};var defaultStylisPlugins=[emotion_cache_browser_esm_prefixer];var createCache=function createCache(options){var key=options.key;if(key==='css'){var ssrStyles=document.querySelectorAll("style[data-emotion]:not([data-s])");// get SSRed styles out of the way of React's hydration
// document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
// note this very very intentionally targets all style elements regardless of the key to ensure
// that creating a cache works inside of render of a React component
Array.prototype.forEach.call(ssrStyles,function(node){// we want to only move elements which have a space in the data-emotion attribute value
// because that indicates that it is an Emotion 11 server-side rendered style elements
// while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
// Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
// so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
// will not result in the Emotion 10 styles being destroyed
var dataEmotionAttribute=node.getAttribute('data-emotion');if(dataEmotionAttribute.indexOf(' ')===-1){return;}document.head.appendChild(node);node.setAttribute('data-s','');});}var stylisPlugins=options.stylisPlugins||defaultStylisPlugins;var inserted={};var container;var nodesToHydrate=[];{container=options.container||document.head;Array.prototype.forEach.call(// this means we will ignore elements which don't have a space in them which
// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
document.querySelectorAll("style[data-emotion^=\""+key+" \"]"),function(node){var attrib=node.getAttribute("data-emotion").split(' ');for(var i=1;i<attrib.length;i++){inserted[attrib[i]]=true;}nodesToHydrate.push(node);});}var _insert;var omnipresentPlugins=[compat,removeLabel];{var currentSheet;var finalizingPlugins=[stringify,rulesheet(function(rule){currentSheet.insert(rule);})];var serializer=middleware(omnipresentPlugins.concat(stylisPlugins,finalizingPlugins));var stylis=function stylis(styles){return serialize(compile(styles),serializer);};_insert=function insert(selector,serialized,sheet,shouldCache){currentSheet=sheet;stylis(selector?selector+"{"+serialized.styles+"}":serialized.styles);if(shouldCache){cache.inserted[serialized.name]=true;}};}var cache={key:key,sheet:new StyleSheet({key:key,container:container,nonce:options.nonce,speedy:options.speedy,prepend:options.prepend,insertionPoint:options.insertionPoint}),nonce:options.nonce,inserted:inserted,registered:{},insert:_insert};cache.sheet.hydrate(nodesToHydrate);return cache;};
;// ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str){// 'm' and 'r' are mixing constants generated offline.
// They're not really 'magic', they just happen to work well.
// const m = 0x5bd1e995;
// const r = 24;
// Initialize the hash
var h=0;// Mix 4 bytes at a time into the hash
var k,i=0,len=str.length;for(;len>=4;++i,len-=4){k=str.charCodeAt(i)&0xff|(str.charCodeAt(++i)&0xff)<<8|(str.charCodeAt(++i)&0xff)<<16|(str.charCodeAt(++i)&0xff)<<24;k=/* Math.imul(k, m): */(k&0xffff)*0x5bd1e995+((k>>>16)*0xe995<<16);k^=/* k >>> r: */k>>>24;h=/* Math.imul(k, m): */(k&0xffff)*0x5bd1e995+((k>>>16)*0xe995<<16)^/* Math.imul(h, m): */(h&0xffff)*0x5bd1e995+((h>>>16)*0xe995<<16);}// Handle the last few bytes of the input array
switch(len){case 3:h^=(str.charCodeAt(i+2)&0xff)<<16;case 2:h^=(str.charCodeAt(i+1)&0xff)<<8;case 1:h^=str.charCodeAt(i)&0xff;h=/* Math.imul(h, m): */(h&0xffff)*0x5bd1e995+((h>>>16)*0xe995<<16);}// Do a few final mixes of the hash to ensure the last few
// bytes are well-incorporated.
h^=h>>>13;h=/* Math.imul(h, m): */(h&0xffff)*0x5bd1e995+((h>>>16)*0xe995<<16);return((h^h>>>15)>>>0).toString(36);}
;// ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};
;// ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn){var cache=Object.create(null);return function(arg){if(cache[arg]===undefined)cache[arg]=fn(arg);return cache[arg];};}
;// ../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var emotion_serialize_esm_isDevelopment=false;var hyphenateRegex=/[A-Z]|^ms/g;var animationRegex=/_EMO_([^_]+?)_([^]*?)_EMO_/g;var isCustomProperty=function isCustomProperty(property){return property.charCodeAt(1)===45;};var isProcessableValue=function isProcessableValue(value){return value!=null&&typeof value!=='boolean';};var processStyleName=/* #__PURE__ */memoize(function(styleName){return isCustomProperty(styleName)?styleName:styleName.replace(hyphenateRegex,'-$&').toLowerCase();});var processStyleValue=function processStyleValue(key,value){switch(key){case'animation':case'animationName':{if(typeof value==='string'){return value.replace(animationRegex,function(match,p1,p2){cursor={name:p1,styles:p2,next:cursor};return p1;});}}}if(unitlessKeys[key]!==1&&!isCustomProperty(key)&&typeof value==='number'&&value!==0){return value+'px';}return value;};var noComponentSelectorMessage='Component selectors can only be used in conjunction with '+'@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware '+'compiler transform.';function handleInterpolation(mergedProps,registered,interpolation){if(interpolation==null){return'';}var componentSelector=interpolation;if(componentSelector.__emotion_styles!==undefined){return componentSelector;}switch(typeof interpolation){case'boolean':{return'';}case'object':{var keyframes=interpolation;if(keyframes.anim===1){cursor={name:keyframes.name,styles:keyframes.styles,next:cursor};return keyframes.name;}var serializedStyles=interpolation;if(serializedStyles.styles!==undefined){var next=serializedStyles.next;if(next!==undefined){// not the most efficient thing ever but this is a pretty rare case
// and there will be very few iterations of this generally
while(next!==undefined){cursor={name:next.name,styles:next.styles,next:cursor};next=next.next;}}var styles=serializedStyles.styles+";";return styles;}return createStringFromObject(mergedProps,registered,interpolation);}case'function':{if(mergedProps!==undefined){var previousCursor=cursor;var result=interpolation(mergedProps);cursor=previousCursor;return handleInterpolation(mergedProps,registered,result);}break;}}// finalize string values (regular strings and functions interpolated into css calls)
var asString=interpolation;if(registered==null){return asString;}var cached=registered[asString];return cached!==undefined?cached:asString;}function createStringFromObject(mergedProps,registered,obj){var string='';if(Array.isArray(obj)){for(var i=0;i<obj.length;i++){string+=handleInterpolation(mergedProps,registered,obj[i])+";";}}else{for(var key in obj){var value=obj[key];if(typeof value!=='object'){var asString=value;if(registered!=null&&registered[asString]!==undefined){string+=key+"{"+registered[asString]+"}";}else if(isProcessableValue(asString)){string+=processStyleName(key)+":"+processStyleValue(key,asString)+";";}}else{if(key==='NO_COMPONENT_SELECTOR'&&emotion_serialize_esm_isDevelopment){throw new Error(noComponentSelectorMessage);}if(Array.isArray(value)&&typeof value[0]==='string'&&(registered==null||registered[value[0]]===undefined)){for(var _i=0;_i<value.length;_i++){if(isProcessableValue(value[_i])){string+=processStyleName(key)+":"+processStyleValue(key,value[_i])+";";}}}else{var interpolated=handleInterpolation(mergedProps,registered,value);switch(key){case'animation':case'animationName':{string+=processStyleName(key)+":"+interpolated+";";break;}default:{string+=key+"{"+interpolated+"}";}}}}}}return string;}var labelPattern=/label:\s*([^\s;{]+)\s*(;|$)/g;// this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;function serializeStyles(args,registered,mergedProps){if(args.length===1&&typeof args[0]==='object'&&args[0]!==null&&args[0].styles!==undefined){return args[0];}var stringMode=true;var styles='';cursor=undefined;var strings=args[0];if(strings==null||strings.raw===undefined){stringMode=false;styles+=handleInterpolation(mergedProps,registered,strings);}else{var asTemplateStringsArr=strings;styles+=asTemplateStringsArr[0];}// we start at 1 since we've already handled the first arg
for(var i=1;i<args.length;i++){styles+=handleInterpolation(mergedProps,registered,args[i]);if(stringMode){var templateStringsArr=strings;styles+=templateStringsArr[i];}}// using a global regex with .exec is stateful so lastIndex has to be reset each time
labelPattern.lastIndex=0;var identifierName='';var match;// https://esbench.com/bench/5b809c2cf2949800a0f61fb5
while((match=labelPattern.exec(styles))!==null){identifierName+='-'+match[1];}var name=murmur2(styles)+identifierName;return{name:name,styles:styles,next:cursor};}
;// ../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser=true;function getRegisteredStyles(registered,registeredStyles,classNames){var rawClassName='';classNames.split(' ').forEach(function(className){if(registered[className]!==undefined){registeredStyles.push(registered[className]+";");}else if(className){rawClassName+=className+" ";}});return rawClassName;}var registerStyles=function registerStyles(cache,serialized,isStringTag){var className=cache.key+"-"+serialized.name;if(// we only need to add the styles to the registered cache if the
// class name could be used further down
// the tree but if it's a string tag, we know it won't
// so we don't have to add it to registered cache.
// this improves memory usage since we can avoid storing the whole style string
(isStringTag===false||// we need to always store it if we're in compat mode and
// in node since emotion-server relies on whether a style is in
// the registered cache to know whether a style is global or not
// also, note that this check will be dead code eliminated in the browser
isBrowser===false)&&cache.registered[className]===undefined){cache.registered[className]=serialized.styles;}};var insertStyles=function insertStyles(cache,serialized,isStringTag){registerStyles(cache,serialized,isStringTag);var className=cache.key+"-"+serialized.name;if(cache.inserted[serialized.name]===undefined){var current=serialized;do{cache.insert(serialized===current?"."+className:'',current,cache.sheet,true);current=current.next;}while(current!==undefined);}};
;// ../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function insertWithoutScoping(cache,serialized){if(cache.inserted[serialized.name]===undefined){return cache.insert('',serialized,cache.sheet,true);}}function merge(registered,css,className){var registeredStyles=[];var rawClassName=getRegisteredStyles(registered,registeredStyles,className);if(registeredStyles.length<2){return className;}return rawClassName+css(registeredStyles);}var createEmotion=function createEmotion(options){var cache=createCache(options);cache.sheet.speedy=function(value){this.isSpeedy=value;};cache.compat=true;var css=function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var serialized=serializeStyles(args,cache.registered,undefined);insertStyles(cache,serialized,false);return cache.key+"-"+serialized.name;};var keyframes=function keyframes(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}var serialized=serializeStyles(args,cache.registered);var animation="animation-"+serialized.name;insertWithoutScoping(cache,{name:serialized.name,styles:"@keyframes "+animation+"{"+serialized.styles+"}"});return animation;};var injectGlobal=function injectGlobal(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}var serialized=serializeStyles(args,cache.registered);insertWithoutScoping(cache,serialized);};var cx=function cx(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return merge(cache.registered,css,classnames(args));};return{css:css,cx:cx,injectGlobal:injectGlobal,keyframes:keyframes,hydrate:function hydrate(ids){ids.forEach(function(key){cache.inserted[key]=true;});},flush:function flush(){cache.registered={};cache.inserted={};cache.sheet.flush();},sheet:cache.sheet,cache:cache,getRegisteredStyles:getRegisteredStyles.bind(null,cache.registered),merge:merge.bind(null,cache.registered,css)};};var classnames=function classnames(args){var cls='';for(var i=0;i<args.length;i++){var arg=args[i];if(arg==null)continue;var toAdd=void 0;switch(typeof arg){case'boolean':break;case'object':{if(Array.isArray(arg)){toAdd=classnames(arg);}else{toAdd='';for(var k in arg){if(arg[k]&&k){toAdd&&(toAdd+=' ');toAdd+=k;}}}break;}default:{toAdd=arg;}}if(toAdd){cls&&(cls+=' ');cls+=toAdd;}}return cls;};
;// ../../node_modules/@emotion/css/dist/emotion-css.esm.js
var _createEmotion=createEmotion({key:'css'}),flush=_createEmotion.flush,hydrate=_createEmotion.hydrate,cx=_createEmotion.cx,emotion_css_esm_merge=_createEmotion.merge,emotion_css_esm_getRegisteredStyles=_createEmotion.getRegisteredStyles,injectGlobal=_createEmotion.injectGlobal,keyframes=_createEmotion.keyframes,css=_createEmotion.css,sheet=_createEmotion.sheet,cache=_createEmotion.cache;
;// ./src/autofill/content/components/constants/styles.ts
const lightTheme = {
    transparent: {
        hover: `rgb(0 0 0 / 0.02)`,
    },
    shadow: `rgba(168 179 200)`,
    primary: {
        100: `rgba(219, 229, 246)`,
        300: `rgba(121, 161, 233)`,
        600: `rgba(23, 93, 220)`,
        700: `rgba(26, 65, 172)`,
    },
    secondary: {
        100: `rgba(230, 233, 239)`,
        300: `rgba(168, 179, 200)`,
        500: `rgba(90, 109, 145)`,
        600: `rgba(83, 99, 131)`,
        700: `rgba(63, 75, 99)`,
    },
    success: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    danger: {
        100: `rgba(255, 236, 239)`,
        600: `rgba(203, 38, 58)`,
        700: `rgba(149, 27, 42)`,
    },
    warning: {
        100: `rgba(255, 248, 228)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(172, 88, 0)`,
    },
    info: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    art: {
        primary: `rgba(2, 15, 102)`,
        accent: `rgba(44, 221, 223)`,
    },
    text: {
        main: `rgba(27, 32, 41)`,
        muted: `rgba(90, 109, 145)`,
        contrast: `rgba(255, 255, 255)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(192, 17, 118)`,
    },
    background: {
        DEFAULT: `rgba(255, 255, 255)`,
        alt: `rgba(243, 246, 249)`,
        alt2: `rgba(23, 92, 219)`,
        alt3: `rgba(26, 65, 172)`,
        alt4: `rgba(2, 15, 102)`,
    },
    brandLogo: `rgba(23, 93, 220)`,
    passwordSpecial: `rgba(184, 0, 23)`,
    passwordNumber: `rgba(20, 82, 193)`,
};
const darkTheme = {
    transparent: {
        hover: `rgb(255 255 255 / 0.02)`,
    },
    shadow: `rgba(0, 0, 0)`,
    primary: {
        100: `rgba(26, 39, 78)`,
        300: `rgba(26, 65, 172)`,
        600: `rgba(101, 171, 255)`,
        700: `rgba(170, 195, 239)`,
    },
    secondary: {
        100: `rgba(48, 57, 70)`,
        300: `rgba(82, 91, 106)`,
        500: `rgba(121, 128, 142)`,
        600: `rgba(143, 152, 166)`,
        700: `rgba(158, 167, 181)`,
    },
    success: {
        100: `rgba(11, 111, 21)`,
        600: `rgba(107, 241, 120)`,
        700: `rgba(191, 236, 195)`,
    },
    danger: {
        100: `rgba(149, 27, 42)`,
        600: `rgba(255, 78, 99)`,
        700: `rgba(255, 236, 239)`,
    },
    warning: {
        100: `rgba(172, 88, 0)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(255, 248, 228)`,
    },
    info: {
        100: `rgba(26, 65, 172)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(219, 229, 246)`,
    },
    art: {
        primary: `rgba(243, 246, 249)`,
        accent: `rgba(44, 221, 233)`,
    },
    text: {
        main: `rgba(243, 246, 249)`,
        muted: `rgba(136, 152, 181)`,
        contrast: `rgba(18 26 39)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(255, 143, 208)`,
    },
    background: {
        DEFAULT: `rgba(32, 39, 51)`,
        alt: `rgba(18, 26, 39)`,
        alt2: `rgba(47, 52, 61)`,
        alt3: `rgba(48, 57, 70)`,
        alt4: `rgba(18, 26, 39)`,
    },
    brandLogo: `rgba(255, 255, 255)`,
    passwordSpecial: `rgba(255, 141, 133)`,
    passwordNumber: `rgba(111, 157, 241)`,
};
const themes = {
    light: lightTheme,
    dark: darkTheme,
    // For compatibility
    system: lightTheme,
};
const spacing = {
    4: `16px`,
    3: `12px`,
    2: `8px`,
    "1.5": `6px`,
    1: `4px`,
};
const border = {
    radius: {
        large: `8px`,
        full: `9999px`,
    },
};
const typography = {
    body1: `
    line-height: 24px;
    font-family: Inter, sans-serif;
    font-size: 16px;
  `,
    body2: `
    line-height: 20px;
    font-family: Inter, sans-serif;
    font-size: 14px;
  `,
    helperMedium: `
    line-height: 16px;
    font-family: Inter, sans-serif;
    font-size: 12px;
  `,
};
const ruleNames = {
    fill: "fill",
    stroke: "stroke",
};
/*
 * `color` is an intentionally generic name here, since either fill or stroke may apply, due to
 * inconsistent SVG construction. This consequently precludes dynamic multi-colored icons here.
 */
const buildIconColorRule = (color, rule = ruleNames.fill) => `
  ${rule}: ${color};
`;
const resolveIconColor = ({ color, disabled, theme }) => disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
const animations = {
    spin: `
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  `,
};
function scrollbarStyles(theme, color) {
    const thumbColor = (color === null || color === void 0 ? void 0 : color.thumb) || themes[theme].secondary["500"];
    const trackColor = (color === null || color === void 0 ? void 0 : color.track) || themes[theme].background.alt;
    return {
        /* FireFox & Chrome support */
        default: `
      scrollbar-color: ${thumbColor} ${trackColor};
    `,
        /* Safari Support */
        safari: `
      ::-webkit-scrollbar {
        overflow: auto;
      }
      ::-webkit-scrollbar-thumb {
        border-width: 4px;
        border-style: solid;
        border-radius: 0.5rem;
        border-color: transparent;
        background-clip: content-box;
        background-color: ${thumbColor};
      }
      ::-webkit-scrollbar-track {
        ${trackColor};
      }
      ::-webkit-scrollbar-thumb:hover {
        ${themes[theme].secondary["600"]};
      }
    `,
    };
}

;// ./src/autofill/content/components/icons/angle-down.ts



function AngleDown({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M13.53.47a.75.75 0 0 0-1.06 0L7 5.94 1.53.47A.75.75 0 1 0 .47 1.53l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/angle-up.ts



function AngleUp({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M.47 7.53a.75.75 0 0 0 1.06 0L7 2.06l5.47 5.47a.75.75 0 1 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/shield.ts



function Shield({ ariaHidden = true, color, theme }) {
    const shapeColor = color || themes[theme].brandLogo;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M13.469.2A.647.647 0 0 0 13 0H1a.639.639 0 0 0-.468.2.641.641 0 0 0-.2.468v8a4.81 4.81 0 0 0 .348 1.777c.216.557.507 1.083.865 1.563.367.48.779.925 1.229 1.329.417.383.857.741 1.317 1.073.4.284.82.553 1.26.807.44.254.75.425.932.515.183.09.33.16.44.208.087.041.181.062.277.06a.58.58 0 0 0 .27-.063c.113-.05.259-.118.444-.208s.5-.262.932-.515c.432-.253.857-.523 1.26-.807.46-.332.9-.69 1.319-1.073.45-.404.861-.849 1.228-1.33.357-.48.648-1.005.865-1.562a4.79 4.79 0 0 0 .348-1.777v-8A.63.63 0 0 0 13.47.2Zm-1.547 8.54c0 2.9-4.921 5.392-4.921 5.392V1.714h4.92v7.027Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/brand-icon-container.ts



function BrandIconContainer({ iconLink, theme }) {
    const Icon = lit_html_b `<div class=${brandIconContainerStyles}>${Shield({ theme })}</div>`;
    return iconLink ? lit_html_b `<a href="${iconLink}" target="_blank" rel="noreferrer">${Icon}</a>` : Icon;
}
const brandIconContainerStyles = css `
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;

  > svg {
    width: auto;
    height: 100%;
  }
`;

;// ./src/autofill/content/components/icons/business.ts



function Business({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M3.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM7.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM7.25 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM6.5 9.75A.75.75 0 0 1 7.25 9h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM2.5 6.75A.75.75 0 0 1 3.25 6h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM3.25 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
      />
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        fill-rule="evenodd"
        d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm.5 1.5v13H4V13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5h2.5v-13h-9Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/close.ts



function Close({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M.22.22a.75.75 0 0 1 1.06 0L7 5.94 12.72.22a.75.75 0 1 1 1.06 1.06L8.06 7l5.72 5.72a.75.75 0 1 1-1.06 1.06L7 8.06l-5.72 5.72a.75.75 0 0 1-1.06-1.06L5.94 7 .22 1.28a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/collection-shared.ts



function CollectionShared({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M3.5.75A.75.75 0 0 1 4.25 0h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 3.5.75ZM2.25 2a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 11.46a1.928 1.928 0 0 0-.586-1.386 2.035 2.035 0 0 0-2.828 0A1.928 1.928 0 0 0 3 11.461c0 .298.241.539.54.539h2.92a.54.54 0 0 0 .54-.54ZM8 11.46a2.928 2.928 0 0 0-.371-1.426A2.005 2.005 0 0 1 9 9.5a2.035 2.035 0 0 1 1.414.574A1.928 1.928 0 0 1 11 11.461a.54.54 0 0 1-.54.539H7.904c.063-.168.097-.35.097-.54Z"
      />
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        fill-rule="evenodd"
        d="M12 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10Zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h10Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/exclamation-triangle.ts
/* unused harmony import specifier */ var exclamation_triangle_css;
/* unused harmony import specifier */ var html;
/* unused harmony import specifier */ var exclamation_triangle_themes;
/* unused harmony import specifier */ var exclamation_triangle_buildIconColorRule;
/* unused harmony import specifier */ var exclamation_triangle_ruleNames;



function ExclamationTriangle({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? exclamation_triangle_themes[theme].secondary["300"] : color || exclamation_triangle_themes[theme].text.main;
    return html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${exclamation_triangle_css(exclamation_triangle_buildIconColorRule(shapeColor, exclamation_triangle_ruleNames.fill))}
        d="M9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11Z"
      />
      <path
        class=${exclamation_triangle_css(exclamation_triangle_buildIconColorRule(shapeColor, exclamation_triangle_ruleNames.fill))}
        d="M7.31639 5C7.01564 5 6.78295 5.26359 6.82025 5.56202L7.19525 8.56202C7.22653 8.81223 7.43923 9 7.69139 9H8.30861C8.56077 9 8.77347 8.81223 8.80475 8.56202L9.17975 5.56202C9.21705 5.26359 8.98436 5 8.68361 5H7.31639Z"
      />
      <path
        class=${exclamation_triangle_css(exclamation_triangle_buildIconColorRule(shapeColor, exclamation_triangle_ruleNames.fill))}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.37384 1.01584C8.76324 -0.04174 7.23675 -0.041739 6.62616 1.01584L0.2149 12.1205C-0.395695 13.1781 0.36755 14.5 1.58874 14.5H14.4113C15.6325 14.5 16.3957 13.1781 15.7851 12.1205L9.37384 1.01584ZM14.4861 12.8705L8.0748 1.76584C8.06066 1.74135 8.05029 1.7355 8.04562 1.73291C8.03694 1.7281 8.02122 1.72266 8 1.72266C7.97878 1.72266 7.96305 1.7281 7.95438 1.73291C7.94971 1.7355 7.93934 1.74135 7.9252 1.76584L1.51394 12.8705C1.4998 12.895 1.49992 12.9069 1.50001 12.9122C1.50018 12.9221 1.50333 12.9385 1.51394 12.9568C1.52455 12.9752 1.53713 12.9861 1.54563 12.9912C1.55021 12.994 1.56046 13 1.58874 13H14.4113C14.4395 13 14.4498 12.994 14.4544 12.9912C14.4629 12.9861 14.4754 12.9752 14.4861 12.9568C14.4967 12.9385 14.4998 12.9221 14.5 12.9122C14.5001 12.9069 14.5002 12.895 14.4861 12.8705Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/external-link.ts



function ExternalLink({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M1.5 2.75c0-.69.56-1.25 1.25-1.25h3.5a.75.75 0 0 0 0-1.5h-3.5A2.75 2.75 0 0 0 0 2.75v8.5A2.75 2.75 0 0 0 2.75 14h8.5A2.75 2.75 0 0 0 14 11.25v-3.5a.75.75 0 0 0-1.5 0v3.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
      />
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M9.75 0a.75.75 0 0 0 0 1.5h1.69L7.22 5.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.69a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75h-3.5Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/family.ts



function Family({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        fill-rule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.47 6.47 0 0 1-.932 3.356 3.732 3.732 0 0 0-1.106-.784 3.547 3.547 0 0 0-.516-.19 2 2 0 1 0-3.444-1.297c-.323-.216-.681-.4-1.069-.536a2.5 2.5 0 1 0-3.065-.155 5.405 5.405 0 0 0-1.59.674 3.912 3.912 0 0 0-.977.893A6.5 6.5 0 1 1 14.5 8ZM2.531 11.514a.75.75 0 0 0 .103-.13c.276-.436.552-.801.942-1.047a3.837 3.837 0 0 1 1.177-.492 5.243 5.243 0 0 1 .845-.095h.007l.022.001h.023c.436 0 .865.07 1.262.205.381.13.733.335 1.037.584.175.143.324.3.448.465l.164.226a4.13 4.13 0 0 0-1.035 1.565 4.407 4.407 0 0 0-.276 1.537c0 .043.004.085.01.125a6.5 6.5 0 0 1-4.729-2.944Zm10.033.964.07.08a6.481 6.481 0 0 1-3.894 1.9.757.757 0 0 0 .01-.125c0-.35.062-.694.181-1.013a2.63 2.63 0 0 1 .505-.842c.213-.237.462-.42.73-.543.267-.123.55-.185.834-.185.284 0 .567.062.835.185.267.123.516.306.729.543ZM7 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/folder.ts



function Folder({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M2 0a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8L6.586.586A2 2 0 0 0 5.172 0H2Zm5.379 3.5L5.525 1.646a.5.5 0 0 0-.353-.146H2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7.379Z"
        fill-rule="evenodd"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/globe.ts



function Globe({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 14.5c.23 0 .843-.226 1.487-1.514.524-1.048.906-2.526.994-4.236H5.519c.088 1.71.47 3.188.994 4.236C7.157 14.274 7.77 14.5 8 14.5ZM5.52 7.25h4.96c-.087-1.71-.47-3.188-.993-4.236C8.843 1.726 8.23 1.5 8 1.5c-.23 0-.843.226-1.487 1.514C5.99 4.062 5.607 5.54 5.52 7.25Zm6.463 0h2.474a6.506 6.506 0 0 0-3.766-5.168c.718 1.305 1.197 3.125 1.292 5.168Zm-7.966 0c.095-2.043.574-3.863 1.292-5.168A6.506 6.506 0 0 0 1.543 7.25h2.474Zm7.966 1.5c-.095 2.043-.574 3.863-1.292 5.168a6.506 6.506 0 0 0 3.766-5.168h-2.474Zm-6.677 5.185c-.718-1.305-1.197-3.125-1.292-5.168H1.54a6.506 6.506 0 0 0 3.766 5.168Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/lock.ts
/* unused harmony import specifier */ var lock_css;
/* unused harmony import specifier */ var lock_html;
/* unused harmony import specifier */ var lock_resolveIconColor;
/* unused harmony import specifier */ var lock_buildIconColorRule;
/* unused harmony import specifier */ var lock_ruleNames;



function Lock(props) {
    const { ariaHidden = true } = props;
    const shapeColor = lock_resolveIconColor(props);
    return lock_html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${lock_css(lock_buildIconColorRule(shapeColor, lock_ruleNames.fill))}
        d="M10 10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5A.75.75 0 0 0 10 10"
      />
      <path
        class=${lock_css(lock_buildIconColorRule(shapeColor, lock_ruleNames.fill))}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 4a4 4 0 0 1 7.153-2.462.75.75 0 1 1-1.182.924A2.5 2.5 0 0 0 5.5 4v1H13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1zM3 6.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/passkey.ts
/* unused harmony import specifier */ var passkey_css;
/* unused harmony import specifier */ var passkey_html;
/* unused harmony import specifier */ var passkey_resolveIconColor;
/* unused harmony import specifier */ var passkey_buildIconColorRule;
/* unused harmony import specifier */ var passkey_ruleNames;



function Passkey(props) {
    const { ariaHidden = true } = props;
    const shapeColor = passkey_resolveIconColor(props);
    return passkey_html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${passkey_css(passkey_buildIconColorRule(shapeColor, passkey_ruleNames.fill))}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 3c0 1.026-.514 1.93-1.3 2.472a6 6 0 0 1 .465.143 5.9 5.9 0 0 1 1.86 1.054c.455.385.836.836 1.125 1.335a.75.75 0 1 1-1.3.75 3.6 3.6 0 0 0-.793-.94 4.4 4.4 0 0 0-1.66-.87 5.1 5.1 0 0 0-3.065.086 4.4 4.4 0 0 0-1.389.784c-.33.28-.596.598-.793.94a.75.75 0 0 1-1.3-.75c.289-.5.67-.95 1.124-1.335a5.9 5.9 0 0 1 1.861-1.054 6 6 0 0 1 .465-.143A3 3 0 1 1 11 3M8 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M7.83 14a3.001 3.001 0 1 1 0-2h4.582a.25.25 0 0 1 .156.055l.972.777a.56.56 0 0 1 .046.832L12.41 14.84a.547.547 0 0 1-.824-.059L11 14h-.25l-.6.8a.5.5 0 0 1-.8 0l-.6-.8zM4.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/pencil-square.ts



function PencilSquare({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M11.013.677a1.75 1.75 0 0 1 2.474 0l.836.836a1.75 1.75 0 0 1 0 2.475L9.03 9.28a.75.75 0 0 1-.348.197l-3 .75a.75.75 0 0 1-.91-.91l.75-3a.75.75 0 0 1 .198-.348L11.013.677Zm1.414 1.06a.25.25 0 0 0-.354 0l-.646.647a.75.75 0 0 1 .103.086l1 1a.751.751 0 0 1 .087.103l.646-.646a.25.25 0 0 0 0-.353l-.836-.836Zm-.854 2.88a.752.752 0 0 1-.103-.087l-1-1a.756.756 0 0 1-.087-.103L6.928 6.884 6.531 8.47l1.586-.397 3.456-3.456Z"
      />
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M2.75 2.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-3.5a.75.75 0 0 1 1.5 0v3.5A2.75 2.75 0 0 1 11.25 15h-8.5A2.75 2.75 0 0 1 0 12.25v-8.5A2.75 2.75 0 0 1 2.75 1h3.5a.75.75 0 0 1 0 1.5h-3.5Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/plus.ts
/* unused harmony import specifier */ var plus_css;
/* unused harmony import specifier */ var plus_html;
/* unused harmony import specifier */ var plus_resolveIconColor;
/* unused harmony import specifier */ var plus_buildIconColorRule;
/* unused harmony import specifier */ var plus_ruleNames;



function Plus(props) {
    const { ariaHidden = true } = props;
    const shapeColor = plus_resolveIconColor(props);
    return plus_html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${plus_css(plus_buildIconColorRule(shapeColor, plus_ruleNames.fill))}
        d="M8 1.006a.75.75 0 0 1 .75.75V7.25h5.517a.75.75 0 0 1 0 1.5H8.75v5.537a.75.75 0 0 1-1.5 0V8.75H1.746a.75.75 0 1 1 0-1.5H7.25V1.756a.75.75 0 0 1 .75-.75"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/key.ts
/* unused harmony import specifier */ var key_css;
/* unused harmony import specifier */ var key_html;
/* unused harmony import specifier */ var key_resolveIconColor;
/* unused harmony import specifier */ var key_buildIconColorRule;
/* unused harmony import specifier */ var key_ruleNames;



function Key(props) {
    const { ariaHidden = true } = props;
    const shapeColor = key_resolveIconColor(props);
    const fillClass = key_css(key_buildIconColorRule(shapeColor, key_ruleNames.fill));
    return key_html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path class=${fillClass} d="M15.75 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
      <path
        class=${fillClass}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5 17a7.473 7.473 0 0 1-3.055-.648L10.75 17v1.5a1 1 0 0 1-1 1h-1.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707L7.32 11.68A7.5 7.5 0 1 1 14.5 17Zm-5.482-4.896-.261-.86a6 6 0 1 1 3.3 3.738l-.909-.406-1.898 1.772V18h-2.5v2.5H3.5v-2.879l5.518-5.517Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/refresh.ts
/* unused harmony import specifier */ var refresh_css;
/* unused harmony import specifier */ var refresh_html;
/* unused harmony import specifier */ var refresh_resolveIconColor;
/* unused harmony import specifier */ var refresh_buildIconColorRule;
/* unused harmony import specifier */ var refresh_ruleNames;



function Refresh(props) {
    const { ariaHidden = true } = props;
    const shapeColor = refresh_resolveIconColor(props);
    return refresh_html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${refresh_css(refresh_buildIconColorRule(shapeColor, refresh_ruleNames.fill))}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.052 10.777a.75.75 0 0 0 1.49.162c.393-3.61 3.514-6.443 7.329-6.443 2.737 0 5.12 1.46 6.39 3.62h-1.993a.75.75 0 0 0 0 1.5h3.981a.75.75 0 0 0 .75-.75V4.883a.75.75 0 1 0-1.5 0v2.38a8.897 8.897 0 0 0-7.628-4.267c-4.566 0-8.343 3.395-8.82 7.78Zm17.89 2.44a.75.75 0 0 0-1.49-.162c-.393 3.61-3.514 6.442-7.329 6.442a7.396 7.396 0 0 1-6.39-3.62h1.996a.75.75 0 0 0 0-1.5H3.747a.75.75 0 0 0-.75.75v3.983a.75.75 0 0 0 1.5 0v-2.376a8.897 8.897 0 0 0 7.626 4.263c4.566 0 8.343-3.395 8.82-7.78Zm-8.19-3.78a.75.75 0 0 0-1.5 0v1.594l-1.497-.49a.75.75 0 0 0-.467 1.425l1.51.494-.942 1.32a.75.75 0 1 0 1.22.871l.925-1.295.925 1.295a.75.75 0 1 0 1.22-.871l-.941-1.32 1.51-.494a.75.75 0 1 0-.467-1.426l-1.497.49V9.438Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/spinner.ts



function Spinner({ ariaHidden = true, color, disabled, theme, disableSpin = false, }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      class=${disableSpin ? "" : animation}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM11.536 11.536a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12ZM9.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM0 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4.464 13.657a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.12ZM2.343 2.343a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.12-2.12Z"
      />
    </svg>
  `;
}
const animation = css `
  animation: ${keyframes(animations.spin)} 2s infinite linear;
`;

;// ./src/autofill/content/components/icons/user.ts



function User({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return lit_html_b `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M9.203 7.339a4 4 0 1 0-4.407 0A7.033 7.033 0 0 0 2.05 8.953a6.655 6.655 0 0 0-1.517 2.162A6.393 6.393 0 0 0 0 13.667C0 14.403.597 15 1.333 15h11.334c.736 0 1.333-.597 1.333-1.333 0-.876-.181-1.743-.533-2.552a6.654 6.654 0 0 0-1.517-2.162 7.032 7.032 0 0 0-2.747-1.614ZM9.5 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2.592 7.714c.247.57.384 1.175.405 1.786H1.503a4.897 4.897 0 0 1 .405-1.786 5.156 5.156 0 0 1 1.177-1.675 5.534 5.534 0 0 1 1.787-1.136A5.805 5.805 0 0 1 7 8.5c.732 0 1.456.137 2.128.403.673.265 1.28.652 1.787 1.136a5.156 5.156 0 0 1 1.177 1.675Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/index.ts





















;// ./src/autofill/content/components/buttons/close-button.ts




function CloseButton({ handleCloseNotification, i18n, theme }) {
    return lit_html_b `
    <button
      type="button"
      aria-label=${i18n.close}
      class=${closeButtonStyles(theme)}
      @click=${handleCloseNotification}
    >
      ${Close({ theme })}
    </button>
  `;
}
const closeButtonStyles = (theme) => css `
  border: 1px solid transparent;
  border-radius: ${spacing["1"]};
  background-color: transparent;
  cursor: pointer;
  width: 36px;
  height: 36px;

  :hover {
    border: 1px solid ${themes[theme].primary["600"]};
  }

  > svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
`;

;// ./src/autofill/content/components/notification/header-message.ts



function NotificationHeaderMessage({ message, theme }) {
    return lit_html_b `
    <span title=${message} class=${notificationHeaderMessageStyles(theme)}>${message}</span>
  `;
}
const notificationHeaderMessageStyles = (theme) => css `
  flex-grow: 1;
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 28px;
  white-space: nowrap;
  color: ${themes[theme].text.main};
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

;// ./src/autofill/content/components/notification/header.ts







const componentClassPrefix = "notification-header";
const { css: header_css } = createEmotion({
    key: componentClassPrefix,
});
function NotificationHeader({ i18n, message, standalone = false, theme = ThemeTypes.Light, handleCloseNotification, }) {
    const showIcon = true;
    const isDismissable = true;
    return lit_html_b `
    <div class=${notificationHeaderStyles({ standalone, theme })}>
      ${showIcon ? BrandIconContainer({ theme }) : null}
      ${message ? NotificationHeaderMessage({ message, theme }) : null}
      ${isDismissable ? CloseButton({ handleCloseNotification, i18n, theme }) : null}
    </div>
  `;
}
const notificationHeaderStyles = ({ standalone, theme, }) => header_css `
  gap: ${spacing[2]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${themes[theme].background.DEFAULT};
  padding: 12px 16px 8px 16px;
  white-space: nowrap;

  ${standalone
    ? header_css ``
    : header_css `
          border-bottom: 0.5px solid ${themes[theme].secondary["300"]};
        `}
`;

;// ./src/autofill/content/components/notification/at-risk-password/message.ts



function AtRiskNotificationMessage({ message, theme }) {
    return lit_html_b `
    <div>
      ${message
        ? lit_html_b `
              <span title=${message} class=${atRiskNotificationMessageStyles(theme)}>
                ${message}
              </span>
            `
        : A}
    </div>
  `;
}
const baseTextStyles = css `
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 24px;
  font-family: Inter, sans-serif;
  font-size: 16px;
`;
const atRiskNotificationMessageStyles = (theme) => css `
  ${baseTextStyles}

  color: ${themes[theme].text.main};
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  display: inline;
`;

;// ./src/autofill/content/components/notification/at-risk-password/body.ts




const body_componentClassPrefix = "at-risk-notification-body";
const { css: body_css } = createEmotion({
    key: body_componentClassPrefix,
});
function AtRiskNotificationBody({ riskMessage, theme }) {
    return lit_html_b `
    <div class=${atRiskNotificationBodyStyles({ theme })}>
      ${riskMessage
        ? AtRiskNotificationMessage({
            message: riskMessage,
            theme,
        })
        : A}
    </div>
  `;
}
const atRiskNotificationBodyStyles = ({ theme }) => body_css `
  gap: ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${themes[theme].background.alt};
  padding: 12px;
`;

;// ./src/autofill/utils/event-security.ts
/**
 * Event security utilities for validating trusted events
 */
class EventSecurity {
    /**
     * Validates that an event is trusted (originated from user agent)
     * @param event - The event to validate
     * @returns true if the event is trusted, false otherwise
     */
    static isEventTrusted(event) {
        return event.isTrusted;
    }
}

;// ./src/autofill/content/components/buttons/action-button.ts





function ActionButton({ buttonText, dataTestId, disabled = false, isLoading = false, theme, handleClick, fullWidth = true, title, }) {
    const handleButtonClick = (event) => {
        if (EventSecurity.isEventTrusted(event) && !disabled && !isLoading) {
            handleClick(event);
        }
    };
    return lit_html_b `
    <button
      class=${actionButtonStyles({ disabled, fullWidth, isLoading, theme })}
      data-testid="${dataTestId}"
      title=${title !== null && title !== void 0 ? title : buttonText}
      type="button"
      @click=${handleButtonClick}
    >
      ${isLoading ? Spinner({ theme, color: themes[theme].text.muted }) : buttonText}
    </button>
  `;
}
const actionButtonStyles = ({ disabled, fullWidth, isLoading, theme, }) => css `
  ${typography.body2}

  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["3"]};
  width: ${fullWidth ? "100%" : "auto"};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 500;

  ${disabled || isLoading
    ? `
    background-color: ${themes[theme].secondary["300"]};
    color: ${themes[theme].text.muted};
  `
    : `
    background-color: ${themes[theme].primary["600"]};
    cursor: pointer;
    color: ${themes[theme].text.contrast};

    :hover {
      border-color: ${themes[theme].primary["700"]};
      background-color: ${themes[theme].primary["700"]};
      color: ${themes[theme].text.contrast};
    }
    :focus {
      outline: 2px solid ${themes[theme].primary["600"]};
      outline-offset: 1px;
    }
  `}

  svg {
    padding: 2px 0; /* Match line-height of button body2 typography */
    width: auto;
    height: 16px;
  }
`;

;// ./src/autofill/content/components/buttons/additional-tasks/button-content.ts




function AdditionalTasksButtonContent({ buttonText, theme, }) {
    return lit_html_b `
    <div class=${additionalTasksButtonContentStyles({ theme })}>
      <span>${buttonText}</span>
      ${ExternalLink({ theme, color: themes[theme].text.contrast })}
    </div>
  `;
}
const additionalTasksButtonContentStyles = ({ theme }) => css `
  gap: ${spacing[2]};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

;// ./src/autofill/content/components/notification/at-risk-password/footer.ts





function AtRiskNotificationFooter({ i18n, theme, handleChangePasswordClick, }) {
    return lit_html_b `<div class=${atRiskNotificationFooterStyles}>
    ${ActionButton({
        handleClick: handleChangePasswordClick,
        buttonText: AdditionalTasksButtonContent({ buttonText: i18n.changePassword, theme }),
        dataTestId: "change-password-button",
        theme,
        fullWidth: false,
        title: i18n.changePassword,
    })}
  </div>`;
}
const atRiskNotificationFooterStyles = css `
  display: flex;
  padding: ${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]};

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }
`;

;// ./src/autofill/content/components/notification/at-risk-password/container.ts







function AtRiskNotification({ handleChangePasswordClick, handleCloseNotification, i18n, notificationTestId, theme = ThemeTypes.Light, params, }) {
    const { hasPasswordChangeUri, organizationName } = params;
    const riskMessage = chrome.i18n.getMessage(hasPasswordChangeUri ? "atRiskChangePrompt" : "atRiskNavigatePromptV2", organizationName);
    return lit_html_b `
    <div data-testid="${notificationTestId}" class=${atRiskNotificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        i18n,
        message: i18n.atRiskPassword,
        theme,
    })}
      ${AtRiskNotificationBody({
        theme,
        riskMessage,
    })}
      ${handleChangePasswordClick
        ? AtRiskNotificationFooter({
            i18n,
            theme,
            handleChangePasswordClick,
        })
        : A}
    </div>
  `;
}
const atRiskNotificationContainerStyles = (theme) => css `
  position: absolute;
  right: 20px;
  border: 1px solid ${themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${themes[theme].background.alt};
  width: 400px;
  overflow: hidden;

  [class*="${componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
    border-bottom: 0.5px solid ${themes[theme].secondary["300"]};
  }
`;

;// ./src/autofill/notification/abstractions/notification-bar.ts
const NotificationTypes = {
    /** represents scenarios handling saving new ciphers after form submit */
    Add: "add",
    /** represents scenarios handling saving updated ciphers after form submit */
    Change: "change",
    /** represents scenarios where user has interacted with an unlock action prompt or action otherwise requiring unlock as a prerequisite */
    Unlock: "unlock",
    /** represents scenarios where the user has security tasks after updating ciphers */
    AtRiskPassword: "at-risk-password",
};


;// ./src/autofill/content/components/illustrations/celebrate.ts


// This icon has static multi-colors for each theme
function Celebrate({ theme }) {
    if (theme === ThemeTypes.Dark) {
        return lit_html_b `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
        <path
          d="M32.6273 37.2714L3.88045 49.2492C2.98525 49.6222 1.95344 49.4181 1.26769 48.7323C0.581933 48.0466 0.377816 47.0148 0.750816 46.1196L12.7287 17.3728C13.622 15.2288 15.9911 14.1069 18.2158 14.7743L19.0257 15.0173C26.6887 17.3161 32.6839 23.3113 34.9828 30.9743L35.2257 31.7842C35.8931 34.0089 34.7712 36.3781 32.6273 37.2714Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6426 44.7649C12.9332 43.4627 11.2495 41.9951 9.62721 40.3728C8.00492 38.7505 6.53732 37.0668 5.23507 35.3574L5.74088 34.1434C7.10571 35.9897 8.67231 37.8151 10.4286 39.5714C12.1848 41.3277 14.0103 42.8943 15.8566 44.2591L14.6426 44.7649ZM9.86079 46.7574C8.69632 45.7641 7.54698 44.7037 6.42165 43.5783C5.29632 42.453 4.23589 41.3037 3.24264 40.1392L2.755 41.3095C3.65901 42.3487 4.6147 43.3741 5.62028 44.3797C6.62586 45.3853 7.65127 46.341 8.69048 47.245L9.86079 46.7574ZM21.0629 42.0898C18.5607 40.5957 16.0508 38.6488 13.701 36.299C11.3512 33.9492 9.40432 31.4393 7.91017 28.9371L8.45815 27.622C9.94515 30.2728 11.9779 32.973 14.5024 35.4976C17.027 38.0221 19.7272 40.0548 22.378 41.5418L21.0629 42.0898ZM10.9297 21.6902C11.8698 25.118 14.18 28.9793 17.6004 32.3996C21.0207 35.82 24.882 38.1302 28.3098 39.0703L30.1472 38.3047C29.5643 38.2191 28.9477 38.0815 28.3004 37.8889C25.1702 36.9575 21.6052 34.8017 18.4018 31.5982C15.1983 28.3948 13.0425 24.8297 12.1111 21.6996C11.9185 21.0523 11.7809 20.4357 11.6953 19.8528L10.9297 21.6902Z"
          fill="#F3F6F9"
        />
        <path
          d="M27.706 22.294C32.3531 26.9411 34.6852 32.1435 32.9149 33.9138C31.1445 35.6842 25.9421 33.3521 21.295 28.7049C16.6479 24.0578 14.3158 18.8554 16.0861 17.085C17.8564 15.3147 23.0588 17.6468 27.706 22.294Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.6828 29.6463C30.8097 27.6986 29.1563 25.347 26.9046 23.0953C24.6529 20.8436 22.3013 19.1902 20.3536 18.3171C19.376 17.8788 18.5567 17.6628 17.9359 17.6303C17.3148 17.5979 17.0236 17.7503 16.8875 17.8864C16.7514 18.0225 16.5989 18.3138 16.6314 18.9349C16.6638 19.5556 16.8799 20.3749 17.3182 21.3526C18.1912 23.3003 19.8447 25.6519 22.0964 27.9035C24.3481 30.1552 26.6996 31.8087 28.6473 32.6818C29.625 33.12 30.4443 33.3361 31.0651 33.3685C31.6862 33.401 31.9774 33.2486 32.1135 33.1125C32.2496 32.9763 32.402 32.6851 32.3696 32.064C32.3371 31.4433 32.1211 30.624 31.6828 29.6463ZM32.9149 33.9138C34.6852 32.1435 32.3531 26.9411 27.706 22.294C23.0588 17.6468 17.8564 15.3147 16.0861 17.085C14.3158 18.8554 16.6479 24.0578 21.295 28.7049C25.9421 33.3521 31.1445 35.6842 32.9149 33.9138Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.053 15.3169C16.1064 14.7329 14.0334 15.7146 13.2517 17.5906L1.2739 46.3374C0.989218 47.0206 1.14501 47.8081 1.66839 48.3315C2.19178 48.8549 2.97928 49.0107 3.66253 48.726L32.4093 36.7482C34.2853 35.9665 35.267 33.8935 34.683 31.9469L34.44 31.137C32.1959 23.6565 26.3434 17.804 18.8629 15.5599L18.053 15.3169ZM12.2056 17.1547C13.2106 14.7428 15.8759 13.4806 18.3786 14.2314L19.1886 14.4744C27.034 16.828 33.1719 22.9659 35.5256 30.8113L35.7685 31.6213C36.5193 34.124 35.2571 36.7893 32.8452 37.7943L4.09841 49.7721C2.99125 50.2335 1.71514 49.981 0.867022 49.1329C0.0189018 48.2848 -0.233545 47.0087 0.227771 45.9015L12.2056 17.1547Z"
          fill="#175DDC"
        />
        <path
          d="M24.65 0.331121C24.6952 0.137206 24.8681 0 25.0672 0C25.2663 0 25.4391 0.137206 25.4843 0.331121L25.5055 0.421998C25.7994 1.68306 26.784 2.66773 28.0451 2.9616L28.136 2.98277C28.3299 3.02796 28.4671 3.20082 28.4671 3.39993C28.4671 3.59904 28.3299 3.77189 28.136 3.81708L28.0451 3.83826C26.784 4.13212 25.7994 5.11679 25.5055 6.37786L25.4843 6.46873C25.4391 6.66265 25.2663 6.79985 25.0672 6.79985C24.8681 6.79985 24.6952 6.66265 24.65 6.46873L24.6288 6.37786C24.335 5.11679 23.3503 4.13212 22.0892 3.83826L21.9984 3.81708C21.8044 3.77189 21.6672 3.59904 21.6672 3.39993C21.6672 3.20082 21.8044 3.02796 21.9984 2.98277L22.0892 2.9616C23.3503 2.66773 24.335 1.68306 24.6288 0.421997L24.65 0.331121Z"
          fill="#175DDC"
        />
        <path
          d="M46.183 8.83088C46.2282 8.63696 46.401 8.49976 46.6001 8.49976C46.7992 8.49976 46.9721 8.63696 47.0173 8.83088L47.0385 8.92175C47.3323 10.1828 48.317 11.1675 49.5781 11.4614L49.6689 11.4825C49.8628 11.5277 50 11.7006 50 11.8997C50 12.0988 49.8628 12.2716 49.6689 12.3168L49.5781 12.338C48.317 12.6319 47.3323 13.6165 47.0385 14.8776L47.0173 14.9685C46.9721 15.1624 46.7992 15.2996 46.6001 15.2996C46.401 15.2996 46.2282 15.1624 46.183 14.9685L46.1618 14.8776C45.8679 13.6165 44.8833 12.6319 43.6222 12.338L43.5313 12.3168C43.3374 12.2716 43.2002 12.0988 43.2002 11.8997C43.2002 11.7006 43.3374 11.5277 43.5313 11.4825L43.6222 11.4614C44.8833 11.1675 45.8679 10.1828 46.1618 8.92175L46.183 8.83088Z"
          fill="#175DDC"
        />
        <path
          d="M38.8164 43.3968C38.8616 43.2029 39.0344 43.0657 39.2335 43.0657C39.4327 43.0657 39.6055 43.2029 39.6507 43.3968L39.6719 43.4877C39.9657 44.7487 40.9504 45.7334 42.2115 46.0273L42.3024 46.0484C42.4963 46.0936 42.6335 46.2665 42.6335 46.4656C42.6335 46.6647 42.4963 46.8376 42.3024 46.8828L42.2115 46.9039C40.9504 47.1978 39.9657 48.1825 39.6719 49.4435L39.6507 49.5344C39.6055 49.7283 39.4327 49.8655 39.2335 49.8655C39.0344 49.8655 38.8616 49.7283 38.8164 49.5344L38.7952 49.4435C38.5013 48.1825 37.5167 47.1978 36.2556 46.9039L36.1647 46.8828C35.9708 46.8376 35.8336 46.6647 35.8336 46.4656C35.8336 46.2665 35.9708 46.0936 36.1647 46.0484L36.2556 46.0273C37.5167 45.7334 38.5013 44.7487 38.7952 43.4877L38.8164 43.3968Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.5439 27.4056C41.9949 25.8565 39.4834 25.8565 37.9343 27.4056C37.713 27.6269 37.3543 27.6269 37.133 27.4056C36.9117 27.1843 36.9117 26.8255 37.133 26.6042C39.1246 24.6126 42.3537 24.6126 44.3453 26.6042C44.5666 26.8255 44.5666 27.1843 44.3453 27.4056C44.124 27.6269 43.7652 27.6269 43.5439 27.4056Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.1043 21.7127C42.8784 19.8502 38.7535 20.9555 36.891 24.1814C36.7346 24.4524 36.388 24.5452 36.117 24.3888C35.8459 24.2323 35.7531 23.8857 35.9096 23.6147C38.085 19.8468 42.903 18.5558 46.671 20.7312C46.942 20.8877 47.0349 21.2342 46.8784 21.5053C46.7219 21.7763 46.3753 21.8691 46.1043 21.7127Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
          fill="#175DDC"
        />
        <path
          d="M34.7004 9.63307C34.7004 10.8849 33.6856 11.8997 32.4337 11.8997C31.1819 11.8997 30.1671 10.8849 30.1671 9.63307C30.1671 8.38125 31.1819 7.36646 32.4337 7.36646C33.6856 7.36646 34.7004 8.38125 34.7004 9.63307Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.4337 10.7664C33.0596 10.7664 33.567 10.259 33.567 9.63307C33.567 9.00716 33.0596 8.49976 32.4337 8.49976C31.8078 8.49976 31.3004 9.00716 31.3004 9.63307C31.3004 10.259 31.8078 10.7664 32.4337 10.7664ZM32.4337 11.8997C33.6856 11.8997 34.7004 10.8849 34.7004 9.63307C34.7004 8.38125 33.6856 7.36646 32.4337 7.36646C31.1819 7.36646 30.1671 8.38125 30.1671 9.63307C30.1671 10.8849 31.1819 11.8997 32.4337 11.8997Z"
          fill="#175DDC"
        />
        <path
          d="M38.1002 16.4329C38.1002 17.3717 37.3391 18.1328 36.4003 18.1328C35.4614 18.1328 34.7003 17.3717 34.7003 16.4329C34.7003 15.494 35.4614 14.7329 36.4003 14.7329C37.3391 14.7329 38.1002 15.494 38.1002 16.4329Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.4003 16.9995C36.7132 16.9995 36.9669 16.7458 36.9669 16.4329C36.9669 16.1199 36.7132 15.8662 36.4003 15.8662C36.0873 15.8662 35.8336 16.1199 35.8336 16.4329C35.8336 16.7458 36.0873 16.9995 36.4003 16.9995ZM36.4003 18.1328C37.3391 18.1328 38.1002 17.3717 38.1002 16.4329C38.1002 15.494 37.3391 14.7329 36.4003 14.7329C35.4614 14.7329 34.7003 15.494 34.7003 16.4329C34.7003 17.3717 35.4614 18.1328 36.4003 18.1328Z"
          fill="#175DDC"
        />
        <path
          d="M31.8671 44.199C31.8671 45.1379 31.106 45.899 30.1671 45.899C29.2283 45.899 28.4672 45.1379 28.4672 44.199C28.4672 43.2601 29.2283 42.499 30.1671 42.499C31.106 42.499 31.8671 43.2601 31.8671 44.199Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.1671 44.7656C30.4801 44.7656 30.7338 44.5119 30.7338 44.199C30.7338 43.886 30.4801 43.6323 30.1671 43.6323C29.8542 43.6323 29.6005 43.886 29.6005 44.199C29.6005 44.5119 29.8542 44.7656 30.1671 44.7656ZM30.1671 45.899C31.106 45.899 31.8671 45.1379 31.8671 44.199C31.8671 43.2601 31.106 42.499 30.1671 42.499C29.2283 42.499 28.4672 43.2601 28.4672 44.199C28.4672 45.1379 29.2283 45.899 30.1671 45.899Z"
          fill="#175DDC"
        />
        <path
          d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
          fill="#175DDC"
        />
        <path
          d="M29.0337 13.3163C29.0337 14.4116 28.1458 15.2996 27.0504 15.2996C25.9551 15.2996 25.0671 14.4116 25.0671 13.3163C25.0671 12.221 25.9551 11.333 27.0504 11.333C28.1458 11.333 29.0337 12.221 29.0337 13.3163Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.0504 14.1663C27.5199 14.1663 27.9004 13.7857 27.9004 13.3163C27.9004 12.8469 27.5199 12.4663 27.0504 12.4663C26.581 12.4663 26.2004 12.8469 26.2004 13.3163C26.2004 13.7857 26.581 14.1663 27.0504 14.1663ZM27.0504 15.2996C28.1458 15.2996 29.0337 14.4116 29.0337 13.3163C29.0337 12.221 28.1458 11.333 27.0504 11.333C25.9551 11.333 25.0671 12.221 25.0671 13.3163C25.0671 14.4116 25.9551 15.2996 27.0504 15.2996Z"
          fill="#175DDC"
        />
        <path
          d="M45.4667 3.96658C45.4667 6.15726 43.6908 7.93316 41.5002 7.93316C39.3095 7.93316 37.5336 6.15726 37.5336 3.96658C37.5336 1.7759 39.3095 0 41.5002 0C43.6908 0 45.4667 1.7759 45.4667 3.96658Z"
          fill="#F3F6F9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.5002 6.79985C43.0649 6.79985 44.3334 5.53136 44.3334 3.96658C44.3334 2.40181 43.0649 1.13331 41.5002 1.13331C39.9354 1.13331 38.6669 2.40181 38.6669 3.96658C38.6669 5.53136 39.9354 6.79985 41.5002 6.79985ZM41.5002 7.93316C43.6908 7.93316 45.4667 6.15726 45.4667 3.96658C45.4667 1.7759 43.6908 0 41.5002 0C39.3095 0 37.5336 1.7759 37.5336 3.96658C37.5336 6.15726 39.3095 7.93316 41.5002 7.93316Z"
          fill="#175DDC"
        />
      </svg>
    `;
    }
    return lit_html_b `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
      <path
        d="M32.6275 37.2714L3.88069 49.2492C2.98549 49.6222 1.95368 49.4181 1.26793 48.7323C0.582178 48.0466 0.37806 47.0148 0.751061 46.1196L12.7289 17.3728C13.6222 15.2288 15.9914 14.1069 18.216 14.7743L19.026 15.0173C26.6889 17.3161 32.6841 23.3113 34.983 30.9743L35.226 31.7842C35.8934 34.0089 34.7714 36.3781 32.6275 37.2714Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6425 44.7649C12.9331 43.4627 11.2494 41.9951 9.62709 40.3728C8.00479 38.7505 6.53719 37.0668 5.23494 35.3574L5.74076 34.1434C7.10558 35.9897 8.67219 37.8151 10.4285 39.5714C12.1847 41.3277 14.0102 42.8943 15.8565 44.2591L14.6425 44.7649ZM9.86067 46.7574C8.6962 45.7641 7.54686 44.7037 6.42153 43.5783C5.2962 42.453 4.23577 41.3037 3.24251 40.1392L2.75488 41.3095C3.65889 42.3487 4.61458 43.3741 5.62016 44.3797C6.62574 45.3853 7.65114 46.341 8.69036 47.245L9.86067 46.7574ZM21.0628 42.0898C18.5605 40.5957 16.0507 38.6488 13.7009 36.299C11.3511 33.9492 9.40419 31.4393 7.91005 28.9371L8.45802 27.622C9.94503 30.2728 11.9777 32.973 14.5023 35.4976C17.0268 38.0221 19.7271 40.0548 22.3779 41.5418L21.0628 42.0898ZM10.9296 21.6902C11.8696 25.118 14.1799 28.9793 17.6003 32.3996C21.0206 35.82 24.8819 38.1302 28.3097 39.0703L30.1471 38.3047C29.5641 38.2191 28.9476 38.0815 28.3003 37.8889C25.1701 36.9575 21.6051 34.8017 18.4016 31.5982C15.1982 28.3948 13.0424 24.8297 12.111 21.6996C11.9184 21.0523 11.7808 20.4357 11.6952 19.8528L10.9296 21.6902Z"
        fill="white"
      />
      <path
        d="M27.7062 22.294C32.3534 26.9411 34.6855 32.1435 32.9151 33.9138C31.1448 35.6842 25.9424 33.3521 21.2952 28.7049C16.6481 24.0578 14.316 18.8554 16.0863 17.085C17.8567 15.3147 23.0591 17.6468 27.7062 22.294Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.6831 29.6463C30.81 27.6986 29.1565 25.347 26.9048 23.0953C24.6532 20.8436 22.3016 19.1902 20.3539 18.3171C19.3762 17.8788 18.5569 17.6628 17.9362 17.6303C17.3151 17.5979 17.0238 17.7503 16.8877 17.8864C16.7516 18.0225 16.5992 18.3138 16.6316 18.9349C16.6641 19.5556 16.8801 20.3749 17.3184 21.3526C18.1915 23.3003 19.8449 25.6519 22.0966 27.9035C24.3483 30.1552 26.6999 31.8087 28.6476 32.6818C29.6253 33.12 30.4446 33.3361 31.0653 33.3685C31.6864 33.401 31.9776 33.2486 32.1138 33.1125C32.2499 32.9763 32.4023 32.6851 32.3698 32.064C32.3374 31.4433 32.1213 30.624 31.6831 29.6463ZM32.9151 33.9138C34.6855 32.1435 32.3534 26.9411 27.7062 22.294C23.0591 17.6468 17.8567 15.3147 16.0863 17.085C14.316 18.8554 16.6481 24.0578 21.2952 28.7049C25.9424 33.3521 31.1448 35.6842 32.9151 33.9138Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.053 15.317C16.1064 14.733 14.0334 15.7148 13.2517 17.5907L1.2739 46.3375C0.989218 47.0207 1.14501 47.8083 1.66839 48.3316C2.19178 48.855 2.97928 49.0108 3.66253 48.7261L32.4093 36.7483C34.2853 35.9666 35.267 33.8936 34.683 31.947L34.44 31.1371C32.1959 23.6566 26.3434 17.8041 18.8629 15.56L18.053 15.317ZM12.2056 17.1548C13.2106 14.7429 15.8759 13.4807 18.3786 14.2315L19.1886 14.4745C27.034 16.8281 33.1719 22.966 35.5256 30.8115L35.7685 31.6214C36.5193 34.1241 35.2571 36.7895 32.8452 37.7944L4.09841 49.7723C2.99125 50.2336 1.71514 49.9811 0.867022 49.133C0.0189018 48.2849 -0.233545 47.0088 0.227771 45.9016L12.2056 17.1548Z"
        fill="#0E3781"
      />
      <path
        d="M24.6503 0.331121C24.6954 0.137206 24.8683 0 25.0674 0C25.2665 0 25.4394 0.137206 25.4846 0.331121L25.5057 0.421998C25.7996 1.68306 26.7843 2.66773 28.0453 2.9616L28.1362 2.98277C28.3301 3.02796 28.4673 3.20082 28.4673 3.39993C28.4673 3.59904 28.3301 3.77189 28.1362 3.81708L28.0453 3.83826C26.7843 4.13212 25.7996 5.11679 25.5057 6.37786L25.4846 6.46873C25.4394 6.66265 25.2665 6.79985 25.0674 6.79985C24.8683 6.79985 24.6954 6.66265 24.6503 6.46873L24.6291 6.37786C24.3352 5.11679 23.3505 4.13212 22.0895 3.83826L21.9986 3.81708C21.8047 3.77189 21.6675 3.59904 21.6675 3.39993C21.6675 3.20082 21.8047 3.02796 21.9986 2.98277L22.0895 2.9616C23.3505 2.66773 24.3352 1.68306 24.6291 0.421997L24.6503 0.331121Z"
        fill="#0E3781"
      />
      <path
        d="M46.183 8.831C46.2282 8.63708 46.401 8.49988 46.6001 8.49988C46.7992 8.49988 46.9721 8.63708 47.0173 8.831L47.0385 8.92188C47.3323 10.1829 48.317 11.1676 49.5781 11.4615L49.6689 11.4827C49.8628 11.5278 50 11.7007 50 11.8998C50 12.0989 49.8628 12.2718 49.6689 12.317L49.5781 12.3381C48.317 12.632 47.3323 13.6167 47.0385 14.8777L47.0173 14.9686C46.9721 15.1625 46.7992 15.2997 46.6001 15.2997C46.401 15.2997 46.2282 15.1625 46.183 14.9686L46.1618 14.8777C45.8679 13.6167 44.8833 12.632 43.6222 12.3381L43.5313 12.317C43.3374 12.2718 43.2002 12.0989 43.2002 11.8998C43.2002 11.7007 43.3374 11.5278 43.5313 11.4827L43.6222 11.4615C44.8833 11.1676 45.8679 10.1829 46.1618 8.92188L46.183 8.831Z"
        fill="#0E3781"
      />
      <path
        d="M38.8163 43.3969C38.8615 43.203 39.0343 43.0658 39.2334 43.0658C39.4325 43.0658 39.6054 43.203 39.6506 43.3969L39.6718 43.4878C39.9656 44.7489 40.9503 45.7335 42.2114 46.0274L42.3022 46.0486C42.4961 46.0938 42.6334 46.2666 42.6334 46.4657C42.6334 46.6648 42.4961 46.8377 42.3022 46.8829L42.2114 46.9041C40.9503 47.1979 39.9656 48.1826 39.6718 49.4437L39.6506 49.5345C39.6054 49.7284 39.4325 49.8657 39.2334 49.8657C39.0343 49.8657 38.8615 49.7284 38.8163 49.5345L38.7951 49.4437C38.5012 48.1826 37.5166 47.1979 36.2555 46.9041L36.1646 46.8829C35.9707 46.8377 35.8335 46.6648 35.8335 46.4657C35.8335 46.2666 35.9707 46.0938 36.1646 46.0486L36.2555 46.0274C37.5166 45.7335 38.5012 44.7489 38.7951 43.4878L38.8163 43.3969Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.5441 27.4057C41.995 25.8567 39.4835 25.8567 37.9345 27.4057C37.7132 27.627 37.3544 27.627 37.1331 27.4057C36.9118 27.1844 36.9118 26.8256 37.1331 26.6043C39.1247 24.6127 42.3538 24.6127 44.3454 26.6043C44.5667 26.8256 44.5667 27.1844 44.3454 27.4057C44.1241 27.627 43.7653 27.627 43.5441 27.4057Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.1044 21.7127C42.8786 19.8502 38.7536 20.9555 36.8912 24.1814C36.7347 24.4524 36.3881 24.5452 36.1171 24.3888C35.8461 24.2323 35.7532 23.8857 35.9097 23.6147C38.0851 19.8468 42.9032 18.5558 46.6711 20.7312C46.9421 20.8877 47.035 21.2342 46.8785 21.5053C46.722 21.7763 46.3755 21.8691 46.1044 21.7127Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
        fill="#0E3781"
      />
      <path
        d="M34.7002 9.63307C34.7002 10.8849 33.6854 11.8997 32.4336 11.8997C31.1818 11.8997 30.167 10.8849 30.167 9.63307C30.167 8.38125 31.1818 7.36646 32.4336 7.36646C33.6854 7.36646 34.7002 8.38125 34.7002 9.63307Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.4336 10.7664C33.0595 10.7664 33.5669 10.259 33.5669 9.63307C33.5669 9.00716 33.0595 8.49976 32.4336 8.49976C31.8077 8.49976 31.3003 9.00716 31.3003 9.63307C31.3003 10.259 31.8077 10.7664 32.4336 10.7664ZM32.4336 11.8997C33.6854 11.8997 34.7002 10.8849 34.7002 9.63307C34.7002 8.38125 33.6854 7.36646 32.4336 7.36646C31.1818 7.36646 30.167 8.38125 30.167 9.63307C30.167 10.8849 31.1818 11.8997 32.4336 11.8997Z"
        fill="#0E3781"
      />
      <path
        d="M38.1001 16.433C38.1001 17.3719 37.339 18.133 36.4002 18.133C35.4613 18.133 34.7002 17.3719 34.7002 16.433C34.7002 15.4941 35.4613 14.733 36.4002 14.733C37.339 14.733 38.1001 15.4941 38.1001 16.433Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.4002 16.9997C36.7131 16.9997 36.9668 16.746 36.9668 16.433C36.9668 16.12 36.7131 15.8663 36.4002 15.8663C36.0872 15.8663 35.8335 16.12 35.8335 16.433C35.8335 16.746 36.0872 16.9997 36.4002 16.9997ZM36.4002 18.133C37.339 18.133 38.1001 17.3719 38.1001 16.433C38.1001 15.4941 37.339 14.733 36.4002 14.733C35.4613 14.733 34.7002 15.4941 34.7002 16.433C34.7002 17.3719 35.4613 18.133 36.4002 18.133Z"
        fill="#0E3781"
      />
      <path
        d="M31.8672 44.1991C31.8672 45.138 31.1061 45.8991 30.1672 45.8991C29.2284 45.8991 28.4673 45.138 28.4673 44.1991C28.4673 43.2602 29.2284 42.4991 30.1672 42.4991C31.1061 42.4991 31.8672 43.2602 31.8672 44.1991Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.1672 44.7658C30.4802 44.7658 30.7339 44.5121 30.7339 44.1991C30.7339 43.8862 30.4802 43.6325 30.1672 43.6325C29.8543 43.6325 29.6006 43.8862 29.6006 44.1991C29.6006 44.5121 29.8543 44.7658 30.1672 44.7658ZM30.1672 45.8991C31.1061 45.8991 31.8672 45.138 31.8672 44.1991C31.8672 43.2602 31.1061 42.4991 30.1672 42.4991C29.2284 42.4991 28.4673 43.2602 28.4673 44.1991C28.4673 45.138 29.2284 45.8991 30.1672 45.8991Z"
        fill="#0E3781"
      />
      <path
        d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
        fill="#0E3781"
      />
      <path
        d="M29.034 13.3164C29.034 14.4118 28.146 15.2997 27.0507 15.2997C25.9553 15.2997 25.0674 14.4118 25.0674 13.3164C25.0674 12.2211 25.9553 11.3331 27.0507 11.3331C28.146 11.3331 29.034 12.2211 29.034 13.3164Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0507 14.1664C27.5201 14.1664 27.9007 13.7859 27.9007 13.3164C27.9007 12.847 27.5201 12.4664 27.0507 12.4664C26.5812 12.4664 26.2007 12.847 26.2007 13.3164C26.2007 13.7859 26.5812 14.1664 27.0507 14.1664ZM27.0507 15.2997C28.146 15.2997 29.034 14.4118 29.034 13.3164C29.034 12.2211 28.146 11.3331 27.0507 11.3331C25.9553 11.3331 25.0674 12.2211 25.0674 13.3164C25.0674 14.4118 25.9553 15.2997 27.0507 15.2997Z"
        fill="#0E3781"
      />
      <path
        d="M45.4669 3.96658C45.4669 6.15726 43.691 7.93316 41.5003 7.93316C39.3096 7.93316 37.5337 6.15726 37.5337 3.96658C37.5337 1.7759 39.3096 0 41.5003 0C43.691 0 45.4669 1.7759 45.4669 3.96658Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.5003 6.79985C43.065 6.79985 44.3335 5.53136 44.3335 3.96658C44.3335 2.40181 43.065 1.13331 41.5003 1.13331C39.9355 1.13331 38.667 2.40181 38.667 3.96658C38.667 5.53136 39.9355 6.79985 41.5003 6.79985ZM41.5003 7.93316C43.691 7.93316 45.4669 6.15726 45.4669 3.96658C45.4669 1.7759 43.691 0 41.5003 0C39.3096 0 37.5337 1.7759 37.5337 3.96658C37.5337 6.15726 39.3096 7.93316 41.5003 7.93316Z"
        fill="#0E3781"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/illustrations/keyhole.ts


// This icon has static multi-colors for each theme
function Keyhole({ theme }) {
    if (theme === ThemeTypes.Dark) {
        return lit_html_b `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
        <path
          fill="#79A1E9"
          fill-rule="evenodd"
          d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#79A1E9"
          d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
        />
        <path fill="#F3F6F9" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clip-rule="evenodd"
        />
        <path
          fill="#F3F6F9"
          d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M67.604 76H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.769-2H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M29.628 60c1.134 1.034 1.719 2.571 1.387 4.083L28.835 74H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 1 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.633l-2.637-12Zm1.608-2H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.996.996 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.195 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#FFBF00"
          d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
          clip-rule="evenodd"
        />
      </svg>
    `;
    }
    return lit_html_b `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path
        fill="#99BAF4"
        fill-rule="evenodd"
        d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#99BAF4"
        d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
      />
      <path fill="#fff" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M67.605 76H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.77-2H50a8 8 0 0 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M29.628 60c1.134 1.034 1.72 2.571 1.387 4.083L28.835 74H50a8 8 0 0 0 0-16H27.215a31.117 31.117 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 0 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.634l-2.638-12Zm1.609-2H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 1 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.995.995 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.196 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#FFBF00"
        d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/illustrations/warning.ts

// This icon has static multi-colors for each theme
function Warning() {
    return lit_html_b `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
      <path
        fill="#FFBF00"
        d="M11.717.999a1.975 1.975 0 0 0-3.434 0l-8.014 14c-.764 1.333.19 3 1.717 3h16.028c1.527 0 2.48-1.667 1.717-3zm6.713 14.745-8.014-14a.475.475 0 0 0-.832 0l-8.014 14a.5.5 0 0 0 .416.755h16.028a.5.5 0 0 0 .416-.755z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M11.717 1a1.975 1.975 0 0 0-3.434 0L.269 15c-.764 1.333.19 3 1.717 3h16.028c1.527 0 2.48-1.667 1.717-3L11.717 1Zm6.713 14.745-8.014-14a.475.475 0 0 0-.832 0l-8.014 14a.5.5 0 0 0 .416.755h16.028a.5.5 0 0 0 .416-.755Z"
      />
      <path
        fill="#0E3781"
        d="M11.25 13.587c0 .697-.56 1.261-1.25 1.261s-1.25-.564-1.25-1.26c0-.697.56-1.261 1.25-1.261s1.25.564 1.25 1.26ZM9.003 6.023a.5.5 0 0 0-.496.561l.501 4.043a.5.5 0 0 0 .496.439h.992a.5.5 0 0 0 .496-.439l.5-4.043a.5.5 0 0 0-.495-.561H9.003Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/illustrations/index.ts




;// ./src/autofill/content/components/notification/confirmation/message.ts




function NotificationConfirmationMessage({ buttonAria, buttonText, itemName, message, messageDetails, handleClick, theme, }) {
    return lit_html_b `
    <div class=${containerStyles}>
      ${message || buttonText
        ? lit_html_b `
              <div class=${singleLineWrapperStyles}>
                ${itemName
            ? lit_html_b `
                        <span class=${itemNameStyles(theme)} title=${itemName}> ${itemName} </span>
                      `
            : A}
                <span
                  title=${message || buttonText}
                  class=${notificationConfirmationMessageStyles(theme)}
                >
                  ${message || A}
                  ${buttonText
            ? lit_html_b `
                          <a
                            title=${buttonText}
                            class=${notificationConfirmationButtonTextStyles(theme)}
                            @click=${handleClick}
                            @keydown=${(e) => handleButtonKeyDown(e, () => handleClick(e))}
                            aria-label=${buttonAria}
                            tabindex="0"
                            role="button"
                          >
                            ${buttonText}
                          </a>
                        `
            : A}
                </span>
              </div>
            `
        : A}
      ${messageDetails
        ? lit_html_b `<div class=${AdditionalMessageStyles({ theme })}>${messageDetails}</div>`
        : A}
    </div>
  `;
}
const containerStyles = css `
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
  width: 100%;
`;
const singleLineWrapperStyles = css `
  display: inline;
  white-space: normal;
  word-break: break-word;
`;
const message_baseTextStyles = css `
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 24px;
  font-family: Inter, sans-serif;
  font-size: 16px;
`;
const notificationConfirmationMessageStyles = (theme) => css `
  ${message_baseTextStyles}

  color: ${themes[theme].text.main};
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  display: inline;
`;
const itemNameStyles = (theme) => css `
  ${message_baseTextStyles}

  color: ${themes[theme].text.main};
  font-weight: 400;
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: bottom;
`;
const notificationConfirmationButtonTextStyles = (theme) => css `
  ${message_baseTextStyles}

  color: ${themes[theme].primary[600]};
  font-weight: 500;
  cursor: pointer;
`;
const AdditionalMessageStyles = ({ theme }) => css `
  ${typography.body2}

  font-size: 14px;
  color: ${themes[theme].text.muted};
`;
function handleButtonKeyDown(event, handleClick) {
    if (EventSecurity.isEventTrusted(event) && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        handleClick();
    }
}

;// ./src/autofill/content/components/notification/confirmation/body.ts





const confirmation_body_componentClassPrefix = "notification-confirmation-body";
const { css: confirmation_body_css } = createEmotion({
    key: confirmation_body_componentClassPrefix,
});
function NotificationConfirmationBody({ buttonAria, buttonText, confirmationMessage, error, itemName, messageDetails, tasksAreComplete, theme, handleOpenVault, }) {
    const IconComponent = error ? Warning : tasksAreComplete ? Celebrate : Keyhole;
    const showConfirmationMessage = confirmationMessage || buttonText || messageDetails;
    return lit_html_b `
    <div class=${notificationConfirmationBodyStyles({ theme })}>
      <div class=${iconContainerStyles(error)}>${IconComponent({ theme })}</div>
      ${showConfirmationMessage
        ? NotificationConfirmationMessage({
            buttonAria,
            buttonText,
            itemName: error ? undefined : itemName,
            message: confirmationMessage,
            messageDetails,
            theme,
            handleClick: handleOpenVault,
        })
        : A}
    </div>
  `;
}
const iconContainerStyles = (error) => confirmation_body_css `
  > svg {
    width: ${!error ? "50px" : "40px"};
    height: auto;
  }
`;
const notificationConfirmationBodyStyles = ({ theme }) => confirmation_body_css `
  gap: ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${themes[theme].background.alt};
  padding: 12px;
`;

;// ./src/autofill/content/components/notification/confirmation/footer.ts





function NotificationConfirmationFooter({ i18n, theme, handleButtonClick, }) {
    const primaryButtonText = i18n.nextSecurityTaskAction;
    return lit_html_b `
    <div class=${notificationConfirmationFooterStyles({ theme })}>
      ${ActionButton({
        handleClick: handleButtonClick,
        buttonText: footer_AdditionalTasksButtonContent({ buttonText: primaryButtonText, theme }),
        theme,
        title: primaryButtonText,
    })}
    </div>
  `;
}
const notificationConfirmationFooterStyles = ({ theme }) => css `
  background-color: ${themes[theme].background.alt};
  padding: 0 ${spacing[3]} ${spacing[3]} ${spacing[3]};
  max-width: min-content;

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
    padding-bottom: ${spacing[4]};
  }
`;
function footer_AdditionalTasksButtonContent({ buttonText, theme }) {
    return lit_html_b `
    <div class=${footer_additionalTasksButtonContentStyles({ theme })}>
      <span>${buttonText}</span>
      ${ExternalLink({ theme, color: themes[theme].text.contrast })}
    </div>
  `;
}
const footer_additionalTasksButtonContentStyles = ({ theme }) => css `
  gap: ${spacing[2]};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

;// ./src/autofill/content/components/notification/confirmation/container.ts








function NotificationConfirmationContainer({ error, handleCloseNotification, handleOpenVault, handleOpenTasks, headerMessage, i18n, itemName, notificationTestId, task, theme = ThemeTypes.Light, type, }) {
    const confirmationMessage = getConfirmationMessage(i18n, type, error);
    const buttonText = error ? i18n.newItem : i18n.view;
    const buttonAria = error
        ? i18n.notificationNewItemAria
        : chrome.i18n.getMessage("notificationViewAria", [itemName]);
    let messageDetails;
    let remainingTasksCount;
    let tasksAreComplete = true;
    if (task && !error) {
        remainingTasksCount = task.remainingTasksCount || 0;
        tasksAreComplete = remainingTasksCount === 0;
        if (task.orgName !== null && task.orgName !== undefined) {
            messageDetails =
                remainingTasksCount > 0
                    ? chrome.i18n.getMessage("loginUpdateTaskSuccessAdditional", [
                        task.orgName,
                        `${remainingTasksCount}`,
                    ])
                    : chrome.i18n.getMessage("loginUpdateTaskSuccess", [task.orgName]);
        }
    }
    return lit_html_b `
    <div data-testid="${notificationTestId}" class=${notificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        i18n,
        message: headerMessage,
        theme,
    })}
      ${NotificationConfirmationBody({
        buttonAria,
        buttonText,
        confirmationMessage,
        error,
        itemName,
        messageDetails,
        tasksAreComplete,
        theme,
        handleOpenVault,
    })}
      ${!error && remainingTasksCount
        ? NotificationConfirmationFooter({
            i18n,
            theme,
            handleButtonClick: handleOpenTasks,
        })
        : A}
    </div>
  `;
}
const notificationContainerStyles = (theme) => css `
  position: absolute;
  right: 20px;
  border: 1px solid ${themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${themes[theme].background.alt};
  width: 400px;
  overflow: hidden;

  [class*="${componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
    border-bottom: 0.5px solid ${themes[theme].secondary["300"]};
  }
`;
function getConfirmationMessage(i18n, type, error) {
    if (error) {
        return i18n.saveFailureDetails;
    }
    /* @TODO This partial string return and later concatenation with the cipher name is needed
     * to handle cipher name overflow cases, but is risky for i18n concerns. Fix concatenation
     * with cipher name overflow when a tag replacement solution is available.
     */
    return type === NotificationTypes.Add
        ? i18n.notificationLoginSaveConfirmation
        : i18n.notificationLoginUpdatedConfirmation;
}

;// ./src/autofill/content/components/buttons/badge-button.ts




function BadgeButton({ buttonAction, buttonText, disabled = false, itemName, theme, username, }) {
    const handleButtonClick = (event) => {
        if (EventSecurity.isEventTrusted(event) && !disabled) {
            buttonAction(event);
        }
    };
    return lit_html_b `
    <button
      type="button"
      title=${buttonText}
      aria-label=${[buttonText, [itemName, username].filter(Boolean).join(" ")]}
      class=${badgeButtonStyles({ disabled, theme })}
      @click=${handleButtonClick}
    >
      ${buttonText}
    </button>
  `;
}
const badgeButtonStyles = ({ disabled, theme }) => css `
  ${typography.helperMedium}

  user-select: none;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 500;

  ${disabled
    ? `
    border: 0.5px solid ${themes[theme].secondary["300"]};
    background-color: ${themes[theme].secondary["300"]};
    color: ${themes[theme].text.muted};
  `
    : `
    border: 0.5px solid ${themes[theme].primary["700"]};
    background-color: ${themes[theme].primary["100"]};
    cursor: pointer;
    color: ${themes[theme].primary["700"]};

    :hover {
      border-color: ${themes[theme].primary["600"]};
      background-color: ${themes[theme].primary["600"]};
      color: ${themes[theme].text.contrast};
    }
    :focus {
      outline: 2px solid ${themes[theme].primary["600"]};
      outline-offset: 2px;
    }
  `}
`;

;// ./src/autofill/content/components/buttons/edit-button.ts





const editButtonIconSize = "16px";
const editButtonInset = spacing["1"];
const editButtonSize = `calc(${editButtonIconSize} + (${editButtonInset} * 2))`;
function EditButton({ buttonAction, buttonText, disabled = false, theme }) {
    return lit_html_b `
    <button
      type="button"
      title=${buttonText}
      aria-label=${buttonText}
      class=${editButtonStyles({ disabled, theme })}
      @click=${(event) => {
        if (EventSecurity.isEventTrusted(event) && !disabled) {
            buttonAction(event);
        }
    }}
    >
      ${PencilSquare({ disabled, theme })}
    </button>
  `;
}
const editButtonStyles = ({ disabled, theme }) => css `
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${editButtonSize};
  height: ${editButtonSize};
  border: 1px solid transparent;
  border-radius: ${editButtonInset};
  background-color: transparent;
  padding: ${editButtonInset};

  ${!disabled
    ? `
    cursor: pointer;

    :hover {
      border-color: ${themes[theme].primary["600"]};
    }
  `
    : ""}

  > svg {
    width: ${editButtonIconSize};
    height: ${editButtonIconSize};
  }
`;

;// ../../node_modules/signal-polyfill/dist/index.js
var __defProp=Object.defineProperty;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __publicField=(obj,key,value)=>{__defNormalProp(obj,typeof key!=="symbol"?key+"":key,value);return value;};var __accessCheck=(obj,member,msg)=>{if(!member.has(obj))throw TypeError("Cannot "+msg);};var __privateIn=(member,obj)=>{if(Object(obj)!==obj)throw TypeError('Cannot use the "in" operator on this value');return member.has(obj);};var __privateAdd=(obj,member,value)=>{if(member.has(obj))throw TypeError("Cannot add the same private member more than once");member instanceof WeakSet?member.add(obj):member.set(obj,value);};var __privateMethod=(obj,member,method)=>{__accessCheck(obj,member,"access private method");return method;};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function defaultEquals(a,b){return Object.is(a,b);}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let activeConsumer=null;let inNotificationPhase=false;let epoch=1;const SIGNAL=/* @__PURE__ */Symbol("SIGNAL");function setActiveConsumer(consumer){const prev=activeConsumer;activeConsumer=consumer;return prev;}function getActiveConsumer(){return activeConsumer;}function isInNotificationPhase(){return inNotificationPhase;}const REACTIVE_NODE={version:0,lastCleanEpoch:0,dirty:false,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:false,consumerIsAlwaysLive:false,producerMustRecompute:()=>false,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function producerAccessed(node){if(inNotificationPhase){throw new Error(typeof ngDevMode!=="undefined"&&ngDevMode?`Assertion error: signal read during notification phase`:"");}if(activeConsumer===null){return;}activeConsumer.consumerOnSignalRead(node);const idx=activeConsumer.nextProducerIndex++;assertConsumerNode(activeConsumer);if(idx<activeConsumer.producerNode.length&&activeConsumer.producerNode[idx]!==node){if(consumerIsLive(activeConsumer)){const staleProducer=activeConsumer.producerNode[idx];producerRemoveLiveConsumerAtIndex(staleProducer,activeConsumer.producerIndexOfThis[idx]);}}if(activeConsumer.producerNode[idx]!==node){activeConsumer.producerNode[idx]=node;activeConsumer.producerIndexOfThis[idx]=consumerIsLive(activeConsumer)?producerAddLiveConsumer(node,activeConsumer,idx):0;}activeConsumer.producerLastReadVersion[idx]=node.version;}function producerIncrementEpoch(){epoch++;}function producerUpdateValueVersion(node){if(!node.dirty&&node.lastCleanEpoch===epoch){return;}if(!node.producerMustRecompute(node)&&!consumerPollProducersForChange(node)){node.dirty=false;node.lastCleanEpoch=epoch;return;}node.producerRecomputeValue(node);node.dirty=false;node.lastCleanEpoch=epoch;}function producerNotifyConsumers(node){if(node.liveConsumerNode===void 0){return;}const prev=inNotificationPhase;inNotificationPhase=true;try{for(const consumer of node.liveConsumerNode){if(!consumer.dirty){consumerMarkDirty(consumer);}}}finally{inNotificationPhase=prev;}}function producerUpdatesAllowed(){return(activeConsumer==null?void 0:activeConsumer.consumerAllowSignalWrites)!==false;}function consumerMarkDirty(node){var _a;node.dirty=true;producerNotifyConsumers(node);(_a=node.consumerMarkedDirty)==null?void 0:_a.call(node.wrapper??node);}function consumerBeforeComputation(node){node&&(node.nextProducerIndex=0);return setActiveConsumer(node);}function consumerAfterComputation(node,prevConsumer){setActiveConsumer(prevConsumer);if(!node||node.producerNode===void 0||node.producerIndexOfThis===void 0||node.producerLastReadVersion===void 0){return;}if(consumerIsLive(node)){for(let i=node.nextProducerIndex;i<node.producerNode.length;i++){producerRemoveLiveConsumerAtIndex(node.producerNode[i],node.producerIndexOfThis[i]);}}while(node.producerNode.length>node.nextProducerIndex){node.producerNode.pop();node.producerLastReadVersion.pop();node.producerIndexOfThis.pop();}}function consumerPollProducersForChange(node){assertConsumerNode(node);for(let i=0;i<node.producerNode.length;i++){const producer=node.producerNode[i];const seenVersion=node.producerLastReadVersion[i];if(seenVersion!==producer.version){return true;}producerUpdateValueVersion(producer);if(seenVersion!==producer.version){return true;}}return false;}function producerAddLiveConsumer(node,consumer,indexOfThis){var _a;assertProducerNode(node);assertConsumerNode(node);if(node.liveConsumerNode.length===0){(_a=node.watched)==null?void 0:_a.call(node.wrapper);for(let i=0;i<node.producerNode.length;i++){node.producerIndexOfThis[i]=producerAddLiveConsumer(node.producerNode[i],node,i);}}node.liveConsumerIndexOfThis.push(indexOfThis);return node.liveConsumerNode.push(consumer)-1;}function producerRemoveLiveConsumerAtIndex(node,idx){var _a;assertProducerNode(node);assertConsumerNode(node);if(typeof ngDevMode!=="undefined"&&ngDevMode&&idx>=node.liveConsumerNode.length){throw new Error(`Assertion error: active consumer index ${idx} is out of bounds of ${node.liveConsumerNode.length} consumers)`);}if(node.liveConsumerNode.length===1){(_a=node.unwatched)==null?void 0:_a.call(node.wrapper);for(let i=0;i<node.producerNode.length;i++){producerRemoveLiveConsumerAtIndex(node.producerNode[i],node.producerIndexOfThis[i]);}}const lastIdx=node.liveConsumerNode.length-1;node.liveConsumerNode[idx]=node.liveConsumerNode[lastIdx];node.liveConsumerIndexOfThis[idx]=node.liveConsumerIndexOfThis[lastIdx];node.liveConsumerNode.length--;node.liveConsumerIndexOfThis.length--;if(idx<node.liveConsumerNode.length){const idxProducer=node.liveConsumerIndexOfThis[idx];const consumer=node.liveConsumerNode[idx];assertConsumerNode(consumer);consumer.producerIndexOfThis[idxProducer]=idx;}}function consumerIsLive(node){var _a;return node.consumerIsAlwaysLive||(((_a=node==null?void 0:node.liveConsumerNode)==null?void 0:_a.length)??0)>0;}function assertConsumerNode(node){node.producerNode??(node.producerNode=[]);node.producerIndexOfThis??(node.producerIndexOfThis=[]);node.producerLastReadVersion??(node.producerLastReadVersion=[]);}function assertProducerNode(node){node.liveConsumerNode??(node.liveConsumerNode=[]);node.liveConsumerIndexOfThis??(node.liveConsumerIndexOfThis=[]);}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function computedGet(node){producerUpdateValueVersion(node);producerAccessed(node);if(node.value===ERRORED){throw node.error;}return node.value;}function createComputed(computation){const node=Object.create(COMPUTED_NODE);node.computation=computation;const computed=()=>computedGet(node);computed[SIGNAL]=node;return computed;}const UNSET=/* @__PURE__ */Symbol("UNSET");const COMPUTING=/* @__PURE__ */Symbol("COMPUTING");const ERRORED=/* @__PURE__ */Symbol("ERRORED");const COMPUTED_NODE=/* @__PURE__ */(()=>{return{...REACTIVE_NODE,value:UNSET,dirty:true,error:null,equal:defaultEquals,producerMustRecompute(node){return node.value===UNSET||node.value===COMPUTING;},producerRecomputeValue(node){if(node.value===COMPUTING){throw new Error("Detected cycle in computations.");}const oldValue=node.value;node.value=COMPUTING;const prevConsumer=consumerBeforeComputation(node);let newValue;let wasEqual=false;try{newValue=node.computation.call(node.wrapper);const oldOk=oldValue!==UNSET&&oldValue!==ERRORED;wasEqual=oldOk&&node.equal.call(node.wrapper,oldValue,newValue);}catch(err){newValue=ERRORED;node.error=err;}finally{consumerAfterComputation(node,prevConsumer);}if(wasEqual){node.value=oldValue;return;}node.value=newValue;node.version++;}};})();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function defaultThrowError(){throw new Error();}let throwInvalidWriteToSignalErrorFn=defaultThrowError;function throwInvalidWriteToSignalError(){throwInvalidWriteToSignalErrorFn();}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function createSignal(initialValue){const node=Object.create(SIGNAL_NODE);node.value=initialValue;const getter=()=>{producerAccessed(node);return node.value;};getter[SIGNAL]=node;return getter;}function signalGetFn(){producerAccessed(this);return this.value;}function signalSetFn(node,newValue){if(!producerUpdatesAllowed()){throwInvalidWriteToSignalError();}if(!node.equal.call(node.wrapper,node.value,newValue)){node.value=newValue;signalValueChanged(node);}}const SIGNAL_NODE=/* @__PURE__ */(()=>{return{...REACTIVE_NODE,equal:defaultEquals,value:void 0};})();function signalValueChanged(node){node.version++;producerIncrementEpoch();producerNotifyConsumers(node);}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NODE=Symbol("node");var Signal;(Signal2=>{var _a,_brand,brand_fn,_b,_brand2,brand_fn2;class State{constructor(initialValue,options={}){__privateAdd(this,_brand);__publicField(this,_a);const ref=createSignal(initialValue);const node=ref[SIGNAL];this[NODE]=node;node.wrapper=this;if(options){const equals=options.equals;if(equals){node.equal=equals;}node.watched=options[Signal2.subtle.watched];node.unwatched=options[Signal2.subtle.unwatched];}}get(){if(!(0,Signal2.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return signalGetFn.call(this[NODE]);}set(newValue){if(!(0,Signal2.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(isInNotificationPhase()){throw new Error("Writes to signals not permitted during Watcher callback");}const ref=this[NODE];signalSetFn(ref,newValue);}}_a=NODE;_brand=new WeakSet();brand_fn=function(){};Signal2.isState=s=>typeof s==="object"&&__privateIn(_brand,s);Signal2.State=State;class Computed{// Create a Signal which evaluates to the value returned by the callback.
// Callback is called with this signal as the parameter.
constructor(computation,options){__privateAdd(this,_brand2);__publicField(this,_b);const ref=createComputed(computation);const node=ref[SIGNAL];node.consumerAllowSignalWrites=true;this[NODE]=node;node.wrapper=this;if(options){const equals=options.equals;if(equals){node.equal=equals;}node.watched=options[Signal2.subtle.watched];node.unwatched=options[Signal2.subtle.unwatched];}}get(){if(!(0,Signal2.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return computedGet(this[NODE]);}}_b=NODE;_brand2=new WeakSet();brand_fn2=function(){};Signal2.isComputed=c=>typeof c==="object"&&__privateIn(_brand2,c);Signal2.Computed=Computed;(subtle2=>{var _a2,_brand3,brand_fn3,_assertSignals,assertSignals_fn;function untrack(cb){let output;let prevActiveConsumer=null;try{prevActiveConsumer=setActiveConsumer(null);output=cb();}finally{setActiveConsumer(prevActiveConsumer);}return output;}subtle2.untrack=untrack;function introspectSources(sink){var _a3;if(!(0,Signal2.isComputed)(sink)&&!(0,Signal2.isWatcher)(sink)){throw new TypeError("Called introspectSources without a Computed or Watcher argument");}return((_a3=sink[NODE].producerNode)==null?void 0:_a3.map(n=>n.wrapper))??[];}subtle2.introspectSources=introspectSources;function introspectSinks(signal){var _a3;if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isState)(signal)){throw new TypeError("Called introspectSinks without a Signal argument");}return((_a3=signal[NODE].liveConsumerNode)==null?void 0:_a3.map(n=>n.wrapper))??[];}subtle2.introspectSinks=introspectSinks;function hasSinks(signal){if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isState)(signal)){throw new TypeError("Called hasSinks without a Signal argument");}const liveConsumerNode=signal[NODE].liveConsumerNode;if(!liveConsumerNode)return false;return liveConsumerNode.length>0;}subtle2.hasSinks=hasSinks;function hasSources(signal){if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isWatcher)(signal)){throw new TypeError("Called hasSources without a Computed or Watcher argument");}const producerNode=signal[NODE].producerNode;if(!producerNode)return false;return producerNode.length>0;}subtle2.hasSources=hasSources;class Watcher{// When a (recursive) source of Watcher is written to, call this callback,
// if it hasn't already been called since the last `watch` call.
// No signals may be read or written during the notify.
constructor(notify){__privateAdd(this,_brand3);__privateAdd(this,_assertSignals);__publicField(this,_a2);let node=Object.create(REACTIVE_NODE);node.wrapper=this;node.consumerMarkedDirty=notify;node.consumerIsAlwaysLive=true;node.consumerAllowSignalWrites=false;node.producerNode=[];this[NODE]=node;}// Add these signals to the Watcher's set, and set the watcher to run its
// notify callback next time any signal in the set (or one of its dependencies) changes.
// Can be called with no arguments just to reset the "notified" state, so that
// the notify callback will be invoked again.
watch(...signals){if(!(0,Signal2.isWatcher)(this)){throw new TypeError("Called unwatch without Watcher receiver");}__privateMethod(this,_assertSignals,assertSignals_fn).call(this,signals);const node=this[NODE];node.dirty=false;const prev=setActiveConsumer(node);for(const signal of signals){producerAccessed(signal[NODE]);}setActiveConsumer(prev);}// Remove these signals from the watched set (e.g., for an effect which is disposed)
unwatch(...signals){if(!(0,Signal2.isWatcher)(this)){throw new TypeError("Called unwatch without Watcher receiver");}__privateMethod(this,_assertSignals,assertSignals_fn).call(this,signals);const node=this[NODE];assertConsumerNode(node);for(let i=node.producerNode.length-1;i>=0;i--){if(signals.includes(node.producerNode[i].wrapper)){producerRemoveLiveConsumerAtIndex(node.producerNode[i],node.producerIndexOfThis[i]);const lastIdx=node.producerNode.length-1;node.producerNode[i]=node.producerNode[lastIdx];node.producerIndexOfThis[i]=node.producerIndexOfThis[lastIdx];node.producerNode.length--;node.producerIndexOfThis.length--;node.nextProducerIndex--;if(i<node.producerNode.length){const idxConsumer=node.producerIndexOfThis[i];const producer=node.producerNode[i];assertProducerNode(producer);producer.liveConsumerIndexOfThis[idxConsumer]=i;}}}}// Returns the set of computeds in the Watcher's set which are still yet
// to be re-evaluated
getPending(){if(!(0,Signal2.isWatcher)(this)){throw new TypeError("Called getPending without Watcher receiver");}const node=this[NODE];return node.producerNode.filter(n=>n.dirty).map(n=>n.wrapper);}}_a2=NODE;_brand3=new WeakSet();brand_fn3=function(){};_assertSignals=new WeakSet();assertSignals_fn=function(signals){for(const signal of signals){if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isState)(signal)){throw new TypeError("Called watch/unwatch without a Computed or State argument");}}};Signal2.isWatcher=w=>__privateIn(_brand3,w);subtle2.Watcher=Watcher;function currentComputed(){var _a3;return(_a3=getActiveConsumer())==null?void 0:_a3.wrapper;}subtle2.currentComputed=currentComputed;subtle2.watched=Symbol("watched");subtle2.unwatched=Symbol("unwatched");})(Signal2.subtle||(Signal2.subtle={}));})(Signal||(Signal={}));
;// ../../node_modules/@lit-labs/signals/lib/signal-watcher.js
/* unused harmony import specifier */ var signal_watcher_t;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let signal_watcher_i=!1;const signal_watcher_s=new Signal.subtle.Watcher(()=>{signal_watcher_i||(signal_watcher_i=!0,queueMicrotask(()=>{signal_watcher_i=!1;for(const t of signal_watcher_s.getPending())t.get();signal_watcher_s.watch();}));}),signal_watcher_h=Symbol("SignalWatcherBrand"),signal_watcher_e=new FinalizationRegistry(i=>{i.unwatch(...Signal.subtle.introspectSources(i));}),signal_watcher_n=new WeakMap();function signal_watcher_o(i){return!0===i[signal_watcher_h]?(console.warn("SignalWatcher should not be applied to the same class more than once."),i):class extends i{constructor(){super(...arguments),this._$St=new Map(),this._$So=new signal_watcher_t.State(0),this._$Si=!1;}_$Sl(){var t,i;const s=[],h=[];this._$St.forEach((t,i)=>{((null==t?void 0:t.beforeUpdate)?s:h).push(i);});const e=null===(t=this.h)||void 0===t?void 0:t.getPending().filter(t=>t!==this._$Su&&!this._$St.has(t));s.forEach(t=>t.get()),null===(i=this._$Su)||void 0===i||i.get(),e.forEach(t=>t.get()),h.forEach(t=>t.get());}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl();});}_$S_(){if(void 0!==this.h)return;this._$Su=new signal_watcher_t.Computed(()=>{this._$So.get(),super.performUpdate();});const i=this.h=new signal_watcher_t.subtle.Watcher(function(){const t=signal_watcher_n.get(this);void 0!==t&&(!1===t._$Si&&(new Set(this.getPending()).has(t._$Su)?t.requestUpdate():t._$Sv()),this.watch());});signal_watcher_n.set(i,this),signal_watcher_e.register(this,i),i.watch(this._$Su),i.watch(...Array.from(this._$St).map(([t])=>t));}_$Sp(){if(void 0===this.h)return;let i=!1;this.h.unwatch(...signal_watcher_t.subtle.introspectSources(this.h).filter(t=>{var s;const h=!0!==(null===(s=this._$St.get(t))||void 0===s?void 0:s.manualDispose);return h&&this._$St.delete(t),i||(i=!h),h;})),i||(this._$Su=void 0,this.h=void 0,this._$St.clear());}updateEffect(i,s){var h;this._$S_();const e=new signal_watcher_t.Computed(()=>{i();});return this.h.watch(e),this._$St.set(e,s),null!==(h=null==s?void 0:s.beforeUpdate)&&void 0!==h&&h?signal_watcher_t.subtle.untrack(()=>e.get()):this.updateComplete.then(()=>signal_watcher_t.subtle.untrack(()=>e.get())),()=>{this._$St.delete(e),this.h.unwatch(e),!1===this.isConnected&&this._$Sp();};}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl());}connectedCallback(){super.connectedCallback(),this.requestUpdate();}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp();});}};}
;// ../../node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU;}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e);}update(t,e){return this.render(...e);}}
;// ../../node_modules/lit/directive.js

;// ../../node_modules/lit-html/directive-helpers.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:directive_helpers_t}=j,directive_helpers_i=o=>o,directive_helpers_n=o=>null===o||"object"!=typeof o&&"function"!=typeof o,directive_helpers_e={HTML:1,SVG:2,MATHML:3},directive_helpers_l=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,directive_helpers_d=o=>null!=o?._$litType$?.h,directive_helpers_c=o=>void 0!==o?._$litDirective$,directive_helpers_f=o=>o?._$litDirective$,directive_helpers_r=o=>void 0===o.strings,directive_helpers_s=()=>document.createComment(""),directive_helpers_v=(o,n,e)=>{const l=o._$AA.parentNode,d=void 0===n?o._$AB:n._$AA;if(void 0===e){const i=l.insertBefore(directive_helpers_s(),d),n=l.insertBefore(directive_helpers_s(),d);e=new directive_helpers_t(i,n,o,o.options);}else{const t=e._$AB.nextSibling,n=e._$AM,c=n!==o;if(c){let t;e._$AQ?.(o),e._$AM=o,void 0!==e._$AP&&(t=o._$AU)!==n._$AU&&e._$AP(t);}if(t!==d||c){let o=e._$AA;for(;o!==t;){const t=directive_helpers_i(o).nextSibling;directive_helpers_i(l).insertBefore(o,d),o=t;}}}return e;},directive_helpers_u=(o,t,i=o)=>(o._$AI(t,i),o),directive_helpers_m={},directive_helpers_p=(o,t=directive_helpers_m)=>o._$AH=t,directive_helpers_M=o=>o._$AH,directive_helpers_h=o=>{o._$AR(),o._$AA.remove();},directive_helpers_j=o=>{o._$AR();};
;// ../../node_modules/lit-html/async-directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const async_directive_s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),async_directive_s(i,t);return!0;},async_directive_o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size);},async_directive_r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set();else if(e.has(i))break;e.add(i),async_directive_c(t);}};function async_directive_h(i){void 0!==this._$AN?(async_directive_o(this),this._$AM=i,async_directive_r(this)):this._$AM=i;}function async_directive_n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t){if(Array.isArray(r))for(let i=e;i<r.length;i++)async_directive_s(r[i],!1),async_directive_o(r[i]);else null!=r&&(async_directive_s(r,!1),async_directive_o(r));}else async_directive_s(this,i);}const async_directive_c=i=>{i.type==directive_t.CHILD&&(i._$AP??=async_directive_n,i._$AQ??=async_directive_h);};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),async_directive_r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(async_directive_s(this,i),async_directive_o(this));}setValue(t){if(directive_helpers_r(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}
;// ../../node_modules/lit/async-directive.js

;// ../../node_modules/@lit-labs/signals/lib/watch.js
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let watch_o=!1;const watch_n=new Signal.subtle.Watcher(async()=>{watch_o||(watch_o=!0,queueMicrotask(()=>{watch_o=!1;for(const i of watch_n.getPending())i.get();watch_n.watch();}));});class watch_r extends async_directive_f{_$S_(){var i,t;void 0===this._$Sm&&(this._$Sj=new Signal.Computed(()=>{var i;const t=null===(i=this._$SW)||void 0===i?void 0:i.get();return this.setValue(t),t;}),this._$Sm=null!==(t=null===(i=this._$Sk)||void 0===i?void 0:i.h)&&void 0!==t?t:watch_n,this._$Sm.watch(this._$Sj),Signal.subtle.untrack(()=>{var i;return null===(i=this._$Sj)||void 0===i?void 0:i.get();}));}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0);}render(i){return Signal.subtle.untrack(()=>i.get());}update(i,[t]){var o,n;return null!==(o=this._$Sk)&&void 0!==o||(this._$Sk=null===(n=i.options)||void 0===n?void 0:n.host),t!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=t,this._$S_(),Signal.subtle.untrack(()=>this._$SW.get());}disconnected(){this._$Sp();}reconnected(){this._$S_();}}const watch_h=directive_e(watch_r);
;// ../../node_modules/lit/html.js

;// ../../node_modules/@lit-labs/signals/lib/html-tag.js
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const html_tag_m=o=>(t,...m)=>o(t,...m.map(o=>o instanceof Signal.State||o instanceof Signal.Computed?watch_h(o):o)),html_tag_l=html_tag_m(lit_html_b),html_tag_r=html_tag_m(w);
;// ../../node_modules/@lit-labs/signals/index.js
/* unused harmony import specifier */ var signals_t;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const signals_l=Signal.State,signals_o=Signal.Computed,signals_r=(l,o)=>new Signal.State(l,o),signals_i=(l,o)=>new signals_t.Computed(l,o);
;// ./src/autofill/content/components/signals/selected-cipher.ts

const selected_cipher_selectedCipher = signals_r(null);

;// ./src/autofill/content/components/cipher/cipher-action.ts




function CipherAction({ cipherId, handleAction = () => {
    /* no-op */
}, i18n, itemName, notificationType, theme, username, }) {
    const selectCipherHandleAction = (e) => {
        selected_cipher_selectedCipher.set(cipherId);
        try {
            handleAction(e);
        }
        finally {
            selected_cipher_selectedCipher.set(null);
        }
    };
    return notificationType === NotificationTypes.Change
        ? BadgeButton({
            buttonAction: selectCipherHandleAction,
            buttonText: i18n.notificationUpdate,
            itemName,
            theme,
            username,
        })
        : EditButton({
            buttonAction: handleAction,
            buttonText: i18n.notificationEditTooltip,
            theme,
        });
}

;// ./src/autofill/content/components/cipher/cipher-icon.ts



/**
 * @param {string} props.color contextual color override if no icon URI is available
 * @param {string} props.size valid CSS `width` value, represents the width-basis of the graphic, with height maintaining original aspect-ratio
 */
function CipherIcon({ color, size, theme, uri }) {
    const iconClass = cipherIconStyle({ width: size });
    return uri
        ? lit_html_b `<img class=${iconClass} src=${uri} />`
        : lit_html_b `<span class=${iconClass}>${Globe({ color, theme })}</span>`;
}
const cipherIconStyle = ({ width }) => css `
  width: ${width};
  height: fit-content;
  max-height: 24px; /* fallback for Safari */
`;

;// ./src/autofill/content/components/cipher/types.ts
const CipherTypes = {
    Login: 1,
    SecureNote: 2,
    Card: 3,
    Identity: 4,
};
const CipherRepromptTypes = {
    None: 0,
    Password: 1,
};
const OrganizationCategories = {
    business: "business",
    family: "family",
};

;// ./src/autofill/content/components/cipher/cipher-indicator-icons.ts





const cipherIndicatorIconsMap = {
    [OrganizationCategories.business]: Business,
    [OrganizationCategories.family]: Family,
};
function CipherInfoIndicatorIcons({ organizationCategories = [], theme, }) {
    return lit_html_b `
    <span class=${cipherInfoIndicatorIconsStyles}>
      ${organizationCategories.map((name) => { var _a; return (_a = cipherIndicatorIconsMap[name]) === null || _a === void 0 ? void 0 : _a.call(cipherIndicatorIconsMap, { color: themes[theme].text.muted, theme }); })}
    </span>
  `;
}
const cipherInfoIndicatorIconsStyles = css `
  > svg {
    width: fit-content;
    height: 12px;
  }
`;

;// ./src/autofill/content/components/cipher/cipher-info.ts




function CipherInfo({ cipher, theme }) {
    const { name, login, organizationCategories } = cipher;
    const hasIndicatorIcons = organizationCategories === null || organizationCategories === void 0 ? void 0 : organizationCategories.length;
    return lit_html_b `
    <div>
      <span title=${name} class=${cipherInfoPrimaryTextStyles(theme)}>
        ${[
        name,
        hasIndicatorIcons
            ? CipherInfoIndicatorIcons({
                theme,
                organizationCategories,
            })
            : A,
    ]}
      </span>

      ${(login === null || login === void 0 ? void 0 : login.username)
        ? lit_html_b `<span title=${login.username} class=${cipherInfoSecondaryTextStyles(theme)}
              >${login.username}</span
            >`
        : null}
    </div>
  `;
}
const cipherInfoPrimaryTextStyles = (theme) => css `
  ${typography.body2}

  gap: 2px;
  display: flex;
  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${themes[theme].text.main};
  font-weight: 500;
`;
const cipherInfoSecondaryTextStyles = (theme) => css `
  ${typography.helperMedium}

  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${themes[theme].text.muted};
  font-weight: 400;
`;

;// ./src/autofill/content/components/cipher/cipher-item.ts








const cipherIconWidth = "24px";
function CipherItem({ cipher, handleAction, i18n, notificationType, theme = ThemeTypes.Light, }) {
    const { icon, name, login } = cipher;
    const uri = (icon.imageEnabled && icon.image) || undefined;
    let cipherActionButton = null;
    if (notificationType === NotificationTypes.Change || notificationType === NotificationTypes.Add) {
        cipherActionButton = lit_html_b `<div>
      ${CipherAction({
            cipherId: cipher.id,
            handleAction,
            i18n,
            itemName: name,
            notificationType,
            theme,
            username: login === null || login === void 0 ? void 0 : login.username,
        })}
    </div>`;
    }
    return lit_html_b `
    <div class=${cipherItemStyles}>
      ${CipherIcon({ color: themes[theme].text.muted, size: cipherIconWidth, theme, uri })}
      ${CipherInfo({ theme, cipher })}
    </div>
    ${cipherActionButton}
  `;
}
const cipherItemStyles = css `
  gap: ${spacing["2"]};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;

  > img,
  > span {
    display: flex;
  }

  > div {
    max-width: calc(100% - ${cipherIconWidth} - ${spacing["2"]});
  }
`;

;// ./src/autofill/content/components/rows/cipher-item-row.ts




function CipherItemRow({ cipher, i18n, notificationType, theme, handleAction, }) {
    return lit_html_b `
    <div class=${cipherItemRowStyles({ theme })}>
      ${CipherItem({
        cipher,
        i18n,
        notificationType,
        theme,
        handleAction,
    })}
    </div>
  `;
}
const cipherItemRowStyles = ({ theme }) => css `
  ${typography.body1}

  gap: ${spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  border-radius: ${spacing["2"]};
  border-color: ${themes[theme].secondary["300"]};
  background-color: ${themes[theme].background.DEFAULT};
  padding: ${spacing["2"]} ${spacing["3"]};
  min-height: min-content;
  min-height: 36px; /* fallback for Firefox, which doesn't support min-height: min-content on flex items */
  max-height: 52px;
  overflow-x: hidden;
  white-space: nowrap;
  color: ${themes[theme].text.main};
  font-weight: 400;

  > div {
    :first-child {
      flex: 3 3 75%;
      min-width: 25%;
    }

    :not(:first-child) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      max-width: 25%;

      > button {
        max-width: min-content;
      }
    }
  }
`;

;// ./src/autofill/content/components/notification/body.ts





const notification_body_componentClassPrefix = "notification-body";
const { css: notification_body_css } = createEmotion({
    key: notification_body_componentClassPrefix,
});
function NotificationBody({ ciphers = [], i18n, notificationType, theme = ThemeTypes.Light, handleEditOrUpdateAction, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return lit_html_b `
    <div class=${notificationBodyStyles({ isSafari, theme })}>
      ${ciphers.map((cipher) => CipherItemRow({
        cipher,
        theme,
        i18n,
        notificationType,
        handleAction: handleEditOrUpdateAction,
    }))}
    </div>
  `;
}
const notificationBodyStyles = ({ isSafari, theme }) => notification_body_css `
  ${typography.body1}

  gap: ${spacing["1.5"]};
  display: flex;
  flex-flow: column;
  background-color: ${themes[theme].background.alt};
  max-height: 123px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  color: ${themes[theme].text.main};
  font-weight: 400;

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }

  ${isSafari ? scrollbarStyles(theme).safari : scrollbarStyles(theme).default}
`;

;// ../../libs/common/src/billing/enums/discount-tier-type.enum.ts
const DiscountTierType = Object.freeze({
    Premium: "Premium",
    Families: "Families",
});

;// ../../libs/common/src/billing/enums/initiation-path.enum.ts
const InitiationPath = Object.freeze({
    RegistrationForm: "Registration form",
    PasswordManagerTrialFromMarketingWebsite: "Password Manager trial from marketing website",
    SecretsManagerTrialFromMarketingWebsite: "Secrets Manager trial from marketing website",
    NewOrganizationCreationInProduct: "New organization creation in-product",
    UpgradeInProduct: "Upgrade in-product",
    SalesAssistedTrialFromAdminPortal: "Sales assisted trial from admin portal",
});

;// ../../libs/common/src/billing/enums/payment-method-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["Card"] = 0] = "Card";
    PaymentMethodType[PaymentMethodType["BankAccount"] = 1] = "BankAccount";
    PaymentMethodType[PaymentMethodType["PayPal"] = 2] = "PayPal";
    PaymentMethodType[PaymentMethodType["BitPay"] = 3] = "BitPay";
    PaymentMethodType[PaymentMethodType["Credit"] = 4] = "Credit";
    PaymentMethodType[PaymentMethodType["WireTransfer"] = 5] = "WireTransfer";
    PaymentMethodType[PaymentMethodType["Check"] = 8] = "Check";
})(PaymentMethodType || (PaymentMethodType = {}));

;// ../../libs/common/src/billing/enums/plan-sponsorship-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanSponsorshipType;
(function (PlanSponsorshipType) {
    PlanSponsorshipType[PlanSponsorshipType["FamiliesForEnterprise"] = 0] = "FamiliesForEnterprise";
})(PlanSponsorshipType || (PlanSponsorshipType = {}));

;// ../../libs/common/src/billing/enums/plan-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanType;
(function (PlanType) {
    PlanType[PlanType["Free"] = 0] = "Free";
    PlanType[PlanType["FamiliesAnnually2019"] = 1] = "FamiliesAnnually2019";
    PlanType[PlanType["TeamsMonthly2019"] = 2] = "TeamsMonthly2019";
    PlanType[PlanType["TeamsAnnually2019"] = 3] = "TeamsAnnually2019";
    PlanType[PlanType["EnterpriseMonthly2019"] = 4] = "EnterpriseMonthly2019";
    PlanType[PlanType["EnterpriseAnnually2019"] = 5] = "EnterpriseAnnually2019";
    PlanType[PlanType["Custom"] = 6] = "Custom";
    PlanType[PlanType["FamiliesAnnually2025"] = 7] = "FamiliesAnnually2025";
    PlanType[PlanType["TeamsMonthly2020"] = 8] = "TeamsMonthly2020";
    PlanType[PlanType["TeamsAnnually2020"] = 9] = "TeamsAnnually2020";
    PlanType[PlanType["EnterpriseMonthly2020"] = 10] = "EnterpriseMonthly2020";
    PlanType[PlanType["EnterpriseAnnually2020"] = 11] = "EnterpriseAnnually2020";
    PlanType[PlanType["TeamsMonthly2023"] = 12] = "TeamsMonthly2023";
    PlanType[PlanType["TeamsAnnually2023"] = 13] = "TeamsAnnually2023";
    PlanType[PlanType["EnterpriseMonthly2023"] = 14] = "EnterpriseMonthly2023";
    PlanType[PlanType["EnterpriseAnnually2023"] = 15] = "EnterpriseAnnually2023";
    PlanType[PlanType["TeamsStarter2023"] = 16] = "TeamsStarter2023";
    PlanType[PlanType["TeamsMonthly"] = 17] = "TeamsMonthly";
    PlanType[PlanType["TeamsAnnually"] = 18] = "TeamsAnnually";
    PlanType[PlanType["EnterpriseMonthly"] = 19] = "EnterpriseMonthly";
    PlanType[PlanType["EnterpriseAnnually"] = 20] = "EnterpriseAnnually";
    PlanType[PlanType["TeamsStarter"] = 21] = "TeamsStarter";
    PlanType[PlanType["FamiliesAnnually"] = 22] = "FamiliesAnnually";
})(PlanType || (PlanType = {}));

;// ../../libs/common/src/billing/enums/transaction-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Charge"] = 0] = "Charge";
    TransactionType[TransactionType["Credit"] = 1] = "Credit";
    TransactionType[TransactionType["PromotionalCredit"] = 2] = "PromotionalCredit";
    TransactionType[TransactionType["ReferralCredit"] = 3] = "ReferralCredit";
    TransactionType[TransactionType["Refund"] = 4] = "Refund";
})(TransactionType || (TransactionType = {}));

;// ../../node_modules/@bitwarden/commercial-sdk-internal/bitwarden_wasm_internal_bg.js
/**
 * Client for PAM access connector operations.
 */class AccessConnectorsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AccessConnectorsClient.prototype);obj.__wbg_ptr=ptr;AccessConnectorsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AccessConnectorsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_accessconnectorsclient_free(ptr,0);}/**
     * Assigns a target system to a connector, so it may rotate credentials against that target.
     * @param {OrganizationId} organization_id
     * @param {AccessConnectorId} id
     * @param {TargetSystemId} target_system_id
     * @returns {Promise<void>}
     */assign_target(organization_id,id,target_system_id){const ret=wasm.accessconnectorsclient_assign_target(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id),addHeapObject(target_system_id));return takeObject(ret);}/**
     * Permanently deletes a connector and invalidates its credential. The connector held the
     * plaintext organization key, so a suspected compromise still needs that key rotated.
     * @param {OrganizationId} organization_id
     * @param {AccessConnectorId} id
     * @returns {Promise<void>}
     */delete(organization_id,id){const ret=wasm.accessconnectorsclient_delete(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Disables a connector, so it cannot authenticate or claim jobs. Reversible with
     * [`enable`](AccessConnectorsClient::enable); use [`delete`](AccessConnectorsClient::delete)
     * to retire it for good.
     * @param {OrganizationId} organization_id
     * @param {AccessConnectorId} id
     * @returns {Promise<void>}
     */disable(organization_id,id){const ret=wasm.accessconnectorsclient_disable(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Re-enables a disabled connector so it can authenticate and claim jobs again.
     * @param {OrganizationId} organization_id
     * @param {AccessConnectorId} id
     * @returns {Promise<void>}
     */enable(organization_id,id){const ret=wasm.accessconnectorsclient_enable(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Reads one connector with its recent rotation activity.
     * @param {OrganizationId} organization_id
     * @param {AccessConnectorId} id
     * @returns {Promise<AccessConnectorDetail>}
     */get(organization_id,id){const ret=wasm.accessconnectorsclient_get(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Lists the organization's access connectors.
     * @param {OrganizationId} organization_id
     * @returns {Promise<AccessConnector[]>}
     */list(organization_id){const ret=wasm.accessconnectorsclient_list(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}/**
     * Registers a connector and returns its one-time token; see
     * [`AccessConnectorRegistrationResponse::token`].
     * @param {OrganizationId} organization_id
     * @param {string} name
     * @returns {Promise<AccessConnectorRegistrationResponse>}
     */register(organization_id,name){const ptr0=passStringToWasm0(name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.accessconnectorsclient_register(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0);return takeObject(ret);}/**
     * Removes a target-system assignment from a connector.
     * @param {OrganizationId} organization_id
     * @param {AccessConnectorId} id
     * @param {TargetSystemId} target_system_id
     * @returns {Promise<void>}
     */unassign_target(organization_id,id,target_system_id){const ret=wasm.accessconnectorsclient_unassign_target(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id),addHeapObject(target_system_id));return takeObject(ret);}}if(Symbol.dispose)AccessConnectorsClient.prototype[Symbol.dispose]=AccessConnectorsClient.prototype.free;/**
 * Client for a requester's PAM access requests.
 */class AccessRequestsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AccessRequestsClient.prototype);obj.__wbg_ptr=ptr;AccessRequestsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AccessRequestsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_accessrequestsclient_free(ptr,0);}/**
     * Activates an approved request, minting and returning the resulting lease.
     * @param {AccessRequestId} id
     * @returns {Promise<AccessLeaseView>}
     */activate(id){const ret=wasm.accessrequestsclient_activate(this.__wbg_ptr,addHeapObject(id));return takeObject(ret);}/**
     * Cancels the caller's own request while it is pending, or approved but not yet activated.
     * @param {AccessRequestId} id
     * @returns {Promise<void>}
     */cancel(id){const ret=wasm.accessrequestsclient_cancel(this.__wbg_ptr,addHeapObject(id));return takeObject(ret);}/**
     * Reads the caller's current access state for a cipher, for the cipher-view banner and the
     * vault-row badge.
     * @param {CipherId} cipher_id
     * @returns {Promise<CipherAccessStateView>}
     */cipher_access_state(cipher_id){const ret=wasm.accessrequestsclient_cipher_access_state(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Retrieves a single access request by ID.
     * @param {AccessRequestId} id
     * @returns {Promise<AccessRequestView>}
     */get(id){const ret=wasm.accessrequestsclient_get(this.__wbg_ptr,addHeapObject(id));return takeObject(ret);}/**
     * Lists the caller's own access requests.
     * @returns {Promise<AccessRequestView[]>}
     */list_mine(){const ret=wasm.accessrequestsclient_list_mine(this.__wbg_ptr);return takeObject(ret);}/**
     * Resolves the approval outcome for a cipher without submitting a request, so the client can
     * show the right form before the requester commits.
     * @param {CipherId} cipher_id
     * @returns {Promise<AccessPreCheckView>}
     */pre_check(cipher_id){const ret=wasm.accessrequestsclient_pre_check(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Validates and opens an access request for a cipher. Run [`pre_check`](Self::pre_check)
     * first to know which fields [`AccessRequestCreateRequest`] expects.
     * @param {CipherId} cipher_id
     * @param {AccessRequestCreateRequest} request
     * @returns {Promise<AccessRequestResultView>}
     */request(cipher_id,request){const ret=wasm.accessrequestsclient_request(this.__wbg_ptr,addHeapObject(cipher_id),addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)AccessRequestsClient.prototype[Symbol.dispose]=AccessRequestsClient.prototype.free;/**
 * Client for PAM access rule CRUD operations.
 */class AccessRulesClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AccessRulesClient.prototype);obj.__wbg_ptr=ptr;AccessRulesClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AccessRulesClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_accessrulesclient_free(ptr,0);}/**
     * The ungated collections that expose this rule's ciphers without a lease.
     *
     * Returns collections, not ciphers, since the caller may be unable to decrypt them. A missing
     * rule answers empty, so this never fails with [`NotFound`](AccessRuleError::NotFound).
     * @param {OrganizationId} organization_id
     * @param {AccessRuleId} id
     * @returns {Promise<CollectionId[]>}
     */bypassable_ciphers(organization_id,id){const ret=wasm.accessrulesclient_bypassable_ciphers(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Validates and creates a new access rule.
     * @param {OrganizationId} organization_id
     * @param {AccessRuleAddEditRequest} request
     * @returns {Promise<AccessRuleView>}
     */create(organization_id,request){const ret=wasm.accessrulesclient_create(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(request));return takeObject(ret);}/**
     * Deletes an access rule. Fails with [`NotFound`](AccessRuleError::NotFound) for an
     * already-gone rule.
     * @param {OrganizationId} organization_id
     * @param {AccessRuleId} id
     * @returns {Promise<void>}
     */delete(organization_id,id){const ret=wasm.accessrulesclient_delete(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Retrieves a single access rule by ID. Fails with
     * [`NotFound`](AccessRuleError::NotFound) for a rule not visible to the caller.
     * @param {OrganizationId} organization_id
     * @param {AccessRuleId} id
     * @returns {Promise<AccessRuleView>}
     */get(organization_id,id){const ret=wasm.accessrulesclient_get(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Lists all access rules for an organization.
     * @param {OrganizationId} organization_id
     * @returns {Promise<AccessRuleView[]>}
     */list(organization_id){const ret=wasm.accessrulesclient_list(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}/**
     * Enables or disables a rule; no other field changes.
     *
     * Takes the rule as the caller already holds it, saving a read before the write.
     * @param {OrganizationId} organization_id
     * @param {AccessRuleView} rule
     * @param {boolean} enabled
     * @returns {Promise<AccessRuleView>}
     */set_enabled(organization_id,rule,enabled){const ret=wasm.accessrulesclient_set_enabled(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(rule),enabled);return takeObject(ret);}/**
     * Validates and updates an existing access rule. Fails with
     * [`NotFound`](AccessRuleError::NotFound) for a rule deleted before the write landed.
     * @param {OrganizationId} organization_id
     * @param {AccessRuleId} id
     * @param {AccessRuleAddEditRequest} request
     * @returns {Promise<AccessRuleView>}
     */update(organization_id,id,request){const ret=wasm.accessrulesclient_update(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id),addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)AccessRulesClient.prototype[Symbol.dispose]=AccessRulesClient.prototype.free;/**
 * Client for a PAM approver's queue. The requester side is
 * [`AccessRequestsClient`](crate::AccessRequestsClient).
 */class ApprovalsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ApprovalsClient.prototype);obj.__wbg_ptr=ptr;ApprovalsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ApprovalsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_approvalsclient_free(ptr,0);}/**
     * Records a decision on a pending access request.
     *
     * The response guarantees only `status`, `resolved_at` and the new decision, so merge it onto
     * the row already held instead of replacing it.
     * @param {AccessRequestId} id
     * @param {AccessDecisionRequest} request
     * @returns {Promise<AccessRequestView>}
     */decide(id,request){const ret=wasm.approvalsclient_decide(this.__wbg_ptr,addHeapObject(id),addHeapObject(request));return takeObject(ret);}/**
     * Lists the decided access requests for collections the caller manages.
     * @returns {Promise<AccessRequestView[]>}
     */list_history(){const ret=wasm.approvalsclient_list_history(this.__wbg_ptr);return takeObject(ret);}/**
     * Lists the pending access requests awaiting the caller's decision, in collections the caller
     * can manage.
     * @returns {Promise<AccessRequestView[]>}
     */list_inbox(){const ret=wasm.approvalsclient_list_inbox(this.__wbg_ptr);return takeObject(ret);}/**
     * Revokes an approved access request the requester has not started. The server records it as
     * the approver's deny decision, with the reason shown to the requester.
     * @param {AccessRequestId} id
     * @param {AccessRequestRevokeRequest} request
     * @returns {Promise<void>}
     */revoke(id,request){const ret=wasm.approvalsclient_revoke(this.__wbg_ptr,addHeapObject(id),addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)ApprovalsClient.prototype[Symbol.dispose]=ApprovalsClient.prototype.free;/**
 * Wrapper for attachment admin operations. Uses the admin server API endpoints and does
 * not modify local state.
 */class AttachmentAdminClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AttachmentAdminClient.prototype);obj.__wbg_ptr=ptr;AttachmentAdminClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AttachmentAdminClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_attachmentadminclient_free(ptr,0);}/**
     * Creates a new attachment slot on the server using the admin endpoint.
     * Affects server data only, does not modify local state.
     *
     * The caller must upload the encrypted bytes to [`CreatedAttachment::upload_url`]
     * using the transport in [`CreatedAttachment::file_upload_type`].
     *
     * If a later step fails after slot creation, the SDK best-effort deletes the
     * orphaned slot via the admin endpoint and returns the original error.
     * @param {CipherId} cipher_id
     * @param {CreateAttachmentRequest} request
     * @returns {Promise<CreatedAttachment>}
     */create_attachment(cipher_id,request){const ret=wasm.attachmentadminclient_create_attachment(this.__wbg_ptr,addHeapObject(cipher_id),addHeapObject(request));return takeObject(ret);}/**
     * Deletes an attachment from a cipher using the admin endpoint.
     * Affects server data only, does not modify local state.
     * @param {CipherId} cipher_id
     * @param {string} attachment_id
     * @returns {Promise<Cipher>}
     */delete_attachment(cipher_id,attachment_id){const ptr0=passStringToWasm0(attachment_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.attachmentadminclient_delete_attachment(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}/**
     * Fetches the download URL for an attachment from the admin API. The admin client has
     * no local repository to fall back to on 404, so a server-side 404 is surfaced as
     * [`CipherAdminGetAttachmentDownloadUrlError::NotFound`] for the caller to handle.
     * @param {CipherId} cipher_id
     * @param {string} attachment_id
     * @returns {Promise<string>}
     */get_attachment_download_url(cipher_id,attachment_id){const ptr0=passStringToWasm0(attachment_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.attachmentadminclient_get_attachment_download_url(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)AttachmentAdminClient.prototype[Symbol.dispose]=AttachmentAdminClient.prototype.free;/**
 * Wrapper for attachment-specific cipher operations.
 */class AttachmentsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AttachmentsClient.prototype);obj.__wbg_ptr=ptr;AttachmentsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AttachmentsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_attachmentsclient_free(ptr,0);}/**
     * Returns a new client for performing attachment admin operations.
     * Uses the admin server API endpoints and does not modify local state.
     * @returns {AttachmentAdminClient}
     */admin(){const ret=wasm.attachmentsclient_admin(this.__wbg_ptr);return AttachmentAdminClient.__wrap(ret);}/**
     * Creates a new attachment slot on the server and updates local repository
     * state with the merged cipher returned by the server.
     *
     * The caller must upload the encrypted bytes to [`CreatedAttachment::upload_url`]
     * using the transport in [`CreatedAttachment::file_upload_type`].
     *
     * If a later step fails after slot creation, the SDK best-effort deletes the
     * orphaned slot and returns the original error.
     * @param {CipherId} cipher_id
     * @param {CreateAttachmentRequest} request
     * @returns {Promise<CreatedAttachment>}
     */create_attachment(cipher_id,request){const ret=wasm.attachmentsclient_create_attachment(this.__wbg_ptr,addHeapObject(cipher_id),addHeapObject(request));return takeObject(ret);}/**
     * @param {Cipher} cipher
     * @param {AttachmentView} attachment
     * @param {Uint8Array} encrypted_buffer
     * @returns {Uint8Array}
     */decrypt_buffer(cipher,attachment,encrypted_buffer){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(encrypted_buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.attachmentsclient_decrypt_buffer(retptr,this.__wbg_ptr,addHeapObject(cipher),addHeapObject(attachment),ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v2=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Deletes an attachment from a cipher, and updates the local repository with the new
     * cipher data returned from the API.
     * @param {CipherId} cipher_id
     * @param {string} attachment_id
     * @returns {Promise<Cipher>}
     */delete_attachment(cipher_id,attachment_id){const ptr0=passStringToWasm0(attachment_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.attachmentsclient_delete_attachment(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}/**
     * Returns the attachment download URL.
     *
     * With `emergency_access_id`, uses the emergency-access endpoint and never falls back.
     * Otherwise uses the cipher endpoint and falls back to the local repository on 404.
     * @param {CipherId} cipher_id
     * @param {string} attachment_id
     * @param {string | null} [emergency_access_id]
     * @returns {Promise<string>}
     */get_attachment_download_url(cipher_id,attachment_id,emergency_access_id){const ptr0=passStringToWasm0(attachment_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;var ptr1=isLikeNone(emergency_access_id)?0:passStringToWasm0(emergency_access_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;const ret=wasm.attachmentsclient_get_attachment_download_url(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0,ptr1,len1);return takeObject(ret);}/**
     * Returns a renewed upload URL for an attachment.
     * Does not modify the attachment slot.
     * @param {CipherId} cipher_id
     * @param {string} attachment_id
     * @returns {Promise<string>}
     */renew_file_upload_url(cipher_id,attachment_id){const ptr0=passStringToWasm0(attachment_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.attachmentsclient_renew_file_upload_url(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}/**
     * Upgrades a legacy v1 attachment to `CipherKey(AttachmentKey(Contents))`.
     *
     * Downloads and re-encrypts the attachment, creates a new slot, uploads the
     * new bytes, then deletes the old attachment. If the upload fails, it tries
     * to delete the new slot before returning the error. Returns the decrypted
     * cipher view.
     * @param {CipherId} cipher_id
     * @param {string} attachment_id
     * @returns {Promise<CipherView>}
     */upgrade_attachment(cipher_id,attachment_id){const ptr0=passStringToWasm0(attachment_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.attachmentsclient_upgrade_attachment(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)AttachmentsClient.prototype[Symbol.dispose]=AttachmentsClient.prototype.free;/**
 * Subclient containing auth functionality.
 */class AuthClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(AuthClient.prototype);obj.__wbg_ptr=ptr;AuthClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;AuthClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_authclient_free(ptr,0);}/**
     * Client for login functionality
     * @returns {LoginClient}
     */login(){const ret=wasm.authclient_login(this.__wbg_ptr);return LoginClient.__wrap(ret);}/**
     * Client for initializing user account cryptography and unlock methods after JIT provisioning
     * @returns {RegistrationClient}
     */registration(){const ret=wasm.authclient_registration(this.__wbg_ptr);return RegistrationClient.__wrap(ret);}/**
     * Client for send access functionality
     * @returns {SendAccessClient}
     */send_access(){const ret=wasm.authclient_send_access(this.__wbg_ptr);return SendAccessClient.__wrap(ret);}}if(Symbol.dispose)AuthClient.prototype[Symbol.dispose]=AuthClient.prototype.free;/**
 * Indicates the authentication strategy to use when accessing a Send
 * @enum {0 | 1 | 2}
 */const AuthType=Object.freeze({/**
     * Email-based OTP authentication
     */Email:0,"0":"Email",/**
     * Password-based authentication
     */Password:1,"1":"Password",/**
     * No authentication required
     */None:2,"2":"None"});/**
 * The current biometric capability state for a specific user on this client.
 * @enum {0 | 1 | 2 | 3}
 */const BiometricsStatus=Object.freeze({/**
     * Biometrics is available and can be used immediately.
     */Available:0,"0":"Available",/**
     * Biometrics is supported, but user interaction is required before unlock can proceed.
     */UnlockNeeded:1,"1":"UnlockNeeded",/**
     * Biometrics hardware or platform support is unavailable.
     */HardwareUnavailable:2,"2":"HardwareUnavailable",/**
     * Biometrics is supported but not enabled for this user.
     */NotEnabled:3,"3":"NotEnabled"});/**
 * @enum {300 | 301 | 302 | 303 | 304 | 305}
 */const CardLinkedIdType=Object.freeze({CardholderName:300,"300":"CardholderName",ExpMonth:301,"301":"ExpMonth",ExpYear:302,"302":"ExpYear",Code:303,"303":"Code",Brand:304,"304":"Brand",Number:305,"305":"Number"});/**
 * Client for performing admin operations on ciphers. Unlike the regular CiphersClient,
 * this client uses the admin server API endpoints, and does not modify local state.
 */class CipherAdminClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CipherAdminClient.prototype);obj.__wbg_ptr=ptr;CipherAdminClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CipherAdminClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_cipheradminclient_free(ptr,0);}/**
     * Creates a new [Cipher] for an organization, using the admin server endpoints.
     * Creates the Cipher on the server only, does not store it to local state.
     * @param {CipherCreateRequest} request
     * @returns {Promise<CipherView>}
     */create(request){const ret=wasm.cipheradminclient_create(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Deletes the Cipher with the matching CipherId from the server, using the admin endpoint.
     * Affects server data only, does not modify local state.
     * @param {CipherId} cipher_id
     * @returns {Promise<void>}
     */delete(cipher_id){const ret=wasm.cipheradminclient_delete(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Deletes all Cipher objects with a matching CipherId from the server, using the admin
     * endpoint. Affects server data only, does not modify local state.
     * @param {CipherId[]} cipher_ids
     * @param {OrganizationId} organization_id
     * @returns {Promise<void>}
     */delete_many(cipher_ids,organization_id){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cipheradminclient_delete_many(this.__wbg_ptr,ptr0,len0,addHeapObject(organization_id));return takeObject(ret);}/**
     * Edit an existing [Cipher] and save it to the server.
     * @param {CipherEditRequest} request
     * @param {CipherView} original_cipher_view
     * @returns {Promise<CipherView>}
     */edit(request,original_cipher_view){const ret=wasm.cipheradminclient_edit(this.__wbg_ptr,addHeapObject(request),addHeapObject(original_cipher_view));return takeObject(ret);}/**
     * Fetches and decrypts all ciphers assigned to the current user for an organization.
     * @param {OrganizationId} org_id
     * @returns {Promise<ListOrganizationCiphersResult>}
     */list_assigned_org_ciphers(org_id){const ret=wasm.cipheradminclient_list_assigned_org_ciphers(this.__wbg_ptr,addHeapObject(org_id));return takeObject(ret);}/**
     * Get all ciphers for an organization.
     * @param {OrganizationId} org_id
     * @param {boolean} include_member_items
     * @returns {Promise<ListOrganizationCiphersResult>}
     */list_org_ciphers(org_id,include_member_items){const ret=wasm.cipheradminclient_list_org_ciphers(this.__wbg_ptr,addHeapObject(org_id),include_member_items);return takeObject(ret);}/**
     * Fetches all Login ciphers for an organization and decrypts them to full [crate::CipherView].
     * @param {OrganizationId} org_id
     * @returns {Promise<DecryptCipherResult>}
     */list_org_login_ciphers(org_id){const ret=wasm.cipheradminclient_list_org_login_ciphers(this.__wbg_ptr,addHeapObject(org_id));return takeObject(ret);}/**
     * Restores a soft-deleted cipher on the server, using the admin endpoint.
     * @param {CipherId} cipher_id
     * @returns {Promise<CipherView>}
     */restore(cipher_id){const ret=wasm.cipheradminclient_restore(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Restores multiple soft-deleted ciphers on the server.
     * @param {CipherId[]} cipher_ids
     * @param {OrganizationId} org_id
     * @returns {Promise<DecryptCipherListResult>}
     */restore_many(cipher_ids,org_id){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cipheradminclient_restore_many(this.__wbg_ptr,ptr0,len0,addHeapObject(org_id));return takeObject(ret);}/**
     * Soft-deletes the Cipher with the matching CipherId from the server, using the admin
     * endpoint. Affects server data only, does not modify local state.
     * @param {CipherId} cipher_id
     * @returns {Promise<void>}
     */soft_delete(cipher_id){const ret=wasm.cipheradminclient_soft_delete(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Soft-deletes all Cipher objects for the given CipherIds from the server, using the admin
     * endpoint. Affects server data only, does not modify local state.
     * @param {CipherId[]} cipher_ids
     * @param {OrganizationId} organization_id
     * @returns {Promise<void>}
     */soft_delete_many(cipher_ids,organization_id){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cipheradminclient_soft_delete_many(this.__wbg_ptr,ptr0,len0,addHeapObject(organization_id));return takeObject(ret);}/**
     * Adds the cipher matched by [CipherId] to any number of collections on the server.
     * @param {CipherId} cipher_id
     * @param {CollectionId[]} collection_ids
     * @returns {Promise<CipherView>}
     */update_collection(cipher_id,collection_ids){const ptr0=passArrayJsValueToWasm0(collection_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cipheradminclient_update_collection(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)CipherAdminClient.prototype[Symbol.dispose]=CipherAdminClient.prototype.free;/**
 * @enum {0 | 1}
 */const CipherRepromptType=Object.freeze({None:0,"0":"None",Password:1,"1":"Password"});/**
 * Client for evaluating credential risk for login ciphers.
 */class CipherRiskClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CipherRiskClient.prototype);obj.__wbg_ptr=ptr;CipherRiskClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CipherRiskClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_cipherriskclient_free(ptr,0);}/**
     * Evaluate security risks for multiple login ciphers concurrently.
     *
     * For each cipher:
     * 1. Calculates password strength (0-4) using zxcvbn with cipher-specific context
     * 2. Optionally checks if the password has been exposed via Have I Been Pwned API
     * 3. Counts how many times the password is reused in the provided `password_map`
     *
     * Returns a vector of `CipherRisk` results, one for each input cipher.
     *
     * ## HIBP Check Results (`exposed_result` field)
     *
     * The `exposed_result` field uses the `ExposedPasswordResult` enum with three possible states:
     * - `NotChecked`: Password exposure check was not performed because:
     *   - `check_exposed` option was `false`, or
     *   - Password was empty
     * - `Found(n)`: Successfully checked via HIBP API, password appears in `n` data breaches
     * - `Error(msg)`: HIBP API request failed with error message `msg`
     *
     * # Errors
     *
     * This method only returns `Err` for internal logic failures. HIBP API errors are
     * captured per-cipher in the `exposed_result` field as `ExposedPasswordResult::Error(msg)`.
     * @param {CipherLoginDetails[]} login_details
     * @param {CipherRiskOptions} options
     * @returns {Promise<CipherRiskResult[]>}
     */compute_risk(login_details,options){const ptr0=passArrayJsValueToWasm0(login_details,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cipherriskclient_compute_risk(this.__wbg_ptr,ptr0,len0,addHeapObject(options));return takeObject(ret);}/**
     * Build password reuse map for a list of login ciphers.
     *
     * Returns a map where keys are passwords and values are the number of times
     * each password appears in the provided list. This map can be passed to `compute_risk()`
     * to enable password reuse detection.
     * @param {CipherLoginDetails[]} login_details
     * @returns {PasswordReuseMap}
     */password_reuse_map(login_details){const ptr0=passArrayJsValueToWasm0(login_details,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cipherriskclient_password_reuse_map(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)CipherRiskClient.prototype[Symbol.dispose]=CipherRiskClient.prototype.free;/**
 * @enum {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}
 */const CipherType=Object.freeze({Login:1,"1":"Login",SecureNote:2,"2":"SecureNote",Card:3,"3":"Card",Identity:4,"4":"Identity",SshKey:5,"5":"SshKey",BankAccount:6,"6":"BankAccount",DriversLicense:7,"7":"DriversLicense",Passport:8,"8":"Passport"});class CiphersClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CiphersClient.prototype);obj.__wbg_ptr=ptr;CiphersClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CiphersClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_ciphersclient_free(ptr,0);}/**
     * Returns a new client for performing admin operations.
     * Uses the admin server API endpoints and does not modify local state.
     * @returns {CipherAdminClient}
     */admin(){const ret=wasm.ciphersclient_admin(this.__wbg_ptr);return CipherAdminClient.__wrap(ret);}/**
     * Updates collection membership for multiple [`Cipher`](crate::Cipher) objects.
     *
     * When `remove_collections` is `true`, the given collection IDs are removed from each cipher.
     * When `false`, they are added without introducing duplicates.
     * @param {OrganizationId} organization_id
     * @param {CipherId[]} cipher_ids
     * @param {CollectionId[]} collection_ids
     * @param {boolean} remove_collections
     * @returns {Promise<void>}
     */bulk_update_collections(organization_id,cipher_ids,collection_ids,remove_collections){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(collection_ids,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_bulk_update_collections(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0,ptr1,len1,remove_collections);return takeObject(ret);}/**
     * Creates a new [Cipher] and saves it to the server.
     * @param {CipherCreateRequest} request
     * @returns {Promise<CipherView>}
     */create(request){const ret=wasm.ciphersclient_create(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * @param {Cipher} cipher
     * @returns {Promise<CipherView>}
     */decrypt(cipher){const ret=wasm.ciphersclient_decrypt(this.__wbg_ptr,addHeapObject(cipher));return takeObject(ret);}/**
     * @param {Cipher[]} ciphers
     * @returns {Promise<CipherListView[]>}
     */decrypt_list(ciphers){const ptr0=passArrayJsValueToWasm0(ciphers,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_decrypt_list(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Decrypt full cipher list
     * Returns both successfully fully decrypted ciphers and any that failed to decrypt
     * @param {Cipher[]} ciphers
     * @returns {Promise<DecryptCipherResult>}
     */decrypt_list_full_with_failures(ciphers){const ptr0=passArrayJsValueToWasm0(ciphers,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_decrypt_list_full_with_failures(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Decrypt cipher list with failures
     * Returns both successfully decrypted ciphers and any that failed to decrypt
     * @param {Cipher[]} ciphers
     * @returns {Promise<DecryptCipherListResult>}
     */decrypt_list_with_failures(ciphers){const ptr0=passArrayJsValueToWasm0(ciphers,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_decrypt_list_with_failures(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Deletes the [Cipher] with the matching [CipherId] from the server.
     * @param {CipherId} cipher_id
     * @returns {Promise<void>}
     */delete(cipher_id){const ret=wasm.ciphersclient_delete(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Deletes all [Cipher] objects with a matching [CipherId] from the server.
     * @param {CipherId[]} cipher_ids
     * @param {OrganizationId | null} [organization_id]
     * @returns {Promise<void>}
     */delete_many(cipher_ids,organization_id){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_delete_many(this.__wbg_ptr,ptr0,len0,isLikeNone(organization_id)?0:addHeapObject(organization_id));return takeObject(ret);}/**
     * Edit an existing [Cipher] and save it to the server.
     * @param {CipherEditRequest} request
     * @returns {Promise<CipherView>}
     */edit(request){const ret=wasm.ciphersclient_edit(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Edit a PAM-gated [`Cipher`] whose secrets were revealed under an active lease.
     *
     * [`CiphersClient::edit`] builds its original from local state, which for a gated cipher only
     * ever holds the partial copy, and so refuses. Pass the full view obtained from the
     * lease-authorised read as `original_cipher_view` — it is what password history is diffed
     * against.
     *
     * The returned view reflects what was persisted, so it is partial: the server withholds
     * secrets from a gated write-return. The caller keeps its own full copy in memory.
     * @param {CipherEditRequest} request
     * @param {CipherView} original_cipher_view
     * @returns {Promise<CipherView>}
     */edit_gated(request,original_cipher_view){const ret=wasm.ciphersclient_edit_gated(this.__wbg_ptr,addHeapObject(request),addHeapObject(original_cipher_view));return takeObject(ret);}/**
     * Update only `folder_id` and `favorite` on an existing [Cipher].
     *
     * Intended for users who do not have edit permissions on the cipher, but
     * are still allowed to change these personal organization fields.
     * @param {CipherPartialEditRequest} request
     * @returns {Promise<CipherView>}
     */edit_partial(request){const ret=wasm.ciphersclient_edit_partial(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * @param {CipherView} cipher_view
     * @returns {Promise<EncryptionContext>}
     */encrypt(cipher_view){const ret=wasm.ciphersclient_encrypt(this.__wbg_ptr,addHeapObject(cipher_view));return takeObject(ret);}/**
     * Encrypt a cipher with the provided key. This should only be used when rotating encryption
     * keys in the Web client.
     *
     * Until key rotation is fully implemented in the SDK, this method must be provided the new
     * symmetric key in base64 format. See PM-23084
     *
     * The cipher key is wrapped with the new key. A cipher key is generated if the cipher
     * does not already have one.
     *
     * Returns [`CipherError::AttachmentsWithoutKeys`] if any attachment lacks its own key.
     * @param {CipherView} cipher_view
     * @param {B64} new_key
     * @returns {Promise<EncryptionContext>}
     */encrypt_cipher_for_rotation(cipher_view,new_key){const ret=wasm.ciphersclient_encrypt_cipher_for_rotation(this.__wbg_ptr,addHeapObject(cipher_view),addHeapObject(new_key));return takeObject(ret);}/**
     * Encrypt a list of cipher views.
     *
     * This method attempts to encrypt all ciphers in the list. If any cipher
     * fails to encrypt, the entire operation fails and an error is returned.
     * @param {CipherView[]} cipher_views
     * @returns {Promise<EncryptionContext[]>}
     */encrypt_list(cipher_views){const ptr0=passArrayJsValueToWasm0(cipher_views,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_encrypt_list(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Get [Cipher] by ID from state and decrypt it to a [CipherView].
     * @param {CipherId} cipher_id
     * @returns {Promise<CipherView>}
     */get(cipher_id){const ret=wasm.ciphersclient_get(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Get all ciphers from state and decrypt them to full [CipherView], returning both
     * successes and failures. This method will not fail when some ciphers fail to decrypt,
     * allowing for graceful handling of corrupted or problematic cipher data.
     * @returns {Promise<DecryptCipherResult>}
     */get_all(){const ret=wasm.ciphersclient_get_all(this.__wbg_ptr);return takeObject(ret);}/**
     * Get all ciphers from state and decrypt them to [crate::CipherListView], returning both
     * successes and failures. This method will not fail when some ciphers fail to decrypt,
     * allowing for graceful handling of corrupted or problematic cipher data.
     * @returns {Promise<DecryptCipherListResult>}
     */list(){const ret=wasm.ciphersclient_list(this.__wbg_ptr);return takeObject(ret);}/**
     * Moves multiple [`Cipher`](crate::Cipher) objects to a folder, or clears their folder when
     * `folder_id` is `None`.
     * @param {CipherId[]} cipher_ids
     * @param {FolderId | null} [folder_id]
     * @returns {Promise<void>}
     */move_many(cipher_ids,folder_id){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_move_many(this.__wbg_ptr,ptr0,len0,isLikeNone(folder_id)?0:addHeapObject(folder_id));return takeObject(ret);}/**
     * @param {CipherView} cipher_view
     * @param {OrganizationId} organization_id
     * @returns {CipherView}
     */move_to_organization(cipher_view,organization_id){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.ciphersclient_move_to_organization(retptr,this.__wbg_ptr,addHeapObject(cipher_view),addHeapObject(organization_id));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Restores a soft-deleted cipher on the server.
     * @param {CipherId} cipher_id
     * @returns {Promise<CipherView>}
     */restore(cipher_id){const ret=wasm.ciphersclient_restore(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Restores multiple soft-deleted ciphers on the server.
     * @param {CipherId[]} cipher_ids
     * @returns {Promise<DecryptCipherListResult>}
     */restore_many(cipher_ids){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_restore_many(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Temporary method used to re-encrypt FIDO2 credentials for a cipher view.
     * Necessary until the TS clients utilize the SDK entirely for FIDO2 credentials management.
     * TS clients create decrypted FIDO2 credentials that need to be encrypted manually when
     * encrypting the rest of the CipherView.
     * TODO: Remove once TS passkey provider implementation uses SDK - PM-8313
     * @param {CipherView} cipher_view
     * @param {Fido2CredentialFullView[]} fido2_credentials
     * @returns {CipherView}
     */set_fido2_credentials(cipher_view,fido2_credentials){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(fido2_credentials,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.ciphersclient_set_fido2_credentials(retptr,this.__wbg_ptr,addHeapObject(cipher_view),ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Moves a cipher into an organization, adds it to collections, and calls the share_cipher API.
     * @param {CipherView} cipher_view
     * @param {OrganizationId} organization_id
     * @param {CollectionId[]} collection_ids
     * @param {CipherView | null} [original_cipher_view]
     * @returns {Promise<CipherView>}
     */share_cipher(cipher_view,organization_id,collection_ids,original_cipher_view){const ptr0=passArrayJsValueToWasm0(collection_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_share_cipher(this.__wbg_ptr,addHeapObject(cipher_view),addHeapObject(organization_id),ptr0,len0,isLikeNone(original_cipher_view)?0:addHeapObject(original_cipher_view));return takeObject(ret);}/**
     * Moves a group of ciphers into an organization, adds them to collections, and calls the
     * share_ciphers API.
     * @param {CipherView[]} cipher_views
     * @param {OrganizationId} organization_id
     * @param {CollectionId[]} collection_ids
     * @returns {Promise<CipherView[]>}
     */share_ciphers_bulk(cipher_views,organization_id,collection_ids){const ptr0=passArrayJsValueToWasm0(cipher_views,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(collection_ids,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_share_ciphers_bulk(this.__wbg_ptr,ptr0,len0,addHeapObject(organization_id),ptr1,len1);return takeObject(ret);}/**
     * Soft-deletes the [Cipher] with the matching [CipherId] from the server.
     * @param {CipherId} cipher_id
     * @returns {Promise<void>}
     */soft_delete(cipher_id){const ret=wasm.ciphersclient_soft_delete(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Soft-deletes all [Cipher] objects for the given [CipherId]s from the server.
     * @param {CipherId[]} cipher_ids
     * @param {OrganizationId | null} [organization_id]
     * @returns {Promise<void>}
     */soft_delete_many(cipher_ids,organization_id){const ptr0=passArrayJsValueToWasm0(cipher_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_soft_delete_many(this.__wbg_ptr,ptr0,len0,isLikeNone(organization_id)?0:addHeapObject(organization_id));return takeObject(ret);}/**
     * Adds the cipher matched by [CipherId] to any number of collections on the server.
     * @param {CipherId} cipher_id
     * @param {CollectionId[]} collection_ids
     * @returns {Promise<CipherView>}
     */update_collection(cipher_id,collection_ids){const ptr0=passArrayJsValueToWasm0(collection_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.ciphersclient_update_collection(this.__wbg_ptr,addHeapObject(cipher_id),ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)CiphersClient.prototype[Symbol.dispose]=CiphersClient.prototype.free;/**
 * Type of collection
 * @enum {0 | 1}
 */const CollectionType=Object.freeze({/**
     * Default collection type. Can be assigned by an organization to user(s) or group(s)
     */SharedCollection:0,"0":"SharedCollection",/**
     * Default collection assigned to a user for an organization that has
     * OrganizationDataOwnership (formerly PersonalOwnership) policy enabled.
     */DefaultUserCollection:1,"1":"DefaultUserCollection"});class CollectionViewNodeItem{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CollectionViewNodeItem.prototype);obj.__wbg_ptr=ptr;CollectionViewNodeItemFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CollectionViewNodeItemFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_collectionviewnodeitem_free(ptr,0);}/**
     * @returns {AncestorMap}
     */get_ancestors(){const ret=wasm.collectionviewnodeitem_get_ancestors(this.__wbg_ptr);return takeObject(ret);}/**
     * @returns {CollectionView[]}
     */get_children(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.collectionviewnodeitem_get_children(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @returns {CollectionView}
     */get_item(){const ret=wasm.collectionviewnodeitem_get_item(this.__wbg_ptr);return takeObject(ret);}/**
     * @returns {CollectionView | undefined}
     */get_parent(){const ret=wasm.collectionviewnodeitem_get_parent(this.__wbg_ptr);return takeObject(ret);}}if(Symbol.dispose)CollectionViewNodeItem.prototype[Symbol.dispose]=CollectionViewNodeItem.prototype.free;class CollectionViewTree{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CollectionViewTree.prototype);obj.__wbg_ptr=ptr;CollectionViewTreeFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CollectionViewTreeFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_collectionviewtree_free(ptr,0);}/**
     * @returns {CollectionViewNodeItem[]}
     */get_flat_items(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.collectionviewtree_get_flat_items(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {CollectionView} collection_view
     * @returns {CollectionViewNodeItem | undefined}
     */get_item_for_view(collection_view){const ret=wasm.collectionviewtree_get_item_for_view(this.__wbg_ptr,addHeapObject(collection_view));return ret===0?undefined:CollectionViewNodeItem.__wrap(ret);}/**
     * @returns {CollectionViewNodeItem[]}
     */get_root_items(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.collectionviewtree_get_root_items(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}if(Symbol.dispose)CollectionViewTree.prototype[Symbol.dispose]=CollectionViewTree.prototype.free;class CollectionsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CollectionsClient.prototype);obj.__wbg_ptr=ptr;CollectionsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CollectionsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_collectionsclient_free(ptr,0);}/**
     * @param {Collection} collection
     * @returns {CollectionView}
     */decrypt(collection){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.collectionsclient_decrypt(retptr,this.__wbg_ptr,addHeapObject(collection));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {Collection[]} collections
     * @returns {CollectionView[]}
     */decrypt_list(collections){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(collections,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.collectionsclient_decrypt_list(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v2=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Decrypts a list of collections, returning successes and failures separately.
     *
     * Unlike `decrypt_list`, a single collection that fails to decrypt (e.g. due to a missing
     * organization key) does not abort the entire batch — it is returned in `failures` instead.
     * @param {Collection[]} collections
     * @returns {DecryptCollectionListResult}
     */decrypt_list_with_failures(collections){const ptr0=passArrayJsValueToWasm0(collections,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.collectionsclient_decrypt_list_with_failures(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Encrypts a [CollectionView] into an encrypted [Collection] using the organization key.
     * @param {CollectionView} collection_view
     * @returns {Collection}
     */encrypt(collection_view){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.collectionsclient_encrypt(retptr,this.__wbg_ptr,addHeapObject(collection_view));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Encrypts a list of [CollectionView]s into encrypted [Collection]s using the organization
     * key.
     * @param {CollectionView[]} collection_views
     * @returns {Collection[]}
     */encrypt_list(collection_views){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(collection_views,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.collectionsclient_encrypt_list(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v2=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     *
     * Returns the vector of CollectionView objects in a tree structure based on its implemented
     * path().
     * @param {CollectionView[]} collections
     * @returns {CollectionViewTree}
     */get_collection_tree(collections){const ptr0=passArrayJsValueToWasm0(collections,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.collectionsclient_get_collection_tree(this.__wbg_ptr,ptr0,len0);return CollectionViewTree.__wrap(ret);}}if(Symbol.dispose)CollectionsClient.prototype[Symbol.dispose]=CollectionsClient.prototype.free;/**
 * Client for bitwarden licensed operations
 */class CommercialPasswordManagerClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CommercialPasswordManagerClient.prototype);obj.__wbg_ptr=ptr;CommercialPasswordManagerClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CommercialPasswordManagerClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_commercialpasswordmanagerclient_free(ptr,0);}/**
     * Privileged Access Management (PAM) operations
     * @returns {PamClient}
     */pam(){const ret=wasm.commercialpasswordmanagerclient_pam(this.__wbg_ptr);return PamClient.__wrap(ret);}/**
     * Vault item operations
     * @returns {CommercialVaultClient}
     */vault(){const ret=wasm.commercialpasswordmanagerclient_vault(this.__wbg_ptr);return CommercialVaultClient.__wrap(ret);}}if(Symbol.dispose)CommercialPasswordManagerClient.prototype[Symbol.dispose]=CommercialPasswordManagerClient.prototype.free;class CommercialVaultClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CommercialVaultClient.prototype);obj.__wbg_ptr=ptr;CommercialVaultClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CommercialVaultClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_commercialvaultclient_free(ptr,0);}}if(Symbol.dispose)CommercialVaultClient.prototype[Symbol.dispose]=CommercialVaultClient.prototype.free;/**
 * Tells you which cryptographic algorithms to use for the current account and environment.
 *
 * Some environments are restricted in which algorithms they may use — for example, government
 * (FedRAMP) deployments must use FIPS-approved algorithms. Ask this client which algorithm to use
 * instead of picking one yourself, so the choice stays correct as those rules change.
 */class CryptoCipherSuiteClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CryptoCipherSuiteClient.prototype);obj.__wbg_ptr=ptr;CryptoCipherSuiteClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CryptoCipherSuiteClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_cryptociphersuiteclient_free(ptr,0);}/**
     * Returns the KDF a new account should use in the current environment.
     *
     * In a FIPS (gov) environment the FIPS-approved PBKDF2 is used; otherwise the modern Argon2id
     * default.
     * @returns {Kdf}
     */default_kdf_for_new_account(){const ret=wasm.cryptociphersuiteclient_default_kdf_for_new_account(this.__wbg_ptr);return takeObject(ret);}/**
     * Returns whether the given KDF is allowed in the current environment.
     *
     * Intended for surfaces that let a user pick a KDF (e.g. the Change KDF settings screen): the
     * caller can validate or filter the options it offers. In a FIPS (gov) environment only PBKDF2
     * is allowed; otherwise every supported KDF is allowed.
     * @param {Kdf} kdf
     * @returns {boolean}
     */is_kdf_compliant(kdf){const ret=wasm.cryptociphersuiteclient_is_kdf_compliant(this.__wbg_ptr,addHeapObject(kdf));return ret!==0;}}if(Symbol.dispose)CryptoCipherSuiteClient.prototype[Symbol.dispose]=CryptoCipherSuiteClient.prototype.free;/**
 * A client for the crypto operations.
 */class CryptoClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CryptoClient.prototype);obj.__wbg_ptr=ptr;CryptoClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CryptoClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_cryptoclient_free(ptr,0);}/**
     * A stop gap-solution for decrypting with the local user data key, until the WASM client's
     * password generator history encryption and email forwarders encryption is fully migrated to
     * SDK.
     * @param {string} encrypted_plaintext
     * @returns {string}
     */decrypt_with_local_user_data_key(encrypted_plaintext){let deferred3_0;let deferred3_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(encrypted_plaintext,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.cryptoclient_decrypt_with_local_user_data_key(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr2=r0;var len2=r1;if(r3){ptr2=0;len2=0;throw takeObject(r2);}deferred3_0=ptr2;deferred3_1=len2;return getStringFromWasm0(ptr2,len2);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred3_0,deferred3_1,1);}}/**
     * Stops unlock from running local state migrations: the V1 to V2 PIN migration and the
     * ephemeral PIN envelope reseal.
     *
     * For applications running several clients for one user at once, e.g. a browser extension's
     * popups next to its background. Concurrent migrations race on the same state, so all but one
     * client should call this.
     */disable_local_unlock_migrations(){wasm.cryptoclient_disable_local_unlock_migrations(this.__wbg_ptr);}/**
     * A stop gap-solution for encrypting with the local user data key, until the WASM client's
     * password generator history encryption and email forwarders encryption is fully migrated to
     * SDK.
     * @param {string} plaintext
     * @returns {string}
     */encrypt_with_local_user_data_key(plaintext){let deferred3_0;let deferred3_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(plaintext,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.cryptoclient_encrypt_with_local_user_data_key(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr2=r0;var len2=r1;if(r3){ptr2=0;len2=0;throw takeObject(r2);}deferred3_0=ptr2;deferred3_1=len2;return getStringFromWasm0(ptr2,len2);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred3_0,deferred3_1,1);}}/**
     * Protects the current user key with the provided PIN. The result can be stored and later
     * used to initialize another client instance by using the PIN and the PIN key with
     * `initialize_user_crypto`.
     * @param {string} pin
     * @returns {EnrollPinResponse}
     */enroll_pin(pin){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(pin,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.cryptoclient_enroll_pin(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Protects the current user key with the provided PIN. The result can be stored and later
     * used to initialize another client instance by using the PIN and the PIN key with
     * `initialize_user_crypto`. The provided pin is encrypted with the user key.
     * @param {string} encrypted_pin
     * @returns {EnrollPinResponse}
     */enroll_pin_with_encrypted_pin(encrypted_pin){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(encrypted_pin,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.cryptoclient_enroll_pin_with_encrypted_pin(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Takes a raw key and returns the corresponding key id. This is used for the biometrics
     * subsystem and should be removed after moving over biometric management to the SDK.
     * @param {Uint8Array} key
     * @returns {Uint8Array | undefined}
     */static get_key_id_for_symmetric_key(key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.cryptoclient_get_key_id_for_symmetric_key(retptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}let v2;if(r0!==0){v2=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);}return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * ⚠️⚠️⚠️ HAZMAT WARNING: DO NOT USE THIS ⚠️⚠️⚠️
     *
     * Get the uses's decrypted encryption key. Note: It's very important
     * to keep this key safe, as it can be used to decrypt all of the user's data. It is
     * only permitted to use for a transition period where side effects such as biometrics
     * and never-lock are set from within the client code.
     * @returns {Promise<B64>}
     */get_user_encryption_key(){const ret=wasm.cryptoclient_get_user_encryption_key(this.__wbg_ptr);return takeObject(ret);}/**
     * Initialization method for the organization crypto. Needs to be called after
     * `initialize_user_crypto` but before any other crypto operations.
     * @param {InitOrgCryptoRequest} req
     * @returns {Promise<void>}
     */initialize_org_crypto(req){const ret=wasm.cryptoclient_initialize_org_crypto(this.__wbg_ptr,addHeapObject(req));return takeObject(ret);}/**
     * Initialization method for the user crypto. Needs to be called before any other crypto
     * operations.
     * @param {InitUserCryptoRequest} req
     * @returns {Promise<void>}
     */initialize_user_crypto(req){const ret=wasm.cryptoclient_initialize_user_crypto(this.__wbg_ptr,addHeapObject(req));return takeObject(ret);}/**
     * Create the data necessary to update the user's kdf settings. The user's encryption key is
     * re-encrypted for the password under the new kdf settings. This returns the re-encrypted
     * user key and the new password hash but does not update sdk state.
     *
     * Note: This is deprecated. Please use the user-crypto-management client instead.
     * @param {string} password
     * @param {Kdf} kdf
     * @returns {Promise<UpdateKdfResponse>}
     */make_update_kdf(password,kdf){const ptr0=passStringToWasm0(password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.cryptoclient_make_update_kdf(this.__wbg_ptr,ptr0,len0,addHeapObject(kdf));return takeObject(ret);}/**
     * Re-initialize the user's cryptographic state during an unlock session.
     *
     * Requires the SDK to be unlocked. Replaces the in-memory account
     * cryptographic state with the provided one, and upgrades the active user key from V1 to V2.
     * @param {ReinitUserCryptoRequest} req
     * @returns {Promise<void>}
     */reinit_user_crypto(req){const ret=wasm.cryptoclient_reinit_user_crypto(this.__wbg_ptr,addHeapObject(req));return takeObject(ret);}}if(Symbol.dispose)CryptoClient.prototype[Symbol.dispose]=CryptoClient.prototype.free;/**
 * Client for the key management work that runs on every sync.
 */class CryptoSyncHandlerClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(CryptoSyncHandlerClient.prototype);obj.__wbg_ptr=ptr;CryptoSyncHandlerClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;CryptoSyncHandlerClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_cryptosynchandlerclient_free(ptr,0);}/**
     * Runs the key management sync work. Call this after each sync, once the user's cryptographic
     * state has been applied.
     * @param {CryptoSyncData} data
     * @returns {Promise<void>}
     */on_sync(data){const ret=wasm.cryptosynchandlerclient_on_sync(this.__wbg_ptr,addHeapObject(data));return takeObject(ret);}}if(Symbol.dispose)CryptoSyncHandlerClient.prototype[Symbol.dispose]=CryptoSyncHandlerClient.prototype.free;/**
 * Client for emergency access operations, performed as the grantor or the grantee.
 */class EmergencyAccessClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(EmergencyAccessClient.prototype);obj.__wbg_ptr=ptr;EmergencyAccessClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;EmergencyAccessClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_emergencyaccessclient_free(ptr,0);}/**
     * Accepts an emergency access invite with the `token` from the invite email. Step 2 of the
     * setup; the grantor confirms next.
     *
     * Called by the grantee.
     * @param {EmergencyAccessId} emergency_access_id
     * @param {string} token
     * @returns {Promise<void>}
     */accept(emergency_access_id,token){const ptr0=passStringToWasm0(token,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.emergencyaccessclient_accept(this.__wbg_ptr,addHeapObject(emergency_access_id),ptr0,len0);return takeObject(ret);}/**
     * Approves the grantee's access request before the wait time passes.
     *
     * Called by the grantor.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<void>}
     */approve(emergency_access_id){const ret=wasm.emergencyaccessclient_approve(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Shares the current user's user key with the grantee. Step 3 of the setup.
     *
     * `grantee_public_key` is the base64 SPKI DER public key the user verified through the
     * grantee's fingerprint. It is never fetched here, so an unverified key can't slip in.
     *
     * Called by the grantor.
     * @param {EmergencyAccessId} emergency_access_id
     * @param {B64} grantee_public_key
     * @returns {Promise<void>}
     */confirm(emergency_access_id,grantee_public_key){const ret=wasm.emergencyaccessclient_confirm(this.__wbg_ptr,addHeapObject(emergency_access_id),addHeapObject(grantee_public_key));return takeObject(ret);}/**
     * Deletes an emergency access.
     *
     * Called by either the grantor or the grantee.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<void>}
     */delete(emergency_access_id){const ret=wasm.emergencyaccessclient_delete(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Fetches an emergency access the current user granted.
     *
     * Called by the grantor.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<GranteeEmergencyAccess>}
     */get(emergency_access_id){const ret=wasm.emergencyaccessclient_get(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Fetches the policies of the organizations the grantor owns, to enforce them on the new
     * master password during a takeover.
     *
     * The server only returns policies when the grantor owns an organization: other members are
     * removed from their organizations on takeover, so their policies don't apply.
     *
     * Called by the grantee.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<Policy[]>}
     */get_grantor_policies(emergency_access_id){const ret=wasm.emergencyaccessclient_get_grantor_policies(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Requests access to the grantor's account. Access is granted once the grantor approves or
     * the wait time passes.
     *
     * Called by the grantee.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<void>}
     */initiate(emergency_access_id){const ret=wasm.emergencyaccessclient_initiate(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Invites `grantee_email` to become a trusted emergency contact. Step 1 of the setup; the
     * grantee accepts next.
     *
     * Called by the grantor.
     * @param {string} grantee_email
     * @param {EmergencyAccessType} type
     * @param {number} wait_time_days
     * @returns {Promise<void>}
     */invite(grantee_email,type,wait_time_days){const ptr0=passStringToWasm0(grantee_email,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.emergencyaccessclient_invite(this.__wbg_ptr,ptr0,len0,type,wait_time_days);return takeObject(ret);}/**
     * Lists the emergency accesses granted to the current user, one per grantor.
     *
     * Called by the grantee.
     * @returns {Promise<GrantorEmergencyAccess[]>}
     */list_granted(){const ret=wasm.emergencyaccessclient_list_granted(this.__wbg_ptr);return takeObject(ret);}/**
     * Lists the emergency accesses the current user granted, one per trusted contact.
     *
     * Called by the grantor.
     * @returns {Promise<GranteeEmergencyAccess[]>}
     */list_trusted(){const ret=wasm.emergencyaccessclient_list_trusted(this.__wbg_ptr);return takeObject(ret);}/**
     * Re-sends the invite email of an emergency access the grantee has not accepted yet.
     *
     * Called by the grantor.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<void>}
     */reinvite(emergency_access_id){const ret=wasm.emergencyaccessclient_reinvite(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Rejects the grantee's access request.
     *
     * Called by the grantor.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<void>}
     */reject(emergency_access_id){const ret=wasm.emergencyaccessclient_reject(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}/**
     * Sets a new master password on the grantor's account of an approved takeover emergency
     * access.
     *
     * `grantor_email` is used as salt when the server doesn't return one.
     *
     * Called by the grantee.
     * @param {EmergencyAccessId} emergency_access_id
     * @param {string} new_password
     * @param {string} grantor_email
     * @returns {Promise<void>}
     */takeover(emergency_access_id,new_password,grantor_email){const ptr0=passStringToWasm0(new_password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(grantor_email,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ret=wasm.emergencyaccessclient_takeover(this.__wbg_ptr,addHeapObject(emergency_access_id),ptr0,len0,ptr1,len1);return takeObject(ret);}/**
     * Changes the access type and wait time of an emergency access.
     *
     * Called by the grantor.
     * @param {EmergencyAccessId} emergency_access_id
     * @param {EmergencyAccessType} type
     * @param {number} wait_time_days
     * @returns {Promise<void>}
     */update(emergency_access_id,type,wait_time_days){const ret=wasm.emergencyaccessclient_update(this.__wbg_ptr,addHeapObject(emergency_access_id),type,wait_time_days);return takeObject(ret);}/**
     * Fetches and decrypts the grantor's vault items of an approved view-only emergency access.
     * @param {EmergencyAccessId} emergency_access_id
     * @returns {Promise<DecryptCipherResult>}
     */view_vault_items(emergency_access_id){const ret=wasm.emergencyaccessclient_view_vault_items(this.__wbg_ptr,addHeapObject(emergency_access_id));return takeObject(ret);}}if(Symbol.dispose)EmergencyAccessClient.prototype[Symbol.dispose]=EmergencyAccessClient.prototype.free;/**
 * Where an emergency access is in its lifecycle.
 * @enum {0 | 1 | 2 | 3 | 4}
 */const EmergencyAccessStatus=Object.freeze({/**
     * The grantor invited the grantee.
     */Invited:0,"0":"Invited",/**
     * The grantee accepted the invite.
     */Accepted:1,"1":"Accepted",/**
     * The grantor shared their user key with the grantee.
     */Confirmed:2,"2":"Confirmed",/**
     * The grantee requested access and is waiting for approval or the wait time to pass.
     */RecoveryInitiated:3,"3":"RecoveryInitiated",/**
     * Access was granted to the grantee.
     */RecoveryApproved:4,"4":"RecoveryApproved"});/**
 * What the grantee may do once access is granted.
 * @enum {0 | 1}
 */const EmergencyAccessType=Object.freeze({/**
     * The grantee may view the grantor's vault.
     */View:0,"0":"View",/**
     * The grantee may reset the grantor's master password and take over the account.
     */Takeover:1,"1":"Takeover"});/**
 * Runs the encrypted migrations of the account.
 */class EncryptedMigratorClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(EncryptedMigratorClient.prototype);obj.__wbg_ptr=ptr;EncryptedMigratorClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;EncryptedMigratorClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_encryptedmigratorclient_free(ptr,0);}/**
     * Runs each migration once, in registration order. A failed migration does not stop the
     * others.
     *
     * Two runs at the same time can send the same changes to the server, so the caller must not
     * start a run before the previous run ends.
     * @returns {Promise<void>}
     */run_migrations(){const ret=wasm.encryptedmigratorclient_run_migrations(this.__wbg_ptr);return takeObject(ret);}}if(Symbol.dispose)EncryptedMigratorClient.prototype[Symbol.dispose]=EncryptedMigratorClient.prototype.free;class ExporterClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ExporterClient.prototype);obj.__wbg_ptr=ptr;ExporterClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ExporterClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_exporterclient_free(ptr,0);}/**
     * Credential Exchange Format (CXF)
     *
     * *Warning:* Expect this API to be unstable, and it will change in the future.
     *
     * For use with Apple using [ASCredentialExportManager](https://developer.apple.com/documentation/authenticationservices/ascredentialexportmanager).
     * Ideally, the input should be immediately serialized from [ASImportableAccount](https://developer.apple.com/documentation/authenticationservices/asimportableaccount).
     * @param {Account} account
     * @param {Cipher[]} ciphers
     * @returns {string}
     */export_cxf(account,ciphers){let deferred3_0;let deferred3_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(ciphers,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.exporterclient_export_cxf(retptr,this.__wbg_ptr,addHeapObject(account),ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr2=r0;var len2=r1;if(r3){ptr2=0;len2=0;throw takeObject(r2);}deferred3_0=ptr2;deferred3_1=len2;return getStringFromWasm0(ptr2,len2);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred3_0,deferred3_1,1);}}/**
     * @param {Collection[]} collections
     * @param {Cipher[]} ciphers
     * @param {ExportFormat} format
     * @returns {string}
     */export_organization_vault(collections,ciphers,format){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(collections,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(ciphers,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.exporterclient_export_organization_vault(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1,addHeapObject(format));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * @param {Folder[]} folders
     * @param {Cipher[]} ciphers
     * @param {ExportFormat} format
     * @returns {Promise<string>}
     */export_vault(folders,ciphers,format){const ptr0=passArrayJsValueToWasm0(folders,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(ciphers,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.exporterclient_export_vault(this.__wbg_ptr,ptr0,len0,ptr1,len1,addHeapObject(format));return takeObject(ret);}/**
     * Credential Exchange Format (CXF)
     *
     * *Warning:* Expect this API to be unstable, and it will change in the future.
     *
     * For use with Apple using [ASCredentialExportManager](https://developer.apple.com/documentation/authenticationservices/ascredentialexportmanager).
     * Ideally, the input should be immediately serialized from [ASImportableAccount](https://developer.apple.com/documentation/authenticationservices/asimportableaccount).
     *
     * Each returned [`EncryptionContext`] carries the encrypted cipher along with the user it was
     * encrypted for and the id of the key it was wrapped under.
     * @param {string} payload
     * @returns {EncryptionContext[]}
     */import_cxf(payload){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(payload,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.exporterclient_import_cxf(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v2=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}if(Symbol.dispose)ExporterClient.prototype[Symbol.dispose]=ExporterClient.prototype.free;/**
 * Represents the type of a [FieldView].
 * @enum {0 | 1 | 2 | 3}
 */const FieldType=Object.freeze({/**
     * Text field
     */Text:0,"0":"Text",/**
     * Hidden text field
     */Hidden:1,"1":"Hidden",/**
     * Boolean field
     */Boolean:2,"2":"Boolean",/**
     * Linked field
     */Linked:3,"3":"Linked"});/**
 * Where the client should upload the encrypted file bytes after [`SendClient::create_file_send`].
 * @enum {0 | 1}
 */const bitwarden_wasm_internal_bg_FileUploadType=Object.freeze({/**
     * Upload directly to the Bitwarden server via `POST /sends/{id}/file/{file_id}`.
     */Direct:0,"0":"Direct",/**
     * Upload to an Azure Blob Storage pre-signed URL.
     */Azure:1,"1":"Azure"});/**
 * A client for inspecting and refreshing feature flags.
 */class FlagsClient{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;FlagsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_flagsclient_free(ptr,0);}}if(Symbol.dispose)FlagsClient.prototype[Symbol.dispose]=FlagsClient.prototype.free;/**
 * WASM client for reading Flight Recorder logs.
 *
 * The underlying buffer is global (initialized in [`init_sdk`](crate::init_sdk)),
 * so this client is a stateless handle for WASM access.
 */class bitwarden_wasm_internal_bg_FlightRecorderClient{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;FlightRecorderClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_flightrecorderclient_free(ptr,0);}/**
     * Get the current event count without reading event contents.
     * @returns {number}
     */count(){const ret=wasm.flightrecorderclient_count(this.__wbg_ptr);return ret>>>0;}/**
     * Create a new `FlightRecorderClient`.
     */constructor(){const ret=wasm.flightrecorderclient_new();this.__wbg_ptr=ret>>>0;FlightRecorderClientFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Read all events currently in the Flight Recorder buffer.
     * @returns {FlightRecorderEvent[]}
     */read(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.flightrecorderclient_read(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Ingest a single TypeScript-originated log event into the global buffer,
     * honoring the configured level floor.
     *
     * `timestamp` is milliseconds since the Unix epoch, supplied by the caller
     * (`Date.now()`).
     * @param {number} timestamp
     * @param {LogLevel} level
     * @param {string} target
     * @param {string} message
     */write(timestamp,level,target,message){const ptr0=passStringToWasm0(target,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(message,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;wasm.flightrecorderclient_write(this.__wbg_ptr,timestamp,level,ptr0,len0,ptr1,len1);}}if(Symbol.dispose)bitwarden_wasm_internal_bg_FlightRecorderClient.prototype[Symbol.dispose]=bitwarden_wasm_internal_bg_FlightRecorderClient.prototype.free;/**
 * Wrapper for folder specific functionality.
 */class FoldersClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(FoldersClient.prototype);obj.__wbg_ptr=ptr;FoldersClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;FoldersClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_foldersclient_free(ptr,0);}/**
     * Create a new [Folder] and save it to the server.
     * @param {FolderAddEditRequest} request
     * @returns {Promise<FolderView>}
     */create(request){const ret=wasm.foldersclient_create(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Decrypt a [Folder] to [FolderView].
     * @param {Folder} folder
     * @returns {FolderView}
     */decrypt(folder){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.foldersclient_decrypt(retptr,this.__wbg_ptr,addHeapObject(folder));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Decrypt a list of [Folder]s to a list of [FolderView]s.
     * @param {Folder[]} folders
     * @returns {FolderView[]}
     */decrypt_list(folders){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(folders,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.foldersclient_decrypt_list(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v2=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Edit the [Folder] and save it to the server.
     * @param {FolderId} folder_id
     * @param {FolderAddEditRequest} request
     * @returns {Promise<FolderView>}
     */edit(folder_id,request){const ret=wasm.foldersclient_edit(this.__wbg_ptr,addHeapObject(folder_id),addHeapObject(request));return takeObject(ret);}/**
     * Encrypt a [FolderView] to a [Folder].
     * @param {FolderView} folder_view
     * @returns {Folder}
     */encrypt(folder_view){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.foldersclient_encrypt(retptr,this.__wbg_ptr,addHeapObject(folder_view));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Get a specific [crate::Folder] by its ID from state and decrypt it to a [FolderView].
     * @param {FolderId} folder_id
     * @returns {Promise<FolderView>}
     */get(folder_id){const ret=wasm.foldersclient_get(this.__wbg_ptr,addHeapObject(folder_id));return takeObject(ret);}/**
     * Get all folders from state and decrypt them to a list of [FolderView].
     * @returns {Promise<FolderView[]>}
     */list(){const ret=wasm.foldersclient_list(this.__wbg_ptr);return takeObject(ret);}}if(Symbol.dispose)FoldersClient.prototype[Symbol.dispose]=FoldersClient.prototype.free;class GeneratorClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(GeneratorClient.prototype);obj.__wbg_ptr=ptr;GeneratorClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;GeneratorClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_generatorclient_free(ptr,0);}/**
     * Generates a random passphrase.
     * A passphrase is a combination of random words separated by a character.
     * An example of passphrase is `correct horse battery staple`.
     *
     * The number of words and their case, the word separator, and the inclusion of
     * a number in the passphrase can be customized using the `input` parameter.
     *
     * # Examples
     *
     * ```
     * use bitwarden_core::Client;
     * use bitwarden_generators::{GeneratorClientsExt, PassphraseError, PassphraseGeneratorRequest};
     *
     * async fn test() -> Result<(), PassphraseError> {
     *     let input = PassphraseGeneratorRequest {
     *         num_words: 4,
     *         ..Default::default()
     *     };
     *     let passphrase = Client::new(None).generator().passphrase(input).unwrap();
     *     println!("{}", passphrase);
     *     Ok(())
     * }
     * ```
     * @param {PassphraseGeneratorRequest} input
     * @returns {string}
     */passphrase(input){let deferred2_0;let deferred2_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.generatorclient_passphrase(retptr,this.__wbg_ptr,addHeapObject(input));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr1=r0;var len1=r1;if(r3){ptr1=0;len1=0;throw takeObject(r2);}deferred2_0=ptr1;deferred2_1=len1;return getStringFromWasm0(ptr1,len1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred2_0,deferred2_1,1);}}/**
     * Generates a random password.
     *
     * The character sets and password length can be customized using the `input` parameter.
     *
     * # Examples
     *
     * ```
     * use bitwarden_core::Client;
     * use bitwarden_generators::{GeneratorClientsExt, PassphraseError, PasswordGeneratorRequest};
     *
     * async fn test() -> Result<(), PassphraseError> {
     *     let input = PasswordGeneratorRequest {
     *         lowercase: true,
     *         uppercase: true,
     *         numbers: true,
     *         length: 20,
     *         ..Default::default()
     *     };
     *     let password = Client::new(None).generator().password(input).unwrap();
     *     println!("{}", password);
     *     Ok(())
     * }
     * ```
     * @param {PasswordGeneratorRequest} input
     * @returns {string}
     */password(input){let deferred2_0;let deferred2_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.generatorclient_password(retptr,this.__wbg_ptr,addHeapObject(input));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr1=r0;var len1=r1;if(r3){ptr1=0;len1=0;throw takeObject(r2);}deferred2_0=ptr1;deferred2_1=len1;return getStringFromWasm0(ptr1,len1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred2_0,deferred2_1,1);}}/**
     * Parses an HTML `passwordrules` attribute string into a [`PasswordGeneratorRequest`].
     *
     * The returned request can be passed to [`GeneratorClient::password`] to produce a
     * password that satisfies the website's declared constraints.
     * @param {string} rules
     * @returns {PasswordGeneratorRequest}
     */password_rules(rules){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(rules,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.generatorclient_password_rules(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}if(Symbol.dispose)GeneratorClient.prototype[Symbol.dispose]=GeneratorClient.prototype.free;/**
 * @enum {400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418}
 */const IdentityLinkedIdType=Object.freeze({Title:400,"400":"Title",MiddleName:401,"401":"MiddleName",Address1:402,"402":"Address1",Address2:403,"403":"Address2",Address3:404,"404":"Address3",City:405,"405":"City",State:406,"406":"State",PostalCode:407,"407":"PostalCode",Country:408,"408":"Country",Company:409,"409":"Company",Email:410,"410":"Email",Phone:411,"411":"Phone",Ssn:412,"412":"Ssn",Username:413,"413":"Username",PassportNumber:414,"414":"PassportNumber",LicenseNumber:415,"415":"LicenseNumber",FirstName:416,"416":"FirstName",LastName:417,"417":"LastName",FullName:418,"418":"FullName"});class ImporterClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ImporterClient.prototype);obj.__wbg_ptr=ptr;ImporterClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ImporterClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_importerclient_free(ptr,0);}/**
     * Import a KeePass KDBX (`.kdbx`) database and submit it to the server.
     *
     * Parses and decrypts the raw `.kdbx` bytes (unlocked with the password and/or key file),
     * encrypts the entries for the user's personal vault or the given organization, and submits
     * them to the import endpoint. Returns the counts of what was imported. Inputs larger than
     * 10 MiB are rejected with `KdbxFileTooLarge`.
     * @param {Uint8Array} file
     * @param {string | null | undefined} password
     * @param {Uint8Array | null | undefined} key_file
     * @param {ImportOptions} options
     * @returns {Promise<ImportSummary>}
     */import_kdbx(file,password,key_file,options){const ptr0=passArray8ToWasm0(file,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;var ptr1=isLikeNone(password)?0:passStringToWasm0(password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;var ptr2=isLikeNone(key_file)?0:passArray8ToWasm0(key_file,wasm.__wbindgen_malloc);var len2=WASM_VECTOR_LEN;const ret=wasm.importerclient_import_kdbx(this.__wbg_ptr,ptr0,len0,ptr1,len1,ptr2,len2,addHeapObject(options));return takeObject(ret);}/**
     * The same import as [`ImporterClient::import_onepassword`], for JavaScript, which passes the
     * two-factor prompt as an object rather than a `&dyn` callback.
     * @param {Credentials} credentials
     * @param {OnePasswordTwoFactorUi} two_factor
     * @param {ImportOptions} options
     * @returns {Promise<OnePasswordImportSummary>}
     */import_onepassword(credentials,two_factor,options){const ret=wasm.importerclient_import_onepassword(this.__wbg_ptr,addHeapObject(credentials),addHeapObject(two_factor),addHeapObject(options));return takeObject(ret);}/**
     * The same import as [`ImporterClient::import_onepassword_sso`], for JavaScript, which passes
     * the callbacks as objects rather than `&dyn` references.
     * @param {SsoCredentials} credentials
     * @param {OnePasswordSsoUi} ui
     * @param {ImportOptions} options
     * @returns {Promise<OnePasswordImportSummary>}
     */import_onepassword_sso(credentials,ui,options){const ret=wasm.importerclient_import_onepassword_sso(this.__wbg_ptr,addHeapObject(credentials),addHeapObject(ui),addHeapObject(options));return takeObject(ret);}/**
     * Asks 1Password how the account signs in: with the password and Secret Key, with SSO, or
     * either. It needs only the email and the sign-in address, so the UI can call it first and
     * then ask for the password and Secret Key or start
     * [`ImporterClient::import_onepassword_sso`]. Fails with
     * [`ImportError::OnePasswordInvalidEmail`] when 1Password refuses the email as malformed.
     * @param {string} username
     * @param {SignInAddress} sign_in_address
     * @returns {Promise<SignInMethods>}
     */onepassword_sign_in_methods(username,sign_in_address){const ptr0=passStringToWasm0(username,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.importerclient_onepassword_sign_in_methods(this.__wbg_ptr,ptr0,len0,addHeapObject(sign_in_address));return takeObject(ret);}}if(Symbol.dispose)ImporterClient.prototype[Symbol.dispose]=ImporterClient.prototype.free;/**
 * An untyped IPC message received from another endpoint.
 */class IncomingMessage{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IncomingMessage.prototype);obj.__wbg_ptr=ptr;IncomingMessageFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IncomingMessageFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_incomingmessage_free(ptr,0);}/**
     * Destination endpoint that received this message.
     * @returns {Endpoint}
     */get destination(){const ret=wasm.__wbg_get_incomingmessage_destination(this.__wbg_ptr);return takeObject(ret);}/**
     * Serialized payload bytes.
     * @returns {Uint8Array}
     */get payload(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.__wbg_get_incomingmessage_payload(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Source that sent this message, with per-variant metadata.
     * @returns {Source}
     */get source(){const ret=wasm.__wbg_get_incomingmessage_source(this.__wbg_ptr);return takeObject(ret);}/**
     * Optional topic used for routing/dispatch.
     * @returns {string | undefined}
     */get topic(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.__wbg_get_incomingmessage_topic(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);let v1;if(r0!==0){v1=getStringFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);}return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Create an incoming IPC message from raw payload bytes.
     * @param {Uint8Array} payload
     * @param {Endpoint} destination
     * @param {Source} source
     * @param {string | null} [topic]
     */constructor(payload,destination,source,topic){const ptr0=passArray8ToWasm0(payload,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;var ptr1=isLikeNone(topic)?0:passStringToWasm0(topic,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;const ret=wasm.incomingmessage_new(ptr0,len0,addHeapObject(destination),addHeapObject(source),ptr1,len1);this.__wbg_ptr=ret>>>0;IncomingMessageFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Try to parse the payload as JSON.
     * @returns {any} The parsed JSON value, or undefined if the payload is not valid JSON.
     */parse_payload_as_json(){const ret=wasm.incomingmessage_parse_payload_as_json(this.__wbg_ptr);return takeObject(ret);}/**
     * Destination endpoint that received this message.
     * @param {Endpoint} arg0
     */set destination(arg0){wasm.__wbg_set_incomingmessage_destination(this.__wbg_ptr,addHeapObject(arg0));}/**
     * Serialized payload bytes.
     * @param {Uint8Array} arg0
     */set payload(arg0){const ptr0=passArray8ToWasm0(arg0,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.__wbg_set_incomingmessage_payload(this.__wbg_ptr,ptr0,len0);}/**
     * Source that sent this message, with per-variant metadata.
     * @param {Source} arg0
     */set source(arg0){wasm.__wbg_set_incomingmessage_source(this.__wbg_ptr,addHeapObject(arg0));}/**
     * Optional topic used for routing/dispatch.
     * @param {string | null} [arg0]
     */set topic(arg0){var ptr0=isLikeNone(arg0)?0:passStringToWasm0(arg0,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;wasm.__wbg_set_incomingmessage_topic(this.__wbg_ptr,ptr0,len0);}}if(Symbol.dispose)IncomingMessage.prototype[Symbol.dispose]=IncomingMessage.prototype.free;class IntoUnderlyingByteSource{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IntoUnderlyingByteSourceFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_intounderlyingbytesource_free(ptr,0);}/**
     * @returns {number}
     */get autoAllocateChunkSize(){const ret=wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return ret>>>0;}cancel(){const ptr=this.__destroy_into_raw();wasm.intounderlyingbytesource_cancel(ptr);}/**
     * @param {ReadableByteStreamController} controller
     * @returns {Promise<any>}
     */pull(controller){const ret=wasm.intounderlyingbytesource_pull(this.__wbg_ptr,addHeapObject(controller));return takeObject(ret);}/**
     * @param {ReadableByteStreamController} controller
     */start(controller){wasm.intounderlyingbytesource_start(this.__wbg_ptr,addHeapObject(controller));}/**
     * @returns {ReadableStreamType}
     */get type(){const ret=wasm.intounderlyingbytesource_type(this.__wbg_ptr);return __wbindgen_enum_ReadableStreamType[ret];}}if(Symbol.dispose)IntoUnderlyingByteSource.prototype[Symbol.dispose]=IntoUnderlyingByteSource.prototype.free;class IntoUnderlyingSink{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IntoUnderlyingSinkFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_intounderlyingsink_free(ptr,0);}/**
     * @param {any} reason
     * @returns {Promise<any>}
     */abort(reason){const ptr=this.__destroy_into_raw();const ret=wasm.intounderlyingsink_abort(ptr,addHeapObject(reason));return takeObject(ret);}/**
     * @returns {Promise<any>}
     */close(){const ptr=this.__destroy_into_raw();const ret=wasm.intounderlyingsink_close(ptr);return takeObject(ret);}/**
     * @param {any} chunk
     * @returns {Promise<any>}
     */write(chunk){const ret=wasm.intounderlyingsink_write(this.__wbg_ptr,addHeapObject(chunk));return takeObject(ret);}}if(Symbol.dispose)IntoUnderlyingSink.prototype[Symbol.dispose]=IntoUnderlyingSink.prototype.free;class IntoUnderlyingSource{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IntoUnderlyingSourceFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_intounderlyingsource_free(ptr,0);}cancel(){const ptr=this.__destroy_into_raw();wasm.intounderlyingsource_cancel(ptr);}/**
     * @param {ReadableStreamDefaultController} controller
     * @returns {Promise<any>}
     */pull(controller){const ret=wasm.intounderlyingsource_pull(this.__wbg_ptr,addHeapObject(controller));return takeObject(ret);}}if(Symbol.dispose)IntoUnderlyingSource.prototype[Symbol.dispose]=IntoUnderlyingSource.prototype.free;/**
 * Client for organization invite link administrative (organization-key) operations: creating,
 * refreshing, updating, deleting, and inspecting invite links. Returned views carry the recovered
 * invite secret in their URL fragment.
 */class InviteLinkAdminClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InviteLinkAdminClient.prototype);obj.__wbg_ptr=ptr;InviteLinkAdminClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InviteLinkAdminClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invitelinkadminclient_free(ptr,0);}/**
     * Creates a new organization invite link.
     *
     * # Security
     * Only the sealed invite is posted to the server; the invite secret is never sent. It is
     * only carried in the returned view's URL fragment.
     * @param {OrganizationId} organization_id
     * @param {string[]} allowed_domains
     * @param {boolean} supports_confirmation
     * @returns {Promise<OrganizationInviteLinkView>}
     */create(organization_id,allowed_domains,supports_confirmation){const ptr0=passArrayJsValueToWasm0(allowed_domains,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invitelinkadminclient_create(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0,supports_confirmation);return takeObject(ret);}/**
     * Delete an existing invite link.
     * @param {OrganizationId} organization_id
     * @returns {Promise<void>}
     */delete(organization_id){const ret=wasm.invitelinkadminclient_delete(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}/**
     * Get an existing invite link.
     * @param {OrganizationId} organization_id
     * @returns {Promise<OrganizationInviteLinkView | undefined>}
     */get(organization_id){const ret=wasm.invitelinkadminclient_get(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}/**
     * Refreshes an existing invite link.
     * This generates a new code and secret, invalidating any links already handed out.
     *
     * # Security
     * Only the sealed invite is posted to the server; the invite secret is never sent. It is
     * only carried in the returned view's URL fragment.
     * @param {OrganizationId} organization_id
     * @param {boolean} supports_confirmation
     * @returns {Promise<OrganizationInviteLinkView>}
     */refresh(organization_id,supports_confirmation){const ret=wasm.invitelinkadminclient_refresh(this.__wbg_ptr,addHeapObject(organization_id),supports_confirmation);return takeObject(ret);}/**
     * Updates the allowed domains for an existing organization invite link.
     * @param {OrganizationId} organization_id
     * @param {string[]} allowed_domains
     * @returns {Promise<OrganizationInviteLinkView>}
     */update_allowed_domains(organization_id,allowed_domains){const ptr0=passArrayJsValueToWasm0(allowed_domains,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invitelinkadminclient_update_allowed_domains(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0);return takeObject(ret);}/**
     * Updates whether an existing invite link supports confirmation.
     *
     * If supports_confirmation is true, users gain immediate access to the organization.
     * If supports_confirmation is false, admins need to confirm all new users.
     *
     * Does not break the URL of the existing invite link: enabling confirmation re-seals the
     * organization key under the invite's existing invite key; disabling it strips that envelope.
     * Either way the invite key, code, and secret are left untouched, so links already handed out
     * stay valid. Use [`InviteLinkAdminClient::refresh`] instead when the code and secret must be
     * rotated.
     *
     * # Security
     * Only the re-sealed invite is posted to the server; the invite secret is never sent.
     * @param {OrganizationId} organization_id
     * @param {boolean} supports_confirmation
     * @returns {Promise<OrganizationInviteLinkView>}
     */update_confirmation(organization_id,supports_confirmation){const ret=wasm.invitelinkadminclient_update_confirmation(this.__wbg_ptr,addHeapObject(organization_id),supports_confirmation);return takeObject(ret);}}if(Symbol.dispose)InviteLinkAdminClient.prototype[Symbol.dispose]=InviteLinkAdminClient.prototype.free;/**
 * Client for organization invite link operations.
 *
 * This is a thin entry point that exposes two focused sub-clients: [`InviteLinkAdminClient`] (via
 * [`admin`](Self::admin)) for administrator CRUD operations, and [`InviteLinkUserClient`] (via
 * [`user`](Self::user)) for invitee flows.
 */class InviteLinkClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InviteLinkClient.prototype);obj.__wbg_ptr=ptr;InviteLinkClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InviteLinkClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invitelinkclient_free(ptr,0);}/**
     * Administrative (organization-key) invite link operations.
     * @returns {InviteLinkAdminClient}
     */admin(){const ret=wasm.invitelinkclient_admin(this.__wbg_ptr);return InviteLinkAdminClient.__wrap(ret);}/**
     * Invitee (user) invite link operations.
     * @returns {InviteLinkUserClient}
     */user(){const ret=wasm.invitelinkclient_user(this.__wbg_ptr);return InviteLinkUserClient.__wrap(ret);}}if(Symbol.dispose)InviteLinkClient.prototype[Symbol.dispose]=InviteLinkClient.prototype.free;/**
 * Client for organization invite link invitee (user) operations: checking link status, validating
 * email eligibility, and accepting or self-confirming an invite.
 */class InviteLinkUserClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(InviteLinkUserClient.prototype);obj.__wbg_ptr=ptr;InviteLinkUserClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;InviteLinkUserClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_invitelinkuserclient_free(ptr,0);}/**
     * Accepts an organization invite for the current user, optionally enrolling into account
     * recovery (when `enroll_into_account_recovery` is set) and — when the invite supports
     * confirmation — self-confirming.
     *
     * # Errors
     * Server-reported failures are mapped onto typed variants: a `404` from any of the acceptance
     * endpoints becomes [`AcceptInviteLinkError::LinkNotFound`], and a `400` validation
     * problem becomes the variant matching its error code (or
     * [`AcceptInviteLinkError::Unknown`], carrying the server's English description, for an
     * unrecognized code). Responses in the legacy error format carry no code and remain
     * [`AcceptInviteLinkError::Api`].
     * @param {OrganizationId} organization_id
     * @param {string} code
     * @param {string} invite_secret
     * @param {string} default_collection_name
     * @param {boolean} enroll_into_account_recovery
     * @returns {Promise<void>}
     */accept_and_optionally_confirm(organization_id,code,invite_secret,default_collection_name,enroll_into_account_recovery){const ptr0=passStringToWasm0(code,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(invite_secret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ptr2=passStringToWasm0(default_collection_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len2=WASM_VECTOR_LEN;const ret=wasm.invitelinkuserclient_accept_and_optionally_confirm(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0,ptr1,len1,ptr2,len2,enroll_into_account_recovery);return takeObject(ret);}/**
     * Retrieves the status of an invite link.
     * Used to verify basic availability before attempting to accept.
     * @param {OrganizationId} organization_id
     * @param {string} code
     * @returns {Promise<OrganizationInviteLinkStatusView>}
     */get_status(organization_id,code){const ptr0=passStringToWasm0(code,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.invitelinkuserclient_get_status(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0);return takeObject(ret);}/**
     * Returns whether the given email address is in the allowed domains for an invite link.
     * @param {OrganizationId} organization_id
     * @param {string} code
     * @param {string} email
     * @returns {Promise<boolean>}
     */is_email_allowed(organization_id,code,email){const ptr0=passStringToWasm0(code,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(email,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ret=wasm.invitelinkuserclient_is_email_allowed(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0,ptr1,len1);return takeObject(ret);}}if(Symbol.dispose)InviteLinkUserClient.prototype[Symbol.dispose]=InviteLinkUserClient.prototype.free;/**
 * JavaScript wrapper around the IPC client. For more information, see the
 * [`IpcClient`] trait documentation.
 */class IpcClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IpcClient.prototype);obj.__wbg_ptr=ptr;IpcClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IpcClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_ipcclient_free(ptr,0);}/**
     * @param {BroadcastGroup} group
     * @param {Uint8Array} payload
     * @param {string | null} [topic]
     * @returns {Promise<IpcEndpointSendResult[]>}
     */broadcast(group,payload,topic){const ptr0=passArray8ToWasm0(payload,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;var ptr1=isLikeNone(topic)?0:passStringToWasm0(topic,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;const ret=wasm.ipcclient_broadcast(this.__wbg_ptr,addHeapObject(group),ptr0,len0,ptr1,len1);return takeObject(ret);}/**
     * @returns {boolean}
     */isRunning(){const ret=wasm.ipcclient_isRunning(this.__wbg_ptr);return ret!==0;}/**
     * Create a new `IpcClient` instance with a client-managed session repository for saving
     * sessions using State Provider.
     * @param {IpcCommunicationBackend} communication_provider
     * @param {IpcSessionRepository} session_repository
     * @returns {IpcClient}
     */static newWithClientManagedSessions(communication_provider,session_repository){_assertClass(communication_provider,IpcCommunicationBackend);const ret=wasm.ipcclient_newWithClientManagedSessions(communication_provider.__wbg_ptr,addHeapObject(session_repository));return IpcClient.__wrap(ret);}/**
     * Create a new `IpcClient` instance with an in-memory session repository for saving
     * sessions within the SDK.
     * @param {IpcCommunicationBackend} communication_provider
     * @returns {IpcClient}
     */static newWithSdkInMemorySessions(communication_provider){_assertClass(communication_provider,IpcCommunicationBackend);const ret=wasm.ipcclient_newWithSdkInMemorySessions(communication_provider.__wbg_ptr);return IpcClient.__wrap(ret);}/**
     * @param {OutgoingMessage} message
     * @returns {Promise<void>}
     */send(message){_assertClass(message,OutgoingMessage);var ptr0=message.__destroy_into_raw();const ret=wasm.ipcclient_send(this.__wbg_ptr,ptr0);return takeObject(ret);}/**
     * @param {AbortSignal | null} [abort_signal]
     * @returns {Promise<void>}
     */start(abort_signal){const ret=wasm.ipcclient_start(this.__wbg_ptr,isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
     * @returns {Promise<IpcClientSubscription>}
     */subscribe(){const ret=wasm.ipcclient_subscribe(this.__wbg_ptr);return takeObject(ret);}}if(Symbol.dispose)IpcClient.prototype[Symbol.dispose]=IpcClient.prototype.free;/**
 * JavaScript wrapper around the IPC client subscription. For more information, see the
 * [IpcClientSubscription] documentation.
 */class IpcClientSubscription{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(IpcClientSubscription.prototype);obj.__wbg_ptr=ptr;IpcClientSubscriptionFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IpcClientSubscriptionFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_ipcclientsubscription_free(ptr,0);}/**
     * @param {AbortSignal | null} [abort_signal]
     * @returns {Promise<IncomingMessage>}
     */receive(abort_signal){const ret=wasm.ipcclientsubscription_receive(this.__wbg_ptr,isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}}if(Symbol.dispose)IpcClientSubscription.prototype[Symbol.dispose]=IpcClientSubscription.prototype.free;/**
 * JavaScript implementation of the `CommunicationBackend` trait for IPC communication.
 */class IpcCommunicationBackend{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;IpcCommunicationBackendFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_ipccommunicationbackend_free(ptr,0);}/**
     * Creates a new instance of the JavaScript communication backend.
     * @param {IpcCommunicationBackendSender} sender
     */constructor(sender){const ret=wasm.ipccommunicationbackend_new(addHeapObject(sender));this.__wbg_ptr=ret>>>0;IpcCommunicationBackendFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Used by JavaScript to provide an incoming message to the IPC framework.
     * @param {IncomingMessage} message
     */receive(message){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);_assertClass(message,IncomingMessage);var ptr0=message.__destroy_into_raw();wasm.ipccommunicationbackend_receive(retptr,this.__wbg_ptr,ptr0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}if(Symbol.dispose)IpcCommunicationBackend.prototype[Symbol.dispose]=IpcCommunicationBackend.prototype.free;/**
 * Client for reading and managing a requester's PAM access leases. Leases are minted by
 * [`AccessRequestsClient::activate`](crate::AccessRequestsClient::activate).
 */class LeasesClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(LeasesClient.prototype);obj.__wbg_ptr=ptr;LeasesClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;LeasesClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_leasesclient_free(ptr,0);}/**
     * Ends a lease before it expires, re-locking the cipher.
     * @param {AccessLeaseId} lease_id
     * @param {AccessLeaseRevokeRequest} request
     * @returns {Promise<void>}
     */end(lease_id,request){const ret=wasm.leasesclient_end(this.__wbg_ptr,addHeapObject(lease_id),addHeapObject(request));return takeObject(ret);}/**
     * Extends an active lease, returning the updated originating request.
     * @param {AccessLeaseId} lease_id
     * @param {AccessLeaseExtensionRequest} request
     * @returns {Promise<AccessRequestView>}
     */extend(lease_id,request){const ret=wasm.leasesclient_extend(this.__wbg_ptr,addHeapObject(lease_id),addHeapObject(request));return takeObject(ret);}/**
     * Reads the full cipher a lease unlocks from the server, or `None` if the server still
     * restricts it. The result is never stored, so a lapsed lease leaves no decryptable secrets
     * in state.
     * @param {CipherId} cipher_id
     * @returns {Promise<CipherView | undefined>}
     */leased_cipher(cipher_id){const ret=wasm.leasesclient_leased_cipher(this.__wbg_ptr,addHeapObject(cipher_id));return takeObject(ret);}/**
     * Lists the caller's currently active leases.
     * @returns {Promise<AccessLeaseView[]>}
     */list_active(){const ret=wasm.leasesclient_list_active(this.__wbg_ptr);return takeObject(ret);}/**
     * Lists all of the caller's leases, active or not.
     * @returns {Promise<AccessLeaseView[]>}
     */list_mine(){const ret=wasm.leasesclient_list_mine(this.__wbg_ptr);return takeObject(ret);}}if(Symbol.dispose)LeasesClient.prototype[Symbol.dispose]=LeasesClient.prototype.free;/**
 * @enum {0 | 1 | 2 | 3 | 4}
 */const bitwarden_wasm_internal_bg_LogLevel=Object.freeze({Trace:0,"0":"Trace",Debug:1,"1":"Debug",Info:2,"2":"Info",Warn:3,"3":"Warn",Error:4,"4":"Error"});/**
 * Client for authenticating Bitwarden users.
 *
 * Handles unauthenticated operations to obtain access tokens from the Identity API.
 * After successful authentication, use the returned tokens to create an authenticated core client.
 *
 * # Lifecycle
 *
 * 1. Create `LoginClient` via `AuthClient`
 * 2. Call login method
 * 3. Use returned tokens with authenticated core client
 *
 * # Password Login Example
 *
 * ```rust,no_run
 * # use bitwarden_auth::{AuthClient, login::login_via_password::PasswordLoginRequest};
 * # use bitwarden_auth::login::models::{LoginRequest, LoginDeviceRequest, LoginResponse};
 * # use bitwarden_core::{Client, DeviceType};
 * # async fn example(email: String, password: String) -> Result<(), Box<dyn std::error::Error>> {
 * // Create auth client
 * let client = Client::new(None);
 * let auth_client = AuthClient::new(client);
 *
 * // Create login client, sharing the same backing client
 * let login_client = auth_client.login();
 *
 * // Get user's KDF config
 * let prelogin = login_client.get_password_prelogin(email.clone()).await?;
 *
 * // Login with credentials
 * let response = login_client.login_via_password(PasswordLoginRequest {
 *     login_request: LoginRequest {
 *         client_id: "connector".to_string(),
 *         device: LoginDeviceRequest {
 *             device_type: DeviceType::SDK,
 *             device_identifier: "device-id".to_string(),
 *             device_name: "My Device".to_string(),
 *             device_push_token: None,
 *         },
 *     },
 *     email,
 *     password,
 *     prelogin_response: prelogin,
 * }).await?;
 *
 * // Use tokens from response for authenticated requests
 * match response {
 *     LoginResponse::Authenticated(success) => {
 *         let access_token = success.access_token;
 *         // Use access_token for authenticated requests
 *     }
 * }
 * # Ok(())
 * # }
 * ```
 */class LoginClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(LoginClient.prototype);obj.__wbg_ptr=ptr;LoginClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;LoginClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_loginclient_free(ptr,0);}/**
     * Retrieves the data required before authenticating with a password.
     * This includes the user's KDF configuration needed to properly derive the master key.
     * @param {string} email
     * @returns {Promise<PasswordPreloginResponse>}
     */get_password_prelogin(email){const ptr0=passStringToWasm0(email,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.loginclient_get_password_prelogin(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Authenticates a user via email and master password.
     *
     * Derives the master password hash using KDF settings from prelogin, then sends
     * the authentication request to obtain access tokens and vault keys.
     * @param {PasswordLoginRequest} request
     * @returns {Promise<LoginResponse>}
     */login_via_password(request){const ret=wasm.loginclient_login_via_password(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)LoginClient.prototype[Symbol.dispose]=LoginClient.prototype.free;/**
 * @enum {100 | 101}
 */const LoginLinkedIdType=Object.freeze({Username:100,"100":"Username",Password:101,"101":"Password"});/**
 * Handle to the host system's Unified Endpoint Management profile.
 *
 * The host application constructs one of these at boot and pushes profiles into it, and hands its
 * [`cell`](ManagedSettingsClient::cell) to
 * [`bitwarden_core::ClientBuilder::with_managed_profile`] so the SDK reads the same profile.
 * Clones share the underlying profile, so an update pushed through one clone is observed by all of
 * them.
 */class ManagedSettingsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(ManagedSettingsClient.prototype);obj.__wbg_ptr=ptr;ManagedSettingsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ManagedSettingsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_managedsettingsclient_free(ptr,0);}/**
     * Raw JSON-encoded value for `key`, if a value is present.
     * @param {string} key
     * @returns {string | undefined}
     */get(key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.managedsettingsclient_get(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);let v2;if(r0!==0){v2=getStringFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);}return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Returns `true` if `key` is present in the active profile.
     * @param {string} key
     * @returns {boolean}
     */is_managed(key){const ptr0=passStringToWasm0(key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.managedsettingsclient_is_managed(this.__wbg_ptr,ptr0,len0);return ret!==0;}/**
     * Fresh handle with no active profile. The host should call this once at boot.
     */constructor(){const ret=wasm.managedsettingsclient_new();this.__wbg_ptr=ret>>>0;ManagedSettingsClientFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Replace the active profile. Clear the profile with `None`.
     * @param {ManagementProfile | null} [profile]
     */update_profile(profile){wasm.managedsettingsclient_update_profile(this.__wbg_ptr,isLikeNone(profile)?0:addHeapObject(profile));}}if(Symbol.dispose)ManagedSettingsClient.prototype[Symbol.dispose]=ManagedSettingsClient.prototype.free;/**
 * The method used to decrypt organization member data.
 * @enum {0 | 1 | 2}
 */const MemberDecryptionType=Object.freeze({/**
     * Decryption using the user's master password.
     */MasterPassword:0,"0":"MasterPassword",/**
     * Decryption via Key Connector.
     */KeyConnector:1,"1":"KeyConnector",/**
     * Decryption via Trusted Device Encryption.
     */TrustedDeviceEncryption:2,"2":"TrustedDeviceEncryption"});/**
 * Client for reading an organization's verified domains.
 */class OrganizationDomainsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(OrganizationDomainsClient.prototype);obj.__wbg_ptr=ptr;OrganizationDomainsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;OrganizationDomainsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_organizationdomainsclient_free(ptr,0);}/**
     * Returns the names of every domain the organization has claimed and verified, for example
     * `example.com`.
     *
     * Domains that have been claimed but not yet verified are excluded, since the organization has
     * not proven ownership of them.
     *
     * Requires the Manage Users or Manage SSO permission. Prefer this over the full domains
     * endpoint when the DNS verification token and verification job metadata are not needed: the
     * full endpoint requires Manage SSO, and calling it without that permission returns a 401
     * that clients treat as an invalid access token, logging the user out.
     * @param {OrganizationId} organization_id
     * @returns {Promise<string[]>}
     */get_verified_domains(organization_id){const ret=wasm.organizationdomainsclient_get_verified_domains(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}}if(Symbol.dispose)OrganizationDomainsClient.prototype[Symbol.dispose]=OrganizationDomainsClient.prototype.free;/**
 * The membership status of a user within an organization.
 * @enum {-1 | 0 | 1 | 2 | 3}
 */const OrganizationUserStatusType=Object.freeze({/**
     * The user's access has been revoked. This may occur at any time from any other status.
     */Revoked:-1,"-1":"Revoked",/**
     * The user has been invited but has not yet accepted.
     */Invited:0,"0":"Invited",/**
     * The user has accepted the invitation but has not yet been confirmed by an admin.
     */Accepted:1,"1":"Accepted",/**
     * The user has been confirmed by an admin and has full access.
     */Confirmed:2,"2":"Confirmed",/**
     * The user has been staged for provisioning but has not yet been invited.
     */Staged:3,"3":"Staged"});/**
 * The role of a user within an organization.
 * @enum {0 | 1 | 2 | 4}
 */const OrganizationUserType=Object.freeze({/**
     * Full administrative control over the organization.
     */Owner:0,"0":"Owner",/**
     * Administrative access with most management capabilities.
     */Admin:1,"1":"Admin",/**
     * Standard organization member.
     */User:2,"2":"User",/**
     * User with a customized set of permissions as indicated by [`Permissions`].
     */Custom:4,"4":"Custom"});/**
 * Client for administering the members of an organization.
 */class OrganizationUsersManagementClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(OrganizationUsersManagementClient.prototype);obj.__wbg_ptr=ptr;OrganizationUsersManagementClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;OrganizationUsersManagementClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_organizationusersmanagementclient_free(ptr,0);}/**
     * Re-sends the invitation email to the given invited members.
     *
     * Returns an `Err` if the entire request fails. Otherwise returns `Ok` containing success or
     * failure information for each member.
     * @param {OrganizationId} organization_id
     * @param {OrganizationUserId[]} organization_user_ids
     * @returns {Promise<OrganizationUserBulkResponse[]>}
     */bulk_reinvite(organization_id,organization_user_ids){const ptr0=passArrayJsValueToWasm0(organization_user_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.organizationusersmanagementclient_bulk_reinvite(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0);return takeObject(ret);}/**
     * Re-sends the invitation email to a single invited member.
     * @param {OrganizationId} organization_id
     * @param {OrganizationUserId} organization_user_id
     * @returns {Promise<void>}
     */reinvite(organization_id,organization_user_id){const ret=wasm.organizationusersmanagementclient_reinvite(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(organization_user_id));return takeObject(ret);}/**
     * Sends invites to the given staged members, promoting them to invited and consuming a seat.
     *
     * Returns an `Err` if the entire request fails. Otherwise returns `Ok` containing success or
     * failure information for each member.
     * @param {OrganizationId} organization_id
     * @param {OrganizationUserId[]} organization_user_ids
     * @returns {Promise<OrganizationUserBulkResponse[]>}
     */send_staged_invites(organization_id,organization_user_ids){const ptr0=passArrayJsValueToWasm0(organization_user_ids,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.organizationusersmanagementclient_send_staged_invites(this.__wbg_ptr,addHeapObject(organization_id),ptr0,len0);return takeObject(ret);}/**
     * Re-encapsulates the account recovery keys of members who have upgraded to a V2 user key.
     *
     * A membership whose account recovery key or upgrade token is malformed or fails to decrypt
     * is sent to the server without a key. That unenrolls the member from account recovery and
     * drops a key that no longer opens the member's vault.
     *
     * Callers that filter a list of organizations should check
     * `can_administer_account_recovery_keys` first.
     * @param {OrganizationId} organization_id
     * @returns {Promise<void>}
     */upgrade_pending_account_recovery_keys(organization_id){const ret=wasm.organizationusersmanagementclient_upgrade_pending_account_recovery_keys(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}}if(Symbol.dispose)OrganizationUsersManagementClient.prototype[Symbol.dispose]=OrganizationUsersManagementClient.prototype.free;/**
 * An untyped IPC message to be sent to another endpoint.
 */class OutgoingMessage{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(OutgoingMessage.prototype);obj.__wbg_ptr=ptr;OutgoingMessageFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}static __unwrap(jsValue){if(!(jsValue instanceof OutgoingMessage)){return 0;}return jsValue.__destroy_into_raw();}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;OutgoingMessageFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_outgoingmessage_free(ptr,0);}/**
     * Destination endpoint for this message.
     * @returns {Endpoint}
     */get destination(){const ret=wasm.__wbg_get_outgoingmessage_destination(this.__wbg_ptr);return takeObject(ret);}/**
     * Serialized payload bytes.
     * @returns {Uint8Array}
     */get payload(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.__wbg_get_outgoingmessage_payload(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Optional topic used for routing/dispatch.
     * @returns {string | undefined}
     */get topic(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.__wbg_get_outgoingmessage_topic(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);let v1;if(r0!==0){v1=getStringFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);}return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Create an outgoing IPC message from raw payload bytes.
     * @param {Uint8Array} payload
     * @param {Endpoint} destination
     * @param {string | null} [topic]
     */constructor(payload,destination,topic){const ptr0=passArray8ToWasm0(payload,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;var ptr1=isLikeNone(topic)?0:passStringToWasm0(topic,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;const ret=wasm.outgoingmessage_new(ptr0,len0,addHeapObject(destination),ptr1,len1);this.__wbg_ptr=ret>>>0;OutgoingMessageFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Create a new message and encode the payload as JSON.
     * @param {any} payload
     * @param {Endpoint} destination
     * @param {string | null} [topic]
     * @returns {OutgoingMessage}
     */static new_json_payload(payload,destination,topic){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);var ptr0=isLikeNone(topic)?0:passStringToWasm0(topic,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;wasm.outgoingmessage_new_json_payload(retptr,addHeapObject(payload),addHeapObject(destination),ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return OutgoingMessage.__wrap(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Destination endpoint for this message.
     * @param {Endpoint} arg0
     */set destination(arg0){wasm.__wbg_set_outgoingmessage_destination(this.__wbg_ptr,addHeapObject(arg0));}/**
     * Serialized payload bytes.
     * @param {Uint8Array} arg0
     */set payload(arg0){const ptr0=passArray8ToWasm0(arg0,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.__wbg_set_outgoingmessage_payload(this.__wbg_ptr,ptr0,len0);}/**
     * Optional topic used for routing/dispatch.
     * @param {string | null} [arg0]
     */set topic(arg0){var ptr0=isLikeNone(arg0)?0:passStringToWasm0(arg0,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;wasm.__wbg_set_outgoingmessage_topic(this.__wbg_ptr,ptr0,len0);}}if(Symbol.dispose)OutgoingMessage.prototype[Symbol.dispose]=OutgoingMessage.prototype.free;/**
 * Entry point for Privileged Access Management (PAM) operations.
 */class PamClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PamClient.prototype);obj.__wbg_ptr=ptr;PamClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PamClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_pamclient_free(ptr,0);}/**
     * Access request operations (submit, activate, cancel, and read the caller's requests).
     * @returns {AccessRequestsClient}
     */access_requests(){const ret=wasm.pamclient_access_requests(this.__wbg_ptr);return AccessRequestsClient.__wrap(ret);}/**
     * Access rule CRUD operations.
     * @returns {AccessRulesClient}
     */access_rules(){const ret=wasm.pamclient_access_rules(this.__wbg_ptr);return AccessRulesClient.__wrap(ret);}/**
     * Approver-side access request operations (inbox, history, and recording a decision).
     * @returns {ApprovalsClient}
     */approvals(){const ret=wasm.pamclient_approvals(this.__wbg_ptr);return ApprovalsClient.__wrap(ret);}/**
     * Access lease operations (read, extend, and end the caller's leases).
     * @returns {LeasesClient}
     */leases(){const ret=wasm.pamclient_leases(this.__wbg_ptr);return LeasesClient.__wrap(ret);}/**
     * Credential rotation operations (access connectors, target systems, and managed credentials).
     * @returns {RotationClient}
     */rotation(){const ret=wasm.pamclient_rotation(this.__wbg_ptr);return RotationClient.__wrap(ret);}}if(Symbol.dispose)PamClient.prototype[Symbol.dispose]=PamClient.prototype.free;/**
 * The main entry point for the Bitwarden SDK in WebAssembly environments
 */class PasswordManagerClient{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PasswordManagerClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_passwordmanagerclient_free(ptr,0);}/**
     * Auth related operations.
     * @returns {AuthClient}
     */auth(){const ret=wasm.passwordmanagerclient_auth(this.__wbg_ptr);return AuthClient.__wrap(ret);}/**
     * Collection related operations.
     *
     * This is registered directly on the top-level client in addition to being nested under
     * [`vault`](Self::vault). Once consumers have migrated to this accessor, the nested one will
     * be removed.
     * @returns {CollectionsClient}
     */collections(){const ret=wasm.passwordmanagerclient_collections(this.__wbg_ptr);return CollectionsClient.__wrap(ret);}/**
     * Bitwarden licensed operations.
     * @returns {CommercialPasswordManagerClient}
     */commercial(){const ret=wasm.passwordmanagerclient_commercial(this.__wbg_ptr);return CommercialPasswordManagerClient.__wrap(ret);}/**
     * Crypto related operations.
     * @returns {CryptoClient}
     */crypto(){const ret=wasm.passwordmanagerclient_crypto(this.__wbg_ptr);return CryptoClient.__wrap(ret);}/**
     * Crypto cipher suite operations.
     * @returns {CryptoCipherSuiteClient}
     */crypto_cipher_suite(){const ret=wasm.passwordmanagerclient_crypto_cipher_suite(this.__wbg_ptr);return CryptoCipherSuiteClient.__wrap(ret);}/**
     * Key management operations that run on every sync.
     * @returns {CryptoSyncHandlerClient}
     */crypto_sync_handler(){const ret=wasm.passwordmanagerclient_crypto_sync_handler(this.__wbg_ptr);return CryptoSyncHandlerClient.__wrap(ret);}/**
     * Test method, echoes back the input
     * @param {string} msg
     * @returns {string}
     */echo(msg){let deferred2_0;let deferred2_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(msg,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.passwordmanagerclient_echo(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);deferred2_0=r0;deferred2_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred2_0,deferred2_1,1);}}/**
     * Emergency access operations, performed as the grantee.
     * @returns {EmergencyAccessClient}
     */emergency_access(){const ret=wasm.passwordmanagerclient_emergency_access(this.__wbg_ptr);return EmergencyAccessClient.__wrap(ret);}/**
     * Encrypted migrations that bring the account's keys and encrypted data to the current format.
     * @returns {EncryptedMigratorClient}
     */encrypted_migrator(){const ret=wasm.passwordmanagerclient_encrypted_migrator(this.__wbg_ptr);return EncryptedMigratorClient.__wrap(ret);}/**
     * Exporter related operations.
     * @returns {ExporterClient}
     */exporters(){const ret=wasm.passwordmanagerclient_exporters(this.__wbg_ptr);return ExporterClient.__wrap(ret);}/**
     * Constructs a specific client for generating passwords and passphrases
     * @returns {GeneratorClient}
     */generator(){const ret=wasm.passwordmanagerclient_generator(this.__wbg_ptr);return GeneratorClient.__wrap(ret);}/**
     * Whether the client is in Gov Mode.
     * @returns {boolean}
     */gov_mode(){const ret=wasm.passwordmanagerclient_gov_mode(this.__wbg_ptr);return ret!==0;}/**
     * Test method, calls http endpoint
     * @param {string} url
     * @returns {Promise<string>}
     */http_get(url){const ptr0=passStringToWasm0(url,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.passwordmanagerclient_http_get(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Importer related operations.
     * @returns {ImporterClient}
     */importers(){const ret=wasm.passwordmanagerclient_importers(this.__wbg_ptr);return ImporterClient.__wrap(ret);}/**
     * Organization invite link operations.
     * @returns {InviteLinkClient}
     */invite_link(){const ret=wasm.passwordmanagerclient_invite_link(this.__wbg_ptr);return InviteLinkClient.__wrap(ret);}/**
     * Key management state bridge operations.
     * @returns {StateBridgeClient}
     */km_state_bridge(){const ret=wasm.passwordmanagerclient_km_state_bridge(this.__wbg_ptr);return StateBridgeClient.__wrap(ret);}/**
     * Administrator-enforced settings operations.
     * @returns {ManagedSettingsClient}
     */managed_settings(){const ret=wasm.passwordmanagerclient_managed_settings(this.__wbg_ptr);return ManagedSettingsClient.__wrap(ret);}/**
     * Initialize a new instance of the SDK client
     *
     * `managed_settings` is the host-owned handle onto the operating system's Unified Endpoint
     * Management profile. The client shares its profile, so profiles pushed after construction
     * are visible here. Pass a fresh `ManagedSettingsClient` where the host has no UEM source.
     * @param {any} token_provider
     * @param {ClientSettings | null | undefined} settings
     * @param {ManagedSettingsClient} managed_settings
     */constructor(token_provider,settings,managed_settings){_assertClass(managed_settings,ManagedSettingsClient);const ret=wasm.passwordmanagerclient_new(addHeapObject(token_provider),isLikeNone(settings)?0:addHeapObject(settings),managed_settings.__wbg_ptr);this.__wbg_ptr=ret>>>0;PasswordManagerClientFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Organization verified domain operations.
     * @returns {OrganizationDomainsClient}
     */organization_domains(){const ret=wasm.passwordmanagerclient_organization_domains(this.__wbg_ptr);return OrganizationDomainsClient.__wrap(ret);}/**
     * Organization member administration operations.
     * @returns {OrganizationUsersManagementClient}
     */organization_users_management(){const ret=wasm.passwordmanagerclient_organization_users_management(this.__wbg_ptr);return OrganizationUsersManagementClient.__wrap(ret);}/**
     * Constructs a specific client for platform-specific functionality
     * @returns {PlatformClient}
     */platform(){const ret=wasm.passwordmanagerclient_platform(this.__wbg_ptr);return PlatformClient.__wrap(ret);}/**
     * Policy related operations.
     * @returns {PolicyClient}
     */policies(){const ret=wasm.passwordmanagerclient_policies(this.__wbg_ptr);return PolicyClient.__wrap(ret);}/**
     * Send sync handler operations.
     * @returns {SendSyncHandlerClient}
     */send_sync_handler(){const ret=wasm.passwordmanagerclient_send_sync_handler(this.__wbg_ptr);return SendSyncHandlerClient.__wrap(ret);}/**
     * Send related operations.
     * @returns {SendClient}
     */sends(){const ret=wasm.passwordmanagerclient_sends(this.__wbg_ptr);return SendClient.__wrap(ret);}/**
     * Test method, always throws an error
     * @param {string} msg
     */throw(msg){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(msg,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.passwordmanagerclient_throw(retptr,this.__wbg_ptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Unlock related operations.
     * @returns {UnlockClient}
     */unlock(){const ret=wasm.passwordmanagerclient_unlock(this.__wbg_ptr);return UnlockClient.__wrap(ret);}/**
     * User crypto management related operations.
     * @returns {UserCryptoManagementClient}
     */user_crypto_management(){const ret=wasm.passwordmanagerclient_user_crypto_management(this.__wbg_ptr);return UserCryptoManagementClient.__wrap(ret);}/**
     * Vault item related operations.
     * @returns {VaultClient}
     */vault(){const ret=wasm.passwordmanagerclient_vault(this.__wbg_ptr);return VaultClient.__wrap(ret);}/**
     * Returns the current SDK version
     * @returns {string}
     */version(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.passwordmanagerclient_version(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}}if(Symbol.dispose)PasswordManagerClient.prototype[Symbol.dispose]=PasswordManagerClient.prototype.free;/**
 * Sub-client for configuring PIN unlock behavior.
 */class PinSettingsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PinSettingsClient.prototype);obj.__wbg_ptr=ptr;PinSettingsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PinSettingsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_pinsettingsclient_free(ptr,0);}/**
     * Returns the configured PIN lock type, if a PIN lock is set.
     * @returns {Promise<PinLockType | undefined>}
     */get_lock_type(){const ret=wasm.pinsettingsclient_get_lock_type(this.__wbg_ptr);return takeObject(ret);}/**
     * Returns the currently configured PIN, if available.
     * @returns {Promise<string | undefined>}
     */get_pin(){const ret=wasm.pinsettingsclient_get_pin(this.__wbg_ptr);return takeObject(ret);}/**
     * Returns the number of characters in the PIN, readable while locked, e.g. so the lock screen
     * can try the PIN as soon as it is fully typed. `None` when no PIN is set, or for a PIN set
     * before its length was stored that hasn't unlocked since.
     * @returns {Promise<number | undefined>}
     */get_pin_length(){const ret=wasm.pinsettingsclient_get_pin_length(this.__wbg_ptr);return takeObject(ret);}/**
     * Returns the current status of PIN unlock
     * @returns {Promise<PinUnlockStatus>}
     */get_status(){const ret=wasm.pinsettingsclient_get_status(this.__wbg_ptr);return takeObject(ret);}/**
     * Sets or updates the account PIN and stores the corresponding unlock state.
     *
     * The `lock_type` determines how PIN unlock behaves for this account.
     * Returns an error when the PIN-protected state cannot be persisted.
     * @param {string} pin
     * @param {PinLockType} lock_type
     * @returns {Promise<void>}
     */set_pin(pin,lock_type){const ptr0=passStringToWasm0(pin,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.pinsettingsclient_set_pin(this.__wbg_ptr,ptr0,len0,addHeapObject(lock_type));return takeObject(ret);}/**
     * Unenrolls from PIN-based unlock
     * @returns {Promise<void>}
     */unset_pin(){const ret=wasm.pinsettingsclient_unset_pin(this.__wbg_ptr);return takeObject(ret);}/**
     * Validates whether `pin` matches the currently configured unlock PIN.
     * @param {string} pin
     * @returns {Promise<boolean>}
     */validate_pin(pin){const ptr0=passStringToWasm0(pin,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.pinsettingsclient_validate_pin(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)PinSettingsClient.prototype[Symbol.dispose]=PinSettingsClient.prototype.free;class PlatformClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PlatformClient.prototype);obj.__wbg_ptr=ptr;PlatformClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PlatformClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_platformclient_free(ptr,0);}/**
     * Load feature flags into the client
     * @param {FeatureFlags} flags
     * @returns {Promise<void>}
     */load_flags(flags){const ret=wasm.platformclient_load_flags(this.__wbg_ptr,addHeapObject(flags));return takeObject(ret);}/**
     * @returns {StateClient}
     */state(){const ret=wasm.platformclient_state(this.__wbg_ptr);return StateClient.__wrap(ret);}}if(Symbol.dispose)PlatformClient.prototype[Symbol.dispose]=PlatformClient.prototype.free;/**
 * Client for policy domain operations.
 *
 * Obtained via [`PoliciesClientExt::policies`] on a [`Client`].
 */class PolicyClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(PolicyClient.prototype);obj.__wbg_ptr=ptr;PolicyClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PolicyClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_policyclient_free(ptr,0);}/**
     * Filter policies of the given type for the current user.
     * @param {Policy[]} policies
     * @param {OrganizationUserPolicyContext[]} organization_user_policy_contexts
     * @param {PolicyType} policy_type
     * @returns {Policy[]}
     */filter_by_type(policies,organization_user_policy_contexts,policy_type){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(policies,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(organization_user_policy_contexts,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.policyclient_filter_by_type(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1,policy_type);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v3=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Evaluate enforcement of the given policy type across all organizations,
     * returning type-erased decisions for the FFI boundary.
     *
     * Not yet intended for consumer use: exposed across the FFI boundary for
     * testing and iteration only. Use [`filter_by_type`](Self::filter_by_type) for now.
     * @param {PolicyType} policy_type
     * @param {Policy[]} policies
     * @param {OrganizationUserPolicyContext[]} organization_user_policy_contexts
     * @returns {PolicyDecisionErased[]}
     */get_all_enforced(policy_type,policies,organization_user_policy_contexts){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArrayJsValueToWasm0(policies,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(organization_user_policy_contexts,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.policyclient_get_all_enforced(retptr,this.__wbg_ptr,policy_type,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v3=getArrayJsValueFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*4,4);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Evaluate enforcement of the given policy type for a single organization,
     * returning a type-erased decision for the FFI boundary.
     *
     * Not yet intended for consumer use: exposed across the FFI boundary for
     * testing only. Use [`filter_by_type`](Self::filter_by_type) for now.
     * @param {PolicyType} policy_type
     * @param {OrganizationId} organization_id
     * @param {Policy[]} policies
     * @param {OrganizationUserPolicyContext[]} organization_user_policy_contexts
     * @returns {PolicyDecisionErased}
     */get_enforced(policy_type,organization_id,policies,organization_user_policy_contexts){const ptr0=passArrayJsValueToWasm0(policies,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArrayJsValueToWasm0(organization_user_policy_contexts,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;const ret=wasm.policyclient_get_enforced(this.__wbg_ptr,policy_type,addHeapObject(organization_id),ptr0,len0,ptr1,len1);return takeObject(ret);}}if(Symbol.dispose)PolicyClient.prototype[Symbol.dispose]=PolicyClient.prototype.free;/**
 * The type of an organization policy.
 *
 * The integer value matches the server's wire format.
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23}
 */const PolicyType=Object.freeze({/**
     * Requires members to have two-step login enabled on their account.
     */TwoFactorAuthentication:0,"0":"TwoFactorAuthentication",/**
     * Sets minimum requirements for members' master passwords.
     */MasterPassword:1,"1":"MasterPassword",/**
     * Sets minimum requirements for the password generator.
     */PasswordGenerator:2,"2":"PasswordGenerator",/**
     * Restricts members to being part of a single organization.
     */SingleOrg:3,"3":"SingleOrg",/**
     * Requires members to authenticate with single sign-on.
     */RequireSso:4,"4":"RequireSso",/**
     * Forces newly added or cloned items to be owned by the organization rather than the
     * member's personal vault. Also enables My Items functionality.
     */OrganizationDataOwnership:5,"5":"OrganizationDataOwnership",/**
     * Disables the ability to create and edit Bitwarden Sends.
     *
     * Superseded by [`SendControls`](Self::SendControls) when the
     * `pm-31885-send-controls` feature flag is active.
     */DisableSend:6,"6":"DisableSend",/**
     * Sets restrictions or defaults for Bitwarden Sends.
     *
     * Superseded by [`SendControls`](Self::SendControls) when the
     * `pm-31885-send-controls` feature flag is active.
     */SendOptions:7,"7":"SendOptions",/**
     * Allows administrators to recover member accounts.
     */ResetPassword:8,"8":"ResetPassword",/**
     * Sets the maximum allowed vault timeout for members.
     */MaximumVaultTimeout:9,"9":"MaximumVaultTimeout",/**
     * Disables members' ability to export their personal vault.
     */DisablePersonalVaultExport:10,"10":"DisablePersonalVaultExport",/**
     * Activates autofill on page load in the browser extension.
     */ActivateAutofill:11,"11":"ActivateAutofill",/**
     * Automatically logs members into apps using single sign-on.
     */AutomaticAppLogIn:12,"12":"AutomaticAppLogIn",/**
     * Removes members' access to the free Bitwarden Families sponsorship benefit.
     */FreeFamiliesSponsorship:13,"13":"FreeFamiliesSponsorship",/**
     * Prevents members from unlocking the app with a PIN.
     */RemoveUnlockWithPin:14,"14":"RemoveUnlockWithPin",/**
     * Restricts the item types that members can create.
     */RestrictedItemTypes:15,"15":"RestrictedItemTypes",/**
     * Sets the default URI match detection strategy for autofill.
     */UriMatchDefaults:16,"16":"UriMatchDefaults",/**
     * Sets the default behavior for the autotype feature.
     */AutotypeDefaultSetting:17,"17":"AutotypeDefaultSetting",/**
     * Automatically confirms invited users into the organization.
     */AutomaticUserConfirmation:18,"18":"AutomaticUserConfirmation",/**
     * Blocks account creation for users with email addresses on claimed domains.
     */BlockClaimedDomainAccountCreation:19,"19":"BlockClaimedDomainAccountCreation",/**
     * Displays an organization-configured banner message to members in their vault.
     */OrganizationUserNotification:20,"20":"OrganizationUserNotification",/**
     * Configures Send-related behavior: disabling Sends, email visibility, access controls,
     * Send types, and deletion.
     *
     * Supersedes [`DisableSend`](Self::DisableSend) and [`SendOptions`](Self::SendOptions) when
     * the `pm-31885-send-controls` feature flag is active on the server.
     */SendControls:21,"21":"SendControls",/**
     * Enables the Fill Assist targeting-rules autofill engine as the default for members who
     * have not explicitly set their Fill Assist preference, and optionally overrides the default
     * rules feed URL.
     */FillAssist:22,"22":"FillAssist",/**
     * Enables AutoType GA policy for members who have not explicitly set their AutoType GA
     * preference.
     */AutotypeGaPolicy:23,"23":"AutotypeGaPolicy"});/**
 * The subscription tier of an organization.
 * @enum {0 | 1 | 2 | 3 | 4}
 */const ProductTierType=Object.freeze({/**
     * Free tier with limited features.
     */Free:0,"0":"Free",/**
     * Families plan for personal use.
     */Families:1,"1":"Families",/**
     * Teams plan for small organizations.
     */Teams:2,"2":"Teams",/**
     * Enterprise plan with full features.
     */Enterprise:3,"3":"Enterprise",/**
     * Starter tier for small teams.
     */TeamsStarter:4,"4":"TeamsStarter"});/**
 * The type of provider.
 * @enum {0 | 1 | 2}
 */const ProviderType=Object.freeze({/**
     * Managed Service Provider - sells and manages its clients' Bitwarden organizations.
     */Msp:0,"0":"Msp",/**
     * Reseller partner - sells Bitwarden to its clients but does not have any administrative
     * access.
     */Reseller:1,"1":"Reseller",/**
     * Business unit provider - used to manage multiple organizations which form part of a single
     * large enterprise.
     */BusinessUnit:2,"2":"BusinessUnit"});/**
 * This module represents a stopgap solution to provide access to primitive crypto functions for JS
 * clients. It is not intended to be used outside of the JS clients and this pattern should not be
 * proliferated. It is necessary because we want to use SDK crypto prior to the SDK being fully
 * responsible for state and keys.
 */class PureCrypto{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;PureCryptoFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_purecrypto_free(ptr,0);}/**
     * Decapsulates (decrypts) a symmetric key using an decapsulation-key/private-key in PKCS8
     * DER format. Note: This is unsigned, so the sender's authenticity cannot be verified by the
     * recipient.
     * @param {string} encapsulated_key
     * @param {Uint8Array} decapsulation_key
     * @returns {Uint8Array}
     */static decapsulate_key_unsigned(encapsulated_key,decapsulation_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(encapsulated_key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(decapsulation_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_decapsulate_key_unsigned(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {string} encrypted_user_key
     * @param {string} master_password
     * @param {string} email
     * @param {Kdf} kdf
     * @returns {Uint8Array}
     */static decrypt_user_key_with_master_password(encrypted_user_key,master_password,email,kdf){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(encrypted_user_key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(master_password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ptr2=passStringToWasm0(email,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len2=WASM_VECTOR_LEN;wasm.purecrypto_decrypt_user_key_with_master_password(retptr,ptr0,len0,ptr1,len1,ptr2,len2,addHeapObject(kdf));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v4=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v4;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Derive output of the KDF for a [bitwarden_crypto::Kdf] configuration.
     * @param {Uint8Array} password
     * @param {Uint8Array} salt
     * @param {Kdf} kdf
     * @returns {Uint8Array}
     */static derive_kdf_material(password,salt,kdf){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(password,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(salt,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_derive_kdf_material(retptr,ptr0,len0,ptr1,len1,addHeapObject(kdf));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Encapsulates (encrypts) a symmetric key using an public-key/encapsulation-key
     * in SPKI format, returning the encapsulated key as a string. Note: This is unsigned, so
     * the sender's authenticity cannot be verified by the recipient.
     * @param {Uint8Array} shared_key
     * @param {Uint8Array} encapsulation_key
     * @returns {string}
     */static encapsulate_key_unsigned(shared_key,encapsulation_key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(shared_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(encapsulation_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_encapsulate_key_unsigned(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * @param {Uint8Array} user_key
     * @param {string} master_password
     * @param {string} email
     * @param {Kdf} kdf
     * @returns {string}
     */static encrypt_user_key_with_master_password(user_key,master_password,email,kdf){let deferred5_0;let deferred5_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(user_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(master_password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ptr2=passStringToWasm0(email,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len2=WASM_VECTOR_LEN;wasm.purecrypto_encrypt_user_key_with_master_password(retptr,ptr0,len0,ptr1,len1,ptr2,len2,addHeapObject(kdf));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr4=r0;var len4=r1;if(r3){ptr4=0;len4=0;throw takeObject(r2);}deferred5_0=ptr4;deferred5_1=len4;return getStringFromWasm0(ptr4,len4);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred5_0,deferred5_1,1);}}/**
     * @returns {SymmetricKey}
     */static make_aes256_cbc_hmac_key(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.purecrypto_make_aes256_cbc_hmac_key(retptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * @returns {Uint8Array}
     */static make_user_key_aes256_cbc_hmac(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.purecrypto_make_user_key_aes256_cbc_hmac(retptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Generates a new v4 UUID using a cryptographically secure random number generator
     * @returns {string}
     */static new_guid(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.purecrypto_new_guid(retptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * Generates a cryptographically secure random number between the given min and max
     * (inclusive).
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */static random_number(min,max){const ret=wasm.purecrypto_random_number(min,max);return ret>>>0;}/**
     * Decrypts data using RSAES-OAEP with SHA-1
     * HAZMAT WARNING: Do not use outside of implementing cryptofunctionservice
     * @param {Uint8Array} encrypted_data
     * @param {Uint8Array} private_key
     * @returns {Uint8Array}
     */static rsa_decrypt_data(encrypted_data,private_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(encrypted_data,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_rsa_decrypt_data(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Encrypts data using RSAES-OAEP with SHA-1
     * HAZMAT WARNING: Do not use outside of implementing cryptofunctionservice
     * @param {Uint8Array} plain_data
     * @param {Uint8Array} public_key
     * @returns {Uint8Array}
     */static rsa_encrypt_data(plain_data,public_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(plain_data,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(public_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_rsa_encrypt_data(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Given a decrypted private RSA key PKCS8 DER this
     * returns the corresponding public RSA key in DER format.
     * HAZMAT WARNING: Do not use outside of implementing cryptofunctionservice
     * @param {Uint8Array} private_key
     * @returns {Uint8Array}
     */static rsa_extract_public_key(private_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(private_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.purecrypto_rsa_extract_public_key(retptr,ptr0,len0);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v2=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v2;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Generates a new RSA key pair and returns the private key
     * HAZMAT WARNING: Do not use outside of implementing cryptofunctionservice
     * @returns {Uint8Array}
     */static rsa_generate_keypair(){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.purecrypto_rsa_generate_keypair(retptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * DEPRECATED: Use `symmetric_decrypt_string` instead.
     * Cleanup ticket: <https://bitwarden.atlassian.net/browse/PM-21247>
     * @param {string} enc_string
     * @param {Uint8Array} key
     * @returns {string}
     */static symmetric_decrypt(enc_string,key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(enc_string,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_decrypt(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * DEPRECATED: Use `symmetric_decrypt_filedata` instead.
     * Cleanup ticket: <https://bitwarden.atlassian.net/browse/PM-21247>
     * @param {Uint8Array} enc_bytes
     * @param {Uint8Array} key
     * @returns {Uint8Array}
     */static symmetric_decrypt_array_buffer(enc_bytes,key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(enc_bytes,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_decrypt_array_buffer(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {string} enc_string
     * @param {Uint8Array} key
     * @returns {Uint8Array}
     */static symmetric_decrypt_bytes(enc_string,key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(enc_string,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_decrypt_bytes(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {Uint8Array} enc_bytes
     * @param {Uint8Array} key
     * @returns {Uint8Array}
     */static symmetric_decrypt_filedata(enc_bytes,key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(enc_bytes,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_decrypt_filedata(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {string} enc_string
     * @param {Uint8Array} key
     * @returns {string}
     */static symmetric_decrypt_string(enc_string,key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(enc_string,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_decrypt_string(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * DEPRECATED: Only used by send keys
     * @param {Uint8Array} plain
     * @param {Uint8Array} key
     * @returns {string}
     */static symmetric_encrypt_bytes(plain,key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(plain,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_encrypt_bytes(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * @param {Uint8Array} plain
     * @param {Uint8Array} key
     * @returns {Uint8Array}
     */static symmetric_encrypt_filedata(plain,key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(plain,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_encrypt_filedata(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * @param {string} plain
     * @param {Uint8Array} key
     * @returns {string}
     */static symmetric_encrypt_string(plain,key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(plain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_symmetric_encrypt_string(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * Unwraps (decrypts) a wrapped PKCS8 DER encoded decapsulation (private) key using a symmetric
     * wrapping key.
     * @param {string} wrapped_key
     * @param {Uint8Array} wrapping_key
     * @returns {Uint8Array}
     */static unwrap_decapsulation_key(wrapped_key,wrapping_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(wrapped_key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(wrapping_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_unwrap_decapsulation_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Unwraps (decrypts) a wrapped SPKI DER encoded encapsulation (public) key using a symmetric
     * wrapping key.
     * @param {string} wrapped_key
     * @param {Uint8Array} wrapping_key
     * @returns {Uint8Array}
     */static unwrap_encapsulation_key(wrapped_key,wrapping_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(wrapped_key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(wrapping_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_unwrap_encapsulation_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Unwraps (decrypts) a wrapped symmetric key using a symmetric wrapping key, returning the
     * unwrapped key as a serialized byte array.
     * @param {string} wrapped_key
     * @param {Uint8Array} wrapping_key
     * @returns {Uint8Array}
     */static unwrap_symmetric_key(wrapped_key,wrapping_key){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(wrapped_key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(wrapping_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_unwrap_symmetric_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Wraps (encrypts) a PKCS8 DER encoded decapsulation (private) key using a symmetric wrapping
     * key,
     * @param {Uint8Array} decapsulation_key
     * @param {Uint8Array} wrapping_key
     * @returns {string}
     */static wrap_decapsulation_key(decapsulation_key,wrapping_key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(decapsulation_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(wrapping_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_wrap_decapsulation_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * Wraps (encrypts) an SPKI DER encoded encapsulation (public) key using a symmetric wrapping
     * key. Note: Usually, a public key is - by definition - public, so this should not be
     * used. The specific use-case for this function is to enable rotateable key sets, where
     * the "public key" is not public, with the intent of preventing the server from being able
     * to overwrite the user key unlocked by the rotateable keyset.
     * @param {Uint8Array} encapsulation_key
     * @param {Uint8Array} wrapping_key
     * @returns {string}
     */static wrap_encapsulation_key(encapsulation_key,wrapping_key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(encapsulation_key,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(wrapping_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_wrap_encapsulation_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * Wraps (encrypts) a symmetric key using a symmetric wrapping key, returning the wrapped key
     * as an EncString.
     * @param {Uint8Array} key_to_be_wrapped
     * @param {Uint8Array} wrapping_key
     * @returns {string}
     */static wrap_symmetric_key(key_to_be_wrapped,wrapping_key){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passArray8ToWasm0(key_to_be_wrapped,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(wrapping_key,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.purecrypto_wrap_symmetric_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}}if(Symbol.dispose)PureCrypto.prototype[Symbol.dispose]=PureCrypto.prototype.free;/**
 * Client for initializing a user account.
 */class RegistrationClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(RegistrationClient.prototype);obj.__wbg_ptr=ptr;RegistrationClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;RegistrationClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_registrationclient_free(ptr,0);}/**
     * Initializes a new cryptographic state for a user and posts it to the server;
     * enrolls the user to master password unlock.
     * @param {JitMasterPasswordRegistrationRequest} request
     * @returns {Promise<JitMasterPasswordRegistrationResponse>}
     */post_keys_for_jit_password_registration(request){const ret=wasm.registrationclient_post_keys_for_jit_password_registration(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Initializes a new cryptographic state for a user and posts it to the server; enrolls the
     * user to key connector unlock.
     * @param {string} key_connector_url
     * @param {string} sso_org_identifier
     * @returns {Promise<KeyConnectorRegistrationResult>}
     */post_keys_for_key_connector_registration(key_connector_url,sso_org_identifier){const ptr0=passStringToWasm0(key_connector_url,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(sso_org_identifier,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ret=wasm.registrationclient_post_keys_for_key_connector_registration(this.__wbg_ptr,ptr0,len0,ptr1,len1);return takeObject(ret);}/**
     * Initializes a new cryptographic state for a user and posts it to the server; enrolls in
     * admin password reset and finally enrolls the user to TDE unlock.
     * @param {TdeRegistrationRequest} request
     * @returns {Promise<TdeRegistrationResponse>}
     */post_keys_for_tde_registration(request){const ret=wasm.registrationclient_post_keys_for_tde_registration(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Initializes new password-based cryptographic state for a user
     * and posts the state to the server
     * @param {UserMasterPasswordRegistrationRequest} request
     * @returns {Promise<UserMasterPasswordRegistrationResponse>}
     */post_keys_for_user_password_registration(request){const ret=wasm.registrationclient_post_keys_for_user_password_registration(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Seals an [`OpenOrgInvite`] into a [`SealedOpenOrgInvite`]. The returned
     * `sealed_data` is safe to place on the verification-email link; the returned
     * `high_entropy_secret` must stay client-side.
     * @param {OpenOrgInvite} input
     * @returns {SealedOpenOrgInvite}
     */seal_open_org_invite_data(input){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.registrationclient_seal_open_org_invite_data(retptr,this.__wbg_ptr,addHeapObject(input));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Unseals a [`SealedOpenOrgInvite`] back into an [`OpenOrgInvite`]. Returns
     * [`RegistrationError::Crypto`] if the paired secret does not match the sealed payload or
     * the payload has been tampered with.
     * @param {SealedOpenOrgInvite} sealed
     * @returns {OpenOrgInvite}
     */unseal_open_org_invite_data(sealed){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.registrationclient_unseal_open_org_invite_data(retptr,this.__wbg_ptr,addHeapObject(sealed));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}if(Symbol.dispose)RegistrationClient.prototype[Symbol.dispose]=RegistrationClient.prototype.free;/**
 * Entry point for PAM credential rotation.
 */class RotationClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(RotationClient.prototype);obj.__wbg_ptr=ptr;RotationClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;RotationClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_rotationclient_free(ptr,0);}/**
     * Managed credential (rotation config) operations.
     * @returns {RotationConfigsClient}
     */configs(){const ret=wasm.rotationclient_configs(this.__wbg_ptr);return RotationConfigsClient.__wrap(ret);}/**
     * Access connector operations.
     * @returns {AccessConnectorsClient}
     */connectors(){const ret=wasm.rotationclient_connectors(this.__wbg_ptr);return AccessConnectorsClient.__wrap(ret);}/**
     * Quartz cron schedule helpers, with no network access.
     * @returns {RotationScheduleClient}
     */schedule(){const ret=wasm.rotationclient_schedule(this.__wbg_ptr);return RotationScheduleClient.__wrap(ret);}/**
     * Target system operations.
     * @returns {TargetSystemsClient}
     */target_systems(){const ret=wasm.rotationclient_target_systems(this.__wbg_ptr);return TargetSystemsClient.__wrap(ret);}}if(Symbol.dispose)RotationClient.prototype[Symbol.dispose]=RotationClient.prototype.free;/**
 * Client for PAM managed-credential (rotation config) operations.
 */class RotationConfigsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(RotationConfigsClient.prototype);obj.__wbg_ptr=ptr;RotationConfigsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;RotationConfigsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_rotationconfigsclient_free(ptr,0);}/**
     * Which actions a config offers, given the status of its target system. Exposed here because
     * a `wasm_record` struct crosses the WASM boundary as plain data, without
     * [`RotationConfigView::actions`].
     * @param {RotationConfigView} config
     * @param {TargetSystemStatus | null} [target_status]
     * @returns {RotationConfigActions}
     */actions(config,target_status){const ret=wasm.rotationconfigsclient_actions(this.__wbg_ptr,addHeapObject(config),isLikeNone(target_status)?0:addHeapObject(target_status));return takeObject(ret);}/**
     * Validates, seals, and creates a rotation config.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigCreateRequest} request
     * @returns {Promise<RotationConfigDetailView>}
     */create(organization_id,request){const ret=wasm.rotationconfigsclient_create(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(request));return takeObject(ret);}/**
     * Deletes a rotation config. The cipher and the target system are untouched; only the link
     * between them, and its rotation history, go away.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @returns {Promise<void>}
     */delete(organization_id,id){const ret=wasm.rotationconfigsclient_delete(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Reads one config with its rotation history.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @returns {Promise<RotationConfigDetailView>}
     */get(organization_id,id){const ret=wasm.rotationconfigsclient_get(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Lists the organization's rotation configs.
     * @param {OrganizationId} organization_id
     * @returns {Promise<RotationConfigView[]>}
     */list(organization_id){const ret=wasm.rotationconfigsclient_list(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}/**
     * Pauses a config, so no new rotation jobs are dispatched.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @returns {Promise<void>}
     */pause(organization_id,id){const ret=wasm.rotationconfigsclient_pause(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Records that an operator rotated a manual-target config's credential out of band, clearing
     * its awaiting-manual-rotation state.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @returns {Promise<void>}
     */record_manual_rotation(organization_id,id){const ret=wasm.rotationconfigsclient_record_manual_rotation(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Resumes a paused config.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @returns {Promise<void>}
     */resume(organization_id,id){const ret=wasm.rotationconfigsclient_resume(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Dispatches an on-demand rotation now, subject to the server's per-config cooldown.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @returns {Promise<void>}
     */rotate_now(organization_id,id){const ret=wasm.rotationconfigsclient_rotate_now(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Re-seals the whole blob, so every field must be resupplied; `cipher_id` and
     * `target_system_id` must match the existing config.
     * @param {OrganizationId} organization_id
     * @param {RotationConfigId} id
     * @param {RotationConfigCreateRequest} request
     * @returns {Promise<RotationConfigDetailView>}
     */update(organization_id,id,request){const ret=wasm.rotationconfigsclient_update(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id),addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)RotationConfigsClient.prototype[Symbol.dispose]=RotationConfigsClient.prototype.free;/**
 * The WASM-facing surface for the schedule helpers.
 */class RotationScheduleClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(RotationScheduleClient.prototype);obj.__wbg_ptr=ptr;RotationScheduleClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;RotationScheduleClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_rotationscheduleclient_free(ptr,0);}/**
     * The cron expression for a preset, or `None` absent a fixed expression.
     * @param {QuartzSchedulePreset} preset
     * @returns {string | undefined}
     */cron_for_preset(preset){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.rotationscheduleclient_cron_for_preset(retptr,this.__wbg_ptr,addHeapObject(preset));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);let v1;if(r0!==0){v1=getStringFromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);}return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * See [`is_likely_quartz_cron`].
     * @param {string} value
     * @returns {boolean}
     */is_likely_quartz_cron(value){const ptr0=passStringToWasm0(value,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.rotationscheduleclient_is_likely_quartz_cron(this.__wbg_ptr,ptr0,len0);return ret!==0;}/**
     * See [`preset_for_cron`].
     * @param {string | null} [cron]
     * @returns {QuartzSchedulePreset}
     */preset_for_cron(cron){var ptr0=isLikeNone(cron)?0:passStringToWasm0(cron,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len0=WASM_VECTOR_LEN;const ret=wasm.rotationscheduleclient_preset_for_cron(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)RotationScheduleClient.prototype[Symbol.dispose]=RotationScheduleClient.prototype.free;/**
 * @enum {0 | 1 | 2 | 3}
 */const RsaError=Object.freeze({Decryption:0,"0":"Decryption",Encryption:1,"1":"Encryption",KeyParse:2,"2":"KeyParse",KeySerialize:3,"3":"KeySerialize"});/**
 * Client exposing random-number generation to cross-platform bindings.
 */class SdkRandomNumberClient{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SdkRandomNumberClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_sdkrandomnumberclient_free(ptr,0);}/**
     * Generate `len` cryptographically-secure random bytes.
     *
     * Returns [`GenBytesError::TooManyBytes`] if `len` exceeds 1 KiB. If you want over 1KiB of
     * randomness, please reconsider your design.
     * @param {number} len
     * @returns {Uint8Array}
     */gen_bytes(len){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.sdkrandomnumberclient_gen_bytes(retptr,this.__wbg_ptr,len);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v1=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v1;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Generate a cryptographically-secure random number in the range `[min, max]` (inclusive).
     *
     * Returns [`GenRangeError::InvalidRange`] if `min > max`.
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */gen_range(min,max){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.sdkrandomnumberclient_gen_range(retptr,this.__wbg_ptr,min,max);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return r0>>>0;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Generate a random v4 UUID, sampled from a CRNG
     *
     * This has 122 random bits of entropy.
     * @returns {string}
     */gen_uuid(){let deferred1_0;let deferred1_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.sdkrandomnumberclient_gen_uuid(retptr,this.__wbg_ptr);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);deferred1_0=r0;deferred1_1=r1;return getStringFromWasm0(r0,r1);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred1_0,deferred1_1,1);}}/**
     * Construct a new client.
     */constructor(){const ret=wasm.sdkrandomnumberclient_new();this.__wbg_ptr=ret>>>0;SdkRandomNumberClientFinalization.register(this,this.__wbg_ptr,this);return this;}}if(Symbol.dispose)SdkRandomNumberClient.prototype[Symbol.dispose]=SdkRandomNumberClient.prototype.free;/**
 * @enum {0}
 */const SecureNoteType=Object.freeze({Generic:0,"0":"Generic"});/**
 * The `SendAccessClient` is used to interact with the Bitwarden API to get send access tokens.
 */class SendAccessClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SendAccessClient.prototype);obj.__wbg_ptr=ptr;SendAccessClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SendAccessClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_sendaccessclient_free(ptr,0);}/**
     * Requests a new send access token.
     * @param {SendAccessTokenRequest} request
     * @returns {Promise<SendAccessTokenResponse>}
     */request_send_access_token(request){const ret=wasm.sendaccessclient_request_send_access_token(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)SendAccessClient.prototype[Symbol.dispose]=SendAccessClient.prototype.free;class SendClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SendClient.prototype);obj.__wbg_ptr=ptr;SendClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SendClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_sendclient_free(ptr,0);}/**
     * Accesses a send, authenticated with a send access token.
     * The returned [SendAccessResponse] contains encrypted fields that must be decrypted
     * client-side using the key derived from the URL fragment.
     * @param {string} access_token
     * @returns {Promise<SendAccessResponse>}
     */access_send(access_token){const ptr0=passStringToWasm0(access_token,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.sendclient_access_send(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Create a new [Send] and save it to the server.
     * @param {SendAddRequest} request
     * @returns {Promise<SendView>}
     */create(request){const ret=wasm.sendclient_create(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Create a new file [Send] and save it to the server.
     *
     * `file_buffer` is the *plaintext* file content. It is encrypted internally under the send key
     * derived for this send, and its ciphertext length is sent to the server as `file_length` so
     * the server can enforce storage quotas before the upload (matching the legacy client's
     * encrypt-then-create ordering).
     *
     * Returns the created send, the encrypted file bytes, and the metadata needed to upload them.
     * After calling this, hand [`CreateFileSendResponse::encrypted_file_buffer`] and the upload
     * metadata to [`SendClient::upload_send_file`].
     * @param {SendAddRequest} request
     * @param {Uint8Array} file_buffer
     * @returns {Promise<CreateFileSendResponse>}
     */create_file_send(request,file_buffer){const ptr0=passArray8ToWasm0(file_buffer,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.sendclient_create_file_send(this.__wbg_ptr,addHeapObject(request),ptr0,len0);return takeObject(ret);}/**
     * Decrypt a [`Send`] into a [`SendView`].
     * This is a temporary function to support the transition to fully using the SDK for Send logic
     * @param {Send} send
     * @returns {SendView}
     */decrypt_send(send){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.sendclient_decrypt_send(retptr,this.__wbg_ptr,addHeapObject(send));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Decrypt a [`SendAccessResponse`] into a [`SendAccessView`].
     *
     * `key_b64` is the URL-safe-base64 send key from the trailing segment of the send URL
     * fragment (16 bytes when decoded) — the same form [`SendAccessKey::from_url_b64`] accepts
     *
     * This is a temporary function to support the transition to fully using the SDK for Send logic
     * @param {string} key_b64
     * @param {SendAccessResponse} response
     * @returns {SendAccessView}
     */static decrypt_send_access(key_b64,response){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(key_b64,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.sendclient_decrypt_send_access(retptr,ptr0,len0,addHeapObject(response));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Delete a [Send] from the server and remove it from local state.
     * @param {SendId} send_id
     * @returns {Promise<void>}
     */delete(send_id){const ret=wasm.sendclient_delete(this.__wbg_ptr,addHeapObject(send_id));return takeObject(ret);}/**
     * Edit the [Send] and save it to the server.
     * @param {SendId} send_id
     * @param {SendEditRequest} request
     * @returns {Promise<SendView>}
     */edit(send_id,request){const ret=wasm.sendclient_edit(this.__wbg_ptr,addHeapObject(send_id),addHeapObject(request));return takeObject(ret);}/**
     * Encrypt a send with the provided key. This should only be used when rotating encryption
     * keys in the Web client.
     *
     * Until Typescript based key-rotation is removed after completing the rollout of sdk-based
     * key-rotation, this method must be provided the new symmetric key in base64 format. See
     * PM-23084
     * @param {SendView} send_view
     * @param {B64} new_key
     * @returns {Promise<Send>}
     */encrypt_send_for_rotation(send_view,new_key){const ret=wasm.sendclient_encrypt_send_for_rotation(this.__wbg_ptr,addHeapObject(send_view),addHeapObject(new_key));return takeObject(ret);}/**
     * Fetch a single [Send] by its ID from the server and persist it to local state.
     *
     * Unlike [`SendClient::get`], which only reads from local state, this makes a network request
     * and refreshes the locally stored copy. Returns the still-encrypted [Send] — matching what a
     * sync-notification diff needs to compare `revision_date` and update encrypted state without
     * a decrypt round-trip — rather than a [`SendView`](crate::SendView); callers that want the
     * decrypted form can pass the result to [`SendClient::decrypt`].
     * @param {SendId} send_id
     * @returns {Promise<Send>}
     */fetch(send_id){const ret=wasm.sendclient_fetch(this.__wbg_ptr,addHeapObject(send_id));return takeObject(ret);}/**
     * Get a specific [Send] by its ID from state and decrypt it to a [SendView].
     * @param {SendId} send_id
     * @returns {Promise<SendView>}
     */get(send_id){const ret=wasm.sendclient_get(this.__wbg_ptr,addHeapObject(send_id));return takeObject(ret);}/**
     * Gets file download data for a file send, authenticated with a send access token.
     * @param {string} access_token
     * @param {string} file_id
     * @returns {Promise<SendFileDownloadData>}
     */get_file_download_data(access_token,file_id){const ptr0=passStringToWasm0(access_token,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(file_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ret=wasm.sendclient_get_file_download_data(this.__wbg_ptr,ptr0,len0,ptr1,len1);return takeObject(ret);}/**
     * Get all sends from state and decrypt them to a list of [SendView].
     * @returns {Promise<SendView[]>}
     */list(){const ret=wasm.sendclient_list(this.__wbg_ptr);return takeObject(ret);}/**
     * Remove the password from a [Send], saving the updated state to the server and local state.
     * @param {SendId} send_id
     * @returns {Promise<SendView>}
     */remove_password(send_id){const ret=wasm.sendclient_remove_password(this.__wbg_ptr,addHeapObject(send_id));return takeObject(ret);}/**
     * Renew the upload URL for a file [Send].
     *
     * Returns a fresh upload URL if the previous one has expired.
     * @param {SendId} send_id
     * @param {string} file_id
     * @returns {Promise<string>}
     */renew_file_upload_url(send_id,file_id){const ptr0=passStringToWasm0(file_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.sendclient_renew_file_upload_url(this.__wbg_ptr,addHeapObject(send_id),ptr0,len0);return takeObject(ret);}/**
     * Retry any [Send] deletions that previously failed (e.g. while offline), removing each from
     * the pending queue once the server confirms it is gone.
     * @returns {Promise<void>}
     */retry_pending_deletions(){const ret=wasm.sendclient_retry_pending_deletions(this.__wbg_ptr);return takeObject(ret);}/**
     * Upload the encrypted file data for a file [Send].
     *
     * `data` must be the encrypted file content (encrypted with the send key).
     * `encrypted_file_name` is the encrypted file name string from [`CreateFileSendResponse`].
     *
     * `file_upload_type` and `upload_url` come from [`CreateFileSendResponse`] and select the
     * upload backend:
     * - [`FileUploadType::Direct`] uploads directly to the Bitwarden server via a multipart POST.
     *   The `upload_url` is ignored in this case (the direct endpoint is derived from the send and
     *   file IDs).
     * - [`FileUploadType::Azure`] `PUT`s the ciphertext to the pre-signed Azure Blob Storage
     *   `upload_url`. If that URL has expired, it is renewed once via
     *   [`SendClient::renew_file_upload_url`] and the upload is retried.
     * @param {SendId} send_id
     * @param {string} file_id
     * @param {string} encrypted_file_name
     * @param {FileUploadType} file_upload_type
     * @param {string} upload_url
     * @param {Uint8Array} data
     * @returns {Promise<void>}
     */upload_send_file(send_id,file_id,encrypted_file_name,file_upload_type,upload_url,data){const ptr0=passStringToWasm0(file_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(encrypted_file_name,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ptr2=passStringToWasm0(upload_url,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len2=WASM_VECTOR_LEN;const ptr3=passArray8ToWasm0(data,wasm.__wbindgen_malloc);const len3=WASM_VECTOR_LEN;const ret=wasm.sendclient_upload_send_file(this.__wbg_ptr,addHeapObject(send_id),ptr0,len0,ptr1,len1,file_upload_type,ptr2,len2,ptr3,len3);return takeObject(ret);}}if(Symbol.dispose)SendClient.prototype[Symbol.dispose]=SendClient.prototype.free;/**
 * Indicates the version of Send data encryption that is being used
 * @enum {1}
 */const SendEncryptionType=Object.freeze({/**
     * V1 encryption (field by field)
     */V1:1,"1":"V1"});/**
 * Client dedicated to receiving (anonymously accessing) a Send.
 *
 * Receiving is the only Send operation that may target a different Bitwarden instance than the
 * one the user is signed into: the target server is dictated by the Send link itself (e.g. a
 * self-hosted or other-region server). This client is therefore built from its own
 * [`ClientSettings`] and carries no user identity, tokens, or key store. Creating and editing
 * Sends never needs this, and should go through the regular
 * [`SendClient`](crate::SendClient).
 */class SendReceiveClient{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SendReceiveClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_sendreceiveclient_free(ptr,0);}/**
     * Accesses a send, authenticated with a send access token.
     * The returned [SendAccessResponse] contains encrypted fields that must be decrypted
     * with [`Self::decrypt_send_access`] using the key from the URL fragment.
     * @param {string} access_token
     * @returns {Promise<SendAccessResponse>}
     */access_send(access_token){const ptr0=passStringToWasm0(access_token,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.sendreceiveclient_access_send(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Decrypt a [`SendAccessResponse`] into a [`SendAccessView`] using the URL-safe-base64 send
     * key from the trailing segment of the send URL fragment.
     * @param {string} key_b64
     * @param {SendAccessResponse} response
     * @returns {SendAccessView}
     */decrypt_send_access(key_b64,response){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(key_b64,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.sendreceiveclient_decrypt_send_access(retptr,this.__wbg_ptr,ptr0,len0,addHeapObject(response));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Decrypt a downloaded file-send blob using the URL-safe-base64 send key.
     * @param {string} key_b64
     * @param {Uint8Array} buffer
     * @returns {Uint8Array}
     */decrypt_send_access_file(key_b64,buffer){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(key_b64,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passArray8ToWasm0(buffer,wasm.__wbindgen_malloc);const len1=WASM_VECTOR_LEN;wasm.sendreceiveclient_decrypt_send_access_file(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);if(r3){throw takeObject(r2);}var v3=getArrayU8FromWasm0(r0,r1).slice();wasm.__wbindgen_free(r0,r1*1,1);return v3;}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
     * Gets file download data for a file send, authenticated with a send access token.
     * @param {string} access_token
     * @param {string} file_id
     * @returns {Promise<SendFileDownloadData>}
     */get_file_download_data(access_token,file_id){const ptr0=passStringToWasm0(access_token,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(file_id,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;const ret=wasm.sendreceiveclient_get_file_download_data(this.__wbg_ptr,ptr0,len0,ptr1,len1);return takeObject(ret);}/**
     * Hash `password` with the URL-safe-base64 send key into the `password_hash_b64` credential
     * expected by [`Self::request_send_access_token`].
     * @param {string} key_b64
     * @param {string} password
     * @returns {string}
     */hash_send_password(key_b64,password){let deferred4_0;let deferred4_1;try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(key_b64,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ptr1=passStringToWasm0(password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;wasm.sendreceiveclient_hash_send_password(retptr,this.__wbg_ptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);var r3=getDataViewMemory0().getInt32(retptr+4*3,true);var ptr3=r0;var len3=r1;if(r3){ptr3=0;len3=0;throw takeObject(r2);}deferred4_0=ptr3;deferred4_1=len3;return getStringFromWasm0(ptr3,len3);}finally{wasm.__wbindgen_add_to_stack_pointer(16);wasm.__wbindgen_free(deferred4_0,deferred4_1,1);}}/**
     * Create a receive client targeting the instance described by `settings`.
     * @param {ClientSettings | null} [settings]
     */constructor(settings){const ret=wasm.sendreceiveclient_new(isLikeNone(settings)?0:addHeapObject(settings));this.__wbg_ptr=ret>>>0;SendReceiveClientFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Requests a send access token from the identity server of the instance this client targets.
     *
     * For a password-protected Send, the request's credentials carry the hash returned by
     * [`Self::hash_send_password`]. Minting the token here, rather than through a signed-in
     * client, guarantees it (and any password hash) is only ever sent to the server that hosts
     * the Send.
     * @param {SendAccessTokenRequest} request
     * @returns {Promise<SendAccessTokenResponse>}
     */request_send_access_token(request){const ret=wasm.sendreceiveclient_request_send_access_token(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)SendReceiveClient.prototype[Symbol.dispose]=SendReceiveClient.prototype.free;/**
 * Client for the Send sync handler, for callers that fetch sync data themselves (e.g. the Web
 * client) and only want the Send-persistence part of a sync run.
 */class SendSyncHandlerClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(SendSyncHandlerClient.prototype);obj.__wbg_ptr=ptr;SendSyncHandlerClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SendSyncHandlerClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_sendsynchandlerclient_free(ptr,0);}/**
     * Persists the sends from a sync response. Call this after each sync.
     * @param {Send[]} sends
     * @returns {Promise<void>}
     */on_sync(sends){const ptr0=passArrayJsValueToWasm0(sends,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.sendsynchandlerclient_on_sync(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}}if(Symbol.dispose)SendSyncHandlerClient.prototype[Symbol.dispose]=SendSyncHandlerClient.prototype.free;/**
 * The type of Send, either text, file, or item
 * @enum {0 | 1 | 2}
 */const SendType=Object.freeze({/**
     * Text-based send
     */Text:0,"0":"Text",/**
     * File-based send
     */File:1,"1":"File",/**
     * Item-based send
     */Item:2,"2":"Item"});/**
 * JavaScript wrapper for ServerCommunicationConfigClient
 *
 * This provides TypeScript access to the server communication configuration client,
 * allowing clients to check bootstrap requirements and retrieve cookies for HTTP requests.
 */class ServerCommunicationConfigClient{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;ServerCommunicationConfigClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_servercommunicationconfigclient_free(ptr,0);}/**
     * Acquires a cookie from the platform and saves it to the repository
     *
     * This method calls the platform API to trigger cookie acquisition (e.g., browser
     * redirect to IdP), then validates and stores the acquired cookie in the repository.
     *
     * # Arguments
     *
     * * `domain` - The server domain (e.g., "vault.acme.com")
     *
     * # Errors
     *
     * Returns an error if:
     * - Cookie acquisition was cancelled by the user
     * - Server configuration doesn't support SSO cookies (Direct bootstrap)
     * - Acquired cookie name doesn't match expected name
     * - Repository operations fail
     * @param {string} domain
     * @returns {Promise<AcquiredCookie[]>}
     */acquireCookie(domain){const ptr0=passStringToWasm0(domain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.servercommunicationconfigclient_acquireCookie(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Returns all cookies that should be included in requests to this server
     *
     * Returns an array of [cookie_name, cookie_value] pairs.
     *
     * # Arguments
     *
     * * `domain` - The server domain (e.g., "vault.acme.com")
     * @param {string} domain
     * @returns {Promise<any>}
     */cookies(domain){const ptr0=passStringToWasm0(domain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.servercommunicationconfigclient_cookies(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Retrieves the server communication configuration for a domain
     *
     * If no configuration exists, returns a default Direct bootstrap configuration.
     *
     * # Arguments
     *
     * * `domain` - The server domain (e.g., "vault.acme.com")
     *
     * # Errors
     *
     * Returns an error if the repository fails to retrieve the configuration.
     * @param {string} domain
     * @returns {Promise<ServerCommunicationConfig>}
     */getConfig(domain){const ptr0=passStringToWasm0(domain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.servercommunicationconfigclient_getConfig(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Returns all cookies that should be included in requests to this server
     * and triggers cookie acquisition if needed
     *
     * # Arguments
     *
     * * `domain` - The server domain (e.g., "vault.acme.com")
     * @param {string} domain
     * @returns {Promise<AcquiredCookie[]>}
     */getCookies(domain){const ptr0=passStringToWasm0(domain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.servercommunicationconfigclient_getCookies(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Determines if cookie bootstrapping is needed for this domain
     *
     * # Arguments
     *
     * * `domain` - The server domain (e.g., "vault.acme.com")
     * @param {string} domain
     * @returns {Promise<boolean>}
     */needsBootstrap(domain){const ptr0=passStringToWasm0(domain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.servercommunicationconfigclient_needsBootstrap(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Creates a new ServerCommunicationConfigClient with a JavaScript repository and platform API
     *
     * The repository should be backed by StateProvider (or equivalent
     * storage mechanism) for persistence.
     *
     * # Arguments
     *
     * * `repository` - JavaScript implementation of the repository interface
     * * `platform_api` - JavaScript implementation of the platform API interface
     * @param {ServerCommunicationConfigRepository} repository
     * @param {ServerCommunicationConfigPlatformApi} platform_api
     */constructor(repository,platform_api){const ret=wasm.servercommunicationconfigclient_new(addHeapObject(repository),addHeapObject(platform_api));this.__wbg_ptr=ret>>>0;ServerCommunicationConfigClientFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Sets the server communication configuration for a domain
     *
     * This method saves the provided communication configuration to the repository.
     * Typically called when receiving the `/api/config` response from the server.
     * Previously acquired cookies are preserved automatically.
     *
     * # Arguments
     *
     * * `domain` - The server domain (e.g., "vault.acme.com")
     * * `request` - The server communication configuration to store
     *
     * # Errors
     *
     * Returns an error if the repository save operation fails
     * @param {string} domain
     * @param {SetCommunicationTypeRequest} request
     * @returns {Promise<void>}
     */setCommunicationType(domain,request){const ptr0=passStringToWasm0(domain,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.servercommunicationconfigclient_setCommunicationType(this.__wbg_ptr,ptr0,len0,addHeapObject(request));return takeObject(ret);}/**
     * Sets the server communication configuration using the domain from the config
     *
     * Extracts the `cookie_domain` from the `SsoCookieVendor` config and uses it as the
     * storage key. If the config is `Direct` or `cookie_domain` is not set, the call
     * is silently ignored.
     *
     * # Arguments
     *
     * * `config` - The server communication configuration to store
     *
     * # Errors
     *
     * Returns an error if the repository save operation fails
     * @param {SetCommunicationTypeRequest} request
     * @returns {Promise<void>}
     */setCommunicationTypeV2(request){const ret=wasm.servercommunicationconfigclient_setCommunicationTypeV2(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)ServerCommunicationConfigClient.prototype[Symbol.dispose]=ServerCommunicationConfigClient.prototype.free;/**
 * Shared-unlock peer for WASM clients.
 */class SharedUnlockPeer{__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;SharedUnlockPeerFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_sharedunlockpeer_free(ptr,0);}/**
     * Forwards a device event to the shared-unlock peer state machine.
     * @param {DeviceEvent} event
     * @returns {Promise<void>}
     */handle_device_event(event){const ret=wasm.sharedunlockpeer_handle_device_event(this.__wbg_ptr,addHeapObject(event));return takeObject(ret);}/**
     * Creates a new shared-unlock peer
     * @param {IpcClient} ipc_client
     * @param {SharedUnlockDriver} driver
     */constructor(ipc_client,driver){_assertClass(ipc_client,IpcClient);const ret=wasm.sharedunlockpeer_new(ipc_client.__wbg_ptr,addHeapObject(driver));this.__wbg_ptr=ret>>>0;SharedUnlockPeerFinalization.register(this,this.__wbg_ptr,this);return this;}/**
     * Sets which clients this peer shares one user's unlock state with. Defaults to none.
     * @param {UserId} user_id
     * @param {SharedUnlockClient[]} destinations
     */set_destinations(user_id,destinations){const ptr0=passArrayJsValueToWasm0(destinations,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;wasm.sharedunlockpeer_set_destinations(this.__wbg_ptr,addHeapObject(user_id),ptr0,len0);}/**
     * Starts the shared-unlock peer
     * @param {AbortController | null} [abort_controller]
     * @returns {Promise<void>}
     */start(abort_controller){const ret=wasm.sharedunlockpeer_start(this.__wbg_ptr,isLikeNone(abort_controller)?0:addHeapObject(abort_controller));return takeObject(ret);}}if(Symbol.dispose)SharedUnlockPeer.prototype[Symbol.dispose]=SharedUnlockPeer.prototype.free;/**
 * Client for interacting with the key-management state bridge. This is used to read and write
 * state held by the clients
 */class StateBridgeClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(StateBridgeClient.prototype);obj.__wbg_ptr=ptr;StateBridgeClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;StateBridgeClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_statebridgeclient_free(ptr,0);}/**
     * Registers a the state bridge implementation provided by the host environment.
     * @param {WasmStateBridge} bridge_impl
     */register_bridge_impl(bridge_impl){wasm.statebridgeclient_register_bridge_impl(this.__wbg_ptr,addHeapObject(bridge_impl));}}if(Symbol.dispose)StateBridgeClient.prototype[Symbol.dispose]=StateBridgeClient.prototype.free;class StateClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(StateClient.prototype);obj.__wbg_ptr=ptr;StateClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;StateClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_stateclient_free(ptr,0);}/**
     * @param {Repositories} repositories
     */register_client_managed_repositories(repositories){wasm.stateclient_register_client_managed_repositories(this.__wbg_ptr,addHeapObject(repositories));}}if(Symbol.dispose)StateClient.prototype[Symbol.dispose]=StateClient.prototype.free;/**
 * Client for PAM rotation target-system operations.
 */class TargetSystemsClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TargetSystemsClient.prototype);obj.__wbg_ptr=ptr;TargetSystemsClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;TargetSystemsClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_targetsystemsclient_free(ptr,0);}/**
     * Registers a target system with a `POST`, leaving it
     * [`PendingSeal`](TargetSystemStatus::PendingSeal), then seals its blob under the new ID and
     * `PUT`s it. If the second phase fails the row stays `PendingSeal`; retry via
     * [`Self::update`] with the same request, or [`Self::delete`] it.
     * @param {OrganizationId} organization_id
     * @param {TargetSystemCreateRequest} request
     * @returns {Promise<TargetSystemView>}
     */create(organization_id,request){const ret=wasm.targetsystemsclient_create(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(request));return takeObject(ret);}/**
     * Permanently deletes a target system. The server refuses while any rotation config still
     * names the target; delete those configs first, or [`disable`](TargetSystemsClient::disable)
     * a target that is only unavailable.
     * @param {OrganizationId} organization_id
     * @param {TargetSystemId} id
     * @returns {Promise<void>}
     */delete(organization_id,id){const ret=wasm.targetsystemsclient_delete(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Stops new rotation jobs being dispatched for a target system. Jobs already in flight run to
     * completion.
     * @param {OrganizationId} organization_id
     * @param {TargetSystemId} id
     * @returns {Promise<void>}
     */disable(organization_id,id){const ret=wasm.targetsystemsclient_disable(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Puts a disabled target system back into service; new rotation jobs dispatch for it again.
     * @param {OrganizationId} organization_id
     * @param {TargetSystemId} id
     * @returns {Promise<void>}
     */enable(organization_id,id){const ret=wasm.targetsystemsclient_enable(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id));return takeObject(ret);}/**
     * Lists the organization's target systems.
     * @param {OrganizationId} organization_id
     * @returns {Promise<TargetSystemView[]>}
     */list(organization_id){const ret=wasm.targetsystemsclient_list(this.__wbg_ptr,addHeapObject(organization_id));return takeObject(ret);}/**
     * Re-seals the whole blob, so every field must be resupplied. Also how a
     * [`PendingSeal`](TargetSystemStatus::PendingSeal) row left by a failed [`Self::create`]
     * becomes [`Active`](TargetSystemStatus::Active).
     *
     * Rejects a `method` change, and a `kind` change when the existing blob is verified.
     * @param {OrganizationId} organization_id
     * @param {TargetSystemId} id
     * @param {TargetSystemCreateRequest} request
     * @returns {Promise<void>}
     */update(organization_id,id,request){const ret=wasm.targetsystemsclient_update(this.__wbg_ptr,addHeapObject(organization_id),addHeapObject(id),addHeapObject(request));return takeObject(ret);}}if(Symbol.dispose)TargetSystemsClient.prototype[Symbol.dispose]=TargetSystemsClient.prototype.free;class TotpClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(TotpClient.prototype);obj.__wbg_ptr=ptr;TotpClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;TotpClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_totpclient_free(ptr,0);}/**
     * Generates a TOTP code from a provided key
     *
     * # Arguments
     * - `key` - Can be:
     *     - A base32 encoded string
     *     - OTP Auth URI
     *     - Steam URI
     * - `time_ms` - Optional timestamp in milliseconds
     * @param {string} key
     * @param {number | null} [time_ms]
     * @returns {TotpResponse}
     */generate_totp(key,time_ms){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;wasm.totpclient_generate_totp(retptr,this.__wbg_ptr,ptr0,len0,!isLikeNone(time_ms),isLikeNone(time_ms)?0:time_ms);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}}if(Symbol.dispose)TotpClient.prototype[Symbol.dispose]=TotpClient.prototype.free;/**
 * Client for unlocking and locking the vault in memory, and for minting session keys and
 * unlocking the vault with one.
 */class UnlockClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UnlockClient.prototype);obj.__wbg_ptr=ptr;UnlockClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UnlockClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_unlockclient_free(ptr,0);}/**
     * Clear the in-memory user and organization keys, retaining the client instance so that a
     * later [`UnlockClient::unlock`] re-unlocks it.
     *
     * On WASM, unlocking also copies the user key into client-held state through the
     * key-management state bridge, so locking clears it there as well. The in-memory keys are
     * cleared first, so the SDK is locked even if the state bridge call fails.
     * @returns {Promise<void>}
     */lock(){const ret=wasm.unlockclient_lock(this.__wbg_ptr);return takeObject(ret);}/**
     * Unlock the client with the supplied unlock factor.
     *
     * [`UnlockMethod::Legacy`] initializes the user's crypto state from the request, as
     * `CryptoClient::initialize_user_crypto` does, and returns its errors as
     * [`UnlockError::EncryptionSettings`].
     *
     * If the client is already unlocked, this returns [`UnlockError::AlreadyUnlocked`] before
     * doing any work and leaves the client's keys untouched. The check only looks at whether a
     * user key is present: it does not check which key the client holds, or whether it belongs
     * to the user or account in the request.
     * @param {UnlockMethod} method
     * @returns {Promise<void>}
     */unlock(method){const ret=wasm.unlockclient_unlock(this.__wbg_ptr,addHeapObject(method));return takeObject(ret);}}if(Symbol.dispose)UnlockClient.prototype[Symbol.dispose]=UnlockClient.prototype.free;/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5}
 */const UriMatchType=Object.freeze({Domain:0,"0":"Domain",Host:1,"1":"Host",StartsWith:2,"2":"StartsWith",Exact:3,"3":"Exact",RegularExpression:4,"4":"RegularExpression",Never:5,"5":"Never"});/**
 * Client for managing the cryptographic machinery of a user account, including key-rotation.
 */class UserCryptoManagementClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(UserCryptoManagementClient.prototype);obj.__wbg_ptr=ptr;UserCryptoManagementClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;UserCryptoManagementClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_usercryptomanagementclient_free(ptr,0);}/**
     * Changes the account's KDF settings, and sets them on the server.
     * @param {string} password
     * @param {Kdf} new_kdf
     * @returns {Promise<void>}
     */change_kdf(password,new_kdf){const ptr0=passStringToWasm0(password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.usercryptomanagementclient_change_kdf(this.__wbg_ptr,ptr0,len0,addHeapObject(new_kdf));return takeObject(ret);}/**
     * Fetches the emergency access public keys for V1 emergency access memberships for the user.
     * These have to be trusted manually be the user before rotating.
     * @returns {Promise<V1EmergencyAccessMembership[]>}
     */get_untrusted_emergency_access_public_keys(){const ret=wasm.usercryptomanagementclient_get_untrusted_emergency_access_public_keys(this.__wbg_ptr);return takeObject(ret);}/**
     * The organization and emergency access public keys the user has to confirm as trusted before
     * a key rotation.
     *
     * When the rotation creates a V2 upgrade token, the organization list is empty. Organization
     * admins update account recovery from that token, so the user confirms nothing. Every other
     * rotation returns one entry per organization the user is enrolled in for account recovery.
     *
     * Emergency access grantees always need a confirmation, because every rotation shares the new
     * user key with each of them.
     * @param {UpgradeTokenAction} upgrade_token_action
     * @returns {Promise<UntrustedMembershipsResponse>}
     */get_untrusted_memberships(upgrade_token_action){const ret=wasm.usercryptomanagementclient_get_untrusted_memberships(this.__wbg_ptr,addHeapObject(upgrade_token_action));return takeObject(ret);}/**
     * The organization public keys the user has to confirm as trusted before a key rotation.
     *
     * When the rotation creates a V2 upgrade token, the list is empty. Organization admins update
     * account recovery from that token, so the user confirms nothing. Every other rotation returns
     * one entry per organization the user is enrolled in for account recovery.
     * @param {UpgradeTokenAction} upgrade_token_action
     * @returns {Promise<V1OrganizationMembership[]>}
     */get_untrusted_organization_public_keys(upgrade_token_action){const ret=wasm.usercryptomanagementclient_get_untrusted_organization_public_keys(this.__wbg_ptr,addHeapObject(upgrade_token_action));return takeObject(ret);}/**
     * Migrates an initialized account to Key Connector unlock.
     *
     * Requires the client to be unlocked so the current user key is available in memory.
     * @param {string} key_connector_url
     * @returns {Promise<void>}
     */migrate_to_key_connector(key_connector_url){const ptr0=passStringToWasm0(key_connector_url,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.usercryptomanagementclient_migrate_to_key_connector(this.__wbg_ptr,ptr0,len0);return takeObject(ret);}/**
     * Combines a password change and user key rotation into a single request.
     *
     * Before rotating, this checks whether the user's public key encryption key pair needs
     * regeneration and fixes it if necessary. This ensures that key rotation can proceed even
     * if the existing private key is corrupt.
     * @param {PasswordChangeAndRotateUserKeysRequest} request
     * @returns {Promise<void>}
     */password_change_and_rotate_user_keys(request){const ret=wasm.usercryptomanagementclient_password_change_and_rotate_user_keys(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Returns the PIN settings sub-client.
     * @returns {PinSettingsClient}
     */pin_settings(){const ret=wasm.usercryptomanagementclient_pin_settings(this.__wbg_ptr);return PinSettingsClient.__wrap(ret);}/**
     * Checks whether the user's public key encryption key pair needs regeneration, and if so,
     * generates a new key pair and submits it to the server.
     *
     * If regeneration is performed, the updated [`WrappedAccountCryptographicState`] is
     * persisted via the state bridge (when registered).
     *
     * Requires the client to be unlocked so the current user key is available in memory.
     * Only applicable to V1 encryption accounts.
     * @returns {Promise<boolean>}
     */regenerate_public_key_encryption_key_pair_if_needed(){const ret=wasm.usercryptomanagementclient_regenerate_public_key_encryption_key_pair_if_needed(this.__wbg_ptr);return takeObject(ret);}/**
     * Returns whether the client may prompt the user to migrate to v2 encryption.
     *
     * [`MigrationPermission::Wait`] means the user is still inside the two-week grace period and
     * the prompt must not be shown. [`MigrationPermission::Migrate`] means the grace period has
     * elapsed.
     *
     * The first call has a side effect: when no timestamp is stored, it writes
     * the current timestamp and returns [`MigrationPermission::Wait`]. The
     * window is therefore two weeks from the first call, not from login. A
     * client that never calls this method never opens the window.
     *
     * The SDK never clears the timestamp. Clearing is the client's decision
     * and resets the window. The timestamp is persisted so a user who logs out
     * often cannot avoid the prompt indefinitely.
     *
     * Panics when no state bridge is registered.
     * @returns {Promise<MigrationPermission>}
     */request_permission_to_migrate_to_v2(){const ret=wasm.usercryptomanagementclient_request_permission_to_migrate_to_v2(this.__wbg_ptr);return takeObject(ret);}/**
     * Rotates the user's encryption keys without a password change.
     * @param {RotateUserKeysRequest} request
     * @returns {Promise<void>}
     */rotate_user_keys(request){const ret=wasm.usercryptomanagementclient_rotate_user_keys(this.__wbg_ptr,addHeapObject(request));return takeObject(ret);}/**
     * Checks whether the user's public key encryption key pair needs regeneration.
     *
     * Returns `true` if the key pair is missing, corrupt, or doesn't match the public key on
     * the server. Returns `false` if the key pair is valid or if regeneration is not applicable
     * (e.g., user key not available, V2 encryption account).
     * @returns {Promise<boolean>}
     */should_regenerate_public_key_encryption_key_pair(){const ret=wasm.usercryptomanagementclient_should_regenerate_public_key_encryption_key_pair(this.__wbg_ptr);return takeObject(ret);}/**
     * Records the id of the user's current user key with the server, and stores it as the id the
     * server knows.
     *
     * Safe to call when no backfill is needed, but [`Self::user_key_id_needs_backfill`] avoids the
     * round trip.
     *
     * Requires the client to be unlocked so the current user key is available in memory.
     * @returns {Promise<void>}
     */user_key_id_backfill(){const ret=wasm.usercryptomanagementclient_user_key_id_backfill(this.__wbg_ptr);return takeObject(ret);}/**
     * Returns whether the server is missing the id of the user's current user key.
     * @returns {Promise<boolean>}
     */user_key_id_needs_backfill(){const ret=wasm.usercryptomanagementclient_user_key_id_needs_backfill(this.__wbg_ptr);return takeObject(ret);}}if(Symbol.dispose)UserCryptoManagementClient.prototype[Symbol.dispose]=UserCryptoManagementClient.prototype.free;class VaultClient{static __wrap(ptr){ptr=ptr>>>0;const obj=Object.create(VaultClient.prototype);obj.__wbg_ptr=ptr;VaultClientFinalization.register(obj,obj.__wbg_ptr,obj);return obj;}__destroy_into_raw(){const ptr=this.__wbg_ptr;this.__wbg_ptr=0;VaultClientFinalization.unregister(this);return ptr;}free(){const ptr=this.__destroy_into_raw();wasm.__wbg_vaultclient_free(ptr,0);}/**
     * Attachment related operations.
     * @returns {AttachmentsClient}
     */attachments(){const ret=wasm.vaultclient_attachments(this.__wbg_ptr);return AttachmentsClient.__wrap(ret);}/**
     * Cipher risk evaluation operations.
     * @returns {CipherRiskClient}
     */cipher_risk(){const ret=wasm.vaultclient_cipher_risk(this.__wbg_ptr);return CipherRiskClient.__wrap(ret);}/**
     * Cipher related operations.
     * @returns {CiphersClient}
     */ciphers(){const ret=wasm.vaultclient_ciphers(this.__wbg_ptr);return CiphersClient.__wrap(ret);}/**
     * Collection related operations.
     *
     * This nested accessor is kept for backwards compatibility. New callers should prefer the
     * `collections()` accessor registered directly on the top-level Password Manager client.
     * @returns {CollectionsClient}
     */collections(){const ret=wasm.vaultclient_collections(this.__wbg_ptr);return CollectionsClient.__wrap(ret);}/**
     * Folder related operations.
     * @returns {FoldersClient}
     */folders(){const ret=wasm.vaultclient_folders(this.__wbg_ptr);return FoldersClient.__wrap(ret);}/**
     * TOTP related operations.
     * @returns {TotpClient}
     */totp(){const ret=wasm.vaultclient_totp(this.__wbg_ptr);return TotpClient.__wrap(ret);}}if(Symbol.dispose)VaultClient.prototype[Symbol.dispose]=VaultClient.prototype.free;/**
 * Sends an `AutotypeGetCredentialsRequest` to the desktop render process, asking for the
 * credentials to autotype into the focused app. The response's `credentials` is empty when no
 * vault item matches.
 *
 * The response doesn't identify the app it's for. Keep the focused app's identity from before
 * sending the request, and confirm that app is still focused before typing. If it isn't, the user
 * has switched apps, and nothing should be typed.
 *
 * The render process must have called `registerAutotypeRenderHandlers` first. Otherwise the
 * request fails (for example, with a "no handler found" error) or waits until `abort_signal`
 * fires.
 *
 * There is no built-in timeout, so always pass `abort_signal` (for example
 * `AbortSignal.timeout(ms)`). Without one, the request never completes if the render process
 * doesn't respond.
 * @param {IpcClient} ipc_client
 * @param {AutotypeRunningApp} app
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<AutotypeGetCredentialsResponse>}
 */function autotypeRequestGetCredentials(ipc_client,app,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.autotypeRequestGetCredentials(ipc_client.__wbg_ptr,addHeapObject(app),isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * Asks the desktop main process which applications are currently running.
 *
 * An empty list could mean there are no apps running, or that the apps running
 * didn't have the matching data needed for use with Autotype.
 *
 * There is no built-in timeout: the request waits until main responds or `abort_signal` aborts,
 * so pass a signal (for example `AbortSignal.timeout(ms)`) when the wait needs a bound.
 * @param {IpcClient} ipc_client
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<AutotypeListRunningAppsResponse>}
 */function autotypeRequestListRunningApps(ipc_client,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.autotypeRequestListRunningApps(ipc_client.__wbg_ptr,isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * Sends an `AutotypeSetEnabledRequest` to the desktop main process and reports whether the
 * requested change was successful.
 *
 * There is no built-in timeout: the request waits until main responds or `abort_signal` aborts,
 * so pass a signal (for example `AbortSignal.timeout(ms)`) when the wait needs a bound.
 * @param {IpcClient} ipc_client
 * @param {boolean} enabled
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<AutotypeSetEnabledResponse>}
 */function autotypeRequestSetEnabled(ipc_client,enabled,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.autotypeRequestSetEnabled(ipc_client.__wbg_ptr,enabled,isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * Sends an `AutotypeSetKeyboardShortcutRequest` to the desktop main process and reports whether
 * the requested shortcut was applied.
 *
 * There is no built-in timeout: the request waits until main responds or `abort_signal` aborts,
 * so pass a signal (for example `AbortSignal.timeout(ms)`) when the wait needs a bound.
 * @param {IpcClient} ipc_client
 * @param {string[]} shortcut
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<AutotypeSetKeyboardShortcutResponse>}
 */function autotypeRequestSetKeyboardShortcut(ipc_client,shortcut,abort_signal){_assertClass(ipc_client,IpcClient);const ptr0=passArrayJsValueToWasm0(shortcut,wasm.__wbindgen_malloc);const len0=WASM_VECTOR_LEN;const ret=wasm.autotypeRequestSetKeyboardShortcut(ipc_client.__wbg_ptr,ptr0,len0,isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * [`DEFAULT_REQUEST_ACCESS_DURATION_SECONDS`], for callers that cannot read a Rust `const`.
 * @returns {number}
 */function default_request_access_duration_seconds(){const ret=wasm.default_request_access_duration_seconds();return ret>>>0;}/**
 * Generate a new SSH key pair
 *
 * # Arguments
 * - `key_algorithm` - The algorithm to use for the key pair
 *
 * # Returns
 * - `Ok(SshKey)` if the key was successfully generated
 * - `Err(KeyGenerationError)` if the key could not be generated
 * @param {KeyAlgorithm} key_algorithm
 * @returns {SshKeyView}
 */function generate_ssh_key(key_algorithm){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.generate_ssh_key(retptr,addHeapObject(key_algorithm));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
 * Convert a PCKS8 or OpenSSH encrypted or unencrypted private key
 * to an OpenSSH private key with public key and fingerprint
 *
 * # Arguments
 * - `imported_key` - The private key to convert
 * - `password` - The password to use for decrypting the key
 *
 * # Returns
 * - `Ok(SshKey)` if the key was successfully coneverted
 * - `Err(PasswordRequired)` if the key is encrypted and no password was provided
 * - `Err(WrongPassword)` if the password provided is incorrect
 * - `Err(Parsing)` if the key could not be parsed
 * - `Err(UnsupportedKeyType)` if the key type is not supported
 * @param {string} imported_key
 * @param {string | null} [password]
 * @returns {SshKeyView}
 */function import_ssh_key(imported_key,password){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);const ptr0=passStringToWasm0(imported_key,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;var ptr1=isLikeNone(password)?0:passStringToWasm0(password,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;wasm.import_ssh_key(retptr,ptr0,len0,ptr1,len1);var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);var r2=getDataViewMemory0().getInt32(retptr+4*2,true);if(r2){throw takeObject(r1);}return takeObject(r0);}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}/**
 * Initialize the SDK. Must be called before using any other API.
 * Only the first invocation has effect; subsequent calls are ignored.
 *
 * - `log_level`: Minimum level for console output. Defaults to `Info`.
 * - `flight_recorder_level`: Minimum level for the flight recorder. Defaults to `Info`.
 * - `flight_recorder_buffer_size`: Ring-buffer capacity for the flight recorder. Defaults to 1000.
 *   Pass `0` to disable the flight recorder entirely.
 * @param {LogLevel | null} [log_level]
 * @param {LogLevel | null} [flight_recorder_level]
 * @param {number | null} [flight_recorder_buffer_size]
 */function init_sdk(log_level,flight_recorder_level,flight_recorder_buffer_size){wasm.init_sdk(isLikeNone(log_level)?5:log_level,isLikeNone(flight_recorder_level)?5:flight_recorder_level,isLikeNone(flight_recorder_buffer_size)?0x100000001:flight_recorder_buffer_size>>>0);}/**
 * Registers shared-unlock biometrics RPC handlers on the IPC client.
 * @param {IpcClient} ipc_client
 * @param {BiometricsUnlock} biometrics_unlock
 * @returns {Promise<void>}
 */function ipcRegisterBiometricsHandlers(ipc_client,biometrics_unlock){_assertClass(ipc_client,IpcClient);const ret=wasm.ipcRegisterBiometricsHandlers(ipc_client.__wbg_ptr,addHeapObject(biometrics_unlock));return takeObject(ret);}/**
 * Registers a DiscoverHandler so that the client can respond to DiscoverRequests.
 * @param {IpcClient} ipc_client
 * @param {DiscoverResponse} response
 * @returns {Promise<void>}
 */function ipcRegisterDiscoverHandler(ipc_client,response){_assertClass(ipc_client,IpcClient);const ret=wasm.ipcRegisterDiscoverHandler(ipc_client.__wbg_ptr,addHeapObject(response));return takeObject(ret);}/**
 * Sends an `AuthenticateBiometrics` RPC request to the desktop renderer.
 * @param {IpcClient} ipc_client
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<boolean>}
 */function ipcRequestAuthenticateBiometrics(ipc_client,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.ipcRequestAuthenticateBiometrics(ipc_client.__wbg_ptr,isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * Sends a DiscoverRequest to the specified destination and returns the response.
 * @param {IpcClient} ipc_client
 * @param {Endpoint} destination
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<DiscoverResponse>}
 */function ipcRequestDiscover(ipc_client,destination,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.ipcRequestDiscover(ipc_client.__wbg_ptr,addHeapObject(destination),isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * Sends a `GetBiometricsStatus` RPC request to the desktop renderer
 * @param {IpcClient} ipc_client
 * @param {UserId} user_id
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<BiometricsStatus>}
 */function ipcRequestGetBiometricsStatus(ipc_client,user_id,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.ipcRequestGetBiometricsStatus(ipc_client.__wbg_ptr,addHeapObject(user_id),isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * Sends an `UnlockBiometrics` RPC request to the desktop renderer.
 * @param {IpcClient} ipc_client
 * @param {UserId} user_id
 * @param {AbortSignal | null} [abort_signal]
 * @returns {Promise<UnlockBiometricsResponse>}
 */function ipcRequestUnlockBiometrics(ipc_client,user_id,abort_signal){_assertClass(ipc_client,IpcClient);const ret=wasm.ipcRequestUnlockBiometrics(ipc_client.__wbg_ptr,addHeapObject(user_id),isLikeNone(abort_signal)?0:addHeapObject(abort_signal));return takeObject(ret);}/**
 * @param {any} error
 * @returns {boolean}
 */function isAcceptInviteLinkError(error){try{const ret=wasm.isAcceptInviteLinkError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAccessLeaseError(error){try{const ret=wasm.isAccessLeaseError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAccessRequestError(error){try{const ret=wasm.isAccessRequestError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAccessRuleError(error){try{const ret=wasm.isAccessRuleError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAccessSendError(error){try{const ret=wasm.isAccessSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAccountCryptographyInitializationError(error){try{const ret=wasm.isAccountCryptographyInitializationError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAccountRecoveryV2UpgradeError(error){try{const ret=wasm.isAccountRecoveryV2UpgradeError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAcquireCookieError(error){try{const ret=wasm.isAcquireCookieError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isAlreadyRunningError(error){try{const ret=wasm.isAlreadyRunningError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isApprovalError(error){try{const ret=wasm.isApprovalError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isBroadcastError(error){try{const ret=wasm.isBroadcastError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isBulkUpdateCollectionsCipherError(error){try{const ret=wasm.isBulkUpdateCollectionsCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCallError(error){try{const ret=wasm.isCallError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isChangeKdfError(error){try{const ret=wasm.isChangeKdfError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isChangeLoginPasswordError(error){try{const ret=wasm.isChangeLoginPasswordError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isChannelError(error){try{const ret=wasm.isChannelError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherAdminGetAttachmentDownloadUrlError(error){try{const ret=wasm.isCipherAdminGetAttachmentDownloadUrlError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherCreateAttachmentError(error){try{const ret=wasm.isCipherCreateAttachmentError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherDeleteAttachmentError(error){try{const ret=wasm.isCipherDeleteAttachmentError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherError(error){try{const ret=wasm.isCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherGetAttachmentDownloadUrlError(error){try{const ret=wasm.isCipherGetAttachmentDownloadUrlError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherRenewFileUploadUrlError(error){try{const ret=wasm.isCipherRenewFileUploadUrlError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherRiskError(error){try{const ret=wasm.isCipherRiskError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCipherUpgradeAttachmentError(error){try{const ret=wasm.isCipherUpgradeAttachmentError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCollectionDecryptError(error){try{const ret=wasm.isCollectionDecryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCollectionEncryptError(error){try{const ret=wasm.isCollectionEncryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCreateAttachmentAdminError(error){try{const ret=wasm.isCreateAttachmentAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCreateCipherAdminError(error){try{const ret=wasm.isCreateCipherAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCreateCipherError(error){try{const ret=wasm.isCreateCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCreateFileSendError(error){try{const ret=wasm.isCreateFileSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCreateFolderError(error){try{const ret=wasm.isCreateFolderError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCreateSendError(error){try{const ret=wasm.isCreateSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCryptoClientError(error){try{const ret=wasm.isCryptoClientError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isCryptoError(error){try{const ret=wasm.isCryptoError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDatabaseError(error){try{const ret=wasm.isDatabaseError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDecryptError(error){try{const ret=wasm.isDecryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDecryptFileError(error){try{const ret=wasm.isDecryptFileError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDeleteAttachmentAdminError(error){try{const ret=wasm.isDeleteAttachmentAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDeleteCipherAdminError(error){try{const ret=wasm.isDeleteCipherAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDeleteCipherError(error){try{const ret=wasm.isDeleteCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDeleteSendError(error){try{const ret=wasm.isDeleteSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDeriveKeyConnectorError(error){try{const ret=wasm.isDeriveKeyConnectorError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isDeserializeError(error){try{const ret=wasm.isDeserializeError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEditCipherAdminError(error){try{const ret=wasm.isEditCipherAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEditCipherError(error){try{const ret=wasm.isEditCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEditFolderError(error){try{const ret=wasm.isEditFolderError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEditSendError(error){try{const ret=wasm.isEditSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessAcceptError(error){try{const ret=wasm.isEmergencyAccessAcceptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessApproveError(error){try{const ret=wasm.isEmergencyAccessApproveError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessConfirmError(error){try{const ret=wasm.isEmergencyAccessConfirmError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessDeleteError(error){try{const ret=wasm.isEmergencyAccessDeleteError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessGetError(error){try{const ret=wasm.isEmergencyAccessGetError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessGetGrantorPoliciesError(error){try{const ret=wasm.isEmergencyAccessGetGrantorPoliciesError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessInitiateError(error){try{const ret=wasm.isEmergencyAccessInitiateError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessInviteError(error){try{const ret=wasm.isEmergencyAccessInviteError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessListGrantedError(error){try{const ret=wasm.isEmergencyAccessListGrantedError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessListTrustedError(error){try{const ret=wasm.isEmergencyAccessListTrustedError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessReinviteError(error){try{const ret=wasm.isEmergencyAccessReinviteError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessRejectError(error){try{const ret=wasm.isEmergencyAccessRejectError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessTakeoverError(error){try{const ret=wasm.isEmergencyAccessTakeoverError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessUpdateError(error){try{const ret=wasm.isEmergencyAccessUpdateError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEmergencyAccessViewError(error){try{const ret=wasm.isEmergencyAccessViewError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEncryptError(error){try{const ret=wasm.isEncryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEncryptFileError(error){try{const ret=wasm.isEncryptFileError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEncryptionSettingsError(error){try{const ret=wasm.isEncryptionSettingsError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isEnrollAdminPasswordResetError(error){try{const ret=wasm.isEnrollAdminPasswordResetError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isExportError(error){try{const ret=wasm.isExportError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isFetchSendError(error){try{const ret=wasm.isFetchSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGenBytesError(error){try{const ret=wasm.isGenBytesError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGenRangeError(error){try{const ret=wasm.isGenRangeError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGetAssignedOrgCiphersAdminError(error){try{const ret=wasm.isGetAssignedOrgCiphersAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGetCipherError(error){try{const ret=wasm.isGetCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGetFileDownloadDataError(error){try{const ret=wasm.isGetFileDownloadDataError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGetFolderError(error){try{const ret=wasm.isGetFolderError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGetOrganizationCiphersAdminError(error){try{const ret=wasm.isGetOrganizationCiphersAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isGetSendError(error){try{const ret=wasm.isGetSendError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isImportError(error){try{const ret=wasm.isImportError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isInviteLinkError(error){try{const ret=wasm.isInviteLinkError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isKeyGenerationError(error){try{const ret=wasm.isKeyGenerationError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isKeyIdBackfillError(error){try{const ret=wasm.isKeyIdBackfillError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isKeyPairRegenerationError(error){try{const ret=wasm.isKeyPairRegenerationError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isMakeKeysError(error){try{const ret=wasm.isMakeKeysError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isManagedSettingsError(error){try{const ret=wasm.isManagedSettingsError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isMasterPasswordError(error){try{const ret=wasm.isMasterPasswordError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isMigrateToKeyConnectorError(error){try{const ret=wasm.isMigrateToKeyConnectorError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isMoveCipherError(error){try{const ret=wasm.isMoveCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isOrganizationDomainsError(error){try{const ret=wasm.isOrganizationDomainsError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isOrganizationUsersManagementError(error){try{const ret=wasm.isOrganizationUsersManagementError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isPasswordError(error){try{const ret=wasm.isPasswordError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isPasswordLoginError(error){try{const ret=wasm.isPasswordLoginError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isPasswordPreloginError(error){try{const ret=wasm.isPasswordPreloginError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isPasswordRulesError(error){try{const ret=wasm.isPasswordRulesError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isPeerStartError(error){try{const ret=wasm.isPeerStartError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isPinSettingsError(error){try{const ret=wasm.isPinSettingsError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isReceiveError(error){try{const ret=wasm.isReceiveError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRegistrationError(error){try{const ret=wasm.isRegistrationError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isReinitUserCryptoError(error){try{const ret=wasm.isReinitUserCryptoError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRemoveSendPasswordError(error){try{const ret=wasm.isRemoveSendPasswordError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRenewFileUploadUrlError(error){try{const ret=wasm.isRenewFileUploadUrlError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRequestError(error){try{const ret=wasm.isRequestError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRestoreCipherAdminError(error){try{const ret=wasm.isRestoreCipherAdminError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRestoreCipherError(error){try{const ret=wasm.isRestoreCipherError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRotateCryptographyStateError(error){try{const ret=wasm.isRotateCryptographyStateError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRotateUserKeysError(error){try{const ret=wasm.isRotateUserKeysError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isRotationError(error){try{const ret=wasm.isRotationError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSendAccessDecryptError(error){try{const ret=wasm.isSendAccessDecryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSendAccessKeyError(error){try{const ret=wasm.isSendAccessKeyError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSendDecryptError(error){try{const ret=wasm.isSendDecryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSendEncryptError(error){try{const ret=wasm.isSendEncryptError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSendSyncError(error){try{const ret=wasm.isSendSyncError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isServerCommunicationConfigRepositoryError(error){try{const ret=wasm.isServerCommunicationConfigRepositoryError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSshKeyExportError(error){try{const ret=wasm.isSshKeyExportError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSshKeyImportError(error){try{const ret=wasm.isSshKeyImportError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isStateRegistryError(error){try{const ret=wasm.isStateRegistryError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSubscribeError(error){try{const ret=wasm.isSubscribeError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isSyncError(error){try{const ret=wasm.isSyncError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isTestError(error){try{const ret=wasm.isTestError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isTotpError(error){try{const ret=wasm.isTotpError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isTypedReceiveError(error){try{const ret=wasm.isTypedReceiveError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isUnlockError(error){try{const ret=wasm.isUnlockError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isUploadSendFileError(error){try{const ret=wasm.isUploadSendFileError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * @param {any} error
 * @returns {boolean}
 */function isUsernameError(error){try{const ret=wasm.isUsernameError(addBorrowedObject(error));return ret!==0;}finally{heap[stack_pointer++]=undefined;}}/**
 * Returns `true` for a canonical CIDR range such as `10.0.0.0/8`, with no host bits set.
 * Ambiguous forms (leading-zero or hex octets, IPv4-mapped IPv6) are rejected so client and
 * server agree on which network a rule matches.
 * @param {string} value
 * @returns {boolean}
 */function is_valid_cidr(value){const ptr0=passStringToWasm0(value,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len0=WASM_VECTOR_LEN;const ret=wasm.is_valid_cidr(ptr0,len0);return ret!==0;}/**
 * [`MAX_REQUEST_ACCESS_WINDOW_SECONDS`], for callers that cannot read a Rust `const`.
 * @returns {number}
 */function max_request_access_window_seconds(){const ret=wasm.max_request_access_window_seconds();return ret>>>0;}/**
 * This registers the Autotype handlers so the client responds to Autotype requests through
 * the `RawJsAutotypeDriver`. Call this on the desktop main process's IPC client.
 * @param {IpcClient} ipc_client
 * @param {AutotypeDriver} driver
 * @returns {Promise<void>}
 */function registerAutotypeHandlers(ipc_client,driver){_assertClass(ipc_client,IpcClient);const ret=wasm.registerAutotypeHandlers(ipc_client.__wbg_ptr,addHeapObject(driver));return takeObject(ret);}/**
 * This registers the Autotype handlers so the client responds to Autotype requests from the
 * main process through the `RawJsAutotypeRenderDriver`. Call this on the desktop render
 * process's IPC client.
 * @param {IpcClient} ipc_client
 * @param {AutotypeRenderDriver} driver
 * @returns {Promise<void>}
 */function registerAutotypeRenderHandlers(ipc_client,driver){_assertClass(ipc_client,IpcClient);const ret=wasm.registerAutotypeRenderHandlers(ipc_client.__wbg_ptr,addHeapObject(driver));return takeObject(ret);}function __wbg_Error_83742b46f01ce22d(arg0,arg1){const ret=Error(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);}function __wbg_Number_a5a435bd7bbec835(arg0){const ret=Number(getObject(arg0));return ret;}function __wbg_String_8564e559799eccda(arg0,arg1){const ret=String(getObject(arg1));const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);}function __wbg___wbindgen_bigint_get_as_i64_447a76b5c6ef7bda(arg0,arg1){const v=getObject(arg1);const ret=typeof v==='bigint'?v:undefined;getDataViewMemory0().setBigInt64(arg0+8*1,isLikeNone(ret)?BigInt(0):ret,true);getDataViewMemory0().setInt32(arg0+4*0,!isLikeNone(ret),true);}function __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1(arg0){const v=getObject(arg0);const ret=typeof v==='boolean'?v:undefined;return isLikeNone(ret)?0xFFFFFF:ret?1:0;}function __wbg___wbindgen_debug_string_5398f5bb970e0daa(arg0,arg1){const ret=debugString(getObject(arg1));const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);}function __wbg___wbindgen_in_41dbb8413020e076(arg0,arg1){const ret=getObject(arg0)in getObject(arg1);return ret;}function __wbg___wbindgen_is_bigint_e2141d4f045b7eda(arg0){const ret=typeof getObject(arg0)==='bigint';return ret;}function __wbg___wbindgen_is_function_3c846841762788c1(arg0){const ret=typeof getObject(arg0)==='function';return ret;}function __wbg___wbindgen_is_null_0b605fc6b167c56f(arg0){const ret=getObject(arg0)===null;return ret;}function __wbg___wbindgen_is_object_781bc9f159099513(arg0){const val=getObject(arg0);const ret=typeof val==='object'&&val!==null;return ret;}function __wbg___wbindgen_is_string_7ef6b97b02428fae(arg0){const ret=typeof getObject(arg0)==='string';return ret;}function __wbg___wbindgen_is_undefined_52709e72fb9f179c(arg0){const ret=getObject(arg0)===undefined;return ret;}function __wbg___wbindgen_jsval_eq_ee31bfad3e536463(arg0,arg1){const ret=getObject(arg0)===getObject(arg1);return ret;}function __wbg___wbindgen_jsval_loose_eq_5bcc3bed3c69e72b(arg0,arg1){const ret=getObject(arg0)==getObject(arg1);return ret;}function __wbg___wbindgen_number_get_34bb9d9dcfa21373(arg0,arg1){const obj=getObject(arg1);const ret=typeof obj==='number'?obj:undefined;getDataViewMemory0().setFloat64(arg0+8*1,isLikeNone(ret)?0:ret,true);getDataViewMemory0().setInt32(arg0+4*0,!isLikeNone(ret),true);}function __wbg___wbindgen_string_get_395e606bd0ee4427(arg0,arg1){const obj=getObject(arg1);const ret=typeof obj==='string'?obj:undefined;var ptr1=isLikeNone(ret)?0:passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);}function __wbg___wbindgen_throw_6ddd609b62940d55(arg0,arg1){throw new Error(getStringFromWasm0(arg0,arg1));}function __wbg__wbg_cb_unref_6b5b6b8576d35cb1(arg0){getObject(arg0)._wbg_cb_unref();}function __wbg_abort_5ef96933660780b7(arg0){getObject(arg0).abort();}function __wbg_abort_60dcb252ae0031fc(){return handleError(function(arg0){getObject(arg0).abort();},arguments);}function __wbg_abort_6479c2d794ebf2ee(arg0,arg1){getObject(arg0).abort(getObject(arg1));}function __wbg_acquireCookies_7424097036ea4070(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).acquireCookies(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_addEventListener_8e6a022f9229e5e0(arg0,arg1,arg2,arg3){getObject(arg0).addEventListener(getStringFromWasm0(arg1,arg2),getObject(arg3));}function __wbg_append_48b3d4fc4c97ab8d(){return handleError(function(arg0,arg1,arg2,arg3,arg4){getObject(arg0).append(getStringFromWasm0(arg1,arg2),getStringFromWasm0(arg3,arg4));},arguments);}function __wbg_append_608dfb635ee8998f(){return handleError(function(arg0,arg1,arg2,arg3,arg4){getObject(arg0).append(getStringFromWasm0(arg1,arg2),getStringFromWasm0(arg3,arg4));},arguments);}function __wbg_append_83e47d4b428d97aa(){return handleError(function(arg0,arg1,arg2,arg3){getObject(arg0).append(getStringFromWasm0(arg1,arg2),getObject(arg3));},arguments);}function __wbg_append_bbf73d7e78ce268c(){return handleError(function(arg0,arg1,arg2,arg3,arg4,arg5){getObject(arg0).append(getStringFromWasm0(arg1,arg2),getObject(arg3),getStringFromWasm0(arg4,arg5));},arguments);}function __wbg_arrayBuffer_eb8e9ca620af2a19(){return handleError(function(arg0){const ret=getObject(arg0).arrayBuffer();return addHeapObject(ret);},arguments);}function __wbg_authenticate_biometrics_5a74b5d47c7cfa17(){return handleError(function(arg0){const ret=getObject(arg0).authenticate_biometrics();return addHeapObject(ret);},arguments);}function __wbg_beginSsoEnrollment_a04289391bbc241e(){return handleError(function(arg0){const ret=getObject(arg0).beginSsoEnrollment();return addHeapObject(ret);},arguments);}function __wbg_body_ac1dad652946e6da(arg0){const ret=getObject(arg0).body;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_buffer_60b8043cd926067d(arg0){const ret=getObject(arg0).buffer;return addHeapObject(ret);}function __wbg_byobRequest_6342e5f2b232c0f9(arg0){const ret=getObject(arg0).byobRequest;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_byteLength_607b856aa6c5a508(arg0){const ret=getObject(arg0).byteLength;return ret;}function __wbg_byteOffset_b26b63681c83856c(arg0){const ret=getObject(arg0).byteOffset;return ret;}function __wbg_call_2d781c1f4d5c0ef8(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).call(getObject(arg1),getObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_call_e133b57c9155d22c(){return handleError(function(arg0,arg1){const ret=getObject(arg0).call(getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_cancel_79b3bea07a1028e7(arg0){const ret=getObject(arg0).cancel();return addHeapObject(ret);}function __wbg_cancelled_754afc88b7afb16d(){return handleError(function(arg0){const ret=getObject(arg0).cancelled();return addHeapObject(ret);},arguments);}function __wbg_catch_d7ed0375ab6532a5(arg0,arg1){const ret=getObject(arg0).catch(getObject(arg1));return addHeapObject(ret);}function __wbg_cipher_5819dd56eca5acae(arg0){const ret=getObject(arg0).cipher;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_clearTimeout_1daad5c6ee4fcd3b(arg0){const ret=clearTimeout(takeObject(arg0));return addHeapObject(ret);}function __wbg_clearTimeout_3629d6209dfcc46e(arg0){const ret=clearTimeout(takeObject(arg0));return addHeapObject(ret);}function __wbg_clear_1885f7bf35006b0c(){return handleError(function(arg0){const ret=getObject(arg0).clear();return addHeapObject(ret);},arguments);}function __wbg_clear_account_cryptographic_state_4689c5f90d35d26c(arg0){const ret=getObject(arg0).clear_account_cryptographic_state();return addHeapObject(ret);}function __wbg_clear_encrypted_pin_1b7ca97269a5188a(arg0){const ret=getObject(arg0).clear_encrypted_pin();return addHeapObject(ret);}function __wbg_clear_ephemeral_pin_envelope_b52263ae70ae2a8a(arg0){const ret=getObject(arg0).clear_ephemeral_pin_envelope();return addHeapObject(ret);}function __wbg_clear_kdf_config_b3ff015a0c044f1b(arg0){const ret=getObject(arg0).clear_kdf_config();return addHeapObject(ret);}function __wbg_clear_masterpassword_unlock_data_62423f6474fb4d07(arg0){const ret=getObject(arg0).clear_masterpassword_unlock_data();return addHeapObject(ret);}function __wbg_clear_persistent_pin_envelope_acc5b376cea96059(arg0){const ret=getObject(arg0).clear_persistent_pin_envelope();return addHeapObject(ret);}function __wbg_clear_pin_length_cca205b696c99565(arg0){const ret=getObject(arg0).clear_pin_length();return addHeapObject(ret);}function __wbg_clear_user_key_76f0dea57b1c0be3(arg0){const ret=getObject(arg0).clear_user_key();return addHeapObject(ret);}function __wbg_clear_user_key_id_29751eb91de1f275(arg0){const ret=getObject(arg0).clear_user_key_id();return addHeapObject(ret);}function __wbg_clear_v2_encrypted_migrations_grace_period_start_ebe86e98c490534f(arg0){const ret=getObject(arg0).clear_v2_encrypted_migrations_grace_period_start();return addHeapObject(ret);}function __wbg_clear_v2_upgrade_token_fc697426b55e0d86(arg0){const ret=getObject(arg0).clear_v2_upgrade_token();return addHeapObject(ret);}function __wbg_clear_webauthn_prf_unlock_data_7c50f830db50c81a(arg0){const ret=getObject(arg0).clear_webauthn_prf_unlock_data();return addHeapObject(ret);}function __wbg_close_690d36108c557337(){return handleError(function(arg0){getObject(arg0).close();},arguments);}function __wbg_close_737b4b1fbc658540(){return handleError(function(arg0){getObject(arg0).close();},arguments);}function __wbg_close_cbf870bdad0aad99(arg0){getObject(arg0).close();}function __wbg_collectionviewnodeitem_new(arg0){const ret=CollectionViewNodeItem.__wrap(arg0);return addHeapObject(ret);}function __wbg_create_e9e35ffcb49d7084(arg0){const ret=Object.create(getObject(arg0));return addHeapObject(ret);}function __wbg_debug_271c16e6de0bc226(arg0,arg1,arg2,arg3){console.debug(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));}function __wbg_debug_4b9b1a2d5972be57(arg0){console.debug(getObject(arg0));}function __wbg_delete_40db93c05c546fb9(){return handleError(function(arg0,arg1){const ret=getObject(arg0).delete(getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_done_08ce71ee07e3bd17(arg0){const ret=getObject(arg0).done;return ret;}function __wbg_endEnrollment_7d9258ee41144bcc(){return handleError(function(arg0,arg1){const ret=getObject(arg0).endEnrollment(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_enqueue_ec3552838b4b7fbf(){return handleError(function(arg0,arg1){getObject(arg0).enqueue(getObject(arg1));},arguments);}function __wbg_entries_5b8fe91cea59610e(arg0){const ret=getObject(arg0).entries();return addHeapObject(ret);}function __wbg_entries_e8a20ff8c9757101(arg0){const ret=Object.entries(getObject(arg0));return addHeapObject(ret);}function __wbg_error_1eece6b0039034ce(arg0,arg1,arg2,arg3){console.error(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));}function __wbg_error_74898554122344a8(){return handleError(function(arg0){const ret=getObject(arg0).error;return isLikeNone(ret)?0:addHeapObject(ret);},arguments);}function __wbg_error_8d9a8e04cd1d3588(arg0){console.error(getObject(arg0));}function __wbg_error_a6fa202b58aa1cd3(arg0,arg1){let deferred0_0;let deferred0_1;try{deferred0_0=arg0;deferred0_1=arg1;console.error(getStringFromWasm0(arg0,arg1));}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_fetch_5550a88cf343aaa9(arg0,arg1){const ret=getObject(arg0).fetch(getObject(arg1));return addHeapObject(ret);}function __wbg_fetch_7a37768ab67c5bd8(arg0){const ret=fetch(getObject(arg0));return addHeapObject(ret);}function __wbg_folder_f564e8f2ecf42685(arg0){const ret=getObject(arg0).folder;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_from_4bdf88943703fd48(arg0){const ret=Array.from(getObject(arg0));return addHeapObject(ret);}function __wbg_getAll_690f659b57ae2d51(){return handleError(function(arg0){const ret=getObject(arg0).getAll();return addHeapObject(ret);},arguments);}function __wbg_getFullYear_f6d84c054eee1543(arg0){const ret=getObject(arg0).getFullYear();return ret;}function __wbg_getRandomValues_696b3d8d7a0bb3f9(){return handleError(function(arg0,arg1){globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0,arg1));},arguments);}function __wbg_getRandomValues_cc7f052a444bb2ce(){return handleError(function(arg0,arg1){globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0,arg1));},arguments);}function __wbg_getReader_9facd4f899beac89(){return handleError(function(arg0){const ret=getObject(arg0).getReader();return addHeapObject(ret);},arguments);}function __wbg_getTime_1dad7b5386ddd2d9(arg0){const ret=getObject(arg0).getTime();return ret;}function __wbg_get_0d9194dfd0b567a1(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_2be68f6ae05839cb(){return handleError(function(arg0,arg1){const ret=getObject(arg0).get(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_326e41e095fb2575(){return handleError(function(arg0,arg1){const ret=Reflect.get(getObject(arg0),getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_3ef1eba1850ade27(){return handleError(function(arg0,arg1){const ret=Reflect.get(getObject(arg0),getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_58503cae39000e39(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_6ac8c8119f577720(){return handleError(function(arg0,arg1){const ret=getObject(arg0).get(getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_7daf81e069403355(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_98366701cf73469e(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_9f3d3bd2e0ccfdd2(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_a8ee5c45dabc1b3b(arg0,arg1){const ret=getObject(arg0)[arg1>>>0];return addHeapObject(ret);}function __wbg_get_access_token_afcaf97fa0595942(arg0){const ret=getObject(arg0).get_access_token();return addHeapObject(ret);}function __wbg_get_account_cryptographic_state_fe358385abc5733d(arg0){const ret=getObject(arg0).get_account_cryptographic_state();return addHeapObject(ret);}function __wbg_get_autotype_credentials_a9060bc3dd96b95c(){return handleError(function(arg0,arg1){const ret=getObject(arg0).get_autotype_credentials(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_be4969644c3ed0a3(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_biometrics_status_bdb765be4fd91c38(){return handleError(function(arg0,arg1){const ret=getObject(arg0).get_biometrics_status(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_client_name_8a9af3e33afc2145(){return handleError(function(arg0){const ret=getObject(arg0).get_client_name();return addHeapObject(ret);},arguments);}function __wbg_get_done_d0ab690f8df5501f(arg0){const ret=getObject(arg0).done;return isLikeNone(ret)?0xFFFFFF:ret?1:0;}function __wbg_get_e1cb9274ad899159(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_encrypted_pin_33d95d5b6c6ae8cd(arg0){const ret=getObject(arg0).get_encrypted_pin();return addHeapObject(ret);}function __wbg_get_ephemeral_pin_envelope_afa4ae45ba8fcff0(arg0){const ret=getObject(arg0).get_ephemeral_pin_envelope();return addHeapObject(ret);}function __wbg_get_fc9b431c2e2ad36a(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).get(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_get_kdf_config_65203f16e42284d3(arg0){const ret=getObject(arg0).get_kdf_config();return addHeapObject(ret);}function __wbg_get_last_manual_lock_adff16570249da4f(){return handleError(function(arg0,arg1){const ret=getObject(arg0).get_last_manual_lock(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_masterpassword_unlock_data_a0a661562efec79a(arg0){const ret=getObject(arg0).get_masterpassword_unlock_data();return addHeapObject(ret);}function __wbg_get_persistent_pin_envelope_34888b2308d913a2(arg0){const ret=getObject(arg0).get_persistent_pin_envelope();return addHeapObject(ret);}function __wbg_get_pin_length_27d413ed20461e5a(arg0){const ret=getObject(arg0).get_pin_length();return addHeapObject(ret);}function __wbg_get_unchecked_329cfe50afab7352(arg0,arg1){const ret=getObject(arg0)[arg1>>>0];return addHeapObject(ret);}function __wbg_get_user_key_65c9e6105f9c89d6(arg0){const ret=getObject(arg0).get_user_key();return addHeapObject(ret);}function __wbg_get_user_key_id_1c5aac12b9f4c5a2(arg0){const ret=getObject(arg0).get_user_key_id();return addHeapObject(ret);}function __wbg_get_v2_encrypted_migrations_grace_period_start_b2e88778185e1ec6(arg0){const ret=getObject(arg0).get_v2_encrypted_migrations_grace_period_start();return addHeapObject(ret);}function __wbg_get_v2_upgrade_token_dd1f9a9b8276250d(arg0){const ret=getObject(arg0).get_v2_upgrade_token();return addHeapObject(ret);}function __wbg_get_value_548ae6adf5a174e4(arg0){const ret=getObject(arg0).value;return addHeapObject(ret);}function __wbg_get_vault_url_9bccc8474754841d(){return handleError(function(arg0,arg1){const ret=getObject(arg0).get_vault_url(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_get_webauthn_prf_unlock_data_616c3f38d1ecab10(arg0){const ret=getObject(arg0).get_webauthn_prf_unlock_data();return addHeapObject(ret);}function __wbg_get_with_ref_key_6412cf3094599694(arg0,arg1){const ret=getObject(arg0)[getObject(arg1)];return addHeapObject(ret);}function __wbg_has_926ef2ff40b308cf(){return handleError(function(arg0,arg1){const ret=Reflect.has(getObject(arg0),getObject(arg1));return ret;},arguments);}function __wbg_headers_eb2234545f9ff993(arg0){const ret=getObject(arg0).headers;return addHeapObject(ret);}function __wbg_incomingmessage_new(arg0){const ret=IncomingMessage.__wrap(arg0);return addHeapObject(ret);}function __wbg_info_0194681687b5ab04(arg0,arg1,arg2,arg3){console.info(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));}function __wbg_info_7d4e223bb1a7e671(arg0){console.info(getObject(arg0));}function __wbg_instanceof_ArrayBuffer_101e2bf31071a9f6(arg0){let result;try{result=getObject(arg0)instanceof ArrayBuffer;}catch(_){result=false;}const ret=result;return ret;}function __wbg_instanceof_DomException_2bdcf7791a2d7d09(arg0){let result;try{result=getObject(arg0)instanceof DOMException;}catch(_){result=false;}const ret=result;return ret;}function __wbg_instanceof_IdbRequest_6a0e24572d4f1d46(arg0){let result;try{result=getObject(arg0)instanceof IDBRequest;}catch(_){result=false;}const ret=result;return ret;}function __wbg_instanceof_Map_f194b366846aca0c(arg0){let result;try{result=getObject(arg0)instanceof Map;}catch(_){result=false;}const ret=result;return ret;}function __wbg_instanceof_Response_9b4d9fd451e051b1(arg0){let result;try{result=getObject(arg0)instanceof Response;}catch(_){result=false;}const ret=result;return ret;}function __wbg_instanceof_Uint8Array_740438561a5b956d(arg0){let result;try{result=getObject(arg0)instanceof Uint8Array;}catch(_){result=false;}const ret=result;return ret;}function __wbg_ipcclientsubscription_new(arg0){const ret=IpcClientSubscription.__wrap(arg0);return addHeapObject(ret);}function __wbg_isArray_33b91feb269ff46e(arg0){const ret=Array.isArray(getObject(arg0));return ret;}function __wbg_isSafeInteger_ecd6a7f9c3e053cd(arg0){const ret=Number.isSafeInteger(getObject(arg0));return ret;}function __wbg_iterator_d8f549ec8fb061b1(){const ret=Symbol.iterator;return addHeapObject(ret);}function __wbg_length_b3416cf66a5452c8(arg0){const ret=getObject(arg0).length;return ret;}function __wbg_length_ea16607d7b61445b(arg0){const ret=getObject(arg0).length;return ret;}function __wbg_list_3f8c7c3a54fb37ac(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_4079ab78fbd42b33(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_99afd86f410478c2(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_b558c0fda0f5484b(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_b7aadc04a0ca32dd(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_dd2c8ec1d456b2c1(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_e341774e4e5ace0a(){return handleError(function(arg0){const ret=getObject(arg0).list();return addHeapObject(ret);},arguments);}function __wbg_list_running_apps_6c7af34adb31c379(){return handleError(function(arg0){const ret=getObject(arg0).list_running_apps();return addHeapObject(ret);},arguments);}function __wbg_list_users_baa44cb0db7e8e6b(){return handleError(function(arg0){const ret=getObject(arg0).list_users();return addHeapObject(ret);},arguments);}function __wbg_local_user_data_key_state_5576a2664d8d06c0(arg0){const ret=getObject(arg0).local_user_data_key_state;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_lock_user_0f5bc65c95016513(){return handleError(function(arg0,arg1){const ret=getObject(arg0).lock_user(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_mark_310e9a031ccc84ff(){return handleError(function(arg0,arg1,arg2){getObject(arg0).mark(getStringFromWasm0(arg1,arg2));},arguments);}function __wbg_mark_742962d66a858cc5(){return handleError(function(arg0,arg1,arg2,arg3){getObject(arg0).mark(getStringFromWasm0(arg1,arg2),getObject(arg3));},arguments);}function __wbg_measure_54743279e77e77bb(){return handleError(function(arg0,arg1,arg2,arg3,arg4,arg5,arg6){getObject(arg0).measure(getStringFromWasm0(arg1,arg2),getStringFromWasm0(arg3,arg4),getStringFromWasm0(arg5,arg6));},arguments);}function __wbg_measure_5f032975b3cf84dc(){return handleError(function(arg0,arg1,arg2){const ret=performance.measure(getStringFromWasm0(arg0,arg1),getObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_measure_a97f9328e35ad53a(){return handleError(function(arg0,arg1,arg2){const ret=performance.measure(getStringFromWasm0(arg0,arg1),getObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_measure_cd1f7667d5f5517d(){return handleError(function(arg0,arg1,arg2,arg3){getObject(arg0).measure(getStringFromWasm0(arg1,arg2),getObject(arg3));},arguments);}function __wbg_name_7a3bbd030d0afa16(arg0,arg1){const ret=getObject(arg1).name;const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);}function __wbg_new_0837727332ac86ba(){return handleError(function(){const ret=new Headers();return addHeapObject(ret);},arguments);}function __wbg_new_0_1dcafdf5e786e876(){const ret=new Date();return addHeapObject(ret);}function __wbg_new_227d7c05414eb861(){const ret=new Error();return addHeapObject(ret);}function __wbg_new_49124310f240061b(arg0,arg1){let deferred0_0;let deferred0_1;try{deferred0_0=arg0;deferred0_1=arg1;const ret=new Error(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_new_49d5571bd3f0c4d4(){const ret=new Map();return addHeapObject(ret);}function __wbg_new_5cfc6a14488ab25a(){return handleError(function(){const ret=new FormData();return addHeapObject(ret);},arguments);}function __wbg_new_5f486cdf45a04d78(arg0){const ret=new Uint8Array(getObject(arg0));return addHeapObject(ret);}function __wbg_new_a70fbab9066b301f(){const ret=new Array();return addHeapObject(ret);}function __wbg_new_ab79df5bd7c26067(){const ret=new Object();return addHeapObject(ret);}function __wbg_new_c518c60af666645b(){return handleError(function(){const ret=new AbortController();return addHeapObject(ret);},arguments);}function __wbg_new_d15cb560a6a0e5f0(arg0,arg1){const ret=new Error(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);}function __wbg_new_from_slice_22da9388ac046e50(arg0,arg1){const ret=new Uint8Array(getArrayU8FromWasm0(arg0,arg1));return addHeapObject(ret);}function __wbg_new_typed_aaaeaf29cf802876(arg0,arg1){try{var state0={a:arg0,b:arg1};var cb0=(arg0,arg1)=>{const a=state0.a;state0.a=0;try{return wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___js_sys_6e790b69f95a3b20___Function_fn_wasm_bindgen_f8d13fbddea9e347___JsValue_____wasm_bindgen_f8d13fbddea9e347___sys__Undefined___js_sys_6e790b69f95a3b20___Function_fn_wasm_bindgen_f8d13fbddea9e347___JsValue_____wasm_bindgen_f8d13fbddea9e347___sys__Undefined_______true_(a,state0.b,arg0,arg1);}finally{state0.a=a;}};const ret=new Promise(cb0);return addHeapObject(ret);}finally{state0.a=state0.b=0;}}function __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743(arg0,arg1,arg2){const ret=new Uint8Array(getObject(arg0),arg1>>>0,arg2>>>0);return addHeapObject(ret);}function __wbg_new_with_length_3259a525196bd8cc(arg0){const ret=new Array(arg0>>>0);return addHeapObject(ret);}function __wbg_new_with_length_825018a1616e9e55(arg0){const ret=new Uint8Array(arg0>>>0);return addHeapObject(ret);}function __wbg_new_with_str_and_init_b4b54d1a819bc724(){return handleError(function(arg0,arg1,arg2){const ret=new Request(getStringFromWasm0(arg0,arg1),getObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_new_with_u8_array_sequence_and_options_de38f663e19ad899(){return handleError(function(arg0,arg1){const ret=new Blob(getObject(arg0),getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_next_11b99ee6237339e3(){return handleError(function(arg0){const ret=getObject(arg0).next();return addHeapObject(ret);},arguments);}function __wbg_next_e01a967809d1aa68(arg0){const ret=getObject(arg0).next;return addHeapObject(ret);}function __wbg_now_16f0c993d5dd6c27(){const ret=Date.now();return ret;}function __wbg_now_639f2c5c526bc9b0(){return handleError(function(){const ret=performance.now();return ret;},arguments);}function __wbg_now_679ef08a5400f722(){return handleError(function(){const ret=performance.now();return ret;},arguments);}function __wbg_now_c6d7a7d35f74f6f1(arg0){const ret=getObject(arg0).now();return ret;}function __wbg_now_e7c6795a7f81e10f(arg0){const ret=getObject(arg0).now();return ret;}function __wbg_objectStore_f314ab152a5c7bd0(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).objectStore(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);},arguments);}function __wbg_of_d6376e3774c51f89(arg0,arg1){const ret=Array.of(getObject(arg0),getObject(arg1));return addHeapObject(ret);}function __wbg_on_peer_state_d6b2f910b75a7896(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).on_peer_state(takeObject(arg1),takeObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_organization_8f15e6ff403e98ca(arg0){const ret=getObject(arg0).organization;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_organization_shared_key_5ee3f8885abe1015(arg0){const ret=getObject(arg0).organization_shared_key;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_outgoingmessage_new(arg0){const ret=OutgoingMessage.__wrap(arg0);return addHeapObject(ret);}function __wbg_outgoingmessage_unwrap(arg0){const ret=OutgoingMessage.__unwrap(getObject(arg0));return ret;}function __wbg_parse_e9eddd2a82c706eb(){return handleError(function(arg0,arg1){const ret=JSON.parse(getStringFromWasm0(arg0,arg1));return addHeapObject(ret);},arguments);}function __wbg_performSsoLogin_46bf99a2832c4a51(){return handleError(function(arg0,arg1,arg2,arg3,arg4){const ret=getObject(arg0).performSsoLogin(getStringFromWasm0(arg1,arg2),getStringFromWasm0(arg3,arg4));return addHeapObject(ret);},arguments);}function __wbg_performance_3fcf6e32a7e1ed0a(arg0){const ret=getObject(arg0).performance;return addHeapObject(ret);}function __wbg_performance_757310249566272b(){const ret=globalThis.performance;return addHeapObject(ret);}function __wbg_policy_27ce2702386aff31(arg0){const ret=getObject(arg0).policy;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_preventDefault_25a229bfe5c510f8(arg0){getObject(arg0).preventDefault();}function __wbg_prototypesetcall_d62e5099504357e6(arg0,arg1,arg2){Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0,arg1),getObject(arg2));}function __wbg_provideTotp_e88f9254049abb59(){return handleError(function(arg0,arg1){const ret=getObject(arg0).provideTotp(arg1>>>0);return addHeapObject(ret);},arguments);}function __wbg_provideVerificationCode_5428078e86a1aa19(){return handleError(function(arg0,arg1){const ret=getObject(arg0).provideVerificationCode(arg1>>>0);return addHeapObject(ret);},arguments);}function __wbg_push_e87b0e732085a946(arg0,arg1){const ret=getObject(arg0).push(getObject(arg1));return ret;}function __wbg_put_f1673d719f93ce22(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).put(getObject(arg1),getObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_queueMicrotask_0c399741342fb10f(arg0){const ret=getObject(arg0).queueMicrotask;return addHeapObject(ret);}function __wbg_queueMicrotask_a082d78ce798393e(arg0){queueMicrotask(getObject(arg0));}function __wbg_read_7f593a961a7f80ed(arg0){const ret=getObject(arg0).read();return addHeapObject(ret);}function __wbg_releaseLock_ef7766a5da654ff8(arg0){getObject(arg0).releaseLock();}function __wbg_removeAll_4830554ddd954400(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeAll_6f7baf9ff70142af(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeAll_7e96683ba1c81d62(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeAll_92ea3cfb98793322(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeAll_a2c64cf1f67dca66(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeAll_d2db99fb7eaf3b2c(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeAll_da407709ba2f8f55(){return handleError(function(arg0){const ret=getObject(arg0).removeAll();return addHeapObject(ret);},arguments);}function __wbg_removeBulk_0224f9ca18e65a65(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_removeBulk_04479509e3cb47dc(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_removeBulk_56e535fc5e60ed07(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_removeBulk_76c104e002a3705e(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_removeBulk_b68a7f20a55f3787(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_removeBulk_c70a5958f434a9b3(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_removeBulk_da6fa92c84ab3304(){return handleError(function(arg0,arg1){const ret=getObject(arg0).removeBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_remove_1ea9717558fbfbff(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_remove_22766f4083c5e615(){return handleError(function(arg0,arg1){const ret=getObject(arg0).remove(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_remove_3a8b1df3eb4a21f0(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_remove_6f5963017d709f57(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_remove_71c5fb0a6a6cdaf8(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_remove_b5f6e4c73000df8e(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_remove_f6d1a6e1bb3e9a35(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_remove_fd111a75a797b800(){return handleError(function(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).remove(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_resolve_0b5f71b368d383df(){return handleError(function(arg0,arg1){const ret=getObject(arg0).resolve(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_resolve_ae8d83246e5bcc12(arg0){const ret=Promise.resolve(getObject(arg0));return addHeapObject(ret);}function __wbg_respond_e286ee502e7cf7e4(){return handleError(function(arg0,arg1){getObject(arg0).respond(arg1>>>0);},arguments);}function __wbg_result_c5baa2d3d690a01a(){return handleError(function(arg0){const ret=getObject(arg0).result;return addHeapObject(ret);},arguments);}function __wbg_save_9622c25363e0fabc(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).save(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_save_b560fa30defd7a97(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).save(takeObject(arg1),takeObject(arg2));return addHeapObject(ret);},arguments);}function __wbg_send_796e48195a4bea9e(arg0){const ret=getObject(arg0).send;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_send_e2afd11e927c3bcd(){return handleError(function(arg0,arg1){const ret=getObject(arg0).send(getObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_172c5f8528d87fe1(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_a5de411321c7796a(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_b7d673ba2c8434b5(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_d001f072ff3cc65b(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_d68744b3035d8c5c(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_e6502d01df5e18e8(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setBulk_eb179250f123d251(){return handleError(function(arg0,arg1){const ret=getObject(arg0).setBulk(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_setTimeout_56bcdccbad22fd44(){return handleError(function(arg0,arg1){const ret=setTimeout(getObject(arg0),arg1);return addHeapObject(ret);},arguments);}function __wbg_setTimeout_b4a9096784635514(arg0,arg1){const ret=setTimeout(getObject(arg0),arg1);return addHeapObject(ret);}function __wbg_set_0fc7970fc48e0425(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_282384002438957f(arg0,arg1,arg2){getObject(arg0)[arg1>>>0]=takeObject(arg2);}function __wbg_set_3634d4af0cac6d8c(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_6be42768c690e380(arg0,arg1,arg2){getObject(arg0)[takeObject(arg1)]=takeObject(arg2);}function __wbg_set_766233ed8647ec6a(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_7da09aaac8278723(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_7db89ceec8463c0b(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_7eaa4f96924fd6b3(){return handleError(function(arg0,arg1,arg2){const ret=Reflect.set(getObject(arg0),getObject(arg1),getObject(arg2));return ret;},arguments);}function __wbg_set_8c0b3ffcf05d61c2(arg0,arg1,arg2){getObject(arg0).set(getArrayU8FromWasm0(arg1,arg2));}function __wbg_set_account_cryptographic_state_b2797e5c4ef7b1ff(arg0,arg1){const ret=getObject(arg0).set_account_cryptographic_state(takeObject(arg1));return addHeapObject(ret);}function __wbg_set_autotype_enabled_d2ae50cb0a451baa(){return handleError(function(arg0,arg1){const ret=getObject(arg0).set_autotype_enabled(arg1!==0);return addHeapObject(ret);},arguments);}function __wbg_set_autotype_keyboard_shortcut_277d70f5c8435196(){return handleError(function(arg0,arg1,arg2){var v0=getArrayJsValueFromWasm0(arg1,arg2).slice();wasm.__wbindgen_free(arg1,arg2*4,4);const ret=getObject(arg0).set_autotype_keyboard_shortcut(v0);return addHeapObject(ret);},arguments);}function __wbg_set_bf7251625df30a02(arg0,arg1,arg2){const ret=getObject(arg0).set(getObject(arg1),getObject(arg2));return addHeapObject(ret);}function __wbg_set_body_a3d856b097dfda04(arg0,arg1){getObject(arg0).body=getObject(arg1);}function __wbg_set_cache_ec7e430c6056ebda(arg0,arg1){getObject(arg0).cache=__wbindgen_enum_RequestCache[arg1];}function __wbg_set_credentials_ed63183445882c65(arg0,arg1){getObject(arg0).credentials=__wbindgen_enum_RequestCredentials[arg1];}function __wbg_set_d7ca52954c545d75(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_e21d3d049c9ecaaa(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set(getStringFromWasm0(arg1,arg2),takeObject(arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_set_encrypted_pin_d87295dd28265654(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set_encrypted_pin(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_ephemeral_pin_envelope_eef8c2a9014288ca(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set_ephemeral_pin_envelope(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_headers_3c8fecc693b75327(arg0,arg1){getObject(arg0).headers=getObject(arg1);}function __wbg_set_kdf_config_ba818080ef844a76(arg0,arg1){const ret=getObject(arg0).set_kdf_config(takeObject(arg1));return addHeapObject(ret);}function __wbg_set_last_manual_lock_98aa3beefa0f4734(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).set_last_manual_lock(takeObject(arg1),arg2);return addHeapObject(ret);},arguments);}function __wbg_set_masterpassword_unlock_data_7d572de6cbdc6830(arg0,arg1){const ret=getObject(arg0).set_masterpassword_unlock_data(takeObject(arg1));return addHeapObject(ret);}function __wbg_set_method_8c015e8bcafd7be1(arg0,arg1,arg2){getObject(arg0).method=getStringFromWasm0(arg1,arg2);}function __wbg_set_mode_5a87f2c809cf37c2(arg0,arg1){getObject(arg0).mode=__wbindgen_enum_RequestMode[arg1];}function __wbg_set_name_4e2b49db764938c4(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;getObject(arg0).name=getStringFromWasm0(arg1,arg2);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_onerror_8a268cb237177bba(arg0,arg1){getObject(arg0).onerror=getObject(arg1);}function __wbg_set_onsuccess_fca94ded107b64af(arg0,arg1){getObject(arg0).onsuccess=getObject(arg1);}function __wbg_set_persistent_pin_envelope_8a3bfa187fc65d22(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set_persistent_pin_envelope(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_pin_length_e8a7e4759397621e(arg0,arg1){const ret=getObject(arg0).set_pin_length(arg1>>>0);return addHeapObject(ret);}function __wbg_set_referrer_4f2f273104bee6d0(arg0,arg1,arg2){getObject(arg0).referrer=getStringFromWasm0(arg1,arg2);}function __wbg_set_referrer_policy_3cea8b6e31a9e636(arg0,arg1){getObject(arg0).referrerPolicy=__wbindgen_enum_ReferrerPolicy[arg1];}function __wbg_set_signal_0cebecb698f25d21(arg0,arg1){getObject(arg0).signal=getObject(arg1);}function __wbg_set_type_33e79f1b45a78c37(arg0,arg1,arg2){getObject(arg0).type=getStringFromWasm0(arg1,arg2);}function __wbg_set_user_key_7cff6f04313006bc(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set_user_key(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_user_key_id_dae95ffaae85bb6c(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;const ret=getObject(arg0).set_user_key_id(getStringFromWasm0(arg1,arg2));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_v2_encrypted_migrations_grace_period_start_8c02b5a7a6aee0bb(arg0,arg1){const ret=getObject(arg0).set_v2_encrypted_migrations_grace_period_start(takeObject(arg1));return addHeapObject(ret);}function __wbg_set_v2_upgrade_token_632e18ce1c5eb8b8(arg0,arg1){const ret=getObject(arg0).set_v2_upgrade_token(takeObject(arg1));return addHeapObject(ret);}function __wbg_set_variant_8444ea8159e752cf(arg0,arg1,arg2){let deferred0_0;let deferred0_1;try{deferred0_0=arg1;deferred0_1=arg2;getObject(arg0).variant=getStringFromWasm0(arg1,arg2);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}}function __wbg_set_webauthn_prf_unlock_data_ab32e656ededc75d(arg0,arg1){const ret=getObject(arg0).set_webauthn_prf_unlock_data(takeObject(arg1));return addHeapObject(ret);}function __wbg_signal_166e1da31adcac18(arg0){const ret=getObject(arg0).signal;return addHeapObject(ret);}function __wbg_signal_5dac32f93f5f252c(arg0){const ret=getObject(arg0).signal;return addHeapObject(ret);}function __wbg_slice_f3fd3c2bec9310f6(arg0,arg1,arg2){const ret=getObject(arg0).slice(arg1>>>0,arg2>>>0);return addHeapObject(ret);}function __wbg_stack_3b0d974bbf31e44f(arg0,arg1){const ret=getObject(arg1).stack;const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);}function __wbg_static_accessor_GLOBAL_8adb955bd33fac2f(){const ret=typeof __webpack_require__.g==='undefined'?null:__webpack_require__.g;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913(){const ret=typeof globalThis==='undefined'?null:globalThis;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_static_accessor_SELF_f207c857566db248(){const ret=typeof self==='undefined'?null:self;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_static_accessor_WINDOW_bb9f1ba69d61b386(){const ret=typeof window==='undefined'?null:window;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_static_accessor_performance_7f6ecf1ec56b9bbe(){const ret=performance;return addHeapObject(ret);}function __wbg_status_318629ab93a22955(arg0){const ret=getObject(arg0).status;return ret;}function __wbg_stringify_5ae93966a84901ac(){return handleError(function(arg0){const ret=JSON.stringify(getObject(arg0));return addHeapObject(ret);},arguments);}function __wbg_subarray_a068d24e39478a8a(arg0,arg1,arg2){const ret=getObject(arg0).subarray(arg1>>>0,arg2>>>0);return addHeapObject(ret);}function __wbg_suppress_vault_timeout_1fe5cdd13e1bb569(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).suppress_vault_timeout(takeObject(arg1),arg2);return addHeapObject(ret);},arguments);}function __wbg_target_7bc90f314634b37b(arg0){const ret=getObject(arg0).target;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_text_372f5b91442c50f9(){return handleError(function(arg0){const ret=getObject(arg0).text();return addHeapObject(ret);},arguments);}function __wbg_then_098abe61755d12f6(arg0,arg1){const ret=getObject(arg0).then(getObject(arg1));return addHeapObject(ret);}function __wbg_then_9e335f6dd892bc11(arg0,arg1,arg2){const ret=getObject(arg0).then(getObject(arg1),getObject(arg2));return addHeapObject(ret);}function __wbg_transaction_3223f7c8d0f40129(){return handleError(function(arg0,arg1,arg2){const ret=getObject(arg0).transaction(getObject(arg1),__wbindgen_enum_IdbTransactionMode[arg2]);return addHeapObject(ret);},arguments);}function __wbg_unlock_biometrics_bdf66da7df4e2e57(){return handleError(function(arg0,arg1){const ret=getObject(arg0).unlock_biometrics(takeObject(arg1));return addHeapObject(ret);},arguments);}function __wbg_unlock_user_5e9d0f9b815dda2c(){return handleError(function(arg0,arg1,arg2,arg3){let deferred0_0;let deferred0_1;try{deferred0_0=arg2;deferred0_1=arg3;const ret=getObject(arg0).unlock_user(takeObject(arg1),getStringFromWasm0(arg2,arg3));return addHeapObject(ret);}finally{wasm.__wbindgen_free(deferred0_0,deferred0_1,1);}},arguments);}function __wbg_updateStatus_b68017b9512a8e6d(){return handleError(function(arg0,arg1,arg2,arg3){const ret=getObject(arg0).updateStatus(takeObject(arg1),getStringFromWasm0(arg2,arg3));return addHeapObject(ret);},arguments);}function __wbg_url_7fefc1820fba4e0c(arg0,arg1){const ret=getObject(arg1).url;const ptr1=passStringToWasm0(ret,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const len1=WASM_VECTOR_LEN;getDataViewMemory0().setInt32(arg0+4*1,len1,true);getDataViewMemory0().setInt32(arg0+4*0,ptr1,true);}function __wbg_value_21fc78aab0322612(arg0){const ret=getObject(arg0).value;return addHeapObject(ret);}function __wbg_view_f68a712e7315f8b2(arg0){const ret=getObject(arg0).view;return isLikeNone(ret)?0:addHeapObject(ret);}function __wbg_warn_69424c2d92a2fa73(arg0){console.warn(getObject(arg0));}function __wbg_warn_809cad1bfc2b3a42(arg0,arg1,arg2,arg3){console.warn(getObject(arg0),getObject(arg1),getObject(arg2),getObject(arg3));}function __wbindgen_cast_0000000000000001(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 254, function: Function { arguments: [NamedExternref("Event")], shim_idx: 255, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__web_sys_9f93f9e7d358ed61___features__gen_Event__Event____Output_______,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue______true_);return addHeapObject(ret);}function __wbindgen_cast_0000000000000002(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 379, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 380, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__js_sys_6e790b69f95a3b20___Array____Output___core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true_);return addHeapObject(ret);}function __wbindgen_cast_0000000000000003(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 379, function: Function { arguments: [NamedExternref("BroadcastResolution")], shim_idx: 399, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__js_sys_6e790b69f95a3b20___Array____Output___core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___bitwarden_ipc_8c464612aadee96d___traits__communication_backend__BroadcastResolution__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true_);return addHeapObject(ret);}function __wbindgen_cast_0000000000000004(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 379, function: Function { arguments: [NamedExternref("OnePasswordSsoEnrollment")], shim_idx: 380, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__js_sys_6e790b69f95a3b20___Array____Output___core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true__3);return addHeapObject(ret);}function __wbindgen_cast_0000000000000005(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 382, function: Function { arguments: [Externref], shim_idx: 255, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__wasm_bindgen_f8d13fbddea9e347___JsValue____Output___core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue______true__4);return addHeapObject(ret);}function __wbindgen_cast_0000000000000006(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 382, function: Function { arguments: [Externref], shim_idx: 380, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__wasm_bindgen_f8d13fbddea9e347___JsValue____Output___core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true__5);return addHeapObject(ret);}function __wbindgen_cast_0000000000000007(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 382, function: Function { arguments: [], shim_idx: 477, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut__wasm_bindgen_f8d13fbddea9e347___JsValue____Output___core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke_______true_);return addHeapObject(ret);}function __wbindgen_cast_0000000000000008(arg0,arg1){// Cast intrinsic for `Closure(Closure { dtor_idx: 846, function: Function { arguments: [], shim_idx: 477, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
const ret=makeMutClosure(arg0,arg1,wasm.wasm_bindgen_f8d13fbddea9e347___closure__destroy___dyn_core_85d4df5a6cd98d09___ops__function__FnMut_____Output_______,wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke_______true_);return addHeapObject(ret);}function __wbindgen_cast_0000000000000009(arg0){// Cast intrinsic for `F64 -> Externref`.
const ret=arg0;return addHeapObject(ret);}function __wbindgen_cast_000000000000000a(arg0){// Cast intrinsic for `I64 -> Externref`.
const ret=arg0;return addHeapObject(ret);}function __wbindgen_cast_000000000000000b(arg0,arg1){// Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
const ret=getArrayU8FromWasm0(arg0,arg1);return addHeapObject(ret);}function __wbindgen_cast_000000000000000c(arg0,arg1){// Cast intrinsic for `Ref(String) -> Externref`.
const ret=getStringFromWasm0(arg0,arg1);return addHeapObject(ret);}function __wbindgen_cast_000000000000000d(arg0){// Cast intrinsic for `U64 -> Externref`.
const ret=BigInt.asUintN(64,arg0);return addHeapObject(ret);}function __wbindgen_cast_000000000000000e(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("AccessConnector")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000000f(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("AccessLeaseView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000010(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("AccessRequestView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000011(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("AccessRuleView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000012(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("AcquiredCookie")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000013(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("CipherListView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000014(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("CipherRiskResult")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000015(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("CipherView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000016(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("CollectionId")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000017(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("EncryptionContext")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000018(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("FolderView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000019(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("GranteeEmergencyAccess")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000001a(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("GrantorEmergencyAccess")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000001b(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("IpcEndpointSendResult")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000001c(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("OrganizationUserBulkResponse")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000001d(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("Policy")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000001e(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("RotationConfigView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_000000000000001f(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("SendView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000020(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("TargetSystemView")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000021(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("V1EmergencyAccessMembership")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000022(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("V1OrganizationMembership")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_cast_0000000000000023(arg0,arg1){var v0=getArrayJsValueFromWasm0(arg0,arg1).slice();wasm.__wbindgen_free(arg0,arg1*4,4);// Cast intrinsic for `Vector(NamedExternref("string")) -> Externref`.
const ret=v0;return addHeapObject(ret);}function __wbindgen_object_clone_ref(arg0){const ret=getObject(arg0);return addHeapObject(ret);}function __wbindgen_object_drop_ref(arg0){takeObject(arg0);}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke_______true_(arg0,arg1){wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke_______true_(arg0,arg1);}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue______true_(arg0,arg1,arg2){wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue______true_(arg0,arg1,addHeapObject(arg2));}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue______true__4(arg0,arg1,arg2){wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue______true__4(arg0,arg1,addHeapObject(arg2));}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true_(arg0,arg1,arg2){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true_(retptr,arg0,arg1,addHeapObject(arg2));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___bitwarden_ipc_8c464612aadee96d___traits__communication_backend__BroadcastResolution__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true_(arg0,arg1,arg2){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___bitwarden_ipc_8c464612aadee96d___traits__communication_backend__BroadcastResolution__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true_(retptr,arg0,arg1,addHeapObject(arg2));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true__3(arg0,arg1,arg2){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true__3(retptr,arg0,arg1,addHeapObject(arg2));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true__5(arg0,arg1,arg2){try{const retptr=wasm.__wbindgen_add_to_stack_pointer(-16);wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___wasm_bindgen_f8d13fbddea9e347___JsValue__core_85d4df5a6cd98d09___result__Result_____wasm_bindgen_f8d13fbddea9e347___JsError___true__5(retptr,arg0,arg1,addHeapObject(arg2));var r0=getDataViewMemory0().getInt32(retptr+4*0,true);var r1=getDataViewMemory0().getInt32(retptr+4*1,true);if(r1){throw takeObject(r0);}}finally{wasm.__wbindgen_add_to_stack_pointer(16);}}function wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___js_sys_6e790b69f95a3b20___Function_fn_wasm_bindgen_f8d13fbddea9e347___JsValue_____wasm_bindgen_f8d13fbddea9e347___sys__Undefined___js_sys_6e790b69f95a3b20___Function_fn_wasm_bindgen_f8d13fbddea9e347___JsValue_____wasm_bindgen_f8d13fbddea9e347___sys__Undefined_______true_(arg0,arg1,arg2,arg3){wasm.wasm_bindgen_f8d13fbddea9e347___convert__closures_____invoke___js_sys_6e790b69f95a3b20___Function_fn_wasm_bindgen_f8d13fbddea9e347___JsValue_____wasm_bindgen_f8d13fbddea9e347___sys__Undefined___js_sys_6e790b69f95a3b20___Function_fn_wasm_bindgen_f8d13fbddea9e347___JsValue_____wasm_bindgen_f8d13fbddea9e347___sys__Undefined_______true_(arg0,arg1,addHeapObject(arg2),addHeapObject(arg3));}const __wbindgen_enum_IdbTransactionMode=(/* unused pure expression or super */ null && (["readonly","readwrite","versionchange","readwriteflush","cleanup"]));const __wbindgen_enum_ReadableStreamType=["bytes"];const __wbindgen_enum_ReferrerPolicy=(/* unused pure expression or super */ null && (["","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","unsafe-url","same-origin","strict-origin","strict-origin-when-cross-origin"]));const __wbindgen_enum_RequestCache=(/* unused pure expression or super */ null && (["default","no-store","reload","no-cache","force-cache","only-if-cached"]));const __wbindgen_enum_RequestCredentials=(/* unused pure expression or super */ null && (["omit","same-origin","include"]));const __wbindgen_enum_RequestMode=(/* unused pure expression or super */ null && (["same-origin","no-cors","cors","navigate"]));const AccessConnectorsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_accessconnectorsclient_free(ptr>>>0,1));const AccessRequestsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_accessrequestsclient_free(ptr>>>0,1));const AccessRulesClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_accessrulesclient_free(ptr>>>0,1));const ApprovalsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_approvalsclient_free(ptr>>>0,1));const AttachmentAdminClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_attachmentadminclient_free(ptr>>>0,1));const AttachmentsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_attachmentsclient_free(ptr>>>0,1));const AuthClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_authclient_free(ptr>>>0,1));const CipherAdminClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_cipheradminclient_free(ptr>>>0,1));const CipherRiskClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_cipherriskclient_free(ptr>>>0,1));const CiphersClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_ciphersclient_free(ptr>>>0,1));const CollectionViewNodeItemFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_collectionviewnodeitem_free(ptr>>>0,1));const CollectionViewTreeFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_collectionviewtree_free(ptr>>>0,1));const CollectionsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_collectionsclient_free(ptr>>>0,1));const CommercialPasswordManagerClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_commercialpasswordmanagerclient_free(ptr>>>0,1));const CommercialVaultClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_commercialvaultclient_free(ptr>>>0,1));const CryptoCipherSuiteClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_cryptociphersuiteclient_free(ptr>>>0,1));const CryptoClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_cryptoclient_free(ptr>>>0,1));const CryptoSyncHandlerClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_cryptosynchandlerclient_free(ptr>>>0,1));const EmergencyAccessClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_emergencyaccessclient_free(ptr>>>0,1));const EncryptedMigratorClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_encryptedmigratorclient_free(ptr>>>0,1));const ExporterClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_exporterclient_free(ptr>>>0,1));const FlagsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_flagsclient_free(ptr>>>0,1));const FlightRecorderClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_flightrecorderclient_free(ptr>>>0,1));const FoldersClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_foldersclient_free(ptr>>>0,1));const GeneratorClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_generatorclient_free(ptr>>>0,1));const ImporterClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_importerclient_free(ptr>>>0,1));const IncomingMessageFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_incomingmessage_free(ptr>>>0,1));const IntoUnderlyingByteSourceFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_intounderlyingbytesource_free(ptr>>>0,1));const IntoUnderlyingSinkFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_intounderlyingsink_free(ptr>>>0,1));const IntoUnderlyingSourceFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_intounderlyingsource_free(ptr>>>0,1));const InviteLinkAdminClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invitelinkadminclient_free(ptr>>>0,1));const InviteLinkClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invitelinkclient_free(ptr>>>0,1));const InviteLinkUserClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_invitelinkuserclient_free(ptr>>>0,1));const IpcCommunicationBackendFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_ipccommunicationbackend_free(ptr>>>0,1));const IpcClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_ipcclient_free(ptr>>>0,1));const IpcClientSubscriptionFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_ipcclientsubscription_free(ptr>>>0,1));const ServerCommunicationConfigClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_servercommunicationconfigclient_free(ptr>>>0,1));const LeasesClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_leasesclient_free(ptr>>>0,1));const LoginClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_loginclient_free(ptr>>>0,1));const ManagedSettingsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_managedsettingsclient_free(ptr>>>0,1));const OrganizationDomainsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_organizationdomainsclient_free(ptr>>>0,1));const OrganizationUsersManagementClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_organizationusersmanagementclient_free(ptr>>>0,1));const OutgoingMessageFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_outgoingmessage_free(ptr>>>0,1));const PamClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_pamclient_free(ptr>>>0,1));const PasswordManagerClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_passwordmanagerclient_free(ptr>>>0,1));const PinSettingsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_pinsettingsclient_free(ptr>>>0,1));const PlatformClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_platformclient_free(ptr>>>0,1));const PolicyClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_policyclient_free(ptr>>>0,1));const PureCryptoFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_purecrypto_free(ptr>>>0,1));const RegistrationClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_registrationclient_free(ptr>>>0,1));const RotationClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_rotationclient_free(ptr>>>0,1));const RotationConfigsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_rotationconfigsclient_free(ptr>>>0,1));const RotationScheduleClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_rotationscheduleclient_free(ptr>>>0,1));const SdkRandomNumberClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_sdkrandomnumberclient_free(ptr>>>0,1));const SendAccessClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_sendaccessclient_free(ptr>>>0,1));const SendClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_sendclient_free(ptr>>>0,1));const SendReceiveClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_sendreceiveclient_free(ptr>>>0,1));const SendSyncHandlerClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_sendsynchandlerclient_free(ptr>>>0,1));const SharedUnlockPeerFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_sharedunlockpeer_free(ptr>>>0,1));const StateBridgeClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_statebridgeclient_free(ptr>>>0,1));const StateClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_stateclient_free(ptr>>>0,1));const TargetSystemsClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_targetsystemsclient_free(ptr>>>0,1));const TotpClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_totpclient_free(ptr>>>0,1));const UnlockClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_unlockclient_free(ptr>>>0,1));const UserCryptoManagementClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_usercryptomanagementclient_free(ptr>>>0,1));const VaultClientFinalization=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(ptr=>wasm.__wbg_vaultclient_free(ptr>>>0,1));function addHeapObject(obj){if(heap_next===heap.length)heap.push(heap.length+1);const idx=heap_next;heap_next=heap[idx];heap[idx]=obj;return idx;}function _assertClass(instance,klass){if(!(instance instanceof klass)){throw new Error(`expected instance of ${klass.name}`);}}function addBorrowedObject(obj){if(stack_pointer==1)throw new Error('out of js stack');heap[--stack_pointer]=obj;return stack_pointer;}const CLOSURE_DTORS=typeof FinalizationRegistry==='undefined'?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(state=>state.dtor(state.a,state.b));function debugString(val){// primitive types
const type=typeof val;if(type=='number'||type=='boolean'||val==null){return`${val}`;}if(type=='string'){return`"${val}"`;}if(type=='symbol'){const description=val.description;if(description==null){return'Symbol';}else{return`Symbol(${description})`;}}if(type=='function'){const name=val.name;if(typeof name=='string'&&name.length>0){return`Function(${name})`;}else{return'Function';}}// objects
if(Array.isArray(val)){const length=val.length;let debug='[';if(length>0){debug+=debugString(val[0]);}for(let i=1;i<length;i++){debug+=', '+debugString(val[i]);}debug+=']';return debug;}// Test for built-in
const builtInMatches=/\[object ([^\]]+)\]/.exec(toString.call(val));let className;if(builtInMatches&&builtInMatches.length>1){className=builtInMatches[1];}else{// Failed to match the standard '[object ClassName]'
return toString.call(val);}if(className=='Object'){// we're a user defined class or Object
// JSON.stringify avoids problems with cycles, and is generally much
// easier than looping through ownProperties of `val`.
try{return'Object('+JSON.stringify(val)+')';}catch(_){return'Object';}}// errors
if(val instanceof Error){return`${val.name}: ${val.message}\n${val.stack}`;}// TODO we could test for more things here, like `Set`s and `Map`s.
return className;}function dropObject(idx){if(idx<1028)return;heap[idx]=heap_next;heap_next=idx;}function getArrayJsValueFromWasm0(ptr,len){ptr=ptr>>>0;const mem=getDataViewMemory0();const result=[];for(let i=ptr;i<ptr+4*len;i+=4){result.push(takeObject(mem.getUint32(i,true)));}return result;}function getArrayU8FromWasm0(ptr,len){ptr=ptr>>>0;return getUint8ArrayMemory0().subarray(ptr/1,ptr/1+len);}let cachedDataViewMemory0=null;function getDataViewMemory0(){if(cachedDataViewMemory0===null||cachedDataViewMemory0.buffer.detached===true||cachedDataViewMemory0.buffer.detached===undefined&&cachedDataViewMemory0.buffer!==wasm.memory.buffer){cachedDataViewMemory0=new DataView(wasm.memory.buffer);}return cachedDataViewMemory0;}function getStringFromWasm0(ptr,len){ptr=ptr>>>0;return decodeText(ptr,len);}let cachedUint8ArrayMemory0=null;function getUint8ArrayMemory0(){if(cachedUint8ArrayMemory0===null||cachedUint8ArrayMemory0.byteLength===0){cachedUint8ArrayMemory0=new Uint8Array(wasm.memory.buffer);}return cachedUint8ArrayMemory0;}function getObject(idx){return heap[idx];}function handleError(f,args){try{return f.apply(this,args);}catch(e){wasm.__wbindgen_exn_store(addHeapObject(e));}}let heap=new Array(1024).fill(undefined);heap.push(undefined,null,true,false);let heap_next=heap.length;function isLikeNone(x){return x===undefined||x===null;}function makeMutClosure(arg0,arg1,dtor,f){const state={a:arg0,b:arg1,cnt:1,dtor};const real=(...args)=>{// First up with a closure we increment the internal reference
// count. This ensures that the Rust closure environment won't
// be deallocated while we're invoking it.
state.cnt++;const a=state.a;state.a=0;try{return f(a,state.b,...args);}finally{state.a=a;real._wbg_cb_unref();}};real._wbg_cb_unref=()=>{if(--state.cnt===0){state.dtor(state.a,state.b);state.a=0;CLOSURE_DTORS.unregister(state);}};CLOSURE_DTORS.register(real,state,state);return real;}function passArray8ToWasm0(arg,malloc){const ptr=malloc(arg.length*1,1)>>>0;getUint8ArrayMemory0().set(arg,ptr/1);WASM_VECTOR_LEN=arg.length;return ptr;}function passArrayJsValueToWasm0(array,malloc){const ptr=malloc(array.length*4,4)>>>0;const mem=getDataViewMemory0();for(let i=0;i<array.length;i++){mem.setUint32(ptr+4*i,addHeapObject(array[i]),true);}WASM_VECTOR_LEN=array.length;return ptr;}function passStringToWasm0(arg,malloc,realloc){if(realloc===undefined){const buf=cachedTextEncoder.encode(arg);const ptr=malloc(buf.length,1)>>>0;getUint8ArrayMemory0().subarray(ptr,ptr+buf.length).set(buf);WASM_VECTOR_LEN=buf.length;return ptr;}let len=arg.length;let ptr=malloc(len,1)>>>0;const mem=getUint8ArrayMemory0();let offset=0;for(;offset<len;offset++){const code=arg.charCodeAt(offset);if(code>0x7F)break;mem[ptr+offset]=code;}if(offset!==len){if(offset!==0){arg=arg.slice(offset);}ptr=realloc(ptr,len,len=offset+arg.length*3,1)>>>0;const view=getUint8ArrayMemory0().subarray(ptr+offset,ptr+len);const ret=cachedTextEncoder.encodeInto(arg,view);offset+=ret.written;ptr=realloc(ptr,len,offset,1)>>>0;}WASM_VECTOR_LEN=offset;return ptr;}let stack_pointer=1024;function takeObject(idx){const ret=getObject(idx);dropObject(idx);return ret;}let cachedTextDecoder=new TextDecoder('utf-8',{ignoreBOM:true,fatal:true});cachedTextDecoder.decode();const MAX_SAFARI_DECODE_BYTES=2146435072;let numBytesDecoded=0;function decodeText(ptr,len){numBytesDecoded+=len;if(numBytesDecoded>=MAX_SAFARI_DECODE_BYTES){cachedTextDecoder=new TextDecoder('utf-8',{ignoreBOM:true,fatal:true});cachedTextDecoder.decode();numBytesDecoded=len;}return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr,ptr+len));}const cachedTextEncoder=new TextEncoder();if(!('encodeInto'in cachedTextEncoder)){cachedTextEncoder.encodeInto=function(arg,view){const buf=cachedTextEncoder.encode(arg);view.set(buf);return{read:arg.length,written:buf.length};};}let WASM_VECTOR_LEN=0;let wasm;function __wbg_set_wasm(val){wasm=val;}
;// ../../libs/common/src/billing/enums/product-tier-type.enum.ts
/* unused harmony import specifier */ var SdkProductTierType;

// Re-export the SdkProductTierType so we have a single source of truth

function isNotSelfUpgradable(productType) {
    return (productType !== SdkProductTierType.Free &&
        productType !== SdkProductTierType.TeamsStarter &&
        productType !== SdkProductTierType.Families);
}

;// ../../libs/common/src/billing/enums/product-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ProductType;
(function (ProductType) {
    ProductType[ProductType["PasswordManager"] = 0] = "PasswordManager";
    ProductType[ProductType["SecretsManager"] = 1] = "SecretsManager";
    ProductType[ProductType["PrivilegedControls"] = 2] = "PrivilegedControls";
})(ProductType || (ProductType = {}));

;// ../../libs/common/src/billing/enums/plan-interval.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanInterval;
(function (PlanInterval) {
    PlanInterval[PlanInterval["Monthly"] = 0] = "Monthly";
    PlanInterval[PlanInterval["Annually"] = 1] = "Annually";
})(PlanInterval || (PlanInterval = {}));

;// ../../libs/common/src/billing/enums/index.ts










;// ../../node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const property_o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},property_r=(t=property_o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map()),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t,!0,r);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e;}};}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t,!0,r);};}throw Error("Unsupported decorator location: "+n);};function property_n(t){return(e,o)=>"object"==typeof o?property_r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0;})(t,e,o);}
;// ../../node_modules/@lit/reactive-element/decorators/state.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(r){return property_n({...r,state:!0,attribute:!1});}
;// ../../node_modules/lit/decorators.js

;// ./src/autofill/content/components/buttons/option-selection-button.ts




function OptionSelectionButton({ disabled, icon, id, text, theme, toggledOn, handleButtonClick, }) {
    const selectedOptionIconProps = { color: themes[theme].text.muted, theme };
    const buttonIcon = icon === null || icon === void 0 ? void 0 : icon(selectedOptionIconProps);
    return lit_html_b `
    <button
      class=${selectionButtonStyles({ disabled, toggledOn, theme })}
      data-testid="${id}-option-selection"
      title=${text}
      type="button"
      aria-haspopup="menu"
      aria-expanded=${toggledOn}
      aria-controls="option-menu"
      @click=${handleButtonClick}
    >
      ${buttonIcon !== null && buttonIcon !== void 0 ? buttonIcon : A}
      ${text ? lit_html_b `<span class=${dropdownButtonTextStyles}>${text}</span>` : A}
      ${toggledOn
        ? AngleUp({ color: themes[theme].text.muted, theme })
        : AngleDown({ color: themes[theme].text.muted, theme })}
    </button>
  `;
}
const iconSize = "16px";
const selectionButtonStyles = ({ disabled, toggledOn, theme, }) => css `
  ${typography.body2}

  gap: ${spacing["1.5"]};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  columns: ${iconSize} max-content ${iconSize};
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 400;

  ${disabled
    ? `
      border: 1px solid ${themes[theme].secondary["300"]};
      background-color: ${themes[theme].secondary["300"]};
      cursor: not-allowed;
      color: ${themes[theme].text.muted};
    `
    : `
      border: 1px solid ${themes[theme].text.muted};
      background-color: ${toggledOn ? themes[theme].secondary["100"] : "transparent"};
      cursor: pointer;
      color: ${themes[theme].text.muted};

      :hover {
        border-color: ${themes[theme].secondary["700"]};
        background-color: ${themes[theme].secondary["100"]};
      }
    `}

  > svg {
    max-width: ${iconSize};
    max-height: ${iconSize};
    height: auto;
  }
`;
const dropdownButtonTextStyles = css `
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

;// ./src/autofill/content/components/option-selection/option-item.ts




const optionItemTagName = "option-item";
const { css: option_item_css } = createEmotion({
    key: optionItemTagName,
});
function OptionItem({ contextLabel, id, icon, text, theme, value, handleSelection, }) {
    const handleSelectionKeyUpProxy = (event) => {
        /**
         * Reject synthetic events (not originating from the user agent)
         */
        if (!EventSecurity.isEventTrusted(event)) {
            return;
        }
        const listenedForKeys = new Set(["Enter", "Space"]);
        if (listenedForKeys.has(event.code) && event.target instanceof Element) {
            handleSelection();
        }
        return;
    };
    const handleSelectionClickProxy = (event) => {
        /**
         * Reject synthetic events (not originating from the user agent)
         */
        if (!EventSecurity.isEventTrusted(event)) {
            return;
        }
        handleSelection();
    };
    const iconProps = { color: themes[theme].text.main, theme };
    const itemIcon = icon === null || icon === void 0 ? void 0 : icon(iconProps);
    const ariaLabel = contextLabel && text
        ? chrome.i18n.getMessage("selectItemAriaLabel", [contextLabel, text])
        : text;
    return lit_html_b `<div
    class=${optionItemStyles}
    data-testid="${id}-option-item"
    key=${value}
    tabindex="0"
    title=${text}
    role="option"
    aria-label=${ariaLabel}
    @click=${handleSelectionClickProxy}
    @keyup=${handleSelectionKeyUpProxy}
  >
    ${itemIcon ? lit_html_b `<div class=${optionItemIconContainerStyles}>${itemIcon}</div>` : A}
    <span class=${optionItemTextStyles}>${text || value}</span>
  </div>`;
}
const optionItemIconWidth = 16;
const optionItemGap = spacing["2"];
const optionItemStyles = option_item_css `
  gap: ${optionItemGap};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const optionItemIconContainerStyles = option_item_css `
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: ${optionItemIconWidth}px;
  max-height: ${optionItemIconWidth}px;

  > svg {
    width: 100%;
    height: auto;
  }
`;
const optionItemTextStyles = option_item_css `
  flex: 1 1 calc(100% - ${optionItemIconWidth}px - ${optionItemGap});
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

;// ./src/autofill/content/components/option-selection/option-items.ts





const optionItemsTagName = "option-items";
const { css: option_items_css } = createEmotion({
    key: optionItemsTagName,
});
function OptionItems({ id, theme, topOffset, label, options, handleOptionSelection, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return lit_html_b `
    <div
      class=${optionsStyles({ theme, topOffset })}
      key="container"
      @keyup=${(e) => handleMenuKeyUp(e)}
    >
      ${label ? lit_html_b `<div class=${optionsLabelStyles({ theme })}>${label}</div>` : A}
      <div class=${optionsWrapper({ isSafari, theme })}>
        ${options.map((option) => OptionItem(Object.assign(Object.assign({ id }, option), { theme, contextLabel: label, handleSelection: () => handleOptionSelection(option) })))}
      </div>
    </div>
  `;
}
function handleMenuKeyUp(event) {
    var _a;
    if (!EventSecurity.isEventTrusted(event)) {
        return;
    }
    const items = [
        ...event.currentTarget.querySelectorAll('[tabindex="0"]'),
    ];
    const index = items.indexOf(document.activeElement);
    const direction = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (index === -1 || direction === 0) {
        return;
    }
    event.preventDefault();
    (_a = items[(index + direction + items.length) % items.length]) === null || _a === void 0 ? void 0 : _a.focus();
}
const optionsStyles = ({ theme, topOffset }) => option_items_css `
  ${typography.body1}

  -webkit-font-smoothing: antialiased;
  position: absolute;
  /* top offset + line-height of dropdown button + top and bottom padding of button + border-width */
  top: calc(${topOffset}px + 20px + ${spacing["1"]} + ${spacing["1"]} + 1px);
  border: 1px solid ${themes[theme].secondary["500"]};
  border-radius: 0.5rem;
  background-clip: padding-box;
  background-color: ${themes[theme].background.DEFAULT};
  padding: 0.25rem 0;
  max-width: fit-content;
  overflow-y: hidden;
  color: ${themes[theme].text.main};
`;
const optionsLabelStyles = ({ theme }) => option_items_css `
  ${typography.helperMedium}

  user-select: none;
  padding: 0.375rem ${spacing["3"]};
  color: ${themes[theme].text.muted};
  font-weight: 500;
`;
const optionsMenuItemMaxWidth = 260;
const optionsMenuItemsMaxHeight = 114;
const optionsWrapper = ({ isSafari, theme }) => option_items_css `
  max-height: ${optionsMenuItemsMaxHeight}px;
  overflow-y: auto;

  > [class*="${optionItemTagName}-"] {
    padding: ${spacing["1.5"]} ${spacing["3"]};
    max-width: ${optionsMenuItemMaxWidth}px;

    :hover {
      background-color: ${themes[theme].primary["100"]};
    }
  }

  ${isSafari
    ? scrollbarStyles(theme, { track: "transparent" }).safari
    : scrollbarStyles(theme, { track: "transparent" }).default}
`;

;// ./src/autofill/content/components/option-selection/option-selection.ts
var option_selection_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var option_selection_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var option_selection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const optionSelectionTagName = "option-selection";
const { css: option_selection_css } = createEmotion({
    key: optionSelectionTagName,
});
class OptionSelection extends lit_element_i {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.id = "";
        this.options = [];
        this.theme = ThemeTypes.Light;
        this.showMenu = false;
        this.menuTopOffset = 0;
        // Determines if the opened menu should be "anchored" to the right or left side of the opening button
        this.menuIsEndJustified = false;
        this.handleButtonClick = (event) => option_selection_awaiter(this, void 0, void 0, function* () {
            if (EventSecurity.isEventTrusted(event) && !this.disabled) {
                const isOpening = !this.showMenu;
                if (isOpening) {
                    if (OptionSelection.currentOpenInstance && OptionSelection.currentOpenInstance !== this) {
                        OptionSelection.currentOpenInstance.showMenu = false;
                    }
                    OptionSelection.currentOpenInstance = this;
                    this.menuTopOffset = this.offsetTop;
                    // Distance from right edge of button to left edge of the viewport
                    // Assumes no enclosing frames between the intended host frame and the component
                    const boundingClientRect = this.getBoundingClientRect();
                    // Width of the client (minus scrollbar)
                    const documentWidth = document.documentElement.clientWidth;
                    // Distance between left edge of the button and right edge of the viewport
                    // (e.g. the max space the menu can use when left-aligned)
                    const distanceFromViewportRightEdge = documentWidth - boundingClientRect.left;
                    // The full width the option menu can take up
                    // (base + icon + border + gap + padding)
                    const maxDifferenceThreshold = optionsMenuItemMaxWidth + optionItemIconWidth + 2 + 8 + 12 * 2;
                    this.menuIsEndJustified = distanceFromViewportRightEdge < maxDifferenceThreshold;
                }
                else {
                    if (OptionSelection.currentOpenInstance === this) {
                        OptionSelection.currentOpenInstance = null;
                    }
                }
                this.showMenu = isOpening;
                if (this.showMenu) {
                    yield this.updateComplete;
                    const firstItem = this.querySelector('#option-menu [tabindex="0"]');
                    firstItem === null || firstItem === void 0 ? void 0 : firstItem.focus();
                }
            }
        });
        this.handleFocusOut = (event) => {
            const relatedTarget = event.relatedTarget;
            if (!(relatedTarget instanceof Node) || !this.contains(relatedTarget)) {
                this.showMenu = false;
                if (OptionSelection.currentOpenInstance === this) {
                    OptionSelection.currentOpenInstance = null;
                }
            }
        };
        this.handleOptionSelection = (selectedOption) => {
            var _a, _b;
            this.showMenu = false;
            this.selection = selectedOption;
            (_a = this.selectedSignal) === null || _a === void 0 ? void 0 : _a.set(selectedOption.value);
            // Any side-effects that should occur from the selection
            (_b = this.handleSelectionUpdate) === null || _b === void 0 ? void 0 : _b.call(this, selectedOption.value);
        };
    }
    createRenderRoot() {
        return this;
    }
    render() {
        var _a, _b;
        if (!this.selection) {
            this.selection = getDefaultOption(this.options);
        }
        return lit_html_b `
      <div
        class=${optionSelectionStyles({ menuIsEndJustified: this.menuIsEndJustified })}
        @focusout=${this.handleFocusOut}
      >
        ${OptionSelectionButton({
            disabled: this.disabled,
            icon: (_a = this.selection) === null || _a === void 0 ? void 0 : _a.icon,
            id: this.id,
            text: (_b = this.selection) === null || _b === void 0 ? void 0 : _b.text,
            theme: this.theme,
            toggledOn: this.showMenu,
            handleButtonClick: this.handleButtonClick,
        })}
        ${this.showMenu
            ? OptionItems({
                id: this.id,
                label: this.label,
                options: this.options,
                theme: this.theme,
                topOffset: this.menuTopOffset,
                handleOptionSelection: this.handleOptionSelection,
            })
            : A}
      </div>
    `;
    }
}
OptionSelection.currentOpenInstance = null;
option_selection_decorate([
    property_n(),
    option_selection_metadata("design:type", Boolean)
], OptionSelection.prototype, "disabled", void 0);
option_selection_decorate([
    property_n(),
    option_selection_metadata("design:type", String)
], OptionSelection.prototype, "id", void 0);
option_selection_decorate([
    property_n(),
    option_selection_metadata("design:type", String)
], OptionSelection.prototype, "label", void 0);
option_selection_decorate([
    property_n({ type: Array }),
    option_selection_metadata("design:type", Array)
], OptionSelection.prototype, "options", void 0);
option_selection_decorate([
    property_n(),
    option_selection_metadata("design:type", String)
], OptionSelection.prototype, "theme", void 0);
option_selection_decorate([
    property_n({ type: (selectedOption) => selectedOption }),
    option_selection_metadata("design:type", Function)
], OptionSelection.prototype, "handleSelectionUpdate", void 0);
option_selection_decorate([
    property_n({ attribute: false }),
    option_selection_metadata("design:type", Object)
], OptionSelection.prototype, "selectedSignal", void 0);
option_selection_decorate([
    state_r(),
    option_selection_metadata("design:type", Object)
], OptionSelection.prototype, "showMenu", void 0);
option_selection_decorate([
    state_r(),
    option_selection_metadata("design:type", Number)
], OptionSelection.prototype, "menuTopOffset", void 0);
option_selection_decorate([
    state_r(),
    option_selection_metadata("design:type", Boolean)
], OptionSelection.prototype, "menuIsEndJustified", void 0);
option_selection_decorate([
    state_r(),
    option_selection_metadata("design:type", Object)
], OptionSelection.prototype, "selection", void 0);
/* harmony default export */ var option_selection = (customElements.define(optionSelectionTagName, OptionSelection));
function getDefaultOption(options = []) {
    return options.find((option) => option.default) || options[0];
}
const optionSelectionStyles = ({ menuIsEndJustified }) => option_selection_css `
  display: flex;
  justify-content: ${menuIsEndJustified ? "flex-end" : "flex-start"};

  > div,
  > button {
    width: 100%;
  }
`;

;// ./src/autofill/content/components/rows/button-row.ts





function ButtonRow({ theme, primaryButton, selectButtons }) {
    return lit_html_b `
    <div class=${buttonRowStyles}>
      ${ActionButton({
        handleClick: primaryButton.handlePrimaryButtonClick,
        buttonText: primaryButton.text,
        isLoading: primaryButton.isLoading,
        theme,
    })}
      <div class=${optionSelectionsStyles}>
        ${selectButtons === null || selectButtons === void 0 ? void 0 : selectButtons.map(({ id, label, options, handleSelectionUpdate, selectedSignal }) => lit_html_b `
              <option-selection
                key=${id}
                theme=${theme}
                .id=${id}
                .label=${label}
                .options=${options}
                .handleSelectionUpdate=${handleSelectionUpdate}
                .selectedSignal=${selectedSignal}
              ></option-selection>
            ` || A)}
      </div>
    </div>
  `;
}
const buttonRowStyles = css `
  gap: ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 52px;
  white-space: nowrap;
  padding-top: ${spacing[1]};

  > button {
    max-width: min-content;
    flex: 1 1 25%;
  }

  > div {
    flex: 1 1 min-content;
  }
`;
const optionSelectionsStyles = css `
  gap: ${spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  > ${optionSelectionTagName} {
    /* assumes two option selections */
    max-width: calc(50% - ${spacing["1.5"]});
    min-width: 120px;
  }
`;

;// ./src/autofill/content/components/signals/selected-collection.ts

const selectedCollection = signals_r("0");

;// ./src/autofill/content/components/signals/selected-folder.ts

const selected_folder_selectedFolder = signals_r("0");

;// ./src/autofill/content/components/signals/selected-vault.ts

const selected_vault_selectedVault = signals_r("0");

;// ./src/autofill/content/components/notification/button-row.ts







function getVaultIconByProductTier(productTierType) {
    switch (productTierType) {
        case ProductTierType.Free:
        case ProductTierType.Families:
            return Family;
        case ProductTierType.Teams:
        case ProductTierType.Enterprise:
        case ProductTierType.TeamsStarter:
            return Business;
        default:
            return User;
    }
}
// Value represents default selector state outside of data-driven state
const defaultNoneSelectValue = "0";
function NotificationButtonRow({ collections, folders, i18n, organizations, primaryButton, personalVaultIsAllowed, theme, }) {
    const currentUserVaultOption = {
        icon: User,
        default: true,
        text: i18n.myVault,
        value: defaultNoneSelectValue,
    };
    // Do not include user vault if disallowed by org policy
    const initialVaultOptions = [
        ...(personalVaultIsAllowed ? [currentUserVaultOption] : []),
    ];
    const vaultOptions = (organizations === null || organizations === void 0 ? void 0 : organizations.length)
        ? organizations.reduce((options, { id, name, productTierType }) => {
            const icon = getVaultIconByProductTier(productTierType);
            return [
                ...options,
                {
                    icon,
                    text: name,
                    value: id,
                },
            ];
        }, initialVaultOptions)
        : initialVaultOptions;
    const folderOptions = (folders === null || folders === void 0 ? void 0 : folders.length)
        ? folders.reduce((options, { id, name }) => [
            ...options,
            {
                icon: Folder,
                text: name,
                value: !id ? defaultNoneSelectValue : id,
                default: !id,
            },
        ], [])
        : [];
    const collectionOptions = (collections === null || collections === void 0 ? void 0 : collections.length)
        ? collections.reduce((options, { id, name }) => [
            ...options,
            {
                icon: CollectionShared,
                text: name,
                value: id === null ? defaultNoneSelectValue : id,
                default: id === null,
            },
        ], [])
        : [];
    if (vaultOptions.length === 1) {
        selected_vault_selectedVault === null || selected_vault_selectedVault === void 0 ? void 0 : selected_vault_selectedVault.set(vaultOptions[0].value);
        // If the individual vault is disabled by a vault policy,
        // a collection selection is required
        if (!personalVaultIsAllowed &&
            (collections === null || collections === void 0 ? void 0 : collections.length) &&
            selectedCollection.get() === defaultNoneSelectValue) {
            selectedCollection === null || selectedCollection === void 0 ? void 0 : selectedCollection.set(collections[0].id);
        }
    }
    return lit_html_b `
    ${ButtonRow({
        theme,
        primaryButton,
        selectButtons: [
            ...(vaultOptions.length > 1
                ? [
                    {
                        id: "organization",
                        label: i18n.vault,
                        options: vaultOptions,
                        selectedSignal: selected_vault_selectedVault,
                    },
                ]
                : []),
            ...(folderOptions.length > 1 && !collectionOptions.length
                ? [
                    {
                        id: "folder",
                        label: i18n.folder,
                        options: folderOptions,
                        selectedSignal: selected_folder_selectedFolder,
                    },
                ]
                : []),
            ...(collectionOptions.length > 1
                ? [
                    {
                        id: "collection",
                        label: i18n.collection,
                        options: collectionOptions,
                        selectedSignal: selectedCollection,
                    },
                ]
                : []),
        ],
    })}
  `;
}

;// ./src/autofill/content/components/notification/footer.ts





function NotificationFooter({ collections, folders, i18n, isLoading, notificationType, organizations, personalVaultIsAllowed, theme, handleSaveAction, }) {
    const isChangeNotification = notificationType === NotificationTypes.Change;
    const isUnlockNotification = notificationType === NotificationTypes.Unlock;
    let primaryButtonText = i18n.saveAction;
    if (isUnlockNotification) {
        primaryButtonText = i18n.notificationUnlock;
    }
    return lit_html_b `
    <div class=${notificationFooterStyles({ isChangeNotification })}>
      ${!isChangeNotification
        ? NotificationButtonRow({
            collections,
            folders,
            organizations,
            i18n,
            primaryButton: {
                handlePrimaryButtonClick: handleSaveAction,
                isLoading,
                text: primaryButtonText,
            },
            personalVaultIsAllowed,
            theme,
        })
        : A}
    </div>
  `;
}
const notificationFooterStyles = ({ isChangeNotification, }) => css `
  display: flex;
  padding: ${spacing[2]} ${spacing[4]} ${isChangeNotification ? spacing[1] : spacing[4]}
    ${spacing[4]};

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }
`;

;// ./src/autofill/content/components/notification/container.ts








function NotificationContainer({ handleCloseNotification, handleEditOrUpdateAction, handleSaveAction, ciphers, collections, folders, headerMessage, i18n, isLoading, organizations, personalVaultIsAllowed = true, notificationTestId, theme = ThemeTypes.Light, type, }) {
    const showBody = type !== NotificationTypes.Unlock;
    return lit_html_b `
    <div data-testid="${notificationTestId}" class=${container_notificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        i18n,
        message: headerMessage,
        theme,
    })}
      ${showBody
        ? NotificationBody({
            handleEditOrUpdateAction,
            ciphers,
            notificationType: type,
            theme,
            i18n,
        })
        : A}
      ${NotificationFooter({
        handleSaveAction,
        collections,
        folders,
        i18n,
        isLoading,
        notificationType: type,
        organizations,
        personalVaultIsAllowed,
        theme,
    })}
    </div>
  `;
}
const container_notificationContainerStyles = (theme) => css `
  position: absolute;
  right: 20px;
  border: 1px solid ${themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${themes[theme].background.alt};
  width: 400px;

  [class*="${componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
  }

  [class*="${notification_body_componentClassPrefix}-"] {
    margin: ${spacing["3"]} 0 0 ${spacing["3"]};
    padding-right: ${spacing["3"]};
  }
`;

;// ./src/autofill/notification/utils.ts

/**
 * Narrows `value.type` and `value.params` to the type required for an at-risk
 * password notification while preserving the caller's concrete type.
 *
 * This is a type guard, not a validator. It checks that fields have the correct
 * types but does not validate their values.
 *
 * @returns `true` when `value.type` is `NotificationTypes.AtRiskPassword` and
 * `value.params` is an object of type `AtRiskPasswordNotificationParams`.
 * Returns `false` for any other shape.
 */
function isAtRiskPasswordNotification(value) {
    if (value.type !== NotificationTypes.AtRiskPassword) {
        return false;
    }
    const { params } = value;
    if (params == null || typeof params !== "object") {
        return false;
    }
    const p = params;
    return (typeof p["organizationName"] === "string" && typeof p["hasPasswordChangeUri"] === "boolean");
}

;// ./src/autofill/notification/bar.ts
var bar_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










let notificationBarIframeInitData = {};
let windowMessageOrigin;
const urlParams = new URLSearchParams(globalThis.location.search);
const trustedParentOrigin = urlParams.get("parentOrigin");
if (trustedParentOrigin) {
    windowMessageOrigin = trustedParentOrigin;
}
const notificationBarWindowMessageHandlers = {
    initNotificationBar: ({ message }) => initNotificationBar(message),
    saveCipherAttemptCompleted: ({ message }) => handleSaveCipherConfirmation(message),
};
globalThis.addEventListener("load", load);
function load() {
    setupWindowMessageListener();
    postMessageToParent({ command: "initNotificationBar" });
}
function getI18n() {
    return {
        appName: chrome.i18n.getMessage("appName"),
        atRiskPassword: chrome.i18n.getMessage("atRiskPassword"),
        changePassword: chrome.i18n.getMessage("changePassword"),
        close: chrome.i18n.getMessage("close"),
        collection: chrome.i18n.getMessage("collection"),
        folder: chrome.i18n.getMessage("folder"),
        loginSaveConfirmation: chrome.i18n.getMessage("loginSaveConfirmation"),
        loginSaveSuccess: chrome.i18n.getMessage("loginSaveSuccess"),
        loginUpdatedConfirmation: chrome.i18n.getMessage("loginUpdatedConfirmation"),
        loginUpdateSuccess: chrome.i18n.getMessage("loginUpdateSuccess"),
        loginUpdateTaskSuccess: chrome.i18n.getMessage("loginUpdateTaskSuccess"),
        loginUpdateTaskSuccessAdditional: chrome.i18n.getMessage("loginUpdateTaskSuccessAdditional"),
        myVault: chrome.i18n.getMessage("myVault"),
        never: chrome.i18n.getMessage("never"),
        newItem: chrome.i18n.getMessage("newItem"),
        nextSecurityTaskAction: chrome.i18n.getMessage("nextSecurityTaskAction"),
        notificationAddDesc: chrome.i18n.getMessage("notificationAddDesc"),
        notificationAddSave: chrome.i18n.getMessage("notificationAddSave"),
        notificationChangeDesc: chrome.i18n.getMessage("notificationChangeDesc"),
        notificationEdit: chrome.i18n.getMessage("edit"),
        notificationEditTooltip: chrome.i18n.getMessage("notificationEditTooltip"),
        notificationLoginSaveConfirmation: chrome.i18n.getMessage("notificationLoginSaveConfirmation"),
        notificationLoginUpdatedConfirmation: chrome.i18n.getMessage("notificationLoginUpdatedConfirmation"),
        notificationUnlock: chrome.i18n.getMessage("notificationUnlock"),
        notificationUnlockDesc: chrome.i18n.getMessage("notificationUnlockDesc"),
        notificationUpdate: chrome.i18n.getMessage("notificationChangeSave"),
        notificationViewAria: chrome.i18n.getMessage("notificationViewAria"),
        saveAction: chrome.i18n.getMessage("notificationAddSave"),
        saveAsNewLoginAction: chrome.i18n.getMessage("saveAsNewLoginAction"),
        saveFailure: chrome.i18n.getMessage("saveFailure"),
        saveFailureDetails: chrome.i18n.getMessage("saveFailureDetails"),
        saveLogin: chrome.i18n.getMessage("saveLogin"),
        typeLogin: chrome.i18n.getMessage("typeLogin"),
        unlockToSave: chrome.i18n.getMessage("unlockToSave"),
        updateLogin: chrome.i18n.getMessage("updateLogin"),
        updateLoginAction: chrome.i18n.getMessage("updateLoginAction"),
        vault: chrome.i18n.getMessage("vault"),
        view: chrome.i18n.getMessage("view"),
    };
}
/**
 * Returns the localized header message for the notification bar based on the notification type.
 *
 * @returns The localized header message string, or undefined if the type is not recognized.
 */
function getNotificationHeaderMessage(i18n, type) {
    return type
        ? {
            [NotificationTypes.Add]: i18n.saveLogin,
            [NotificationTypes.Change]: i18n.updateLogin,
            [NotificationTypes.Unlock]: i18n.unlockToSave,
            [NotificationTypes.AtRiskPassword]: i18n.atRiskPassword,
        }[type]
        : undefined;
}
/**
 * Returns the localized header message for the confirmation message bar based on the notification type.
 *
 * @returns The localized header message string, or undefined if the type is not recognized.
 */
function getConfirmationHeaderMessage(i18n, type, error) {
    if (error) {
        return i18n.saveFailure;
    }
    return type
        ? {
            [NotificationTypes.Add]: i18n.loginSaveSuccess,
            [NotificationTypes.Change]: i18n.loginUpdateSuccess,
            [NotificationTypes.Unlock]: "",
            [NotificationTypes.AtRiskPassword]: "",
        }[type]
        : undefined;
}
/**
 * Appends the header message to the document title.
 * If the header message is already present, it avoids duplication.
 */
function appendHeaderMessageToTitle(headerMessage) {
    if (!headerMessage) {
        return;
    }
    const baseTitle = document.title.split(" - ")[0];
    document.title = `${baseTitle} - ${headerMessage}`;
}
/**
 * Determines the effective notification type to use based on initialization data.
 *
 * If the vault is locked, the notification type will be set to `Unlock`.
 * Otherwise, the type provided in the init data is returned.
 *
 * @returns The resolved `NotificationType` to be used for rendering logic.
 */
function resolveNotificationType(initData) {
    if (initData.isVaultLocked) {
        return NotificationTypes.Unlock;
    }
    return initData.type;
}
/**
 * Returns the appropriate test ID based on the resolved notification type.
 *
 * @param type - The resolved NotificationType.
 * @param isConfirmation - Optional flag for confirmation vs. notification container.
 */
function getNotificationTestId(notificationType, isConfirmation = false) {
    if (isConfirmation) {
        return "confirmation-notification-bar";
    }
    return {
        [NotificationTypes.Unlock]: "unlock-notification-bar",
        [NotificationTypes.Add]: "save-notification-bar",
        [NotificationTypes.Change]: "update-notification-bar",
        [NotificationTypes.AtRiskPassword]: "at-risk-notification-bar",
    }[notificationType];
}
function initNotificationBar(message) {
    return bar_awaiter(this, void 0, void 0, function* () {
        const { initData } = message;
        if (!initData) {
            return;
        }
        notificationBarIframeInitData = initData;
        if (initData.isConfirmation) {
            return handleSaveCipherConfirmation({
                command: "saveCipherAttemptCompleted",
                data: initData.confirmationData,
            });
        }
        const { isVaultLocked, removeIndividualVault: personalVaultDisallowed, theme, } = notificationBarIframeInitData;
        const i18n = getI18n();
        const resolvedTheme = getResolvedTheme(theme !== null && theme !== void 0 ? theme : ThemeTypes.Light);
        const notificationType = resolveNotificationType(notificationBarIframeInitData);
        const headerMessage = getNotificationHeaderMessage(i18n, notificationType);
        const notificationTestId = getNotificationTestId(notificationType);
        appendHeaderMessageToTitle(headerMessage);
        if (isVaultLocked) {
            const notificationConfig = Object.assign(Object.assign({}, notificationBarIframeInitData), { headerMessage, type: notificationType, notificationTestId, theme: resolvedTheme, personalVaultIsAllowed: !personalVaultDisallowed, handleCloseNotification,
                handleEditOrUpdateAction,
                i18n });
            const handleSaveAction = () => {
                // cipher ID is null while vault is locked.
                sendSaveCipherMessage(null, true);
                D(NotificationContainer(Object.assign(Object.assign({}, notificationConfig), { handleSaveAction: () => { }, isLoading: true })), document.body);
            };
            const UnlockNotification = NotificationContainer(Object.assign(Object.assign({}, notificationConfig), { handleSaveAction }));
            return D(UnlockNotification, document.body);
        }
        // Handle AtRiskPasswordNotification render
        if (isAtRiskPasswordNotification(notificationBarIframeInitData)) {
            return D(AtRiskNotification(Object.assign(Object.assign({}, notificationBarIframeInitData), { type: notificationBarIframeInitData.type, theme: resolvedTheme, i18n,
                notificationTestId, params: notificationBarIframeInitData.params, handleCloseNotification, handleChangePasswordClick: notificationBarIframeInitData.params.hasPasswordChangeUri
                    ? handleChangePasswordClick
                    : undefined })), document.body);
        }
        // Default scenario: add or update password
        const orgId = selected_vault_selectedVault.get();
        yield Promise.all([
            new Promise((resolve) => sendPlatformMessage({ command: "bgGetOrgData" }, resolve)),
            new Promise((resolve) => sendPlatformMessage({ command: "bgGetFolderData" }, resolve)),
            new Promise((resolve) => sendPlatformMessage({ command: "bgGetDecryptedCiphers" }, resolve)),
            new Promise((resolve) => sendPlatformMessage({ command: "bgGetCollectionData", orgId }, resolve)),
        ]).then(([organizations, folders, ciphers, collections]) => {
            notificationBarIframeInitData = Object.assign(Object.assign({}, notificationBarIframeInitData), { organizations,
                folders,
                ciphers,
                collections });
            // @TODO use context to avoid prop drilling
            return D(NotificationContainer(Object.assign(Object.assign({}, notificationBarIframeInitData), { headerMessage, type: notificationType, theme: resolvedTheme, notificationTestId, personalVaultIsAllowed: !personalVaultDisallowed, handleCloseNotification,
                handleSaveAction,
                handleEditOrUpdateAction,
                i18n })), document.body);
        });
        function handleEditOrUpdateAction(e) {
            e.preventDefault();
            sendSaveCipherMessage(selected_cipher_selectedCipher.get(), notificationType === NotificationTypes.Add);
        }
    });
}
function handleChangePasswordClick(e) {
    // Guard against any default browser action (e.g., form submission) so only
    // the background service worker message triggers navigation.
    e.preventDefault();
    sendPlatformMessage({ command: "bgOpenChangePasswordUrl" });
}
function handleCloseNotification(e) {
    e.preventDefault();
    sendPlatformMessage({
        command: "bgCloseNotificationBar",
        // FIXME (PM-33879): This value should be replaced with the resolved
        // user preference and/or removed entirely
        fadeOutNotification: true,
    });
}
function handleSaveAction(e) {
    const selectedCipher = selected_cipher_selectedCipher.get();
    const selectedVault = selected_vault_selectedVault.get();
    const selectedFolder = selected_folder_selectedFolder.get();
    if (selectedVault.length > 1) {
        openAddEditVaultItemPopout(e, Object.assign({ organizationId: selectedVault }, ((selectedFolder === null || selectedFolder === void 0 ? void 0 : selectedFolder.length) > 1 ? { folder: selectedFolder } : {})));
        handleCloseNotification(e);
        return;
    }
    e.preventDefault();
    sendSaveCipherMessage(selectedCipher, removeIndividualVault(), selectedFolder);
    if (removeIndividualVault()) {
        return;
    }
}
function sendSaveCipherMessage(cipherId, edit, folder) {
    sendPlatformMessage({
        command: "bgSaveCipher",
        cipherId,
        folder,
        edit,
    });
}
function openAddEditVaultItemPopout(e, options) {
    e.preventDefault();
    sendPlatformMessage(Object.assign({ command: "bgOpenAddEditVaultItemPopout" }, options));
}
function openViewVaultItemPopout(cipherId) {
    sendPlatformMessage({
        command: "bgOpenViewVaultItemPopout",
        cipherId,
    });
}
function handleSaveCipherConfirmation(message) {
    const { theme, type } = notificationBarIframeInitData;
    const { error, data } = message;
    const { cipherId, task, itemName } = data || {};
    const i18n = getI18n();
    const resolvedTheme = getResolvedTheme(theme !== null && theme !== void 0 ? theme : ThemeTypes.Light);
    const resolvedType = resolveNotificationType(notificationBarIframeInitData);
    const headerMessage = getConfirmationHeaderMessage(i18n, resolvedType, error);
    const notificationTestId = getNotificationTestId(resolvedType, true);
    appendHeaderMessageToTitle(headerMessage);
    globalThis.setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar" }), 5000);
    return D(NotificationConfirmationContainer(Object.assign(Object.assign({}, notificationBarIframeInitData), { error,
        handleCloseNotification, handleOpenTasks: () => sendPlatformMessage({ command: "bgOpenAtRiskPasswords" }), handleOpenVault: (e) => cipherId ? openViewVaultItemPopout(cipherId) : openAddEditVaultItemPopout(e, {}), headerMessage,
        i18n, itemName: itemName !== null && itemName !== void 0 ? itemName : i18n.typeLogin, notificationTestId,
        task, theme: resolvedTheme, type: type })), document.body);
}
function sendPlatformMessage(msg, responseCallback) {
    chrome.runtime.sendMessage(msg, (response) => {
        if (responseCallback) {
            responseCallback(response);
        }
    });
}
function removeIndividualVault() {
    return Boolean(notificationBarIframeInitData === null || notificationBarIframeInitData === void 0 ? void 0 : notificationBarIframeInitData.removeIndividualVault);
}
function setupWindowMessageListener() {
    globalThis.addEventListener("message", handleWindowMessage);
}
function handleWindowMessage(event) {
    if ((event === null || event === void 0 ? void 0 : event.source) !== globalThis.parent) {
        return;
    }
    const message = event.data;
    if (!(message === null || message === void 0 ? void 0 : message.command)) {
        return;
    }
    if (!windowMessageOrigin || event.origin !== windowMessageOrigin) {
        return;
    }
    if (message.command === "initNotificationBar" &&
        message.parentOrigin &&
        message.parentOrigin !== event.origin) {
        return;
    }
    const handler = notificationBarWindowMessageHandlers[message.command];
    if (!handler) {
        return;
    }
    handler({ message });
}
function getTheme(globalThis, theme) {
    if (theme === ThemeTypes.System) {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? ThemeTypes.Dark
            : ThemeTypes.Light;
    }
    return theme;
}
function getResolvedTheme(theme) {
    const themeType = getTheme(globalThis, theme);
    // There are other possible passed theme values, but for now, resolve to dark or light
    const resolvedTheme = themeType === ThemeTypes.Dark ? ThemeTypes.Dark : ThemeTypes.Light;
    return resolvedTheme;
}
function postMessageToParent(message) {
    if (!windowMessageOrigin) {
        return;
    }
    globalThis.parent.postMessage(message, windowMessageOrigin);
}

;// ./src/autofill/notification/bootstrap-bar.ts
// eslint-disable-next-line @typescript-eslint/no-require-imports
__webpack_require__(6121);


}();
/******/ })()
;
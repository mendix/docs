(function () {
	var url = 'https://sprintr.home.mendix.com/';
	if (typeof jQuery != "undefined") {
		var oldJQ = jQuery;
	}
/*
	The MIT License

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
 */

/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete
t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean
(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$/,bB=/\r?\n/g,bC=/#.*$/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bG=/^(?:GET|HEAD)$/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$/i,ct=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.16",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({propAttr:c.fn.prop||c.fn.attr,_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=
this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,
"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":
"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,
outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,
"tabindex"),d=isNaN(b);return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&
a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&
c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *  jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mouseup(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"&&a.target.nodeName?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *  jquery.ui.core.js
 *  jquery.ui.mouse.js
 *  jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;if(b.iframeFix)d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;
this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.16"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;
/**
	@license html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
 */
(function(window, document, undefined){

/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
 */
"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;


function h2clog(a) {
		if (_html2canvas.logging && window.console && window.console.log) {
				window.console.log(a);
		}
}

_html2canvas.Util = {};

_html2canvas.Util.backgroundImage = function (src) {

		if (/data:image\/.*;base64,/i.test( src ) || /^(-webkit|-moz|linear-gradient|-o-)/.test( src )) {
				return src;
		}

		if (src.toLowerCase().substr( 0, 5 ) === 'url("') {
				src = src.substr( 5 );
				src = src.substr( 0, src.length - 2 );
		} else {
				src = src.substr( 4 );
				src = src.substr( 0, src.length - 1 );
		}

		return src;
};

_html2canvas.Util.Bounds = function getBounds (el) {
		var clientRect,
		bounds = {};

		if (el.getBoundingClientRect){
				clientRect = el.getBoundingClientRect();


				// TODO add scroll position to bounds, so no scrolling of window necessary
				bounds.top = clientRect.top;
				bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
				bounds.left = clientRect.left;

				// older IE doesn't have width/height, but top/bottom instead
				bounds.width = clientRect.width || (clientRect.right - clientRect.left);
				bounds.height = clientRect.height || (clientRect.bottom - clientRect.top);

				return bounds;

		}
};

_html2canvas.Util.getCSS = function (el, attribute) {
		// return $(el).css(attribute);

		var val;

		function toPX( attribute, val ) {
				var rsLeft = el.runtimeStyle && el.runtimeStyle[ attribute ],
				left,
				style = el.style;

				// Check if we are not dealing with pixels, (Opera has issues with this)
				// Ported from jQuery css.js
				// From the awesome hack by Dean Edwards
				// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

				// If we're not dealing with a regular pixel number
				// but a number that has a weird ending, we need to convert it to pixels

				if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( val ) && /^-?\d/.test( val ) ) {

						// Remember the original values
						left = style.left;

						// Put in the new values to get a computed value out
						if ( rsLeft ) {
								el.runtimeStyle.left = el.currentStyle.left;
						}
						style.left = attribute === "fontSize" ? "1em" : (val || 0);
						val = style.pixelLeft + "px";

						// Revert the changed values
						style.left = left;
						if ( rsLeft ) {
								el.runtimeStyle.left = rsLeft;
						}

				}

				if (!/^(thin|medium|thick)$/i.test( val )) {
						return Math.round(parseFloat( val )) + "px";
				}

				return val;

		}


		if ( window.getComputedStyle ) {
				if ( previousElement !== el ) {
						computedCSS = document.defaultView.getComputedStyle(el, null);
				}
				val = computedCSS[ attribute ];

				if ( attribute === "backgroundPosition" ) {

						val = (val.split(",")[0] || "0 0").split(" ");

						val[ 0 ] = ( val[0].indexOf( "%" ) === -1 ) ? toPX(  attribute + "X", val[ 0 ] ) : val[ 0 ];
						val[ 1 ] = ( val[1] === undefined ) ? val[0] : val[1]; // IE 9 doesn't return double digit always
						val[ 1 ] = ( val[1].indexOf( "%" ) === -1 ) ? toPX(  attribute + "Y", val[ 1 ] ) : val[ 1 ];
				}

		} else if ( el.currentStyle ) {
				// IE 9>
				if (attribute === "backgroundPosition") {
						// Older IE uses -x and -y
						val = [ toPX(  attribute + "X", el.currentStyle[ attribute + "X" ]  ), toPX(  attribute + "Y", el.currentStyle[ attribute + "Y" ]  ) ];
				} else {

						val = toPX(  attribute, el.currentStyle[ attribute ]  );

						if (/^(border)/i.test( attribute ) && /^(medium|thin|thick)$/i.test( val )) {
								switch (val) {
										case "thin":
												val = "1px";
												break;
										case "medium":
												val = "0px"; // this is wrong, it should be 3px but IE uses medium for no border as well.. TODO find a work around
												break;
										case "thick":
												val = "5px";
												break;
								}
						}
				}



		}




		return val;



//return $(el).css(attribute);


};


_html2canvas.Util.BackgroundPosition = function ( el, bounds, image ) {
		// TODO add support for multi image backgrounds

		var bgposition =  _html2canvas.Util.getCSS( el, "backgroundPosition" ) ,
		topPos,
		left,
		percentage,
		val;

		if (bgposition.length === 1){
				val = bgposition;

				bgposition = [];

				bgposition[0] = val;
				bgposition[1] = val;
		}



		if (bgposition[0].toString().indexOf("%") !== -1){
				percentage = (parseFloat(bgposition[0])/100);
				left =  ((bounds.width * percentage)-(image.width*percentage));

		}else{
				left = parseInt(bgposition[0],10);
		}

		if (bgposition[1].toString().indexOf("%") !== -1){

				percentage = (parseFloat(bgposition[1])/100);
				topPos =  ((bounds.height * percentage)-(image.height*percentage));
		}else{
				topPos = parseInt(bgposition[1],10);
		}




		return {
				top: topPos,
				left: left
		};

};

_html2canvas.Util.Extend = function (options, defaults) {
		for (var key in options) {
				if (options.hasOwnProperty(key)) {
						defaults[key] = options[key];
				}
		}
		return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {


		var children;
		try {

				children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ?
				elem.contentDocument || elem.contentWindow.document : (function( array ){
						var ret = [];

						if ( array !== null ) {

								(function( first, second ) {
										var i = first.length,
										j = 0;

										if ( typeof second.length === "number" ) {
												for ( var l = second.length; j < l; j++ ) {
														first[ i++ ] = second[ j ];
												}

										} else {
												while ( second[j] !== undefined ) {
														first[ i++ ] = second[ j++ ];
												}
										}

										first.length = i;

										return first;
								})( ret, array );

						}

						return ret;
				})( elem.childNodes );

		} catch (ex) {
				h2clog("html2canvas.Util.Children failed with exception: " + ex.message);
				children = [];
		}
		return children;
};

/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Contributor(s):
			Niklas von Hertzen <http://www.twitter.com/niklasvh>
			André Fiedler      <http://www.twitter.com/sonnenkiste>

	Released under MIT License
 */

(function(){

_html2canvas.Generate = {};

var reGradients = [
		/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
		/^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
		/^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)-]+)\)$/,
		/^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
		/^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z-]+)([\w\d\.\s,%\(\)]+)\)$/,
		/^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z-]*)([\w\d\.\s,%\(\)]+)\)$/,
		/^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z-]+)([\w\d\.\s,%\(\)]+)\)$/
];

/*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
_html2canvas.Generate.parseGradient = function(css, bounds) {
		var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3;

		for(i = 0; i < len; i+=1){
				m1 = css.match(reGradients[i]);
				if(m1) break;
		}

		if(m1) {
				switch(m1[1]) {
						case '-webkit-linear-gradient':
						case '-o-linear-gradient':

								gradient = {
										type: 'linear',
										x0: null,
										y0: null,
										x1: null,
										y1: null,
										colorStops: []
								};

								// get coordinates
								m2 = m1[2].match(/\w+/g);
								if(m2){
										m2Len = m2.length;
										for(i = 0; i < m2Len; i+=1){
												switch(m2[i]) {
														case 'top':
																gradient.y0 = 0;
																gradient.y1 = bounds.height;
																break;

														case 'right':
																gradient.x0 = bounds.width;
																gradient.x1 = 0;
																break;

														case 'bottom':
																gradient.y0 = bounds.height;
																gradient.y1 = 0;
																break;

														case 'left':
																gradient.x0 = 0;
																gradient.x1 = bounds.width;
																break;
												}
										}
								}
								if(gradient.x0 === null && gradient.x1 === null){ // center
										gradient.x0 = gradient.x1 = bounds.width / 2;
								}
								if(gradient.y0 === null && gradient.y1 === null){ // center
										gradient.y0 = gradient.y1 = bounds.height / 2;
								}

								// get colors and stops
								m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
								if(m2){
										m2Len = m2.length;
										step = 1 / Math.max(m2Len - 1, 1);
										for(i = 0; i < m2Len; i+=1){
												m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
												if(m3[2]){
														stop = parseFloat(m3[2]);
														if(m3[3] === '%'){
																stop /= 100;
														} else { // px - stupid opera
																stop /= bounds.width;
														}
												} else {
														stop = i * step;
												}
												gradient.colorStops.push({
														color: m3[1],
														stop: stop
												});
										}
								}
								break;

						case '-webkit-gradient':

								gradient = {
										type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
										x0: 0,
										y0: 0,
										x1: 0,
										y1: 0,
										colorStops: []
								};

								// get coordinates
								m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
								if(m2){
										gradient.x0 = (m2[1] * bounds.width) / 100;
										gradient.y0 = (m2[2] * bounds.height) / 100;
										gradient.x1 = (m2[3] * bounds.width) / 100;
										gradient.y1 = (m2[4] * bounds.height) / 100;
								}

								// get colors and stops
								m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
								if(m2){
										m2Len = m2.length;
										for(i = 0; i < m2Len; i+=1){
												m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
												stop = parseFloat(m3[2]);
												if(m3[1] === 'from') stop = 0.0;
												if(m3[1] === 'to') stop = 1.0;
												gradient.colorStops.push({
														color: m3[3],
														stop: stop
												});
										}
								}
								break;

						case '-moz-linear-gradient':

								gradient = {
										type: 'linear',
										x0: 0,
										y0: 0,
										x1: 0,
										y1: 0,
										colorStops: []
								};

								// get coordinates
								m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

								// m2[1] == 0%   -> left
								// m2[1] == 50%  -> center
								// m2[1] == 100% -> right

								// m2[2] == 0%   -> top
								// m2[2] == 50%  -> center
								// m2[2] == 100% -> bottom

								if(m2){
										gradient.x0 = (m2[1] * bounds.width) / 100;
										gradient.y0 = (m2[2] * bounds.height) / 100;
										gradient.x1 = bounds.width - gradient.x0;
										gradient.y1 = bounds.height - gradient.y0;
								}

								// get colors and stops
								m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
								if(m2){
										m2Len = m2.length;
										step = 1 / Math.max(m2Len - 1, 1);
										for(i = 0; i < m2Len; i+=1){
												m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
												if(m3[2]){
														stop = parseFloat(m3[2]);
														if(m3[3]){ // percentage
																stop /= 100;
														}
												} else {
														stop = i * step;
												}
												gradient.colorStops.push({
														color: m3[1],
														stop: stop
												});
										}
								}
								break;

						case '-webkit-radial-gradient':
						case '-moz-radial-gradient':
						case '-o-radial-gradient':

								gradient = {
										type: 'circle',
										x0: 0,
										y0: 0,
										x1: bounds.width,
										y1: bounds.height,
										cx: 0,
										cy: 0,
										rx: 0,
										ry: 0,
										colorStops: []
								};

								// center
								m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
								if(m2){
										gradient.cx = (m2[1] * bounds.width) / 100;
										gradient.cy = (m2[2] * bounds.height) / 100;
								}

								// size
								m2 = m1[3].match(/\w+/);
								m3 = m1[4].match(/[a-z-]*/);
								if(m2 && m3){
										switch(m3[0]){
												case 'farthest-corner':
												case 'cover': // is equivalent to farthest-corner
												case '': // mozilla removes "cover" from definition :(
														var tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
														var tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
														var br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
														var bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
														gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
														break;
												case 'closest-corner':
														var tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
														var tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
														var br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
														var bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
														gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
														break;
												case 'farthest-side':
														if(m2[0] === 'circle'){
																gradient.rx = gradient.ry = Math.max(
																		gradient.cx,
																		gradient.cy,
																		gradient.x1 - gradient.cx,
																		gradient.y1 - gradient.cy
																);
														} else { // ellipse

																gradient.type = m2[0];

																gradient.rx = Math.max(
																		gradient.cx,
																		gradient.x1 - gradient.cx
																);
																gradient.ry = Math.max(
																		gradient.cy,
																		gradient.y1 - gradient.cy
																);
														}
														break;
												case 'closest-side':
												case 'contain': // is equivalent to closest-side
														if(m2[0] === 'circle'){
																gradient.rx = gradient.ry = Math.min(
																		gradient.cx,
																		gradient.cy,
																		gradient.x1 - gradient.cx,
																		gradient.y1 - gradient.cy
																);
														} else { // ellipse

																gradient.type = m2[0];

																gradient.rx = Math.min(
																		gradient.cx,
																		gradient.x1 - gradient.cx
																);
																gradient.ry = Math.min(
																		gradient.cy,
																		gradient.y1 - gradient.cy
																);
														}
														break;

												// TODO: add support for "30px 40px" sizes (webkit only)
										}
								}

								// color stops
								m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
								if(m2){
										m2Len = m2.length;
										step = 1 / Math.max(m2Len - 1, 1);
										for(i = 0; i < m2Len; i+=1){
												m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
												if(m3[2]){
														stop = parseFloat(m3[2]);
														if(m3[3] === '%'){
																stop /= 100;
														} else { // px - stupid opera
																stop /= bounds.width;
														}
												} else {
														stop = i * step;
												}
												gradient.colorStops.push({
														color: m3[1],
														stop: stop
												});
										}
								}
								break;
				}
		}

		return gradient;
};

_html2canvas.Generate.Gradient = function(src, bounds) {
		var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		gradient, grad, i, len, img;

		canvas.width = bounds.width;
		canvas.height = bounds.height;

		// TODO: add support for multi defined background gradients (like radial gradient example in background.html)
		gradient = _html2canvas.Generate.parseGradient(src, bounds);

		img = new Image();

		if(gradient){
				if(gradient.type === 'linear'){
						grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);

						for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
								try {
										grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
								}
								catch(e) {
										h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
								}
						}

						ctx.fillStyle = grad;
						ctx.fillRect(0, 0, bounds.width, bounds.height);

						img.src = canvas.toDataURL();
				} else if(gradient.type === 'circle'){

						grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);

						for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
								try {
										grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
								}
								catch(e) {
										h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
								}
						}

						ctx.fillStyle = grad;
						ctx.fillRect(0, 0, bounds.width, bounds.height);

						img.src = canvas.toDataURL();
				} else if(gradient.type === 'ellipse'){

						// draw circle
						var canvasRadial = document.createElement('canvas'),
								ctxRadial = canvasRadial.getContext('2d'),
								ri = Math.max(gradient.rx, gradient.ry),
								di = ri * 2, imgRadial;

						canvasRadial.width = canvasRadial.height = di;

						grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);

						for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
								try {
										grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
								}
								catch(e) {
										h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
								}
						}

						ctxRadial.fillStyle = grad;
						ctxRadial.fillRect(0, 0, di, di);

						ctx.fillStyle = gradient.colorStops[i - 1].color;
						ctx.fillRect(0, 0, canvas.width, canvas.height);

						imgRadial = new Image();
						imgRadial.onload = function() { // wait until the image is filled

								// transform circle to ellipse
								ctx.drawImage(imgRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);

								img.src = canvas.toDataURL();

						}
						imgRadial.src = canvasRadial.toDataURL();
				}
		}

		return img;
};

_html2canvas.Generate.ListAlpha = function(number) {
		var tmp = "",
		modulus;

		do {
				modulus = number % 26;
				tmp = String.fromCharCode((modulus) + 64) + tmp;
				number = number / 26;
		}while((number*26) > 26);

		return tmp;
};

_html2canvas.Generate.ListRoman = function(number) {
		var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
		decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
		roman = "",
		v,
		len = romanArray.length;

		if (number <= 0 || number >= 4000) {
				return number;
		}

		for (v=0; v < len; v+=1) {
				while (number >= decimal[v]) {
						number -= decimal[v];
						roman += romanArray[v];
				}
		}

		return roman;

};

})();
/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
*/

/*
 *  New function for traversing elements
 */

_html2canvas.Parse = function ( images, options ) {
		window.scroll(0,0);

		var support = {
				rangeBounds: false,
				svgRendering: options.svgRendering && (function( ){
						var img = new Image(),
						canvas = document.createElement("canvas"),
						ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
						if (ctx === false) {
								// browser doesn't support canvas, good luck supporting SVG on canvas
								return false;
						}
						canvas.width = canvas.height = 10;
						img.src = [
						"data:image/svg+xml,",
						"<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
						"<foreignObject width='10' height='10'>",
						"<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
						"sup",
						"</div>",
						"</foreignObject>",
						"</svg>"
						].join("");
						try {
								ctx.drawImage(img, 0, 0);
								canvas.toDataURL();
						} catch(e) {
								return false;
						}
						h2clog('html2canvas: Parse: SVG powered rendering available');
						return true;

				})()
		},
		element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
		needReorder = false,
		numDraws = 0,
		fontData = {},
		doc = element.ownerDocument,
		ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
		body = doc.body,
		r,
		testElement,
		rangeBounds,
		rangeHeight,
		stack,
		ctx,
		docDim,
		i,
		children,
		childrenLen;


		function docSize(){

				return {
						width: Math.max(
								Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
								Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
								Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
								),
						height: Math.max(
								Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
								Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
								Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
								)
				};

		}

		images = images || {};

		// Test whether we can use ranges to measure bounding boxes
		// Opera doesn't provide valid bounds.height/bottom even though it supports the method.


		if (doc.createRange) {
				r = doc.createRange();
				//this.support.rangeBounds = new Boolean(r.getBoundingClientRect);
				if (r.getBoundingClientRect){
						testElement = doc.createElement('boundtest');
						testElement.style.height = "123px";
						testElement.style.display = "block";
						body.appendChild(testElement);

						r.selectNode(testElement);
						rangeBounds = r.getBoundingClientRect();
						rangeHeight = rangeBounds.height;

						if (rangeHeight === 123) {
								support.rangeBounds = true;
						}
						body.removeChild(testElement);


				}

		}


		/*
		var rootStack = new this.storageContext($(document).width(),$(document).height());
		rootStack.opacity = this.getCSS(this.element,"opacity");
		var stack = this.newElement(this.element,rootStack);


		this.parseElement(this.element,stack);
		 */




		var getCSS = _html2canvas.Util.getCSS;
		function getCSSInt(element, attribute) {
				var val = parseInt(getCSS(element, attribute), 10);
				return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
		}

		// Drawing a rectangle
		function renderRect (ctx, x, y, w, h, bgcolor) {
				if (bgcolor !=="transparent"){
						ctx.setVariable("fillStyle", bgcolor);
						ctx.fillRect (x, y, w, h);
						numDraws+=1;
				}
		}


		function textTransform (text, transform) {
				switch(transform){
						case "lowercase":
								return text.toLowerCase();

						case "capitalize":
								return text.replace( /(^|\s|:|-|\(|\))([a-z])/g , function (m, p1, p2) {
										if (m.length > 0) {
												return p1 + p2.toUpperCase();
										}
								} );

						case "uppercase":
								return text.toUpperCase();

						default:
								return text;

				}

		}

		function trimText (text) {
				return text.replace(/^\s*/g, "").replace(/\s*$/g, "");
		}

		function fontMetrics (font, fontSize) {

				if (fontData[font + "-" + fontSize] !== undefined) {
						return fontData[font + "-" + fontSize];
				}


				var container = doc.createElement('div'),
				img = doc.createElement('img'),
				span = doc.createElement('span'),
				baseline,
				middle,
				metricsObj;


				container.style.visibility = "hidden";
				container.style.fontFamily = font;
				container.style.fontSize = fontSize;
				container.style.margin = 0;
				container.style.padding = 0;

				body.appendChild(container);



				// http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
				img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
				img.width = 1;
				img.height = 1;

				img.style.margin = 0;
				img.style.padding = 0;
				img.style.verticalAlign = "baseline";

				span.style.fontFamily = font;
				span.style.fontSize = fontSize;
				span.style.margin = 0;
				span.style.padding = 0;




				span.appendChild(doc.createTextNode('Hidden Text'));
				container.appendChild(span);
				container.appendChild(img);
				baseline = (img.offsetTop - span.offsetTop) + 1;

				container.removeChild(span);
				container.appendChild(doc.createTextNode('Hidden Text'));

				container.style.lineHeight = "normal";
				img.style.verticalAlign = "super";

				middle = (img.offsetTop-container.offsetTop) + 1;
				metricsObj = {
						baseline: baseline,
						lineWidth: 1,
						middle: middle
				};


				fontData[font + "-" + fontSize] = metricsObj;

				body.removeChild(container);

				return metricsObj;

		}


		function drawText(currentText, x, y, ctx){
				if (trimText(currentText).length>0) {
						ctx.fillText(currentText,x,y);
						numDraws+=1;
				}
		}


		function renderText(el, textNode, stack) {
				var ctx = stack.ctx,
				family = getCSS(el, "fontFamily"),
				size = getCSS(el, "fontSize"),
				color = getCSS(el, "color"),
				text_decoration = getCSS(el, "textDecoration"),
				text_align = getCSS(el, "textAlign"),
				letter_spacing = getCSS(el, "letterSpacing"),
				bounds,
				text,
				metrics,
				renderList,
				listLen,
				bold = getCSS(el, "fontWeight"),
				font_style = getCSS(el, "fontStyle"),
				font_variant = getCSS(el, "fontVariant"),
				align = false,
				newTextNode,
				textValue,
				textOffset = 0,
				oldTextNode,
				c,
				range,
				parent,
				wrapElement,
				backupText;

				// apply text-transform:ation to the text



				textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
				text = trimText(textNode.nodeValue);

				if (text.length>0){

						if (text_decoration !== "none"){
								metrics = fontMetrics(family, size);
						}

						text_align = text_align.replace(["-webkit-auto"],["auto"]);

						if (options.letterRendering === false && /^(left|right|justify|auto)$/.test(text_align) && /^(normal|none)$/.test(letter_spacing)){
								// this.setContextVariable(ctx,"textAlign",text_align);
								renderList = textNode.nodeValue.split(/(\b| )/);

						}else{
								//  this.setContextVariable(ctx,"textAlign","left");
								renderList = textNode.nodeValue.split("");
						}

						switch(parseInt(bold, 10)){
								case 401:
										bold = "bold";
										break;
								case 400:
										bold = "normal";
										break;
						}

						ctx.setVariable("fillStyle", color);

						/*
							need to be defined in the order as defined in http://www.w3.org/TR/CSS21/fonts.html#font-shorthand
							to properly work in Firefox
						*/
						ctx.setVariable("font", font_style+ " " + font_variant  + " " + bold + " " + size + " " + family);

						if (align){
								ctx.setVariable("textAlign", "right");
						}else{
								ctx.setVariable("textAlign", "left");
						}


						/*
				if (stack.clip){
				ctx.rect (stack.clip.left, stack.clip.top, stack.clip.width, stack.clip.height);
				ctx.clip();
				}
						 */


						oldTextNode = textNode;


						for ( c=0, listLen = renderList.length; c < listLen; c+=1 ) {
								textValue = null;



								if (support.rangeBounds){
										// getBoundingClientRect is supported for ranges
										if (text_decoration !== "none" || trimText(renderList[c]).length !== 0) {
												textValue = renderList[c];
												if (doc.createRange){
														range = doc.createRange();

														range.setStart(textNode, textOffset);
														range.setEnd(textNode, textOffset + textValue.length);
												}else{
														// TODO add IE support
														range = body.createTextRange();
												}

												if (range.getBoundingClientRect()) {
														bounds = range.getBoundingClientRect();
												}else{
														bounds = {};
												}

										}
								}else{
										// it isn't supported, so let's wrap it inside an element instead and get the bounds there

										// IE 9 bug
										if (typeof oldTextNode.nodeValue !== "string" ){
												continue;
										}

										newTextNode = oldTextNode.splitText(renderList[c].length);

										parent = oldTextNode.parentNode;
										wrapElement = doc.createElement('wrapper');
										backupText = oldTextNode.cloneNode(true);

										wrapElement.appendChild(oldTextNode.cloneNode(true));
										parent.replaceChild(wrapElement, oldTextNode);

										bounds = _html2canvas.Util.Bounds(wrapElement);

										textValue = oldTextNode.nodeValue;

										oldTextNode = newTextNode;
										parent.replaceChild(backupText, wrapElement);


								}

								if (textValue !== null){
										drawText(textValue, bounds.left, bounds.bottom, ctx);
								}

								switch(text_decoration) {
										case "underline":
												// Draws a line at the baseline of the font
												// TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
												renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
												break;
										case "overline":
												renderRect(ctx, bounds.left, bounds.top, bounds.width, 1, color);
												break;
										case "line-through":
												// TODO try and find exact position for line-through
												renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
												break;

								}





								textOffset += renderList[c].length;

						}



				}

		}

		function listPosition (element, val) {
				var boundElement = doc.createElement( "boundelement" ),
				type,
				bounds;

				boundElement.style.display = "inline";
				//boundElement.style.width = "1px";
				//boundElement.style.height = "1px";

				type = element.style.listStyleType;
				element.style.listStyleType = "none";

				boundElement.appendChild( doc.createTextNode( val ) );


				element.insertBefore(boundElement, element.firstChild);


				bounds = _html2canvas.Util.Bounds( boundElement );
				element.removeChild( boundElement );
				element.style.listStyleType = type;
				return bounds;

		}



		function elementIndex( el ) {
				var i = -1,
				count = 1,
				childs = el.parentNode.childNodes;

				if ( el.parentNode ) {
						while( childs[ ++i ] !== el ) {
							 if ( childs[ i ].nodeType === 1 ) {
									 count++;
							 }
						}
						return count;
				} else {
						return -1;
				}

		}

		function renderListItem(element, stack, elBounds) {


				var position = getCSS(element, "listStylePosition"),
				x,
				y,
				type = getCSS(element, "listStyleType"),
				currentIndex,
				text,
				listBounds,
				bold = getCSS(element, "fontWeight");

				if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {

						currentIndex = elementIndex( element );

						switch(type){
								case "decimal":
										text = currentIndex;
										break;
								case "decimal-leading-zero":
										if (currentIndex.toString().length === 1){
												text = currentIndex = "0" + currentIndex.toString();
										}else{
												text = currentIndex.toString();
										}
										break;
								case "upper-roman":
										text = _html2canvas.Generate.ListRoman( currentIndex );
										break;
								case "lower-roman":
										text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
										break;
								case "lower-alpha":
										text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
										break;
								case "upper-alpha":
										text = _html2canvas.Generate.ListAlpha( currentIndex );
										break;
						}


						text += ". ";
						listBounds = listPosition(element, text);



						switch(bold){
								case 401:
										bold = "bold";
										break;
								case 400:
										bold = "normal";
										break;
						}




						ctx.setVariable( "fillStyle", getCSS(element, "color") );
						ctx.setVariable( "font", getCSS(element, "fontVariant") + " " + bold + " " + getCSS(element, "fontStyle") + " " + getCSS(element, "fontSize") + " " + getCSS(element, "fontFamily") );


						if ( position === "inside" ) {
								ctx.setVariable("textAlign", "left");
								//   this.setFont(stack.ctx, element, false);
								x = elBounds.left;

						}else{
								return;
						/*
								 TODO really need to figure out some more accurate way to try and find the position.
								 as defined in http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position, it does not even have a specified "correct" position, so each browser
								 may display it whatever way it feels like.
								 "The position of the list-item marker adjacent to floats is undefined in CSS 2.1. CSS 2.1 does not specify the precise location of the marker box or its position in the painting order"

								ctx.setVariable("textAlign", "right");
								//  this.setFont(stack.ctx, element, true);
								x = elBounds.left - 10;
								 */
						}

						y = listBounds.bottom;

						drawText(text, x, y, ctx);


				}


		}

		function loadImage (src){
				var img = images[src];
				if (img && img.succeeded === true) {
						return img.img;
				} else {
						return false;
				}
		}






		function clipBounds(src, dst){

				var x = Math.max(src.left, dst.left),
				y = Math.max(src.top, dst.top),
				x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
				y2 = Math.min((src.top + src.height), (dst.top + dst.height));

				return {
						left:x,
						top:y,
						width:x2-x,
						height:y2-y
				};

		}

		function setZ(zIndex, parentZ){
				// TODO fix static elements overlapping relative/absolute elements under same stack, if they are defined after them
				var newContext;
				if (!parentZ){
						newContext = h2czContext(0);
						return newContext;
				}

				if (zIndex !== "auto"){
						needReorder = true;
						newContext = h2czContext(zIndex);
						parentZ.children.push(newContext);
						return newContext;

				}

				return parentZ;

		}

		function renderBorders(el, ctx, bounds, clip){

				/*
				 *  TODO add support for different border-style's than solid
				 */

				var x = bounds.left,
				y = bounds.top,
				w = bounds.width,
				h = bounds.height,
				borderSide,
				borderData,
				bx,
				by,
				bw,
				bh,
				borderBounds,
				borders = (function(el){
						var borders = [],
						sides = ["Top","Right","Bottom","Left"],
						s;

						for (s = 0; s < 4; s+=1){
								borders.push({
										width: getCSSInt(el, 'border' + sides[s] + 'Width'),
										color: getCSS(el, 'border' + sides[s] + 'Color')
								});
						}

						return borders;

				}(el));


				for (borderSide = 0; borderSide < 4; borderSide+=1){
						borderData = borders[borderSide];

						if (borderData.width>0){
								bx = x;
								by = y;
								bw = w;
								bh = h - (borders[2].width);

								switch(borderSide){
										case 0:
												// top border
												bh = borders[0].width;
												break;
										case 1:
												// right border
												bx = x + w - (borders[1].width);
												bw = borders[1].width;
												break;
										case 2:
												// bottom border
												by = (by + h) - (borders[2].width);
												bh = borders[2].width;
												break;
										case 3:
												// left border
												bw = borders[3].width;
												break;
								}

								borderBounds = {
										left:bx,
										top:by,
										width: bw,
										height:bh
								};

								if (clip){
										borderBounds = clipBounds(borderBounds, clip);
								}


								if (borderBounds.width>0 && borderBounds.height>0){
										renderRect(ctx, bx, by, borderBounds.width, borderBounds.height, borderData.color);
								}


						}
				}

				return borders;

		}


		function renderFormValue (el, bounds, stack){

				var valueWrap = doc.createElement('valuewrap'),
				cssArr = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
				i,
				textValue,
				textNode,
				arrLen,
				style;

				for (i = 0, arrLen = cssArr.length; i < arrLen; i+=1){
						style = cssArr[i];

						try {
								valueWrap.style[style] = getCSS(el, style);
						} catch( e ) {
								// Older IE has issues with "border"
								h2clog("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
						}
				}


				valueWrap.style.borderColor = "black";
				valueWrap.style.borderStyle = "solid";
				valueWrap.style.display = "block";
				valueWrap.style.position = "absolute";
				if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
						valueWrap.style.lineHeight = getCSS(el, "height");
				}


				valueWrap.style.top = bounds.top + "px";
				valueWrap.style.left = bounds.left + "px";

				if (el.nodeName === "SELECT"){
						// TODO increase accuracy of text position
						textValue = el.options[el.selectedIndex].text;
				} else{
						textValue = el.value;
				}
				textNode = doc.createTextNode(textValue);

				valueWrap.appendChild(textNode);
				body.appendChild(valueWrap);


				renderText(el, textNode, stack);
				body.removeChild(valueWrap);



		}





		function renderImage (ctx, image, sx, sy, sw, sh, dx, dy, dw, dh) {
				ctx.drawImage(
						image,
						sx, //sx
						sy, //sy
						sw, //sw
						sh, //sh
						dx, //dx
						dy, // dy
						dw, //dw
						dh //dh
						);
				numDraws+=1;

		}


		function renderBackgroundRepeat (ctx, image, x, y, width, height, elx, ely){
				var sourceX = 0,
				sourceY=0;
				if (elx-x>0){
						sourceX = elx-x;
				}

				if (ely-y>0){
						sourceY = ely-y;
				}

				renderImage(
						ctx,
						image,
						sourceX, // source X
						sourceY, // source Y
						width-sourceX, // source Width
						height-sourceY, // source Height
						x+sourceX, // destination X
						y+sourceY, // destination Y
						width-sourceX, // destination width
						height-sourceY // destination height
						);
		}


		function renderBackgroundRepeatY (ctx, image, bgp, x, y, w, h){

				var height,
				width = Math.min(image.width,w),bgy;

				bgp.top = bgp.top-Math.ceil(bgp.top/image.height)*image.height;


				for(bgy=(y+bgp.top);bgy<h+y;){


						if ( Math.floor(bgy+image.height)>h+y){
								height = (h+y)-bgy;
						}else{
								height = image.height;
						}
						renderBackgroundRepeat(ctx,image,x+bgp.left,bgy,width,height,x,y);

						bgy = Math.floor(bgy+image.height);

				}
		}

		function renderBackgroundRepeatX(ctx, image, bgp, x, y, w, h){

				var height = Math.min(image.height,h),
				width,bgx;


				bgp.left = bgp.left-Math.ceil(bgp.left/image.width)*image.width;


				for (bgx=(x+bgp.left);bgx<w+x;) {

						if (Math.floor(bgx+image.width)>w+x){
								width = (w+x)-bgx;
						}else{
								width = image.width;
						}

						renderBackgroundRepeat(ctx,image,bgx,(y+bgp.top),width,height,x,y);

						bgx = Math.floor(bgx+image.width);


				}
		}

		function renderBackground(el,bounds,ctx){

				// TODO add support for multi background-images
				var background_image = getCSS(el, "backgroundImage"),
				background_repeat = getCSS(el, "backgroundRepeat").split(",")[0],
				image,
				bgp,
				bgy,
				bgw,
				bgsx,
				bgsy,
				bgdx,
				bgdy,
				bgh,
				h,
				height,
				add;

				//   if (typeof background_image !== "undefined" && /^(1|none)$/.test(background_image) === false && /^(-webkit|-moz|linear-gradient|-o-)/.test(background_image)===false){

				if ( !/data:image\/.*;base64,/i.test(background_image) && !/^(-webkit|-moz|linear-gradient|-o-)/.test(background_image) ) {
						background_image = background_image.split(",")[0];
				}

				if ( typeof background_image !== "undefined" && /^(1|none)$/.test( background_image ) === false ) {
						background_image = _html2canvas.Util.backgroundImage( background_image );
						image = loadImage( background_image );


						bgp = _html2canvas.Util.BackgroundPosition(el, bounds, image);

						// TODO add support for background-origin
						if ( image ){
								switch ( background_repeat ) {

										case "repeat-x":
												renderBackgroundRepeatX( ctx, image, bgp, bounds.left, bounds.top, bounds.width, bounds.height );
												break;

										case "repeat-y":
												renderBackgroundRepeatY( ctx, image, bgp, bounds.left, bounds.top, bounds.width, bounds.height );
												break;

										case "no-repeat":
												/*
										this.drawBackgroundRepeat(
												ctx,
												image,
												bgp.left+bounds.left, // sx
												bgp.top+bounds.top, // sy
												Math.min(bounds.width,image.width),
												Math.min(bounds.height,image.height),
												bounds.left,
												bounds.top
												);*/



												bgw = bounds.width - bgp.left;
												bgh = bounds.height - bgp.top;
												bgsx = bgp.left;
												bgsy = bgp.top;
												bgdx = bgp.left+bounds.left;
												bgdy = bgp.top+bounds.top;

												//
												//     bgw = Math.min(bgw,image.width);
												//  bgh = Math.min(bgh,image.height);

												if (bgsx<0){
														bgsx = Math.abs(bgsx);
														bgdx += bgsx;
														bgw = Math.min(bounds.width,image.width-bgsx);
												}else{
														bgw = Math.min(bgw,image.width);
														bgsx = 0;
												}

												if (bgsy<0){
														bgsy = Math.abs(bgsy);
														bgdy += bgsy;
														// bgh = bgh-bgsy;
														bgh = Math.min(bounds.height,image.height-bgsy);
												}else{
														bgh = Math.min(bgh,image.height);
														bgsy = 0;
												}


												if (bgh>0 && bgw > 0){
														renderImage(
																ctx,
																image,
																bgsx, // source X : 0
																bgsy, // source Y : 1695
																bgw, // source Width : 18
																bgh, // source Height : 1677
																bgdx, // destination X :906
																bgdy, // destination Y : 1020
																bgw, // destination width : 18
																bgh // destination height : 1677
																);

												}
												break;
										default:



												bgp.top = bgp.top-Math.ceil(bgp.top/image.height)*image.height;


												for(bgy=(bounds.top+bgp.top);bgy<bounds.height+bounds.top;){



														h = Math.min(image.height,(bounds.height+bounds.top)-bgy);


														if ( Math.floor(bgy+image.height)>h+bgy){
																height = (h+bgy)-bgy;
														}else{
																height = image.height;
														}
														// console.log(height);

														if (bgy<bounds.top){
																add = bounds.top-bgy;
																bgy = bounds.top;

														}else{
																add = 0;
														}

														renderBackgroundRepeatX(ctx,image,bgp,bounds.left,bgy,bounds.width,height);
														if (add>0){
																bgp.top += add;
														}
														bgy = Math.floor(bgy+image.height)-add;
												}
												break;


								}
						}else{
								h2clog("html2canvas: Error loading background:" + background_image);
						//console.log(images);
						}

				}
		}



		function renderElement(el, parentStack){

				var bounds = _html2canvas.Util.Bounds(el),
				x = bounds.left,
				y = bounds.top,
				w = bounds.width,
				h = bounds.height,
				image,
				bgcolor = getCSS(el, "backgroundColor"),
				cssPosition = getCSS(el, "position"),
				zindex,
				opacity = getCSS(el, "opacity"),
				stack,
				stackLength,
				borders,
				ctx,
				bgbounds,
				imgSrc,
				paddingLeft,
				paddingTop,
				paddingRight,
				paddingBottom;

				if (!parentStack){
						docDim = docSize();
						parentStack = {
								opacity: 1
						};
				}else{
						docDim = {};
				}


				//var zindex = this.formatZ(this.getCSS(el,"zIndex"),cssPosition,parentStack.zIndex,el.parentNode);

				zindex = setZ( getCSS( el, "zIndex"), parentStack.zIndex );



				stack = {
						ctx: h2cRenderContext( docDim.width || w , docDim.height || h ),
						zIndex: zindex,
						opacity: opacity * parentStack.opacity,
						cssPosition: cssPosition
				};



				// TODO correct overflow for absolute content residing under a static position

				if (parentStack.clip){
						stack.clip = _html2canvas.Util.Extend( {}, parentStack.clip );
				//stack.clip = parentStack.clip;
				//   stack.clip.height = stack.clip.height - parentStack.borders[2].width;
				}


				if ( options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(el, "overflow")) === true && /(BODY)/i.test(el.nodeName) === false ){
						if (stack.clip){
								stack.clip = clipBounds(stack.clip, bounds);
						}else{
								stack.clip = bounds;
						}
				}


				stackLength =  zindex.children.push(stack);

				ctx = zindex.children[stackLength-1].ctx;

				ctx.setVariable("globalAlpha", stack.opacity);

				// draw element borders
				borders = renderBorders(el, ctx, bounds, false);
				stack.borders = borders;


				// let's modify clip area for child elements, so borders dont get overwritten

				/*
		if (stack.clip){
				stack.clip.width = stack.clip.width-(borders[1].width);
				stack.clip.height = stack.clip.height-(borders[2].width);
		}
		 */
				if (ignoreElementsRegExp.test(el.nodeName) && options.iframeDefault !== "transparent"){
						if (options.iframeDefault === "default"){
								bgcolor = "#efefef";
						}else{
								bgcolor = options.iframeDefault;
						}
				}

				// draw base element bgcolor

				bgbounds = {
						left: x + borders[3].width,
						top: y + borders[0].width,
						width: w - (borders[1].width + borders[3].width),
						height: h - (borders[0].width + borders[2].width)
				};

				//if (this.withinBounds(stack.clip,bgbounds)){

				if (stack.clip){
						bgbounds = clipBounds(bgbounds, stack.clip);

				//}

				}


				if (bgbounds.height > 0 && bgbounds.width > 0){
						renderRect(
								ctx,
								bgbounds.left,
								bgbounds.top,
								bgbounds.width,
								bgbounds.height,
								bgcolor
								);

						renderBackground(el, bgbounds, ctx);
				}

				switch(el.nodeName){
						case "IMG":
								imgSrc = el.getAttribute('src');
								image = loadImage(imgSrc);
								if (image){

										paddingLeft = getCSSInt(el, 'paddingLeft');
										paddingTop = getCSSInt(el, 'paddingTop');
										paddingRight = getCSSInt(el, 'paddingRight');
										paddingBottom = getCSSInt(el, 'paddingBottom');


										renderImage(
												ctx,
												image,
												0, //sx
												0, //sy
												image.width, //sw
												image.height, //sh
												x + paddingLeft + borders[3].width, //dx
												y + paddingTop + borders[0].width, // dy
												bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
												bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
												);

								}else{
										h2clog("html2canvas: Error loading <img>:" + imgSrc);
								}
								break;
						case "INPUT":
								// TODO add all relevant type's, i.e. HTML5 new stuff
								// todo add support for placeholder attribute for browsers which support it
								if (/^(text|url|email|submit|button|reset)$/.test(el.type) && el.value.length > 0){

										renderFormValue(el, bounds, stack);


								/*
								 this just doesn't work well enough

								this.newText(el,{
										nodeValue:el.value,
										splitText: function(){
												return this;
										},
										formValue:true
								},stack);
								 */
								}
								break;
						case "TEXTAREA":
								if (el.value.length > 0){
										renderFormValue(el, bounds, stack);
								}
								break;
						case "SELECT":
								if (el.options.length > 0){
										renderFormValue(el, bounds, stack);
								}
								break;
						case "LI":
								renderListItem(el, stack, bgbounds);
								break;
						case "CANVAS":
								paddingLeft = getCSSInt(el, 'paddingLeft');
								paddingTop = getCSSInt(el, 'paddingTop');
								paddingRight = getCSSInt(el, 'paddingRight');
								paddingBottom = getCSSInt(el, 'paddingBottom');
								renderImage(
										ctx,
										el,
										0, //sx
										0, //sy
										el.width, //sw
										el.height, //sh
										x + paddingLeft + borders[3].width, //dx
										y + paddingTop + borders[0].width, // dy
										bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
										bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
										);
								break;
				}

				return zindex.children[stackLength - 1];
		}



		function parseElement (el, stack) {

				// skip hidden elements and their children
				if (getCSS(el, 'display') !== "none" && getCSS(el, 'visibility') !== "hidden" && !el.hasAttribute("data-html2canvas-ignore")) {

						stack = renderElement(el, stack) || stack;

						ctx = stack.ctx;

						if ( !ignoreElementsRegExp.test( el.nodeName ) ) {
								var elementChildren = _html2canvas.Util.Children( el ),
								i,
								node,
								childrenLen;
								for (i = 0, childrenLen = elementChildren.length; i < childrenLen; i+=1) {
										node = elementChildren[i];

										if ( node.nodeType === 1 ) {
												parseElement(node, stack);
										}else if ( node.nodeType === 3 ) {
												renderText(el, node, stack);
										}

								}

						}
				}
		}

		stack = renderElement(element, null);

		/*
		SVG powered HTML rendering, non-tainted canvas available from FF 11+ onwards
		*/

		if ( support.svgRendering ) {
				(function( body ){
						var img = new Image(),
						size =  docSize(),
						html = "";

						function parseDOM( el ) {
								var children = _html2canvas.Util.Children( el ),
								len = children.length,
								attr,
								a,
								alen,
								elm,
								i;
								for ( i = 0; i < len; i+=1 ) {
										elm = children[ i ];
										if ( elm.nodeType === 3 ) {
												// Text node

												html += elm.nodeValue.replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
										} else if ( elm.nodeType === 1 ) {
												// Element
												if ( !/^(script|meta|title)$/.test(elm.nodeName.toLowerCase()) ) {

														html += "<" + elm.nodeName.toLowerCase();

														// add attributes
														if ( elm.hasAttributes() ) {
																attr = elm.attributes;
																alen = attr.length;
																for ( a = 0; a < alen; a+=1 ) {
																		html += " " + attr[ a ].name + '="' + attr[ a ].value + '"';
																}
														}


														html += '>';

														parseDOM( elm );


														html += "</" + elm.nodeName.toLowerCase() + ">";
												}
										}

								}

						}

						parseDOM( body );
						img.src = [
						"data:image/svg+xml,",
						"<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + size.width + "' height='" + size.height + "'>",
						"<foreignObject width='" + size.width + "' height='" + size.height + "'>",
						"<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>",
						html.replace(/\#/g,"%23"),
						"</html>",
						"</foreignObject>",
						"</svg>"
						].join("");




						img.onload = function() {
								stack.svgRender = img;
						};

				})( document.documentElement );

		}


		// parse every child element
		for (i = 0, children = element.children, childrenLen = children.length; i < childrenLen; i+=1){
				parseElement(children[i], stack);
		}


		stack.backgroundColor = getCSS( document.documentElement, "backgroundColor" );

		return stack;

};

function h2czContext(zindex) {
		return {
				zindex: zindex,
				children: []
		};
}

/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
 */

_html2canvas.Preload = function( options ) {

		var images = {
				numLoaded: 0,   // also failed are counted here
				numFailed: 0,
				numTotal: 0,
				cleanupDone: false
		},
		pageOrigin,
		methods,
		i,
		count = 0,
		element = options.elements[0] || document.body,
		doc = element.ownerDocument,
		domImages = doc.images, // TODO probably should limit it to images present in the element only
		imgLen = domImages.length,
		link = doc.createElement("a"),
		supportCORS = (function( img ){
				return (img.crossOrigin !== undefined);
		})(new Image()),
		timeoutTimer;

		link.href = window.location.href;
		pageOrigin  = link.protocol + link.host;






		function isSameOrigin(url){
				link.href = url;
				link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
				var origin = link.protocol + link.host;
				return (origin === pageOrigin);
		}

		function start(){
				h2clog("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
				if (!images.firstRun && images.numLoaded >= images.numTotal){
						h2clog("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

						if (typeof options.complete === "function"){
								options.complete(images);
						}

				}
		}

		// TODO modify proxy to serve images with CORS enabled, where available
		function proxyGetImage(url, img, imageObj){
				var callback_name,
				scriptUrl = options.proxy,
				script;

				link.href = url;
				url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

				callback_name = 'html2canvas_' + (count++);
				imageObj.callbackname = callback_name;

				if (scriptUrl.indexOf("?") > -1) {
						scriptUrl += "&";
				} else {
						scriptUrl += "?";
				}
				scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
				script = doc.createElement("script");

				window[callback_name] = function(a){
						if (a.substring(0,6) === "error:"){
								imageObj.succeeded = false;
								images.numLoaded++;
								images.numFailed++;
								start();
						} else {
								setImageLoadHandlers(img, imageObj);
								img.src = a;
						}
						window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
						try {
								delete window[callback_name];  // for all browser that support this
						} catch(ex) {}
						script.parentNode.removeChild(script);
						script = null;
						delete imageObj.script;
						delete imageObj.callbackname;
				};

				script.setAttribute("type", "text/javascript");
				script.setAttribute("src", scriptUrl);
				imageObj.script = script;
				window.document.body.appendChild(script);

		}

		function getImages (el) {



				// if (!this.ignoreRe.test(el.nodeName)){
				//

				var contents = _html2canvas.Util.Children(el),
				i,
				background_image,
				src,
				img,
				elNodeType = false;

				// Firefox fails with permission denied on pages with iframes
				try {
						var contentsLen = contents.length;
						for (i = 0;  i < contentsLen; i+=1 ){
								// var ignRe = new RegExp("("+this.ignoreElements+")");
								// if (!ignRe.test(element.nodeName)){
								getImages(contents[i]);
								// }
						}
				}
				catch( e ) {}


				// }
				try {
						elNodeType = el.nodeType;
				} catch (ex) {
						elNodeType = false;
						h2clog("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
				}

				if (elNodeType === 1 || elNodeType === undefined){

						// opera throws exception on external-content.html
						try {
								background_image = _html2canvas.Util.getCSS(el, 'backgroundImage');
						}catch(e) {
								h2clog("html2canvas: failed to get background-image - Exception: " + e.message);
						}
						if ( background_image && background_image !== "1" && background_image !== "none" ) {

								// TODO add multi image background support

								if (/^(-webkit|-o|-moz|-ms|linear)-/.test( background_image )) {

										img = _html2canvas.Generate.Gradient( background_image, _html2canvas.Util.Bounds( el ) );

										if ( img !== undefined ){
												images[background_image] = {
														img: img,
														succeeded: true
												};
												images.numTotal++;
												images.numLoaded++;
												start();

										}

								} else {
										src = _html2canvas.Util.backgroundImage(background_image.match(/data:image\/.*;base64,/i) ? background_image : background_image.split(",")[0]);
										methods.loadImage(src);
								}

								/*
						if (background_image && background_image !== "1" && background_image !== "none" && background_image.substring(0,7) !== "-webkit" && background_image.substring(0,3)!== "-o-" && background_image.substring(0,4) !== "-moz"){
								// TODO add multi image background support
								src = _html2canvas.Util.backgroundImage(background_image.split(",")[0]);
								methods.loadImage(src);            */
						}
				}
		}

		function setImageLoadHandlers(img, imageObj) {
				img.onload = function() {
						if ( imageObj.timer !== undefined ) {
								// CORS succeeded
								window.clearTimeout( imageObj.timer );
						}

						images.numLoaded++;
						imageObj.succeeded = true;
						img.onerror = img.onload = null;
						start();
				};
				img.onerror = function() {

						if (img.crossOrigin === "anonymous") {
								// CORS failed
								window.clearTimeout( imageObj.timer );

								// let's try with proxy instead
								if ( options.proxy ) {
										var src = img.src;
										img = new Image();
										imageObj.img = img;
										img.src = src;

										proxyGetImage( img.src, img, imageObj );
										return;
								}
						}


						images.numLoaded++;
						images.numFailed++;
						imageObj.succeeded = false;
						img.onerror = img.onload = null;
						start();

				};

				// TODO Opera has no load/error event for SVG images

				// Opera ninja onload's cached images
				/*
				window.setTimeout(function(){
						if ( img.width !== 0 && imageObj.succeeded === undefined ) {
								img.onload();
						}
				}, 100); // needs a reflow for base64 encoded images? interestingly timeout of 0 doesn't work but 1 does.
				 */
		}


		methods = {
				loadImage: function( src ) {
						var img, imageObj;
						if ( src && images[src] === undefined ) {
								img = new Image();
								if ( src.match(/data:image\/.*;base64,/i) ) {
										img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
										imageObj = images[src] = {
												img: img
										};
										images.numTotal++;
										setImageLoadHandlers(img, imageObj);
								} else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
										imageObj = images[src] = {
												img: img
										};
										images.numTotal++;
										setImageLoadHandlers(img, imageObj);
										img.src = src;
								} else if ( supportCORS && !options.allowTaint && options.useCORS ) {
										// attempt to load with CORS

										img.crossOrigin = "anonymous";
										imageObj = images[src] = {
												img: img
										};
										images.numTotal++;
										setImageLoadHandlers(img, imageObj);
										img.src = src;

										// work around for https://bugs.webkit.org/show_bug.cgi?id=80028
										img.customComplete = function () {
												if (!this.img.complete) {
														this.timer = window.setTimeout(this.img.customComplete, 100);
												} else {
														this.img.onerror();
												}
										}.bind(imageObj);
										img.customComplete();

								} else if ( options.proxy ) {
										imageObj = images[src] = {
												img: img
										};
										images.numTotal++;
										proxyGetImage( src, img, imageObj );
								}
						}

				},
				cleanupDOM: function(cause) {
						var img, src;
						if (!images.cleanupDone) {
								if (cause && typeof cause === "string") {
										h2clog("html2canvas: Cleanup because: " + cause);
								} else {
										h2clog("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
								}

								for (src in images) {
										if (images.hasOwnProperty(src)) {
												img = images[src];
												if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
														// cancel proxy image request
														window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
														try {
																delete window[img.callbackname];  // for all browser that support this
														} catch(ex) {}
														if (img.script && img.script.parentNode) {
																img.script.setAttribute("src", "about:blank");  // try to cancel running request
																img.script.parentNode.removeChild(img.script);
														}
														images.numLoaded++;
														images.numFailed++;
														h2clog("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
												}
										}
								}

								// cancel any pending requests
								if(window.stop !== undefined) {
										window.stop();
								} else if(document.execCommand !== undefined) {
										document.execCommand("Stop", false);
								}
								if (document.close !== undefined) {
										document.close();
								}
								images.cleanupDone = true;
								if (!(cause && typeof cause === "string")) {
										start();
								}
						}
				},
				renderingDone: function() {
						if (timeoutTimer) {
								window.clearTimeout(timeoutTimer);
						}
				}

		};

		if (options.timeout > 0) {
				timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
		}
		h2clog('html2canvas: Preload starts: finding background-images');
		images.firstRun = true;

		getImages( element );

		h2clog('html2canvas: Preload: Finding images');
		// load <img> images
		for (i = 0; i < imgLen; i+=1){
				methods.loadImage( domImages[i].getAttribute( "src" ) );
		}

		images.firstRun = false;
		h2clog('html2canvas: Preload: Done.');
		if ( images.numTotal === images.numLoaded ) {
				start();
		}

		return methods;

};




/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
*/
function h2cRenderContext(width, height) {
		var storage = [];
		return {
				storage: storage,
				width: width,
				height: height,
				fillRect: function () {
						storage.push({
								type: "function",
								name: "fillRect",
								'arguments': arguments
						});
				},
				drawImage: function () {
						storage.push({
								type: "function",
								name: "drawImage",
								'arguments': arguments
						});
				},
				fillText: function () {
						storage.push({
								type: "function",
								name: "fillText",
								'arguments': arguments
						});
				},
				setVariable: function (variable, value) {
						storage.push({
								type: "variable",
								name: variable,
								'arguments': value
						});
				}
		};
}

/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
*/
_html2canvas.Renderer = function(parseQueue, options){


		var queue = [];

		function sortZ(zStack){
				var subStacks = [],
				stackValues = [],
				zStackChildren = zStack.children,
				s,
				i,
				stackLen,
				zValue,
				zLen,
				stackChild,
				b,
				subStackLen;


				for (s = 0, zLen = zStackChildren.length; s < zLen; s+=1){

						stackChild = zStackChildren[s];

						if (stackChild.children && stackChild.children.length > 0){
								subStacks.push(stackChild);
								stackValues.push(stackChild.zindex);
						}else{
								queue.push(stackChild);
						}

				}

				stackValues.sort(function(a, b) {
						return a - b;
				});

				for (i = 0, stackLen = stackValues.length; i < stackLen; i+=1){
						zValue = stackValues[i];
						for (b = 0, subStackLen = subStacks.length; b <= subStackLen; b+=1){

								if (subStacks[b].zindex === zValue){
										stackChild = subStacks.splice(b, 1);
										sortZ(stackChild[0]);
										break;

								}
						}
				}

		}


		sortZ(parseQueue.zIndex);
		if ( typeof options._renderer._create !== "function" ) {
				throw new Error("Invalid renderer defined");
		}
		return options._renderer._create( parseQueue, options, document, queue, _html2canvas );

};

/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
*/


html2canvas = function( elements, opts ) {

		var queue,
		canvas,
		options = {
				// general
				logging: false,
				elements: elements,

				// preload options
				proxy: "http://html2canvas.appspot.com/",
				timeout: 0,    // no timeout
				useCORS: false, // try to load images as CORS (where available), before falling back to proxy
				allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

				// parse options
				svgRendering: false, // use svg powered rendering where available (FF11+)
				iframeDefault: "default",
				ignoreElements: "IFRAME|OBJECT|PARAM",
				useOverflow: true,
				letterRendering: false,

				// render options

				flashcanvas: undefined, // path to flashcanvas
				width: null,
				height: null,
				taintTest: true, // do a taint test with all images before applying to canvas
		renderer: "Canvas"
		}, renderer;

		options = _html2canvas.Util.Extend(opts, options);

	if (typeof options.renderer === "string" && _html2canvas.Renderer[options.renderer] !== undefined) {
		options._renderer = _html2canvas.Renderer[options.renderer]( options );
	} else if (typeof options.renderer === "function") {
		options._renderer = options.renderer( options );
	} else {
		throw("Unknown renderer");
	}

		_html2canvas.logging = options.logging;
		options.complete = function( images ) {

				if (typeof options.onpreloaded === "function") {
						if ( options.onpreloaded( images ) === false ) {
								return;
						}
				}
				queue = _html2canvas.Parse( images, options );

				if (typeof options.onparsed === "function") {
						if ( options.onparsed( queue ) === false ) {
								return;
						}
				}

				canvas = _html2canvas.Renderer( queue, options );

				if (typeof options.onrendered === "function") {
						options.onrendered( canvas );
				}


		};

		// for pages without images, we still want this to be async, i.e. return methods before executing
		window.setTimeout( function(){
				_html2canvas.Preload( options );
		}, 0 );

		return {
				render: function( queue, opts ) {
						return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
				},
				parse: function( images, opts ) {
						return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
				},
				preload: function( opts ) {
						return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
				},
				log: h2clog
		};
};

html2canvas.log = h2clog; // for renderers
html2canvas.Renderer = {
		Canvas: undefined // We are assuming this will be used
};

/*
	html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
*/


_html2canvas.Renderer.Canvas = function( options ) {

		options = options || {};

		var doc = document,
		canvas = options.canvas || doc.createElement('canvas'),
		usingFlashcanvas = false,
		_createCalled = false,
		canvasReadyToDraw = false,
		methods,
		flashMaxSize = 2880; // flash bitmap limited to 2880x2880px // http://stackoverflow.com/questions/2033792/argumenterror-error-2015-invalid-bitmapdata


		if (canvas.getContext){
				h2clog("html2canvas: Renderer: using canvas renderer");
				canvasReadyToDraw = true;
		} else if ( options.flashcanvas !== undefined ){
				usingFlashcanvas = true;
				h2clog("html2canvas: Renderer: canvas not available, using flashcanvas");
				var script = doc.createElement("script");
				script.src = options.flashcanvas;

				script.onload = (function(script, func){
						var intervalFunc;

						if (script.onload === undefined) {
								// IE lack of support for script onload

								if( script.onreadystatechange !== undefined ) {

										intervalFunc = function() {
												if (script.readyState !== "loaded" && script.readyState !== "complete") {
														window.setTimeout( intervalFunc, 250 );

												} else {
														// it is loaded
														func();

												}

										};

										window.setTimeout( intervalFunc, 250 );

								} else {
										h2clog("html2canvas: Renderer: Can't track when flashcanvas is loaded");
								}

						} else {
								return func;
						}

				})(script, function(){

						if (typeof window.FlashCanvas !== "undefined") {
								h2clog("html2canvas: Renderer: Flashcanvas initialized");
								window.FlashCanvas.initElement( canvas );

								canvasReadyToDraw = true;
								if ( _createCalled !== false ) {
										methods._create.apply( null, _createCalled );
								}
						}
				});

				doc.body.appendChild( script );

		}

		methods = {
				_create: function( zStack, options, doc, queue, _html2canvas ) {

						if ( !canvasReadyToDraw ) {
								_createCalled = arguments;
								return canvas;
						}

						var ctx = canvas.getContext("2d"),
						storageContext,
						i,
						queueLen,
						a,
						newCanvas,
						bounds,
						testCanvas = document.createElement("canvas"),
						hasCTX = ( testCanvas.getContext !== undefined ),
						storageLen,
						renderItem,
						testctx = ( hasCTX ) ? testCanvas.getContext("2d") : {},
						safeImages = [],
						fstyle;

						canvas.width = canvas.style.width = (!usingFlashcanvas) ? options.width || zStack.ctx.width : Math.min(flashMaxSize, (options.width || zStack.ctx.width) );
						canvas.height = canvas.style.height = (!usingFlashcanvas) ? options.height || zStack.ctx.height : Math.min(flashMaxSize, (options.height || zStack.ctx.height) );

						fstyle = ctx.fillStyle;
						ctx.fillStyle = zStack.backgroundColor;
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						ctx.fillStyle = fstyle;

						if ( options.svgRendering && zStack.svgRender !== undefined ) {
								// TODO: enable async rendering to support this
								ctx.drawImage( zStack.svgRender, 0, 0 );
						} else {
								for ( i = 0, queueLen = queue.length; i < queueLen; i+=1 ) {

										storageContext = queue.splice(0, 1)[0];
										storageContext.canvasPosition = storageContext.canvasPosition || {};

										//this.canvasRenderContext(storageContext,parentctx);

										// set common settings for canvas
										ctx.textBaseline = "bottom";

										if (storageContext.clip){
												ctx.save();
												ctx.beginPath();
												// console.log(storageContext);
												ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
												ctx.clip();

										}

										if (storageContext.ctx.storage){

												for (a = 0, storageLen = storageContext.ctx.storage.length; a < storageLen; a+=1){

														renderItem = storageContext.ctx.storage[a];


														switch(renderItem.type){
																case "variable":
																		ctx[renderItem.name] = renderItem['arguments'];
																		break;
																case "function":
																		if (renderItem.name === "fillRect") {

																				if (!usingFlashcanvas || renderItem['arguments'][0] + renderItem['arguments'][2] < flashMaxSize  && renderItem['arguments'][1] + renderItem['arguments'][3] < flashMaxSize) {
																						ctx.fillRect.apply( ctx, renderItem['arguments'] );
																				}
																		}else if(renderItem.name === "fillText") {
																				if (!usingFlashcanvas || renderItem['arguments'][1] < flashMaxSize  && renderItem['arguments'][2] < flashMaxSize) {
																						ctx.fillText.apply( ctx, renderItem['arguments'] );
																				}
																		}else if(renderItem.name === "drawImage") {

																				if (renderItem['arguments'][8] > 0 && renderItem['arguments'][7]){
																						if ( hasCTX && options.taintTest ) {
																								if ( safeImages.indexOf( renderItem['arguments'][ 0 ].src ) === -1 ) {
																										testctx.drawImage( renderItem['arguments'][ 0 ], 0, 0 );
																										try {
																												testctx.getImageData( 0, 0, 1, 1 );
																										} catch(e) {
																												testCanvas = doc.createElement("canvas");
																												testctx = testCanvas.getContext("2d");
																												continue;
																										}

																										safeImages.push( renderItem['arguments'][ 0 ].src );

																								}
																						}
																						ctx.drawImage.apply( ctx, renderItem['arguments'] );
																				}
																		}


																		break;
																default:

														}

												}

										}
										if (storageContext.clip){
												ctx.restore();
										}

								}
						}

						h2clog("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

						queueLen = options.elements.length;

						if (queueLen === 1) {
								if (typeof options.elements[ 0 ] === "object" && options.elements[ 0 ].nodeName !== "BODY" && usingFlashcanvas === false) {
										// crop image to the bounds of selected (single) element
										bounds = _html2canvas.Util.Bounds( options.elements[ 0 ] );
										newCanvas = doc.createElement('canvas');
										newCanvas.width = bounds.width;
										newCanvas.height = bounds.height;
										ctx = newCanvas.getContext("2d");

										ctx.drawImage( canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height );
										canvas = null;
										return newCanvas;
								}
						} /*else {
				// TODO clip and resize multiple elements

						for ( i = 0; i < queueLen; i+=1 ) {
								if (options.elements[ i ] instanceof Element) {

								}

						}
				}
				*/



						return canvas;
				}
		};

		return methods;

};

window.html2canvas = html2canvas;
}(window, document));

/**
	@license html2canvas v0.34 <http://html2canvas.hertzen.com>
	Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
	http://www.twitter.com/niklasvh

	Released under MIT License
 */
/*
 * jQuery helper plugin for examples and tests
 */
(function( $ ){
		$.fn.html2canvas = function(options, callback) {
				if (options && options.profile && window.console && window.console.profile) {
						console.profile();
				}
				var date = new Date(),
				html2obj,
				$message = null,
				timeoutTimer = false,
				timer = date.getTime();
				options = options || {};

				options.onrendered = options.onrendered || function( canvas ) {
						var $canvas = $(canvas),
						finishTime = new Date();

						if (options && options.profile && window.console && window.console.profileEnd) {
								console.profileEnd();
						}
						$canvas.css({
								position: 'absolute',
								left: 0,
								top: 0
						}).appendTo(document.body);
						/*
						$canvas.siblings().toggle();

						$(window).click(function(){
								$canvas.toggle().siblings().toggle();
								throwMessage("Canvas Render " + ($canvas.is(':visible') ? "visible" : "hidden"));
						});
						throwMessage('Screenshot created in '+ ((finishTime.getTime()-timer)) + " ms<br />",4000);

						// test if canvas is read-able
						try {
								$canvas[0].toDataURL();
						} catch(e) {
								if ($canvas[0].nodeName.toLowerCase() === "canvas") {
										// TODO, maybe add a bit less offensive way to present this, but still something that can easily be noticed
										alert("Canvas is tainted, unable to read data");
								}
						}*/
						callback && callback($canvas);
				};

				html2obj = html2canvas(this, options);

				function throwMessage(msg,duration){
						window.clearTimeout(timeoutTimer);
						timeoutTimer = window.setTimeout(function(){
								$message.fadeOut(function(){
										$message.remove();
										$message = null;
								});
						},duration || 2000);
						if ($message)
								$message.remove();
						$message = $('<div />').html(msg).css({
								margin:0,
								padding:10,
								background: "#000",
								opacity:0.7,
								position:"fixed",
								top:10,
								right:10,
								fontFamily: 'Tahoma',
								color:'#fff',
								fontSize:12,
								borderRadius:12,
								width:'auto',
								height:'auto',
								textAlign:'center',
								textDecoration:'none',
								display:'none'
						}).appendTo(document.body).fadeIn();
						html2obj.log(msg);
				}
		};
})( jQuery );



/*
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var g,d,j=1,a,b=this,f=!1,h="postMessage",e="addEventListener",c,i=b[h]&&!$.browser.opera;$[h]=function(k,l,m){if(!l){return}k=typeof k==="string"?k:$.param(k);m=m||parent;if(i){m[h](k,l.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))}else{if(l){m.location=l.replace(/#.*$/,"")+"#"+(+new Date)+(j++)+"&"+k}}};$.receiveMessage=c=function(l,m,k){if(i){if(l){a&&c();a=function(n){if((typeof m==="string"&&n.origin!==m)||($.isFunction(m)&&m(n.origin)===f)){return f}l(n)}}if(b[e]){b[l?e:"removeEventListener"]("message",a,f)}else{b[l?"attachEvent":"detachEvent"]("onmessage",a)}}else{g&&clearInterval(g);g=null;if(l){k=typeof m==="number"?m:typeof k==="number"?k:100;g=setInterval(function(){var o=document.location.hash,n=/^#?\d+&/;if(o!==d&&n.test(o)){d=o;l({data:o.replace(n,"")})}},k)}}}})(jQuery);

/*
*  Mendix sprintr feedback widget starts here.
*/
	window.checkScript = function (elem, cb, counter, arg1) {
		// This is for backwards compatibility!!!
		cb();
	};

	var addScript = function (loc, type) {
		if (type == 'js') {
			var script = document.createElement('SCRIPT');
			script.type='text/javascript';
			script.src = loc;
			document.getElementsByTagName("head")[0].appendChild(script);
		} else {
			var style = document.createElement('link');
			style.type='text/css';
			style.rel = 'stylesheet';
			style.media = 'screen';
			style.href = loc;
			document.getElementsByTagName("head")[0].appendChild(style);
		}
	};

	// var onready = function ($) { // Trigger when the page is loaded.
	// 	if ($.browser && !$.browser.msie)
	// 		addScript(window.location.origin+"/public/styles/plainsprintrfeedback.css", 'css');
	// 	else
	// 		addScript(window.location.origin+"/public/styles/plainsprintrfeedbackIE.css", 'css');
	// }
	/*
	if ($.isReady === true || jQuery.isReady === true)
		//MWE: it is completely unclear to me how we ended up in this scenerio, but in some cases the original jQuery is ready, and ours not (and never will be). Maybe there is an empty onready func attached somewhere?
		onready();
	else
	*/
	// $(onready);

	(function($) {
		window.sprintrFeedback = {
		width : 640,
		height : 520,
		relWidth: .95,
		base64 : '',
		url : url,
		body : $(window.document.body),
		sprintrid : '',
		allowSshot : false,
		allowFile : true,
		wrapper : null,
		previewBar : null,
		feedbkbtn : null,
		userdata : null,
        ignoreAttr: "data-html2canvas-ignore",

		create : function (options) {
			if ($('.sprintrFeedbackNode').length > 0) {
				this.sprintrid = options.sprintrid;
				return;
			}

			if (!options)
				options = {};

			if (options.userdata)
				this.userdata = options.userdata;

			this.sprintrid = options.sprintrid;
			this.allowSshot = options.allowSshot;
			this.allowFile = options.allowFile;

			if (!this.sprintrid || this.sprintrid === '') {
				throw new Error('No valid sprintr id was found.');
				return;
			}

			$.receiveMessage(
				$.proxy(function(e){
					if (e.data == 'close') {
						$('body').removeClass('feedback-lock'); // Allow the body to scroll again.
						$(this.wrapper).empty().remove();
					}
					else if (e.data == 'hide')
						$(this.wrapper).hide();
					else if (e.data == 'show')
						$(this.wrapper).show();
					else if (e.data == 'sshot')
						this.sshot();
					else if (e.data == 'preview')
						this.openImage();
                    else if (e.data == 'feedbackMessageShow')
                        $('.sprintrFeedback', this.wrapper).addClass('feedbackMessageShowing');
                    else if (e.data == 'feedbackMessageHide')
                        $('.sprintrFeedback', this.wrapper).removeClass('feedbackMessageShowing');

				}, this), document
			);
			var self = this;
			this.feedbkbtn = $('<div class="sprintrFeedbackNode">').click($.proxy(this.openIframe, this));
			$(function() {
				self.body = $(window.document.body);
				self.feedbkbtn.appendTo(self.body);
			});
		},

		openIframe : function () {
			if ($('#sprintrFeedbackWrapper').length > 0) {
				$('#sprintrFeedbackWrapper').show();
				return;
			}

			this.wrapper = $('<div id="sprintrFeedbackWrapper">').attr(this.ignoreAttr, this.ignoreAttr);
			var bgFeedback = $('<div class="sprintrFeedbackFormBg">');
			bgFeedback.css('height', $(document).height());

			var iframe = $('<iframe class="sprintrFeedback" id="sprintrFeedbackIframe" frameBorder="0" allowtransparency="allowtransparency">').attr('src', this.url+'feedback/ui/iframe.html');
			var container = $('<div class="sprintrFeedbackContainer">');

			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var maxWidth = windowWidth * this.relWidth;
			var actualWidth = Math.min(maxWidth, this.width);
			iframe.css({
				width : actualWidth +'px',
				height : this.height+'px'
			});

			container.css({
				top : ((windowHeight - this.height) / 2) + "px",
				left : ((windowWidth - actualWidth) / 2) + "px"
			});
			container.append(iframe); // Must go before the load, otherwise it breaks in IE

			var formname = '';
			var documentID = '';

			try {
				if (typeof(mx.ui.getContentForm) === "function" && typeof(mx.ui.getContentForm().path) !== "undefined") {
					// mx7.14+
					var form = mx.ui.getContentForm();
					formname = form.path;
					documentID = form.id;
				} else if (typeof(mx.router.getContentForm) === "function" && typeof(mx.router.getContentForm().path) !== "undefined") {
					// mx6.1+
					formname = mx.router.getContentForm().path;
				} else if (typeof(mx.ui.getCurrentForm) === "function" && typeof(mx.ui.getCurrentForm().path) !== "undefined") {
					// mx5.10+
					formname = mx.ui.getCurrentForm().path;
				} else if (typeof(mxui) !== "undefined" && typeof(mxui.currentForm) !== "undefined") {
					// This is the new Mendix 5 version (it's above mobile because mx5 now always have that var)
					formname = mxui.currentForm.path;
				} else if (typeof(mobile) !== "undefined") {
					// Mx 4 mobile version
					formname = mobile.currentForm.path;
				} else if (typeof(mx) !== "undefined") {
					// Every other modeler, mostly mx4 desktop
					formname = mx.screen.buffer.getCurrentItem()._c.url;
				} else if (this.userdata) {
					formname = this.userdata.formName;
				}
			} catch (e) {
				// No form found it seems, let's go on
			}

			if ($.browser && $.browser.msie && $.browser.version < 9) {
				this.allowSshot = false;
			}

			iframe.load({
				'sprintrid' : this.sprintrid,
				'frameloc' : window.location.href,
				'allowSshot' : this.allowSshot,
				'allowFile' : this.allowFile,
				'username' : this.userdata?this.userdata.username:'',
				'emailaddress' : this.userdata?this.userdata.emailaddress:'',
				'userroles' : this.userdata?this.userdata.userroles:'',
				'formName' : formname,
				'documentID' : documentID
			}, $.proxy(this.sendToFrame, this));

			var height = this.height;
			iframe.draggable({
				'iframeFix' : true,
				'start' : function (event, ui) {
					iframe.css({'height' : 0});
				},
				'stop' : function (event, ui) {
					iframe.animate({'height' : height+'px'}, 100);
				}
			});

			this.wrapper.append(bgFeedback, container);
			this.wrapper.appendTo(this.body);

			// Idea of Marco L., improvement over walking the dom and modifying overflow: put 'feedback-lock' class on body.
			// This prevents the elements behind the feedback iframe from scrolling.
			$('body').addClass('feedback-lock');
		},

		sendToFrame : function (jqevt) {
			if (jqevt.data) {
				$.postMessage(jqevt.data, this.url+'feedback/ui/iframe.html', document.getElementById('sprintrFeedbackIframe').contentWindow);
			}
		},

		sshot : function () {
			var notifNode = $('<div>').attr(this.ignoreAttr, this.ignoreAttr).addClass('snapshot-notification').text("Taking a snapshot of your page...");
			$('body').prepend(notifNode);
			notifNode.css('display', 'inline-block');
			notifNode.css({
				position : 'fixed',
				top : 0,
				left : ($(window).width()/2) - (notifNode.width()/2)
			});
			$('body').html2canvas({ 'proxy' : '', height: $(window).height()}, $.proxy(function (canvas) {
				if (canvas[0]) {
					this.base64 = canvas[0].toDataURL();
					canvas.remove();
					this.sendToFrame({data : {img : this.base64}});
				} else
					console.error('No canvas found!');

				notifNode.slideUp(350, function () {
					$(this).remove();
				});

			}, this));
		},

		// Not used yet
		setPreviewBar : function (open, base64) {
			this.previewBar.empty();
			if (open) {
				var preview = $('<span>Click here for a preview</span>').bind('click', { 'src' : base64}, $.proxy(this.openImage, this));
				var resetbtn = $('<div>Reset screenshot</div>').click($.proxy(function () {this.setPreviewBar(false);}, this));
				this.previewBar.append(preview, resetbtn);
			} else {
				var takeshot = $('<span id="takescreenshot">Take a screenshot</span>');
				takeshot.click($.proxy(this.sshot, this));
				takeshot.css({
					backgroundColor : 'blue',
					color : 'white',
					padding: '5px 5px'
				});
				takeshot.appendTo(this.previewBar);
			}
		},

		openImage : function () {
			if ($('.sprintrImagePreview').length === 0) {
				var width = document.body.offsetWidth*0.9,
				height = document.body.offsetHeight*0.9,
				top = (document.body.scrollTop + (document.body.offsetHeight - height)/2),
				left = ((document.body.offsetWidth - width)/2);

				var imgContainer = $('<div class="sprintrImagePreview">').click(function () {
					$(this).empty();
					$(this).remove();
				});
				var img = $('<img class="sprintrImage">').attr('src', this.base64).css({
					width : width,
					height : height,
					top : top,
					left : left
				});
				imgContainer.append(img);
				this.body.prepend(imgContainer);
			}
		}
	};
	window.sprintrFeedback.create({
		sprintrid: "8effc48c-bb00-49b7-bb3c-6210ab2579dc",
		allowFile: true,
		allowSshot: true,
		userdata: {
		  username: "",
		  emailaddress: "",
		  userroles: "user",
		},
	  });
	})(jQuery);

	jQuery.noConflict();
	if (oldJQ) {
		jQuery = oldJQ;
	}
})();

var Zepto=function(){function c(t){return null==t?String(t):q[H.call(t)]||"object"}function s(t){return"function"==c(t)}function o(t){return null!=t&&t==t.window}function a(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(t){return"object"==c(t)}function u(t){return r(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function l(t){return"number"==typeof t.length}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||O[f(t)]?e:e+"px"}function i(t){return"children"in t?C.call(t.children):w.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){return null==e?w(t):w(t).filter(e)}function p(t,e,n,i){return s(e)?e.call(t,n,i):e}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",i=n&&n.baseVal!==y;return e===y?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function g(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?w.parseJSON(e):e):e}catch(t){return e}}var y,b,w,x,L,E,S=[],C=S.slice,j=S.filter,T=window.document,N={},e={},O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,A=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,U=/^(?:body|html)$/i,R=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],t=T.createElement("table"),_=T.createElement("tr"),M={tr:T.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:_,th:_,"*":T.createElement("div")},I=/complete|loaded|interactive/,Z=/^[\w-]*$/,q={},H=q.toString,z={},F=T.createElement("div"),$={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},J=Array.isArray||function(t){return t instanceof Array};return z.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=F).appendChild(t),i=~z.qsa(r,e).indexOf(t),o&&F.removeChild(t),i},L=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(n){return j.call(n,function(t,e){return n.indexOf(t)==e})},z.fragment=function(t,e,n){var i,r,o;return A.test(t)&&(i=w(T.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(k,"<$1></$2>")),e===y&&(e=P.test(t)&&RegExp.$1),e in M||(e="*"),(o=M[e]).innerHTML=""+t,i=w.each(C.call(o.childNodes),function(){o.removeChild(this)})),u(n)&&(r=w(i),w.each(n,function(t,e){-1<D.indexOf(t)?r[t](e):r.attr(t,e)})),i},z.Z=function(t,e){return(t=t||[]).__proto__=w.fn,t.selector=e||"",t},z.isZ=function(t){return t instanceof z.Z},z.init=function(t,e){var n,i;if(!t)return z.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&P.test(t))n=z.fragment(t,RegExp.$1,e),t=null;else{if(e!==y)return w(e).find(t);n=z.qsa(T,t)}else{if(s(t))return w(T).ready(t);if(z.isZ(t))return t;if(J(t))i=t,n=j.call(i,function(t){return null!=t});else if(r(t))n=[t],t=null;else if(P.test(t))n=z.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==y)return w(e).find(t);n=z.qsa(T,t)}}return z.Z(n,t)},(w=function(t,e){return z.init(t,e)}).extend=function(e){var n,t=C.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,i){for(b in n)i&&(u(n[b])||J(n[b]))?(u(n[b])&&!u(e[b])&&(e[b]={}),J(n[b])&&!J(e[b])&&(e[b]=[]),t(e[b],n[b],i)):n[b]!==y&&(e[b]=n[b])}(e,t,n)}),e},z.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=Z.test(o);return a(t)&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:C.call(s&&!i?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},w.contains=T.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},w.type=c,w.isFunction=s,w.isWindow=o,w.isArray=J,w.isPlainObject=u,w.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},w.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},w.camelCase=L,w.trim=function(t){return null==t?"":String.prototype.trim.call(t)},w.uuid=0,w.support={},w.expr={},w.map=function(t,e){var n,i,r,o,s=[];if(l(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&s.push(n);else for(r in t)null!=(n=e(t[r],r))&&s.push(n);return 0<(o=s).length?w.fn.concat.apply([],o):o},w.each=function(t,e){var n,i;if(l(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},w.grep=function(t,e){return j.call(t,e)},window.JSON&&(w.parseJSON=JSON.parse),w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){q["[object "+e+"]"]=e.toLowerCase()}),w.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(n){return w(w.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return w(C.apply(this,arguments))},ready:function(t){return I.test(T.readyState)&&T.body?t(w):T.addEventListener("DOMContentLoaded",function(){t(w)},!1),this},get:function(t){return t===y?C.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return S.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return s(e)?this.not(this.not(e)):w(j.call(this,function(t){return z.matches(t,e)}))},add:function(t,e){return w(E(this.concat(w(t,e))))},is:function(t){return 0<this.length&&z.matches(this[0],t)},not:function(e){var n=[];if(s(e)&&e.call!==y)this.each(function(t){e.call(this,t)||n.push(this)});else{var i="string"==typeof e?this.filter(e):l(e)&&s(e.item)?C.call(e):w(e);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return w(n)},has:function(t){return this.filter(function(){return r(t)?w.contains(this,t):w(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:w(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:w(t)},find:function(t){var n=this;return t?"object"==typeof t?w(t).filter(function(){var e=this;return S.some.call(n,function(t){return w.contains(t,e)})}):1==this.length?w(z.qsa(this[0],t)):this.map(function(){return z.qsa(this,t)}):w()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=w(t));n&&!(i?0<=i.indexOf(n):z.matches(n,t));)n=n!==e&&!a(n)&&n.parentNode;return w(n)},parents:function(t){for(var e=[],n=this;0<n.length;)n=w.map(n,function(t){return(t=t.parentNode)&&!a(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return d(e,t)},parent:function(t){return d(E(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return i(this)}),t)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return j.call(i(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return w.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,N[t]||(e=T.createElement(t),T.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),N[t]=n),N[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=s(e);if(this[0]&&!n)var i=w(e).get(0),r=i.parentNode||1<this.length;return this.each(function(t){w(this).wrapAll(n?e.call(this,t):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){w(this[0]).before(t=w(t));for(var e;(e=t.children()).length;)t=e.first();w(t).append(this)}return this},wrapInner:function(r){var o=s(r);return this.each(function(t){var e=w(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){w(this).replaceWith(w(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=w(this);(e===y?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return w(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return w(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;w(this).empty().append(p(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=p(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(r(e))for(b in e)m(this,b,e[b]);else m(this,e,p(this,n,t,this.getAttribute(e)))}):this.length&&1===this[0].nodeType?!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:y},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(e,n){return e=$[e]||e,1 in arguments?this.each(function(t){this[e]=p(this,n,t,this[e])}):this[0]&&this[0][e]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?g(i):y},val:function(e){return 0 in arguments?this.each(function(t){this.value=p(this,e,t,this.value)}):this[0]&&(this[0].multiple?w(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=w(this),n=p(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n,i=this[0];if(!i)return;if(n=getComputedStyle(i,""),"string"==typeof t)return i.style[L(t)]||n.getPropertyValue(t);if(J(t)){var r={};return w.each(t,function(t,e){r[e]=i.style[L(e)]||n.getPropertyValue(e)}),r}}var o="";if("string"==c(t))e||0===e?o=f(t)+":"+h(t,e):this.each(function(){this.style.removeProperty(f(t))});else for(b in t)t[b]||0===t[b]?o+=f(b)+":"+h(b,t[b])+";":this.each(function(){this.style.removeProperty(f(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(w(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&S.some.call(this,function(t){return this.test(v(t))},n(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){x=[];var e=v(this);p(this,n,t,e).split(/\s+/g).forEach(function(t){w(this).hasClass(t)||x.push(t)},this),x.length&&v(this,e+(e?" ":"")+x.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===y)return v(this,"");x=v(this),p(this,e,t,x).split(/\s+/g).forEach(function(t){x=x.replace(n(t)," ")}),v(this,x.trim())}})},toggleClass:function(n,i){return n?this.each(function(t){var e=w(this);p(this,n,t,v(this)).split(/\s+/g).forEach(function(t){(i===y?!e.hasClass(t):i)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===y?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===y?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=U.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(w(t).css("margin-top"))||0,n.left-=parseFloat(w(t).css("margin-left"))||0,i.top+=parseFloat(w(e[0]).css("border-top-width"))||0,i.left+=parseFloat(w(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||T.body;t&&!U.test(t.nodeName)&&"static"==w(t).css("position");)t=t.offsetParent;return t})}},w.fn.detach=w.fn.remove,["width","height"].forEach(function(i){var r=i.replace(/./,function(t){return t[0].toUpperCase()});w.fn[i]=function(e){var t,n=this[0];return e===y?o(n)?n["inner"+r]:a(n)?n.documentElement["scroll"+r]:(t=this.offset())&&t[i]:this.each(function(t){(n=w(this)).css(i,p(this,e,t,n[i]()))})}}),["after","prepend","before","append"].forEach(function(e,s){var a=s%2;w.fn[e]=function(){var e,i,r=w.map(arguments,function(t){return"object"==(e=c(t))||"array"==e||null==t?t:z.fragment(t)}),o=1<this.length;return r.length<1?this:this.each(function(t,e){i=a?e:e.parentNode,e=0==s?e.nextSibling:1==s?e.firstChild:2==s?e:null;var n=w.contains(T.documentElement,i);r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return w(t).remove();i.insertBefore(t,e),n&&function t(e,n){n(e);for(var i=0,r=e.childNodes.length;i<r;i++)t(e.childNodes[i],n)}(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},w.fn[a?e+"To":"insert"+(s?"Before":"After")]=function(t){return w(t)[e](this),this}}),z.Z.prototype=w.fn,z.uniq=E,z.deserializeValue=g,w.zepto=z,w}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(l){function f(t){return t._zid||(t._zid=e++)}function s(t,e,n,i){if((e=h(e)).ns)var r=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(L[f(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&f(t.fn)!==f(n)||i&&t.sel!=i)})}function h(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t,e){return t.del&&!n&&t.e in i||!!e}function p(t){return E[t]||n&&i[t]||t}function u(r,t,e,o,s,a,c){var n=f(r),u=L[n]||(L[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=h(t);n.fn=e,n.sel=s,n.e in E&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!l.contains(this,e)?n.fn.apply(this,arguments):void 0});var i=(n.del=a)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=i.apply(r,t._args==y?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=u.length,u.push(n),"addEventListener"in r&&r.addEventListener(p(n.e),n.proxy,d(n,c))})}function m(e,t,n,i,r){var o=f(e);(t||"").split(/\s/).forEach(function(t){s(e,t,n,i).forEach(function(t){delete L[o][t.i],"removeEventListener"in e&&e.removeEventListener(p(t.e),t.proxy,d(t,r))})})}function v(i,r){return(r||!i.isDefaultPrevented)&&(r||(r=i),l.each(t,function(t,e){var n=r[t];i[t]=function(){return this[e]=a,n&&n.apply(r,arguments)},i[e]=S}),(r.defaultPrevented!==y?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(i.isDefaultPrevented=a)),i}function g(t){var e,n={originalEvent:t};for(e in t)r.test(e)||t[e]===y||(n[e]=t[e]);return v(n,t)}var y,e=1,b=Array.prototype.slice,w=l.isFunction,x=function(t){return"string"==typeof t},L={},o={},n="onfocusin"in window,i={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:u,remove:m},l.proxy=function(t,e){var n=2 in arguments&&b.call(arguments,2);if(w(t)){var i=function(){return t.apply(e,n?n.concat(b.call(arguments)):arguments)};return i._zid=f(t),i}if(x(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var a=function(){return!0},S=function(){return!1},r=/^([A-Z]|returnValue$|layer[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,r,n,o,s){var a,c,i=this;return e&&!x(e)?(l.each(e,function(t,e){i.on(t,r,n,e,s)}),i):(x(r)||w(o)||!1===o||(o=n,n=r,r=y),(w(n)||!1===n)&&(o=n,n=y),!1===o&&(o=S),i.each(function(t,i){s&&(a=function(t){return m(i,t.type,o),o.apply(this,arguments)}),r&&(c=function(t){var e,n=l(t.target).closest(r,i).get(0);return n&&n!==i?(e=l.extend(g(t),{currentTarget:n,liveFired:i}),(a||o).apply(n,[e].concat(b.call(arguments,1)))):void 0}),u(i,e,o,n,r,c||a)}))},l.fn.off=function(t,n,e){var i=this;return t&&!x(t)?(l.each(t,function(t,e){i.off(t,n,e)}),i):(x(n)||w(e)||!1===e||(e=n,n=y),!1===e&&(e=S),i.each(function(){m(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=x(t)||l.isPlainObject(t)?l.Event(t):v(t))._args=e,this.each(function(){t.type in i&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=g(x(n)?l.Event(n):n))._args=i,r.target=e,l.each(s(e,n.type||n),function(t,e){return o=e.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){x(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),v(n)}}(Zepto),function(dh){function fh(t,e,n,i){return t.global?(r=e||vh,o=n,s=i,a=dh.Event(o),dh(r).trigger(a,s),!a.isDefaultPrevented()):void 0;var r,o,s,a}function ih(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==fh(e,n,"ajaxBeforeSend",[t,e])&&void fh(e,n,"ajaxSend",[t,e])}function jh(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),fh(n,r,"ajaxSuccess",[e,n,t]),lh(o,e,n)}function kh(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),fh(i,o,"ajaxError",[n,i,t||e]),lh(e,n,i)}function lh(t,e,n){var i,r=n.context;n.complete.call(r,e,t),fh(n,r,"ajaxComplete",[e,n]),(i=n).global&&!--dh.active&&fh(i,null,"ajaxStop")}function mh(){}function oh(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function qh(t,e,n,i){return dh.isFunction(e)&&(i=n,n=e,e=void 0),dh.isFunction(n)||(i=n,n=void 0),{url:t,data:e,success:n,dataType:i}}var sh,th,uh=0,vh=window.document,wh=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,xh=/^(?:text|application)\/javascript/i,yh=/^(?:text|application)\/xml/i,zh="application/json",Ah="text/html",Bh=/^\s*$/,Ch=vh.createElement("a");Ch.href=window.location.href,dh.active=0,dh.ajaxJSONP=function(n,i){if(!("type"in n))return dh.ajax(n);var r,o,t=n.jsonpCallback,s=(dh.isFunction(t)?t():t)||"jsonp"+ ++uh,a=vh.createElement("script"),c=window[s],e=function(t){dh(a).triggerHandler("error",t||"abort")},u={abort:e};return i&&i.promise(u),dh(a).on("load error",function(t,e){clearTimeout(o),dh(a).off().remove(),"error"!=t.type&&r?jh(r[0],u,n,i):kh(null,e||"error",u,n,i),window[s]=c,r&&dh.isFunction(c)&&c(r[0]),c=r=void 0}),!1===ih(u,n)?e("abort"):(window[s]=function(){r=arguments},a.src=n.url.replace(/\?(.+)=\?/,"?$1="+s),vh.head.appendChild(a),0<n.timeout&&(o=setTimeout(function(){e("timeout")},n.timeout))),u},dh.ajaxSettings={type:"GET",beforeSend:mh,success:mh,error:mh,complete:mh,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:zh,xml:"application/xml, text/xml",html:Ah,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},dh.ajax=function(Ji){var Ki,ii,Mh,Li=dh.extend({},Ji||{}),Mi=dh.Deferred&&dh.Deferred();for(sh in dh.ajaxSettings)void 0===Li[sh]&&(Li[sh]=dh.ajaxSettings[sh]);(Mh=Li).global&&0==dh.active++&&fh(Mh,null,"ajaxStart"),Li.crossDomain||((Ki=vh.createElement("a")).href=Li.url,Ki.href=Ki.href,Li.crossDomain=Ch.protocol+"//"+Ch.host!=Ki.protocol+"//"+Ki.host),Li.url||(Li.url=window.location.toString()),(ii=Li).processData&&ii.data&&"string"!=dh.type(ii.data)&&(ii.data=dh.param(ii.data,ii.traditional)),!ii.data||ii.type&&"GET"!=ii.type.toUpperCase()||(ii.url=oh(ii.url,ii.data),ii.data=void 0);var Ni=Li.dataType,Oi=/\?.+=\?/.test(Li.url);if(Oi&&(Ni="jsonp"),!1!==Li.cache&&(Ji&&!0===Ji.cache||"script"!=Ni&&"jsonp"!=Ni)||(Li.url=oh(Li.url,"_="+Date.now())),"jsonp"==Ni)return Oi||(Li.url=oh(Li.url,Li.jsonp?Li.jsonp+"=?":!1===Li.jsonp?"":"callback=?")),dh.ajaxJSONP(Li,Mi);var Pi,Qi=Li.accepts[Ni],Ri={},Si=function(t,e){Ri[t.toLowerCase()]=[t,e]},Ti=/^([\w-]+:)\/\//.test(Li.url)?RegExp.$1:window.location.protocol,Ui=Li.xhr(),Vi=Ui.setRequestHeader;if(Mi&&Mi.promise(Ui),Li.crossDomain||Si("X-Requested-With","XMLHttpRequest"),Si("Accept",Qi||"*/*"),(Qi=Li.mimeType||Qi)&&(-1<Qi.indexOf(",")&&(Qi=Qi.split(",",2)[0]),Ui.overrideMimeType&&Ui.overrideMimeType(Qi)),(Li.contentType||!1!==Li.contentType&&Li.data&&"GET"!=Li.type.toUpperCase())&&Si("Content-Type",Li.contentType||"application/x-www-form-urlencoded"),Li.headers)for(th in Li.headers)Si(th,Li.headers[th]);if(Ui.setRequestHeader=Si,!(Ui.onreadystatechange=function(){if(4==Ui.readyState){Ui.onreadystatechange=mh,clearTimeout(Pi);var Zi,$i=!1;if(200<=Ui.status&&Ui.status<300||304==Ui.status||0==Ui.status&&"file:"==Ti){Ni=Ni||((fi=Li.mimeType||Ui.getResponseHeader("content-type"))&&(fi=fi.split(";",2)[0]),fi&&(fi==Ah?"html":fi==zh?"json":xh.test(fi)?"script":yh.test(fi)&&"xml")||"text"),Zi=Ui.responseText;try{"script"==Ni?eval(Zi):"xml"==Ni?Zi=Ui.responseXML:"json"==Ni&&(Zi=Bh.test(Zi)?null:dh.parseJSON(Zi))}catch(t){$i=t}$i?kh($i,"parsererror",Ui,Li,Mi):jh(Zi,Ui,Li,Mi)}else kh(Ui.statusText||null,Ui.status?"error":"abort",Ui,Li,Mi)}var fi})===ih(Ui,Li))return Ui.abort(),kh(null,"abort",Ui,Li,Mi),Ui;if(Li.xhrFields)for(th in Li.xhrFields)Ui[th]=Li.xhrFields[th];var Wi=!("async"in Li)||Li.async;for(th in Ui.open(Li.type,Li.url,Wi,Li.username,Li.password),Ri)Vi.apply(Ui,Ri[th]);return 0<Li.timeout&&(Pi=setTimeout(function(){Ui.onreadystatechange=mh,Ui.abort(),kh(null,"timeout",Ui,Li,Mi)},Li.timeout)),Ui.send(Li.data?Li.data:null),Ui},dh.get=function(){return dh.ajax(qh.apply(null,arguments))},dh.post=function(){var t=qh.apply(null,arguments);return t.type="POST",dh.ajax(t)},dh.getJSON=function(){var t=qh.apply(null,arguments);return t.dataType="json",dh.ajax(t)},dh.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),s=qh(t,e,n),a=s.success;return 1<o.length&&(s.url=o[0],i=o[1]),s.success=function(t){r.html(i?dh("<div>").html(t.replace(wh,"")).find(i):t),a&&a.apply(r,arguments)},dh.ajax(s),this};var Dh=encodeURIComponent;dh.param=function(t,e){var n=[];return n.add=function(t,e){dh.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(Dh(t)+"="+Dh(e))},function n(i,t,r,o){var s,a=dh.isArray(t),c=dh.isPlainObject(t);dh.each(t,function(t,e){s=dh.type(e),o&&(t=r?o:o+"["+(c||"object"==s||"array"==s?t:"")+"]"),!o&&a?i.add(e.name,e.value):"array"==s||!r&&"object"==s?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(o){o.fn.serializeArray=function(){var n,i,e=[],r=function(t){return t.forEach?t.forEach(r):void e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){i=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||e.checked)&&r(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=o.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(n){"__proto__"in{}||n.extend(n.zepto,{Z:function(t,e){return t=t||[],n.extend(t,n.fn),t.selector=e||"",t.__Z=!0,t},isZ:function(t){return"array"===n.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t){"use strict";function n(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var i,r,o;function e(t,e){(i(t,e)?o:r)(t,e)}"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},r=function(t,e){t.classList.add(e)},o=function(t,e){t.classList.remove(e)}):(i=function(t,e){return n(e).test(t.className)},r=function(t,e){i(t,e)||(t.className=t.className+" "+e)},o=function(t,e){t.className=t.className.replace(n(e)," ")});var s={hasClass:i,addClass:r,removeClass:o,toggleClass:e,has:i,add:r,remove:o,toggle:e};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(){"use strict";var t=document.querySelector(".post-content"),h=document.querySelector(".progress-bar");if(t&&h){var d=0,p=t.scrollHeight,m=h.querySelector(".completed"),v=h.querySelector(".remaining"),g=h.querySelector(".time-completed"),y=h.querySelector(".time-remaining");document.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop;if(h.style.bottom=d<t?"0%":"-100%",t<=p){var e=t/p,n=(100*e).toFixed(2),i=100-parseFloat(n);m.style.width=n.toString()+"%",v.style.width=i.toString()+"%";var r=60*parseInt(h.getAttribute("data-minutes")),o=parseInt(e*r),s=parseInt(o/60),a=parseInt(60*(o/60-s)),c=r-o,u=parseInt(c/60),l=parseInt(60*(c/60-u));s=s<10?"0"+s:s,a=a<10?"0"+a:a,u=u<10?"0"+u:u,l=l<10?"0"+l:l,g.innerText=s+":"+a,y.innerText=u+":"+l}else{m.style.width="100%",v.style.width="0%";var f=parseInt(h.getAttribute("data-minutes"));f=f<10?"0"+f:f,g.innerText="00:00",y.innerText=f+":00"}d=t})}}(),function(i){"use strict";var n=i.document.documentElement;function s(){var t=n.clientHeight,e=i.innerHeight;return t<e?e:t}function a(){return i.pageYOffset||n.scrollTop}function r(t,e){var n=t.offsetHeight,i=a(),r=i+s(),o=function(t){for(var e=0,n=0;isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent;);return{top:e,left:n}}(t).top;return o+n*(e=e||0)<=r&&i<=o+n-n*e}function o(t){if(t){var e=new Image;e.onload=function(){t.src=e.src},e.src=t.getAttribute("data-url")}}function t(t,e){this.el=t,this.options=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(this.defaults,e),this._init()}t.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll("#"+this.el.id+" > article")),this.itemsCount=this.items.length,this.itemsRenderedCount=0,this.didScroll=!1;var n=this;n.items.forEach(function(t,e){r(t)&&(n._checkTotalRendered(),classie.add(t,"shown"),o(t.querySelector(".preload")))}),i.addEventListener("scroll",function(){n._onScrollFn()},!1),i.addEventListener("resize",function(){n._resizeHandler()},!1)},_onScrollFn:function(){var t=this;this.didScroll||(this.didScroll=!0,setTimeout(function(){t._scrollPage()},60))},_scrollPage:function(){var i=this;this.items.forEach(function(n,t){classie.has(n,"shown")||classie.has(n,"animate")||!r(n,i.options.viewportFactor)||setTimeout(function(){var t=a()+s()/2;if(i.el.style.WebkitPerspectiveOrigin="50% "+t+"px",i.el.style.MozPerspectiveOrigin="50% "+t+"px",i.el.style.perspectiveOrigin="50% "+t+"px",i._checkTotalRendered(),i.options.minDuration&&i.options.maxDuration){var e=Math.random()*(i.options.maxDuration-i.options.minDuration)+i.options.minDuration+"s";n.style.WebkitAnimationDuration=e,n.style.MozAnimationDuration=e,n.style.animationDuration=e}classie.add(n,"animate"),o(n.querySelector(".preload"))},25)}),this.didScroll=!1},_resizeHandler:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t._scrollPage(),t.resizeTimeout=null},1e3)},_checkTotalRendered:function(){++this.itemsRenderedCount,this.itemsRenderedCount===this.itemsCount&&i.removeEventListener("scroll",this._onScrollFn)}},i.AnimOnScroll=t}(window),function(u){u.fn.simpleJekyllSearch=function(t){var r=u.extend({jsonFile:"/search.json",jsonFormat:"title,tags,categories,url,date,image",template:'<li><article><a href="{url}"><table style="width:100%"><tbody><tr><th><img src="{image}" data-url="{image}" class="preload" style="width: 100px;"></th><th style="padding-left: 15px;"> {title}</th><th> <span class="entry-date"><time datetime="{date}">{date}</time></span></th></tr></tbody></table></a></article></li>',searchResults:".search-results",limit:"10",noResults:"<p style='color:white; font-weight:bold;'>Lo sentimos! No encontramos resultados para su búsqueda :(</p>"},t),o=r.jsonFormat.split(","),s=[],i=this,a=u(r.searchResults);function c(){a.children().remove()}r.jsonFile.length&&a.length&&u.ajax({type:"GET",url:r.jsonFile,dataType:"json",success:function(t,e,n){s=t,i.keyup(function(t){var e,n,i;u(this).val().length?(n=u(this).val(),i=[],u.each(s,function(t,e){for(t=0;t<o.length;t++)void 0!==e[o[t]]&&-1!==e[o[t]].toLowerCase().indexOf(n.toLowerCase())&&(i.push(e),t=o.length)}),e=i,c(),a.append(u(r.searchResultsTitle)),e.length?u.each(e,function(t,e){if(t<r.limit){for(var n=r.template,t=0;t<o.length;t++){var i=new RegExp("{"+o[t]+"}","g");n=n.replace(i,e[o[t]])}a.append(u(n))}}):a.append(r.noResults)):c()})},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(b){"use strict";var n,e,s,w,i={},r="querySelector"in document&&"addEventListener"in b,x={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},L=function(){var n={},i=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(i=arguments[0],t++);for(var r=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i&&"[object Object]"===Object.prototype.toString.call(t[e])?n[e]=L(!0,n[e],t[e]):n[e]=t[e])};t<e;t++){r(arguments[t])}return n},E=function(t){return null===t?0:(e=t,Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)+t.offsetTop);var e};i.animateScroll=function(a,c,t){var e,n=(e=a?a.getAttribute("data-options"):null)&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{},u=L(u||x,t||{},n),l="#"===(c="#"+function(t){for(var e,n=String(t),i=n.length,r=-1,o="",s=n.charCodeAt(0);++r<i;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return o}(c.substr(1)))?b.document.documentElement:b.document.querySelector(c),f=b.pageYOffset;s||(s=b.document.querySelector(u.selectorHeader)),w||(w=E(s));var h,d,p,i,r,m=function(t,e,n){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return 0<=(i=i-e-n)?i:0}(l,w,parseInt(u.offset,10)),v=m-f,g=Math.max(b.document.body.scrollHeight,b.document.documentElement.scrollHeight,b.document.body.offsetHeight,b.document.documentElement.offsetHeight,b.document.body.clientHeight,b.document.documentElement.clientHeight),y=0;i=c,r=u.updateURL,b.history.pushState&&(r||"true"===r)&&"file:"!==b.location.protocol&&b.history.pushState(null,null,[b.location.protocol,"//",b.location.host,b.location.pathname,b.location.search,i].join(""));var o=function(){var t,e,n,i,r,o,s;d=1<(d=(y+=16)/parseInt(u.speed,10))?1:d,p=f+v*(t=u.easing,e=d,"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e),b.scrollTo(0,Math.floor(p)),i=p,r=m,o=h,s=b.pageYOffset,(i==r||s==r||b.innerHeight+s>=g)&&(clearInterval(o),l.focus(),u.callback(a,c))};0===b.pageYOffset&&b.scrollTo(0,0),h=setInterval(o,16)};var o=function(t){var e=function(t,e){var n,i,r=e.charAt(0),o="classList"in document.documentElement;for("["===r&&1<(n=(e=e.substr(1,e.length-2)).split("=")).length&&(i=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document;t=t.parentNode){if("."===r)if(o){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===r&&t.id===e.substr(1))return t;if("["===r&&t.hasAttribute(n[0])){if(!i)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}(t.target,n.selector);e&&"a"===e.tagName.toLowerCase()&&(t.preventDefault(),i.animateScroll(e,e.hash,n))},a=function(t){e||(e=setTimeout(function(){e=null,w=E(s)},66))};return i.destroy=function(){n&&(b.document.removeEventListener("click",o,!1),b.removeEventListener("resize",a,!1),w=s=e=n=null)},i.init=function(t){r&&(i.destroy(),n=L(x,t||{}),s=b.document.querySelector(n.selectorHeader),w=E(s),b.document.addEventListener("click",o,!1),s&&b.addEventListener("resize",a,!1))},i}),function(){for(var t=document.links,e=0,n=t.length;e<n;e++)t[e].hostname!=window.location.hostname&&(t[e].target="_blank")}(),function(e,t,n){e("#menu").click(function(){e("body").addClass("push-menu-to-right"),e("#sidebar").addClass("open"),e(".overlay").addClass("show")}),e("#mask").click(function(){e("body").removeClass("push-menu-to-right"),e("#sidebar").removeClass("open"),e(".overlay").removeClass("show")});var i={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};function r(){e(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.canvas.removeClass("search-overlay")}i.dothis.on("click",function(){e(".search-wrapper").toggleClass("active"),i.searchform.toggleClass("active"),i.searchform.find("input").focus(),i.canvas.toggleClass("search-overlay"),e(".search-field").simpleJekyllSearch()}),i.close.on("click",r),document.addEventListener("keyup",function(t){27==t.keyCode&&e(".search-overlay").length&&r()}),1<=document.getElementsByClassName("home").length&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1})}(Zepto,window);
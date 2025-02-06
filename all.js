/*! /resources/static/mv/public/js/jquery/jquery-1.11.0.min.js */
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/*! /resources/static/all/public/js/jquery-ui-1.11.4.min.js */
/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.css("box-sizing"),l=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=l&&u.down||u,c=function(){o._toggleComplete(i)};return"number"==typeof d&&(a=d),"string"==typeof d&&(n=d),n=n||d.easing||u.easing,a=a||d.duration||u.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:c,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,c):e.animate(this.showProps,a,n,c)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);
i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);
return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,P,I,H,z,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=Q?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],j=z.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(z.getTime()===G.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;
if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable;var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};
f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})},e.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectable",e.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));
return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tbody"===s?t._createTrPlaceholder(t.currentItem.find("tr").eq(0),e("<tr>",t.document[0]).appendTo(n)):"tr"===s?t._createTrPlaceholder(t.currentItem,n):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_createTrPlaceholder:function(t,i){var s=this;t.children().each(function(){e("<td>&#160;</td>",s.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(e,t){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(e,t,n){setTimeout(function(){o.html(e),s._trigger("load",i,r),h(n,t)},1)}).fail(function(e,t){setTimeout(function(){h(e,t)},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(t,s),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){n._delay(function(){e.data("ui-tooltip-open")&&(t&&(t.type=a),this._open(t,e,i))})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){l.of=e,o.is(":hidden")||o.position(l)}var a,o,r,h,l=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(h=s.clone(),h.removeAttr("id").find("[id]").removeAttr("id")):h=s,e("<div>").html(h).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(l.of),clearInterval(r))},e.fx.interval)),this._trigger("open",t,{tooltip:o})}},_registerCloseHandlers:function(t,i){var s={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),t&&"mouseover"!==t.type||(s.mouseleave="close"),t&&"focusin"!==t.type||(s.focusout="close"),this._on(!0,i,s)},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);return a?(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
/*! /resources/static/all/public/js/TongWen-WFU-131111.js */
/*******************************************
* 相容各大瀏覽器的簡繁切換程式
* 本程式可任意使用，但是禁止販售行為。
*
* 程式設計(WFU BLOG)：http://wayne-fu.blogspot.com/
* 字庫來源(同文堂)：http://tongwen.openfoundry.org/web.htm
***********************************/
var TongWenWFU = {};
TongWenWFU.s_2_t = {
"㑇":"㑳",
"㖞":"喎",
"㘎":"㘚",
"㤘":"㥮",
"㧏":"掆",
"㧐":"㩳",
"㧟":"擓",
"㭎":"棡",
"㳠":"澾",
"䁖":"瞜",
"䅟":"穇",
"䌷":"紬",
"䎬":"䎱",
"䏝":"膞",
"䓖":"藭",
"䙌":"䙡",
"䜣":"訢",
"䜩":"讌",
"䞍":"䝼",
"䥺":"釾",
"䥽":"鏺",
"䦂":"䥇",
"䦃":"鐯",
"䦅":"鐥",
"䦆":"钁",
"䦶":"䦛",
"䦷":"䦟",
"䲟":"鮣",
"䲡":"鰌",
"䲢":"鰧",
"䲣":"䱷",
"䴓":"鳾",
"䴔":"鵁",
"䴕":"鴷",
"䴖":"鶄",
"䴗":"鶪",
"䴘":"鷉",
"䴙":"鸊",
"䶮":"龑",
"万":"萬",
"与":"與",
"专":"專",
"业":"業",
"丛":"叢",
"东":"東",
"丝":"絲",
"丢":"丟",
"两":"兩",
"严":"嚴",
"丧":"喪",
"个":"個",
"丰":"豐",
"临":"臨",
"为":"為",
"丽":"麗",
"举":"舉",
"么":"麼",
"义":"義",
"乌":"烏",
"乐":"樂",
"乔":"喬",
"习":"習",
"乡":"鄉",
"书":"書",
"买":"買",
"乱":"亂",
"争":"爭",
"于":"於",
"亏":"虧",
"云":"雲",
"亘":"亙",
"亚":"亞",
"产":"產",
"亩":"畝",
"亲":"親",
"亵":"褻",
"亿":"億",
"仅":"僅",
"仆":"僕",
"从":"從",
"仑":"侖",
"仓":"倉",
"仪":"儀",
"们":"們",
"价":"價",
"众":"眾",
"优":"優",
"会":"會",
"伛":"傴",
"伞":"傘",
"伟":"偉",
"传":"傳",
"伤":"傷",
"伥":"倀",
"伦":"倫",
"伧":"傖",
"伪":"偽",
"伫":"佇",
"伲":"你",
"体":"體",
"佣":"傭",
"佥":"僉",
"侠":"俠",
"侣":"侶",
"侥":"僥",
"侦":"偵",
"侧":"側",
"侨":"僑",
"侩":"儈",
"侪":"儕",
"侬":"儂",
"俣":"俁",
"俦":"儔",
"俨":"儼",
"俩":"倆",
"俪":"儷",
"俭":"儉",
"倮":"裸",
"债":"債",
"倾":"傾",
"偬":"傯",
"偻":"僂",
"偾":"僨",
"偿":"償",
"傥":"儻",
"傧":"儐",
"储":"儲",
"傩":"儺",
"儿":"兒",
"兑":"兌",
"兖":"兗",
"党":"黨",
"兰":"蘭",
"关":"關",
"兴":"興",
"兹":"茲",
"养":"養",
"兽":"獸",
"冁":"囅",
"内":"內",
"冈":"岡",
"册":"冊",
"写":"寫",
"军":"軍",
"农":"農",
"冯":"馮",
"冲":"沖",
"决":"決",
"况":"況",
"冻":"凍",
"净":"淨",
"凄":"淒",
"凇":"淞",
"凉":"涼",
"减":"減",
"凑":"湊",
"凛":"凜",
"几":"幾",
"凤":"鳳",
"処":"處",
"凫":"鳧",
"凭":"憑",
"凯":"凱",
"击":"擊",
"凼":"幽",
"凿":"鑿",
"刍":"芻",
"划":"劃",
"刘":"劉",
"则":"則",
"刚":"剛",
"创":"創",
"删":"刪",
"别":"別",
"刬":"剗",
"刭":"剄",
"刹":"剎",
"刽":"劊",
"刿":"劌",
"剀":"剴",
"剂":"劑",
"剐":"剮",
"剑":"劍",
"剥":"剝",
"剧":"劇",
"剳":"劄",
"劝":"勸",
"办":"辦",
"务":"務",
"劢":"勱",
"动":"動",
"励":"勵",
"劲":"勁",
"劳":"勞",
"势":"勢",
"勋":"勳",
"勚":"勩",
"勛":"勳",
"勦":"剿",
"匀":"勻",
"匦":"匭",
"匮":"匱",
"区":"區",
"医":"醫",
"华":"華",
"协":"協",
"单":"單",
"卖":"賣",
"占":"佔",
"卢":"盧",
"卤":"鹵",
"卧":"臥",
"卫":"衛",
"却":"卻",
"卺":"巹",
"厂":"廠",
"厅":"廳",
"历":"歷",
"厉":"厲",
"压":"壓",
"厌":"厭",
"厍":"厙",
"厕":"廁",
"厘":"釐",
"厢":"廂",
"厣":"厴",
"厦":"廈",
"厨":"廚",
"厩":"廄",
"厮":"廝",
"县":"縣",
"叁":"參",
"参":"參",
"叆":"靉",
"叇":"靆",
"双":"雙",
"发":"發",
"变":"變",
"叙":"敘",
"叠":"疊",
"叶":"葉",
"号":"號",
"叹":"嘆",
"叽":"嘰",
"吁":"籲",
"后":"後",
"吓":"嚇",
"吕":"呂",
"吗":"嗎",
"吨":"噸",
"听":"聽",
"启":"啟",
"吴":"吳",
"呐":"吶",
"呒":"嘸",
"呓":"囈",
"呕":"嘔",
"呖":"嚦",
"呗":"唄",
"员":"員",
"呙":"咼",
"呛":"嗆",
"呜":"嗚",
"咏":"詠",
"咙":"嚨",
"咛":"嚀",
"咝":"噝",
"哌":"呱",
"响":"響",
"哑":"啞",
"哒":"噠",
"哓":"嘵",
"哔":"嗶",
"哕":"噦",
"哗":"嘩",
"哙":"噲",
"哜":"嚌",
"哝":"噥",
"哟":"喲",
"唛":"嘜",
"唝":"嗊",
"唠":"嘮",
"唡":"啢",
"唢":"嗩",
"唤":"喚",
"啓":"啟",
"啧":"嘖",
"啬":"嗇",
"啭":"囀",
"啮":"齧",
"啰":"囉",
"啸":"嘯",
"喷":"噴",
"喽":"嘍",
"喾":"嚳",
"嗫":"囁",
"嗬":"呵",
"嗳":"噯",
"嘘":"噓",
"嘤":"嚶",
"嘱":"囑",
"噜":"嚕",
"嚣":"囂",
"嚮":"向",
"团":"團",
"园":"園",
"囯":"國",
"囱":"囪",
"围":"圍",
"囵":"圇",
"国":"國",
"图":"圖",
"圆":"圓",
"圣":"聖",
"圹":"壙",
"场":"場",
"坂":"阪",
"坏":"壞",
"块":"塊",
"坚":"堅",
"坛":"壇",
"坜":"壢",
"坝":"壩",
"坞":"塢",
"坟":"墳",
"坠":"墜",
"垄":"壟",
"垅":"壟",
"垆":"壚",
"垒":"壘",
"垦":"墾",
"垩":"堊",
"垫":"墊",
"垭":"埡",
"垲":"塏",
"垴":"堖",
"埘":"塒",
"埙":"壎",
"埚":"堝",
"堑":"塹",
"堕":"墮",
"墒":"墑",
"墙":"牆",
"壮":"壯",
"声":"聲",
"壳":"殼",
"壶":"壺",
"处":"處",
"备":"備",
"复":"復",
"够":"夠",
"头":"頭",
"夸":"誇",
"夹":"夾",
"夺":"奪",
"奁":"奩",
"奂":"奐",
"奋":"奮",
"奖":"獎",
"奥":"奧",
"奬":"獎",
"妆":"妝",
"妇":"婦",
"妈":"媽",
"妩":"嫵",
"妪":"嫗",
"妫":"媯",
"姗":"姍",
"娄":"婁",
"娅":"婭",
"娆":"嬈",
"娇":"嬌",
"娈":"孌",
"娱":"娛",
"娲":"媧",
"娴":"嫻",
"婳":"嫿",
"婴":"嬰",
"婵":"嬋",
"婶":"嬸",
"媪":"媼",
"嫒":"嬡",
"嫔":"嬪",
"嫱":"嬙",
"嬷":"嬤",
"孙":"孫",
"学":"學",
"孪":"孿",
"宁":"寧",
"宝":"寶",
"实":"實",
"宠":"寵",
"审":"審",
"宪":"憲",
"宫":"宮",
"宽":"寬",
"宾":"賓",
"寀":"采",
"寝":"寢",
"对":"對",
"寻":"尋",
"导":"導",
"寿":"壽",
"将":"將",
"尔":"爾",
"尘":"塵",
"尜":"嘎",
"尝":"嘗",
"尧":"堯",
"尴":"尷",
"尸":"屍",
"尽":"盡",
"层":"層",
"屉":"屜",
"届":"屆",
"属":"屬",
"屡":"屢",
"屦":"屨",
"屿":"嶼",
"岁":"歲",
"岂":"豈",
"岖":"嶇",
"岗":"崗",
"岘":"峴",
"岚":"嵐",
"岛":"島",
"岭":"嶺",
"岽":"崠",
"岿":"巋",
"峃":"嶨",
"峄":"嶧",
"峡":"峽",
"峣":"嶢",
"峤":"嶠",
"峥":"崢",
"峦":"巒",
"峯":"峰",
"崂":"嶗",
"崃":"崍",
"崐":"崑",
"崭":"嶄",
"嵘":"嶸",
"嵚":"嶔",
"嵛":"崳",
"嵝":"嶁",
"巅":"巔",
"巌":"巖",
"巩":"鞏",
"巯":"巰",
"币":"幣",
"帅":"帥",
"师":"師",
"帏":"幃",
"帐":"帳",
"帘":"簾",
"帜":"幟",
"带":"帶",
"帧":"幀",
"帮":"幫",
"帱":"幬",
"帻":"幘",
"帼":"幗",
"幂":"冪",
"幵":"開",
"并":"並",
"幷":"並",
"广":"廣",
"庄":"莊",
"庆":"慶",
"庐":"廬",
"庑":"廡",
"库":"庫",
"应":"應",
"庙":"廟",
"庞":"龐",
"废":"廢",
"庼":"廎",
"廪":"廩",
"开":"開",
"异":"異",
"弃":"棄",
"弑":"弒",
"张":"張",
"弥":"彌",
"弪":"弳",
"弯":"彎",
"弹":"彈",
"强":"強",
"归":"歸",
"当":"當",
"彔":"录",
"录":"錄",
"彚":"彙",
"彦":"彥",
"彻":"徹",
"径":"徑",
"徕":"徠",
"忆":"憶",
"忏":"懺",
"忧":"憂",
"忾":"愾",
"怀":"懷",
"态":"態",
"怂":"慫",
"怃":"憮",
"怄":"慪",
"怅":"悵",
"怆":"愴",
"怜":"憐",
"总":"總",
"怼":"懟",
"怿":"懌",
"恋":"戀",
"恒":"恆",
"恳":"懇",
"恶":"惡",
"恸":"慟",
"恹":"懨",
"恺":"愷",
"恻":"惻",
"恼":"惱",
"恽":"惲",
"悦":"悅",
"悫":"愨",
"悬":"懸",
"悭":"慳",
"悯":"憫",
"惊":"驚",
"惧":"懼",
"惨":"慘",
"惩":"懲",
"惫":"憊",
"惬":"愜",
"惭":"慚",
"惮":"憚",
"惯":"慣",
"愠":"慍",
"愤":"憤",
"愦":"憒",
"愿":"願",
"慑":"懾",
"懑":"懣",
"懒":"懶",
"懔":"懍",
"戆":"戇",
"戋":"戔",
"戏":"戲",
"戗":"戧",
"战":"戰",
"戬":"戩",
"户":"戶",
"扑":"撲",
"执":"執",
"扩":"擴",
"扪":"捫",
"扫":"掃",
"扬":"揚",
"扰":"擾",
"抚":"撫",
"抛":"拋",
"抟":"摶",
"抠":"摳",
"抡":"掄",
"抢":"搶",
"护":"護",
"报":"報",
"担":"擔",
"拟":"擬",
"拢":"攏",
"拣":"揀",
"拥":"擁",
"拦":"攔",
"拧":"擰",
"拨":"撥",
"择":"擇",
"挂":"掛",
"挚":"摯",
"挛":"攣",
"挜":"掗",
"挝":"撾",
"挞":"撻",
"挟":"挾",
"挠":"撓",
"挡":"擋",
"挢":"撟",
"挣":"掙",
"挤":"擠",
"挥":"揮",
"挦":"撏",
"捜":"搜",
"捞":"撈",
"损":"損",
"捡":"撿",
"换":"換",
"捣":"搗",
"据":"據",
"掳":"擄",
"掴":"摑",
"掷":"擲",
"掸":"撣",
"掺":"摻",
"掼":"摜",
"揽":"攬",
"揿":"撳",
"搀":"攙",
"搁":"擱",
"搂":"摟",
"搅":"攪",
"携":"攜",
"摄":"攝",
"摅":"攄",
"摆":"擺",
"摇":"搖",
"摈":"擯",
"摊":"攤",
"撄":"攖",
"撑":"撐",
"撵":"攆",
"撷":"擷",
"撸":"擼",
"撺":"攛",
"擀":"搟",
"擞":"擻",
"攒":"攢",
"敌":"敵",
"敛":"斂",
"数":"數",
"斋":"齋",
"斓":"斕",
"斩":"斬",
"断":"斷",
"无":"無",
"旧":"舊",
"时":"時",
"旷":"曠",
"旸":"暘",
"昙":"曇",
"昵":"暱",
"昼":"晝",
"昽":"曨",
"显":"顯",
"晋":"晉",
"晒":"曬",
"晓":"曉",
"晔":"曄",
"晕":"暈",
"晖":"暉",
"暂":"暫",
"暧":"曖",
"暸":"瞭",
"朮":"術",
"术":"術",
"机":"機",
"杀":"殺",
"杂":"雜",
"权":"權",
"杆":"桿",
"杠":"槓",
"条":"條",
"来":"來",
"杨":"楊",
"杩":"榪",
"杰":"傑",
"极":"極",
"构":"構",
"枞":"樅",
"枢":"樞",
"枣":"棗",
"枥":"櫪",
"枧":"梘",
"枨":"棖",
"枪":"槍",
"枫":"楓",
"枭":"梟",
"柜":"櫃",
"柠":"檸",
"柽":"檉",
"栀":"梔",
"栅":"柵",
"标":"標",
"栈":"棧",
"栉":"櫛",
"栊":"櫳",
"栋":"棟",
"栌":"櫨",
"栎":"櫟",
"栏":"欄",
"树":"樹",
"栖":"棲",
"样":"樣",
"栾":"欒",
"桔":"橘",
"桠":"椏",
"桡":"橈",
"桢":"楨",
"档":"檔",
"桤":"榿",
"桥":"橋",
"桦":"樺",
"桧":"檜",
"桨":"槳",
"桩":"樁",
"梦":"夢",
"检":"檢",
"棂":"櫺",
"椁":"槨",
"椟":"櫝",
"椠":"槧",
"椤":"欏",
"椭":"橢",
"楼":"樓",
"榄":"欖",
"榇":"櫬",
"榈":"櫚",
"榉":"櫸",
"榘":"矩",
"槚":"檟",
"槛":"檻",
"槟":"檳",
"槠":"櫧",
"槼":"規",
"横":"橫",
"樯":"檣",
"樱":"櫻",
"橥":"櫫",
"橱":"櫥",
"橹":"櫓",
"橼":"櫞",
"檐":"簷",
"檩":"檁",
"欢":"歡",
"欤":"歟",
"欧":"歐",
"歎":"嘆",
"歼":"殲",
"殁":"歿",
"殇":"殤",
"残":"殘",
"殒":"殞",
"殓":"殮",
"殚":"殫",
"殡":"殯",
"殴":"毆",
"毁":"毀",
"毂":"轂",
"毕":"畢",
"毙":"斃",
"毡":"氈",
"毵":"毿",
"氇":"氌",
"气":"氣",
"氢":"氫",
"氩":"氬",
"氲":"氳",
"氽":"汆",
"汇":"匯",
"汉":"漢",
"汤":"湯",
"汹":"洶",
"沟":"溝",
"没":"沒",
"沣":"灃",
"沤":"漚",
"沥":"瀝",
"沦":"淪",
"沧":"滄",
"沨":"渢",
"沩":"溈",
"沪":"滬",
"沲":"沱",
"泄":"洩",
"泞":"濘",
"泪":"淚",
"泶":"澩",
"泷":"瀧",
"泸":"瀘",
"泺":"濼",
"泻":"瀉",
"泼":"潑",
"泽":"澤",
"泾":"涇",
"洁":"潔",
"洒":"灑",
"洼":"窪",
"浃":"浹",
"浅":"淺",
"浆":"漿",
"浇":"澆",
"浈":"湞",
"浉":"溮",
"浊":"濁",
"测":"測",
"浍":"澮",
"济":"濟",
"浏":"瀏",
"浐":"滻",
"浑":"渾",
"浒":"滸",
"浓":"濃",
"浔":"潯",
"浕":"濜",
"浜":"濱",
"涌":"湧",
"涛":"濤",
"涝":"澇",
"涞":"淶",
"涟":"漣",
"涠":"潿",
"涡":"渦",
"涢":"溳",
"涣":"渙",
"涤":"滌",
"润":"潤",
"涧":"澗",
"涨":"漲",
"涩":"澀",
"渊":"淵",
"渌":"淥",
"渍":"漬",
"渎":"瀆",
"渐":"漸",
"渑":"澠",
"渔":"漁",
"渖":"瀋",
"渗":"滲",
"温":"溫",
"湾":"灣",
"湿":"濕",
"溃":"潰",
"溅":"濺",
"溆":"漵",
"溇":"漊",
"溼":"濕",
"滗":"潷",
"滚":"滾",
"滞":"滯",
"滟":"灩",
"滠":"灄",
"满":"滿",
"滢":"瀅",
"滤":"濾",
"滥":"濫",
"滦":"灤",
"滨":"濱",
"滩":"灘",
"滪":"澦",
"潆":"瀠",
"潇":"瀟",
"潋":"瀲",
"潍":"濰",
"潜":"潛",
"潴":"瀦",
"澜":"瀾",
"濑":"瀨",
"濒":"瀕",
"灏":"灝",
"灭":"滅",
"灯":"燈",
"灵":"靈",
"灾":"災",
"灿":"燦",
"炀":"煬",
"炉":"爐",
"炖":"燉",
"炜":"煒",
"炝":"熗",
"炤":"照",
"点":"點",
"炼":"煉",
"炽":"熾",
"烁":"爍",
"烂":"爛",
"烃":"烴",
"烛":"燭",
"烟":"煙",
"烦":"煩",
"烧":"燒",
"烨":"燁",
"烩":"燴",
"烫":"燙",
"烬":"燼",
"热":"熱",
"焕":"煥",
"焖":"燜",
"焘":"燾",
"煅":"鍛",
"爱":"愛",
"爲":"為",
"爷":"爺",
"牀":"床",
"牍":"牘",
"牦":"犛",
"牵":"牽",
"牺":"犧",
"犊":"犢",
"状":"狀",
"犷":"獷",
"犸":"獁",
"犹":"猶",
"狈":"狽",
"狝":"獮",
"狞":"獰",
"独":"獨",
"狭":"狹",
"狮":"獅",
"狯":"獪",
"狰":"猙",
"狱":"獄",
"狲":"猻",
"猃":"獫",
"猎":"獵",
"猕":"獼",
"猡":"玀",
"猪":"豬",
"猫":"貓",
"猬":"蝟",
"献":"獻",
"獃":"呆",
"獭":"獺",
"玑":"璣",
"玛":"瑪",
"玮":"瑋",
"环":"環",
"现":"現",
"玱":"瑲",
"玺":"璽",
"珉":"玟",
"珏":"玨",
"珐":"琺",
"珑":"瓏",
"珲":"琿",
"琎":"璡",
"琏":"璉",
"琐":"瑣",
"琯":"管",
"琼":"瓊",
"瑶":"瑤",
"瑷":"璦",
"璎":"瓔",
"瓒":"瓚",
"瓮":"甕",
"瓯":"甌",
"産":"產",
"电":"電",
"画":"畫",
"畅":"暢",
"畲":"畬",
"畴":"疇",
"疖":"癤",
"疗":"療",
"疟":"瘧",
"疠":"癘",
"疡":"瘍",
"疬":"癧",
"疮":"瘡",
"疯":"瘋",
"疱":"皰",
"疴":"痾",
"痈":"癰",
"痉":"痙",
"痒":"癢",
"痖":"瘂",
"痨":"癆",
"痪":"瘓",
"痫":"癇",
"痹":"痺",
"瘅":"癉",
"瘗":"瘞",
"瘘":"瘻",
"瘪":"癟",
"瘫":"癱",
"瘾":"癮",
"瘿":"癭",
"癞":"癩",
"癡":"痴",
"癣":"癬",
"癫":"癲",
"皑":"皚",
"皰":"疱",
"皱":"皺",
"皲":"皸",
"盏":"盞",
"盐":"鹽",
"监":"監",
"盖":"蓋",
"盗":"盜",
"盘":"盤",
"眍":"瞘",
"眎":"視",
"眦":"眥",
"眬":"矓",
"着":"著",
"睁":"睜",
"睐":"睞",
"睑":"瞼",
"瞒":"瞞",
"瞩":"矚",
"矫":"矯",
"矶":"磯",
"矾":"礬",
"矿":"礦",
"砀":"碭",
"码":"碼",
"砖":"磚",
"砗":"硨",
"砚":"硯",
"砜":"碸",
"砺":"礪",
"砻":"礱",
"砾":"礫",
"础":"礎",
"硕":"碩",
"硖":"硤",
"硗":"磽",
"硙":"磑",
"硚":"礄",
"确":"確",
"硷":"鹼",
"碍":"礙",
"碛":"磧",
"碜":"磣",
"碱":"鹼",
"礡":"礴",
"礼":"禮",
"祎":"禕",
"祯":"禎",
"祷":"禱",
"祸":"禍",
"禀":"稟",
"禄":"祿",
"禅":"禪",
"禰":"祢",
"离":"離",
"秃":"禿",
"秆":"稈",
"种":"種",
"积":"積",
"称":"稱",
"秽":"穢",
"税":"稅",
"稣":"穌",
"稭":"秸",
"稳":"穩",
"穑":"穡",
"穷":"窮",
"窃":"竊",
"窍":"竅",
"窎":"窵",
"窑":"窯",
"窜":"竄",
"窝":"窩",
"窥":"窺",
"窦":"竇",
"窭":"窶",
"竖":"豎",
"竞":"競",
"笃":"篤",
"笋":"筍",
"笔":"筆",
"笕":"筧",
"笺":"箋",
"笼":"籠",
"笾":"籩",
"筑":"築",
"筚":"篳",
"筛":"篩",
"筝":"箏",
"筹":"籌",
"签":"簽",
"简":"簡",
"箓":"籙",
"箦":"簀",
"箧":"篋",
"箨":"籜",
"箩":"籮",
"箪":"簞",
"箫":"簫",
"篑":"簣",
"篓":"簍",
"篮":"籃",
"篱":"籬",
"簖":"籪",
"籁":"籟",
"籴":"糴",
"类":"類",
"籼":"秈",
"粜":"糶",
"粝":"糲",
"粤":"粵",
"粪":"糞",
"粮":"糧",
"糁":"糝",
"糇":"餱",
"糍":"餈",
"紥":"紮",
"紧":"緊",
"絷":"縶",
"綫":"線",
"纠":"糾",
"纡":"紆",
"红":"紅",
"纣":"紂",
"纤":"纖",
"纥":"紇",
"约":"約",
"级":"級",
"纨":"紈",
"纩":"纊",
"纪":"紀",
"纫":"紉",
"纬":"緯",
"纭":"紜",
"纮":"紘",
"纯":"純",
"纰":"紕",
"纱":"紗",
"纲":"綱",
"纳":"納",
"纴":"紝",
"纵":"縱",
"纶":"綸",
"纷":"紛",
"纸":"紙",
"纹":"紋",
"纺":"紡",
"纼":"紖",
"纽":"紐",
"纾":"紓",
"线":"線",
"绀":"紺",
"绁":"紲",
"绂":"紱",
"练":"練",
"组":"組",
"绅":"紳",
"细":"細",
"织":"織",
"终":"終",
"绉":"縐",
"绊":"絆",
"绋":"紼",
"绌":"絀",
"绍":"紹",
"绎":"繹",
"经":"經",
"绐":"紿",
"绑":"綁",
"绒":"絨",
"结":"結",
"绔":"絝",
"绕":"繞",
"绖":"絰",
"绗":"絎",
"绘":"繪",
"给":"給",
"绚":"絢",
"绛":"絳",
"络":"絡",
"绝":"絕",
"绞":"絞",
"统":"統",
"绠":"綆",
"绡":"綃",
"绢":"絹",
"绣":"繡",
"绥":"綏",
"绦":"絛",
"继":"繼",
"绨":"綈",
"绩":"績",
"绪":"緒",
"绫":"綾",
"续":"續",
"绮":"綺",
"绯":"緋",
"绰":"綽",
"绱":"緔",
"绲":"緄",
"绳":"繩",
"维":"維",
"绵":"綿",
"绶":"綬",
"绷":"繃",
"绸":"綢",
"绺":"綹",
"绻":"綣",
"综":"綜",
"绽":"綻",
"绾":"綰",
"绿":"綠",
"缀":"綴",
"缁":"緇",
"缂":"緙",
"缃":"緗",
"缄":"緘",
"缅":"緬",
"缆":"纜",
"缇":"緹",
"缈":"緲",
"缉":"緝",
"缊":"縕",
"缋":"繢",
"缌":"緦",
"缍":"綞",
"缎":"緞",
"缏":"緶",
"缑":"緱",
"缒":"縋",
"缓":"緩",
"缔":"締",
"缕":"縷",
"编":"編",
"缗":"緡",
"缘":"緣",
"缙":"縉",
"缚":"縛",
"缛":"縟",
"缜":"縝",
"缝":"縫",
"缞":"縗",
"缟":"縞",
"缠":"纏",
"缡":"縭",
"缢":"縊",
"缣":"縑",
"缤":"繽",
"缥":"縹",
"缦":"縵",
"缧":"縲",
"缨":"纓",
"缩":"縮",
"缪":"繆",
"缫":"繅",
"缬":"纈",
"缭":"繚",
"缮":"繕",
"缯":"繒",
"缰":"韁",
"缱":"繾",
"缲":"繰",
"缳":"繯",
"缴":"繳",
"缵":"纘",
"罂":"罌",
"罎":"罈",
"网":"網",
"罗":"羅",
"罚":"罰",
"罢":"罷",
"罴":"羆",
"羁":"羈",
"羟":"羥",
"羡":"羨",
"翘":"翹",
"翚":"翬",
"耢":"耮",
"耧":"耬",
"耸":"聳",
"耻":"恥",
"聂":"聶",
"聋":"聾",
"职":"職",
"聍":"聹",
"联":"聯",
"聩":"聵",
"聪":"聰",
"肀":"聿",
"肃":"肅",
"肠":"腸",
"肤":"膚",
"肮":"骯",
"肾":"腎",
"肿":"腫",
"胀":"脹",
"胁":"脅",
"胆":"膽",
"胜":"勝",
"胧":"朧",
"胨":"腖",
"胪":"臚",
"胫":"脛",
"胶":"膠",
"脉":"脈",
"脍":"膾",
"脏":"髒",
"脐":"臍",
"脑":"腦",
"脓":"膿",
"脔":"臠",
"脚":"腳",
"脣":"唇",
"脩":"修",
"脱":"脫",
"脶":"腡",
"脸":"臉",
"腊":"臘",
"腌":"醃",
"腘":"膕",
"腭":"顎",
"腻":"膩",
"腼":"靦",
"腽":"膃",
"腾":"騰",
"膑":"臏",
"膻":"羶",
"臜":"臢",
"舆":"輿",
"舣":"艤",
"舰":"艦",
"舱":"艙",
"舻":"艫",
"艰":"艱",
"艳":"豔",
"艺":"藝",
"节":"節",
"芈":"羋",
"芗":"薌",
"芜":"蕪",
"芦":"蘆",
"苁":"蓯",
"苇":"葦",
"苈":"藶",
"苋":"莧",
"苌":"萇",
"苍":"蒼",
"苎":"苧",
"苏":"蘇",
"苹":"蘋",
"茎":"莖",
"茏":"蘢",
"茑":"蔦",
"茔":"塋",
"茕":"煢",
"茧":"繭",
"荆":"荊",
"荐":"薦",
"荚":"莢",
"荛":"蕘",
"荜":"蓽",
"荞":"蕎",
"荟":"薈",
"荠":"薺",
"荡":"蕩",
"荣":"榮",
"荤":"葷",
"荥":"滎",
"荦":"犖",
"荧":"熒",
"荨":"蕁",
"荩":"藎",
"荪":"蓀",
"荫":"蔭",
"荬":"蕒",
"荭":"葒",
"荮":"葤",
"药":"藥",
"莅":"蒞",
"莱":"萊",
"莲":"蓮",
"莳":"蒔",
"莴":"萵",
"莶":"薟",
"获":"獲",
"莸":"蕕",
"莹":"瑩",
"莺":"鶯",
"莼":"蓴",
"萚":"蘀",
"萝":"蘿",
"萤":"螢",
"营":"營",
"萦":"縈",
"萧":"蕭",
"萨":"薩",
"著":"著",
"葯":"藥",
"葱":"蔥",
"蒇":"蕆",
"蒉":"蕢",
"蒋":"蔣",
"蒌":"蔞",
"蓝":"藍",
"蓟":"薊",
"蓠":"蘺",
"蓣":"蕷",
"蓥":"鎣",
"蓦":"驀",
"蔴":"麻",
"蔷":"薔",
"蔹":"蘞",
"蔺":"藺",
"蔼":"藹",
"蕲":"蘄",
"蕴":"蘊",
"薮":"藪",
"藓":"蘚",
"蘖":"蘗",
"虏":"虜",
"虑":"慮",
"虚":"虛",
"虫":"蟲",
"虬":"虯",
"虮":"蟣",
"虱":"蝨",
"虽":"雖",
"虾":"蝦",
"虿":"蠆",
"蚀":"蝕",
"蚁":"蟻",
"蚂":"螞",
"蚕":"蠶",
"蚬":"蜆",
"蛊":"蠱",
"蛎":"蠣",
"蛏":"蟶",
"蛮":"蠻",
"蛰":"蟄",
"蛱":"蛺",
"蛲":"蟯",
"蛳":"螄",
"蛴":"蠐",
"蜕":"蛻",
"蜗":"蝸",
"蜡":"蠟",
"蝇":"蠅",
"蝈":"蟈",
"蝉":"蟬",
"蝎":"蠍",
"蝰":"虺",
"蝼":"螻",
"蝾":"蠑",
"螨":"蟎",
"蟏":"蠨",
"蟮":"蟺",
"衅":"釁",
"衆":"眾",
"衔":"銜",
"补":"補",
"衬":"襯",
"衮":"袞",
"袄":"襖",
"袅":"裊",
"袜":"襪",
"袭":"襲",
"装":"裝",
"裆":"襠",
"裏":"裡",
"裢":"褳",
"裣":"襝",
"裤":"褲",
"裥":"襉",
"褛":"褸",
"褴":"襤",
"见":"見",
"观":"觀",
"觃":"覎",
"规":"規",
"觅":"覓",
"视":"視",
"觇":"覘",
"览":"覽",
"觉":"覺",
"觊":"覬",
"觋":"覡",
"觌":"覿",
"觎":"覦",
"觏":"覯",
"觐":"覲",
"觑":"覷",
"觞":"觴",
"触":"觸",
"觯":"觶",
"証":"證",
"誉":"譽",
"誊":"謄",
"计":"計",
"订":"訂",
"讣":"訃",
"认":"認",
"讥":"譏",
"讦":"訐",
"讧":"訌",
"讨":"討",
"让":"讓",
"讪":"訕",
"讫":"訖",
"训":"訓",
"议":"議",
"讯":"訊",
"记":"記",
"讲":"講",
"讳":"諱",
"讴":"謳",
"讵":"詎",
"讶":"訝",
"讷":"訥",
"许":"許",
"讹":"訛",
"论":"論",
"讻":"訩",
"讼":"訟",
"讽":"諷",
"设":"設",
"访":"訪",
"诀":"訣",
"证":"證",
"诂":"詁",
"诃":"訶",
"评":"評",
"诅":"詛",
"识":"識",
"诇":"詗",
"诈":"詐",
"诉":"訴",
"诊":"診",
"诋":"詆",
"诌":"謅",
"词":"詞",
"诎":"詘",
"诏":"詔",
"译":"譯",
"诒":"詒",
"诓":"誆",
"诔":"誄",
"试":"試",
"诖":"詿",
"诗":"詩",
"诘":"詰",
"诙":"詼",
"诚":"誠",
"诛":"誅",
"诜":"詵",
"话":"話",
"诞":"誕",
"诟":"詬",
"诠":"詮",
"诡":"詭",
"询":"詢",
"诣":"詣",
"诤":"諍",
"该":"該",
"详":"詳",
"诧":"詫",
"诨":"諢",
"诩":"詡",
"诫":"誡",
"诬":"誣",
"语":"語",
"诮":"誚",
"误":"誤",
"诰":"誥",
"诱":"誘",
"诲":"誨",
"诳":"誑",
"说":"說",
"诵":"誦",
"诶":"誒",
"请":"請",
"诸":"諸",
"诹":"諏",
"诺":"諾",
"读":"讀",
"诼":"諑",
"诽":"誹",
"课":"課",
"诿":"諉",
"谀":"諛",
"谁":"誰",
"谂":"諗",
"调":"調",
"谄":"諂",
"谅":"諒",
"谆":"諄",
"谇":"誶",
"谈":"談",
"谉":"讅",
"谊":"誼",
"谋":"謀",
"谌":"諶",
"谍":"諜",
"谎":"謊",
"谏":"諫",
"谐":"諧",
"谑":"謔",
"谒":"謁",
"谓":"謂",
"谔":"諤",
"谕":"諭",
"谖":"諼",
"谗":"讒",
"谘":"諮",
"谙":"諳",
"谚":"諺",
"谛":"諦",
"谜":"謎",
"谝":"諞",
"谞":"諝",
"谟":"謨",
"谠":"讜",
"谡":"謖",
"谢":"謝",
"谣":"謠",
"谤":"謗",
"谥":"謚",
"谦":"謙",
"谧":"謐",
"谨":"謹",
"谩":"謾",
"谪":"謫",
"谫":"譾",
"谬":"謬",
"谭":"譚",
"谮":"譖",
"谯":"譙",
"谰":"讕",
"谱":"譜",
"谲":"譎",
"谳":"讞",
"谴":"譴",
"谵":"譫",
"谶":"讖",
"豮":"豶",
"贜":"贓",
"贝":"貝",
"贞":"貞",
"负":"負",
"贡":"貢",
"财":"財",
"责":"責",
"贤":"賢",
"败":"敗",
"账":"賬",
"货":"貨",
"质":"質",
"贩":"販",
"贪":"貪",
"贫":"貧",
"贬":"貶",
"购":"購",
"贮":"貯",
"贯":"貫",
"贰":"貳",
"贱":"賤",
"贲":"賁",
"贳":"貰",
"贴":"貼",
"贵":"貴",
"贶":"貺",
"贷":"貸",
"贸":"貿",
"费":"費",
"贺":"賀",
"贻":"貽",
"贼":"賊",
"贽":"贄",
"贾":"賈",
"贿":"賄",
"赀":"貲",
"赁":"賃",
"赂":"賂",
"赃":"贓",
"资":"資",
"赅":"賅",
"赆":"贐",
"赇":"賕",
"赈":"賑",
"赉":"賚",
"赊":"賒",
"赋":"賦",
"赌":"賭",
"赍":"齎",
"赎":"贖",
"赏":"賞",
"赐":"賜",
"赒":"賙",
"赓":"賡",
"赔":"賠",
"赕":"賧",
"赖":"賴",
"赗":"賵",
"赘":"贅",
"赙":"賻",
"赚":"賺",
"赛":"賽",
"赜":"賾",
"赝":"贋",
"赞":"贊",
"赟":"贇",
"赠":"贈",
"赡":"贍",
"赢":"贏",
"赣":"贛",
"赵":"趙",
"赶":"趕",
"趋":"趨",
"趱":"趲",
"趸":"躉",
"跃":"躍",
"跄":"蹌",
"跞":"躒",
"践":"踐",
"跷":"蹺",
"跸":"蹕",
"跹":"躚",
"跻":"躋",
"踊":"踴",
"踌":"躊",
"踪":"蹤",
"踬":"躓",
"踯":"躑",
"蹑":"躡",
"蹒":"蹣",
"蹰":"躕",
"蹿":"躥",
"躏":"躪",
"躜":"躦",
"躯":"軀",
"躰":"體",
"车":"車",
"轧":"軋",
"轨":"軌",
"轩":"軒",
"轫":"軔",
"转":"轉",
"轭":"軛",
"轮":"輪",
"软":"軟",
"轰":"轟",
"轱":"軲",
"轲":"軻",
"轳":"轤",
"轴":"軸",
"轵":"軹",
"轶":"軼",
"轷":"軤",
"轸":"軫",
"轹":"轢",
"轺":"軺",
"轻":"輕",
"轼":"軾",
"载":"載",
"轾":"輊",
"轿":"轎",
"辁":"輇",
"辂":"輅",
"较":"較",
"辄":"輒",
"辅":"輔",
"辆":"輛",
"辇":"輦",
"辈":"輩",
"辉":"輝",
"辊":"輥",
"辋":"輞",
"辍":"輟",
"辎":"輜",
"辏":"輳",
"辐":"輻",
"辑":"輯",
"输":"輸",
"辔":"轡",
"辕":"轅",
"辖":"轄",
"辗":"輾",
"辘":"轆",
"辙":"轍",
"辚":"轔",
"辞":"辭",
"辩":"辯",
"辫":"辮",
"边":"邊",
"辽":"遼",
"达":"達",
"迁":"遷",
"过":"過",
"迈":"邁",
"运":"運",
"还":"還",
"这":"這",
"进":"進",
"远":"遠",
"违":"違",
"连":"連",
"迟":"遲",
"迩":"邇",
"迳":"逕",
"迹":"跡",
"适":"適",
"选":"選",
"逊":"遜",
"递":"遞",
"逦":"邐",
"逻":"邏",
"遗":"遺",
"遥":"遙",
"邓":"鄧",
"邝":"鄺",
"邬":"鄔",
"邮":"郵",
"邹":"鄒",
"邺":"鄴",
"邻":"鄰",
"郃":"合",
"郄":"隙",
"郏":"郟",
"郐":"鄶",
"郑":"鄭",
"郓":"鄆",
"郦":"酈",
"郧":"鄖",
"郸":"鄲",
"酝":"醞",
"酱":"醬",
"酽":"釅",
"酾":"釃",
"酿":"釀",
"醖":"醞",
"释":"釋",
"里":"裡",
"鈈":"鈽",
"鈡":"鐘",
"鉆":"鑽",
"鉴":"鑑",
"銮":"鑾",
"銼":"剉",
"鋻":"鑑",
"錘":"鎚",
"録":"錄",
"錾":"鏨",
"鑒":"鑑",
"钆":"釓",
"钇":"釔",
"针":"針",
"钉":"釘",
"钊":"釗",
"钋":"釙",
"钌":"釕",
"钍":"釷",
"钎":"釺",
"钏":"釧",
"钐":"釤",
"钒":"釩",
"钓":"釣",
"钔":"鍆",
"钕":"釹",
"钖":"鍚",
"钗":"釵",
"钘":"鈃",
"钙":"鈣",
"钚":"鈈",
"钛":"鈦",
"钜":"鉅",
"钝":"鈍",
"钞":"鈔",
"钟":"鐘",
"钠":"鈉",
"钡":"鋇",
"钢":"鋼",
"钣":"鈑",
"钤":"鈐",
"钥":"鑰",
"钦":"欽",
"钧":"鈞",
"钨":"鎢",
"钩":"鉤",
"钪":"鈧",
"钫":"鈁",
"钬":"鈥",
"钭":"鈄",
"钮":"鈕",
"钯":"鈀",
"钰":"鈺",
"钱":"錢",
"钲":"鉦",
"钳":"鉗",
"钴":"鈷",
"钵":"缽",
"钶":"鈳",
"钷":"鉕",
"钸":"鈽",
"钹":"鈸",
"钺":"鉞",
"钻":"鑽",
"钼":"鉬",
"钽":"鉭",
"钾":"鉀",
"钿":"鈿",
"铀":"鈾",
"铁":"鐵",
"铂":"鉑",
"铃":"鈴",
"铄":"鑠",
"铅":"鉛",
"铆":"鉚",
"铈":"鈰",
"铉":"鉉",
"铊":"鉈",
"铋":"鉍",
"铌":"鈮",
"铍":"鈹",
"铎":"鐸",
"铏":"鉶",
"铐":"銬",
"铑":"銠",
"铒":"鉺",
"铓":"鋩",
"铕":"銪",
"铖":"鋮",
"铗":"鋏",
"铘":"鋣",
"铙":"鐃",
"铛":"鐺",
"铜":"銅",
"铝":"鋁",
"铞":"銱",
"铟":"銦",
"铠":"鎧",
"铡":"鍘",
"铢":"銖",
"铣":"銑",
"铤":"鋌",
"铥":"銩",
"铧":"鏵",
"铨":"銓",
"铩":"鎩",
"铪":"鉿",
"铫":"銚",
"铬":"鉻",
"铭":"銘",
"铮":"錚",
"铯":"銫",
"铰":"鉸",
"铱":"銥",
"铲":"鏟",
"铳":"銃",
"铴":"鐋",
"铵":"銨",
"银":"銀",
"铷":"銣",
"铸":"鑄",
"铹":"鐒",
"铺":"鋪",
"铼":"錸",
"铽":"鋱",
"链":"鏈",
"铿":"鏗",
"销":"銷",
"锁":"鎖",
"锂":"鋰",
"锃":"鋥",
"锄":"鋤",
"锅":"鍋",
"锆":"鋯",
"锇":"鋨",
"锈":"鏽",
"锉":"銼",
"锊":"鋝",
"锋":"鋒",
"锌":"鋅",
"锍":"鋶",
"锎":"鐦",
"锏":"鐧",
"锐":"銳",
"锑":"銻",
"锒":"鋃",
"锓":"鋟",
"锔":"鋦",
"锕":"錒",
"锖":"錆",
"锗":"鍺",
"锘":"鍩",
"错":"錯",
"锚":"錨",
"锛":"錛",
"锜":"錡",
"锝":"鍀",
"锞":"錁",
"锟":"錕",
"锡":"錫",
"锢":"錮",
"锣":"鑼",
"锤":"錘",
"锥":"錐",
"锦":"錦",
"锧":"鑕",
"锨":"鍁",
"锩":"錈",
"锪":"鍃",
"锫":"錇",
"锬":"錟",
"锭":"錠",
"键":"鍵",
"锯":"鋸",
"锰":"錳",
"锱":"錙",
"锲":"鍥",
"锴":"鍇",
"锵":"鏘",
"锶":"鍶",
"锷":"鍔",
"锸":"鍤",
"锹":"鍬",
"锺":"鍾",
"锻":"鍛",
"锼":"鎪",
"锾":"鍰",
"锿":"鎄",
"镀":"鍍",
"镁":"鎂",
"镂":"鏤",
"镃":"鎡",
"镄":"鐨",
"镅":"鎇",
"镆":"鏌",
"镇":"鎮",
"镉":"鎘",
"镊":"鑷",
"镋":"钂",
"镌":"鐫",
"镍":"鎳",
"镎":"鎿",
"镏":"鎦",
"镐":"鎬",
"镑":"鎊",
"镒":"鎰",
"镓":"鎵",
"镔":"鑌",
"镕":"鎔",
"镖":"鏢",
"镗":"鏜",
"镘":"鏝",
"镙":"鏍",
"镚":"鏰",
"镛":"鏞",
"镜":"鏡",
"镝":"鏑",
"镞":"鏃",
"镟":"鏇",
"镡":"鐔",
"镢":"鐝",
"镣":"鐐",
"镤":"鏷",
"镥":"鑥",
"镦":"鐓",
"镧":"鑭",
"镨":"鐠",
"镩":"鑹",
"镪":"鏹",
"镫":"鐙",
"镬":"鑊",
"镭":"鐳",
"镮":"鐶",
"镯":"鐲",
"镰":"鐮",
"镱":"鐿",
"镲":"鑔",
"镳":"鑣",
"镴":"鑞",
"镶":"鑲",
"长":"長",
"閑":"閒",
"閧":"鬨",
"门":"門",
"闩":"閂",
"闪":"閃",
"闫":"閆",
"闭":"閉",
"问":"問",
"闯":"闖",
"闰":"閏",
"闱":"闈",
"闲":"閒",
"闳":"閎",
"间":"間",
"闵":"閔",
"闶":"閌",
"闷":"悶",
"闸":"閘",
"闹":"鬧",
"闺":"閨",
"闻":"聞",
"闼":"闥",
"闽":"閩",
"闾":"閭",
"闿":"闓",
"阀":"閥",
"阁":"閣",
"阂":"閡",
"阃":"閫",
"阄":"鬮",
"阅":"閱",
"阆":"閬",
"阈":"閾",
"阉":"閹",
"阊":"閶",
"阋":"鬩",
"阌":"閿",
"阍":"閽",
"阎":"閻",
"阏":"閼",
"阐":"闡",
"阑":"闌",
"阒":"闃",
"阔":"闊",
"阕":"闋",
"阖":"闔",
"阗":"闐",
"阙":"闕",
"阚":"闞",
"队":"隊",
"阳":"陽",
"阴":"陰",
"阵":"陣",
"阶":"階",
"际":"際",
"陆":"陸",
"陇":"隴",
"陈":"陳",
"陉":"陘",
"陕":"陝",
"陧":"隉",
"陨":"隕",
"险":"險",
"随":"隨",
"隐":"隱",
"隶":"隸",
"隽":"雋",
"难":"難",
"雏":"雛",
"雠":"讎",
"雳":"靂",
"雾":"霧",
"霁":"霽",
"霉":"黴",
"霭":"靄",
"靓":"靚",
"静":"靜",
"靣":"面",
"靥":"靨",
"鞑":"韃",
"鞒":"橇",
"鞯":"韉",
"韦":"韋",
"韧":"韌",
"韨":"韍",
"韩":"韓",
"韪":"韙",
"韫":"韞",
"韬":"韜",
"韵":"韻",
"页":"頁",
"顶":"頂",
"顷":"頃",
"顸":"頇",
"项":"項",
"顺":"順",
"须":"須",
"顼":"頊",
"顽":"頑",
"顾":"顧",
"顿":"頓",
"颀":"頎",
"颁":"頒",
"颂":"頌",
"颃":"頏",
"预":"預",
"颅":"顱",
"领":"領",
"颇":"頗",
"颈":"頸",
"颉":"頡",
"颊":"頰",
"颋":"頲",
"颌":"頜",
"颍":"潁",
"颏":"頦",
"颐":"頤",
"频":"頻",
"颓":"頹",
"颔":"頷",
"颖":"穎",
"颗":"顆",
"题":"題",
"颙":"顒",
"颚":"顎",
"颛":"顓",
"颜":"顏",
"额":"額",
"颞":"顳",
"颟":"顢",
"颠":"顛",
"颡":"顙",
"颢":"顥",
"颤":"顫",
"颥":"顬",
"颦":"顰",
"颧":"顴",
"风":"風",
"飑":"颮",
"飒":"颯",
"飓":"颶",
"飔":"颸",
"飕":"颼",
"飗":"飀",
"飘":"飄",
"飙":"飆",
"飚":"飈",
"飞":"飛",
"飨":"饗",
"餍":"饜",
"饥":"飢",
"饦":"飥",
"饧":"餳",
"饨":"飩",
"饩":"餼",
"饪":"飪",
"饫":"飫",
"饬":"飭",
"饭":"飯",
"饮":"飲",
"饯":"餞",
"饰":"飾",
"饱":"飽",
"饲":"飼",
"饳":"飿",
"饴":"飴",
"饵":"餌",
"饶":"饒",
"饷":"餉",
"饸":"餄",
"饹":"餎",
"饺":"餃",
"饻":"餏",
"饼":"餅",
"饽":"餑",
"饿":"餓",
"馀":"餘",
"馁":"餒",
"馃":"餜",
"馄":"餛",
"馅":"餡",
"馆":"館",
"馇":"餷",
"馈":"饋",
"馉":"餶",
"馊":"餿",
"馋":"饞",
"馍":"饃",
"馎":"餺",
"馏":"餾",
"馐":"饈",
"馑":"饉",
"馒":"饅",
"馓":"饊",
"馔":"饌",
"馕":"饟",
"騃":"呆",
"马":"馬",
"驭":"馭",
"驮":"馱",
"驯":"馴",
"驰":"馳",
"驱":"驅",
"驳":"駁",
"驴":"驢",
"驵":"駔",
"驶":"駛",
"驷":"駟",
"驸":"駙",
"驹":"駒",
"驺":"騶",
"驻":"駐",
"驼":"駝",
"驽":"駑",
"驾":"駕",
"驿":"驛",
"骀":"駘",
"骁":"驍",
"骂":"罵",
"骄":"驕",
"骅":"驊",
"骆":"駱",
"骇":"駭",
"骈":"駢",
"骊":"驪",
"骋":"騁",
"验":"驗",
"骎":"駸",
"骏":"駿",
"骐":"騏",
"骑":"騎",
"骒":"騍",
"骓":"騅",
"骖":"驂",
"骗":"騙",
"骘":"騭",
"骚":"騷",
"骛":"騖",
"骜":"驁",
"骝":"騮",
"骞":"騫",
"骟":"騸",
"骠":"驃",
"骡":"騾",
"骢":"驄",
"骣":"驏",
"骤":"驟",
"骥":"驥",
"骧":"驤",
"髅":"髏",
"髋":"髖",
"髌":"髕",
"鬓":"鬢",
"魇":"魘",
"魉":"魎",
"鱼":"魚",
"鱽":"魛",
"鱿":"魷",
"鲁":"魯",
"鲂":"魴",
"鲅":"鮁",
"鲆":"鮃",
"鲇":"鯰",
"鲈":"鱸",
"鲊":"鮓",
"鲋":"鮒",
"鲍":"鮑",
"鲎":"鱟",
"鲏":"鮍",
"鲐":"鮐",
"鲑":"鮭",
"鲒":"鮚",
"鲔":"鮪",
"鲕":"鮞",
"鲖":"鮦",
"鲗":"鰂",
"鲙":"鱠",
"鲚":"鱭",
"鲛":"鮫",
"鲜":"鮮",
"鲝":"鮺",
"鲞":"鯗",
"鲟":"鱘",
"鲠":"鯁",
"鲡":"鱺",
"鲢":"鰱",
"鲣":"鰹",
"鲤":"鯉",
"鲥":"鰣",
"鲦":"鰷",
"鲧":"鯀",
"鲨":"鯊",
"鲩":"鯇",
"鲫":"鯽",
"鲭":"鯖",
"鲮":"鯪",
"鲰":"鯫",
"鲱":"鯡",
"鲲":"鯤",
"鲳":"鯧",
"鲴":"鯝",
"鲵":"鯢",
"鲶":"鯰",
"鲷":"鯛",
"鲸":"鯨",
"鲺":"鯴",
"鲻":"鯔",
"鲼":"鱝",
"鲽":"鰈",
"鲿":"鱨",
"鳁":"鰛",
"鳃":"鰓",
"鳄":"鱷",
"鳅":"鰍",
"鳆":"鰒",
"鳇":"鰉",
"鳊":"鯿",
"鳋":"鰠",
"鳌":"鰲",
"鳍":"鰭",
"鳎":"鰨",
"鳏":"鰥",
"鳐":"鰩",
"鳑":"鰟",
"鳒":"鰜",
"鳓":"鰳",
"鳔":"鰾",
"鳕":"鱈",
"鳖":"鱉",
"鳗":"鰻",
"鳘":"鰵",
"鳙":"鱅",
"鳛":"鰼",
"鳜":"鱖",
"鳝":"鱔",
"鳞":"鱗",
"鳟":"鱒",
"鳢":"鱧",
"鳣":"鱣",
"鶏":"雞",
"鷄":"雞",
"鸟":"鳥",
"鸠":"鳩",
"鸡":"雞",
"鸢":"鳶",
"鸣":"鳴",
"鸥":"鷗",
"鸦":"鴉",
"鸧":"鶬",
"鸨":"鴇",
"鸩":"鴆",
"鸪":"鴣",
"鸫":"鶇",
"鸬":"鸕",
"鸭":"鴨",
"鸮":"鴞",
"鸯":"鴦",
"鸰":"鴒",
"鸱":"鴟",
"鸲":"鴝",
"鸳":"鴛",
"鸵":"鴕",
"鸶":"鷥",
"鸷":"鷙",
"鸸":"鴯",
"鸹":"鴰",
"鸺":"鵂",
"鸻":"鴴",
"鸼":"鵃",
"鸽":"鴿",
"鸾":"鸞",
"鸿":"鴻",
"鹁":"鵓",
"鹂":"鸝",
"鹃":"鵑",
"鹄":"鵠",
"鹅":"鵝",
"鹆":"鵒",
"鹇":"鷴",
"鹈":"鵜",
"鹉":"鵡",
"鹊":"鵲",
"鹋":"鶓",
"鹌":"鵪",
"鹎":"鵯",
"鹏":"鵬",
"鹐":"鵮",
"鹑":"鶉",
"鹒":"鶊",
"鹕":"鶘",
"鹖":"鶡",
"鹗":"鶚",
"鹘":"鶻",
"鹙":"鶖",
"鹚":"鶿",
"鹛":"鶥",
"鹜":"鶩",
"鹞":"鷂",
"鹡":"鶺",
"鹣":"鶼",
"鹤":"鶴",
"鹥":"鷖",
"鹦":"鸚",
"鹧":"鷓",
"鹨":"鷚",
"鹩":"鷯",
"鹪":"鷦",
"鹫":"鷲",
"鹬":"鷸",
"鹭":"鷺",
"鹯":"鸇",
"鹰":"鷹",
"鹱":"鸌",
"鹳":"鸛",
"鹾":"鹺",
"麦":"麥",
"麸":"麩",
"麽":"麼",
"黄":"黃",
"黉":"黌",
"黡":"黶",
"黩":"黷",
"黪":"黲",
"黾":"黽",
"鼋":"黿",
"鼍":"鼉",
"鼹":"鼴",
"齐":"齊",
"齑":"齏",
"齶":"顎",
"齿":"齒",
"龀":"齔",
"龃":"齟",
"龄":"齡",
"龅":"齙",
"龆":"齠",
"龇":"齜",
"龈":"齦",
"龉":"齬",
"龊":"齪",
"龋":"齲",
"龌":"齷",
"龙":"龍",
"龚":"龔",
"龛":"龕",
"龟":"龜"
};

TongWenWFU.t_2_s = {
"㑳":"㑇",
"㘚":"㘎",
"㥮":"㤘",
"㩳":"㧐",
"䎱":"䎬",
"䙡":"䙌",
"䝼":"䞍",
"䥇":"䦂",
"䦛":"䦶",
"䦟":"䦷",
"䱷":"䲣",
"丟":"丢",
"並":"并",
"丼":"井",
"乾":"干",
"亂":"乱",
"亙":"亘",
"亞":"亚",
"伕":"夫",
"佇":"伫",
"佈":"布",
"佔":"占",
"佪":"徊",
"併":"并",
"來":"来",
"侖":"仑",
"侚":"徇",
"侶":"侣",
"侷":"局",
"俁":"俣",
"係":"系",
"俠":"侠",
"倀":"伥",
"倆":"俩",
"倉":"仓",
"個":"个",
"們":"们",
"倖":"幸",
"倣":"仿",
"倫":"伦",
"偉":"伟",
"偪":"逼",
"側":"侧",
"偵":"侦",
"偺":"咱",
"偽":"伪",
"傑":"杰",
"傖":"伧",
"傘":"伞",
"備":"备",
"傚":"效",
"傢":"家",
"傭":"佣",
"傯":"偬",
"傳":"传",
"傴":"伛",
"債":"债",
"傷":"伤",
"傾":"倾",
"僂":"偻",
"僅":"仅",
"僉":"佥",
"僊":"仙",
"僑":"侨",
"僕":"仆",
"僞":"伪",
"僣":"僭",
"僥":"侥",
"僨":"偾",
"僱":"雇",
"價":"价",
"儀":"仪",
"儂":"侬",
"億":"亿",
"儅":"当",
"儈":"侩",
"儉":"俭",
"儐":"傧",
"儔":"俦",
"儕":"侪",
"儘":"尽",
"償":"偿",
"優":"优",
"儲":"储",
"儷":"俪",
"儸":"罗",
"儺":"傩",
"儻":"傥",
"儼":"俨",
"兇":"凶",
"兌":"兑",
"兒":"儿",
"兗":"兖",
"內":"内",
"兩":"两",
"冊":"册",
"冑":"胄",
"冪":"幂",
"凅":"涸",
"凈":"净",
"凍":"冻",
"凜":"凛",
"凱":"凯",
"別":"别",
"刪":"删",
"剄":"刭",
"則":"则",
"剉":"锉",
"剋":"克",
"剎":"刹",
"剗":"刬",
"剛":"刚",
"剝":"剥",
"剮":"剐",
"剴":"剀",
"創":"创",
"剷":"铲",
"劃":"划",
"劄":"札",
"劇":"剧",
"劉":"刘",
"劊":"刽",
"劌":"刿",
"劍":"剑",
"劑":"剂",
"劻":"匡",
"勁":"劲",
"動":"动",
"勗":"勖",
"務":"务",
"勛":"勋",
"勝":"胜",
"勞":"劳",
"勢":"势",
"勣":"绩",
"勦":"剿",
"勩":"勚",
"勱":"劢",
"勳":"勋",
"勵":"励",
"勸":"劝",
"勻":"匀",
"匋":"陶",
"匭":"匦",
"匯":"汇",
"匱":"匮",
"區":"区",
"卄":"廿",
"協":"协",
"卬":"昂",
"卹":"恤",
"卻":"却",
"厙":"厍",
"厭":"厌",
"厲":"厉",
"厴":"厣",
"參":"参",
"叡":"睿",
"叢":"丛",
"吋":"寸",
"后":"后",
"吳":"吴",
"吶":"呐",
"呂":"吕",
"呎":"尺",
"咷":"啕",
"咼":"呙",
"員":"员",
"唄":"呗",
"唝":"嗊",
"唸":"念",
"問":"问",
"啓":"启",
"啗":"啖",
"啞":"哑",
"啟":"启",
"啢":"唡",
"啣":"衔",
"喎":"㖞",
"喚":"唤",
"喪":"丧",
"喫":"吃",
"喬":"乔",
"單":"单",
"喲":"哟",
"嗆":"呛",
"嗇":"啬",
"嗎":"吗",
"嗚":"呜",
"嗩":"唢",
"嗶":"哔",
"嘆":"叹",
"嘍":"喽",
"嘔":"呕",
"嘖":"啧",
"嘗":"尝",
"嘜":"唛",
"嘩":"哗",
"嘮":"唠",
"嘯":"啸",
"嘰":"叽",
"嘵":"哓",
"嘸":"呒",
"噁":"恶",
"噓":"嘘",
"噝":"咝",
"噠":"哒",
"噥":"哝",
"噦":"哕",
"噯":"嗳",
"噲":"哙",
"噴":"喷",
"噸":"吨",
"噹":"当",
"嚀":"咛",
"嚇":"吓",
"嚌":"哜",
"嚐":"尝",
"嚕":"噜",
"嚙":"啮",
"嚥":"咽",
"嚦":"呖",
"嚨":"咙",
"嚮":"向",
"嚳":"喾",
"嚴":"严",
"嚶":"嘤",
"囀":"啭",
"囁":"嗫",
"囂":"嚣",
"囅":"冁",
"囈":"呓",
"囉":"啰",
"囌":"苏",
"囑":"嘱",
"囓":"啮",
"囪":"囱",
"圇":"囵",
"國":"国",
"圍":"围",
"圏":"圈",
"園":"园",
"圓":"圆",
"圖":"图",
"團":"团",
"坵":"丘",
"埜":"野",
"埡":"垭",
"執":"执",
"埼":"崎",
"堅":"坚",
"堊":"垩",
"堖":"垴",
"堝":"埚",
"堯":"尧",
"報":"报",
"場":"场",
"塊":"块",
"塋":"茔",
"塏":"垲",
"塒":"埘",
"塗":"涂",
"塚":"冢",
"塢":"坞",
"塤":"埙",
"塵":"尘",
"塹":"堑",
"墊":"垫",
"墑":"墒",
"墜":"坠",
"墫":"樽",
"墮":"堕",
"墳":"坟",
"墻":"墙",
"墾":"垦",
"壇":"坛",
"壎":"埙",
"壓":"压",
"壘":"垒",
"壙":"圹",
"壚":"垆",
"壞":"坏",
"壟":"垄",
"壢":"坜",
"壩":"坝",
"壯":"壮",
"壺":"壶",
"壽":"寿",
"夠":"够",
"夢":"梦",
"夾":"夹",
"奐":"奂",
"奧":"奥",
"奩":"奁",
"奪":"夺",
"奮":"奋",
"妝":"妆",
"姍":"姗",
"姦":"奸",
"姪":"侄",
"娛":"娱",
"婁":"娄",
"婦":"妇",
"婬":"淫",
"婭":"娅",
"媧":"娲",
"媮":"偷",
"媯":"妫",
"媼":"媪",
"媽":"妈",
"媿":"愧",
"嫋":"袅",
"嫗":"妪",
"嫵":"妩",
"嫻":"娴",
"嫿":"婳",
"嬈":"娆",
"嬋":"婵",
"嬌":"娇",
"嬙":"嫱",
"嬝":"袅",
"嬡":"嫒",
"嬤":"嬷",
"嬪":"嫔",
"嬭":"奶",
"嬰":"婴",
"嬸":"婶",
"孃":"娘",
"孌":"娈",
"孫":"孙",
"學":"学",
"孿":"孪",
"宮":"宫",
"寘":"置",
"寢":"寝",
"實":"实",
"寧":"宁",
"審":"审",
"寫":"写",
"寬":"宽",
"寵":"宠",
"寶":"宝",
"將":"将",
"專":"专",
"尋":"寻",
"對":"对",
"導":"导",
"尷":"尴",
"屆":"届",
"屍":"尸",
"屜":"屉",
"屝":"扉",
"屢":"屡",
"層":"层",
"屨":"屦",
"屬":"属",
"岡":"冈",
"峴":"岘",
"島":"岛",
"峽":"峡",
"崍":"崃",
"崑":"昆",
"崗":"岗",
"崙":"仑",
"崠":"岽",
"崢":"峥",
"崳":"嵛",
"嵐":"岚",
"嵒":"岩",
"嶁":"嵝",
"嶄":"崭",
"嶇":"岖",
"嶔":"嵚",
"嶗":"崂",
"嶠":"峤",
"嶢":"峣",
"嶧":"峄",
"嶨":"峃",
"嶸":"嵘",
"嶺":"岭",
"嶼":"屿",
"嶽":"岳",
"巋":"岿",
"巒":"峦",
"巔":"巅",
"巖":"岩",
"巰":"巯",
"巹":"卺",
"帥":"帅",
"師":"师",
"帳":"帐",
"帶":"带",
"幀":"帧",
"幃":"帏",
"幗":"帼",
"幘":"帻",
"幟":"帜",
"幣":"币",
"幫":"帮",
"幬":"帱",
"幵":"开",
"幷":"并",
"幹":"干",
"幾":"几",
"庂":"仄",
"庫":"库",
"廁":"厕",
"廂":"厢",
"廄":"厩",
"廈":"厦",
"廎":"庼",
"廚":"厨",
"廝":"厮",
"廟":"庙",
"廠":"厂",
"廡":"庑",
"廢":"废",
"廣":"广",
"廩":"廪",
"廬":"庐",
"廱":"痈",
"廳":"厅",
"弒":"弑",
"弔":"吊",
"弳":"弪",
"張":"张",
"強":"强",
"彆":"别",
"彈":"弹",
"彌":"弥",
"彎":"弯",
"彙":"汇",
"彚":"汇",
"彥":"彦",
"彫":"雕",
"彿":"佛",
"後":"后",
"徑":"径",
"從":"从",
"徠":"徕",
"復":"复",
"徬":"旁",
"徵":"征",
"徹":"彻",
"恆":"恒",
"恥":"耻",
"悅":"悦",
"悵":"怅",
"悶":"闷",
"悽":"凄",
"惇":"敦",
"惡":"恶",
"惱":"恼",
"惲":"恽",
"惷":"蠢",
"惻":"恻",
"愛":"爱",
"愜":"惬",
"愨":"悫",
"愴":"怆",
"愷":"恺",
"愾":"忾",
"慄":"栗",
"慇":"殷",
"態":"态",
"慍":"愠",
"慘":"惨",
"慚":"惭",
"慟":"恸",
"慣":"惯",
"慪":"怄",
"慫":"怂",
"慮":"虑",
"慳":"悭",
"慶":"庆",
"慼":"戚",
"慾":"欲",
"憂":"忧",
"憊":"惫",
"憐":"怜",
"憑":"凭",
"憒":"愦",
"憚":"惮",
"憤":"愤",
"憫":"悯",
"憮":"怃",
"憲":"宪",
"憶":"忆",
"懃":"勤",
"懇":"恳",
"應":"应",
"懌":"怿",
"懍":"懔",
"懞":"蒙",
"懟":"怼",
"懣":"懑",
"懨":"恹",
"懲":"惩",
"懶":"懒",
"懷":"怀",
"懸":"悬",
"懺":"忏",
"懼":"惧",
"懾":"慑",
"戀":"恋",
"戇":"戆",
"戉":"钺",
"戔":"戋",
"戧":"戗",
"戩":"戬",
"戰":"战",
"戲":"戏",
"戶":"户",
"扐":"仂",
"扞":"捍",
"扱":"插",
"扺":"抵",
"抃":"拚",
"抔":"抱",
"抴":"曳",
"拋":"抛",
"拑":"钳",
"挌":"格",
"挶":"局",
"挾":"挟",
"捨":"舍",
"捫":"扪",
"捲":"卷",
"掃":"扫",
"掄":"抡",
"掆":"㧏",
"掗":"挜",
"掙":"挣",
"掛":"挂",
"採":"采",
"揀":"拣",
"揚":"扬",
"換":"换",
"揮":"挥",
"揹":"背",
"搆":"构",
"損":"损",
"搖":"摇",
"搗":"捣",
"搟":"擀",
"搥":"捶",
"搨":"打",
"搯":"掏",
"搶":"抢",
"搾":"榨",
"摀":"捂",
"摃":"扛",
"摑":"掴",
"摜":"掼",
"摟":"搂",
"摯":"挚",
"摳":"抠",
"摶":"抟",
"摻":"掺",
"撈":"捞",
"撏":"挦",
"撐":"撑",
"撓":"挠",
"撚":"拈",
"撟":"挢",
"撢":"掸",
"撣":"掸",
"撥":"拨",
"撦":"扯",
"撫":"抚",
"撲":"扑",
"撳":"揿",
"撻":"挞",
"撾":"挝",
"撿":"捡",
"擁":"拥",
"擄":"掳",
"擇":"择",
"擊":"击",
"擋":"挡",
"擓":"㧟",
"擔":"担",
"據":"据",
"擠":"挤",
"擡":"抬",
"擣":"捣",
"擬":"拟",
"擯":"摈",
"擰":"拧",
"擱":"搁",
"擲":"掷",
"擴":"扩",
"擷":"撷",
"擺":"摆",
"擻":"擞",
"擼":"撸",
"擾":"扰",
"攄":"摅",
"攆":"撵",
"攏":"拢",
"攔":"拦",
"攖":"撄",
"攙":"搀",
"攛":"撺",
"攜":"携",
"攝":"摄",
"攢":"攒",
"攣":"挛",
"攤":"摊",
"攪":"搅",
"攬":"揽",
"攷":"考",
"敗":"败",
"敘":"叙",
"敵":"敌",
"數":"数",
"斂":"敛",
"斃":"毙",
"斕":"斓",
"斬":"斩",
"斷":"断",
"於":"于",
"旂":"旗",
"旛":"幡",
"昇":"升",
"時":"时",
"晉":"晋",
"晝":"昼",
"晞":"曦",
"晢":"晰",
"晳":"晰",
"晻":"暗",
"暈":"晕",
"暉":"晖",
"暘":"阳",
"暢":"畅",
"暫":"暂",
"暱":"昵",
"暸":"了",
"曄":"晔",
"曆":"历",
"曇":"昙",
"曉":"晓",
"曏":"向",
"曖":"暧",
"曠":"旷",
"曨":"昽",
"曬":"晒",
"書":"书",
"會":"会",
"朢":"望",
"朧":"胧",
"朮":"术",
"杇":"圬",
"東":"东",
"枴":"拐",
"柵":"栅",
"柺":"拐",
"栒":"旬",
"桮":"杯",
"桿":"杆",
"梔":"栀",
"梘":"枧",
"條":"条",
"梟":"枭",
"梱":"捆",
"棄":"弃",
"棖":"枨",
"棗":"枣",
"棟":"栋",
"棡":"㭎",
"棧":"栈",
"棲":"栖",
"椏":"桠",
"楄":"匾",
"楊":"杨",
"楓":"枫",
"楙":"茂",
"楜":"胡",
"楨":"桢",
"業":"业",
"極":"极",
"榦":"干",
"榪":"杩",
"榮":"荣",
"榿":"桤",
"槃":"盘",
"構":"构",
"槍":"枪",
"槓":"杠",
"槧":"椠",
"槨":"椁",
"槳":"桨",
"樁":"桩",
"樂":"乐",
"樅":"枞",
"樑":"梁",
"樓":"楼",
"標":"标",
"樞":"枢",
"樣":"样",
"樸":"朴",
"樹":"树",
"樺":"桦",
"橈":"桡",
"橋":"桥",
"機":"机",
"橢":"椭",
"橦":"幢",
"橫":"横",
"檁":"檩",
"檉":"柽",
"檔":"档",
"檜":"桧",
"檟":"槚",
"檢":"检",
"檣":"樯",
"檯":"台",
"檳":"槟",
"檸":"柠",
"檻":"槛",
"櫂":"棹",
"櫃":"柜",
"櫐":"累",
"櫓":"橹",
"櫚":"榈",
"櫛":"栉",
"櫝":"椟",
"櫞":"橼",
"櫟":"栎",
"櫥":"橱",
"櫧":"槠",
"櫨":"栌",
"櫪":"枥",
"櫫":"橥",
"櫬":"榇",
"櫳":"栊",
"櫸":"榉",
"櫺":"棂",
"櫻":"樱",
"欄":"栏",
"權":"权",
"欏":"椤",
"欒":"栾",
"欖":"榄",
"欞":"棂",
"欸":"唉",
"欽":"钦",
"歎":"叹",
"歐":"欧",
"歟":"欤",
"歡":"欢",
"歲":"岁",
"歷":"历",
"歸":"归",
"歿":"殁",
"殀":"夭",
"殘":"残",
"殞":"殒",
"殤":"殇",
"殫":"殚",
"殭":"僵",
"殮":"殓",
"殯":"殡",
"殲":"歼",
"殺":"杀",
"殼":"壳",
"殽":"肴",
"毀":"毁",
"毆":"殴",
"毌":"毋",
"毘":"毗",
"毬":"球",
"毿":"毵",
"氈":"毡",
"氌":"氇",
"氣":"气",
"氫":"氢",
"氬":"氩",
"氳":"氲",
"氾":"泛",
"汍":"丸",
"汎":"泛",
"汙":"污",
"決":"决",
"沍":"冱",
"沒":"没",
"沖":"冲",
"況":"况",
"泝":"溯",
"洟":"涕",
"洩":"泄",
"洶":"汹",
"浬":"里",
"浹":"浃",
"涇":"泾",
"涼":"凉",
"淒":"凄",
"淚":"泪",
"淥":"渌",
"淨":"净",
"淪":"沦",
"淵":"渊",
"淶":"涞",
"淺":"浅",
"渙":"涣",
"減":"减",
"渢":"沨",
"渦":"涡",
"測":"测",
"渾":"浑",
"湊":"凑",
"湞":"浈",
"湣":"闵",
"湧":"涌",
"湯":"汤",
"溈":"沩",
"準":"准",
"溝":"沟",
"溫":"温",
"溮":"浉",
"溳":"涢",
"溼":"湿",
"滄":"沧",
"滅":"灭",
"滌":"涤",
"滎":"荥",
"滬":"沪",
"滯":"滞",
"滲":"渗",
"滷":"卤",
"滸":"浒",
"滻":"浐",
"滾":"滚",
"滿":"满",
"漁":"渔",
"漊":"溇",
"漚":"沤",
"漢":"汉",
"漣":"涟",
"漬":"渍",
"漲":"涨",
"漵":"溆",
"漸":"渐",
"漿":"浆",
"潁":"颍",
"潑":"泼",
"潔":"洁",
"潛":"潜",
"潟":"舄",
"潤":"润",
"潯":"浔",
"潰":"溃",
"潷":"滗",
"潿":"涠",
"澀":"涩",
"澂":"澄",
"澆":"浇",
"澇":"涝",
"澔":"浩",
"澗":"涧",
"澠":"渑",
"澤":"泽",
"澦":"滪",
"澩":"泶",
"澮":"浍",
"澱":"淀",
"澾":"㳠",
"濁":"浊",
"濃":"浓",
"濕":"湿",
"濘":"泞",
"濛":"蒙",
"濜":"浕",
"濟":"济",
"濤":"涛",
"濫":"滥",
"濬":"浚",
"濰":"潍",
"濱":"滨",
"濺":"溅",
"濼":"泺",
"濾":"滤",
"瀁":"漾",
"瀅":"滢",
"瀆":"渎",
"瀉":"泻",
"瀋":"沈",
"瀏":"浏",
"瀕":"濒",
"瀘":"泸",
"瀝":"沥",
"瀟":"潇",
"瀠":"潆",
"瀦":"潴",
"瀧":"泷",
"瀨":"濑",
"瀰":"弥",
"瀲":"潋",
"瀾":"澜",
"灃":"沣",
"灄":"滠",
"灑":"洒",
"灕":"漓",
"灘":"滩",
"灝":"灏",
"灣":"湾",
"灤":"滦",
"灩":"滟",
"災":"灾",
"炤":"照",
"炰":"炮",
"為":"为",
"烏":"乌",
"烴":"烃",
"無":"无",
"煉":"炼",
"煒":"炜",
"煖":"暖",
"煙":"烟",
"煢":"茕",
"煥":"焕",
"煩":"烦",
"煬":"炀",
"熒":"荧",
"熗":"炝",
"熱":"热",
"熾":"炽",
"燁":"烨",
"燄":"焰",
"燈":"灯",
"燉":"炖",
"燐":"磷",
"燒":"烧",
"燙":"烫",
"燜":"焖",
"營":"营",
"燦":"灿",
"燬":"毁",
"燭":"烛",
"燴":"烩",
"燻":"熏",
"燼":"烬",
"燾":"焘",
"燿":"耀",
"爍":"烁",
"爐":"炉",
"爛":"烂",
"爭":"争",
"爲":"为",
"爺":"爷",
"爾":"尔",
"牆":"墙",
"牘":"牍",
"牠":"它",
"牴":"抵",
"牽":"牵",
"犖":"荦",
"犛":"牦",
"犢":"犊",
"犧":"牺",
"狀":"状",
"狚":"旦",
"狹":"狭",
"狽":"狈",
"猙":"狰",
"猶":"犹",
"猻":"狲",
"獁":"犸",
"獃":"呆",
"獄":"狱",
"獅":"狮",
"獎":"奖",
"獨":"独",
"獪":"狯",
"獫":"猃",
"獮":"狝",
"獰":"狞",
"獲":"获",
"獵":"猎",
"獷":"犷",
"獸":"兽",
"獺":"獭",
"獻":"献",
"獼":"猕",
"玀":"猡",
"玅":"妙",
"玆":"兹",
"玨":"珏",
"珪":"圭",
"珮":"佩",
"現":"现",
"琱":"雕",
"琺":"珐",
"琿":"珲",
"瑋":"玮",
"瑣":"琐",
"瑤":"瑶",
"瑩":"莹",
"瑪":"玛",
"瑯":"琅",
"瑲":"玱",
"璉":"琏",
"璡":"琎",
"璣":"玑",
"璦":"瑷",
"環":"环",
"璽":"玺",
"璿":"璇",
"瓊":"琼",
"瓏":"珑",
"瓔":"璎",
"瓖":"镶",
"瓚":"瓒",
"甌":"瓯",
"甕":"瓮",
"產":"产",
"産":"产",
"甦":"苏",
"甪":"角",
"畝":"亩",
"畢":"毕",
"畫":"画",
"畬":"畲",
"異":"异",
"當":"当",
"疇":"畴",
"疊":"叠",
"疿":"痱",
"痙":"痉",
"痠":"酸",
"痲":"麻",
"痳":"麻",
"痺":"痹",
"痾":"疴",
"瘂":"痖",
"瘉":"愈",
"瘋":"疯",
"瘍":"疡",
"瘓":"痪",
"瘞":"瘗",
"瘡":"疮",
"瘧":"疟",
"瘺":"瘘",
"瘻":"瘘",
"療":"疗",
"癆":"痨",
"癇":"痫",
"癉":"瘅",
"癒":"愈",
"癘":"疠",
"癟":"瘪",
"癡":"痴",
"癢":"痒",
"癤":"疖",
"癥":"症",
"癧":"疬",
"癩":"癞",
"癬":"癣",
"癭":"瘿",
"癮":"瘾",
"癰":"痈",
"癱":"瘫",
"癲":"癫",
"發":"发",
"皁":"皂",
"皚":"皑",
"皰":"疱",
"皸":"皲",
"皺":"皱",
"盃":"杯",
"盜":"盗",
"盞":"盏",
"盡":"尽",
"監":"监",
"盤":"盘",
"盧":"卢",
"盪":"荡",
"眥":"眦",
"眾":"众",
"睏":"困",
"睜":"睁",
"睞":"睐",
"睪":"睾",
"瞇":"眯",
"瞘":"眍",
"瞜":"䁖",
"瞞":"瞒",
"瞼":"睑",
"矇":"蒙",
"矓":"眬",
"矚":"瞩",
"矯":"矫",
"砲":"炮",
"硃":"朱",
"硤":"硖",
"硨":"砗",
"硯":"砚",
"碕":"崎",
"碩":"硕",
"碪":"砧",
"碭":"砀",
"碸":"砜",
"確":"确",
"碼":"码",
"磑":"硙",
"磚":"砖",
"磣":"碜",
"磧":"碛",
"磯":"矶",
"磽":"硗",
"礄":"硚",
"礎":"础",
"礙":"碍",
"礦":"矿",
"礪":"砺",
"礫":"砾",
"礬":"矾",
"礱":"砻",
"祂":"他",
"祅":"祆",
"祇":"只",
"祐":"佑",
"祼":"裸",
"祿":"禄",
"禍":"祸",
"禎":"祯",
"禕":"祎",
"禦":"御",
"禪":"禅",
"禮":"礼",
"禱":"祷",
"禿":"秃",
"秈":"籼",
"秏":"耗",
"稅":"税",
"稈":"秆",
"稜":"棱",
"稟":"禀",
"稨":"扁",
"種":"种",
"稱":"称",
"穀":"谷",
"穇":"䅟",
"穌":"稣",
"積":"积",
"穎":"颖",
"穡":"穑",
"穢":"秽",
"穨":"颓",
"穩":"稳",
"穫":"获",
"窩":"窝",
"窪":"洼",
"窮":"穷",
"窯":"窑",
"窵":"窎",
"窶":"窭",
"窺":"窥",
"竄":"窜",
"竅":"窍",
"竇":"窦",
"竊":"窃",
"競":"竞",
"笻":"筇",
"筆":"笔",
"筍":"笋",
"筧":"笕",
"筴":"策",
"箄":"箅",
"箇":"个",
"箋":"笺",
"箏":"筝",
"箠":"棰",
"節":"节",
"範":"范",
"築":"筑",
"篋":"箧",
"篛":"箬",
"篠":"筱",
"篤":"笃",
"篩":"筛",
"篲":"彗",
"篳":"筚",
"簀":"箦",
"簍":"篓",
"簑":"蓑",
"簞":"箪",
"簡":"简",
"簣":"篑",
"簫":"箫",
"簷":"檐",
"簽":"签",
"簾":"帘",
"籃":"篮",
"籌":"筹",
"籐":"藤",
"籙":"箓",
"籜":"箨",
"籟":"籁",
"籠":"笼",
"籤":"签",
"籥":"龠",
"籩":"笾",
"籪":"簖",
"籬":"篱",
"籮":"箩",
"籲":"吁",
"粧":"妆",
"粵":"粤",
"糝":"糁",
"糞":"粪",
"糧":"粮",
"糰":"团",
"糲":"粝",
"糴":"籴",
"糶":"粜",
"糾":"纠",
"紀":"纪",
"紂":"纣",
"約":"约",
"紅":"红",
"紆":"纡",
"紇":"纥",
"紈":"纨",
"紉":"纫",
"紋":"纹",
"納":"纳",
"紐":"纽",
"紓":"纾",
"純":"纯",
"紕":"纰",
"紖":"纼",
"紗":"纱",
"紘":"纮",
"紙":"纸",
"級":"级",
"紛":"纷",
"紜":"纭",
"紝":"纴",
"紡":"纺",
"紬":"䌷",
"紮":"扎",
"細":"细",
"紱":"绂",
"紲":"绁",
"紳":"绅",
"紹":"绍",
"紺":"绀",
"紼":"绋",
"紿":"绐",
"絀":"绌",
"終":"终",
"絃":"弦",
"組":"组",
"絆":"绊",
"絎":"绗",
"結":"结",
"絕":"绝",
"絛":"绦",
"絝":"绔",
"絞":"绞",
"絡":"络",
"絢":"绚",
"給":"给",
"絨":"绒",
"絰":"绖",
"統":"统",
"絲":"丝",
"絳":"绛",
"絹":"绢",
"綁":"绑",
"綃":"绡",
"綆":"绠",
"綈":"绨",
"綏":"绥",
"綑":"捆",
"經":"经",
"綜":"综",
"綞":"缍",
"綠":"绿",
"綢":"绸",
"綣":"绻",
"綫":"线",
"綬":"绶",
"維":"维",
"綰":"绾",
"綱":"纲",
"網":"网",
"綴":"缀",
"綵":"彩",
"綸":"纶",
"綹":"绺",
"綺":"绮",
"綻":"绽",
"綽":"绰",
"綾":"绫",
"綿":"绵",
"緄":"绲",
"緇":"缁",
"緊":"紧",
"緋":"绯",
"緒":"绪",
"緔":"绱",
"緗":"缃",
"緘":"缄",
"緙":"缂",
"線":"线",
"緝":"缉",
"緞":"缎",
"締":"缔",
"緡":"缗",
"緣":"缘",
"緦":"缌",
"編":"编",
"緩":"缓",
"緬":"缅",
"緯":"纬",
"緱":"缑",
"緲":"缈",
"練":"练",
"緶":"缏",
"緹":"缇",
"緻":"致",
"縈":"萦",
"縉":"缙",
"縊":"缢",
"縋":"缒",
"縐":"绉",
"縑":"缣",
"縕":"缊",
"縗":"缞",
"縚":"绦",
"縛":"缚",
"縝":"缜",
"縞":"缟",
"縟":"缛",
"縣":"县",
"縫":"缝",
"縭":"缡",
"縮":"缩",
"縯":"演",
"縱":"纵",
"縲":"缧",
"縳":"缚",
"縴":"纤",
"縵":"缦",
"縶":"絷",
"縷":"缕",
"縹":"缥",
"總":"总",
"績":"绩",
"繃":"绷",
"繅":"缫",
"繆":"缪",
"繈":"襁",
"繒":"缯",
"織":"织",
"繕":"缮",
"繙":"翻",
"繚":"缭",
"繞":"绕",
"繡":"绣",
"繢":"缋",
"繩":"绳",
"繪":"绘",
"繫":"系",
"繭":"茧",
"繯":"缳",
"繰":"缲",
"繳":"缴",
"繹":"绎",
"繼":"继",
"繽":"缤",
"繾":"缱",
"纈":"缬",
"纊":"纩",
"續":"续",
"纍":"累",
"纏":"缠",
"纓":"缨",
"纔":"才",
"纖":"纤",
"纘":"缵",
"纜":"缆",
"缽":"钵",
"缾":"瓶",
"罈":"坛",
"罌":"罂",
"罦":"罘",
"罰":"罚",
"罵":"骂",
"罷":"罢",
"羅":"罗",
"羆":"罴",
"羈":"羁",
"羋":"芈",
"羥":"羟",
"羨":"羡",
"義":"义",
"羶":"膻",
"習":"习",
"翬":"翚",
"翹":"翘",
"耑":"端",
"耡":"助",
"耤":"藉",
"耬":"耧",
"耮":"耢",
"聖":"圣",
"聞":"闻",
"聯":"联",
"聰":"聪",
"聲":"声",
"聳":"耸",
"聵":"聩",
"聶":"聂",
"職":"职",
"聹":"聍",
"聽":"听",
"聾":"聋",
"肅":"肃",
"肏":"操",
"肐":"胳",
"胇":"肺",
"胊":"朐",
"脅":"胁",
"脈":"脉",
"脛":"胫",
"脣":"唇",
"脩":"修",
"脫":"脱",
"脹":"胀",
"腎":"肾",
"腖":"胨",
"腡":"脶",
"腦":"脑",
"腫":"肿",
"腳":"脚",
"腸":"肠",
"膃":"腽",
"膆":"嗉",
"膕":"腘",
"膚":"肤",
"膞":"䏝",
"膠":"胶",
"膩":"腻",
"膽":"胆",
"膾":"脍",
"膿":"脓",
"臉":"脸",
"臍":"脐",
"臏":"膑",
"臕":"膘",
"臘":"腊",
"臙":"胭",
"臚":"胪",
"臟":"脏",
"臠":"脔",
"臢":"臜",
"臥":"卧",
"臨":"临",
"臺":"台",
"與":"与",
"興":"兴",
"舉":"举",
"舊":"旧",
"舋":"衅",
"舖":"铺",
"艙":"舱",
"艣":"橹",
"艤":"舣",
"艦":"舰",
"艫":"舻",
"艱":"艰",
"艷":"艳",
"艸":"艹",
"芻":"刍",
"苧":"苎",
"苺":"莓",
"茍":"苟",
"茲":"兹",
"荅":"答",
"荊":"荆",
"荳":"豆",
"莊":"庄",
"莖":"茎",
"莢":"荚",
"莧":"苋",
"菫":"堇",
"華":"华",
"菴":"庵",
"萇":"苌",
"萊":"莱",
"萬":"万",
"萵":"莴",
"葉":"叶",
"葒":"荭",
"著":"着",
"葤":"荮",
"葦":"苇",
"葯":"药",
"葷":"荤",
"蒐":"搜",
"蒔":"莳",
"蒞":"莅",
"蒼":"苍",
"蓀":"荪",
"蓆":"席",
"蓋":"盖",
"蓮":"莲",
"蓯":"苁",
"蓴":"莼",
"蓽":"荜",
"蔆":"菱",
"蔔":"卜",
"蔞":"蒌",
"蔣":"蒋",
"蔥":"葱",
"蔦":"茑",
"蔭":"荫",
"蕁":"荨",
"蕆":"蒇",
"蕎":"荞",
"蕒":"荬",
"蕕":"莸",
"蕘":"荛",
"蕢":"蒉",
"蕩":"荡",
"蕪":"芜",
"蕭":"萧",
"蕷":"蓣",
"薈":"荟",
"薊":"蓟",
"薌":"芗",
"薑":"姜",
"薔":"蔷",
"薙":"剃",
"薟":"莶",
"薦":"荐",
"薩":"萨",
"薺":"荠",
"藍":"蓝",
"藎":"荩",
"藝":"艺",
"藥":"药",
"藪":"薮",
"藭":"䓖",
"藶":"苈",
"藷":"薯",
"藹":"蔼",
"藺":"蔺",
"蘀":"萚",
"蘄":"蕲",
"蘆":"芦",
"蘇":"苏",
"蘊":"蕴",
"蘋":"苹",
"蘗":"蘖",
"蘚":"藓",
"蘞":"蔹",
"蘢":"茏",
"蘭":"兰",
"蘺":"蓠",
"蘿":"萝",
"處":"处",
"虖":"呼",
"虛":"虚",
"虜":"虏",
"號":"号",
"虧":"亏",
"虯":"虬",
"蛺":"蛱",
"蛻":"蜕",
"蜆":"蚬",
"蜺":"霓",
"蝕":"蚀",
"蝟":"猬",
"蝦":"虾",
"蝨":"虱",
"蝸":"蜗",
"螄":"蛳",
"螞":"蚂",
"螢":"萤",
"螻":"蝼",
"蟄":"蛰",
"蟈":"蝈",
"蟎":"螨",
"蟣":"虮",
"蟬":"蝉",
"蟯":"蛲",
"蟲":"虫",
"蟶":"蛏",
"蟺":"蟮",
"蟻":"蚁",
"蠅":"蝇",
"蠆":"虿",
"蠍":"蝎",
"蠐":"蛴",
"蠑":"蝾",
"蠔":"蚝",
"蠟":"蜡",
"蠣":"蛎",
"蠨":"蟏",
"蠱":"蛊",
"蠶":"蚕",
"蠷":"蠼",
"蠻":"蛮",
"衆":"众",
"衊":"蔑",
"衒":"炫",
"術":"术",
"衚":"胡",
"衛":"卫",
"衝":"冲",
"衹":"只",
"袞":"衮",
"袪":"祛",
"裊":"袅",
"裏":"里",
"補":"补",
"裝":"装",
"裡":"里",
"製":"制",
"複":"复",
"褎":"袖",
"褲":"裤",
"褳":"裢",
"褸":"褛",
"褻":"亵",
"襉":"裥",
"襖":"袄",
"襝":"裣",
"襠":"裆",
"襤":"褴",
"襪":"袜",
"襬":"摆",
"襯":"衬",
"襲":"袭",
"襾":"西",
"覈":"核",
"見":"见",
"覎":"觃",
"規":"规",
"覓":"觅",
"視":"视",
"覘":"觇",
"覜":"眺",
"覡":"觋",
"覦":"觎",
"親":"亲",
"覬":"觊",
"覯":"觏",
"覲":"觐",
"覷":"觑",
"覺":"觉",
"覽":"览",
"覿":"觌",
"觀":"观",
"觔":"筋",
"觝":"抵",
"觴":"觞",
"觶":"觯",
"觸":"触",
"訂":"订",
"訃":"讣",
"計":"计",
"訊":"讯",
"訌":"讧",
"討":"讨",
"訐":"讦",
"訓":"训",
"訕":"讪",
"訖":"讫",
"託":"托",
"記":"记",
"訛":"讹",
"訝":"讶",
"訟":"讼",
"訢":"欣",
"訣":"诀",
"訥":"讷",
"訩":"讻",
"訪":"访",
"設":"设",
"許":"许",
"訴":"诉",
"訶":"诃",
"診":"诊",
"註":"注",
"証":"证",
"詁":"诂",
"詆":"诋",
"詎":"讵",
"詐":"诈",
"詒":"诒",
"詔":"诏",
"評":"评",
"詗":"诇",
"詘":"诎",
"詛":"诅",
"詞":"词",
"詠":"咏",
"詡":"诩",
"詢":"询",
"詣":"诣",
"試":"试",
"詩":"诗",
"詫":"诧",
"詬":"诟",
"詭":"诡",
"詮":"诠",
"詰":"诘",
"話":"话",
"該":"该",
"詳":"详",
"詵":"诜",
"詶":"酬",
"詻":"咯",
"詼":"诙",
"詿":"诖",
"誄":"诔",
"誅":"诛",
"誆":"诓",
"誇":"夸",
"誌":"志",
"認":"认",
"誑":"诳",
"誒":"诶",
"誕":"诞",
"誘":"诱",
"誚":"诮",
"語":"语",
"誠":"诚",
"誡":"诫",
"誣":"诬",
"誤":"误",
"誥":"诰",
"誦":"诵",
"誨":"诲",
"說":"说",
"説":"说",
"誰":"谁",
"課":"课",
"誶":"谇",
"誹":"诽",
"誼":"谊",
"調":"调",
"諂":"谄",
"諄":"谆",
"談":"谈",
"諉":"诿",
"請":"请",
"諍":"诤",
"諏":"诹",
"諑":"诼",
"諒":"谅",
"論":"论",
"諗":"谂",
"諛":"谀",
"諜":"谍",
"諝":"谞",
"諞":"谝",
"諠":"喧",
"諢":"诨",
"諤":"谔",
"諦":"谛",
"諧":"谐",
"諫":"谏",
"諭":"谕",
"諮":"谘",
"諱":"讳",
"諳":"谙",
"諶":"谌",
"諷":"讽",
"諸":"诸",
"諺":"谚",
"諼":"谖",
"諾":"诺",
"謀":"谋",
"謁":"谒",
"謂":"谓",
"謄":"誊",
"謅":"诌",
"謊":"谎",
"謎":"谜",
"謐":"谧",
"謔":"谑",
"謖":"谡",
"謗":"谤",
"謙":"谦",
"謚":"谥",
"講":"讲",
"謝":"谢",
"謠":"谣",
"謨":"谟",
"謫":"谪",
"謬":"谬",
"謳":"讴",
"謹":"谨",
"謼":"呼",
"謾":"谩",
"譁":"哗",
"譆":"嘻",
"證":"证",
"譎":"谲",
"譏":"讥",
"譔":"撰",
"譖":"谮",
"識":"识",
"譙":"谯",
"譚":"谭",
"譜":"谱",
"譟":"噪",
"譫":"谵",
"譭":"毁",
"譯":"译",
"議":"议",
"譴":"谴",
"護":"护",
"譽":"誉",
"譾":"谫",
"讀":"读",
"讅":"谉",
"變":"变",
"讌":"宴",
"讎":"雠",
"讒":"谗",
"讓":"让",
"讕":"谰",
"讖":"谶",
"讚":"赞",
"讜":"谠",
"讞":"谳",
"谿":"溪",
"豈":"岂",
"豎":"竖",
"豐":"丰",
"豔":"艳",
"豖":"亍",
"豬":"猪",
"豶":"豮",
"貍":"狸",
"貓":"猫",
"貝":"贝",
"貞":"贞",
"負":"负",
"財":"财",
"貢":"贡",
"貧":"贫",
"貨":"货",
"販":"贩",
"貪":"贪",
"貫":"贯",
"責":"责",
"貯":"贮",
"貰":"贳",
"貲":"赀",
"貳":"贰",
"貴":"贵",
"貶":"贬",
"買":"买",
"貸":"贷",
"貺":"贶",
"費":"费",
"貼":"贴",
"貽":"贻",
"貿":"贸",
"賀":"贺",
"賁":"贲",
"賂":"赂",
"賃":"赁",
"賄":"贿",
"賅":"赅",
"資":"资",
"賈":"贾",
"賊":"贼",
"賑":"赈",
"賒":"赊",
"賓":"宾",
"賕":"赇",
"賙":"赒",
"賚":"赉",
"賜":"赐",
"賞":"赏",
"賠":"赔",
"賡":"赓",
"賢":"贤",
"賣":"卖",
"賤":"贱",
"賦":"赋",
"賧":"赕",
"質":"质",
"賬":"账",
"賭":"赌",
"賴":"赖",
"賵":"赗",
"賸":"剩",
"賺":"赚",
"賻":"赙",
"購":"购",
"賽":"赛",
"賾":"赜",
"贄":"贽",
"贅":"赘",
"贈":"赠",
"贊":"赞",
"贋":"赝",
"贍":"赡",
"贏":"赢",
"贐":"赆",
"贓":"赃",
"贖":"赎",
"贛":"赣",
"趕":"赶",
"趙":"赵",
"趨":"趋",
"趲":"趱",
"跡":"迹",
"跼":"局",
"踐":"践",
"踡":"蜷",
"踫":"碰",
"踰":"逾",
"踴":"踊",
"蹌":"跄",
"蹕":"跸",
"蹟":"迹",
"蹠":"跖",
"蹣":"蹒",
"蹤":"踪",
"蹧":"糟",
"蹺":"跷",
"躉":"趸",
"躊":"踌",
"躋":"跻",
"躍":"跃",
"躑":"踯",
"躒":"跞",
"躓":"踬",
"躕":"蹰",
"躚":"跹",
"躡":"蹑",
"躥":"蹿",
"躦":"躜",
"躪":"躏",
"軀":"躯",
"車":"车",
"軋":"轧",
"軌":"轨",
"軍":"军",
"軒":"轩",
"軔":"轫",
"軛":"轭",
"軟":"软",
"軤":"轷",
"軫":"轸",
"軲":"轱",
"軸":"轴",
"軹":"轵",
"軺":"轺",
"軻":"轲",
"軼":"轶",
"軾":"轼",
"較":"较",
"輅":"辂",
"輇":"辁",
"載":"载",
"輊":"轾",
"輒":"辄",
"輓":"挽",
"輔":"辅",
"輕":"轻",
"輛":"辆",
"輜":"辎",
"輝":"辉",
"輞":"辋",
"輟":"辍",
"輥":"辊",
"輦":"辇",
"輩":"辈",
"輪":"轮",
"輯":"辑",
"輳":"辏",
"輸":"输",
"輻":"辐",
"輾":"辗",
"輿":"舆",
"轂":"毂",
"轄":"辖",
"轅":"辕",
"轆":"辘",
"轉":"转",
"轍":"辙",
"轎":"轿",
"轔":"辚",
"轟":"轰",
"轡":"辔",
"轢":"轹",
"轤":"轳",
"辦":"办",
"辭":"辞",
"辮":"辫",
"辯":"辩",
"農":"农",
"迆":"迤",
"迴":"回",
"迺":"乃",
"逕":"迳",
"這":"这",
"連":"连",
"週":"周",
"進":"进",
"遊":"游",
"運":"运",
"過":"过",
"達":"达",
"違":"违",
"遙":"遥",
"遜":"逊",
"遞":"递",
"遠":"远",
"適":"适",
"遲":"迟",
"遷":"迁",
"選":"选",
"遺":"遗",
"遼":"辽",
"邁":"迈",
"還":"还",
"邇":"迩",
"邊":"边",
"邏":"逻",
"邐":"逦",
"郟":"郏",
"郵":"邮",
"鄆":"郓",
"鄉":"乡",
"鄒":"邹",
"鄔":"邬",
"鄖":"郧",
"鄧":"邓",
"鄭":"郑",
"鄰":"邻",
"鄲":"郸",
"鄴":"邺",
"鄶":"郐",
"鄺":"邝",
"酈":"郦",
"酖":"鸩",
"醃":"腌",
"醆":"盏",
"醜":"丑",
"醞":"酝",
"醫":"医",
"醬":"酱",
"醱":"发",
"醼":"宴",
"釀":"酿",
"釁":"衅",
"釃":"酾",
"釅":"酽",
"釆":"采",
"釋":"释",
"釐":"厘",
"釓":"钆",
"釔":"钇",
"釕":"钌",
"釗":"钊",
"釘":"钉",
"釙":"钋",
"針":"针",
"釣":"钓",
"釤":"钐",
"釦":"扣",
"釧":"钏",
"釩":"钒",
"釵":"钗",
"釷":"钍",
"釹":"钕",
"釺":"钎",
"釾":"䥺",
"鈀":"钯",
"鈁":"钫",
"鈃":"钘",
"鈄":"钭",
"鈈":"钚",
"鈉":"钠",
"鈍":"钝",
"鈐":"钤",
"鈑":"钣",
"鈔":"钞",
"鈕":"钮",
"鈞":"钧",
"鈣":"钙",
"鈥":"钬",
"鈦":"钛",
"鈧":"钪",
"鈮":"铌",
"鈰":"铈",
"鈳":"钶",
"鈴":"铃",
"鈷":"钴",
"鈸":"钹",
"鈹":"铍",
"鈺":"钰",
"鈽":"钸",
"鈾":"铀",
"鈿":"钿",
"鉀":"钾",
"鉅":"钜",
"鉆":"钻",
"鉈":"铊",
"鉉":"铉",
"鉋":"刨",
"鉍":"铋",
"鉑":"铂",
"鉕":"钷",
"鉗":"钳",
"鉚":"铆",
"鉛":"铅",
"鉞":"钺",
"鉢":"钵",
"鉤":"钩",
"鉦":"钲",
"鉬":"钼",
"鉭":"钽",
"鉶":"铏",
"鉸":"铰",
"鉺":"铒",
"鉻":"铬",
"鉿":"铪",
"銀":"银",
"銃":"铳",
"銅":"铜",
"銑":"铣",
"銓":"铨",
"銖":"铢",
"銘":"铭",
"銚":"铫",
"銜":"衔",
"銠":"铑",
"銣":"铷",
"銥":"铱",
"銦":"铟",
"銨":"铵",
"銩":"铥",
"銪":"铕",
"銫":"铯",
"銬":"铐",
"銱":"铞",
"銲":"焊",
"銳":"锐",
"銷":"销",
"銹":"锈",
"銻":"锑",
"銼":"锉",
"鋁":"铝",
"鋃":"锒",
"鋅":"锌",
"鋇":"钡",
"鋌":"铤",
"鋏":"铗",
"鋒":"锋",
"鋝":"锊",
"鋟":"锓",
"鋣":"铘",
"鋤":"锄",
"鋥":"锃",
"鋦":"锔",
"鋨":"锇",
"鋩":"铓",
"鋪":"铺",
"鋮":"铖",
"鋯":"锆",
"鋰":"锂",
"鋱":"铽",
"鋶":"锍",
"鋸":"锯",
"鋻":"鉴",
"鋼":"钢",
"錁":"锞",
"錄":"录",
"錆":"锖",
"錇":"锫",
"錈":"锩",
"錐":"锥",
"錒":"锕",
"錕":"锟",
"錘":"锤",
"錙":"锱",
"錚":"铮",
"錛":"锛",
"錟":"锬",
"錠":"锭",
"錢":"钱",
"錦":"锦",
"錨":"锚",
"錫":"锡",
"錮":"锢",
"錯":"错",
"錳":"锰",
"錶":"表",
"錸":"铼",
"鍀":"锝",
"鍁":"锨",
"鍃":"锪",
"鍆":"钔",
"鍇":"锴",
"鍊":"炼",
"鍋":"锅",
"鍍":"镀",
"鍔":"锷",
"鍘":"铡",
"鍚":"钖",
"鍛":"锻",
"鍤":"锸",
"鍥":"锲",
"鍩":"锘",
"鍬":"锹",
"鍰":"锾",
"鍵":"键",
"鍶":"锶",
"鍺":"锗",
"鍼":"针",
"鍾":"钟",
"鎂":"镁",
"鎄":"锿",
"鎇":"镅",
"鎊":"镑",
"鎌":"镰",
"鎔":"镕",
"鎖":"锁",
"鎗":"枪",
"鎘":"镉",
"鎚":"锤",
"鎡":"镃",
"鎢":"钨",
"鎣":"蓥",
"鎦":"镏",
"鎧":"铠",
"鎩":"铩",
"鎪":"锼",
"鎬":"镐",
"鎮":"镇",
"鎰":"镒",
"鎳":"镍",
"鎵":"镓",
"鎿":"镎",
"鏃":"镞",
"鏇":"镟",
"鏈":"链",
"鏌":"镆",
"鏍":"镙",
"鏑":"镝",
"鏗":"铿",
"鏘":"锵",
"鏜":"镗",
"鏝":"镘",
"鏞":"镛",
"鏟":"铲",
"鏡":"镜",
"鏢":"镖",
"鏤":"镂",
"鏨":"錾",
"鏰":"镚",
"鏵":"铧",
"鏷":"镤",
"鏹":"镪",
"鏺":"䥽",
"鏽":"锈",
"鐃":"铙",
"鐉":"铣",
"鐋":"铴",
"鐐":"镣",
"鐒":"铹",
"鐓":"镦",
"鐔":"镡",
"鐘":"钟",
"鐙":"镫",
"鐝":"镢",
"鐠":"镨",
"鐥":"䦅",
"鐦":"锎",
"鐧":"锏",
"鐨":"镄",
"鐫":"镌",
"鐮":"镰",
"鐯":"䦃",
"鐲":"镯",
"鐳":"镭",
"鐵":"铁",
"鐶":"镮",
"鐸":"铎",
"鐺":"铛",
"鐿":"镱",
"鑄":"铸",
"鑊":"镬",
"鑌":"镔",
"鑑":"鉴",
"鑒":"鉴",
"鑔":"镲",
"鑕":"锧",
"鑞":"镴",
"鑠":"铄",
"鑣":"镳",
"鑤":"刨",
"鑥":"镥",
"鑪":"炉",
"鑭":"镧",
"鑰":"钥",
"鑲":"镶",
"鑵":"罐",
"鑷":"镊",
"鑹":"镩",
"鑼":"锣",
"鑽":"钻",
"鑾":"銮",
"鑿":"凿",
"钁":"䦆",
"钂":"镋",
"長":"长",
"門":"门",
"閂":"闩",
"閃":"闪",
"閆":"闫",
"閉":"闭",
"開":"开",
"閌":"闶",
"閎":"闳",
"閏":"闰",
"閑":"闲",
"閒":"闲",
"間":"间",
"閔":"闵",
"閘":"闸",
"閡":"阂",
"閣":"阁",
"閤":"合",
"閥":"阀",
"閨":"闺",
"閩":"闽",
"閫":"阃",
"閬":"阆",
"閭":"闾",
"閱":"阅",
"閶":"阊",
"閹":"阉",
"閻":"阎",
"閼":"阏",
"閽":"阍",
"閾":"阈",
"閿":"阌",
"闃":"阒",
"闆":"板",
"闇":"暗",
"闈":"闱",
"闊":"阔",
"闋":"阕",
"闌":"阑",
"闐":"阗",
"闓":"闿",
"闔":"阖",
"闕":"阙",
"闖":"闯",
"關":"关",
"闞":"阚",
"闡":"阐",
"闢":"辟",
"闥":"闼",
"阨":"厄",
"阬":"坑",
"阯":"址",
"陏":"隋",
"陘":"陉",
"陝":"陕",
"陞":"升",
"陣":"阵",
"陰":"阴",
"陳":"陈",
"陸":"陆",
"陽":"阳",
"隄":"堤",
"隉":"陧",
"隊":"队",
"階":"阶",
"隕":"陨",
"際":"际",
"隤":"颓",
"隨":"随",
"險":"险",
"隱":"隐",
"隴":"陇",
"隸":"隶",
"隻":"只",
"雋":"隽",
"雖":"虽",
"雙":"双",
"雛":"雏",
"雜":"杂",
"雞":"鸡",
"離":"离",
"難":"难",
"雲":"云",
"電":"电",
"霤":"溜",
"霧":"雾",
"霽":"霁",
"靂":"雳",
"靄":"霭",
"靆":"叇",
"靈":"灵",
"靉":"叆",
"靚":"靓",
"靜":"静",
"靦":"腼",
"靨":"靥",
"鞏":"巩",
"鞦":"秋",
"韁":"缰",
"韃":"鞑",
"韆":"千",
"韉":"鞯",
"韋":"韦",
"韌":"韧",
"韍":"韨",
"韓":"韩",
"韙":"韪",
"韜":"韬",
"韞":"韫",
"韻":"韵",
"響":"响",
"頁":"页",
"頂":"顶",
"頃":"顷",
"項":"项",
"順":"顺",
"頇":"顸",
"須":"须",
"頊":"顼",
"頌":"颂",
"頎":"颀",
"頏":"颃",
"預":"预",
"頑":"顽",
"頒":"颁",
"頓":"顿",
"頗":"颇",
"領":"领",
"頜":"颌",
"頡":"颉",
"頤":"颐",
"頦":"颏",
"頫":"俯",
"頭":"头",
"頰":"颊",
"頲":"颋",
"頷":"颔",
"頸":"颈",
"頹":"颓",
"頻":"频",
"顆":"颗",
"題":"题",
"額":"额",
"顎":"腭",
"顏":"颜",
"顒":"颙",
"顓":"颛",
"顔":"颜",
"願":"愿",
"顙":"颡",
"顛":"颠",
"類":"类",
"顢":"颟",
"顥":"颢",
"顧":"顾",
"顫":"颤",
"顬":"颥",
"顯":"显",
"顰":"颦",
"顱":"颅",
"顳":"颞",
"顴":"颧",
"風":"风",
"颮":"飑",
"颯":"飒",
"颱":"台",
"颳":"刮",
"颶":"飓",
"颸":"飔",
"颺":"扬",
"颼":"飕",
"飀":"飗",
"飄":"飘",
"飆":"飙",
"飈":"飚",
"飛":"飞",
"飢":"饥",
"飥":"饦",
"飩":"饨",
"飪":"饪",
"飫":"饫",
"飭":"饬",
"飯":"饭",
"飲":"饮",
"飴":"饴",
"飼":"饲",
"飽":"饱",
"飾":"饰",
"飿":"饳",
"餃":"饺",
"餄":"饸",
"餅":"饼",
"餈":"糍",
"餉":"饷",
"養":"养",
"餌":"饵",
"餎":"饹",
"餏":"饻",
"餑":"饽",
"餒":"馁",
"餓":"饿",
"餔":"哺",
"餘":"余",
"餚":"肴",
"餛":"馄",
"餜":"馃",
"餞":"饯",
"餡":"馅",
"館":"馆",
"餬":"糊",
"餱":"糇",
"餳":"饧",
"餵":"喂",
"餶":"馉",
"餷":"馇",
"餺":"馎",
"餼":"饩",
"餽":"馈",
"餾":"馏",
"餿":"馊",
"饃":"馍",
"饅":"馒",
"饈":"馐",
"饉":"馑",
"饊":"馓",
"饋":"馈",
"饌":"馔",
"饑":"饥",
"饒":"饶",
"饗":"飨",
"饜":"餍",
"饞":"馋",
"饟":"馕",
"馬":"马",
"馭":"驭",
"馮":"冯",
"馱":"驮",
"馳":"驰",
"馴":"驯",
"駁":"驳",
"駐":"驻",
"駑":"驽",
"駒":"驹",
"駔":"驵",
"駕":"驾",
"駘":"骀",
"駙":"驸",
"駛":"驶",
"駝":"驼",
"駟":"驷",
"駢":"骈",
"駭":"骇",
"駮":"驳",
"駱":"骆",
"駸":"骎",
"駿":"骏",
"騁":"骋",
"騃":"呆",
"騅":"骓",
"騍":"骒",
"騎":"骑",
"騏":"骐",
"騖":"骛",
"騙":"骗",
"騣":"鬃",
"騫":"骞",
"騭":"骘",
"騮":"骝",
"騰":"腾",
"騶":"驺",
"騷":"骚",
"騸":"骟",
"騾":"骡",
"驀":"蓦",
"驁":"骜",
"驂":"骖",
"驃":"骠",
"驄":"骢",
"驅":"驱",
"驊":"骅",
"驍":"骁",
"驏":"骣",
"驕":"骄",
"驗":"验",
"驚":"惊",
"驛":"驿",
"驟":"骤",
"驢":"驴",
"驤":"骧",
"驥":"骥",
"驪":"骊",
"骯":"肮",
"髏":"髅",
"髒":"脏",
"體":"体",
"髕":"髌",
"髖":"髋",
"髣":"仿",
"髮":"发",
"鬆":"松",
"鬍":"胡",
"鬚":"须",
"鬢":"鬓",
"鬥":"斗",
"鬧":"闹",
"鬨":"哄",
"鬩":"阋",
"鬮":"阄",
"鬱":"郁",
"魎":"魉",
"魘":"魇",
"魚":"鱼",
"魛":"鱽",
"魨":"豚",
"魯":"鲁",
"魴":"鲂",
"魷":"鱿",
"鮁":"鲅",
"鮃":"鲆",
"鮍":"鲏",
"鮐":"鲐",
"鮑":"鲍",
"鮒":"鲋",
"鮓":"鲊",
"鮚":"鲒",
"鮞":"鲕",
"鮣":"䲟",
"鮦":"鲖",
"鮪":"鲔",
"鮫":"鲛",
"鮭":"鲑",
"鮮":"鲜",
"鮺":"鲝",
"鯀":"鲧",
"鯁":"鲠",
"鯇":"鲩",
"鯉":"鲤",
"鯊":"鲨",
"鯔":"鲻",
"鯖":"鲭",
"鯗":"鲞",
"鯛":"鲷",
"鯝":"鲴",
"鯡":"鲱",
"鯢":"鲵",
"鯤":"鲲",
"鯧":"鲳",
"鯨":"鲸",
"鯪":"鲮",
"鯫":"鲰",
"鯰":"鲇",
"鯴":"鲺",
"鯽":"鲫",
"鯿":"鳊",
"鰂":"鲗",
"鰈":"鲽",
"鰉":"鳇",
"鰌":"䲡",
"鰍":"鳅",
"鰒":"鳆",
"鰓":"鳃",
"鰛":"鳁",
"鰜":"鳒",
"鰟":"鳑",
"鰠":"鳋",
"鰣":"鲥",
"鰥":"鳏",
"鰧":"䲢",
"鰨":"鳎",
"鰩":"鳐",
"鰭":"鳍",
"鰱":"鲢",
"鰲":"鳌",
"鰳":"鳓",
"鰵":"鳘",
"鰷":"鲦",
"鰹":"鲣",
"鰻":"鳗",
"鰼":"鳛",
"鰾":"鳔",
"鱅":"鳙",
"鱈":"鳕",
"鱉":"鳖",
"鱒":"鳟",
"鱔":"鳝",
"鱖":"鳜",
"鱗":"鳞",
"鱘":"鲟",
"鱝":"鲼",
"鱟":"鲎",
"鱠":"鲙",
"鱣":"鳣",
"鱧":"鳢",
"鱨":"鲿",
"鱭":"鲚",
"鱷":"鳄",
"鱸":"鲈",
"鱺":"鲡",
"鳥":"鸟",
"鳧":"凫",
"鳩":"鸠",
"鳳":"凤",
"鳴":"鸣",
"鳶":"鸢",
"鳾":"䴓",
"鴆":"鸩",
"鴇":"鸨",
"鴈":"雁",
"鴉":"鸦",
"鴒":"鸰",
"鴕":"鸵",
"鴛":"鸳",
"鴝":"鸲",
"鴞":"鸮",
"鴟":"鸱",
"鴣":"鸪",
"鴦":"鸯",
"鴨":"鸭",
"鴯":"鸸",
"鴰":"鸹",
"鴴":"鸻",
"鴷":"䴕",
"鴻":"鸿",
"鴿":"鸽",
"鵁":"䴔",
"鵂":"鸺",
"鵃":"鸼",
"鵑":"鹃",
"鵒":"鹆",
"鵓":"鹁",
"鵜":"鹈",
"鵝":"鹅",
"鵠":"鹄",
"鵡":"鹉",
"鵪":"鹌",
"鵬":"鹏",
"鵮":"鹐",
"鵯":"鹎",
"鵰":"雕",
"鵲":"鹊",
"鶄":"䴖",
"鶇":"鸫",
"鶉":"鹑",
"鶊":"鹒",
"鶏":"鸡",
"鶓":"鹋",
"鶖":"鹙",
"鶘":"鹕",
"鶚":"鹗",
"鶡":"鹖",
"鶥":"鹛",
"鶩":"鹜",
"鶪":"䴗",
"鶬":"鸧",
"鶯":"莺",
"鶱":"骞",
"鶴":"鹤",
"鶺":"鹡",
"鶻":"鹘",
"鶼":"鹣",
"鶿":"鹚",
"鷂":"鹞",
"鷉":"䴘",
"鷓":"鹧",
"鷖":"鹥",
"鷗":"鸥",
"鷙":"鸷",
"鷚":"鹨",
"鷥":"鸶",
"鷦":"鹪",
"鷯":"鹩",
"鷰":"燕",
"鷲":"鹫",
"鷳":"鹇",
"鷴":"鹇",
"鷸":"鹬",
"鷹":"鹰",
"鷺":"鹭",
"鸇":"鹯",
"鸊":"䴙",
"鸌":"鹱",
"鸕":"鸬",
"鸚":"鹦",
"鸛":"鹳",
"鸝":"鹂",
"鸞":"鸾",
"鹵":"卤",
"鹹":"咸",
"鹺":"鹾",
"鹼":"硷",
"鹽":"盐",
"麗":"丽",
"麥":"麦",
"麩":"麸",
"麵":"面",
"麼":"么",
"黃":"黄",
"黌":"黉",
"點":"点",
"黨":"党",
"黲":"黪",
"黴":"霉",
"黶":"黡",
"黷":"黩",
"黽":"黾",
"黿":"鼋",
"鼇":"鳌",
"鼉":"鼍",
"鼕":"冬",
"鼴":"鼹",
"齊":"齐",
"齋":"斋",
"齎":"赍",
"齏":"齑",
"齒":"齿",
"齔":"龀",
"齙":"龅",
"齜":"龇",
"齟":"龃",
"齠":"龆",
"齡":"龄",
"齣":"出",
"齦":"龈",
"齧":"啮",
"齪":"龊",
"齬":"龉",
"齲":"龋",
"齶":"腭",
"齷":"龌",
"龍":"龙",
"龐":"庞",
"龑":"䶮",
"龔":"龚",
"龕":"龛",
"龜":"龟",
"兀":"兀"
};

TongWenWFU.allTextNode = function (node) {
	var all = [];
	for (node = node.firstChild; node; node = node.nextSibling) {
		if (node.nodeType === 3) {
			all.push(node);
		} else {
			all = all.concat(TongWenWFU.allTextNode(node));
		}
	}
	return all;
};

TongWenWFU.strConvert = function (str, set) {
	set = set|1;
	var txt = (set === 1) ? TongWenWFU.t_2_s : TongWenWFU.s_2_t;
	str = str.replace(/[^\x00-\xFF]/g, function (s) {
		return ((s in txt) ? txt[s] : s);
	});
	return str;
};
TongWenWFU.convert = function (set) {
	var node = TongWenWFU.allTextNode(document.body),
		txt = (set === 1) ? TongWenWFU.t_2_s : TongWenWFU.s_2_t,
		l = node.length,
		i = 0;
	for (; i < l; i++) {
		node[i].nodeValue = node[i].nodeValue.replace(/[^\x00-\xFF]/g, function (s) {
			return ((s in txt) ? txt[s] : s);
		});
	}
};

TongWenWFU.toggle = function () {
	var s = TongWenWFU.setting;
	TongWenWFU.convert(s);
	TongWenWFU.setting = (s === 1) ? 0 : 1;
};

/*! /resources/static/all/public/js/parse_url.js */
function parse_url(str, component) {
  //       discuss at: http://phpjs.org/functions/parse_url/
  //      original by: Steven Levithan (http://blog.stevenlevithan.com)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //         input by: Lorenzo Pisani
  //         input by: Tony
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //             note: original by http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
  //             note: blog post at http://blog.stevenlevithan.com/archives/parseuri
  //             note: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
  //             note: Does not replace invalid characters with '_' as in PHP, nor does it return false with
  //             note: a seriously malformed URL.
  //             note: Besides function name, is essentially the same as parseUri as well as our allowing
  //             note: an extra slash after the scheme/protocol (to allow file:/// as in PHP)
  //        example 1: parse_url('http://username:password@hostname/path?arg=value#anchor');
  //        returns 1: {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}

  var query, key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port',
      'relative', 'path', 'directory', 'file', 'query', 'fragment'
    ],
    ini = (this.php_js && this.php_js.ini) || {},
    mode = (ini['phpjs.parse_url.mode'] &&
      ini['phpjs.parse_url.mode'].local_value) || 'php',
    parser = {
      php: /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-scheme to catch file:/// (should restrict this)
    };

  var m = parser[mode].exec(str),
    uri = {},
    i = 14;
  while (i--) {
    if (m[i]) {
      uri[key[i]] = m[i];
    }
  }

  if (component) {
    return uri[component.replace('PHP_URL_', '')
      .toLowerCase()];
  }
  if (mode !== 'php') {
    var name = (ini['phpjs.parse_url.queryKey'] &&
      ini['phpjs.parse_url.queryKey'].local_value) || 'queryKey';
    parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
    uri[name] = {};
    query = uri[key[12]] || '';
    query.replace(parser, function($0, $1, $2) {
      if ($1) {
        uri[name][$1] = $2;
      }
    });
  }
  delete uri.source;
  return uri;
}
/*! /resources/static/all/public/js/parse_str.js */
function parse_str (str, array) { // eslint-disable-line camelcase
  //       discuss at: http://locutus.io/php/parse_str/
  //      original by: Cagri Ekin
  //      improved by: Michael White (http://getsprink.com)
  //      improved by: Jack
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: stag019
  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
  //      bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
  // reimplemented by: stag019
  //         input by: Dreamer
  //         input by: Zaide (http://zaidesthings.com/)
  //         input by: David Pesta (http://davidpesta.com/)
  //         input by: jeicquest
  //      bugfixed by: Rafał Kukawski
  //           note 1: When no argument is specified, will put variables in global scope.
  //           note 1: When a particular argument has been passed, and the
  //           note 1: returned value is different parse_str of PHP.
  //           note 1: For example, a=b=c&d====c
  //        example 1: var $arr = {}
  //        example 1: parse_str('first=foo&second=bar', $arr)
  //        example 1: var $result = $arr
  //        returns 1: { first: 'foo', second: 'bar' }
  //        example 2: var $arr = {}
  //        example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', $arr)
  //        example 2: var $result = $arr
  //        returns 2: { str_a: "Jack and Jill didn't see the well." }
  //        example 3: var $abc = {3:'a'}
  //        example 3: parse_str('a[b]["c"]=def&a[q]=t+5', $abc)
  //        example 3: var $result = $abc
  //        returns 3: {"3":"a","a":{"b":{"c":"def"},"q":"t 5"}}
  //        example 4: var $arr = {}
  //        example 4: parse_str('a[][]=value', $arr)
  //        example 4: var $result = $arr
  //        returns 4: {"a":{"0":{"0":"value"}}}
  //        example 5: var $arr = {}
  //        example 5: parse_str('a=1&a[]=2', $arr)
  //        example 5: var $result = $arr
  //        returns 5: {"a":{"0":"2"}}

  var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&')
  var sal = strArr.length
  var i
  var j
  var ct
  var p
  var lastObj
  var obj
  var chr
  var tmp
  var key
  var value
  var postLeftBracketPos
  var keys
  var keysLen

  var _fixStr = function (str) {
    return decodeURIComponent(str.replace(/\+/g, '%20'))
  }

  var $global = (typeof window !== 'undefined' ? window : global)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}

  if (!array) {
    array = $global
  }

  for (i = 0; i < sal; i++) {
    tmp = strArr[i].split('=')
    key = _fixStr(tmp[0])
    value = (tmp.length < 2) ? '' : _fixStr(tmp[1])

    while (key.charAt(0) === ' ') {
      key = key.slice(1)
    }

    if (key.indexOf('\x00') > -1) {
      key = key.slice(0, key.indexOf('\x00'))
    }

    if (key && key.charAt(0) !== '[') {
      keys = []
      postLeftBracketPos = 0

      for (j = 0; j < key.length; j++) {
        if (key.charAt(j) === '[' && !postLeftBracketPos) {
          postLeftBracketPos = j + 1
        } else if (key.charAt(j) === ']') {
          if (postLeftBracketPos) {
            if (!keys.length) {
              keys.push(key.slice(0, postLeftBracketPos - 1))
            }

            keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos))
            postLeftBracketPos = 0

            if (key.charAt(j + 1) !== '[') {
              break
            }
          }
        }
      }

      if (!keys.length) {
        keys = [key]
      }

      for (j = 0; j < keys[0].length; j++) {
        chr = keys[0].charAt(j)

        if (chr === ' ' || chr === '.' || chr === '[') {
          keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1)
        }

        if (chr === '[') {
          break
        }
      }

      obj = array

      for (j = 0, keysLen = keys.length; j < keysLen; j++) {
        key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '')
        lastObj = obj

        if ((key === '' || key === ' ') && j !== 0) {
          // Insert new dimension
          ct = -1

          for (p in obj) {
            if (obj.hasOwnProperty(p)) {
              if (+p > ct && p.match(/^\d+$/g)) {
                ct = +p
              }
            }
          }

          key = ct + 1
        }

        // if primitive value, replace with object
        if (Object(obj[key]) !== obj[key]) {
          obj[key] = {}
        }

        obj = obj[key]
      }

      lastObj[key] = value
    }
  }
}
/*! /resources/static/all/public/js/jquery-url-min.js */
/* $.url() v1.6.0 - http://github.com/websanova/jquery-url */jQuery.extend({url:function(n,b){var a=b||window.location.toString();if(!(a.substring(0,7)==="http://"||a.substring(0,8)==="https://")){a="http://"+a}b=a.split("/");var m=b[2].split(":");var e={protocol:b[0],hostname:m[0],port:(m[1]||"80"),pathname:"/"+b.slice(3,b.length).join("/").split("?")[0]};var h=e.hostname,j=h.split("."),c=e.pathname,k=c.split("/");if(!n){return a}else{if(n==="domain"){return h}else{if(n==="host"){return j.slice(-2).join(".")}else{if(n==="tld"){return j.slice(-1).join(".")}else{if(n==="sub"){return j.slice(0,j.length-2).join(".")}else{if(n==="port"){return e.port||"80"}else{if(n==="protocol"){return e.protocol.split(":")[0]}else{if(n==="path"){return c}else{if($.isNumeric(n)){n=parseInt(n);return k[n<0?k.length+n:n]||""}else{if(n==="file"){return k.slice(-1)}else{if(n==="filename"){return k.slice(-1)[0].split(".")[0]}else{if(n==="fileext"){return k.slice(-1)[0].split(".")[1]||""}else{if(n[0]==="?"||n[0]==="#"){var f=a,d=null;if(n[0]==="?"){f=(f.split("?")[1]||"").split("#")[0]}else{if(n[0]==="#"){f=(f.split("#")[1]||"")}}if(!n[1]){return f}n=n.substring(1);f=f.split("&");for(var g=0,l=f.length;g<l;g++){d=f[g].split("=");if(d[0]===n){return d[1]}}}}}}}}}}}}}}}return""}});
/*! /resources/static/all/public/js/lazysizes.min.js */
/*! lazysizes - v5.2.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
/*! /resources/static/mv/public/js/jquery/jquery.serialize-object.js */
;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var FormSerializer = module.exports = function FormSerializer(helper) {
  this._helper    = helper;
  this._object    = {};
  this._pushes    = {};
  this._patterns  = {
    validate: /^[a-z][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,
    key:      /[a-z0-9_]+|(?=\[\])/gi,
    push:     /^$/,
    fixed:    /^\d+$/,
    named:    /^[a-z0-9_]+$/i
  };
};

FormSerializer.prototype._build = function _build(base, key, value) {
  base[key] = value;
  return base;
};

FormSerializer.prototype._makeObject = function _nest(root, value) {

  var keys = root.match(this._patterns.key), k;

  // nest, nest, ..., nest
  while ((k = keys.pop()) !== undefined) {
    // foo[]
    if (this._patterns.push.test(k)) {
      var idx = this._incrementPush(root.replace(/\[\]$/, ''));
      value = this._build([], idx, value);
    }

    // foo[n]
    else if (this._patterns.fixed.test(k)) {
      value = this._build([], k, value);
    }

    // foo; foo[bar]
    else if (this._patterns.named.test(k)) {
      value = this._build({}, k, value);
    }
  }

  return value;
};

FormSerializer.prototype._incrementPush = function _incrementPush(key) {
  if (this._pushes[key] === undefined) {
    this._pushes[key] = 0;
  }
  return this._pushes[key]++;
};

FormSerializer.prototype.addPair = function addPair(pair) {
  if (!this._patterns.validate.test(pair.name)) return this;
  var obj = this._makeObject(pair.name, pair.value);
  this._object = this._helper.extend(true, this._object, obj);
  return this;
};

FormSerializer.prototype.addPairs = function addPairs(pairs) {
  if (!this._helper.isArray(pairs)) {
    throw new Error("formSerializer.addPairs expects an Array");
  }
  for (var i=0, len=pairs.length; i<len; i++) {
    this.addPair(pairs[i]);
  }
  return this;
};

FormSerializer.prototype.serialize = function serialize() {
  return this._object
};

FormSerializer.prototype.serializeJSON = function serializeJSON() {
  return JSON.stringify(this.serialize());
};

},{}],2:[function(require,module,exports){
var Helper = module.exports = function Helper(jQuery) {

  // jQuery.extend requirement
  if (typeof jQuery.extend === 'function') {
    this.extend = jQuery.extend;
  }
  else {
    throw new Error("jQuery is required to use jquery-serialize-object");
  }

  // Array.isArray polyfill
  if(typeof Array.isArray === 'function') {
    this.isArray = Array.isArray;
  }
  else {
    this.isArray = function isArray(input) {
      return Object.prototype.toString.call(input) === "[object Array]";
    };
  }

};

},{}],3:[function(require,module,exports){
var FormSerializer = require("./form-serializer"),
    Helper         = require("./helper");

(function($) {
  var helper = new Helper($ || {});

  $.fn.serializeObject = function() {

    var form = $(this);

    if (form.length > 1) {
      return new Error("jquery-serialize-object can only serialize one form at a time");
    }

    return new FormSerializer(helper).
      addPairs(form.serializeArray()).
      serialize();
  };

})(jQuery);

},{"./form-serializer":1,"./helper":2}]},{},[3])
;
/*! /resources/static/mv/public/js/jquery/jquery.cf.js */
$.extend({
		ajaxCall:function(target,data,success,error){
			
		    //發出 ajax call
			var callfunc = null;
			if(typeof $.jsonp === 'undefined'){
				callfunc = $.ajax;
			}else{
				callfunc = $.jsonp;
			}
		    var reData = callfunc({
		        url: target,
		        data: data,
		        type: 'GET',
		        contentType: "application/json; charset=utf-8",
		        dataType: "jsonp",          
		        cache:false  ,
		        success:success,
		        error:error
		    });
		    return reData;
		}
});

/*! /resources/static/mv/public/js/fancybox-2.1.5/jquery.fancybox.js */
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
/*! /resources/static/mv/public/js/cookie.js */
//写cookies函数 作者：翟振凯
function SetCookie(name,value,second_time)//两个参数，一个是cookie的名子，一个是值
{
	var  path  =  (arguments  >  3)  ?  arguments[3]  :  "/";
	var  domain  =  (arguments  >  4)  ?  arguments[4]  :  null;
	var  secure  =  (arguments  >  5)  ?  arguments[5]  :  false;
    var cookieValue = name + "="+ escape (value);
    if(second_time){
        var exp  = new Date();    //new Date("December 31, 9998");
        exp.setTime(exp.getTime() + second_time*1000);
    	cookieValue += ";expires=" + exp.toGMTString();
    }
    cookieValue += (path==null)?"":(";path="  +  path);
    cookieValue += (domain==null)?"":(";domain="  +  domain);
    cookieValue += (secure==true)?";secure":"";
    document.cookie = cookieValue;
}
function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}
function delCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
/*! ../../public/js/site_cf.js */
var site_cf = {
	gtPage: function (url) {
		location.href = url;
	},
	str_truncate:function (str,len){
	    if(str.length>len){
	    	str = str.substring(0, len) + "...";
	    }
	    return str;
	},
	Fancybox: function (jQueryCols, options, canCancel, returnElement){
		canCancel = canCancel||false;
		returnElement = returnElement||null;
		var del_options = {
				title		: false,
				closeBtn	: false,
				/*padding		: 0,*/
				fitToView	: false,
				autoSize	: true,
				closeClick	: false,
				live		: false,
				autoCenter	: false,
				margin	: 0,
		        type: 'ajax',
			    helpers : {
			        overlay : {
			            closeClick : false
			        }
			    },
			    onCancel: function (){
			    	return canCancel;
			    },beforeShow: function(){
			    	$(".fancybox-skin").css('padding','0');
			    }
	    };
		if(returnElement!=null){
			options.afterClose = function(){
				var m_option = $.extend(true,del_options,{content:returnElement,afterClose:null});
				$.fancybox(m_option);
				return false;
			};
		};
		var meg_options = $.extend(true,del_options,options);
		if(jQueryCols!==jQuery){
			jQueryCols.off('click.fb-start');
		}
		jQueryCols.fancybox(meg_options);
	},
	FancyboxLoadingShow: function (options){
		site_cf.FancyboxLoadingHide();
		options = options || {};
		var settings = $.extend(true,{
			closeClick: false,
			parent: $('body')
			},options);
		$.fancybox.helpers.overlay.open(settings);
		$.fancybox.showLoading();
	},
	FancyboxLoadingHide: function (){
		$('.fancybox-wrap').stop(true).trigger('onReset').remove();
		$.fancybox.helpers.overlay.close();
		$.fancybox.hideLoading();
	},
	alert: function (content, title, custom_style){
		if($("#widget_alert").length>0){
			title = title || "";
			var style = $.extend(true,{
				width: 300,
				height: 165,
				height_title: 35,
				css_mask_alert:{},
				css_mask_alert_bar:{},
				css_mask_alert_box:{'text-align':'center'}
			},custom_style);
			widget_alert = $("#widget_alert").clone();
			widget_alert.css($.extend({'width':style.width+'px','height':style.height+'px'},style.css_mask_alert));
			widget_alert.find(".mask_alert_bar").css($.extend({'width':style.width+'px','height':style.height_title+'px'},style.css_mask_alert_bar)).find(".mask_alert_bar_txt").html(title);
			widget_alert.find(".mask_alert_box").css($.extend({'width':style.width+'px','height':(style.height-style.height_title)+'px'},style.css_mask_alert_box)).find("span").html(content);
			site_cf.Fancybox($,{'content':$("<div></div>").append(widget_alert).html(),type: 'inline'});
			var mask_alert_box = $(".fancybox-inner").find("#widget_alert").find(".mask_alert_box");
			var content_height = mask_alert_box.children("span").height();
			// var margin_top = (mask_alert_box.height()-content_height)/2;
			// var height = mask_alert_box.height()-margin_top;
			// mask_alert_box.css({'height':height+'px'});
		}else{
			alert(content);
		}
	},
	toFixed: function (num, decimal){
		return Math.ceil( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal );
	}
};


$(document).on("click",".fancybox_close",function(e){
	$.fancybox.close();
});

$(document).on("click",".call_widget_forget",function(e){
	e.preventDefault();
	site_cf.Fancybox($,{'href':'#widget_forget',type: 'inline'});
});

$(document).on("click",".call_widget_login",function(e){
	e.preventDefault();
	if($("#widget_login").length > 0)
	site_cf.Fancybox($,{'href':'#widget_login',type: 'inline'});
});


$(document).on("click",".call_backup_sites",function(e){
	e.preventDefault();
	var custom_sites = $(this).data("sites");
	site_cf.FancyboxLoadingShow();
	$.ajax("/ajax/site/getBackupSites.php").done(function(data){
		$div = $("<div style='background: #FFF;'/>");
		$div.append('<div class="backup_sites_header">'+data.site_title+'</div>');
		for(var i in data.sites){
			var site = data.sites[i];
			$div.append('<div class="backup_sites_list"><a target="_blank" href="'+site.link+location.pathname+location.search+location.hash+'">'+site.name+'</a></div>');
		}
		if(custom_sites && typeof custom_sites == "object"){
			for(var i in custom_sites){
				var site = custom_sites[i];
				$div.append('<div class="backup_sites_list"><a target="_blank" href="'+site.link+'">'+site.name+'</a></div>');
			}
		}
		$div.append('<div class="backup_sites_footer"></div>');
		site_cf.Fancybox($,{'content':$("<div/>").append($div).html(),type: 'content', minWidth: 300, margin: 0, autoCenter : true, closeBtn	: true, helpers : { overlay : { closeClick : true } }});
	});

});
(function($){
	$(document).ready(function () {
		var MailData = ["qq.com","163.com","gmail.com","yahoo.com","yahoo.com.tw","yahoo.com.hk","yahoo.com.cn","hotmail.com","pchome.com.tw","outlook.com","livemail.tw"];
		if($.fn.autocomplete){
			$(".email-autocomplete").autocomplete({
				autoFocus: true,
				source: function (request, response) {
					var KeyValue = request.term,
						index = KeyValue.indexOf("@"),
						Address = KeyValue,
						host = "",
						result = [];

					result.push(KeyValue);
					if (index > -1) {
						Address = KeyValue.slice(0, index);
						host = KeyValue.slice(index + 1);
					}
					if (Address) {
						var findedHosts = (host ? $.grep(MailData, function (value) {
							return value.indexOf(host) > -1;
						}) : MailData),
						findedResults = $.map(findedHosts, function (value) {
							return Address + "@" + value;
						});
						result = result.concat($.makeArray(findedResults));
					}
					response(result);
				}
			});
		}
	});
})(jQuery);

/*! ../../public/js/jquery.td_slideclips.js */
/*
 * td_slideclips V1.3 - jQuery plugin
 * 影片預覽
 * 1.2 modified by 2018-03-09
 * 1.3 modified by 2018-08-09 加入影片預覽
 */
(function ($) {
    var DATA_PLUGIN_NAME = "td_slideclips";
    var def_options = {
        url: null,/*取預覽圖的程式網址*/
        videourl: null,/*取影片預覽的網址*/
        skip_ajax: false,/*是否忽略透過參數url取預覽圖,而直接讀取img_url*/
        img_url: null,/*直接以此為預覽圖的網址*/
        uuid: null,/*影片的UUID*/
        time: null,/*影片的長度*/
        imgloading: "",/*loading圖的網址*/
        imgloading_w: 4,/*loading圖的寬比例*/
        imgloading_h: 4,/*loading圖的高比例*/
        img_w: 4,/*預覽圖的寬比例*/
        img_h: 3,/*預覽圖的高比例*/
        imgsize: 2,/*預覽圖的尺寸*/
        keepsrchtml: false,/*未載入前仍顯示原始元素*/
        nexttime: 1000,/*切換下一張圖的時間*/
        playevent: function () {
        },/*播放時的回呼涵式*/
        stop: false
    };
    var baseobj = function (element, options) {
        var _this = this;
        var elementWidth = $(element).outerWidth();
        var elementHeight = $(element).outerHeight();
        var pimg = $("<img/>");
        var player = null;
        var pvideo = $("<video autoplay loop muted disableremoteplayback playsinline/>");
        var pvideo_e = pvideo.get(0);
        var pcanvas = $("<canvas/>");
        var pcanvas_e = pcanvas.get(0);
        var video_l, video_t, video_w, video_h;
        var ctx = null;
        var item_block_class = DATA_PLUGIN_NAME + "-block img-w cover " + ($(element).closest('.pc-one-info-panel').length > 0 ? 'netflix-hover-preview' : '');
        var runhtml = $("<div class='" + item_block_class + " '/>");
        var orghtml = $("<div/>");
        var inited = false;
        var imgloaded = false;
        var isrun = false;
        var isshow = false;
        var interval = false;
        var clipTotal = 0;
        var imgheight = 0;
        var timer = null;
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
        var drawCanvas = function () {
            ctx.drawImage(pvideo_e, video_l, video_t, video_w, video_h);
            timer = requestAnimationFrame(drawCanvas);
        }
        var list_item_class = $(element).closest('.list-preview-item').length > 0 ? '.list-preview-item' : '.owl-item';
        var play = function () {
            if ($.isFunction(_this._options.playevent)) {
                _this._options.playevent.call(_this);
            }
            var nowClipNum = 0;
            if (!isshow) {
                $(element).children().hide();
                $(element).append(runhtml);
                isshow = true;
            }
            runhtml.css({"background-position": "0 0"});
            interval = setInterval(function () {
                if (++nowClipNum >= clipTotal)
                    nowClipNum = 0;
                var h = nowClipNum * imgheight;
                runhtml.css({"background-position": "0 " + (0 - h) + "px"});
            }, _this._options.nexttime);
        };

        var videoplay = function () {
            if (pvideo.attr("src") != _this._options.videourl) {
                videoload(_this._options.videourl);
                return;
            }
            var current_index,
                is_last,
                is_first,
                next_item_class,
                prev_item_class,
                list_start_index,
                list_end_index,
                visible_num
            ;
            if ($.isFunction(_this._options.playevent)) {
                _this._options.playevent.call(_this);
            }
            if (!isshow) {

                $(runhtml).css('opacity', 0);

                $(element).append(runhtml);
                if ($(element).closest('.pc-one-info-panel').length > 0) {
                    $(element).children().css('opacity', 0);
                    $(element).find('.td_slideclips-block').css('opacity', 1);
                    $('.td_slideclips-block').closest(list_item_class).addClass('netflix-show');
                    current_index = $('.td_slideclips-block').closest(list_item_class).index();//0~19
                    visible_num = $('.td_slideclips-block').closest(list_item_class).siblings('.active').length + 1;
                    var is_first;
                    var is_last;

                    if (visible_num === 1 || visible_num === 7) {
                        visible_num = 6;
                    }

                    list_start_index = current_index - (current_index % visible_num);
                    list_end_index = list_start_index + visible_num;

                    if (list_item_class === '.owl-item') {
                        var item_position = $('.td_slideclips-block').closest(list_item_class).prevAll('.active').length;
                        if (item_position === 0) {
                            is_first = true;
                        } else {
                            is_first = false;
                        }

                        if (item_position === visible_num - (visible_num >= 8 ? 2 : 1)) {
                            is_last = true;
                        } else {
                            is_last = false;
                        }

                    } else {
                        is_first = (current_index % visible_num) === 0;
                        is_last = (current_index % visible_num) === visible_num - (visible_num >= 8 ? 2 : 1);

                    }


                    if (is_first || ($('.td_slideclips-block').closest(list_item_class).hasClass('w-20') && current_index === list_start_index)) {
                        $('.td_slideclips-block').addClass('first');
                        $('.td_slideclips-block').closest(list_item_class).find('.content').addClass('first');
                    }
                    if (is_last || ($('.td_slideclips-block').closest(list_item_class).hasClass('w-20') && current_index === list_end_index - 1)) {
                        $('.td_slideclips-block').addClass('last');
                        $('.td_slideclips-block').closest(list_item_class).find('.content').addClass('last');
                    }

                    $('.td_slideclips-block').closest(list_item_class).find('.content').addClass('netflix-hover-preview');

                    $('.td_slideclips-block').closest(list_item_class).parent().find(list_item_class).each(function () {
                        next_item_class = is_first ? 'first' : '';
                        prev_item_class = is_last ? 'last' : '';
                        //列表頁用，計算該行位置並左右位移物件
                        if ($(this).hasClass('w-20') || $(this).hasClass('list-preview-item')) {
                            let list_item_total = $(this).parent().find(list_item_class).length;
                            let is_in_current_row = $(this).index() >= list_start_index && $(this).index() < list_end_index;
                            if (is_in_current_row) {
                                if ($(this).index() < current_index) {
                                    $(this).addClass('netflix-hover-preview-prev ' + prev_item_class);
                                } else if ($(this).index() > current_index) {
                                    $(this).addClass('netflix-hover-preview-next' + ' ' + next_item_class);
                                }
                            }

                        } else {
                            if ($(this).index() < current_index) {
                                $(this).addClass('netflix-hover-preview-prev ' + prev_item_class);
                            } else if ($(this).index() > current_index) {
                                $(this).addClass('netflix-hover-preview-next' + ' ' + next_item_class);
                            }
                        }
                    });
                } else {
                    $(element).children().css('opacity', 0).hide();
                    $(element).find('.td_slideclips-block').css('opacity', 1).show();
                }
                isshow = true;
            }
            var nowClipNum = 0;

            var video_sc, canvas_sc;
            if ($(element).closest('.pc-one-info-panel').parent().hasClass('index')) {
                pcanvas.css({"width": "122%", "height": "100%", "max-height": "330px"});
            } else if ($(element).closest('.pc-one-info-panel').length > 0) {
                pcanvas.css({"width": "100%", "height": "122%", "max-height": "330px"});
            } else {
                pcanvas.css({"width": "100%", "height": "100%"});
            }
            pcanvas_e.width = runhtml.width();
            pcanvas_e.height = runhtml.height();
            ctx = pcanvas_e.getContext('2d');
            video_sc = pvideo_e.videoWidth / pvideo_e.videoHeight;
            canvas_sc = pcanvas_e.width / pcanvas_e.height;
            if (video_sc > canvas_sc) {
                video_l = 0;
                video_w = pcanvas_e.width;
                video_h = video_w / video_sc;
                video_t = (pcanvas_e.height - video_h) / 2;
            } else {
                video_t = 0;
                video_h = pcanvas_e.height;
                video_w = video_h * video_sc;
                video_l = (pcanvas_e.width - video_w) / 2;
            }
            drawCanvas();
            pvideo_e.currentTime = 0;
            pvideo_e.play();
        };

        var imgload = function (img_url, w) {
            pimg.attr("src", img_url).load(function () {
                var h = w / _this._options.img_w * _this._options.img_h;
                var top = (elementHeight - h) / 2;
                var clipHeight = this.naturalWidth / 4 * 3;
                imgheight = h;
                clipTotal = parseInt(this.naturalHeight / clipHeight);
                imgloaded = true;
                runhtml.css({
                    "width": w + "px",
                    "height": h + "px",
                    "margin-left": "0 px",
                    "margin-top": top + "px",
                    "background-image": "url(" + img_url + ")",
                    "background-size": w + "px"
                });
                if (isrun) {
                    play();
                }
            });
        };

        var videoload = function (video_url) {
            pvideo.one("loadeddata", function () {
                imgloaded = true;
                pvideo_e = this;
                runhtml.css({
                    "text-align": "center",
                    "width": "100%",
                    "background-image": "none",
                    "margin-left": "0 px",
                    "margin-top": "0 px",
                    "justify-content": "center",
                    "display": "flex",
                }).html(pcanvas);

                if (isrun) {
                    videoplay();
                }
            }).attr("src", video_url);
        };
        _this._options = options;
        _this.init = function () {
            var w = elementWidth, h = elementHeight;
            var loading_h = 0, loading_w = 0, loading_top = 0, loading_left = 0;
            if ((_this._options.imgloading_w / _this._options.imgloading_h) > (w / h)) {
                loading_w = w;
                loading_h = w / _this._options.imgloading_w * _this._options.imgloading_h;
                loading_top = (h - loading_h) / 2;
            } else {
                loading_h = h;
                loading_w = h / _this._options.imgloading_h * _this._options.imgloading_w;
                loading_left = (w - loading_w) / 2;
            }
            inited = true;
            runhtml.css({
                "width": loading_w + "px",
                "height": loading_h + "px",
                "margin-left": loading_left + "px",
                "margin-top": loading_top + "px",
                "background-image": "url(" + _this._options.imgloading + ")",
                "background-size": loading_w + "px"
            });
            if (_this._options.videourl) {
                videoload(_this._options.videourl);
            } else {

                if (_this._options.skip_ajax) {
                    imgload(_this._options.img_url, w);
                } else {
                    $.ajax({
                        url: _this._options.url,
                        dataType: "json",
                        data:
                            {
                                uuid: _this._options.uuid,
                                time: _this._options.time,
                                imgsize: _this._options.imgsize
                            }
                    }).done(function (data) {
                        imgload(data.img.url, w);
                    });
                }
            }
        };
        _this.run = function (force) {
            if (!isrun) {
                isrun = true;
                if (!_this._options.keepsrchtml && !isshow) {
                    $(element).children().hide();
                    $(element).append(runhtml);

                    isshow = true;
                }

                if (inited) {
                    if (imgloaded) {
                        if (_this._options.videourl) {
                            videoplay();
                        } else {
                            play();
                        }
                    }
                } else {
                    this.init();
                }
            }
        };
        _this.stop = function () {
            if (isrun) {
                $('.netflix-hover-preview-prev')
                    .removeClass('netflix-hover-preview-prev last first')
                $('.td_slideclips-block').closest(list_item_class)
                $('.netflix-hover-preview-next.first,.netflix-hover-preview-next')
                    .removeClass('first')
                    .removeClass('netflix-hover-preview-next');

                $('.td_slideclips-block').closest(list_item_class).find('.content')
                    .removeClass('first')
                    .removeClass('last')
                    .removeClass('netflix-hover-preview');
                if (!_this._options.videourl) {
                    clearInterval(interval);
                }
                if (isshow) {
                    $('.td_slideclips-block').closest(list_item_class).removeClass('netflix-show');

                    if (_this._options.videourl && imgloaded) {
                        pvideo_e.pause();
                        pvideo.attr("src", "");
                        cancelAnimationFrame(timer);
                    }
                    orghtml.append(runhtml);

                    $(element).children().css('opacity', 1).show();
                    isshow = false;
                }
            }
            isrun = false;
            ;
        };
    };
    $.fn[DATA_PLUGIN_NAME] = function (options) {
        return this.each(function (i, el) {
            var _options = $.extend(true, {}, def_options, options, $(this).data());
            var bobj = $(this).data(DATA_PLUGIN_NAME);
            if (!bobj && !_options.stop) {
                bobj = $(this).data(DATA_PLUGIN_NAME, new baseobj(el, _options)).data(DATA_PLUGIN_NAME);
            }
            if (bobj) {
                if (_options.stop) {
                    bobj.stop();
                } else {
                    bobj.run();
                }
            }

        });
    };
})(jQuery);
/*! /resources/static/mv/public/js/just_fun/fun1.js */
(function($){

	$.KeyStepCall = function(KeyStepArray, callback, options){
		var iID = null;
		var nowKeyIndex = 0,nowKeyCode = 0;
		var params = {
				KeyStepTime: 2000
		};
		$.extend(params,options);
		$(window).keydown(function(event){
			if(iID!=null)
				clearTimeout(iID);
			nowKeyCode = KeyStepArray[nowKeyIndex].toString().toUpperCase();
			if($.KeyStepCall.Key[nowKeyCode])
				nowKeyCode = $.KeyStepCall.Key[nowKeyCode];
			if(event.keyCode == nowKeyCode){
				nowKeyIndex++;
				if(nowKeyIndex < KeyStepArray.length){
					iID = setTimeout(function(){nowKeyIndex = 0;},2000);
				}else{
					callback.call( this );
					nowKeyIndex = 0;
				}
			}else{
				nowKeyIndex = 0;
			}
		});
	};
	$.KeyStepCall.Key = {
			LEFT:37,
			UP:38,
			RIGHT:39,
			DOWN:40,
			A:65,
			B:66
	};
})(jQuery);
(function($){
	var KeyStepArray = ["up","up","down","down","left","right","left","right","b","a"];
	var imgArray = ["http://37.media.tumblr.com/2357af2316c8aed1186a3b002253c5b8/tumblr_n4hqh8YdQS1spaqpio8_250.gif",
	                "http://37.media.tumblr.com/63878cd34e7207cd4efc8dd0f93b71bb/tumblr_n4hqh8YdQS1spaqpio2_250.gif"
	                ];
	var maxNum = imgArray.length - 1,minNum = 0,n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	$.KeyStepCall(KeyStepArray,function(){
		n = (n+1)%imgArray.length;
		$(".one_pic img").attr("src",imgArray[n]);
	});

})(jQuery);
(function($){
	var KeyStepArray = ["up","up","down","down","left","right","left","right","a","b"];
	var imgArray = ["http://3.bp.blogspot.com/-51XFAaQ5kTQ/U52GTuFM36I/AAAAAAAAFvA/myWpRsY36rc/s1600/anigif_enhanced-buzz-5684-1385493203-0.gif",
	                "http://2.bp.blogspot.com/-Z0E7KtIChqM/U52GT_Ce62I/AAAAAAAAFu0/45RohqWkn9M/s1600/anigif_enhanced-buzz-5796-1385494525-12.gif",
	                "http://1.bp.blogspot.com/-jZ-WxM3LA28/U52GSVVvc9I/AAAAAAAAFuY/dQBLiMDDLVY/s1600/anigif_enhanced-buzz-11434-1385495918-0.gif",
	                 "http://3.bp.blogspot.com/-2mxD3aXCTPI/U52GS8yjxUI/AAAAAAAAFuk/uxtdf6Nvtns/s1600/anigif_enhanced-buzz-12072-1385492105-11.gif",
	                 "http://2.bp.blogspot.com/-WQ3t54TPodk/U52GXCYWsnI/AAAAAAAAFvo/6x81J2MCA6s/s1600/soccer-dives.gif",
	                ];
	var descArray = ["突如其來的經痛",
	                 "賊喊捉賊",
	                 "摸一下整個人被彈開&#65292;比足球小將還扯",
	                 "老師&#65281;老師&#65281;小明踩小華的腳趾頭&#65281;",
	                 "膝蓋直通顏面神經",
	                ];
	var maxNum = imgArray.length - 1,minNum = 0,n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
	$.KeyStepCall(KeyStepArray,function(){
		n = (n+1)%imgArray.length;
		var $div = $("<div/>").css({"position": "relative","overflow": "hidden"});
		var $img = $("<img/>").attr("src",imgArray[n]).css({"position": "absolute"});
		$("body").append($div.append($img));
		$img.load(function(e){
			$div.css({"overflow":"visible","width":$img.width(),"height":$img.height()});
			site_cf.Fancybox($,{closeBtn: true, title: descArray[n], type: 'content',content:$("<div/>").append($div).html()});
			$div.remove();
		});
	});
})(jQuery);

(function($){
	var KeyStepArray = ["up","up","down","down","left","right","left","right","b","b"];
	$.KeyStepCall(KeyStepArray,function(){
		site_cf.Fancybox($,{closeBtn: true, type: 'iframe', height: "736", width: "414", minHeight: "736", href: js_site.options.siteroot + "games.php?gt=treasure&iframe=1",
			iframe: {
			scrolling : 'no',
			preload   : true
			},
			afterShow : function(){
				$(".fancybox-inner").css("overflow", "hidden");
			}
		});
		var script_tag = document.createElement('script');
	      script_tag.setAttribute("type", "text/javascript");
	      script_tag.setAttribute("src", js_site.options.siteroot + "js/negi_plus/negi_plus.js?v=3");
	      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	});
})(jQuery);

(function($){
	var KeyStepArray = ["up","up","down","down","left","right","left","right","a","a"];
	$.KeyStepCall(KeyStepArray,function(){
		site_cf.Fancybox($,{closeBtn: true, type: 'iframe', width: "360", height: "630", href:"http://flash.7k7k.com/cms/cms10/20141015/1659112946/1/index.html"});
	});
})(jQuery);


/*! /resources/static/all/public/js/jquery.hc-sticky.js */
// jQuery HC-Sticky
// =============
// Version: 1.2.4
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// Plugin URL: https://github.com/somewebmedia/hc-sticky
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php
// Description: Cross-browser jQuery plugin that makes any element attached to the page and always visible while you scroll.

(function($, window, undefined) {
	"use strict";

	// console.log shortcut
	var log = function(t){console.log(t)};

	var $window = $(window),
		document = window.document,
		$document = $(document);

	// detect IE version
	var ie = (function(){var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i'); while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]){}; return v > 4 ? v : undef})();

	/*----------------------------------------------------
						Global functions
	----------------------------------------------------*/

	// check for scroll direction and speed
	var getScroll = function() {
		var pageXOffset = window.pageXOffset !== undefined ? window.pageXOffset : (document.compatMode == "CSS1Compat" ? window.document.documentElement.scrollLeft : window.document.body.scrollLeft),
			pageYOffset = window.pageYOffset !== undefined ? window.pageYOffset : (document.compatMode == "CSS1Compat" ? window.document.documentElement.scrollTop : window.document.body.scrollTop);

		if (typeof getScroll.x == 'undefined') {
			getScroll.x = pageXOffset;
			getScroll.y = pageYOffset;
		}
		if (typeof getScroll.distanceX == 'undefined') {
			getScroll.distanceX = pageXOffset;
			getScroll.distanceY = pageYOffset;
		} else {
			getScroll.distanceX = pageXOffset - getScroll.x;
			getScroll.distanceY = pageYOffset - getScroll.y;
		}

		var diffX = getScroll.x - pageXOffset,
			diffY = getScroll.y - pageYOffset;

		getScroll.direction = diffX < 0 ? 'right' :
			diffX > 0 ? 'left' :
			diffY <= 0 ? 'down' :
			diffY > 0 ? 'up' : 'first';

		getScroll.x = pageXOffset;
		getScroll.y = pageYOffset;
	};
	$window.on('scroll', getScroll);


	// little original style plugin
	$.fn.style = function(style) {
		if (!style) return null;

		var $this = $(this),
			value;

		// clone element
		var $clone = $this.clone().css('display','none');
		// randomize the name of cloned radio buttons, otherwise selections get screwed
		$clone.find('input:radio').attr('name','copy-' + Math.floor((Math.random()*100)+1));
		// insert clone to DOM
		$this.after($clone);

		var getStyle = function(el, style){
			var val;
			if (el.currentStyle) {
				// replace dashes with capitalized letter, e.g. padding-left to paddingLeft
				val = el.currentStyle[style.replace(/-\w/g, function(s){return s.toUpperCase().replace('-','')})];
			} else if (window.getComputedStyle) {
				val = document.defaultView.getComputedStyle(el,null).getPropertyValue(style);
			}
			// check for margin:auto
			val = (/margin/g.test(style)) ? ((parseInt(val) === $this[0].offsetLeft) ? val : 'auto') : val;
			return val;
		};

		if (typeof style == 'string') {
			value = getStyle($clone[0], style);
		} else {
			value = {};
			$.each(style, function(i, s){
				value[s] = getStyle($clone[0], s);
			});
		}

		// destroy clone
		$clone.remove();

		return value || null;
	};


	/*----------------------------------------------------
						jQuery plugin
	----------------------------------------------------*/

	$.fn.extend({

		hcSticky: function(options) {

			// check if selected element exist in DOM, user doesn't have to worry about that
			if (this.length == 0) return this;

			this.pluginOptions('hcSticky', {
				top: 0,
				bottom: 0,
				bottomEnd: 0,
				innerTop: 0,
				innerSticker: null,
				className: 'sticky',
				wrapperClassName: 'wrapper-sticky',
				stickTo: null,
				responsive: true,
				followScroll: true,
				offResolutions: null,
				onStart: $.noop,
				onStop: $.noop,
				on: true,
				fn: null // used only by the plugin
			}, options || {}, {
				reinit: function(){
					// just call itself again
					$(this).hcSticky();
				},
				stop: function(){
					$(this).pluginOptions('hcSticky', {on: false}).each(function(){
						var $this = $(this),
							options = $this.pluginOptions('hcSticky'),
							$wrapper = $this.parent('.' + options.wrapperClassName);

						// set current position
						var top = $this.offset().top - $wrapper.offset().top;
						$this.css({
							position: 'absolute',
							top: top,
							bottom: 'auto',
							left: 'auto',
							right: 'auto'
						}).removeClass(options.className);
					});
				},
				off: function(){
					$(this).pluginOptions('hcSticky', {on: false}).each(function(){
						var $this = $(this),
							options = $this.pluginOptions('hcSticky'),
							$wrapper = $this.parent('.' + options.wrapperClassName);

						// clear position
						$this.css({
							position: 'relative',
							top: 'auto',
							bottom: 'auto',
							left: 'auto',
							right: 'auto'
						}).removeClass(options.className);

						$wrapper.css('height', 'auto');
					});
				},
				on: function(){
					$(this).each(function(){
						$(this).pluginOptions('hcSticky', {
							on: true,
							remember: {
								offsetTop: $window.scrollTop()
							}
						}).hcSticky();
					});
				},
				destroy: function(){
					var $this = $(this),
						options = $this.pluginOptions('hcSticky'),
						$wrapper = $this.parent('.' + options.wrapperClassName);

					// reset position to original
					$this.removeData('hcStickyInit').css({
						position: $wrapper.css('position'),
						top: $wrapper.css('top'),
						bottom: $wrapper.css('bottom'),
						left: $wrapper.css('left'),
						right: $wrapper.css('right')
					}).removeClass(options.className);

					// remove events
					$window.off('resize', options.fn.resize).off('scroll', options.fn.scroll);

					// destroy wrapper
					$this.unwrap();
				}
			});

			// on/off settings
			if (options && typeof options.on != 'undefined') {
				if (options.on) {
					this.hcSticky('on');
				} else {
					this.hcSticky('off');
				}
			}

			// stop on commands
			if (typeof options == 'string') return this;

			// do our thing
			return this.each(function(){

				var $this = $(this),
					options = $this.pluginOptions('hcSticky');

				var $wrapper = (function(){ // wrapper exists
						var $this_wrapper = $this.parent('.' + options.wrapperClassName);
						if ($this_wrapper.length > 0) {
							$this_wrapper.css({
								'height': $this.outerHeight(true),
								'width': (function(){
									// check if wrapper already has width in %
									var width = $this_wrapper.style('width');
									if (width.indexOf('%') >= 0 || width == 'auto') {
										if ($this.css('box-sizing') == 'border-box' || $this.css('-moz-box-sizing') == 'border-box') {
											$this.css('width', $this_wrapper.width());
										} else {
											$this.css('width', $this_wrapper.width() - parseInt($this.css('padding-left') - parseInt($this.css('padding-right'))));
										}
										return width;
									} else {
										return $this.outerWidth(true);
									}
								})()
							});
							return $this_wrapper;
						} else {
							return false;
						}
					})() || (function(){ // wrapper doesn't exist

						var this_css = $this.style(['width', 'margin-left', 'left', 'right', 'top', 'bottom', 'float', 'display']);
						var display = $this.css('display');

						var $this_wrapper = $('<div>', {
							'class': options.wrapperClassName
						}).css({
							'display': display,
							'height': $this.outerHeight(true),
							'width': (function(){
								if (this_css['width'].indexOf('%') >= 0 || (this_css['width'] == 'auto' && display != 'inline-block' && display != 'inline')) { // check if element has width in %
									$this.css('width', parseFloat($this.css('width')));
									return this_css['width'];
								} else if (this_css['width'] == 'auto' && (display == 'inline-block' || display == 'inline')) {
									return $this.width();
								} else {
									// check if margin is set to 'auto'
									return (this_css['margin-left'] == 'auto') ? $this.outerWidth() : $this.outerWidth(true);
								}
							})(),
							'margin': (this_css['margin-left']) ? 'auto' : null,
							'position': (function(){
								var position = $this.css('position');
								return position == 'static' ? 'relative' : position;
							})(),
							'float': this_css['float'] || null,
							'left': this_css['left'],
							'right': this_css['right'],
							'top': this_css['top'],
							'bottom': this_css['bottom'],
							'vertical-align': 'top'
						});

						$this.wrap($this_wrapper);

						// ie7 inline-block fix
						if (ie === 7) {
							if ($('head').find('style#hcsticky-iefix').length === 0) {
								$('<style id="hcsticky-iefix">.' + options.wrapperClassName + ' {zoom: 1;}</style>').appendTo('head');
							}
						}

						// return appended element
						return $this.parent();
					})();


				// check if we should go further
				if ($this.data('hcStickyInit')) return;
				// leave our mark
				$this.data('hcStickyInit', true);


				// check if referring element is document
				var stickTo_document = options.stickTo && (options.stickTo == 'document' || (options.stickTo.nodeType && options.stickTo.nodeType == 9) || (typeof options.stickTo == 'object' && options.stickTo instanceof (typeof HTMLDocument != 'undefined' ? HTMLDocument : Document))) ? true : false;

				// select container ;)
				var $container = options.stickTo
					? stickTo_document
						? $document
						: typeof options.stickTo == 'string'
							? $(options.stickTo)
							: options.stickTo
					: $wrapper.parent();

				// clear sticky styles
				$this.css({
					top: 'auto',
					bottom: 'auto',
					left: 'auto',
					right: 'auto'
				});

				// attach event on entire page load, maybe some images inside element has been loading, so chek height again
				$window.load(function(){
					if ($this.outerHeight(true) > $container.height()) {
						$wrapper.css('height', $this.outerHeight(true));
						$this.hcSticky('reinit');
					}
				});

				// functions for attachiung and detaching sticky
				var _setFixed = function(args) {
						// check if already floating
						if ($this.hasClass(options.className)) return;

						// apply styles
						args = args || {};
						$this.css({
							position: 'fixed',
							top: args.top || 0,
							left: args.left || $wrapper.offset().left
						}).offset({
							
						}).addClass(options.className);

						// start event
						options.onStart.apply(this);
					},
					_reset = function(args) {
						args = args || {};
						args.position = args.position || 'absolute';
						args.top = args.top || 0;
						args.left = args.left || 0;

						// check if we should apply css
						if ($this.css('position') != 'fixed' && parseInt($this.css('top')) == args.top) return;

						// apply styles
						$this.css({
							position: args.position,
							top: args.top,
							left: args.left
						}).removeClass(options.className);

						// stop event
						options.onStop.apply(this);
					};

				// sticky scroll function
				var onScroll = function(init) {

					// check if we need to run sticky
					if (!options.on || $this.outerHeight(true) >= $container.height()) return;

					var top_spacing = (options.innerSticker) ? $(options.innerSticker).position().top : ((options.innerTop) ? options.innerTop : 0),
						wrapper_inner_top = $wrapper.offset().top,
						bottom_limit = $container.height() - options.bottomEnd + (stickTo_document ? 0 : wrapper_inner_top),
						top_limit = $wrapper.offset().top - options.top + top_spacing,
						this_height = $this.outerHeight(true) + options.bottom,
						window_height = $window.height(),
						offset_top = $window.scrollTop(),
						this_document_top = $this.offset().top,
						this_window_top = this_document_top - offset_top - (this_height - options.bottom - $this.outerHeight()),
						bottom_distance;


					// if sticky has been restarted with on/off wait for it to reach top or bottom
					if (typeof options.remember != 'undefined' && options.remember) {

						var position_top = this_document_top - options.top - top_spacing;

						if (this_height - top_spacing > window_height && options.followScroll) { // element bigger than window with follow scroll on

							if (position_top < offset_top && offset_top + window_height <= position_top + $this.height()) {
								// element is in the middle of the screen, let our primary calculations do the work
								options.remember = false;
							}

						} else { // element smaller than window or follow scroll turned off

							if (options.remember.offsetTop > position_top) {
								// slide up
								if (offset_top <= position_top) {
									_setFixed({
										top: options.top - top_spacing
									});
									options.remember = false;
								}
							} else {
								// slide down
								if (offset_top >= position_top) {
									_setFixed({
										top: options.top - top_spacing
									});
									options.remember = false;
								}
							}

						}

						return;
					}


					if (offset_top > top_limit) {

						// http://geek-and-poke.com/geekandpoke/2012/7/27/simply-explained.html

						if (bottom_limit + options.bottom - (options.followScroll && window_height < this_height ? 0 : options.top) <= offset_top + this_height - top_spacing - ((this_height - top_spacing > window_height - (top_limit - top_spacing) && options.followScroll) ? (((bottom_distance = this_height - window_height - top_spacing) > 0) ? bottom_distance : 0) : 0)) {
							// bottom reached end
							_reset({
								top: bottom_limit - this_height + options.bottom - wrapper_inner_top
							});
						} else if (this_height - top_spacing > window_height && options.followScroll) {

							if (this_window_top + this_height <= window_height) { // element bigger than window with follow scroll on

								if (getScroll.direction == 'down') {
									// scroll down
									_setFixed({
										top: window_height - this_height
									});
								} else {
									// scroll up
									if (this_window_top < 0 && $this.css('position') == 'fixed') {
										_reset({
											top: this_document_top - (top_limit + options.top - top_spacing) - getScroll.distanceY
										});
									}
								}

							} else { // element smaller than window or follow scroll turned off

								if (getScroll.direction == 'up' && this_document_top >= offset_top + options.top - top_spacing) {
									// scroll up
									_setFixed({
										top: options.top - top_spacing
									});
								} else if (getScroll.direction == 'down' && this_document_top + this_height > window_height && $this.css('position') == 'fixed') {
									// scroll down
									_reset({
										top: this_document_top - (top_limit + options.top - top_spacing) - getScroll.distanceY
									});
								}

							}
						} else {
							// starting (top) fixed position
							_setFixed({
								top: options.top - top_spacing
							});
						}
					} else {
						// reset
						_reset();
					}

				};


				// store resize data in case responsive is on
				var resize_timeout = false,
					$resize_clone = false;

				var onResize = function() {

					// check if sticky is attached to scroll event
					attachScroll();

					// check for off resolutions
					checkResolutions();

					var setLeft = function(){
						// set new left position
						if ($this.css('position') == 'fixed') {
							$this.css('left', $wrapper.offset().left);
						} else {
							$this.css('left', 0);
						}
					};

					// check for width change (css media queries)
					if (options.responsive) {
						// clone element and make it invisible
						if (!$resize_clone) {
							$resize_clone = $this.clone().attr('style', '').css({
								visibility: 'hidden',
								height: 0,
								overflow: 'hidden',
								paddingTop: 0,
								paddingBottom: 0,
								marginTop: 0,
								marginBottom: 0
							});
							$wrapper.after($resize_clone);
						}

						var wrapper_width = $wrapper.style('width');
						var resize_clone_width = $resize_clone.style('width');

						if (resize_clone_width == 'auto' && wrapper_width != 'auto') {
							resize_clone_width = parseInt($this.css('width'));
						}

						// recalculate wrpaeer width
						if (resize_clone_width != wrapper_width) {
							$wrapper.width(resize_clone_width);
						}

						// clear previous timeout
						if (resize_timeout) {
							clearTimeout(resize_timeout);
						}
						// timedout destroing of cloned elements
						resize_timeout = setTimeout(function() {
							// clear timeout id
							resize_timeout = false;
							// destroy cloned element
							$resize_clone.remove();
							$resize_clone = false;

							// set new left position
							setLeft();

						}, 100);
					} else {
						// set new left position
						setLeft();
					}

					// recalculate inner element width (maybe original width was in %)
					if ($this.outerWidth(true) != $wrapper.width()) {
						var this_w = ($this.css('box-sizing') == 'border-box' || $this.css('-moz-box-sizing') == 'border-box')
							? $wrapper.width()
							: $wrapper.width() - parseInt($this.css('padding-left')) - parseInt($this.css('padding-right'));
						// subtract margins
						this_w = this_w - parseInt($this.css('margin-left')) - parseInt($this.css('margin-right'));
						// set new width
						$this.css('width', this_w);
					}
				};


				// remember scroll and resize callbacks so we can attach and detach them
				$this.pluginOptions('hcSticky', {fn: {
					scroll: onScroll,
					resize: onResize
				}});


				// check for off resolutions
				var checkResolutions = function(){
					if (options.offResolutions) {
						// convert to array
						if (!$.isArray(options.offResolutions)) {
							options.offResolutions = [options.offResolutions];
						}

						var isOn = true;

						$.each(options.offResolutions, function(i, rez){
							if (rez < 0) {
								// below
								if ($window.width() < rez * -1) {
									isOn = false;
									$this.hcSticky('off');
								}
							} else {
								// abowe
								if ($window.width() > rez) {
									isOn = false;
									$this.hcSticky('off');
								}
							}
						});

						// turn on again
						if (isOn && !options.on) {
							$this.hcSticky('on');
						}
					}
				};
				checkResolutions();


				// attach resize function to event
				$window.on('resize', onResize);


				// attaching scroll function to event
				var attachScroll = function(){
					// check if element height is bigger than the content
					if ($this.outerHeight(true) < $container.height()) {
						var isAttached = false;
						if ($._data(window, 'events').scroll != undefined) {
							$.each($._data(window, 'events').scroll, function(i, f){
								if (f.handler == options.fn.scroll) {
									isAttached = true;
								}
							});
						}
						if (!isAttached) {
							// run it once to disable glitching
							options.fn.scroll(true);
							// attach function to scroll event only once
							$window.on('scroll', options.fn.scroll);
						}
					}
				};
				attachScroll();

			});
		}
	});

})(jQuery, this);



// jQuery HC-PluginOptions
// =============
// Version: 1.0
// Copyright: Some Web Media
// Author: Some Web Guy
// Author URL: http://twitter.com/some_web_guy
// Website: http://someweblog.com/
// License: Released under the MIT License www.opensource.org/licenses/mit-license.php

(function($, undefined) {
	"use strict";

	$.fn.extend({

		pluginOptions: function(pluginName, defaultOptions, userOptions, commands) {

			// create object to store data
			if (!this.data(pluginName)) this.data(pluginName, {});

			// return options
			if (pluginName && typeof defaultOptions == 'undefined') return this.data(pluginName).options;

			// update
			userOptions = userOptions || (defaultOptions || {});

			if (typeof userOptions == 'object' || userOptions === undefined) {

				// options
				return this.each(function(){
					var $this = $(this);

					if (!$this.data(pluginName).options) {
						// init our options and attach to element
						$this.data(pluginName, {options: $.extend(defaultOptions, userOptions || {})});
						// attach commands if any
						if (commands) {
							$this.data(pluginName).commands = commands;
						}
					} else {
						// update existing options
						$this.data(pluginName, $.extend($this.data(pluginName), {options: $.extend($this.data(pluginName).options, userOptions || {})}));
					}
				});

			} else if (typeof userOptions == 'string') {

				return this.each(function(){
					$(this).data(pluginName).commands[userOptions].call(this);
				});

			} else {

				return this;

			}

		}

	});

})(jQuery);
/*! fontawesome.js */
window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://kit-free.fontawesome.com","license":"free","method":"css","minify":{"enabled":true},"v4shim":{"enabled":true},"version":"latest"};
!function(){!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var e,t,n,i=Array.prototype,o=i.push,a=i.splice,s=i.join;r.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);a.call(this,t,1),this.el.className=this.toString()}},toString:function(){return s.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=r,e=Element.prototype,t="classList",n=function(){return new r(this)},Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}function r(e){for(var t=(this.el=e).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}}();function f(e){var t,n,i,o;prefixesArray=e||["fa"],prefixesSelectorString="."+Array.prototype.join.call(e,",."),t=document.querySelectorAll(prefixesSelectorString),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),i=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only"),n&&i&&((o=document.createElement("span")).innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling))})}var e,t,u=function(e){var t=document.createElement("link");t.href=e,t.media="all",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)},m=function(e){!function(e,t,n){var i,o=window.document,a=o.createElement("link");if(t)i=t;else{var s=(o.body||o.getElementsByTagName("head")[0]).childNodes;i=s[s.length-1]}var r=o.styleSheets;a.rel="stylesheet",a.href=e,a.media="only x",function e(t){if(o.body)return t();setTimeout(function(){e(t)})}(function(){i.parentNode.insertBefore(a,t?i:i.nextSibling)});var l=function(e){for(var t=a.href,n=r.length;n--;)if(r[n].href===t)return e();setTimeout(function(){l(e)})};function c(){a.addEventListener&&a.removeEventListener("load",c),a.media=n||"all"}a.addEventListener&&a.addEventListener("load",c),(a.onloadcssdefined=l)(c)}(e)},n=function(e,t){var n=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,i=t&&void 0!==t.async?t.async:void 0,o=t&&void 0!==t.autoA11y?t.autoA11y:void 0,a=document.createElement("script"),s=document.scripts[0];a.src=e,void 0!==o&&a.setAttribute("data-auto-a11y",o?"true":"false"),n&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",t.fetchSvgFrom)),i&&a.setAttributeNode(document.createAttribute("defer")),s.parentNode.appendChild(a)};function h(e,t){var n=t&&t.shim?e.license+"-v4-shims":e.license,i=t&&t.minify?".min":"";return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+e.method+"/"+n+i+"."+e.method}try{if(window.FontAwesomeKitConfig){var i=window.FontAwesomeKitConfig;"js"===i.method&&(t={async:(e=i).asyncLoading.enabled,autoA11y:e.autoA11y.enabled},"pro"===e.license&&(t.autoFetchSvg=!0,t.fetchSvgFrom=e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/svgs"),e.v4shim.enabled&&n(h(e,{shim:!0,minify:e.minify.enabled})),n(h(e,{minify:e.minify.enabled}),t)),"css"===i.method&&function(e){var t,n,i,o,a,s,r,l,c=f.bind(f,["fa","fab","fas","far","fal"]);e.autoA11y.enabled&&(n=c,o=[],a=document,s=a.documentElement.doScroll,r="DOMContentLoaded",(l=(s?/^loaded|^c/:/^loaded|^i|^c/).test(a.readyState))||a.addEventListener(r,i=function(){for(a.removeEventListener(r,i),l=1;i=o.shift();)i()}),l?setTimeout(n,0):o.push(n),t=c,"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})),e.v4shim.enabled&&(e.asyncLoading.enabled?m(h(e,{shim:!0,minify:e.minify.enabled})):u(h(e,{shim:!0,minify:e.minify.enabled})));var d=h(e,{minify:e.minify.enabled});e.asyncLoading.enabled?m(d):u(d)}(i)}}catch(e){}}();

/*! design.js */
$(document).ready(function () {
    resizeSlider();
    $(window).resize(function () {
        resizeSlider();
    });

    if ($('.header-lg').length > 0) {
        $("body").addClass("pt-xl-0");
    }

    $('.owl-carousel').owlCarousel();

    $('.popit').click(function () {
        var ID = $(this).attr('id');
        var target = '#' + ID + '-pop';
        $(target).fadeIn();
        $('body').css({'overflow': 'hidden'});
    });

    $('.popup').find('.close-x,.close').click(function () {
        $(this).closest('.popup').fadeOut();
        $('body').removeAttr('style');
    });

    $('.hint').find('.close').click(function () {
        var W = 0 - $(this).closest('.hint').outerWidth();
        $(this).closest('.hint').animate({left: W}).fadeOut(300);
    });

    // 漣漪效果
    $('.btn-ripple:not(.active)').append('<div class="ripple"></div>');
    $('.btn-ripple').mousedown(function (e) {
        var ripple = $(this).find(".ripple");
        if ($(this).hasClass('active')) {
            $(this).remove('.ripple')
        } else {
            ripple.removeClass("ripple-animate");
            var x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
            var y = parseInt(e.pageY - $(this).offset().top) + ripple.height() * 1.5;
            ripple.css({
                top: y,
                left: x
            }).addClass("ripple-animate");
        }
    });
    $(document).on('click', '.tab-title', function () {
        if ($(this).closest('.tab-collapse').length > 0) {
            return;
        }

        $(this).addClass('active').siblings().removeClass('active');

        if (($(this).parent().hasClass('.tab-switch').length === 0)) {
            $(this).siblings().find('.ripple').remove();
            $(this).siblings('.tab-title').not('.active').each(function (e) {
                $(this).append('<div class="ripple"></div>');
            });
            $(target).siblings('.tab-content').find('.ripple').removeClass('ripple-animate');
        }

        //首頁tab跳過，使用.home-main 特別處理
        if ($(this).closest('.home-main').length > 0) {
            return;
        }
        var ID = $(this).attr('id');
        var target = '#' + ID + '-block';
        $(target).show().siblings('.tab-content').hide();
    });
    $('.tab-group').each(function () {
        $(this).find('.tab-content').first().show();
    });
    $('.home-main .tab-switch .tab-title.h2').click(function () {
        var current_id = $(this).attr('id');
        var target = '#' + current_id + '-block';
        location.href = $(target).attr('data-href');
    });
    $('.home-main .tab-switch .tab-title:not(.h2)').click(function () {

        var sibling_target = $(this).siblings('.tab-title');
        var ID = sibling_target.attr('id');
        var current_title = $(this).html();
        var current_id = $(this).attr('id');
        var target = '#' + current_id + '-block';
        $(this).css('cursor', 'pointer').attr('id', sibling_target.attr('id')).html(sibling_target.html());
        sibling_target.attr('id', current_id).html(current_title);
        $(target).show().siblings('.tab-content').hide();
    });

    $('.tab-collapse .tab-title').click(function () {
        $(this).toggleClass('active').siblings().removeClass('active');
        var target = '#' + $(this).attr('id') + '-block';
        $(target).siblings().slideUp();
        $(target).slideToggle();
    })

    $('.dropdown').find('.open').click(function () {
        if ($(this).find('.fas').hasClass('arrow-up')) {
            $('.dropdown').find('.fas').removeClass('arrow-up');
            $('.dropdown').find('.dropdown-block').slideUp();
            $(this).find('.fas').removeClass('arrow-up')
            $(this).siblings('.dropdown-block').slideUp('fast');
        } else {
            $('.dropdown').find('.fas').removeClass('arrow-up');
            $('.dropdown').find('.dropdown-block').slideUp();
            $(this).find('.fas').toggleClass('arrow-up')
            $(this).siblings('.dropdown-block').slideToggle('fast');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('.totop').fadeIn(300);
        } else {
            $('.totop').fadeOut(300);
        }
    });
    $('.totop').click(function () {
        $('html, body').animate({scrollTop: 0});
        $(this).fadeOut();
        return false;
    })

    $('.search-block .btn-open').click(function () {
        $(this).siblings('.search').toggleClass('open');
        $(this).find('i.fas').toggleClass('fa-search fa-times');
    });

    $('.menu-mobile').click(function () {
        $('.menu-mobile-block').toggleClass('open');
        $('.search-mobile-block').removeClass('open');
        if ($('.menu-mobile-block').hasClass('open')) {
            $('body').css({'overflow': 'hidden'});
            $('.mobile-menu-bg').fadeIn();
        } else {
            $('body').removeAttr('style');
            $('.mobile-menu-bg').fadeOut();
        }
    });
    $('.search-mobile').click(function () {
        $('.search-mobile-block').toggleClass('open');
        $('.menu-mobile-block').removeClass('open');
        if ($('.search-mobile-block').hasClass('open')) {
            $('body').css({'overflow': 'hidden'});
            $('.mobile-menu-bg').fadeIn();
        } else {
            $('body').removeAttr('style');
            $('.mobile-menu-bg').fadeOut();
        }
    });
    $('.mobile-menu-bg').click(function () {
        $('.mobile-menu-dropdown').children().removeClass('open');
        $(this).fadeOut();
        $('body').removeAttr('style');
    })


    // $(".play-video").on("loadstart", function() {
    //     var H = $(this).outerHeight();
    //     $('.play-block').outerHeight(H);
    // });

    // var videoH = $('.play-video video').outerHeight();
    // $('.video-block').outerHeight(videoH);

    $('.collapse .collapse-btn').click(function (e) {
        var Parent = $(this).parent('.collapse');
        var ParentW = 0 - Parent.outerWidth();
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            Parent.animate({right: ParentW});
            Parent.css('position', 'absolute');
            $('.player_frame video').css('object-fit', 'contain');
        } else {
            $('.player_frame video').css('object-fit', 'fill');
            Parent.animate({right: '0'});
            Parent.css('position', 'relative');

        }
        // var videoH = $('.play-video video').outerHeight();
        // $('.video-block').outerHeight(videoH);

    });

    $('.select').parent('.btn').click(function () {
        $(this).toggleClass('active').find('.far').toggleClass('fa-circle fa-dot-circle');
        if ($(this).hasClass('radio-select')) {
            $(this).siblings().removeClass('active').find('.far').removeClass('fa-dot-circle').addClass('fa-circle');
        }

    });

    // 儲值頁面 payment

    $('.payment').find('.tab-content .btn').click(function () {
        $(this).toggleClass('active').parent('li').siblings().find('.btn').removeClass('active');
        $(this).closest('.tab-content').siblings('.tab-content').find('.btn').removeClass('active');

        var PRICE = $(this).find('.now_price.price').data('refprice');
        var Counter = $(this).closest('.tab-group').closest('.row').siblings().find('.counter');
        var PLAN = $(this).find('.title').text();
        var CURRENCY = $(this).find('.now_price.price').data('currency');
        var DAYS = $(this).find('.now_price.price').data('days');
        var DALLOR = $(this).find('.now_price_point').text();
        var DALLORPOINT = $(this).find('.pay_case_amount').text();
        if(!DALLOR || DAYS < 30 ){
            var TOTAL = Math.round(DALLORPOINT * 100) / 100;            
        }else{
            var TOTAL = Math.round(DALLOR * DAYS / 30 * 100) / 100;
        }
        

        $('.select').closest('.radio-select').removeClass('active').find('.far').removeClass('fa-dot-circle').addClass('fa-circle');

        if ($(this).hasClass('active')) {
            $('.payment-way').slideDown();
            Counter.find('b.h3').text("$" + TOTAL);
            $('.payment').find('.counter .plan').text(PLAN);
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".payment-way").offset().top - $('.header').outerHeight()
            }, 500);
        } else {
            $('.payment-way').slideUp();
            Counter.find('b.h3').text('$0');
            $('.payment .counter').find('.confirm').addClass('btn-fail');
        }
    });

    $('.payment-way').find('.ptid.btn').click(function () {
        $(this).closest('ul').find('.ptid.btn').removeClass('active');
        $(this).addClass('active');
        if (!$(this).hasClass('active')) {
            $('.payment .counter').find('.confirm').addClass('btn-fail').attr('disabled', true);
        } else {
            $('.payment .counter').find('.confirm').removeClass('btn-fail').attr('disabled', false);
        }
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.confirm').offset().top - 500
        }, 500);
    });

    $('.slip').each(function () {
        /**/
        var currentActive = $(this).find('.tab-title.active');
        if (currentActive.length > 0) {
            var L = currentActive.offset().left - currentActive.parent('.slip').offset().left;
            var W = currentActive.outerWidth();
            var W2 = W / 2;
            var item = currentActive.siblings('.slip-icon');
            var itemW = currentActive.siblings('.slip-icon.arrow').outerWidth() / 2;
            var L2 = L + (W2 - itemW);

            if (item.hasClass('bottomline')) {
                item.animate({'left': L}).outerWidth(W);
            } else if (item.hasClass('arrow')) {
                item.animate({'left': L2});
            }
        } else {
            var eachBtnW = $(this).find('.btn').outerWidth();
            var eachBtnW2 = eachBtnW / 2;
            var eachItemW = $(this).find('.slip-icon.arrow').outerWidth() / 2;
            $(this).find('.slip-icon.bottomline').outerWidth(eachBtnW);
            $(this).find('.slip-icon.arrow').animate({'left': eachBtnW2 - eachItemW});
        }
    });

    function initSlipPosition() {
        $('.slip .arrow.slip-icon').each(function () {
            if ($(this).css('left') === '0px') {

                $(this).animate({'left': '2em'});
            }
        });
    }

    $('.slip').find('.btn').click(function () {
        initSlipPosition();
        var L = $(this).offset().left - $(this).parent('.slip').offset().left;
        var W = $(this).outerWidth();
        var W2 = W / 2;
        var item = $(this).siblings('.slip-icon');
        var itemW = $(this).siblings('.slip-icon.arrow').outerWidth() / 2;
        var L2 = L + (W2 - itemW);

        if (item.hasClass('bottomline')) {
            item.animate({'left': L}).outerWidth(W);
        } else if (item.hasClass('arrow')) {
            item.animate({'left': L2});
        }
    });

    $('.join-form').find('.radio-select').click(function () {
        $(this).closest('.join-form').find('.btn-lg').toggleClass('btn-fail btn-secondary');
    });
    $('.join .log').find('.btn-third').click(function () {
        var joinFromPos = $('.join').find('.joinnow').offset().top - $('.header-sm').outerHeight();
        $([document.documentElement, document.body]).animate({scrollTop: joinFromPos}, 500);
    })

})

function resizeSlider() {
    var headerHeight = $('.header').outerHeight(); // 獲取 header 的高度，包括 padding 和 border
    $('.bn-slider').css('margin-top', headerHeight + 'px'); // 設置 slider 的 margin-top
}

/*! jwplayer.js */

window.jwplayer=function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n=window.webpackJsonpjwplayer;window.webpackJsonpjwplayer=function(i,o){for(var a,s,l=0,u=[];l<i.length;l++)s=i[l],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in o)e[a]=o[a];for(n&&n(i,o);u.length;)u.shift().call(null,t)};var i={},r={0:0};return t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void 0!==r[e])r[e].push(n);else{r[e]=[n];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+({1:"jwplayer.controls",2:"provider.hlsjs",3:"provider.shaka",4:"provider.cast",5:"provider.html5",6:"provider.flash",7:"polyfills.intersection-observer",8:"provider.airplay",9:"provider.youtube",10:"polyfills.vttrenderer",11:"polyfills.promise",12:"polyfills.base64",13:"vttparser"}[e]||e)+".js",i.appendChild(o)}},t.m=e,t.c=i,t.p="",t(0)}([function(e,t,n){e.exports=n(152)},function(e,t,n){var i,r;i=[],r=function(){var e={},t=Array.prototype,n=Object.prototype,i=Function.prototype,r=t.slice,o=t.concat,a=n.toString,s=n.hasOwnProperty,l=t.map,u=t.reduce,c=t.forEach,d=t.filter,f=t.every,p=t.some,h=t.indexOf,g=Array.isArray,v=Object.keys,m=i.bind,y=function k(e){return e instanceof k?e:this instanceof k?void 0:new k(e)},w=y.each=y.forEach=function(t,n,i){var r,o;if(null==t)return t;if(c&&t.forEach===c)t.forEach(n,i);else if(t.length===+t.length){for(r=0,o=t.length;r<o;r++)if(n.call(i,t[r],r,t)===e)return}else{var a=y.keys(t);for(r=0,o=a.length;r<o;r++)if(n.call(i,t[a[r]],a[r],t)===e)return}return t};y.map=y.collect=function(e,t,n){var i=[];return null==e?i:l&&e.map===l?e.map(t,n):(w(e,function(e,r,o){i.push(t.call(n,e,r,o))}),i)};var E="Reduce of empty array with no initial value";y.reduce=y.foldl=y.inject=function(e,t,n,i){var r=arguments.length>2;if(null==e&&(e=[]),u&&e.reduce===u)return i&&(t=y.bind(t,i)),r?e.reduce(t,n):e.reduce(t);if(w(e,function(e,o,a){r?n=t.call(i,n,e,o,a):(n=e,r=!0)}),!r)throw new TypeError(E);return n},y.find=y.detect=function(e,t,n){var i;return b(e,function(e,r,o){if(t.call(n,e,r,o))return i=e,!0}),i},y.filter=y.select=function(e,t,n){var i=[];return null==e?i:d&&e.filter===d?e.filter(t,n):(w(e,function(e,r,o){t.call(n,e,r,o)&&i.push(e)}),i)},y.reject=function(e,t,n){return y.filter(e,function(e,i,r){return!t.call(n,e,i,r)},n)},y.compact=function(e){return y.filter(e,y.identity)},y.every=y.all=function(t,n,i){n||(n=y.identity);var r=!0;return null==t?r:f&&t.every===f?t.every(n,i):(w(t,function(t,o,a){if(!(r=r&&n.call(i,t,o,a)))return e}),!!r)};var b=y.some=y.any=function(t,n,i){n||(n=y.identity);var r=!1;return null==t?r:p&&t.some===p?t.some(n,i):(w(t,function(t,o,a){if(r||(r=n.call(i,t,o,a)))return e}),!!r)};y.size=function(e){return null==e?0:e.length===+e.length?e.length:y.keys(e).length},y.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:r.call(e,Math.max(e.length-t,0))},y.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},y.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}};var A=function(e){return null==e?y.identity:y.isFunction(e)?e:y.property(e)},L=function(e){return function(t,n,i){var r={};return n=A(n),w(t,function(o,a){var s=n.call(i,o,a,t);e(r,s,o)}),r}};y.groupBy=L(function(e,t,n){y.has(e,t)?e[t].push(n):e[t]=[n]}),y.indexBy=L(function(e,t,n){e[t]=n}),y.sortedIndex=function(e,t,n,i){n=A(n);for(var r=n.call(i,t),o=0,a=e.length;o<a;){var s=o+a>>>1;n.call(i,e[s])<r?o=s+1:a=s}return o},y.contains=y.include=function(e,t){return null!=e&&(e.length!==+e.length&&(e=y.values(e)),y.indexOf(e,t)>=0)},y.pluck=function(e,t){return y.map(e,y.property(t))},y.where=function(e,t){return y.filter(e,y.matches(t))},y.findWhere=function(e,t){return y.find(e,y.matches(t))},y.max=function(e,t,n){if(!t&&y.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var i=-(1/0),r=-(1/0);return w(e,function(e,o,a){var s=t?t.call(n,e,o,a):e;s>r&&(i=e,r=s)}),i},y.difference=function(e){var n=o.apply(t,r.call(arguments,1));return y.filter(e,function(e){return!y.contains(n,e)})},y.without=function(e){return y.difference(e,r.call(arguments,1))},y.indexOf=function(e,t,n){if(null==e)return-1;var i=0,r=e.length;if(n){if("number"!=typeof n)return i=y.sortedIndex(e,t),e[i]===t?i:-1;i=n<0?Math.max(0,r+n):n}if(h&&e.indexOf===h)return e.indexOf(t,n);for(;i<r;i++)if(e[i]===t)return i;return-1};var C=function(){};y.bind=function(e,t){var n,i;if(m&&e.bind===m)return m.apply(e,r.call(arguments,1));if(!y.isFunction(e))throw new TypeError;return n=r.call(arguments,2),i=function(){if(!(this instanceof i))return e.apply(t,n.concat(r.call(arguments)));C.prototype=e.prototype;var o=new C;C.prototype=null;var a=e.apply(o,n.concat(r.call(arguments)));return Object(a)===a?a:o}},y.partial=function(e){var t=r.call(arguments,1);return function(){for(var n=0,i=t.slice(),r=0,o=i.length;r<o;r++)i[r]===y&&(i[r]=arguments[n++]);for(;n<arguments.length;)i.push(arguments[n++]);return e.apply(this,i)}},y.once=y.partial(y.before,2),y.memoize=function(e,t){var n={};return t||(t=y.identity),function(){var i=t.apply(this,arguments);return y.has(n,i)?n[i]:n[i]=e.apply(this,arguments)}},y.delay=function(e,t){var n=r.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},y.defer=function(e){return y.delay.apply(y,[e,1].concat(r.call(arguments,1)))},y.throttle=function(e,t,n){var i,r,o,a=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:y.now(),a=null,o=e.apply(i,r),i=r=null};return function(){var u=y.now();s||n.leading!==!1||(s=u);var c=t-(u-s);return i=this,r=arguments,c<=0?(clearTimeout(a),a=null,s=u,o=e.apply(i,r),i=r=null):a||n.trailing===!1||(a=setTimeout(l,c)),o}},y.keys=function(e){if(!y.isObject(e))return[];if(v)return v(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return t},y.invert=function(e){for(var t={},n=y.keys(e),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return t},y.defaults=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])}),e},y.extend=function(e){return w(r.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},y.pick=function(e){var n={},i=o.apply(t,r.call(arguments,1));return w(i,function(t){t in e&&(n[t]=e[t])}),n},y.omit=function(e){var n={},i=o.apply(t,r.call(arguments,1));for(var a in e)y.contains(i,a)||(n[a]=e[a]);return n},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.isArray=g||function(e){return"[object Array]"==a.call(e)},y.isObject=function(e){return e===Object(e)},w(["Arguments","Function","String","Number","Date","RegExp"],function(e){y["is"+e]=function(t){return a.call(t)=="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return!(!e||!y.has(e,"callee"))}),y.isFunction=function(e){return"function"==typeof e},y.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&e!=+e},y.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==a.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return void 0===e},y.has=function(e,t){return s.call(e,t)},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.property=function(e){return function(t){return t[e]}},y.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},y.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},y.now=Date.now||function(){return(new Date).getTime()},y.result=function(e,t){if(null!=e){var n=e[t];return y.isFunction(n)?n.call(e):n}};var j=0;return y.uniqueId=function(e){var t=++j+"";return e?e+t:t},y}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(7),n(1),n(23),n(11),n(20),n(31),n(12),n(56),n(33),n(59),n(110),n(109),n(60)],r=function(e,t,n,i,r,a,s,l,u,c,d,f,p){var h={};return h.log=function(){window.console&&("object"===o(console.log)?console.log(Array.prototype.slice.call(arguments,0)):console.log.apply(console,arguments))},h.between=function(e,t,n){return Math.max(Math.min(e,n),t)},h.foreach=function(e,t){var n,i;for(n in e)"function"===h.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))},h.indexOf=t.indexOf,h.noop=function(){},h.seconds=e.seconds,h.prefix=e.prefix,h.suffix=e.suffix,t.extend(h,a,s,u,n,l,i,r,c,d,f,p),h}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(1)],r=function(e){var t=[],n=t.slice,i={on:function(e,t,n){if(!a(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var i=this._events[e]||(this._events[e]=[]);return i.push({callback:t,context:n}),this},once:function u(t,n,i){if(!a(this,"once",t,[n,i])||!n)return this;var r=this,u=e.once(function(){r.off(t,u),n.apply(this,arguments)});return u._callback=n,this.on(t,u,i)},off:function(t,n,i){var r,o,s,l,u,c,d,f;if(!this._events||!a(this,"off",t,[n,i]))return this;if(!t&&!n&&!i)return this._events=void 0,this;for(l=t?[t]:e.keys(this._events),u=0,c=l.length;u<c;u++)if(t=l[u],s=this._events[t]){if(this._events[t]=r=[],n||i)for(d=0,f=s.length;d<f;d++)o=s[d],(n&&n!==o.callback&&n!==o.callback._callback||i&&i!==o.context)&&r.push(o);r.length||delete this._events[t]}return this},trigger:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&s(i,t,this),r&&s(r,arguments,this),this},triggerSafe:function(e){if(!this._events)return this;var t=n.call(arguments,1);if(!a(this,"trigger",e,t))return this;var i=this._events[e],r=this._events.all;return i&&l(i,t,this,e),r&&l(r,arguments,this,e),this}},r=/\s+/,a=function(e,t,n,i){if(!n)return!0;if("object"===("undefined"==typeof n?"undefined":o(n))){for(var a in n)e[t].apply(e,[a,n[a]].concat(i));return!1}if(r.test(n)){for(var s=n.split(r),l=0,u=s.length;l<u;l++)e[t].apply(e,[s[l]].concat(i));return!1}return!0},s=function(e,t,n){var i,r=-1,o=e.length,a=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++r<o;)(i=e[r]).callback.call(i.context||n);return;case 1:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a);return;case 2:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s);return;case 3:for(;++r<o;)(i=e[r]).callback.call(i.context||n,a,s,l);return;default:for(;++r<o;)(i=e[r]).callback.apply(i.context||n,t);return}},l=function(e,t,n,i){for(var r,o=-1,a=e.length;++o<a;)try{r=e[o],r.callback.apply(r.context||n,t)}catch(s){console.log('Error in "'+i+'" event handler:',s)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e={DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",MOVE:"move",OUT:"out"},t={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick",JWPLAYER_BREAKPOINT:"breakpoint"};return t.touchEvents=e,t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(4),n(1),n(2)],r=function(e,t,n,i){function r(e,t){return/touch/.test(e.type)?(e.originalEvent||e).changedTouches[0]["page"+t]:e["page"+t]}function o(e){var t=e||window.event;return e instanceof MouseEvent&&("which"in t?3===t.which:"button"in t&&2===t.button)}function a(e,t,n){var i;return i=t instanceof MouseEvent||!t.touches&&!t.changedTouches?t:t.touches&&t.touches.length?t.touches[0]:t.changedTouches[0],{type:e,sourceEvent:t,target:t.target,currentTarget:n,pageX:i.pageX,pageY:i.pageY}}function s(e){(e instanceof MouseEvent||e instanceof window.TouchEvent)&&(e.preventManipulation&&e.preventManipulation(),e.preventDefault&&e.preventDefault())}var l=t.touchEvents,u="PointerEvent"in window,c="ontouchstart"in window,d=!(u||c&&i.isMobile()),f=i.isFF()&&i.isOSX(),p=function(e,t){function i(e){"touch"!==e.pointerType&&y(l.OVER,e)}function c(e){"touch"!==e.pointerType&&y(l.MOVE,e)}function p(t){(d||u&&"touch"!==t.pointerType&&!e.contains(document.elementFromPoint(t.x,t.y)))&&y(l.OUT,t)}function h(e,t,n){e.removeEventListener(t,n),e.addEventListener(t,n)}function g(n){w=n.target,L=r(n,"X"),C=r(n,"Y"),o(n)||("pointerdown"===n.type&&n.isPrimary?(t.preventScrolling&&(E=n.pointerId,e.setPointerCapture(E)),h(e,"pointermove",v),h(e,"pointercancel",m),"mouse"===n.pointerType&&"OBJECT"===w.nodeName?h(document,"mouseup",m):h(e,"pointerup",m)):"mousedown"===n.type?(h(document,"mousemove",v),f&&"object"===n.target.nodeName.toLowerCase()?h(e,"click",m):h(document,"mouseup",m)):"touchstart"===n.type&&(h(w,"touchmove",v),h(w,"touchcancel",m),h(w,"touchend",m)),t.preventScrolling&&s(n))}function v(e){var n=6;if(A)y(l.DRAG,e);else{var i=r(e,"X"),o=r(e,"Y"),a=i-L,u=o-C;a*a+u*u>n*n&&(y(l.DRAG_START,e),A=!0,y(l.DRAG,e))}t.preventScrolling&&s(e)}function m(n){var i="pointerup"===n.type||"pointercancel"===n.type;i&&t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointermove",v),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerup",m),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m),w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m),A?y(l.DRAG_END,n):t.directSelect&&n.target!==e||n.type.indexOf("cancel")!==-1||("mouseup"===n.type||"click"===n.type||i&&"mouse"===n.pointerType?y(l.CLICK,n):(y(l.TAP,n),"touchend"===n.type&&s(n))),w=null,A=!1}function y(e,i){var r;if(t.enableDoubleTap&&(e===l.CLICK||e===l.TAP))if(n.now()-j<k){var o=e===l.CLICK?l.DOUBLE_CLICK:l.DOUBLE_TAP;r=a(o,i,b),P.trigger(o,r),j=0}else j=n.now();r=a(e,i,b),P.trigger(e,r)}var w,E,b=e,A=!1,L=0,C=0,j=0,k=300;t=t||{},u?(e.addEventListener("pointerdown",g),t.useHover&&(e.addEventListener("pointerover",i),e.addEventListener("pointerout",p)),t.useMove&&e.addEventListener("pointermove",c)):(d&&(e.addEventListener("mousedown",g),t.useHover&&(e.addEventListener("mouseover",i),e.addEventListener("mouseout",p)),t.useMove&&e.addEventListener("mousemove",c)),e.addEventListener("touchstart",g));var P=this;return this.triggerEvent=y,this.destroy=function(){this.off(),e.removeEventListener("touchstart",g),e.removeEventListener("mousedown",g),w&&(w.removeEventListener("touchmove",v),w.removeEventListener("touchcancel",m),w.removeEventListener("touchend",m),w=null),u&&(t.preventScrolling&&e.releasePointerCapture(E),e.removeEventListener("pointerover",i),e.removeEventListener("pointerdown",g),e.removeEventListener("pointermove",v),e.removeEventListener("pointermove",c),e.removeEventListener("pointercancel",m),e.removeEventListener("pointerout",p),e.removeEventListener("pointerup",m)),e.removeEventListener("click",m),e.removeEventListener("mouseover",i),e.removeEventListener("mousemove",c),e.removeEventListener("mouseout",p),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m)},this};return p.getPointerType=function(e){return u&&e instanceof window.PointerEvent?"touch"===e.pointerType?"touch":"mouse":c&&e instanceof window.TouchEvent?"touch":"mouse"},n.extend(p.prototype,e),p}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return/[\(,]format=m3u8-/i.test(e)?"m3u8":!!/[\(,]format=mpd-/i.test(e)&&"mpd"}var n=function(e){return e.replace(/^\s+|\s+$/g,"")},i=function(e,t,n){for(e=""+e,n=n||"0";e.length<t;)e=n+e;return e},r=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""},o=function(e){if(!e||"rtmp"===e.substr(0,4))return"";var n=t(e);return n?n:(e=e.split("?")[0].split("#")[0],e.lastIndexOf(".")>-1?e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase():void 0)},a=function(e){var t=parseInt(e/3600),n=parseInt(e/60)%60,r=e%60;return i(t,2)+":"+i(n,2)+":"+i(r.toFixed(3),6)},s=function(t,n){if(e.isNumber(t))return t;t=t.replace(",",".");var i=t.split(":"),r=i.length,o=0;if("s"===t.slice(-1))o=parseFloat(t);else if("m"===t.slice(-1))o=60*parseFloat(t);else if("h"===t.slice(-1))o=3600*parseFloat(t);else if(r>1){var a=r-1;4===r&&(n&&(o=parseFloat(i[a])/n),a-=1),o+=parseFloat(i[a]),o+=60*parseFloat(i[a-1]),r>=3&&(o+=3600*parseFloat(i[a-2]))}else o=parseFloat(t);return o},l=function(t,n){return e.map(t,function(e){return n+e})},u=function(t,n){return e.map(t,function(e){return e+n})};return{trim:n,pad:i,xmlAttribute:r,extension:o,hms:a,seconds:s,suffix:u,prefix:l}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(2),n(4),n(5),n(1)],r=function(e,t,n,i){var r=e.noop,o=i.constant(!1),a={supports:o,play:r,load:r,stop:r,volume:r,mute:r,seek:r,resize:r,remove:r,destroy:r,setVisibility:r,setFullscreen:o,getFullscreen:r,getContainer:r,setContainer:o,getName:r,getQualityLevels:r,getCurrentQuality:r,setCurrentQuality:r,getAudioTracks:r,getCurrentAudioTrack:r,setCurrentAudioTrack:r,checkComplete:r,setControls:r,attachMedia:r,detachMedia:r,setState:function(e){var i=this.state||n.IDLE;this.state=e,e!==i&&this.trigger(t.JWPLAYER_PLAYER_STATE,{newstate:e})},sendMediaType:function(e){var n=e[0].type,i="oga"===n||"aac"===n||"mp3"===n||"mpeg"===n||"vorbis"===n;this.trigger(t.JWPLAYER_MEDIA_TYPE,{mediaType:i?"audio":"video"})}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(7),n(1),n(106)],r=function(e,t,n){var i={};i.createElement=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},i.styleDimension=function(e){return e+(e.toString().indexOf("%")>0?"":"px")};var r=function(e){return t.isString(e.className)?e.className.split(" "):[]},o=function(t,n){n=e.trim(n),t.className!==n&&(t.className=n)};return i.classList=function(e){return e.classList?e.classList:r(e)},i.hasClass=n.hasClass,i.addClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");t.each(a,function(e){t.contains(i,e)||i.push(e)}),o(e,i.join(" "))},i.removeClass=function(e,n){var i=r(e),a=t.isArray(n)?n:n.split(" ");o(e,t.difference(i,a).join(" "))},i.replaceClass=function(e,t,n){var i=e.className||"";t.test(i)?i=i.replace(t,n):n&&(i+=" "+n),o(e,i)},i.toggleClass=function(e,n,r){var o=i.hasClass(e,n);r=t.isBoolean(r)?r:!o,r!==o&&(r?i.addClass(e,n):i.removeClass(e,n))},i.emptyElement=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},i.addStyleSheet=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},i.empty=function(e){if(e)for(;e.childElementCount>0;)e.removeChild(e.children[0])},i.bounds=function(e){var t={left:0,right:0,width:0,height:0,top:0,bottom:0};if(!e||!document.body.contains(e))return t;var n=e.getBoundingClientRect(),i=window.pageYOffset,r=window.pageXOffset;return n.width||n.height||n.left||n.top?(t.left=n.left+r,t.right=n.right+r,t.top=n.top+i,t.bottom=n.bottom+i,t.width=n.right-n.left,t.height=n.bottom-n.top,t):t},i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={},n={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};return t.utf8ArrayToStr=function(e,t){var n,i,r,o,a,s;for(n="",r=e.length,i=t||0;i<r;)if(o=e[i++],0!==o&&3!==o)switch(o>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=String.fromCharCode(o);break;case 12:case 13:a=e[i++],n+=String.fromCharCode((31&o)<<6|63&a);break;case 14:a=e[i++],s=e[i++],n+=String.fromCharCode((15&o)<<12|(63&a)<<6|(63&s)<<0)}return n},t.utf16BigEndianArrayToStr=function(e,t){var n,i,r;for(n="",r=e.length-1,i=t||0;i<r;)254===e[i]&&255===e[i+1]||(n+=String.fromCharCode((e[i]<<8)+e[i+1])),i+=2;return n},t.syncSafeInt=function(e){var n=t.arrayToInt(e);return 127&n|(32512&n)>>1|(8323072&n)>>2|(2130706432&n)>>3},t.arrayToInt=function(e){for(var t="0x",n=0;n<e.length;n++)e[n]<16&&(t+="0"),t+=e[n].toString(16);return parseInt(t)},t.parseID3=function(i){return e.reduce(i,function(i,r){if(!("value"in r)&&"data"in r&&r.data instanceof ArrayBuffer){var o=r,a=new Uint8Array(o.data),s=a.length;r={value:{key:"",data:""}};for(var l=10;l<14&&l<a.length&&0!==a[l];)r.value.key+=String.fromCharCode(a[l]),l++;var u=19,c=a[u];3!==c&&0!==c||(c=a[++u],s--);var d=0;if(1!==c&&2!==c)for(var f=u+1;f<s;f++)if(0===a[f]){d=f-u;break}if(d>0){var p=t.utf8ArrayToStr(a.subarray(u,u+=d),0);if("PRIV"===r.value.key){if("com.apple.streaming.transportStreamTimestamp"===p){var h=1&t.syncSafeInt(a.subarray(u,u+=4)),g=t.syncSafeInt(a.subarray(u,u+=4));h&&(g+=4294967296),r.value.data=g}else r.value.data=t.utf8ArrayToStr(a,u+1);r.value.info=p}else r.value.info=p,r.value.data=t.utf8ArrayToStr(a,u+1)}else{var v=a[u];1===v||2===v?r.value.data=t.utf16BigEndianArrayToStr(a,u+1):r.value.data=t.utf8ArrayToStr(a,u+1)}}if(n.hasOwnProperty(r.value.key)&&(i[n[r.value.key]]=r.value.data),r.value.info){var m=i[r.value.key];e.isObject(m)||(m={},i[r.value.key]=m),m[r.value.info]=r.value.data}else i[r.value.key]=r.value.data;return i},{})},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(3),n(1)],r=function(e,t,n){var i={},r={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},o=function(o,a){function s(t){c=r.ERROR,u.trigger(e.ERROR,t)}function l(t){c=r.COMPLETE,u.trigger(e.COMPLETE,t)}var u=n.extend(this,t),c=r.NEW;this.addEventListener=this.on,this.removeEventListener=this.off,this.makeStyleLink=function(e){var t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,t},this.makeScriptTag=function(e){var t=document.createElement("script");return t.src=e,t},this.makeTag=a?this.makeStyleLink:this.makeScriptTag,this.load=function(){if(c===r.NEW){var t=i[o];if(t&&(c=t.getStatus(),c<2))return t.on(e.ERROR,s),void t.on(e.COMPLETE,l);var n=document.getElementsByTagName("head")[0]||document.documentElement,u=this.makeTag(o),d=!1;u.onload=u.onreadystatechange=function(e){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,l(e),u.onload=u.onreadystatechange=null,n&&u.parentNode&&!a&&n.removeChild(u))},u.onerror=s,n.insertBefore(u,n.firstChild),c=r.LOADING,i[o]=this}},this.getStatus=function(){return c}};return o.loaderstatus=r,o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t="free",n="premium",i="enterprise",r="platinum",o="ads",a="unlimited",s="trial",l={setup:[t,n,i,o,a,s,r],dash:[n,i,o,a,s,r],drm:[i,o,a,s],hls:[n,o,i,a,s,r],ads:[o,a,s,r,i],casting:[n,i,o,a,s,r],jwpsrv:[t,n,i,o,s,r]},u=function(t){return function(n){return e.contains(l[n],t)}};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{createId:function(e,t){var n,i=e.kind||"cc";return n=e["default"]||e.defaulttrack?"default":e._id||e.file||i+t},createLabel:function(e,t){var n=e.label||e.name||e.language;return n||(n="Unknown CC",t+=1,t>1&&(n+=" ["+t+"]")),{label:n,unknownCount:t}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2),n(17),n(28),n(94),n(29)],r=function(e,t,i,r,o,a){function s(e,t,n,a){var s,u,c=e.responseXML?e.responseXML.firstChild:null;if(c)for("xml"===i.localName(c)&&(c=c.nextSibling);c.nodeType===c.COMMENT_NODE;)c=c.nextSibling;try{if(c&&"tt"===i.localName(c))s=o(e.responseXML),u=this.convertToVTTCues(s),delete t.xhr,n(u);else{var d=e.responseText;d.indexOf("WEBVTT")>=0?l(d,t,n,a):(s=r(d),u=this.convertToVTTCues(s),delete t.xhr,n(u))}}catch(f){delete t.xhr,a(f)}}function l(e,t,i,r){n.e(13,function(require){var o=n(21),a=new o(window),s=[];a.oncue=function(e){s.push(e)},a.onflush=function(){delete t.xhr,i(s)};try{a.parse(e)}catch(l){delete t.xhr,r(l)}})}var u={};return u.loadFile=function(e,n,i){e.xhr=t.ajax(e.file,function(t){s.call(u,t,e,n,i)},i)},u.cancelXhr=function(t){e.each(t,function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr})},u.convertToVTTCues=function(t){var n=e.map(t,function(e){return new a(e.begin,e.end,e.text)});return n},u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){return{localName:function t(e){var t="";return e&&(e.localName?t=e.localName:e.baseName&&(t=e.baseName)),t},textContent:function n(t){var n="";return t&&(t.textContent?n=e.trim(t.textContent):t.text&&(n=e.trim(t.text))),n},getChildNode:function(e,t){return e.childNodes[t]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(98),n(99),n(48),n(22)],r=function(e,t,n,i){var r={},o={},a=function(n,i){return o[n]=new e(new t(r),i),o[n]},s=function(e,t,o,a){var s=i.getPluginName(e);r[s]||(r[s]=new n(e)),r[s].registerPlugin(e,t,o,a)};return{loadPlugins:a,registerPlugin:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{repo:"http://ssl.p.jwpcdn.com/player/v/",SkinsIncluded:["seven"],SkinsLoadable:["beelden","bekle","five","glow","roundster","six","stormtrooper","vapor"],dvrSeekLimit:-25}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(7),n(42)],r=function(e,t){function n(e){e=e.split("-");for(var t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join("")}function i(t,n){return""===n||void 0===n||null===n?"":"string"==typeof n&&isNaN(n)?/png|gif|jpe?g/i.test(n)&&n.indexOf("url")<0?"url("+n+")":n:0===n||"z-index"===t||"opacity"===t?""+n:/color/i.test(t)?"#"+e.pad(n.toString(16).replace(/^0x/i,""),6):Math.ceil(n)+"px"}var r,a=function(e,n,i,r){i=i||"all-players";var a="";if("object"===("undefined"==typeof n?"undefined":o(n))){var l=document.createElement("div");s(l,n);var u=l.style.cssText;r&&u&&(u=u.replace(/;/g," !important;")),a="{"+u+"}"}else"string"==typeof n&&(a=n);return""===a||"{}"===a?void t.clear(i,e):void t.style([[e,e+a]],i)},s=function(e,t){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var r,o={};for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=i(r,t[r]));for(var a=0;a<e.length;a++){var s,l=e[a];if(void 0!==l&&null!==l)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(s=n(r),l.style[s]!==o[r]&&(l.style[s]=o[r]))}}},l=function(e,t){s(e,{transform:t,webkitTransform:t,msTransform:t,mozTransform:t,oTransform:t})},u=function(e,t){var n="rgb",i=void 0!==t&&100!==t;if(i&&(n+="a"),!r){var o=document.createElement("canvas");o.height=1,o.width=1,r=o.getContext("2d")}e?isNaN(parseInt(e,16))||(e="#"+e):e="#000000",r.clearRect(0,0,1,1),r.fillStyle=e,r.fillRect(0,0,1,1);var a=r.getImageData(0,0,1,1).data;return n+="("+a[0]+", "+a[1]+", "+a[2],i&&(n+=", "+t/100),n+")"};return{css:a,style:s,clearCss:t.clear,transform:l,hexToRgba:u,getRgba:u}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(7)],r=function(e){var t={},n=t.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};return t.getPluginPathType=function(t){if("string"==typeof t){t=t.split("?")[0];var i=t.indexOf("://");if(i>0)return n.ABSOLUTE;var r=t.indexOf("/"),o=e.extension(t);return!(i<0&&r<0)||o&&isNaN(o)?n.RELATIVE:n.CDN}},t.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},t.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){function t(e){return function(){return i(e)}}var n={},i=e.memoize(function(e){var t=navigator.userAgent.toLowerCase();return null!==t.match(e)}),r=n.isInt=function(e){return parseFloat(e)%1===0};n.isFlashSupported=function(){var e=n.flashVersion();return e&&e>=18},n.isFF=t(/gecko\//i),n.isIPod=t(/iP(hone|od)/i),n.isIPad=t(/iPad/i),n.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),n.isOSX=t(/Mac OS X/i),n.isFacebook=t(/FBAV/i);var o=n.isEdge=function(e){return i(e?new RegExp("\\sedge\\/"+e,"i"):/\sEdge\/\d+/i)},a=n.isIETrident=t(/trident\/.+rv:\s*11/i),s=n.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),i(new RegExp("msie\\s*"+e,"i"))):i(/msie/i)};n.isChrome=function(){return i(/\s(?:Chrome|CriOS)\//i)&&!n.isEdge()},n.isIE=function(e){return e?(e=parseFloat(e).toFixed(1),e>=12?o(e):e>=11?a():s(e)):o()||a()||s()},n.isSafari=function(){return i(/safari/i)&&!i(/chrome/i)&&!i(/crios/i)&&!i(/chromium/i)&&!i(/android/i)};var l=n.isIOS=function(e){return i(e?new RegExp("iP(hone|ad|od).+\\s(OS\\s"+e+"|.*\\sVersion/"+e+")","i"):/iP(hone|ad|od)/i)};n.isAndroidNative=function(e){return u(e,!0)};var u=n.isAndroid=function(e,t){return!(t&&i(/chrome\/[123456789]/i)&&!i(/chrome\/18/))&&(e?(r(e)&&!/\./.test(e)&&(e=""+e+"."),i(new RegExp("Android\\s*"+e,"i"))):i(/Android/i))};return n.isMobile=function(){return l()||u()},n.isIframe=function(){try{return window.self!==window.top}catch(e){return!0}},n.flashVersion=function(){if(n.isAndroid())return 0;var e,t=navigator.plugins;if(t&&(e=t["Shockwave Flash"],e&&e.description))return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/,"$1"));if("undefined"!=typeof window.ActiveXObject){try{if(e=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/,"."))}catch(i){return 0}return e}return 0},n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return"7.11.3+commercial_v7-11-3.181.commercial.635709.jwplayer.3d430c.freewheel.58df70.googima.9f2f09.vast.032b1c.analytics.340e73.plugin-gapro.7e936b.plugin-related.bae1fe.plugin-sharing.f395ef.vr-plugin.d532d3.hls.js.";}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(14)],r=function(e,t){var n,i=[{configName:"clearkey",keyName:"org.w3.clearkey"},{configName:"widevine",keyName:"com.widevine.alpha"},{configName:"playready",keyName:"com.microsoft.playready"}],r=[],o={},a=function(t){var n=t.get("playlist");return!!t.get("drm")||e.some(n,function(t){return!!t.drm||e.some(t.sources,function(e){return!!e.drm})})},s=function(e){return new Promise(function(t,n){var i;try{i=new window.MSMediaKeys(e)}catch(r){}i?t():n()})},l=function(t){var a=s;return navigator.requestMediaKeySystemAccess&&(a=navigator.requestMediaKeySystemAccess.bind(navigator)),n?n.then(t):(e.forEach(i,function(e){var t=a(e.keyName,[{initDataTypes:["cenc"],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.4d401e"'}],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"'}]}]).then(function(){o[e.configName]=!0})["catch"](function(){o[e.configName]=!1});r.push(t)}),n=Promise.all(r).then(t))},u=function(){return!!navigator.requestMediaKeySystemAccess&&!!MediaKeySystemAccess.prototype.getConfiguration||!!window.MSMediaKeys},c=function(e){return o[e]},d=function(t){n||console.error('DRM only supported with "drm" block in initial setup.',t);var i=e.keys(t);return e.some(i,function(e){return c(e)})};return{containsDrm:a,probe:function(e,n){u()&&t(n)("drm")?l(e):e()},anySupported:d,isSupported:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(38),n(90),n(1),n(3),n(108),n(4),n(5)],r=function(e,t,n,i,r,o,a,s){var l=function(){function o(e,t){var n=i.extend({},t,{type:e}),r=this.mediaModel;switch(e){case"flashThrottle":var o="resume"!==t.state;this.set("flashThrottle",o),this.set("flashBlocked",o);break;case"flashBlocked":return void this.set("flashBlocked",!0);case"flashUnblocked":return void this.set("flashBlocked",!1);case"volume":return void this.set(e,t[e]);case"mute":return void(this.get("autostartMuted")||this.set(e,t[e]));case a.JWPLAYER_MEDIA_TYPE:return void(r.get("mediaType")!==t.mediaType&&(r.set("mediaType",t.mediaType),this.mediaController.trigger(e,n)));case a.JWPLAYER_PLAYER_STATE:return void r.set("state",t.newstate);case a.JWPLAYER_MEDIA_BUFFER:this.set("buffer",t.bufferPercent);case a.JWPLAYER_MEDIA_META:var l=t.duration;i.isNumber(l)&&!i.isNaN(l)&&(r.set("duration",l),this.set("duration",l));break;case a.JWPLAYER_MEDIA_BUFFER_FULL:r.get("playAttempt")?this.playVideo():r.on("change:playAttempt",function(){this.playVideo()},this);break;case a.JWPLAYER_MEDIA_TIME:r.set("position",t.position),this.set("position",t.position),i.isNumber(t.duration)&&(r.set("duration",t.duration),this.set("duration",t.duration));break;case a.JWPLAYER_PROVIDER_CHANGED:this.set("provider",f.getName());break;case a.JWPLAYER_MEDIA_LEVELS:this.setQualityLevel(t.currentQuality,t.levels),r.set("levels",t.levels);break;case a.JWPLAYER_MEDIA_LEVEL_CHANGED:this.setQualityLevel(t.currentQuality,t.levels),this.persistQualityLevel(t.currentQuality,t.levels);break;case a.JWPLAYER_MEDIA_COMPLETE:return h=!0,this.mediaController.trigger(a.JWPLAYER_MEDIA_BEFORECOMPLETE,n),void(g&&this.playbackComplete());case a.JWPLAYER_AUDIO_TRACKS:this.setCurrentAudioTrack(t.currentTrack,t.tracks),r.set("audioTracks",t.tracks);break;case a.JWPLAYER_AUDIO_TRACK_CHANGED:this.setCurrentAudioTrack(t.currentTrack,t.tracks);break;case"subtitlesTrackChanged":this.persistVideoSubtitleTrack(t.currentTrack,t.tracks);break;case"visualQuality":var u=i.extend({},t);r.set("visualQuality",u);break;case"autoplayFailed":this.set("autostartFailed",!0),r.get("state")===s.PLAYING&&r.set("state",s.PAUSED)}this.mediaController.trigger(e,n)}function l(){return!!e.isIOS()&&!(e.isIOS(6)||e.isIOS(7)||e.isIOS(8)||e.isIOS(9))}function c(){var t=!p.get("advertising")||p.get("advertising").autoplayadsmuted,n=l()&&(e.isSafari()||e.isChrome()||e.isFacebook()),i=e.isAndroid()&&e.isChrome(),r=n||i,o=1===p.get("sdkplatform");return!p.get("sdkplatform")&&t&&r||o}var d,f,p=this,h=!1,g=!0,v=e.noop;this.mediaController=i.extend({},r),this.mediaModel=new u,n.model(this),this.set("mediaModel",this.mediaModel),this.setup=function(e){return i.extend(this.attributes,e,{item:0,itemMeta:{},playlistItem:void 0,state:s.IDLE,flashBlocked:!1,provider:void 0,duration:0,position:0,buffer:0}),this.updateProviders(),this},this.getConfiguration=function(){return i.omit(this.clone(),["mediaModel"])},this.updateProviders=function(){d=new t(this.getConfiguration())},this.setQualityLevel=function(e,t){e>-1&&t.length>1&&"youtube"!==f.getName().name&&this.mediaModel.set("currentLevel",parseInt(e))},this.persistQualityLevel=function(e,t){var n=t[e]||{},i=n.label;this.set("qualityLabel",i)},this.setCurrentAudioTrack=function(e,t){e>-1&&t.length>0&&e<t.length&&this.mediaModel.set("currentAudioTrack",parseInt(e))},this.onMediaContainer=function(){var e=this.get("mediaContainer");v.setContainer(e)},this.changeVideoProvider=function(e){if(this.off("change:mediaContainer",this.onMediaContainer),f&&(f.off(null,null,this),f.getContainer()&&f.remove(),delete f.instreamMode),!e)return f=v=e,void this.set("provider",void 0);v=new e(p.get("id"),p.getConfiguration());var t=this.get("mediaContainer");t?v.setContainer(t):this.once("change:mediaContainer",this.onMediaContainer),this.set("provider",v.getName()),v.getName().name.indexOf("flash")===-1&&(this.set("flashThrottle",void 0),this.set("flashBlocked",!1)),f=v,f.volume(p.get("volume")),f.mute(this.autoStartOnMobile()||p.get("mute")),f.on("all",o,this),this.get("instreamMode")===!0&&(f.instreamMode=!0),this.set("renderCaptionsNatively",f.renderNatively)},this.checkComplete=function(){return h},this.detachMedia=function(){return g=!1,f.off("all",o,this),f.detachMedia()},this.attachMedia=function(){return g=!0,f.off("all",o,this),f.on("all",o,this),h&&this.playbackComplete(),f.attachMedia()},this.playbackComplete=function(){h=!1,f.setState(s.COMPLETE),this.mediaController.trigger(a.JWPLAYER_MEDIA_COMPLETE,{})},this.destroy=function(){this.off(),f&&(f.off(null,null,this),f.destroy())},this.getVideo=function(){return f},this.setFullscreen=function(e){e=!!e,e!==p.get("fullscreen")&&p.set("fullscreen",e)},this.chooseProvider=function(e){return d.choose(e).provider},this.setItemIndex=function(e){var t=this.get("playlist");e=parseInt(e,10)||0,e=(e+t.length)%t.length,this.set("item",e),this.set("playlistItem",t[e]),this.setActiveItem(t[e])},this.setActiveItem=function(t){this.mediaModel.off(),this.mediaModel=new u,this.set("itemMeta",{}),this.set("mediaModel",this.mediaModel),this.set("position",t.starttime||0),this.set("minDvrWindow",t.minDvrWindow),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.setProvider(t)},this.setProvider=function(e){var t=e&&e.sources&&e.sources[0];if(void 0!==t){var n=this.chooseProvider(t);n&&v instanceof n||p.changeVideoProvider(n),v&&(v.init&&v.init(e),this.trigger("itemReady",e))}},this.getProviders=function(){return d},this.resetProvider=function(){v=null},this.setVolume=function(e){e=Math.round(e),this.set("volume",e),f&&f.volume(e);var t=0===e;t!==this.getMute()&&this.setMute(t)},this.getMute=function(){return this.get("autostartMuted")||this.get("mute")},this.setMute=function(t){if(e.exists(t)||(t=!this.getMute()),this.set("mute",t),f&&f.mute(t),!t){var n=Math.max(10,this.get("volume"));this.set("autostartMuted",!1),this.setVolume(n)}},this.loadVideo=function(t){t||(t=this.get("playlist")[this.get("item")]),this.set("position",t.starttime||0),this.set("duration",t.duration&&e.seconds(t.duration)||0),this.mediaModel.set("playAttempt",!0),this.mediaController.trigger(a.JWPLAYER_MEDIA_PLAY_ATTEMPT,{playReason:this.get("playReason")}),f.load(t)},this.stopVideo=function(){f&&f.stop()},this.playVideo=function(){f.play()},this.persistCaptionsTrack=function(){var e=this.get("captionsTrack");e?this.set("captionLabel",e.name):this.set("captionLabel","Off")},this.setVideoSubtitleTrack=function(e,t){this.set("captionsIndex",e),e&&t&&e<=t.length&&t[e-1].data&&this.set("captionsTrack",t[e-1]),f&&f.setSubtitlesTrack&&f.setSubtitlesTrack(e)},this.persistVideoSubtitleTrack=function(e,t){this.setVideoSubtitleTrack(e,t),this.persistCaptionsTrack()},this.setNextUp=function(e){this.set("nextUp",e)},this.autoStartOnMobile=function(){return this.get("autostart")&&c()}},u=l.MediaModel=function(){this.set("state",s.IDLE)};return i.extend(l.prototype,o),i.extend(u.prototype,o),l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(5)],r=function(e){function t(t){return t===e.COMPLETE||t===e.ERROR?e.IDLE:t}return function(e,n,i){if(n=t(n),i=t(i),n!==i){var r=n.replace(/(?:ing|d)$/,""),o={type:r,newstate:n,oldstate:i,reason:e.mediaModel.get("state")};"play"===r?o.playReason=e.get("playReason"):"pause"===r&&(o.pauseReason=e.get("pauseReason")),this.trigger(r,o)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7)],r=function(e,t){function n(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var r=1;if(n[0].indexOf(" --> ")>0&&(r=0),n.length>r+1&&n[r+1]){var o=n[r],a=o.indexOf(" --> ");a>0&&(t.begin=i(o.substr(0,a)),t.end=i(o.substr(a+5)),t.text=n.slice(r+1).join("\r\n"))}return t}var i=e.seconds;return function(e){var i=[];e=t.trim(e);var r=e.split("\r\n\r\n");1===r.length&&(r=e.split("\n\n"));for(var o=0;o<r.length;o++)if("WEBVTT"!==r[o]){var a=n(r[o]);a.text&&i.push(a)}return i}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i;i=function(){function e(e){if("string"!=typeof e)return!1;var t=r[e.toLowerCase()];return!!t&&e.toLowerCase()}function t(e){if("string"!=typeof e)return!1;var t=o[e.toLowerCase()];return!!t&&e.toLowerCase()}function n(n,r,o){var a=this;a.hasBeenReset=!1;var s="",l=!1,u=n,c=r,d=o,f=null,p="",h=!0,g="auto",v="start",m=50,y="middle",w=50,E="middle";Object.defineProperty(a,"id",{enumerable:!0,get:function(){return s},set:function(e){s=""+e}}),Object.defineProperty(a,"pauseOnExit",{enumerable:!0,get:function(){return l},set:function(e){l=!!e}}),Object.defineProperty(a,"startTime",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"endTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"text",{enumerable:!0,get:function(){return d},set:function(e){d=""+e,this.hasBeenReset=!0}}),Object.defineProperty(a,"region",{enumerable:!0,get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"vertical",{enumerable:!0,get:function(){return p},set:function(t){var n=e(t);if(n===!1)throw new SyntaxError("An invalid or illegal string was specified.");p=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(a,"line",{enumerable:!0,get:function(){return g},set:function(e){if("number"!=typeof e&&e!==i)throw new SyntaxError("An invalid number or illegal string was specified.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"lineAlign",{enumerable:!0,get:function(){return v},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");v=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"position",{enumerable:!0,get:function(){return m},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");m=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"positionAlign",{enumerable:!0,get:function(){return y},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");y=n,this.hasBeenReset=!0}}),Object.defineProperty(a,"size",{enumerable:!0,get:function(){return w},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");w=e,this.hasBeenReset=!0}}),Object.defineProperty(a,"align",{enumerable:!0,get:function(){return E},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");E=n,this.hasBeenReset=!0}}),a.displayState=void 0}if(window.VTTCue)return window.VTTCue;var i="auto",r={"":!0,lr:!0,rl:!0},o={start:!0,middle:!0,end:!0,left:!0,right:!0};return n.prototype.getCueAsHTML=function(){var e=window.WebVTT;return e.convertCueToDOMTree(window,this.text)},n}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=[n(1),n(47),n(97)],r=function(e,t,n){var i={sources:[],tracks:[],minDvrWindow:120};return function(r){r=r||{},e.isArray(r.tracks)||delete r.tracks;var o=e.extend({},i,r);e.isObject(o.sources)&&!e.isArray(o.sources)&&(o.sources=[t(o.sources)]),e.isArray(o.sources)&&0!==o.sources.length||(r.levels?o.sources=r.levels:o.sources=[t(r)]);for(var a=0;a<o.sources.length;a++){var s=o.sources[a];if(s){var l=s["default"];l?s["default"]="true"===l.toString():s["default"]=!1,o.sources[a].label||(o.sources[a].label=a.toString()),o.sources[a]=t(o.sources[a])}}return o.sources=e.compact(o.sources),e.isArray(o.tracks)||(o.tracks=[]),e.isArray(o.captions)&&(o.tracks=o.tracks.concat(o.captions),delete o.captions),o.tracks=e.compact(e.map(o.tracks,n)),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(33)],r=function(e,t){function n(e){return/^(?:(?:https?|file)\:)?\/\//.test(e)}function i(t){return e.some(t,function(e){return"parsererror"===e.nodeName})}var r={};return r.getAbsolutePath=function(e,i){if(t.exists(i)||(i=document.location.href),t.exists(e)){if(n(e))return e;var r,o=i.substring(0,i.indexOf("://")+3),a=i.substring(o.length,i.indexOf("/",o.length+1));if(0===e.indexOf("/"))r=e.split("/");else{var s=i.split("?")[0];s=s.substring(o.length+a.length+1,s.lastIndexOf("/")),r=s.split("/").concat(e.split("/"))}for(var l=[],u=0;u<r.length;u++)r[u]&&t.exists(r[u])&&"."!==r[u]&&(".."===r[u]?l.pop():l.push(r[u]));return o+a+"/"+l.join("/")}},r.getScriptPath=e.memoize(function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var i=t[n].src;if(i){var r=i.indexOf("/"+e);if(r>=0)return i.substr(0,r+1)}}return""}),r.parseXML=function(e){var t=null;try{"DOMParser"in window?(t=(new window.DOMParser).parseFromString(e,"text/xml"),(i(t.childNodes)||t.childNodes&&i(t.childNodes[0].childNodes))&&(t=null)):(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e))}catch(n){}return t},r.serialize=function(e){if(void 0===e)return null;if("string"==typeof e&&e.length<6){var t=e.toLowerCase();if("true"===t)return!0;if("false"===t)return!1;if(!isNaN(Number(e))&&!isNaN(parseFloat(e)))return Number(e)}return e},r.parseDimension=function(e){return"string"==typeof e?""===e?0:e.lastIndexOf("%")>-1?e:parseInt(e.replace("px",""),10):e},r.timeFormat=function(t,n){if(t<=0&&!n||e.isNaN(parseInt(t)))return"00:00";var i=t<0?"-":"";t=Math.abs(t);var r=Math.floor(t/3600),o=Math.floor((t-3600*r)/60),a=Math.floor(t%60);return i+(r?r+":":"")+(o<10?"0":"")+o+":"+(a<10?"0":"")+a},r}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(1)],r=function(e){var t={};return t.exists=function(e){switch("undefined"==typeof e?"undefined":o(e)){case"string":return e.length>0;case"object":return null!==e;case"undefined":return!1;default:return!0}},t.isHTTPS=function(){return 0===window.location.href.indexOf("https")},t.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},t.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},t.youTubeID=function(e){var t=/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e);return t?t.slice(1).join("").replace("?",""):""},t.typeOf=function(t){if(null===t)return"null";var n="undefined"==typeof t?"undefined":o(t);return"object"===n&&e.isArray(t)?"array":n},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(23),n(14),n(1),n(102),n(25)],r=function(e,t,n,i,r){function o(){return!!window.MediaSource&&!!window.MediaSource.isTypeSupported&&window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')}function a(i,o){if(e.isSafari())return!1;var a=t(o);if(!a("dash"))return!1;if(i.drm&&!r.anySupported(i.drm))return!1;var s=window.MediaSource;if(!window.HTMLVideoElement||!s)return!1;var l=!0;return i.mediaTypes&&(l=n.all(i.mediaTypes,function(e){return s.isTypeSupported(e)})),l&&("dash"===i.type||"mpd"===i.type||(i.file||"").indexOf("mpd-time-csf")>-1)}var s=n.find(i,n.matches({name:"flash"})),l=s.supports;s.supports=function(n,i){if(!e.isFlashSupported()||n.drm)return!1;var r=n&&n.type;if("hls"===r||"m3u8"===r){var o=t(i);return o("hls")}return l.apply(this,arguments)};var u=n.find(i,n.matches({name:"html5"})),c=u.supports;return u.supports=function(e,n){var i=c.apply(this,arguments);if(i&&e.drm&&"hls"===e.type){var r=t(n),o=r("drm");if(o&&e.drm.fairplay){var a=window.WebKitMediaKeys;return a&&a.isTypeSupported&&a.isTypeSupported("com.apple.fps.1_0","video/mp4")}return o}return i},i.push({name:"shaka",supports:a}),i.splice(1,0,{name:"hlsjs",supports:function d(n,i){var r=e.isChrome()||e.isFF()||e.isIE(11),a=e.isAndroid()&&n.hlsjsdefault;if(r&&o()&&(!e.isMobile()||a)&&!n.drm){var s=n&&n.type,l=n&&n.file;if(l.indexOf(".m3u8")>-1||"hls"===s||"m3u8"===s){var d=t(i);return d("hls")}}}}),i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(103),n(1),n(37)],r=function(e,t){function i(e,n,i){var r=t.indexOf(e,t.findWhere(e,{name:i})),o=t.indexOf(e,t.findWhere(e,{name:n}));if(!(o<r)){var a=e.splice(o,1)[0];e.splice(r,0,a)}}var r,o=e.registerProvider,a=e.prototype.reorderProviders;return t.extend(e.loaders,{shaka:function(e){n.e(3,function(require){var t=n(71);o(t),e(t)})},hlsjs:function(e){n.e(2,function(require){var t=n(69);t["default"]&&(t=t["default"]),t.setEdition&&t.setEdition(r),o(t),e(t)})}}),t.extend(e.prototype,{reorderProviders:function(e){var t=a.call(this,e);return"flash"!==e?i(t,"hlsjs","flash"):(i(t,"flash","hlsjs"),i(t,"hlsjs","html5")),t},providerSupports:function(e,t){return r=this.config.edition,e.supports(t,r)}}),e}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i;i=function(require,e,t){function n(e,t){r(t,o(e))}function i(e,t){var n=c[e];if(n)if(t){var i=n[t];if(i)for(var r=0;r<i.parts.length;r+=1)i.parts[r]()}else{for(var o=Object.keys(n),a=0;a<o.length;a+=1)for(var s=n[o[a]],l=0;l<s.parts.length;l+=1)s.parts[l]();delete c[e]}}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n],r=(c[e]||{})[i.id];if(r){for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(l(e,i.parts[o]))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(l(e,i.parts[o]));c[e]=c[e]||{},c[e][i.id]={id:i.id,parts:a}}}}function o(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],s=r[2],l={css:a,media:s};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function a(e){p().appendChild(e)}function s(e){var t=document.createElement("style");return t.type="text/css",t.setAttribute("data-jwplayer-id",e),a(t),t}function l(e,t){var n,i,r,o=d[e];o||(o=d[e]={element:s(e),counter:0});var a=o.counter++;return n=o.element,i=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0),i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media)return;i(t=e)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var o=document.createTextNode(r),a=e.childNodes,s=a[t];s?e.replaceChild(o,s):e.appendChild(o)}}var c={},d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return document.head||document.getElementsByTagName("head")[0]});t.exports={style:n,clear:i};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}.call(t,n,t,e),!(void 0!==i&&(e.exports=i))},function(e,t,n){var i,r;i=[],r=function(){function e(){return t?Promise.resolve(t):new Promise(function(e){n.e(1,function(require){t=n(65),e(t)})})}var t=null;return{load:e}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7),n(17),n(95),n(96),n(30)],r=function(e,t,n,i,r){function o(t){for(var o={},s=0;s<t.childNodes.length;s++){var l=t.childNodes[s],c=u(l);if(c)switch(c.toLowerCase()){case"enclosure":o.file=e.xmlAttribute(l,"url");break;case"title":o.title=a(l);break;case"guid":o.mediaid=a(l);break;case"pubdate":o.date=a(l);break;case"description":o.description=a(l);break;case"link":o.link=a(l);break;case"category":o.tags?o.tags+=a(l):o.tags=a(l)}}return o=i(t,o),o=n(t,o),new r(o)}var a=t.textContent,s=t.getChildNode,l=t.numChildren,u=t.localName,c={};return c.parse=function(e){var t=[];t.feedData={};for(var n=0;n<l(e);n++){var i=s(e,n),r=u(i).toLowerCase();if("channel"===r)for(var c=0;c<l(i);c++){var d=s(i,c),f=u(d).toLowerCase();"item"===f?t.push(o(d)):f&&(t.feedData[f]=a(d))}}return t},c}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(17),n(44),n(2),n(4),n(3),n(1)],r=function(e,t,n,i,r,o){var a=function(){function a(r){var a=n.tryCatch(function(){var n,a=r.responseXML?r.responseXML.childNodes:null,s="";if(a){for(var c=0;c<a.length&&(s=a[c],8===s.nodeType);c++);if("xml"===e.localName(s)&&(s=s.nextSibling),"rss"===e.localName(s)){var d=t.parse(s);n=o.extend({playlist:d},d.feedData)}}if(!n)try{var f=JSON.parse(r.responseText);if(o.isArray(f))n={playlist:f};else{if(!o.isArray(f.playlist))throw Error;n=f}}catch(p){return void l("Not a valid RSS/JSON feed")}u.trigger(i.JWPLAYER_PLAYLIST_LOADED,n)});a instanceof n.Error&&l()}function s(e){l("Playlist load error: "+e)}function l(e){u.trigger(i.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var u=o.extend(this,r);this.load=function(e){n.ajax(e,a,s)},this.destroy=function(){this.off()}};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(30),n(47),n(1),n(38)],r=function(e,t,n,i){function r(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=t.choose(i);if(r)return{type:i.type,provider:r.providerToCheck}}return null}function o(e,t){return n.isUndefined(e)?t:e}var a=function(t){return t=n.isArray(t)?t:[t],n.compact(n.map(t,e))};a.filterPlaylist=function(e,t,i){var r=[],o=t.getProviders(),a=t.get("preload"),u=n.extend({},i);return delete u.playlist,n.each(e,function(e){e=n.extend({},e),e.allSources=s(e,t),e.sources=l(e.allSources,o),e.sources.length&&(e.file=e.sources[0].file,a&&(e.preload=e.preload||a),i&&(e.feedData=u),r.push(e))}),r};var s=function(e,i){var r=e.sources,a=i.get("androidhls"),s=e.drm||i.get("drm"),l=e.preload||i.get("preload"),u=o(e.withCredentials,i.get("withCredentials")),c=i.get("hlsjsdefault");return n.compact(n.map(r,function(e){if(!n.isObject(e))return null;void 0!==a&&null!==a&&(e.androidhls=a),(e.drm||s)&&(e.drm=e.drm||s),(e.preload||l)&&(e.preload=e.preload||l);var i=o(e.withCredentials,u);return n.isUndefined(i)||(e.withCredentials=i),c&&(e.hlsjsdefault=c),t(e)}))},l=function(e,t){t&&t.choose||(t=new i({primary:t?"flash":null}));var o=r(e,t);if(!o)return[];var a=o.provider,s=o.type;return n.filter(e,function(e){return e.type===s&&t.providerSupports(a,e)})};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(7),n(1)],r=function(e,t,n){var i={"default":!1};return function(r){if(r&&r.file){var o=n.extend({},i,r);o.file=t.trim(""+o.file);var a=/^[^\/]+\/(?:x-)?([^\/]+)$/;if(a.test(o.type)&&(o.mimeType=o.type,o.type=o.type.replace(a,"$1")),e.isYouTube(o.file)?o.type="youtube":e.isRtmp(o.file)?o.type="rtmp":o.type||(o.type=t.extension(o.file)),o.type){switch(o.type){case"m3u8":case"vnd.apple.mpegurl":o.type="hls";break;case"dash+xml":o.type="dash";break;case"smil":o.type="rtmp";break;case"m4a":o.type="aac"}return n.each(o,function(e,t){""===e&&delete o[t]}),o}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(22),n(4),n(3),n(13),n(1)],r=function(e,t,n,i,r,a){var s={FLASH:0,JAVASCRIPT:1,HYBRID:2},l=function(l){function u(){switch(t.getPluginPathType(l)){case t.pluginPathType.ABSOLUTE:return l;case t.pluginPathType.RELATIVE:return e.getAbsolutePath(l,window.location.href)}}function c(){a.defer(function(){m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)})}function d(){m=r.loaderstatus.ERROR,v.trigger(n.ERROR,{url:l})}var f,p,h,g,v=a.extend(this,i),m=r.loaderstatus.NEW;this.load=function(){if(m===r.loaderstatus.NEW){if(l.lastIndexOf(".swf")>0)return f=l,m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);if(t.getPluginPathType(l)===t.pluginPathType.CDN)return m=r.loaderstatus.COMPLETE,void v.trigger(n.COMPLETE);m=r.loaderstatus.LOADING;var e=new r(u());e.on(n.COMPLETE,c),e.on(n.ERROR,d),e.load()}},this.registerPlugin=function(e,t,i,o){g&&(clearTimeout(g),g=void 0),h=t,i&&o?(f=o,p=i):"string"==typeof i?f=i:"function"==typeof i?p=i:i||o||(f=e),m=r.loaderstatus.COMPLETE,v.trigger(n.COMPLETE)},this.getStatus=function(){return m},this.getPluginName=function(){return t.getPluginName(l)},this.getFlashPath=function(){if(f)switch(t.getPluginPathType(f)){case t.pluginPathType.ABSOLUTE:return f;case t.pluginPathType.RELATIVE:return l.lastIndexOf(".swf")>0?e.getAbsolutePath(f,window.location.href):e.getAbsolutePath(f,u())}return null},this.getJS=function(){return p},this.getTarget=function(){return h},this.getPluginmode=function(){return void 0!==("undefined"==typeof f?"undefined":o(f))&&void 0!==("undefined"==typeof p?"undefined":o(p))?s.HYBRID:void 0!==("undefined"==typeof f?"undefined":o(f))?s.FLASH:void 0!==("undefined"==typeof p?"undefined":o(p))?s.JAVASCRIPT:void 0},this.getNewInstance=function(e,t,n){return new p(e,t,n)},this.getURL=function(){return l}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(23)],r=function(e){return function(t){if("hls"===t.type){if(t.androidhls===!1&&e.isAndroid())return!1;var n=e.isAndroidNative;if(n(2)||n(3)||n("4.0"))return!1;if(e.isAndroid()&&!e.isFF())return!0}return null}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return"hidden"in document?function(){return!document.hidden}:"webkitHidden"in document?function(){return!document.webkitHidden}:function(){return!0}}()},function(e,t,n){var i,r;i=[n(1),n(31)],r=function(e,t){function n(e){e.onload=null,e.onprogress=null,e.onreadystatechange=null,e.onerror=null,"abort"in e&&e.abort()}function i(t,i){return function(r){var o=r.currentTarget||i.xhr;if(clearTimeout(i.timeoutId),i.retryWithoutCredentials&&i.xhr.withCredentials){n(o);var a=e.extend({},i,{xhr:null,withCredentials:!1,retryWithoutCredentials:!1});return void d(a)}i.onerror(t,i.url,o)}}function r(e){return function(t){var n=t.currentTarget||e.xhr;if(4===n.readyState){if(clearTimeout(e.timeoutId),n.status>=400){var i;return i=404===n.status?"File not found":""+n.status+"("+n.statusText+")",e.onerror(i,e.url,n)}if(200===n.status)return o(e)(t)}}}function o(e){return function(n){var i=n.currentTarget||e.xhr;if(clearTimeout(e.timeoutId),e.responseType){if("json"===e.responseType)return a(i,e)}else{var r,o=i.responseXML;if(o)try{r=o.firstChild}catch(l){}if(o&&r)return s(i,o,e);if(u&&i.responseText&&!o&&(o=t.parseXML(i.responseText),o&&o.firstChild))return s(i,o,e);if(e.requireValidXML)return void e.onerror("Invalid XML",e.url,i)}e.oncomplete(i)}}function a(t,n){if(!t.response||e.isString(t.response)&&'"'!==t.responseText.substr(1))try{t=e.extend({},t,{response:JSON.parse(t.responseText)})}catch(i){return void n.onerror("Invalid JSON",n.url,t)}return n.oncomplete(t)}function s(t,n,i){var r=n.documentElement;return i.requireValidXML&&("parsererror"===r.nodeName||r.getElementsByTagName("parsererror").length)?void i.onerror("Invalid XML",i.url,t):(t.responseXML||(t=e.extend({},t,{responseXML:n})),i.oncomplete(t))}var l=function(){},u=!1,c=function(e){var t=document.createElement("a"),n=document.createElement("a");t.href=location.href;try{return n.href=e,n.href=n.href,t.protocol+"//"+t.host!=n.protocol+"//"+n.host}catch(i){}return!0},d=function(t,a,s,d){e.isObject(t)&&(d=t,t=d.url);var f,p=e.extend({xhr:null,url:t,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,timeoutId:-1,oncomplete:a||l,onerror:s||l,mimeType:d&&!d.responseType?"text/xml":"",requireValidXML:!1,responseType:d&&d.plainText?"text":""},d);if("XDomainRequest"in window&&c(t))f=p.xhr=new window.XDomainRequest,f.onload=o(p),f.ontimeout=f.onprogress=l,u=!0;else{if(!("XMLHttpRequest"in window))return void p.onerror("",t);f=p.xhr=new window.XMLHttpRequest,f.onreadystatechange=r(p)}var h=i("Error loading file",p);f.onerror=h,"overrideMimeType"in f?p.mimeType&&f.overrideMimeType(p.mimeType):u=!0;try{t=t.replace(/#.*$/,""),f.open("GET",t,!0)}catch(g){return h(g),f}if(p.responseType)try{f.responseType=p.responseType}catch(g){}p.timeout&&(p.timeoutId=setTimeout(function(){n(f),p.onerror("Timeout",t,f)},p.timeout),f.onabort=function(){clearTimeout(p.timeoutId)});try{p.withCredentials&&"withCredentials"in f&&(f.withCredentials=!0),f.send()}catch(g){h(g)}return f};return{ajax:d,crossdomain:c}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(2),n(3),n(1)],r=function(e,t,n){function i(e,t,n){var i=document.createElement("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function r(e,t,n){Object.defineProperty(e,t,{get:function(){return n}})}function a(a,s,c,d){var f,p=!0;if(d=d||"opaque",e.isMSIE()){var h=document.createElement("div");s.appendChild(h),h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+c+'" name="'+c+'" tabindex="0"><param name="movie" value="'+a+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+d+'"><param name="bgcolor" value="'+u+'"><param name="menu" value="false"></object>';for(var g=s.getElementsByTagName("object"),v=g.length;v--;)g[v].id===c&&(f=g[v])}else f=document.createElement("object"),f.setAttribute("type","application/x-shockwave-flash"),f.setAttribute("data",a),f.setAttribute("width","100%"),f.setAttribute("height","100%"),f.setAttribute("bgcolor",u),f.setAttribute("id",c),f.setAttribute("name",c),i(f,"allowfullscreen","true"),i(f,"allowscriptaccess","always"),i(f,"wmode",d),i(f,"menu","false"),s.appendChild(f,s);f.className="jw-swf jw-reset",f.style.display="block",f.style.position="absolute",f.style.left=0,f.style.right=0,f.style.top=0,f.style.bottom=0,e.isIE()&&"PointerEvent"in window&&(f.style.pointerEvents="none");var m=-1;return r(f,"on",t.on),r(f,"once",t.once),r(f,"_eventQueue",[]),r(f,"off",function(){var e=Array.prototype.slice.call(arguments);return e.length||(f._eventQueue.length=0,clearTimeout(m)),t.off.apply(f,e)}),r(f,"trigger",function(e,n){var i=f._eventQueue;i.push({type:e,json:n}),m>-1||(m=setTimeout(function(){var e=i.length;for(m=-1;e--;){var n=i.shift();if(n.json){var r=JSON.parse(decodeURIComponent(n.json));t.trigger.call(f,n.type,r)}else t.trigger.call(f,n.type)}}))}),r(f,"_events",{}),r(f,"triggerFlash",function(t){if("setupCommandQueue"===t&&(p=!1),"setup"!==t&&p||!f.__externalCall){for(var i=f.__commandQueue,r=i.length;r--;)i[r][0]===t&&i.splice(r,1);return i.push(Array.prototype.slice.call(arguments)),f}var a=Array.prototype.slice.call(arguments,1),s=e.tryCatch(function(){if(a.length){for(var e=a.length;e--;)"object"===o(a[e])&&n.each(a[e],l);var i=JSON.stringify(a);f.__externalCall(t,i)}else f.__externalCall(t)});return s instanceof e.Error&&(console.error(t,s),"setup"===t)?(s.name="Failed to setup flash",s):f}),r(f,"__commandQueue",[]),f}function s(e){e&&e.parentNode&&(e.style.display="none",e.parentNode.removeChild(e),e=null)}function l(e,t,n){e instanceof window.HTMLElement&&delete n[t]}var u="#000000";return{embed:a,remove:s}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(19),n(1),n(33),n(31),n(24)],r=function(e,t,n,i,r){var o={};return o.repo=t.memoize(function(){var t=r.split("+")[0],i=e.repo+t+"/";return n.isHTTPS()?i.replace(/^http:/,"https:"):i}),o.versionCheck=function(e){var t=("0"+e).split(/\W/),n=r.split(/\W/),i=parseFloat(t[0]),o=parseFloat(n[0]);return!(i>o)&&!(i===o&&parseFloat("0"+t[1])>parseFloat(n[1]))},o.loadFrom=function(){return o.repo()},o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e,t,n){if(!e)return"";var i=e.bitrate||e.bandwidth;return o(t,i)||e.label||r(e.height,i,n)}function r(e,t,n){if(!e&&!t)return"";var i=s(t)+" kbps",r=i;return e&&(r=e+"p",t&&n&&(r+=" ("+i+")")),r}function o(e,t){var n=null,i=u.keys(e);if(t&&e&&i.length){var r=parseFloat(t);isNaN(r)||(n=e[a(i,s(r))])}return n}function a(e,t){var n=null,i=1/0,r=void 0;return u.isArray(e)&&u.forEach(e,function(e){r=Math.abs(e-t),r<i&&(n=e,i=r)}),n}function s(e){return Math.floor(e/1e3)}function l(e){return!!u.isArray(e)&&u.some(e,function(e){var t=e.height||e.bitrate||e.bandwidth,n=this[t];return this[t]=1,n},{})}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1);t.generateLabel=i,t.createLabel=r,t.getCustomLabel=o,t.findClosestBandwidth=a,t.toKbps=s,t.hasRedundantLevels=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.requestAnimationFrame=window.requestAnimationFrame||function(e){return setTimeout(e,17)},t.cancelAnimationFrame=window.cancelAnimationFrame||clearTimeout},function(e,t,n){var i,r;i=[n(104),n(1)],r=function(e,t){var n=function(){var n={},i={},r={},o={},a=(new Date).getTime();return a<1&&(a=1),{start:function(t){n[t]=a+e.now(),r[t]=r[t]+1||1},end:function(t){if(n[t]){var r=a+e.now(),o=r-n[t];delete n[t],i[t]=i[t]+o||o}},dump:function(){var s=t.extend({},i);for(var l in n)if(Object.prototype.hasOwnProperty.call(n,l)){var u=a+e.now(),c=u-n[l];s[l]=s[l]+c||c}return{counts:t.extend({},r),sums:s,events:t.extend({},o)}},tick:function(t){o[t]=a+e.now()},between:function(e,t){return o[t]&&o[e]?o[t]-o[e]:null}}};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return document.createElement("video")}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(82),n(18),n(1)],r=function(e,t,n){var i=e.selectPlayer,r=function(){var e=i.apply(this,arguments);return e?e:{registerPlugin:function(e,n,i){"jwpsrv"!==e&&t.registerPlugin(e,n,i)}}};return n.extend(e,{selectPlayer:r})}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,function(e,t,n){var i,r;i=[n(2),n(73),n(14)],r=function(e,t,n){var i="invalid",r="RnXcsftYjWRDA^Uy",o=function(o){function a(o){e.exists(o)||(o="");try{o=t.decrypt(o,r);var a=o.split("/");s=a[0],"pro"===s&&(s="premium");var c=n(s);if(a.length>2&&c("setup")){l=a[1];var d=parseInt(a[2]);d>0&&(u=new Date,u.setTime(d))}else s=i}catch(f){s=i}}var s,l,u;this.edition=function(){return u&&u.getTime()<(new Date).getTime()?i:s},this.token=function(){return l},this.expiration=function(){return u},a(o)};return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e){return window.atob(e)},t=function(e){return unescape(encodeURIComponent(e))},n=function(e){try{return decodeURIComponent(escape(e))}catch(t){return e}},i=function(e){for(var t=new Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t},r=function(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(255&e[n],e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};return{decrypt:function(o,a){if(o=String(o),a=String(a),0==o.length)return"";for(var s,l,u=i(e(o)),c=i(t(a).slice(0,16)),d=u.length,f=u[d-1],p=u[0],h=2654435769,g=Math.floor(6+52/d),v=g*h;0!=v;){l=v>>>2&3;for(var m=d-1;m>=0;m--)f=u[m>0?m-1:d-1],s=(f>>>5^p<<2)+(p>>>3^f<<4)^(v^p)+(c[3&m^l]^f),p=u[m]-=s;v-=h}var y=r(u);return y=y.replace(/\0+$/,""),n(y)}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(142),n(4),n(162),n(1)],r=function(e,t,n,i,r){var o=function(o,a){var s=new t(o,a),l=s.setup;s.setup=function(){l.call(this),a.on("change:skipButton",this.onSkipButton,this),a.change("castAvailable",this.onCastAvailable,this),a.change("castActive",this.onCastActive,this)};var u=s.addControls;return s.addControls=function(e){u.call(this,e);var t=this.controlsContainer();t&&this._skipButton&&t.appendChild(this._skipButton.element())},s.addSkipButton=function(){this._skipButton=new i(this.instreamModel),this._skipButton.on(n.JWPLAYER_AD_SKIPPED,function(){this.api.skipAd()},this);var e=this.controlsContainer();e&&e.appendChild(this._skipButton.element())},s.onSkipButton=function(e,t){t?this.addSkipButton():this._skipButton&&(this._skipButton.destroy(),this._skipButton=null)},s.onCastActive=function(t,n){n=n||!1;var i=t.get("airplayActive")||!1;e.toggleClass(this.getContainer(),"jw-flag-casting",n),e.toggleClass(this.getContainer(),"jw-flag-airplay-casting",i)},s.onCastAvailable=function(t,n){var i=t.get("cast");r.isObject(i)&&e.toggleClass(this.getContainer(),"jw-flag-cast-available",n)},s};return o}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},,function(e,t,n){var i,r;i=[n(18),n(1)],r=function(e,t){return function(n,i){var r=["seek","skipAd","stop","playlistNext","playlistPrev","playlistItem","resize","addButton","removeButton","registerPlugin","attachMedia","next"];t.each(r,function(e){n[e]=function(){return i[e].apply(i,arguments),n}}),n.registerPlugin=e.registerPlugin}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t,n){var i=["buffer","controls","position","duration","fullscreen","volume","item","stretching","playlist","captions","viewable"];e.each(i,function(e){var i=e.slice(0,1).toUpperCase()+e.slice(1);t["get"+i]=function(){return n._model.get(e)}});var r=["getAudioTracks","getCaptionsList","getWidth","getHeight","getCurrentAudioTrack","setCurrentAudioTrack","getCurrentCaptions","setCurrentCaptions","getCurrentQuality","setCurrentQuality","getQualityLevels","getVisualQuality","getConfig","getState","getSafeRegion","isBeforeComplete","isBeforePlay","getProvider","detachMedia"],o=["setControls","setFullscreen","setVolume","setMute","setCues","setCaptions"];e.each(r,function(e){t[e]=function(){return n[e]?n[e].apply(n,arguments):null}}),e.each(o,function(e){t[e]=function(){return n[e].apply(n,arguments),t}}),t.getPlaylistIndex=t.getItem}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(4),n(5),n(3),n(2),n(62),n(1),n(150),n(77),n(78),n(80),n(24)],r=function(e,t,n,i,r,o,a,s,l,u,c){var d=function(d,f){var p,h=this;o.extend(this,n),this.utils=i,this._=o,this.Events=n,this.version=c,this.trigger=function(e,t){t=o.isObject(t)?o.extend({},t):{},t.type=e;var i=window.jwplayer;return i&&i.debug?n.trigger.call(h,e,t):n.triggerSafe.call(h,e,t)},this.dispatchEvent=this.trigger,this.removeEventListener=this.off.bind(this);var g=function(){p=new a(d),s(h,p),l(h,p),p.on(e.JWPLAYER_MEDIA_META,function(e){var t=p._model.get("itemMeta");o.extend(t,e.metadata)}),p.on(e.JWPLAYER_READY,function(e){v.tick("ready"),e.setupTime=v.between("setup","ready")}),p.on("all",h.trigger)};g(),u(this),this.id=d.id;var v=this._qoe=new r;v.tick("init");var m=function(){h.off(),p&&p.off(),p&&p.playerDestroy&&p.playerDestroy()};return this.getPlugin=function(e){return h.plugins&&h.plugins[e]},this.addPlugin=function(e,t){this.plugins=this.plugins||{},this.plugins[e]=t,this.onReady(t.addToPlayer),t.resize&&this.onResize(t.resizeHandler)},this.setup=function(e){return v.tick("setup"),m(),g(),i.foreach(e.events,function(e,t){var n=h[e];"function"==typeof n&&n.call(h,t)}),e.id=h.id,p.setup(e,this),h},this.qoe=function(){var e=p.getItemQoe(),t=v.between("setup","ready"),n=e.getFirstFrame();return{setupTime:t,firstFrame:n,player:v.dump(),item:e.dump()}},this.getContainer=function(){return p.getContainer?p.getContainer():d},this.getMeta=this.getItemMeta=function(){return p._model.get("itemMeta")||{}},this.getPlaylistItem=function(e){if(!i.exists(e))return p._model.get("playlistItem");var t=h.getPlaylist();return t?t[e]:null},this.getRenderingMode=function(){return"html5"},this.getMute=function(){return p._model.getMute()},this.load=function(e,t){return p.load(e,t),h},this.play=function(e,n){if(o.isObject(e)&&e.reason&&(n=e),n||(n={reason:"external"}),e===!0)return p.play(n),h;if(e===!1)return p.pause(n),h;switch(e=h.getState()){case t.PLAYING:case t.BUFFERING:p.pause(n);break;default:p.play(n)}return h},this.pause=function(e,t){return o.isBoolean(e)?this.play(!e,t):this.play(t)},this.createInstream=function(){return p.createInstream()},this.castToggle=function(){p&&p.castToggle&&p.castToggle()},this.playAd=this.pauseAd=i.noop,this.remove=function(){return f(h),h.trigger("remove"),m(),h},this};return d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n){var i={onBufferChange:t.JWPLAYER_MEDIA_BUFFER,onBufferFull:t.JWPLAYER_MEDIA_BUFFER_FULL,onError:t.JWPLAYER_ERROR,onSetupError:t.JWPLAYER_SETUP_ERROR,onFullscreen:t.JWPLAYER_FULLSCREEN,onMeta:t.JWPLAYER_MEDIA_META,onMute:t.JWPLAYER_MEDIA_MUTE,onPlaylist:t.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:t.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:t.JWPLAYER_PLAYLIST_COMPLETE,onReady:t.JWPLAYER_READY,onResize:t.JWPLAYER_RESIZE,onComplete:t.JWPLAYER_MEDIA_COMPLETE,onSeek:t.JWPLAYER_MEDIA_SEEK,onTime:t.JWPLAYER_MEDIA_TIME,onVolume:t.JWPLAYER_MEDIA_VOLUME,onBeforePlay:t.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:t.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:t.JWPLAYER_DISPLAY_CLICK,onControls:t.JWPLAYER_CONTROLS,onQualityLevels:t.JWPLAYER_MEDIA_LEVELS,onQualityChange:t.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:t.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:t.JWPLAYER_CAPTIONS_CHANGED,onAdError:t.JWPLAYER_AD_ERROR,onAdClick:t.JWPLAYER_AD_CLICK,onAdImpression:t.JWPLAYER_AD_IMPRESSION,onAdTime:t.JWPLAYER_AD_TIME,onAdComplete:t.JWPLAYER_AD_COMPLETE,onAdCompanions:t.JWPLAYER_AD_COMPANIONS,onAdSkipped:t.JWPLAYER_AD_SKIPPED,onAdPlay:t.JWPLAYER_AD_PLAY,onAdPause:t.JWPLAYER_AD_PAUSE,onAdMeta:t.JWPLAYER_AD_META,onCast:t.JWPLAYER_CAST_SESSION,onAudioTrackChange:t.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:t.JWPLAYER_AUDIO_TRACKS},r={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle"};e.each(r,function(t,i){n[i]=e.partial(n.on,t,e)}),e.each(i,function(t,i){n[i]=e.partial(n.on,t,e)})}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(1)],r=function(e,t){function i(n){t.each(n,function(t,i){n[i]=e.serialize(t)})}function r(e){return e.slice&&"px"===e.slice(-2)&&(e=e.slice(0,-2)),e}function o(t,n){if(n.toString().indexOf("%")===-1)return 0;if("string"!=typeof t||!e.exists(t))return 0;if(/^\d*\.?\d+%$/.test(t))return t;var i=t.indexOf(":");if(i===-1)return 0;var r=parseFloat(t.substr(0,i)),o=parseFloat(t.substr(i+1));return r<=0||o<=0?0:o/r*100+"%"}var a={autostart:!1,controls:!0,displaytitle:!0,displaydescription:!0,mobilecontrols:!1,repeat:!1,castAvailable:!1,skin:"seven",stretching:"uniform",mute:!1,volume:90,width:480,height:270,audioMode:!1,localization:{player:"Video Player",play:"Play",playback:"Start playback",pause:"Pause",volume:"Volume",prev:"Previous",next:"Next",cast:"Chromecast",airplay:"Airplay",fullscreen:"Fullscreen",playlist:"Playlist",hd:"Quality",cc:"Closed captions",audioTracks:"Audio tracks",replay:"Replay",buffer:"Loading",more:"More",liveBroadcast:"Live broadcast",loadingAd:"Loading ad",rewind:"Rewind 10s",nextUp:"Next Up",nextUpClose:"Next Up Close",related:"Discover",close:"Close"},renderCaptionsNatively:!0,nextUpDisplay:!0},s=function(s,l){var u=l&&l.getAllItems(),c=t.extend({},(window.jwplayer||{}).defaults,u,s);i(c),c.localization=t.extend({},a.localization,c.localization);var d=t.extend({},a,c);"."===d.base&&(d.base=e.getScriptPath("jwplayer.js")),d.base=(d.base||e.loadFrom()).replace(/\/?$/,"/"),n.p=d.base,d.width=r(d.width),d.height=r(d.height);var f=e.getScriptPath("jwplayer.js")||d.base;d.flashplayer=d.flashplayer||f+"jwplayer.flash.swf",d.flashloader=d.flashloader||f+"jwplayer.loader.swf","http:"===window.location.protocol&&(d.flashplayer=d.flashplayer.replace("https","http"),d.flashloader=d.flashloader.replace("https","http")),d.aspectratio=o(d.aspectratio,d.width),t.isObject(d.skin)&&(d.skinUrl=d.skin.url,d.skinColorInactive=d.skin.inactive,d.skinColorActive=d.skin.active,d.skinColorBackground=d.skin.background,d.skin=t.isString(d.skin.name)?d.skin.name:a.skin),t.isString(d.skin)&&d.skin.indexOf(".xml")>0&&(console.warn("JW Player does not support XML skins, please update your config"),d.skin=d.skin.replace(".xml","")),d.aspectratio||delete d.aspectratio;var p=d.playlist;if(p)t.isArray(p.playlist)&&(d.feedData=p,d.playlist=p.playlist);else{var h=t.pick(d,["title","description","type","mediaid","image","file","sources","tracks","preload"]);d.playlist=[h]}return d.qualityLabels=d.qualityLabels||d.hlslabels,d};return s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(79),n(1),n(38),n(37),n(18)],r=function(e,t,n,i,r){var o=[],a=0,s=function(t){var n,i;return t?"string"==typeof t?(n=l(t),n||(i=document.getElementById(t))):"number"==typeof t?n=o[t]:t.nodeType&&(i=t,n=l(i.id)):n=o[0],n?n:i?u(new e(i,c)):{registerPlugin:r.registerPlugin}},l=function(e){for(var t=0;t<o.length;t++)if(o[t].id===e)return o[t];return null},u=function(e){return a++,e.uniqueId=a,o.push(e),e},c=function(e){for(var t=o.length;t--;)if(o[t].uniqueId===e.uniqueId){o.splice(t,1);break}},d={selectPlayer:s,registerProvider:n.registerProvider,availableProviders:i,registerPlugin:r.registerPlugin};return s.api=d,d}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(151),n(3),n(1),n(4)],r=function(e,t,n,i){var r=function(t,r,o,a){function s(){f("Setup Timeout Error","Setup took longer than "+v+" seconds to complete.")}function l(){for(var e in g)if(Object.prototype.hasOwnProperty.call(g,e)){var n=g[e];!n.complete&&!n.running&&t&&c(n.depends)&&(n.running=!0,u(n))}}function u(e){var n=function(t){t=t||{},d(e,t)};e.method(n,r,t,o,a)}function c(e){return n.all(e,function(e){return g[e].complete})}function d(e,t){"error"===t.type?f(t.msg,t.reason):"complete"===t.type?(clearTimeout(p),h.trigger(i.JWPLAYER_READY)):(e.complete=!0,l())}function f(e,t){clearTimeout(p),h.trigger(i.JWPLAYER_SETUP_ERROR,{message:e+": "+t}),h.destroy()}var p,h=this,g=e.getQueue(),v=30;this.start=function(){p=setTimeout(s,1e3*v),l()},this.destroy=function(){clearTimeout(p),this.off(),g.length=0,t=null,r=null,o=null}};return r.prototype=t,r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(16),n(15)],r=function(e,t,n){var i=function(i,r){function o(e){if(e.tracks.length){for(var t=e.tracks||[],n=0;n<t.length;n++){var i=t[n];m[i._id]||f(i)}var r=p();h(),this.setCaptionsList(r)}}function a(){v=[],m={},y=0}function s(e){a(r,e);var n=e.tracks,i=n&&n.length;if(!r.get("renderCaptionsNatively")&&i){var o,s;for(o=0;o<i;o++)s=n[o],l(s.kind)&&!m[s._id]&&(f(s),t.loadFile(s,u.bind(null,s),c))}var d=p();h(),this.setCaptionsList(d)}function l(e){return"subtitles"===e||"captions"===e}function u(e,t){e.data=t}function c(t){e.log("CAPTIONS("+t+")")}function d(e,t){var n=null;0!==t&&(n=v[t-1]),e.set("captionsTrack",n)}function f(e){if(e.data=e.data||[],e.name=e.label||e.name||e.language,e._id=n.createId(e,v.length),!e.name){var t=n.createLabel(e,y);e.name=t.label,y=t.unknownCount}v.push(e),m[e._id]=e}function p(){for(var e=[{id:"off",label:"Off"}],t=0;t<v.length;t++)e.push({id:v[t]._id,label:v[t].name||"Unknown CC"});return e}function h(){var e=0,t=r.get("captionLabel");if("Off"===t)return void r.set("captionsIndex",0);for(var n=0;n<v.length;n++){var i=v[n];if(t&&t===i.name){e=n+1;break}i["default"]||i.defaulttrack||"default"===i._id?e=n+1:i.autoselect}g(e)}function g(e){v.length?r.setVideoSubtitleTrack(e,v):r.set("captionsIndex",e)}r.on("change:playlistItem",a,this),r.on("change:captionsIndex",d,this),r.on("itemReady",s,this),r.mediaController.on("subtitlesTracks",o,this);var v=[],m={},y=0;this.getCurrentIndex=function(){return r.get("captionsIndex")},this.getCaptionsList=function(){return r.get("captionsList")},this.setCaptionsList=function(e){r.set("captionsList",e)}};return i}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i=[n(81),n(87),n(1),n(83),n(84),n(26),n(92),n(46),n(45),n(2),n(74),n(3),n(27),n(5),n(4),n(131),n(86),n(43)],r=function(e,t,n,i,r,a,s,l,u,c,d,f,p,h,g,v,m,y){function w(e){return function(){var t=Array.prototype.slice.call(arguments,0);this._model.getVideo()?this["_"+e].apply(this,t):this.eventsQueue.push([e,t])}}function E(e){return e===h.LOADING||e===h.STALLED?h.BUFFERING:e}var b=function(e){this.originalContainer=this.currentContainer=e,this.eventsQueue=[],n.extend(this,f),this._model=new a};return b.prototype={play:w("play"),pause:w("pause"),seek:w("seek"),stop:w("stop"),load:w("load"),playlistNext:w("next"),playlistPrev:w("prev"),playlistItem:w("item"),setCurrentCaptions:w("setCurrentCaptions"),setCurrentQuality:w("setCurrentQuality"),setFullscreen:w("setFullscreen"),setup:function(a,v){function w(e,t){ge.triggerAfterReady(e,t)}function b(e,t){t?y.load().then(function(e){if(se.isSetup){var t=new e(document,se.element());se.addControls(t),t.on("all",w,ge)}})["catch"](function(e){ge.triggerError({message:"Controls failed to load",reason:e})}):se.removeControls()}function A(e,t){ge.trigger(g.JWPLAYER_CONTROLS,{controls:t})}function L(){ue=null,se.on("all",w,ge);var e=v.getPlugin("related");e&&e.on("nextUp",fe.setNextUp,fe),se.once(g.JWPLAYER_RESIZE,C),se.init()}function C(){fe.change("visibility",j),fe.on("change:controls",A),ge.trigger(g.JWPLAYER_READY,{setupTime:0}),ge.triggerAfterReady=ge.trigger;for(var e=0;e<we.length;e++){var t=we[e];pe=t.type===g.JWPLAYER_MEDIA_BEFOREPLAY,ge.trigger(t.type,t.args),pe=!1}k(),fe.on("change:viewable",P)}function j(e,t){n.isUndefined(t)||fe.set("viewable",Math.round(t))}function k(){var e=fe.get("autostart");c.isMobile()||e!==!0?P(fe,fe.get("viewable")):O()}function P(e,t){fe.get("playOnViewable")&&(t?O():c.isMobile()&&ge.pause({reason:"autostart"}))}function _(e){var t=fe.getProviders(),n=t.required(e,fe.get("primary"));return t.load(n).then(function(){ge.getProvider()||(fe.setProvider(fe.get("playlistItem")),R())})}function R(){for(;ge.eventsQueue.length>0;){var e=ge.eventsQueue.shift(),t=e[0],n=e[1]||[];ge["_"+t].apply(ge,n)}}function x(e,t){switch(fe.get("state")===h.ERROR&&fe.set("state",h.IDLE),fe.set("preInstreamState","instream-idle"),ge.trigger("destroyPlugin",{}),D(!0),fe.once("itemReady",k),"undefined"==typeof e?"undefined":o(e)){case"string":T(e);break;case"object":var n=J(e,t);n&&B(0);break;case"number":B(e)}}function T(e){var t=new u;t.on(g.JWPLAYER_PLAYLIST_LOADED,function(e){x(e.playlist,e)}),t.on(g.JWPLAYER_ERROR,function(e){e.message="Error loading playlist: "+e.message,this.triggerError(e)},this),t.load(e)}function S(){return ge._instreamAdapter&&ge._instreamAdapter.getState()}function I(){var e=S();return n.isString(e)?e:fe.get("state")}function M(e){if(e&&fe.set("playReason",e.reason),fe.get("state")!==h.ERROR){var t=S();if(n.isString(t))return void v.pauseAd(!1);if(fe.get("state")===h.COMPLETE&&(D(!0),B(0)),!pe&&(pe=!0,ge.triggerAfterReady(g.JWPLAYER_MEDIA_BEFOREPLAY,{playReason:fe.get("playReason")}),pe=!1,de))return de=!1,void(ce=null);var i;if(Y()){if(0===fe.get("playlist").length)return;i=c.tryCatch(function(){fe.loadVideo()})}else fe.get("state")===h.PAUSED&&(i=c.tryCatch(function(){fe.playVideo()}));i instanceof c.Error&&(ge.triggerError(i),ce=null)}}function O(){var e=fe.get("state");e!==h.IDLE&&e!==h.PAUSED||M({reason:"autostart"})}function D(e){fe.off("itemReady",k);var t=!e;ce=null;var n=c.tryCatch(function(){fe.stopVideo()},ge);return n instanceof c.Error?(ge.triggerError(n),!1):(t&&(he=!0),pe&&(de=!0),!0)}function N(e){ce=null,e&&(fe.set("pauseReason",e.reason),"interaction"!==e.reason&&"external"!==e.reason||fe.set("playOnViewable",!1));var t=S();if(n.isString(t))return void v.pauseAd(!0);switch(fe.get("state")){case h.ERROR:return;case h.PLAYING:case h.BUFFERING:var i=c.tryCatch(function(){ve().pause()},this);if(i instanceof c.Error)return void ge.triggerError(i);break;default:pe&&(de=!0)}}function Y(){var e=fe.get("state");return e===h.IDLE||e===h.COMPLETE||e===h.ERROR}function W(e,t){fe.get("state")!==h.ERROR&&(fe.get("scrubbing")||fe.get("state")===h.PLAYING||M(t),ve().seek(e))}function F(e,t){D(!0),fe.get("state")===h.ERROR&&fe.set("state",h.IDLE),B(e),M(t)}function J(e,t){fe.set("feedData",t);var i=l(e);return i=l.filterPlaylist(i,fe,t),fe.set("playlist",i),n.isArray(i)&&0!==i.length?(_(i),!0):(ge.triggerError({message:"Error loading playlist: No playable sources found"}),!1)}function B(e){fe.setItemIndex(e)}function V(e){F(fe.get("item")-1,e||{reason:"external"})}function U(e){F(fe.get("item")+1,e||{reason:"external"})}function H(){if(Y()){if(he)return void(he=!1);ce=H;var e=fe.get("item");return e===fe.get("playlist").length-1?void(fe.get("repeat")?U({reason:"repeat"}):(c.isIOS()&&oe(!1),fe.set("playOnViewable",!1),fe.set("state",h.COMPLETE),ge.trigger(g.JWPLAYER_PLAYLIST_COMPLETE,{}))):void U({reason:"playlist"})}}function z(e){ve()&&(e=parseInt(e,10)||0,ve().setCurrentQuality(e))}function G(){return ve()?ve().getCurrentQuality():-1}function q(){return this._model?this._model.getConfiguration():void 0}function K(){if(this._model.mediaModel)return this._model.mediaModel.get("visualQuality");var e=Q();if(e){var t=G(),i=e[t];if(i)return{level:n.extend({index:t},i),mode:"",reason:""}}return null}function Q(){return ve()?ve().getQualityLevels():null}function X(e){ve()&&(e=parseInt(e,10)||0,ve().setCurrentAudioTrack(e))}function $(){return ve()?ve().getCurrentAudioTrack():-1}function Z(){return ve()?ve().getAudioTracks():null}function ee(e){e=parseInt(e,10)||0,fe.persistVideoSubtitleTrack(e),ge.trigger(g.JWPLAYER_CAPTIONS_CHANGED,{tracks:ne(),track:e})}function te(){return le.getCurrentIndex()}function ne(){return le.getCaptionsList()}function ie(){return fe.detachMedia()}function re(){var e=c.tryCatch(function(){fe.attachMedia()});return e instanceof c.Error?void c.log("Error calling _attachMedia",e):void("function"==typeof ce&&ce())}function oe(e){n.isBoolean(e)||(e=!fe.get("fullscreen")),fe.set("fullscreen",e),this._instreamAdapter&&this._instreamAdapter._adModel&&this._instreamAdapter._adModel.set("fullscreen",e)}function ae(){var e=v.getPlugin("related");e&&e.next()}var se,le,ue,ce,de,fe=this._model,pe=!1,he=!1,ge=this,ve=function(){return fe.getVideo()},me=new s;me.track(fe);var ye=new e(a,me),we=[];fe.setup(ye,me),se=this._view=new d(v,fe),ue=new i(v,fe,se,J),ue.on(g.JWPLAYER_READY,L,this),ue.on(g.JWPLAYER_SETUP_ERROR,this.setupError,this),fe.mediaController.on("all",w,this),fe.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE,function(){n.defer(H)}),fe.mediaController.on(g.JWPLAYER_MEDIA_ERROR,this.triggerError,this),fe.on("change:flashBlocked",function(e,t){if(!t)return void this._model.set("errorEvent",void 0);var n=!!e.get("flashThrottle"),i={message:n?"Click to run Flash":"Flash plugin failed to load"};n||this.trigger(g.JWPLAYER_ERROR,i),this._model.set("errorEvent",i)},this),fe.on("change:state",p,this),fe.on("change:duration",function(e,t){var n=e.get("minDvrWindow"),i=c.streamType(t,n);e.set("streamType",i)}),fe.on("change:castState",function(e,t){ge.trigger(g.JWPLAYER_CAST_SESSION,t)}),fe.on("change:fullscreen",function(e,t){ge.trigger(g.JWPLAYER_FULLSCREEN,{fullscreen:t}),t&&e.set("playOnViewable",!1)}),fe.on("itemReady",function(){ge.triggerAfterReady(g.JWPLAYER_PLAYLIST_ITEM,{index:fe.get("item"),item:fe.get("playlistItem")})}),fe.on("change:playlist",function(e,t){if(t.length){var i={playlist:t},r=fe.get("feedData");if(r){var o=n.extend({},r);delete o.playlist,i.feedData=o}ge.triggerAfterReady(g.JWPLAYER_PLAYLIST_LOADED,i)}}),fe.on("change:volume",function(e,t){ge.trigger(g.JWPLAYER_MEDIA_VOLUME,{volume:t})}),fe.on("change:mute",function(e,t){ge.trigger(g.JWPLAYER_MEDIA_MUTE,{mute:t})}),fe.on("change:scrubbing",function(e,t){t?N():M({reason:"interaction"})}),fe.on("change:captionsList",function(e,t){ge.triggerAfterReady(g.JWPLAYER_CAPTIONS_LIST,{tracks:t,track:fe.get("captionsIndex")||0})}),fe.on("change:mediaModel",function(e){e.mediaModel.on("change:state",function(t,n){e.set("state",E(n))})}),le=new r(v,fe),fe.on("change:viewSetup",function(e,t){if(t){var n=this.currentContainer.querySelector("video, audio");if(ge.showView(se.element()),n){var i=fe.get("mediaContainer");i.appendChild(n)}}},this),fe.on("change:inDom",function(e,t){t&&(e.off("change:controls",b),e.change("controls",b))}),this.triggerAfterReady=function(e,t){we.push({type:e,args:t})},this._play=M,this._pause=N,this._seek=W,this._stop=D,this._load=x,this._next=U,this._prev=V,this._item=F,this._setCurrentCaptions=ee,this._setCurrentQuality=z,this._setFullscreen=oe,this.detachMedia=ie,this.attachMedia=re,this.getCurrentQuality=G,this.getQualityLevels=Q,this.setCurrentAudioTrack=X,this.getCurrentAudioTrack=$,this.getAudioTracks=Z,this.getCurrentCaptions=te,this.getCaptionsList=ne,this.getVisualQuality=K,this.getConfig=q,this.getState=I,this.setVolume=fe.setVolume.bind(fe),this.setMute=fe.setMute.bind(fe),this.getProvider=function(){return fe.get("provider")},this.getWidth=function(){return fe.get("containerWidth")},this.getHeight=function(){return fe.get("containerHeight")},this.getContainer=function(){return this.currentContainer},this.resize=se.resize,this.getSafeRegion=se.getSafeRegion,this.setCues=se.addCues,this.setCaptions=se.setCaptions,this.next=ae,this.addButton=function(e,t,i,r,o){var a={img:e,tooltip:t,callback:i,id:r,btnClass:o},s=!1,l=n.map(fe.get("dock"),function(e){var t=e!==a&&e.id===a.id;return t?(s=!0,a):e});s||l.push(a),fe.set("dock",l)},this.removeButton=function(e){var t=fe.get("dock")||[];t=n.reject(t,n.matches({id:e})),fe.set("dock",t)},this.checkBeforePlay=function(){return pe},this.getItemQoe=function(){return fe._qoeItem},this.setControls=function(e){n.isBoolean(e)||(e=!fe.get("controls")),fe.set("controls",e);var t=fe.getVideo();t&&t.setControls(e)},this.playerDestroy=function(){this.stop(),this.showView(this.originalContainer),se&&se.destroy(),fe&&fe.destroy(),ue&&(ue.destroy(),ue=null)},this.isBeforePlay=this.checkBeforePlay,this.isBeforeComplete=function(){return fe.checkComplete()},this.createInstream=function(){return this.instreamDestroy(),this._instreamAdapter=new t(this,fe,se),this._instreamAdapter},this.skipAd=function(){this._instreamAdapter&&this._instreamAdapter.skipAd()},this.instreamDestroy=function(){ge._instreamAdapter&&ge._instreamAdapter.destroy()},this.trigger=function(e,t){var n=m(fe,e,t);return f.trigger.call(this,e,n)},ue.start()},showView:function(e){if(!document.body.contains(this.currentContainer)){var t=document.getElementById(this._model.get("id"));t&&(this.currentContainer=t)}this.currentContainer.parentElement&&this.currentContainer.parentElement.replaceChild(e,this.currentContainer),this.currentContainer=e},triggerError:function(e){this._model.set("errorEvent",e),this._model.set("state",h.ERROR),this._model.once("change:state",function(){this._model.set("errorEvent",void 0)},this),this.trigger(g.JWPLAYER_ERROR,e)},setupError:function(e){var t=e.message,i=c.createElement(v(this._model.get("id"),this._model.get("skin"),t)),r=this._model.get("width"),o=this._model.get("height");c.style(i,{width:r.toString().indexOf("%")>0?r:r+"px",height:o.toString().indexOf("%")>0?o:o+"px"}),this.showView(i);var a=this;n.defer(function(){a.trigger(g.JWPLAYER_SETUP_ERROR,{message:t})})}},b}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(4)],r=function(e,t){return function(n,i,r){var o=r;switch(i){case t.JWPLAYER_MEDIA_TIME:case"beforePlay":case"pause":case"play":case"ready":var a=n.get("viewable");e.isUndefined(a)||(o=e.extend({},r,{viewable:a}))}return o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(89),n(88),n(4),n(5),n(2),n(3),n(1)],r=function(e,t,n,i,r,o,a){function s(n){var i="",r=n.get("provider");return r&&(i=r.name),i.indexOf("flash")>=0?t:e}var l={skipoffset:null,tag:null},u=function(e,o,u){function c(){E._adModel.set("state","buffering"),o.set("skipButton",!1),b++;var e,t=h[b];g&&(e=g[b]),L.loadItem(t,e)}function d(e,t){"complete"!==e&&(t=t||{},A.tag&&!t.tag&&(t.tag=A.tag),this.trigger(e,t),"mediaError"!==e&&"error"!==e||h&&b+1<h.length&&c())}function f(e){E._adModel.set("duration",e.duration),E._adModel.set("position",e.position)}function p(e){var t={};A.tag&&(t.tag=A.tag),this.trigger(n.JWPLAYER_MEDIA_COMPLETE,t),k.call(this,e)}var h,g,v,m,y,w=s(o),E=new w(e,o),b=0,A={},L=this,C=a.bind(function(e){e=e||{},e.hasControls=!!o.get("controls"),this.trigger(n.JWPLAYER_INSTREAM_CLICK,e),E&&E._adModel&&(E._adModel.get("state")===i.PAUSED?e.hasControls&&E.instreamPlay():E.instreamPause())},this),j=a.bind(function(){E&&E._adModel&&E._adModel.get("state")===i.PAUSED&&o.get("controls")&&(e.setFullscreen(),e.play())},this);this.type="instream",this.init=function(t){v=o.getVideo(),m=o.get("position"),y=o.get("playlist")[o.get("item")],E.on("all",d,this),E.on(n.JWPLAYER_MEDIA_TIME,f,this),E.on(n.JWPLAYER_MEDIA_COMPLETE,p,this),E.init(),e.detachMedia(),o.mediaModel.set("state",i.BUFFERING),e.checkBeforePlay()||0===m&&!o.checkComplete()?(m=0,o.set("preInstreamState","instream-preroll")):v&&o.checkComplete()||o.get("state")===i.COMPLETE?o.set("preInstreamState","instream-postroll"):o.set("preInstreamState","instream-midroll");var a=o.get("state");return t||a!==i.PLAYING&&a!==i.BUFFERING||v.pause(),u.setupInstream(E._adModel),E._adModel.set("state",i.BUFFERING),u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(r.noop,null),this.setText(o.get("localization").loadingAd),this};var k=function(e){h&&b+1<h.length?c():(this.trigger("adBreakEnd",{}),e.type===n.JWPLAYER_MEDIA_COMPLETE&&this.trigger(n.JWPLAYER_PLAYLIST_COMPLETE,{}),this.destroy())};this.loadItem=function(e,i){if(r.isAndroid(2.3))return void this.trigger({type:n.JWPLAYER_ERROR,message:"Error loading instream: Cannot play instream on Android 2.3"});var s=e;a.isArray(e)?(h=e,g=i,e=h[b],g&&(i=g[b])):s=[e];var u=o.getProviders(),c=w===t?"flash":void 0,d=u.required(s,c);o.set("hideAdsControls",!1),u.load(d).then(function(){if(null!==E){L.trigger(n.JWPLAYER_PLAYLIST_ITEM,{index:b,item:e}),A=a.extend({},l,i),E.load(e),L.addClickHandler();var t=e.skipoffset||A.skipoffset;t&&L.setupSkipButton(t,A)}})},this.setupSkipButton=function(e,t,n){o.set("skipButton",!1),n&&(k=n),E._adModel.set("skipMessage",t.skipMessage),E._adModel.set("skipText",t.skipText),E._adModel.set("skipOffset",e),o.set("skipButton",!0)},this.applyProviderListeners=function(e){E.applyProviderListeners(e),this.addClickHandler()},this.play=function(){E.instreamPlay()},this.pause=function(){E.instreamPause()},this.addClickHandler=function(){u.clickHandler()&&u.clickHandler().setAlternateClickHandlers(C,j),E.on(n.JWPLAYER_MEDIA_META,this.metaHandler,this)},this.skipAd=function(e){var t=n.JWPLAYER_AD_SKIPPED;this.trigger(t,e),k.call(this,{type:t})},this.metaHandler=function(e){e.width&&e.height&&u.resizeMedia()},this.destroy=function(){if(this.off(),o.set("skipButton",!1),E){u.clickHandler()&&u.clickHandler().revertAlternateClickHandlers(),o.off(null,null,E),E.off(null,null,L),E.instreamDestroy(),u.destroyInstream(),E=null,e.attachMedia();var t=o.get("preInstreamState");switch(t){case"instream-preroll":case"instream-midroll":var n=a.extend({},y);n.starttime=m,o.loadVideo(n),r.isMobile()&&o.mediaModel.get("state")===i.BUFFERING&&v.setState(i.BUFFERING),v.play();break;case"instream-postroll":case"instream-idle":v.stop()}}},this.getState=function(){return!(!E||!E._adModel)&&E._adModel.get("state")},this.setText=function(e){u.setAltText(e?e:"")},this.hide=function(){o.set("hideAdsControls",!0)}};return a.extend(u.prototype,o),u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(3),n(26),n(27),n(4),n(5),n(2),n(1)],r=function(e,t,n,i,r,o,a){var s=function(e,i){this.model=i,this._adModel=(new t).setup({id:i.get("id"),volume:i.get("volume"),fullscreen:i.get("fullscreen"),mute:i.get("mute")}),this._adModel.on("change:state",n,this);var r=e.getContainer();this.swf=r.querySelector("object")};return s.prototype=a.extend({init:function(){if(o.isChrome()){var e=-1,t=!1;this.swf.on("throttle",function(n){if(clearTimeout(e),"resume"===n.state)t&&(t=!1,this.instreamPlay());else{var i=this;e=setTimeout(function(){i._adModel.get("state")===r.PLAYING&&(t=!0,i.instreamPause())},250)}},this)}this.swf.on("instream:state",this.stateHandler,this).on("instream:time",function(e){this._adModel.set("position",e.position),this._adModel.set("duration",e.duration),this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this).on("instream:complete",function(e){this.trigger(i.JWPLAYER_MEDIA_COMPLETE,e)},this).on("instream:error",function(e){this.trigger(i.JWPLAYER_MEDIA_ERROR,e)},this),this.swf.triggerFlash("instream:init"),this.applyProviderListeners=function(e){e&&(this.model.on("change:volume",function(t,n){e.volume(n)},this),this.model.on("change:mute",function(t,n){e.mute(n)},this),e.volume(this.model.get("volume")),e.mute(this.model.get("mute")),e.off(),e.on(i.JWPLAYER_PLAYER_STATE,this.stateHandler,this),e.on(i.JWPLAYER_MEDIA_TIME,function(e){this.trigger(i.JWPLAYER_MEDIA_TIME,e)},this))}},stateHandler:function(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:this._adModel.set("state",e.newstate)}},instreamDestroy:function(){this._adModel&&(this.off(),this.swf.off(null,null,this),this.swf.triggerFlash("instream:destroy"),this.swf=null,this._adModel.off(),this._adModel=null,this.model=null)},load:function(e){this.swf.triggerFlash("instream:load",e)},instreamPlay:function(){this.swf.triggerFlash("instream:play")},instreamPause:function(){this.swf.triggerFlash("instream:pause")}},e),s}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(3),n(27),n(4),n(5),n(26)],r=function(e,t,n,i,r,o){var a=function(a,s){function l(t){var r=t||f.getVideo();if(p!==r){if(p=r,!r)return;var o="vpaid"===r.type;r.off(),r.on("all",function(t,n){o&&t===i.JWPLAYER_MEDIA_COMPLETE||this.trigger(t,e.extend({},n,{type:t}))},h),r.on(i.JWPLAYER_MEDIA_BUFFER_FULL,d),r.on(i.JWPLAYER_PLAYER_STATE,u),r.attachMedia(),r.volume(s.get("volume")),r.mute(s.get("mute")||s.get("autostartMuted")),f.on("change:state",n,h)}}function u(e){switch(e.newstate){case r.PLAYING:case r.PAUSED:f.set("state",e.newstate)}}function c(e){s.trigger(e.type,e),h.trigger(i.JWPLAYER_FULLSCREEN,{fullscreen:e.jwstate})}function d(){f.getVideo().play()}var f,p,h=e.extend(this,t);return a.on(i.JWPLAYER_FULLSCREEN,function(e){this.trigger(i.JWPLAYER_FULLSCREEN,e)},h),this.init=function(){f=(new o).setup({id:s.get("id"),volume:s.get("volume"),fullscreen:s.get("fullscreen"),mute:s.get("mute")||s.get("autostartMuted"),instreamMode:!0}),f.on("fullscreenchange",c),this._adModel=f},h.load=function(e){f.set("item",0),f.set("playlistItem",e),f.setActiveItem(e),l(),f.off(i.JWPLAYER_ERROR),f.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},h),f.loadVideo(e)},h.applyProviderListeners=function(e){l(e),e&&(e.off(i.JWPLAYER_ERROR),e.on(i.JWPLAYER_ERROR,function(e){this.trigger(i.JWPLAYER_ERROR,e)},h),s.on("change:volume",function(e,t){p.volume(t)},h),s.on("change:mute",function(e,t){p.mute(t)},h),s.on("change:autostartMuted",function(e,t){t||p.mute(s.get("mute"))},h))},this.instreamDestroy=function(){f&&(f.off(),this.off(),p&&(p.detachMedia(),p.off(),f.getVideo()&&p.destroy()),f=null,a.off(null,null,this),a=null)},h.instreamPlay=function(){f.getVideo()&&f.getVideo().play(!0)},h.instreamPause=function(){f.getVideo()&&f.getVideo().pause(!0)},h};return a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(62),n(1)],r=function(e,t){function n(e){e.mediaController.off(a,e._onPlayAttempt),e.mediaController.off(s,e._triggerFirstFrame),e.mediaController.off(u,e._onTime),e.off("change:activeTab",e._onTabVisible)}function i(e){e._onTabVisible&&n(e),e._triggerFirstFrame=t.once(function(){var t=e._qoeItem;t.tick(l);var i=t.getFirstFrame();e.mediaController.trigger(l,{loadTime:i}),n(e)}),e._onTime=f(e._triggerFirstFrame),e._onPlayAttempt=function(){e._qoeItem.tick(a)},e._onTabVisible=function(t,n){n?e._qoeItem.tick(d):e._qoeItem.tick(c)},e.on("change:activeTab",e._onTabVisible),e.mediaController.on(a,e._onPlayAttempt),e.mediaController.once(s,e._triggerFirstFrame),e.mediaController.on(u,e._onTime)}function r(t){function n(t,n,r){t._qoeItem&&r&&t._qoeItem.end(r.get("state")),t._qoeItem=new e,t._qoeItem.getFirstFrame=function(){var e=this.between(a,l),t=this.between(d,l);return t>0&&t<e?t:e},t._qoeItem.tick(o),t._qoeItem.start(n.get("state")),i(t),n.on("change:state",function(e,n,i){t._qoeItem.end(i),t._qoeItem.start(n)})}t.on("change:mediaModel",n)}var o="playlistItem",a="playAttempt",s="providerFirstFrame",l="firstFrame",u="time",c="tabHidden",d="tabVisible",f=function(e){var t=0;return function(n){var i=n.position;i>t&&e(),t=i}};return{model:r}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(18),n(45),n(13),n(58),n(19),n(1),n(2),n(4),n(43)],r=function(e,t,i,r,o,a,s,l,u){function c(){var e={LOAD_PROMISE_POLYFILL:{method:f,depends:[]},LOAD_BASE64_POLYFILL:{method:p,depends:[]},LOAD_PLUGINS:{method:g,depends:["LOAD_PROMISE_POLYFILL"]},LOAD_XO_POLYFILL:{method:h,depends:[]},LOAD_SKIN:{method:C,depends:[]},LOAD_PLAYLIST:{method:y,depends:[]},LOAD_CONTROLS:{method:_,depends:["LOAD_PROMISE_POLYFILL"]},SETUP_VIEW:{method:j,depends:["LOAD_SKIN","LOAD_XO_POLYFILL","LOAD_PROMISE_POLYFILL"]},INIT_PLUGINS:{method:v,depends:["LOAD_PLUGINS","SETUP_VIEW"]},CHECK_FLASH:{method:w,depends:["SETUP_VIEW"]},FILTER_PLAYLIST:{method:E,depends:["LOAD_PLAYLIST","CHECK_FLASH"]},SET_ITEM:{method:k,depends:["INIT_PLUGINS","FILTER_PLAYLIST"]},DEFERRED:{method:d,depends:[]},SEND_READY:{method:P,depends:["LOAD_CONTROLS","SET_ITEM","DEFERRED"]}};return e}function d(e){setTimeout(e,0)}function f(e){window.Promise?e():n.e(11,function(require){n(50),e()})}function p(e){window.btoa&&window.atob?e():n.e(12,function(require){n(49),e()})}function h(e){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?e():n.e(7,function(require){n(76),e()})}function g(t,n){window.jwplayerPluginJsonp=e.registerPlugin,x=e.loadPlugins(n.get("id"),n.get("plugins")),x.on(l.COMPLETE,t),x.on(l.ERROR,a.partial(m,t)),x.load()}function v(e,t,n){delete window.jwplayerPluginJsonp,x.setupPlugins(n,t),e()}function m(e,t){R(e,"Could not load plugin",t.message)}function y(e,n){var i=n.get("playlist");a.isString(i)?(T=new t,T.on(l.JWPLAYER_PLAYLIST_LOADED,function(t){n.attributes.feedData=t,n.attributes.playlist=t.playlist,e()}),T.on(l.JWPLAYER_ERROR,a.partial(b,e)),T.load(i)):e()}function w(e,t,n,i){var o="flash"===t.get("primary"),a=s.flashVersion();if(o&&a){var l,u=function(){l!==-1&&(clearTimeout(l),l=-1,setTimeout(function(){r.remove(f.querySelector("#"+p)),e()},0))},c=function(){t.set("primary",void 0),t.updateProviders(),u()},d=i.element(),f=d.querySelector(".jw-media");d.parentElement||c();var p=""+t.get("id")+"-"+Math.random().toString(16).substr(2),h=t.get("flashloader");Object.defineProperty(r.embed(h,f,p,null),"embedCallback",{get:function(){return u}}),l=setTimeout(c,3e3)}else e()}function E(e,t,n,i,r){var o=r(t.get("playlist"),t.get("feedData"));o?e():b(e)}function b(e,t){t&&t.message?R(e,"Error loading playlist",t.message):R(e,"Error loading player","No playable sources found")}function A(e,t){var n;return a.contains(o.SkinsLoadable,e)&&(n=t+"skins/"+e+".css"),n}function L(e){for(var t=document.styleSheets,n=0,i=t.length;n<i;n++)if(t[n].href===e)return!0;return!1}function C(e,t){var n=t.get("skin"),r=t.get("skinUrl");if(a.contains(o.SkinsIncluded,n))return void e();if(r||(r=A(n,t.get("base"))),a.isString(r)&&!L(r)){t.set("skin-loading",!0);var s=!0,u=new i(r,s);u.addEventListener(l.COMPLETE,function(){t.set("skin-loading",!1)}),u.addEventListener(l.ERROR,function(){t.set("skin","seven"),t.set("skin-loading",!1)}),u.load()}e()}function j(e,t,n,i){var r=t.autoStartOnMobile();r&&t.set("autostartMuted",!0),t.set("playOnViewable",r||"viewable"===t.get("autostart")),i.setup(),e()}function k(e,t){t.once("itemReady",e),t.setItemIndex(t.get("item"))}function P(e){e({type:"complete"})}function _(e,t){return t.get("controls")?void u.load().then(function(){e()})["catch"](function(t){R(e,"Failed to load controls",t)}):void e()}function R(e,t,n){e({type:"error",msg:t,reason:n})}var x,T;return{getQueue:c,error:R}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e){return"jwplayer."+e}function i(){return e.reduce(this.persistItems,function(e,i){var r=l[n(i)];return r&&(e[i]=t.serialize(r)),e},{})}function r(e,t){try{l[n(e)]=t}catch(i){var r=window.jwplayer;r&&r.debug&&console.error(i)}}function o(){e.each(this.persistItems,function(e){l.removeItem(n(e))})}function a(){this.persistItems=["volume","mute","captionLabel","qualityLabel"]}function s(t){e.each(this.persistItems,function(e){t.on("change:"+e,function(t,n){r(e,n)})})}var l={removeItem:t.noop};try{l=window.localStorage}catch(u){}return e.extend(a.prototype,{getAllItems:i,track:s,clear:o}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(67),n(2)],r=function(e,t){return n.p=t.loadFrom(),e.selectPlayer}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(7)],r=function(e){function t(e){e||n()}function n(){throw new Error("Invalid DFXP file")}var i=e.seconds;return function(r){t(r);var o=[],a=r.getElementsByTagName("p"),s=30,l=r.getElementsByTagName("tt");if(l&&l[0]){var u=parseFloat(l[0].getAttribute("ttp:frameRate"));isNaN(u)||(s=u)}t(a),a.length||(a=r.getElementsByTagName("tt:p"),a.length||(a=r.getElementsByTagName("tts:p")));for(var c=0;c<a.length;c++){for(var d=a[c],f=d.getElementsByTagName("br"),p=0;p<f.length;p++){var h=f[p];h.parentNode.replaceChild(r.createTextNode("\r\n"),h)}var g=d.innerHTML||d.textContent||d.text||"",v=e.trim(g).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(v){var m=d.getAttribute("begin"),y=d.getAttribute("dur"),w=d.getAttribute("end"),E={begin:i(m,s),text:v};w?E.end=i(w,s):y&&(E.end=E.begin+i(y,s)),o.push(E)}}return o.length||n(),o}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(17),n(7),n(2)],r=function(e,t,n){var i="jwplayer",r=function(r,o){for(var a=[],s=[],l=t.xmlAttribute,u="default",c="label",d="file",f="type",p=0;p<r.childNodes.length;p++){var h=r.childNodes[p];if(h.prefix===i){var g=e.localName(h);"source"===g?(delete o.sources,a.push({file:l(h,d),"default":l(h,u),label:l(h,c),type:l(h,f)})):"track"===g?(delete o.tracks,s.push({file:l(h,d),"default":l(h,u),kind:l(h,"kind"),label:l(h,c)})):(o[g]=n.serialize(e.textContent(h)),"file"===g&&o.sources&&delete o.sources)}o[d]||(o[d]=o.link)}if(a.length)for(o.sources=[],p=0;p<a.length;p++)a[p].file.length>0&&(a[p][u]="true"===a[p][u],a[p].label.length||delete a[p].label,o.sources.push(a[p]));if(s.length)for(o.tracks=[],p=0;p<s.length;p++)s[p].file.length>0&&(s[p][u]="true"===s[p][u],s[p].kind=s[p].kind.length?s[p].kind:"captions",s[p].label.length||delete s[p].label,o.tracks.push(s[p]));return o};return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(17),n(7),n(2)],r=function(e,t,n){function i(e){for(var t=[],n=0;n<s(e);n++){var i=e.childNodes[n];"jwplayer"===i.prefix&&"mediatypes"===o(i).toLowerCase()&&t.push(a(i))}return t}var r=t.xmlAttribute,o=e.localName,a=e.textContent,s=e.numChildren,l="media",u=function c(e,t){function u(e){var t={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};return t[e]?t[e]:e}var d,f,p="tracks",h=[];for(f=0;f<s(e);f++)if(d=e.childNodes[f],d.prefix===l){if(!o(d))continue;switch(o(d).toLowerCase()){case"content":if(r(d,"duration")&&(t.duration=n.seconds(r(d,"duration"))),r(d,"url")){t.sources||(t.sources=[]);var g={file:r(d,"url"),type:r(d,"type"),width:r(d,"width"),label:r(d,"label")},v=i(d);v.length&&(g.mediaTypes=v),t.sources.push(g)}s(d)>0&&(t=c(d,t));break;case"title":t.title=a(d);break;case"description":t.description=a(d);break;case"guid":t.mediaid=a(d);break;case"thumbnail":t.image||(t.image=r(d,"url"));break;case"group":c(d,t);break;case"subtitle":var m={};m.file=r(d,"url"),m.kind="captions",r(d,"lang").length>0&&(m.label=u(r(d,"lang"))),h.push(m)}}for(t.hasOwnProperty(p)||(t[p]=[]),f=0;f<h.length;f++)t[p].push(h[f]);return t};return u}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={kind:"captions","default":!1};return function(n){if(n&&n.file)return e.extend({},t,n)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(22),n(2),n(4),n(3),n(1),n(13)],r=function(e,t,n,i,r,o){function a(e,t,n){return function(){var i=e.getContainer().getElementsByClassName("jw-overlays")[0];i&&(n.left=i.style.left,n.top=i.style.top,i.appendChild(n),t.displayArea=i)}}function s(e){function t(){var t=e.displayArea;t&&e.resize(t.clientWidth,t.clientHeight)}return function(){t(),setTimeout(t,400)}}var l=function(l,u){function c(){v||(v=!0,g=o.loaderstatus.COMPLETE,h.trigger(n.COMPLETE))}function d(){if(!y&&(u&&0!==r.keys(u).length||c(),!v)){var i=l.getPlugins();p=r.after(m,c),r.each(u,function(r,a){var s=e.getPluginName(a),l=i[s],u=l.getJS(),c=l.getTarget(),d=l.getStatus();d!==o.loaderstatus.LOADING&&d!==o.loaderstatus.NEW&&(u&&!t.versionCheck(c)&&h.trigger(n.ERROR,{message:"Incompatible player version"}),p())})}}function f(e){if(!y){var i="File not found";e.url&&t.log(i,e.url),this.off(),this.trigger(n.ERROR,{message:i}),d()}}var p,h=r.extend(this,i),g=o.loaderstatus.NEW,v=!1,m=r.size(u),y=!1;this.setupPlugins=function(n,i){var o=[],u=l.getPlugins(),c=i.get("plugins");r.each(c,function(i,l){var d=e.getPluginName(l),f=u[d],p=f.getFlashPath(),h=f.getJS(),g=f.getURL();if(p){var v=r.extend({name:d,swf:p,pluginmode:f.getPluginmode()},i);o.push(v)}var m=t.tryCatch(function(){if(h){var e=c[g];if(!e)return void t.log("JW Plugin already loaded",d,g);var i=document.createElement("div");i.id=n.id+"_"+d,i.className="jw-plugin jw-reset";var o=r.extend({},e),l=f.getNewInstance(n,o,i);l.addToPlayer=a(n,l,i),l.resizeHandler=s(l),n.addPlugin(d,l,i)}});m instanceof t.Error&&t.log("ERROR: Failed to load "+d+".")}),i.set("flashPlugins",o)},this.load=function(){if(t.exists(u)&&"object"!==t.typeOf(u))return void d();g=o.loaderstatus.LOADING,r.each(u,function(e,i){if(t.exists(i)){var r=l.addPlugin(i);r.on(n.COMPLETE,d),r.on(n.ERROR,f)}});var e=l.getPlugins();r.each(e,function(e){e.load()}),d()},this.destroy=function(){y=!0,this.off()},this.getStatus=function(){return g}};return l}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(22),n(48)],r=function(e,t){var n=function(n){this.addPlugin=function(i){var r=e.getPluginName(i);return n[r]||(n[r]=new t(i)),n[r]},this.getPlugins=function(){return n}};return n}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[],r=function(){return{}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(53),n(2),n(1),n(63)],r=function(e,t,n,i){var r=[{name:"youtube",supports:function(e){return t.isYouTube(e.file,e.type)}},{name:"html5",supports:function(n){var r={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},o=n.file,a=n.type,s=e(n);if(null!==s)return s;if(t.isRtmp(o,a))return!1;if(!r[a])return!1;if(i.canPlayType){var l=i.canPlayType(r[a]);return!!l}return!1}},{name:"flash",supports:function(e){var i={flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",mpeg:"sound",smil:"rtmp"},r=n.keys(i);if(!t.isFlashSupported())return!1;var o=e.file,a=e.type;return!!t.isRtmp(o,a)||n.contains(r,a)}}];return r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(9),n(37),n(101),n(1),n(105)],r=function(e,t,i,r,o){function a(e){this.config=e||{},this.providers=this.reorderProviders(this.config.primary)}a.loaders={html5:function(e){n.e(5,function(require){var t=n(70);s(t),e(t)})},flash:function(e){n.e(6,function(require){var t=n(52);s(t),e(t)})},youtube:function(e){n.e(9,function(require){var t=n(54);s(t),e(t)})}};var s=a.registerProvider=function(n){var a=n.getName().name;if(!i[a]){if(!r.find(t,r.matches({name:a}))){if(!r.isFunction(n.supports))throw new Error("Tried to register a provider with an invalid object");t.unshift({name:a,supports:n.supports})}o(n.prototype,e),i[a]=n}};return r.extend(a.prototype,{load:function(e){return Promise.all(r.map(e,function(e){return new Promise(function(t){var n=a.loaders[e.name];n?n(t):t()})}))},reorderProviders:function(e){var n=r.clone(t);if("flash"===e){var i=r.indexOf(n,r.findWhere(n,{name:"flash"})),o=n.splice(i,1)[0],a=r.indexOf(n,r.findWhere(n,{name:"html5"}));n.splice(a,0,o)}return n},providerSupports:function(e,t){return e.supports(t)},required:function(e,t){var n=this,i=this.reorderProviders(t);return e=e.slice(),r.compact(r.map(i,function(t){for(var i=!1,r=e.length;r--;){var o=e[r],a=n.providerSupports(t,o.sources[0]);a&&e.splice(r,1),i=i||a}if(i)return t}))},choose:function(e){e=r.isObject(e)?e:{};for(var t=this.providers.length,n=0;n<t;n++){var o=this.providers[n];if(this.providerSupports(o,e)){var a=t-n-1;return{priority:a,name:o.name,type:e.type,providerToCheck:o,provider:i[o.name]}}}return null}}),a}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=window.performance,t=!(!e||!e.now),n=1e3,i=function(){return t?e.now():(new Date).getTime()},r=function(){var e=i(),t=e,r=function(){var e=i()-t;e>n?e=n:e<0&&(e=0),t+=e};setInterval(r,50),Object.defineProperty(this,"currentTime",{get:function(){return r(),t-e}})};return r.prototype.now=function(){return this.currentTime},new r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){return function(t){return e.each(Array.prototype.slice.call(arguments,1),function(e){if(e)for(var n in e)n in t||(t[n]=e[n])}),t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){return{hasClass:function(e,t){var n=" "+t+" ";return 1===e.nodeType&&(" "+e.className+" ").replace(/[\t\r\n\f]/g," ").indexOf(n)>=0}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,function(e,t,n){var i,r;i=[n(1),n(3)],r=function(e,t){return e.extend({get:function(e){return this.attributes=this.attributes||{},this.attributes[e]},set:function(e,t){if(this.attributes=this.attributes||{},this.attributes[e]!==t){var n=this.attributes[e];this.attributes[e]=t,this.trigger("change:"+e,this,t,n)}},clone:function(){return e.clone(this.attributes)},change:function(e,t,n){var i="change:"+e,r=this.get(e);return this.on(i,t,n),t.call(n,this,r,r),this}},t)}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1)],r=function(e){var t={};return t.isDvr=function(e,t){return Math.abs(e)>=Math.max(t,0)},t.streamType=function(n,i){var r=e.isUndefined(i)?120:i,o="VOD";return n===1/0?o="LIVE":n<0&&(o=t.isDvr(n,r)?"DVR":"LIVE"),o},t}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=function(e,n,i){n=n||this,i=i||[];var r=window.jwplayer;if(r&&r.debug)return e.apply(n,i);try{return e.apply(n,i)}catch(o){return new t(e.name,o)}},t=function(e,t){this.name=e,this.message=t.message||t.toString(),this.error=t};return{tryCatch:e,Error:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(2),n(20),n(11),n(5),n(1)],r=function(e,t,i,r,o){var a,s=t.style,l={back:!0,backgroundOpacity:50,edgeStyle:null,fontSize:14,fontOpacity:100,fontScale:.05,preprocessor:o.identity,windowOpacity:0};return a=function(r){function a(){if(o.isFinite(P.fontSize)){var e=r.get("containerHeight");return e?void(j=l.fontScale*P.fontSize/l.fontSize):void r.once("change:containerHeight",a)}}function u(){var e=r.get("containerHeight");if(e){var t=Math.round(e*j);r.get("renderCaptionsNatively")?p(r.get("id"),t):s(b,{fontSize:t+"px"})}}function c(e,t){u(),f(e,t),d(e,t)}function d(e,n){t.css("#"+e+" .jw-text-track-display",k,e),t.css("#"+e+" .jw-text-track-cue",n,e)}function f(n,i){e.isSafari()&&t.css("#"+n+" .jw-video::-webkit-media-text-track-display-backdrop",{backgroundColor:i.backgroundColor},n,!0),t.css("#"+n+" .jw-video::-webkit-media-text-track-display",k,n,!0),t.css("#"+n+" .jw-video::cue",i,n,!0)}function p(e,n){k.fontSize=n+"px",t.css("#"+e+" .jw-video::-webkit-media-text-track-display",k,e,!0)}function h(e,n){var i=n.color,r=n.fontOpacity;if((i||r!==l.fontOpacity)&&(e.color=t.hexToRgba(i||"#ffffff",r)),n.back){var o=n.backgroundColor,a=n.backgroundOpacity;o===l.backgroundColor&&a===l.backgroundOpacity||(e.backgroundColor=t.hexToRgba(o,a))}else e.background="transparent";n.fontFamily&&(e.fontFamily=n.fontFamily),n.fontStyle&&(e.fontStyle=n.fontStyle),n.fontWeight&&(e.fontWeight=n.fontWeight),n.textDecoration&&(e.textDecoration=n.textDecoration)}function g(e,n,i){var r=t.hexToRgba("#000000",i);"dropshadow"===e?n.textShadow="0 2px 1px "+r:"raised"===e?n.textShadow="0 0 5px "+r+", 0 1px 5px "+r+", 0 2px 5px "+r:"depressed"===e?n.textShadow="0 -2px 1px "+r:"uniform"===e&&(n.textShadow="-2px 0 1px "+r+",2px 0 1px "+r+",0 -2px 1px "+r+",0 2px 1px "+r+",-1px 1px 1px "+r+",1px 1px 1px "+r+",1px -1px 1px "+r+",1px 1px 1px "+r)}function v(e){r.get("renderCaptionsNatively")||(E=e,this.selectCues(y,E))}function m(){r.get("renderCaptionsNatively")||n.e(10,function(require){n(51),C=window.WebVTT})}var y,w,E,b,A,L,C,j,k,P={};b=document.createElement("div"),b.className="jw-captions jw-reset",this.show=function(){i.addClass(b,"jw-captions-enabled")},this.hide=function(){i.removeClass(b,"jw-captions-enabled")},this.populate=function(e){if(!r.get("renderCaptionsNatively"))return w=[],y=e,e?void this.selectCues(e,E):(w=[],void this.renderCues())},this.resize=function(){u(),this.renderCues(!0)},this.renderCues=function(e){e=!!e,C&&C.processCues(window,w,b,e)},this.selectCues=function(e,t){var n,i;e&&e.data&&t&&(i=this.getAlignmentPosition(e,t),i!==!1&&(n=this.getCurrentCues(e.data,i),this.updateCurrentCues(n),this.renderCues(!0)))},this.getCurrentCues=function(e,t){return o.filter(e,function(e){return t>=e.startTime&&(!e.endTime||t<=e.endTime)})},this.updateCurrentCues=function(e){return e.length?o.difference(e,w).length&&(i.addClass(A,"jw-captions-window-active"),w=e):w=[],w},this.getAlignmentPosition=function(e,t){var n=e.source,i=t.metadata;return n?i&&o.isNumber(i[n])?i[n]:void 0:e.embedded&&t.duration<0?t.position-t.duration:t.position},this.clear=function(){e.empty(b)},this.setup=function(e,n){A=document.createElement("div"),L=document.createElement("span"),A.className="jw-captions-window jw-reset",L.className="jw-captions-text jw-reset",P=o.extend({},l,n),j=l.fontScale,a(P.fontSize);var i=P.windowColor,u=P.windowOpacity,d=P.edgeStyle;k={};var f={};h(f,P),(i||u!==l.windowOpacity)&&(k.backgroundColor=t.hexToRgba(i||"#000000",u)),g(d,f,P.fontOpacity),P.back||null!==d||g("uniform",f),s(A,k),s(L,f),c(e,f),A.appendChild(L),b.appendChild(A),this.populate(r.get("captionsTrack")),r.set("captions",P)},this.element=function(){return b},r.on("change:playlistItem",function(){E=null,w=[]},this),r.on("change:captionsTrack",function(e,t){this.populate(t)},this),r.mediaController.on("seek",function(){w=[]},this),r.mediaController.on("time seek",v,this),r.mediaController.on("subtitlesTrackData",function(){this.selectCues(y,E)},this),r.on("itemReady",m,this)}}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,,,,,,,,,,,,,,,function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(143),s=i(a);r=[],o=function(){function e(e,t,n,i){return(0,s["default"])(e,t,n,i)}return e}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(144),s=i(a);r=[n(6),n(2),n(4),n(1),n(3)],o=function(e,t,n,i,r){var o=t.style,a={linktarget:"_blank",margin:8,hide:!1,position:"top-right"};return function(l){function u(){var e=l.get("dock"),n=!!(e&&e.length&&"top-right"===d.position&&l.get("controls"));t.toggleClass(c,"jw-below",n)}i.extend(this,r);var c,d,f=new Image;return this.setup=function(){if(d=i.extend({},a,l.get("logo")),d.file){d.position=d.position||a.position,d.hide="true"===d.hide.toString(),c||(c=t.createElement((0,s["default"])(d.position,d.hide))),l.set("logo",d),l.change("dock",u),l.on("change:controls",u),f.onload=function(){var e={backgroundImage:'url("'+this.src+'")',width:this.width,height:this.height};if(d.margin!==a.margin){var t=/(\w+)-(\w+)/.exec(d.position);3===t.length&&(e["margin-"+t[1]]=d.margin,e["margin-"+t[2]]=d.margin)}o(c,e),l.set("logoWidth",e.width)},f.src=d.file;var r=new e(c);r.on("click tap",function(e){t.exists(e)&&e.stopPropagation&&e.stopPropagation(),this.trigger(n.JWPLAYER_LOGO_CLICK,{link:d.link,linktarget:d.linktarget})},this)}},this.setContainer=function(e){c&&e.appendChild(c)},this.element=function(){return c},this.position=function(){return d.position},this.destroy=function(){l.off("change:dock",u),l.off("change:controls",u),f.onload=null},this}}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){function n(e,t){t.off("change:mediaType",null,this),t.on("change:mediaType",function(t,n){"audio"===n&&this.setImage(e.get("playlistItem").image)},this)}function i(e,n){var i=e.get("autostart")&&!t.isMobile()||e.get("item")>0;return i?(this.setImage(null),e.off("change:state",null,this),void e.on("change:state",function(e,t){"complete"!==t&&"idle"!==t&&"error"!==t||(this.setImage(n.image),this.resize(null,null,e.get("stretching")))},this)):void this.setImage(n.image)}var r=function(e){this.model=e,e.on("change:playlistItem",i,this),e.on("change:mediaModel",n,this)};return e.extend(r.prototype,{setup:function(e){this.el=e;var t=this.model.get("playlistItem");t&&this.setImage(t.image)},setImage:function(n){var i=this.image;i&&(i.onload=null,this.image=null),this.model.off("change:state",null,this);var r="";e.isString(n)&&(r='url("'+n+'")',i=this.image=new Image,i.src=n),t.style(this.el,{backgroundImage:r})},resize:function(e,n,i){if("uniform"===i){if(e&&(this.playerAspectRatio=e/n),!this.playerAspectRatio)return;var r=this.image,o=null;if(r){if(0===r.width){var a=this;return void(r.onload=function(){a.resize(e,n,i)})}var s=r.width/r.height;Math.abs(this.playerAspectRatio-s)<.09&&(o="cover")}t.style(this.el,{backgroundSize:o})}},element:function(){return this.el}}),r}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(1),n(2)],r=function(e,t){var n=function(e){this.model=e,this.model.on("change:playlistItem",this.playlistItem,this)};return e.extend(n.prototype,{hide:function(){this.el.style.display="none"},show:function(){this.el.style.display=""},setup:function(e){this.el=e;var t=this.el.getElementsByTagName("div");this.title=t[0],this.description=t[1],this.model.get("playlistItem")&&this.playlistItem(this.model,this.model.get("playlistItem")),this.model.on("change:logoWidth",this.update,this),this.model.on("change:dock",this.update,this)},update:function(e){var n={paddingLeft:0,paddingRight:0},i=e.get("controls"),r=e.get("dock"),o=e.get("logo");if(o){var a=1*(""+o.margin).replace("px",""),s=e.get("logoWidth")+(isNaN(a)?0:a);"top-left"===o.position?n.paddingLeft=s:"top-right"===o.position&&(n.paddingRight=s)}if(i&&r&&r.length){var l=56*r.length;n.paddingRight=Math.max(n.paddingRight,l)}t.style(this.el,n)},playlistItem:function(e,t){if(e.get("displaytitle")||e.get("displaydescription")){var n="",i="";t.title&&e.get("displaytitle")&&(n=t.title),t.description&&e.get("displaydescription")&&(i=t.description),this.updateText(n,i)}else this.hide()},updateText:function(e,t){this.title.innerHTML=e,this.description.innerHTML=t,this.title.firstChild||this.description.firstChild?this.show():this.hide()},element:function(){return this.el}}),n}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.CONTROLBAR_ONLY_HEIGHT=44;t.isAudioMode=function(e){var t=e.get("height");if(e.get("aspectratio"))return!1;if("string"==typeof t&&t.indexOf("%")>-1)return!1;var i=1*t||NaN;return i=isNaN(i)?e.get("containerHeight"):i,!!i&&(i&&i<=n)}},function(e,t,n){"use strict";function i(e){var t=0;return e>=1280?t=7:e>=960?t=6:e>=800?t=5:e>=640?t=4:e>=540?t=3:e>=420?t=2:e>=320&&(t=1),t}function r(e,t){var n="jw-breakpoint-"+t;o.replaceClass(e,/jw-breakpoint-\d+/,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.getBreakpoint=i,t.setBreakpoint=r;var o=n(11)},function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r,o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();r=[n(6),n(4),n(3),n(1)],o=function(e,t,n,r){return function(){function o(t,a){i(this,o),r.extend(this,n),this.revertAlternateClickHandlers(),this.domElement=a,this.model=t;var s={enableDoubleTap:!0,useMove:!0};this.ui=new e(a,r.extend(s,s)).on({"click tap":this.clickHandler,"doubleClick doubleTap":function(){return this.alternateDoubleClickHandler?void this.alternateDoubleClickHandler():void this.trigger("doubleClick")},move:function(){this.trigger("move")},over:function(){this.trigger("over")},out:function(){this.trigger("out")}},this)}return a(o,[{key:"destroy",value:function(){this.ui&&(this.ui.destroy(),this.ui=this.domElement=this.model=null,this.revertAlternateClickHandlers())}},{key:"clickHandler",value:function(e){if(!this.model.get("flashBlocked"))return this.alternateClickHandler?void this.alternateClickHandler(e):void this.trigger(e.type===t.touchEvents.CLICK?"click":"tap")}},{key:"element",value:function(){return this.domElement}},{key:"setAlternateClickHandlers",value:function(e,t){this.alternateClickHandler=e,this.alternateDoubleClickHandler=t||null}},{key:"revertAlternateClickHandlers",value:function(){this.alternateClickHandler=null,this.alternateDoubleClickHandler=null}}]),o}()}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var i,r;i=[n(11)],r=function(e){return function(t){var n=!1,i=function(){n=!1,e.removeClass(t,"jw-no-focus")},r=function(e){e.target&&e.target.blur&&e.target.blur()},o=function(){n=!0,e.addClass(t,"jw-no-focus")},a=function(){n||i()};return t.addEventListener("focus",a),t.addEventListener("blur",i),t.addEventListener("mousedown",o),t.addEventListener("mouseup",r),{destroy:function(){t.removeEventListener("focus",a),t.removeEventListener("blur",i),t.removeEventListener("mousedown",o),t.removeEventListener("mouseup",r)}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[],r=function(){var e=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"];return function(t,n,i){for(var r=t.requestFullscreen||t.webkitRequestFullscreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen,o=n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen,a=!(!r||!o),s=e.length;s--;)n.addEventListener(e[s],i);return{events:e,supportsDomFullscreen:function(){return a},requestFullscreen:function(){r.apply(t)},exitFullscreen:function(){o.apply(n)},fullscreenElement:function(){return n.fullscreenElement||n.webkitCurrentFullScreenElement||n.mozFullScreenElement||n.msFullscreenElement},destroy:function(){for(s=e.length;s--;)n.removeEventListener(e[s],i)}}}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=window.IntersectionObserver;window.IntersectionObserver&&!d&&(d=new e(function(e){if(e&&e.length)for(var t=e.length;t--;)for(var n=e[t],i=c.length;i--;){var r=c[i];if(n.target===r.getContainer()){r.model.set("intersectionRatio",n.intersectionRatio);break}}},{threshold:[0,.25,.5,.75,1]}))}function o(){(0,u.cancelAnimationFrame)(f),f=(0,u.requestAnimationFrame)(function(){c.forEach(function(e){e.updateBounds()}),c.forEach(function(e){e.model.get("visibility")&&e.updateStyles()}),c.forEach(function(e){e.checkResized()})})}function a(){c.forEach(function(e){e.model.set("activeTab",(0,l["default"])())})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(55),l=i(s),u=n(61),c=[],d=void 0,f=-1;document.addEventListener("visibilitychange",a),document.addEventListener("webkitvisibilitychange",a),window.addEventListener("resize",o),window.addEventListener("orientationchange",o),window.addEventListener("beforeunload",function(){document.removeEventListener("visibilitychange",a),document.removeEventListener("webkitvisibilitychange",a),window.removeEventListener("resize",o),window.removeEventListener("orientationchange",o)}),t["default"]={add:function(e){c.push(e)},remove:function(e){var t=c.indexOf(e);t!==-1&&c.splice(t,1)},size:function(){return c.length},observe:function(e){r();try{d.unobserve(e)}catch(t){}d.observe(e)},unobserve:function(e){d&&d.unobserve(e)}}},function(e,t){"use strict";function n(e,t,n){if(e.get("fullscreen"))return 1;if(!e.get("activeTab"))return 0;var r=e.get("intersectionRatio");return void 0===r&&(r=i(t,n)),r}function i(e,t){var n=document.documentElement,i=document.body,o={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight};if(!i.contains(e))return 0;for(var a=e.getBoundingClientRect(),s=a,l=e.parentNode,u=!1;!u;){var c=null;if(l&&1===l.nodeType?"visible"!==window.getComputedStyle(l).overflow&&(c=t(l)):(u=!0,c=o),c&&(s=r(c,s),!s))return 0;l=l.parentNode}var d=a.width*a.height,f=s.width*s.height;return d?f/d:0}function r(e,t){var n=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom),r=Math.max(e.left,t.left),o=Math.min(e.right,t.right),a=o-r,s=i-n;return a>=0&&s>=0&&{top:n,bottom:i,left:r,right:o,width:a,height:s}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(145),s=i(a),l=n(135),u=n(140),c=i(u),d=n(141),f=i(d),p=n(55),h=i(p),g=n(61),v=n(136);r=[n(4),n(5),n(3),n(2),n(1),n(139),n(138),n(137),n(111),n(132),n(133),n(134)],o=function(e,t,i,r,o,a,u,d,p,m,y,w){var E=r.style,b=r.bounds,A=r.isMobile(),L=r.isIE(),C=!1;return function(j,k){function P(){return{reason:"interaction"}}function _(){(0,g.cancelAnimationFrame)(ce),ce=(0,g.requestAnimationFrame)(R)}function R(){$.isSetup&&($.updateBounds(),$.updateStyles(),$.checkResized())}function x(e,t){var n=(0,l.isAudioMode)(k);if(o.isNumber(e)&&o.isNumber(t)){var i=(0,v.getBreakpoint)(e);(0,v.setBreakpoint)(Z,i);var a=i<2,s=k.get("timeSliderAbove"),u=!n&&s!==!1&&(s||a);r.toggleClass(Z,"jw-flag-small-player",a),r.toggleClass(Z,"jw-flag-time-slider-above",u),r.toggleClass(Z,"jw-orientation-portrait",t>e)}r.toggleClass(Z,"jw-flag-audio-player",n),k.set("audioMode",n)}function T(e,t,n){if(e){var i={color:e,borderColor:e,stroke:e};r.css("#"+n+" .jw-color-active",i,n),r.css("#"+n+" .jw-color-active-hover:hover",i,n)}if(t){var o={color:t,borderColor:t,stroke:t};r.css("#"+n+" .jw-color-inactive",o,n),r.css("#"+n+" .jw-color-inactive-hover:hover",o,n)}}function S(){k.set("visibility",(0,f["default"])(k,Z,b))}function I(e,t,n){t&&!n&&(K(le||e),$.updateStyles())}function M(n,i,o){var a=new d(i,o,{useHover:!0});return a.on({click:function(){$.trigger(e.JWPLAYER_DISPLAY_CLICK),k.get("controls")&&n.play(P())},tap:function(){$.trigger(e.JWPLAYER_DISPLAY_CLICK);var o=i.get("state"),a=k.get("controls");if(a&&(o===t.IDLE||o===t.COMPLETE||le&&le.get("state")===t.PAUSED)&&n.play(P()),a&&o===t.PAUSED){if(le||i.get("castActive")||i.mediaModel&&"audio"===i.mediaModel.get("mediaType"))return;r.toggleClass(Z,"jw-flag-controls-hidden"),ie.renderCues(!0)}else ge&&(ge.showing?ge.userInactive():ge.userActive())},doubleClick:function(){return ge&&n.setFullscreen()},move:function(){return ge&&ge.userActive()},over:function(){return ge&&ge.userActive()}}),a}function O(e,t){r.replaceClass(Z,/jw-skin-\S+/,t?"jw-skin-"+t:"")}function D(e,t){r.replaceClass(Z,/jw-stretch-\S+/,"jw-stretch-"+t)}function N(e,t){r.toggleClass(Z,"jw-flag-aspect-mode",!!t);var n=Z.querySelector(".jw-aspect");E(n,{paddingTop:t||null})}function Y(e,t){r.toggleClass(Z,"jw-flag-flash-blocked",t)}function W(e){e.link?(j.pause(!0,P()),j.setFullscreen(!1),window.open(e.link,e.linktarget)):k.get("controls")&&j.play(P())}function F(e,t,n){var i=r.exists(e),o=r.exists(t),a={width:e};o&&n&&k.set("aspectratio",null),k.get("aspectratio")||(a.height=t),i&&o&&(k.set("width",e),k.set("height",t)),E(Z,a)}function J(e,t){if((e&&!isNaN(1*e)||(e=k.get("containerWidth")))&&(t&&!isNaN(1*t)||(t=k.get("containerHeight")))){te&&te.resize(e,t,k.get("stretching"));var n=k.getVideo();if(n){var i=n.resize(e,t,k.get("stretching"));i&&(clearTimeout(ue),ue=setTimeout(J,250))}}}function B(){if(fe.supportsDomFullscreen()){var e=fe.fullscreenElement();return!(!e||e.id!==k.get("id"))}return le?le.getVideo().getFullScreen():k.getVideo().getFullScreen()}function V(e){var t=k.get("fullscreen"),n=void 0!==e.jwstate?e.jwstate:B();t!==n&&k.set("fullscreen",n),_(),clearTimeout(ue),ue=setTimeout(J,200)}function U(e,t){t?(r.addClass(e,"jw-flag-fullscreen"),E(document.body,{overflowY:"hidden"}),ge&&ge.userActive()):(r.removeClass(e,"jw-flag-fullscreen"),E(document.body,{overflowY:""})),J(),_()}function H(){ge.userActive()}function z(e,t){var n="audio"===t,i=k.getVideo(),o=i&&0===i.getName().name.indexOf("flash");r.toggleClass(Z,"jw-flag-media-audio",n),n&&!o?Z.insertBefore(te.el,ee):Z.insertBefore(te.el,ie.element())}function G(e,t){if(!le){var n="LIVE"===t;r.toggleClass(Z,"jw-flag-live",n),$.setAltText(n?e.get("localization").liveBroadcast:"")}}function q(e,t){return t?void(t.name?ne.updateText(t.name,t.message):ne.updateText(t.message,"")):void ne.playlistItem(e,e.get("playlistItem"))}function K(e){if(k.get("viewSetup")){oe=e.get("state");var t=null;le&&(t=oe),ge&&(ge.instreamState=t),Q(oe)}}function Q(e){switch(k.get("controls")&&e!==t.PAUSED&&r.hasClass(Z,"jw-flag-controls-hidden")&&r.removeClass(Z,"jw-flag-controls-hidden"),r.replaceClass(Z,/jw-state-\S+/,"jw-state-"+e),e){case t.IDLE:case t.ERROR:case t.COMPLETE:ie.hide();break;default:ie.show(),e===t.PAUSED&&ge&&!ge.showing&&ie.renderCues(!0)}}function X(){!ge||le||A||ge.userActive()}var $=o.extend(this,i,{isSetup:!1,api:j,model:k});o.extend(k.attributes,{containerWidth:void 0,containerHeight:void 0,mediaContainer:void 0,fullscreen:!1,inDom:void 0,iFrame:void 0,activeTab:void 0,intersectionRatio:void 0,visibility:void 0,viewable:void 0,viewSetup:!1,audioMode:void 0,touchMode:void 0,altText:"",cues:void 0,castClicked:!1,scrubbing:!1,logoWidth:0});var Z=r.createElement((0,s["default"])(k.get("id"),k.get("localization").player)),ee=Z.querySelector(".jw-media"),te=new y(k),ne=new w(k),ie=new p(k),re=void 0,oe=void 0,ae=void 0,se=void 0,le=void 0,ue=-1,ce=-1,de=void 0,fe=void 0,pe=void 0,he=null,ge=void 0;this.updateBounds=function(){(0,g.cancelAnimationFrame)(ce);var e=document.body.contains(Z),t=b(Z),n=Math.round(t.width),i=Math.round(t.height);return n===ae&&i===se?(ae&&se||_(),void k.set("inDom",e)):(n&&i||ae&&se||_(),(n||i||e)&&(k.set("containerWidth",n),k.set("containerHeight",i)),k.set("inDom",e),void(e&&c["default"].observe(Z)))},this.updateStyles=function(){var e=k.get("containerWidth"),t=k.get("containerHeight");k.get("controls")&&x(e,t),ge&&ge.resize(e,t),J(e,t),ie.resize()},this.checkResized=function(){var t=k.get("containerWidth"),n=k.get("containerHeight");if(t!==ae||n!==se){ae=t,se=n,$.trigger(e.JWPLAYER_RESIZE,{width:t,height:n});var i=(0,v.getBreakpoint)(t);he!==i&&(he=i,$.trigger(e.JWPLAYER_BREAKPOINT,{breakpoint:he}))}},this.handleColorOverrides=function(){function e(e,n,i,o){e=r.prefix(e,"#"+t+(o?"":" "));var a={};a[n]=i,r.css(e.join(", "),a,t)}var t=k.get("id"),n=k.get("skinColorActive"),i=k.get("skinColorInactive"),o=k.get("skinColorBackground");if(n&&(e([".jw-button-color.jw-toggle",".jw-button-color:hover",".jw-button-color.jw-toggle.jw-off:hover",".jw-option:not(.jw-active-option):hover",".jw-nextup-header"],"color",n),e([".jw-option.jw-active-option",".jw-progress"],"background","none "+n)),i&&(e([".jw-text",".jw-option",".jw-button-color",".jw-toggle.jw-off",".jw-skip .jw-skip-icon",".jw-nextup-body"],"color",i),e([".jw-cue",".jw-knob",".jw-active-option",".jw-nextup-header"],"background","none "+i)),o){if(e([".jw-background-color"],"background","none "+o),k.get("timeSliderAbove")!==!1){var a="transparent linear-gradient(180deg, "+r.getRgba(o,0)+" 0%, "+r.getRgba(o,.25)+" 30%, "+r.getRgba(o,.4)+" 70%, "+r.getRgba(o,.5)+") 100%";e([".jw-flag-time-slider-above .jw-background-color.jw-controlbar"],"background",a,!0)}e([".jw-flag-time-slider-above .jw-background-color.jw-slider-time"],"background","transparent",!0)}T(n,i,t)},this.setup=function(){var t=this;te.setup(Z.querySelector(".jw-preview")),ne.setup(Z.querySelector(".jw-title")),re=new m(k),re.setup(),re.setContainer(Z),re.on(e.JWPLAYER_LOGO_CLICK,W),ie.setup(Z.id,k.get("captions")),Z.insertBefore(ie.element(),ne.element()),de=M(j,k,ee),pe=u(Z),fe=a(Z,document,V),Z.addEventListener("focus",X),k.on("change:errorEvent",q),k.on("change:hideAdsControls",function(e,t){r.toggleClass(Z,"jw-flag-ads-hide-controls",t)}),k.on("change:scrubbing",function(e,t){r.toggleClass(Z,"jw-flag-dragging",t)}),k.mediaController.on("fullscreenchange",V),k.change("mediaModel",function(e,n){n.change("mediaType",z,t),n.on("change:visualQuality",function(){J()},t)}),k.change("skin",O,this),k.change("stretching",D),k.change("flashBlocked",Y);var i=k.get("width"),o=k.get("height");F(i,o),k.change("aspectratio",N),k.get("controls")?x(i,o):r.addClass(Z,"jw-flag-controls-hidden"),C||(C=!0,n(173)),L&&r.addClass(Z,"jw-ie"),k.get("skin-loading")===!0&&(r.addClass(Z,"jw-flag-skin-loading"),k.once("change:skin-loading",function(){r.removeClass(Z,"jw-flag-skin-loading")})),this.handleColorOverrides(),k.set("mediaContainer",ee),k.set("iFrame",r.isIframe()),k.set("activeTab",(0,h["default"])()),k.set("touchMode",A&&("string"==typeof o||o>=l.CONTROLBAR_ONLY_HEIGHT)),c["default"].add(this),this.isSetup=!0,k.set("viewSetup",!0),k.set("inDom",document.body.contains(Z))},this.init=function(){this.updateBounds(),k.change("state",K),k.on("change:fullscreen",me),k.on("change:activeTab",S),k.on("change:fullscreen",S),k.on("change:intersectionRatio",S),k.on("change:visibility",I),S(),1!==c["default"].size()||k.get("visibility")||I(k,1,0),ae=se=null,this.checkResized()};var ve=function(e,t){t&&K(le||k)};this.addControls=function(e){ge=e,r.removeClass(Z,"jw-flag-controls-hidden"),k.change("streamType",G,this),e.enable(j,k),e.addActiveListeners(re.element());var n=e.logoContainer();n&&re.setContainer(n),se&&(x(ae,se),e.resize(ae,se),ie.renderCues(!0)),e.on("userActive userInactive",function(){oe!==t.PLAYING&&oe!==t.BUFFERING||ie.renderCues(!0)});var i=Z.querySelector(".jw-overlays");i.addEventListener("mousemove",H)},this.removeControls=function(){re.setContainer(Z),ge&&(ge.removeActiveListeners(re.element()),ge.disable(),ge=null);var e=document.querySelector(".jw-overlays");e&&e.removeEventListener("mousemove",H),r.addClass(Z,"jw-flag-controls-hidden")};var me=function(e,t){var n=k.getVideo();t&&ge&&k.get("autostartMuted")&&ge.unmuteAutoplay(j,k),fe.supportsDomFullscreen()?(t?fe.requestFullscreen():fe.exitFullscreen(),U(Z,t)):L?U(Z,t):(le&&le.getVideo()&&le.getVideo().setFullscreen(t),n.setFullscreen(t)),n&&0===n.getName().name.indexOf("flash")&&n.setFullscreen(t)};this.resize=function(e,t){var n=!0;F(e,t,n),R()},this.resizeMedia=J,this.setupInstream=function(e){this.instreamModel=le=e,le.on("change:controls",ve,this),le.on("change:state",K,this),r.addClass(Z,"jw-flag-ads"),ge&&ge.userActive()},this.setAltText=function(e){k.set("altText",e)},this.destroyInstream=function(){if(le&&(le.off(null,null,this),le=null),this.setAltText(""),r.removeClass(Z,["jw-flag-ads","jw-flag-ads-hide-controls"]),k.set("hideAdsControls",!1),k.getVideo){var e=k.getVideo();e.setContainer(ee)}G(k,k.get("streamType")),de.revertAlternateClickHandlers()},this.addCues=function(e){k.set("cues",e)},this.clickHandler=function(){return de},this.getContainer=this.element=function(){return Z},this.controlsContainer=function(){return ge?ge.element():null},this.getSafeRegion=function(e){var t={x:0,y:0,width:ae||0,height:se||0};return ge&&(e=e||!r.exists(e),e&&(t.height-=ge.controlbarHeight())),t},this.setCaptions=function(e){ie.clear(),ie.setup(k.get("id"),e),ie.resize()},this.destroy=function(){c["default"].unobserve(Z),c["default"].remove(this),this.isSetup=!1,this.off(),(0,g.cancelAnimationFrame)(ce),clearTimeout(ue),Z.removeEventListener("focus",X),pe&&(pe.destroy(),pe=null),fe&&(fe.destroy(),fe=null),k.mediaController&&k.mediaController.off("fullscreenchange",V),ge&&ge.disable(),le&&this.destroyInstream(),de&&(de.destroy(),de=null),re&&(re.destroy(),re=null),r.clearCss(k.get("id"))}}}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return'<div id="'+e+'" class="jw-skin-'+t+' jw-error jw-reset"><div class="jw-title jw-reset">'+('<div class="jw-title-primary jw-reset">'+n+"</div>")+('<div class="jw-title-secondary jw-reset">'+i+"</div>")+'</div><div class="jw-display-container jw-reset"><div class="jw-display-icon-container jw-background-color jw-reset"><div class="jw-icon jw-icon-display jw-reset" aria-hidden="true"></div></div></div></div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var n=t?" jw-hide":"";return'<div class="jw-logo jw-logo-'+e+n+' jw-reset"></div>'}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div id="'+e+'" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="'+t+'"><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset"><div class="jw-title-primary jw-reset"></div><div class="jw-title-secondary jw-reset"></div></div><div class="jw-overlays jw-reset"></div></div>'}},function(e,t,n){var i,r;i=[n(67),n(1),n(24),n(2),n(7),n(6),n(72),n(13),n(73),n(63),n(4),n(5),n(46),n(30),n(44),n(18)],r=function(e,t,n,i,r,o,a,s,l,u,c,d,f,p,h,g){var v={};return v.api=e,v._=t,v._=t,v.version=n,v.utils=t.extend(i,r,{key:a,extend:t.extend,scriptloader:s,rssparser:h,tea:l,UI:o}),v.utils.css.style=v.utils.style,v.vid=u,v.events=t.extend({},c,{state:d}),v.playlist=t.extend({},f,{item:p}),v.plugins=g,v}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,function(e,t,n){var i,r;i=[n(85),n(14),n(161),n(25),n(23),n(1)],r=function(e,t,i,r,o,a){var s=e.prototype.setup;return e.prototype.setup=function(e,l){function u(){var e=p.get("cast");return a.isObject(e)&&g("casting")}function c(){var e=p.getVideo(),t=p.get("cast")||{};u()?(!t.customAppId&&r.containsDrm(p)||d.apply(this),f.apply(this)):e&&e.video&&(e.video.webkitWirelessVideoPlaybackDisabled=!0)}function d(){n.e(4,function(require){if(window.chrome&&o.isChrome()){var e=n(68);this._castController=new e(this,p),this.castToggle=this._castController.castToggle.bind(this._castController)}}.bind(this))}function f(){window.WebKitPlaybackTargetAvailabilityEvent&&n.e(8,function(require){var e=n(66);this._airplayController=new e(this,p),this.castToggle=this._airplayController.airplayToggle.bind(this._airplayController)}.bind(this))}s.apply(this,arguments);var p=this._model,h=p.get("edition"),g=t(h),v=i.setup(this._view);e.analytics&&(e.sdkplatform=e.sdkplatform||e.analytics.sdkplatform);var m=this;l.getAdBlock=v.getAdBlock,this.on("playlistItem",function(){v.onReady.apply(m)}),this.once("ready",c,this)},e}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(72),n(14),n(1),n(2),n(59),n(91),n(25)],r=function(e,t,i,r,o,a,s){function l(e,t,n){if(t){var i=t.client;delete t.client,/\.(js|swf)$/.test(i||"")||(i=o.repo()+n),e[i]=t}}function u(e,n){var r=i.clone(n.get("plugins"))||{},a=n.get("edition"),s=t(a),u=/^(vast|googima|freewheel)$/,c=/\.(js|swf)$/,d=o.repo(),f=i.clone(n.get("advertising"));if(s("ads")&&f&&(c.test(f.client)?r[f.client]=f:u.test(f.client)&&(r[d+f.client+".js"]=f),delete f.client),s("jwpsrv")){var p=n.get("analytics");i.isObject(p)||(p={}),l(r,p,"jwpsrv.js")}l(r,n.get("ga"),"gapro.js"),l(r,n.get("sharing"),"sharing.js");var h=n.get("related"),g=i.isObject(h),v=n.get("visualplaylist")!==!1||g;g||(h={disableRelated:!0}),h.showDockButton=v,l(r,h,"related.js");var m=n.get("mobileSdk");if(!m){var y=n.get("playlist");i.some(y,function(e){if(e.stereomode&&e.stereomode.length>0)return l(r,n.get("vr")||{},"vr.js"),!0})}n.set("plugins",r),e()}function c(t,i){var s=i.get("key")||window.jwplayer&&window.jwplayer.key,l=new e(s),u=l.edition();if(i.set("key",s),i.set("edition",u),"unlimited"===u){var c=r.getScriptPath("jwplayer.js");if(!c)return void a.error(t,"Error setting up player","Could not locate jwplayer.js script tag");n.p=c,r.repo=o.repo=o.loadFrom=function(){return c}}i.updateProviders(),"invalid"===u?a.error(t,"Error setting up player",(void 0===s?"Missing":"Invalid")+" license key"):t()}function d(e,t){s.containsDrm(t)?s.probe(e,t.get("edition")):e()}function f(){var e=a.getQueue();return e.CHECK_KEY={method:c,depends:["LOAD_BASE64_POLYFILL"]},e.PROBE_DRM_SUPPORT={method:d,depends:["CHECK_KEY","LOAD_PROMISE_POLYFILL"]},e.FILTER_PLUGINS={method:u,depends:["CHECK_KEY"]},e.FILTER_PLAYLIST.depends.push("PROBE_DRM_SUPPORT"),e.LOAD_PLUGINS.depends.push("FILTER_PLUGINS"),e}return{getQueue:f}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){var i,r;i=[n(93),n(146),n(1)],r=function(e,t,n){var i=window,r=n.extend(e,t);return"function"==typeof i.define&&i.define.amd&&i.define([],function(){return r}),i.jwplayer?i.jwplayer:r}.apply(t,i),!(void 0!==r&&(e.exports=r))},,,,,,,,,function(e,t,n){var i,r;i=[],r=function(){function e(){var e=document.createElement("div");return e.className=n,e.innerHTML="&nbsp;",e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.background="transparent",e}function t(t){function i(){if(a)return!0;var e=this;r()&&e.trigger("adBlock")}function r(){return null!==s.offsetParent&&s.className===n&&""!==s.innerHTML&&0!==s.clientHeight||(a=!0),a}function o(){return a}var a=!1,s=e();return t.element().appendChild(s),{onReady:i,getAdBlock:o}}var n="afs_ads";return{setup:t}}.apply(t,i),!(void 0!==r&&(e.exports=r))},function(e,t,n){function i(e){return e&&e.__esModule?e:{"default":e}}var r,o,a=n(164),s=i(a);r=[n(2),n(4),n(6),n(3),n(1)],o=function(e,t,n,i,r){var o=function(e){this.model=e,this.setup()};return r.extend(o.prototype,i,{setup:function(){this.destroy(),this.skipMessage=this.model.get("skipText"),this.skipMessageCountdown=this.model.get("skipMessage"),this.setWaitTime(this.model.get("skipOffset"));var t=(0,s["default"])();this.el=e.createElement(t),this.skiptext=this.el.getElementsByClassName("jw-skiptext")[0],this.skipAdOnce=r.once(this.skipAd.bind(this)),new n(this.el).on("click tap",r.bind(function(){this.skippable&&this.skipAdOnce()},this)),this.model.on("change:duration",this.onChangeDuration,this),this.model.on("change:position",this.onChangePosition,this),this.onChangeDuration(this.model,this.model.get("duration")),this.onChangePosition(this.model,this.model.get("position"))},updateMessage:function(e){this.skiptext.innerHTML=e},updateCountdown:function(e){this.updateMessage(this.skipMessageCountdown.replace(/xx/gi,Math.ceil(this.waitTime-e)))},onChangeDuration:function(t,n){if(n){if(this.waitPercentage){if(!n)return;this.itemDuration=n,this.setWaitTime(this.waitPercentage),delete this.waitPercentage}e.removeClass(this.el,"jw-hidden")}},onChangePosition:function(t,n){this.waitTime-n>0?this.updateCountdown(n):(this.updateMessage(this.skipMessage),this.skippable=!0,e.addClass(this.el,"jw-skippable"))},element:function(){return this.el},setWaitTime:function(t){if(r.isString(t)&&"%"===t.slice(-1)){var n=parseFloat(t);return void(this.itemDuration&&!isNaN(n)?this.waitTime=this.itemDuration*n/100:this.waitPercentage=t)}r.isNumber(t)?this.waitTime=t:"string"===e.typeOf(t)?this.waitTime=e.seconds(t):isNaN(Number(t))?this.waitTime=0:this.waitTime=Number(t)},skipAd:function(){this.trigger(t.JWPLAYER_AD_SKIPPED)},destroy:function(){this.el&&(this.el.removeEventListener("click",this.skipAdOnce),this.el.parentElement&&this.el.parentElement.removeChild(this.el)),delete this.skippable,delete this.itemDuration,delete this.waitPercentage}}),o}.apply(t,r),!(void 0!==o&&(e.exports=o))},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){return'<div class="jw-skip jw-background-color jw-hidden jw-reset"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>'}},,,function(e,t,n){t=e.exports=n(75)(),t.push([e.id,".jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}.jw-background-color{background:rgba(33,33,33,.8)}.jw-knob,.jw-text{color:#cecece}.jw-knob{background-color:#fff}.jw-button-color{color:#cecece}.jw-button-color:focus,:not(.jw-flag-touch) .jw-button-color:hover{outline:none;color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:#cecece}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:none}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-display-icon-container{margin:0 .25em}.jw-display-icon-container .jw-icon{color:#cecece}.jw-rail{background:hsla(0,0%,100%,.2)}.jw-buffer{background:hsla(0,0%,100%,.3)}.jw-progress{background:#fff}.jw-slider-horizontal,.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:.3em}.jw-slider-horizontal .jw-knob{margin-left:-.3em}.jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{width:.3em}.jw-menu,.jw-time-tip,.jw-volume-tip{border:0}.jw-menu,.jw-time-tip{padding:.5em}.jw-volume-tip{padding:1em}.jw-skip{padding:.5em}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:#cecece}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#fff}.jw-dock-button .jw-text,.jw-time-tip .jw-text{color:#cecece}.jw-dock-button{background:rgba(33,33,33,.8)}:not(.jw-flag-touch) .jw-dock-button:hover{background:#212121}.jw-icon-cast button{--connected-color:#fff;--disconnected-color:#cecece}.jw-icon-cast button:focus{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast button.jw-off{--connected-color:#cecece}.jw-icon-cast:hover button{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-nextup-header{background:rgba(33,33,33,.8);color:#fff}.jw-nextup-body{background:rgba(0,0,0,.8);color:#fff}.jw-nextup-thumbnail-visible+.jw-nextup-title:after{background:-webkit-linear-gradient(top,transparent,#000);background:linear-gradient(-180deg,transparent,#000)}.jw-nextup-close{color:#cecece}.jw-nextup-close:active,.jw-nextup-close:hover{color:#fff}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover,.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-media:hover~.jw-controls .jw-display-icon-display{background-color:#212121}.jwplayer:not(.jw-flag-touch):not(.jw-error):not(.jw-state-error):not(.jw-state-buffering) .jw-display-icon-container:hover .jw-icon{color:#fff}.jw-color-active,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive,:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:#cecece;stroke:#cecece;border-color:#cecece}.jw-option{color:#cecece}.jw-option.jw-active-option{color:#fff;background-color:hsla(0,0%,100%,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-flag-small-player .jw-title{background:-webkit-linear-gradient(top,rgba(51,51,51,.75),rgba(51,51,51,0));background:linear-gradient(180deg,rgba(51,51,51,.75),rgba(51,51,51,0));height:auto;padding:16px 0}.jw-flag-small-player .jw-title-primary,.jw-flag-small-player .jw-title-secondary{min-height:inherit;padding:0 16px}.jw-flag-small-player .jw-title-secondary{display:none;margin-top:5px}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;max-height:calc(100% - 40px);letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:calc(100% - 40px);line-height:normal}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-right.jw-below{top:3.5em}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right{bottom:0;right:0}.jw-state-setup{background-color:transparent}.jw-state-setup .jw-logo{visibility:hidden}body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}body .jw-error .jw-title .jw-title-primary,body .jwplayer.jw-state-error .jw-title .jw-title-primary{white-space:normal}body .jw-error .jw-title .jw-title-secondary,body .jwplayer.jw-state-error .jw-title .jw-title-secondary{display:block}body .jw-error{font-size:16px;background-color:#000;color:#fff;width:100%;height:100%;display:table;opacity:1;position:relative}.jw-state-idle .jw-preview,.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player) .jw-title,body .jw-error .jw-preview,body .jw-error .jw-title,body .jwplayer.jw-state-error .jw-preview,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-media,.jwplayer.jw-flag-skin-loading .jw-preview,.jwplayer.jw-flag-skin-loading .jw-rightclick,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}.jwplayer.jw-flag-controls-hidden .jw-captions{max-height:none}.jwplayer.jw-flag-controls-hidden video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player:not(.jw-flag-flash-blocked) .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:none}.jw-flag-audio-player object{min-height:45px}",""]);},,,,,,function(e,t,n){var i=n(167);"string"==typeof i&&(i=[["all-players",i,""]]),n(42).style(i,"all-players"),i.locals&&(e.exports=i.locals)}]);

/*! owl.carousel.min.js */
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/*! ja.js */
var js_site = (function($){
	var options = {
			bookmarkurl: "",
			bookmarktitle: "",
			confirm18show:true,
			confirm18: "",
			confirm18url: "",
			no18url: "http://tw.yahoo.com",
			device_is: 0,
			siteroot:"",
			rc_tp:"",
			is_member: false,
			scale: 1,
	};
	return {
		td_slideclips: function($target, $panel){
			if(typeof $panel === "undefined")
				$panel = $();
			$target.hover(function(e){
				var $one_a,panel_top=0,panel_width=0,panel_height=0;
				if($panel.length > 0){
					$panel.show();
					(function($target){
						var panel_content,screen_top,screen_bottom,screen_left,screen_right,panel_left, panel_top, target_offset = $target.offset();
						if($panel.data("prevTarget")){
							$panel.data("prevTarget").data("info-panel").append($panel.children());
						}
						$panel.data("prevTarget", $target);
						if(!$target.data("info-panel")){
							$target.data("info-panel",$("<div/>").append($target.clone()));
							panel_content = $target.data("info-panel").children();
							$panel.append(panel_content);
							$panel.find(".one_pic>img,.one_lt>img").attr("src","");
							$panel.find(".one>a").append($("<div/>").addClass("one_description").append($panel.find(".one").data("description")));
						}else{
							panel_content = $target.data("info-panel").children();
							$panel.append(panel_content);
						}
						panel_left = target_offset.left - ($panel.outerWidth() - $target.outerWidth())/2;
						panel_top = target_offset.top - ($panel.outerHeight() - $target.outerHeight())/2;
						screen_top = $(window).scrollTop();
						screen_bottom = screen_top+$(window).height();
						screen_left = $(window).scrollLeft();
						screen_right = screen_left+$(window).width();
						if(panel_top < screen_top){
							panel_top = screen_top;
						}else if(panel_top + $panel.outerHeight() > screen_bottom){
							panel_top = screen_bottom - $panel.outerHeight();
						}
						if(panel_left < screen_left){
							panel_left = screen_left;
						}else if(panel_left + $panel.outerWidth() > screen_right){
							panel_left = screen_right - $panel.outerWidth();
						}
						$panel.css({
							"left": panel_left,
							"top": panel_top
						});
					})($(this));
					$one_a = $panel.find(".one>a");
				}else{
					$one_a = $(this).children("a");

				}
				panel_top = $one_a.find(".one_pic").position().top;
				panel_width = $one_a.find(".one_pic").outerWidth();
				panel_height = $one_a.find(".one_pic").outerHeight();
				if($panel.length > 0)
					$panel.hide().data("waitshow",setTimeout(function(){$panel.fadeIn();},500));

				var _this = $one_a.find(".one_pic").get(0);
				if($(_this).data("td_slideclips")){
					$(_this).td_slideclips();
				}else{
					var _this_left = ($(_this).closest(".one").width()-$(_this).width())/2;
					$(_this).data("imgloading",
							$("<div/>")
							.addClass("loading")
							.css({
								"background":"url("+js_site.options.rc_tp + "public/images/loading/preview_loading.gif"+")",
								"display":"block",
								"position":"absolute",
								"width":"43px",
								"height":"11px",
								"left": ((panel_width-43)/2+_this_left) + "px",
								"top": ((panel_height-11)/2+panel_top) + "px"
								})
							.appendTo($one_a));
					$(_this).data("timeout",setTimeout(function(){
						$(_this).td_slideclips({
							url:js_site.options.siteroot + "ajax/site/getPreviewImg.php",
							imgloading: js_site.options.rc_tp + "mobile/images/player/player_loading.gif",
							keepsrchtml:true,
							imgsize: 4,
							playevent:function(){
								if($(_this).data("imgloading")){
									$(_this).data("imgloading").remove();
								}
							}
						});
					},100));
				}
			},function(e){
				var _this = $(this).find(".one_pic").get(0);
				$(_this).td_slideclips({stop:true});
				if($(_this).data("timeout")){
					clearTimeout($(_this).data("timeout"));
					$(_this).removeData("timeout");
					$(_this).data("imgloading").remove();
					$(_this).removeData("imgloading");
				}
				if($panel.length > 0 && $panel.data("waitshow")){
					clearTimeout($panel.data("waitshow"));
				}
			});
		},
		init: function(_option){
			$.extend(true, options, _option);
			//載入
			//平板自適應
			(function(){
				$("meta[name=viewport]").remove();
				if(js_site.options.device_is ==2){
					$(window).resize(function(e){
						var w,scale;
						$("meta[name=viewport]").remove();
						if (Math.abs(window.orientation) == 90 && navigator.userAgent.indexOf('iPad') !== -1) {
							w = screen.height;
						}else{
							w = screen.width;
						}
						scale = w/980;
						scale = Math.ceil(scale*100)/100;
						options.scale = scale;
						$("<meta name=viewport />").attr("content","width=980, initial-scale="+scale+", minimum-scale="+scale+", maximum-scale="+scale).appendTo($("head"));

					}).resize();
					window.onorientationchange = function(){
						$(window).resize();
					};
				}
			})();
			(function(){
				//18禁
				if($.url("?confirm18show")==="1"){
					js_site.options.confirm18show = true;
				}
				if(js_site.options.confirm18show){
					if($.url && $.url("?has18")==="1"){
						SetCookie("has18",1);
					}
					var has18 = getCookie("has18");
					if(typeof js_site.options.confirm18url ==="string" && js_site.options.confirm18url!=""){
						if(has18 !=1 && js_site.options.confirm18show){
							var $div18 = $("<div id='has18-widget'/>").css({display: "block", width: "100%", height: "100%", background: "#000", position: "fixed", "z-index": 2147483001, opacity: "1", top: 0});
							var $iframe18 = $("<iframe/>").attr("src", js_site.options.confirm18url).css({border: 0,width: "100%", height: "100%"});
							$("body").css("overflow", "hidden");
							$("body").append($div18);
							$div18.append($iframe18);
						}
					}else{

						$(function(){
							if(has18 !=1 && js_site.options.confirm18show){
								if(confirm(js_site.options.confirm18)){
						    		SetCookie("has18",1);
								}
							}
						});
					}
				}
			})();


			document.addEventListener('lazybeforeunveil', function(e){
				var bg = e.target.getAttribute('data-bg');
				if(bg){
					e.target.style.backgroundImage = 'url(' + bg + ')';
				}
			});
			//影片列表圖片預覽
			$(function(){
				var $panel = $(".teddyh-info-panel");
				$("body").append($panel.hover(function(){},function(e){
					var _this = $(this).find(".one_pic").get(0);
					$(_this).td_slideclips({stop:true});
					if($(_this).data("timeout")){
						clearTimeout($(_this).data("timeout"));
						$(_this).removeData("timeout");
						$(_this).data("imgloading").remove();
						$(_this).removeData("imgloading");
					}
					if($(this).data("waitshow")){
						clearTimeout($(this).data("waitshow"));
					}
					$(this).hide();
				}));
				js_site.td_slideclips($(".pc-one-info-panel"), $panel);
				js_site.td_slideclips($(".one-info-panel"), $panel);
			});
		},
		options: options
	};
})(jQuery);

function addFavorite(mag_prefix, mag_subfix)
{
  mag_prefix = mag_prefix||"請使用鍵盤快速鍵";
  mag_subfix = mag_subfix||"將本站加入我的最愛!!";
  var bookmarkurl = js_site.options.bookmarkurl;
  var bookmarktitle = js_site.options.bookmarktitle;

  if (window.sidebar && window.sidebar.addPanel ) { // firefox
     window.sidebar.addPanel(bookmarktitle, bookmarkurl, "");
  }else if( window.external && window.external.AddFavorite ) { // IE Favorite
     window.external.AddFavorite( bookmarkurl, bookmarktitle);
  }else if (window.opera && window.print) {
	 alert(mag_prefix + " [Ctrl+Shift+D]\n" + mag_subfix);
  }else {
	 alert(mag_prefix + " [Ctrl+D]\n" + mag_subfix);
  }
}

(function($){
	$(function(){
		if(location.hash.indexOf("login") > -1){//跳出登入視窗
			$(".call_widget_login").click();
		}
		$(".one_pic:not(.one_pic_ap) img").one("load", function(e) {
			var $one_pic = $(this).closest(".one_pic");
			var w = this.naturalWidth, h = this.naturalHeight, ap = w/h;
			var pw = $one_pic.width(), ph = $one_pic.height();
			var iw = "auto", ih = "auto", ml = 0;
			/*if(ap>pw/ph){//高100%
				ih = "100%";
				ml = 0 - (((ph*ap) - pw) / 2);
			}else{//寬100%
				iw = "100%";
			}
			$(this).css({"width": iw, "height": ih, "margin-left": ml});*/
		}).each(function(i, el) {
		  if(this.complete) $(this).load();
		});
	});
})(jQuery);





/*! /resources/static/mv/desktop/DwanWu_2016/Open_DwanWu_Event_pc.js */
function Open_DwanWu_Event(){
	var w = '740px';
	var h = '1651px';
	
	var resizefancynpx = function(){
		var $fpanel = $(".fancybox-type-iframe,.fancybox-inner");
//		var sw = $(window).width(),sh = $(window).height();
//		sw = w;
//		sh = h;
//		sw /= js_site.options.scale;
//		sh /= js_site.options.scale;
		$(".fancybox-inner").css({"overflow": "hidden", "height": h});
		$(".fancybox-item.fancybox-close").css({"top":0,"right":0});
		$fpanel.css({"top": 0, "position": "absolute" });
	};

		site_cf.Fancybox($,{ 
			type: 'iframe',
			height: h, 
			maxHeight: h,
			width: w, 
			openEffect: 'none',
			href: '/activitys/DwanWu_2016_First.php?view=iframe' ,
			iframe: {
				scrolling : 'hidden',
				preload   : true,
				height:h
			},
			helpers : {
		        overlay : {
		            closeClick : true
		        }
		    },
			onUpdate : resizefancynpx,
			afterShow : resizefancynpx,
			onPlayEnd : resizefancynpx
		});
	$(window).resize(function(e){
		resizefancynpx();
	});
};

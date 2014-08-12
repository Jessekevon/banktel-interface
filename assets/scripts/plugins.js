/*! pace 0.5.3 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W=[].slice,X={}.hasOwnProperty,Y=function(a,b){function c(){this.constructor=a}for(var d in b)X.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Z=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?W.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?W.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)X.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),T=["ajax","document","eventLag","elements"],P=0,R=T.length;R>P;P++)J=T[P],C[J]===!0&&(C[J]=t[J]);i=function(a){function b(){return U=b.__super__.constructor.apply(this,arguments)}return Y(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),O=window.XMLHttpRequest,N=window.XDomainRequest,M=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?W.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},I=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Z.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return I(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new O(b),a(c),c},v(window.XMLHttpRequest,O),null!=N&&(window.XDomainRequest=function(){var b;return b=new N,a(b),b},v(window.XDomainRequest,N)),null!=M&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=null!=b?new M(a,b):new M(a),I("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,M))}return Y(b,a),b}(h),Q=null,x=function(){return null==Q&&(Q=new j),Q},H=function(a){var b,c,d,e;for(e=C.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},x().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,H(g)?void 0:Pace.running||C.restartOnRequestAfter===!1&&"force"!==I(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(J=i[c],J instanceof a){J.watch.apply(J,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,H(e)?void 0:(c="socket"===d?new m(b):new n(b),this.elements.push(c))},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),K=null,G=null,q=null,L=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(S=window.history.pushState,window.history.pushState=function(){return y(),S.apply(window.history,arguments)}),null!=window.history.replaceState&&(V=window.history.replaceState,window.history.replaceState=function(){return y(),V.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=K=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&K.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)J=i[d],K.push(new J(C));return Pace.bar=q=new b,G=[],L=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){var a;return Pace.running=!0,q.render(),a=B(),r=!1,o=F(function(b,c){var d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(k=100-q.progress,e=o=0,f=!0,i=p=0,t=K.length;t>p;i=++p)for(J=K[i],n=null!=G[i]?G[i]:G[i]=[],h=null!=(v=J.elements)?v:[J],j=s=0,u=h.length;u>s;j=++s)g=h[j],m=null!=n[j]?n[j]:n[j]=new l(g),f&=m.done,m.done||(e++,o+=m.tick(b));return d=o/e,q.update(L.tick(b,d)),q.done()||f||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(B()-a),0)))):c()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);



! function () {
    "use strict";
    for (var e, t = function () {}, s = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = s.length, o = window.console = window.console || {}; i--;) e = s[i], o[e] || (o[e] = t)
}(),
function () {
    var e, t, s, i, o, r = {}.hasOwnProperty,
        n = function (e, t) {
            function s() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return s.prototype = t.prototype, e.prototype = new s, e.__super__ = t.prototype, e
        };
    i = function () {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function (e) {
            return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function (e) {
            var t, s, i, o, r, n;
            for (t = this.parsed.length, this.parsed.push({
                array_index: t,
                group: !0,
                label: this.escapeExpression(e.label),
                children: 0,
                disabled: e.disabled
            }), r = e.childNodes, n = [], i = 0, o = r.length; o > i; i++) s = r[i], n.push(this.add_option(s, t, e.disabled));
            return n
        }, e.prototype.add_option = function (e, t, s) {
            return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                html: e.innerHTML,
                selected: e.selected,
                disabled: s === !0 ? s : e.disabled,
                group_array_index: t,
                classes: e.className,
                style: e.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, e.prototype.escapeExpression = function (e) {
            var t, s;
            return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, s = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(s, function (e) {
                return t[e] || "&amp;"
            })) : e
        }, e
    }(), i.select_to_array = function (e) {
        var t, s, o, r, n;
        for (s = new i, n = e.childNodes, o = 0, r = n.length; r > o; o++) t = n[o], s.add_node(t);
        return s.parsed
    }, t = function () {
        function e(t, s) {
            this.form_field = t, this.options = null != s ? s : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return e.prototype.set_default_values = function () {
            var e = this;
            return this.click_test_action = function (t) {
                return e.test_active_click(t)
            }, this.activate_action = function (t) {
                return e.activate_field(t)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
        }, e.prototype.set_default_text = function () {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
        }, e.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function () {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function () {
                    return e.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function () {
            var e = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                return e.blur_test()
            }, 100))
        }, e.prototype.results_option_build = function (e) {
            var t, s, i, o, r;
            for (t = "", r = this.results_data, i = 0, o = r.length; o > i; i++) s = r[i], t += s.group ? this.result_add_group(s) : this.result_add_option(s), (null != e ? e.first : void 0) && (s.selected && this.is_multiple ? this.choice_build(s) : s.selected && !this.is_multiple && this.single_set_selected_text(s.text));
            return t
        }, e.prototype.result_add_option = function (e) {
            var t, s;
            return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), s = document.createElement("li"), s.className = t.join(" "), s.style.cssText = e.style, s.setAttribute("data-option-array-index", e.array_index), s.innerHTML = e.search_text, this.outerHTML(s)) : ""
        }, e.prototype.result_add_group = function (e) {
            var t;
            return (e.search_match || e.group_match) && e.active_options > 0 ? (t = document.createElement("li"), t.className = "group-result", t.innerHTML = e.search_text, this.outerHTML(t)) : ""
        }, e.prototype.results_update_field = function () {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, e.prototype.reset_single_select_options = function () {
            var e, t, s, i, o;
            for (i = this.results_data, o = [], t = 0, s = i.length; s > t; t++) e = i[t], o.push(e.selected ? e.selected = !1 : void 0);
            return o
        }, e.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function () {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.winnow_results = function () {
            var e, t, s, i, o, r, n, l, a, h, c, u, d;
            for (this.no_results_clear(), o = 0, n = this.get_search_text(), e = n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.search_contains ? "" : "^", s = new RegExp(i + e, "i"), h = new RegExp(e, "i"), d = this.results_data, c = 0, u = d.length; u > c; c++) t = d[c], t.search_match = !1, r = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (r = this.results_data[t.group_array_index], 0 === r.active_options && r.search_match && (o += 1), r.active_options += 1), (!t.group || this.group_search) && (t.search_text = t.group ? t.label : t.html, t.search_match = this.search_string_match(t.search_text, s), t.search_match && !t.group && (o += 1), t.search_match ? (n.length && (l = t.search_text.search(h), a = t.search_text.substr(0, l + n.length) + "</em>" + t.search_text.substr(l + n.length), t.search_text = a.substr(0, l) + "<em>" + a.substr(l)), null != r && (r.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
            return this.result_clear_highlight(), 1 > o && n.length ? (this.update_results_content(""), this.no_results(n)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, e.prototype.search_string_match = function (e, t) {
            var s, i, o, r;
            if (t.test(e)) return !0;
            if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" "), i.length))
                for (o = 0, r = i.length; r > o; o++)
                    if (s = i[o], t.test(s)) return !0
        }, e.prototype.choices_count = function () {
            var e, t, s, i;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, i = this.form_field.options, t = 0, s = i.length; s > t; t++) e = i[t], e.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, e.prototype.choices_click = function (e) {
            return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, e.prototype.keyup_checker = function (e) {
            var t, s;
            switch (t = null != (s = e.which) ? s : e.keyCode, this.search_field_scale(), t) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                break;
            case 13:
                if (e.preventDefault(), this.results_showing) return this.result_select(e);
                break;
            case 27:
                return this.results_showing && this.results_hide(), !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        }, e.prototype.clipboard_event_checker = function () {
            var e = this;
            return setTimeout(function () {
                return e.results_search()
            }, 50)
        }, e.prototype.container_width = function () {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function (e) {
            return this.is_multiple && !this.display_selected_options && e.selected ? !1 : !this.display_disabled_options && e.disabled ? !1 : e.empty ? !1 : !0
        }, e.prototype.search_results_touchstart = function (e) {
            return this.touch_started = !0, this.search_results_mouseover(e)
        }, e.prototype.search_results_touchmove = function (e) {
            return this.touch_started = !1, this.search_results_mouseout(e)
        }, e.prototype.search_results_touchend = function (e) {
            return this.touch_started ? this.search_results_mouseup(e) : void 0
        }, e.prototype.outerHTML = function (e) {
            var t;
            return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
        }, e.browser_is_supported = function () {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
    }(), e = jQuery, e.fn.extend({
        chosen: function (i) {
            return t.browser_is_supported() ? this.each(function () {
                var t, o;
                t = e(this), o = t.data("chosen"), "destroy" === i && o ? o.destroy() : o || t.data("chosen", new s(this, i))
            }) : this
        }
    }), s = function (t) {
        function s() {
            return o = s.__super__.constructor.apply(this, arguments)
        }
        return n(s, t), s.prototype.setup = function () {
            return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, s.prototype.set_up_html = function () {
            var t, s;
            return t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), s = {
                "class": t.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (s.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", s), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><i class="entypo-search"></i></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, s.prototype.register_observers = function () {
            var e = this;
            return this.container.bind("mousedown.chosen", function (t) {
                e.container_mousedown(t)
            }), this.container.bind("mouseup.chosen", function (t) {
                e.container_mouseup(t)
            }), this.container.bind("mouseenter.chosen", function (t) {
                e.mouse_enter(t)
            }), this.container.bind("mouseleave.chosen", function (t) {
                e.mouse_leave(t)
            }), this.search_results.bind("mouseup.chosen", function (t) {
                e.search_results_mouseup(t)
            }), this.search_results.bind("mouseover.chosen", function (t) {
                e.search_results_mouseover(t)
            }), this.search_results.bind("mouseout.chosen", function (t) {
                e.search_results_mouseout(t)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (t) {
                e.search_results_mousewheel(t)
            }), this.search_results.bind("touchstart.chosen", function (t) {
                e.search_results_touchstart(t)
            }), this.search_results.bind("touchmove.chosen", function (t) {
                e.search_results_touchmove(t)
            }), this.search_results.bind("touchend.chosen", function (t) {
                e.search_results_touchend(t)
            }), this.form_field_jq.bind("chosen:updated.chosen", function (t) {
                e.results_update_field(t)
            }), this.form_field_jq.bind("chosen:activate.chosen", function (t) {
                e.activate_field(t)
            }), this.form_field_jq.bind("chosen:open.chosen", function (t) {
                e.container_mousedown(t)
            }), this.form_field_jq.bind("chosen:close.chosen", function (t) {
                e.input_blur(t)
            }), this.search_field.bind("blur.chosen", function (t) {
                e.input_blur(t)
            }), this.search_field.bind("keyup.chosen", function (t) {
                e.keyup_checker(t)
            }), this.search_field.bind("keydown.chosen", function (t) {
                e.keydown_checker(t)
            }), this.search_field.bind("focus.chosen", function (t) {
                e.input_focus(t)
            }), this.search_field.bind("cut.chosen", function (t) {
                e.clipboard_event_checker(t)
            }), this.search_field.bind("paste.chosen", function (t) {
                e.clipboard_event_checker(t)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function (t) {
                e.choices_click(t)
            }) : this.container.bind("click.chosen", function (e) {
                e.preventDefault()
            })
        }, s.prototype.destroy = function () {
            return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, s.prototype.search_field_disabled = function () {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, s.prototype.container_mousedown = function (t) {
            return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, s.prototype.container_mouseup = function (e) {
            return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
        }, s.prototype.search_results_mousewheel = function (e) {
            var t;
            return e.originalEvent && (t = -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
        }, s.prototype.blur_test = function () {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, s.prototype.close_field = function () {
            return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, s.prototype.activate_field = function () {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, s.prototype.test_active_click = function (t) {
            var s;
            return s = e(t.target).closest(".chosen-container"), s.length && this.container[0] === s[0] ? this.active_field = !0 : this.close_field()
        }, s.prototype.results_build = function () {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, s.prototype.result_do_highlight = function (e) {
            var t, s, i, o, r;
            if (e.length) {
                if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), r = this.search_results.scrollTop(), o = i + r, s = this.result_highlight.position().top + this.search_results.scrollTop(), t = s + this.result_highlight.outerHeight(), t >= o) return this.search_results.scrollTop(t - i > 0 ? t - i : 0);
                if (r > s) return this.search_results.scrollTop(s)
            }
        }, s.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, s.prototype.results_show = function () {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, s.prototype.update_results_content = function (e) {
            return this.search_results.html(e)
        }, s.prototype.results_hide = function () {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, s.prototype.set_tab_index = function () {
            var e;
            return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
        }, s.prototype.set_label_behavior = function () {
            var t = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (e) {
                return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
            }) : void 0
        }, s.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, s.prototype.search_results_mouseup = function (t) {
            var s;
            return s = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), s.length ? (this.result_highlight = s, this.result_select(t), this.search_field.focus()) : void 0
        }, s.prototype.search_results_mouseover = function (t) {
            var s;
            return s = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), s ? this.result_do_highlight(s) : void 0
        }, s.prototype.search_results_mouseout = function (t) {
            return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, s.prototype.choice_build = function (t) {
            var s, i, o = this;
            return s = e("<li />", {
                "class": "search-choice"
            }).html("<span>" + t.html + "</span>"), t.disabled ? s.addClass("search-choice-disabled") : (i = e("<a />", {
                "class": "entypo-cross search-choice-close",
                "data-option-array-index": t.array_index
            }), i.bind("click.chosen", function (e) {
                return o.choice_destroy_link_click(e)
            }), s.append(i)), this.search_container.before(s)
        }, s.prototype.choice_destroy_link_click = function (t) {
            return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t.target))
        }, s.prototype.choice_destroy = function (e) {
            return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, s.prototype.results_reset = function () {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, s.prototype.results_reset_cleanup = function () {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, s.prototype.result_select = function (e) {
            var t, s;
            return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), s = this.results_data[t[0].getAttribute("data-option-array-index")], s.selected = !0, this.form_field.options[s.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(s) : this.single_set_selected_text(s.text), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[s.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        }, s.prototype.single_set_selected_text = function (e) {
            return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(e)
        }, s.prototype.result_deselect = function (e) {
            var t;
            return t = this.results_data[e], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[t.options_index].value
            }), this.search_field_scale(), !0)
        }, s.prototype.single_deselect_control_build = function () {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="entypo-cross search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, s.prototype.get_search_text = function () {
            return this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html()
        }, s.prototype.winnow_results_set_highlight = function () {
            var e, t;
            return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e ? this.result_do_highlight(e) : void 0
        }, s.prototype.no_results = function (t) {
            var s;
            return s = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), s.find("span").first().html(t), this.search_results.append(s), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, s.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, s.prototype.keydown_arrow = function () {
            var e;
            return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
        }, s.prototype.keyup_arrow = function () {
            var e;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, s.prototype.keydown_backstroke = function () {
            var e;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, s.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, s.prototype.keydown_checker = function (e) {
            var t, s;
            switch (t = null != (s = e.which) ? s : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                break;
            case 13:
                e.preventDefault();
                break;
            case 38:
                e.preventDefault(), this.keyup_arrow();
                break;
            case 40:
                e.preventDefault(), this.keydown_arrow()
            }
        }, s.prototype.search_field_scale = function () {
            var t, s, i, o, r, n, l, a, h;
            if (this.is_multiple) {
                for (i = 0, l = 0, r = "position:absolute; left: -1000px; top: -1000px; display:none;", n = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], a = 0, h = n.length; h > a; a++) o = n[a], r += o + ":" + this.search_field.css(o) + ";";
                return t = e("<div />", {
                    style: r
                }), t.text(this.search_field.val()), e("body").append(t), l = t.width() + 25, t.remove(), s = this.container.outerWidth(), l > s - 10 && (l = s - 10), this.search_field.css({
                    width: l + "px"
                })
            }
        }, s
    }(t)
}.call(this),
    function (e) {
        "use strict";

        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function s(e, t) {
            var s = i(e, t) ? r : o;
            s(e, t)
        }
        var i, o, r;
        "classList" in document.documentElement ? (i = function (e, t) {
            return e.classList.contains(t)
        }, o = function (e, t) {
            e.classList.add(t)
        }, r = function (e, t) {
            e.classList.remove(t)
        }) : (i = function (e, s) {
            return t(s).test(e.className)
        }, o = function (e, t) {
            i(e, t) || (e.className = e.className + " " + t)
        }, r = function (e, s) {
            e.className = e.className.replace(t(s), " ")
        });
        var n = {
            hasClass: i,
            addClass: o,
            removeClass: r,
            toggleClass: s,
            has: i,
            add: o,
            remove: r,
            toggle: s
        };
        "function" == typeof define && define.amd ? define(n) : e.classie = n
    }(window),
    function () {
        var e;
        e = window.jQuery || window.Zepto || window.$, e.fn.fancySelect = function (t) {
            var s, i;
            return null == t && (t = {}), i = e.extend({
                forceiOS: !1,
                includeBlank: !1,
                optionTemplate: function (e) {
                    return e.text()
                },
                triggerTemplate: function (e) {
                    return e.text()
                }
            }, t), s = !!navigator.userAgent.match(/iP(hone|od|ad)/i), this.each(function () {
                var t, o, r, n, l, a, h;
                return n = e(this), n.hasClass("fancified") || "SELECT" !== n[0].tagName ? void 0 : (n.addClass("fancified"), n.css({
                    width: 1,
                    height: 1,
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0
                }), n.wrap('<div class="fancy-select">'), h = n.parent(), n.data("class") && h.addClass(n.data("class")), h.append('<div class="trigger">'), (!s || i.forceiOS) && h.append('<ul class="options">'), l = h.find(".trigger"), r = h.find(".options"), o = n.prop("disabled"), o && h.addClass("disabled"), a = function () {
                    var e;
                    return e = i.triggerTemplate(n.find(":selected")), l.html(e)
                }, n.on("blur.fs", function () {
                    return l.hasClass("open") ? setTimeout(function () {
                        return l.trigger("close.fs")
                    }, 120) : void 0
                }), l.on("close.fs", function () {
                    return l.removeClass("open"), r.removeClass("open")
                }), l.on("click.fs", function () {
                    var t, a;
                    if (!o)
                        if (l.toggleClass("open"), s && !i.forceiOS) {
                            if (l.hasClass("open")) return n.focus()
                        } else if (l.hasClass("open") && (a = l.parent(), t = a.offsetParent(), a.offset().top + a.outerHeight() + r.outerHeight() + 20 > e(window).height() + e(window).scrollTop() ? r.addClass("overflowing") : r.removeClass("overflowing")), r.toggleClass("open"), !s) return n.focus()
                }), n.on("enable", function () {
                    return n.prop("disabled", !1), h.removeClass("disabled"), o = !1, t()
                }), n.on("disable", function () {
                    return n.prop("disabled", !0), h.addClass("disabled"), o = !0
                }), n.on("change.fs", function (e) {
                    return e.originalEvent && e.originalEvent.isTrusted ? e.stopPropagation() : a()
                }), n.on("keydown", function (e) {
                    var t, s, i;
                    if (i = e.which, t = r.find(".hover"), t.removeClass("hover"), r.hasClass("open")) {
                        if (38 === i ? (e.preventDefault(), t.length && t.index() > 0 ? t.prev().addClass("hover") : r.find("li:last-child").addClass("hover")) : 40 === i ? (e.preventDefault(), t.length && t.index() < r.find("li").length - 1 ? t.next().addClass("hover") : r.find("li:first-child").addClass("hover")) : 27 === i ? (e.preventDefault(), l.trigger("click.fs")) : 13 === i || 32 === i ? (e.preventDefault(), t.trigger("click.fs")) : 9 === i && l.hasClass("open") && l.trigger("close.fs"), s = r.find(".hover"), s.length) return r.scrollTop(0), r.scrollTop(s.position().top - 12)
                    } else if (13 === i || 32 === i || 38 === i || 40 === i) return e.preventDefault(), l.trigger("click.fs")
                }), r.on("click.fs", "li", function () {
                    var t;
                    return t = e(this), n.val(t.data("raw-value")), s || n.trigger("blur.fs").trigger("focus.fs"), r.find(".selected").removeClass("selected"), t.addClass("selected"), n.val(t.data("raw-value")).trigger("change.fs").trigger("blur.fs").trigger("focus.fs")
                }), r.on("mouseenter.fs", "li", function () {
                    var t, s;
                    return s = e(this), t = r.find(".hover"), t.removeClass("hover"), s.addClass("hover")
                }), r.on("mouseleave.fs", "li", function () {
                    return r.find(".hover").removeClass("hover")
                }), t = function () {
                    var t;
                    return a(), !s || i.forceiOS ? (t = n.find("option"), n.find("option").each(function (t, s) {
                        var o;
                        return s = e(s), s.prop("disabled") || !s.val() && !i.includeBlank ? void 0 : (o = i.optionTemplate(s), r.append(s.prop("selected") ? '<li data-raw-value="' + s.val() + '" class="selected">' + o + "</li>" : '<li data-raw-value="' + s.val() + '">' + o + "</li>"))
                    })) : void 0
                }, n.on("update.fs", function () {
                    return h.find(".options").empty(), t()
                }), t())
            })
        }
    }.call(this),
    function (e) {
        "use strict";

        function t(e, t) {
            for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s]);
            return e
        }

        function s(e, t) {
            if (!e) return !1;
            for (var s = e.target || e.srcElement || e || !1; s && s.id != t;) s = s.parentNode || !1;
            return s !== !1
        }

        function i(e, t, s, o) {
            return o = o || 0, e.id.indexOf(t) >= 0 ? o : (classie.has(e, s) && ++o, e.parentNode && i(e.parentNode, t, s, o))
        }

        function o() {
            var t = !1;
            return function (e) {
                (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
            }(navigator.userAgent || navigator.vendor || e.opera), t
        }

        function r(e, t) {
            return classie.has(e, t) ? e : e.parentNode && r(e.parentNode, t)
        }

        function n(e, s, i) {
            this.el = e, this.trigger = s, this.options = t(this.defaults, i), this.support = Modernizr.csstransforms3d, this.support && this._init()
        }
        n.prototype = {
            defaults: {
                type: "cover",
                levelSpacing: 0,
                backClass: "mp-back"
            },
            _init: function () {
                this.open = !0, this.level = 0, this.wrapper = document.getElementById("mp-pusher"), this.levels = Array.prototype.slice.call(this.el.querySelectorAll("div.mp-level"));
                var e = this;
                this.levels.forEach(function (t) {
                    t.setAttribute("data-level", i(t, e.el.id, "mp-level"))
                }), this.menuItems = Array.prototype.slice.call(this.el.querySelectorAll("li")), this.levelBack = Array.prototype.slice.call(this.el.querySelectorAll("." + this.options.backClass)), this.eventtype = o() ? "touchstart" : "click", classie.add(this.el, "mp-" + this.options.type), this._initEvents()
            },
            _initEvents: function () {
                var e = this,
                    t = function (s) {
                        e._resetMenu(), s.removeEventListener(e.eventtype, t)
                    };
                this.trigger.addEventListener(this.eventtype, function (i) {
                    i.stopPropagation(), i.preventDefault(), e.open ? e._resetMenu() : (e._openMenu(), document.addEventListener(e.eventtype, function (i) {
                        e.open && !s(i.target, e.el.id) && t(this)
                    }))
                }), this.menuItems.forEach(function (t) {
                    var s = t.querySelector("div.mp-level");
                    s && t.querySelector("a").addEventListener(e.eventtype, function (i) {
                        i.preventDefault();
                        var o = r(t, "mp-level").getAttribute("data-level");
                        e.level <= o && (i.stopPropagation(), classie.add(r(t, "mp-level"), "mp-level-overlay"), e._openMenu(s))
                    })
                }), this.levels.forEach(function (t) {
                    t.addEventListener(e.eventtype, function (s) {
                        s.stopPropagation();
                        var i = t.getAttribute("data-level");
                        e.level > i && (e.level = i, e._closeMenu())
                    })
                }), this.levelBack.forEach(function (t) {
                    t.addEventListener(e.eventtype, function (s) {
                        s.preventDefault();
                        var i = r(t, "mp-level").getAttribute("data-level");
                        e.level <= i && (s.stopPropagation(), e.level = r(t, "mp-level").getAttribute("data-level") - 1, 0 === e.level ? e._resetMenu() : e._closeMenu())
                    })
                })
            },
            _openMenu: function (e) {
                ++this.level;
                var t = (this.level - 1) * this.options.levelSpacing,
                    s = "overlap" === this.options.type ? this.el.offsetWidth + t : this.el.offsetWidth;
                if (this._setTransform("translate3d(" + s + "px,0,0)"), e) {
                    this._setTransform("", e);
                    for (var i = 0, o = this.levels.length; o > i; ++i) {
                        var r = this.levels[i];
                        r == e || classie.has(r, "mp-level-open") || this._setTransform("translate3d(-100%,0,0) translate3d(" + -1 * t + "px,0,0)", r)
                    }
                }
                1 === this.level && (classie.add(this.wrapper, "mp-pushed"), this.open = !0), classie.add(e || this.levels[0], "mp-level-open")
            },
            _resetMenu: function () {
                this._setTransform("translate3d(0,0,0)"), this.level = 0, classie.remove(this.wrapper, "mp-pushed"), this._toggleLevels(), this.open = !1
            },
            _closeMenu: function () {
                var e = "overlap" === this.options.type ? this.el.offsetWidth + (this.level - 1) * this.options.levelSpacing : this.el.offsetWidth;
                this._setTransform("translate3d(" + e + "px,0,0)"), this._toggleLevels()
            },
            _setTransform: function (e, t) {
                t = t || this.wrapper, t.style.WebkitTransform = e, t.style.MozTransform = e, t.style.transform = e
            },
            _toggleLevels: function () {
                for (var e = 0, t = this.levels.length; t > e; ++e) {
                    var s = this.levels[e];
                    s.getAttribute("data-level") >= this.level + 1 ? (classie.remove(s, "mp-level-open"), classie.remove(s, "mp-level-overlay")) : Number(s.getAttribute("data-level")) == this.level && classie.remove(s, "mp-level-overlay")
                }
            }
        }, e.mlPushMenu = n
    }(window), $(function () {
        var e = $("[rel~=tipped-click]"),
            t = !1,
            s = !1;
        e.one("click", function () {
            t = $(this), tip = $('<div class="memo-block"><p>Type memo&hellip;</p><p>Press <span>return</span> to save.</p></div><textarea class="pre-enter"></textarea>'), s = $('<div id="tipped"></div>'), s.css("opacity", 0).html(tip).appendTo("body");
            var e = function () {
                t.addClass("click-active"), $(window).width() < 1.5 * s.outerWidth() ? s.css("max-width", $(window).width() / 2) : s.css("max-width", 340);
                var e = t.offset().left + t.outerWidth() / 2 - s.outerWidth() / 2,
                    i = t.offset().top - s.outerHeight() - 24;
                if (0 > e ? (e = t.offset().left + t.outerWidth() / 2 - 20, s.addClass("left")) : s.removeClass("left"), e + s.outerWidth() > $(window).width() ? (e = t.offset().left - s.outerWidth() + t.outerWidth() / 2 + 20, s.addClass("right")) : s.removeClass("right"), 0 > i) {
                    var i = t.offset().top + t.outerHeight();
                    s.addClass("top")
                } else s.removeClass("top");
                s.css({
                    left: e,
                    top: i
                }).animate({
                    top: "+=10",
                    opacity: 1
                }, 50)
            };
            e(), $(window).resize(e), s.one("click", function () {
                $(".memo-block").hide(), $(".memo-block + textarea").show().focus(), $(this).css("padding-bottom", "10px")
            });
            var i = function () {
                t.removeClass("click-active"), s.animate({
                    top: "-=10",
                    opacity: 0
                }, 50, function () {
                    $(this).remove()
                })
            };
            $.fn.memoReturn = function (e) {
                return this.each(function () {
                    $(this).bind("enterKeyPressed", e), $(this).keyup(function (e) {
                        13 == e.keyCode && $(this).trigger("enterKeyPressed")
                    })
                })
            }, $("textarea").memoReturn(i)
        })
    }), $(function () {
        var e = $("[rel~=tipped]"),
            t = !1,
            s = !1;
        e.bind("mouseenter", function () {
            if (t = $(this), tip = t.attr("title"), s = $('<div id="tipped"></div>'), !tip || "" == tip) return !1;
            t.removeAttr("title"), s.css("opacity", 0).html(tip).appendTo("body");
            var e = function () {
                $(window).width() < 1.5 * s.outerWidth() ? s.css("max-width", $(window).width() / 2) : s.css("max-width", 340);
                var e = t.offset().left + t.outerWidth() / 2 - s.outerWidth() / 2,
                    i = t.offset().top - s.outerHeight() - 20;
                if (0 > e ? (e = t.offset().left + t.outerWidth() / 2 - 20, s.addClass("left")) : s.removeClass("left"), e + s.outerWidth() > $(window).width() ? (e = t.offset().left - s.outerWidth() + t.outerWidth() / 2 + 20, s.addClass("right")) : s.removeClass("right"), 0 > i) {
                    var i = t.offset().top + t.outerHeight();
                    s.addClass("top")
                } else s.removeClass("top");
                s.css({
                    left: e,
                    top: i
                }).animate({
                    top: "+=10",
                    opacity: 1
                }, 50)
            };
            e(), $(window).resize(e);
            var i = function () {
                s.animate({
                    top: "-=10",
                    opacity: 0
                }, 50, function () {
                    $(this).remove()
                }), t.attr("title", tip)
            };
            t.bind("mouseleave", i), s.bind("click", i)
        })
    });









//Extend storage
Storage.prototype.setObject = function (key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

//Extend jQuery for easier usage
//maxLine, callback, trigger, cutWords, withTags, fixedWidth
//when callback is provided, ellipsis is an anchor and triggers the callback on 'trigger'
//'withTags' is a special scenario when you have long links and you want to trim them to fit the container
$.fn.extend({
    ellipsis: function (options) {

        var defaults = {
            maxLine: 1,
            callback: tooltip,
            trigger: '',
            cutWords: false,
            withTags: false,
            fixedWidth: 0
        };

        options = $.extend({}, defaults, options);

        this.each(function (index, el) {
            var oldString = el.innerHTML;
            var lineWidth = options.fixedWidth || parseFloat(el.style.width) || $(el).width();
            var newString = new FastEllipsis(el).ellipseIt(el, options.maxLine, lineWidth, options.cutWords, options.withTags)[0];
            if (!options.withTags && options.trigger && oldString != newString) {
                newString = newString.replace(/\.{3}$/, "");
                $(el).html(newString).append($("<a class='ellipsis'>...</a>").attr("data-ellipsis", oldString).on(options.trigger, options.callback));
            }
            else if (!options.withTags) {
                el.innerHTML = newString;
            }
        });
    }
});

//Default callback for the ellipsis event
function tooltip(e) {
    $(e.target).popover({
        content: $(e.target).attr('data-ellipsis'),
        placement: 'top',
        trigger: 'hover'
    }).popover('show');
}

//Checks if parameter is DOM element
function isElement(obj) {
    return (typeof obj == "object" && !($(obj).html() == undefined))
}

//Faster function to get element width
$.fn.extend({
    FastWidth: function () {
        return parseFloat(window.getComputedStyle(this.get(0), null).getPropertyValue('width'));
    }
});

function FastEllipsis(cssStyle) {
    //can provide DOM element as parameter and take the style from that
    if (isElement(cssStyle)) {
        var element = (cssStyle.get) ? cssStyle.get(0) : cssStyle;
        var $element = (cssStyle.get) ? cssStyle : $(cssStyle);
        cssStyle = ["font-family: " + (element.style.fontFamily || $element.css('font-family')).replace(/'/g, ""),
            "font-size: " + (element.style.fontSize || $element.css('font-size')),
            "font-weight: " + (element.style.fontWeight || $element.css('font-weight'))].join('; ');
    }

    var _cssStyle = (!!cssStyle) ? cssStyle : "font-family: arial; font-size: 12pt";
    //try to take the cached widths from localStorage
    var _charWidthArray = localStorage.getObject(_cssStyle) || {};

    // Generate cache for width of all ASCII chars
    var generateASCIIwidth = (function () {
        //check if the object was taken from localStorage
        if (_charWidthArray.hasOwnProperty('_ ')) {
            return;
        }
        var container, charWrapper, character,
            totalWidth = 0, oldTotalWidth = 0, charWidth = 0;

        // Temporary container for generated ASCII chars
        container = $("<div style='width:6000px; visibility:hidden;'></div>").appendTo("body");
        charWrapper = $("<span style='" + _cssStyle + "'></span>").appendTo(container);

        // Space char
        charWrapper.append("&nbsp;");
        charWidth = charWrapper.width(); // hack: add 0.4px to every space removed (not needed?)
        _charWidthArray["_ "] = charWidth;

        // Other ASCII chars
        for (var i = 33; i <= 126; i++) {
            character = String.fromCharCode(i);
            charWrapper.append("" + character + character);

            oldTotalWidth = totalWidth;
            totalWidth = charWrapper.width();
            charWidth = (totalWidth - oldTotalWidth) / 2; // While cache is generating add two the same chars at once, and then divide per 2 to get better kerning accuracy.
            _charWidthArray["_" + character] = charWidth;
        }
        //save in localStorage
        localStorage.setObject(_cssStyle, _charWidthArray);
        // Remove temporary container
        container.remove();
    })();

    // Get the width of specified char
    var getCharWidth = function (myChar) {

        // If there is a char in cache
        if (!!_charWidthArray["_" + myChar]) {
            return _charWidthArray["_" + myChar];
        }

        // If there is no char in cache count width for that char and save the cache
        else {
            var container, charWrapper,
                totalWidth = 0, oldTotalWidth = 0, charWidth = 0;

            // Temporary container for generated ASCII chars
            container = $("<div style='width:6000px; visibility:hidden;'></div>").appendTo("body");
            charWrapper = $("<span style='" + _cssStyle + "'></span>").appendTo(container);
            charWrapper.append(myChar);
            charWidth = charWrapper.width();
            _charWidthArray["_" + myChar] = charWidth;
            container.remove();

            localStorage.setObject(_cssStyle, _charWidthArray);
            return charWidth;
        }

    };

    // Get the width of the word
    var getWordWidth = function (myWord) {

        myWord = myWord.trim();

        // Check if this word is already cached
        if (!!_charWidthArray["_" + myWord]) {
            return _charWidthArray["_" + myWord];
        }

        // If no, calculate it
        else {
            var sum = 0;
            for (var i = 0, len = myWord.length; i < len; i++) {
                sum = sum + getCharWidth(myWord[i]);
            }
            sum = Math.floor(sum);
            _charWidthArray["_" + myWord] = sum;
            return sum;
        }

    };

    // Ellipse text based on CSS styling set in constructor.
    var ellipseIt = function (myString, maxLine, lineWidth, cutWords, withTags) {

        if (withTags) {

            var a = $(myString).find('a');
            var lines = maxLine,
                aLeft = a.length;

            a.each(function (index, el) {
                var curLines = maxLine / a.length;
                if (lines / aLeft > 1) {
                    curLines = Math.ceil(curLines);
                } else {
                    curLines = Math.floor(curLines);
                }

                var e = ellipseIt(el.innerHTML, curLines, lineWidth, true);
                $(el).html(e[0]);
                lines -= e[1];
                aLeft -= 1;
            });
            return [myString];

        }
        if (isElement(myString)) {
            myString = $(myString).text();
        }
        var lineNo = 1,
            wordsInLineWidth = 0,
            wordArr = myString.trim().strip_tags().split(/\s+/g), // trim string, remove HTML tags, remove space duplicates (detect dash word breaking removed, because
        // it was causing an issue, where space after dash was removed
            spaceWidth = getCharWidth(" ");

        for (var i = 0, len = wordArr.length; i < len; i++) {

            // Adding widths of words in the loop
            wordsInLineWidth += getWordWidth(wordArr[i]);

            // Check if the total width of words calculated so far is larger than width of container passed in the parameter
            if (wordsInLineWidth > lineWidth) {

                // If yes, go to next line and reset the words width
                lineNo++;
                wordsInLineWidth = 0;

                // If accessing to the last line subtract width of ellipsis (...) from line width to reserve place for ellipsis
                // or if cutting words, get the last line string
                if (lineNo == maxLine) {
                    if (cutWords) {
                        var rest = ellipseWord(wordArr.slice(i, wordArr.length).join(" ").replace(/-\s/g, "-"), lineWidth);
                        return [wordArr.slice(0, i).join(" ") + " " + rest, Math.min(lineNo, maxLine)];
                    }
                    lineWidth -= threeDotsWidth;
                }

                // When you reached the end of maxLine parameter break the loop and return the result
                else if (lineNo > maxLine) {
                    if (i == 0) {
                        return [ellipseWord(wordArr[i], lineWidth), Math.min(lineNo, maxLine)];
                    }
                    return [wordArr.slice(0, i).join(" ") + "...", Math.min(lineNo, maxLine)];
                }

                // If the words width was bigger than line width go back in the loop to take last word for use in the beggining of next line
                i--;
            }
            else {
                // Adding width of space between words
                wordsInLineWidth += spaceWidth;
            }
        }

        // If there was no need to ellipsis
        return [myString, Math.min(lineNo, maxLine)];

    };

    //solution for single word per line
    var ellipseWord = function (myString, lineWidth) {
        if (getWordWidth(myString) < lineWidth) {
            return myString;
        }
        var width = 0;
        lineWidth -= threeDotsWidth;
        for (var i = 0, len = myString.length; i < len; i++) {
            width += getCharWidth(myString[i]);
            if (width > lineWidth) {
                return myString.substring(0, i) + "...";
            }
        }
        return myString;
    };
    var threeDotsWidth = getWordWidth("...");

    // Public interface
    return {
        getCharWidth: getCharWidth,
        getWordWidth: getWordWidth,
        ellipseIt: ellipseIt
    }
}

// Add string functions to String prototype

if (typeof String.prototype.trim !== "function") {
    String.prototype.trim = function () {
        return this.replace(/^\s*/, "").replace(/\s*$/, "");
    };
}

if (typeof String.prototype.strip_tags !== "function") {
    String.prototype.strip_tags = function () {
        return this.replace(/<\/?[^>]+(>|$)/g, "");
    };
}

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



/**
 * notificationFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
    
    'use strict';

    var docElem = window.document.documentElement,
        support = { animations : Modernizr.cssanimations },
        animEndEventNames = {
            'WebkitAnimation' : 'webkitAnimationEnd',
            'OAnimation' : 'oAnimationEnd',
            'msAnimation' : 'MSAnimationEnd',
            'animation' : 'animationend'
        },
        // animation end event name
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
    
    /**
     * extend obj function
     */
    function extend( a, b ) {
        for( var key in b ) { 
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    /**
     * NotificationFx function
     */
    function NotificationFx( options ) {    
        this.options = extend( {}, this.options );
        extend( this.options, options );
        this._init();
    }

    /**
     * NotificationFx options
     */
    NotificationFx.prototype.options = {
        // element to which the notification will be appended
        // defaults to the document.body
        wrapper : document.body,
        // the message
        message : 'yo!',
        // layout type: growl|attached|bar|other
        layout : 'growl',
        // effects for the specified layout:
        // for growl layout: scale|slide|genie|jelly
        // for attached layout: flip|bouncyflip
        // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
        // ...
        effect : 'slide',
        // notice, warning, error, success
        // will add class ns-type-warning, ns-type-error or ns-type-success
        type : 'error',
        // if the user doesn´t close the notification then we remove it 
        // after the following time
        ttl : 6000,
        // callbacks
        onClose : function() { return false; },
        onOpen : function() { return false; }
    }

    /**
     * init function
     * initialize and cache some vars
     */
    NotificationFx.prototype._init = function() {
        // create HTML structure
        this.ntf = document.createElement( 'div' );
        this.ntf.className = 'ns-box ns-' + this.options.layout + ' ns-effect-' + this.options.effect + ' ns-type-' + this.options.type;
        var strinner = '<div class="ns-box-inner">';
        strinner += this.options.message;
        strinner += '</div>';
        strinner += '<span class="ns-close"></span></div>';
        this.ntf.innerHTML = strinner;

        // append to body or the element specified in options.wrapper
        this.options.wrapper.insertBefore( this.ntf, this.options.wrapper.firstChild );

        // dismiss after [options.ttl]ms
        var self = this;
        this.dismissttl = setTimeout( function() {
            if( self.active ) {
                self.dismiss();
            }
        }, this.options.ttl );

        // init events
        this._initEvents();
    }

    /**
     * init events
     */
    NotificationFx.prototype._initEvents = function() {
        var self = this;
        // dismiss notification
        this.ntf.querySelector( '.ns-close' ).addEventListener( 'click', function() { self.dismiss(); } );
    }

    /**
     * show the notification
     */
    NotificationFx.prototype.show = function() {
        this.active = true;
        classie.remove( this.ntf, 'ns-hide' );
        classie.add( this.ntf, 'ns-show' );
        this.options.onOpen();
    }

    /**
     * dismiss the notification
     */
    NotificationFx.prototype.dismiss = function() {
        var self = this;
        this.active = false;
        clearTimeout( this.dismissttl );
        classie.remove( this.ntf, 'ns-show' );
        setTimeout( function() {
            classie.add( self.ntf, 'ns-hide' );
            
            // callback
            self.options.onClose();
        }, 25 );

        // after animation ends remove ntf from the DOM
        var onEndAnimationFn = function( ev ) {
            if( support.animations ) {
                if( ev.target !== self.ntf ) return false;
                this.removeEventListener( animEndEventName, onEndAnimationFn );
            }
            self.options.wrapper.removeChild( this );
        };

        if( support.animations ) {
            this.ntf.addEventListener( animEndEventName, onEndAnimationFn );
        }
        else {
            onEndAnimationFn();
        }
    }

    /**
     * add to global namespace
     */
    window.NotificationFx = NotificationFx;

} )( window );
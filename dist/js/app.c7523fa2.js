(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/covid-tracker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4b23":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("h1",[t._v("Covid tracker")]),t.hasLoaded?[r("Table"),t._v(" "),r("Pagination")]:[r("Loading")]],2)},i=[],s=r("bc3a"),o=r.n(s),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("FilterTable",{attrs:{options:t.stateNames},on:{filter:t.filterTableData}}),r("b-table",{attrs:{id:"covid-data",striped:"",bordered:"",hover:"","label-sort-asc":"","label-sort-desc":"","sort-desc":t.sortDesc,items:t.items,"per-page":10,"current-page":t.currentPage,fields:t.fields},on:{"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}})],1)},u=[],l=(r("4de4"),r("caad"),r("2532"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter"},[r("h6",[t._v("Filter by States:")]),r("v-select",{staticClass:"state-select",attrs:{multiple:"",options:t.options},on:{input:t.stateChanged},model:{value:t.states,callback:function(e){t.states=e},expression:"states"}},[t._v("Select this")]),t._m(0),r("div",{staticClass:"numeric"},[r("v-select",{staticClass:"numeric-select",attrs:{options:t.fieldOptions},on:{input:function(e){return t.numericFilterChanged(e,"property")}},model:{value:t.property,callback:function(e){t.property=e},expression:"property"}}),r("v-select",{staticClass:"operation",attrs:{options:["=",">","<"]},on:{input:function(e){return t.numericFilterChanged(e,"operation")}},model:{value:t.operation,callback:function(e){t.operation=e},expression:"operation"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"number"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){return t.numericFilterChanged(e.target.value,"value")}]}}),r("b-button",{attrs:{variant:"outline-info"},on:{click:t.clearNumeric}},[t._v("Clear")]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.clearAll}},[t._v("Clear All")])],1)],1)}),p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"numeric"},[r("h6",{staticClass:"numeric-select"},[t._v("Filter by")]),r("h6",{staticClass:"operation"},[t._v("= , > , <")]),r("h6",[t._v("Value")])])}],f={data:function(){return{states:[],property:null,operation:null,value:null,fieldOptions:["confirmed","deceased","recovered","tested","vaccinated1","vaccinated2"]}},props:{options:Array},computed:{},methods:{stateChanged:function(t){this.$emit("filter",{type:"states",states:t})},numericFilterChanged:function(t,e){this[e]=t,this.emitNumericChange()},clearNumeric:function(){this.property=null,this.operation=null,this.value=null,this.emitNumericChange()},clearAll:function(){this.clearNumeric(),this.states=[],this.$emit("filter",{})},emitNumericChange:function(){var t={type:"numeric",numericParams:{property:this.property,operation:this.operation,value:this.value}};this.$emit("filter",t)}}},d=f,m=(r("95ff"),r("2877")),h=Object(m["a"])(d,l,p,!1,null,"c1637982",null),v=h.exports;r("07ac"),r("a9e3");function b(t,e){if(Object.values(e).some((function(t){return null===t})))return t;var r={"<":function(t,e){return t<e},">":function(t,e){return t>e},"=":function(t,e){return t===e}},n=r[e.operation];return t.filter((function(t){return n(Number(t[e.property]),Number(e.value))}))}var g={data:function(){return{stateData:this.$store.getters.mainData,sortDesc:!0,fields:[{key:"state",sortable:!1},{key:"confirmed",sortable:!0},{key:"deceased",sortable:!0},{key:"recovered",sortable:!0},{key:"tested",sortable:!0},{key:"vaccinated1",sortable:!0},{key:"vaccinated2",sortable:!0}],stateNames:this.$store.getters.stateNames,filterProperties:{}}},computed:{items:function(){return this.stateData},currentPage:function(){return this.$store.getters.currentPage}},methods:{filterTableData:function(t){var e=this,r=this.$store.getters.mainData;"states"===t.type&&(t.states.length<1&&(t.states=this.stateNames),r=r.filter((function(e){return t.states.includes(e.state)})),this.filterProperties.states=t.states,Object.prototype.hasOwnProperty.call(this.filterProperties,"numeric")&&(r=b(r,this.filterProperties.numeric))),"numeric"===t.type&&(r=b(r,t.numericParams),this.filterProperties.numeric=t.numericParams,Object.prototype.hasOwnProperty.call(this.filterProperties,"states")&&(r=r.filter((function(t){return e.filterProperties.states.includes(t.state)})))),this.stateData=r}},components:{FilterTable:v}},y=g,P=Object(m["a"])(y,c,u,!1,null,null,null),_=P.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-pagination",{attrs:{"aria-controls":"covid-data","total-rows":t.rows,"per-page":t.perPage},on:{change:t.handlePageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})},C=[],j={data:function(){return{currentPage:this.$store.getters.currentPage,perPage:10}},computed:{rows:function(){return this.$store.getters.mainData?this.$store.getters.mainData.length:1}},methods:{handlePageChange:function(t){this.$store.commit("changePage",t),this.currentPage=t}}},k=j,$=Object(m["a"])(k,O,C,!1,null,null,null),w=$.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-spinner",{staticClass:"spinner",attrs:{variant:"primary"}})],1)},D=[],N=(r("e8e7"),{}),F=Object(m["a"])(N,x,D,!1,null,"317c3b6c",null),S=F.exports,T={name:"App",data:function(){return{hasLoaded:!1}},created:function(){var t=this;o.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var r=e.data;t.$store.dispatch("initialize",r),t.hasLoaded=!0}))},components:{Table:_,Pagination:w,Loading:S}},E=T,A=Object(m["a"])(E,a,i,!1,null,null,null),L=A.exports,z=r("5530"),M=(r("d81d"),r("b64b"),r("2f62"));n["default"].use(M["a"]);var J=new M["a"].Store({state:{data:null,currentPage:1},mutations:{initialize:function(t,e){var r=Object.keys(e).map((function(t){return Object(z["a"])({state:t},e[t].total)}));t.data=r},changePage:function(t,e){t.currentPage=e}},actions:{initialize:function(t,e){var r=t.commit;r("initialize",e)}},getters:{mainData:function(t){return t.data},currentPage:function(t){return t.currentPage},stateNames:function(t){var e;return null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.map((function(t){return t.state}))}}}),V=J,q=r("5f5b"),B=r("b1e0"),G=(r("f9e3"),r("2dd8"),r("6dfc"),r("4a7a")),H=r.n(G);n["default"].use(q["a"]),n["default"].use(B["a"]),n["default"].component("v-select",H.a),new n["default"]({store:V,render:function(t){return t(L)}}).$mount("#app")},"836b":function(t,e,r){},"95ff":function(t,e,r){"use strict";r("4b23")},e8e7:function(t,e,r){"use strict";r("836b")}});
//# sourceMappingURL=app.c7523fa2.js.map
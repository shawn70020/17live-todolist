(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{271:function(e,t,n){"use strict";n.r(t);n(31),n(24),n(30),n(15),n(46),n(26),n(47);var r=n(14),o=n(48);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={data:function(){return{selected:"en",optionLang:[{text:"English",value:"en",id:1},{text:"中文",value:"zh",id:2}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["lang"])),methods:{setLang:function(e){this.$store.commit("SET_LANG",e),this.$i18n.locale=e}}},f=l,d=n(32),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?n:n[0]},function(t){return e.setLang(e.selected)}]}},e._l(e.optionLang,(function(t){return n("option",{key:t.id,domProps:{value:t.value}},[e._v("\n    "+e._s(t.text)+"\n  ")])})),0)}),[],!1,null,"78347cdb",null);t.default=component.exports}}]);
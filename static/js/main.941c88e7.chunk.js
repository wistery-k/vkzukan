(this.webpackJsonpvkzukan=this.webpackJsonpvkzukan||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),c=n(7),r=n.n(c),l=(n(12),n(5)),a=n(2);function s(t,e){return{name:t,symbols:e}}var u="Yellow_abb",d="Lightblue_abb",b="Red_abb",h="Brown_abb",j="Green_abb",m="Pink_abb",g="Purple_abb",p="Black_abb",O="Orange_abb",f="Random2",v="White_abb",x="Justice",y="Chariot",S="Magician",w="Shield",k="Sun",C="Woods",I="Moon",W="HungedMan",_="Fortune",M="Fool",U="Plum",R="Star",A="Random3",P="Tower",z=[u,d,b,h,j,m,g,p,O,f,v,x,y,S,w,k,C,I,W,_,M,U,R,A,P],E=[s("Heliodor",[u,x]),s("Blues",[d,y]),s("Garnet",[b,S]),s("KingdomSoldier",[h,w]),s("KingdomArcher",[h,k]),s("Sphen",[j,C]),s("Reddle",[b,k]),s("Flint",[h,y]),s("Lapis",[d,I]),s("Morgana",[m,C]),s("Claude",[d,w]),s("Gibeon",[y,W]),s("Citrin",[u,_]),s("Eleschal",[g,M]),s("Kokyou",[p,U]),s("Spesa",[O,R]),s("Jade",[j,I]),s("Libyan",[u,C]),s("Dumol",[d,W]),s("Carnelia",[O,k]),s("Zircon",[f,A]),s("Amethyst",[g,S]),s("Jet",[p,M]),s("Kogyok",[b,U]),s("Gemsilica",[j,C]),s("Diamond",[v,x]),s("Rhodo",[m,x]),s("Allin",[g,W]),s("Pinto",[m,R]),s("Tolphen",[u,S]),s("Jasper",[b,P]),s("Reno",[O,M]),s("Selen",[g,P]),s("Chrom",[j,w]),s("Petri",[h,x]),s("Mosco",[b,y]),s("Amber",[O,_]),s("Onyx",[p,I]),s("Pappalachia",[m,S]),s("Leos",[p,W]),s("Labra",[f,A]),s("Sly",[g,I]),s("Morion",[p,U]),s("Bron",[h,w]),s("Sun",[O,k]),s("Moon",[v,I]),s("Sapphire",[d,C]),s("Rubella",[b,M]),s("Shirishia",[m,k]),s("Topaz",[u,P]),s("Peridot",[j,S])];var J=n(0),L=function(t){return Object(J.jsx)("span",{children:z.map((function(e){return Object(J.jsxs)("span",{style:{display:"inline-block"},children:[Object(J.jsx)("div",{children:Object(J.jsx)("img",{alt:e,src:"/vkzukan/img/symbol_icon_".concat(e,".png"),width:t.symbolWidth,onMouseOver:function(){return t.onMouseOver(e)},onMouseOut:function(){return t.onMouseOut(e)}})}),Object(J.jsx)("div",{children:t.upgradedUnits.filter((function(t){return t.symbols.includes(e)})).length})]},e)}))})};n(14);function B(t){window.localStorage.setItem("upgradedUnits",t.map((function(t){return t.name})).join(","))}function K(){var t,e;return null!==(t=null===(e=window.localStorage.getItem("upgradedUnits"))||void 0===e?void 0:e.split(",").map((function(t){return e=t,E.find((function(t){return t.name===e}));var e})).filter((function(t){return void 0!==t})))&&void 0!==t?t:[]}var G=function(t){var e=Object(i.useState)(function(t){var e,n;return null!==(e=null===(n=window.localStorage.getItem("selectedSymbols-"+t))||void 0===n?void 0:n.split(","))&&void 0!==e?e:[]}(t.title)),n=Object(a.a)(e,2),o=n[0],c=n[1];return Object(i.useEffect)((function(){var e,n;e=t.title,n=o,window.localStorage.setItem("selectedSymbols-"+e,n.join(","))}),[t.title,o]),Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:t.title}),Object(J.jsxs)("div",{children:[z.map((function(e){var n={boxShadow:o.includes(e)?"0px 0 2px 2px white":"0px 0 2px 2px rgba(0,0,0,0)",borderRadius:"50%",verticalAlign:"middle"};return Object(J.jsx)("img",{style:n,src:"/vkzukan/img/symbol_icon_".concat(e,".png"),alt:e,width:t.symbolWidth,onClick:function(){return function(t){o.includes(t)?c(o.filter((function(e){return e!==t}))):c([].concat(Object(l.a)(o),[t]))}(e)}},e)})),Object(J.jsx)("button",{style:{verticalAlign:"middle"},onClick:function(){return c([])},children:"\u30ea\u30bb\u30c3\u30c8"})]}),Object(J.jsx)("div",{children:E.map((function(e){var n=e.symbols.some((function(t){return o.includes(t)})),i=t.upgradedUnits.includes(e)?.2:1,c=null!=t.highlightedSymbol&&e.symbols.includes(t.highlightedSymbol)?"white":"";return Object(J.jsx)("img",{style:{display:n?"inline-block":"none",opacity:i,backgroundColor:c},src:"/vkzukan/img/icon_unit_H_".concat(e.name,".png"),alt:e.name,width:t.unitImageWidth,onClick:function(){return t.onUnitClick(e)}},e.name)}))})]})};var H=function(){var t=Object(i.useState)(K()),e=Object(a.a)(t,2),n=e[0],o=e[1],c=Object(i.useState)(function(t){var e=window.localStorage.getItem("symbolWidth");return null==e?t:parseInt(e)}(40)),r=Object(a.a)(c,2),s=r[0],u=r[1],d=Object(i.useState)(function(t){var e=window.localStorage.getItem("unitWidth");return null==e?t:parseInt(e)}(64)),b=Object(a.a)(d,2),h=b[0],j=b[1],m=Object(i.useState)(null),g=Object(a.a)(m,2),p=g[0],O=g[1],f=function(t){n.includes(t)?o(n.filter((function(e){return e!==t}))):(o([].concat(Object(l.a)(n),[t])),B(n))};return Object(i.useEffect)((function(){B(n)}),[n]),Object(i.useEffect)((function(){var t;t=s,window.localStorage.setItem("symbolWidth","".concat(t))}),[s]),Object(i.useEffect)((function(){var t;t=h,window.localStorage.setItem("unitWidth","".concat(t))}),[h]),Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)("h2",{children:"VK Helper"}),Object(J.jsx)("div",{children:Object(J.jsxs)("span",{children:[Object(J.jsxs)("span",{children:["\u30b7\u30f3\u30dc\u30eb\u30b5\u30a4\u30ba",Object(J.jsx)("input",{type:"range",style:{width:"10%"},min:8,max:80,value:s,onChange:function(t){return u(parseInt(t.target.value))}})]}),Object(J.jsxs)("span",{children:[Object(J.jsx)("span",{children:"\u30e6\u30cb\u30c3\u30c8\u30b5\u30a4\u30ba"}),Object(J.jsx)("input",{type:"range",style:{width:"10%"},min:8,max:80,value:h,onChange:function(t){return j(parseInt(t.target.value))}})]})]})}),Object(J.jsx)("hr",{}),Object(J.jsx)(L,{upgradedUnits:n,symbolWidth:s,onMouseOver:O,onMouseOut:function(){return O(null)}}),Object(J.jsx)("button",{onClick:function(){return o([])},children:"\u30ea\u30bb\u30c3\u30c8"}),Object(J.jsx)("hr",{}),Object(J.jsx)(G,{title:"\u6d41\u6d6a\u306e\u5b9d\u77f3\u5c4b1",upgradedUnits:n,onUnitClick:f,symbolWidth:s,unitImageWidth:h,highlightedSymbol:p}),Object(J.jsx)("hr",{}),Object(J.jsx)(G,{title:"\u6d41\u6d6a\u306e\u5b9d\u77f3\u5c4b2",upgradedUnits:n,onUnitClick:f,symbolWidth:s,unitImageWidth:h,highlightedSymbol:p}),Object(J.jsx)("hr",{}),Object(J.jsx)(G,{title:"\u6d41\u6d6a\u306e\u5b9d\u77f3\u5c4b3",upgradedUnits:n,onUnitClick:f,symbolWidth:s,unitImageWidth:h,highlightedSymbol:p}),Object(J.jsx)("hr",{}),Object(J.jsx)(G,{title:"\u305d\u306e\u4ed6",upgradedUnits:n,onUnitClick:f,symbolWidth:s,unitImageWidth:h,highlightedSymbol:p}),Object(J.jsx)("hr",{}),Object(J.jsx)("div",{children:"\xa9 2021 Asobism Co., Ltd. All Rights Reserved."})]})};r.a.render(Object(J.jsx)(o.a.StrictMode,{children:Object(J.jsx)(H,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.941c88e7.chunk.js.map
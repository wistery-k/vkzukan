(this.webpackJsonpvkzukan=this.webpackJsonpvkzukan||[]).push([[0],{12:function(n,e,t){},14:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var i=t(1),c=t.n(i),r=t(7),o=t.n(r),a=(t(12),t(4)),s=t(5);function l(n,e){return{name:n,symbols:e}}var u="Yellow_abb",b="Lightblue_abb",d="Red_abb",j="Brown_abb",h="Green_abb",p="Pink_abb",O="Purple_abb",g="Black_abb",m="Orange_abb",x="Random2",k="White_abb",f="Justice",v="Chariot",y="Magician",_="Shield",C="Sun",S="Woods",U="Moon",P="HungedMan",R="Fortune",L="Fool",M="Plum",A="Star",F="Random3",z="Tower",B=[u,b,d,j,h,p,O,g,m,x,k,f,v,y,_,C,S,U,P,R,L,M,A,F,z],J=[l("Heliodor",[u,f]),l("Blues",[b,v]),l("Garnet",[d,y]),l("KingdomSoldier",[j,_]),l("KingdomArcher",[j,C]),l("Sphen",[h,S]),l("Reddle",[d,C]),l("Flint",[j,v]),l("Lapis",[b,U]),l("Morgana",[p,S]),l("Claude",[b,_]),l("Gibeon",[v,P]),l("Citrin",[u,R]),l("Eleschal",[O,L]),l("Kokyou",[g,M]),l("Spesa",[m,A]),l("Jade",[h,U]),l("Libyan",[u,S]),l("Dumol",[b,P]),l("Carnelia",[m,C]),l("Zircon",[x,F]),l("Amethyst",[O,y]),l("Jet",[g,L]),l("Kogyok",[d,M]),l("Gemsilica",[h,S]),l("Diamond",[k,f]),l("Rhodo",[p,f]),l("Allin",[O,P]),l("Pinto",[p,A]),l("Tolphen",[u,y]),l("Jasper",[d,z]),l("Reno",[m,L]),l("Selen",[O,z]),l("Chrom",[h,_]),l("Petri",[j,f]),l("Mosco",[d,v]),l("Amber",[m,R]),l("Onyx",[g,U]),l("Pappalachia",[p,y]),l("Leos",[g,P]),l("Labra",[x,F]),l("Sly",[O,U]),l("Morion",[g,M]),l("Bron",[j,_]),l("Sun",[m,C]),l("Moon",[k,U]),l("Sapphire",[b,S]),l("Rubella",[d,L]),l("Shirishia",[p,C]),l("Topaz",[u,z]),l("Peridot",[h,y])],w=t(0),K=function(n){return Object(w.jsx)("div",{children:B.map((function(e){return Object(w.jsxs)("span",{style:{display:"inline-block"},children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:"/vkzukan/img/symbol_icon_".concat(e,".png")})}),Object(w.jsx)("div",{children:n.upgradedUnits.filter((function(n){return n.symbols.includes(e)})).length})]})}))})},T=(t(14),function(n){var e=Object(i.useState)([x,F]),t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:n.title}),Object(w.jsx)("div",{children:B.map((function(n){var e=c.includes(n)?1:.2;return Object(w.jsx)("img",{style:{opacity:e},src:"/vkzukan/img/symbol_icon_".concat(n,".png"),onClick:function(){return function(n){c.includes(n)?r(c.filter((function(e){return e!==n}))):r([].concat(Object(a.a)(c),[n]))}(n)}})}))}),Object(w.jsx)("div",{children:J.map((function(e){var t=e.symbols.some((function(n){return c.includes(n)})),i=n.upgradedUnits.includes(e)?.2:1;return Object(w.jsx)("img",{style:{display:t?"inline-block":"none",opacity:i},src:"/vkzukan/img/icon_unit_H_".concat(e.name,".png"),onClick:function(){return n.onUnitClick(e)}})}))})]})});var G=function(){var n=Object(i.useState)([]),e=Object(s.a)(n,2),t=e[0],c=e[1],r=function(n){t.includes(n)?c(t.filter((function(e){return e!==n}))):c([].concat(Object(a.a)(t),[n]))};return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("h1",{children:"VK Helper"}),Object(w.jsx)("hr",{}),Object(w.jsx)(K,{upgradedUnits:t}),Object(w.jsx)("hr",{}),Object(w.jsx)(T,{title:"\u6d41\u6d6a\u306e\u5b9d\u77f3\u5c4b1",upgradedUnits:t,onUnitClick:r}),Object(w.jsx)("hr",{}),Object(w.jsx)(T,{title:"\u6d41\u6d6a\u306e\u5b9d\u77f3\u5c4b2",upgradedUnits:t,onUnitClick:r}),Object(w.jsx)("hr",{}),Object(w.jsx)(T,{title:"\u6d41\u6d6a\u306e\u5b9d\u77f3\u5c4b3",upgradedUnits:t,onUnitClick:r}),Object(w.jsx)("hr",{}),Object(w.jsx)(T,{title:"\u305d\u306e\u4ed6",upgradedUnits:t,onUnitClick:r}),Object(w.jsx)("hr",{}),Object(w.jsx)("div",{children:"\xa9 2021 Asobism Co., Ltd. All Rights Reserved."})]})},H=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),c(n),r(n),o(n)}))};o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(G,{})}),document.getElementById("root")),H()}},[[15,1,2]]]);
//# sourceMappingURL=main.051450cb.chunk.js.map
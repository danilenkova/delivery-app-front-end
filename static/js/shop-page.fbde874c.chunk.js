"use strict";(self.webpackChunkdelivery_app_front_end=self.webpackChunkdelivery_app_front_end||[]).push([[606],{6658:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var r,i,o,d,a,c,s,p,x,l,u,f,h,b,m,g,w,Z,v,j,y,k,P,C,z=t(6030),_=t(8824),S=t(885),E=t(2791),L=t(9169),A=t(168),G=t(6031),q=G.ZP.div(r||(r=(0,A.Z)(["\n  width: 17%;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 20px;\n  @media screen and (max-width: 1239px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 20px;\n    padding: 10px;\n  }\n"]))),T=G.ZP.h2(i||(i=(0,A.Z)(["\n  margin-bottom: 0;\n  margin-right: 10px;\n  font-size: 18px;\n  @media screen and (min-width: 1239px) {\n    font-size: 24px;\n    margin-bottom: 20px;\n    text-align: center;\n  }\n"]))),F=G.ZP.ul(o||(o=(0,A.Z)(["\n  @media screen and (max-width: 1239px) {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  display: block;\n"]))),H=G.ZP.li(d||(d=(0,A.Z)(["\n  margin: 5px;\n  @media screen and (min-width: 1239px) {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n"]))),I=G.ZP.button(a||(a=(0,A.Z)(["\n  @media screen and (max-width: 1023px) {\n    width: 100px;\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1024px) and (max-width: 1239px) {\n    width: 130px;\n    font-size: 16px;\n  }\n  width: 100%;\n  height: 40px;\n  cursor: pointer;\n  padding: 5px;\n  border: 0;\n  border-radius: 10px;\n  outline: none;\n  font-size: 18px;\n  background-color: #f46d40;\n  color: #ffffff;\n  text-shadow: ",";\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),\n    1px 4px 6px rgba(0, 0, 0, 0.5);\n  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :focus,\n  :hover {\n    text-shadow: 1px 2px 1px #000;\n  }\n  &:disabled {\n    background-color: #faa689;\n  }\n"])),(function(n){return n.current?"1px 2px 1px #000":"-1px -2px 1px #000"})),O=t(184),U=function(n){var e=n.shops,t=n.onClick,r=n.current,i=(0,z.v9)(L.nG.d);return(0,O.jsxs)(q,{children:[(0,O.jsx)(T,{children:"Shops:"}),(0,O.jsx)(F,{children:e.map((function(n){var e=n._id,o=n.name;return(0,O.jsx)(H,{children:(0,O.jsx)(I,{onClick:function(){return t(e)},current:e===r,disabled:0!==i.length&&!i.map((function(n){return n.shop})).includes(e),children:o})},e)}))})]})},$=t(318),X=t(4164),B=G.ZP.div(c||(c=(0,A.Z)(["\n  z-index: 1200;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),D=document.querySelector("#modal-root"),J=function(n){var e=n.children,t=n.onClose;(0,E.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){document.body.style.overflow="auto",window.removeEventListener("keydown",n)}}),[t]);return(0,X.createPortal)((0,O.jsx)(B,{onClick:function(n){n.currentTarget===n.target&&t()},children:e}),D)},K=t(1413),M=t(8174),N=t(2134),Q=G.ZP.div(s||(s=(0,A.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 420px;\n  padding: 20px;\n  background-color: #ffffff;\n  @media screen and (min-width: 1024px) {\n    padding: 30px;\n    width: 560px;\n  }\n"]))),R=G.ZP.div(p||(p=(0,A.Z)(["\n  display: block;\n  overflow: hidden;\n  & img {\n    object-fit: cover;\n  }\n"]))),V=G.ZP.div(x||(x=(0,A.Z)(["\n  width: 230px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),W=G.ZP.h2(l||(l=(0,A.Z)(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 48px;\n  line-height: 60px;\n  text-align: center;\n"]))),Y=G.ZP.p(u||(u=(0,A.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),nn=G.ZP.div(f||(f=(0,A.Z)(["\n  display: flex;\n  width: 100px;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),en=G.ZP.button(h||(h=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  color: #111111;\n  :focus,\n  :hover {\n    background-color: #f46d40;\n    color: #f2f2f2;\n  }\n  :disabled {\n    color: #f2f2f2;\n  }\n"]))),tn=G.ZP.button(b||(b=(0,A.Z)(["\n  width: 200px;\n  height: 40px;\n  cursor: pointer;\n  padding: 5px;\n  border: 0;\n  border-radius: 10px;\n  outline: none;\n  font-size: 16px;\n  background-color: #f46d40;\n  color: #ffffff;\n  text-shadow: -1px -2px 1px #000;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),\n    1px 4px 6px rgba(0, 0, 0, 0.5);\n  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :focus,\n  :hover {\n    text-shadow: 1px 2px 1px #000;\n  }\n"]))),rn=G.ZP.button(m||(m=(0,A.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  color: #111111;\n  :focus,\n  :hover {\n    background-color: #f46d40;\n    color: #f2f2f2;\n  }\n"]))),on=function(n){var e=n.product,t=n.onClose,r=(0,E.useState)(1),i=(0,S.Z)(r,2),o=i[0],d=i[1],a=(0,z.v9)(L.nG.d),c=(0,z.I0)(),s=function(n){switch(n){case"increment":d((function(n){return n+1}));break;case"decrement":if(o>1&&d((function(n){return n-1})),1===o)return o;break;default:return}};return(0,O.jsxs)(Q,{children:[(0,O.jsx)(rn,{type:"button",title:"Close",onClick:function(){return t()},children:(0,O.jsx)(N.oHP,{})}),(0,O.jsx)(R,{children:(0,O.jsx)("img",{src:e.image,alt:e.name})}),(0,O.jsxs)(V,{children:[(0,O.jsx)(W,{children:e.name}),(0,O.jsxs)(Y,{children:["$",e.price]}),(0,O.jsxs)(nn,{children:[(0,O.jsx)(en,{onClick:function(){return s("decrement")},disabled:1===o,children:(0,O.jsx)(N.Tbq,{})}),(0,O.jsx)("p",{children:o}),(0,O.jsx)(en,{onClick:function(){return s("increment")},children:(0,O.jsx)(N.qPp,{})})]}),(0,O.jsx)(tn,{type:"button",onClick:function(){return function(n){a.some((function(e){return e._id===n._id}))&&(c(L.Uw.updateAmountInCart((0,K.Z)((0,K.Z)({},n),{},{amount:o}))),M.Am.success("Product added to cart",{pauseOnFocusLoss:!1,autoClose:2e3,pauseOnHover:!1,theme:"colored"})),a.some((function(e){return e._id===n._id}))||c(L.Uw.addProductToCart((0,K.Z)((0,K.Z)({},n),{},{amount:o})))}(e)},children:"Add to Cart"})]})]})},dn=G.ZP.div(g||(g=(0,A.Z)(["\n  width: 80%;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 20px;\n  @media screen and (max-width: 1239px) {\n    display: flex;\n    width: 100%;\n  }\n"]))),an=G.ZP.ul(w||(w=(0,A.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  height: 770px;\n  padding: 10px;\n  @media screen and (min-width: 1024px) {\n    padding: 20px;\n    padding-bottom: 0;\n  }\n  overflow-y: scroll;\n  ::-webkit-scrollbar {\n    width: 20px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px grey;\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: #f46d40;\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #b30000;\n  }\n"]))),cn=G.ZP.li(Z||(Z=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  @media screen and (min-width: 1024px) {\n    flex-basis: calc((100% - 20px) / 2);\n    margin: 0;\n    margin-bottom: 20px;\n    &:not(:nth-child(2n)) {\n      margin-right: 20px;\n    }\n  }\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),\n    1px 4px 6px rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 20px;\n  overflow: hidden;\n"]))),sn=G.ZP.div(v||(v=(0,A.Z)(["\n  display: block;\n  margin-bottom: 10px;\n"]))),pn=G.ZP.div(j||(j=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),xn=G.ZP.h2(y||(y=(0,A.Z)(["\n  margin-bottom: 10px;\n"]))),ln=G.ZP.div(k||(k=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),un=G.ZP.button(P||(P=(0,A.Z)(["\n  width: 200px;\n  height: 40px;\n  cursor: pointer;\n  padding: 5px;\n  border: 0;\n  border-radius: 10px;\n  outline: none;\n  font-size: 16px;\n  background-color: #f46d40;\n  color: #ffffff;\n  text-shadow: -1px -2px 1px #000;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6), 0px 4px 4px rgba(0, 0, 0, 0.5),\n    1px 4px 6px rgba(0, 0, 0, 0.5);\n  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :focus,\n  :hover {\n    text-shadow: 1px 2px 1px #000;\n  }\n"]))),fn=function(n){var e=n.current,t=(0,z.v9)($.tu.X),r=(0,z.v9)(L.nG.d),i=(0,E.useState)(""),o=(0,S.Z)(i,2),d=o[0],a=o[1],c=(0,E.useState)(!1),s=(0,S.Z)(c,2),p=s[0],x=s[1],l=(0,E.useState)(null),u=(0,S.Z)(l,2),f=u[0],h=u[1];(0,E.useEffect)((function(){0!==r.length?a(r[0].shop):a(e)}),[e,r]);var b=function(){x(!1)};return(0,O.jsxs)(dn,{children:[(0,O.jsx)(an,{children:t&&t.filter((function(n){return n.shop===d})).map((function(n){return(0,O.jsxs)(cn,{children:[(0,O.jsx)(sn,{children:(0,O.jsx)("img",{src:n.image,alt:n.name})}),(0,O.jsxs)(pn,{children:[(0,O.jsx)(xn,{children:n.name}),(0,O.jsxs)(ln,{children:[(0,O.jsxs)("p",{children:["$",n.price]}),(0,O.jsx)(un,{onClick:function(){return h(n),void x(!0)},children:"Add to Cart"})]})]})]},n._id)}))}),p&&(0,O.jsx)(J,{onClose:b,children:(0,O.jsx)(on,{product:f,onClose:b})})]})},hn=G.ZP.div(C||(C=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  @media screen and (max-width: 1239px) {\n    flex-direction: column;\n  }\n"]))),bn=function(){var n=(0,z.v9)(_.yh.getShopsList),e=(0,z.v9)(L.nG.d),t=(0,E.useState)(null),r=(0,S.Z)(t,2),i=r[0],o=r[1];(0,E.useEffect)((function(){e.length>0?o(e[0].shop):o(n[0]._id)}),[n,e]);return(0,O.jsxs)(hn,{children:[n&&(0,O.jsx)(U,{shops:n,onClick:function(n){o(n)},current:i}),(0,O.jsx)(fn,{current:i})]})},mn=function(){var n=(0,z.v9)(_.yh.getShopsList);return(0,O.jsx)(O.Fragment,{children:n&&(0,O.jsx)(bn,{shops:n})})}}}]);
//# sourceMappingURL=shop-page.fbde874c.chunk.js.map
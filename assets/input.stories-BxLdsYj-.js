import{j as K}from"./jsx-runtime-DEdD30eg.js";import{r as Le,R as Ae}from"./index-RYns6xqu.js";var Oe={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Fe(){if(ae)return D;ae=1;var e=Ae,r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function i(a,c,p){var d,f={},g=null,y=null;p!==void 0&&(g=""+p),c.key!==void 0&&(g=""+c.key),c.ref!==void 0&&(y=c.ref);for(d in c)o.call(c,d)&&!n.hasOwnProperty(d)&&(f[d]=c[d]);if(a&&a.defaultProps)for(d in c=a.defaultProps,c)f[d]===void 0&&(f[d]=c[d]);return{$$typeof:r,type:a,key:g,ref:y,props:f,_owner:s.current}}return D.Fragment=t,D.jsx=i,D.jsxs=i,D}Oe.exports=Fe();var qe=Oe.exports;function Ge(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=Ge(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Ve(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=Ge(e))&&(o&&(o+=" "),o+=r);return o}const le=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ie=Ve,Ue=(e,r)=>t=>{var o;if((r==null?void 0:r.variants)==null)return ie(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:n}=r,i=Object.keys(s).map(p=>{const d=t==null?void 0:t[p],f=n==null?void 0:n[p];if(d===null)return null;const g=le(d)||le(f);return s[p][g]}),a=t&&Object.entries(t).reduce((p,d)=>{let[f,g]=d;return g===void 0||(p[f]=g),p},{}),c=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((p,d)=>{let{class:f,className:g,...y}=d;return Object.entries(y).every(v=>{let[h,u]=v;return Array.isArray(u)?u.includes({...n,...a}[h]):{...n,...a}[h]===u})?[...p,f,g]:p},[]);return ie(e,i,c,t==null?void 0:t.class,t==null?void 0:t.className)};function Pe(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=Pe(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ye(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=Pe(e))&&(o&&(o+=" "),o+=r);return o}const X="-",Be=e=>{const r=Ke(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:s=>{const n=s.split(X);return n[0]===""&&n.length!==1&&n.shift(),Re(n,r)||Je(s)},getConflictingClassGroupIds:(s,n)=>{const i=t[s]||[];return n&&o[s]?[...i,...o[s]]:i}}},Re=(e,r)=>{var t;if(e.length===0)return r.classGroupId;const o=e[0],s=r.nextPart.get(o),n=s?Re(e.slice(1),s):void 0;if(n)return n;if(r.validators.length===0)return;const i=e.join(X);return(t=r.validators.find(({validator:a})=>a(i)))==null?void 0:t.classGroupId},de=/^\[(.+)\]$/,Je=e=>{if(de.test(e)){const r=de.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Ke=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return He(Object.entries(e.classGroups),t).forEach(([s,n])=>{H(n,o,s,r)}),o},H=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:ce(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(Qe(s)){H(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,i])=>{H(i,ce(r,n),t,o)})})},ce=(e,r)=>{let t=e;return r.split(X).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Qe=e=>e.isThemeGetter,He=(e,r)=>r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,a])=>[r+i,a])):n);return[t,s]}):e,Xe=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,i)=>{t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){t.has(n)?t.set(n,i):s(n,i)}}},We="!",Ze=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length,i=a=>{const c=[];let p=0,d=0,f;for(let u=0;u<a.length;u++){let x=a[u];if(p===0){if(x===s&&(o||a.slice(u,u+n)===r)){c.push(a.slice(d,u)),d=u+n;continue}if(x==="/"){f=u;continue}}x==="["?p++:x==="]"&&p--}const g=c.length===0?a:a.substring(d),y=g.startsWith(We),v=y?g.substring(1):g,h=f&&f>d?f-d:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:h}};return t?a=>t({className:a,parseClassName:i}):i},er=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},rr=e=>({cache:Xe(e.cacheSize),parseClassName:Ze(e),...Be(e)}),tr=/\s+/,or=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],i=e.trim().split(tr);let a="";for(let c=i.length-1;c>=0;c-=1){const p=i[c],{modifiers:d,hasImportantModifier:f,baseClassName:g,maybePostfixModifierPosition:y}=t(p);let v=!!y,h=o(v?g.substring(0,y):g);if(!h){if(!v){a=p+(a.length>0?" "+a:a);continue}if(h=o(g),!h){a=p+(a.length>0?" "+a:a);continue}v=!1}const u=er(d).join(":"),x=f?u+We:u,w=x+h;if(n.includes(w))continue;n.push(w);const _=s(h,v);for(let N=0;N<_.length;++N){const P=_[N];n.push(x+P)}a=p+(a.length>0?" "+a:a)}return a};function nr(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=$e(r))&&(o&&(o+=" "),o+=t);return o}const $e=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=$e(e[o]))&&(t&&(t+=" "),t+=r);return t};function sr(e,...r){let t,o,s,n=i;function i(c){const p=r.reduce((d,f)=>f(d),e());return t=rr(p),o=t.cache.get,s=t.cache.set,n=a,a(c)}function a(c){const p=o(c);if(p)return p;const d=or(c,t);return s(c,d),d}return function(){return n(nr.apply(null,arguments))}}const b=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},Me=/^\[(?:([a-z-]+):)?(.+)\]$/i,ar=/^\d+\/\d+$/,lr=new Set(["px","full","screen"]),ir=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,dr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,cr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ur=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>S(e)||lr.has(e)||ar.test(e),j=e=>E(e,"length",vr),S=e=>!!e&&!Number.isNaN(Number(e)),Q=e=>E(e,"number",S),O=e=>!!e&&Number.isInteger(Number(e)),br=e=>e.endsWith("%")&&S(e.slice(0,-1)),l=e=>Me.test(e),C=e=>ir.test(e),mr=new Set(["length","size","percentage"]),fr=e=>E(e,mr,Te),gr=e=>E(e,"position",Te),hr=new Set(["image","url"]),xr=e=>E(e,hr,kr),yr=e=>E(e,"",wr),G=()=>!0,E=(e,r,t)=>{const o=Me.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},vr=e=>dr.test(e)&&!cr.test(e),Te=()=>!1,wr=e=>pr.test(e),kr=e=>ur.test(e),zr=()=>{const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),s=b("borderColor"),n=b("borderRadius"),i=b("borderSpacing"),a=b("borderWidth"),c=b("contrast"),p=b("grayscale"),d=b("hueRotate"),f=b("invert"),g=b("gap"),y=b("gradientColorStops"),v=b("gradientColorStopPositions"),h=b("inset"),u=b("margin"),x=b("opacity"),w=b("padding"),_=b("saturate"),N=b("scale"),P=b("sepia"),Z=b("skew"),ee=b("space"),re=b("translate"),U=()=>["auto","contain","none"],Y=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",l,r],m=()=>[l,r],te=()=>["",z,j],R=()=>["auto",S,l],oe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],J=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",l],se=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[S,l];return{cacheSize:500,separator:":",theme:{colors:[G],spacing:[z,j],blur:["none","",C,l],brightness:k(),borderColor:[e],borderRadius:["none","","full",C,l],borderSpacing:m(),borderWidth:te(),contrast:k(),grayscale:I(),hueRotate:k(),invert:I(),gap:m(),gradientColorStops:[e],gradientColorStopPositions:[br,j],inset:B(),margin:B(),opacity:k(),padding:m(),saturate:k(),scale:k(),sepia:I(),skew:k(),space:m(),translate:m()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":se()}],"break-before":[{"break-before":se()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...oe(),l]}],overflow:[{overflow:Y()}],"overflow-x":[{"overflow-x":Y()}],"overflow-y":[{"overflow-y":Y()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",O,l]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",O,l]}],"grid-cols":[{"grid-cols":[G]}],"col-start-end":[{col:["auto",{span:["full",O,l]},l]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[G]}],"row-start-end":[{row:["auto",{span:[O,l]},l]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...J()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...J(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...J(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[ee]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ee]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",C,j]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Q]}],"font-family":[{font:[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",S,Q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,j]}],"underline-offset":[{"underline-offset":["auto",z,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...oe(),gr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},xr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:W()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[z,l]}],"outline-w":[{outline:[z,j]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[z,j]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,yr]}],"shadow-color":[{shadow:[G]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...ne(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ne()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,l]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[_]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[O,l]}],"translate-x":[{"translate-x":[re]}],"translate-y":[{"translate-y":[re]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,j,Q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},jr=sr(zr);function Cr(...e){return jr(Ye(e))}const Nr=Ue("flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",{variants:{theme:{light:"border-input text-foreground file:text-foreground focus-visible:ring-ring",dark:"border-input-dark bg-background-dark text-primary-foreground-dark file:text-foreground-dark placeholder:text-muted-foreground-dark focus-visible:ring-ring-dark"}},defaultVariants:{theme:"light"}}),V=Le.forwardRef(({className:e,type:r,theme:t,...o},s)=>qe.jsx("input",{type:r,className:Cr(Nr({theme:t,className:e})),ref:s,...o}));V.displayName="Input";V.__docgenInfo={description:"",methods:[],displayName:"Input"};const _r={title:"Components/Input",component:V,tags:["autodocs"],argTypes:{theme:{control:"radio",options:["light","dark"]}}},$={args:{placeholder:"Enter text...",theme:"light"}},M={args:{placeholder:"Enter text...",theme:"dark"}},T={render:e=>K.jsxs("div",{className:e.theme==="dark"?"bg-gray-800 p-4":"",children:[K.jsx("label",{htmlFor:"input-with-label",className:`block mb-2 text-sm font-medium ${e.theme==="dark"?"text-white":""}`,children:"Label"}),K.jsx(V,{id:"input-with-label",...e})]}),args:{placeholder:"Enter text...",theme:"light"}},L={args:{placeholder:"Disabled input",disabled:!0,theme:"light"}},A={args:{placeholder:"Disabled input",disabled:!0,theme:"dark"}},F={args:{type:"password",placeholder:"Enter password...",theme:"light"}},q={args:{type:"password",placeholder:"Enter password...",theme:"dark"}};var pe,ue,be;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    theme: "light"
  }
}`,...(be=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var me,fe,ge;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    theme: "dark"
  }
}`,...(ge=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,xe,ye;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <div className={args.theme === "dark" ? "bg-gray-800 p-4" : ""}>
      <label htmlFor="input-with-label" className={\`block mb-2 text-sm font-medium \${args.theme === "dark" ? "text-white" : ""}\`}>
        Label
      </label>
      <Input id="input-with-label" {...args} />
    </div>,
  args: {
    placeholder: "Enter text...",
    theme: "light"
  }
}`,...(ye=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,we,ke;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true,
    theme: "light"
  }
}`,...(ke=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var ze,je,Ce;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true,
    theme: "dark"
  }
}`,...(Ce=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Ne,Se,Ee;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password...",
    theme: "light"
  }
}`,...(Ee=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var _e,Ie,De;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password...",
    theme: "dark"
  }
}`,...(De=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};const Ir=["Default","Dark","WithLabel","Disabled","DisabledDark","WithType","WithTypeDark"];export{M as Dark,$ as Default,L as Disabled,A as DisabledDark,T as WithLabel,F as WithType,q as WithTypeDark,Ir as __namedExportsOrder,_r as default};

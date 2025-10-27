var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! For license information please see 2667.03b01077.js.LICENSE.txt */
"use strict";(self.webpackChunksubstack=self.webpackChunksubstack||[]).push([["2667"],{7073:function(e,t,r){r.d(t,{Z:()=>n});let n=(0,r(36150).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},18693:function(e,t,r){r.d(t,{Z:()=>n});let n=(0,r(36150).Z)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},84422:function(e,t,r){r.r(t),r.d(t,{DmComposerModal:()=>C});var n=r(7409),i=r(99282),l=r(16584),s=r(30396),a=r(12048),d=r(18693),o=r(7073),c=r(71375),u=r(25380),h=r(68833),g=r(48980),p=r(63018),y=r(94874),Z=r(80026),f=r(98248),m=r(85930),v=r(70379),k=r(55533),x=r(33451),w=r(37759),S=r(12120),_=r(62515),b=r(63651);function C(e){let{onClose:t,linkAttachmentUrl:r}=e,[u,p]=(0,s.eJ)(new Set),y=(0,v.pm)(),f=(0,s.sO)(null),m=async e=>{if(!u.has(e.user.id)){e.trackingParameters&&(0,h.j)(h.FP.DIRECT_MESSAGE_SEARCH_RESULT_CLICKED,(0,n._)({},e.trackingParameters)),p(t=>(0,S.oR)(t,e.user.id));try{var t,s,a;let o=await (0,g.rd)("/api/v1/messages/dm",{method:"POST",json:{user_id:e.user.id,link:r,body:null!==(a=null===(s=f.current)||void 0===s?void 0:null===(t=s.value)||void 0===t?void 0:t.trim())&&void 0!==a?a:""}});y.popToast(e=>(0,l.tZ)(v.FN,(0,i._)((0,n._)({},e),{text:"Message sent",Icon:d.Z,cta:"View now",href:(0,_.Rm)(o.thread.id)})))}catch(t){y.popToast(e=>(0,l.tZ)(v.FN,(0,i._)((0,n._)({},e),{text:"Message failed to send",Icon:o.Z}))),p(t=>(0,S.zu)(t,e.user.id))}}};return(0,l.BX)(Z.sg,{style:{height:720,maxHeight:"calc(100vh - 32px)"},flex:"grow",children:[(0,l.BX)(Z.X2,{position:"relative",padding:12,justifyContent:"space-between",alignItems:"center",borderBottom:"detail",children:[(0,l.tZ)(Z.xu,{width:32}),(0,l.tZ)(a.V.Title,{as:Z.xv.B3,weight:"bold",children:"Send as message"}),(0,l.tZ)(Z.hU,{onClick:t,priority:"tertiary",size:"sm",children:(0,l.tZ)(c.Z,{})})]}),(0,l.BX)(Z.sg,{padding:16,gap:16,children:[r&&(0,l.tZ)(E,{url:r}),(0,l.tZ)("textarea",{ref:f,style:{border:"none",background:"none",resize:"none"},className:(0,Z.oB)((0,i._)((0,n._)({},Z.et),{minHeight:24,height:24,display:"flex",color:"primary"})),placeholder:"Add a message...",onInput:e=>{let t=e.currentTarget;t.style.height="auto",t.style.height="".concat(t.scrollHeight,"px")}})]}),(0,l.tZ)(B,{onSelect:m,selectedIds:u})]})}function E(e){let{url:t}=e,{data:r,isLoading:n,isValidating:i}=(0,p._I)("/api/v1/link-metadata",{query:{url:t},deps:[t]});return(0,l.tZ)(Z.sg,{radius:"lg",bg:"secondary",overflow:"hidden",children:n||i?(0,l.tZ)(x.Gt,{}):r?(0,l.tZ)(x.bO,{metadata:r}):(0,l.tZ)(x.Ii,{})})}function B(e){var t,r;let{onSelect:n,selectedIds:i}=e,{query:a,handleSearch:d,data:o,isLoading:c,error:u}=(0,w.C)(),g=[...null!==(t=null==o?void 0:o.users)&&void 0!==t?t:[],...null!==(r=null==o?void 0:o.otherUsers)&&void 0!==r?r:[]],p=(0,s.sO)(!1);return(0,s.d4)(()=>{a||!(g.length>0)||p.current||(p.current=!0,(0,h.j)(h.FP.DIRECT_MESSAGE_SEARCH_VIEWED,{suggested_user_ids:g.map(e=>e.user.id),suggested_users:g.length}))},[g.length,a]),(0,l.BX)(Z.sg,{gap:8,flex:"grow",children:[(0,l.tZ)(Z.sg,{paddingX:16,children:(0,l.tZ)(m.M,{placeholder:"Search people",onChange:d})}),(0,l.tZ)(Z.sg,{padding:8,flex:"grow",overflowY:"auto",children:u?(0,l.tZ)(k.vJ,{title:"Error performing search",body:"Please try again"}):c?(0,l.tZ)(Z.sg,{flex:"grow",children:(0,l.tZ)(f.$j,{})}):0===g.length?""===a.trim()?(0,l.tZ)(k.vJ,{title:"Search people on Substack",body:"Start typing to find someone you know"}):(0,l.tZ)(k.vJ,{title:"No results for “".concat(a,"”"),body:"Please try a different search"}):g.map(e=>(0,l.tZ)(I,{user:e.user,onClick:()=>n(e),hasClicked:i.has(e.user.id)},e.user.id))})]})}function I(e){let{user:t,onClick:r,hasClicked:n}=e;return(0,l.BX)(Z.X2,{padding:8,gap:12,alignItems:"center",children:[(0,l.tZ)(y.qE,{user:t,size:40}),(0,l.BX)(Z.sg,{flex:"grow",children:[(0,l.tZ)(Z.xv.B3,{weight:"bold",ellipsis:!0,children:(0,l.tZ)(Z.hh,{href:(0,b.NNq)(t),target:"_blank",decoration:"hover-underline",rel:"noopener",children:t.name})}),t.handle&&(0,l.BX)(Z.xv.B4,{color:"secondary",ellipsis:!0,children:["@",t.handle]})]}),n?(0,l.tZ)(Z.zx,{size:"sm",priority:"tertiary",disabled:!0,leading:(0,l.tZ)(u.Z,{size:20}),children:"Sent"}):(0,l.tZ)(Z.zx,{size:"sm",onClick:r,children:"Send"})]})}},12120:function(e,t,r){function n(e,t){let r=new Set(e);return r.add(t),r}function i(e,t){let r=new Set(e);return r.delete(t),r}function l(e,t){return new Set([...e].filter(e=>!t.has(e)))}r.d(t,{e5:()=>l,oR:()=>n,zu:()=>i})}}]);

}
/*
     FILE ARCHIVED ON 13:11:14 Apr 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:27:46 Oct 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.623
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.011
  cdx.remote: 12.441
  LoadShardBlock: 76.483 (3)
  PetaboxLoader3.datanode: 93.327 (4)
  load_resource: 20.253
*/
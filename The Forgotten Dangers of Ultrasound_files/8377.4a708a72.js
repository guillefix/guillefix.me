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

"use strict";(self.webpackChunksubstack=self.webpackChunksubstack||[]).push([["8377"],{34009:function(t,e,n){n.d(e,{Z:()=>a});let a={referralsTierCard:"referralsTierCard-XI8dRc"}},42725:function(t,e,n){n.d(e,{pc:()=>a}),n(16584),n(6400),n(30396),n(14068),n(68833),n(62981),n(15771),n(19081),n(58175),n(35144);let a="clip_web_nux_seen_at"},4796:function(t,e,n){n(16584),n(30396),n(98661),n(80569),n(95441),n(6400),n(68833),n(15771),n(61254),n(19081),n(44424),n(61468)},41149:function(t,e,n){n.d(e,{N:()=>d});var a=n(16584),o=n(32351),i=n(32129),r=n(33884),l=n(63651),c=n(84864);function d(t){var e,n,d;let{comment:s,post:u,publication:m}=t,f="Substack | Notes";m&&s.name?f="".concat(s.name," on ").concat(m.name):s.name?f="".concat(s.name," on Substack"):m&&(f="".concat(m.name));let g=u&&m?(0,i.getPageTitleAndMeta)(u,m,{isCommentPage:!0}).title:"".concat(f,': "').concat((0,c.truncateText)(s.body,280),'"'),v=null===(e=s.attachments)||void 0===e?void 0:e.find(t=>"image"===t.type),p=v&&"imageUrl"in v?v.imageUrl:void 0,h=null!=p?p:(0,l.zF4)((0,r.IY)(s.id,{isSmall:!0}),680,{height:680}),w=s.body;return(0,a.tZ)(o.Metadata,{title:g,socialTitle:f,description:w,image:h,imageHeight:680,imageWidth:680,isLargeImage:!!h||void 0,siteName:m?m.name:"Substack",publishedTime:s.date.toString(),meta:[{name:"twitter:label1",content:"Likes"},{name:"twitter:data1",content:String(null!==(n=s.reaction_count)&&void 0!==n?n:0)},{name:"twitter:label2",content:"Replies"},{name:"twitter:data2",content:String(null!==(d=s.children_count)&&void 0!==d?d:0)}]})}},62981:function(t,e,n){n.d(e,{Z:()=>c});var a=n(30396),o=n(68833),i=n(59176),r=n(98012);let l=()=>{};function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,[d,s]=(0,a.eJ)(!!t&&function(t,e,n){let a;let o="undefined"==typeof window?new Date().toString():(0,i.mM)(t),l="undefined"==typeof window?0:(0,i.mM)("".concat(t,"-seen-count")),c=o||n&&l>=n;return c&&e?(0,r.Z)(o).add(e,"second").isAfterNow():!!(o||c)}(t,e,c));return((0,a.d4)(()=>{let e=()=>{s(!0)};if(t){document.addEventListener("dismiss: ".concat(t),e,!1);let n=(0,i.mM)("".concat(t,"-seen-count"))||0;(!c||n<c)&&(0,i.ex)("".concat(t,"-seen-count"),n+1)}return()=>{document.removeEventListener("dismiss: ".concat(t),e)}},[t]),t)?[d,()=>{n(),(0,o.j)(o.FP.DASHBOARD_ACTION_BOX_DISMISSED,{key:t});let e=new Date;(0,i.ex)(t,e.toString()),s(!0);let a=new Event("dismiss: ".concat(t));document.dispatchEvent(a)}]:[!0,l]}},2748:function(t,e,n){n.d(e,{F:()=>i});var a=n(1835),o=n(84864);function i(t,e){var n,i,r,l;let c,d;let s=null===(n=t.name)||void 0===n?void 0:n.trim(),u=s;(0,o.endsWithPunctuation)(s)&&(u='"'.concat(s,'"'));let m=(0,a.Im)(t.contributors);return t.invite_only?(c=null,d=null):(c=(null===(r=t.rankingDetailFreeIncluded)||void 0===r?void 0:r.toLowerCase().includes("subscribers"))?t.rankingDetailFreeIncluded.toLowerCase():null,d=t.rankingDetailFreeIncluded||t.rankingDetail),(0,a.ab)(null!==(l=null!=e?e:null===(i=t.hero_text)||void 0===i?void 0:i.trim())&&void 0!==l?l:"",m,c,u,d)}},61468:function(t,e,n){n.d(e,{Ap:()=>l});var a=n(7409),o=n(99282),i=n(14293),r=n.n(i);n(84864);let l=t=>{let{rows:e,maxWordsPerRow:n=60}=t;if(r()(e[0]))return[];let i=[],l=(0,o._)((0,a._)({},e[0]),{words:e[0].words.map(t=>(0,o._)((0,a._)({},t),{originalIndex:0}))});for(let t=1;t<e.length;t++){let r=e[t];if(!r)continue;let c=(0,o._)((0,a._)({},r),{words:r.words.map(e=>(0,o._)((0,a._)({},e),{originalIndex:t}))});l.speaker===c.speaker&&l.words.length+c.words.length<=n?l={start:l.start,end:c.end,text:"".concat(l.text," ").concat(c.text),words:l.words.concat(...c.words),speaker:l.speaker}:(i.push(l),l=c)}return i.push(l),i}},93370:function(t,e,n){n.d(e,{DL:()=>o,Jk:()=>r,UB:()=>a,ZD:()=>l,fI:()=>i});let a=t=>{let e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(e,":").concat(n.toString().padStart(2,"0"))};function o(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t<0)return"0:00";let n=Math.floor(t),a=Math.floor(n/60),o=n%60;if(e){let e=Math.round((t-n)*10);return"".concat(a,":").concat(String(o).padStart(2,"0"),".").concat(e)}return"".concat(a,":").concat(String(o).padStart(2,"0"))}let i=t=>/^[0-9.:]*$/.test(t),r=t=>/^(?:(?:[0-9]{1,3}):)?(?:[0-5][0-9]|[0-9]{1,2})(?:\.[0-9]{1,3})?$/.test(t),l=t=>{let[e="",n=""]=t.split("."),a=e.split(":").reverse().map(t=>parseInt(t)),o=a[0]||0,i=a[1]||0;return 3600*(a[2]||0)+60*i+o+parseInt(n.padEnd(3,"0"))/1e3}}}]);

}
/*
     FILE ARCHIVED ON 13:11:25 Apr 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:27:39 Oct 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.458
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 32.755
  LoadShardBlock: 305.775 (3)
  PetaboxLoader3.datanode: 320.24 (4)
  load_resource: 32.305
*/
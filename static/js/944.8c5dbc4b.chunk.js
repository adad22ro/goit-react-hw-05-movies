"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[944],{800:(e,t,a)=>{a.d(t,{c:()=>r});const s="ErrorAlert_Error__rwsaJ";var c=a(496);const r=e=>{let{error:t}=e;return(0,c.jsx)("p",{className:s,children:t})}},264:(e,t,a)=>{a.d(t,{c:()=>n});var s=a(72);const c="Loader_loader__WEzse";var r=a(496);const n=()=>(0,r.jsx)(s.s$,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperClass:c})},104:(e,t,a)=>{a.d(t,{c:()=>i});var s=a(560),c=a(12),r=(a(680),a(164));const n={trendingList:"MoviesList_trendingList__DDWPu",movieItem:"MoviesList_movieItem__etzOn"};var o=a(496);const i=e=>{let{movies:t}=e;const a=(0,s.IT)();return(0,o.jsx)("ul",{className:n.trendingList,children:t.map((e=>(0,o.jsxs)("li",{className:n.movieItem,children:[(0,o.jsx)(r.YXI,{className:n.icon}),(0,o.jsx)(c.cH,{to:"/movies/".concat(e.id),state:{from:a},children:e.title||e.name})]},e.id)))})}},944:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(800),c=a(264),r=a(104),n=a(680),o=a(56),i=a(496);const d=()=>{const[e,t]=(0,n.useState)(null),[a,d]=(0,n.useState)(!1),[l,v]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{try{d(!0);const e=await o.c.getTrending();if(0===e.results.length)return void v('We are sorry. There is no data"');t(e.results)}catch(l){v(l.response.data.status_message)}finally{d(!1)}})()}),[]),(0,i.jsxs)("section",{className:"container",children:[(0,i.jsx)("h2",{children:"Trending today"}),e&&(0,i.jsx)(r.c,{movies:e}),l&&(0,i.jsx)(s.c,{error:l}),a&&(0,i.jsx)(c.c,{})]})}},56:(e,t,a)=>{a.d(t,{c:()=>r});var s=a(372);s.c.defaults.baseURL="https://api.themoviedb.org/3";const c="051a3d8a53317eb2948f5da4b81e4296",r={getTrending:async()=>(await s.c.get("".concat("/trending/movie/day","?api_key=").concat(c))).data,getSearchedMovies:async e=>{const t="/search/movie?query=".concat(e);return(await s.c.get("".concat(t,"&api_key=").concat(c))).data},getMovieDetails:async e=>{const t="/movie/".concat(e);return(await s.c.get("".concat(t,"?api_key=").concat(c))).data},getMovieCredits:async e=>{const t="/movie/".concat(e,"/credits");return(await s.c.get("".concat(t,"?api_key=").concat(c))).data},getMovieReviews:async e=>{const t="/movie/".concat(e,"/reviews");return(await s.c.get("".concat(t,"?api_key=").concat(c))).data}}}}]);
//# sourceMappingURL=944.8c5dbc4b.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[116],{800:(e,a,s)=>{s.d(a,{c:()=>c});const t="ErrorAlert_Error__rwsaJ";var i=s(496);const c=e=>{let{error:a}=e;return(0,i.jsx)("p",{className:t,children:a})}},264:(e,a,s)=>{s.d(a,{c:()=>n});var t=s(72);const i="Loader_loader__WEzse";var c=s(496);const n=()=>(0,c.jsx)(t.s$,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperClass:i})},116:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(680),i=s(560),c=s(56);const n="MovieCard_movieCard__Vpv2j",r="MovieCard_movieimage__UmUru",o="MovieCard_movieTitle__NZKSH",d="MovieCard_release_date__xEjKf",l="MovieCard_genres__tx0WF",v="MovieCard_runtime__M-2oe",h="MovieCard_overview__NfZMG";var m=s(496);const _=e=>{let{movieDetails:a}=e;const{title:s,overview:t,genres:i,poster_path:c,release_date:_}=a,x=c?"https://image.tmdb.org/t/p/w342".concat(c):"https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=";return(0,m.jsxs)("div",{className:n,children:[(0,m.jsx)("div",{className:r,children:(0,m.jsx)("img",{src:x,alt:"movies poster"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:o,children:s}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsx)("p",{children:"Release Year: "}),(0,m.jsx)("p",{children:new Date(_).getFullYear()})]}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("p",{children:"Genres: "}),(0,m.jsx)("p",{children:i.map((e=>e.name)).join(", ")})]}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("p",{children:"Runtime: "}),(0,m.jsxs)("p",{children:[a.runtime," minutes"]})]}),(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("p",{children:"Overview"}),(0,m.jsx)("p",{children:t})]})]})]})};var x=s(800),j=s(264),u=s(12);const p="MovieAdditionalInfo_additional__6Nzx3",g="MovieAdditionalInfo_navLink__l+Woh",w="MovieAdditionalInfo_navLinkActive__DHsoT",k=()=>(0,m.jsxs)("section",{className:"container ".concat(p),children:[(0,m.jsx)("h2",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(u.Af,{to:"cast",className:e=>{let{isActive:a}=e;return a?"".concat(g," ").concat(w):g},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(u.Af,{to:"reviews",className:e=>{let{isActive:a}=e;return a?"".concat(g," ").concat(w):g},children:"Reviews"})})]})]});var f=s(696),M=s(912);const y="BackButton_backLink__g-xXh",N=()=>{var e,a;const s=null!==(e=null===(a=(0,i.IT)().state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/movies";return(0,m.jsx)("div",{className:y,children:(0,m.jsxs)(u.cH,{to:s,children:[(0,m.jsx)(M.uI8,{}),(0,m.jsx)("span",{children:"Back to Trending"})]})})},b=()=>{const[e,a]=(0,t.useState)(null),[s,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(!1),{movieId:d}=(0,i.W4)();return(0,t.useEffect)((()=>{(async()=>{try{o(!0);const e=await c.c.getMovieDetails(d);e||n('We are sorry. There is no details about the movie"'),a(e)}catch(s){n(s.response.data.status_message)}finally{o(!1)}})()}),[d]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("section",{className:"container",children:[(0,m.jsx)(N,{}),e&&(0,m.jsx)(_,{movieDetails:e}),s&&(0,m.jsx)(x.c,{error:s}),r&&(0,m.jsx)(j.c,{})]}),e&&(0,m.jsx)(k,{}),(0,m.jsx)(t.Suspense,{fallback:(0,m.jsx)(f.c,{children:"Loading subpage ..."}),children:(0,m.jsx)(i.yY,{})})]})}},56:(e,a,s)=>{s.d(a,{c:()=>c});var t=s(372);t.c.defaults.baseURL="https://api.themoviedb.org/3";const i="051a3d8a53317eb2948f5da4b81e4296",c={getTrending:async()=>(await t.c.get("".concat("/trending/movie/day","?api_key=").concat(i))).data,getSearchedMovies:async e=>{const a="/search/movie?query=".concat(e);return(await t.c.get("".concat(a,"&api_key=").concat(i))).data},getMovieDetails:async e=>{const a="/movie/".concat(e);return(await t.c.get("".concat(a,"?api_key=").concat(i))).data},getMovieCredits:async e=>{const a="/movie/".concat(e,"/credits");return(await t.c.get("".concat(a,"?api_key=").concat(i))).data},getMovieReviews:async e=>{const a="/movie/".concat(e,"/reviews");return(await t.c.get("".concat(a,"?api_key=").concat(i))).data}}}}]);
//# sourceMappingURL=116.318166a0.chunk.js.map
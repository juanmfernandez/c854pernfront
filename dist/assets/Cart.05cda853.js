import{G as R}from"./iconBase.a0f71330.js";import{B as W}from"./index.esm.6ac58a00.js";import{S as Z,s as P,n as J,i as B,b as M,t as X,f as Y,c as $,d as D,e as _,g as b,r as v,u as Q,p as ee,a as n,j as a,L as g,h as O,k as te,l as H,m as re}from"./index.00f18f07.js";import{T as L}from"./notification.b92a5846.js";import{s as se,u as ne,a as q}from"./useMutation.esm.a1143a4c.js";class ie extends Z{constructor(e,r){super(),this.client=e,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),j(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return E(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return E(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,r){const s=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),P(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const i=this.hasListeners();i&&z(this.currentQuery,o,this.options,s)&&this.executeFetch(),this.updateResult(r),i&&(this.currentQuery!==o||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();i&&(this.currentQuery!==o||this.options.enabled!==s.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)}getCurrentResult(){return this.currentResult}trackResult(e){const r={};return Object.keys(e).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...r}={}){return this.fetch({...r,meta:{refetchPage:e}})}fetchOptimistic(e){const r=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(e){var r;return this.executeFetch({...e,cancelRefetch:(r=e.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let r=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(J)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),B||this.currentResult.isStale||!M(this.options.staleTime))return;const r=X(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(B||this.options.enabled===!1||!M(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Y.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,r){const s=this.currentQuery,o=this.options,i=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,f=e!==s,h=f?e.state:this.currentQueryInitialState,c=f?this.currentResult:this.previousQueryResult,{state:d}=e;let{dataUpdatedAt:w,error:F,errorUpdatedAt:A,fetchStatus:y,status:x}=d,k=!1,U=!1,p;if(r._optimisticResults){const m=this.hasListeners(),I=!m&&j(e,r),K=m&&z(e,s,r,o);(I||K)&&(y=$(e.options.networkMode)?"fetching":"paused",w||(x="loading")),r._optimisticResults==="isRestoring"&&(y="idle")}if(r.keepPreviousData&&!d.dataUpdatedAt&&c!=null&&c.isSuccess&&x!=="error")p=c.data,w=c.dataUpdatedAt,x=c.status,k=!0;else if(r.select&&typeof d.data<"u")if(i&&d.data===(l==null?void 0:l.data)&&r.select===this.selectFn)p=this.selectResult;else try{this.selectFn=r.select,p=r.select(d.data),p=D(i==null?void 0:i.data,p,r),this.selectResult=p,this.selectError=null}catch(m){this.selectError=m}else p=d.data;if(typeof r.placeholderData<"u"&&typeof p>"u"&&x==="loading"){let m;if(i!=null&&i.isPlaceholderData&&r.placeholderData===(u==null?void 0:u.placeholderData))m=i.data;else if(m=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof m<"u")try{m=r.select(m),this.selectError=null}catch(I){this.selectError=I}typeof m<"u"&&(x="success",p=D(i==null?void 0:i.data,m,r),U=!0)}this.selectError&&(F=this.selectError,p=this.selectResult,A=Date.now(),x="error");const C=y==="fetching",N=x==="loading",S=x==="error";return{status:x,fetchStatus:y,isLoading:N,isSuccess:x==="success",isError:S,isInitialLoading:N&&C,data:p,dataUpdatedAt:w,error:F,errorUpdatedAt:A,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>h.dataUpdateCount||d.errorUpdateCount>h.errorUpdateCount,isFetching:C,isRefetching:C&&!N,isLoadingError:S&&d.dataUpdatedAt===0,isPaused:y==="paused",isPlaceholderData:U,isPreviousData:k,isRefetchError:S&&d.dataUpdatedAt!==0,isStale:T(e,r),refetch:this.refetch,remove:this.remove}}updateResult(e){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,P(s,r))return;this.currentResult=s;const o={cache:!0},i=()=>{if(!r)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l!=null?l:this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(f=>{const h=f;return this.currentResult[h]!==r[h]&&u.has(h)})};(e==null?void 0:e.listeners)!==!1&&i()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r==null||r.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const r={};e.type==="success"?r.onSuccess=!e.manual:e.type==="error"&&!_(e.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(e){b.batch(()=>{if(e.onSuccess){var r,s,o,i;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(o=(i=this.options).onSettled)==null||o.call(i,this.currentResult.data,null)}else if(e.onError){var l,u,f,h;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(f=(h=this.options).onSettled)==null||f.call(h,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(c=>{c(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function le(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function j(t,e){return le(t,e)||t.state.dataUpdatedAt>0&&E(t,e,e.refetchOnMount)}function E(t,e,r){if(e.enabled!==!1){const s=typeof r=="function"?r(t):r;return s==="always"||s!==!1&&T(t,e)}return!1}function z(t,e,r,s){return r.enabled!==!1&&(t!==e||s.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&T(t,r)}function T(t,e){return t.isStaleByTime(e.staleTime)}const G=v.exports.createContext(!1),ae=()=>v.exports.useContext(G);G.Provider;function ce(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const oe=v.exports.createContext(ce()),ue=()=>v.exports.useContext(oe),he=(t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))},de=t=>{v.exports.useEffect(()=>{t.clearReset()},[t])},fe=({result:t,errorResetBoundary:e,useErrorBoundary:r,query:s})=>t.isError&&!e.isReset()&&!t.isFetching&&se(r,[t.error,s]),me=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},pe=(t,e)=>t.isLoading&&t.isFetching&&!e,xe=(t,e,r)=>(t==null?void 0:t.suspense)&&pe(e,r),ve=(t,e,r)=>e.fetchOptimistic(t).then(({data:s})=>{t.onSuccess==null||t.onSuccess(s),t.onSettled==null||t.onSettled(s,null)}).catch(s=>{r.clearReset(),t.onError==null||t.onError(s),t.onSettled==null||t.onSettled(void 0,s)});function ge(t,e){const r=Q({context:t.context}),s=ae(),o=ue(),i=r.defaultQueryOptions(t);i._optimisticResults=s?"isRestoring":"optimistic",i.onError&&(i.onError=b.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=b.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=b.batchCalls(i.onSettled)),me(i),he(i,o),de(o);const[l]=v.exports.useState(()=>new e(r,i)),u=l.getOptimisticResult(i);if(ne(v.exports.useCallback(f=>s?()=>{}:l.subscribe(b.batchCalls(f)),[l,s]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),v.exports.useEffect(()=>{l.setOptions(i,{listeners:!1})},[i,l]),xe(i,u,s))throw ve(i,l,o);if(fe({result:u,errorResetBoundary:o,useErrorBoundary:i.useErrorBoundary,query:l.getCurrentQuery()}))throw u.error;return i.notifyOnChangeProps?u:l.trackResult(u)}function ye(t,e,r){const s=ee(t,e,r);return ge(s,ie)}function be(t){return R({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function Re(t){return R({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m13 16 5-4-5-4v3H4v2h9z"}},{tag:"path",attr:{d:"M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"}}]})(t)}function we(t){return R({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"}}]})(t)}function Ce(t){return R({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(t)}const V=({width:t,setWidth:e})=>(v.exports.useState(!1),n("div",{children:t<768?n("nav",{className:"w-auto text-base font-poppins font-bold ",children:a("ul",{className:"flex pl-1 flex-col gap-1 ml-4",children:[n("li",{children:n(g,{to:"/catalogue",children:"TIENDA"})}),n("li",{children:n(g,{to:"/",children:"NOSOTROS"})}),n("li",{children:n(g,{to:"/",children:"COMUNIDAD"})}),n("li",{children:n(g,{to:"/",children:"CONTACTO"})})]})}):n("div",{children:n("nav",{className:"w-full flex justify-center font-poppins font-bold h-24 border-2 border-b-slate-300 shadow-md",children:a("ul",{className:"flex items-center flex-wrap gap-4 ml-4",children:[n("li",{children:n(g,{className:"mx-4",to:"/catalogue",children:"TIENDA"})}),n("li",{children:n(g,{className:"mx-4",to:"/",children:"NOSOTROS"})}),n("li",{children:n(g,{className:"mx-4",to:"/",children:"COMUNIDAD"})}),n("li",{children:n(g,{className:"mx-4",to:"/",children:"CONTACTO"})})]})})})})),Me=({width:t,setWidth:e,setIsOpen:r})=>{const[s,o]=v.exports.useState(!1),{logged:i}=O(l=>l.auth);return a("header",{className:"w-full flex flex-col md:flex-row  justify-between  bg-black h-20 sm:p-2 items-center  font-poppins text-2xl text-white",children:[n("h1",{className:"font-semibold text-lg md:text-2xl p-2",children:"MOVEment"}),n("div",{onClick:()=>o(!s),className:"text-3xl absolute right-8 top-2  md:hidden",children:n(we,{className:"relative left-[90%]"})}),a("div",{className:"flex  md:w-[30rem] w-full p-4  sm:p-0 items-center justify-center md:gap-4 font-medium",children:[n("div",{className:"flex w-[220px]   hover:text-lime-400 relative md:w-[100%]  ",children:n(be,{className:"text-black absolute   bottom-2 left-2"})}),n("div",{className:`md:flex md:items-center  h-[12rem] w-screen md:h-auto bg-black rounded-sm flex-wrap absolute md:static md:z-auto z-20 right-0  md:w-[20rem] transition-all duration-500 ease-in ${s?"top-12 ":"top-[-490px]"}`,children:i?a("div",{className:"md:w-[250px] p-1 w-full text-lg font-bold absolute right-0 md:static flex md:flex-row-reverse gap-1 md:text-lg flex-col ",children:[a("div",{className:"w-full flex items-center cursor-pointer hover:text-lime-400 gap-1",children:[n(Ce,{}),n("p",{className:"w-full",children:"Mi cuenta"})]}),a("div",{className:" w-[95%] flex items-center cursor-pointer hover:text-lime-400 gap-1",children:[n(W,{className:"hover:text-lime-400"}),n("button",{className:"w-full",onClick:()=>r(!0),children:"Carrito"})]}),t<768&&n(V,{width:t,setWidth:e})]}):a("div",{className:" md:flex flex-col flex  justify-center md:static  items-start  md:right-10 cursor-pointer hover:text-lime-40",children:[a("div",{className:"flex items-center gap-1  hover:text-lime-400 text-lg font-medium",children:[n(Re,{}),n(g,{to:"/login",className:"md:text-lg ",children:"Iniciar sesi\xF3n"})]}),t<768&&n(V,{width:t,setWidth:e})]})})]})]})},Ne=t=>te(`/cart?idCart=${t}`),Se=(t,e)=>H({},`/cart/remove?idCart=${t}&idProduct=${e}`),Ie=(t,e)=>H({},`/cart/add?idCart=${t}&idProduct=${e}`),Ee=t=>ye(["cart",t],()=>Ne(t),{onSuccess:e=>{},onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!0}),Qe=(t,e)=>{const r=Q();return q(()=>Se(t,e),{onSuccess:()=>{r.invalidateQueries(["cart"])}})},De=(t,e)=>{const r=Q();return q(()=>Ie(t,e),{onSuccess:()=>{r.invalidateQueries(["cart"]),L("success","Agregado al carrito!")},onError:s=>{L("error","Error al agregar al carrito!")}})};function Oe(t){return R({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"}}]})(t)}const Te=({productName:t,id:e,Colours:r,Size:s,price:o,ProductImgs:i})=>{var h;const{cartId:l}=O(c=>c.auth),{mutate:u}=Qe(l,e),f=()=>{u()};return a("div",{className:"w-full bg-[#E9E9E9] p-2",children:[a("div",{className:"flex gap-3",children:[n("div",{className:"flex w-[50px] h-[75px] sm:w-[70px] sm:h-[102px]",children:n("img",{className:"flex w-[50px] h-[75px] sm:w-[70px] sm:h-[102px] object-cover",src:(h=i[0])==null?void 0:h.imgUrl,alt:t})}),a("div",{className:"flex flex-col justify-between w-full",children:[n("div",{children:n("h2",{className:"w-[250px] truncate text-ellipsis font-semibold text-xl md:w-[320px]",children:t})}),a("div",{children:[a("p",{children:["Color: ",r.length?r[0].colourName:"\xDAnico"]}),a("p",{children:["Talle: ",s.length?s[0].sizeLetter:"\xDAnico"]})]})]})]}),a("div",{className:"w-full flex items-center justify-between py-3",children:[a("div",{className:"w-[100px] flex justify-center",children:[n("button",{className:"w-full text-lg border-[1px] border-[#3A3A3A] border-r-0",children:"-"}),n("input",{type:"number",className:"max-w-[50px] bg-transparent text-center border-[1px] border-[#3A3A3A]",placeholder:"1"}),n("button",{className:"w-full text-lg border-[1px] border-[#3A3A3A] border-l-0",children:"+"})]}),a("div",{className:"flex gap-3",children:[a("p",{className:"font-bold text-xl",children:["$",o]}),n("button",{onClick:f,className:"font-bold text-xl",children:n(Oe,{})})]})]})]})},Le=({isOpen:t,setIsOpen:e})=>{var u,f,h;const{cartId:r}=O(c=>c.auth),{data:s,isLoading:o,isFetching:i,refetch:l}=Ee(r);return a("main",{className:" fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "+(t?" transition-opacity opacity-100 duration-500 translate-x-0  ":" transition-all delay-500 opacity-0 translate-x-full  "),children:[n("section",{className:" w-full max-w-[350px] sm:max-w-sm md:max-w-md right-0 absolute bg-white h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  "+(t?" translate-x-0 ":" translate-x-full "),children:a("article",{className:"relative overflow-y-auto w-screen max-w-[350px] sm:max-w-sm md:max-w-md pb-10 flex flex-col space-y-6 h-full",children:[n("header",{className:"w-full text-center mt-5 font-bold text-3xl text-[#212B36] border-b",children:"Tu carrito"}),o?n(re,{windowSize:"full"}):a("div",{className:"w-full px-3 flex flex-col justify-around gap-4",children:[a("div",{className:"w-full flex flex-col justify-evenly gap-4",children:[((u=s==null?void 0:s.Products)==null?void 0:u.length)>0?s.Products.map(c=>n(Te,{productName:c.productName,id:c.id,Colours:c.Colours,description:c.description,quantityInStock:c.quantityInStock,Size:c.Size,price:c.price,ProductImgs:c.ProductImgs,Categories:c.Categories},c.id)):n("p",{className:"text-center",children:"No hay art\xEDculos en el carrito"}),((f=s==null?void 0:s.Products)==null?void 0:f.length)>0?n("div",{children:a("h2",{className:"text-right font-semibold text-xl",children:["Importe total $",s==null?void 0:s.totalPrice]})}):null]}),((h=s==null?void 0:s.Products)==null?void 0:h.length)>0?a("div",{className:"w-full flex flex-col gap-4 items-center",children:[n("button",{className:"cart-buttons bg-[#19F5BE] font-semibold text-xs text-[#121212] drop-shadow-lg",children:"FINALIZAR COMPRA"}),n("button",{onClick:()=>{e(!1)},className:"cart-buttons bg-transparent border-[3px] border-[#19F5BE] text-xs font-semibold text-[#121212] drop-shadow-lg",children:"CONTINUAR EN EL SITIO"})]}):null]})]})}),n("section",{className:" w-screen h-full cursor-pointer ",onClick:()=>{e(!1)}})]})};export{Le as C,Me as N,V as a,De as u};
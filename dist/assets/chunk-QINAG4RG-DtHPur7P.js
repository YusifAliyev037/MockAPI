import{f as p,j as k,r as b,H as N,a as j}from"./index-i8j6Sevi.js";var I=p(function(r,e){const{htmlWidth:a,htmlHeight:n,alt:i,...l}=r;return k.jsx("img",{width:a,height:n,ref:e,alt:i,...l})});I.displayName="NativeImage";function S(s){const{loading:r,src:e,srcSet:a,onLoad:n,onError:i,crossOrigin:l,sizes:f,ignoreFallback:u}=s,[c,g]=b.useState("pending");b.useEffect(()=>{g(e?"loading":"pending")},[e]);const t=b.useRef(),h=b.useCallback(()=>{if(!e)return;d();const o=new Image;o.src=e,l&&(o.crossOrigin=l),a&&(o.srcset=a),f&&(o.sizes=f),r&&(o.loading=r),o.onload=m=>{d(),g("loaded"),n==null||n(m)},o.onerror=m=>{d(),g("failed"),i==null||i(m)},t.current=o},[e,l,a,f,n,i,r]),d=()=>{t.current&&(t.current.onload=null,t.current.onerror=null,t.current=null)};return N(()=>{if(!u)return c==="loading"&&h(),()=>{d()}},[c,h,u]),u?"loaded":c}var O=(s,r)=>s!=="loaded"&&r==="beforeLoadOrError"||s==="failed"&&r==="onError";function w(s,r=[]){const e=Object.assign({},s);for(const a of r)a in e&&delete e[a];return e}var y=p(function(r,e){const{fallbackSrc:a,fallback:n,src:i,srcSet:l,align:f,fit:u,loading:c,ignoreFallback:g,crossOrigin:t,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:d,...o}=r,m=a!==void 0||n!==void 0,v=c!=null||g||!m,F=S({...r,crossOrigin:t,ignoreFallback:v}),x=O(F,h),E={ref:e,objectFit:u,objectPosition:f,...v?o:w(o,["onError","onLoad"])};return x?n||k.jsx(j.img,{as:I,className:"chakra-image__placeholder",src:a,...E}):k.jsx(j.img,{as:I,src:i,srcSet:l,crossOrigin:t,loading:c,referrerPolicy:d,className:"chakra-image",...E})});y.displayName="Image";export{y as I};

if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const f=e=>a(e,t),r={module:{uri:t},exports:n,require:f};s[t]=Promise.all(c.map((e=>r[e]||f(e)))).then((e=>(i(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/88AG4xIIg1aGhsUyCfTue/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/88AG4xIIg1aGhsUyCfTue/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-4ce89a6f374b2f4c.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/1bfc9850-aa3aa8949b0aa201.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/251.93e10caf6fc02f01.js",revision:"93e10caf6fc02f01"},{url:"/_next/static/chunks/252f366e-8cc0da137335a697.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/270-47604385f2e39b0a.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/274.7e14bc904c12fda9.js",revision:"7e14bc904c12fda9"},{url:"/_next/static/chunks/343-2890f14212aacbc1.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/347-b767b665b8f2ee2b.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/415-4a685a848b03d7c4.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/459-c1ce70983cf266cb.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/617.b7e74b27cacdc6d2.js",revision:"b7e74b27cacdc6d2"},{url:"/_next/static/chunks/690-4e03bfd3309bbaed.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/757-68201147cd27a155.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/785-2b4e1c307a809787.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/78e521c3-bac506b856c1c8e8.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/95b64a6e-028d995ab3b09871.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/ae51ba48-0c7908aeb38f1999.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/app/head-c18786859035b5cc.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/app/layout-316954fae82a1a44.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/app/page-4ca3906bb5986183.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/app/post/%5Bslug%5D/page-2e9c5eccc6eaeb34.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/app/profile/%5Bslug%5D/page-e1484c3b1e5583c7.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/app/review/page-50f87742c9acb041.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/d64684d8-f201c19dea90cd52.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/main-app-1760427bd6b4caf0.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/main-e1135375ece64bf2.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b74287ec4ba272d1.js",revision:"88AG4xIIg1aGhsUyCfTue"},{url:"/_next/static/css/1b1cf59279a9b628.css",revision:"1b1cf59279a9b628"},{url:"/_next/static/css/1c2ae79817a8c78c.css",revision:"1c2ae79817a8c78c"},{url:"/_next/static/css/a7d7ca5f6dc432da.css",revision:"a7d7ca5f6dc432da"},{url:"/_next/static/css/ba95b7a3a8a49050.css",revision:"ba95b7a3a8a49050"},{url:"/_next/static/media/10939feefdad71be.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/20b8b8f6f47c1e10.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/2c91708671b37a8b.woff2",revision:"5808d1b0c3a511815cbe3f566c9b0e24"},{url:"/_next/static/media/370d1cc320ec5619.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/3828f203592f7603.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/591327bf3b62a611.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/7777133e901cd5ed.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/839135d04a097cea.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/87c72f23c47212b9.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/916d3686010a8de2.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/9a881e2ac07d406b.p.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/b60fc9d2d030b5e6.woff2",revision:"68abb62ac9254f94e38e508ee2061c7c"},{url:"/_next/static/media/b89f66ecdb077e7f.p.woff2",revision:"12bb96876fc38b93380a6cc76267bd0b"},{url:"/_next/static/media/c92ff110d0ef9b86.woff2",revision:"5c9d4e296e6b27bdc0f9e6355fea368c"},{url:"/_next/static/media/d869208648ca5469.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/dc9ab78c2735f6b0.woff2",revision:"90b0ebbdf04ea023653ea1364c598160"},{url:"/_next/static/media/default_user.c1d1a307.png",revision:"1a817a95a42d8c43031378d122a05ffe"},{url:"/_next/static/media/f93b79c1ea023ab6.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/_next/static/media/logo.cbc19948.png",revision:"6a1dccc77d8d1fdd4e9d790b61a4eb4a"},{url:"/_next/static/media/not_found.d03bb98f.svg",revision:"9f9ad50373e1ac230bb5aa3a97d41cc9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const a=s.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

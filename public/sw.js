if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1e5d055ab4ed12c7a95b64a5a1468516"},{url:"/_next/static/Bdbrc3enk9paN5Ox7hlfm/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/Bdbrc3enk9paN5Ox7hlfm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-9a2eb11a9f9895c2.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/17-67a859190270453e.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/1bfc9850-6c03144971326d2c.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/252f366e-0a3a29eb094d63d5.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/257-9937a4a49a4e0e49.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/438-d7522bb999805ffe.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/468.1ce35aecb882f83e.js",revision:"1ce35aecb882f83e"},{url:"/_next/static/chunks/475-0c5a3e98b8d502be.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/617.b7e74b27cacdc6d2.js",revision:"b7e74b27cacdc6d2"},{url:"/_next/static/chunks/ae51ba48-0c7908aeb38f1999.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/app/head-fbf0b755a1944d43.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/app/layout-578ab96290bffc8d.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/app/page-97b4714a8b13b75e.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/main-app-f7bfe08c04d7df3e.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/main-ee0a08d1223fd122.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8a02fa1dd04d5492.js",revision:"Bdbrc3enk9paN5Ox7hlfm"},{url:"/_next/static/css/1b1cf59279a9b628.css",revision:"1b1cf59279a9b628"},{url:"/_next/static/css/30cb8d8503993330.css",revision:"30cb8d8503993330"},{url:"/_next/static/css/f0276c73e21e00fe.css",revision:"f0276c73e21e00fe"},{url:"/_next/static/media/2c91708671b37a8b.woff2",revision:"5808d1b0c3a511815cbe3f566c9b0e24"},{url:"/_next/static/media/b60fc9d2d030b5e6.woff2",revision:"68abb62ac9254f94e38e508ee2061c7c"},{url:"/_next/static/media/b89f66ecdb077e7f.p.woff2",revision:"12bb96876fc38b93380a6cc76267bd0b"},{url:"/_next/static/media/c92ff110d0ef9b86.woff2",revision:"5c9d4e296e6b27bdc0f9e6355fea368c"},{url:"/_next/static/media/dc9ab78c2735f6b0.woff2",revision:"90b0ebbdf04ea023653ea1364c598160"},{url:"/_next/static/media/logo.cbc19948.png",revision:"6a1dccc77d8d1fdd4e9d790b61a4eb4a"},{url:"/assets/logo.png",revision:"6a1dccc77d8d1fdd4e9d790b61a4eb4a"},{url:"/favicon.ico",revision:"f9fefd239a9bef0f31c7069555cac374"},{url:"/icons/android-chrome-192x192.png",revision:"4cbc07a4fdeab81892ee9934fb756543"},{url:"/icons/android-chrome-512x512.png",revision:"8d8a2e315bae295f5f31ef74122037f7"},{url:"/icons/apple-touch-icon.png",revision:"9753092ffc74ade12889aa2301adf234"},{url:"/icons/favicon-16x16.png",revision:"b6fcdd56b45590193eee2c4f2c17c47c"},{url:"/icons/favicon-32x32.png",revision:"dfb6188680254c3dd725affd1f7c8334"},{url:"/icons/logo192.png",revision:"e01b8e7fa85e47726e49a6c91d90f086"},{url:"/icons/logo256.png",revision:"74aeab33d237fd8e132fbb944392c064"},{url:"/icons/logo384.png",revision:"a21028a3036b15e36536f035e349ab8b"},{url:"/icons/logo512.png",revision:"262b1b957c4e04cff6bc0506914b0fea"},{url:"/icons/maskable.png",revision:"c38422b709ea5d0676b2e13d4eaad38e"},{url:"/manifest.json",revision:"f845d969fe8d610b39e8e3ae4ba606c1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>n(e,a),o={module:{uri:a},exports:i,require:r};s[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0c428ae2-9a2eb11a9f9895c2.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/1bfc9850-d7e450f4c3651dc3.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/252f366e-0a3a29eb094d63d5.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/459-aea0c9afcf3b5358.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/468.1ce35aecb882f83e.js",revision:"1ce35aecb882f83e"},{url:"/_next/static/chunks/475-815beb42152c49aa.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/589-d2f21285728f9445.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/617.b7e74b27cacdc6d2.js",revision:"b7e74b27cacdc6d2"},{url:"/_next/static/chunks/785-dbcf721b756d0f1f.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/ae51ba48-0c7908aeb38f1999.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/app/head-c18786859035b5cc.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/app/layout-c31a596afe8e30fd.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/app/page-9af5ccbf28166866.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/d64684d8-6d59cac86169ebb0.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/main-app-1760427bd6b4caf0.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/main-dabadf019719dbce.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-bd4040e6aec2dd98.js",revision:"n5V7n88OpVVf4dvb7zK0u"},{url:"/_next/static/css/1b1cf59279a9b628.css",revision:"1b1cf59279a9b628"},{url:"/_next/static/css/781076089e509557.css",revision:"781076089e509557"},{url:"/_next/static/css/f0276c73e21e00fe.css",revision:"f0276c73e21e00fe"},{url:"/_next/static/media/2c91708671b37a8b.woff2",revision:"5808d1b0c3a511815cbe3f566c9b0e24"},{url:"/_next/static/media/b60fc9d2d030b5e6.woff2",revision:"68abb62ac9254f94e38e508ee2061c7c"},{url:"/_next/static/media/b89f66ecdb077e7f.p.woff2",revision:"12bb96876fc38b93380a6cc76267bd0b"},{url:"/_next/static/media/c92ff110d0ef9b86.woff2",revision:"5c9d4e296e6b27bdc0f9e6355fea368c"},{url:"/_next/static/media/dc9ab78c2735f6b0.woff2",revision:"90b0ebbdf04ea023653ea1364c598160"},{url:"/_next/static/media/logo.cbc19948.png",revision:"6a1dccc77d8d1fdd4e9d790b61a4eb4a"},{url:"/_next/static/n5V7n88OpVVf4dvb7zK0u/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/n5V7n88OpVVf4dvb7zK0u/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:s})=>{if(!e)return!1;const n=s.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e,sameOrigin:s})=>!!s&&!e.pathname.startsWith("/api/")),new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

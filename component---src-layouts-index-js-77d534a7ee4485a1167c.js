webpackJsonp([0x67ef26645b2a,60335399758886],{120:function(e,t){e.exports={layoutContext:{}}},230:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),i=r(o),s=n(236),l=r(s),u=n(120),c=r(u);t.default=function(e){return i.default.createElement(l.default,a({},e,c.default))},e.exports=t.default},233:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Gatstrap",description:"Gatsby starter for bootstrap a blog",siteUrl:"https://jaxx2104.github.io/gatsby-starter-bootstrap",author:"jaxx2104",twitter:"jaxx2104"},pathPrefix:"/gatsby-starter-bootstrap",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatstrap",short_name:"Gatstrap",start_url:"/gatsby-starter-bootstrap",background_color:"#fff",theme_color:"#673ab7",display:"minimal-ui"}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-24867215-7"}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                site_url: url\n              }\n            }\n          }\n        ",feeds:[{output:"/rss.xml"}]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(t,"/")},320:function(e,t){},321:function(e,t){},319:function(e,t,n){var r;!function(a,o){r=function(){return o(a)}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}(this,function(e){"use strict";var t,n,r,a,o,i,s,l,u,c,f={},p=function(){},d=function(){return"querySelectorAll"in document},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},g=function(e){var t=e.offsetWidth,n=e.offsetHeight,r=0,a=0;do isNaN(e.offsetTop)||(r+=e.offsetTop),isNaN(e.offsetLeft)||(a+=e.offsetLeft);while(null!==(e=e.offsetParent));return{width:t,height:n,top:r,left:a}},h=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}},b=function(e){return e!==window?{x:e.scrollLeft+g(e).left,y:e.scrollTop+g(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}},y=function(e){return null===e.offsetParent},v=function(e){if(y(e))return!1;var t=g(e),r=h(n),a=b(n),o=t.width,f=t.height,p=t.top,d=t.left,m=p+f,v=d+o,w=function(){var e=p+f*i,t=v-o*i,n=m-f*i,g=d+o*i,h=a.y+s,b=a.x-l+r.width,y=a.y-u+r.height,w=a.x+c;return e<y&&n>h&&g<b&&t>w};return w()},w=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},r))};return f.init=function(e){e=e||{};var t=function(e,t){return parseInt(e||t,10)},f=function(e,t){return parseFloat(e||t)};n=e.container||window,a="undefined"==typeof e.reset||e.reset,o="undefined"==typeof e.handheld||e.handheld,r=t(e.throttle,250),i=f(e.elemCushion,.15),s=t(e.offsetTop,0),l=t(e.offsetRight,0),u=t(e.offsetBottom,0),c=t(e.offsetLeft,0),p=e.callback||p,d()?(m()&&o||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",w,!1),n.addEventListener("scroll",w,!1),n.addEventListener("resize",w,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&w()}),n.attachEvent("onscroll",w),n.attachEvent("onresize",w))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,r=0;r<n;r++)e=t[r],v(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,p(e,"visible")):a===!0?(e.setAttribute("data-emergence","hidden"),e.className=e.className,p(e,"reset")):a===!1&&p(e,"noreset");n||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",w,!1),n.removeEventListener("resize",w,!1)):(n.detachEvent("onscroll",w),n.detachEvent("onresize",w)),clearTimeout(t)},f})},322:function(e,t){},234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),l=r(s),u=n(14),c=r(u),f=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return l.default.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},l.default.createElement("div",{className:"container"},l.default.createElement(c.default,{className:"text-center",to:"/"},l.default.createElement("h1",{className:"navbar-brand mb-0"},n)),l.default.createElement("div",{className:"navbar-nav-scroll"},l.default.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},l.default.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/",className:"nav-link"},"Home")),l.default.createElement("li",{className:"/profile/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/profile/",className:"nav-link"},"Profile")))),l.default.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(l.default.Component);t.default=f,e.exports=t.default},426:function(e,t){},236:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),u=r(l),c=n(14),f=(r(c),n(233)),p=n(234),d=r(p),m=n(319),g=r(m);n(426),n(320),n(322),n(321);var h=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentDidUpdate=function(){g.default.init()},t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return u.default.createElement("div",null,u.default.createElement(d.default,s({title:f.siteMetadata.title},this.props)),t())},t}(u.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-77d534a7ee4485a1167c.js.map
webpackJsonp([0x67ef26645b2a,60335399758886],{127:function(e,t){e.exports={layoutContext:{}}},273:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),s=n(279),l=r(s),u=n(127),c=r(u);t.default=function(e){return i.default.createElement(l.default,o({},e,c.default))},e.exports=t.default},276:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Gatstrap",description:"Gatsby starter for bootstrap a blog",url:"https://jaxx2104.github.io/gatsby-starter-bootstrap",author:"jaxx2104",twitter:"jaxx2104"},pathPrefix:"/gatsby-starter-bootstrap",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatstrap",short_name:"Gatstrap",start_url:"/gatsby-starter-bootstrap",background_color:"#fff",theme_color:"#673ab7",display:"minimal-ui"}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-24867215-7"}},{resolve:"gatsby-plugin-feed",options:{query:"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                site_url: url\n              }\n            }\n          }\n        ",feeds:[{query:'\n            {\n              remark: allMarkdownRemark{\n                posts: edges {\n                  post: node {\n                    html\n                    frontmatter {\n                      layout\n                      title\n                      path\n                      categories\n                      description\n                      date(formatString: "YYYY/MM/DD")\n                    }\n                  }\n                }\n              }\n            }\n          ',output:"/rss.xml"}]}},"gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-transformer-sharp"]}}).call(t,"/")},360:function(e,t){},361:function(e,t){},359:function(e,t,n){var r;!function(o,a){r=function(){return a(o)}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}(this,function(e){"use strict";var t,n,r,o,a,i,s,l,u,c,f={},d=function(){},p=function(){return"querySelectorAll"in document},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},h=function(e){var t=e.offsetWidth,n=e.offsetHeight,r=0,o=0;do isNaN(e.offsetTop)||(r+=e.offsetTop),isNaN(e.offsetLeft)||(o+=e.offsetLeft);while(null!==(e=e.offsetParent));return{width:t,height:n,top:r,left:o}},g=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}},b=function(e){return e!==window?{x:e.scrollLeft+h(e).left,y:e.scrollTop+h(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}},v=function(e){return null===e.offsetParent},y=function(e){if(v(e))return!1;var t=h(e),r=g(n),o=b(n),a=t.width,f=t.height,d=t.top,p=t.left,m=d+f,y=p+a,w=function(){var e=d+f*i,t=y-a*i,n=m-f*i,h=p+a*i,g=o.y+s,b=o.x-l+r.width,v=o.y-u+r.height,w=o.x+c;return e<v&&n>g&&h<b&&t>w};return w()},w=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},r))};return f.init=function(e){e=e||{};var t=function(e,t){return parseInt(e||t,10)},f=function(e,t){return parseFloat(e||t)};n=e.container||window,o="undefined"==typeof e.reset||e.reset,a="undefined"==typeof e.handheld||e.handheld,r=t(e.throttle,250),i=f(e.elemCushion,.15),s=t(e.offsetTop,0),l=t(e.offsetRight,0),u=t(e.offsetBottom,0),c=t(e.offsetLeft,0),d=e.callback||d,p()?(m()&&a||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",w,!1),n.addEventListener("scroll",w,!1),n.addEventListener("resize",w,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&w()}),n.attachEvent("onscroll",w),n.attachEvent("onresize",w))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,r=0;r<n;r++)e=t[r],y(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,d(e,"visible")):o===!0?(e.setAttribute("data-emergence","hidden"),e.className=e.className,d(e,"reset")):o===!1&&d(e,"noreset");n||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",w,!1),n.removeEventListener("resize",w,!1)):(n.detachEvent("onscroll",w),n.detachEvent("onresize",w)),clearTimeout(t)},f})},362:function(e,t){},277:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),l=r(s),u=n(30),c=r(u),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return l.default.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},l.default.createElement("div",{className:"container"},l.default.createElement(c.default,{className:"text-center",to:"/"},l.default.createElement("h1",{className:"navbar-brand mb-0"},n)),l.default.createElement("div",{className:"navbar-nav-scroll"},l.default.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},l.default.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/",className:"nav-link"},"Home")),l.default.createElement("li",{className:"/profile/"===t.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/profile/",className:"nav-link"},"Profile")))),l.default.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(l.default.Component);t.default=f,e.exports=t.default},463:function(e,t){},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),u=r(l),c=n(30),f=(r(c),n(276)),d=n(277),p=r(d),m=n(359),h=r(m);n(463),n(360),n(362),n(361);var g=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentDidUpdate=function(){h.default.init()},t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return u.default.createElement("div",null,u.default.createElement(p.default,s({title:f.siteMetadata.title},this.props)),t())},t}(u.default.Component);t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-a6be09ddcb42a5907889.js.map
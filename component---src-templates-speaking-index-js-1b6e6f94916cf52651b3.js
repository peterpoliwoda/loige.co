(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(e,t,a){"use strict";a.r(t);a(195),a(197);var n=a(7),r=a.n(n),i=(a(82),a(0)),o=a.n(i),l=a(163),c=a(36),s=a(182),m=a(164),p=a(169),d=a(165),u=a(289),h=a.n(u),g=(a(27),function(e){return o.a.createElement("svg",Object.assign({"aria-hidden":"true","data-prefix":"fas","data-icon":"images",className:"svg-inline--fa fa-images fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),o.a.createElement("path",{fill:"currentColor",d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"}))}),f=function(e){return o.a.createElement("svg",Object.assign({"aria-hidden":"true","data-prefix":"fas","data-icon":"video",className:"svg-inline--fa fa-video fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),o.a.createElement("path",{fill:"currentColor",d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"}))},v=(a(88),a(38)),b=a.n(v),E=Object(l.b)("div",{target:"e1gps5zz0"})("width:100%;height:30vh;min-height:300px;max-height:900px;background:#46c9e5;&.collapsed{height:0;min-height:0;max-height:0;}"),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={events:t.events},a.createMap=a.createMap.bind(b()(b()(a))),a}r()(t,e);var a=t.prototype;return a.createMap=function(){var e=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',subdomains:"abcd",minZoom:1,maxZoom:16,ext:"png"}),t=L.map("speaking_map").setView([51.505,-.09],3);e.addTo(t);var a=L.markerClusterGroup({maxClusterRadius:20});this.state.events.forEach(function(e){var t=e.frontmatter.event_location_gps.split(",").map(parseFloat);L.marker(t).bindPopup("<b>"+e.frontmatter.event_name+"</b><br/><em>"+e.frontmatter.title+"</em><br/>"+e.frontmatter.date).addTo(a)}),a.addTo(t)},a.shouldComponentUpdate=function(){return!this.state.loaded},a.componentDidMount=function(){this.setState({loaded:!0});var e=document.createElement("script");e.type="text/javascript",e.src="/resources/leaflet/leaflet.js";var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="/resources/leaflet/leaflet.css",document.head.appendChild(e),document.head.appendChild(t),e.onload=this.createMap.bind(this)},a.render=function(){return o.a.createElement(E,{className:this.state.loaded?null:"collapsed",id:"speaking_map"})},t}(i.Component),x=a(167);a.d(t,"pageQuery",function(){return z});var y=Object(l.b)("div",{target:"e1iccc0a0"})("margin:2em auto;padding-left:20px;padding-right:20px;max-width:820px;flex-direction:column;font-size:16px;@media (min-width:780px){width:90%;font-size:17px;}h2{margin:2em 0 1em 0;color:#46c9e5;border:none;}h3{margin:0;padding:1em 0 0 0;}p,ul{line-height:1.7;margin:1em 0 0 0;max-width:42em;}p.slides-video{margin:1em 0 0 0;a{display:inline-block;margin:0 0 0 1em;&:first-of-type{margin:0;}svg{vertical-align:text-bottom;}}}ul.topics{padding:0 0 0 2em;a{font-weight:bold;}}ul.events{list-style:none;li{border-top:1px solid #ececec;margin-top:2em;padding-top:2em;line-height:1.2;&:first-of-type{border-top:none;margin-top:0;padding-top:0;}}}"),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.event.frontmatter,t=function(e){var t={comaSeparated:null,and:null,length:e.length};if(1===e.length)t.comaSeparated=e;else{var a=e[e.length-1];t.comaSeparated=e.slice(0,e.length-1),t.and=a}return t}(e.with);return o.a.createElement("div",{className:"event-wrapper",itemScope:!0,itemType:"http://schema.org/Event"},o.a.createElement("h3",{className:"event-title",itemProp:"name"},e.title,e.is_workshop?" (workshop)":""),o.a.createElement("p",{style:{marginTop:"1em"}},o.a.createElement("span",null,o.a.createElement("a",{itemProp:"url",href:e.event_link,rel:"nofollow noopener noreferrer",target:"_blank"},e.event_name)," ","(",o.a.createElement("span",{itemProp:"location",itemScope:!0,itemType:"http://schema.org/Place"},o.a.createElement("span",{itemProp:"name"},e.event_city),o.a.createElement("span",{"aria-hidden":"true",style:{display:"none"},itemProp:"address"},e.event_location)),")"),"  - ",o.a.createElement("span",{itemProp:"startDate"},e.date),t.length>0&&o.a.createElement("span",null,"  - with"," ",t.comaSeparated.map(function(e,a){return o.a.createElement(i.Fragment,{key:e.name},o.a.createElement("a",{href:e.link,rel:"nofollow noopener noreferrer",target:"_blank"},e.name),a<t.comaSeparated.length-1&&", ")}),t.and&&o.a.createElement(i.Fragment,null," and"," ",o.a.createElement("a",{href:t.and.link,rel:"nofollow noopener noreferrer",target:"_blank"},t.and.name)))),(e.slides_link||e.video_link)&&o.a.createElement("p",{className:"slides-video"},e.slides_link&&o.a.createElement("a",{href:e.slides_link,rel:"nofollow noopener noreferrer",target:"_blank"},o.a.createElement(g,null)," Slides")," ",e.video_link&&o.a.createElement("a",{href:e.video_link,rel:"nofollow noopener noreferrer",target:"_blank"},o.a.createElement(f,null)," Video")))},t}(i.Component),S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=Object(s.get)(this,"props.data.site.siteMetadata.title"),t=this.props.pageContext.events,a=function(e){var t=(new Date).toISOString(),a=[],n=[];return e.forEach(function(e){e.frontmatter.originalDate>=t?a.unshift(e):n.push(e)}),{future:a,past:n}}(t),n=a.future,r=a.past;return o.a.createElement(p.a,{location:this.props.location,section:"speaking"},o.a.createElement(m.a,{path:"speaking/",pageData:{frontmatter:{title:"Speaking events: conference talks and workshops - "+e}}}),o.a.createElement(d.a,{className:"small gradientOverlay",backgroundImage:h.a},o.a.createElement("h1",null,"Speaking")),o.a.createElement(y,null,o.a.createElement(x.a,null,o.a.createElement("p",null,"I am quite involved with conferences and I love delivering technical talks and workshops."),o.a.createElement("p",null,"Lately I have been focusing on the following topics:"),o.a.createElement("ul",{className:"topics"},o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/tag/node-js"},"Node.js"),","," ",o.a.createElement(c.Link,{to:"/tag/javascript"},"JavaScript")," and"," ",o.a.createElement(c.Link,{to:"/tag/design-patterns"},"Design Patterns")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/tag/serverless"},"Serverless")," and"," ",o.a.createElement(c.Link,{to:"/tag/aws"},"AWS")),o.a.createElement("li",null,o.a.createElement("strong",null,"Systems architecture")," and"," ",o.a.createElement(c.Link,{to:"/tag/scalability"},"Scalability"))),o.a.createElement("p",null,"If you think I can be a good suit to talk or host a workshop, you can"," ",o.a.createElement("strong",null,o.a.createElement("a",{href:"http://loige.link/invite-me-to-a-conference",target:"_blank",rel:"nofollow noopener noreferrer"},"📩 invite me to your next cool conference")),"."),o.a.createElement("p",null,"Here you can find a list of my future and past engagements."))),o.a.createElement(k,{events:t}),o.a.createElement(y,null,o.a.createElement(x.a,null,o.a.createElement("h2",null,"Upcoming events"),n.length>0&&o.a.createElement("ul",{className:"events"},n.map(function(e){return o.a.createElement("li",{key:e.frontmatter.slug},o.a.createElement(w,{event:e}))})),0===n.length&&o.a.createElement("p",null,"No future events planned at this time :("),o.a.createElement("h2",null,"Past events (",r.length,")"),o.a.createElement("ul",{className:"events"},r.map(function(e){return o.a.createElement("li",{key:e.frontmatter.slug},o.a.createElement(w,{event:e}))})))))},t}(i.Component),z=(t.default=S,"1652182481")},165:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(163),c=a(166),s=a.n(c),m=Object(l.b)("div",{target:"ea1ziiz0"})("background-color:#46c9e5;background-repeat:no-repeat;background-position:center;background-size:cover;width:100%;min-height:300px;height:50vh;display:table;&.small{max-height:300px;}&.tiledBg{background-size:auto;background-repeat:repeat;}&.bottomRightBg{background-position:bottom right;}&.gradientOverlay{position:relative;z-index:-2;&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#46c9e5,#d26ac2);opacity:0.6;z-index:-1;}}@media (min-width:780px){height:70vh;}"),p=Object(l.b)("div",{target:"ea1ziiz1"})("display:table-cell;vertical-align:middle;text-align:center;font-weight:700;color:#fff;padding:0 2em;color:white;text-shadow:1px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;@media (min-width:780px){font-size:1.2em;}h1{font-size:2em;line-height:1.6em;}h2{font-size:1.5em;margin:0.5em 0 0 0;line-height:1.6em;}&.textOverlay > * > span{background:#000000c4;display:inline;padding:0.2em;box-decoration-break:clone;-webkit-box-decoration-break:clone;}"),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.isSmall,e.children),a=e.className,n=this.props.backgroundImage||s.a;return o.a.createElement(m,{className:a,style:{backgroundImage:"url("+n+")"}},o.a.createElement(p,{className:a},t))},t}(i.Component);t.a=d},166:function(e,t,a){e.exports=a.p+"static/default-bg-e7d1dfbd3202e36e2d9d70dfd5a77122.jpg"},195:function(e,t,a){"use strict";a(196)("link",function(e){return function(t){return e(this,"a","href",t)}})},196:function(e,t,a){var n=a(11),r=a(19),i=a(20),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},197:function(e,t,a){var n=a(28).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},289:function(e,t,a){e.exports=a.p+"static/speaking-bg-b3fa54c7a0352de7f7ab61fed7f8b40c.jpg"}}]);
//# sourceMappingURL=component---src-templates-speaking-index-js-1b6e6f94916cf52651b3.js.map
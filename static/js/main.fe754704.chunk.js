(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{333:function(t,e,n){t.exports=n(681)},679:function(t,e,n){},681:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(20),c=n(39),s=n(24),i="POSTS_LOADED",l="POST_LOADED",u="DATE_DIRECTION_CHANGED",p="VIEWS_DIRECTION_CHANGED",d=n(110),h={dateDirection:null,viewsDirection:null,remotePosts:[],currentPost:{}};var m=n(311),f=n(182),b=n(312),O=n.n(b),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,v=O()(),y=Object(s.e)(Object(d.a)(v)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;return e.type===i?Object.assign({},t,{remotePosts:t.remotePosts.concat(e.payload)}):e.type===l?Object.assign({},t,{currentPost:e.payload}):e.type===p?Object.assign({},t,{viewsDirection:e.payload,dateDirection:null}):e.type===u?Object.assign({},t,{viewsDirection:null,dateDirection:e.payload}):t}),E(Object(s.a)(Object(f.a)(v),m.a))),j=n(685),D=n(684),w=n(54),g=n(55),P=n(57),k=n(56),C=n(58),x=function(t){function e(){return Object(w.a)(this,e),Object(P.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(C.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,"page not found")}}]),e}(a.Component),N=n(682),T=function(t){function e(){return Object(w.a)(this,e),Object(P.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(C.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Hello, how are you?"),o.a.createElement(N.a,{to:"/posts"},"To posts table"))}}]),e}(a.Component),_=Object(c.c)(null,null)(T),A=n(79),M=n.n(A),S=n(168),I=n(169),H=n.n(I),B=14e11,Y=Date.now()-B,L=2,R=3;function V(t){!function(t){t.views=Math.round(1e3*Math.random())}(t),function(t){t.createdAt=B+Math.round(Math.random()*Y)}(t)}var z=n(313),G=n.n(z),J=n(331),U=n.n(J),X=function(t){function e(){return Object(w.a)(this,e),Object(P.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(C.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var t=this;return o.a.createElement(G.a,{columns:[{title:"Title",field:"title",sorting:!1},{title:"Text",field:"body",sorting:!1,render:function(t){return t.body.slice(0,30)+"..."}},{title:"Views",field:"views",type:"numeric",searchable:!1,defaultSort:this.props.viewsDirection},{title:"CreatedAt",field:"createdAt",type:"date",defaultSort:this.props.dateDirection,searchable:!1,render:function(t){return U()(t.createdAt).format("DD MMM YYYY HH:mm")}}],actions:[{icon:"info",tooltip:"details",onClick:function(e,n){t.props.history.push("/posts/".concat(n.id))}}],onOrderChange:function(e,n){t.props.changeDirection(e,n)},data:this.props.posts,title:"Posts",localization:{header:{actions:"Details"}},options:{actionsColumnIndex:-1,columnsButton:!1,exportButton:!1,pageSize:10}})}}]),e}(a.Component);var K=Object(c.c)(function(t){return{posts:t.remotePosts,dateDirection:t.dateDirection,viewsDirection:t.viewsDirection}},{getPosts:function(){return function(){var t=Object(S.a)(M.a.mark(function t(e){var n,a;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.a.get("https://jsonplaceholder.typicode.com/posts");case 3:n=t.sent,(a=n.data).forEach(function(t){return V(t)}),e({type:i,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},changeDirection:function(t,e){return function(n){t===L&&n({type:p,payload:e}),t===R&&n({type:u,payload:e})}}})(X),W=n(52),q=n.n(W),F=(n(679),function(t){function e(){var t,n;Object(w.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(P.a)(this,(t=Object(k.a)(e)).call.apply(t,[this].concat(o)))).backToPosts=function(){n.props.history.push("/posts")},n}return Object(C.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;isNaN(t)&&this.props.history.push("/posts"),this.props.getPost(t)}},{key:"render",value:function(){return o.a.createElement("div",null,this.props.post.body?o.a.createElement("div",null,o.a.createElement("table",{className:"tbl"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"w80"},"id"),o.a.createElement("th",{className:"w80"},"User id"),o.a.createElement("th",{className:"w200"},"Title"),o.a.createElement("th",null,"Text")),o.a.createElement("tr",null,o.a.createElement("td",null,this.props.post.id),o.a.createElement("td",null,this.props.post.userId),o.a.createElement("td",null,this.props.post.title),o.a.createElement("td",null,this.props.post.body))))):o.a.createElement("div",null),o.a.createElement(q.a,{variant:"contained",className:"btn",onClick:this.backToPosts},"BACK"))}}]),e}(a.Component));var Q=Object(c.c)(function(t){return{post:t.currentPost}},{getPost:function(t){return function(){var e=Object(S.a)(M.a.mark(function e(n){var a,o;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t));case 3:a=e.sent,o=a.data,n({type:l,payload:o}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()}})(F),Z=function(){return o.a.createElement("div",{className:"row mt-5"},o.a.createElement(j.a,null,o.a.createElement(D.a,{exact:!0,path:"/",component:_}),o.a.createElement(D.a,{exact:!0,path:"/posts",component:K}),o.a.createElement(D.a,{exact:!0,path:"/posts/:id",component:Q}),o.a.createElement(D.a,{path:"*",component:x})))},$=n(683);Object(r.render)(o.a.createElement(c.a,{store:y},o.a.createElement($.a,null,o.a.createElement(Z,null))),document.getElementById("root"))}},[[333,2,1]]]);
//# sourceMappingURL=main.fe754704.chunk.js.map
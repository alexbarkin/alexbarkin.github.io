(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n);a(195);var c=40,o=10,s=[],i=[],l=[],u=[],h=[],v=[],d=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={x:i,y:l,is_up:h,is_left:u,ctx:null},a.moveObjects=function(){a.state.ctx.clearRect(0,0,a.state.ctx.canvas.width,a.state.ctx.canvas.height);for(var t=a.state.is_up,e=a.state.is_left,n=a.state.y,r=a.state.x,i=0;i<o;i++){n[i]+c>a.state.ctx.canvas.height&&(t[i]=!0),n[i]<0&&(t[i]=!1),r[i]+c>a.state.ctx.canvas.width&&(e[i]=!0),r[i]<0&&(e[i]=!1),n[i]=n[i]+(t[i]?-s[i]:s[i]),r[i]=r[i]+(e[i]?-s[i]:s[i]);var l=a.state.ctx;l.fillStyle=a.colour[i],a.setState({ctx:l}),a.state.ctx.fillRect(r[i],n[i],c,c),a.setState({y:n,x:r})}a.setState({is_left:e,is_up:t})},a.getRandomColor=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},a.canvasRef=r.a.createRef(),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var d=n.prototype;return d.componentDidMount=function(){var t=this,e=this.canvasRef.current.getContext("2d");this.setState({ctx:e}),e.canvas.width=.8*window.innerWidth,e.canvas.height=.8*window.innerHeight;for(var a=0;a<o;a++)s[a]=4*Math.random(),i[a]=Math.random()*e.canvas.width,l[a]=Math.random()*e.canvas.height,u[a]=Boolean(Math.random()>.5),h[a]=Boolean(Math.random()>.5),v[a]=this.getRandomColor();this.colour=v,setInterval((function(){t.moveObjects()}),10)},d.render=function(){return r.a.createElement("body",null,r.a.createElement("canvas",{className:"canvas",ref:this.canvasRef}),r.a.createElement("div",{className:"verticalContainer"},r.a.createElement("a",{className:"launch",href:"/About"},"Launch")))},n}(r.a.Component);a(206);a.d(e,"query",(function(){return f}));e.default=function(t){return r.a.createElement("div",null,r.a.createElement("h1",{className:"index--title"},"Alex's Website"),r.a.createElement(d,null))};var f="726786251"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-482a315aba749c25948f.js.map
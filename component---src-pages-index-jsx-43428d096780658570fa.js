(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n);a(111);var c=40,s=10,o=[],i=[],l=[],h=[],u=[],v=[],f=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={x:i,y:l,is_up:u,is_left:h,ctx:null},a.moveObjects=function(){a.state.ctx.clearRect(0,0,a.state.ctx.canvas.width,a.state.ctx.canvas.height);for(var t=a.state.is_up,e=a.state.is_left,n=a.state.y,r=a.state.x,i=0;i<s;i++){n[i]+c>a.state.ctx.canvas.height&&(t[i]=!0),n[i]<0&&(t[i]=!1),r[i]+c>a.state.ctx.canvas.width&&(e[i]=!0),r[i]<0&&(e[i]=!1),n[i]=n[i]+(t[i]?-o[i]:o[i]),r[i]=r[i]+(e[i]?-o[i]:o[i]);var l=a.state.ctx;l.fillStyle=a.colour[i],a.setState({ctx:l}),a.state.ctx.fillRect(r[i],n[i],c,c),a.setState({y:n,x:r})}a.setState({is_left:e,is_up:t})},a.getRandomColor=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},a.canvasRef=r.a.createRef(),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var f=n.prototype;return f.componentDidMount=function(){var t=this,e=this.canvasRef.current.getContext("2d");this.setState({ctx:e}),e.canvas.width=.8*window.innerWidth,e.canvas.height=.8*window.innerHeight;for(var a=0;a<s;a++)o[a]=4*Math.random(),i[a]=Math.random()*e.canvas.width,l[a]=Math.random()*e.canvas.height,h[a]=Boolean(Math.random()>.5),u[a]=Boolean(Math.random()>.5),v[a]=this.getRandomColor();this.colour=v,setInterval((function(){t.moveObjects()}),10)},f.render=function(){return r.a.createElement("figure",{className:"container--graphics"},r.a.createElement("canvas",{className:"canvas",ref:this.canvasRef}),r.a.createElement("div",{className:"verticalContainer"},r.a.createElement("a",{className:"launch",href:"/About"},"Launch")))},n}(r.a.Component);a(230);a.d(e,"query",(function(){return d}));e.default=function(t){return r.a.createElement("div",null,r.a.createElement("h1",{className:"index--title"},"Alex's Website"),r.a.createElement(f,null))};var d="726786251"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-43428d096780658570fa.js.map
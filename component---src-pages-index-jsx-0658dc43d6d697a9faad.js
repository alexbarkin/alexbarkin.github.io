(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(192);a(195);var r=40,i=5*Math.random()+2,o=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={x:0,y:0,is_up:!1,is_left:!1,ctx:null},a.moveObjects=function(){a.state.ctx.clearRect(0,0,a.state.ctx.canvas.width,a.state.ctx.canvas.height);var t=a.state.is_up,e=a.state.is_left;a.state.y+r>a.state.ctx.canvas.height&&(t=!0),a.state.y<0&&(t=!1),a.state.x+r>a.state.ctx.canvas.width&&(e=!0),a.state.x<0&&(e=!1),a.setState({is_left:e,is_up:t,y:a.state.y+(a.state.is_up?-i:i),x:a.state.x+(a.state.is_left?-i:i)}),a.state.ctx.fillRect(a.state.x,a.state.y,r,r)},a.canvasRef=s.a.createRef(),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var t=this,e=this.canvasRef.current.getContext("2d");this.setState({ctx:e}),e.canvas.width=.8*window.innerWidth,e.canvas.height=.8*window.innerHeight,setInterval((function(){t.moveObjects()}),10)},o.render=function(){return s.a.createElement("body",null,s.a.createElement("canvas",{class:"canvas",ref:this.canvasRef}),s.a.createElement("div",{className:"verticalContainer"},s.a.createElement(c.a,{className:"launch",to:"./About/"},"Launch")))},n}(s.a.Component);a(196);a.d(e,"query",(function(){return u}));e.default=function(t){return s.a.createElement("body",null,s.a.createElement("h1",{className:"index--title"},"Alex's Website"),s.a.createElement(o,null))};var u="726786251"},191:function(t,e,a){var n;t.exports=(n=a(193))&&n.default||n},192:function(t,e,a){"use strict";var n=a(0),s=a.n(n),c=a(65),r=a.n(c);a.d(e,"a",(function(){return r.a}));a(191),a(7).default.enqueue,s.a.createContext({})},193:function(t,e,a){"use strict";a.r(e);a(22);var n=a(0),s=a.n(n),c=a(92);e.default=function(t){var e=t.location,a=t.pageResources;return a?s.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0658dc43d6d697a9faad.js.map
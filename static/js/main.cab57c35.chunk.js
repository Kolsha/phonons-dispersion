(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(4),i=a.n(r),l=a(5),c=a(6),s=a(8),u=a(7),h=a(9),m=a(10),p=a.n(m),d=a(3),f=Math.pow(10,8);function y(e,t,a){var n=a.m1*a.m2,o=2*a.C/n,r=(a.m1+a.m2)/2,i=Math.sqrt(Math.pow(a.m1-a.m2,2)/4+n*Math.pow(Math.cos(t*a.a),2)),l=r;return l+=e?i:-i,l*=o,Math.sqrt(l)}function b(e,t,a){return"x"===t.toLowerCase()?function(e,t){var a=3*Math.sqrt(50),n=[{x:[],y:[],marker:{size:28,color:[]},name:"Acoustic",mode:"lines+markers"},{x:[],y:[],marker:{size:28,color:[]},name:"Optical",mode:"lines+markers"}],o=y(!1,t.currQ/f,t),r=y(!0,t.currQ/f,t),i=1,l=1;t.m1>t.m2?i=-t.m2/t.m1:t.m1<t.m2&&(l=-t.m1/t.m2);for(var c=1;c<=t.ball_count;c++){var s=0,u=0,h="black",m="blue";c%2===1?(h="black",m="blue",u=i*a*Math.cos(2*t.currQ*t.a*c-o*e/t.acousticWMax)+50*(c-1),s=Math.abs(t.currQ-Math.PI/(2*t.a)*f)<.2?50*(c-1):i*a*Math.cos(2*t.currQ*t.a*c-r*e/t.opticalWMax)+50*(c-1)):(h="yellow",m="red",s=l*a*Math.cos(2*t.currQ*t.a*c-r*e/t.opticalWMax)+50*(c-1),u=Math.abs(t.currQ-Math.PI/(2*t.a)*f)<.2?50*(c-1):l*a*Math.cos(2*t.currQ*t.a*c-o*e/t.acousticWMax)+50*(c-1)),n[1].marker.color.push(h),n[1].x.push(s),n[1].y.push(100),n[0].marker.color.push(m),n[0].x.push(u),n[0].y.push(300)}return n}(e,a):function(e,t){var a=5*Math.sqrt(100),n=[{x:[],y:[],marker:{size:28,color:[]},name:"Acoustic",mode:"lines+markers"},{x:[],y:[],marker:{size:28,color:[]},name:"Optical",mode:"lines+markers"}],o=y(!1,t.currQ/f,t),r=y(!0,t.currQ/f,t),i=1,l=1;t.m1>t.m2?i=-t.m2/t.m1:t.m1<t.m2&&(l=-t.m1/t.m2);for(var c=1;c<=t.ball_count;c++){var s,u,h=0,m=0,p="black",d="blue";c%2===1?(p="black",d="blue",m=100+i*a*Math.cos(2*t.currQ*t.a*c-o*e/t.acousticWMax),h=Math.abs(t.currQ-Math.PI/(2*t.a)*f)<.2?0:i*a*Math.cos(2*t.currQ*t.a*c-r*e/t.opticalWMax)):(p="yellow",d="red",h=l*a*Math.cos(2*t.currQ*t.a*c-r*e/t.opticalWMax),m=Math.abs(t.currQ-Math.PI/(2*t.a)*f)<.2?100:100+l*a*Math.cos(2*t.currQ*t.a*c-o*e/t.acousticWMax)),s=50*(c-1),u=50*(c-1),m+=200,h+=100,n[1].marker.color.push(p),n[1].x.push(s),n[1].y.push(h),n[0].marker.color.push(d),n[0].x.push(u),n[0].y.push(m)}return n}(e,a)}var g=1.672621777e-24,v=1e3,k=a(16),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={m1:1,m2:2,a:1,C:1,ball_count:6},a.handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:parseFloat(t.value)||0,o=t.name;a.setState(Object(k.a)({},o,n))},a.handleSetupClick=function(){var e=Object.assign({},a.state);e.m1*=g,e.m2*=g,e.C*=v,a.props.newParamsHandler(e)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){console.log("ParamsPanel componentDidUpdate()")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Params:"),o.a.createElement(d.e,null,o.a.createElement(d.f,{addonType:"prepend"},"m1"),o.a.createElement(d.d,{name:"m1",value:this.state.m1,placeholder:"Mass of 1st",type:"number",min:"0.0",max:"100.0",step:"0.1",onChange:this.handleInputChange}),o.a.createElement(d.f,{addonType:"append"}," * Mp")),o.a.createElement("br",null),o.a.createElement(d.e,null,o.a.createElement(d.f,{addonType:"prepend"},"m2"),o.a.createElement(d.d,{name:"m2",value:this.state.m2,placeholder:"Mass of 2d",type:"number",min:"0.0",max:"100.0",step:"0.1",onChange:this.handleInputChange}),o.a.createElement(d.f,{addonType:"append"}," * Mp")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(d.e,null,o.a.createElement(d.f,{addonType:"prepend"},"a"),o.a.createElement(d.d,{name:"a",value:this.state.a,placeholder:"",type:"number",min:"0.0",max:"100.0",step:"0.1",onChange:this.handleInputChange}),o.a.createElement(d.f,{addonType:"append"},"cm^(-8)")),o.a.createElement("br",null),o.a.createElement(d.e,null,o.a.createElement(d.f,{addonType:"prepend"},"C"),o.a.createElement(d.d,{name:"C",value:this.state.C,placeholder:"",type:"number",min:"0.0",max:"100.0",step:"0.1",onChange:this.handleInputChange}),o.a.createElement(d.f,{addonType:"append"},"10^3 erg / cm^2")),o.a.createElement("br",null),o.a.createElement(d.e,null,o.a.createElement(d.f,{addonType:"prepend"},"Ball"),o.a.createElement(d.d,{name:"ball_count",value:this.state.ball_count,placeholder:"",type:"number",min:"2",max:"100",step:"1",onChange:this.handleInputChange}),o.a.createElement(d.f,{addonType:"append"},"Count")),o.a.createElement("br",null),o.a.createElement(d.e,null,o.a.createElement(d.a,{color:"success",onClick:this.handleSetupClick},"Setup")))}}]),t}(n.PureComponent),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isRunning:!0,currentTime:0,axis:"y"},a.startStopClicked=!1,a.axisClicked=!1,a.plot={layout:{autosize:!0,title:"Animation",xaxis:{range:[-20,280]},yaxis:{range:[0,480]},updatemenus:[{buttons:[{args:[""],label:a.state.isRunning?"Stop":"Start",name:"start_stop"},{args:[""],label:a.state.axis,name:"change_axis"}],direction:"left",showactive:!0,type:"buttons",x:.1,xanchor:"left",y:1.1,yanchor:"top"}]},config:{}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){this.startLoop()}},{key:"componentWillUnmount",value:function(){this.stopLoop()}},{key:"startStopAnimation",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"changeAxis",value:function(){this.setState({axis:"x"===this.state.axis?"y":"x"})}},{key:"startLoop",value:function(){this._frameId||(this._frameId=window.requestAnimationFrame(this.loop.bind(this)))}},{key:"loop",value:function(){return this._frameId=window.requestAnimationFrame(this.loop.bind(this)),this.startStopClicked?(this.startStopClicked=!1,this.startStopAnimation()):this.axisClicked?(this.axisClicked=!1,console.log("axisClicked"),this.changeAxis()):void(this.state.isRunning&&this.setState({currentTime:this.state.currentTime+.1}))}},{key:"stopLoop",value:function(){window.cancelAnimationFrame(this._frameId)}},{key:"getScatterData",value:function(){return b(this.state.currentTime,this.state.axis,this.props.animationParams)}},{key:"render",value:function(){var e=this;return this.plot.layout.updatemenus[0].buttons[0].label=this.state.isRunning?"Stop":"Start",this.plot.layout.updatemenus[0].buttons[1].label=this.state.axis,o.a.createElement(p.a,{style:{width:"100%"},data:this.getScatterData(),layout:this.plot.layout,config:this.plot.config,onInitialized:function(t){e.plot.layout=t.layout,e.plot.config=t.config},onUpdate:function(t){e.plot.layout=t.layout,e.plot.config=t.config},onButtonClicked:function(t){"start_stop"===t.button.name&&(e.startStopClicked=!0),"change_axis"===t.button.name&&(e.axisClicked=!0)}})}}]),t}(n.PureComponent),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={params:{m1:1*g,m2:2*g,a:1,C:1*v,currQ:157079632.67948964,ball_count:6}},a.plot={layout:{title:"Dispersion of phonons",hovermode:"closest"},config:{}},a.branches=null,a.handleNewParams=function(e){console.log(e),e.currQ=a.state.params.currQ,a.setState({params:e})},a.handleBranchClick=function(e){if(console.log("click",e),e.points.length){var t=Object.assign({},a.state.params);t.currQ=e.points[0].x,a.setState({params:t})}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setStateInterval=window.setInterval(function(){},Math.floor(90))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.setStateInterval)}},{key:"getScatterData",value:function(){return[this.branches.acoustic,this.branches.optical,this.branches.selected,this.branches.brillouin_zone]}},{key:"render",value:function(){var e=this;this.branches=function(e){for(var t={acoustic:{x:[],y:[],marker:{size:8,color:"blue"},name:"Acoustic",mode:"lines+markers"},optical:{x:[],y:[],marker:{size:8,color:"red"},name:"Optical",mode:"lines+markers"},selected:{x:[],y:[],marker:{size:10,color:"black"},name:"Current",mode:"markers"},brillouin_zone:{x:[],y:[],marker:{size:3,color:"black"},name:"Brillouin zone",mode:"markers"}},a=Math.PI/e.a,n=.001/e.a,o=0,r=0;r<=a;r+=n){var i=y(!1,r,e),l=y(!0,r,e);t.acoustic.x.push(r*f),t.acoustic.y.push(i),t.optical.x.push(r*f),t.optical.y.push(l),l>o&&(o=l)}for(var c=a/2;c<=a;c+=a/2)for(var s=0;s<o;s+=o/20)t.brillouin_zone.x.push(c*f),t.brillouin_zone.y.push(s);var u=y(!1,e.currQ/f,e),h=y(!0,e.currQ/f,e);return t.selected.x.push(e.currQ),t.selected.y.push(u),t.selected.x.push(e.currQ),t.selected.y.push(h),t}(this.state.params);var t=Object.assign({},this.state.params);return t.opticalWMax=Math.max.apply(null,this.branches.optical.y),t.acousticWMax=Math.max.apply(null,this.branches.acoustic.y),o.a.createElement("div",null,o.a.createElement(d.i,{color:"dark",dark:!0},o.a.createElement(d.j,{href:"#"},"Phonons"),o.a.createElement(d.h,{href:"#"},"Github")),o.a.createElement(d.g,{fluid:!0},o.a.createElement(d.c,{fluid:!0,className:"h-25"},o.a.createElement(d.k,null,o.a.createElement(d.b,{xs:"8"},o.a.createElement(p.a,{style:{width:"100%"},data:this.getScatterData(),onClick:this.handleBranchClick,layout:this.plot.layout,config:this.plot.config,onInitialized:function(t){e.plot.layout=t.layout,e.plot.config=t.config},onUpdate:function(t){e.plot.layout=t.layout,e.plot.config=t.config}})),o.a.createElement(d.b,{xs:{size:4,offset:0}},o.a.createElement(x,{newParamsHandler:this.handleNewParams}))),o.a.createElement("br",null),o.a.createElement(d.k,null,o.a.createElement(d.b,{xs:"12"},o.a.createElement(w,{animationParams:t}))))),o.a.createElement("footer",{className:"footer font-small blue"},o.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2018 Copyright:",o.a.createElement("a",{href:"https://kolsha.ru"}," Kolsha"))))}}]),t}(n.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(28);i.a.render(o.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/phonons-dispersion",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/phonons-dispersion","/service-worker.js");C?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):M(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.cab57c35.chunk.js.map
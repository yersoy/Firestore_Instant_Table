!function(t,i){"function"==typeof define&&define.amd?define(i):"object"==typeof exports?module.exports=i():t.Sparkline=i()}(this,function(){function s(t,i){this.element=t,this.options=function(t,i){var n={};for(var o in i)n[o]=o in t?t[o]:i[o];return n}(i||{},s.options),this.element.innerHTML="<canvas></canvas>",this.canvas=this.element.firstChild,this.context=this.canvas.getContext("2d"),this.ratio=window.devicePixelRatio||1,this.options.tooltip&&(this.canvas.style.position="relative",this.canvas.onmousemove=function(t){var i=t.offsetX||t.layerX||0,n=(this.options.width-2*this.options.dotRadius)/(this.points.length-1),o=(s=0,e=Math.round((i-this.options.dotRadius)/n),h=this.points.length-1,Math.max(s,Math.min(e,h)));var s,e,h;this.canvas.title=this.options.tooltip(this.points[o],o,this.points)}.bind(this))}return s.options={width:100,lineColor:"black",lineWidth:1,startColor:"transparent",endColor:"red",maxColor:"transparent",minColor:"transparent",minValue:null,maxValue:null,dotRadius:2.5,tooltip:null},s.init=function(t,i){return new s(t,i)},s.draw=function(t,i,n){var o=new s(t,n);return o.draw(i),o},s.prototype.draw=function(t){t=t||[],this.points=t,this.canvas.width=this.options.width*this.ratio,this.canvas.height=this.element.offsetHeight*this.ratio,this.canvas.style.width=this.options.width+"px",this.canvas.style.height=this.element.offsetHeight+"px";var i=this.options.dotRadius*this.ratio,n=this.options.dotRadius*this.ratio,o=this.canvas.width-2*i,s=this.canvas.height-2*n,e=this.options.minValue||Math.min.apply(Math,t),h=this.options.maxValue||Math.max.apply(Math,t),a=i,l=i,r=i,p=function(t,i,n,o,s){var e=i-t;return 0==e?n+o/2:n+o-(this[s]-t)/e*o}.bind(t,e,h,n,s),d=o/(t.length-1),c=function(t,i,n,o){this.beginPath(),this.fillStyle=i,this.arc(n,o,t,0,2*Math.PI,!1),this.fill()}.bind(this.context,this.options.dotRadius*this.ratio);this.context.beginPath(),this.context.strokeStyle=this.options.lineColor,this.context.lineWidth=this.options.lineWidth*this.ratio,this.context.moveTo(r,p(0));for(var u=1;u<t.length;u++)r+=d,this.context.lineTo(r,p(u)),a=t[u]==e?r:a,l=t[u]==h?r:l;this.context.stroke(),c(this.options.startColor,i+(1==t.length?o/2:0),p(0)),c(this.options.endColor,i+(1==t.length?o/2:o),p(u-1)),c(this.options.minColor,a+(1==t.length?o/2:0),p(t.indexOf(e))),c(this.options.maxColor,l+(1==t.length?o/2:0),p(t.indexOf(h)))},s});
$(function(){function t(t,i,h,e,r){this.x=t,this.y=i,this.dx=h,this.dy=e,this.w=2,this.h=8,this.color=r,this.draw=function(){s.fillStyle=this.color,s.fillRect(this.x,this.y,this.w,this.h)},this.update=function(){this.draw(),this.y+=this.dy,this.dy+=.1,this.y>=a&&(this.y-=1e3,this.dy=1,this.x=Math.random()*n),this.x>o.x?this.x+=.5:this.x<o.x&&(this.x-=.5)}}function i(){r=[];for(var i=0;i<100;i++){var h=Math.random()*n,e=-4e3*Math.random(),a="rgba(65,30,0,"+Math.random()+")";r.push(new t(h,e,1,1,a))}}function h(){requestAnimationFrame(h),s.clearRect(0,0,n,a);for(var t=0,i=0;i<100;i++)s.fillStyle="#E7AE7B",s.beginPath(),s.arc(t,3,20,0,2*Math.PI,!1),s.fill(),t+=25;for(var e=-10,i=0;i<100;i++)s.fillStyle="#794314",s.beginPath(),s.arc(e,-3,20,0,2*Math.PI,!1),s.fill(),e+=25;for(i=0;i<r.length;i++)r[i].update();t=0;for(i=0;i<100;i++)s.fillStyle="#411E00",s.beginPath(),s.arc(t,-10,20,0,2*Math.PI,!1),s.fill(),t+=25}var e=document.getElementById("canvas");main=document.getElementById("main");var n=e.width=main.offsetWidth,a=e.height=main.offsetHeight;window.addEventListener("resize",function(){n=e.width=main.offsetWidth,a=e.height=main.offsetHeight,i()});var s=e.getContext("2d"),o={x:void 0,y:void 0};main.addEventListener("mousemove",function(t){o.x=t.x,o.y=t.y});var r=[];h(),i()});
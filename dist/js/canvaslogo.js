$(function(){function i(){H>=1e3||(requestAnimationFrame(i),n.clearRect(0,0,200,200),c.update(),r.update(),a.update(),T.update(),u.update(),C<=90&&(C+=.22,m.innerHTML=Math.floor(C)+"%"),I<=90&&(I+=.22,g.innerHTML=Math.floor(I)+"%"),E<=72&&(E+=.25,w.innerHTML=Math.floor(E)+"%"),B<=53&&(B+=.16,p.innerHTML=Math.floor(B)+"%"),M<=64&&(M+=.2,v.innerHTML=Math.floor(M)+"%")),H++}var t=document.getElementById("skillSection"),e=document.getElementById("CanvasLogoHtml"),n=e.getContext("2d"),l=document.getElementById("CanvasLogoCss"),s=l.getContext("2d"),h=document.getElementById("CanvasLogoJs"),x=h.getContext("2d"),y=document.getElementById("CanvasLogoPhp"),o=y.getContext("2d"),d=document.getElementById("CanvasLogoPs"),f=d.getContext("2d");e.width=t.offsetWidth,e.height=t.offsetHeight,l.width=t.offsetWidth,l.height=t.offsetHeight,h.width=t.offsetWidth,h.height=t.offsetHeight,y.width=t.offsetWidth,y.height=t.offsetHeight,d.width=t.offsetWidth,d.height=t.offsetHeight;var c=new function(){this.line1={x1:99,x2:99,x3:99,x4:99,y1:187,y2:187,y3:199,y4:199},this.line2={x1:146,x2:146,x3:157,x4:157,y1:176,y2:176,y3:183,y4:183},this.line3={x1:157,x2:157,x3:170,x4:170,y1:52,y2:52,y3:40,y4:40},this.line4={x1:42,x2:42,x3:29,x4:29,y1:52,y2:52,y3:40,y4:40},this.speed=1,this.draw=function(){n.fillStyle="#e55126",n.beginPath(),n.moveTo(this.line1.x1,this.line1.y1),n.lineTo(this.line1.x2,this.line1.y2),n.lineTo(this.line1.x3,this.line1.y3),n.lineTo(this.line1.x4,this.line1.y4),n.fill(),n.moveTo(this.line2.x1,this.line2.y1),n.lineTo(this.line2.x2,this.line2.y2),n.lineTo(this.line2.x3,this.line2.y3),n.lineTo(this.line2.x4,this.line2.y4),n.fill(),n.moveTo(this.line3.x1,this.line3.y1),n.lineTo(this.line3.x2,this.line3.y2),n.lineTo(this.line3.x3,this.line3.y3),n.lineTo(this.line3.x4,this.line3.y4),n.fill(),n.moveTo(this.line4.x1,this.line4.y1),n.lineTo(this.line4.x2,this.line4.y2),n.lineTo(this.line4.x3,this.line4.y3),n.lineTo(this.line4.x4,this.line4.y4),n.fill()},this.update=function(){this.line3.x2<=42&&(this.line4.x2>=52?this.line4.x2=52:this.line4.x2+=.1*this.speed,this.line4.x3>=42?this.line4.x3=42:this.line4.x3+=.13*this.speed,this.line4.y2>=175?this.line4.y2=175:this.line4.y2+=1.23*this.speed,this.line4.y3>=183?this.line4.y3=183:this.line4.y3+=1.43*this.speed),this.line2.x2>=157?(this.line3.x2<=42?this.line3.x2=42:this.line3.x2-=1.15*this.speed,this.line3.x3<=30?this.line3.x3=30:this.line3.x3-=1.4*this.speed):this.line1.x2>=146?(this.line2.x2>=157?this.line2.x2=157:this.line2.x2+=.11*this.speed,this.line2.x3>=170?this.line2.x3=170:this.line2.x3+=.13*this.speed,this.line2.y2<=52?this.line2.y2=52:this.line2.y2-=1.24*this.speed,this.line2.y3<=40?this.line2.y3=40:this.line2.y3-=1.43*this.speed):(this.line1.x2>=146?this.line1.x2=146:this.line1.x2+=.47*this.speed,this.line1.x3>=158?this.line1.x3=158:this.line1.x3+=.59*this.speed,this.line1.y2<=175?this.line1.y2=175:this.line1.y2-=.12*this.speed,this.line1.y3<=183?this.line1.y3=183:this.line1.y3-=.16*this.speed),this.draw()}},r=new function(){this.line1={x1:99,x2:99,x3:99,x4:99,y1:187,y2:187,y3:199,y4:199},this.line2={x1:146,x2:146,x3:157,x4:157,y1:176,y2:176,y3:183,y4:183},this.line3={x1:157,x2:157,x3:170,x4:170,y1:52,y2:52,y3:40,y4:40},this.line4={x1:42,x2:42,x3:29,x4:29,y1:52,y2:52,y3:40,y4:40},this.draw=function(){s.fillStyle="#0c73b8",s.beginPath(),s.moveTo(this.line1.x1,this.line1.y1),s.lineTo(this.line1.x2,this.line1.y2),s.lineTo(this.line1.x3,this.line1.y3),s.lineTo(this.line1.x4,this.line1.y4),s.fill(),s.moveTo(this.line2.x1,this.line2.y1),s.lineTo(this.line2.x2,this.line2.y2),s.lineTo(this.line2.x3,this.line2.y3),s.lineTo(this.line2.x4,this.line2.y4),s.fill(),s.moveTo(this.line3.x1,this.line3.y1),s.lineTo(this.line3.x2,this.line3.y2),s.lineTo(this.line3.x3,this.line3.y3),s.lineTo(this.line3.x4,this.line3.y4),s.fill(),s.moveTo(this.line4.x1,this.line4.y1),s.lineTo(this.line4.x2,this.line4.y2),s.lineTo(this.line4.x3,this.line4.y3),s.lineTo(this.line4.x4,this.line4.y4),s.fill()},this.update=function(){this.line3.x2<=42&&(this.line4.x2>=52?this.line4.x2=52:this.line4.x2+=.1,this.line4.x3>=42?this.line4.x3=42:this.line4.x3+=.13,this.line4.y2>=175?this.line4.y2=175:this.line4.y2+=1.23,this.line4.y3>=183?this.line4.y3=183:this.line4.y3+=1.43),this.line2.x2>=157?(this.line3.x2<=42?this.line3.x2=42:this.line3.x2-=1.15,this.line3.x3<=30?this.line3.x3=30:this.line3.x3-=1.4):this.line1.x2>=146?(this.line2.x2>=157?this.line2.x2=157:this.line2.x2+=.11,this.line2.x3>=170?this.line2.x3=170:this.line2.x3+=.13,this.line2.y2<=52?this.line2.y2=52:this.line2.y2-=1.24,this.line2.y3<=40?this.line2.y3=40:this.line2.y3-=1.43):(this.line1.x2>=146?this.line1.x2=146:this.line1.x2+=.47,this.line1.x3>=158?this.line1.x3=158:this.line1.x3+=.59,this.line1.y2<=175?this.line1.y2=175:this.line1.y2-=.12,this.line1.y3<=183?this.line1.y3=183:this.line1.y3-=.16),this.draw()}},a=new function(){this.line1={x1:99,x2:99,x3:99,x4:99,y1:187,y2:187,y3:199,y4:199},this.line2={x1:146,x2:146,x3:157,x4:157,y1:176,y2:176,y3:183,y4:183},this.line3={x1:157,x2:157,x3:170,x4:170,y1:52,y2:52,y3:40,y4:40},this.line4={x1:42,x2:42,x3:29,x4:29,y1:52,y2:52,y3:40,y4:40},this.draw=function(){x.fillStyle="#e5a228",x.beginPath(),x.moveTo(this.line1.x1,this.line1.y1),x.lineTo(this.line1.x2,this.line1.y2),x.lineTo(this.line1.x3,this.line1.y3),x.lineTo(this.line1.x4,this.line1.y4),x.fill(),x.moveTo(this.line2.x1,this.line2.y1),x.lineTo(this.line2.x2,this.line2.y2),x.lineTo(this.line2.x3,this.line2.y3),x.lineTo(this.line2.x4,this.line2.y4),x.fill(),x.moveTo(this.line3.x1,this.line3.y1),x.lineTo(this.line3.x2,this.line3.y2),x.lineTo(this.line3.x3,this.line3.y3),x.lineTo(this.line3.x4,this.line3.y4),x.fill()},this.update=function(){this.line2.x2>=157?(this.line3.x2<=42?this.line3.x2=42:this.line3.x2-=1.15,this.line3.x3<=30?this.line3.x3=30:this.line3.x3-=1.4):this.line1.x2>=146?(this.line2.x2>=157?this.line2.x2=157:this.line2.x2+=.11,this.line2.x3>=170?this.line2.x3=170:this.line2.x3+=.13,this.line2.y2<=52?this.line2.y2=52:this.line2.y2-=1.24,this.line2.y3<=40?this.line2.y3=40:this.line2.y3-=1.43):(this.line1.x2>=146?this.line1.x2=146:this.line1.x2+=.47,this.line1.x3>=158?this.line1.x3=158:this.line1.x3+=.59,this.line1.y2<=175?this.line1.y2=175:this.line1.y2-=.12,this.line1.y3<=183?this.line1.y3=183:this.line1.y3-=.16),this.draw()}},T=new function(){this.start=6.28,this.draw=function(){o.strokeStyle="#8993be",o.lineWidth=3,o.beginPath(),o.ellipse(100,100,55,95,90*Math.PI/180,this.start,2*Math.PI,!1),o.stroke()},this.update=function(){this.start<=3?this.start=3:this.start-=.01,this.draw()}},u=new function(){this.rect1={w:10,h:0},this.rect2={w:0,h:10},this.rect3={y:190,h:0},this.rect4={w:0,x:190},this.draw=function(){f.fillStyle="#a0cbff",f.fillRect(0,0,this.rect1.w,this.rect1.h),f.fillRect(0,190,this.rect2.w,this.rect2.h),f.fillRect(190,this.rect3.y,10,this.rect3.h),f.fillRect(this.rect4.x,0,this.rect4.w,10)},this.update=function(){this.rect1.h>=199?this.rect2.w>=200?this.rect3.y<=0?this.rect4.x<=160||(this.rect4.x-=2,this.rect4.w+=2):(this.rect3.y-=2,this.rect3.h+=2):this.rect2.w+=2:this.rect1.h+=2,this.draw()}},m=document.getElementById("skillCounter1"),g=document.getElementById("skillCounter2"),w=document.getElementById("skillCounter3"),p=document.getElementById("skillCounter4"),v=document.getElementById("skillCounter5"),C=0,I=0,E=0,B=0,M=0,H=0,L=0,b=!1,k=document.getElementById("about").offsetTop;window.addEventListener("scroll",function(t){L=window.scrollY,!b&&L>=k&&(i(),b=!0)})});
$(function(){
var canvas = document.getElementById('canvas');
 main = document.getElementById('main');
 var innerWidth = canvas.width = main.offsetWidth;
 var innerHeight = canvas.height = main.offsetHeight;

 window.addEventListener('resize', function(){
   innerWidth = canvas.width = main.offsetWidth;
   innerHeight = canvas.height = main.offsetHeight;

   init();
 });

var c = canvas.getContext('2d');



var mouse = {
  x:undefined,
  y:undefined
}
main.addEventListener('mousemove',function(e){
  mouse.x = e.x;
  mouse.y = e.y;
});




 function Rain(x,y,dx,dy,color){
   this.x = x
   this.y = y
   this.dx = dx;
   this.dy = dy;
   this.w = 2;
   this.h = 8;
   this.color = color;

   this.draw = function () {
     c.fillStyle = this.color;
    //  c.shadowBlur = 5;
    //  c.shadowColor = "#411E00";
    //  c.shadowOffsetY = -1;
     c.fillRect(this.x,this.y,this.w,this.h);

   }
   this.update = function () {
     this.draw();
     this.y += this.dy;
     this.dy += 0.1;
    //interactivity
     if(this.y >= innerHeight){
       this.y -= 1000;
       this.dy = 1;
       this.x = Math.random() * innerWidth;
     }

     if(this.x > mouse.x){
       this.x += 0.5;
     }else{
       if (this.x < mouse.x) {
         this.x -=0.5;
       }
     }
   }
 }

 var rainArray = [];

 function init(){

   rainArray = [];

// Splash Array
  //  for (var i = 0; i < 10; i++) {
  //    var x = 100;
  //    var y = 100;
  //    var dx;
  //    if ((Math.random() * 10)>5) {
  //      dx = Math.random() * 2;
  //    } else{
  //      dx = Math.random() * -2;
  //    }
  //    var dy =0 // -3 + ((Math.random() -0.5) * 2);
  //    var color = "rgba(65,30,0,"+ Math.random() +")";
  //    splashArray.push(new Splash(x,y,dx,dy,color));
  //  }

   for (var i = 0; i < 100; i++) {
     var x = Math.random() * innerWidth;
     var y = Math.random() * -4000;
     var dx = 1;
     var dy = 1;//(Math.random() -0.2) * 3;
     var color = "rgba(65,30,0,"+ Math.random() +")";
     rainArray.push(new Rain(x,y,dx,dy,color));
   }
 }

 function animate(){
   requestAnimationFrame(animate);
   c.clearRect(0,0,innerWidth, innerHeight);


    var cloudX = 0;
    for (var i = 0; i < 100; i++) {
      c.fillStyle = "#E7AE7B";
      c.beginPath();
      c.arc(cloudX ,3,20,0,Math.PI * 2,false);
      c.fill();
      cloudX += 25;
    }

    var cloudXX = -10;
    for (var i = 0; i < 100; i++) {
      c.fillStyle = "#794314";
      c.beginPath();
      c.arc(cloudXX ,-3,20,0,Math.PI * 2,false);
      c.fill();
      cloudXX += 25;
    }
    for (var i = 0; i < rainArray.length; i++) {
      rainArray[i].update();
    }
    cloudX = 0;
    for (var i = 0; i < 100; i++) {

      c.fillStyle = "#411E00";
      c.beginPath();
      c.arc(cloudX,-10,20,0,Math.PI * 2,false);
      c.fill();

      cloudX += 25;
    }

    //c.fillRect(mouse.x,mouse.y,30,30);
 }
animate();
init();
});

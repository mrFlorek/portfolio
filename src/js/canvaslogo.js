$(function(){
var skillSection = document.getElementById('skillSection');
var canvasHtml = document.getElementById('CanvasLogoHtml');
var cHtml = canvasHtml.getContext('2d');
var canvasCss = document.getElementById('CanvasLogoCss');
var cCss = canvasCss.getContext('2d');
var canvasJs = document.getElementById('CanvasLogoJs');
var cJs = canvasJs.getContext('2d');
var canvasPhp = document.getElementById('CanvasLogoPhp');
var cPhp = canvasPhp.getContext('2d');
var canvasPs = document.getElementById('CanvasLogoPs');
var cPs = canvasPs.getContext('2d');

canvasHtml.width = skillSection.offsetWidth;
canvasHtml.height = skillSection.offsetHeight;

canvasCss.width = skillSection.offsetWidth;
canvasCss.height = skillSection.offsetHeight;

canvasJs.width = skillSection.offsetWidth;
canvasJs.height = skillSection.offsetHeight;

canvasPhp.width = skillSection.offsetWidth;
canvasPhp.height = skillSection.offsetHeight;

canvasPs.width = skillSection.offsetWidth;
canvasPs.height = skillSection.offsetHeight;
  //LOGOS
  function JsLogo(){
    //starting proporties
    this.line1 = {
      x1 : 99,
      x2 : 99,
      x3 : 99,
      x4 : 99,
      y1 : 187,
      y2 : 187,
      y3 : 199,
      y4 : 199
    }
    this.line2 = {
      x1 : 146,
      x2 : 146,
      x3 : 157,
      x4 : 157,
      y1 : 176,
      y2 : 176,
      y3 : 183,
      y4 : 183
    }
    this.line3 = {
      x1 : 157,
      x2 : 157,
      x3 : 170,
      x4 : 170,
      y1 : 52,
      y2 : 52,
      y3 : 40,
      y4 : 40
    }
    this.line4 = {
      x1 : 42,
      x2 : 42,
      x3 : 29,
      x4 : 29,
      y1 : 52,
      y2 : 52,
      y3 : 40,
      y4 : 40
    }


    this.draw = function() {

        // Path
        cJs.fillStyle = "#e5a228";
        //line 1;
        cJs.beginPath();
        // cHtml.moveTo(99,187);
        // cHtml.lineTo(146,175);
        // cHtml.lineTo(158,183);
        // cHtml.lineTo(99,199);
        cJs.moveTo(this.line1.x1,this.line1.y1);
        cJs.lineTo(this.line1.x2,this.line1.y2);
        cJs.lineTo(this.line1.x3,this.line1.y3);
        cJs.lineTo(this.line1.x4,this.line1.y4);
        cJs.fill();
        //line2
        // cHtml.moveTo(146,176);
        // cHtml.lineTo(157,52);
        // cHtml.lineTo(170,40);
        // cHtml.lineTo(157,183);
        // cHtml.fill();
        cJs.moveTo(this.line2.x1,this.line2.y1);
        cJs.lineTo(this.line2.x2,this.line2.y2);
        cJs.lineTo(this.line2.x3,this.line2.y3);
        cJs.lineTo(this.line2.x4,this.line2.y4);
        cJs.fill();
        //line3
        // cHtml.moveTo(157,52);
        // cHtml.lineTo(42,52);
        // cHtml.lineTo(30,40);
        // cHtml.lineTo(170,40);
        // cHtml.fill();
        cJs.moveTo(this.line3.x1,this.line3.y1);
        cJs.lineTo(this.line3.x2,this.line3.y2);
        cJs.lineTo(this.line3.x3,this.line3.y3);
        cJs.lineTo(this.line3.x4,this.line3.y4);
        cJs.fill();
        //line4
        // cHtml.moveTo(42,52);
        // cHtml.lineTo(52,175);
        // cHtml.lineTo(42,183);
        // cHtml.lineTo(29,40);
        // cHtml.fill();
        // cJs.moveTo(this.line4.x1,this.line4.y1);
        // cJs.lineTo(this.line4.x2,this.line4.y2);
        // cJs.lineTo(this.line4.x3,this.line4.y3);
        // cJs.lineTo(this.line4.x4,this.line4.y4);
        // cJs.fill();
        //line5
        // cHtml.moveTo(52,175);
        // cHtml.lineTo(99,187);
        // cHtml.lineTo(99,199);
        // cHtml.lineTo(42,183);
        // cHtml.fill();
    }

    this.update = function() {
        //Line4
      // if (this.line3.x2 <= 42) {
      //   if (this.line4.x2 >= 52) {
      //     this.line4.x2 = 52;
      //   } else {
      //     this.line4.x2 += 0.10;
      //   }
      //   if (this.line4.x3 >= 42) {
      //     this.line4.x3 = 42;
      //   } else {
      //     this.line4.x3 += 0.13;
      //   }
      //   if (this.line4.y2 >= 175) {
      //     this.line4.y2 = 175;
      //   } else {
      //     this.line4.y2 += 1.23;
      //   }
      //   if (this.line4.y3 >= 183) {
      //     this.line4.y3 = 183;
      //   } else {
      //     this.line4.y3 += 1.43;
      //   }
      // }
        //Line3
      if (this.line2.x2 >= 157) {
        if (this.line3.x2 <= 42) {
          this.line3.x2 = 42;
        } else {
          this.line3.x2 -= 1.15;
        }
        if (this.line3.x3 <= 30) {
          this.line3.x3 = 30;
        } else {
          this.line3.x3 -= 1.4;
        }
        }else{
          //Line2
        if (this.line1.x2 >= 146) {
          if (this.line2.x2 >= 157) {
            this.line2.x2 = 157;
          } else {
            this.line2.x2 += 0.11;
          }
          if (this.line2.x3 >= 170) {
            this.line2.x3 = 170;
          } else {
            this.line2.x3 += 0.13;
          }
          if (this.line2.y2 <= 52) {
            this.line2.y2 = 52;
          } else {
            this.line2.y2 -= 1.24;
          }
          if (this.line2.y3 <= 40) {
            this.line2.y3 = 40;
          } else {
            this.line2.y3 -= 1.43;
          }
        }
            // Line1
        else{
          if (this.line1.x2 >= 146) {
            this.line1.x2 = 146;
          } else {
            this.line1.x2 += 0.47;
          }
          if (this.line1.x3 >= 158) {
            this.line1.x3 = 158;
          } else {
            this.line1.x3 += 0.59;
          }
          if (this.line1.y2 <= 175) {
            this.line1.y2 = 175;
          } else {
            this.line1.y2 -= 0.12;
          }
          if (this.line1.y3 <= 183) {
            this.line1.y3 = 183;
          } else {
            this.line1.y3 -= 0.16;
          }
        }
      }

      this.draw();

    }
  }

  function CssLogo(){
    //starting proporties
    this.line1 = {
      x1 : 99,
      x2 : 99,
      x3 : 99,
      x4 : 99,
      y1 : 187,
      y2 : 187,
      y3 : 199,
      y4 : 199
    }
    this.line2 = {
      x1 : 146,
      x2 : 146,
      x3 : 157,
      x4 : 157,
      y1 : 176,
      y2 : 176,
      y3 : 183,
      y4 : 183
    }
    this.line3 = {
      x1 : 157,
      x2 : 157,
      x3 : 170,
      x4 : 170,
      y1 : 52,
      y2 : 52,
      y3 : 40,
      y4 : 40
    }
    this.line4 = {
      x1 : 42,
      x2 : 42,
      x3 : 29,
      x4 : 29,
      y1 : 52,
      y2 : 52,
      y3 : 40,
      y4 : 40
    }


    this.draw = function() {

        // Path
        cCss.fillStyle = "#0c73b8";
        //line 1;
        cCss.beginPath();
        // cHtml.moveTo(99,187);
        // cHtml.lineTo(146,175);
        // cHtml.lineTo(158,183);
        // cHtml.lineTo(99,199);
        cCss.moveTo(this.line1.x1,this.line1.y1);
        cCss.lineTo(this.line1.x2,this.line1.y2);
        cCss.lineTo(this.line1.x3,this.line1.y3);
        cCss.lineTo(this.line1.x4,this.line1.y4);
        cCss.fill();
        //line2
        // cHtml.moveTo(146,176);
        // cHtml.lineTo(157,52);
        // cHtml.lineTo(170,40);
        // cHtml.lineTo(157,183);
        // cHtml.fill();
        cCss.moveTo(this.line2.x1,this.line2.y1);
        cCss.lineTo(this.line2.x2,this.line2.y2);
        cCss.lineTo(this.line2.x3,this.line2.y3);
        cCss.lineTo(this.line2.x4,this.line2.y4);
        cCss.fill();
        //line3
        // cHtml.moveTo(157,52);
        // cHtml.lineTo(42,52);
        // cHtml.lineTo(30,40);
        // cHtml.lineTo(170,40);
        // cHtml.fill();
        cCss.moveTo(this.line3.x1,this.line3.y1);
        cCss.lineTo(this.line3.x2,this.line3.y2);
        cCss.lineTo(this.line3.x3,this.line3.y3);
        cCss.lineTo(this.line3.x4,this.line3.y4);
        cCss.fill();
        //line4
        // cHtml.moveTo(42,52);
        // cHtml.lineTo(52,175);
        // cHtml.lineTo(42,183);
        // cHtml.lineTo(29,40);
        // cHtml.fill();
        cCss.moveTo(this.line4.x1,this.line4.y1);
        cCss.lineTo(this.line4.x2,this.line4.y2);
        cCss.lineTo(this.line4.x3,this.line4.y3);
        cCss.lineTo(this.line4.x4,this.line4.y4);
        cCss.fill();
        //line5
        // cHtml.moveTo(52,175);
        // cHtml.lineTo(99,187);
        // cHtml.lineTo(99,199);
        // cHtml.lineTo(42,183);
        // cHtml.fill();
    }

    this.update = function() {
        //Line4
      if (this.line3.x2 <= 42) {
        if (this.line4.x2 >= 52) {
          this.line4.x2 = 52;
        } else {
          this.line4.x2 += 0.10;
        }
        if (this.line4.x3 >= 42) {
          this.line4.x3 = 42;
        } else {
          this.line4.x3 += 0.13;
        }
        if (this.line4.y2 >= 175) {
          this.line4.y2 = 175;
        } else {
          this.line4.y2 += 1.23;
        }
        if (this.line4.y3 >= 183) {
          this.line4.y3 = 183;
        } else {
          this.line4.y3 += 1.43;
        }
      }
        //Line3
      if (this.line2.x2 >= 157) {
        if (this.line3.x2 <= 42) {
          this.line3.x2 = 42;
        } else {
          this.line3.x2 -= 1.15;
        }
        if (this.line3.x3 <= 30) {
          this.line3.x3 = 30;
        } else {
          this.line3.x3 -= 1.4;
        }
        }else{
          //Line2
        if (this.line1.x2 >= 146) {
          if (this.line2.x2 >= 157) {
            this.line2.x2 = 157;
          } else {
            this.line2.x2 += 0.11;
          }
          if (this.line2.x3 >= 170) {
            this.line2.x3 = 170;
          } else {
            this.line2.x3 += 0.13;
          }
          if (this.line2.y2 <= 52) {
            this.line2.y2 = 52;
          } else {
            this.line2.y2 -= 1.24;
          }
          if (this.line2.y3 <= 40) {
            this.line2.y3 = 40;
          } else {
            this.line2.y3 -= 1.43;
          }
        }
            // Line1
        else{
          if (this.line1.x2 >= 146) {
            this.line1.x2 = 146;
          } else {
            this.line1.x2 += 0.47;
          }
          if (this.line1.x3 >= 158) {
            this.line1.x3 = 158;
          } else {
            this.line1.x3 += 0.59;
          }
          if (this.line1.y2 <= 175) {
            this.line1.y2 = 175;
          } else {
            this.line1.y2 -= 0.12;
          }
          if (this.line1.y3 <= 183) {
            this.line1.y3 = 183;
          } else {
            this.line1.y3 -= 0.16;
          }
        }
      }

      this.draw();

    }
  }


function HtmlLogo(){
  //starting proporties
  this.line1 = {
    x1 : 99,
    x2 : 99,
    x3 : 99,
    x4 : 99,
    y1 : 187,
    y2 : 187,
    y3 : 199,
    y4 : 199
  }
  this.line2 = {
    x1 : 146,
    x2 : 146,
    x3 : 157,
    x4 : 157,
    y1 : 176,
    y2 : 176,
    y3 : 183,
    y4 : 183
  }
  this.line3 = {
    x1 : 157,
    x2 : 157,
    x3 : 170,
    x4 : 170,
    y1 : 52,
    y2 : 52,
    y3 : 40,
    y4 : 40
  }
  this.line4 = {
    x1 : 42,
    x2 : 42,
    x3 : 29,
    x4 : 29,
    y1 : 52,
    y2 : 52,
    y3 : 40,
    y4 : 40
  }
 this.speed = 1;

  this.draw = function() {

      // Path
      cHtml.fillStyle = "#e55126";
      //line 1;
      cHtml.beginPath();
      // cHtml.moveTo(99,187);
      // cHtml.lineTo(146,175);
      // cHtml.lineTo(158,183);
      // cHtml.lineTo(99,199);
      cHtml.moveTo(this.line1.x1,this.line1.y1);
      cHtml.lineTo(this.line1.x2,this.line1.y2);
      cHtml.lineTo(this.line1.x3,this.line1.y3);
      cHtml.lineTo(this.line1.x4,this.line1.y4);
      cHtml.fill();
      //line2
      // cHtml.moveTo(146,176);
      // cHtml.lineTo(157,52);
      // cHtml.lineTo(170,40);
      // cHtml.lineTo(157,183);
      // cHtml.fill();
      cHtml.moveTo(this.line2.x1,this.line2.y1);
      cHtml.lineTo(this.line2.x2,this.line2.y2);
      cHtml.lineTo(this.line2.x3,this.line2.y3);
      cHtml.lineTo(this.line2.x4,this.line2.y4);
      cHtml.fill();
      //line3
      // cHtml.moveTo(157,52);
      // cHtml.lineTo(42,52);
      // cHtml.lineTo(30,40);
      // cHtml.lineTo(170,40);
      // cHtml.fill();
      cHtml.moveTo(this.line3.x1,this.line3.y1);
      cHtml.lineTo(this.line3.x2,this.line3.y2);
      cHtml.lineTo(this.line3.x3,this.line3.y3);
      cHtml.lineTo(this.line3.x4,this.line3.y4);
      cHtml.fill();
      //line4
      // cHtml.moveTo(42,52);
      // cHtml.lineTo(52,175);
      // cHtml.lineTo(42,183);
      // cHtml.lineTo(29,40);
      // cHtml.fill();
      cHtml.moveTo(this.line4.x1,this.line4.y1);
      cHtml.lineTo(this.line4.x2,this.line4.y2);
      cHtml.lineTo(this.line4.x3,this.line4.y3);
      cHtml.lineTo(this.line4.x4,this.line4.y4);
      cHtml.fill();
      //line5
      // cHtml.moveTo(52,175);
      // cHtml.lineTo(99,187);
      // cHtml.lineTo(99,199);
      // cHtml.lineTo(42,183);
      // cHtml.fill();
  }

  this.update = function() {
      //Line4
    if (this.line3.x2 <= 42) {
      if (this.line4.x2 >= 52) {
        this.line4.x2 = 52;
      } else {
        this.line4.x2 += this.speed * 0.10;
      }
      if (this.line4.x3 >= 42) {
        this.line4.x3 = 42;
      } else {
        this.line4.x3 += this.speed * 0.13;
      }
      if (this.line4.y2 >= 175) {
        this.line4.y2 = 175;
      } else {
        this.line4.y2 += this.speed * 1.23;
      }
      if (this.line4.y3 >= 183) {
        this.line4.y3 = 183;
      } else {
        this.line4.y3 += this.speed * 1.43;
      }
    }
      //Line3
    if (this.line2.x2 >= 157) {
      if (this.line3.x2 <= 42) {
        this.line3.x2 = 42;
      } else {
        this.line3.x2 -= this.speed * 1.15;
      }
      if (this.line3.x3 <= 30) {
        this.line3.x3 = 30;
      } else {
        this.line3.x3 -= this.speed * 1.4;
      }
      }else{
        //Line2
      if (this.line1.x2 >= 146) {
        if (this.line2.x2 >= 157) {
          this.line2.x2 = 157;
        } else {
          this.line2.x2 += this.speed * 0.11;
        }
        if (this.line2.x3 >= 170) {
          this.line2.x3 = 170;
        } else {
          this.line2.x3 += this.speed * 0.13;
        }
        if (this.line2.y2 <= 52) {
          this.line2.y2 = 52;
        } else {
          this.line2.y2 -= this.speed * 1.24;
        }
        if (this.line2.y3 <= 40) {
          this.line2.y3 = 40;
        } else {
          this.line2.y3 -= this.speed * 1.43;
        }
      }
          // Line1
      else{
        if (this.line1.x2 >= 146) {
          this.line1.x2 = 146;
        } else {
          this.line1.x2 += this.speed * 0.47;
        }
        if (this.line1.x3 >= 158) {
          this.line1.x3 = 158;
        } else {
          this.line1.x3 += this.speed * 0.59;
        }
        if (this.line1.y2 <= 175) {
          this.line1.y2 = 175;
        } else {
          this.line1.y2 -= this.speed * 0.12;
        }
        if (this.line1.y3 <= 183) {
          this.line1.y3 = 183;
        } else {
          this.line1.y3 -= this.speed * 0.16;
        }
      }
    }

    this.draw();

  }
}
function PhpLogo() {
  this.start = 6.28;
  this.draw = function(){
    cPhp.strokeStyle = '#8993be';
    cPhp.lineWidth = 3;
    cPhp.beginPath();
    cPhp.ellipse(100, 100, 55, 95, 90 * Math.PI/180, this.start, 2 * Math.PI,false);
    cPhp.stroke();
  }
  this.update = function(){
    if (this.start <= 3) {
      this.start = 3;
    }else {
      this.start -= 0.01;
    }
    this.draw();
  }
}
function PsLogo() {
  this.rect1 = {
    w:10,
    h:0
  }
  this.rect2 = {
    w:0,
    h:10
  }
  this.rect3 = {
    y:190,
    h:0
  }
  this.rect4 = {
    w:0,
    x:190
  }
  this.draw = function(){
    cPs.fillStyle = "#a0cbff";
    cPs.fillRect(0,0,this.rect1.w,this.rect1.h);
    cPs.fillRect(0,190,this.rect2.w,this.rect2.h);
    cPs.fillRect(190,this.rect3.y,10,this.rect3.h);
    cPs.fillRect(this.rect4.x,0,this.rect4.w,10);
  }
  this.update = function(){
    if (this.rect1.h >= 199) {
      if (this.rect2.w >= 200) {
        if (this.rect3.y <= 0) {
          if (this.rect4.x <= 160) {

          }else {
            this.rect4.x -= 2;
            this.rect4.w += 2;
          }
        }else{
          this.rect3.y -= 2;
          this.rect3.h += 2;
        }
      }else{
        this.rect2.w += 2;
      }
    }else {
      this.rect1.h += 2;
    }
    this.draw();
  }
}

var htmlLogo = new HtmlLogo();
var cssLogo = new CssLogo();
var jsLogo = new JsLogo();
var phpLogo = new PhpLogo();
var psLogo = new PsLogo();
var htmlP = document.getElementById('skillCounter1');
var cssP = document.getElementById('skillCounter2');
var jsP = document.getElementById('skillCounter3');
var phpP = document.getElementById('skillCounter4');
var psP = document.getElementById('skillCounter5');
var htmlC = 0;
var cssC = 0;
var jsC = 0;
var phpC = 0;
var psC = 0;
var timer = 0;
var scrollPosition = 0;
var ticking = false;
var aboutTop = document.getElementById('about').offsetTop;

window.addEventListener('scroll', function(e) {
  scrollPosition = window.scrollY;
  if (!ticking && scrollPosition >= aboutTop) {
      animateLogo();
      ticking = true;
    };
});

  // ANIMATION

function animateLogo(){
  if (timer >= 1000) {
  }else{
    requestAnimationFrame(animateLogo);
    cHtml.clearRect(0,0,200,200);
    htmlLogo.update();
    cssLogo.update();
    jsLogo.update();
    phpLogo.update();
    psLogo.update();


    if (htmlC <= 90) {
      htmlC += 0.22;
      htmlP.innerHTML = Math.floor(htmlC) + "%";
    }
    if (cssC <= 90) {
      cssC += 0.22;
      cssP.innerHTML = Math.floor(cssC) + "%";
    }
    if (jsC <= 72) {
      jsC += 0.25;
      jsP.innerHTML = Math.floor(jsC) + "%";
    }
    if (phpC <= 53) {
      phpC += 0.16;
      phpP.innerHTML = Math.floor(phpC) + "%";
    }
    if (psC <= 64) {
      psC += 0.2;
      psP.innerHTML = Math.floor(psC) + "%";
    }

  }
    timer ++;
  }

});

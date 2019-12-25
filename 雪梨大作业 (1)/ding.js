
        var box = document.getElementById("box");
        var oNavlist = document.getElementById("nav").children;
        var slider = document.getElementById("slider");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var index = 1;
        var timer;
        var isMoving = false;
        var pos = 0;
        function next(){
            if(isMoving){
                return;
            }
            isMoving = true
            index++;
            navchange();
            animate(slider,{left:-600*index},function(){
                if(index >= 6){
                    slider.style.left = "-1200px";
                    index = 1;
                }
                isMoving = false;
            });
        }
        function prev(){
            if(isMoving){
                return;
            }
            isMoving = true;
            index--;
            navchange();
            animate(slider,{left:-600*index},function(){
                if(index <= 0){
                    slider.style.left = "-3000px";
                    index = 5;
                }
                isMoving = false;
            });     
        }
        var IntervaiId = setInterval(next,2000);
        box.onmouseover = function(){
            animate(left,{opacity:50});
            animate(right,{opacity:50});
            clearInterval(IntervaiId);
        }
        box.onmouseout = function(){
            animate(left,{opacity:0});
            animate(right,{opacity:0});
            IntervaiId = setInterval(next,2000);
        }

        function navchange(){
            for (var i = 0; i <oNavlist.length; i++) {
                oNavlist[i].className = "";
            }
            if(index >= 6){
                oNavlist[0].className = "active";
            }
            else if(index <= 0){
                oNavlist[4].className = "active";
            }
            else{
                oNavlist[index-1].className = "active";
            }
            
        }
        timer = setInterval(next,3000);

        //weixin
         var onDiv = document.getElementById("cf1");
        onDiv.onmouseover = function(){
            startMove(0);
        }
        onDiv.onmouseout = function(){
            startMove(-200);
        }
        var timer;
        function startMove(target){
            clearInterval(timer);
            timer = setInterval(function(){
              var speed;
              if(onDiv.offsetLeft<target){
                speed = 10;
              }
              else{
                speed = -10;
              }
              if(onDiv.offsetLeft == target){
                clearInterval(timer);
              }
              else{
                onDiv.style.left = onDiv.offsetLeft + speed + "px";
              }
            },20);
        }



//animate.js

function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}
function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var isStop = true;
        for(var attr in json){
            var now = 0;
            if(attr == 'opacity'){
                now = parseInt(getStyle(obj,attr)*100);
            }else{
                now = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - now) / 8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var cur = now + speed;
            if(attr == 'opacity'){
                obj.style[attr] = cur / 100;
            }else{
                obj.style[attr] = cur + 'px';
            }
            if(json[attr] !== cur){
                isStop = false;
            }
        }
        if(isStop){
            clearInterval(obj.timer);
            callback&&callback();
        }
    }, 30)
}
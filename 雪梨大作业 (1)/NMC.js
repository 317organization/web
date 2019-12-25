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


var title = document.getElementById('p_title')
var slider = document.getElementById('slider')
var left = document.getElementById('left')
var right = document.getElementById('right')

var index = 1;
var timer;
var isMoving = false;



left.onclick = prev
right.onclick = next

box.onmouseover = function () {
  animate(left,{opacity:50})
  animate(right,{opacity:50})
}
box.onmouseout = function () {
  animate(left,{opacity:0})
  animate(right,{opacity:0})
}



function next() {
  if(isMoving)return
  
  index++;
  isMoving = true
  animate(slider,{left: -1200 * index},function(){
    isMoving = false

    if(index == 6) {
      slider.style.left = '-1200px'
      index = 1
    }
  })
  
}
function prev() {
  if(isMoving)return
  index--;

  isMoving = true
  animate(slider,{left: -1200 * index},function(){
    isMoving = false
    if(index == 0) {
      slider.style.left = '-6000px'
      index = 5
    }
  })
  
}
 
 timer = setInterval(next,3000);


  //增加div
function addChild(top,snowShape) {
var div = document.createElement("div");
div.innerHTML = snowShape;
div.className = "flake";
div.style.position = 'fixed';
div.style.zIndex = "1111";
div.style.color = 'white';
div.style.opacity = 0.9;
div.style.left = parseInt(Math.random() * window.innerWidth) + 'px';
div.style.top = top + 'px';
div.style.fontSize = parseInt(Math.random() * 50) + 'px';
document.body.appendChild(div);
};
//雪花自动降落
function autoWipe(snowSpeed,snowShape) {
var flake = document.getElementsByClassName('flake');
var timer = setInterval(function () {
for (var i = 0; i < flake.length; i++) {
var opacity = flake[i].style.opacity;
var offsetTop = Number((flake[i].style.top).replace('px',''));
if (offsetTop < window.innerHeight) {
offsetTop = offsetTop + snowSpeed;
opacity = opacity - 0.003;
flake[i].style.top = offsetTop + 'px';
flake[i].style.opacity = opacity;
} else {
document.body.removeChild(flake[i]);
addChild(0,snowShape);
}
}
}, 100);
};
//调用以上方法
function final(bigSnowParam,snowShape) {
for (var i = 0; i < bigSnowParam.snowNum; i++) {
addChild(parseInt(Math.random() * window.innerHeight),snowShape);
}
autoWipe(bigSnowParam.snowSpeed,snowShape);
};
//形成最后效果
function final(bigSnowParam,snowShape) {
for (var i = 0; i < bigSnowParam.snowNum; i++) {
addChild(parseInt(Math.random() * window.innerHeight),snowShape);
}
autoWipe(bigSnowParam.snowSpeed,snowShape);
};


//大雪参考值
var bigSnowParam = {
snowNum:100,
snowSpeed:6
};
//中雪参考值
var midSnowParam = {
snowNum:242,
snowSpeed:3
};
//小雪参考值
var littleSnowParam = {
snowNum:242,
snowSpeed:1
};
//自定义雪参考值
var selfSnowParam = {
snowNum:'',//值为number
snowSpeed:''//值为number
};
//雪花形状参考
var snowShapeObj = {
1:'❆',
2:'❄',
3:'❅',
4:'✼',
5:'✼',
6:'❉',
7:'❇',
8:'❈',
9:'❊',
10:'✥',
11:'✺'
};
//调用
final(bigSnowParam,snowShapeObj[1]);
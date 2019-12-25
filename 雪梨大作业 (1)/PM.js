function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
}

function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bool=true;
		for(var k in json){
			var leader;
			if (k=='opacity') {
				if (getStyle(obj,k)==undefined) {
					leader=100;
				}else {
					leader=parseInt(getStyle(obj,k)*100);
				}
			}else {
				leader=parseInt(getStyle(obj,k)) || 0;
			}
			var step=(json[k]-leader)/10;
			step=step>0?Math.ceil(step):Math.floor(step);
			leader=leader+step;
			if(k=='zIndex'){
				obj.style[k]=json[k];
			}else if(k=='opacity'){
				obj.style[k]=leader/100;
				obj.style.filter='alpha(opacity='+leader+')';
			}else {
				obj.style[k]=leader+'px';
			}
			if(json[k]!=leader){
				bool=false;
			}
		}
		if(bool){
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	},10);
}

window.onload=function(){
    var imgArr=[
        {"path":"images/PM1.jpg"},
        {"path":"images/PM2.jpg"},
        {"path":"images/PM3.jpg"},
        {"path":"images/PM4.jpg"},
        {"path":"images/PM5.jpg"},
        {"path":"images/PM6.jpg"},
        {"path":"images/PM7.jpg"}
    ];
    var size=[
        {"top":60,"left":-100,"width":600,"height":240,"zIndex":1,"opacity":0},
        {"top":60,"left":-100,"width":600,"height":240,"zIndex":2,"opacity":40},
        {"top":30,"left":50,"width":700,"height":300,"zIndex":3,"opacity":70},
        {"top":0,"left":200,"width":800,"height":360,"zIndex":4,"opacity":100},
        {"top":30,"left":450,"width":700,"height":300,"zIndex":3,"opacity":70},
        {"top":60,"left":700,"width":600,"height":240,"zIndex":2,"opacity":40},
        {"top":60,"left":700,"width":600,"height":240,"zIndex":1,"opacity":0}
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var btnArr=wrap.getElementsByTagName('a');
    var falg=true;
    var speed=7000;
    wrap.onmouseover=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='block';
        }
        clearInterval(wrap.timer);
    }
    wrap.onmouseout=function(){
        for (var i=0;i<btnArr.length;i++) {
            btnArr[i].style.display='none';
        }
        wrap.timer=setInterval(function(){
             move(true);
         },2000);
    }
    for (var i=0;i<imgSum;i++) {
        var lis=document.createElement('li');             
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);
    }
    var liArr=cont.children;
    move();
     wrap.timer=setInterval(function(){
        move(true);
    },2000);

    function move(){
    		move(true);
    }
  
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}


function addChild(top,snowShape) {
var div = document.createElement("div");
div.innerHTML = snowShape;
div.className = "flake";
div.style.position = 'fixed';
div.style.zIndex = "1111";
div.style.color = '#FF69B4';
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
1:'❀',
2:'❄',
3:'❅',
4:'✼',
5:'✼',
6:'❉',
7:'❇',
8:'❈',
9:'❊',
10:'❆',
11:'✺'
};
//调用
final(bigSnowParam,snowShapeObj[1]);
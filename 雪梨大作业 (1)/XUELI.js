
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



function mytime(){
			var a = new Date();
			var b = a.toLocaleTimeString();
			var c = a.toLocaleDateString();
			document.getElementById("nowtime").innerHTML = c+'</br>'+b;
		}
		setInterval(function(){
			mytime();
		},1);
		
		    var time = document.getElementById("time");
		    time.innerHTML = "● 关于“《红楼梦》文化展”延期开展的通知  &nbsp;2019-12-16&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;● 中国国家博物馆博士后科研工作站2020年博士后招收简章  &nbsp;2019-11-11&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;● 故宫出版社推出互动解谜游戏书《谜宫》系列第二部——《谜宫·金榜题名》&nbsp;2019-12-19";

//-------------------------------------------------------------------------------------------------------
		var intro2 = document.getElementById('intro2');
		var slider0 = document.getElementById('slider0');
		var index0 = 1;
		var timer0;
		var isMoving0 = false;
		
		function next0(){
			if(!isMoving0){
				isMoving0 = true;
				index0++;
				animate(slider0,{left:-400*index0},function(){
					if(index0 == 6){
						slider0.style.left = "-400px";
						index0 = 1;
					}
					isMoving0 = false;
				});
			}
		}
			function prev0(){
				if(!isMoving0){
				isMoving0 = true;
				index0--;
				animate(slider0,{left:-400*index0},function(){
					if(index0 == 0){
						slider0.style.left = "-2000px";
						index0 = 5;
					}
					isMoving0 = false;
				});
			}
		}
		timer0 = setInterval(next0,2000);
	
		
		var img = new Image();
		var n;
		var imgs = ['XUELI/ww1.jpg','XUELI/ww2.jpg','XUELI/ww3.jpg','XUELI/ww4.jpg','XUELI/ww5.jpg',' '];
		var fix = document.getElementById('fix');
		intro2.onmouseover = function(){
				img.src = imgs[index0-1];
				if(index0>4) index = 0;
				document.getElementsByClassName('mag')[0].appendChild(img);

				fix.style.zIndex = "1111";
				clearInterval(timer0);
			}
		intro2.onmouseout = function(){
				img.src = imgs[5];
				document.getElementsByClassName('mag')[0].appendChild(img);
				fix.style.zIndex = "0000";
				timer0 = setInterval(next0,2000);
			}
			
//-------------------------------------------------------------------------------------------------------
			var intro2b = document.getElementById('intro2b');
			var slider0b = document.getElementById('slider0b');
			var index0b = 1;
			var timer0b;
			var isMoving0b = false;
			
			function next0b(){
				if(!isMoving0b){
					isMoving0b = true;
					index0b++;
					animate(slider0b,{left:-400*index0b},function(){
						if(index0b == 6){
							slider0b.style.left = "-400px";
							index0b = 1;
						}
						isMoving0b = false;
					});
				}
			}
				function prev0b(){
					if(!isMoving0b){
					isMoving0b = true;
					index0b--;
					animate(slider0b,{left:-400*index0b},function(){
						if(index0b == 0){
							slider0b.style.left = "-2000px";
							index0b = 5;
						}
						isMoving0b = false;
					});
				}
			}
			timer0b = setInterval(next0b,2000);
			
			var imgb = new Image();
			var nb;
			var imgsb = ['XUELI/ww6.jpg','XUELI/ww7.jpg','XUELI/ww8.jpg','XUELI/ww9.jpg','XUELI/ww10.jpg',' '];
			var fix0 = document.getElementById('fix0');
			intro2b.onmouseover = function(){
					imgb.src = imgsb[index0b-1];
					if(index0b>4) indexb = 0;
					document.getElementsByClassName('mag0')[0].appendChild(imgb);

					fix0.style.zIndex = "1111";
					clearInterval(timer0b);
				}
			intro2b.onmouseout = function(){
					imgb.src = imgsb[5];
					document.getElementsByClassName('mag0')[0].appendChild(imgb);
					fix0.style.zIndex = "0000";
					timer0b = setInterval(next0b,2000);
				}
//-------------------------------------------------------------------------------------------------------	

				var index = 0;
				var oLi = document.getElementById("ulmian").getElementsByTagName("li");
			
				function next(){
					index++;
					if (index == oLi.length) {
						index = 0;
					}
					for (var i = 0; i < oLi.length; i++) {
						oLi[i].style.opacity = "0";
					}
					oLi[index].style.opacity = "1";
				}
				timer = setInterval(next,2000);

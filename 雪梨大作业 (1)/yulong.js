
        //页面加载完毕后执行
        window.onload = function () {
            //找六个个元素：demo，smallBox,foatBox,mark,bigfloatBox,imgs,
            var objDemo=document.getElementById("demo");
            var objSmallBox=document.getElementById("small-box");
            var objMarkBox=document.getElementById("mark");
            var objFloatBox=document.getElementById("float-box");
            var objBigBox=document.getElementById("big-box");
            var objBigBoxImg=objBigBox.getElementsByTagName("img")[0];

            //给小盒子添加事件，移入和移出
            //移入：浮动的box和和bigBox显示
            objSmallBox.onmouseover=function(){
                objFloatBox.style.display="block";
                objBigBox.style.display="block";
            }
            //移除：浮动的box和bigBox隐藏
            objSmallBox.onmouseout=function(){
                objFloatBox.style.display="none";
                objBigBox.style.display="none";
            }

            //给小盒子添加鼠标移动事件
            objMarkBox.onmousemove=function(ev){
                var _event=ev||window.event;//做兼容性，兼容IE
                //1计算值：
                var left=_event.clientX-objDemo.offsetLeft-objSmallBox.offsetLeft-objFloatBox.offsetWidth/2;
                var top=_event.clientY-objDemo.offsetTop-objSmallBox.offsetTop-objFloatBox.offsetHeight/2;

                //5.优化，在前面加判断,不让其溢出，加判断
                if(left<0) left=0;
                if(top<0) top=0;
                if(left>objSmallBox.offsetWidth-objFloatBox.offsetWidth)
                        left=objSmallBox.offsetWidth-objFloatBox.offsetWidth;
                if(top>objSmallBox.offsetHeight-objFloatBox.offsetHeight)
                        top=objSmallBox.offsetHeight-objFloatBox.offsetHeight;

                //2把值赋值给放大镜
                objFloatBox.style.left=left+"px";
                objFloatBox.style.top=top+"px";

                //3计算比例
                var percentX=left/(objMarkBox.offsetWidth-objFloatBox.offsetWidth);
                var percentY=top/(objMarkBox.offsetHeight-objFloatBox.offsetHeight);

                //4利用这个比例计算距离后赋值给右侧的图片
                objBigBoxImg.style.left=-percentX*(objBigBoxImg.offsetWidth-objBigBox.offsetWidth)+"px";
                objBigBoxImg.style.top=-percentY*(objBigBoxImg.offsetHeight-objBigBox.offsetHeight)+"px";
            }

        }
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
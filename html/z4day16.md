# CSS 3D 和CSS 动画



首先，来复习一下`css3 2d`的内容。



首先，是过渡。



**过渡**：

包含有以下的几个属性:

* transition 属性简写
* transition-property 表示的是参加过渡的具体的属性，每个属性之间使用逗号来分隔。
* transition-duration 过渡所需的时间  单位 秒或者 毫秒 
* transition-timing-function 过渡所需的时间曲线 贝塞尔曲线  关键词  
* transition-delay 延迟  



下面再来回忆以下`CSS 2D`的内容。

包括以下的属性:

* transform: 用来设置`2d`或者`3d`效果属性的。
* transform-origin : 元素的基点  

下面是相关的效果属性值:

* translate(x,y) 沿着x轴位移指定的距离 ，沿着y轴位移指定的距离。 | translateX()   translateY()
* scale(a,b) 元素的宽度缩放为原来的a倍，元素的高度缩放为原来的b倍 | scaleX()   scaleY() 
* rotate(angle) 旋转  
* skew(x-angle,y-angle) 倾斜   | skewX()  skewY() 



## CSS3 3D

**相关属性**:

- transform:2d/3d之间的转换
- transform-origin:更改元素的基点
- transform-style:flat|preserve-3d 开启3d空间
- perspective    景深,一般值的范围在900px-1200px ,景深的值最好不要太夸张
- perspective-origin 景深基点
- backface-visibibility   背面隐藏



相关属性值：

- translateX | translateY | translateZ | translate3d(x,y,z)
- scaleX | scaleY | scaleZ | scale3d()
- rotateX(angle) | rotateY(angle) | rotateZ(angle)



## 景深

> 更多的时候是用在父元素的身上。

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 1px solid red;
            margin: 100px auto;
            /*一定要设置在父元素的身上*/
            perspective: 300px;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            transition: 1s;
        }

        section:hover div {
            transform: rotateX(45deg);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```



## 开启3D空间

**transform-style:flat|preserve-3d 开启3d空间**

当属性值为`flat`的时候，网页是默认为`2d`空间的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 600px;
            height: 400px;
            border: 2px solid lightcoral;
            margin: 200px auto;
            background-color: lightblue;
            /*如果没有开启3d空间，那么效果就只是一个平面*/
            transform-style: preserve-3d;
            perspective: 400px;
            transition: 2s;
        }

        section div {
            width: 100px;
            height: 100px;
            background-color: lightgreen;
            transition: 2s;
        }
        section:hover {
            transform:rotateY(85deg);
        }
        section:hover div {
            transform: translateZ(100px);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```



## 示例： 正方体  








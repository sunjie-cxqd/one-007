# css3 2d 3d 动画复习



## 复习

### CSS3 过渡

**过渡属性**

`过渡`主要包含有以下的几个属性：

- transition 简写
- transition-property 规定参与css过渡的具体属性
- transition-duration 过渡时间
- transition-timing-function 过渡的时间曲线
- transition-delay 延迟

> css当中推荐使用简写属性来完成属性操作。



### CSS3 2D

**css3 2D相关属性**

**相关属性**:

- transform : 2d/3d之间的转换
- transform-origin : 更改元素的基点  



相关属性值: *位移/旋转/缩放/倾斜*

- translate(x,y)   沿着x y 移动元素/ translateX(n)  translateY(n)    
- scale(x,y)  缩放  更改元素的宽度和高度 ,将宽度改为原来的x倍，高度改为原来的y倍 / scaleX(n) 更改宽度  scaleY(n)  更改高度
- rotate(angle)  旋转 
- skew(x-angle,y-angle)  定义2D 倾斜转换 沿着x轴和y轴  / skewX(angle) 沿着x轴转换  skewY(angle) 沿着y轴



### CSS3 3D

**相关属性**:

- transform:2d/3d之间的转换
- transition-origin:更改元素的基点
- transform-style:flat|preserve-3d 开启3d空间
- perspective    景深,一般值的范围在900px-1200px ,景深的值最好不要太夸张
- perspective-origin 景深基点
- backface-visibibility   背面隐藏



相关属性值：

- translateX | translateY | translateZ | translate3d(x,y,z)
- scaleX | scaleY | scaleZ | scale3d()
- rotateX(angle) | rotateY(angle) | rotateZ(angle)



### 动画 

Animation是一个简写属性，包含以下内容：

1、Animation-name    调用关键帧

2、Animation-duration   设置完成时间

3、Animation-timing-function   动画的速度曲线

4、Animation –delay                   延迟

5、Animation-iteration-count   动画应该播放的次数

N  设置播放次数    infinite   无限次播放  

6、Animation-direction        规定是否该轮流反向播放动画

Normal   alternate   动画应该轮流反向播放

7、Animation-play-state              暂停/运行

Paused  暂停

Running  运行

8、Animation-fill-mode   规定动画在播放之前或者之后，其动画效果是否可见

None  不改变默认

Forwards  当动画完成后保持最后一个属性值

Backwards  在Animation –delay指定的一段时间之内，在动画显示之前，应用开始属性值。

Both  向前和向后填充模式都被应用。

简写语法：

Animation: name duration timing-function delay iteration -count direction




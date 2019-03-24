day05

今日知识点：
css2中媒体查询的用法
常用断点
横屏竖屏的判断
移动端布局相关知识
通过弹性盒子模型+rem移动端布局
本周知识点复习

1. css2中媒体查询的用法
其实并不是只有CSS3才支持Media的用法，早在CSS2开始就已经支持Media，具体用法，就是在HTML页面的head标签中插入如下的一段代码
<link rel="stylesheet" type="text/css" media="screen" href="style.css">;
想知道现在的移动设备是不是纵向放置的显示屏，可以这样写：
<link rel=“stylesheet” type=“text/css” media=“screen and  (orientation:portrait)”  	href="style.css">
orientation:portrait：指定输出设备中的页面可见区域高度大于或等于宽度
landscape：除portrait值情况外，都是landscape
第一段的代码也用CSS2来实现，让它一样可以让页面宽度小于960的执行指定的样式文件：
<link rel="stylesheet" type="text/css" media="screen and (max-width:960px)" href="style.css">


2. 常用断点
    320px
    480px
    768px
    1024px

3. 横屏竖屏的判断
    /* 竖屏 */
    @media screen and (orientation:portrait) {对应样式}

    /* 横屏 */
    @media screen and (orientation:landscape){对应样式}
4. 移动端布局相关知识
    移动端布局相关知识点.doc

5.通过弹性盒子模型+rem进行移动端项目开发

6. 本周知识点复习
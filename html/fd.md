day04  

1. 盒子模型
盒子模型包含有五个元素 width height padding(内边距) border margin(外边距)

border:1px solid red;

1px 表示border的宽度
solid 线型
red 颜色

border-width:1px
border-style:solid
border-color :red

border-top
border-right
border-bottom
border-left

div {
	border:1px solid red;
	border-bottom:1px solid blue;
	border-bottom-color:blue;

	border-top-width:1px 
	border-top-style:solid
	border-top-color:red;
}

2. 标准文档流
所谓的文档流指的就是元素(标签)排版(浏览器解析的时候)，顺序是从上向下 从左向右

标准文档流微观现象：
	a:空白折叠
	b:高矮不齐，底边对齐
	c:自动换行 一行写不满就换行写  

标准文档流中的元素等级问题：
块级元素和行内元素

	行内元素的特性:
		a: 没有办法设置宽度和高度，宽度和高度只能凭借内容去撑起来，如果行内元素当中没有内容的话，就会缩成一小条。
		b: 多个行内元素可以并排显示
	块级元素的特性:
		a: 可以设置宽度和高度
		b: 如果一个块级元素没有设置宽度，那么这个块级元素宽度就会默认占满当前屏幕宽度的百分百。
		c: 块级元素不能和其他元素并排显示

	常用的块级元素标签:
		div p h1-h6  列表 ul li ol li dl dt dd 
	常用的行内元素标签:
		b  span em i u s a

	行内元素与块级元素相互转换  -- display 
	如果想要把行内元素转换成块级元素 display:block;
	如果想要把块级元素转换成行内元素  display:inline;
	display:inline-block; 转换成行内块元素 (特性：既可以设置宽高又可以并排显示)

3. 浮动
html网页中对于元素的种种限制，其实都来自于标准文档流，例如行内元素不能设置宽度和高度，块级元素不能并排显示等等，那么想要摆脱这些限制，那么就需要"脱离标准文档流".

脱离标准文档流的方法有三种:
	浮动
	绝对定位
	固定定位


浮动：
	float: 浮动
		值: left/right;

浮动的标准特性:
	1.让元素脱离标准文档流
	2. 浮动会让元素相互紧贴
	3. 会存在字围效果
	4. 收缩效果


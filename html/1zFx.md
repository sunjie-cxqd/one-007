第一周任务复习:

1. 网页当中包含的三个基础
html  网页结构
css   网页样式
js    交互

2. html定义

超文本标记语言。 .html 

3. html的核心
语义。

4. 常用的标签

5. 相对路径和绝对路径

相对路径：相当于当前文件来讲的位置  ./ ../  ../../
绝对路径:  从盘符开始算起  

6.表格 和 表单

table 
	tr	行
		td  单元格 
		th 表格标题

form 
	input type 属性的值 :text 文本框  password 密码框  email 邮箱  submit 提交 reset 重置 radio单选 checkbox 复选
						button 按钮  
		select  option 下拉框 
		textarea 文本输入域
	
	label 将文字和输入框绑定


	<form action="数据提到什么地方" method="数据通过什么方法提交"> 
		action:将数据提到到具体的某个后台文件
		method:提交的方法 get/post 
		<label>
			请输入用户名:
			<input type="text" name="user" placeholder="请输入用户名">
		</label>
		<label for="user">
			请输入密码
		</label>
		<input type="password" name="pwd" id="user" placeholder="请输入密码">
		<input type="text" name="username" placeholder="提示信息" value="默认值">
		<input type="radio" name="sex" value="m" checked> 男
		<input type="radio" name="sex" value="w"> 女

		<input type="checkbox" name="like" value="eat" checked> 吃
		<input type="checkbox" name="like" value="drink"> 喝
		<input type="button">
		<input type="submit">
	</form>	

-------------------------------------------------------------------------------------------------------
css

1. 什么是CSS?
层叠样式表。是用来给html设置样式的计算机语言。

2. 核心 
层叠
	:
		1. 一个标签展示给用户看的最终的样子是由很多样式层叠之后的效果
		2. 当多种css同时作用在一个标签的身上并且发生了冲突，层叠效果将会变成什么样?
		div {
		width:200px;
		height:200px;
	}
		.d1 {
		font-size:100px;
	}
		<div class="d1"></div>

3. css使用方式
<div style=""></div>
<style></style>
<link rel="stylesheet" href="">
<style>
@import url("")
</style>

4. css的选择器
三种基本选择器
	id 、class、html标签选择器
其他高级选择器
	* 通配符 
	后代选择器
	子元素选择器
	交集选择器
	并集选择器
	序列选择器
	相邻兄弟选择器
	普通兄弟选择器
5. 标准文档流
从上到下、从左到右
	现象:空白折叠现象  自动换行  高矮不齐底边对齐
	元素等级:块级元素和行内元素

	display:none/inline/block/inline-block .... 
	元素设置为display:none; 那么这个元素就会消失

	如果想要让元素摆脱标准文档流的限制:
		浮动
		绝对定位
		固定定位
	<!-- <div></div> -->
	<!-- <a href=""></a> -->
	<!-- <div style="display: none;">hello,world</div> -->

6. 浮动
float:left;
float:right;
tip：在一个父元素当中，如果其中的一个子元素浮动了，那么另外的同级子元素最好也一起浮动。


	<div>
		<div class="d1"></div>
		<div class="d2"></div>
	</div>  


clear:left;right;both;

<div class="clear"></div>
.clearfix:after,.clearfix:before {
	content:" ";
	display:table;
}
.clearfix:after {
	clear:both;
}


<div class="clearfix">
	<div class="d1">float</div>
	<div class="d2">float</div>
</div>

<div></div>


浮动特性:
	脱离标准文档流
	元素互相紧贴
	字围效果
	收缩效果


7. 盒子模型:
	width height border padding  margin

	内容的宽度
	内容的高度
	边框  border:border-style border-color border-width 尽量采用简写
	内边距  边框到内容的距离 
	外边距  两个盒子的距离

	Tip：所有的标签都可以看做是一个盒子

	margin:0 auto;

	div {
	width:300px;
	height:300px;
	border:1px solid #ccc;
	padding:10px;
}
300 + 2 + 20 
300px * 300px; 怪异盒子模型  老版本ie里面 
300 - 2 -20 



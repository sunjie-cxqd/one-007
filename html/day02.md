<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>周三回忆录</title>
</head>
<body>
	<h1>周三回忆录</h1>
	<hr>
	<h3>绝对路径和相对路径</h3>
	<p>
		<!-- 绝对路径：从盘符(根)开始计算路径 -->
		<em>D:/files/day03/coding/test/01.html</em>
		<!-- 相对路径: 相当于发问者本身来计算路径 -->
		<em>../test/01.html</em>
		<em>./images/1.jpg</em>
		<em>images/1.jpg</em>
	</p>
	<h3>超链接跳转本地文件</h3>
	<p>
		<!-- 采用绝对路径或者相对路径，来进行本地文件的跳转 -->
		<a href="label.html">label.html</a>
	</p>
	<h3>表单</h3>
	<p>
		<!-- 表单主要由两个标签构成: input 、 form -->
		<!-- form标签有两个属性:action、method
			action:表示将数据提交给谁
			method:通过什么方法提交 get/post

			get / post区别：
				1. get 安全程度低，数据量有限，但是速度快。
				2. post 安全。数据量大，但是相对于get会慢一些
		 -->
		<form action="" method="">
		<!-- label可以和input标签相互配合，作用是点击label里面的文字内容时，光标会跳转
		到input内，可以提高用户体验度 
		我们在使用label的时候，需要注意，for的属性值必须和input标签的id相同 
		还可以将input放在label标签内部，也可以达到相应的效果-->
			<label>
				用户名: <input type="text">
			</label>
	
			<!-- input标签本质上都是一样的，但是为了满足不同的功能，所以可以使用type属性来更改input的功能。
			type的属性值:
			text 文本
			password 密码
			radio 单选
			checkbox 多选
			submit 提交 
			color 颜色 
			reset 重置
			button 普通按钮
			email 邮箱
			search 搜索 -->
			<!-- input的value属性：
			value是设置输入框的默认值。如果当前输入框存在了placeholder提示信息，那么就不需要使用
			value。
			在select+option组成的下拉选项菜单 和 单选  和 多选当中，value里面的值是给后台使用的。 -->
	
			<!-- checked 表示默认值(单选或者多选的默认值，表示默认选项)，是一个无值属性
			disabled 表示禁用当前的输入框，也是一个无值属性 -->
	
			<!-- 全局属性: title name id  -->
			<!-- button 标签是一个按钮，主要是用来和js进行交互组合使用的。
			input type=submit 形成的按钮是用来提交数据的 -->
	
			<!-- textarea 多行文本输入  cols宽  rows高-->
			<textarea name="" id="" cols="30" rows="10"></textarea>
		</form>
	</p>
	
	<h3>表格</h3>
	<hr>
	<p>
		<table>
			<!-- 
				border 边框
				width 宽度
				height 高度  
				bgcolor 背景颜色
				cellspacing 单元格之间的间距
				cellpadding 单元格与内容之间的间距
				colspan 横向合并
				rowspan 纵向合并 
				Tip：你合并一个，就要把你侵占位置的那个格子删除
			 -->
			<tr>
				<!-- 第一行的标签上面设置宽度，那么后面的每一行宽度都会受到影响 -->
				<th>Name:</th>
				<th>age:</th>
				<th>skill:</th>
				<th>where:</th>
			</tr>
			<tr>
				<td>张三丰</td>
				<td>200</td>
				<td>打着打着就忘了怎么打的拳</td>
				<td>武当山</td>
			</tr>
			<tr>
				<td>杨逍</td>
				<td>40</td>
				<td>干申大那多</td>
				<td>光明顶</td>
			</tr>
		</table>
	</p>
	
	<h3>
		css
	</h3>
	
	<hr>
	
	<p>
		Css 是用来装修(修饰)html的计算机语言，官方叫做层叠样式表。
		我们说css的核心就在于层叠两个字身上。
		一个看上去很美的网页是经过很多的样式叠加在一起形成的效果。
	
		css的使用方式有三种:
	
		<ul>
			<li>style属性 ，实例：style="color:red;"</li>
			<li>style标签, 实例： div {color:red;}</li>
			<li>link标签， 实例: link  rel="stylesheet" href="css文件的路径位置"</li>
		</ul>
	
		如何创建一个单独的css文件?
			<ol>
				<li>创建一个文本文档</li>
				<li>更改文件后缀</li>
				<li>改为.css</li>
			</ol>
	
		今天还学了一个css属性:
		color : red; color 表示颜色  
		在css当中表示颜色可以使用英文单词、也可以使用进制、也可以使用rgb。
		英文单词:red,green ,orange,yellow,purple,white,black...
		进制: #cccccc #f2f2f2 
		rgb: r 0-255 g 0-255 b 0-255 rgb(0,0,0)
	</p>
</body>
</html>
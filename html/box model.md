<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>css盒模型和文本溢出</title>
<style>
*{ margin:0; padding:0;}
body{ padding: 30px; padding-top:10px; line-height: 35px; font-family: "微软雅黑";}
h1,h2{padding: 20px 0;}
h3{    background: #00AA88;
    color: #FFFCF4;
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0;
    border-radius: 4px;
    padding: 5px 0px 5px 15px;}
p{ line-height: 40px;}
ul li{ list-style: none;line-height: 40px;}
span{ color: #199475; font-weight: 700; font-size:18px; display: block; border-radius: 4px; padding: 10px; font-size: 18px; padding-left: 0px;}
em{ font-style: normal; color:red;}
.other{ color:#044D22;}
.oo{ color:red; display:inline; font-size:18px; font-weight:normal;}
.marleft{ margin-left:30px;}
.marbtom{ margin:15px 0; font-weight:600;}
.borderbtm{ border-bottom: solid 1px #eee;
				    padding-bottom: 15px;margin-bottom: 15px;}
.textcon{
	    margin: 10px 0;
    border: solid 1px #ddd;
    border-left-width: 6px;
    padding: 10px;
    border-radius: 4px;
    border-color: #f60;
	
}
.oos{ color:#000; font-weight:800;}
</style>
</head>

<body>
<div class="boxs">
	<h1>Day4：css盒模型</h1>
    <h2>学习目标</h2>
    <ul >
    	<li>1、认识盒子模型</li>
    	<li>2、盒子模型的组成部分</li>
    	<li>3、学习盒子模型的相关元素 margin  padding</li>
    </ol>
<h3>一、css盒模型的概念及组成</h3>
<p>概念：盒模型是css布局的基石，它规定了网页元素如何显示以及元素间相互关系。css定义所有的元素都可以拥有像盒子一样的外形和平面空间.</p>
    <p>盒模型的组成：边框、边界/边距、补白/填充、内容区。 </p>
    <p><img src="box1.JPG" width="746" height="455"></p>
    <h3>二、盒子模型的相关元素</h3>
    <ul>
    	<li>
    		<span>1、padding的使用方法</span>
    		<p><b>说明：</b></p>
			<p>填充：padding,在设定页面中一个元素内容到元素的边缘(边框) 之间的距离。 也称补白或填充。</p>
			<p><b>用法：</b></p>
		  <p>1）用来调整子元素在父元素中的位置。</p>
<p>注：padding属性需要添加在父元素上。</p>
<p>2）padding值是额外加在元素原有大小之上的，如想保证元素大小不变，需从元素宽或高上减掉后添加的padding属性值</p>
<p><b>属性值的4种方式：</b></p>
  <p>四个值：上   右   下   左 {padding:0px   0px   0px  40px;}</p>
  <p>三个值：上    左右    下 {padding:10px   20px   30px ;}</p>
  <p>二个值：上下    左右 {padding:10px   20px  ;}</p>
 <p> 一个值：四个方向 padding:2px;/*定义元素四周填充为2px*/</p>
 <p>说明：可单独设置一方向填充，如：上方向padding-top:10px;    右方向padding-right:10px;    下方向padding-bottom:10px;     左方向padding-left:10px;</p>

    	</li>
    	<li>
    		<span>2、margin的使用方法</span>
    		<p><b>说明：</b></p>
			<p>边界：margin,在元素外边的空白区域，被称为边距/边界。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“属性值的用法同上”</p>
<p>margin-left:左边界</p>
<p>margin-right:右边界</p>
<p>margin-top:上边界</p>
<p>margin-bottom:下边界</p>
<p><b>属性值的4种方式</b>：</p>
 <p> 四个值：上 右 下 左</p>
  <p>三个值：上 左右 下</p>
  <p>二个值：上下 左右</p>
 <p> 一个值：四个方向 margin:2px;/*定义元素四边边界为2px*/</p>
 <p> <em>margin:0 auto;/*一个有宽度的元素在浏览器中横向居中。</em></p>
<p>定义元素上、下边界为2px，</p>
<p>说明：可单独设置一方向边界，如：margin-top:10px;</p>
<p>注：/*上下边距重叠，左右边距相加*/</p>
    	</li>
    	</ul>
    	<h3>三、标准盒子大小计算方式 </h3>
    	<p>宽 =左右border+左右padding+width，</p>
<p>高 =上下border+上下padding+height，</p>
<p>例如：一个盒子的border 为 1px，padding 为 10px，content 的宽为 200px、高为 50px，</p>
<p>宽= border*2 + padding*2 + content.width =  1*2 + 10*2 +200 = 262px，</p>
<p>高= border*2 + padding*2 + content.height =  1*2 +10*2 + 50 = 112px，</p>
<p>怪异盒模型/IE盒子模型组成：margin+内容区</p>
<p>宽：width;</p>
<p>高:height;</p>
<h3>四、盒模型注意事项</h3>
<p><em>*margin值的解析：左右边界累加，正常文档流的上下边界重合。</em></p>
<p><em>*在正常文档流下，子元素（块）直接写margin-top时，会将margin-top属性值加上父元素身上,(子元素或父元素不设置任何浮动及定位的属性，或父元素不设置边框的情况下。)</em></p>
<h3>&nbsp;</h3>
<p>一个标记可以设置多个class名</p>
<p>语法：&lt;标记 class="名称1   名称2  &nbsp;&nbsp;名称3 " &gt;&lt;/标记&gt;</p>
<p>&amp;copy; 版权（圈C）</p>
<p>&nbsp;</p>
</body>
</html>

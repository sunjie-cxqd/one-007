<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CSS核心属性</title>
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
	<h1>Day3：CSS属性组成和作用</h1>
    <h2>学习目标</h2>
    <ul >
    	<li>1、css属性和属性值的定义</li>
    	<li>2、css文本属性</li>
    	<li>3、css列表属性</li>
    	<li>4、css背景属性</li>
    	<li>5、css边框属性</li>
    	<li>6、css浮动属性</li>
    </l>
    <h3>一、css属性和属性值的定义</h3>
    <p>属性：属性是指定选择符所具有的属性，它是css的核心，css2共有150多个属性</p>
    <p>属性值：属性值包括法定属性值及常见的数值加单位，如25px，或颜色值等。</p>
    <h3>二、CSS文本属性</h3>
    <ul>
    	<li>
   		<span>1、文本大小：{font-size:12px;}单位还可以是em，是父级元素的font-size的倍数；/系统默认的字号大小为16px</span></li>
    	<li>
    	  <p><b>说明：</b></p>
    	  <p>1） 属性值为数值型时，必须给属性值加单位，属性值为0时除外。</p>
    	  <p>2）单位还可以是pt，9pt=12px;</p>
    	  <p>3）为了减小系统间的字体显示差异，IE Netscape Mozilla的浏览器制作商于1999年召开会议，<em>共同确定16px/ppi为标准字体大小默认值,即1em.默认情况下，</em>1em=16px,0.75em=12px;  rem</p>
    	  <p><br />
   	      </p>
  	  </li>
    	
    	<li>
    		<span>2、文本字体：{font-family:字体1，字体2，字体3；}
</span>
    		<p><b>说明：</b></p>
				浏览器首先会寻找字体1、如存在就使用改字体来显示内容，如在字体1不存在的情况下，则会寻找字体2，如字体2也不存在，按字体3显示内容，如果字体3 也不存在；则按系统默认字体显示； <br />
			<em>当字体是中文字体时，需加双引号；</em><br />
			<em>当英文字体由多个单词组成时，需加双引号如（“Times New Roman”）</em><br />
			<em>当英文字体只有一个单词组成是不加双引号；如：（Arial）；</em><br />
			<em>Windows中文版本操作系统下，中文默认字体为宋体或者新宋体，英文字体默认为Arial.</em>
    	</li>
        <li>
    		<span>3、文本颜色：{color:颜色值;}red/#f00/rgb(255,0,0)</span>
    		<p><b>说明：</b></p>
				用十六进制(是计算机中数据的一种表示方法)表示颜色值：<br />
				0  1  2  3  4   5  6  7  8  9<br />
				0  1  2  3  4   5  6  7  8  9  A  B  C  D  E  F<br />
				颜色模式：光色模式<br />
				  R      G      B<br />
				FF      00     00<br />
				颜色值的缩写：<br />
				当表示三原色的三组数字同时相同时，可以缩写为三位;<br />
				当用十六进制表示颜色值时，需要在颜色值前加“#”<br />
				#  fa   00    00
    	</li>
        <li>RGB表示方式：color:rgb(255,0,0);</li>
    	<li>
    		<span>4、文字加粗font-weight:bolder(更粗的)/bold（加粗）/normal（常规）/100—900;</span>
    		<p><b>说明：</b></p>
		在css规范中，把字体的粗细分为9个等级，分别为100——900，其中100对应最轻的字体变形，而900对应最重的字体变形，</li>
   	  <li></li>
    	<li><br />
  	  </li>
    	<li>
    		<span>5、文本倾斜：font-style：italic/oblique/normal（取消倾斜，常规显示）;
</span>
    		<p><b>说明：</b></p>
				italic和oblique都是倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.
    	</li>
    	<li>
    		<span>6、水平对齐方式{text-align:left左/right右/center居中/justify两端对齐(在部分浏览器中，对于中文不起作用);} 只针对文本或图片
</span></li>
    	<li> <span>7、垂直对齐方式 {vertical-align:top上/bottom下/middle居中/baseline基线（某些特定的元素类型起作用）;}</span></li>
    	<li>        </li>
    	<li> </li>
    	<li>
    		<span>8、文字行高 {line-height:normal/value;}line-height:20px; line-height:2em; (当行高的单位省略时，默认为em)</span>
   		    <p><b>说明：</b></p>
    		<p>				当单行文本的行高<em>等于</em>容器高时，可实现单行文本在容器中<em>垂直方向居中对齐；</em><br />
				当单行文本的行高<em>小于</em>容器高时，可实现单行文本在容器中<em>垂直中齐以上；</em><br />
				当单行文本的行高<em>大于</em>容器高时，可实现单行文本在容器中<em>垂直中齐以下</em>（IE6及以下版本存在浏览器兼容问题）
<br />
    	    </p>
    	</li>
    	<li></li>
    	<li></li>
    	<li>
		<span>9、文本修饰 					text-decoration:none/underline/overline/line-through
		</span>
		<p><b>说明：</b></p>
		none:没有修饰<br />
		underline:添加下划线<br />
		overline:添加上划线<br />
		line-through:添加删除线
		</li>
    	<li></li>
		<li>
			<span>10、首行缩进：{text-indent:value;}</span>
			<p><b>说明：</b></p>
			<p>1）text-indent可以取负值；</p>
			<p>2）text-indent属性只对第一行起作用。</p>
    	</li>
        <li>
		<span>11、检索英文字母大小写{text-transform:none无转换/capitalize首字母大写/uppercase全都大写/lowercase全都小写;}。</span></li>
    	<li>
			<span>12、字间距{letter-spacing:value;}控制英文字母或汉字的字距。</span>
    	</li>
    	 	<li>
		<span>13、词间距{word-spacing:value;}控制英文单词词距。</span></li>
    	 	<li> </li>
    			<li>		</li>
    			<li><span>扩展：14、文本流控制{layout-flow:horizontal/vertical-ideographic;}</span>
    			  <p><b>说明：</b></p>
    			  <p>1）horizontal:自左向右</p>
    			  <p>2）vertical-ideographic:自上而下		</p>
  			  </li>
              <li><span>15、文字属性简写：font:bolder    italic   12px/1.5em  "宋体";  &nbsp;&nbsp;&nbsp;&nbsp;简写时，字体和字号是必备</span>

font属性的简写：字号，行高，字体

说明:font的属性值应按以下次序书写(各个属性之间用空格隔开)

顺序: font-style     font-weight     font-size / line-height      font-family
</li>
              <li>(1)简写时 , font-size和line-height只能通过斜杠/组成一个值，不能分开写。                </li>
      <li>(2) 这种简写法只有在同时指定font-size和font-family属性时才一起作用,如果你没有设定font-weight , font-style , 他们会使用缺省值。 </li>
    </ul>
<h3>三、CSS列表属性</h3>
<ul>
	<li>
		<span>1、定义列表符号样式
		</span>
		<p>list-style-type：disc(实心圆)/circle(空心圆)/square(实心方块)/none(去掉列表符号)；</p>
	</li>
	<li>
		<span>2、使用图片作为列表符号
		</span>
		<p>list-style-image：url(所使用图片的路径及全称)；
		</p>
	</li>
	<li>
		<span>3、定义列表符号的位置
		</span>
		<p>list-style-position:outside(外边)/inside(里边)；
		</p>
		<p><em>list-style:none;去掉列表符号 </em></p>
		<h3>四、边框的属性和属性值</h3>
        <p>border:边框宽度 边框风格 边框颜色;</p>
        <p>例如：border:5px solid #ff0000        </p>
        <p>边框宽度：border-width:</p>
        <p>边框颜色：border-color:</p>
        <p>边框样式：<em>border-style:solid(实线)/dashed(虚线)dotted(点划线)double(双线)</em>none(去掉边框);        </p>
        <p>可单独设置一方向边框，</p>
        <p>border-bottom:边框宽度 边框风格 边框颜色;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;底边框</p>
        <p>border-left:边框宽度 边框风格 边框颜色;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;左边框</p>
        <p>border-right:边框宽度 边框风格 边框颜色;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;右边框</p>
        <p>border-top:边框宽度 边框风格 边框颜色;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上边框</p>
        <p>&nbsp;</p>
	</li>
</ul>
<h3>五、CSS背景属性</h3>
<ul>
	<li>
		<span>1、背景颜色 {background-color:颜色值;}</span>		
	</li>
	<li>
		<span>2、背景图片的设置  background-image：url(背景图片的路径及全称）；</span><br />


	</li>
	<li>
	  <span>3、背景图片平铺属{background-repeat:no-repeat不平铺/repeat平铺/repeat-x&nbsp; X轴平铺/repeat-y &nbsp;&nbsp;Y轴平铺 } </span>	
	</li>
	<li>
    <span>4、背景图的位置{background-position:left/center/right/数值  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top/center/bottom/数值;} </span></li>
	<li></li>
	<li>水平方向上的对齐方式（left/center/right）或值 <br />
垂直方向上的对齐方式(top/center/bottom)或值 <br />
background-position:值1    值2; <br />
两个值 ：第一个值表示水平位置的值，第二个值：表示垂直的位置。 <br />
当两个值都是center的时候写一个值就可以代表的是水平位置和垂直位置 ；</li>
  <li>当元素小背景图大的时候，想显示右下方的背景图，通过负值来调整背景图的位置；</li>
	<li>
		<span>5、背景图的固定{background-attachment:fixed固定/scroll滚动;}
</span></li>
	<li>fixed 固定，不随内容一块滚动，根据可视窗口固定位置；<br />
scroll:随内容一块滚动。<br />
      <em>网页上常用的图片格式</em><br />
	  1）jpg :有损压缩格式，靠损失图片本身的质量来减小图片的体积，适用于颜色丰富的图像;(像素点组成的，像素点越多会越清晰 )<br />
	  2）gif：无损压缩格式，支持透明，支持动画，适用于颜色数量较少的图像;<br />
	  3）png:无损压缩格式，支持透明，不支持动画，(是fireworks的 源文件格式)，适用于颜色数量较少的图像;
  <br />
  </li>
</ul>
<h3>六、CSS浮动属性</h3>
<p>
<em>语法：float:none/left/right;</em><br />
浮动的目的：就是让竖着的元素横着显示</p>
<p>一个元素设置float：left/right;时，元素会脱离文档流（半脱离），不占空间；<br />
  有三个取值：<br />
  left:元素向左浮动<br />
  right:元素向右浮动<br />
none:默认值，不浮动。<br />
</p>

<p><img src="float.jpg" alt=""/></p>
<p><em>清除浮动可以理解为打破横向排列</em>。</p>
<p><em>清除浮动的属性是clear，语法：</em></p>
<p>clear : none | left | right | both</p>
<p>none：默认值。允许两边都可以有浮动对象</p>
<p>left：清除左浮动/不允许左边有浮动对象</p>
<p>right  :  清除右浮动/不允许右边有浮动对象</p>
<p>both  :  清除两端浮动/不允许有浮动对象</p>
<p><em>有一点是要记住的那就是</em></p>
<p>对于CSS的清除浮动(clear)，一定要牢记：这个规则只能影响使用清除的元素本身，不能影响其他元素</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span>扩展：</span></p>

</body>
</html>

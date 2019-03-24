day03 

颜色和渐变

1. rbg、英文单词 、进制 rgba。
	
	不透明度:
		rgba
		opacity: 使用的时候会连字都变得透明
		
2. 颜色渐变 --- 应用在元素的背景上
渐变分为两种：线性渐变 和 径向渐变

linear-gradient() 线性渐变  

	Tip：线性渐变的初始颜色变化默认是从上到下。
		而且，渐变必须设置在background的身上。
		
		background-image: linear-gradient;
	

	首先，线性渐变是支持多个颜色渐变的。
		background: linear-gradient(red,yellow,blue,pink);
	
	设置渐变方向：
		background: -webkit-linear-gradient(bottom,red,pink);
	如果在参数里直接设置方向，那么需要加浏览器前缀。
	如果在方向的前面加上to，那么就不需要加浏览器前缀。
		background: linear-gradient(to left,red,pink);
		to left 、 to right 、 to top 、to bottom ,没有to center
	当然，关于方向我们也可以组合来使用：
		to left top 或者top left bottom.....
		
	我们除了设置具体的方向值，还可以通过  angle 来设置角度。
	
		在代码中deg表示角度
			0deg表示从下向上
			如果角度为正，则为顺时针，如果角度为负，则为逆时针。
			
	渐变百分比
		background: linear-gradient(to left,red 10%,black 90%);
		方向：从右到左，
			表示从起始方向开始，从右向左的10%为纯红色，从10%到90%为红色向黑色的渐变色，剩下的
			为纯黑色。
			
		练习：
			红、绿、蓝、黄
			
			灰  绿 灰  绿  
			
	线性渐变在IE:
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',
		endColorstr='#ff0000',GradientType='1');   
	GradientType = 0 方向是从上向下  1为从左向右

	重复线性渐变
		一个渐变的过程已经完成，后续重复的进行这个过程。
		repeating-linear-gradient() ;
		
	
	
radial-gradient:径向渐变
	方向：
		left top right bottom ，前面要加webkit
		也可以设置具体的值：apx  bpx 
	还可以设置圆的形状：
		正圆:circle
		椭圆:ellipse
		
		
圆角

border-radius:圆角
	boder-top-left-radius: 左上
	border-top-right-radius:右上
	border-bottom-right-radius:
	border-bottom-left-riadus:
	
	border-radius：可以设置一个值到四个值。
		顺序：
			1个值：四个角
			2个值: 左上右下 右上左下
			三个值:  左上  右上左下  右下 
			四个值: 左上 右上  右下  左下 
			
			
	如何通过border-radius做一个圆
	
	
border-image 边框图片
	目前IE11以上才支持。
	
	
	border-image 是一个简写值，分别有以下属性值,
		border-image-source	图片地址
		border-image-slice   图片切片
		border-image-width  图片宽度
		border-image-outset  图片外凸
		border-image-repeat  图片重复  

	
	border-image-slice：图像切片
		值：number  | 百分比  {1,4}
		Tip：
			{1,4} 表示最少一个值，最多四个值
		指定边框图像顶部，右侧，底部，左侧内偏移量。没有具体的单位值，px em rem都不可以。
		只可以用数字或者百分比。
	
	
	border-image-width  图片宽度  
		值：lenghth | number | 百分比 {1,4}
		
	border-image-outset  图片外凸
	
	border-image-repeat  图片重复  
	
盒子阴影

box-shadow :
	h-shadow v-shadow blur spread color inset;
	
	h-shadow：水平阴影的位置 允许负值
	v-shadow：垂直阴影的位置 允许负值
	blur : 模糊值
	spread 阴影的大小
	color	颜色
	inset 
	
	
	
	
----------------------------------------------------------------------
弹性盒子模型

盒子模型和怪异盒子模型
什么是弹性盒子模型
旧版本弹性盒子模型简单介绍
新版本弹性盒子模型属性
分栏布局

1. 盒子模型：

	box-sizing:border-box|content-box;
	
2. 怪异盒子模型


3. 弹性盒子模型 
	
	学习弹性盒子模型之前的准备:
		主轴、侧轴、弹性容器、弹性子元素。
		
	display:flex；
		将元素变为弹性容器，那么这个元素里面的子元素自然而然的就变成了弹性子元素。(容器是一个
		块级元素)
	display:inline-flex;
		容器是一个行内flex元素。
	
	
	
	弹性容器专用：
	flex-direction:弹性容器中子元素的排列方式(主轴排列方式)
    flex-wrap:设置弹性盒子的子元素超出父容器时是否换行
    flex-flow:flex-direction 和 flex-wrap 的简写
    align-item:设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式
    align-content:修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐(行与行的对其方式)
    justify-content:设置弹性盒子元素在主轴（横轴）方向上的对齐方式
	
	
	flex-direction:弹性容器中子元素的排列方式(主轴排列方式)【子元素在主轴上的排列方式】
		属性值：
            row:默认在一行排列
            row-reverse:反转横向排列（右对齐，从后往前排，最后一项排在最前面。）
            column：纵向排列。
            column-reverse：反转纵向排列，从下往上排，最后一项排在最上面
	
	flex-wrap:设置弹性盒子的子元素超出父容器时是否换行 
		Tip:横轴的方向决定了新行堆叠的方向。
        属性值：
            nowrap: 默认值。规定元素不拆行或不拆列。
            wrap:规定元素在必要的时候拆行或拆列。
            wrap-reverse:规定元素在必要的时候拆行或拆列，但是以相反的顺序。
	
	flex-flow:flex-direction 和 flex-wrap 的简写
	
	
	
	align-item:设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式
	
	相关属性：
        flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
        flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
        center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
        baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。

		
	align-content:修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，
			而是设置行对齐(行与行的对其方式)
			 相关属性：
		说明：
		当伸缩容器的侧轴还有多余空间时，本属性可以用来调准「伸缩行」在伸缩容器里的对齐方式，这与调准伸缩项目在主轴上对齐方式的 <' justify-content'> 属性类似。请注意本属性在只有一行的伸缩容器上没有效果。
		■ flex-start没有行间距
		■ flex-end底对齐没有行间距
		■ center居中没有行间距
		■ space-between两端对齐，中间自动分配
		■ space-around自动分配距离
		
	justify-content:设置弹性盒子元素在主轴（横轴）方向上的对齐方式
		说明：
        内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐
        ■ flex-start默认，顶端对齐
        ■ flex-end末端对齐
        ■ center居中对齐
        ■ space-between两端对齐，中间自动分配
        ■ space-around自动分配距离
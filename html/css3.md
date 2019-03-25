## Css3的概念和优势

CSS3是css技术的升级版本，CSS3语言开发是朝着模块化发展的。以前的规范作为一个模块实在是太庞大而且比较复杂，所以，把它分解为一些小的模块，更多新的模块也被加入进来。这些模块包括： 盒子模型、列表模块、超链接方式 、语言模块 、背景和边框 、文字特效 、多栏布局等。

css3的优点：CSS3将完全向后兼容，所以没有必要修改现在的设计来让它们继续运作。网络浏览器也还将继续支持CSS2。对我们来说，CSS3主要的影响是将可以使用新的可用的选择器和属性，这些会允许实现新的设计效果（譬如动态和渐变），而且可以很简单的设计出现在的设计效果（比如说使用分栏）

## 渐进增强和优雅降级 

渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。 
优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。 
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。 

## CSS3选择器 

### 一、层级选择器

E>F 子选择器 选择匹配的F元素，且匹配的F元素所匹配的E元素的子元素

E+F       相邻兄弟选择器      选择匹配的F元素，且匹配的F元素紧位于匹配的E元素的后面

E~F       通用选择器      选择匹配的F元素，且位于匹配的E元素后的所有匹配的F元素 

### 二、属性选择器

1、E[attr]：只使用属性名，但没有确定任何属性值；
2、E[attr="value"]：指定属性名，并指定了该属性的属性值；
3、E[attr~="value"]：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
4、E[attr^="value"]：指定了属性名，并且有属性值，属性值是以value开头的；
5、E[attr$="value"]：指定了属性名，并且有属性值，而且属性值是以value结束的
6、E[attr*="value"]：指定了属性名，并且有属性值，而且属值中包含了value；
7、E[attr|="value"]：指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）; 

### 三、伪类选择器 

#### 1、结构性伪类选择器 

X:first-child 匹配子集的第一个元素。IE7就可以支持
X:last-child匹配父元素中最后一个X元素
X:nth-child(n)用于匹配索引值为n的子元素。索引值从1开始
X:only-child这个伪类一般用的比较少，比如上述代码匹配的是div下的有且仅有一个的p，也就是说，如果div内有多个p，将不匹配。
X:nth-of-type(n)匹配同类型中的第n个同级兄弟元素X
 X:only-of-type匹配属于同类型中唯一兄弟元素的X
 X:first-of-type匹配同级兄弟元素中的第一个X元素
X:nth-last-child(n)从最后一个开始算索引。
X:nth-last-of-type(n) 匹配同类型中的倒数第n个同级兄弟元素X
 X:root匹配文档的根元素。在HTML（标准通用标记语言下的一个应用）中，根元素永远是HTML
 X:empty匹配没有任何子元素（包括包含文本）的元素X

#### 2、目标伪类选择器 

E:target		选择匹配E的所有元素，且匹配元素被相关URL指向 

#### 3、UI 元素状态伪类选择器 

E:enabled	 匹配所有用户界面（form表单）中处于可用状态的E元素
E:disabled	 匹配所有用户界面（form表单）中处于不可用状态的E元素
E:checked	 匹配所有用户界面（form表单）中处于选中状态的元素E
 E:selection	 匹配E元素中被用户选中或处于高亮状态的部分 

#### 4、否定伪类选择器 

E:not(s)			（IE6-8浏览器不支持:not()选择器。）
 匹配所有不匹配简单选择符s的元素E 

#### 5、动态伪类选择器 

E:link
链接伪类选择器 
  选择匹配的E元素，而且匹配元素被定义了超链接并未被访问过。常用于链接描点上 
E:visited  
链接伪类选择器
 选择匹配的E元素，而且匹配元素被定义了超链接并已被访问过。常用于链接描点上 
E:active
用户行为选择器
 选择匹配的E元素，且匹配元素被激活。常用于链接描点和按钮上 
E:hover
用户行为选择器
 选择匹配的E元素，且用户鼠标停留在元素E上。IE6及以下浏览器仅支持a:hover 
 E:focus 用户行为选择器 选择匹配的E元素，而且匹配元素获取焦点 

## CSS3文本属性 

### 浏览器前缀的简介及应用 

某些CSS属性还只是最新版的预览版，并未发布成最终的正式版，而大部分浏览器已经为这些属性提供了支持，但这些属性是小部分浏览器专有的；有些时候，有些浏览器为了扩展某方面的功能，它们会选择新增的一些CSS属性，这些自行扩展的CSS属性也是浏览器专属的。为了让这些浏览器识别这些专属属性，CSS规范允许在CSS属性前增加各自的浏览器前缀。 

![img](file:///D:/File/日常学习/day11/day02/资料/笔记/a.png)

### 文本阴影属性语法及应用

![img](file:///D:/File/日常学习/day11/day02/资料/笔记/a.jpg)



说明：水平、垂直阴影的位置允许负值            可进行多阴影设置 

### 文本换行的相关属性 

#### Word-wrap 

属性值：

normal
说明：只在允许的断字点换行（浏览器保持默认处理）
break-word
说明：属性允许长单词或 URL 地址换行到下一行。
 属性用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。 

#### Word-break 

属性值：
break-all
说明：它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句
Keep-all
说明：文本不会换行，只能在半角空格或连字符处换行。 

### @font-face 

​        @font-face是CSS3中的一个模块，他主要是把自己定义的Web字体嵌入到你的网页中，随着@font-face模块的出现，我们在Web的开发中使用字体不怕只能使用Web安全字体（@font-face这个功能早在IE4就支持） 

@font-face的语法规则：@font-face {
	font-family: <YourWebFontName>; 
	 src: <source> [<format>][,<source> [<format>]]*;  
	[font-weight: <weight>];  
	[font-style: <style>];  
	} 

#### @font-face语法说明： 

1、YourWebFontName:此值指的就是你自定义的字体名称，最好是使用你下载的默认字体，他将被引用到你的Web元素中的font-family。如“font-family:"YourWebFontName";” 
2、source:此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝路径； 
3、format：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：truetype,opentype,truetype-aat,embedded-opentype,avg等； 
4、weight和style:这两个值大家一定很熟悉，weight定义字体是否为粗体，style主要定义字体样式，如斜体。 

实例：@font-face {
	font-family: 'icomoon';
	src:url('fonts/icomoon.eot');
	src:url('fonts/icomoon.eot?#iefix') format('embedded-opentype'),
	url('fonts/icomoon.svg#icomoon') format('svg'),
	url('fonts/icomoon.woff') format('woff'),
	url('fonts/icomoon.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
} 

### CSS3 背景的新增属性 

#### 1、Background-origin 背景原点 

说明：指定background-origin属性应该是相对位置	 属性值： padding-box	背景图像填充框的相对位置 
border-box	背景图像边界框的相对位置 
content-box	背景图像的相对位置的内容框 
 注：默认值为：padding-box; 

#### 2、Background-clip 背景裁切 

说明：background-clip 属性规定背景的绘制区域。 属性值：border-box	背景被裁剪到边框盒。
padding-box	背景被裁剪到内边距框。
content-box	背景被裁剪到内容框
。 
 注：默认值：border-box; 

#### 3、Background-size 背景尺寸 

说明： background-size 规定背景图像的尺寸 属性值：length
规定背景图的大小。第一个值宽度，第二个值高度。
Percentage(%)
以百分比为值设置背景图大小
cover
把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
contain
把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。 

#### 4、css3多背景属性

Eg:p{	background:url(demo.gif) no-repeat; //这是写给不识别下面这句的默认背景图片
background:url(demo.gif) no-repeat ,url(demo1.gif) no-repeat left bottom, url(demo2.gif) no-repeat 10px 15px; //这是高级浏览器的css多重背景，第一个最上面 
background-color:yellow; //这是定义的默认背景颜色，全部适合  } 

### CSS3 颜色特性 

#### 1、rgba 颜色模式 

#### 2、 Hsl 颜色模式（了解） 

#### 3、 Hsla 颜色模式（了解） 

### CSS3 边框的新增属性 

#### 1、border-color 

EG:border-color:red green #000 yellow;(上右下左) 

#### 2、border-image 

border-image 属性是一个简写属性，用于设置以下属性:
border-image-source	用在边框的图片的路径。
border-image-slice	图片边框向内偏移。
border-image-repeat	图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)
 border-image-outset	边框图像区域超出边框的量 

#### 3、Border-radius 圆角边框 

(1).box{     border-radius: 5px 10px 20px 50px          }

![bor1](D:\File\日常学习\day11\day02\资料\笔记\bor1.png)



(2).div1{border-radius: 2em/1em}


![bor2](D:\File\日常学习\day11\day02\资料\笔记\bor2.png)

以斜杠/分开后面的参数:
第一个参数表示圆角的水平半径，第二个参数表示圆角的垂直半径 

(3).div1{         border-radius:10px 20px 30px 40px**/**40px 30px 20px 10px }


![bor3](D:\File\日常学习\day11\day02\资料\笔记\bor3.png)

按顺时针的顺序，斜杠/左边是四个圆角的水平半径，右边是四个圆角的垂直半径，但是通常我们很少写右边的参数，那就是默认右边等于左边的值。 

### 4、box-shadow 盒子阴影 

属性值： 

![img](D:\File\日常学习\day11\day02\资料\笔记\img.png)



Eg:box-shadow: 10px 10px 5px #888888 
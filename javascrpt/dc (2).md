###### 数组的常用方法：

concat() 连接两个或更多的数组，并返回结果。 
join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 
pop() 删除并返回数组的最后一个元素 
push() 向数组的末尾添加一个或更多元素，并返回新的长度。 
reverse() 颠倒数组中元素的顺序。 
shift() 删除并返回数组的第一个元素 
slice() 从某个已有的数组返回选定的元素 
sort() 对数组的元素进行排序 
splice() 删除元素，并向数组添加新元素。 
unshift() 向数组的开头添加一个或更多元素，并返回新的长度。 

###### ES5新增的数组方法：

indexOf（） 在数组中查找一个数所在的位置
forEach（） 对数组的每个元素做某个处理（函数的方式）
map（）把原始数组的每个元素进行某种处理后，产生（映射）一个新的数组
filter（） 过滤的意思，根据条件过滤数组的元素

###### 字符串常用方法：

charAt() 返回在指定位置的字符。 
charCodeAt() 返回在指定的位置的字符的 Unicode 编码。 
concat() 连接字符串。 
fromCharCode() 从字符编码创建一个字符串。 
indexOf() 检索字符串。 
match() 找到一个或多个正则表达式的匹配。 
replace() 替换与正则表达式匹配的子串。 
search() 检索与正则表达式相匹配的值。 
slice() 提取字符串的片断，并在新的字符串中返回被提取的部分。 
split() 把字符串分割为字符串数组。 
substr() 从起始索引号提取字符串中指定数目的字符。 
substring() 提取字符串中两个指定的索引号之间的字符。  
toLowerCase() 把字符串转换为小写。 
toUpperCase() 把字符串转换为大写。 

###### Math对象的常用函数：

Math.round(3.6) //四舍五入 
Math.random() //返回0-1之间的随机数
Math.max(num1, num2) //返回较大的数 
Math.min(num1, num2) //返回较小的数 
Math.abs(num) //绝对值 
Math.ceil(19.3) //向上取整“20” 
Math.floor(11.8) //向下取整“11” 
Math.pow(x,y) //x的y次方 
Math.sqrt(num) //开平方

###### 日期对象的函数：

###### 获取时间：

getDate() //返回天
getDay() //返回星期几 ，从0开始
getHours() //返回小时数
getMinutes() //返回分钟数
getMonth() //返回月份值 ，从0开始
getSeconds() //返回秒数
getTime() //返回完整的时间 ，毫秒数
getFullYear() //返回年份

###### 设置时间：

setDate() //改变Date对象的日期
setHours() //改变小时数
setMinutes() //改变分钟数
setMonth() //改变月份，从0开始
setSeconds() //改变秒数
setTime() //改变完整的时间，毫秒数
setYear() //改变年份





###### 节点的操作

document.**createElement**(HTML标签名)   //创建一个元素节点

document.**createTextNode**(文字)    //创建一个文本节点

node.**appendChild**(newChild)   //newChild 被添加到孩子列表中的末端。

node.**insertBefore**(newChild, referenceNode) // 将 newChild 节点插入到 referenceNode 之前。

node**.removeChild**(oldChild)   //删除 oldChild子节点。

node.**replaceChild**(newChild, oldChild)  //用newChild节点替换oldChild节点

**window对象常用的属性和方法：**

###### 三个弹出框: 特点阻塞代码执行

**alert**("内容")   弹出框

**confirm**("提示信息")  确认框   确定返回true 取消返回false

**prompt**("提示信息","默认值")    输入框 返回数值为字符串    

 

###### 两个定时器：

?    **setInterval**（执行任务，间隔时间）: 连续执行定时器  **clearInterval()**

  **setTimeout**(执行任务,间隔时间):  用法同上 只执行一次  延时性 **clearTimeout()** 停止定时器(一般用的不太多)

###### 一个弹出窗口方法:

 **open**("路径","窗口的名称没有什么意义"，"弹出窗口的外观") : 返回值是弹出的子窗口

外观主要考虑:width height left top

关闭窗口 **close()**

 

//在主窗口中打开子窗口

open("sub.html","heihei","width=200,height=200,left=200,top=200");

//关闭当前窗口

close();

###### 一个事件：

**onload**事件:onload 事件会在页面或图像加载完成后立即发生。

window.onload = function(){

?        console.log("页面加载完成");

?    }

?    console.log("页面正在加载");

###### location 地址对象 

 页面跳转：

href属性：代表当前网页地址

**location.href**  可读写

 

?    //当前页面地址 读

?    document.write(location.href);

?    //页面在三秒后跳到外网

?    setTimeout(function(){

?        location.href = "http://www.baidu.com";

?        },3000);

 

**location.replace**("url")

//location.replace("index.html");

location.replace("http://www.baidu.com");   覆盖原先网页 没有浏览痕迹

 

页面刷新：

**location.reload**();

 

<input type="text">

<button onclick="fun()">刷新</button>

?    function fun(){

?        location.reload();

?    }



###### history对象

包含用户(在浏览器窗3.history

口中)访问过的 URL。

 

方法 ：

**back**() 加载 history 列表中的前一个 URL。

**forward**() 加载 history 列表中的下一个 URL。

**go**() 加载 history 列表中的某个具体页面，或者要求浏览器移动到指定的页面数量（负数为后退，正数为前进）

 

案例：不同页面间的跳转

?        1.</br>

?        <a href="2.html">向后</a>

?        <button onclick="history.forward()">下一页</button></br>

?        <button onclick="history.go(1)">跳转</button></br>

?        2.</br>

?        <a href="3.html">向后</a></br>

?        <a href="1.html">向前</a></br>

?        <button onclick="history.forward()">下一页</button></br>

?        <button onclick="history.back()">上一页</button></br>

?        3.</br>

?        <a href="2.html">向前</a></br>

?        <button onclick="history.back()">上一页</button></br>



###### document 文档对象

? 作用 找对象

每个载入浏览器的 HTML 文档都会成为 Document 对象。

Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问

Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问

 

document.write("<font color='red'>"+ 123 +"</font>"); write方法带解析功能

document.write() 向文档写 HTML 表达式 或 JavaScript 代码  注意：该方法在有事件的情况下会覆盖掉全页面

<button onclick="fun()">按钮</button>

function fun(){

?        document.write("下课啦");

}

 

**getElementById**() 返回对拥有指定 id 的第一个对象的引用。

**getElementsByName**() 返回带有指定名称的对象集合。

**getElementsByTagName**() 返回带有指定标签名的对象集合。

**getElementsByClassName**（） 通过类名返回

**querySelector**()  通过选择器返回

<!DOCTYPE html>

<html>

?    <head>

?        <meta charset="utf-8">

?        <title></title>

?    </head>

?    <body>

?        <input type="text" name="txt" value="123"/></br>

?        <input type="text" name="txt" value="456"/></br>

?        <input type="text" name="txt" value="777"/></br>

?        <input type="text" name="txt" value="888"/></br>

?    </body>

</html>

<script>

?    var a = document.getElementsByName("txt");

?    var str = " ";

?    for(var i=0; i<a.length; i++){

?        str += a[i].value;

?    }

?    document.write(str);

</script>







######  DOM节点、

根据层次关系访问节点： (包括文本和元素)

**parentNode** 返回节点的父节点

**childNodes** 返回子节点集合，childNodes[i]

**firstChild** 返回节点的第一个子节点，最普遍的用法是访问该元素的文本节点

**lastChild**  返回节点的最后一个子节点

**nextSibling** 下一个节点

**previousSibling** 上一个节点

<body id="bd">

?        <p>你好!</p>

?        <ul>

?            <li>1</li>

?            <li>2</li>

?            <li>3</li>

?            <li>4</li>

?        </ul>

?    </body>

</html>

<script>

?    var a = document.getElementById("bd");

?    var str = a.firstChild.nextSibling.innerHTML;

?    document.write(str);

</script>

 

通过层级关系访问元素节点

**firstElementChild** 返回节点的第一个子节点，最普遍的用法是访问该元素的文本节点

**lastElementChild** 返回节点的最后一个子节点

**nextElementSibling** 下一个节点

**previousElementSibling** 上一个节点

var str = a.firstElementChild.innerHTML;

 

节点类型：

通过**nodeType**属性来判断节点类型

1代表元素节点

2代表属性节点

3代表文本节点

<p id = "_p">123</p>

var p = document.getElementById("_p");

?    //元素类型     1

?    document.write(p.nodeType);

?    //文本类型

?    document.write(p.**firstChild**.nodeType);//3

?    //属性节点

?    document.write(p.**getAttributeNode**("id").nodeType);//2

# this代表当前点击的对象

##### 常见DOM0事件

**注：所有DOM0事件都有“on”作为开头**

onchange 域的内容被改变（下拉列表选择改变）。
onclick 当用户点击某个对象时调用的事件。
ondblclick 当用户双击某个对象时调用的事件。
onfocus 元素获得焦点。
onblur 元素失去焦点。
onkeydown 键盘上某个按键被按下。
onkeyup 键盘上某个按键被松开。
onkeypress 键盘上某个按键被按下并松开。
onload 一张页面或一幅图像完成加载。
onmousedown 鼠标按钮被按下。
onmouseup 鼠标按键被松开。
onmouseover 鼠标移到某元素之上。
onmouseout 鼠标从某元素移开。
onmousemove 鼠标被移动。

```
oncontextmenu 鼠标右键
```

onreset 重置按钮被点击， 引发Form重置事件。
onresize 窗口（body）或框架被重新调整大小。
onsubmit 确认(提交)按钮被点击， 引发Form提交事件。
onunload （body）用户退出（刷新）页面。

###### offset属性

? element.**offsetHeight** 通过计算得到的某个元素的高（元素必须出现在页面上）
? element.**offsetWidth** 通过计算得到的某个元素的宽（元素必须出现在页面上）
? element.**offsetLeft** 返回元素的水平偏移位置(基于最近的有定位的父元素，如果没有，就是body)
? element.**offsetTop** 返回元素的垂直偏移位置。 (基于最近的有定位的父元素，如果没有，就是body)
? element.**offsetParent** 返回元素的偏移容器。 (最近的有定位的父元素)

###### 鼠标事件对象的属性

###### 坐标属性：

pageX / pageY  相对于整个文档顶部和左侧的坐标   常用

clientX / clientY  相对于局部窗口的左侧和顶部的坐标 

offsetX /offsetY  相对于内部元素的距离左侧和顶部的坐标 常用于拖拽

###### 键盘事件

keyUp: 用户释放某一个按键时发生

keyDown: 用户按下按键时发生

keyPress: 用户按下按键，并且产生一个字符时发生（意思就是说按ctrl这样的按键没有效果的）

 

keyCode: 获取键盘按键值   字母 对应其ASCII值识别   

A:65  a:97   0:48      回车:13  

【注意】:keyPress 的ctrl+回车返回值为10  

?    document.onkeypress = function(evt){

?        var e = evt || event;

?        if(e.keyCode == 13 || e.keyCode == 10 && e.ctrlKey){

?            alert("send");

?        }

?    }    

ctrlKey:返回当事件被触发时，"Ctrl" 是否被按下,返回值为true or false

 

【注意】:键盘检测兼容写方法

var key = e.keyCode || e.which || e.charCode;

# window 常用事件

//事件加载完后立即发生?
??? window.onload = function **onLoad**() {
??? ?alert("onload");
??? }
//用户退出页面时发生
??? window.onunload = function **onUnLoad**() {
??? ?alert("onunload");
??? }
//刷新或关闭时调用
??? window.onbeforeunload = function **onBeforeUnLoad**() {
??? ?alert("onbeforeunload")



###### **var oEvent=ev||event;** 

这一句这么写是要兼容各个浏览器，

在FireFox浏览器中，事件绑定的函数要获取到事件本身，需要从函数中传入，而IE等浏览器则可以直接使用event或者window.event得到事件本身。

这一句的用途：需要获取和事件相关的信息时使用。如：

1. 获取键盘按下或弹起的按键
2. 获取鼠标的位置坐标
3. 获取出发改事件的元素
4. 获取事件名称
5. 获取事件当前的传播阶段
6. 获取事件生成的日期时间

###### 任意一个中文字符

[\u4e00-\u9fa5]

###### 
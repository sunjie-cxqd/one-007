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

​    **setInterval**（执行任务，间隔时间）: 连续执行定时器  **clearInterval()**

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

​        console.log("页面加载完成");

​    }

​    console.log("页面正在加载");

###### location 地址对象 

 页面跳转：

href属性：代表当前网页地址

**location.href**  可读写

 

​    //当前页面地址 读

​    document.write(location.href);

​    //页面在三秒后跳到外网

​    setTimeout(function(){

​        location.href = "http://www.baidu.com";

​        },3000);

 

**location.replace**("url")

//location.replace("index.html");

location.replace("http://www.baidu.com");   覆盖原先网页 没有浏览痕迹

 

页面刷新：

**location.reload**();

 

<input type="text">

<button onclick="fun()">刷新</button>

​    function fun(){

​        location.reload();

​    }



###### history对象

包含用户(在浏览器窗3.history

口中)访问过的 URL。

 

方法 ：

**back**() 加载 history 列表中的前一个 URL。

**forward**() 加载 history 列表中的下一个 URL。

**go**() 加载 history 列表中的某个具体页面，或者要求浏览器移动到指定的页面数量（负数为后退，正数为前进）

 

案例：不同页面间的跳转

​        1.</br>

​        <a href="2.html">向后</a>

​        <button onclick="history.forward()">下一页</button></br>

​        <button onclick="history.go(1)">跳转</button></br>

​        2.</br>

​        <a href="3.html">向后</a></br>

​        <a href="1.html">向前</a></br>

​        <button onclick="history.forward()">下一页</button></br>

​        <button onclick="history.back()">上一页</button></br>

​        3.</br>

​        <a href="2.html">向前</a></br>

​        <button onclick="history.back()">上一页</button></br>



###### document 文档对象

  作用 找对象

每个载入浏览器的 HTML 文档都会成为 Document 对象。

Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问

Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问

 

document.write("<font color='red'>"+ 123 +"</font>"); write方法带解析功能

document.write() 向文档写 HTML 表达式 或 JavaScript 代码  注意：该方法在有事件的情况下会覆盖掉全页面

<button onclick="fun()">按钮</button>

function fun(){

​        document.write("下课啦");

}

 

**getElementById**() 返回对拥有指定 id 的第一个对象的引用。

**getElementsByName**() 返回带有指定名称的对象集合。

**getElementsByTagName**() 返回带有指定标签名的对象集合。

**getElementsByClassName**（） 通过类名返回

**querySelector**()  通过选择器返回

<!DOCTYPE html>

<html>

​    <head>

​        <meta charset="utf-8">

​        <title></title>

​    </head>

​    <body>

​        <input type="text" name="txt" value="123"/></br>

​        <input type="text" name="txt" value="456"/></br>

​        <input type="text" name="txt" value="777"/></br>

​        <input type="text" name="txt" value="888"/></br>

​    </body>

</html>

<script>

​    var a = document.getElementsByName("txt");

​    var str = " ";

​    for(var i=0; i<a.length; i++){

​        str += a[i].value;

​    }

​    document.write(str);

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

​        <p>你好!</p>

​        <ul>

​            <li>1</li>

​            <li>2</li>

​            <li>3</li>

​            <li>4</li>

​        </ul>

​    </body>

</html>

<script>

​    var a = document.getElementById("bd");

​    var str = a.firstChild.nextSibling.innerHTML;

​    document.write(str);

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

​    //元素类型     1

​    document.write(p.nodeType);

​    //文本类型

​    document.write(p.**firstChild**.nodeType);//3

​    //属性节点

​    document.write(p.**getAttributeNode**("id").nodeType);//2
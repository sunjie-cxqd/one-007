###### ����ĳ��÷�����

concat() �����������������飬�����ؽ���� 
join() �����������Ԫ�ط���һ���ַ�����Ԫ��ͨ��ָ���ķָ������зָ��� 
pop() ɾ����������������һ��Ԫ�� 
push() �������ĩβ���һ�������Ԫ�أ��������µĳ��ȡ� 
reverse() �ߵ�������Ԫ�ص�˳�� 
shift() ɾ������������ĵ�һ��Ԫ�� 
slice() ��ĳ�����е����鷵��ѡ����Ԫ�� 
sort() �������Ԫ�ؽ������� 
splice() ɾ��Ԫ�أ��������������Ԫ�ء� 
unshift() ������Ŀ�ͷ���һ�������Ԫ�أ��������µĳ��ȡ� 

###### ES5���������鷽����

indexOf���� �������в���һ�������ڵ�λ��
forEach���� �������ÿ��Ԫ����ĳ�����������ķ�ʽ��
map������ԭʼ�����ÿ��Ԫ�ؽ���ĳ�ִ���󣬲�����ӳ�䣩һ���µ�����
filter���� ���˵���˼�������������������Ԫ��

###### �ַ������÷�����

charAt() ������ָ��λ�õ��ַ��� 
charCodeAt() ������ָ����λ�õ��ַ��� Unicode ���롣 
concat() �����ַ����� 
fromCharCode() ���ַ����봴��һ���ַ����� 
indexOf() �����ַ����� 
match() �ҵ�һ������������ʽ��ƥ�䡣 
replace() �滻��������ʽƥ����Ӵ��� 
search() ������������ʽ��ƥ���ֵ�� 
slice() ��ȡ�ַ�����Ƭ�ϣ������µ��ַ����з��ر���ȡ�Ĳ��֡� 
split() ���ַ����ָ�Ϊ�ַ������顣 
substr() ����ʼ��������ȡ�ַ�����ָ����Ŀ���ַ��� 
substring() ��ȡ�ַ���������ָ����������֮����ַ���  
toLowerCase() ���ַ���ת��ΪСд�� 
toUpperCase() ���ַ���ת��Ϊ��д�� 

###### Math����ĳ��ú�����

Math.round(3.6) //�������� 
Math.random() //����0-1֮��������
Math.max(num1, num2) //���ؽϴ���� 
Math.min(num1, num2) //���ؽ�С���� 
Math.abs(num) //����ֵ 
Math.ceil(19.3) //����ȡ����20�� 
Math.floor(11.8) //����ȡ����11�� 
Math.pow(x,y) //x��y�η� 
Math.sqrt(num) //��ƽ��

###### ���ڶ���ĺ�����

###### ��ȡʱ�䣺

getDate() //������
getDay() //�������ڼ� ����0��ʼ
getHours() //����Сʱ��
getMinutes() //���ط�����
getMonth() //�����·�ֵ ����0��ʼ
getSeconds() //��������
getTime() //����������ʱ�� ��������
getFullYear() //�������

###### ����ʱ�䣺

setDate() //�ı�Date���������
setHours() //�ı�Сʱ��
setMinutes() //�ı������
setMonth() //�ı��·ݣ���0��ʼ
setSeconds() //�ı�����
setTime() //�ı�������ʱ�䣬������
setYear() //�ı����





###### �ڵ�Ĳ���

document.**createElement**(HTML��ǩ��)   //����һ��Ԫ�ؽڵ�

document.**createTextNode**(����)    //����һ���ı��ڵ�

node.**appendChild**(newChild)   //newChild ����ӵ������б��е�ĩ�ˡ�

node.**insertBefore**(newChild, referenceNode) // �� newChild �ڵ���뵽 referenceNode ֮ǰ��

node**.removeChild**(oldChild)   //ɾ�� oldChild�ӽڵ㡣

node.**replaceChild**(newChild, oldChild)  //��newChild�ڵ��滻oldChild�ڵ�

**window�����õ����Ժͷ�����**

###### ����������: �ص���������ִ��

**alert**("����")   ������

**confirm**("��ʾ��Ϣ")  ȷ�Ͽ�   ȷ������true ȡ������false

**prompt**("��ʾ��Ϣ","Ĭ��ֵ")    ����� ������ֵΪ�ַ���    

 

###### ������ʱ����

?    **setInterval**��ִ�����񣬼��ʱ�䣩: ����ִ�ж�ʱ��  **clearInterval()**

  **setTimeout**(ִ������,���ʱ��):  �÷�ͬ�� ִֻ��һ��  ��ʱ�� **clearTimeout()** ֹͣ��ʱ��(һ���õĲ�̫��)

###### һ���������ڷ���:

 **open**("·��","���ڵ�����û��ʲô����"��"�������ڵ����") : ����ֵ�ǵ������Ӵ���

�����Ҫ����:width height left top

�رմ��� **close()**

 

//���������д��Ӵ���

open("sub.html","heihei","width=200,height=200,left=200,top=200");

//�رյ�ǰ����

close();

###### һ���¼���

**onload**�¼�:onload �¼�����ҳ���ͼ�������ɺ�����������

window.onload = function(){

?        console.log("ҳ��������");

?    }

?    console.log("ҳ�����ڼ���");

###### location ��ַ���� 

 ҳ����ת��

href���ԣ�����ǰ��ҳ��ַ

**location.href**  �ɶ�д

 

?    //��ǰҳ���ַ ��

?    document.write(location.href);

?    //ҳ�����������������

?    setTimeout(function(){

?        location.href = "http://www.baidu.com";

?        },3000);

 

**location.replace**("url")

//location.replace("index.html");

location.replace("http://www.baidu.com");   ����ԭ����ҳ û������ۼ�

 

ҳ��ˢ�£�

**location.reload**();

 

<input type="text">

<button onclick="fun()">ˢ��</button>

?    function fun(){

?        location.reload();

?    }



###### history����

�����û�(���������3.history

����)���ʹ��� URL��

 

���� ��

**back**() ���� history �б��е�ǰһ�� URL��

**forward**() ���� history �б��е���һ�� URL��

**go**() ���� history �б��е�ĳ������ҳ�棬����Ҫ��������ƶ���ָ����ҳ������������Ϊ���ˣ�����Ϊǰ����

 

��������ͬҳ������ת

?        1.</br>

?        <a href="2.html">���</a>

?        <button onclick="history.forward()">��һҳ</button></br>

?        <button onclick="history.go(1)">��ת</button></br>

?        2.</br>

?        <a href="3.html">���</a></br>

?        <a href="1.html">��ǰ</a></br>

?        <button onclick="history.forward()">��һҳ</button></br>

?        <button onclick="history.back()">��һҳ</button></br>

?        3.</br>

?        <a href="2.html">��ǰ</a></br>

?        <button onclick="history.back()">��һҳ</button></br>



###### document �ĵ�����

? ���� �Ҷ���

ÿ������������� HTML �ĵ������Ϊ Document ����

Document ����ʹ���ǿ��Դӽű��ж� HTML ҳ���е�����Ԫ�ؽ��з���

Document ������ Window �����һ���֣���ͨ�� window.document ���Զ�����з���

 

document.write("<font color='red'>"+ 123 +"</font>"); write��������������

document.write() ���ĵ�д HTML ���ʽ �� JavaScript ����  ע�⣺�÷��������¼�������»Ḳ�ǵ�ȫҳ��

<button onclick="fun()">��ť</button>

function fun(){

?        document.write("�¿���");

}

 

**getElementById**() ���ض�ӵ��ָ�� id �ĵ�һ����������á�

**getElementsByName**() ���ش���ָ�����ƵĶ��󼯺ϡ�

**getElementsByTagName**() ���ش���ָ����ǩ���Ķ��󼯺ϡ�

**getElementsByClassName**���� ͨ����������

**querySelector**()  ͨ��ѡ��������

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







######  DOM�ڵ㡢

���ݲ�ι�ϵ���ʽڵ㣺 (�����ı���Ԫ��)

**parentNode** ���ؽڵ�ĸ��ڵ�

**childNodes** �����ӽڵ㼯�ϣ�childNodes[i]

**firstChild** ���ؽڵ�ĵ�һ���ӽڵ㣬���ձ���÷��Ƿ��ʸ�Ԫ�ص��ı��ڵ�

**lastChild**  ���ؽڵ�����һ���ӽڵ�

**nextSibling** ��һ���ڵ�

**previousSibling** ��һ���ڵ�

<body id="bd">

?        <p>���!</p>

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

 

ͨ���㼶��ϵ����Ԫ�ؽڵ�

**firstElementChild** ���ؽڵ�ĵ�һ���ӽڵ㣬���ձ���÷��Ƿ��ʸ�Ԫ�ص��ı��ڵ�

**lastElementChild** ���ؽڵ�����һ���ӽڵ�

**nextElementSibling** ��һ���ڵ�

**previousElementSibling** ��һ���ڵ�

var str = a.firstElementChild.innerHTML;

 

�ڵ����ͣ�

ͨ��**nodeType**�������жϽڵ�����

1����Ԫ�ؽڵ�

2�������Խڵ�

3�����ı��ڵ�

<p id = "_p">123</p>

var p = document.getElementById("_p");

?    //Ԫ������     1

?    document.write(p.nodeType);

?    //�ı�����

?    document.write(p.**firstChild**.nodeType);//3

?    //���Խڵ�

?    document.write(p.**getAttributeNode**("id").nodeType);//2

# this����ǰ����Ķ���

##### ����DOM0�¼�

**ע������DOM0�¼����С�on����Ϊ��ͷ**

onchange ������ݱ��ı䣨�����б�ѡ��ı䣩��
onclick ���û����ĳ������ʱ���õ��¼���
ondblclick ���û�˫��ĳ������ʱ���õ��¼���
onfocus Ԫ�ػ�ý��㡣
onblur Ԫ��ʧȥ���㡣
onkeydown ������ĳ�����������¡�
onkeyup ������ĳ���������ɿ���
onkeypress ������ĳ�����������²��ɿ���
onload һ��ҳ���һ��ͼ����ɼ��ء�
onmousedown ��갴ť�����¡�
onmouseup ��갴�����ɿ���
onmouseover ����Ƶ�ĳԪ��֮�ϡ�
onmouseout ����ĳԪ���ƿ���
onmousemove ��걻�ƶ���

```
oncontextmenu ����Ҽ�
```

onreset ���ð�ť������� ����Form�����¼���
onresize ���ڣ�body�����ܱ����µ�����С��
onsubmit ȷ��(�ύ)��ť������� ����Form�ύ�¼���
onunload ��body���û��˳���ˢ�£�ҳ�档

###### offset����

? element.**offsetHeight** ͨ������õ���ĳ��Ԫ�صĸߣ�Ԫ�ر��������ҳ���ϣ�
? element.**offsetWidth** ͨ������õ���ĳ��Ԫ�صĿ�Ԫ�ر��������ҳ���ϣ�
? element.**offsetLeft** ����Ԫ�ص�ˮƽƫ��λ��(����������ж�λ�ĸ�Ԫ�أ����û�У�����body)
? element.**offsetTop** ����Ԫ�صĴ�ֱƫ��λ�á� (����������ж�λ�ĸ�Ԫ�أ����û�У�����body)
? element.**offsetParent** ����Ԫ�ص�ƫ�������� (������ж�λ�ĸ�Ԫ��)

###### ����¼����������

###### �������ԣ�

pageX / pageY  ����������ĵ���������������   ����

clientX / clientY  ����ھֲ����ڵ����Ͷ��������� 

offsetX /offsetY  ������ڲ�Ԫ�صľ������Ͷ��������� ��������ק

###### �����¼�

keyUp: �û��ͷ�ĳһ������ʱ����

keyDown: �û����°���ʱ����

keyPress: �û����°��������Ҳ���һ���ַ�ʱ��������˼����˵��ctrl�����İ���û��Ч���ģ�

 

keyCode: ��ȡ���̰���ֵ   ��ĸ ��Ӧ��ASCIIֵʶ��   

A:65  a:97   0:48      �س�:13  

��ע�⡿:keyPress ��ctrl+�س�����ֵΪ10  

?    document.onkeypress = function(evt){

?        var e = evt || event;

?        if(e.keyCode == 13 || e.keyCode == 10 && e.ctrlKey){

?            alert("send");

?        }

?    }    

ctrlKey:���ص��¼�������ʱ��"Ctrl" �Ƿ񱻰���,����ֵΪtrue or false

 

��ע�⡿:���̼�����д����

var key = e.keyCode || e.which || e.charCode;

# window �����¼�

//�¼����������������?
??? window.onload = function **onLoad**() {
??? ?alert("onload");
??? }
//�û��˳�ҳ��ʱ����
??? window.onunload = function **onUnLoad**() {
??? ?alert("onunload");
??? }
//ˢ�»�ر�ʱ����
??? window.onbeforeunload = function **onBeforeUnLoad**() {
??? ?alert("onbeforeunload")



###### **var oEvent=ev||event;** 

��һ����ôд��Ҫ���ݸ����������

��FireFox������У��¼��󶨵ĺ���Ҫ��ȡ���¼�������Ҫ�Ӻ����д��룬��IE������������ֱ��ʹ��event����window.event�õ��¼�����

��һ�����;����Ҫ��ȡ���¼���ص���Ϣʱʹ�á��磺

1. ��ȡ���̰��»���İ���
2. ��ȡ����λ������
3. ��ȡ�������¼���Ԫ��
4. ��ȡ�¼�����
5. ��ȡ�¼���ǰ�Ĵ����׶�
6. ��ȡ�¼����ɵ�����ʱ��

###### ����һ�������ַ�

[\u4e00-\u9fa5]

###### 
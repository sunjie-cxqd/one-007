
简介：
flex是flex-grow,flex-shrink和flex-basis的缩写，flex属性值可以只指定一个属性的值，而另外的属性值采
用各自在flex属性中的的初始值，但是有一点要注意的是：flex属性中flex-grow和flex-basis的初始值和它们原始
的默认值不同，至于为什么不同，mdn中有明确的说过这样的设计是为了让「flex」缩写在最常见的情景下比较好用。



flex中对应各属性的初始值：

flex-grow
  flex-grow用于设置各item项按对应比例划分剩余空间，若flex中没有指定flex-grow,则相当于设置了
    flex-grow:1

flex-shrink
  flex-shrink用于设置item的总和超出容器空间时，各item的收缩比例，若flex中没有指定flex-shrink,
    则等同于设置了flex-shrink:1


flex-basis
  flex-basis用于设置各item项的伸缩基准值，可以取值为长度或百分比，如果flex中省略了该属性，则相当
    于设置了flex-basis:0.

flex的不同取值
  flex的值的完整写法是[<flex-grow> <flex-shrink> <flex-basis>],不过它的取值还有可能是单个数字
    或者单个百分比等，不同种类的取值所表示的意思是大有不同的。

flex值为none
  当flex为none时,等同于flex: 0 0 auto;

flex值为auto
  当flex为auto时，等同于flex: 1 1 auto;

flex值为一个非负数字
  当flex取值为一个数字，则该数字是设置的flex-grow值，其它两个属性用初始值，如flex:1时，
    等同于flex: 1 1 0%

flex值为两个非负数字
  当flex取值为2个数字时，相当于设置的flex-grow和flex-shrink值，flex-basis取值为初始值，
    如flex:1 0时，等同于flex: 1 0 0%

flex值为一个数字和一个长度或百分比时
  当flex取值为1个数字和1个长度或百分比时，设置的是flex-grow和flex-basis的值，flex-shrink值
    时初始值，如flex:1 20%,等同于flex: 1 1 20%


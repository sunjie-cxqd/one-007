### phpStudy

  进入 SQL编辑器

​    * 创建数据库：

​    * 打开某一个库 use db20170203;

​    * 创建表：

 

###### 创建数据库：

​    可视化：点击鼠标右键

​    代码： create database 数据库名

​    如： create database db20170203

 

###### 创建表：

create table Student

(

​       stuId int,

​       stuName varchar(20),

​       stuGender char(4),

​       stuAge int

)

 

sql语句：增删查改

create table Student

(

​       stuId int,

​       stuName varchar(20),

​       stuGender char(4),

​       stuAge int

)

###### --增

insert into 表名[字段1，字段2...字段N]

values(值1,值2,值N);

如：

insert into student(name, sex, age) values("孙丽华", "女", 21);

 

insert into Student

values(1,"大黄",666,18);

 

insert into Student

values(3,"小明",666,18);

 

insert into Student(stuId,stuName)

values(2,"laowang");

 

 

###### --删 

直接删除整个表的内容，但是表还在

delete from 表名

where 条件;

 

如：

*  delete from students; 删除表中的所有数据，

*  delete from students where id=2; //删除表中，id是2的数据。

*  delete from students where age<20;        

 

delete from Student;

--整个表都删掉

drop table Student;

 

--where 条件 类似于if

delete from Student

where stuName = "大黄"

 

--OR类似于 ||

delete from Student

where stuId = 1

OR stuName = "小明";

 

--AND类似于&&

delete from Student

Where stuName = "大黄"

AND stuid = 1;

 

 

###### --改

update 表明 set 字段1=值1，字段2=值2...

WHERE 更新条件;

update student

set stuName = "啦啦啦",stuId = 12323

where stuname = "嘿嘿";

 

###### --查

  select 列名称 from 表名称 [查询条件];

\* select name, age from students;

\* select * from students;

\* select * from students where age > 21 ;

\* select * from students where name like "%王%"; --模糊查询

\* select * from students where id<5 and age>20;      

 

如：

select stuAge,stuId,stuAge from Student;

select*from Student;

 
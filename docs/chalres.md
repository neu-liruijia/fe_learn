# chalres使用药店

[[toc]]
## rewrite
改写请求，例如可以改写请求参数，返回参数

1. body修改
操作步骤
```
1. type 选择body，response 打钩
2. match： \s表示空白字符， eg，"type":/s*/w* , 匹配所有 type:任意 请求
3. replcae：”type“:5

```
例子：  

![alt](https://www.testwo.com/attachments/15180/1571276574142.jpg)

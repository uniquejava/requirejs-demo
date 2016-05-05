define的最后一个参数是factory,所以要return something.

require的最后一个参数是callback没什么好说的.

在这个示例中 (假定==>表示依赖)
```
main ==> a,d
a ==> b
b ==> c
```
其中a,b,c没有使用AMD规范,都是全局的,d使用了AMD.

用法见js/main.js中的注释.

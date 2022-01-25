#### 1. 问题：浏览器对象获取报错  
```
ServerError : navigator | window | screen is not defined
```
###### 原因：next是先在服务端运行，再结合客户端的，在服务端直接使用window等浏览器对象，都是undefined
###### 解决：只在客户端中使用window navigator screen等浏览器对象实例，可以在useEffect包裹中的函数体中使用，不可直接在组件顶层使用


#### 2. 问题：在获取页面滚动高度的时候，document.body.scrollTop一直为 0
######  原因：页面html文档是DTD文档类型   即<!DOCTYPE html>...</html>  ; 访问document.doctype === <!DOCTYPE html>，访问body的滚动高度需要通过document.documentElement.scrollTop来访问，不是DTD直接通过document.body访问，ie和火狐也通过document.body访问
######  解决：let bodyEle = document.ducomentElemnt || document.body，==不能将document.body放前面==
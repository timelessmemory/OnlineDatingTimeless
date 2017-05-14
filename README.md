# 婚恋网站Timeless

本系统名为永恒网，是基于Java和AngularJS的婚恋网站。项目由Maven构建，在技术上主要使用了Angularjs和SpringMVC技术。系统整体开发主要包括前台页面的Web设计与后台管理。开发工具包括Eclipse、Sublime、Google浏览器、Postman等。系统主要包括前台Web以及后台管理，前台实现的功能包括登录、注册、查看成功案例、根据条件搜索、个人资料、头像上传、充值会员、相册、留言、人工红娘服务预约、个人设置等；后台主要实现对用户数据、相册数据以及留言数据的管理功能。
系统整体设计是前后端完全分离，前台使用Angularjs的路由机制进行页面跳转，Requirejs进行模块化开发，并且使用Grunt对JS及CSS文件进行压缩合并，后台提供Restful风格的纯API给前台使用，采用Log4j进行日志的记录，由SpringMVC进行请求映射，spring管理Dao，Service，Controller。另外，用户登录验证采用基于Token的认证方式，不使用传统的Session进行验证，这种方式增强了系统的安全性并且可以防止CSRF攻击。图片的管理也是交由第三方云平台“七牛”进行管理。

## 补充
### 评论模块暂未添加 已实现demo
### 即时聊天模块暂未添加 考虑使用websocket实现， 已实现demo
### 支付模块考虑接入三方，如微信，支付宝支付接口

## result
![](http://img.blog.csdn.net/20160615110859106?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

![](http://fmn.rrimg.com/fmn075/20160617/1505/original_i40Z_c3af0001b1381e80.jpg)

![](http://fmn.rrfmn.com/fmn079/20160617/1505/original_dlht_56440001bb531e83.jpg)

![](http://fmn.rrimg.com/fmn076/20160617/1505/original_ur7s_2c480001bb231e84.jpg)

![](http://fmn.xnpic.com/fmn071/20160617/1505/original_ed1Z_1bc10002520b1e7f.jpg)

![](http://fmn.rrfmn.com/fmn078/20160617/1505/original_Y6jC_54540001bb6c1e80.jpg)

![](http://fmn.rrimg.com/fmn076/20160617/1505/original_j6PU_56560001bb481e83.jpg)

![](http://fmn.rrimg.com/fmn074/20160617/1505/original_JZUs_2c660001bb571e84.jpg)
![](http://fmn.rrimg.com/fmn075/20160617/1505/original_T1qi_1b910002524a1e7f.jpg)
![](http://fmn.rrimg.com/fmn074/20160617/1505/original_tSno_0be50000f78e1e80.jpg)
![](http://fmn.rrimg.com/fmn075/20160617/1505/original_jC1B_56500001bb6f1e83.jpg)
![](http://fmn.rrfmn.com/fmn079/20160617/1505/original_dlht_2c010001baf01e84.jpg)
![](http://fmn.rrimg.com/fmn077/20160617/1505/original_ViUo_1bc7000252201e7f.jpg)

![](http://fmn.rrfmn.com/fmn079/20160617/1505/original_WsnS_54300001bb291e80.jpg)
![](http://fmn.rrimg.com/fmn077/20160617/1505/original_vYp9_560e0001bb3f1e83.jpg)
![](http://fmn.rrimg.com/fmn075/20160617/1505/original_T1qi_2c120001bad41e84.jpg)
![](http://fmn.rrimg.com/fmn077/20160617/1505/original_L053_05b90001b0031e7f.jpg)
![](http://fmn.xnpic.com/fmn072/20160617/1505/original_FqPz_54360001bb831e80.jpg)
![](http://fmn.rrfmn.com/fmn078/20160617/1505/original_dd5h_56140001bb661e83.jpg)
![](http://fmn.rrimg.com/fmn073/20160617/1505/original_vgYm_2c900001bb661e84.jpg)
![](http://fmn.rrimg.com/fmn075/20160617/1505/original_kiFa_1bfd000252261e7f.jpg)



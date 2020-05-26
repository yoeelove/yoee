exports.ids=[9],exports.modules={100:function(n,e,t){n.exports=t.p+"img/52550fa.svg"},101:function(n,e,t){"use strict";t.r(e);var v=t(42),r=t.n(v);for(var l in v)"default"!==l&&function(n){t.d(e,n,(function(){return v[n]}))}(l);e.default=r.a},102:function(n,e,t){(e=t(2)(!1)).push([n.i,"*[data-v-26045ea0]{margin:1rem 0}.content[data-v-26045ea0]{overflow:scroll}h1[data-v-26045ea0],h2[data-v-26045ea0],h3[data-v-26045ea0],h4[data-v-26045ea0],h5[data-v-26045ea0],h6[data-v-26045ea0]{margin:.2rem .6rem 0 1.6rem;font-size:1.8rem}h2[data-v-26045ea0]{margin-left:0}h4[data-v-26045ea0]{text-indent:2rem}.txt-color-deeppink[data-v-26045ea0]{color:#ff1493}.code[data-v-26045ea0]{text-indent:2rem;margin:1rem 0;overflow-x:auto;padding:1rem 1rem 1rem 1.5rem;background-color:#eee;border-left:.4rem solid red}.code[data-v-26045ea0],img[data-v-26045ea0]{display:block;max-width:35rem}img[data-v-26045ea0]{overflow-x:auto;overflow:scroll}.shell[data-v-26045ea0],p[data-v-26045ea0],span[data-v-26045ea0]{max-width:35rem}.shell[data-v-26045ea0]{background-color:#222;color:green;line-height:3.5rem;padding:1rem 3.5rem;overflow-x:auto}h4[data-v-26045ea0],img[data-v-26045ea0]{width:35rem}h4[data-v-26045ea0]{margin-left:0;height:3rem;line-height:3rem;background-color:#ff7b00;color:#f0f8ff}",""]),n.exports=e},194:function(n,e,t){"use strict";t.r(e);var v={data:()=>({})},r=t(1);var component=Object(r.a)(v,(function(){var n=this,e=n.$createElement,v=n._self._c||e;return v("b-container",{staticClass:"bv-example-row content",attrs:{fluid:""}},[v("b-row",[v("b-col",{attrs:{sm:"0",md:"2",lg:"2",xl:"4"}}),n._v(" "),v("b-col",{attrs:{sm:"12",md:"8",lg:"7",xl:"5"}},[v("h2",[n._v("Nginx基础、安装、配置")]),n._v(" "),v("hr"),n._v(" "),v("br"),n._v(" "),v("p",[n._v("nginx: "),v("a",{attrs:{href:"http://nginx.org/en/"}},[n._v("http://nginx.org/en/")])]),n._v(" "),v("p",{staticClass:"code"},[n._v("\n        Nginx是一个开源且高性能、可靠的HTTP Web服务、代理服务。\n        Nginx 可以作为一个 HTTP 服务器进行网站的发布处理，另外 Nginx 可以作为反向代理进行负载均衡的实现。\n        开源: 直接获取源代码\n        高性能: 支持海量并发\n        可靠: 服务稳定\n      ")]),n._v(" "),v("p",{staticClass:"txt-color-deeppink"},[n._v("反(正)向代理 负载均衡 动静分离...")]),n._v(" "),v("i",[n._v("nginx优点")]),n._v(" "),v("ol",[v("li",[n._v("\n          高并发。静态小文件\n        ")]),n._v(" "),v("li",[n._v("\n          占用资源少。2万并发、10个线程，内存消耗几百M。\n        ")]),n._v(" "),v("li",[n._v("\n          功能种类比较多。web,cache,proxy。每一个功能都不是特别强。\n        ")]),n._v(" "),v("li",[n._v("\n          支持epoll模型，使得nginx可以支持高并发。\n        ")]),n._v(" "),v("li",[n._v("\n          nginx 配合动态服务和Apache有区别。（FASTCGI 接口）\n        ")]),n._v(" "),v("li",[n._v("\n          利用nginx可以对IP限速，可以限制连接数。\n        ")]),n._v(" "),v("li",[n._v("\n          配置简单，更灵活。\n        ")]),n._v(" "),v("li",[n._v("\n          ...\n        ")])]),n._v(" "),v("i",[n._v("\n        nginx特性\n      ")]),n._v(" "),v("ol",[v("li",[n._v("\n          基于异步IO模型，（epoll，kqueue），性能强，能够支持上万并发。\n        ")]),n._v(" "),v("li",[n._v("\n          对小文件支持很好，性能很高（限静态小文件1M）。\n        ")]),n._v(" "),v("li",[n._v("\n          代码优美，扩展库必须编译进主程序。\n        ")]),n._v(" "),v("li",[n._v("\n          消耗代码资源比较低。\n        ")]),n._v(" "),v("li",[n._v("\n          ...\n        ")])]),n._v(" "),v("h4",[n._v("\n        nginx安装\n      ")]),n._v(" "),v("p",{staticClass:"shell"},[n._v("$  yum -y install nginx")]),n._v(" "),v("h4",[n._v("检查版本")]),n._v(" "),v("div",{staticClass:"shell"},[n._v("\n        $  nginx -v\n      "),v("br"),n._v(" \n       nginx version: nginx/1.14.1\n      ")]),n._v(" "),v("p",{staticClass:"code"},[n._v("\n        1.CoreModule 核心模块\n        2.EventModule 事件驱动模块\n        3.HttpCoreModule http内核模块\n      ")]),n._v(" "),v("img",{attrs:{src:t(100)}}),n._v(" "),v("h4",[n._v("\n        nginx常用命令\n      ")]),n._v(" "),v("p",{staticClass:"shell"},[n._v("\n        terminal:\n        "),v("br"),n._v("\n         nginx -v   //查看版本\n        "),v("br"),n._v("\n         nginx    //启动nginx\n        "),v("br"),n._v("\n         pkll -9 nginx    //按名杀死nginx进程\n        "),v("br"),n._v("\n         nginx -t     //查看nginx当前状态\n        "),v("br"),n._v("\n         nginx -s start     //启动nginx\n        "),v("br"),n._v("\n         nginx -s stop    //停止nginx\n        "),v("br"),n._v("\n         nginx -s reload    //重新启动nginx\n      ")]),n._v(" "),v("b-col",{attrs:{sm:"0",md:"2",lg:"2",xl:"3"}}),n._v(" "),v("br")],1)],1)],1)}),[],!1,(function(n){var e=t(101);e.__inject__&&e.__inject__(n)}),"26045ea0","c01d19b8");e.default=component.exports},42:function(n,e,t){var content=t(102);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);var v=t(3).default;n.exports.__inject__=function(n){v("4d009e56",content,!0,n)}}};
# Vue Cli

## 1. 脚手架的安装

​		全局安装即可

```
npm install -g @vue/cli
```

​		查看脚手架版本

```
vue --version
```

## 2. 快速原型开发

​		你可以使用 `vue serve` 和 `vue build` 命令对单个 `*.vue` 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：

```bash
npm install -g @vue/cli-service-global
```

​		`vue serve` 的缺点就是它需要安装全局依赖，这使得它在不同机器上的一致性不能得到保证。因此这只适用于快速原型开发。



## 3. 创建一个项目

​		在命令行运行以下指令

```
vue create hello-world
```

然后进行一系列配置![CLI 预览](https://cli.vuejs.org/cli-new-project.png)	![CLI 预览](https://cli.vuejs.org/cli-select-features.png)

## 4. 使用图形化界面

你也可以通过 `vue ui` 命令以图形化界面创建和管理项目：

```bash
vue ui
```

里面可以看插件，依赖，配置等等

![](/assets/run_vueui.png)



![CLI 预览](/assets/vueui.png)





## 5. 运行一个项目

​		通过命令`npm run serve`即可运行项目

![](/assets/npm_run_serve.png)

![](/assets/serve_done.png)





## 6. vue-router

### 6.1 vue-router的安装

​			在终端运行命令`npm install vue router`即可安装

![](./assets/router_install.png)



### 6.2 vue-router的使用

  1. #### 在项目中创建router文件夹，在文件夹下面创建index.js

     ![](./assets/router_use1.png)

     

  2. #### 在index.js中使用vue-router插件，具体代码如下：

     

     ```js
     import VueRouter from 'vue-router'
     import Vue from 'vue'
     
     // 通过Vue.use()使用插件
     Vue.use(VueRouter);
     
     // 创建router实例
     const routes = [];
     const router = new VueRouter({
         routes:routes
     })
     
     // 通过export导出
     export default router
     ```

  3. #### 在main.js中导入router

     ![](./assets/vue_use2.png)

     

  4. #### 配置映射

     

     a. 先创建两个组件

![](./assets/router_use3.png)

​				b. 在index.js中配置路由映射

![](./assets/router_use4.png)

​				c. 将路由写到App.vue中

![](./assets/router_use5.jpg)

   5. #### 效果展示

![](./assets/router_use6.png)

![](./assets/router_use7.png)



### 6.3 router-link 属性补充

属性1：to									  作用：url的转换

属性2：tag									作用：把router—link标签渲染成其他标签

属性3：replace							 作用：无法返回上一级

属性4：active-class					作用：点击的时候增加active的class







## 7. Promise

```javascript
    new Promise((resolve,reject)=>{
       setTimeout(()=>{
        //  resolve('Look! this is promise');
        //  reject('Request Failed!!!!')
       },1000)
    }).then( res => {
      console.log(res);
      console.log(res);
      console.log(res);
      console.log(res);
      console.log(res);
    }).catch( err =>{
      console.log(err);
      console.log(err);
      console.log(err);
      console.log(err);
    })
```

​		使用方法如上述代码。

​		具体逻辑如下：

​		首先new了一个promise对象，生成promise实例。promise的构造函数接受一个参数作为参数，该函数的两个参数分别是`resolve`和`reject`。

​		`resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；当调用`reslove`函数的时候，会运行`.then`后面的代码，

​		 `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。当调用`reject`函数的时候，会运行`.catch`后面的代码，


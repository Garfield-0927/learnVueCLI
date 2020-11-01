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
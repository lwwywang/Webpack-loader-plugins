# 项目名称

这是一个使用 Webpack 配置的项目，支持 Markdown 文件和 CSS 文件的加载。

# 安装

首先，克隆仓库并安装依赖：

```
git clone https://github.com/lwwywang/Webpack-loader-plugins.git
cd your-repo
npm install
```

# 使用
## Webpack 配置
项目的 Webpack 配置文件位于webpack.config.js中

## 自定义 Markdown Loader
项目中包含一个自定义的 Markdown Loader，配置位于markdown-loader.js中。

我们创建了一个自定义的 Markdown Loader，用于将 Markdown 文件转换为 HTML。这个 Loader 使用了 markdown-it 库来解析和渲染 Markdown 内容，并且通过 schema-utils 库来验证用户传递的参数是否正确。

主要功能
1. 获取参数： 使用 loader-utils 的 getOptions 方法获取用户传递的参数。

2. 校验参数： 使用 schema-utils 库来校验用户传递的参数是否符合预期的格式。参数的校验规则定义在 schema 对象中。

3. Markdown-it 配置： 根据用户传递的参数配置 markdown-it 实例。

4. 渲染 Markdown： 使用配置好的 markdown-it 实例将 Markdown 内容渲染为 HTML。



# 运行项目
使用以下命令来构建和运行项目：
```
npm run build
npm start
```

# 贡献
欢迎提交问题和请求功能。如果你想贡献代码，请 fork 这个仓库并提交 pull request。

# 许可证
此项目使用 MIT 许可证。


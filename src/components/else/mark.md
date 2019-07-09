#vue的seo优化
##方案1
###nuxt.js构建，按照nuxt的相关方式进行整个项目的服务端渲染。适合整个项目较多页面需要进行优化，vue官方推荐
##方案2
###使用prerender-spa-plugin预渲染。可以选择某个或者某几个重点页面进行预渲染。由于使用prerender需要下载puppeteer。连带下载>>Puppeteer 至少需要 Node v6.4.0，如要使用 async / await，只有 Node v7.6.0 或更高版本才支持。 node下载地址： https://nodejs.org/zh-cn/>>是因为在执行安装的过程中需要执行install.js，这里会下载Chromium,官网建议是进行跳过，我们可以执行 —ignore-scripts 忽略这个js执行。也可以通过设置环境变量set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1阻止下载 Chromium （因为封网，直接下载会失败） npm下载很容易下载失败，使用cnpm下载。 如果使用vue-cli脚手架搭建应用。在webpack-prod-conf.js中如下配置
`const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// plugins插件里书写
plugins: [
   new PrerenderSPAPlugin({
      // 生成文件的路径，这个目录只能有一级。若目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动
      staticDir: path.join(__dirname, '../dist'),
      // 对应自己的路由文件
      routes: [ '/', '/moviesDetail'],
      // 若没有这段则不会进行预编译
      renderer: new Renderer({
        inject: {
          foo: 'bar'
        },
        headless: false,
        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
        renderAfterDocumentEvent: 'render-event'
      })
    }),
]`

###安装完配置成功即可。成功实现
##方案3
###ssr单页面后台渲染方案
##方案4
###phantomJs
##方案5
###seo-mask
##方案6
###利用爬虫蜘蛛特性，给与其想要的东西，以此实现seo
**************************
**************************
**************************
#react相关seo优化方案

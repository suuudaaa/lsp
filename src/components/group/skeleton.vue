<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    skeleton() {
      const checker = selector => {
        if (DEAD_OBVIOUS.has(selector)) {
          return true;
        }
        if (/:-(ms|moz)/.test(selector)) {
          return true;
        }
        if (/:{1,2}(before|after)/.test(selector)) {
          return true;
        }
        try {
          const keep = !!document.querySelector(selector);
          return keep;
        } catch (err) {
          const exception = err.toString();
          return false;
        }
      };
    },
    webpack(){
      SkeletonPlugin.prototype.apply = function (compiler){
        compile.plugin('after-emit', async (compilation, done) => {
          try {
            await outputSkeletonScreen(this,originalHtml, this.options, this.server.log.info)
          }catch(err){
            this.server.log.warn(err.toString())
          }
          done()
        })
      };
      //文件打包
      const outputSkeletonScreen = async (originHtml, options, log) => {
        const { pathname, staticDir, routes} = options
        return Promise.all(routes.map(async (route) => {
          const trimedRoute = route.replace(/\//g,'')
          const filePath = path.join(pathname,trimedRoute ? `${trimedRoute}.html`:`index.html`)
          const html = await promisify(fs.readFile)(filePath,'utf8')
          const finalHtml = originHtml.replace('<!--shell-->',html)
          const outputDir = path.join(staticDir,route)
          const outputFile = path.join(outputDir,'index.html')
          await fse.ensureDir(outputDir)
          await promisfy(fs.writwFile)(outputFile,finalHtml,'utf-8')
          log(`write ${outputFile} successfully in ${route}`)
          return Promise.resolve()
        }))
      }
      //npm 工具代码
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')
      const path = require('path')
      const webpackConfig = {
        entry: 'index.js',
        output: {
          path: __dirname + '/dist',
          filename: 'index.bundle.js'
        },
        plugin: [
          new HtmlWebpackPlugin({
            // Your HtmlWebpackPlugin config
          }),
          new SkeletonPlugin({
              pathname: path.resolve(__dirname, `${customPath}`), // the path to store shell file
              staticDir: path.resolve(__dirname, './dist'), // the same as the `output.path`
              routes: ['/', '/search'], // Which routes you want to generate skeleton screen
          })
        ]
      }
      //简单爬虫代码
      const superagent =require( 'superagent'),log = require('../logger')
      moddule.exports = (url) =>{
        return new Promise((resolve,reject)=>{
          if(url){
            superagent
            .get(url)
            .end((err,res)=>{
              if(err){
                log.error(err)
                return reject(err)
              }
              resolve(res.text)
            })
          }else{
            reject(new Error('url不能为空'))
          }
        })
      }

      const cheerio = require('cheerio')
        ,log = require('../logger')
        ,getPage = require('../lib/getPage')
      
      class Modles {
        constructor () {
          this.baseUrl = 'https://juejin.im'
          this.list = []
        }
        getTitleInfo (page) {
          return new Promise(async(resolve,reject)=>{
            var $ = cheerio.load(page)
            var elems = Array.prototype.slice.call($('a'))
            resolve()
          })
        }
      }
    },

  }
};
</script>
<style>
</style>



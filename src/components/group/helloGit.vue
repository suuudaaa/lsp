<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    helleFunction() {
      const puppeteer = require("puppeteer");
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://example.com");
        await page.screenshot({ path: "example.png" });
        await browser.close();
      })();
    },
    aboutMvvm() {
      //完整代码
      function Observer(data) {
        this.data = data;
        this.walk(data);
      }
      Observer.prototype = {
        walk:function (data){
          var me = this;
          Object.keys(data).forEach(function(key){
            me.convert(key,data[key])
          })
        },
        convert:function (key,val){
          this.defineReactive(this.data,key,val);

        },
        defineProperty:function (data,key,val){
          var dep = new Dep();
          var childObj = observe(val);
          Object.defineProperty(data,key,{
            enumerable:true,
            configurable:false,
            get:function(){
              if(Dep.target){
                dep.depend();
              }
              return val;
            },
            set:function(newVal){
              if(val === newVal)return;
              val = newVal;
              childObj = observe(newVal)
              dep.notify()
            }
          })
        }
      }
      function observe (value,vm){
        if(!value || typeof value !== 'object'){
          return;
        }
        return new Observer(value)
      }
      var uid = 0;
      function Dep (){
        this.id = uid++;
        this.subs = [];
      }
      Dep.prototype = {
        addSub: function (sub){
          this.subs.push(sub);
        },
        depend:function(){
          Dep.target.addDep(this);
        },
        removeSub: function(sub){
          var index = this.subs.indexOf(sub);
          if(index != -1){
            this.subs.splice(index,1)
          }
        },
        notify:function(){
          this.subs.forEach(function(sub){
            sub.update();
          });
        }
      }
      Dep.target = null;

      //compile
      function Compile(el){
        this.$el = this.isElementNode(el) ? el :document.querySelector(el);
        if(this.$el){
          this.$fragment = this.node2Fragment(this.$el);
          this.init();
          this.$el.appendChild(this.$fragment)
        }
      }

      Compile.prototype = {
        init:function(){
          this.compileElement(this.$fragment)
        },
        node2Fragment:function(el){
          var fragment = document.createDocumentFragment(),child;
          while (child = el.firstChild){
            fragment.appendChild(child)
          }
          return fragment;
        }
      }
    },
    compiling(){
      function Compile(el,vm){
        this.$vm = this.isElementNode(el) ? el :document.querySelector(el)
        if(this.$el){
          this.$fragment = this.node2Fragment(this.$el);
          this.init();
          this.$el.appendChild(this.$fragment);
        }
      }
      Compile.prototype = {
        node2Fragment:function(el){
          var fragment = document.createDocumentFragment(),child;
          while ((child = el.firstChild)){
            fragment.appendChild(child)
          }
          return fragment;
        },
        init:function(){
          this.compileElement(this.$fragment)
        },
        compileElement:function(el){
          var childNodes = el.childNodes, me = this;
          [].slice.call(childNodes).forEach(function(node){
            var text = node.textContent;
            var reg = /\{\{(.*)\}\}/;
            if(me.isElementNode(node)){
              me.compile(node);
            }else if (me.isTextNode(node) && reg.test(text)){
              me.compileText(node, RegExp.$1.trim());
            }
            if(node.childNodes && node.childNodes.length){
              me.compileElement(node)
            }
          })
        },
        compileText:function(node,exp){
          compileUtil.text(node,this.$vm.exp)
        },
        isDirective:function(attr){
          return attr.indexOf('v-') == 0;
        },
        idEventDirective:function(dir){
          return dir.indexOf('on') == 0;
        },
        isElementNode:function(node){
          return node.nodeType == 1;
        },
        isTextNode:function (node){
          return node.nodeType == 3;
        }
      }
    }

  }
};
</script>
<style>
</style>



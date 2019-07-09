import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Coma from '../components/coma'
import Comc from '../components/comc'
import Comd from '../components/comd'
import G1 from '../components/group/g1'
import Home from '../components/Home'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:Coma
    },
    {
      path:'/comc',
      name:'comc',
      component:Comc
    },
    {
      path:'/comd',
      name:'comd',
      component:Comd
    },
    {
      path:'/g1',
      name:'g1',
      component:G1,
      beforeEnter:(to,from,next)=>{
        console.log('beforeEnter')
        console.log('to:',to)
        console.log('from:',from)
        next()
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  console.log('beforeEach')
  console.log(to);
  console.log(from)
  console.log(next)
  next()

})
router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve')
  console.log(to)
  console.log(from)
  console.log(next)
  next()
})

router.afterEach((to,from)=>{
  console.log('afterEach')
  console.log(to)
  console.log(from)
})

export default router;
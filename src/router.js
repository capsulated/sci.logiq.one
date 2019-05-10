import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Publication1 from './views/Publication1.vue'
import Abstract from './views/Abstract.vue'
import Chapter1 from './views/Chapter1.vue'
import Chapter2 from './views/Chapter2.vue'
import Chapter3 from './views/Chapter3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/publication1',
      name: 'publication1',
      component: Publication1
    },
    {
      path: '/abstract',
      name: 'abstract',
      component: Abstract
    },
    {
      path: '/chapter1',
      name: 'chapter1',
      component: Chapter1
    },
    {
      path: '/chapter2',
      name: 'chapter2',
      component: Chapter2
    },
    {
      path: '/chapter3',
      name: 'chapter3',
      component: Chapter3
    }
  ]
  // mode: 'history'
})

import Router from 'vue-router'
import Application from '@/components/Application'
import Lists from '@/components/views/Lists'
import List from '@/components/views/List'

export default new Router({
  routes: [
    {
      path: '/',
      component: Application,
      children: [
        {
          path: '',
          name: 'Lists',
          component: Lists
        },
        {
          path: 'list/:id',
          name: 'List',
          component: List
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'

// Mock router components
const routerView = {
  name: 'router-view',
  render: h => h('div')
}

const routerLink = {
  name: 'router-link',
  render: h => h('div')
}

Vue.use(VueMaterial)
Vue.use(Vuex)
Vue.component('router-view', routerView)
Vue.component('router-link', routerLink)

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)

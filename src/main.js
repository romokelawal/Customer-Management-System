// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">vCustomers</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Customer</router-link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')

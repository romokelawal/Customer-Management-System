import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetails from '@/components/CustomerDetails'
import Edit from '@/components/Edit'

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'customers',
      component: Customers
    },
    {
    	path: '/about',
    	name: 'about',
    	component: About
    },
    {
    	path: '/add',
    	name: 'add',
    	component: Add
    },
    {
    	path: '/customer/:id',
    	name: 'customerdetails',
    	component: CustomerDetails
    },
    {
    	path: '/edit/:id',
    	name: 'edit',
    	component: Edit
    }
  ]
})

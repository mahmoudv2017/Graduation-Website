import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Offers from '@/components/offers'
import Log_in from '@/components/LogIn'
import SignUp from '@/components/SignUp'
import Info from '@/components/info'
import Editor from '@/components/editor'
import Contacts from '@/components/Contacts'
import About from '@/components/About'
import adder from '@/components/adder'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home //change it back to home
    },
    {
      path: '/about',
      name: 'About',
      component: About //change it back to home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts //change it back to home
    },
    {
      path: '/offers',
      name: 'Offers',
      component: Offers
    },
    {
      path: '/adder',
      name: 'adder',
      component: adder
    },
    {
      path: '/login',
      name: 'LogIn',
      component: Log_in
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Info/:info_slug',
      name: 'Info',
      component: Info
    },
    {
      path: '/editor/:info_slug',
      name: 'Editor',
      component: Editor
    }
  
  ]
})

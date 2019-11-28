import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Favorite from '../components/Favorite'
import Account from '../components/Account'
import Skills from '../components/Skills'
import QuestionForm from "../components/QuestionForm";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/QuestionForm',
      name: 'QuestionForm',
      component: QuestionForm
    }
  ]
})

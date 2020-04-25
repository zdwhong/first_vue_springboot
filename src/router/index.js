import Vue from 'vue'
import VueRouter from 'vue-router'
import Employee from "../views/Employee";
import Department from "../views/Department";
import Index from "../views/Index";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: '员工管理',
      component: Index,
      redirect: '/employee',
      children: [
        {
          path: '/employee',
          name: '员工列表',
          component: Employee
        }
      ]
    },
    {
      path: '/dept',
      name: '部门管理',
      component: Index,
      redirect: '/department',
      children: [
        {
          path: '/department',
          name: '部门列表',
          component: Department
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

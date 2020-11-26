import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from "@/components/Login";
import Home from "@/components/Home"
import ProblemList from "@/components/ProblemList";
import Status from "@/components/Status";
import Problem from "@/components/Problem";
import Submit from "@/components/Submit";


Vue.use(Router)


    const routes=[
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{
                title:'注册'
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{
                title:'登录'
            }
        },
        {
            path:'/',
            name:'home',
            component:Home,
            meta:{
                title:'主页'
            },
            children:[{
                path:'/problemList',component:ProblemList
            },{
                 path:'/status',component:Status
            },{
                path:'/problemList/problem',
                component: Problem
            },{
                path:'/problemList/submit',
                component: Submit
            }]

        }

    ]

const router=new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

export default router